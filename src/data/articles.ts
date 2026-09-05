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
    readingMinutes: 11,
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

<h2>El rediseño del sitio y la pelea por aparecer en Google</h2>
<p>Al trabajo original le siguió un <strong>rediseño del sitio</strong> y un trabajo sostenido de indexación en <strong>Google Search Console</strong>. Van juntos y conviene explicar por qué.</p>
<p>Un catálogo puede estar impecable y aun así ser invisible: si Google no tiene registradas las URLs de los productos, esas páginas no existen para nadie que busque. Search Console es donde eso se ve — qué páginas están indexadas, cuáles se rastrearon y se descartaron, y por qué.</p>
<p>El trabajo consistió en enviar el sitemap, revisar página por página qué quedaba fuera y corregir la causa. En un catálogo de construcción eso importa mucho, porque cada producto es una búsqueda distinta: no es lo mismo quien busca <a href="https://gruponovocr.com/producto/andamio-tipo-box/" target="_blank" rel="noopener">andamio tipo box</a> que quien busca una <a href="https://gruponovocr.com/producto/cruceta-para-andamios/" target="_blank" rel="noopener">cruceta para andamios</a>, <a href="https://gruponovocr.com/producto/bases-ajustables-niveladores/" target="_blank" rel="noopener">bases ajustables</a>, <a href="https://gruponovocr.com/producto/ruedas-niveladoras/" target="_blank" rel="noopener">ruedas niveladoras</a> o <a href="https://gruponovocr.com/producto/barandas/" target="_blank" rel="noopener">barandas</a>.</p>
<p>Y el catálogo no termina en andamios. También hay <a href="https://gruponovocr.com/producto/laminas-de-plywood-fenolico/" target="_blank" rel="noopener">láminas de plywood fenólico</a>, <a href="https://gruponovocr.com/producto/alambre-de-amarre-2-2mm-galvanizado-zn10al-por-kilo/" target="_blank" rel="noopener">alambre de amarre galvanizado</a>, <a href="https://gruponovocr.com/producto/malla-de-gavion-2-7mm-galvanizada-zn-10-al-top/" target="_blank" rel="noopener">malla de gavión</a> y <a href="https://gruponovocr.com/producto/geotextil-geomax-300-g-m%c2%b2-por-m%c2%b2/" target="_blank" rel="noopener">geotextil</a>. Cada uno con su ficha, su precio y su botón de consulta — que es lo que hace que una búsqueda específica termine en una consulta concreta y no en un rebote.</p>
<p>El <a href="https://gruponovocr.com/shop/" target="_blank" rel="noopener">catálogo completo</a> funciona como índice de todo eso.</p>

<h2>La relación sigue abierta</h2>
<p>Seguimos trabajando con Grupo Novo, y esa es la parte que más nos importa de este caso. Un sitio y un sistema no se entregan y se olvidan: el catálogo cambia, entran productos, la operación se ajusta y aparecen cosas nuevas que conviene ordenar. Queremos seguir ayudándoles a vender andamios y accesorios, que es de lo que se trata todo esto.</p>
<p>Si tenés una empresa en un punto parecido —la operación ya no cabe en las hojas de cálculo, o todavía no vendés en línea lo que sí vendés por teléfono— escribinos y conversamos sobre cómo trabajás hoy. De esa conversación sale si te conviene una <a href="/tiendas-online-costa-rica/">tienda en línea</a>, un <a href="/software-a-la-medida-costa-rica/">sistema a la medida</a>, una plataforma configurada, o esperar un poco más. Las cuatro respuestas son válidas y las cuatro las hemos dado.</p>
`,
  },
  {
    // Hechos verificables en ryvdental.com: ubicación, trayectoria, tratamientos,
    // páginas por especialidad y por profesional. Servicios prestados según el
    // cliente: lanzamiento del sitio y SEO. Sin cifras de resultado.
    slug: 'caso-ryv-dental-sitio-web-clinica-dental',
    title: 'RyV Dental: lanzamiento del sitio y SEO para una clínica dental en Palmares',
    metaTitle: 'Caso RyV Dental — Sitio web y SEO para clínica dental | HacksinCodigos',
    metaDesc:
      'Cómo llevamos a internet a RyV Dental, clínica dental en Palmares: una página por tratamiento, otra por especialista, SEO local y contenido de blog.',
    excerpt:
      'Una clínica con más de treinta años de trayectoria no se vendía sola en Google. Le lanzamos el sitio, armamos la estructura de SEO y escribimos parte del blog.',
    tag: '🦷 Caso de cliente',
    tagColor: '#38bdf8',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 10,
    relatedServices: [
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO' },
    ],
    bodyHtml: `
<p>Hay negocios que en persona son impecables y en internet no existen. Ese era el punto de partida de <a href="https://ryvdental.com" target="_blank" rel="noopener">RyV Dental</a>, una clínica dental familiar en <strong>Palmares, Alajuela</strong>, dirigida por madre e hija, con más de treinta años atendiendo pacientes.</p>
<p>La reputación la tenían hecha, y de boca en boca les funcionaba. El problema era el paciente nuevo: el que abre Google y busca "ortodoncia invisible en Alajuela" o "clínica dental en Palmares" sin conocer a nadie. Ese paciente encontraba a cualquiera menos a ellas.</p>

<h2>Qué hicimos</h2>
<p>Dos cosas, en este orden: <strong>lanzamos el sitio</strong> y después <strong>armamos la estructura de SEO</strong> para que Google entendiera qué se hace en esa clínica. Van juntas — un sitio bonito que Google no sabe leer no trae pacientes, y una estrategia de SEO sobre un sitio mal armado no tiene de dónde agarrarse.</p>

