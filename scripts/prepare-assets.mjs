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
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
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
//
// El logo original viene con el fondo negro incrustado en el PNG. Sobre el sitio
// (#0a0a0f) eso deja un rectángulo negro visible, y en el favicon el conjunto
// completo —candado más dos líneas de texto— es ilegible a 32 px.
//
// Acá se hacen dos cosas: volver transparente el fondo oscuro, y separar la marca
// (el candado) del logotipo completo, para usar cada una donde corresponde.

const wide = find('cropped-cicada-logo-1.png');

/** Vuelve transparente todo píxel oscuro, conservando el rojo y el blanco del logo. */
async function transparentBackground(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = new Uint8ClampedArray(data);
  for (let i = 0; i < px.length; i += info.channels) {
    const [r, g, b] = [px[i], px[i + 1], px[i + 2]];
    // Un píxel de fondo es oscuro en los tres canales. El rojo de marca tiene
    // R alto y el texto es blanco, así que ninguno entra en este umbral.
    if (r < 60 && g < 60 && b < 60) px[i + 3] = 0;
  }
  return sharp(Buffer.from(px), { raw: { width: info.width, height: info.height, channels: info.channels } })
    .png()
    .toBuffer();
}

/**
 * Encuentra dónde termina el candado y empieza el texto: la primera franja ancha
 * de columnas totalmente transparentes. Así no hay que adivinar un recorte fijo.
 */
async function findMarkWidth(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const colEmpty = [];
  for (let x = 0; x < info.width; x++) {
    let empty = true;
    for (let y = 0; y < info.height; y++) {
      if (data[(y * info.width + x) * info.channels + 3] > 8) { empty = false; break; }
    }
    colEmpty.push(empty);
  }
  const minGap = Math.round(info.width * 0.02);
  let run = 0;
  for (let x = 0; x < colEmpty.length; x++) {
    if (colEmpty[x]) {
      run++;
      if (run >= minGap && x > info.width * 0.1) return x - run;
    } else run = 0;
  }
  return Math.round(info.width * 0.3);
}

if (wide) {
  const transparent = await transparentBackground(wide);
  const lockup = await sharp(transparent).trim({ threshold: 1 }).toBuffer();

  // Logotipo completo — navbar y pie de página.
  for (const [name, fmt] of [['logo-hacksincodigos.png', 'png'], ['logo-hacksincodigos.webp', 'webp']]) {
    await sharp(lockup)
      .resize(860, null, { withoutEnlargement: true })
      [fmt](fmt === 'webp' ? { quality: 92 } : { compressionLevel: 9 })
      .toFile(path.join(OUT_IMG, name));
  }

  // Marca sola — favicon e iconos de aplicación, donde el texto no se leería.
  const markW = await findMarkWidth(lockup);
  const meta = await sharp(lockup).metadata();
  const mark = await sharp(lockup)
    .extract({ left: 0, top: 0, width: markW, height: meta.height })
    .trim({ threshold: 1 })
    .toBuffer();
  await sharp(mark).png({ compressionLevel: 9 }).toFile(path.join(OUT_IMG, 'logo-marca.png'));

  const markMeta = await sharp(mark).metadata();
  const side = Math.max(markMeta.width, markMeta.height);
  const padded = await sharp({
    create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toBuffer();

  // Iconos de aplicación: la marca centrada, con un margen del 9 % y el fondo del
  // sitio aplanado en todo el cuadrado (no solo en el borde).
  for (const size of [32, 180, 192, 512]) {
    const inner = Math.round(size * 0.82);
    const glyph = await sharp(padded)
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();
    await sharp({
      create: { width: size, height: size, channels: 4, background: { r: 10, g: 10, b: 15, alpha: 1 } },
    })
      .composite([{ input: glyph, gravity: 'center' }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT_IMG, `logo-${size}.png`));
  }
  await sharp(path.join(OUT_IMG, 'logo-32.png')).toFile(path.join(ROOT, 'public', 'favicon.ico'));
}

// ── Imagen Open Graph (el sitio actual apunta a /og-image.jpg y devuelve 404) ──
if (wide) {
  const logo = await sharp(path.join(OUT_IMG, 'logo-hacksincodigos.png'))
    .resize(620, null, { withoutEnlargement: true })
    .toBuffer();
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
