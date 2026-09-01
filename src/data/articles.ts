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
<p>Nuestra <a href="/product/pagina-web-profesional-sin-carrito-de-compras/">página web profesional</a> cae en ese rango e incluye diseño responsive, las secciones esenciales, formulario, botón de WhatsApp y la base de SEO. El número exacto depende de cuántas secciones lleve y de si los textos vienen listos.</p>

<h3>Tienda online — de $800 a $2,500</h3>
<p>Acá se suma catálogo, carrito, pasarela de pago, cálculo de envíos y panel de pedidos. El rango es amplio porque un catálogo de 20 productos y uno de 2,000 no cuestan lo mismo, ni tampoco integrarse con un sistema de inventario existente.</p>
<p>Nuestra <a href="/product/pagina-web-tienda-online-con-carrito/">tienda online</a> se cotiza según el tamaño del catálogo y las integraciones que necesite.</p>

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
  <li><strong>Mantenimiento:</strong> actualizaciones de seguridad, backups y cambios menores. Nuestros <a href="/product/mantenimiento-web-basico-mensual/">planes mensuales</a> parten de lo mínimo —actualizar y respaldar— y suben según cuántos cambios necesités al mes.</li>
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
  {
    // ────────────────────────────────────────────────────────────────────────────────
    // Caso de cliente. De dónde sale cada afirmación:
    //   • Productos y modalidades (andamios, accesorios, alquiler, equipo nuevo
    //     y usado): publicados en gruponovocr.com — verificables.
    //   • Tienda en línea y CRM desarrollados por HacksinCodigos: confirmado
    //     por el cliente.
    //   • Testimonio de Carlos Rodríguez: ya publicado en la home del sitio.
    // NO hay métricas, porcentajes ni resultados de venta, y no debe agregarse
    // ninguno que no venga del propio cliente por escrito.
    // ────────────────────────────────────────────────────────────────────────────────
    slug: 'crm-empresarial-caso-grupo-novo',
    title: 'CRM y tienda en línea: el caso de Grupo Novo',
    metaTitle: 'CRM y tienda en línea: el caso de Grupo Novo | HacksinCodigos',
    metaDesc:
      'Cómo ayudamos a Grupo Novo a vender andamios y accesorios en línea en Costa Rica, y cómo un CRM a la medida ordena la operación de un distribuidor.',
    excerpt:
      'Le desarrollamos a Grupo Novo la tienda en línea con la que venden andamios y accesorios, y después el CRM. Acá está el razonamiento: por qué un distribuidor necesita un sistema propio y cómo se decide qué construir.',
    tag: '🏗️ Caso de cliente',
    tagColor: '#06b6d4',
    published: '2026-08-31',
    updated: '2026-08-31',
    readingMinutes: 9,
    relatedServices: [
      { href: '/software-a-la-medida-costa-rica/', label: 'software a la medida y CRM' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p>Casi todos los proyectos de software empiezan igual: alguien en la empresa dice "esto ya no se puede seguir llevando en Excel". Lo que viene después —qué se construye, en qué orden y hasta dónde— es donde se decide si el sistema sirve o queda como un gasto caro que nadie usa.</p>
<p>Este es el caso de <a href="https://gruponovocr.com" target="_blank" rel="noopener">Grupo Novo</a>, empresa costarricense dedicada a la venta y el alquiler de andamios y accesorios para construcción, con la que trabajamos desde hace tiempo: primero les desarrollamos la tienda en línea con la que venden, y después implementamos con ellos un CRM empresarial. Lo contamos porque el razonamiento se repite en casi cualquier distribuidor del país.</p>

<h2>Qué vende Grupo Novo</h2>
<p>Conviene entender el producto antes de hablar del sistema, porque el producto es el que manda. Grupo Novo trabaja andamios y todo lo que gira alrededor de ellos:</p>
<ul>
  <li><strong>Andamios</strong> — tipo box con pines de seguridad y con pin mariposa.</li>
  <li><strong>Accesorios para andamios</strong> — crucetas y sus pines, bases ajustables o niveladores, acoples, ruedas niveladoras, barandas, plataformas con seguro y escaleras de peldaños.</li>
  <li><strong>Puntales y formaletas</strong>, además de láminas de plywood fenólico.</li>
  <li><strong>Materiales de obra</strong> — alambre de amarre galvanizado, mallas para gavión y geotextiles.</li>
  <li><strong>Tres modalidades a la vez:</strong> venta de equipo nuevo, venta de equipo usado y alquiler.</li>
</ul>
<p>Esa última línea es la que define todo lo demás. Un negocio que vende, revende usado y alquila el mismo tipo de equipo no tiene un flujo comercial, tiene tres, y cada uno se comporta distinto.</p>

<h2>Primero el canal: la tienda en línea</h2>
<p>El trabajo arrancó por la <a href="/proyectos/grupo-novo/">tienda en línea</a>: llevar el catálogo completo a internet, organizado por categoría —andamios, accesorios, alambres, mallas—, con ficha, imagen y precio por producto, y con un diseño pensado para consultarse desde el celular. En este rubro el cliente no está en una oficina: está en la obra, con el teléfono en la mano, viendo qué le falta.</p>
<p>Hay dos decisiones de esa tienda que vale la pena señalar, porque son las que la hacen funcionar en construcción y no solo en retail:</p>
<ul>
  <li><strong>Carrito y WhatsApp conviviendo.</strong> Cada producto tiene "Añadir al carrito" y también "Consultar por WhatsApp". El que ya sabe qué quiere compra; el que necesita preguntar por cantidades, disponibilidad o alquiler escribe. Obligar a todos por el mismo camino habría perdido a la mitad.</li>
  <li><strong>El catálogo descargable.</strong> En este sector el comprador muchas veces tiene que pasarle la lista a un tercero —el ingeniero, el contratista, quien aprueba la compra—. Un PDF que se reenvía sirve para eso.</li>
</ul>
<p>Sobre ese trabajo, Carlos Rodríguez de Grupo Novo CR dejó publicado en nuestro sitio:</p>
<blockquote>"HacksinCodigos nos hizo la página de Grupo Novo desde cero y quedamos encantados. El sitio se ve profesional, carga rápido y ya recibimos pedidos en línea desde la primera semana."</blockquote>

<h2>Después el sistema: por qué siguió un CRM</h2>
<p>Ahí aparece la segunda parte del problema, la que ninguna tienda en línea resuelve sola: cuando el canal empieza a traer consultas, alguien tiene que sostenerlas. Un carrito atiende al cliente que ya decidió y paga en el momento. En andamios, buena parte de la venta no funciona así.</p>
<ul>
  <li><strong>Se cotiza antes de comprar.</strong> El contratista pide precios por cantidad, compara con otros proveedores y vuelve —o no— días después. Entre la consulta y la venta pasa tiempo.</li>
  <li><strong>El alquiler es una relación, no una transacción.</strong> Hay equipo que sale, equipo que vuelve, plazos y estado del equipo al devolverse. Eso no cabe en un pedido de tienda.</li>
  <li><strong>El mismo cliente vuelve muchas veces.</strong> Un contratista compra durante todo el proyecto y en el siguiente también. Saber qué se le vendió antes y a qué precio no es un lujo: es la conversación.</li>
  <li><strong>Buena parte pasa por WhatsApp.</strong> Y lo que pasa por WhatsApp queda en el teléfono de una persona, no en la empresa.</li>
</ul>

<h2>Qué resuelve un CRM en un negocio así</h2>
<p>Un CRM —<em>Customer Relationship Management</em>, gestión de la relación con el cliente— es el lugar donde se centraliza esa información que hoy está repartida. En un distribuidor con venta y alquiler, eso significa poder contestar sin esfuerzo quién es el cliente y qué historia tiene, qué se le cotizó y en qué quedó, a quién hay que darle seguimiento esta semana y cómo va el equipo comercial. Y algo que se subestima hasta que pasa: que si alguien se va de la empresa, la cartera se queda.</p>
<p>Ese es el núcleo. Todo lo demás —que converse con el inventario, con la facturación o con la propia tienda— se suma después, cuando el núcleo ya está en uso.</p>

<h2>Cómo se decide qué construir</h2>
<p>La parte que más determina el resultado no es técnica. Antes de escribir código hay que sentarse a ver cómo trabaja el equipo <em>hoy</em>: qué se anota, dónde, quién lo revisa y en qué punto exacto se pierde la información. Un sistema que automatiza un proceso mal entendido automatiza el problema.</p>
<p>De ahí sale la segunda decisión: <strong>qué no se automatiza</strong>. Automatizar todo suena bien en una propuesta y sale caro en la realidad. Se ataca el cuello de botella —normalmente uno solo— y el resto se deja como está hasta que se justifique.</p>
<p>Y la tercera: <strong>entregar por partes</strong>. El equipo empieza a usar el primer módulo mientras se construye el siguiente. Así los errores de diseño aparecen en la semana tres y no en el mes ocho, cuando corregirlos cuesta diez veces más. También hace que la gente adopte el sistema de a poco, que es la única forma en que lo adopta.</p>

<h2>¿A medida o una plataforma ya hecha?</h2>
<p>Es la pregunta honesta y hay que hacérsela antes de cotizar nada. Si el proceso comercial de una empresa es estándar, configurar bien una plataforma establecida cuesta menos y arranca antes. Lo hemos recomendado más de una vez, aunque signifique no vender el desarrollo.</p>
<p>El desarrollo a la medida se justifica cuando aparece alguna de estas tres cosas:</p>
<ul>
  <li><strong>Reglas propias</strong> que ninguna plataforma contempla: precios por volumen, listas por tipo de cliente, o el ida y vuelta del equipo alquilado.</li>
  <li><strong>Integración con lo que ya existe</strong>: que el sistema converse con la tienda en línea, el inventario o la facturación en vez de vivir aparte.</li>
  <li><strong>El costo por usuario</strong>: a partir de cierta cantidad de gente, la mensualidad de una plataforma supera lo que costaría el sistema propio.</li>
</ul>

<h2>La relación sigue abierta</h2>
<p>Seguimos trabajando con Grupo Novo, y esa es la parte que más nos importa de este caso. Un sitio y un sistema no se entregan y se olvidan: el catálogo cambia, entran productos, la operación se ajusta y aparecen cosas nuevas que conviene ordenar. Queremos seguir ayudándoles a vender andamios y accesorios, que es de lo que se trata todo esto.</p>
<p>Si tenés una empresa en un punto parecido —la operación ya no cabe en las hojas de cálculo, o todavía no vendés en línea lo que sí vendés por teléfono— escribinos y conversamos sobre cómo trabajás hoy. De esa conversación sale si te conviene una <a href="/tiendas-online-costa-rica/">tienda en línea</a>, un <a href="/software-a-la-medida-costa-rica/">sistema a la medida</a>, una plataforma configurada, o esperar un poco más. Las cuatro respuestas son válidas y las cuatro las hemos dado.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
