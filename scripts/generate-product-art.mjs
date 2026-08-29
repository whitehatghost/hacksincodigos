/**
 * Genera las imágenes de la tienda.
 *
 * Las originales eran mockups sueltos hechos con IA: cada uno con su estilo, su
 * perspectiva y su paleta, de modo que la cuadrícula parecía un collage. Estas
 * son un sistema: mismo fondo, misma retícula, mismo trazo, y un color de acento
 * por categoría tomado de la paleta del sitio. Puestas una al lado de otra se
 * leen como una familia.
 *
 * Cada pieza es SVG compuesto acá y rasterizado con sharp, así que no dependen
 * de ningún banco de imágenes ni de licencias de terceros.
 *
 *   node scripts/generate-product-art.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'images', 'productos');
fs.mkdirSync(OUT, { recursive: true });

const S = 800; // lienzo base

/** Acento por categoría, de la paleta del sitio. */
const ACCENT = {
  'paginas-web': '#00ff88',
  mantenimiento: '#00bfff',
  software: '#06b6d4',
  presencia: '#a855f7',
  contenido: '#f59e0b',
};

/** Fondo común: degradado, retícula fina y un halo del color de acento. */
function backdrop(accent) {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#080a0f"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="42%" r="52%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.20"/>
        <stop offset="70%" stop-color="${accent}" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="${accent}" stroke-opacity="0.055" stroke-width="1"/>
      </pattern>
      <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"/>
        <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${S}" height="${S}" fill="url(#bg)"/>
    <rect width="${S}" height="${S}" fill="url(#grid)"/>
    <rect width="${S}" height="${S}" fill="url(#glow)"/>
    <rect width="${S}" height="${S}" fill="url(#sweep)"/>
    <rect x="1.5" y="1.5" width="${S - 3}" height="${S - 3}" rx="26" fill="none"
          stroke="${accent}" stroke-opacity="0.22" stroke-width="3"/>
    <path d="M40 26 H26 V40" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round"/>
    <path d="M${S - 40} 26 H${S - 26} V40" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 ${S - 26} H26 V${S - 40}" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round"/>
    <path d="M${S - 40} ${S - 26} H${S - 26} V${S - 40}" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round"/>`;
}

/** Envuelve un glifo de 24×24 y lo centra escalado en el lienzo. */
function glyph(inner, accent, scale = 13.5) {
  const size = 24 * scale;
  const off = (S - size) / 2;
  // Trazo fino: a esta escala un stroke-width alto convierte el dibujo en manchas.
  return `<g transform="translate(${off} ${off - 26}) scale(${scale})"
             color="${accent}" fill="none" stroke="${accent}" stroke-width="0.8"
             stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
}

/** Cinta inferior con el nombre corto de la categoría. */
function ribbon(label, accent) {
  return `
    <text x="${S / 2}" y="${S - 62}" text-anchor="middle"
          font-family="Consolas, 'JetBrains Mono', monospace" font-size="26"
          letter-spacing="6" fill="${accent}" fill-opacity="0.85">${label}</text>`;
}

/** Cuadrícula de n bloques, para los paquetes de imágenes. */
function tiles(n) {
  const cols = n <= 1 ? 1 : n <= 4 ? 2 : n <= 10 ? 4 : 5;
  const rows = Math.ceil(n / cols);
  const gap = 0.9;
  const w = (18 - gap * (cols - 1)) / cols;
  const h = Math.min(w, (14 - gap * (rows - 1)) / rows);
  let out = '';
  for (let i = 0; i < n; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const x = 3 + c * (w + gap);
    const y = 5 + r * (h + gap);
    out += `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${w.toFixed(2)}" height="${h.toFixed(2)}" rx="${(w * 0.12).toFixed(2)}" stroke-opacity="${i === 0 ? 1 : 0.55}"/>`;
  }
  return out;
}

