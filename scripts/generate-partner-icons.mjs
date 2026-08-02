/**
 * Extrae los trazos SVG de las marcas usadas en la sección "Tecnologías" desde el
 * paquete `simple-icons`, y los deja en `src/data/partner-icons.json`.
 *
 * Por qué así y no descargando los logos de cada sitio:
 *  - No dependemos de que un CDN ajeno siga sirviendo el archivo dentro de un año.
 *  - No hay peticiones a terceros al cargar la página.
 *  - Los trazos de simple-icons están bajo CC0. Las marcas siguen siendo de sus
 *    dueños y se usan solo para identificar la herramienta, que es uso nominativo.
 *
 * Se ejecuta a mano cuando se agrega o quita una marca:
 *   node scripts/generate-partner-icons.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as si from 'simple-icons';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data', 'partner-icons.json');

/** Marcas que sí existen en simple-icons. El resto se dibuja como wordmark. */
const SLUGS = [
  'namecheap',
  'godaddy',
  'wix',
  'wordpress',
  'woocommerce',
  'elementor',
  'cloudflare',
  'netlify',
  'render',
  'github',
  'mongodb',
  'zoho',
  'n8n',
  'claude',
  'meta',
  'whatsapp',
  'instagram',
];

const icons = {};
const missing = [];

for (const slug of SLUGS) {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) {
    missing.push(slug);
    continue;
  }
  icons[slug] = {
    title: icon.title,
    hex: '#' + icon.hex,
    path: icon.path,
  };
}

if (missing.length) {
  console.error('No están en simple-icons:', missing.join(', '));
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(icons, null, 2) + '\n');

const bytes = fs.statSync(OUT).size;
console.log(`${Object.keys(icons).length} iconos -> src/data/partner-icons.json (${(bytes / 1024).toFixed(1)} kB)`);
for (const [slug, i] of Object.entries(icons)) {
  console.log(`  ${slug.padEnd(14)} ${i.title.padEnd(14)} ${i.hex}`);
}
