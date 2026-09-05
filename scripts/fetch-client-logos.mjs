/**
 * Descarga los logos de los clientes y los deja listos para un fondo oscuro.
 *
 * POR QUÉ SE GUARDAN LOCALMENTE: enlazar la imagen desde el servidor del cliente
 * (hotlinking) le carga el ancho de banda a él y deja nuestro sitio roto el día
 * que mueva el archivo. Se copian una vez y se sirven desde acá.
 *
 * POR QUÉ MONOCROMO BLANCO. Los siete logos vienen en formatos incompatibles
 * entre sí. Se midió antes de decidir:
 *
 *   grupo-novo             84% tinta oscura, sin transparencia  → bloque oscuro
 *   costa-rica-realty-pro  86% tinta oscura, sin transparencia  → bloque oscuro
 *   ryv-dental             42% tinta oscura, sin transparencia  → bloque de color
 *   ticos-home-remodeling  68% de fondo blanco, tinta oscura
 *   la-casita-del-bebe     22% de fondo blanco, tinta clara
 *   redes-deportivas-cr    ya transparente
 *   carlouis               ya transparente
 *
 * Con placa blanca detrás se veían siete recuadros pegados sobre un sitio
 * oscuro. Recortando el fondo a secas, los cuatro primeros desaparecen: son
 * tinta oscura sobre fondo oscuro. La única salida que sirve para los siete es
 * la misma que usa cualquier muro de logos sobre fondo oscuro: silueta blanca
 * sobre transparencia. Se pierde el color de marca y se gana que todos se lean
 * y que el conjunto tenga una sola voz.
 *
 * CÓMO SE RECORTA: por distancia de COLOR al fondo de su propia imagen, no por
 * brillo. Se probaron las dos y el brillo falla en los dos extremos: el logo de
 * RyV Dental es texto blanco sobre azul —el azul se colaba como tinta y volvía a
 * quedar un cuadro— y el de La Casita del Bebé es pastel claro sobre blanco, casi
 * sin diferencia de luminancia, así que desaparecía por completo. La distancia de
 * color resuelve los dos: lo que se conserva es lo que se despega del fondo,
 * venga por brillo o por tono.
 *
 * Los que ya vienen con transparencia conservan su propio canal alfa, que es más
 * fiel que cualquier cosa que se calcule.
 *
 * Uso:  node scripts/fetch-client-logos.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = path.join(ROOT, 'public', 'images', 'clientes');

/** Cada logo, tomado del encabezado del sitio del propio cliente. */
const LOGOS = [
  { slug: 'grupo-novo', url: 'https://gruponovocr.com/wp-content/uploads/2026/04/cropped-nuevologonovo.jpg' },
  {
    slug: 'la-casita-del-bebe',
    url: 'https://lacasitadelbebecr.com/wp-content/uploads/2025/06/lacasitalogo.jpg',
    // Su marca es un disco pastel relleno. Con el piso normal, el relleno claro
    // sobrevive a medias y queda una mancha gris. Subéndolo, el relleno se va y
    // quedan los aros y el texto — que es lo que hace reconocible al logo.
    piso: 0.34,
  },
  { slug: 'redes-deportivas-cr', url: 'https://redesdeportivascr.com/brand/logo-horizontal.png' },
  { slug: 'ticos-home-remodeling', url: 'https://ticoshomeremodeling.com/images/logo-tico.webp' },
  {
    slug: 'ryv-dental',
    // PNG limpio: el JPG del encabezado deja ruido de compresión al recortarlo.
    url: 'https://ryvdental.com/favicon-192.png',
    // Su marca lleva un patrón de puntos decorativo en dos esquinas. A tamaño
    // de logo eso no se lee como diseño, se lee como suciedad: se recorta al
    // lockup central — R&V DENTAL y los dientes.
    recorte: { left: 0.13, top: 0.20, width: 0.71, height: 0.55 },
  },
  { slug: 'carlouis', url: 'https://www.carlouis.net/assets/img/logo.png' },
  { slug: 'costa-rica-realty-pro', url: 'https://costaricarealtypro.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-09_06_24-PM.png' },
];

const ANCHO = 400;
const ALTO = 200;

const lum = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/** Color medio del marco exterior: es el fondo del que hay que despegar la tinta. */
function colorDelFondo(data, info) {
  const { width, height, channels } = info;
  const borde = Math.max(2, Math.round(Math.min(width, height) * 0.04));
  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const enBorde = x < borde || y < borde || x >= width - borde || y >= height - borde;
      if (!enBorde) continue;
      const i = (y * width + x) * channels;
      if (channels > 3 && data[i + 3] < 40) continue;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      n++;
    }
  }
  return n === 0 ? [255, 255, 255] : [r / n, g / n, b / n];
}

