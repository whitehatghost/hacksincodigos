/**
 * Cerebro del chat del sitio.
 *
 * ORDEN DE ATENCIÓN, Y LA RAZÓN ES LA PLATA:
 *
 *  1. Flujos guiados —cotizador, soporte y recomendador—. No gastan un solo
 *     token: son preguntas fijas con reglas fijas. Acá cae lo que la gente más
 *     hace: pedir un precio, reportar un problema o preguntar qué le sirve.
 *  2. Respuestas locales para lo de siempre: precios, plazos, zonas, garantía,
 *     pagos, clientes, idiomas. Tampoco gastan tokens.
 *  3. La IA, solo cuando lo anterior no entiende la pregunta o el caso es
 *     complicado de verdad.
 *
 * Encima hay topes duros: consultas a la IA por conversación, historial corto,
 * caché de repetidas y límite de largo. Un chat abierto a internet sin topes es
 * una factura esperando a pasar.
 */

/**
 * Tope de consultas a la IA por conversación. Diez alcanzan de sobra para una
 * conversación de venta completa y cuestan centavos; el ahorro de verdad viene
 * de los flujos guiados, no de dejar al visitante con las ganas.
 */
const MAX_CONSULTAS_IA = 10;
const WA_NUMERO = '50689840662';

/** Nombres con los que se presenta el asistente. Siempre dice que es virtual. */
const NOMBRES = ['Sofía', 'Andrés', 'Valeria', 'Diego', 'Mariana', 'Josué', 'Karla', 'Esteban'];

export const nombreAgente = NOMBRES[Math.floor(Math.random() * NOMBRES.length)];