/** Botón de reproducción con un arco proporcional a la duración del video. */
function play(seconds, max = 60) {
  const frac = Math.min(seconds / max, 1);
  const r = 8.5;
  const cx = 12, cy = 12;
  const a = -Math.PI / 2 + frac * Math.PI * 2;
  const x = cx + r * Math.cos(a);
  const y = cy + r * Math.sin(a);
  const large = frac > 0.5 ? 1 : 0;
  const arc = frac >= 1
    ? `<circle cx="${cx}" cy="${cy}" r="${r}"/>`
    : `<path d="M${cx} ${cy - r} A${r} ${r} 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)}"/>`;
  return `
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke-opacity="0.2"/>
    ${arc}
    <path d="M10.4 8.6 L16 12 L10.4 15.4 Z" stroke-linejoin="round"/>`;
}

const BROWSER = `
  <rect x="2.5" y="4" width="19" height="15" rx="1.8"/>
  <path d="M2.5 8.2 H21.5"/>
  <circle cx="5" cy="6.1" r="0.42" fill="${'currentColor'}" stroke="none" fill-opacity="0.75"/>
  <circle cx="6.9" cy="6.1" r="0.42" fill="${'currentColor'}" stroke="none" fill-opacity="0.55"/>
  <circle cx="8.8" cy="6.1" r="0.42" fill="${'currentColor'}" stroke="none" fill-opacity="0.35"/>`;

const SHIELD = `<path d="M12 3 L20 6.2 V11.4 C20 16.2 16.6 19.8 12 21.2 C7.4 19.8 4 16.2 4 11.4 V6.2 Z"/>`;