fs.mkdirSync(DESTINO, { recursive: true });

let hechos = 0;
for (const { slug, url, recorte, piso = 0.11 } of LOGOS) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const origen = Buffer.from(await res.arrayBuffer());

    // Recorte opcional, cuando el archivo del cliente trae adornos que a tamaño
    // de logo estorban en vez de sumar.
    let base = sharp(origen);
    if (recorte) {
      const m = await base.metadata();
      base = sharp(origen).extract({
        left: Math.round(m.width * recorte.left),
        top: Math.round(m.height * recorte.top),
        width: Math.round(m.width * recorte.width),
        height: Math.round(m.height * recorte.height),
      });
    }

    // Se calcula el alfa sobre el logo ya escalado, para no gastar el cálculo en
    // píxeles que después se descartan al reducir.
    const { data, info } = await base
      .resize(ANCHO, ALTO, { fit: 'inside', withoutEnlargement: false })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height } = info;

    // ¿Trae ya una transparencia que valga la pena respetar?
    let transparentes = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 40) transparentes++;
    const yaRecortado = transparentes / (width * height) > 0.25;

    const [fr, fg, fb] = colorDelFondo(data, info);
    const claro = lum(fr, fg, fb) > 0.5;

    // Primera pasada: la distancia de color de cada píxel al fondo, y cuál es la
    // mayor que se alcanza de verdad en ESTA imagen.
    //
    // Normalizar contra el máximo teórico no sirve: el logo de La Casita del Bebé
    // es todo pastel suave sobre blanco, nunca se aleja mucho del fondo, y con
    // una escala fija quedaba una mancha gris. Escalando contra su propio máximo,
    // un logo de bajo contraste se abre igual que uno de alto.
    const dist = new Float32Array(width * height);
    let tope = 0;
    for (let p = 0; p < width * height; p++) {
      const i = p * 4;
      if (data[i + 3] < 40) continue;
      const d = Math.hypot(data[i] - fr, data[i + 1] - fg, data[i + 2] - fb);
      dist[p] = d;
      if (d > tope) tope = d;
    }
    // Un pelo por debajo del máximo, para que el color más saturado sature del
    // todo y no quede el logo entero medio translúcido.
    const alcance = Math.max(30, tope * 0.82);
    const salida = Buffer.alloc(width * height * 4);

    for (let p = 0; p < width * height; p++) {
      const i = p * 4;
      const a0 = data[i + 3] / 255;

      // Cuánto se despega este píxel del fondo de SU propia imagen, medido en
      // color y no en brillo: así cuenta igual el texto blanco sobre azul que el
      // pastel claro sobre blanco.
      let tinta = yaRecortado ? 1 : dist[p] / alcance;

      // Piso y ganancia. El piso limpia el ruido de compresión —los JPEG dejan
      // basura alrededor del texto— y la ganancia evita que los medios tonos de
      // un logo con degradado queden tan tenues que la silueta se deshilache.
      tinta = Math.min(1, Math.max(0, (tinta - piso) / (1 - piso - 0.57)));

      salida[i] = 255;
      salida[i + 1] = 255;
      salida[i + 2] = 255;
      salida[i + 3] = Math.round(a0 * tinta * 255);
    }

    const destino = path.join(DESTINO, `${slug}.webp`);
    // Se recorta el aire transparente que rodea a la silueta. Sin esto, un logo
    // cuadrado con mucho margen se ve diminuto al lado de uno horizontal
    // ajustado, aunque los dos ocupen la misma altura en la tarjeta.
    await sharp(salida, { raw: { width, height, channels: 4 } })
      .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 12 })
      .webp({ quality: 92, alphaQuality: 100 })
      .toFile(destino);

    const recortado = await sharp(destino).metadata();

    // Control de calidad: un logo que queda casi vacío no se va a ver.
    let visibles = 0;
    for (let i = 3; i < salida.length; i += 4) if (salida[i] > 60) visibles++;
    const cobertura = (100 * visibles) / (width * height);
    const aviso = cobertura < 3 ? '  ⚠ casi invisible, revisar la fuente' : '';

    console.log(
      `  ✓ ${slug.padEnd(24)} ${String(recortado.width + 'x' + recortado.height).padEnd(9)} ` +
        `fondo ${yaRecortado ? 'transparente' : claro ? 'claro' : 'oscuro'}`.padEnd(22) +
        `tinta ${cobertura.toFixed(1)}%${aviso}`
    );
    hechos++;
  } catch (e) {
    console.error(`  ✗ ${slug}: ${e.message}`);
  }
}

console.log(`\n${hechos}/${LOGOS.length} logos listos en public/images/clientes/`);
if (hechos < LOGOS.length) process.exitCode = 1;
