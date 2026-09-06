/**
 * Trae las reseñas del perfil de Google al sitio, en el momento de la build.
 *
 * POR QUÉ EN LA BUILD Y NO EN EL NAVEGADOR. El sitio es estático y una clave de
 * API de Google puesta en el cliente queda a la vista de cualquiera que abra el
 * código fuente: la copian y la usan hasta agotar la cuota, que se cobra. Al
 * traerlas durante la build, la clave vive solo en la variable de entorno del
 * servidor de construcción, nunca llega al navegador y nunca entra al
 * repositorio — que además es público.
 *
 * CÓMO SE CONFIGURA. Dos variables de entorno, en Cloudflare Pages → Settings →
 * Environment variables (y en un archivo .env local, que está en .gitignore):
 *
 *   GOOGLE_PLACES_API_KEY   clave de la Places API (New), restringida por API
 *   GOOGLE_PLACE_ID         identificador del perfil de negocio
 *
 * Si falta cualquiera de las dos, el script NO falla: deja el archivo como está
 * y la build sigue. Un sitio no se cae porque no haya reseñas.
 *
 * QUÉ SE GUARDA Y QUÉ NO. Se guardan el texto, la calificación, el nombre del
 * autor y su enlace, porque los términos de Google exigen atribuir cada reseña a
 * su autor. NO se guarda la foto del autor: obliga a cargar imágenes desde los
 * servidores de Google en cada visita, lo que rompe la política de seguridad de
 * contenido del sitio y filtra la IP del visitante a un tercero.
 *
 * SOBRE LOS DATOS ESTRUCTURADOS. Las reseñas se muestran, pero NO se declaran
 * como `aggregateRating` en el JSON-LD. Marcar como propias reseñas alojadas en
 * un tercero va contra las directrices de Google y es motivo de penalización.
 * Hay una prueba en tests/ que falla si alguien lo intenta.
 *
 * CUÁNDO SE ACTUALIZAN. Solo cuando corre una build, que hoy es cada vez que se
 * hace push al repositorio. Si pasan semanas sin tocar el sitio, las reseñas se
 * quedan como estaban. Para refrescarlas sin cambiar nada basta con un commit
 * vacío, o se puede programar una reconstrucción periódica desde Cloudflare.
 *
 * Uso:  node scripts/fetch-google-reviews.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = path.join(ROOT, 'src', 'data', 'google-reviews.json');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

/** Estructura mínima, para que el sitio compile aunque no haya nada que traer. */
const VACIO = {
  actualizado: null,
  perfilUrl: null,
  calificacion: null,
  totalResenas: null,
  resenas: [],
};

function guardar(datos) {
  fs.mkdirSync(path.dirname(DESTINO), { recursive: true });
  fs.writeFileSync(DESTINO, JSON.stringify(datos, null, 2) + '\n', 'utf8');
}

if (!API_KEY || !PLACE_ID) {
  const faltan = [!API_KEY && 'GOOGLE_PLACES_API_KEY', !PLACE_ID && 'GOOGLE_PLACE_ID'].filter(Boolean);
  console.log(`  · Reseñas de Google: sin configurar (falta ${faltan.join(' y ')}).`);
  console.log('    El sitio se construye igual; la sección simplemente no aparece.');
  if (!fs.existsSync(DESTINO)) guardar(VACIO);
  process.exit(0);
}

const CAMPOS = [
  'id',
  'displayName',
  'rating',
  'userRatingCount',
  'googleMapsUri',
  'reviews',
].join(',');

try {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}`, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': CAMPOS,
      'Accept-Language': 'es-CR',
    },
  });

  if (!res.ok) {
    const cuerpo = await res.text();
    // Un fallo de la API no puede tumbar el despliegue: se avisa y se sigue con
    // lo que ya hubiera guardado de la build anterior.
    console.error(`  ✗ Reseñas de Google: la API respondió ${res.status}.`);
    console.error(`    ${cuerpo.slice(0, 300)}`);
    if (!fs.existsSync(DESTINO)) guardar(VACIO);
    process.exit(0);
  }

  const d = await res.json();

  const resenas = (d.reviews ?? [])
    .map((r) => ({
      id: r.name,
      autor: r.authorAttribution?.displayName ?? 'Cliente de Google',
      autorUrl: r.authorAttribution?.uri ?? null,
      calificacion: r.rating ?? null,
      texto: (r.originalText?.text ?? r.text?.text ?? '').trim(),
      idioma: r.originalText?.languageCode ?? r.text?.languageCode ?? null,
      cuando: r.relativePublishTimeDescription ?? null,
      publicada: r.publishTime ?? null,
    }))
    // Una reseña de solo estrellas, sin texto, no aporta nada en la página.
    .filter((r) => r.texto.length > 0)
    .sort((a, b) => String(b.publicada).localeCompare(String(a.publicada)));

  guardar({
    actualizado: new Date().toISOString(),
    perfilUrl: d.googleMapsUri ?? null,
    calificacion: d.rating ?? null,
    totalResenas: d.userRatingCount ?? null,
    resenas,
  });

  console.log(
    `  ✓ Reseñas de Google: ${resenas.length} con texto` +
      (d.userRatingCount ? ` de ${d.userRatingCount} en total` : '') +
      (d.rating ? ` · calificación ${d.rating}` : '')
  );
} catch (e) {
  console.error(`  ✗ Reseñas de Google: ${e.message}`);
  if (!fs.existsSync(DESTINO)) guardar(VACIO);
  process.exit(0);
}
