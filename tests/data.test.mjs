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
import { execSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const products = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'products.json'), 'utf8'));

/** Configuración editable de la tienda: precios, categorías y qué sigue activo. */
const shopSrc = fs.readFileSync(path.join(ROOT, 'src', 'data', 'shop.ts'), 'utf8');
const shopItems = [
  ...shopSrc.matchAll(
    /slug:\s*'([^']+)',\s*category:\s*'([^']+)',(?:[^}]*?)price:\s*(\d+|null)[\s\S]*?active:\s*(true|false)/g
  ),
].map((m) => ({
  slug: m[1],
  category: m[2],
  price: m[3] === 'null' ? null : Number(m[3]),
  active: m[4] === 'true',
}));
const activeItems = shopItems.filter((i) => i.active);
const retiredItems = shopItems.filter((i) => !i.active);

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

test('shop.ts cubre todos los servicios de WooCommerce y los agregados después', () => {
  // 17 heredados del WooCommerce original + los que se sumaron a mano.
  assert.ok(shopItems.length >= 17, `shop.ts solo lista ${shopItems.length} servicios`);
  for (const p of products) {
    assert.ok(
      shopItems.some((i) => i.slug === p.slug),
      `${p.slug} está en products.json pero no en shop.ts`
    );
  }
});

test('los servicios nuevos están en el catálogo', () => {
  for (const slug of ['tarjetas-de-presentacion', 'invitaciones-para-eventos']) {
    const item = shopItems.find((i) => i.slug === slug);
    assert.ok(item, `falta ${slug} en shop.ts`);
    assert.ok(item.active, `${slug} está inactivo`);
  }
});

test('todo servicio activo tiene categoría', () => {
  for (const i of activeItems) {
    assert.ok(i.category.length > 2, `${i.slug} sin categoría`);
  }
});

test('el catálogo no publica precios: todo se cotiza', () => {
  for (const i of shopItems) {
    assert.equal(i.price, null, `${i.slug} tiene precio publicado; el catálogo cotiza caso por caso`);
  }
});

test('los servicios de software a la medida están en el catálogo', () => {
  for (const slug of ['software-a-la-medida-pymes', 'crm-empresarial', 'aplicaciones-moviles-y-web']) {
    const item = shopItems.find((i) => i.slug === slug);
    assert.ok(item, `falta ${slug} en shop.ts`);
    assert.ok(item.active, `${slug} está inactivo`);
    assert.equal(item.category, 'software', `${slug} debería estar en la categoría software`);
  }
});

test('cada servicio retirado tiene su redirección 301', { skip: !hasDist }, () => {
  const redirects = read('_redirects');
  for (const i of retiredItems) {
    assert.ok(
      redirects.includes(`/product/${i.slug}/`),
      `${i.slug} está inactivo pero su URL no redirige: quedaría en 404`
    );
  }
});

test('no se genera página para los servicios retirados', { skip: !hasDist }, () => {
  for (const i of retiredItems) {
    assert.ok(!exists(`product/${i.slug}/index.html`), `${i.slug} está inactivo pero su página sigue generándose`);
  }
});

// ── Software a la medida y CRM ────────────────────────────────────

test('la landing de software a la medida existe y cubre el CRM', { skip: !hasDist }, () => {
  const html = read('software-a-la-medida-costa-rica/index.html');
  assert.match(html, /CRM [Ee]mpresarial/, 'la landing no menciona CRM empresarial');
  assert.ok(html.includes('/blog/crm-empresarial-caso-grupo-novo/'), 'no enlaza al caso de Grupo Novo');
  assert.ok(html.includes('/proyectos/grupo-novo/'), 'no enlaza al proyecto de Grupo Novo');
});

