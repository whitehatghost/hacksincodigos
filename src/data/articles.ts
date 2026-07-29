/**
 * Artículos del blog.
 *
 * Los tres primeros son el contenido que hoy vive dentro de la home de
 * hacksincodigos.com (sección "Guías y Consejos"): el texto de origen se conservó y
 * se amplió con información que el propio negocio ya publica (precios de la tienda,
 * alcance de los servicios). No hay estadísticas ni estudios inventados.
 *
 * Para publicar un artículo nuevo basta con agregar una entrada a este arreglo:
 * la página, el sitemap y el enlazado interno se generan solos.
 */

export interface Article {
  slug: string;
  title: string;
  /** Título para <title> y resultados de Google. */
  metaTitle: string;
  metaDesc: string;
  /** Resumen para el listado del blog. */
  excerpt: string;
  tag: string;
  tagColor: string;
  published: string;
  updated: string;
  readingMinutes: number;
  /** Servicios con los que conecta el artículo. */
  relatedServices: { href: string; label: string }[];
  bodyHtml: string;
}

export const articles: Article[] = [
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-costa-rica',
    title: '¿Cuánto cuesta una página web en Costa Rica?',
    metaTitle: '¿Cuánto cuesta una página web en Costa Rica? Precios 2026',
    metaDesc:
      'Cuánto cuesta hacer una página web en Costa Rica en 2026: rangos reales por tipo de proyecto, qué incluye cada precio y qué costos anuales hay que sumar.',
    excerpt:
      'Un sitio de negocio arranca alrededor de los $350–$450 y un e-commerce completo va de $800 a $2,500. Acá está el desglose de qué cambia el precio y qué costos anuales hay que sumar.',
    tag: '💰 Precios 2026',
    tagColor: 'var(--accent-green)',
    published: '2026-01-15',
    updated: '2026-07-28',
    readingMinutes: 6,
    relatedServices: [
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p>Es la primera pregunta de casi todo el que nos escribe, y la respuesta honesta es que depende del tipo de proyecto. Pero "depende" no le sirve a nadie para presupuestar, así que acá van los rangos reales con los que trabajamos.</p>

<h2>Rangos por tipo de proyecto</h2>

<h3>Página web de negocio — desde $350 (₡180,000)</h3>
<p>Un sitio de una o varias secciones para un negocio de servicios: quién sos, qué ofrecés, portafolio o galería, y formulario de contacto con botón de WhatsApp. Es lo que necesita la mayoría de los negocios locales que hoy solo tienen Instagram.</p>
<p>Nuestro paquete de <a href="/product/pagina-web-profesional-sin-carrito-de-compras/">página web profesional</a> está en $450 USD e incluye diseño responsive, las secciones esenciales, formulario, botón de WhatsApp y la base de SEO.</p>

<h3>Tienda online — de $800 a $2,500</h3>
<p>Acá se suma catálogo, carrito, pasarela de pago, cálculo de envíos y panel de pedidos. El rango es amplio porque un catálogo de 20 productos y uno de 2,000 no cuestan lo mismo, ni tampoco integrarse con un sistema de inventario existente.</p>
<p>Nuestro paquete de <a href="/product/pagina-web-tienda-online-con-carrito/">tienda online</a> está en $850 USD con hasta 50 productos configurados.</p>

<h3>Plataforma a medida — se cotiza por alcance</h3>
<p>Membresías, reservas, áreas privadas, sistemas internos. Aquí no hay precio de lista porque el trabajo se define por los requisitos: cuántos tipos de usuario hay, qué tiene que hacer cada uno y con qué otros sistemas hay que hablar. Esto entra en <a href="/desarrollo-web-costa-rica/">desarrollo web a medida</a>.</p>

<h2>Qué hace que el precio suba</h2>
<ul>
  <li><strong>Cantidad de páginas y de contenido.</strong> No es lo mismo una landing que un sitio con 40 páginas de servicios.</li>
  <li><strong>Quién escribe los textos.</strong> Si el cliente los entrega, se ahorra tiempo. Si hay que redactarlos, es trabajo aparte.</li>
  <li><strong>Fotografía.</strong> Fotos propias del negocio siempre rinden más que banco de imágenes, pero hay que producirlas.</li>
  <li><strong>Integraciones.</strong> Conectar con una pasarela de pago, un CRM o un sistema de inventario suma horas.</li>
  <li><strong>Idiomas.</strong> Un sitio bilingüe es prácticamente dos sitios de contenido.</li>
</ul>

<h2>Los costos que casi nadie menciona</h2>
<p>El desarrollo es un pago único, pero un sitio vivo tiene costos recurrentes. Conviene tenerlos claros desde el principio:</p>
<ul>
  <li><strong>Dominio:</strong> entre $10 y $40 al año según la extensión (.com, .cr).</li>
  <li><strong>Hosting:</strong> desde unos pocos dólares al mes. Un sitio estático puede alojarse gratis en plataformas como Cloudflare Pages; uno con WordPress necesita un servidor.</li>
  <li><strong>Mantenimiento:</strong> actualizaciones de seguridad, backups y cambios menores. Nuestros planes arrancan en <a href="/product/mantenimiento-web-basico-mensual/">$38 USD al mes</a>.</li>
  <li><strong>Comisiones de pasarela:</strong> si vendés en línea, el procesador de pagos cobra un porcentaje por transacción.</li>
</ul>

<h2>¿Y las plataformas de "hacé tu web solo"?</h2>
<p>Sirven, y no tiene sentido decir lo contrario. Si estás validando una idea y tenés más tiempo que presupuesto, una plataforma de armado por bloques te resuelve. Lo que hay que saber es lo que se paga a cambio: mensualidad indefinida, plantilla que se parece a la de miles de negocios, control limitado sobre el rendimiento y el SEO técnico, y dificultad para migrar cuando el negocio crece.</p>
<p>La diferencia real aparece cuando el sitio tiene que competir en Google o convertir tráfico pago en ventas. Ahí los detalles técnicos pesan.</p>

<h2>Cómo pedir una cotización que sirva</h2>
<p>Para darte un número en firme necesitamos saber: qué hace tu negocio, si querés vender en línea o solo recibir consultas, cuántas secciones imaginás, si ya tenés logo y textos, y para cuándo lo necesitás. Con eso te mandamos una propuesta con alcance y precio cerrados, sin compromiso.</p>
`,
  },

  {
    slug: 'chatbots-ia-whatsapp-costa-rica',
    title: 'Chatbots con IA para WhatsApp en Costa Rica: vender 24/7',
    metaTitle: 'Chatbots con IA para WhatsApp en Costa Rica — Ventas 24/7',
    metaDesc:
      'Cómo funciona un agente de IA para WhatsApp en Costa Rica: qué automatiza, qué no conviene automatizar, qué necesitás para arrancar y para qué negocios rinde.',
    excerpt:
      'Un agente de IA contesta tu WhatsApp a las 9 de la noche de un domingo. Qué automatiza de verdad, qué no conviene dejarle y qué hace falta para ponerlo a andar.',
    tag: '🤖 Automatización',
    tagColor: 'var(--accent-amber)',
    published: '2026-02-10',
    updated: '2026-07-28',
    readingMinutes: 5,
    relatedServices: [
      { href: '/agentes-ia-costa-rica/', label: 'agentes de IA para WhatsApp' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p>En Costa Rica el WhatsApp es el canal de ventas. No el correo, no el formulario: el WhatsApp. Y ahí aparece el problema de siempre — las consultas llegan a las nueve de la noche, un domingo, o mientras estás atendiendo a alguien más. El cliente que no recibe respuesta en minutos se va con el que sí le contestó.</p>

<h2>Qué es realmente un agente de IA</h2>
<p>Es un asistente conectado a tu número de WhatsApp de negocio que lee lo que escribe el cliente, entiende la intención y responde con la información que vos le cargaste. No es un menú de "marque 1 para ventas": entiende preguntas escritas en lenguaje normal, con las vueltas y los modismos con los que la gente escribe de verdad.</p>

<h2>Qué conviene automatizar</h2>
<ul>
  <li><strong>Las preguntas de siempre:</strong> precios, horarios, ubicación, si hacen envíos, qué formas de pago aceptan. Suelen ser la mayoría del volumen.</li>
  <li><strong>Toma de pedidos:</strong> qué quiere, cuánto, a qué nombre, a dónde se envía.</li>
  <li><strong>Agenda de citas:</strong> según la disponibilidad que le definas.</li>
  <li><strong>Calificación de interesados:</strong> hace las preguntas de filtro y te avisa cuando vale la pena que entres vos.</li>
  <li><strong>Respuesta inmediata fuera de horario:</strong> aunque sea para tomar los datos y decir a qué hora le responden.</li>
</ul>

<h2>Qué no conviene automatizar</h2>
<p>Un reclamo serio, una negociación de precio, un caso delicado. El agente tiene que saber cuándo callarse y pasar la conversación a una persona. Un bot que insiste en responder algo que no entiende hace más daño que no tener bot.</p>
<p>Tampoco conviene que finja ser humano. Que se presente con claridad ahorra problemas: la gente acepta bien hablar con un asistente si le resuelve rápido.</p>

<h2>El panel: la parte que no se ve</h2>
<p>Además del bot viene un panel web donde ves todas las conversaciones en tiempo real, podés intervenir en cualquier momento y consultás estadísticas de qué se preguntó y cuánto terminó en venta. Ese historial es lo que después te dice qué información falta en tu <a href="/paginas-web-costa-rica/">página web</a>.</p>

<h2>Para qué negocios rinde más</h2>
<p>Donde hay volumen de consultas repetidas: restaurantes, tiendas en línea, clínicas dentales, inmobiliarias, talleres, servicios profesionales. Si recibís tres mensajes por semana, no es tu prioridad. Si recibís treinta al día y la mitad pregunta lo mismo, se paga solo.</p>

<h2>Qué necesitás para arrancar</h2>
<p>Un número de WhatsApp dedicado al negocio y la información que el agente tiene que manejar: servicios, precios, horarios, zonas de cobertura y las preguntas que más te hacen. Con eso armamos la primera versión y la vamos ajustando con las conversaciones reales de las primeras semanas.</p>
<p>Podés elegir que lo mantengamos nosotros o administrarlo vos desde el panel. Los detalles están en <a href="/agentes-ia-costa-rica/">agentes de IA para WhatsApp en Costa Rica</a>.</p>
`,
  },

  {
    slug: 'guia-seo-negocios-locales-costa-rica',
    title: 'Guía de SEO local para negocios en Costa Rica',
    metaTitle: 'Guía de SEO local en Costa Rica — Cómo aparecer en Google',
    metaDesc:
      'Guía práctica de SEO local en Costa Rica: Google Business Profile, SEO técnico, contenido con intención geográfica y enlaces legítimos. Sin trucos que penalizan.',
    excerpt:
      'Aparecer en Google cuando alguien busca tu servicio cerca no es cuestión de suerte. Google Business, SEO técnico, contenido local y enlaces legítimos — en ese orden.',
    tag: '📈 SEO Local',
    tagColor: 'var(--accent-blue)',
    published: '2026-03-05',
    updated: '2026-07-28',
    readingMinutes: 7,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'SEO en Costa Rica' },
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web' },
    ],
    bodyHtml: `
<p>Tener una página web bonita y no aparecer en Google es una de las frustraciones más comunes. La buena noticia es que para un negocio local el trabajo es bastante concreto y se puede ordenar por prioridad.</p>

<h2>1. Google Business Profile: lo primero, siempre</h2>
<p>Para búsquedas con intención local, el perfil de Google Business pesa más que el sitio web. Es lo que hace que aparezcas en el mapa y en el bloque de resultados locales.</p>
<ul>
  <li>Reclamá y verificá el perfil. Sin verificar, no compite.</li>
  <li>Categoría principal precisa, y las secundarias que apliquen de verdad.</li>
  <li>Horarios reales y actualizados, incluidos los feriados.</li>
  <li>Fotos propias del negocio, del equipo y del trabajo hecho.</li>
  <li>Respondé todas las reseñas, también las malas. Pedí reseñas a clientes reales — nunca las compres.</li>
</ul>

<h2>2. Consistencia de tus datos de contacto</h2>
<p>Nombre, teléfono y forma de contacto tienen que ser idénticos en todos lados: sitio web, Google Business, Instagram, Facebook, directorios. Si en un lado aparece un número y en otro uno distinto, Google pierde confianza en cuál es el correcto.</p>

<h2>3. SEO técnico del sitio</h2>
<p>Es la parte invisible y donde más sitios fallan:</p>
<ul>
  <li><strong>Velocidad.</strong> Core Web Vitals medidos en celular, que es donde llega la mayoría del tráfico.</li>
  <li><strong>Un H1 por página</strong>, con jerarquía de encabezados coherente.</li>
  <li><strong>Título y descripción únicos</strong> en cada página. Nada de repetir el mismo en las cuarenta.</li>
  <li><strong>URLs limpias y estables.</strong> Si tenés que cambiar una, dejá una redirección 301.</li>
  <li><strong>Datos estructurados</strong> de Schema.org con información real del negocio.</li>
  <li><strong>Sitemap XML y robots.txt</strong> correctos, y el sitio en Google Search Console.</li>
  <li><strong>Idioma declarado correctamente.</strong> Un sitio en español declarado como inglés confunde al buscador.</li>
</ul>

<h2>4. Contenido con intención geográfica</h2>
<p>Una página por intención de búsqueda. Si ofrecés tres servicios distintos, son tres páginas, no una sola con todo mezclado. Y mencioná las zonas donde realmente trabajás — San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas, Limón — cuando venga al caso.</p>
<p>Lo que no funciona es repetir la palabra clave hasta que la frase deje de tener sentido. Google lleva años detectando eso. Escribí para la persona que va a leer.</p>

<h2>5. Enlaces, pero de los legítimos</h2>
<p>Los enlaces siguen contando, y los que valen son los que se ganan: cámaras de comercio, directorios de negocios costarricenses, medios locales, asociaciones del gremio, proveedores y clientes que te mencionan de verdad.</p>
<p>Comprar paquetes de enlaces o participar en redes de sitios creados para enlazarse entre sí es la forma más rápida de que Google te deje de mostrar. No vale la pena.</p>

<h2>6. Medir y corregir</h2>
<p>Sin datos es adivinar. Google Search Console te dice qué buscó la gente que llegó a tu sitio, en qué posición aparecés y qué páginas tienen problemas. Es gratis y es la herramienta más útil que existe para esto.</p>

<h2>Cuánto tarda</h2>
<p>Los arreglos técnicos y el perfil de Google Business pueden mover cosas en semanas. Posicionar términos competitivos toma meses de trabajo sostenido. Cualquiera que te prometa el primer lugar en dos semanas está vendiendo humo.</p>
<p>Si querés que revisemos tu caso, en <a href="/seo-costa-rica/">SEO en Costa Rica</a> está lo que incluye una auditoría. Y si el sitio es viejo o lento, a veces sale más a cuenta rehacerlo que parcharlo.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