<h2>La decisión de fondo: una página por intención de búsqueda</h2>
<p>El error más común en sitios de clínicas es meter todos los tratamientos en una sola página de "Servicios". Se ve ordenado y no posiciona en nada, porque Google no sabe si esa página trata de endodoncia, de ortodoncia o de blanqueamiento.</p>
<p>Cada tratamiento es una búsqueda distinta, hecha por una persona distinta, con una preocupación distinta. Así que cada tratamiento tiene su propia página:</p>
<ul>
  <li><a href="https://ryvdental.com/invisalign/" target="_blank" rel="noopener">Invisalign</a> — ortodoncia invisible, con el proceso completo explicado paso a paso.</li>
  <li><a href="https://ryvdental.com/diseno-de-sonrisa/" target="_blank" rel="noopener">Diseño de sonrisa</a> — tratamientos estéticos para lograr una sonrisa armónica con el rostro.</li>
  <li><a href="https://ryvdental.com/ortodoncia/" target="_blank" rel="noopener">Ortodoncia</a> — alineación dental y corrección de mordida.</li>
  <li><a href="https://ryvdental.com/botox/" target="_blank" rel="noopener">Botox estético y para bruxismo</a> — aplicación con enfoque estético y también terapéutico.</li>
  <li><a href="https://ryvdental.com/cirugia-maxilofacial/" target="_blank" rel="noopener">Cirugía maxilofacial</a> — procedimientos orales y maxilofaciales.</li>
  <li><a href="https://ryvdental.com/endodoncia/" target="_blank" rel="noopener">Endodoncia</a> — tratamientos para conservar la pieza dental.</li>
</ul>
<p>Todas cuelgan de una página de <a href="https://ryvdental.com/especialidades/" target="_blank" rel="noopener">especialidades</a> que funciona como índice. El que busca un tratamiento concreto cae directo en él; el que llega sin saber qué necesita, navega.</p>

<h2>Invisalign al frente, y por qué</h2>
<p>De todo lo que ofrece la clínica, <strong>Invisalign</strong> es lo que más se busca y lo que más se compara antes de decidir. Por eso es lo primero que se ve al entrar, con el proceso desglosado en cuatro pasos: escaneo digital 3D, valoración profesional, planificación personalizada, e inicio con seguimiento.</p>
<p>Ese detalle del <strong>escaneo digital 3D</strong> —que el paciente ve en pantalla cómo le va a quedar la sonrisa antes de empezar— es exactamente el tipo de cosa que hay que poner en el sitio. Es lo que le quita el miedo a alguien que está dudando, y lo que ninguna clínica genérica puede copiar sin tener el equipo.</p>

<h2>Una página por cada profesional</h2>
<p>El equipo de RyV Dental tiene una página propia por cada persona, además de la página conjunta de <a href="https://ryvdental.com/especialistas/" target="_blank" rel="noopener">especialistas</a>.</p>
<p>Esto no es vanidad y tiene dos razones concretas. La primera es que muchos pacientes buscan por nombre — les recomendaron a alguien y quieren verificar quién es antes de pedir cita. Si ese nombre no está en ninguna página, la búsqueda muere. La segunda es que en salud, la confianza es el producto: ver la cara, la formación y la especialidad de quien te va a atender pesa más que cualquier texto de marketing.</p>
<p>Lo mismo aplica a <a href="https://ryvdental.com/quienes-somos/" target="_blank" rel="noopener">la historia de la clínica</a>: que sea familiar, dirigida por madre e hija, con más de treinta años, es un dato que diferencia de verdad. Ninguna cadena puede decir lo mismo.</p>

<h2>El SEO local: Palmares primero</h2>
<p>Una clínica dental no compite contra todo el país. Compite contra las clínicas a las que un paciente está dispuesto a manejar. El trabajo de <a href="/seo-costa-rica/">SEO</a> se orientó a eso:</p>
<ul>
  <li><strong>Estructura semántica</strong> y metadatos únicos por página, para que cada tratamiento pueda posicionar por su cuenta.</li>
  <li><strong>Schema.org</strong> declarando el negocio, su ubicación y sus servicios, para que Google los entienda sin adivinar.</li>
  <li><strong>Menciones geográficas donde corresponde</strong> — Palmares y la zona de Alajuela — sin repetir la palabra hasta el ridículo, que es lo que hace que una página se lea mal y termine penalizada.</li>
  <li><strong>Velocidad.</strong> El sitio es estático: HTML ya construido, sin base de datos que consultar en cada visita. Un sitio lento pierde al visitante antes de que cargue la primera imagen, y en móvil eso pasa todo el tiempo.</li>
</ul>

<h2>El blog: la búsqueda que ocurre antes de buscar clínica</h2>
<p>Además del sitio y el SEO, escribimos parte del contenido del <a href="https://ryvdental.com/blog/" target="_blank" rel="noopener">blog de la clínica</a>.</p>
<p>El blog no está para "publicar seguido", que es la razón por la que casi todos los blogs de empresa se abandonan a los tres meses. Está para captar la búsqueda que pasa <em>antes</em> de que alguien busque una clínica.</p>
<p>Porque el recorrido real es este: primero la persona busca si el tratamiento le sirve, cuánto dura o si duele. Solo después busca dónde hacérselo. Una página de servicio contesta la segunda pregunta; el blog contesta la primera, cuando todavía no hay ninguna clínica en la cabeza del paciente.</p>
<p>Un ejemplo de cómo se aterriza eso es el artículo sobre <a href="https://ryvdental.com/blog/alineadores-invisalign-en-occidente/" target="_blank" rel="noopener">alineadores Invisalign en Occidente</a>. Junta las dos cosas que hay que juntar: el tratamiento que la gente investiga y la zona donde la clínica trabaja. Quien busca "Invisalign" a secas compite contra el mundo; quien busca alineadores en su región es un paciente que puede llegar de verdad a Palmares.</p>
<p>El otro artículo publicado es la <a href="https://ryvdental.com/blog/bienvenidos-al-blog-de-ryv-dental/" target="_blank" rel="noopener">presentación del blog</a>, que fija el tono: explicar, no vender.</p>
<p>Es la misma lógica de nuestra <a href="/blog/guia-seo-negocios-locales-costa-rica/">guía de SEO local</a> — el contenido tiene que servirle a alguien que todavía no está listo para contratar.</p>

