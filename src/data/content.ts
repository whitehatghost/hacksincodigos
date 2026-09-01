/** Contenido editorial de la home. Textos verbatim del sitio en producción. */

export interface Faq {
  q: string;
  a: string;
  i18nQ: string;
  i18nA: string;
}

export const faqs: Faq[] = [
  {
    i18nQ: 'faq_q1',
    i18nA: 'faq_a1',
    q: '¿Cuánto cuesta una página web en Costa Rica?',
    a: 'El precio depende del tipo de proyecto. Una página web básica para un negocio local inicia desde $350 (₡180,000), mientras que un e-commerce completo puede estar entre $800 y $2,500. Te damos una cotización personalizada sin compromiso.',
  },
  {
    i18nQ: 'faq_q2',
    i18nA: 'faq_a2',
    q: '¿Cuánto tiempo toma crear un sitio web?',
    a: 'Una página web sencilla puede estar lista en 3 a 7 días hábiles. Proyectos más complejos como tiendas en línea pueden tomar de 2 a 4 semanas. Trabajamos ágilmente y te mantenemos informado.',
  },
  {
    i18nQ: 'faq_q3',
    i18nA: 'faq_a3',
    q: '¿Qué incluye el servicio de desarrollo web?',
    a: 'Todos nuestros proyectos incluyen: diseño responsive, optimización SEO para Google, integración de WhatsApp, hosting y dominio (opcional), formulario de contacto, y soporte técnico posterior al lanzamiento.',
  },
  {
    i18nQ: 'faq_q4',
    i18nA: 'faq_a4',
    q: '¿Qué es un agente IA para WhatsApp y cómo funciona?',
    a: 'Un agente IA para WhatsApp es un chatbot inteligente que atiende clientes 24/7, responde preguntas, toma pedidos, agenda citas y califica leads. Incluye WebUI para monitorear conversaciones y dashboard de ventas. Tú decides: lo gestionamos nosotros o lo administras tú.',
  },
  {
    i18nQ: 'faq_q5',
    i18nA: 'faq_a5',
    q: '¿Ofrecen soporte técnico en toda Costa Rica?',
    a: 'Sí. Ofrecemos soporte remoto en todo Costa Rica — San José, Guanacaste, Limón, Alajuela, Heredia, Cartago y zonas aledañas. Diagnosticamos y solucionamos de forma remota sin que tengas que desplazarte.',
  },
  {
    i18nQ: 'faq_q6',
    i18nA: 'faq_a6',
    q: '¿Me ayudan a aparecer en Google?',
    a: 'Absolutamente. Todas nuestras páginas web incluyen SEO técnico: estructura optimizada, meta tags, Schema.org, sitemap, velocidad optimizada y contenido listo para Google. Además te asesoramos con estrategias de contenido local para que tu negocio aparezca en búsquedas de Costa Rica.',
  },
  {
    i18nQ: 'faq_q7',
    i18nA: 'faq_a7',
    q: '¿Dónde puedo crear mi página web en Costa Rica?',
    a: 'Trabajamos con clientes en todo Costa Rica: San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas y Limón. Todo el proceso es remoto, sin necesidad de reuniones presenciales. Te guiamos desde el primer contacto hasta el lanzamiento de tu sitio web.',
  },
  {
    i18nQ: 'faq_q8',
    i18nA: 'faq_a8',
    q: '¿Qué empresa de desarrollo web en Costa Rica recomiendan?',
    a: 'HacksinCodigos tiene más de 10 años de experiencia en desarrollo web, diseño gráfico, agentes IA para WhatsApp y ciberseguridad en Costa Rica. Hemos entregado más de 50 proyectos exitosos para empresas costarricenses, desde sitios web simples hasta plataformas de e-commerce completas con integraciones de IA.',
  },
  {
    i18nQ: 'faq_q9',
    i18nA: 'faq_a9',
    q: '¿Desarrollan software a la medida y CRM empresarial?',
    a: 'Sí. Desarrollamos sistemas construidos sobre el proceso real de cada empresa: CRM empresarial para gestionar clientes, cotizaciones y seguimiento comercial; sistemas de inventario, pedidos y facturación; aplicaciones móviles y web; e integraciones con los servicios que la empresa ya usa. Un ejemplo es el CRM que desarrollamos para Grupo Novo, distribuidor de materiales de construcción en Costa Rica. Cada proyecto se cotiza por alcance y se puede arrancar por un solo módulo.',
  },
];

export const process = [
  {
    num: '01',
    title: 'Diagnóstico y Propuesta',
    desc: 'Conversamos sobre tu negocio, objetivos y presupuesto. Te entregamos una propuesta clara sin compromiso.',
    i18n: 'proceso_1',
  },
  {
    num: '02',
    title: 'Diseño y Desarrollo',
    desc: 'Creamos tu página web con SEO incluido, optimizada para móviles y lista para aparecer en Google.',
    i18n: 'proceso_2',
  },
  {
    num: '03',
    title: 'Lanzamiento y Soporte',
    desc: 'Publicamos tu sitio y te damos soporte continuo. Resultados desde la primera semana.',
    i18n: 'proceso_3',
  },
];

