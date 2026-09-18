/**
 * Cerebro del chat del sitio.
 *
 * TRES CAPAS, EN ESTE ORDEN, Y LA RAZÓN ES LA PLATA:
 *
 *  1. Flujos guiados (soporte y recomendador). No consumen ni un token: son
 *     preguntas fijas con respuestas fijas. Acá cae la mayoría de lo que la gente
 *     realmente necesita hacer.
 *  2. Respuestas locales para las preguntas de siempre —precios, plazos, zonas—.
 *     Tampoco consumen tokens y responden al instante.
 *  3. La IA, solo para lo que las dos capas anteriores no cubren.
 *
 * Además hay topes duros: máximo de mensajes por conversación, historial corto,
 * caché de preguntas repetidas y límite de largo. Un chat abierto a internet sin
 * topes es una factura esperando a pasar.
 */

/** Tope de consultas a la IA por conversación. Pasado eso, se pasa a WhatsApp. */
const MAX_CONSULTAS_IA = 8;
const WA_NUMERO = '50689840662';

/** Preguntas de siempre, respondidas sin gastar un token. */
const LOCALES = [
  {
    claves: ['precio', 'cuesta', 'cuanto cuesta', 'cuánto cuesta', 'vale', 'tarifa', 'cobran', 'presupuesto'],
    texto:
      'Precios de referencia: página web de negocio desde $499 (lista en 3 a 7 días hábiles), tienda en línea de $800 a $2.500, SEO desde $250, sitio corporativo desde $5.000 y nivel Autoridad desde $10.000. Todo lleva propuesta por escrito antes de empezar.',
  },
  {
    claves: ['seo', 'posicion', 'posición', 'aparecer en google', 'buscador', 'primer lugar'],
    texto:
      'SEO Inicial desde $250 (auditoría, corrección técnica y Google Business Profile), SEO + Contenido desde $500 y SEO Completo desde $1.000. Lo que no hacemos es prometer el primer lugar: eso lo decide Google, no nosotros.',
  },
  {
    claves: ['tiempo', 'plazo', 'demora', 'tarda', 'cuando esta', 'cuándo está', 'entrega'],
    texto:
      'Una página de negocio queda lista en 3 a 7 días hábiles desde que tenemos textos y fotos. Una tienda en línea toma de 2 a 4 semanas según el catálogo.',
  },
  {
    claves: ['zona', 'ubicacion', 'ubicación', 'donde estan', 'dónde están', 'oficina', 'provincia', 'visita'],
    texto:
      'Trabajamos de forma remota en las siete provincias y no cambia el precio ni el plazo. No tenemos oficina para visitas: todo se coordina por WhatsApp o videollamada.',
  },
  {
    claves: ['tienda', 'vender en linea', 'vender en línea', 'ecommerce', 'carrito', 'pasarela', 'sinpe'],
    texto:
      'Las tiendas en línea van de $800 a $2.500 según el catálogo: pagos con tarjeta, SINPE Móvil, pedidos por WhatsApp y panel para que usted mismo cargue productos y precios.',
  },
  {
    claves: ['agente', 'chatbot', 'bot', 'inteligencia artificial', 'whatsapp automatico', 'whatsapp automático'],
    texto:
      'Montamos agentes de IA para WhatsApp, Instagram y sitios web — como este mismo con el que está hablando. Se cotizan por alcance y van incluidos en la línea corporativa desde $5.000.',
  },
  {
    claves: ['garantia', 'garantía', 'dominio', 'a mi nombre', 'propiedad', 'accesos'],
    texto:
      'Al completar el pago, el sitio, el dominio y los accesos quedan a su nombre, y hay 30 días de garantía sobre defectos de nuestro trabajo.',
  },
  {
    claves: ['pago', 'pagar', 'transferencia', 'tarjeta', 'factura'],
    texto:
      'Se cobra en dólares y se paga por SINPE Móvil o transferencia bancaria, por etapas contra entregables. La cotización es gratis y sin compromiso.',
  },
  {
    claves: ['horario', 'hora', 'atienden', 'abren'],
    texto: 'Atendemos de lunes a viernes, de 8am a 6pm. Este chat contesta a cualquier hora.',
  },
];