/** Preguntas de siempre, respondidas sin gastar un token. */
const LOCALES = [
  {
    claves: ['precio', 'cuesta', 'vale', 'tarifa', 'cobran', 'presupuesto', 'costo'],
    texto:
      'Precios de referencia: página web de negocio desde **$499**, tienda en línea de **$800 a $2.500**, SEO desde **$250**, sitio corporativo desde **$5.000** y nivel Autoridad desde **$10.000**. Si me cuenta qué necesita, le doy un estimado más cerrado acá mismo.',
  },
  {
    claves: ['seo', 'posicion', 'aparecer en google', 'buscador', 'primer lugar', 'posicionar'],
    texto:
      'SEO Inicial desde **$250** (auditoría, corrección técnica y Google Business Profile), SEO + Contenido desde **$500** y SEO Completo desde **$1.000**. Lo que no hacemos es prometer el primer lugar: eso lo decide Google. Vea [los paquetes](/seo-costa-rica/).',
  },
  {
    claves: ['tiempo', 'plazo', 'demora', 'tarda', 'cuando esta', 'entrega', 'rapido'],
    texto:
      'Una página de negocio queda lista en **3 a 7 días hábiles** desde que tenemos textos y fotos. Una tienda en línea toma de **2 a 4 semanas** según el catálogo.',
  },
  {
    claves: ['zona', 'ubicacion', 'donde estan', 'oficina', 'provincia', 'visita', 'presencial'],
    texto:
      'Trabajamos **remoto en las siete provincias** y no cambia el precio ni el plazo. No tenemos oficina para visitas: todo se coordina por WhatsApp o videollamada.',
  },
  {
    claves: ['tienda', 'vender en linea', 'ecommerce', 'carrito', 'pasarela', 'sinpe', 'productos'],
    texto:
      'Las tiendas en línea van de **$800 a $2.500** según el catálogo: pagos con tarjeta, SINPE Móvil, pedidos por WhatsApp y panel para que usted cargue productos y precios. Vea [tiendas online](/tiendas-online-costa-rica/).',
  },
  {
    claves: ['agente', 'chatbot', 'bot', 'inteligencia artificial', 'ia para'],
    texto:
      'Montamos agentes de IA para WhatsApp, Instagram y sitios web — como este con el que está hablando. Se cotizan por alcance y van incluidos en la [línea corporativa](/sitios-web-corporativos-costa-rica/) desde $5.000.',
  },
  {
    claves: ['garantia', 'dominio', 'a mi nombre', 'propiedad', 'accesos', 'me quedo'],
    texto:
      'Al completar el pago, **el sitio, el dominio y los accesos quedan a su nombre**, y hay **30 días de garantía** sobre defectos de nuestro trabajo.',
  },
  {
    claves: ['pago', 'pagar', 'transferencia', 'tarjeta', 'factura', 'deposito', 'cuotas'],
    texto:
      'Se cobra en dólares y se paga por **SINPE Móvil o transferencia**, por etapas contra entregables. La cotización es gratis y sin compromiso.',
  },
  {
    claves: ['horario', 'atienden', 'abren', '24/7', 'noche', 'fin de semana'],
    texto:
      'Este chat atiende **a toda hora, todos los días**. El equipo responde por WhatsApp en horario de oficina: lunes a viernes, de 8am a 6pm.',
  },
  {
    claves: ['quienes son', 'quien es', 'empresa', 'experiencia', 'años', 'confianza', 'portafolio', 'clientes'],
    texto:
      'Somos una empresa costarricense trabajando desde **2015**, con más de 50 proyectos entregados. Entre los clientes están Grupo Novo, RyV Dental, La Casita del Bebé y Costa Rica Realty PRO — todos con nombre y enlace en [el portafolio](/proyectos/).',
  },
  {
    claves: ['ingles', 'english', 'extranjero', 'idioma', 'bilingue'],
    texto:
      'Sí: hacemos sitios en español e inglés, cada idioma en su propia sección y con las etiquetas que le dicen a Google cuál mostrar a quién. Tenemos [versión en inglés](/en/web-design-costa-rica/) de nuestro propio sitio.',
  },
  {
    claves: ['soporte', 'computadora', 'lenta', 'virus', 'reparar', 'pc gamer', 'armar'],
    texto:
      'Damos **soporte técnico remoto** de computadoras en todo el país, y una **asesoría de compra en PDF por ₡5.000** con opciones según su presupuesto y dónde comprarlas. Vea [soporte técnico](/soporte-tecnico-computadoras-costa-rica/).',
  },
  {
    claves: ['sistema', 'crm', 'software a la medida', 'inventario', 'aplicacion', 'app'],
    texto:
      'Desarrollamos **CRM, sistemas a la medida y aplicaciones** conectadas a lo que la empresa ya usa. Se cotizan por alcance y se puede arrancar por un solo módulo. Vea [software a la medida](/software-a-la-medida-costa-rica/).',
  },
  {
    claves: ['wordpress', 'plataforma', 'con que hacen', 'tecnologia'],
    texto:
      'Depende del caso: si el sitio se edita a diario, WordPress bien mantenido; si cambia poco, lo hacemos **estático**, que es mucho más rápido y seguro. Nuestro propio sitio pesa 36 kB por página y responde en menos de 100 ms.',
  },
];

/** Flujo de soporte: junta lo necesario para abrir un caso. Sin tokens. */
const SOPORTE = [
  { campo: 'nombre', pregunta: 'Con gusto le ayudo a reportarlo. ¿A nombre de quién va el caso?' },
  { campo: 'equipo', pregunta: '¿Sobre qué es? (su sitio web, una computadora, correo, otra cosa)' },
  { campo: 'problema', pregunta: 'Cuénteme qué está pasando, con el mayor detalle que pueda.' },
  { campo: 'desde', pregunta: '¿Desde cuándo pasa, y hay algo que lo dispare?' },
  {
    campo: 'urgencia',
    pregunta: '¿Qué tan urgente es?',
    opciones: ['Estoy bloqueado', 'Molesto pero puedo seguir', 'No corre prisa'],
  },
];

/** Recomendador: tres preguntas y una propuesta concreta. Sin tokens. */
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

/**
 * Cotizador guiado. Da un estimado de rango con los precios publicados, sin
 * consumir tokens y sin inventar: los mínimos son los del sitio.
 */
