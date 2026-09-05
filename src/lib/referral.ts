/**
 * Marca de referencia en los enlaces que salen hacia sitios de clientes.
 *
 * PARA QUÉ: que cuando el cliente abra su Google Analytics vea, con nombre y
 * apellido, que ese visitante llegó desde hacksincodigos.com y desde qué
 * artículo. La cabecera `Referer` ya dice el dominio, pero se pierde en varios
 * casos —enlaces abiertos desde apps, navegadores con la privacidad reforzada—
 * y no dice *qué* página lo mandó. Los parámetros UTM sí, y sobreviven al salto.
 *
 * DÓNDE SE APLICA: en el momento de renderizar, no en el texto de los artículos.
 * Así se cambia el criterio en un solo archivo en vez de en 78 enlaces sueltos.
 *
 * QUÉ NO SE TOCA:
 *   · Enlaces internos del sitio.
 *   · wa.me — es una conversación, no una visita que se pueda medir.
 *   · Archivos descargables: un PDF no ejecuta el script de analítica, así que
 *     el parámetro sería ruido en el informe del cliente sin aportar nada.
 */

import { site } from '../data/site';

const HOST_PROPIO = new URL(site.url).hostname.replace(/^www\./, '');

/** Extensiones que se descargan en vez de abrirse: no hay analítica que las mida. */
const DESCARGA = /\.(pdf|zip|docx?|xlsx?|pptx?|csv|jpe?g|png|webp|svg|mp4)$/i;

function esDeCliente(href: string): boolean {
  if (!/^https?:\/\//i.test(href)) return false;
  let u: URL;
  try {
    u = new URL(href);
  } catch {
    return false;
  }
  const host = u.hostname.replace(/^www\./, '');
  if (host === HOST_PROPIO) return false;
  if (host === 'wa.me' || host.endsWith('whatsapp.com')) return false;
  if (DESCARGA.test(u.pathname)) return false;
  return true;
}

/**
 * Agrega los parámetros de referencia a una URL externa.
 *
 * El fragmento (`#seccion`) se conserva al final: si los parámetros se pusieran
 * después del `#`, pasarían a ser parte del ancla y el destino no los leería.
 * `URL` se encarga de ese orden por su cuenta.
 */
export function conReferencia(href: string, contenido?: string): string {
  if (!esDeCliente(href)) return href;
  const u = new URL(href);
  // Si alguien ya puso utm_source a mano, se respeta.
  if (u.searchParams.has('utm_source')) return u.href;
  u.searchParams.set('utm_source', HOST_PROPIO);
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', 'caso-de-cliente');
  if (contenido) u.searchParams.set('utm_content', contenido);
  return u.href;
}

/** Aplica `conReferencia` a todos los href de un bloque de HTML ya escrito. */
export function conReferenciaEnHtml(html: string, contenido?: string): string {
  return html.replace(/href="([^"]+)"/g, (completo, href) => {
    const marcado = conReferencia(href, contenido);
    return marcado === href ? completo : `href="${marcado}"`;
  });
}
