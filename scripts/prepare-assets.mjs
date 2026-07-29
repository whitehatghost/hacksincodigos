/**
 * Procesa los assets originales de WordPress hacia `public/`.
 *
 * Entrada:  _migracion/mirror/wp-content/uploads/**  (copia del sitio en producción)
 * Salida:   public/images/**  en WebP optimizado + PNG para iconos
 *
 * Se ejecuta a mano cuando cambian los assets de origen:  node scripts/prepare-assets.mjs
 * El resultado se versiona en git, así que la build de Cloudflare no lo necesita.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.slice(1)), '..');
const SRC = path.join(ROOT, '_migracion', 'mirror', 'wp-content', 'uploads');
const OUT_IMG = path.join(ROOT, 'public', 'images');
const OUT_PROD = path.join(OUT_IMG, 'productos');

if (!fs.existsSync(SRC)) {
  console.error(`No se encontró el mirror en ${SRC}. Ejecutá primero el crawl de migración.`);
  process.exit(1);
}

fs.mkdirSync(OUT_PROD, { recursive: true });

/** Busca un archivo por nombre dentro del árbol de uploads. */
function find(name) {
  const stack = [SRC];
  while (stack.length) {
    const dir = stack.pop();
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) stack.push(full);
      else if (e.name === name) return full;
    }
  }
  return null;
}

const products = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'products.json'), 'utf8'));

let done = 0;
const missing = [];

// ── Imágenes de producto: WebP 800 y 400 ──────────────────────────────────────
for (const p of products) {
  if (!p.image) { missing.push(p.slug); continue; }
  const file = find(decodeURIComponent(p.image.split('/').pop()));
  if (!file) { missing.push(p.slug); continue; }

  await sharp(file).resize(800, 800, { fit: 'cover' }).webp({ quality: 82 })
    .toFile(path.join(OUT_PROD, `${p.slug}.webp`));
  await sharp(file).resize(400, 400, { fit: 'cover' }).webp({ quality: 80 })
    .toFile(path.join(OUT_PROD, `${p.slug}-400.webp`));
  done++;
}

// ── Logo e iconos ─────────────────────────────────────────────────────────────
const square = find('cropped-cicada-logo.png');
const wide = find('cropped-cicada-logo-1.png');

if (square) {
  for (const size of [32, 180, 192, 512]) {
    await sharp(square).resize(size, size, { fit: 'contain', background: { r: 10, g: 10, b: 15, alpha: 1 } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT_IMG, `logo-${size}.png`));
  }
  // favicon.ico: PNG de 32px sirve para navegadores modernos; se deja también .ico
  await sharp(square).resize(32, 32, { fit: 'contain', background: { r: 10, g: 10, b: 15, alpha: 1 } })
    .png().toFile(path.join(ROOT, 'public', 'favicon.ico'));
}

if (wide) {
  await sharp(wide).resize(860, null, { withoutEnlargement: true }).webp({ quality: 88 })
    .toFile(path.join(OUT_IMG, 'logo-hacksincodigos.webp'));
  await sharp(wide).resize(860, null, { withoutEnlargement: true }).png({ compressionLevel: 9 })
    .toFile(path.join(OUT_IMG, 'logo-hacksincodigos.png'));
}

// ── Imagen Open Graph (el sitio actual apunta a /og-image.jpg y devuelve 404) ──
if (wide) {
  const logo = await sharp(wide).resize(620, null, { withoutEnlargement: true }).toBuffer();
  const meta = await sharp(logo).metadata();
  const svg = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#0a0a0f"/>
           <stop offset="100%" stop-color="#0d1117"/>
         </linearGradient>
       </defs>
       <rect width="1200" height="630" fill="url(#g)"/>
       <rect x="0" y="0" width="1200" height="4" fill="#00ff88"/>
       <text x="600" y="470" text-anchor="middle" fill="#e2e8f0"
             font-family="Segoe UI, Arial, sans-serif" font-size="38" font-weight="700">
         Páginas web, agentes IA y ciberseguridad
       </text>
       <text x="600" y="522" text-anchor="middle" fill="#00ff88"
             font-family="Consolas, monospace" font-size="26" letter-spacing="3">
         COSTA RICA · hacksincodigos.com
       </text>
     </svg>`
  );
  await sharp(svg)
    .composite([{ input: logo, top: Math.round(190 - (meta.height ?? 0) / 2), left: Math.round(600 - 310) }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_IMG, 'og-hacksincodigos.png'));
}

console.log(`Imágenes de producto procesadas: ${done}/${products.length}`);
if (missing.length) console.log(`Sin imagen encontrada: ${missing.join(', ')}`);
console.log('Logo, iconos y Open Graph generados en public/images/');