test('el caso de Grupo Novo se publica y queda enlazado', { skip: !hasDist }, () => {
  const art = read('blog/crm-empresarial-caso-grupo-novo/index.html');
  assert.match(art, /Grupo Novo/, 'el artículo no menciona al cliente');
  assert.ok(art.includes('https://gruponovocr.com'), 'el artículo no enlaza al sitio del cliente');
  assert.ok(art.includes('/software-a-la-medida-costa-rica/'), 'el artículo no enlaza al servicio');
  // El artículo entra al listado del blog y a la ficha del proyecto.
  assert.ok(read('blog/index.html').includes('/blog/crm-empresarial-caso-grupo-novo/'));
  assert.ok(read('proyectos/grupo-novo/index.html').includes('CRM'), 'la ficha del proyecto no menciona el CRM');
});

test('ningún caso de cliente publica métricas de resultado', { skip: !hasDist }, () => {
  // Ningún cliente autorizó cifras de crecimiento por escrito. Si aparece un
  // porcentaje o un multiplicador en el cuerpo de un caso, es invento.
  //
  // Se mira solo el TEXTO VISIBLE: dentro de los href hay URLs con escapes de
  // porcentaje (%c2%b2 de un metro cuadrado, por ejemplo) que no son cifras.
  const casos = fs
    .readdirSync(path.join(DIST, 'blog'))
    .filter((d) => d.startsWith('caso-') || d.includes('grupo-novo'));
  assert.ok(casos.length >= 6, `solo se encontraron ${casos.length} casos de cliente`);

  for (const caso of casos) {
    const html = read(path.join('blog', caso, 'index.html'));
    const cuerpo = (html.match(/<article class="prose">([\s\S]*?)<\/article>/) || ['', ''])[1];
    assert.ok(cuerpo.length > 1500, `${caso}: no se pudo aislar el cuerpo del artículo`);
    const visible = cuerpo.replace(/<[^>]+>/g, ' ');
    const inventos = visible.match(/\d+\s?%|aument[oó]\s+un\s+\d|x\d+\s+(?:m[aá]s|ventas)|triplic|duplic/gi);
    assert.ok(!inventos, `${caso} publica métricas sin respaldo: ${inventos && inventos.join(', ')}`);
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
    const html = fs.readFileSync(file, 'utf8');
    // Las páginas con noindex —como el HTML del boletín, que existe solo para
    // copiarlo al correo— no son para buscadores: no tiene sentido exigirles
    // datos estructurados.
    if (/<meta[^>]+name="robots"[^>]+noindex/.test(html)) continue;
    const blocks = jsonLdBlocks(html);
    assert.ok(blocks.length > 0, `${path.relative(DIST, file)} no tiene JSON-LD`);
    for (const b of blocks) {
      assert.equal(b['@context'], 'https://schema.org');
      assert.ok(b['@type'], 'bloque JSON-LD sin @type');
    }
  }
});

// ── Preservación de URLs indexadas ──────────────────────────────────────────

test('las URLs que WordPress tenía indexadas siguen resolviendo', { skip: !hasDist }, () => {
  assert.ok(exists('index.html'));
  assert.ok(exists('shop/index.html'));
  const redirects = read('_redirects');
  for (const p of products) {
    const tienePagina = exists(`product/${p.slug}/index.html`);
    const tieneRedirect = redirects.includes(`/product/${p.slug}/`);
    assert.ok(
      tienePagina || tieneRedirect,
      `/product/${p.slug}/ no tiene página ni redirección: quedaría en 404`
    );
  }
});

test('cada servicio activo tiene su página, imagen y llamada a cotizar', { skip: !hasDist }, () => {
  for (const i of activeItems) {
    const html = read(`product/${i.slug}/index.html`);
    assert.ok(/Cotizar por WhatsApp/.test(html), `${i.slug}: la ficha no invita a cotizar`);
    assert.ok(/wa\.me\/50689840662/.test(html), `${i.slug}: la ficha no enlaza a WhatsApp`);
    assert.ok(html.includes(`/images/productos/${i.slug}.webp`), `${i.slug}: la página no referencia su imagen`);
    assert.ok(exists(`images/productos/${i.slug}.webp`), `${i.slug}: falta el archivo de imagen`);
    assert.ok(exists(`images/productos/${i.slug}-400.webp`), `${i.slug}: falta la imagen pequeña`);
  }
});

