/**
 * Descarga y normaliza los logos de los clientes del portafolio.
 *
 * POR QUÉ SE GUARDAN LOCALMENTE: enlazar la imagen desde el servidor del cliente
 * (hotlinking) le carga el ancho de banda a él, y deja nuestro sitio roto el día
 * que la mueva de lugar. Se copian una vez y se sirven desde acá.
 *
 * POR QUÉ SE APLASTAN SOBRE BLANCO: los logos vienen de todo tipo — JPG con
 * fondo blanco, PNG con transparencia, cuadrados y horizontales. Sobre el fondo
 * oscuro del sitio, esa mezcla se ve rota. Normalizar todos sobre una placa
 * blanca del mismo tamaño los deja parejos, que es lo que hace que un muro de
 * logos se lea como un muro y no como un collage.
 *
 * Uso:  node scripts/fetch-client-logos.mjs
 * Solo hay que volver a correrlo si un cliente cambia de logo.
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
  { slug: 'la-casita-del-bebe', url: 'https://lacasitadelbebecr.com/wp-content/uploads/2025/06/lacasitalogo.jpg' },
  { slug: 'redes-deportivas-cr', url: 'https://redesdeportivascr.com/brand/logo-horizontal.png' },
  { slug: 'ticos-home-remodeling', url: 'https://ticoshomeremodeling.com/images/logo-tico.webp' },
  { slug: 'ryv-dental', url: 'https://ryvdental.com/img/logo-ryvdental.jpg' },
  { slug: 'carlouis', url: 'https://www.carlouis.net/assets/img/logo.png' },
  { slug: 'costa-rica-realty-pro', url: 'https://costaricarealtypro.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-09_06_24-PM.png' },
];

/** Placa uniforme: ancha, para que entren tanto los cuadrados como los horizontales. */
const ANCHO = 320;
const ALTO = 160;
const MARGEN = 18;

fs.mkdirSync(DESTINO, { recursive: true });

let hechos = 0;
for (const { slug, url } of LOGOS) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());

    const salida = path.join(DESTINO, `${slug}.webp`);
    // Primero el logo dentro del área útil, después el lienzo exacto: así los
    // siete salen del mismo tamaño pase lo que pase con el original.
    const dentro = await sharp(buf)
      .flatten({ background: '#ffffff' })
      .resize(ANCHO - MARGEN * 2, ALTO - MARGEN * 2, { fit: 'inside' })
      .toBuffer();

    await sharp({
      create: { width: ANCHO, height: ALTO, channels: 3, background: '#ffffff' },
    })
      .composite([{ input: dentro, gravity: 'center' }])
      .webp({ quality: 92 })
      .toFile(salida);

    const { size } = fs.statSync(salida);
    console.log(`  ✓ ${slug.padEnd(24)} ${(size / 1024).toFixed(1)} kB`);
    hechos++;
  } catch (e) {
    console.error(`  ✗ ${slug}: ${e.message}`);
  }
}

console.log(`\n${hechos}/${LOGOS.length} logos listos en public/images/clientes/`);
if (hechos < LOGOS.length) process.exitCode = 1;