const COTIZADOR = {
  inicio: {
    campo: 'tipo',
    pregunta: '¿Qué quiere cotizar?',
    opciones: ['Página web', 'Tienda en línea', 'SEO', 'Agente de IA o sistema'],
  },
  'Página web': [
    { campo: 'secciones', pregunta: '¿Cuántas secciones o servicios llevaría?', opciones: ['Una sola página', 'Entre 4 y 6', 'Más de 6'] },
    { campo: 'contenido', pregunta: '¿Tiene listos los textos y las fotos?', opciones: ['Sí, todo listo', 'Tengo algo', 'No tengo nada'] },
    { campo: 'idiomas', pregunta: '¿Lo necesita en dos idiomas?', opciones: ['Solo español', 'Español e inglés'] },
  ],
  'Tienda en línea': [
    { campo: 'productos', pregunta: '¿Cuántos productos maneja?', opciones: ['Menos de 20', 'Entre 20 y 100', 'Más de 100'] },
    { campo: 'pagos', pregunta: '¿Cómo quiere cobrar?', opciones: ['Tarjeta, SINPE y WhatsApp', 'Solo SINPE y WhatsApp'] },
    { campo: 'inventario', pregunta: '¿Hay que conectarlo con un sistema de inventario?', opciones: ['No', 'Sí'] },
  ],
  SEO: [
    { campo: 'sitio', pregunta: '¿Ya tiene sitio web?', opciones: ['Sí', 'No todavía'] },
    {
      campo: 'meta',
      pregunta: '¿Qué busca?',
      opciones: ['Salir en el mapa de mi zona', 'Aparecer por lo que vendo', 'Competir en serio con los grandes'],
    },
  ],
  'Agente de IA o sistema': [
    { campo: 'canal', pregunta: '¿Dónde lo necesita?', opciones: ['WhatsApp', 'Mi sitio web', 'Redes sociales', 'Un sistema interno'] },
    { campo: 'detalle', pregunta: 'Cuénteme en una línea qué tendría que resolver.' },
  ],
};

function estimar(d) {
  if (d.tipo === 'Página web') {
    let min = 499;
    let max = 650;
    if (d.secciones === 'Entre 4 y 6') { min = 650; max = 900; }
    if (d.secciones === 'Más de 6') { min = 900; max = 1400; }
    if (d.contenido === 'Tengo algo') { min += 100; max += 200; }
    if (d.contenido === 'No tengo nada') { min += 200; max += 350; }
    if (d.idiomas === 'Español e inglés') { min += 200; max += 400; }
    return {
      texto: `Por lo que me cuenta, su sitio anda entre **$${min} y $${max}**, listo en 3 a 7 días hábiles una vez que tengamos el contenido. Es un estimado de rango, no una cotización en firme: esa se la pasamos por escrito y sin compromiso.`,
      wa: `Hola HacksinCodigos, vengo del chat. Quiero cotizar una página web: ${d.secciones}, contenido: ${d.contenido}, idiomas: ${d.idiomas}. El chat me estimó $${min}–$${max}.`,
    };
  }
  if (d.tipo === 'Tienda en línea') {
    let min = 800;
    let max = 1200;
    if (d.productos === 'Entre 20 y 100') { min = 1200; max = 1800; }
    if (d.productos === 'Más de 100') { min = 1800; max = 2500; }
    if (d.pagos === 'Solo SINPE y WhatsApp') { min -= 100; max -= 200; }
    if (d.inventario === 'Sí') { max += 500; }
    return {
      texto: `Con ese catálogo, la tienda anda entre **$${Math.max(min, 800)} y $${max}**, de 2 a 4 semanas. Es un estimado de rango; la cotización en firme se la pasamos por escrito.`,
      wa: `Hola HacksinCodigos, vengo del chat. Quiero cotizar una tienda en línea: ${d.productos} productos, pagos: ${d.pagos}, inventario: ${d.inventario}. El chat me estimó $${Math.max(min, 800)}–$${max}.`,
    };
  }
  if (d.tipo === 'SEO') {
    if (d.sitio === 'No todavía') {
      return {
        texto: 'Primero hay que tener dónde aparecer: una página web desde **$499**, que ya sale con la base de SEO lista. Después el SEO Inicial desde **$250** para el perfil de Google Business y lo técnico.',
        wa: 'Hola HacksinCodigos, vengo del chat. No tengo sitio y quiero aparecer en Google.',
      };
    }
    const mapa = {
      'Salir en el mapa de mi zona': ['SEO Inicial', 250, 'auditoría, corrección técnica y Google Business Profile'],
      'Aparecer por lo que vendo': ['SEO + Contenido', 500, 'estudio de palabras clave, páginas por servicio y zona, y blog'],
      'Competir en serio con los grandes': ['SEO Completo', 1000, 'contenido sostenido, monitoreo, enlaces legítimos y reportes'],
    };
    const [nombre, desde, incluye] = mapa[d.meta] || mapa['Aparecer por lo que vendo'];
    return {
      texto: `Le calza el **${nombre}, desde $${desde}**: ${incluye}. El monto final depende del tamaño del sitio y de qué tan peleado esté su sector.`,
      wa: `Hola HacksinCodigos, vengo del chat. Me interesa el paquete ${nombre} (desde $${desde}).`,
    };
  }
  return {
    texto: 'Eso se cotiza por alcance, así que no le voy a tirar un número al aire. Con lo que me contó ya tengo lo necesario para que una persona del equipo le arme la propuesta.',
    wa: `Hola HacksinCodigos, vengo del chat. Necesito un agente de IA o sistema en ${d.canal || 'mi negocio'}: ${d.detalle || ''}`,
  };
}