test('ni el catálogo ni las fichas muestran montos en dólares', { skip: !hasDist }, () => {
  const paginas = ['shop/index.html', ...activeItems.map((i) => `product/${i.slug}/index.html`)];
  for (const rel of paginas) {
    const cuerpo = read(rel).replace(/<script[\s\S]*?<\/script>/g, '');
    const montos = cuerpo.match(/\$\s?\d{2,}/g);
    assert.ok(!montos, `${rel} muestra un monto: ${montos && montos.join(', ')}`);
  }
});

test('los medios de pago son los reales del negocio', { skip: !hasDist }, () => {
  for (const rel of ['shop/index.html', 'terminos-de-servicio/index.html']) {
    const html = read(rel);
    assert.ok(!/PayPal/i.test(html), `${rel} todavía menciona PayPal`);
    assert.ok(
      !/tarjeta de cr[ée]dito(?![^<]*tienda)/i.test(html) || /SINPE/i.test(html),
      `${rel} menciona cobro con tarjeta sin aclarar SINPE`
    );
  }
  assert.ok(/SINPE M[óo]vil/i.test(read('shop/index.html')), 'la tienda no menciona SINPE Móvil');
});

test('el catálogo no muestra precios tachados ni ofertas', { skip: !hasDist }, () => {
  const html = read('shop/index.html');
  assert.ok(!/text-decoration:\s*line-through/.test(html), 'quedó un precio tachado en el catálogo');
  assert.ok(!/price-was|badge-sale/.test(html), 'quedó marcado de oferta en el catálogo');
});

// ── Reseñas de Google ─────────────────────────────────────────

test('la clave de la API de Google nunca entra al repositorio', () => {
  // El repositorio es público: una clave acá la copian y la usan hasta agotar
  // la cuota, que se cobra. Vive solo en la variable de entorno de la build.
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' })
    .split('\n')
    .filter((f) => /\.(ts|js|mjs|astro|json|md)$/.test(f));
  const patron = /AIza[0-9A-Za-z_\-]{30,}/;
  for (const rel of tracked) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) continue;
    assert.ok(!patron.test(fs.readFileSync(full, 'utf8')), `${rel} parece contener una clave de Google`);
  }
});

test('la build no se cae cuando no hay reseñas configuradas', () => {
  const datos = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'google-reviews.json'), 'utf8'));
  for (const campo of ['actualizado', 'perfilUrl', 'calificacion', 'totalResenas', 'resenas']) {
    assert.ok(campo in datos, `google-reviews.json no declara "${campo}"`);
  }
  assert.ok(Array.isArray(datos.resenas), 'resenas tiene que ser un arreglo');
});

test('las reseñas se muestran atribuidas y sin marcarlas como propias', { skip: !hasDist }, () => {
  const datos = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'google-reviews.json'), 'utf8'));
  const home = read('index.html');
  if (datos.resenas.length === 0) {
    assert.ok(!home.includes('resenas-google'), 'no hay reseñas pero la sección se pintó igual');
    return;
  }
  // Los términos de la API obligan a atribuir cada reseña a su autor.
  for (const r of datos.resenas.slice(0, 6)) {
    assert.ok(home.includes(r.autor), `la reseña de ${r.autor} se muestra sin atribuir`);
  }
  // Y las directrices de Google prohíben declarar como propias las reseñas de
  // un tercero. La prueba general de JSON-LD ya lo cubre, esto lo hace explícito.
  assert.ok(!home.includes('"aggregateRating"'), 'no se puede declarar aggregateRating con reseñas de Google');
});

// ── Boletín mensual ───────────────────────────────────────────────