/** Flujo de soporte: junta lo necesario para abrir un caso, sin gastar tokens. */
const SOPORTE = [
  { campo: 'nombre', pregunta: 'Con gusto le ayudo a reportarlo. ¿A nombre de quién va el caso?' },
  { campo: 'equipo', pregunta: '¿Sobre qué es? (su sitio web, una computadora, correo, otra cosa)' },
  { campo: 'problema', pregunta: 'Cuénteme qué está pasando, con el mayor detalle que pueda.' },
  { campo: 'desde', pregunta: '¿Desde cuándo pasa, y hay algo que lo dispare?' },
  { campo: 'urgencia', pregunta: '¿Qué tan urgente es? (bloqueado / molesto pero puedo seguir / no corre prisa)' },
];

/** Recomendador: tres preguntas y una propuesta concreta. */
const RECOMENDADOR = [
  {
    campo: 'objetivo',
    pregunta: '¿Qué necesita resolver?',
    opciones: ['No aparezco en Google', 'No tengo página web', 'Quiero vender productos en línea', 'No doy abasto con los mensajes'],
  },
  {
    campo: 'situacion',
    pregunta: '¿Cómo está hoy?',
    opciones: ['No tengo nada todavía', 'Tengo redes sociales', 'Tengo página pero vieja', 'Tengo página y funciona'],
  },
  {
    campo: 'tamano',
    pregunta: '¿De qué tamaño es el negocio?',
    opciones: ['Emprendimiento', 'Negocio pequeño', 'Empresa mediana', 'Empresa grande'],
  },
];

function recomendar(r) {
  const grande = r.tamano === 'Empresa mediana' || r.tamano === 'Empresa grande';
  if (r.objetivo === 'No doy abasto con los mensajes') {
    return 'Por lo que me cuenta, lo suyo es un agente de IA que atienda WhatsApp, Instagram y su web a cualquier hora y le pase solo las consultas que valen. Se cotiza por alcance. Mire /agentes-ia-costa-rica/.';
  }
  if (r.objetivo === 'Quiero vender productos en línea') {
    return 'Le calza una tienda en línea, de $800 a $2.500 según el catálogo, con tarjeta, SINPE y pedidos por WhatsApp. Si son pocos productos, a veces conviene arrancar con catálogo y pedidos por WhatsApp desde $499. Mire /tiendas-online-costa-rica/.';
  }
  if (r.objetivo === 'No aparezco en Google') {
    if (r.situacion === 'No tengo nada todavía' || r.situacion === 'Tengo redes sociales') {
      return 'Primero hay que tener dónde aparecer: una página web desde $499, que ya sale con la base de SEO lista. Después el SEO Inicial desde $250 para el perfil de Google Business y lo técnico.';
    }
    return grande
      ? 'Con sitio propio y una empresa de ese tamaño, lo que rinde es el nivel Corporativo desde $5.000 (estudio de mercado, páginas por servicio y zona, medición y seguimiento) o SEO Completo desde $1.000 si el sitio ya está bien armado.'
      : 'Le sirve el SEO Inicial desde $250 para arreglar lo técnico y el perfil de Google, y si quiere aparecer por lo que vende, SEO + Contenido desde $500.';
  }
  if (grande) {
    return 'Para una empresa así conviene el nivel Corporativo desde $5.000: estudio de mercado antes de diseñar, las páginas que ese estudio indique, medición de clics y tres meses de seguimiento. Si la categoría se pelea en varios frentes, el nivel Autoridad desde $10.000.';
  }
  return 'Le calza una página web de negocio desde $499: diseño para celular, secciones por servicio, formulario y WhatsApp, lista en 3 a 7 días hábiles. Mire /paginas-web-costa-rica/.';
}

