/**
 * Foto del estado del sitio en producción, para comparar contra el futuro.
 *
 *   node scripts/baseline-seo.mjs
 *
 * Recorre todas las URLs del sitemap publicado y anota, por página: estado HTTP,
 * tiempo de respuesta, peso, título, meta descripción, H1, cantidad de palabras,
 * enlaces internos, canónica, hreflang y tipos de datos estructurados. Guarda el
 * resultado en informes/baseline-AAAA-MM-DD.json y un resumen en .md.
 *
 * POR QUÉ ESTO Y NO "POSICIONES". Las posiciones de Google no se pueden medir de
 * forma confiable desde un script: cambian por persona, por ubicación y por día,
 * y rasparlas va contra los términos de Google. Lo que sí se puede medir con
 * exactitud es si el sitio está sano y completo, que es la parte que depende de
 * nosotros. Las impresiones, los clics y la posición media salen de Search
 * Console, que es la fuente buena, y se anotan a mano en el informe.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = process.env.SITE_URL || 'https://hacksincodigos.com';
const SALIDA = path.join(ROOT, 'informes');

const texto = (html, re) => html.match(re)?.[1]?.trim() ?? null;

/** Palabras visibles: sin scripts, estilos ni etiquetas. */
function palabras(html) {
  const cuerpo = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ');
  return cuerpo.split(/\s+/).filter((w) => w.length > 1).length;
}

async function revisar(url) {
  const inicio = Date.now();
  let res;
  try {
    res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'HacksinCodigos-Baseline/1.0' } });
  } catch (err) {
    return { url, error: String(err) };
  }
  const ms = Date.now() - inicio;
  const html = res.status === 200 ? await res.text() : '';
  const schemas = [...html.matchAll(/"@type":\s*"([^"]+)"/g)].map((m) => m[1]);

  return {
    url,
    estado: res.status,
    ms,
    kb: Math.round(Buffer.byteLength(html) / 1024),
    titulo: texto(html, /<title>([^<]*)<\/title>/),
    descripcion: texto(html, /<meta name="description" content="([^"]*)"/),
    h1: texto(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)?.replace(/<[^>]+>/g, '').trim() ?? null,
    palabras: palabras(html),
    lang: texto(html, /<html[^>]+lang="([^"]+)"/),
    canonica: texto(html, /<link rel="canonical" href="([^"]+)"/),
    hreflang: [...html.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1]),
    indexable: !/content="noindex/.test(html),
    enlacesInternos: [...html.matchAll(/href="(\/[^"#?]*)"/g)].length,
    schemas: [...new Set(schemas)].sort(),
  };
}