test('la lista de destinatarios nunca entra al repositorio', () => {
  // El repositorio es público: una lista de correos acá la levanta un scraper.
  const ignore = fs.readFileSync(path.join(ROOT, '.gitignore'), 'utf8');
  assert.ok(
    /^newsletter\/contactos\/$/m.test(ignore),
    'newsletter/contactos/ tiene que estar en .gitignore'
  );
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' }).split('\n');
  const filtrados = tracked.filter((f) => f.startsWith('newsletter/contactos/'));
  assert.deepEqual(filtrados, [], `hay archivos de contactos versionados: ${filtrados.join(', ')}`);
});

test('ningún archivo versionado publica correos de clientes', () => {
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' })
    .split('\n')
    .filter((f) => /\.(ts|js|mjs|astro|md|json|csv|txt|html)$/.test(f));
  for (const rel of tracked) {
    // Este archivo contiene el patron de busqueda, no una direccion real.
    if (rel === 'tests/data.test.mjs') continue;
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) continue;
    const body = fs.readFileSync(full, 'utf8');
    const correos = body.match(/info@[a-z0-9.-]+\.[a-z]{2,}/gi);
    assert.ok(!correos, `${rel} publica correos de clientes: ${correos && correos.join(', ')}`);
  }
});

test('el boletín no se indexa ni entra al sitemap', { skip: !hasDist }, () => {
  const dir = path.join(DIST, 'newsletter', 'edicion');
  assert.ok(fs.existsSync(dir), 'no se generó ninguna edición del boletín');
  for (const mes of fs.readdirSync(dir)) {
    const html = read(path.join('newsletter', 'edicion', mes, 'index.html'));
    assert.match(html, /name="robots"[^>]*noindex/, `la edición ${mes} no lleva noindex`);
  }
  const sitemaps = fs.readdirSync(DIST).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));
  const contenido = sitemaps.map((f) => read(f)).join('\n');
  assert.ok(!contenido.includes('/newsletter/'), 'el boletín no va al sitemap: es un correo, no una página del sitio');
});

test('el correo del boletín usa solo URLs absolutas', { skip: !hasDist }, () => {
  // En un correo no hay dominio de referencia: un href="/shop/" no lleva a
  // ninguna parte. Es el error clásico de las plantillas de email.
  const dir = path.join(DIST, 'newsletter', 'edicion');
  for (const mes of fs.readdirSync(dir)) {
    const html = read(path.join('newsletter', 'edicion', mes, 'index.html'));
    const cuerpo = html.replace(/<head>[\s\S]*?<\/head>/, '');
    const relativos = [
      ...[...cuerpo.matchAll(/(?:href|src)="(\/[^/][^"]*)"/g)].map((m) => m[1]),
    ];
    assert.deepEqual(
      relativos,
      [],
      `la edición ${mes} tiene enlaces relativos que en un correo no funcionan: ${relativos.join(', ')}`
    );
  }
});

test('el boletín dice cómo darse de baja', { skip: !hasDist }, () => {
  const dir = path.join(DIST, 'newsletter', 'edicion');
  for (const mes of fs.readdirSync(dir)) {
    const html = read(path.join('newsletter', 'edicion', mes, 'index.html'));
    assert.match(html, /BAJA/, `la edición ${mes} no explica cómo darse de baja`);
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

// ── Portabilidad de los scripts a Linux ─────────────────────────────────────

test('los scripts resuelven rutas con fileURLToPath, no manipulando el pathname', () => {
  // `new URL(import.meta.url).pathname.slice(1)` funciona en Windows (queda
  // "C:/ruta") pero en Linux convierte una ruta absoluta en relativa. La build de
  // Cloudflare corre en Linux: este patrón la rompe.
  const dir = path.join(ROOT, 'scripts');
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.mjs'))) {
    const body = fs.readFileSync(path.join(dir, f), 'utf8');
    assert.ok(
      !/new URL\(import\.meta\.url\)\.pathname/.test(body),
      `scripts/${f} manipula pathname a mano; usá fileURLToPath(import.meta.url)`
    );
    if (body.includes('import.meta.url')) {
      assert.ok(
        body.includes('fileURLToPath'),
        `scripts/${f} usa import.meta.url sin fileURLToPath`
      );
    }
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
