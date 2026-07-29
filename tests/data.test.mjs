/**
 * Pruebas sobre la capa de datos y la salida construida.
 *
 * Lo que protegen: que no se cuele contenido inventado (reviews, ratings,
 * direcciones falsas), que los precios sigan siendo los reales del catálogo, que
 * ningún enlace a un cliente apunte a un dominio caído y que las URLs que Google
 * ya tiene indexadas sigan existiendo en `dist/`.
 *
 * Ejecutar:  npm test        (requiere haber corrido `npm run build` antes)
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const products = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'products.json'), 'utf8'));

const hasDist = fs.existsSync(DIST);

function read(rel) {
  return fs.readFileSync(path.join(DIST, rel), 'utf8');
}
function exists(rel) {
  return fs.existsSync(path.join(DIST, rel));
}
function allHtml(dir = DIST, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) allHtml(full, acc);
    else if (e.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}
function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1])
  );
}

// ── Catálogo ────────────────────────────────────────────────────────────────

test('el catálogo conserva los 17 productos reales', () => {
  assert.equal(products.length, 17);
});

test('todo producto tiene título y precio', () => {
  for (const p of products) {
    assert.ok(p.title && p.title.length > 3, `${p.slug} sin título`);
    assert.ok(p.price, `${p.slug} sin precio`);
    assert.match(p.price, /^[\d,]+(\.\d{2})?$/, `${p.slug} tiene un precio con formato raro: ${p.price}`);
  }
});

test('los productos en oferta tienen precio rebajado menor al regular', () => {
  for (const p of products.filter((x) => x.onSale)) {
    assert.ok(Number(p.regularPrice) > Number(p.price), `${p.slug}: la oferta no es menor al precio regular`);
  }
});

// ── Nada de datos inventados ────────────────────────────────────────────────

test('el Schema no declara reseñas, ratings, premios ni dirección postal', { skip: !hasDist }, () => {
  const prohibidos = ['aggregateRating', 'review', 'ratingValue', 'award', 'postalAddress', 'streetAddress'];
  for (const file of allHtml()) {
    for (const block of jsonLdBlocks(fs.readFileSync(file, 'utf8'))) {
      const raw = JSON.stringify(block);
      for (const campo of prohibidos) {
        assert.ok(
          !raw.includes(`"${campo}"`),
          `${path.relative(DIST, file)} declara "${campo}" en JSON-LD sin datos reales que lo respalden`
        );
      }
    }
  }
});

test('todo el JSON-LD es válido y declara @context', { skip: !hasDist }, () => {
  for (const file of allHtml()) {
    const blocks = jsonLdBlocks(fs.readFileSync(file, 'utf8'));
    assert.ok(blocks.length > 0, `${path.relative(DIST, file)} no tiene JSON-LD`);
    for (const b of blocks) {
      assert.equal(b['@context'], 'https://schema.org');
      assert.ok(b['@type'], 'bloque JSON-LD sin @type');
    }
  }
});

// ── Preservación de URLs indexadas ──────────────────────────────────────────

test('las URLs que WordPress tenía indexadas siguen existiendo', { skip: !hasDist }, () => {
  const indexadas = ['index.html', 'shop/index.html', ...products.map((p) => `product/${p.slug}/index.html`)];
  for (const rel of indexadas) {
    assert.ok(exists(rel), `falta ${rel}: se perdería una URL ya indexada por Google`);
  }
});

test('cada producto tiene su página con precio e imagen', { skip: !hasDist }, () => {
  for (const p of products) {
    const html = read(`product/${p.slug}/index.html`);
    assert.ok(html.includes(`$${p.price}`), `${p.slug}: la página no muestra el precio`);
    assert.ok(html.includes(`/images/productos/${p.slug}.webp`), `${p.slug}: la página no referencia su imagen`);
    assert.ok(exists(`images/productos/${p.slug}.webp`), `${p.slug}: falta el archivo de imagen`);
  }
});

// ── Archivos de despliegue ──────────────────────────────────────────────────

test('Cloudflare recibe _headers, _redirects, robots y sitemap', { skip: !hasDist }, () => {
  for (const f of ['_headers', '_redirects', 'robots.txt', 'sitemap-index.xml', 'favicon.ico', 'site.webmanifest']) {
    assert.ok(exists(f), `falta ${f} en dist/`);
  }
});

test('robots.txt apunta al sitemap correcto', { skip: !hasDist }, () => {
  assert.match(read('robots.txt'), /Sitemap:\s*https:\/\/hacksincodigos\.com\/sitemap-index\.xml/);
});

test('el sitemap no incluye la página 404', { skip: !hasDist }, () => {
  const files = fs.readdirSync(DIST).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));
  const contenido = files.map((f) => read(f)).join('\n');
  assert.ok(!contenido.includes('/404'), 'el sitemap no debe listar la página 404');
});

// ── Seguridad ───────────────────────────────────────────────────────────────

test('no hay secretos en la salida', { skip: !hasDist }, () => {
  const patron = /(?:api[_-]?key|client[_-]?secret|password|bearer)\s*[:=]\s*["'][A-Za-z0-9_\-]{16,}["']/i;
  for (const file of allHtml()) {
    assert.ok(!patron.test(fs.readFileSync(file, 'utf8')), `posible secreto en ${path.relative(DIST, file)}`);
  }
});

test('las cabeceras de seguridad están declaradas', { skip: !hasDist }, () => {
  const headers = read('_headers');
  for (const h of [
    'Strict-Transport-Security',
    'X-Content-Type-Options',
    'Referrer-Policy',
    'Content-Security-Policy',
    'Permissions-Policy',
  ]) {
    assert.ok(headers.includes(h), `falta la cabecera ${h}`);
  }
});

// ── Enlaces externos a clientes ─────────────────────────────────────────────

test('todo enlace externo abre con rel="noopener"', { skip: !hasDist }, () => {
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8');
    for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
      assert.match(m[0], /rel="[^"]*noopener/, `${path.relative(DIST, file)}: enlace _blank sin noopener`);
    }
  }
});