function recomendar(r) {
  const grande = r.tamano === 'Empresa mediana' || r.tamano === 'Empresa grande';
  if (r.objetivo === 'No doy abasto con los mensajes') {
    return 'Lo suyo es un agente de IA que atienda WhatsApp, Instagram y su web a cualquier hora y le pase solo lo que vale. Se cotiza por alcance. Vea [agentes de IA](/agentes-ia-costa-rica/).';
  }
  if (r.objetivo === 'Quiero vender productos en línea') {
    return 'Le calza una tienda en línea, de **$800 a $2.500** según el catálogo. Si son pocos productos, a veces conviene arrancar con catálogo y pedidos por WhatsApp desde **$499**.';
  }
  if (r.objetivo === 'No aparezco en Google') {
    if (r.situacion === 'No tengo nada todavía' || r.situacion === 'Tengo redes sociales') {
      return 'Primero hay que tener dónde aparecer: página web desde **$499**, que ya sale con la base de SEO. Después SEO Inicial desde **$250** para el perfil de Google Business.';
    }
    return grande
      ? 'Con sitio propio y una empresa de ese tamaño, rinde el nivel Corporativo desde **$5.000** (estudio de mercado, páginas por servicio y zona, medición y seguimiento) o SEO Completo desde **$1.000** si el sitio ya está bien armado.'
      : 'Le sirve el SEO Inicial desde **$250** para lo técnico y el perfil de Google, y SEO + Contenido desde **$500** si quiere aparecer por lo que vende.';
  }
  return grande
    ? 'Para una empresa así conviene el nivel Corporativo desde **$5.000**: estudio de mercado antes de diseñar, las páginas que ese estudio indique, medición y tres meses de seguimiento.'
    : 'Le calza una página web de negocio desde **$499**: diseño para celular, secciones por servicio, formulario y WhatsApp, lista en 3 a 7 días hábiles.';
}