/** Un glifo por servicio. */
const ART = {
  'pagina-web-profesional-sin-carrito-de-compras': {
    label: 'SITIO WEB',
    glyph: `${BROWSER}
      <path d="M5.2 11 H12" stroke-opacity="0.75"/>
      <path d="M5.2 13.4 H15.6" stroke-opacity="0.5"/>
      <path d="M5.2 15.8 H10.4" stroke-opacity="0.5"/>
      <rect x="15.2" y="14.4" width="4" height="2.6" rx="1.3"/>`,
  },
  'pagina-web-tienda-online-con-carrito': {
    label: 'E-COMMERCE',
    glyph: `${BROWSER}
      <path d="M5.4 11.6 H7 L8.5 16.4 H15.4 L16.8 12.4 H7.6" />
      <circle cx="9.4" cy="18.2" r="0.85"/>
      <circle cx="14.6" cy="18.2" r="0.85"/>`,
  },
  'software-a-la-medida-pymes': {
    label: 'SOFTWARE A MEDIDA',
    glyph: `
      <rect x="2.6" y="4.2" width="18.8" height="15.6" rx="2"/>
      <path d="M2.6 8.4 H21.4" stroke-opacity="0.5"/>
      <path d="M8.2 11.6 L6 13.8 L8.2 16"/>
      <path d="M15.8 11.6 L18 13.8 L15.8 16"/>
      <path d="M13.2 11 L10.8 16.6" stroke-opacity="0.7"/>`,
  },
  'crm-empresarial': {
    label: 'CRM',
    glyph: `
      <circle cx="12" cy="7.6" r="2.6"/>
      <path d="M7.4 15.4 c0-2.5 2.1-4 4.6-4 s4.6 1.5 4.6 4"/>
      <circle cx="4.8" cy="16.4" r="1.9" stroke-opacity="0.6"/>
      <circle cx="19.2" cy="16.4" r="1.9" stroke-opacity="0.6"/>
      <path d="M2.4 21 c0-1.7 1.1-2.7 2.4-2.7 s2.4 1 2.4 2.7" stroke-opacity="0.6"/>
      <path d="M16.8 21 c0-1.7 1.1-2.7 2.4-2.7 s2.4 1 2.4 2.7" stroke-opacity="0.6"/>`,
  },
  'aplicaciones-moviles-y-web': {
    label: 'APPS',
    glyph: `
      <rect x="7.6" y="2.6" width="8.8" height="18.8" rx="2.2"/>
      <path d="M10.6 5 H13.4" stroke-opacity="0.6"/>
      <circle cx="12" cy="18.6" r="0.9" stroke-opacity="0.7"/>
      <rect x="9.6" y="7.6" width="2.1" height="2.1" rx="0.5" stroke-opacity="0.85"/>
      <rect x="12.6" y="7.6" width="2.1" height="2.1" rx="0.5" stroke-opacity="0.6"/>
      <rect x="9.6" y="10.8" width="2.1" height="2.1" rx="0.5" stroke-opacity="0.6"/>
      <rect x="12.6" y="10.8" width="2.1" height="2.1" rx="0.5" stroke-opacity="0.4"/>`,
  },
  'mantenimiento-web-basico-mensual': {
    label: 'MANTENIMIENTO',
    glyph: `${SHIELD}<path d="M9 11.8 L11.3 14 L15.3 9.8"/>`,
  },
  'mantenimiento-web-pro-mensual': {
    label: 'MANTENIMIENTO PRO',
    glyph: `${SHIELD}
      <path d="M8.6 11.4 L11.2 14 L15.6 9.4"/>
      <path d="M12 3 V21.2" stroke-opacity="0.28"/>`,
  },
  'mantenimiento-web-corporativo-mensual': {
    label: 'CORPORATIVO',
    glyph: `${SHIELD}
      <path d="M8.4 10.4 H15.6" stroke-opacity="0.85"/>
      <path d="M8.4 13 H15.6" stroke-opacity="0.6"/>
      <path d="M8.4 15.6 H13" stroke-opacity="0.4"/>`,
  },
  'correo-empresarial-con-dominio': {
    label: 'CORREO',
    glyph: `
      <rect x="2.6" y="5.6" width="18.8" height="13.2" rx="2"/>
      <path d="M2.6 7.4 L12 13.6 L21.4 7.4"/>
      <path d="M6.4 16.4 H10" stroke-opacity="0.45"/>`,
  },
  'menu-qr-interactivo': {
    label: 'MENU QR',
    glyph: `
      <rect x="3.4" y="3.4" width="7" height="7" rx="1.4"/>
      <rect x="13.6" y="3.4" width="7" height="7" rx="1.4"/>
      <rect x="3.4" y="13.6" width="7" height="7" rx="1.4"/>
      <rect x="6.1" y="6.1" width="1.6" height="1.6"/>
      <rect x="16.3" y="6.1" width="1.6" height="1.6"/>
      <rect x="6.1" y="16.3" width="1.6" height="1.6"/>
      <path d="M13.6 13.6 H16.2 V16.2" stroke-opacity="0.8"/>
      <path d="M18.6 15 V18.6 H15" stroke-opacity="0.55"/>
      <rect x="19.2" y="19.2" width="1.5" height="1.5" stroke-opacity="0.8"/>`,
  },
  'tarjeta-de-presentacion-digital-para-eventos-con-qr': {
    label: 'TARJETA DIGITAL',
    glyph: `
      <rect x="2.4" y="6" width="19.2" height="12.6" rx="2"/>
      <rect x="5" y="9" width="5.4" height="5.4" rx="0.9" stroke-opacity="0.85"/>
      <path d="M6.4 10.4 H7.6 M8.6 12.6 H9.6 M6.4 13.4 H7.4" stroke-opacity="0.6"/>
      <path d="M13.2 9.8 H19" stroke-opacity="0.8"/>
      <path d="M13.2 12.2 H19" stroke-opacity="0.5"/>
      <path d="M13.2 14.6 H16.6" stroke-opacity="0.5"/>`,
  },
  'tarjetas-de-presentacion': {
    label: 'TARJETAS',
    glyph: `
      <rect x="4.6" y="4.4" width="16.4" height="10.6" rx="1.8" stroke-opacity="0.4"/>
      <rect x="2.6" y="8.2" width="16.4" height="10.6" rx="1.8"/>
      <path d="M5.4 12.2 H10.2" stroke-opacity="0.85"/>
      <path d="M5.4 14.6 H14.4" stroke-opacity="0.5"/>
      <circle cx="15.6" cy="13" r="2.1" stroke-opacity="0.7"/>`,
  },
  'invitaciones-para-eventos': {
    label: 'INVITACIONES',
    glyph: `
      <rect x="2.6" y="5.4" width="18.8" height="13.4" rx="2"/>
      <path d="M2.6 5.4 L12 12.6 L21.4 5.4" stroke-opacity="0.55"/>
      <path d="M12 16.8 c-1.5-1.4-2.7-2.3-2.7-3.6 0-1 .8-1.7 1.7-1.7 .6 0 1 .3 1 .3s.4-.3 1-.3c.9 0 1.7 .7 1.7 1.7 0 1.3-1.2 2.2-2.7 3.6 Z"/>`,
  },
  'firma-para-correo-electronico': {
    label: 'FIRMA',
    glyph: `
      <rect x="2.6" y="6.4" width="18.8" height="11.6" rx="2" stroke-opacity="0.45"/>
      <path d="M5.8 14.2 c1.8 0 2.2-4 3.4-4 .9 0 .9 2.6 1.9 2.6 1.3 0 1.6-3.4 2.8-3.4 1 0 1.1 4.8 2.3 4.8 .8 0 1.2-1.2 2-1.2"/>
      <path d="M5.8 16.4 H18.2" stroke-opacity="0.35"/>`,
  },
  'paquete-profesional-15-imagenes': { label: '20 IMAGENES', glyph: tiles(20) },
  'paquete-emprendedor-10-imagenes': { label: '10 IMAGENES', glyph: tiles(10) },
  'paquete-esencial-4-imagenes': { label: '4 IMAGENES', glyph: tiles(4) },
  'imagen-publicitaria-unica': {
    label: 'IMAGEN',
    glyph: `
      <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2"/>
      <circle cx="8.6" cy="9.6" r="1.5"/>
      <path d="M3.9 16.6 L9.4 11.6 L13.4 15.2 L16.6 12.6 L20.1 15.8" stroke-opacity="0.8"/>`,
  },
  'video-publicitario-1-minuto': { label: '60 SEGUNDOS', glyph: play(60) },
  'video-publicitario-30-35-segundos': { label: '30 SEGUNDOS', glyph: play(30) },
  'videos-3-productos': { label: '15 SEGUNDOS', glyph: play(15) },
  'guia-pro-proteccion-total-de-instagram-y-facebook-2026': {
    label: 'GUIA',
    glyph: `${SHIELD}<path d="M9.4 10.6 H14.6 M9.4 13 H14.6 M9.4 15.4 H12.6" stroke-opacity="0.75"/>`,
  },
};