export function crearAgente({ pintar, pintarOpciones, pintarAccion }) {
  const historia = [];
  const cache = new Map();
  let consultasIA = 0;
  let flujo = null; // { tipo, paso, datos }

  const normal = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const local = (pregunta) => {
    const q = normal(pregunta);
    const hit = LOCALES.find((r) => r.claves.some((c) => q.includes(normal(c))));
    return hit ? hit.texto : null;
  };

  const quiereSoporte = (q) =>
    /(no me funciona|no funciona|error|caido|caída|caido|problema|falla|hackearon|lento|no carga|no abre|soporte|ayuda tecnica|ayuda técnica)/.test(
      normal(q)
    );

  const quiereRecomendacion = (q) =>
    /(que me recomienda|qué me recomienda|que necesito|qué necesito|cual me sirve|cuál me sirve|asesor|no se que|no sé qué)/.test(
      normal(q)
    );

  /** Número de referencia para que el cliente pueda dar seguimiento. */
  const referencia = () => {
    const d = new Date();
    const fecha = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    const azar = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `HSC-${fecha}-${azar}`;
  };

  const cerrarSoporte = (datos) => {
    const ref = referencia();
    const texto = [
      `*Reporte de soporte ${ref}*`,
      `Nombre: ${datos.nombre || '—'}`,
      `Sobre: ${datos.equipo || '—'}`,
      `Problema: ${datos.problema || '—'}`,
      `Desde cuándo: ${datos.desde || '—'}`,
      `Urgencia: ${datos.urgencia || '—'}`,
    ].join('\n');
    pintar(
      'agente',
      `Listo. Su número de referencia es ${ref}. Toque el botón para enviarlo por WhatsApp: le llega al equipo con todo lo que me contó y le responden en horario de oficina. Guarde la referencia para dar seguimiento.`
    );
    pintarAccion(`Enviar el reporte ${ref}`, `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(texto)}`);
  };

  const cerrarRecomendacion = (datos) => {
    const texto = recomendar(datos);
    pintar('agente', texto);
    pintarAccion(
      'Cotizar esto por WhatsApp',
      `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(
        `Hola HacksinCodigos, vengo del chat. Necesito: ${datos.objetivo}. Hoy tengo: ${datos.situacion}. Negocio: ${datos.tamano}.`
      )}`
    );
  };

  const avanzarFlujo = (respuesta) => {
    const pasos = flujo.tipo === 'soporte' ? SOPORTE : RECOMENDADOR;
    flujo.datos[pasos[flujo.paso].campo] = respuesta;
    flujo.paso += 1;

    if (flujo.paso >= pasos.length) {
      const datos = flujo.datos;
      const tipo = flujo.tipo;
      flujo = null;
      if (tipo === 'soporte') cerrarSoporte(datos);
      else cerrarRecomendacion(datos);
      return;
    }
    const paso = pasos[flujo.paso];
    pintar('agente', paso.pregunta);
    if (paso.opciones) pintarOpciones(paso.opciones);
  };

  const iniciarFlujo = (tipo) => {
    flujo = { tipo, paso: 0, datos: {} };
    const paso = (tipo === 'soporte' ? SOPORTE : RECOMENDADOR)[0];
    pintar('agente', paso.pregunta);
    if (paso.opciones) pintarOpciones(paso.opciones);
  };

  /** Devuelve la respuesta del agente para un mensaje del visitante. */
  async function responder(mensaje) {
    const texto = mensaje.trim().slice(0, 500);
    if (!texto) return;

    if (flujo) return avanzarFlujo(texto);

    if (quiereSoporte(texto)) return iniciarFlujo('soporte');
    if (quiereRecomendacion(texto)) return iniciarFlujo('recomendador');

    const enCache = cache.get(normal(texto));
    if (enCache) return pintar('agente', enCache);

    const localResp = local(texto);
    if (localResp) {
      cache.set(normal(texto), localResp);
      return pintar('agente', localResp);
    }

    if (consultasIA >= MAX_CONSULTAS_IA) {
      pintar(
        'agente',
        'Para seguir con calma, mejor sigamos por WhatsApp: ahí le responde una persona del equipo y no perdemos el hilo.'
      );
      return pintarAccion(
        'Seguir por WhatsApp',
        `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent('Hola HacksinCodigos, vengo del chat del sitio')}`
      );
    }

    historia.push({ rol: 'user', texto });
    const espera = pintar('espera', '');
    let respuesta = '';
    try {
      consultasIA += 1;
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Historial corto: el contexto largo es lo que dispara el costo por consulta.
        body: JSON.stringify({ mensajes: historia.slice(-6) }),
      });
      if (res.ok) {
        const datos = await res.json();
        if (typeof datos.texto === 'string') respuesta = datos.texto;
      }
    } catch {
      // Sin conexión con el agente: cae al respaldo, no a un error en la cara.
    }
    espera.remove();

    if (!respuesta) {
      respuesta =
        'Esa la tengo que pasar a una persona del equipo. Escribanos por WhatsApp al +506 8984 0662 y le responden hoy mismo.';
      pintar('agente', respuesta);
      return pintarAccion(
        'Escribir por WhatsApp',
        `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent('Hola HacksinCodigos, vengo del chat del sitio')}`
      );
    }

    historia.push({ rol: 'assistant', texto: respuesta });
    cache.set(normal(texto), respuesta);
    pintar('agente', respuesta);
  }

  return { responder, iniciarFlujo };
}