export function crearAgente({ pintar, pintarOpciones, pintarAccion }) {
  const historia = [];
  const cache = new Map();
  let consultasIA = 0;
  let flujo = null;

  const normal = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const waUrl = (texto) => `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(texto)}`;

  const local = (pregunta) => {
    const q = normal(pregunta);
    // Frase larga = pregunta con matices: eso va a la IA, que entiende el caso.
    if (q.split(/\s+/).length > 9) return null;
    const hit = LOCALES.find((r) => r.claves.some((c) => q.includes(normal(c))));
    return hit ? hit.texto : null;
  };

  const quiereCotizar = (q) => /(cotiz|presupuest|cuanto me sale|cuanto seria|precio de)/.test(normal(q));
  const quiereSoporte = (q) =>
    /(no me funciona|no funciona|error|caido|problema|falla|hackearon|lento|no carga|no abre|soporte|ayuda tecnica)/.test(normal(q));
  const quiereRecomendacion = (q) =>
    /(que me recomienda|que necesito|cual me sirve|asesor|no se que|no se cual)/.test(normal(q));

  const referencia = () => {
    const d = new Date();
    const fecha = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    return `HSC-${fecha}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  };

  const pasosDe = (f) =>
    f.tipo === 'soporte' ? SOPORTE : f.tipo === 'recomendador' ? RECOMENDADOR : f.pasos;

  const cerrar = (tipo, datos) => {
    if (tipo === 'soporte') {
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
        `Listo. Su número de referencia es **${ref}**. Toque el botón y le llega al equipo con todo lo que me contó; le responden en horario de oficina. Guarde la referencia para dar seguimiento.`
      );
      return pintarAccion(`Enviar el reporte ${ref}`, waUrl(texto));
    }
    if (tipo === 'recomendador') {
      pintar('agente', recomendar(datos));
      return pintarAccion(
        'Cotizar esto por WhatsApp',
        waUrl(`Hola HacksinCodigos, vengo del chat. Necesito: ${datos.objetivo}. Hoy tengo: ${datos.situacion}. Negocio: ${datos.tamano}.`)
      );
    }
    const { texto, wa } = estimar(datos);
    pintar('agente', texto);
    pintarAccion('Pedir la cotización en firme', waUrl(wa));
  };

  const preguntar = (paso) => {
    pintar('agente', paso.pregunta);
    if (paso.opciones) pintarOpciones(paso.opciones);
  };

  const avanzarFlujo = (respuesta) => {
    // El cotizador arranca preguntando el tipo y de ahí escoge sus pasos.
    if (flujo.tipo === 'cotizador' && !flujo.pasos) {
      const tipo = Object.keys(COTIZADOR).includes(respuesta) ? respuesta : 'Página web';
      flujo.datos.tipo = tipo;
      flujo.pasos = COTIZADOR[tipo];
      flujo.paso = 0;
      return preguntar(flujo.pasos[0]);
    }

    const pasos = pasosDe(flujo);
    flujo.datos[pasos[flujo.paso].campo] = respuesta;
    flujo.paso += 1;

    if (flujo.paso >= pasos.length) {
      const { tipo, datos } = flujo;
      flujo = null;
      return cerrar(tipo, datos);
    }
    preguntar(pasos[flujo.paso]);
  };

  const iniciarFlujo = (tipo) => {
    if (tipo === 'cotizador') {
      flujo = { tipo, paso: 0, datos: {}, pasos: null };
      return preguntar(COTIZADOR.inicio);
    }
    flujo = { tipo, paso: 0, datos: {} };
    preguntar((tipo === 'soporte' ? SOPORTE : RECOMENDADOR)[0]);
  };

  async function responder(mensaje) {
    const texto = mensaje.trim().slice(0, 500);
    if (!texto) return;

    if (flujo) return avanzarFlujo(texto);
    if (quiereCotizar(texto)) return iniciarFlujo('cotizador');
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
      pintar('agente', 'Para seguir con calma, mejor sigamos por WhatsApp: ahí le responde una persona y no perdemos el hilo.');
      return pintarAccion('Seguir por WhatsApp', waUrl('Hola HacksinCodigos, vengo del chat del sitio'));
    }

    historia.push({ rol: 'user', texto });
    const espera = pintar('espera', '');
    let respuesta = '';
    try {
      consultasIA += 1;
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Historial corto: el contexto largo es lo que dispara el costo.
        body: JSON.stringify({ mensajes: historia.slice(-6), agente: nombreAgente }),
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
      pintar('agente', 'Esa se la paso a una persona del equipo. Escríbanos por WhatsApp al +506 8984 0662 y le responden hoy mismo.');
      return pintarAccion('Escribir por WhatsApp', waUrl('Hola HacksinCodigos, vengo del chat del sitio'));
    }

    historia.push({ rol: 'assistant', texto: respuesta });
    cache.set(normal(texto), respuesta);
    pintar('agente', respuesta);
  }

  return { responder, iniciarFlujo };
}
