/**
 * Redirección permanente de www.hacksincodigos.com al dominio sin www.
 *
 * POR QUÉ UN WORKER Y NO UNA REGLA DEL PANEL. La vía normal para esto es una
 * Redirect Rule en Cloudflare. No se pudo usar por dos motivos encadenados:
 *
 *   1. No se puede declarar desde public/_redirects: Cloudflare Pages solo
 *      acepta orígenes que empiecen con "/" y rechaza las redirecciones a nivel
 *      de dominio. Un intento con esa sintaxis rompió el despliegue.
 *   2. El token OAuth de wrangler tiene permiso de lectura sobre la zona, pero
 *      no de escritura sobre rulesets — o sea, no puede crear la regla.
 *
 * Lo que ese mismo token sí permite es desplegar Workers y sus rutas, y un
 * Worker en la ruta de www hace exactamente el mismo trabajo: responde 301 antes
 * de que la petición llegue al sitio.
 *
 * QUÉ ARREGLA. Hasta ahora www respondía 200 y servía una copia completa del
 * sitio. Para Google eran dos sitios distintos y la autoridad se repartía entre
 * los dos — y las páginas que tenía indexadas estaban justamente en www. La
 * etiqueta canónica ayudaba, pero es una sugerencia; el 301 es una instrucción.
 *
 * Se conservan la ruta, la cadena de consulta y el fragmento, así que cualquier
 * enlace viejo a www cae en su equivalente exacto sin www.
 */
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'hacksincodigos.com';
    url.protocol = 'https:';
    // 301: permanente. Es lo que hace que Google traslade la autoridad en vez
    // de tratar la redirección como algo temporal.
    return Response.redirect(url.toString(), 301);
  },
};