<h2>El camino al contacto, corto</h2>
<p>Desde cualquier página se puede solicitar una valoración por WhatsApp. No hay formulario de doce campos ni "espere nuestra respuesta en 48 horas". En una decisión como esta, la persona quiere preguntar algo concreto —cuánto sale, cuánto dura, duele— y necesita que le contesten hoy.</p>

<h2>Qué se lleva otro negocio de este caso</h2>
<p>Tres cosas, y sirven para cualquier consultorio, taller o servicio profesional:</p>
<ul>
  <li><strong>Una página por servicio, no una lista.</strong> Si ofrecés seis cosas distintas, son seis páginas. Es más trabajo y es la única forma de aparecer en seis búsquedas.</li>
  <li><strong>Lo que te hace distinto va arriba.</strong> El escaneo 3D, los treinta años, que sea familiar. Eso es lo que nadie más puede escribir.</li>
  <li><strong>La confianza tiene cara.</strong> En servicios donde alguien te pone el cuerpo o la plata en las manos, mostrar quién sos vale más que cualquier adjetivo.</li>
</ul>
<p>¿Tenés un consultorio o un negocio de servicios que no aparece en Google? Contanos cómo trabajás y te decimos qué estructura necesita tu sitio. Podés ver el <a href="/proyectos/ryv-dental/">caso completo en el portafolio</a> o cómo trabajamos las <a href="/paginas-web-costa-rica/">páginas web en Costa Rica</a>.</p>
`,
  },
  {
    // Hechos verificables en redesdeportivascr.com: tipos de red, materiales,
    // cobertura y modo de cotizar. Servicios prestados según el cliente: diseño
    // de logo, sitio web y presencia de marca. Sin cifras de resultado.
    slug: 'caso-redes-deportivas-cr-logo-sitio-y-presencia',
    title: 'Redes Deportivas CR: logo, sitio y presencia para una fábrica nacional',
    metaTitle: 'Caso Redes Deportivas CR — Logo, sitio y marca | HacksinCodigos',
    metaDesc:
      'Cómo le armamos la identidad y el sitio a una fábrica costarricense de redes deportivas y de protección, con una página por tipo de red.',
    excerpt:
      'Una fábrica que teje redes a la medida no vende "redes": vende redes de fútbol, de catamarán o de balcón, que son búsquedas distintas. Así armamos el logo, el sitio y la presencia.',
    tag: '🥅 Caso de cliente',
    tagColor: '#22c55e',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 8,
    relatedServices: [
      { href: '/diseno-web-costa-rica/', label: 'diseño y marca' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
    ],
    bodyHtml: `
<p><a href="https://redesdeportivascr.com" target="_blank" rel="noopener">Redes Deportivas CR</a> es una fábrica nacional que teje redes a la medida: deportivas, de protección y de descanso. El producto es bueno y el oficio está. Lo que faltaba era todo lo demás — la marca, el sitio y la forma de que alguien que necesita una red los encuentre.</p>
<p>Hicimos las tres cosas: <strong>diseño de logo, sitio web y presencia de marca</strong>.</p>

<h2>Primero entender qué se vende</h2>
<p>Este fue el punto que definió el proyecto entero. Redes Deportivas no vende "redes". Vende cosas que no tienen casi nada que ver entre sí:</p>
<ul>
  <li>Un club que necesita <a href="https://redesdeportivascr.com/redes-de-futbol/" target="_blank" rel="noopener">redes de fútbol</a> para sus marcos.</li>
  <li>Un gimnasio que cambia las <a href="https://redesdeportivascr.com/redes-de-baloncesto/" target="_blank" rel="noopener">redes de baloncesto</a> desgastadas.</li>
  <li>Una cancha que pone <a href="https://redesdeportivascr.com/redes-de-tenis/" target="_blank" rel="noopener">redes de tenis y pádel</a> con banda de lona y cable de acero.</li>
  <li>Un colegio con <a href="https://redesdeportivascr.com/redes-de-voleibol/" target="_blank" rel="noopener">redes de voleibol</a> de sala o de playa.</li>
  <li>Un driving range con <a href="https://redesdeportivascr.com/redes-de-golf/" target="_blank" rel="noopener">redes de golf</a> de impacto.</li>
  <li>Un dueño de barco que necesita el trampolín, o sea <a href="https://redesdeportivascr.com/redes-de-catamaran/" target="_blank" rel="noopener">redes de catamarán</a> resistentes a salitre y sol.</li>
  <li>Un papá que quiere <a href="https://redesdeportivascr.com/redes-de-proteccion-y-seguridad/" target="_blank" rel="noopener">redes de protección</a> para el balcón.</li>
  <li>Un hotel que instala <a href="https://redesdeportivascr.com/redes-de-descanso/" target="_blank" rel="noopener">redes de descanso para glamping</a> sobre un mirador.</li>
  <li>Un proyecto que necesita <a href="https://redesdeportivascr.com/redes-perimetrales/" target="_blank" rel="noopener">redes perimetrales</a> para que el balón no salga de la cancha.</li>
  <li>Alguien que busca <a href="https://redesdeportivascr.com/redes-para-mascotas/" target="_blank" rel="noopener">redes para mascotas</a> para que el gato no se caiga.</li>
</ul>
<p>Diez productos, diez compradores distintos, diez búsquedas distintas en Google. Meter todo eso en una página de "Productos" habría sido perder las diez.</p>

<h2>El sitio: una página por tipo de red</h2>
<p>Cada tipo de red tiene su propia página, con lo que de verdad decide la compra: <strong>material, calibre y luz de malla</strong>. Porque una red de fútbol de nylon para cancha techada y una de polipropileno con tratamiento UV para intemperie no son la misma red, y el que compra necesita saber cuál le toca.</p>
<p>Ese nivel de detalle técnico hace dos cosas a la vez. Le sirve al comprador que sabe lo que busca, y le sirve a Google, que necesita texto real para entender de qué trata una página. Es contenido honesto que además posiciona — no hay que elegir entre las dos cosas.</p>