/** Testimonios reales ya publicados en el sitio actual. No se agregan nuevos ni se inventan. */
export const testimonials = [
  {
    text: '"HacksinCodigos nos hizo la página de Grupo Novo desde cero y quedamos encantados. El sitio se ve profesional, carga rápido y ya recibimos pedidos en línea desde la primera semana. Muy recomendados, conocen lo que hacen."',
    name: 'Carlos Rodriguez',
    company: 'Grupo Novo CR',
    initials: 'MV',
    avatarBg: 'linear-gradient(135deg,#00ff88,#00bfff)',
    i18n: 'test1',
  },
  {
    text: '"Tomé el curso de Ethical Hacking y fue una experiencia increíble. Los labs en HackTheBox son reales, el instructor explica con mucha paciencia y ahora ya sé cómo proteger mi empresa. Vale cada colón invertido."',
    name: 'Andrea Solano',
    company: 'Emprendedora digital, San José',
    initials: 'AS',
    avatarBg: 'linear-gradient(135deg,#7c3aed,#00bfff)',
    i18n: 'test2',
  },
  {
    text: '"Las campañas de Meta Ads que manejaron para La Casita del Bebé triplicaron nuestras ventas en dos meses. Los reportes son claros y siempre están disponibles para explicar los resultados. 100% recomendados."',
    name: 'Erick Rodriguez',
    company: 'La Casita del Bebé CR',
    initials: 'KM',
    avatarBg: 'linear-gradient(135deg,#f97316,#fbbf24)',
    i18n: 'test3',
  },
];

/** Artículos de la sección Blog de la home (contenido íntegro del sitio actual). */
export const blogTeasers = [
  {
    tag: '💰 Precios 2026',
    tagColor: 'var(--accent-green)',
    title: '¿Cuánto cuesta una página web en Costa Rica?',
    html: 'El costo de una página web en Costa Rica varía según el tipo de proyecto. Un sitio web básico para un negocio local en San José o Alajuela puede costar desde <strong>$350 (₡180,000)</strong>. Un e-commerce completo con carrito de compras, pasarela de pago e integración de WhatsApp puede estar entre <strong>$800 y $2,500</strong>. En HacksinCodigos te damos una cotización personalizada sin compromiso, incluyendo diseño responsive, SEO técnico, y optimización para dispositivos móviles. Contáctanos para recibir una propuesta adaptada a tu negocio en Costa Rica.',
    ctaLabel: 'Solicitar cotización →',
    ctaWa: 'Hola, quiero una cotización de página web',
    i18n: 'blog1',
  },
  {
    tag: '🤖 Automatización',
    tagColor: 'var(--accent-amber)',
    title: 'Chatbots con IA para WhatsApp en Costa Rica — Ventas 24/7',
    html: 'Los agentes de IA para WhatsApp están transformando la forma en que los negocios en Costa Rica atienden a sus clientes. Un chatbot inteligente puede responder preguntas frecuentes, tomar pedidos, agendar citas y calificar leads <strong>las 24 horas del día, los 7 días de la semana</strong> — incluso mientras duermes. Incluye un panel web (WebUI) para monitorear conversaciones y un dashboard de ventas con estadísticas en tiempo real. Ideal para restaurantes, tiendas online, clínicas dentales, inmobiliarias y cualquier negocio en San José, Heredia, Cartago o Guanacaste que quiera aumentar sus ventas sin contratar más personal.',
    ctaLabel: 'Probar agente IA →',
    ctaWa: 'Hola, quiero información sobre agentes IA para WhatsApp',
    i18n: 'blog2',
  },
  {
    tag: '📈 SEO Local',
    tagColor: 'var(--accent-blue)',
    title: 'Guía de SEO para negocios locales en Costa Rica — Aparece en Google',
    html: 'Para aparecer en Google cuando alguien busca tu servicio en Costa Rica, necesitas más que una página web bonita. El SEO local incluye: optimización de Google My Business, estructura de datos Schema.org, palabras clave locales como "diseño web Costa Rica" o "soporte técnico San José", velocidad de carga optimizada para móviles, contenido relevante con menciones geográficas, y backlinks de sitios costarricenses. En <strong>HacksinCodigos</strong> todas nuestras páginas web incluyen SEO técnico avanzado: etiquetas semánticas, meta tags optimizados, sitemap XML, y contenido listo para indexar en Google. Además te asesoramos en estrategias de contenido local para tu negocio en Costa Rica.',
    ctaLabel: 'Mejorar mi SEO →',
    ctaHref: '/seo-costa-rica/',
    i18n: 'blog3',
  },
  {
    tag: '🏗️ Caso de cliente',
    tagColor: '#06b6d4',
    title: 'CRM y tienda en línea: el caso de Grupo Novo',
    html: 'A <strong>Grupo Novo</strong>, empresa costarricense de venta y alquiler de <strong>andamios y accesorios para construcción</strong>, le desarrollamos primero la tienda en línea con la que vende, y después implementamos con ellos el <strong>CRM empresarial</strong>. El orden no es casual: primero el canal que hace que te encuentren y te compren, después el sistema que sostiene lo que ese canal genera. En el artículo explicamos qué decisiones hicieron que esa tienda funcionara en construcción, por qué un distribuidor necesita centralizar clientes y cotizaciones, y en qué casos conviene más una plataforma ya hecha que programar desde cero. Seguimos trabajando con ellos.',
    ctaLabel: 'Ver software a la medida →',
    ctaHref: '/software-a-la-medida-costa-rica/',
    i18n: 'blog4',
  },
];

export const stats = [
  { target: 50, prefix: '+', label: 'Proyectos entregados', i18n: 'stat1' },
  { target: 10, prefix: '+', label: 'Años de experiencia', i18n: 'stat2' },
  { special: '24/7', label: 'Soporte disponible', i18n: 'stat3' },
  { target: 100, suffix: '%', label: 'Clientes satisfechos', i18n: 'stat4' },
];
