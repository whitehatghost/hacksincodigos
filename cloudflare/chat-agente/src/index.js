import { SISTEMA } from './prompt.js';

/**
 * Agente de IA del chat de hacksincodigos.com.
 *
 * Vive aparte del sitio porque el sitio es estático: este Worker atiende
 * /api/chat y /api/lead, y es el único que conoce la llave del proveedor de IA.
 * La llave se guarda como secreto de Cloudflare (`wrangler secret put
 * IA_API_KEY`), nunca en el repositorio ni en el navegador.
 *
 * Habla el protocolo Messages (el de Anthropic), que es el que usa OpenModel y
 * el que soportan casi todos sus modelos. Cambiando IA_BASE_URL y IA_MODELO
 * sirve para cualquier pasarela que hable ese mismo protocolo.
 *
 * Reglas que el agente no puede romper (van en el prompt del sistema y son las
 * mismas que rigen el sitio): no inventar precios, no prometer posiciones en
 * Google, no inventar clientes, y decir "no sé" y pasar a WhatsApp cuando no
 * tenga el dato.
 */

const cors = (origen) => ({
  'Access-Control-Allow-Origin': origen,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
});

const json = (datos, estado, origen) =>
  new Response(JSON.stringify(datos), {
    status: estado,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors(origen) },
  });

const recortar = (v, largo) => (typeof v === 'string' ? v.trim().slice(0, largo) : '');

/**
 * Guarda el contacto que el visitante dejó en el chat.
 *
 * Se guarda en KV de Cloudflare y no se manda a ningún tercero. Es lo que
 * permite responderle a quien preguntó a las once de la noche y nunca llegó a
 * escribir por WhatsApp: sin esto, ese interesado se pierde.
 */
async function guardarLead(cuerpo, env, request) {
  if (!env.LEADS) return { guardado: false, motivo: 'sin-almacenamiento' };

  const lead = {
    nombre: recortar(cuerpo.nombre, 80),
    telefono: recortar(cuerpo.telefono, 30),
    correo: recortar(cuerpo.correo, 120),
    interes: recortar(cuerpo.interes, 300),
    pagina: recortar(cuerpo.pagina, 200),
    cuando: new Date().toISOString(),
    pais: request.headers.get('CF-IPCountry') || '',
  };
  if (!lead.nombre && !lead.telefono && !lead.correo) {
    return { guardado: false, motivo: 'vacio' };
  }

  const clave = `lead:${lead.cuando}:${crypto.randomUUID().slice(0, 8)}`;
  // Se conservan 180 días: suficiente para dar seguimiento y después se borran
  // solos, en vez de quedar acumulando datos de gente para siempre.
  await env.LEADS.put(clave, JSON.stringify(lead), { expirationTtl: 60 * 60 * 24 * 180 });
  return { guardado: true };
}

export default {
  async fetch(request, env) {
    const permitidos = (env.ORIGENES || 'https://hacksincodigos.com').split(',');
    const origen = request.headers.get('Origin') || '';
    const origenOk = permitidos.includes(origen) ? origen : permitidos[0];
    const ruta = new URL(request.url).pathname;

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origenOk) });
    if (request.method !== 'POST') return json({ error: 'Método no permitido' }, 405, origenOk);
    if (origen && !permitidos.includes(origen)) return json({ error: 'Origen no permitido' }, 403, origenOk);

    let cuerpo;
    try {
      cuerpo = await request.json();
    } catch {
      return json({ error: 'Cuerpo inválido' }, 400, origenOk);
    }

    if (ruta.endsWith('/lead')) {
      try {
        return json(await guardarLead(cuerpo, env, request), 200, origenOk);
      } catch (err) {
        console.error('no se pudo guardar el contacto', err);
        return json({ guardado: false }, 200, origenOk);
      }
    }

    if (!env.IA_API_KEY) {
      // Sin llave el sitio no se rompe: el chat usa sus respuestas de respaldo.
      return json({ error: 'sin-configurar' }, 503, origenOk);
    }

    // Límites para que un abuso no dispare la factura del proveedor de IA.
    const historia = Array.isArray(cuerpo.mensajes) ? cuerpo.mensajes.slice(-10) : [];
    const limpio = historia
      .filter((m) => m && (m.rol === 'user' || m.rol === 'assistant') && typeof m.texto === 'string')
      .map((m) => ({ role: m.rol, content: m.texto.slice(0, 1000) }));
    if (limpio.length === 0) return json({ error: 'Sin mensajes' }, 400, origenOk);

    // El nombre con el que se presenta. Se valida contra una lista para que
    // nadie pueda inyectar texto en el prompt a través de este campo.
    const NOMBRES = ['Sofía', 'Andrés', 'Valeria', 'Diego', 'Mariana', 'Josué', 'Karla', 'Esteban'];
    const nombre = NOMBRES.includes(cuerpo.agente) ? cuerpo.agente : NOMBRES[0];
    // El nombre del visitante, si lo dejó, entra como dato y nunca como
    // instrucción: se limpia de los caracteres que cerrarían la plantilla.
    const visitante = recortar(cuerpo.visitante, 60).replace(/[`${}]/g, '');
    const sistema =
      `Te llamás ${nombre} y sos la asistente virtual del equipo de servicio al cliente de HacksinCodigos. El saludo de bienvenida ya se dio antes de que vos entraras: NO vuelvas a presentarte ni a saludar, entrá directo a responder lo que te preguntan.` +
      (visitante
        ? `\nLa persona con la que hablás se llama ${visitante}: tratala por su nombre de vez en cuando, sin repetirlo en cada mensaje.`
        : '') +
      `\n\n${SISTEMA}`;

    try {
      const res = await fetch(`${env.IA_BASE_URL || 'https://api.openmodel.ai'}/v1/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.IA_API_KEY}`,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: env.IA_MODELO || 'claude-haiku-4-5-20251001',
          // El prompt del sistema es lo más largo de cada consulta y no cambia
          // nunca: marcado para caché, se cobra una fracción a partir de la
          // segunda consulta seguida.
          system: [{ type: 'text', text: sistema, cache_control: { type: 'ephemeral' } }],
          messages: limpio,
          max_tokens: 400,
          temperature: 0.4,
        }),
      });

      if (!res.ok) {
        const detalle = await res.text();
        console.error('proveedor respondió', res.status, detalle.slice(0, 500));
        return json({ error: 'proveedor' }, 502, origenOk);
      }

      const datos = await res.json();
      // Protocolo Messages: { content: [{ type: 'text', text }] }. Se acepta
      // también la forma de chat/completions por si se cambia de pasarela.
      const texto = (
        datos.content?.find((b) => b.type === 'text')?.text ??
        datos.choices?.[0]?.message?.content ??
        ''
      ).trim();
      if (!texto) return json({ error: 'respuesta-vacia' }, 502, origenOk);
      return json({ texto }, 200, origenOk);
    } catch (err) {
      console.error('fallo llamando al proveedor', err);
      return json({ error: 'fallo' }, 502, origenOk);
    }
  },
};