<h2>El logo y la presencia</h2>
<p>La identidad tenía que aguantar dos usos que no se parecen: el sello en una factura y la marca sobre una foto de una cancha a pleno sol. Un logo con degradados y detalles finos se cae en el segundo caso.</p>
<p>El trabajo de <a href="/diseno-web-costa-rica/">marca</a> se orientó a que funcione en tamaño chico, en una sola tinta y sobre fondos que no se controlan. Y de ahí bajó al sitio: tipografía, colores y tratamiento de fotografía consistentes, para que el conjunto se lea como una empresa formal y no como un taller improvisado. En fabricación eso importa: nadie le encarga una red de contención perimetral a alguien que parece que va a desaparecer.</p>

<h2>Cotizar sin formularios</h2>
<p>Cada página lleva a WhatsApp con el mensaje ya escrito. Esa decisión es deliberada.</p>
<p>Una red a la medida no tiene precio de lista: depende del vano real, del material y de dónde va a estar instalada. Un formulario de "solicite cotización" obliga al cliente a adivinar qué datos dar, y obliga a la empresa a mandar un correo que quizás nadie abre. La conversación por WhatsApp resuelve en cinco mensajes lo que un formulario no resuelve nunca: cuánto mide, dónde va, sol o techado.</p>

<h2>Los trabajos hechos, con fotos</h2>
<p>El sitio incluye galería de proyectos instalados y una sección de proyectos con el detalle de cómo corre un trabajo de la medición a la entrega.</p>
<p>En un producto que se fabrica a medida, la foto del trabajo terminado hace más que cualquier argumento. El que va a encargar una red de descanso sobre un mirador quiere ver una red de descanso sobre un mirador, con gente encima, sostenida sobre el vacío. Ahí se acaba la duda.</p>

<h2>Qué se lleva otro fabricante de este caso</h2>
<ul>
  <li><strong>Si vendés diez cosas, necesitás diez páginas.</strong> Cada producto es una búsqueda propia y una página compartida no gana ninguna.</li>
  <li><strong>Las especificaciones técnicas no espantan: venden.</strong> El que sabe lo que busca compra donde encuentra el dato; el que no sabe, aprende y confía.</li>
  <li><strong>Mostrá el trabajo terminado.</strong> En fabricación a medida, la galería es el catálogo.</li>
</ul>
<p>¿Fabricás o instalás algo a medida y tu sitio no lo refleja? Contanos qué hacés y te proponemos la estructura. Mirá el <a href="/proyectos/redes-deportivas-cr/">caso en el portafolio</a> o cómo trabajamos las <a href="/paginas-web-costa-rica/">páginas web</a> y el <a href="/seo-costa-rica/">SEO</a>.</p>
`,
  },
  {
    // Categorías y estructura verificables en lacasitadelbebecr.com. Servicios
    // prestados según el cliente: rediseño del sitio y producción de contenido
    // de Instagram para el mes completo. Sin cifras de resultado.
    slug: 'caso-la-casita-del-bebe-rediseno-y-contenido',
    title: 'La Casita del Bebé: rediseño de la tienda y contenido de Instagram para todo el mes',
    metaTitle: 'Caso La Casita del Bebé — Rediseño y contenido | HacksinCodigos',
    metaDesc:
      'Rediseño de la tienda en línea de La Casita del Bebé y producción del contenido de Instagram para el mes completo. Cómo se conectan una cosa con la otra.',
    excerpt:
      'Rediseñamos la tienda y le producimos el contenido de Instagram para todo el mes. Las dos cosas juntas, porque publicar sin dónde aterrizar es tirar el alcance a la basura.',
    tag: '🍼 Caso de cliente',
    tagColor: '#f472b6',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 7,
    relatedServices: [
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
      { href: '/diseno-web-costa-rica/', label: 'diseño y contenido' },
    ],
    bodyHtml: `
<p><a href="https://lacasitadelbebecr.com" target="_blank" rel="noopener">La Casita del Bebé</a> es una tienda costarricense de productos para bebé. Vende coches, sillas para carro, colechos y todo lo que se necesita cuando llega un hijo — con punto de venta físico y <a href="https://lacasitadelbebecr.com/tienda/" target="_blank" rel="noopener">tienda en línea</a>.</p>
<p>Hicimos dos cosas: <strong>rediseñamos el sitio</strong> y <strong>producimos el contenido de Instagram para el mes completo</strong>. No son dos proyectos: es uno.</p>

<h2>Por qué van juntas</h2>
<p>Publicar en Instagram sin tener dónde aterrizar al que se interesa es regalar el alcance. La persona ve el coche, le gusta, entra al perfil, y se encuentra con un enlace que la deja en una página que carga lento o que no se entiende en el celular. Ahí se acabó.</p>
<p>Y al revés también falla: una tienda impecable a la que nadie llega no vende. En productos de bebé el descubrimiento pasa por Instagram — es donde la mamá embarazada mira, compara y guarda cosas meses antes de comprar.</p>
<p>Por eso el trabajo fue el circuito completo: contenido que trae gente, tienda que la convierte.</p>

<h2>El rediseño: mobile primero, en serio</h2>
<p>Casi todo el tráfico de esta tienda llega del celular, y buena parte llega de Instagram — o sea, dentro del navegador de la propia app, que es más lento y más angosto que Chrome. Ese es el escenario real, no el monitor del diseñador.</p>
<p>El rediseño se ordenó alrededor de eso:</p>
<ul>
  <li><strong>Categorías claras desde el primer toque.</strong> <a href="https://lacasitadelbebecr.com/product-category/coches/" target="_blank" rel="noopener">Coches</a>, <a href="https://lacasitadelbebecr.com/product-category/sillas-para-carro/" target="_blank" rel="noopener">sillas para carro</a>, <a href="https://lacasitadelbebecr.com/product-category/colechos/" target="_blank" rel="noopener">colechos</a>, <a href="https://lacasitadelbebecr.com/product-category/mesedoras/" target="_blank" rel="noopener">mecedoras</a>, <a href="https://lacasitadelbebecr.com/product-category/sillas-de-comer/" target="_blank" rel="noopener">sillas de comer</a> y <a href="https://lacasitadelbebecr.com/product-category/accesorios/" target="_blank" rel="noopener">accesorios</a>. Cada una es una página propia, que es como la gente busca: nadie escribe "productos para bebé", escribe "silla para carro".</li>
  <li><strong>Ficha de producto que responde antes de que pregunten.</strong> En esta categoría la duda es siempre la misma: medidas, edad recomendada, si cumple norma, si sirve para el carro que tengo.</li>
  <li><strong>Carrito y pago sin fricción.</strong> Cada paso de más es gente que abandona con el bebé llorando de fondo.</li>
