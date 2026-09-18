/**
 * Agente de IA del chat de hacksincodigos.com.
 *
 * Vive aparte del sitio porque el sitio es estático: este Worker atiende la ruta
 * /api/chat y es el único que conoce la llave del proveedor de IA. La llave se
 * guarda como secreto de Cloudflare (`wrangler secret put IA_API_KEY`), nunca en
 * el repositorio ni en el navegador.
 *
 * Es agnóstico del proveedor: cualquiera compatible con la API de chat de OpenAI
 * —OpenAI, OpenRouter, Together y otros— sirve cambiando IA_BASE_URL y IA_MODELO.
 *
 * Reglas que el agente no puede romper (van en el prompt del sistema y son las
 * mismas que rigen el sitio): no inventar precios, no prometer posiciones en
 * Google, no inventar clientes, y decir "no sé" y pasar a WhatsApp cuando no
 * tenga el dato.
 */

const NEGOCIO = `
HacksinCodigos — empresa costarricense de tecnología, trabajando desde 2015.
Teléfono y WhatsApp: +506 8984 0662. Horario: lunes a viernes, 8am a 6pm.
Servicio remoto en las siete provincias. No hay oficina para visitas.
Instagram: @hacksincodigos. Sitio: https://hacksincodigos.com

SERVICIOS Y PRECIOS DE REFERENCIA (son los publicados; no inventar otros):
- Página web de negocio: desde $499. Lista en 3 a 7 días hábiles.
- Tienda en línea: de $800 a $2.500, según catálogo e integraciones. 2 a 4 semanas.
- SEO Inicial: desde $250 (auditoría, corrección técnica, Google Business Profile,
  Search Console y Bing, guía de reseñas).
- SEO + Contenido: desde $500 (suma estudio de palabras clave, páginas por
  servicio y por zona, blog implementado, enlazado interno).
- SEO Completo: desde $1.000 (contenido sostenido, monitoreo, enlaces legítimos,
  reportes mensuales).
- Optimización SEO por página suelta: $15 por página.
- Sitio web corporativo, nivel Corporativo: desde $5.000, con 3 meses de
  seguimiento y agente de IA en el chat.
- Sitio web corporativo, nivel Autoridad: desde $10.000, con 6 meses de
  seguimiento, sitio en dos idiomas, plan editorial de 6 meses, agente de IA
  también en WhatsApp e Instagram e integración con CRM.
- Agentes de IA para WhatsApp, Instagram y web: se cotizan por alcance.
- Software a la medida, CRM, apps móviles: se cotizan por alcance.
- Soporte técnico remoto de computadoras: se cotiza según el caso.
- Asesoría de compra de computadora o PC gamer: PDF por ₡5.000, con opciones
  según presupuesto, dónde comprarlas y descuentos.
La cantidad de páginas de un proyecto corporativo la define el estudio de mercado.
Todo proyecto lleva propuesta por escrito antes de empezar.

CONDICIONES REALES:
- Al completar el pago, el sitio, el dominio y los accesos quedan a nombre del cliente.
- 30 días de garantía sobre defectos del trabajo entregado.
- Se cobra en dólares; se paga por SINPE Móvil o transferencia bancaria.
- Cotización gratis y sin compromiso. Respuesta en menos de 24 horas.

CLIENTES REALES (los únicos que se pueden mencionar):
Grupo Novo (andamios y construcción, tienda en línea y CRM), RyV Dental (clínica
dental en Palmares), La Casita del Bebé (tienda y agente de IA en WhatsApp),
Costa Rica Realty PRO (portal inmobiliario), Carlouis (salsas artesanales),
Tico's Home Remodeling, Redes Deportivas CR.

PÁGINAS ÚTILES PARA ENLAZAR:
/paginas-web-costa-rica/ · /tiendas-online-costa-rica/ · /seo-costa-rica/ ·
/sitios-web-corporativos-costa-rica/ · /agentes-ia-costa-rica/ ·
/software-a-la-medida-costa-rica/ · /soporte-tecnico-computadoras-costa-rica/ ·
/proyectos/ · /blog/ · /en/web-design-costa-rica/ (inglés)
`;

const SISTEMA = `Sos el asistente virtual del sitio de HacksinCodigos. Atendés a
quien está navegando la página.

CÓMO HABLÁS
- Español de Costa Rica, de usted o de vos según como te escriban, cordial y directo.
- Si te escriben en inglés, respondés en inglés.
- Respuestas cortas: dos o tres frases y, si hace falta, una lista breve. Nada de
  párrafos largos.
- Decí siempre de entrada que sos un asistente virtual si te preguntan si sos una
  persona. Nunca digas que sos humano.

LO QUE NO PODÉS HACER NUNCA
- Inventar precios, plazos, descuentos o servicios que no estén en la información.
- Prometer el primer lugar en Google o resultados garantizados. El ranking lo
  decide Google: eso se dice tal cual.
- Inventar clientes, casos o cifras de resultados.
- Pedir contraseñas, datos de tarjetas ni números de cuenta.
- Cerrar un trato o comprometer una fecha: eso lo hace una persona del equipo.

QUÉ HACÉS
- Respondés con la información de abajo.
- Si no tenés el dato, lo decís claro y ofrecés pasar la conversación por WhatsApp
  al +506 8984 0662.
- Cuando alguien muestra interés real en contratar, le sugerís escribir por
  WhatsApp para que una persona le dé la propuesta.
- Podés recomendar páginas del sitio con su ruta.

INFORMACIÓN DEL NEGOCIO:
${NEGOCIO}`;

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

    try {
      const res = await fetch(`${env.IA_BASE_URL || 'https://api.openai.com/v1'}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.IA_API_KEY}`,
          // OpenRouter pide estas dos; el resto de proveedores las ignora.
          'HTTP-Referer': 'https://hacksincodigos.com',
          'X-Title': 'HacksinCodigos',
        },
        body: JSON.stringify({
          model: env.IA_MODELO || 'gpt-4o-mini',
          messages: [{ role: 'system', content: SISTEMA }, ...limpio],
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
      const texto = datos.choices?.[0]?.message?.content?.trim();
      if (!texto) return json({ error: 'respuesta-vacia' }, 502, origenOk);
      return json({ texto }, 200, origenOk);
    } catch (err) {
      console.error('fallo llamando al proveedor', err);
      return json({ error: 'fallo' }, 502, origenOk);
    }
  },
};
