/**
 * QA automático sobre `dist/` después de cada build.
 *
 * Falla la build si encuentra algo que rompería el sitio en producción:
 * enlaces internos a páginas que no existen, imágenes ausentes, metadatos
 * faltantes o duplicados, o JSON-LD inválido.
 *
 * Se ejecuta solo mediante `npm run build` (hook postbuild).
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.slice(1)), '..');
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST)) {
  console.error('No existe dist/. Ejecutá `npm run build` primero.');
  process.exit(1);
}

const errors = [];
const warnings = [];

/** Recorre dist/ y devuelve todos los archivos que coincidan con la extensión. */
function walk(dir, ext, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, ext, acc);
    else if (!ext || e.name.endsWith(ext)) acc.push(full);
  }
  return acc;
}

const htmlFiles = walk(DIST, '.html');
const allFiles = new Set(walk(DIST).map((f) => '/' + path.relative(DIST, f).split(path.sep).join('/')));

/** Convierte una ruta de dist a la URL pública con la que se sirve. */
function toUrl(file) {
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/');
  return rel.replace(/index\.html$/, '').replace(/\.html$/, '/');
}

/** ¿Existe esta ruta en el sitio construido? */
function resolves(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return allFiles.has('/index.html');
  if (allFiles.has(clean)) return true;
  const withIndex = clean.endsWith('/') ? clean + 'index.html' : clean + '/index.html';
  if (allFiles.has(withIndex)) return true;
  return allFiles.has(clean + '.html');
}

const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles) {
  const url = toUrl(file);
  const html = fs.readFileSync(file, 'utf8');
  const is404 = url === '/404/' || url === '/404.html';

  // ── Metadatos obligatorios ────────────────────────────────────────────────
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const h1s = html.match(/<h1[\s>]/g) || [];

  if (!title) errors.push(`${url} — sin <title>`);
  if (!desc) errors.push(`${url} — sin meta description`);
  if (!canonical) errors.push(`${url} — sin canonical`);
  if (h1s.length === 0) errors.push(`${url} — sin <h1>`);
  if (h1s.length > 1) errors.push(`${url} — tiene ${h1s.length} <h1> (debe haber exactamente uno)`);
  if (title && title.length > 70) warnings.push(`${url} — title de ${title.length} caracteres (>70, Google lo corta)`);
  if (desc && (desc.length < 70 || desc.length > 165)) {
    warnings.push(`${url} — meta description de ${desc.length} caracteres (ideal 70–165)`);
  }

  if (!is404) {
    if (title) {
      if (titles.has(title)) errors.push(`title duplicado entre ${titles.get(title)} y ${url}`);
      else titles.set(title, url);
    }
    if (desc) {
      if (descriptions.has(desc)) errors.push(`meta description duplicada entre ${descriptions.get(desc)} y ${url}`);
      else descriptions.set(desc, url);
    }
  }

  // ── Idioma ────────────────────────────────────────────────────────────────
  if (!/<html[^>]+lang="es-CR"/.test(html)) errors.push(`${url} — el <html> no declara lang="es-CR"`);

  // ── Enlaces internos ──────────────────────────────────────────────────────
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    if (!resolves(href)) errors.push(`${url} — enlace interno roto: ${href}`);
  }

  // ── Imágenes ──────────────────────────────────────────────────────────────
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const src = (tag.match(/src="([^"]+)"/) || [])[1];
    if (src && src.startsWith('/') && !allFiles.has(src.split('?')[0])) {
      errors.push(`${url} — imagen inexistente: ${src}`);
    }
    if (!/\balt=/.test(tag)) errors.push(`${url} — <img> sin atributo alt: ${src ?? tag.slice(0, 60)}`);
  }

  // ── JSON-LD ───────────────────────────────────────────────────────────────
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${url} — JSON-LD inválido: ${e.message}`);
    }
  }

  // ── Nada de restos de WordPress ───────────────────────────────────────────
  if (/wp-content|wp-includes|elementor-|ast-header/.test(html)) {
    warnings.push(`${url} — quedan referencias a WordPress en el HTML`);
  }
}

// ── Archivos que Cloudflare necesita ────────────────────────────────────────
for (const required of ['/robots.txt', '/_headers', '/_redirects', '/sitemap-index.xml', '/favicon.ico', '/site.webmanifest']) {
  if (!allFiles.has(required)) errors.push(`falta ${required} en dist/`);
}

// ── Ningún secreto en la salida ─────────────────────────────────────────────
const SECRET = /(?:api[_-]?key|secret|password|token)\s*[:=]\s*["'][A-Za-z0-9_\-]{16,}["']/i;
for (const file of walk(DIST)) {
  if (!/\.(html|js|json|css|xml|txt)$/.test(file)) continue;
  const body = fs.readFileSync(file, 'utf8');
  if (SECRET.test(body)) errors.push(`posible secreto en ${path.relative(DIST, file)}`);
}

// ── Reporte ─────────────────────────────────────────────────────────────────
console.log(`\nQA de build — ${htmlFiles.length} páginas revisadas`);
if (warnings.length) {
  console.log(`\n  ${warnings.length} aviso(s):`);
  for (const w of warnings) console.log(`   · ${w}`);
}
if (errors.length) {
  console.error(`\n  ${errors.length} error(es):`);
  for (const e of errors) console.error(`   ✗ ${e}`);
  console.error('\nBuild rechazada.\n');
  process.exit(1);
}
console.log('\n  Sin errores. Build lista para desplegar.\n');
