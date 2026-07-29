/**
 * Descarga las tipografías del sitio desde Google Fonts y las deja autoalojadas
 * en `public/fonts/`, más el @font-face en `src/styles/fonts.css`.
 *
 * Motivo: el sitio en WordPress las pedía a fonts.googleapis.com + fonts.gstatic.com,
 * dos orígenes extra en la ruta crítica de render. Autoalojadas se sirven desde el
 * mismo dominio (Cloudflare, HTTP/2, cache inmutable) y desaparece el FOUT por DNS.
 *
 * Se ejecuta a mano:  node scripts/fetch-fonts.mjs
 * El resultado se versiona en git.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'fonts');
fs.mkdirSync(OUT, { recursive: true });

// UA moderno -> Google devuelve woff2 con unicode-range por subconjunto.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

/** Familias y pesos realmente usados por el CSS del sitio. */
const FAMILIES = [
  { css: 'Space+Grotesk:wght@400;500;600;700', slug: 'space-grotesk' },
  { css: 'Inter:wght@400;500', slug: 'inter' },
  { css: 'JetBrains+Mono:wght@400;500', slug: 'jetbrains-mono' },
];

/** Solo subconjuntos que el español y la UI necesitan. */
const KEEP_SUBSETS = new Set(['latin', 'latin-ext']);

const faces = [];

for (const fam of FAMILIES) {
  const url = `https://fonts.googleapis.com/css2?family=${fam.css}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Google Fonts respondió ${res.status} para ${fam.slug}`);
  const css = await res.text();

  // Cada bloque viene precedido por un comentario con el nombre del subconjunto.
  const blocks = css.split('/* ').slice(1);
  for (const block of blocks) {
    const subset = block.slice(0, block.indexOf(' */')).trim();
    if (!KEEP_SUBSETS.has(subset)) continue;

    const weight = (block.match(/font-weight:\s*(\d+)/) || [])[1];
    const style = (block.match(/font-style:\s*(\w+)/) || [])[1] || 'normal';
    const family = (block.match(/font-family:\s*'([^']+)'/) || [])[1];
    const src = (block.match(/url\((https:\/\/[^)]+\.woff2)\)/) || [])[1];
    const range = (block.match(/unicode-range:\s*([^;]+);/) || [])[1];
    if (!src || !weight || !family) continue;

    const name = `${fam.slug}-${weight}${subset === 'latin-ext' ? '-ext' : ''}.woff2`;
    const buf = Buffer.from(await (await fetch(src, { headers: { 'User-Agent': UA } })).arrayBuffer());
    fs.writeFileSync(path.join(OUT, name), buf);

    faces.push({ family, weight, style, name, range: range?.trim(), bytes: buf.length });
  }
}

const css = `/* ==========================================================================
   Tipografías autoalojadas. Generado por scripts/fetch-fonts.mjs — no editar a mano.
   Fuente: Google Fonts (SIL Open Font License 1.1).
   ========================================================================== */

${faces
  .map(
    (f) => `@font-face {
  font-family: '${f.family}';
  font-style: ${f.style};
  font-weight: ${f.weight};
  font-display: swap;
  src: url('/fonts/${f.name}') format('woff2');${f.range ? `\n  unicode-range: ${f.range};` : ''}
}`
  )
  .join('\n\n')}
`;

fs.writeFileSync(path.join(ROOT, 'src', 'styles', 'fonts.css'), css);

const total = faces.reduce((a, f) => a + f.bytes, 0);
console.log(`${faces.length} archivos woff2 (${(total / 1024).toFixed(1)} kB) en public/fonts/`);
for (const f of faces) console.log(`  ${f.name.padEnd(30)} ${f.family} ${f.weight} ${(f.bytes / 1024).toFixed(1)} kB`);