</ul>

<h2>El contenido: un mes completo, entregado de una vez</h2>
<p>Lo que más frena a un negocio pequeño en redes no es la falta de ideas: es tener que inventar algo cada mañana mientras se atiende la tienda. Se publica tres días seguidos, se corta una semana, se vuelve. Y el alcance se cae.</p>
<p>Por eso el contenido se produce <strong>para el mes entero, entregado de una sola vez</strong>: las piezas listas, con su texto, en el orden en que se publican. La dueña no decide qué subir hoy — ya está decidido.</p>
<p>La mezcla que funciona en esta categoría no es todo producto:</p>
<ul>
  <li><strong>Producto</strong>, con la foto que sí muestra el detalle que importa.</li>
  <li><strong>Utilidad</strong> — qué mirar antes de comprar una silla para carro, cómo se instala, hasta qué edad sirve. Es lo que la gente guarda y comparte.</li>
  <li><strong>Confianza</strong> — la tienda, quién atiende, cómo se entrega. En productos para bebé nadie le compra a una marca anónima.</li>
</ul>
<p>Todo con la misma identidad visual del sitio, para que quien salta de Instagram a la tienda sienta que sigue en el mismo lugar. Cuando el salto se nota, se pierde la venta.</p>

<h2>Lo que no hicimos</h2>
<p>No prometimos publicar por ellos todos los días ni manejarles la cuenta. El contenido se entrega y la tienda lo publica. Es más barato, no genera dependencia, y el negocio conserva el control de su voz — que en una marca familiar vale más de lo que parece.</p>

<h2>Qué se lleva otro comercio de este caso</h2>
<ul>
  <li><strong>El contenido y la tienda son una sola cosa.</strong> Invertir en uno sin el otro es tirar plata en la mitad del circuito.</li>
  <li><strong>Producí en lote.</strong> Un mes de contenido resuelto de una vez se sostiene; improvisar cada día, no.</li>
  <li><strong>Categorías con página propia.</strong> La gente busca el producto, no la tienda.</li>
</ul>
<p>¿Vendés productos y vivís de Instagram? Contanos qué publicás hoy y te decimos qué le falta a la tienda para aprovecharlo. Mirá el <a href="/proyectos/la-casita-del-bebe/">caso en el portafolio</a> o cómo trabajamos las <a href="/tiendas-online-costa-rica/">tiendas online en Costa Rica</a>.</p>
`,
  },
  {
    // Servicios y zonas verificables en ticoshomeremodeling.com. Servicios
    // prestados según el cliente: logo, sitio web, SEO y presencia. El sitio
    // está en inglés porque su mercado es Connecticut. Sin cifras de resultado.
    slug: 'caso-ticos-home-remodeling-logo-sitio-y-seo',
    title: "Tico's Home Remodeling: logo, sitio y SEO local para Connecticut",
    metaTitle: "Caso Tico's Home Remodeling — Sitio y SEO local | HacksinCodigos",
    metaDesc:
      'Cómo le armamos la marca, el sitio y el SEO local a una empresa de remodelación y drywall en Connecticut, desde Costa Rica y con una página por servicio.',
    excerpt:
      'Una empresa de remodelación en Connecticut compite contra el que sale primero en Google al buscar "drywall repair near me". Le hicimos el logo, el sitio y el SEO local.',
    tag: '🔨 Caso de cliente',
    tagColor: '#f59e0b',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 8,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO' },
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web' },
    ],
    bodyHtml: `
<p><a href="https://ticoshomeremodeling.com" target="_blank" rel="noopener">Tico's Home Remodeling</a> es una empresa de remodelación y drywall que trabaja en Connecticut, Estados Unidos. Le hicimos <strong>el logo, el sitio, el SEO y la presencia de marca</strong> — el paquete completo, desde Costa Rica.</p>
<p>Vale la pena aclarar eso último: el proyecto es en inglés y para un mercado estadounidense. Nada de esto exige oficina en el país del cliente. Todo el proceso fue remoto.</p>

<h2>Contra quién se compite de verdad</h2>
<p>En remodelación residencial en Estados Unidos, la búsqueda que decide es corta y con intención inmediata: <em>drywall repair near me</em>, <em>bathroom remodeling</em>, <em>ceiling repair</em>. El que la hace ya tiene el problema en la casa y va a llamar a uno de los tres primeros resultados.</p>
<p>Contra eso no compite un sitio bonito. Compite un sitio que Google entiende, que carga rápido y que tiene una página específica para esa búsqueda específica.</p>

<h2>Una página por servicio, y son muchos</h2>
<p>Esta empresa hace más de veinte cosas distintas, y cada una es una búsqueda aparte. En vez de una página de "Services" con una lista, cada especialidad tiene la suya:</p>
<ul>
  <li>Drywall — <a href="https://ticoshomeremodeling.com/services/drywall-installation/" target="_blank" rel="noopener">instalación</a>, <a href="https://ticoshomeremodeling.com/services/drywall-repair/" target="_blank" rel="noopener">reparación</a>, <a href="https://ticoshomeremodeling.com/services/drywall-texturing/" target="_blank" rel="noopener">texturizado</a> y <a href="https://ticoshomeremodeling.com/services/ceiling-repair/" target="_blank" rel="noopener">reparación de cielo raso</a>.</li>
  <li>Pintura — <a href="https://ticoshomeremodeling.com/services/interior-painting/" target="_blank" rel="noopener">interiores</a> y <a href="https://ticoshomeremodeling.com/services/deck-painting/" target="_blank" rel="noopener">decks</a>.</li>
  <li>Pisos — <a href="https://ticoshomeremodeling.com/services/laminate-flooring-installation/" target="_blank" rel="noopener">laminado</a>, <a href="https://ticoshomeremodeling.com/services/vinyl-flooring-installation/" target="_blank" rel="noopener">vinílico</a> y <a href="https://ticoshomeremodeling.com/services/tile-flooring-installation/" target="_blank" rel="noopener">cerámica</a>.</li>
  <li>Carpintería — <a href="https://ticoshomeremodeling.com/services/crown-molding-installation/" target="_blank" rel="noopener">molduras de corona</a> y <a href="https://ticoshomeremodeling.com/services/trim-installation/" target="_blank" rel="noopener">acabados</a>.</li>
  <li>Remodelación — <a href="https://ticoshomeremodeling.com/services/bathroom-remodeling/" target="_blank" rel="noopener">baños</a>, <a href="https://ticoshomeremodeling.com/services/water-damage-repair/" target="_blank" rel="noopener">daños por agua</a>, <a href="https://ticoshomeremodeling.com/services/deck-repair/" target="_blank" rel="noopener">decks</a> y <a href="https://ticoshomeremodeling.com/services/porch-repair/" target="_blank" rel="noopener">porches</a>.</li>
