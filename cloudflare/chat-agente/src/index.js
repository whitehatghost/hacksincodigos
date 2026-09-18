import { SISTEMA } from './prompt.js';

/**
 * Agente de IA del chat de hacksincodigos.com.
 *
 * Vive aparte del sitio porque el sitio es estático: este Worker atiende la ruta
 * /api/chat y es el único que conoce la llave del proveedor de IA. La llave se
 * guarda como secreto de Cloudflare (`wrangler secret put IA_API_KEY`), nunca en
 * el repositorio ni en el navegador.
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

export default {
  async fetch(request, env) {
    const permitidos = (env.ORIGENES || 'https://hacksincodigos.com').split(',');
    const origen = request.headers.get('Origin') || '';
    const origenOk = permitidos.includes(origen) ? origen : permitidos[0];

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origenOk) });
    if (request.method !== 'POST') return json({ error: 'Método no permitido' }, 405, origenOk);
    if (origen && !permitidos.includes(origen)) return json({ error: 'Origen no permitido' }, 403, origenOk);

    if (!env.IA_API_KEY) {
      // Sin llave el sitio no se rompe: el chat usa sus respuestas de respaldo.
      return json({ error: 'sin-configurar' }, 503, origenOk);
    }

    let cuerpo;
    try {
      cuerpo = await request.json();
    } catch {
      return json({ error: 'Cuerpo inválido' }, 400, origenOk);
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
    const sistema = `Te llamás ${nombre} y sos la asistente virtual del equipo de servicio al cliente de HacksinCodigos. Presentate por tu nombre cuando tenga sentido.

${SISTEMA}`;

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
          temperature: 0.3,
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