const sitemapUrls = async (url) => {
  const xml = await (await fetch(url)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

const hoy = new Date().toISOString().slice(0, 10);

console.log(`Midiendo ${SITE} — ${hoy}\n`);

const indices = await sitemapUrls(`${SITE}/sitemap-index.xml`);
const urls = [];
for (const i of indices) urls.push(...(i.endsWith('.xml') ? await sitemapUrls(i) : [i]));

console.log(`${urls.length} URLs en el sitemap. Revisando…`);

const paginas = [];
for (let i = 0; i < urls.length; i += 8) {
  paginas.push(...(await Promise.all(urls.slice(i, i + 8).map(revisar))));
  process.stdout.write(`\r  ${Math.min(i + 8, urls.length)}/${urls.length}`);
}
process.stdout.write('\n');

// Salud del sitio: lo que tiene que estar bien para que nos puedan encontrar.
const problemas = [];
const titulos = new Map();
const descripciones = new Map();
for (const p of paginas) {
  if (p.error || p.estado !== 200) problemas.push(`${p.url} responde ${p.estado ?? p.error}`);
  if (!p.titulo) problemas.push(`${p.url} sin título`);
  if (!p.descripcion) problemas.push(`${p.url} sin meta descripción`);
  if (!p.h1) problemas.push(`${p.url} sin H1`);
  if (!p.indexable) problemas.push(`${p.url} marcada noindex`);
  if (p.canonica && p.canonica !== p.url) problemas.push(`${p.url} canónica apunta a ${p.canonica}`);
  if (p.palabras < 300) problemas.push(`${p.url} solo ${p.palabras} palabras`);
  if (p.titulo) titulos.set(p.titulo, [...(titulos.get(p.titulo) ?? []), p.url]);
  if (p.descripcion) descripciones.set(p.descripcion, [...(descripciones.get(p.descripcion) ?? []), p.url]);
}
for (const [t, us] of titulos) if (us.length > 1) problemas.push(`Título repetido (${us.length}): ${t}`);
for (const [d, us] of descripciones) if (us.length > 1) problemas.push(`Descripción repetida (${us.length}): ${d.slice(0, 60)}…`);

const ok = paginas.filter((p) => p.estado === 200);
const media = (f) => Math.round(ok.reduce((a, p) => a + f(p), 0) / (ok.length || 1));

const resumen = {
  fecha: hoy,
  sitio: SITE,
  urlsEnSitemap: urls.length,
  responden200: ok.length,
  enEspanol: ok.filter((p) => p.lang === 'es-CR').length,
  enIngles: ok.filter((p) => p.lang === 'en').length,
  conHreflang: ok.filter((p) => p.hreflang.length > 0).length,
  palabrasTotales: ok.reduce((a, p) => a + p.palabras, 0),
  palabrasPromedio: media((p) => p.palabras),
  pesoPromedioKb: media((p) => p.kb),
  respuestaPromedioMs: media((p) => p.ms),
  problemas,
};

fs.mkdirSync(SALIDA, { recursive: true });
const jsonPath = path.join(SALIDA, `baseline-${hoy}.json`);
fs.writeFileSync(jsonPath, JSON.stringify({ resumen, paginas }, null, 2));

const md = `# Estado del sitio — ${hoy}

| Indicador | Valor |
|---|---|
| URLs en el sitemap | ${resumen.urlsEnSitemap} |
| Responden correctamente | ${resumen.responden200} |
| Páginas en español | ${resumen.enEspanol} |
| Páginas en inglés | ${resumen.enIngles} |
| Páginas con hreflang | ${resumen.conHreflang} |
| Palabras publicadas | ${resumen.palabrasTotales.toLocaleString('es-CR')} |
| Palabras por página | ${resumen.palabrasPromedio} |
| Peso promedio | ${resumen.pesoPromedioKb} kB |
| Respuesta promedio | ${resumen.respuestaPromedioMs} ms |
| Problemas detectados | ${problemas.length} |

${problemas.length ? `## Problemas\n\n${problemas.map((p) => `- ${p}`).join('\n')}\n` : '_Sin problemas técnicos detectados._\n'}
## De Search Console (anotar a mano)

Estos números no se pueden medir desde acá: hay que copiarlos de Search Console,
en Rendimiento, con el rango de los últimos 28 días.

| Indicador | Hoy | En la próxima medición |
|---|---|---|
| Impresiones | | |
| Clics | | |
| Posición media | | |
| Consultas distintas | | |
| Páginas indexadas | | |
`;
fs.writeFileSync(path.join(SALIDA, `baseline-${hoy}.md`), md);

console.log(`\n${resumen.responden200}/${resumen.urlsEnSitemap} páginas responden bien`);
console.log(`${resumen.enIngles} en inglés · ${resumen.conHreflang} con hreflang`);
console.log(`${resumen.palabrasTotales.toLocaleString('es-CR')} palabras publicadas`);
console.log(`${resumen.respuestaPromedioMs} ms y ${resumen.pesoPromedioKb} kB en promedio`);
console.log(problemas.length ? `\n${problemas.length} problema(s):` : '\nSin problemas técnicos.');
for (const p of problemas.slice(0, 20)) console.log(`  · ${p}`);
if (problemas.length > 20) console.log(`  … y ${problemas.length - 20} más (están en el JSON)`);
console.log(`\nInforme: informes/baseline-${hoy}.md`);