</ul>
<p>Es mucho más trabajo que una página sola. Y es la diferencia entre aparecer en una búsqueda o en veinte.</p>

<h2>Las zonas también son páginas</h2>
<p>En SEO local, la geografía pesa tanto como el servicio. El sitio tiene una sección de <a href="https://ticoshomeremodeling.com/service-areas/" target="_blank" rel="noopener">zonas de servicio</a> que declara dónde trabajan realmente.</p>
<p>El subrayado importa: <strong>realmente</strong>. Listar cincuenta ciudades donde no se pisa nunca es una técnica vieja que hoy no funciona y que además genera llamadas que hay que rechazar. Se listan las zonas que se cubren, y punto.</p>

<h2>Galería, reseñas y preguntas</h2>
<p>En remodelación, el que contrata está entregando la llave de su casa a un desconocido. Tres piezas atacan esa desconfianza:</p>
<ul>
  <li>La <a href="https://ticoshomeremodeling.com/gallery/" target="_blank" rel="noopener">galería</a> de trabajos terminados: en este oficio, el antes y el después es el argumento.</li>
  <li>Las <a href="https://ticoshomeremodeling.com/reviews/" target="_blank" rel="noopener">reseñas</a> de clientes.</li>
  <li>Las <a href="https://ticoshomeremodeling.com/faq/" target="_blank" rel="noopener">preguntas frecuentes</a>, que resuelven las dudas que si no se resuelven ahí, se convierten en un cliente que no llama.</li>
</ul>

<h2>El logo y la marca</h2>
<p>La identidad de una empresa de remodelación tiene que aguantar el rótulo de la camioneta, la camisa del equipo y el encabezado de un presupuesto. Son tres soportes muy distintos y ninguno perdona un logo delicado.</p>
<p>El <a href="/diseno-web-costa-rica/">trabajo de marca</a> apuntó a eso: que se lea a distancia, que funcione en una sola tinta y que transmita oficio y formalidad. En un mercado donde abunda el contratista informal, verse serio es parte del producto.</p>

<h2>Rápido porque es estático</h2>
<p>El sitio es estático: HTML ya construido, servido desde una red global, sin base de datos que consultar en cada visita. Alguien que busca "drywall repair" desde el celular, parado frente al hueco en la pared, no espera cuatro segundos. Se va al siguiente resultado.</p>

<h2>Qué se lleva otro contratista de este caso</h2>
<ul>
  <li><strong>Cada servicio es una búsqueda.</strong> Una página con la lista de todo no gana ninguna.</li>
  <li><strong>Decí dónde trabajás de verdad.</strong> Inflar la cobertura ya no engaña a Google y te llena la agenda de llamadas inútiles.</li>
  <li><strong>Mostrá trabajo terminado.</strong> En oficios, la foto vale más que el adjetivo.</li>
  <li><strong>La distancia no importa.</strong> Este proyecto se hizo desde Costa Rica para Connecticut, todo remoto.</li>
