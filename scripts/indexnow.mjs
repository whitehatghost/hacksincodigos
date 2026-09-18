/**
 * Avisa a los buscadores que el sitio cambió, sin depender de que pasen solos.
 *
 *   node scripts/indexnow.mjs            → manda todo el sitemap
 *   node scripts/indexnow.mjs /una/ruta/ → manda solo esas rutas
 *
 * IndexNow es el protocolo abierto que usan Bing, Yandex, Naver y Seznam. Google
 * NO participa: para Google el camino sigue siendo el sitemap y Search Console.
 *
 * La clave no es un secreto: el protocolo exige justamente que esté publicada en
 * el sitio (public/<clave>.txt) para demostrar que quien avisa es el dueño del
 * dominio. Por eso vive en el repositorio sin problema.
 */
const CLAVE = '6178a422707948c5957bdd078e0bce3a';
const SITIO = process.env.SITE_URL || 'https://hacksincodigos.com';
const HOST = new URL(SITIO).host;

const sitemapUrls = async (url) => {
  const xml = await (await fetch(url)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((r) => new URL(r, SITIO).href);
} else {
  const indices = await sitemapUrls(`${SITIO}/sitemap-index.xml`);
  urls = [];
  for (const i of indices) urls.push(...(i.endsWith('.xml') ? await sitemapUrls(i) : [i]));
}

// La clave tiene que estar publicada antes de avisar; si no, el aviso se ignora.
const comprobacion = await fetch(`${SITIO}/${CLAVE}.txt`);
if (!comprobacion.ok) {
  console.error(`La clave no está publicada en ${SITIO}/${CLAVE}.txt (responde ${comprobacion.status}).`);
  console.error('Publicá el sitio primero y volvé a correr esto.');
  process.exit(1);
}

const enviar = () =>
  fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: CLAVE, keyLocation: `${SITIO}/${CLAVE}.txt`, urlList: urls }),
  });

// Un reintento: avisar de una página recién publicada a veces devuelve 422
// porque del otro lado todavía no la ven. Al minuto ya pasa.
let res = await enviar();
if (res.status === 422) {
  console.log('Rechazado (422). Reintentando en 60 segundos…');
  await new Promise((r) => setTimeout(r, 60000));
  res = await enviar();
}

console.log(`${urls.length} URLs avisadas a IndexNow — respuesta ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log('Recibido. Bing y los demás las revisan en las próximas horas.');
} else {
  console.log(await res.text());
}