// La categoría de cada servicio se lee de shop.ts para no repetirla acá.
const shopSrc = fs.readFileSync(path.join(ROOT, 'src', 'data', 'shop.ts'), 'utf8');
const categoryOf = Object.fromEntries(
  [...shopSrc.matchAll(/slug:\s*'([^']+)',\s*category:\s*'([^']+)'/g)].map((m) => [m[1], m[2]])
);

let done = 0;
const sinCategoria = [];

for (const [slug, art] of Object.entries(ART)) {
  const cat = categoryOf[slug];
  if (!cat) { sinCategoria.push(slug); continue; }
  const accent = ACCENT[cat] ?? ACCENT['paginas-web'];

  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
       ${backdrop(accent)}
       ${glyph(art.glyph, accent)}
       ${ribbon(art.label, accent)}
     </svg>`
  );

  await sharp(svg).webp({ quality: 90 }).toFile(path.join(OUT, `${slug}.webp`));
  await sharp(svg).resize(400, 400).webp({ quality: 88 }).toFile(path.join(OUT, `${slug}-400.webp`));
  done++;
}

console.log(`${done} imágenes generadas en public/images/productos/`);
if (sinCategoria.length) console.error('Sin categoría en shop.ts:', sinCategoria.join(', '));

const faltan = Object.keys(categoryOf).filter((s) => !ART[s]);
if (faltan.length) console.error('Sin ilustración definida:', faltan.join(', '));