</ul>
<p>¿Tenés una empresa de servicios y no aparecés cuando te buscan? Contanos qué hacés y en qué zonas. Mirá el <a href="/proyectos/ticos-home-remodeling/">caso en el portafolio</a> o cómo trabajamos el <a href="/seo-costa-rica/">SEO</a>.</p>
`,
  },
  {
    // Secciones y materiales verificables en carlouis.net. El alcance del
    // trabajo es el que ya estaba publicado en nuestro portafolio desde la
    // migración. Sin cifras de resultado.
    slug: 'caso-carlouis-tienda-de-salsas-artesanales',
    title: 'Carlouis: rediseño, fotografía y contenido para una marca de salsas artesanales',
    metaTitle: 'Caso Carlouis — Rediseño, imágenes y contenido | HacksinCodigos',
    metaDesc:
      'Rediseño del sitio, producción de imágenes y contenido para Carlouis, marca costarricense de salsas artesanales gourmet. Cómo se vende sabor sin poder probarlo.',
    excerpt:
      'Una salsa artesanal se vende probándola, y en una pantalla no se prueba nada. Le rediseñamos el sitio, le produjimos las imágenes y escribimos parte del contenido.',
    tag: '🌶️ Caso de cliente',
    tagColor: '#ef4444',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 8,
    relatedServices: [
      { href: '/diseno-web-costa-rica/', label: 'diseño y contenido' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p><a href="https://www.carlouis.net/" target="_blank" rel="noopener">Carlouis</a> es una marca costarricense de salsas artesanales gourmet. Le hicimos <strong>el rediseño del sitio</strong>, <strong>la producción de imágenes</strong> y <strong>parte del contenido</strong>.</p>
<p>Las tres cosas atacan el mismo problema, que no es técnico: <strong>una salsa se vende cuando la probás</strong>, y en una pantalla no se puede probar nada.</p>

<h2>El problema de vender sabor por internet</h2>
<p>En una feria el producto se defiende solo: alguien pasa, prueba y compra. En línea hay que reemplazar esa prueba por otra cosa que genere la misma confianza — y no es el botón de "Añadir al carrito".</p>
<p>Quien duda entre una salsa artesanal y una industrial que cuesta la cuarta parte no está comparando precio. Se está preguntando <em>si la va a usar</em> o si se le va a quedar en la refrigeradora hasta que venza. Contestale esa pregunta y la venta se cae de madura.</p>
<p>Todo el trabajo salió de ahí.</p>

<h2>Las imágenes: el trabajo que más pesa</h2>
<p>En alimentos, la fotografía no ilustra el producto: <strong>es el producto</strong>. Es lo único que puede transmitir textura, color y densidad a alguien que nunca destapó el frasco.</p>
<p>Y hay una diferencia grande entre fotografiar un frasco y fotografiar lo que ese frasco hace. La foto del envase sobre fondo blanco sirve para el catálogo y no despierta hambre a nadie. La que vende es la que muestra la salsa <em>en uso</em> — sobre la comida, con la textura visible.</p>
<p>Esa distinción también sostiene el precio. En gourmet, la presentación es parte del argumento: el mismo producto fotografiado con criterio de supermercado se percibe caro, y fotografiado con criterio de marca se percibe como que vale lo que cuesta.</p>

<h2>El rediseño</h2>
<p>El sitio se rearmó alrededor de esas imágenes y de la identidad de la marca, aplicada de forma consistente en toda la experiencia. El <a href="https://www.carlouis.net/productos.html" target="_blank" rel="noopener">catálogo de productos</a> quedó como el centro, con la fotografía llevando el peso y el texto apoyando, no al revés.</p>
<p>Es un sitio liviano y estático, sin base de datos que consultar en cada visita — lo que importa cuando buena parte del tráfico llega del celular, muchas veces desde el navegador de una red social, que es más lento que Chrome.</p>

<h2>El contenido: los recetarios</h2>
<p>La pieza de contenido que más rinde en esta categoría no es una descripción de producto. Son los recetarios descargables: uno <a href="https://www.carlouis.net/assets/recetario-carlouis.pdf" target="_blank" rel="noopener">general</a> y otro <a href="https://www.carlouis.net/assets/recetario-bocadillos-carlouis.pdf" target="_blank" rel="noopener">de bocadillos</a>.</p>
<p>Un PDF de recetas hace tres cosas al mismo tiempo:</p>
<ul>
  <li><strong>Quita la objeción.</strong> Ya sabés qué vas a cocinar con eso, así que deja de ser un frasco que se puede quedar guardado.</li>
  <li><strong>Se comparte.</strong> Sale del sitio por WhatsApp y llega a gente que nunca oyó la marca. Es la pieza que trabaja sola.</li>
  <li><strong>Se queda.</strong> Vive en el teléfono del cliente y reaparece cada vez que abre las descargas. Una publicación de redes dura horas; esto dura meses.</li>
</ul>

<h2>Lo físico y lo digital, conectados</h2>
<p>La marca no vive solo en internet y el sitio lo refleja: hay <a href="https://www.carlouis.net/encuentranos.html" target="_blank" rel="noopener">dónde encontrarlos</a>, <a href="https://www.carlouis.net/cobertura.html" target="_blank" rel="noopener">cobertura de entrega</a> y una sección de <a href="https://www.carlouis.net/eventos.html" target="_blank" rel="noopener">eventos</a>, con páginas propias para las ferias en las que participan — como la de la <a href="https://www.carlouis.net/feria-forum-2-lindora.html" target="_blank" rel="noopener">feria en Fórum 2, Lindora</a>.</p>
<p>Esas páginas de evento son contenido con fecha de vencimiento, y aun así valen la pena. El que probó en la feria busca la marca esa misma noche en el teléfono; el que ve el sitio quiere saber dónde puede probarla. Si el sitio ignora lo físico, se rompe la mitad del recorrido.</p>
<p>Los <a href="https://www.carlouis.net/testimonios.html" target="_blank" rel="noopener">testimonios</a> cierran lo que la foto no puede: alguien más ya la probó y volvió a comprar.</p>

<h2>Qué se lleva otra marca de alimentos de este caso</h2>
<ul>
  <li><strong>Invertí en la fotografía antes que en cualquier otra cosa.</strong> En comida es el producto, no la decoración.</li>
  <li><strong>Vendé el uso, no el frasco.</strong> Recetas, maridajes, ideas: eso convierte más que la ficha técnica.</li>
  <li><strong>Regalá algo que se quede.</strong> Un PDF útil sigue trabajando meses después de la visita.</li>
  <li><strong>Conectá la feria con el sitio.</strong> Dónde encontrarte y hasta dónde entregás cierra el circuito de la venta.</li>
</ul>
<p>¿Tenés un producto artesanal y las fotos no le hacen justicia? Contanos qué vendés. Mirá el <a href="/proyectos/carlouis/">caso en el portafolio</a> o cómo trabajamos el <a href="/diseno-web-costa-rica/">diseño</a> y las <a href="/tiendas-online-costa-rica/">tiendas online</a>.</p>
`,
  },
  {
    // El alcance del trabajo es el que ya estaba publicado en nuestro portafolio
    // desde la migración. Sin cifras de resultado.
    slug: 'caso-costa-rica-realty-pro-portal-inmobiliario',
    title: 'Costa Rica Realty PRO: un sitio en WordPress con aplicación para vender propiedades',
    metaTitle: 'Caso Costa Rica Realty PRO — Sitio y app inmobiliaria | HacksinCodigos',
    metaDesc:
      'Sitio en WordPress con aplicación para publicar y gestionar propiedades, para una empresa que le vende bienes raíces en Costa Rica a compradores extranjeros.',
    excerpt:
      'Cuando el que compra vive en otro país, el sitio no acompaña la venta: la empieza. Le hicimos a Costa Rica Realty PRO el sitio en WordPress y la aplicación para vender propiedades.',
    tag: '🏝️ Caso de cliente',
    tagColor: '#14b8a6',
    published: '2026-09-05',
    updated: '2026-09-05',
    readingMinutes: 8,
    relatedServices: [
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
    ],
    bodyHtml: `
<p><a href="https://costaricarealtypro.com" target="_blank" rel="noopener">Costa Rica Realty PRO</a> vende bienes raíces en Costa Rica a un comprador que casi siempre está afuera. Le desarrollamos <strong>el sitio en WordPress</strong> y <strong>la aplicación con la que publican y gestionan las propiedades en venta</strong>.</p>

<h2>El comprador no puede pasar a ver</h2>
<p>Esto define todo lo demás. En bienes raíces local, el sitio acompaña una venta que se cierra visitando la propiedad. Acá el sitio <strong>es</strong> la primera visita, y muchas veces la única antes de que alguien decida poner una suma seria en un país donde no vive.</p>
<p>Eso sube el estándar de tres cosas a la vez: las fotos, la información y la facilidad para arrancar la conversación.</p>

<h2>El argumento del negocio, y por qué manda en el diseño</h2>
<p>Lo primero que dice su portada no es "las mejores propiedades". Es una advertencia: que el paraíso no se te convierta en una pesadilla.</p>
<p>Ese es el negocio de verdad. <a href="https://costaricarealtypro.com/#about-us" target="_blank" rel="noopener">Rob Villalta</a> es un estadounidense que ha vivido y trabajado entre Estados Unidos y Costa Rica durante décadas, y que ha comprado y construido en los dos países. Lo que vende no es solo la propiedad: es no meterse solo en un trámite extranjero, con ordenanzas locales que nadie de afuera conoce.</p>
<p>Un sitio inmobiliario genérico —fotos bonitas y un buscador— habría enterrado eso. Por eso <a href="https://costaricarealtypro.com/#services" target="_blank" rel="noopener">los servicios</a> y la trayectoria van arriba, compitiendo en jerarquía con las propiedades. En una venta consultiva, la confianza en la persona se vende antes que el inmueble.</p>

<h2>Las cuatro categorías</h2>
<p>La oferta se organiza en cuatro tipos de propiedad, que son cuatro compradores distintos: <strong>playa</strong>, <strong>naturaleza</strong>, <strong>apartamentos</strong> y <strong>comercial</strong>.</p>
<p>No es lo mismo el que busca una casa frente al mar para retirarse que el que busca finca con caída de agua, que el que compra un apartamento como inversión de alquiler, que el que busca local comercial. Cambia el precio, el trámite y el miedo que hay que resolverle a cada uno.</p>

<h2>La aplicación para vender propiedades</h2>
<p>La parte que no se ve desde afuera es la que más trabajo tiene. El sitio incluye una <strong>aplicación para publicar y administrar las propiedades en venta</strong>, con su <a href="https://costaricarealtypro.com/customer-cabinet/" target="_blank" rel="noopener">área de cliente</a>.</p>
<p>La razón de construir eso en vez de dejar el catálogo en páginas sueltas es simple: <strong>el inventario cambia</strong>. Las propiedades entran, se reservan, se venden y salen. Si cada alta obliga a llamar al desarrollador, en tres meses el sitio muestra propiedades que ya no existen — y no hay nada que queme más rápido la confianza de un comprador internacional que escribir por una casa que se vendió hace medio año.</p>
<p>Con la aplicación, la empresa publica, edita y retira propiedades por su cuenta. Es la misma lógica que aplicamos en cualquier <a href="/software-a-la-medida-costa-rica/">sistema a la medida</a>: el cliente tiene que poder operar sin depender de nosotros para cada cambio.</p>

<h2>Por qué WordPress acá</h2>
<p>No usamos WordPress por defecto — <a href="/desarrollo-web-costa-rica/">elegimos la tecnología según el proyecto</a>. Acá tenía sentido por dos razones concretas.</p>
<p>La primera es que el contenido lo administra el cliente. Cuando alguien va a entrar todas las semanas a mover propiedades y textos, un panel que ya conoce vale más que la arquitectura más elegante.</p>
<p>La segunda es que el catálogo es dinámico. Un generador estático brilla cuando el contenido cambia poco; un inventario inmobiliario cambia todo el tiempo y necesita una base de datos detrás.</p>
<p>El sitio corre con el tema Astra y Elementor, que es lo que hace que el cliente pueda ajustar la presentación sin tocar código.</p>

<h2>El contacto, sin trámite</h2>
<p>La <a href="https://costaricarealtypro.com/#contact" target="_blank" rel="noopener">vía de contacto</a> está donde el interesado termina de leer, no escondida en una página aparte.</p>
<p>En inversión inmobiliaria nadie compra apretando un botón: la conversación es larga y consultiva. Lo único que tiene que lograr el sitio es que esa conversación <em>empiece</em>. Todo lo que se interponga —un formulario de quince campos, un "le responderemos en 48 horas"— es un interesado que se fue a mirar propiedades en Panamá.</p>
<p>La sección de <a href="https://costaricarealtypro.com/#clients" target="_blank" rel="noopener">clientes</a> cumple la otra mitad: alguien que va a mandar dinero a otro país necesita ver que hubo gente antes que lo hizo y le fue bien.</p>

<h2>Qué se lleva otro negocio de este caso</h2>
<ul>
  <li><strong>Si tu comprador no puede venir, el sitio es la visita.</strong> Las fotos y la información dejan de ser importantes para pasar a ser todo lo que hay.</li>
  <li><strong>Si tu inventario cambia, necesitás administrarlo vos.</strong> Un catálogo que solo el desarrollador puede tocar se desactualiza y empieza a costar ventas.</li>
  <li><strong>En ventas consultivas, la persona se vende antes que el producto.</strong> La trayectoria y el criterio van arriba, no en un "quiénes somos" al final.</li>
  <li><strong>Escribí para el que no conoce el contexto.</strong> Lo obvio para vos no lo es para alguien a cinco mil kilómetros.</li>
</ul>
<p>¿Vendés algo que exige confianza a distancia, o tenés un catálogo que cambia seguido? Contanos el caso. Mirá el <a href="/proyectos/costa-rica-realty-pro/">caso en el portafolio</a> o cómo trabajamos el <a href="/desarrollo-web-costa-rica/">desarrollo web a medida</a>.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
