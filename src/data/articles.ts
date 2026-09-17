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
  /** Si es un caso de cliente, el slug del proyecto: de ahí sale el logo. */
  proyecto?: string;
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
      'Un sitio de negocio arranca desde $499 y un e-commerce completo va de $800 a $2,500. Acá está el desglose de qué cambia el precio y qué costos anuales hay que sumar.',
    tag: '💰 Precios 2026',
    tagColor: 'var(--accent-green)',
    published: '2026-03-18',
    updated: '2026-09-14',
    readingMinutes: 6,
    relatedServices: [
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p>Es la primera pregunta de casi todo el que nos escribe, y la respuesta honesta es que depende del tipo de proyecto. Pero "depende" no le sirve a nadie para presupuestar, así que acá van los rangos reales con los que trabajamos.</p>

<h2>Rangos por tipo de proyecto</h2>

<h3>Página web de negocio — desde $499</h3>
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
    published: '2026-04-09',
    updated: '2026-08-26',
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
    published: '2026-05-06',
    updated: '2026-08-26',
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
    proyecto: 'grupo-novo',
    title: 'CRM y tienda en línea: el caso de Grupo Novo',
    metaTitle: 'CRM y tienda en línea: el caso de Grupo Novo | HacksinCodigos',
    metaDesc:
      'Cómo ayudamos a Grupo Novo a vender andamios y accesorios en línea en Costa Rica, y cómo un CRM a la medida ordena la operación de un distribuidor.',
    excerpt:
      'Le desarrollamos a Grupo Novo la tienda en línea con la que venden andamios y accesorios, y después el CRM. Acá está el razonamiento: por qué un distribuidor necesita un sistema propio y cómo se decide qué construir.',
    tag: '🏗️ Caso de cliente',
    tagColor: '#06b6d4',
    published: '2026-08-28',
    updated: '2026-09-05',
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
<p>Las dos decisiones apuntan a lo mismo: que la tienda se adapte a cómo compra el cliente de este sector, en vez de obligarlo a comprar como compra el de otro.</p>

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
    proyecto: 'ryv-dental',
    title: 'RyV Dental: lanzamiento del sitio y SEO para una clínica dental en Palmares',
    metaTitle: 'Caso RyV Dental — Sitio web y SEO para clínica dental | HacksinCodigos',
    metaDesc:
      'Cómo llevamos a internet a RyV Dental, clínica dental en Palmares: una página por tratamiento, otra por especialista, SEO local y contenido de blog.',
    excerpt:
      'Una clínica con más de treinta años de trayectoria no se vendía sola en Google. Le lanzamos el sitio, armamos la estructura de SEO y escribimos parte del blog.',
    tag: '🦷 Caso de cliente',
    tagColor: '#38bdf8',
    published: '2026-09-04',
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
  <li><a href="https://ryvdental.com/ortodoncia/" target="_blank" rel="noopener">Ortodoncia</a> — alineación dental y corrección de mordida.</li>
  <li><a href="https://ryvdental.com/diseno-de-sonrisa/" target="_blank" rel="noopener">Diseño de sonrisa</a> — tratamientos estéticos para una sonrisa armónica con el rostro.</li>
  <li><a href="https://ryvdental.com/cirugia-maxilofacial/" target="_blank" rel="noopener">Cirugía maxilofacial</a> — procedimientos orales y maxilofaciales.</li>
  <li><a href="https://ryvdental.com/endodoncia/" target="_blank" rel="noopener">Endodoncia</a> — tratamientos para conservar la pieza dental.</li>
  <li><a href="https://ryvdental.com/periodoncia-e-implantes/" target="_blank" rel="noopener">Periodoncia e implantes</a> — encías y reposición de piezas perdidas.</li>
  <li><a href="https://ryvdental.com/prostodoncia-y-rehabilitacion-oral/" target="_blank" rel="noopener">Prostodoncia y rehabilitación oral</a> — casos que hay que reconstruir completos.</li>
  <li><a href="https://ryvdental.com/botox/" target="_blank" rel="noopener">Botox estético y para bruxismo</a> — con enfoque estético y también terapéutico.</li>
  <li><a href="https://ryvdental.com/ryvkids-2/" target="_blank" rel="noopener">RyV Kids — odontopediatría</a> — la consulta de los niños, que no se atiende igual que la de un adulto.</li>
</ul>
<p>Son <strong>nueve páginas</strong> donde la mayoría de las clínicas tiene una. Cada una puede posicionar por su cuenta, y cada una recibe a alguien que buscó exactamente eso.</p>
<p>Todas cuelgan de una página de <a href="https://ryvdental.com/especialidades/" target="_blank" rel="noopener">especialidades</a> que funciona como índice. El que busca un tratamiento concreto cae directo en él; el que llega sin saber qué necesita, navega.</p>

<h2>Invisalign al frente, y por qué</h2>
<p>De todo lo que ofrece la clínica, <strong>Invisalign</strong> es lo que más se busca y lo que más se compara antes de decidir. Por eso es lo primero que se ve al entrar, con el proceso desglosado en cuatro pasos: escaneo digital 3D, valoración profesional, planificación personalizada, e inicio con seguimiento.</p>
<p>Ese detalle del <strong>escaneo digital 3D</strong> —que el paciente ve en pantalla cómo le va a quedar la sonrisa antes de empezar— es exactamente el tipo de cosa que hay que poner en el sitio. Es lo que le quita el miedo a alguien que está dudando, y lo que ninguna clínica genérica puede copiar sin tener el equipo.</p>

<h2>Quiénes dirigen la clínica</h2>
<p>Este es el activo que la clínica tenía y que internet no mostraba, y por eso ocupa lugar propio en el sitio.</p>
<p>La <a href="https://ryvdental.com/dra-mayra-rodriguez/" target="_blank" rel="noopener">Dra. Mayra Rodríguez Carranza</a> es la fundadora, con más de treinta años de trayectoria clínica en odontología integral. La <a href="https://ryvdental.com/dra-amaya-rodriguez/" target="_blank" rel="noopener">Dra. Amaya Vásquez Rodríguez</a> lleva ortodoncia e Invisalign®, con el código profesional publicado en su perfil.</p>
<p>Madre e hija dirigiendo la misma clínica no es un dato de color: es continuidad. El paciente que empezó un tratamiento hace veinte años y el que llega hoy por unos alineadores están en la misma casa, y eso ninguna cadena lo puede replicar.</p>
<p>Alrededor de ellas hay un <a href="https://ryvdental.com/especialistas/" target="_blank" rel="noopener">equipo de ocho especialistas</a>, cada uno con su área. Es lo que permite que un caso complejo —una rehabilitación completa, una cirugía, un implante— se resuelva sin mandar al paciente a otro lado.</p>
<p><strong>Un apunte sobre cómo se escribió esto.</strong> En ningún lugar del sitio dice "la mejor clínica de la zona". No porque no lo sean, sino porque ese adjetivo lo escribe también el que abrió el mes pasado, no se puede verificar, y Google lo descuenta. Lo que sí pesa —ante el buscador y ante el paciente que está dudando— son los datos que nadie más puede copiar: treinta años, ocho especialistas, nueve especialidades y el código profesional a la vista. Eso dice lo mismo, y se sostiene.</p>

<h2>Una página por cada profesional</h2>
<p>El equipo de RyV Dental tiene una página propia por cada persona, además de la página conjunta de <a href="https://ryvdental.com/especialistas/" target="_blank" rel="noopener">especialistas</a>.</p>
<p>Esto no es vanidad y tiene dos razones concretas. La primera es que muchos pacientes buscan por nombre — les recomendaron a alguien y quieren verificar quién es antes de pedir cita. Si ese nombre no está en ninguna página, la búsqueda muere. La segunda es que en salud, la confianza es el producto: ver la cara, la formación y la especialidad de quien te va a atender pesa más que cualquier texto de marketing.</p>
<p>Lo mismo aplica a <a href="https://ryvdental.com/quienes-somos/" target="_blank" rel="noopener">la historia de la clínica</a>: que sea familiar, dirigida por madre e hija, con más de treinta años, es un dato que diferencia de verdad.</p>
<p>Y a las dos secciones que cierran la duda cuando el texto ya no alcanza: los <a href="https://ryvdental.com/resultados-reales-2/" target="_blank" rel="noopener">resultados reales</a> —casos de la propia clínica, no fotos de banco— y los <a href="https://ryvdental.com/testimonios-2/" target="_blank" rel="noopener">testimonios</a> de pacientes. En estética dental, el antes y el después vale más que cualquier párrafo.</p>

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
    proyecto: 'redes-deportivas-cr',
    title: 'Redes Deportivas CR: logo, sitio y presencia para una fábrica nacional',
    metaTitle: 'Caso Redes Deportivas CR — Logo, sitio y marca | HacksinCodigos',
    metaDesc:
      'Cómo le armamos la identidad y el sitio a una fábrica costarricense de redes deportivas y de protección, con una página por tipo de red.',
    excerpt:
      'Una fábrica que teje redes a la medida no vende "redes": vende redes de fútbol, de catamarán o de balcón, que son búsquedas distintas. Así armamos el logo, el sitio y la presencia.',
    tag: '🥅 Caso de cliente',
    tagColor: '#22c55e',
    published: '2026-08-14',
    updated: '2026-08-14',
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
    proyecto: 'la-casita-del-bebe',
    title: 'La Casita del Bebé: rediseño de la tienda y contenido de Instagram para todo el mes',
    metaTitle: 'Caso La Casita del Bebé — Rediseño y contenido | HacksinCodigos',
    metaDesc:
      'Rediseño de la tienda en línea de La Casita del Bebé y producción del contenido de Instagram para el mes completo. Cómo se conectan una cosa con la otra.',
    excerpt:
      'Rediseñamos la tienda y le producimos el contenido de Instagram para todo el mes. Las dos cosas juntas, porque publicar sin dónde aterrizar es tirar el alcance a la basura.',
    tag: '🍼 Caso de cliente',
    tagColor: '#f472b6',
    published: '2026-07-30',
    updated: '2026-07-30',
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
    proyecto: 'ticos-home-remodeling',
    title: "Tico's Home Remodeling: logo, sitio y SEO local para Connecticut",
    metaTitle: "Caso Tico's Home Remodeling — Sitio y SEO local | HacksinCodigos",
    metaDesc:
      'Cómo le armamos la marca, el sitio y el SEO local a una empresa de remodelación y drywall en Connecticut, desde Costa Rica y con una página por servicio.',
    excerpt:
      'Una empresa de remodelación en Connecticut compite contra el que sale primero en Google al buscar "drywall repair near me". Le hicimos el logo, el sitio y el SEO local.',
    tag: '🔨 Caso de cliente',
    tagColor: '#f59e0b',
    published: '2026-07-08',
    updated: '2026-07-08',
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
    proyecto: 'carlouis',
    title: 'Carlouis: rediseño, fotografía y contenido para una marca de salsas artesanales',
    metaTitle: 'Caso Carlouis — Rediseño, imágenes y contenido | HacksinCodigos',
    metaDesc:
      'Rediseño del sitio, producción de imágenes y contenido para Carlouis, marca costarricense de salsas artesanales gourmet. Cómo se vende sabor sin poder probarlo.',
    excerpt:
      'Una salsa artesanal se vende probándola, y en una pantalla no se prueba nada. Le rediseñamos el sitio, le produjimos las imágenes y escribimos parte del contenido.',
    tag: '🌶️ Caso de cliente',
    tagColor: '#ef4444',
    published: '2026-06-17',
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
    proyecto: 'costa-rica-realty-pro',
    title: 'Costa Rica Realty PRO: un sitio en WordPress con aplicación para vender propiedades',
    metaTitle: 'Caso Costa Rica Realty PRO — Sitio y app inmobiliaria | HacksinCodigos',
    metaDesc:
      'Sitio en WordPress con aplicación para publicar y gestionar propiedades, para una empresa que le vende bienes raíces en Costa Rica a compradores extranjeros.',
    excerpt:
      'Cuando el que compra vive en otro país, el sitio no acompaña la venta: la empieza. Le hicimos a Costa Rica Realty PRO el sitio en WordPress y la aplicación para vender propiedades.',
    tag: '🏝️ Caso de cliente',
    tagColor: '#14b8a6',
    published: '2026-05-27',
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
  {
    // ─────────────────────────────────────────────────────────────────────────
    // POR CONFIRMAR antes de darlo por definitivo. Lo que se afirma acá es:
    //   · La Casita del Bebé es una tienda de productos para bebé en Costa Rica
    //     con tienda en línea sobre WooCommerce — verificable en su sitio.
    //   · Vende marcas como Joie, Graco y Premium Baby — publicado por ellos.
    //   · Atiende por WhatsApp al 8426 8083 — publicado en su sitio.
    //   · HacksinCodigos les desarrolló la tienda y el agente de IA — confirmado
    //     por el cliente.
    // Lo que describe el agente está al nivel del servicio que se vende, no de
    // funciones concretas que nadie verificó. Si el agente hace algo distinto o
    // algo más, corregirlo acá.
    // NO hay métricas de venta y no debe agregarse ninguna sin autorización
    // escrita del cliente.
    // ─────────────────────────────────────────────────────────────────────────
    slug: 'caso-chatbot-whatsapp-la-casita-del-bebe',
    title: 'Un agente de IA en WhatsApp para una tienda de bebés',
    metaTitle: 'Caso: chatbot de IA en WhatsApp para tienda | HacksinCodigos',
    metaDesc:
      'Cómo un agente de IA atiende el WhatsApp de La Casita del Bebé: responde de madrugada, consulta el catálogo y sabe cuándo NO debe contestar solo.',
    excerpt:
      'A las tres de la mañana un bebé no duerme y la mamá compra desde el celular. Le montamos a La Casita del Bebé un agente que atiende esa hora — y que sabe cuándo callarse.',
    tag: '🤖 Caso de cliente',
    tagColor: 'var(--accent-amber)',
    published: '2026-09-06',
    updated: '2026-09-06',
    readingMinutes: 9,
    proyecto: 'la-casita-del-bebe',
    relatedServices: [
      { href: '/agentes-ia-costa-rica/', label: 'agentes de IA' },
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online' },
    ],
    bodyHtml: `
<p><a href="https://lacasitadelbebecr.com/" target="_blank" rel="noopener">La Casita del Bebé</a> vende productos para bebé en Costa Rica: coches, sillas de carro, cunas y accesorios de marcas como Joie, Graco y Premium Baby. Ya le habíamos desarrollado la <a href="/proyectos/la-casita-del-bebe/">tienda en línea</a>. Después le montamos un <strong>agente de IA en WhatsApp</strong>.</p>
<p>Este caso es distinto a los otros del portafolio, porque el problema no era que no las encontraran. Era la hora a la que las encontraban.</p>

<h2>El cliente de una tienda de bebés compra a las tres de la mañana</h2>
<p>No es una forma de hablar. Es literal, y define todo lo demás.</p>
<p>Quien tiene un recién nacido no duerme de corrido. A la madrugada, con el bebé en brazos y el celular en la otra mano, es cuando aparece el rato para resolver que hace falta un coche que sirva desde el nacimiento, o averiguar si la silla que le regalaron le queda al carro.</p>
<p>A esa hora no hay nadie contestando en ninguna tienda del país. La consulta se manda igual, y a las nueve de la mañana la persona ya está en otra cosa — o ya compró en otro lado, donde sí le respondieron.</p>
<p>Ese es el problema que un agente resuelve mejor que en casi cualquier otro rubro: <strong>acá el horario comercial no coincide con el horario del cliente</strong>.</p>

<h2>Lo que preguntan no es el precio</h2>
<p>Es la otra particularidad, y la que hace que un chatbot de menú numerado no sirva.</p>
<p>En productos para bebé la consulta casi nunca es "¿cuánto vale?". Es una pregunta de <em>compatibilidad</em>, y viene envuelta en la vida real de quien pregunta:</p>
<ul>
  <li><strong>De edad y peso:</strong> "mi bebé tiene cuatro meses, ¿ya le sirve?".</li>
  <li><strong>De compatibilidad:</strong> "¿esta silla calza con el coche que ya tengo?".</li>
  <li><strong>De uso real:</strong> "¿cabe en la cajuela de un carro pequeño?", "¿se puede lavar?".</li>
  <li><strong>De regalo:</strong> alguien que no tiene bebé comprando para un baby shower, y que no sabe ni qué preguntar.</li>
</ul>
<p>Un bot de opciones fijas —<em>marque 1 para coches, 2 para sillas</em>— se traba en la primera. Por eso acá hacía falta un agente que entienda lo que le escribieron, no uno que ofrezca un menú.</p>

<h2>Qué hace el agente</h2>
<p>Trabaja sobre el mismo catálogo de la <a href="/tiendas-online-costa-rica/">tienda</a>, así que responde con lo que de verdad hay:</p>
<ul>
  <li><strong>Contesta a cualquier hora</strong> las preguntas de siempre: disponibilidad, características, formas de pago, envíos y cobertura.</li>
  <li><strong>Ubica el producto</strong> a partir de lo que la persona describe, aunque no sepa el nombre ni la marca.</li>
  <li><strong>Recoge los datos</strong> que hacen falta para cotizar o despachar, sin que nadie los vuelva a pedir.</li>
  <li><strong>Deja la consulta ordenada</strong> para la mañana siguiente cuando hace falta una persona.</li>
  <li><strong>Manda al carrito</strong> a quien ya decidió, y mantiene la conversación con quien todavía está averiguando.</li>
</ul>

<h2>La parte más importante: cuándo el agente NO contesta</h2>
<p>Acá es donde este proyecto se separa de un chatbot cualquiera, y donde más tiempo se invirtió.</p>
<p>En productos para bebé hay preguntas que <strong>no puede responder una máquina</strong>, porque la respuesta equivocada no cuesta una venta: puede costar bastante más.</p>
<ul>
  <li>
    <strong>Instalación de una silla de carro.</strong> Cómo se ancla, con cinturón o con los anclajes del vehículo, en qué posición según la edad. Eso lo explica una persona, no un mensaje automático.
  </li>
  <li>
    <strong>Si un producto es seguro para un bebé en particular.</strong> Hay diferencias por peso, por talla, por condición médica. El agente puede decir qué dice el fabricante; no puede decidir por nadie.
  </li>
  <li>
    <strong>Cualquier cosa que suene a consulta de salud.</strong> Se pasa a una persona, sin intentarlo.
  </li>
  <li>
    <strong>Un reclamo.</strong> Una mamá molesta con un pedido quiere una persona, y un bot amable la enoja más.
  </li>
</ul>
<p>Que el agente <em>sepa lo que no sabe</em> no es una limitación: es el requisito para poder ponerlo. Un agente que improvisa sobre seguridad infantil es un riesgo para el negocio y para el cliente, y ninguna venta lo compensa.</p>

<h2>Por qué WhatsApp y no un chat en el sitio</h2>
<p>Al sitio no le pusimos widget de chat, y fue a propósito.</p>
<p>En Costa Rica el cliente de este rubro ya está en WhatsApp: es donde le escribe a su familia, donde pregunta en los grupos de mamás y donde guarda la conversación para retomarla mañana. Un chat dentro del sitio se pierde cuando cierra la pestaña; una conversación de WhatsApp sigue ahí a los tres días, cuando por fin decide.</p>
<p>Además hay una razón práctica: nadie contesta un chat web con el bebé en brazos. WhatsApp sí, porque ya lo tiene abierto.</p>

<h2>Cómo se armó</h2>
<p>El trabajo no fue programar: fue <strong>leer conversaciones reales</strong>. Antes de escribir una respuesta se revisó lo que la tienda ya contestaba todos los días — qué preguntan, con qué palabras y en qué orden. Ahí estaba el guion; no había que inventarlo.</p>
<p>De ahí salieron las tres decisiones que importan: qué responde solo, qué pregunta antes de responder, y en qué casos pasa la conversación sin intentarlo. Después vinieron las semanas de ajuste, que es cuando aparecen las preguntas que nadie previó y el agente se vuelve realmente útil.</p>

<h2>Qué se lleva otra tienda de este caso</h2>
<ul>
  <li><strong>Mirá a qué hora te escriben.</strong> Si buena parte llega fuera de horario, ahí hay ventas perdiéndose en silencio, no falta de clientes.</li>
  <li><strong>Si la consulta es de compatibilidad, necesitás un agente, no un bot.</strong> Un menú de opciones no resuelve "¿esto le sirve a mi bebé?".</li>
  <li><strong>Definí primero qué NO se automatiza.</strong> Es más importante que la lista de lo que sí, sobre todo si vendés algo donde equivocarse tiene consecuencias.</li>
  <li><strong>El guion ya lo tenés escrito</strong> en tus conversaciones de WhatsApp. Solo hay que leerlas.</li>
</ul>
<p>¿Te llegan consultas a horas en las que no hay nadie? Contanos tu caso. Mirá cómo trabajamos los <a href="/agentes-ia-costa-rica/">agentes de IA</a>, o el <a href="/proyectos/la-casita-del-bebe/">caso completo de La Casita del Bebé</a> en el portafolio.</p>
`,
  },
  {
    slug: 'por-que-mi-pagina-web-no-aparece-en-google',
    title: 'Por qué tu página web no aparece en Google (y cómo arreglarlo)',
    metaTitle: 'Por qué tu página web no aparece en Google | HacksinCodigos',
    metaDesc:
      'Por qué tu página web no aparece en Google y cómo arreglarlo: indexación, versiones duplicadas, URLs viejas, Google Maps y posicionamiento SEO en Costa Rica.',
    excerpt:
      'Si solo aparecés cuando alguien busca el nombre de tu empresa, algo concreto está fallando. Estas son las causas que encontramos una y otra vez — incluida la que tenía nuestro propio sitio.',
    tag: '📈 SEO',
    tagColor: 'var(--accent-blue)',
    published: '2026-09-08',
    updated: '2026-09-08',
    readingMinutes: 10,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
    ],
    bodyHtml: `
<p>Es la queja más común que escuchamos: <em>"tengo página web y no me encuentra nadie"</em>. Casi siempre viene con un detalle: si buscan el nombre de la empresa, sí aparece. Si buscan lo que la empresa vende, no.</p>
<p>Eso no es mala suerte ni algo místico del algoritmo. Tiene causas concretas, y casi todas se pueden revisar en una tarde. Acá están las que encontramos una y otra vez, en el orden en que conviene revisarlas.</p>

<h2>Primero: comprobá qué sabe Google de tu sitio</h2>
<p>Antes de cambiar nada, hay que saber de dónde se parte. Dos revisiones gratuitas:</p>
<ul>
  <li><strong>Buscá en Google <code>site:tudominio.com</code></strong>, con tu dominio real. Lo que aparece es lo que Google tiene guardado de tu sitio. Si no aparece nada, o aparecen páginas que ya no existen, ahí está el primer problema.</li>
  <li><strong>Abrí Google Search Console.</strong> Es gratis y es la única fuente que te dice lo que Google ve de verdad: qué páginas indexó, cuáles descartó y por qué, y por qué búsquedas te está mostrando.</li>
</ul>
<p>Con eso a mano, las causas se vuelven evidentes.</p>

<h2>1. Google ni siquiera tiene tus páginas</h2>
<p>Parece obvio, pero es lo más frecuente en sitios nuevos o recién migrados. Si una página no está indexada, no puede aparecer por nada.</p>
<p>Las razones típicas: el sitio es muy nuevo, no tiene un sitemap enviado a Search Console, alguna página quedó marcada para que Google no la indexe —pasa mucho con plantillas que traen esa opción activada "mientras se construye"— o simplemente nada en internet enlaza a esas páginas y Google no las encontró.</p>
<p><strong>Cómo se arregla:</strong> enviar el sitemap en Search Console, revisar que ninguna página importante tenga la etiqueta <em>noindex</em>, y pedir la indexación de las páginas clave desde la herramienta de inspección de URLs.</p>

<h2>2. Tenés dos sitios y no lo sabés</h2>
<p>Este es de los más dañinos porque no se ve. Tu sitio responde en <code>www.tudominio.com</code> y también en <code>tudominio.com</code>, o en <code>http</code> y en <code>https</code>, y las dos versiones muestran el mismo contenido sin redirigir una a la otra.</p>
<p>Para Google son sitios distintos. La autoridad que ganás se reparte entre los dos en vez de sumarse, y ninguno llega a competir en serio.</p>
<p>No lo decimos de oídas: <strong>a nuestro propio sitio le pasaba</strong>. La versión con www servía una copia completa, y justamente era la que Google tenía indexada. Se arregló con una redirección permanente —un 301— de todas las variantes hacia una sola.</p>
<p><strong>Cómo se revisa:</strong> escribí tu dominio con y sin www en el navegador. Si en los dos casos la dirección se queda como la escribiste, en vez de saltar a una sola, tenés el problema.</p>

<h2>3. Google conoce tu versión vieja, no la nueva</h2>
<p>Si rediseñaste o migraste el sitio, es muy probable que Google todavía tenga guardadas las páginas anteriores. Y si esas direcciones ahora dan error 404, estás tirando a la basura la autoridad que acumularon durante años.</p>
<p>También nos pasó: nuestro sitio anterior tenía páginas de cursos y noticias que seguían indexadas mucho después de desaparecer. Diez direcciones devolvían error.</p>
<p><strong>Cómo se arregla:</strong> cada dirección vieja se redirige con un 301 a su equivalente nueva — o a la más parecida si ya no existe. Así la autoridad se traslada en vez de perderse. En Search Console, el informe de páginas te muestra cuáles están dando error.</p>

<h2>4. No tenés una página para lo que la gente busca</h2>
<p>Google no posiciona sitios: posiciona <strong>páginas</strong>, cada una por lo que trata. Si ofrecés diseño web, tiendas online y mantenimiento, y todo está explicado en una sola página de "Servicios", esa página compite débilmente por las tres cosas a la vez y no gana ninguna.</p>
<p>La regla es simple: <strong>una página por cada cosa que alguien buscaría por separado</strong>. Con su propio título, su propio texto y respondiendo lo que esa persona quiere saber antes de contratar.</p>
<p>Y que tenga contenido de verdad. Tres párrafos genéricos no le ganan a la página de un competidor que explica el proceso, los costos y las dudas frecuentes.</p>

<h2>5. Solo aparecés por tu nombre: te falta autoridad</h2>
<p>Si Google te muestra cuando buscan tu marca pero no cuando buscan tu servicio, lo más probable es que tu sitio todavía no tenga suficiente autoridad frente a la competencia.</p>
<p>La autoridad se construye, sobre todo, con <strong>enlaces desde otros sitios</strong>. Un dominio que lleva veinte años recibiendo enlaces no se alcanza en un mes. Pero hay enlaces legítimos que casi todo negocio tiene a mano y no aprovecha: proveedores, clientes, cámaras y asociaciones del sector, medios locales, directorios de negocios del país.</p>
<p>Lo que <strong>no</strong> hay que hacer es comprarlos. Los paquetes de "mil enlaces por veinte dólares" funcionan unas semanas y después Google hunde el dominio.</p>

<h2>6. No aparecés en Google Maps: tu perfil de negocio está suelto</h2>
<p>Para búsquedas locales —"diseño web en San José", "dentista en Palmares"— lo que aparece arriba, con el mapa, sale del perfil de negocio de Google. Tenerlo verificado es el requisito, no el resultado.</p>
<p>Si te preguntás cómo aparecer en Google Maps con tu negocio, la respuesta está en ese perfil. Lo que lo hace subir: <strong>reseñas reales y con texto</strong>, categorías bien elegidas, fotos propias, y que el nombre, teléfono y zona coincidan exactamente con lo que dice tu sitio. Si el perfil dice un teléfono y la página otro, Google pierde confianza en los dos.</p>

<h2>7. El sitio es lento en el celular</h2>
<p>La mayoría de tus visitas llegan desde el teléfono, muchas veces desde el navegador interno de Instagram o WhatsApp. Si la página tarda en cargar, la gente se va antes de verla, y Google lo toma en cuenta.</p>
<p>El culpable casi siempre son las imágenes: fotos subidas tal cual salieron del celular, que pesan más que todo el resto de la página junta. Search Console tiene un informe de rendimiento en móviles que te dice qué páginas están lentas.</p>

<h2>8. Es demasiado pronto</h2>
<p>Esta es la causa que nadie quiere escuchar, y es real. Aunque arregles todo lo anterior hoy, Google no reordena los resultados en días.</p>
<p>El orden en que se ven los cambios es siempre el mismo:</p>
<ul>
  <li><strong>Primero suben las páginas indexadas</strong> — en semanas.</li>
  <li><strong>Después suben las impresiones</strong>: Google empieza a mostrarte, aunque todavía abajo y aunque nadie haga clic.</li>
  <li><strong>Luego aparecen búsquedas nuevas</strong> por las que antes no salías.</li>
  <li><strong>Y al final se mueve la posición</strong>, que es lo último y lo que más tarda.</li>
</ul>
<p>Si las impresiones van subiendo, el trabajo va bien aunque la posición todavía no se mueva. Juzgar el SEO por la posición del primer mes es la forma más rápida de abandonar algo que estaba funcionando.</p>

<h2>Lo que conviene evitar</h2>
<ul>
  <li><strong>Quien te garantice el primer lugar.</strong> Nadie puede garantizarlo: lo decide Google, no el proveedor.</li>
  <li><strong>Repetir la palabra clave veinte veces.</strong> Google lleva años detectándolo y castigándolo.</li>
  <li><strong>Reseñas o testimonios inventados.</strong> Además de ser deshonesto, es motivo de penalización.</li>
  <li><strong>Cambiar las direcciones de las páginas sin redirigir las viejas.</strong> Es la forma más rápida de perder en una semana lo que costó años.</li>
</ul>

<h2>Por dónde empezar hoy</h2>
<p>Si tuvieras que hacer solo tres cosas: revisá que tu sitio responda en una sola dirección, enviá el sitemap en Search Console, y asegurate de tener una página propia para cada servicio que querés vender. Eso resuelve la mayoría de los casos que vemos.</p>
<p>Si querés que lo revisemos por vos, en <a href="/seo-costa-rica/">posicionamiento SEO</a> está cómo trabajamos una auditoría. Y si lo que tenés es un sitio viejo que conviene rehacer, empezá por <a href="/paginas-web-costa-rica/">páginas web en Costa Rica</a>. También te puede servir la <a href="/blog/guia-seo-negocios-locales-costa-rica/">guía de SEO local</a>.</p>
`,
  },
  {
    slug: 'que-debe-tener-una-pagina-web-de-negocio',
    title: 'Página web para tu negocio: qué debe tener para traer clientes',
    metaTitle: 'Página web para negocios: qué debe tener | HacksinCodigos',
    metaDesc:
      'Qué debe tener la página web de un negocio o pequeña empresa en Costa Rica para traer clientes: mensaje claro, WhatsApp, páginas por servicio y confianza.',
    excerpt:
      'Una página bonita que nadie contacta no sirve. Esta es la lista de lo que un sitio de negocio necesita para convertir visitas en clientes — y lo que conviene quitarle.',
    tag: '🎨 Diseño web',
    tagColor: '#a855f7',
    published: '2026-09-09',
    updated: '2026-09-09',
    readingMinutes: 9,
    relatedServices: [
      { href: '/diseno-web-costa-rica/', label: 'diseño web' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
    ],
    bodyHtml: `
<p>La pregunta suele llegar al revés: <em>"¿qué diseño me recomiendan?"</em>. Pero antes del diseño hay una pregunta más útil: <strong>¿qué tiene que lograr la página?</strong> Para casi cualquier negocio la respuesta es la misma: que alguien que no te conoce entienda qué hacés, confíe y te escriba.</p>
<p>Todo lo que ayuda a eso se queda. Todo lo que estorba, sobra, por más lindo que se vea. Esta es la lista.</p>

<h2>Lo que tiene que resolver en los primeros segundos</h2>
<p>Quien llega desde Google no lee: barre la pantalla y decide si se queda. Arriba del todo, sin tener que bajar, tienen que quedar claras tres cosas:</p>
<ul>
  <li><strong>Qué hacés</strong>, dicho en palabras normales. No "soluciones integrales de excelencia", sino "reparamos aires acondicionados en Heredia".</li>
  <li><strong>Para quién</strong>: tu zona, tu tipo de cliente, el tamaño de problema que resolvés.</li>
  <li><strong>Qué hacer ahora</strong>: un botón claro. Uno, no cinco compitiendo.</li>
</ul>
<p>Si alguien tiene que adivinar a qué se dedica tu negocio, ya lo perdiste.</p>

<h2>1. WhatsApp a la vista, siempre</h2>
<p>En Costa Rica la venta pasa por WhatsApp. Un botón que abra la conversación con un mensaje ya escrito —"Hola, vengo de su página y quiero información sobre…"— convierte bastante más que cualquier formulario.</p>
<p>Y el teléfono tiene que poder tocarse para llamar desde el celular. Un número escrito como texto plano obliga a copiarlo, y cada paso extra pierde gente.</p>

<h2>2. Una página por cada servicio</h2>
<p>Es la diferencia entre aparecer en Google y no aparecer. Si todo lo que ofrecés está amontonado en una página de "Servicios", esa página no gana por ninguno.</p>
<p>Cada servicio que alguien buscaría por separado merece su propia página: qué incluye, para quién es, cómo es el proceso, cómo se cotiza y las preguntas que siempre te hacen. Eso le sirve al cliente para decidir y a Google para entender qué ofrecés.</p>

<h2>3. Fotos reales, no de banco</h2>
<p>Una foto de tu taller, tu equipo o tu producto real genera más confianza que la mejor foto de banco de imágenes. El visitante nota la diferencia aunque no sepa explicarla: las fotos de banco se reconocen, y dicen "este negocio no quiso mostrarse".</p>
<p>No hace falta un fotógrafo profesional para empezar. Hace falta buena luz, fondo ordenado y fotos tomadas con intención.</p>

<h2>4. Que cargue rápido en el celular</h2>
<p>La mayoría de tus visitas llegan desde el teléfono, y muchas desde el navegador de Instagram o WhatsApp, que es más lento. Una página pesada pierde gente antes de mostrar nada.</p>
<p>Lo que más la pone lenta casi siempre son las imágenes subidas sin optimizar. Bien preparadas, pesan una fracción y se ven igual.</p>

<h2>5. Prueba de que sos real</h2>
<p>Alguien que no te conoce necesita razones para confiar. Las que funcionan:</p>
<ul>
  <li><strong>Trabajos hechos</strong>, con fotos y una explicación breve de qué se resolvió.</li>
  <li><strong>Reseñas reales</strong> de tu perfil de Google, con nombre. Nunca testimonios inventados: se notan, y además pueden traerte problemas.</li>
  <li><strong>Datos de contacto completos</strong> y una zona de servicio clara.</li>
  <li><strong>Quién está detrás</strong>: una cara, un nombre, una historia corta.</li>
</ul>

<h2>6. Cómo se cotiza, dicho de frente</h2>
<p>No siempre se pueden publicar precios, y está bien. Pero el visitante sí necesita saber cómo funciona: si la cotización es gratis, qué datos necesitás para darla y cuánto tardás en responder. El silencio sobre el precio hace que la gente asuma lo peor y se vaya.</p>

<h2>7. Formularios cortos</h2>
<p>Cada campo que agregás a un formulario baja la cantidad de gente que lo completa. Nombre, forma de contacto y qué necesita. Lo demás se pregunta después, cuando ya hay conversación.</p>

<h2>8. Lo básico de confianza técnica</h2>
<ul>
  <li><strong>Candado de seguridad (HTTPS).</strong> Un sitio sin él aparece marcado como "no seguro" en el navegador.</li>
  <li><strong>Política de privacidad</strong> si recogés datos, aunque sea un formulario.</li>
  <li><strong>Una sola dirección</strong>: que el sitio no responda igual con www y sin www, porque Google lo toma como dos sitios.</li>
  <li><strong>Datos iguales en todas partes</strong>: el mismo nombre, teléfono y zona en tu sitio, en tu perfil de Google y en tus redes.</li>
</ul>

<h2>Lo que conviene quitarle</h2>
<p>Tan importante como lo que tiene es lo que sobra:</p>
<ul>
  <li><strong>El carrusel gigante en la portada.</strong> Casi nadie espera la segunda imagen, y lo importante suele estar en la tercera.</li>
  <li><strong>"Bienvenidos a nuestro sitio web".</strong> La frase más visible de la página, gastada en no decir nada.</li>
  <li><strong>Animaciones pesadas y videos que arrancan solos.</strong> Se ven bien en la computadora del diseñador y cuelgan el celular de tu cliente.</li>
  <li><strong>Texto blanco sobre fotos.</strong> Ilegible a media luz.</li>
  <li><strong>Páginas vacías o "en construcción".</strong> Mejor no tenerlas que mostrarlas a medias.</li>
</ul>

<h2>La prueba final</h2>
<p>Pedile a alguien que no conozca tu negocio que abra tu página en su celular. Dale diez segundos y preguntale: ¿qué hace esta empresa?, ¿a quién atiende?, ¿cómo la contactarías? Si duda en cualquiera de las tres, ya sabés qué arreglar.</p>
<p>Si querés que la revisemos o la hagamos desde cero, en <a href="/diseno-web-costa-rica/">diseño web</a> está cómo trabajamos, y en <a href="/paginas-web-costa-rica/">páginas web en Costa Rica</a> el servicio completo. Si te preguntás por el presupuesto, empezá por <a href="/blog/cuanto-cuesta-una-pagina-web-en-costa-rica/">cuánto cuesta una página web</a>.</p>
`,
  },
  {
    slug: 'cuanto-cuesta-un-chatbot-de-ia-para-whatsapp',
    title: '¿Cuánto cuesta un chatbot de IA para WhatsApp en Costa Rica?',
    metaTitle: '¿Cuánto cuesta un chatbot de IA para WhatsApp? | HacksinCodigos',
    metaDesc:
      'Cuánto cuesta un chatbot con IA para WhatsApp Business: desarrollo, uso de la IA, la plataforma de Meta y mantenimiento. Y cómo saber si te conviene.',
    excerpt:
      'No existe un precio honesto de lista, pero sí se puede saber de qué depende. Estos son los cuatro costos de un agente de IA para WhatsApp y cómo calcular si te conviene.',
    tag: '🤖 Agentes IA',
    tagColor: 'var(--accent-amber)',
    published: '2026-09-10',
    updated: '2026-09-10',
    readingMinutes: 9,
    relatedServices: [
      { href: '/agentes-ia-costa-rica/', label: 'agentes de IA para WhatsApp' },
      { href: '/agentes-ia-redes-sociales-costa-rica/', label: 'agentes de IA para redes sociales' },
    ],
    bodyHtml: `
<p>La respuesta corta es incómoda pero honesta: <strong>depende</strong>. Y no porque queramos esquivar la pregunta, sino porque un agente que contesta diez mensajes al día y uno que atiende cuatrocientos no cuestan lo mismo, igual que no cuesta lo mismo una casa de una habitación que una de cinco.</p>
<p>Lo que sí se puede hacer es explicar <strong>de qué depende</strong>, para que cuando pidás una cotización sepas qué estás comparando. Porque ahí es donde la gente se confunde: dos precios muy distintos a veces son dos productos muy distintos.</p>

<h2>Los cuatro costos de un chatbot con IA</h2>
<p>Un agente para WhatsApp no tiene un solo costo. Tiene cuatro, y conviene separarlos:</p>

<h3>1. El desarrollo — pago único</h3>
<p>Es el trabajo de montarlo: reunir la información del negocio, definir qué responde y qué no, conectarlo a WhatsApp y a lo que haga falta, probarlo y ajustarlo. Se paga una vez.</p>

<h3>2. El uso de la inteligencia artificial — mensual, por uso</h3>
<p>El proveedor del modelo de IA cobra según cuánto se usa: cada conversación consume un poco. Un negocio con pocas consultas gasta muy poco; uno con cientos al día, bastante más. No es un monto fijo: sube y baja con tu volumen.</p>

<h3>3. La plataforma de WhatsApp — mensual, si se usa la vía oficial</h3>
<p>Si el agente funciona sobre la plataforma oficial de WhatsApp Business de Meta, Meta cobra según el tipo y la cantidad de conversaciones o mensajes. Esas tarifas las define Meta y cambian con el tiempo, así que desconfiá de quien te dé un número fijo sin revisar tu caso.</p>

<h3>4. El mantenimiento — mensual, opcional pero recomendable</h3>
<p>Un agente no se instala y se olvida. Los precios cambian, aparecen preguntas nuevas, hay que revisar las conversaciones que no supo resolver. Eso lo podés hacer vos o lo puede hacer tu proveedor.</p>

<h2>Qué hace subir el desarrollo</h2>
<ul>
  <li><strong>Cuánta información tiene que manejar.</strong> No es lo mismo un negocio con cinco servicios que una tienda con cientos de productos.</li>
  <li><strong>Con qué se tiene que conectar.</strong> Consultar existencias en tu tienda, agendar en tu calendario o registrar al cliente en tu CRM suma trabajo.</li>
  <li><strong>En cuántos canales atiende.</strong> Solo WhatsApp, o también el chat de tu sitio, Instagram y Facebook.</li>
  <li><strong>Cuántos idiomas.</strong> Si atendés turistas, cada idioma es trabajo adicional de prueba.</li>
  <li><strong>Qué tan delicado es tu rubro.</strong> En salud, finanzas o productos para bebés, definir lo que el agente NO debe contestar lleva más tiempo — y es lo más importante.</li>
</ul>

<h2>Qué hace subir el costo mensual</h2>
<ul>
  <li><strong>El volumen de mensajes.</strong> Es lo que más pesa.</li>
  <li><strong>El largo de las conversaciones.</strong> Diez mensajes para cerrar un pedido consumen más que dos.</li>
  <li><strong>El modelo de IA que se use.</strong> Los más capaces cuestan más por uso; para muchas tareas no hace falta el más caro.</li>
  <li><strong>Si se usa la plataforma oficial de Meta</strong> o se trabaja sobre la aplicación normal.</li>
</ul>

<h2>WhatsApp Business normal o la API oficial</h2>
<p>Es la decisión que más cambia el costo, y conviene entenderla.</p>
<p>Para un negocio pequeño, con un solo número y volumen moderado, se puede trabajar sobre la aplicación normal. Es más barato y arranca antes.</p>
<p>La plataforma oficial corresponde cuando hay mucho volumen, varias personas atendiendo el mismo número, o necesidad de mandar mensajes de plantilla como confirmaciones y recordatorios. Tiene costo por uso, pero es la vía reconocida por Meta y la más estable.</p>

<h2>Cómo saber si te conviene</h2>
<p>No hace falta adivinar. Hacé esta cuenta con tu realidad:</p>
<ul>
  <li><strong>¿Cuántas horas al día se van contestando lo mismo?</strong> Precios, horarios, ubicación, "¿tienen esto?".</li>
  <li><strong>¿Cuántos mensajes llegan fuera de horario</strong> y se contestan tarde, o nunca?</li>
  <li><strong>¿Cuántas de esas consultas terminan comprando en otro lado</strong> porque no respondiste a tiempo?</li>
</ul>
<p>Si la respuesta es "pocas horas y casi todo se contesta a tiempo", un agente no te va a cambiar el negocio: primero conviene conseguir más consultas. Si la respuesta es "se nos va medio día" o "perdemos lo que llega de noche", ahí el agente paga solo.</p>

<h2>Cuidado con estas señales al cotizar</h2>
<ul>
  <li><strong>Un precio sospechosamente bajo.</strong> Muchas veces es un bot de menú numerado —"marque 1, marque 2"— presentado como inteligencia artificial.</li>
  <li><strong>Costos mensuales que nadie te explica.</strong> Si no te dicen qué pasa cuando crece el volumen, lo vas a descubrir en la factura.</li>
  <li><strong>Que no te den acceso a las conversaciones.</strong> Son de tu negocio y de tus clientes.</li>
  <li><strong>Que no hablen de qué NO va a contestar el agente.</strong> Si no lo mencionan, no lo pensaron.</li>
  <li><strong>Contratos que te atan</strong> sin forma de llevarte tu información si te vas.</li>
</ul>

<h2>Qué pedir en una cotización</h2>
<p>Para comparar peras con peras, pedí que te detallen:</p>
<ul>
  <li>El costo de desarrollo, y qué incluye exactamente.</li>
  <li>Una estimación del costo mensual con <strong>tu</strong> volumen de mensajes, no uno genérico.</li>
  <li>Si usa la plataforma oficial de WhatsApp o la aplicación normal.</li>
  <li>En qué canales funciona.</li>
  <li>Quién lo mantiene y cuánto cuesta eso.</li>
  <li>Qué pasa si querés cancelar.</li>
</ul>

<h2>En resumen</h2>
<p>Un agente de IA tiene un costo de arranque y un costo de operación que crece con tu volumen. La pregunta útil no es "¿cuánto cuesta?" sino <strong>"¿cuánto me está costando no tenerlo?"</strong>: las horas contestando lo mismo y las ventas que se van de noche.</p>
<p>Si querés que lo calculemos con tu caso real, en <a href="/agentes-ia-costa-rica/">agentes de IA</a> está cómo trabajamos, y te estimamos los costos mensuales antes de que decidas. Podés ver cómo funcionó en una tienda en el <a href="/blog/caso-chatbot-whatsapp-la-casita-del-bebe/">caso de La Casita del Bebé</a>, y si tus clientes te escriben por Instagram, mirá <a href="/agentes-ia-redes-sociales-costa-rica/">agentes de IA para redes sociales</a>.</p>
`,
  },
  {
    slug: 'inteligencia-artificial-para-pymes-costa-rica',
    title: 'Inteligencia artificial para PYMES: por dónde empezar sin gastar de más',
    metaTitle: 'IA para PYMES en Costa Rica: por dónde empezar | HacksinCodigos',
    metaDesc:
      'Inteligencia artificial para PYMES y empresas en Costa Rica: usos prácticos, dónde no conviene y un plan de treinta días para empezar sin gastar de más.',
    excerpt:
      'La IA no es para empresas grandes ni hace falta entenderla para aprovecharla. Lo que sí hace falta es empezar por el problema correcto. Así se arranca sin tirar la plata.',
    tag: '🧠 Inteligencia artificial',
    tagColor: '#06b6d4',
    published: '2026-09-11',
    updated: '2026-09-11',
    readingMinutes: 9,
    relatedServices: [
      { href: '/agentes-ia-costa-rica/', label: 'agentes de IA' },
      { href: '/software-a-la-medida-costa-rica/', label: 'software a la medida' },
    ],
    bodyHtml: `
<p>Hay dos errores opuestos con la inteligencia artificial en las PYMES. El primero es pensar que es cosa de empresas grandes y que no aplica a un negocio de cinco personas. El segundo es lanzarse a comprar la herramienta de moda sin saber para qué.</p>
<p>Los dos terminan igual: sin resultados. Lo que funciona es más aburrido y más efectivo: <strong>empezar por el problema, no por la herramienta</strong>.</p>

<h2>La pregunta correcta</h2>
<p>No es "¿cómo uso IA en mi negocio?". Es: <strong>"¿en qué se nos va el tiempo haciendo lo mismo una y otra vez?"</strong></p>
<p>La inteligencia artificial rinde en tareas que se repiten, que siguen un patrón y que hoy hace una persona que podría estar haciendo algo más valioso. Si identificás eso primero, la herramienta se elige casi sola.</p>

<h2>Usos prácticos de la inteligencia artificial en una PYME</h2>

<h3>Atender las consultas de siempre</h3>
<p>Precios, horarios, ubicación, disponibilidad, formas de pago. Un <a href="/agentes-ia-costa-rica/">agente de IA</a> en WhatsApp, en tu sitio o en Instagram contesta eso al instante, a cualquier hora, y te pasa solo lo que necesita una persona. Es, por lejos, donde más se nota el cambio.</p>

<h3>Redactar</h3>
<p>Descripciones de productos, borradores de correos, publicaciones para redes, respuestas a reseñas. La IA no reemplaza el criterio de quien conoce el negocio, pero sí convierte una hora frente a una hoja en blanco en diez minutos de revisar y ajustar.</p>

<h3>Resumir y ordenar información</h3>
<p>Leer un contrato largo y sacar lo importante, resumir las notas de una reunión, clasificar los mensajes que llegan por tipo de consulta, extraer los datos de facturas. Trabajo tedioso que se come horas.</p>

<h3>Atención fuera de horario</h3>
<p>Buena parte de las consultas llegan de noche o en fin de semana. Que alguien reciba respuesta a esa hora —aunque sea para tomar sus datos y decirle que mañana lo llaman— evita que se vaya con la competencia.</p>

<h2>Dónde NO conviene usarla</h2>
<p>Esta parte es tan importante como la anterior, y casi nadie la dice.</p>
<ul>
  <li>
    <strong>Decisiones con consecuencias serias.</strong> Salud, temas legales, finanzas de un cliente, seguridad. La IA puede ayudar a preparar información; la decisión la toma una persona.
  </li>
  <li>
    <strong>Cuando nadie va a revisar lo que produce.</strong> La IA a veces inventa datos con total seguridad. Un precio equivocado, una política que no existe, una cifra falsa. Todo lo que sale hacia un cliente tiene que pasar por alguien.
  </li>
  <li>
    <strong>Con datos sensibles en herramientas gratuitas.</strong> Pegar la base de clientes, datos de salud o información financiera en un servicio gratuito puede exponer esa información. Costa Rica tiene ley de protección de datos personales, y la responsabilidad sigue siendo tuya.
  </li>
  <li>
    <strong>Cuando el proceso todavía es un desorden.</strong> Automatizar un proceso que no está claro solo produce el mismo desorden más rápido. Primero se ordena, después se automatiza.
  </li>
</ul>

<h2>Herramientas listas o algo a la medida</h2>
<p>Para empezar, las herramientas generales que ya existen alcanzan para mucho: redactar, resumir, ordenar ideas. Cuestan poco o nada y no requieren instalar nada.</p>
<p>Lo hecho a la medida se justifica cuando la IA tiene que <strong>trabajar con la información de tu negocio</strong> —tu catálogo, tus clientes, tus reglas— o <strong>conectarse con lo que ya usás</strong>: tu WhatsApp, tu tienda en línea, tu CRM. Ahí una herramienta genérica no llega, porque no conoce tu negocio.</p>
<p>La regla sensata: probá primero con lo general. Cuando choques con su límite, sabés exactamente qué necesitás construir.</p>

<h2>Un plan de treinta días para empezar</h2>
<p>Sin grandes inversiones y sin apostar a ciegas:</p>
<ul>
  <li><strong>Semana 1 — medir.</strong> Anotá durante una semana en qué se va el tiempo del equipo: qué preguntas se contestan más, qué tareas se repiten, qué se hace a mano copiando de un lado a otro.</li>
  <li><strong>Semana 2 — elegir una sola tarea.</strong> La que más tiempo come y menos riesgo tiene si sale mal. Una sola, no cinco.</li>
  <li><strong>Semana 3 — probar.</strong> Usá IA en esa tarea y compará contra cómo se hacía antes. Tiempo, calidad, errores.</li>
  <li><strong>Semana 4 — decidir.</strong> Si funcionó, se incorpora al trabajo diario y se pasa a la siguiente. Si no, se descarta sin haber gastado de más.</li>
</ul>
<p>Un piloto chico que funciona vale más que un proyecto grande que nadie usa.</p>

<h2>Lo que la IA no va a hacer por vos</h2>
<p>No va a arreglar un producto que no se vende, ni un servicio que decepciona, ni un negocio que nadie encuentra. Es una herramienta para hacer más con el mismo equipo, no un reemplazo de lo básico.</p>
<p>Si tu problema es que no te encuentran, lo primero es tener un sitio que aparezca en Google. Si tu problema es que no das abasto con las consultas, ahí sí la IA puede cambiar el día a día.</p>

<h2>Por dónde seguir</h2>
<p>Si lo que más te consume es contestar mensajes, empezá por <a href="/agentes-ia-costa-rica/">agentes de IA para WhatsApp, tu sitio y tus redes</a>. Si tu operación está repartida entre hojas de cálculo y conversaciones, lo que falta puede ser un <a href="/software-a-la-medida-costa-rica/">sistema a la medida</a> antes que la IA. Y si querés entender los costos antes de decidir, mirá <a href="/blog/cuanto-cuesta-un-chatbot-de-ia-para-whatsapp/">cuánto cuesta un chatbot de IA para WhatsApp</a>.</p>
`,
  },
  {
    slug: 'ciberseguridad-para-pymes-costa-rica',
    title: 'Ciberseguridad para PYMES en Costa Rica: estafas por SINPE y cómo protegerte',
    metaTitle: 'Ciberseguridad para PYMES en Costa Rica | HacksinCodigos',
    metaDesc:
      'Ciberseguridad para PYMES en Costa Rica: estafas por SINPE Móvil, robo de WhatsApp y correos falsos, y las medidas mínimas para proteger tu negocio.',
    excerpt:
      'A una PYME no la atacan por grande: la atacan porque es fácil. Estas son las estafas que más vemos en Costa Rica y las medidas básicas que cierran la mayoría de las puertas.',
    tag: '🔐 Ciberseguridad',
    tagColor: '#ef4444',
    published: '2026-09-12',
    updated: '2026-09-12',
    readingMinutes: 10,
    relatedServices: [
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web seguro' },
      { href: '/product/mantenimiento-web-pro-mensual/', label: 'mantenimiento y seguridad web' },
    ],
    bodyHtml: `
<p>Hay una idea muy instalada en los negocios pequeños: <em>"a mí no me van a atacar, no soy una empresa grande"</em>. Es exactamente al revés. A una PYME no la atacan por ser grande: la atacan porque <strong>es fácil</strong>. No tiene departamento de TI, la contraseña es la misma para todo y el WhatsApp del negocio está en el celular personal del dueño.</p>
<p>La buena noticia es que la mayoría de los ataques que golpean a negocios en Costa Rica no son sofisticados. Se aprovechan de descuidos, y los descuidos se corrigen. Empecemos por lo que más vemos.</p>

<h2>Las estafas que más golpean a negocios en Costa Rica</h2>

<h3>Estafas por SINPE Móvil: el comprobante falso</h3>
<p>El cliente "paga", manda la captura de pantalla del SINPE Móvil y se lleva el producto. La captura está editada: el dinero nunca entró.</p>
<p><strong>Cómo evitarlo:</strong> nunca entregues por una captura. Confirmá el ingreso <strong>en la aplicación de tu banco</strong>, no en la imagen que te mandan. Si hay mucho movimiento, designá a una sola persona que confirme pagos antes de despachar.</p>

<h3>La estafa del SINPE equivocado: "me equivoqué de número"</h3>
<p>Llega un depósito, o una captura de uno, y enseguida un mensaje pidiendo que devuelvas la plata porque fue un error. A veces el depósito ni existió; otras veces sí existió y después se revierte.</p>
<p><strong>Cómo evitarlo:</strong> no devuelvas nada por tu cuenta. Revisá en tu banco que el ingreso sea real y consultá con el banco cómo proceder. Una persona honesta que se equivocó puede esperar a que el banco lo resuelva.</p>

<h3>El robo del WhatsApp del negocio</h3>
<p>Alguien escribe haciéndose pasar por un contacto o por soporte técnico y pide que le reenviés "un código de seis dígitos que te llegó por error". Ese código es el de verificación de WhatsApp. Con él, se quedan con la cuenta y le escriben a todos tus clientes pidiendo plata a tu nombre.</p>
<p><strong>Cómo evitarlo:</strong> ese código <strong>no se comparte nunca, con nadie</strong>. Y activá la verificación en dos pasos de WhatsApp —un PIN propio— para que aunque consigan el código, no puedan entrar.</p>

<h3>El correo del proveedor que "cambió de cuenta"</h3>
<p>Llega un correo que parece de un proveedor conocido avisando que cambió su cuenta bancaria y que los próximos pagos van a otra. El correo es falso, o el del proveedor fue hackeado. El pago se va a los estafadores.</p>
<p><strong>Cómo evitarlo:</strong> cualquier cambio de cuenta bancaria se confirma <strong>llamando al proveedor a un número que ya tenías</strong>, nunca al que viene en el mismo correo.</p>

<h3>El mensaje que se hace pasar por el banco</h3>
<p>Un correo o mensaje con el logo de tu banco avisa de un "movimiento sospechoso" o una "cuenta bloqueada" y te manda a un enlace para verificar. La página es una copia perfecta que se roba tu usuario y contraseña.</p>
<p><strong>Cómo evitarlo:</strong> nunca entres al banco desde un enlace que te mandaron. Escribí la dirección vos mismo o usá la aplicación oficial. Los bancos no piden contraseñas por mensaje.</p>

<h2>Las diez medidas mínimas</h2>
<p>No hace falta un presupuesto de empresa grande. Con esto cerrás la mayoría de las puertas:</p>
<ol>
  <li><strong>Verificación en dos pasos</strong> en todo lo importante: correo, banco, WhatsApp, redes sociales y el panel de tu sitio web. Es la medida que más ataques frena, por lejos.</li>
  <li><strong>Una contraseña distinta para cada servicio</strong>, guardadas en un gestor de contraseñas. Si se filtra una, no caen todas.</li>
  <li><strong>Cuentas separadas para cada persona.</strong> Nada de una sola cuenta compartida por todo el equipo: si alguien se va, no hay forma de cerrarle el acceso sin cambiarlo todo.</li>
  <li><strong>Quitar accesos el mismo día</strong> que alguien deja la empresa. Correo, sistemas, redes, el WhatsApp del negocio.</li>
  <li><strong>Respaldos que estén fuera de la oficina</strong>, y probar de vez en cuando que se pueden recuperar. Un respaldo que nunca se probó no es un respaldo.</li>
  <li><strong>Actualizar</strong> el sistema operativo, el celular y, sobre todo, tu sitio web y sus complementos. Los sitios en WordPress desactualizados son de los blancos más fáciles que existen.</li>
  <li><strong>Confirmar pagos en el banco</strong>, nunca por capturas de pantalla.</li>
  <li><strong>Confirmar cambios de cuenta bancaria por teléfono</strong>, a un número que ya tenías.</li>
  <li><strong>Una red de wifi aparte para clientes</strong>, separada de la que usan las computadoras del negocio.</li>
  <li><strong>Proteger tu dominio contra la suplantación de correo.</strong> Hay tres registros técnicos —SPF, DKIM y DMARC— que evitan que alguien mande correos haciéndose pasar por tu empresa. Casi ninguna PYME los tiene bien configurados.</li>
</ol>

<h2>Tu sitio web también es una puerta</h2>
<p>Un sitio hackeado no solo se cae: puede empezar a mandar spam a tu nombre, redirigir a tus visitantes a páginas de estafa o quedar marcado por Google como peligroso, lo que hunde tu posicionamiento de un día para otro.</p>
<p>Lo mínimo para un sitio de negocio:</p>
<ul>
  <li><strong>HTTPS</strong>, el candado del navegador.</li>
  <li><strong>Actualizaciones al día</strong> del sistema y de cada complemento, y borrar los que no se usan.</li>
  <li><strong>Contraseñas fuertes y verificación en dos pasos</strong> en el panel de administración.</li>
  <li><strong>Respaldos automáticos</strong> guardados fuera del mismo servidor.</li>
  <li><strong>Que nadie tenga acceso de administrador</strong> si no lo necesita.</li>
</ul>
<p>Los sitios estáticos —sin base de datos que consultar en cada visita— tienen mucha menos superficie de ataque, y es una de las razones por las que los usamos cuando el proyecto lo permite.</p>

<h2>Si ya te pasó</h2>
<p>Actuar rápido limita el daño:</p>
<ul>
  <li><strong>WhatsApp robado:</strong> reinstalá WhatsApp con tu número para recuperar la cuenta, y avisá de inmediato a tus clientes por otros medios que no respondan pedidos de dinero.</li>
  <li><strong>Datos bancarios comprometidos:</strong> llamá al banco de inmediato para bloquear.</li>
  <li><strong>Contraseñas expuestas:</strong> cambialas desde un dispositivo que sepas que está limpio, empezando por el correo — porque desde el correo se recupera todo lo demás.</li>
  <li><strong>Fraude consumado:</strong> guardá las capturas, los números y los comprobantes, y presentá la denuncia ante el OIJ.</li>
</ul>

<h2>La seguridad es un hábito, no una compra</h2>
<p>Ningún producto te protege si la contraseña está pegada en un papel junto a la computadora o si alguien reenvía el código de WhatsApp. La mayor parte de la seguridad de una PYME está en que el equipo conozca estas estafas y sepa qué no hacer. Una reunión de media hora contándoles este artículo protege más que muchos programas.</p>
<p>Si querés que revisemos la seguridad de tu sitio o que lo mantengamos actualizado, en <a href="/desarrollo-web-costa-rica/">desarrollo web</a> está cómo lo construimos con la seguridad desde el inicio, y en el <a href="/product/mantenimiento-web-pro-mensual/">plan de mantenimiento</a> cómo lo cuidamos después.</p>
`,
  },
  {
    slug: 'seguridad-web-y-seo-disenar-un-sitio-seguro',
    title: 'Seguridad web y SEO: por qué un sitio inseguro no llega a primer lugar',
    metaTitle: 'Seguridad web y SEO: diseñar un sitio seguro | HacksinCodigos',
    metaDesc:
      'Cómo la seguridad de tu página web afecta su posicionamiento en Google, cómo verificarla y qué cuidar al diseñar: certificado HTTPS, hackeos y spam.',
    excerpt:
      'Podés tener el mejor contenido del país y perder todo el posicionamiento en una noche porque alguien entró por un complemento viejo. La seguridad no es aparte del SEO: es su base.',
    tag: '🛡️ Seguridad y SEO',
    tagColor: '#22c55e',
    published: '2026-09-13',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO' },
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web seguro' },
    ],
    bodyHtml: `
<p>Casi todo lo que se escribe sobre posicionamiento habla de palabras clave, contenido y enlaces. Casi todo lo que se escribe sobre seguridad habla de virus y contraseñas. Rara vez alguien los junta, y es un error caro: <strong>un sitio inseguro no puede sostener un buen posicionamiento</strong>, por más contenido que tenga.</p>
<p>Podés pasar meses subiendo en Google y perderlo todo en una noche porque alguien entró por un complemento sin actualizar. Esto es lo que conviene saber antes de diseñar un sitio —o antes de invertir en posicionar uno que ya existe.</p>

<h2>Cómo la seguridad afecta directamente a tu posición</h2>

<h3>HTTPS es una señal de Google</h3>
<p>Google confirmó hace años que usa HTTPS —el candado del navegador— como señal para ordenar resultados. Es una señal liviana, pero tiene un efecto indirecto mucho más fuerte: un sitio sin HTTPS aparece marcado como <strong>"No seguro"</strong> en el navegador.</p>
<p>Nadie deja sus datos, ni escribe por el formulario, ni compra en una página que su propio navegador le dice que no es segura. La gente se va, y Google nota que se va.</p>

<h3>Un sitio hackeado recibe advertencias en los resultados</h3>
<p>Cuando Google detecta que un sitio fue comprometido, puede mostrar una advertencia directamente en los resultados de búsqueda, o una pantalla roja de alerta cuando alguien intenta entrar. En ese momento el tráfico se desploma, no importa en qué posición estuvieras.</p>
<p>Y salir de ahí no es inmediato: hay que limpiar el sitio, cerrar la puerta por la que entraron y pedirle a Google que lo revise de nuevo.</p>

<h3>El spam inyectado: el hackeo que no se ve</h3>
<p>Este es el más traicionero, porque el dueño muchas veces no se entera. Los atacantes no rompen el sitio: <strong>le agregan páginas escondidas</strong> con contenido de spam —medicamentos, apuestas, productos falsificados— y enlaces hacia sus propios sitios. Para el visitante normal todo se ve igual.</p>
<p>Pero Google sí las ve. De repente tu dominio aparece en búsquedas de cosas que nunca vendiste, tu reputación ante Google cae, y el posicionamiento de tus páginas reales se hunde. En algunos casos Google aplica una penalización manual al dominio completo.</p>
<p><strong>Cómo detectarlo:</strong> buscá en Google <code>site:tudominio.com</code> y revisá si aparecen páginas o títulos que no reconocés. Y revisá en Search Console el informe de <em>Problemas de seguridad</em> y las búsquedas por las que te están mostrando.</p>

<h3>Un sitio caído no posiciona</h3>
<p>Los ataques que sobrecargan un sitio hasta tumbarlo, o un servidor comprometido que se usa para mandar spam y termina bloqueado, dejan tu página sin responder. Si Google intenta visitarla repetidamente y no puede, empieza a bajarla.</p>

<h2>Por qué los sitios inseguros suelen ser también lentos</h2>
<p>Hay una relación que no es casualidad. Un sitio lleno de complementos —uno para el formulario, otro para el carrusel, otro para las redes, otro para el SEO— es a la vez <strong>más lento y más vulnerable</strong>: cada complemento es código que se carga en cada visita y una puerta más que alguien tiene que mantener cerrada.</p>
<p>Menos complementos significa un sitio más rápido, que Google premia, y con menos superficie de ataque. La misma decisión mejora las dos cosas.</p>

<h2>Cómo verificar la seguridad de tu página web</h2>
<p>Antes de invertir en posicionar un sitio conviene revisar que no tenga la puerta abierta. Estas revisiones las podés hacer vos, gratis:</p>
<ul>
  <li><strong>El certificado de seguridad.</strong> Hacé clic en el candado junto a la dirección: tiene que decir que la conexión es segura y que el certificado está vigente. Probá también entrar con <code>http://</code> y comprobá que te lleve solo a la versión segura.</li>
  <li><strong>El informe de Navegación Segura de Google.</strong> Google tiene una página pública, dentro de su Informe de Transparencia, donde escribís tu dominio y te dice si lo tiene marcado como peligroso.</li>
  <li><strong>Search Console.</strong> El apartado de problemas de seguridad te avisa si Google detectó malware, contenido inyectado o páginas engañosas.</li>
  <li><strong>Una búsqueda de <code>site:tudominio.com</code>.</strong> Si aparecen páginas, títulos o idiomas que no reconocés, es la señal típica de spam inyectado.</li>
  <li><strong>Las versiones de todo lo instalado.</strong> Si usás WordPress u otro gestor, revisá que el sistema, el tema y cada complemento estén en su última versión.</li>
</ul>
<p>Si alguna de estas revisiones falla, eso se arregla <em>antes</em> de seguir invirtiendo en contenido o publicidad.</p>

<h2>Lo que hay que cuidar al diseñar el sitio</h2>
<p>La seguridad es mucho más barata si se piensa desde el diseño que si se agrega después de un problema.</p>

<h3>1. Elegir la tecnología según el riesgo</h3>
<p>No todos los sitios necesitan un sistema con base de datos y panel de administración. Un sitio de negocio que cambia poco puede construirse como <strong>sitio estático</strong>: se sirve HTML ya armado, sin base de datos que consultar en cada visita y sin panel expuesto a internet. Es más rápido y deja muy poco por dónde entrar.</p>
<p>Cuando el cliente necesita editar contenido todos los días, un gestor como WordPress tiene sentido — pero entonces hay que asumir el compromiso de mantenerlo actualizado.</p>

<h3>2. HTTPS en todo el sitio, y una sola dirección</h3>
<p>No alcanza con tener el certificado: todo el sitio tiene que cargar en HTTPS, y todas las variantes —con www, sin www, con http— tienen que redirigir de forma permanente a una sola. Además de cerrar huecos, eso evita que Google vea varias copias de tu sitio y reparta la autoridad entre ellas.</p>

<h3>3. Cabeceras de seguridad</h3>
<p>Son instrucciones que el servidor le da al navegador: que siempre use conexión segura, que no permita que tu sitio se incruste dentro de otro para engañar al visitante, que solo cargue código de orígenes autorizados. No se ven, pero bloquean tipos enteros de ataque. Casi ningún sitio de PYME las tiene configuradas.</p>

<h3>4. Formularios que no sean una puerta</h3>
<p>Los formularios de contacto son de los puntos más atacados: se usan para mandar spam masivo, para intentar inyectar código o para llenar tu correo de basura. Hay que validar lo que llega, limitar los envíos y, cuando se pueda, no guardar datos que no hacen falta.</p>

<h3>5. Cero credenciales dentro del código</h3>
<p>Claves de API, contraseñas de base de datos o tokens de servicios nunca van escritas en el código del sitio. Si ese código queda en un repositorio público, las encuentran en horas. Van en variables de entorno del servidor, fuera de la vista de cualquiera.</p>

<h3>6. Accesos mínimos</h3>
<p>Solo tiene acceso de administrador quien lo necesita, cada persona con su propia cuenta y con verificación en dos pasos. Una cuenta compartida por todo el equipo es imposible de auditar y de cerrar cuando alguien se va.</p>

<h3>7. Respaldos que se puedan restaurar</h3>
<p>Si todo lo demás falla, un respaldo reciente y probado es lo que te devuelve el sitio en horas en vez de semanas. Tiene que estar guardado fuera del mismo servidor — si el servidor cae, un respaldo guardado ahí adentro cae con él.</p>

<h2>Lo que hay que cuidar después de lanzarlo</h2>
<ul>
  <li><strong>Actualizar</strong> el sistema y cada complemento. La mayoría de los sitios hackeados no caen por ataques ingeniosos, sino por una vulnerabilidad conocida que nunca se parchó.</li>
  <li><strong>Borrar lo que no se usa:</strong> complementos desactivados, temas viejos, cuentas de ex colaboradores.</li>
  <li><strong>Revisar Search Console</strong> cada tanto, en especial el informe de problemas de seguridad y las búsquedas por las que te muestran.</li>
  <li><strong>Vigilar que el dominio no se use para suplantarte:</strong> los registros SPF, DKIM y DMARC evitan que manden correos haciéndose pasar por tu empresa, algo que también daña la reputación del dominio.</li>
</ul>

<h2>Cómo lo aplicamos en nuestro propio sitio</h2>
<p>No es teoría: este sitio está construido así. Es estático, sin base de datos expuesta; se sirve siempre por HTTPS con una sola dirección canónica; tiene cabeceras de seguridad que restringen qué código puede cargarse; las credenciales de servicios externos viven en variables del servidor y no en el código; y antes de cada publicación corre una revisión automática que busca, entre otras cosas, secretos filtrados y enlaces rotos.</p>
<p>Venimos de la ciberseguridad, y por eso lo tomamos como punto de partida y no como un agregado al final.</p>

<h2>La idea para llevarse</h2>
<p>El posicionamiento se construye con meses de trabajo y se puede perder en una noche. La seguridad es lo que protege esa inversión. Si estás por hacer un sitio, pedile a quien lo construya que te explique cómo lo va a proteger. Si ya tenés uno y estás invirtiendo en posicionarlo, revisá primero que no tenga la puerta abierta.</p>
<p>En <a href="/desarrollo-web-costa-rica/">desarrollo web</a> está cómo construimos con la seguridad desde el inicio, y en <a href="/seo-costa-rica/">posicionamiento SEO</a> cómo auditamos un sitio existente. Si te interesa la parte del negocio, mirá también <a href="/blog/ciberseguridad-para-pymes-costa-rica/">ciberseguridad para PYMES</a> y <a href="/blog/por-que-mi-pagina-web-no-aparece-en-google/">por qué tu página no aparece en Google</a>.</p>
`,
  },
  {
    slug: 'chatbot-con-ia-para-pagina-web-ventas-y-servicio-al-cliente',
    title: 'Chatbot con IA para tu página web: un vendedor y servicio al cliente 24/7',
    metaTitle: 'Chatbot con IA para tu página web: ventas y atención | HacksinCodigos',
    metaDesc:
      'Cómo poner un chatbot con IA en tu página web que trabaje como vendedor y como servicio al cliente: recomienda, resuelve dudas y lleva al siguiente paso.',
    excerpt:
      'La mayoría de los chats de sitios web solo responden preguntas. Un chatbot con IA bien armado hace lo que tu mejor vendedor antes de la compra y lo que tu mejor persona de servicio al cliente después.',
    tag: '🤖 Agentes IA',
    tagColor: 'var(--accent-amber)',
    published: '2026-09-13',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/agentes-ia-costa-rica/', label: 'agentes de IA' },
      { href: '/software-a-la-medida-costa-rica/', label: 'CRM y software a la medida' },
    ],
    bodyHtml: `
<p>Casi todos los chats que se ven en las páginas web hacen lo mismo: esperan a que alguien pregunte y contestan. Eso es un mostrador de información, no un vendedor. Y la diferencia se nota en lo que termina pasando: la persona recibe su respuesta y se va.</p>
<p>Un buen vendedor no espera a que le pregunten. Saluda, entiende qué anda buscando el cliente, le recomienda algo concreto, le quita las dudas y lo lleva al siguiente paso. Y una buena persona de servicio al cliente resuelve el problema de quien ya compró sin hacerlo esperar.</p>
<p><strong>Eso mismo puede hacer un chatbot con IA en tu página web</strong> — si se arma pensando en vender y atender, y no solo en contestar. Acá explicamos cómo funciona en los dos papeles.</p>

<h2>La diferencia entre un chat que contesta y un agente que vende</h2>
<p>Pongamos a alguien que entra a la página de un servicio y escribe: <em>"¿cuánto cuesta?"</em>.</p>
<p><strong>El chat que contesta</strong> responde el precio, o dice que depende, y ahí termina la conversación.</p>
<p><strong>El agente que vende</strong> hace lo que haría tu mejor vendedor: pregunta un par de cosas para entender el caso, explica de qué depende el precio para ese caso en particular, recomienda la opción que le calza, y propone el siguiente paso — una cotización, una llamada, agendar, o seguir la conversación por WhatsApp. Y deja los datos registrados para que nadie tenga que empezar de cero.</p>
<p>Misma pregunta. Resultado completamente distinto.</p>

<h2>El chatbot como vendedor: los cuatro momentos de una venta</h2>
<p>El trabajo de un vendedor tiene cuatro momentos, y un agente bien diseñado sigue ese mismo orden:</p>

<h3>1. Entender antes de ofrecer</h3>
<p>Un vendedor malo recita el catálogo. Uno bueno pregunta. El agente hace dos o tres preguntas naturales para entender qué necesita la persona: para qué lo quiere, para cuándo, qué tiene hoy. Sin interrogatorios ni formularios disfrazados — como una conversación.</p>

<h3>2. Recomendar algo concreto</h3>
<p>Con eso claro, el agente no manda a la persona a "ver el catálogo": le recomienda la opción que le sirve y le explica por qué. Si hay dos que calzan, las compara. Si lo que busca no lo ofrecés, lo dice — un vendedor honesto no le vende cualquier cosa a nadie.</p>

<h3>3. Resolver las dudas que frenan la compra</h3>
<p>Las personas no dejan de comprar por falta de información: dejan de comprar por dudas. ¿Cuánto tarda? ¿Qué pasa si no me gusta? ¿Hacen envíos a mi zona? ¿Con qué otros clientes han trabajado? El agente responde esas dudas en el momento en que aparecen, que es exactamente cuando se pierden las ventas.</p>

<h3>4. Cerrar el siguiente paso</h3>
<p>No siempre se vende en el chat, y no hace falta. Lo que un buen vendedor nunca hace es dejar la conversación en el aire. El agente propone un paso concreto: pedir la cotización, agendar una llamada, agregar al carrito, o pasar la conversación a WhatsApp con todo lo conversado. Y si la persona no está lista, le deja una forma fácil de volver.</p>

<h2>El mismo chatbot como servicio al cliente</h2>
<p>Antes de la compra el agente vende. Después de la compra, atiende. Es el mismo agente, con la misma información del negocio, pero con otro objetivo: que quien ya es cliente resuelva su problema rápido y vuelva a comprar.</p>
<p>La atención al cliente con IA rinde sobre todo en lo que más se repite:</p>
<ul>
  <li><strong>Estado del pedido</strong>: si ya salió, cuándo llega, qué pasa si se atrasa.</li>
  <li><strong>Cambios, devoluciones y garantías</strong>: qué aplica, qué hay que hacer y qué datos se necesitan.</li>
  <li><strong>Cómo usar lo que compró</strong>: instrucciones, cuidados, dudas de instalación o configuración.</li>
  <li><strong>Horarios, ubicación y formas de contacto</strong> para cuando hace falta una persona.</li>
  <li><strong>Primer nivel de soporte</strong>: las soluciones a los problemas de siempre, antes de abrir un caso.</li>
  <li><strong>Registrar el caso</strong> con todos los datos cuando no se puede resolver solo, para que la persona que lo tome no tenga que volver a preguntar.</li>
</ul>
<p>Cambia también el tono. Como vendedor el agente conversa y recomienda; como servicio al cliente escucha, tiene paciencia y va al punto. Un cliente con un problema no quiere que le ofrezcan otro producto: quiere que le resuelvan. Un buen agente distingue si le escribe alguien que está por comprar o alguien que ya compró, y cambia de modo solo.</p>
<p>El resultado para tu equipo es concreto: las consultas repetitivas se resuelven solas a cualquier hora, y a las personas les llegan solo los casos que de verdad necesitan criterio, ya ordenados.</p>

<h2>Cómo se "contrata" y se capacita al agente</h2>
<p>La mejor forma de pensarlo es como si entrara un vendedor nuevo al equipo. No lo mandarías a atender el primer día sin explicarle nada. Al agente tampoco.</p>
<p>Lo que necesita saber es lo mismo que le enseñarías a una persona:</p>
<ul>
  <li><strong>Qué vendés</strong>, con detalle: productos o servicios, para quién es cada uno y en qué se diferencian.</li>
  <li><strong>Cómo se cotiza</strong>: precios si los publicás, o qué datos hacen falta para cotizar si no.</li>
  <li><strong>Las políticas</strong>: plazos, garantías, formas de pago, cobertura, devoluciones.</li>
  <li><strong>Las preguntas que siempre te hacen</strong>, con las respuestas que funcionan.</li>
  <li><strong>Las objeciones típicas</strong> y cómo se responden bien.</li>
  <li><strong>Casos reales</strong> para mostrar que ya lo hiciste antes.</li>
  <li><strong>El tono de tu marca</strong>: si tuteás, si sos formal, qué palabras usás.</li>
  <li><strong>Qué NO puede hacer</strong>: inventar descuentos, prometer plazos que no se cumplen, opinar de temas delicados.</li>
</ul>
<p>La mejor fuente para todo esto ya la tenés: <strong>las conversaciones reales de tus vendedores</strong> por WhatsApp y correo. Ahí está cómo pregunta tu cliente de verdad y qué respuestas cierran.</p>

<h2>La ventaja que ningún vendedor humano tiene</h2>
<p>Un agente en tu sitio <strong>sabe en qué página está parado el visitante</strong>. Si alguien lleva un rato en la página de tiendas online, no le pregunta "¿en qué le puedo ayudar?": le pregunta si está pensando en vender por internet y qué tipo de productos tiene.</p>
<p>Y está disponible a la hora en que la gente investiga, que muchas veces es de noche o el fin de semana, cuando tu equipo no está.</p>

<h2>Cuándo tiene que entrar una persona</h2>
<p>Un agente vendedor no reemplaza a tu equipo: le prepara el terreno. Hay momentos en que tiene que pasar la conversación sin intentarlo:</p>
<ul>
  <li><strong>Cuando la persona lo pide.</strong> Siempre, sin resistencia.</li>
  <li><strong>Cuando hay que negociar</strong> un precio especial, un descuento o una excepción.</li>
  <li><strong>Cuando es un cliente grande</strong> o un proyecto complejo que merece atención personal.</li>
  <li><strong>Cuando hay un reclamo</strong> o alguien está molesto.</li>
  <li><strong>Cuando la pregunta sale de lo que sabe.</strong> Mejor decir "te comunico con alguien" que inventar.</li>
</ul>
<p>Lo importante es que al pasar la conversación, la persona de tu equipo reciba todo lo que ya se habló. Nada peor para un cliente que tener que repetir su caso desde el principio.</p>

<h2>Conectado a tu CRM, el agente no pierde a nadie</h2>
<p>Aquí está la diferencia entre un agente que conversa y uno que realmente suma ventas. Si está conectado a tu <a href="/software-a-la-medida-costa-rica/">CRM</a>, cada conversación que termina en interés queda registrada como oportunidad: quién es, qué necesita, qué se le recomendó y cuál es el siguiente paso.</p>
<p>Así, el interesado de las once de la noche amanece asignado a un vendedor, con el contexto completo. También se puede conectar con tu calendario para agendar directo, con tu tienda para consultar existencias o con WhatsApp para seguir la conversación donde el cliente prefiera.</p>

<h2>¿En la página web o en WhatsApp?</h2>
<p>No son excluyentes, y conviene entender qué hace mejor cada uno.</p>
<p><strong>En la página web</strong> el agente atrapa a quien está investigando: llegó desde Google, todavía no tiene tu número y no quiere salir de la página. Funciona especialmente bien en servicios que se piensan antes de contratar, en ventas entre empresas y en sitios con mucho tráfico de búsqueda.</p>
<p><strong>En WhatsApp</strong> el agente atiende a quien ya decidió escribirte, en el canal donde el costarricense conversa todos los días y retoma la conversación días después.</p>
<p>Lo más potente es que funcionen juntos: el agente del sitio entiende el caso y, cuando la conversación se pone seria, la pasa a WhatsApp con todo el contexto. Cuándo conviene solo uno de los dos lo contamos en el <a href="/blog/caso-chatbot-whatsapp-la-casita-del-bebe/">caso de La Casita del Bebé</a>, donde elegimos WhatsApp a propósito.</p>

<h2>Lo técnico que no se ve y que importa</h2>
<ul>
  <li>
    <strong>Que no ponga lento tu sitio.</strong> Un chat mal instalado puede cargar mucho código en cada visita y empeorar tu posicionamiento en Google. Tiene que cargarse de forma diferida, sin frenar la página.
  </li>
  <li>
    <strong>Que la clave de la IA nunca esté en el navegador.</strong> Si queda a la vista en el código de la página, cualquiera la copia y la usa a tu costa. Tiene que pasar por un servidor intermedio.
  </li>
  <li>
    <strong>Protección contra abuso.</strong> Límites de mensajes para que un robot no se ponga a conversar sin parar y te gaste la cuota del mes en una noche.
  </li>
  <li>
    <strong>Privacidad.</strong> Avisar que es un asistente virtual, pedir solo los datos necesarios y cuidar dónde se guardan las conversaciones.
  </li>
</ul>

<h2>Lo que un agente vendedor nunca debe hacer</h2>
<ul>
  <li><strong>Hacerse pasar por una persona.</strong> Se presenta como asistente virtual. La honestidad vende más que el truco.</li>
  <li><strong>Inventar precios, descuentos o plazos.</strong> Todo lo que promete tiene que ser cierto.</li>
  <li><strong>Presionar.</strong> Un vendedor insistente espanta, sea humano o no.</li>
  <li><strong>Hablar mal de la competencia.</strong> Se habla de lo que vos hacés bien.</li>
</ul>

<h2>Cómo saber si está vendiendo y atendiendo bien</h2>
<p>No alcanza con que "converse bonito". Hay que medir:</p>
<ul>
  <li><strong>Cuántas conversaciones inicia</strong> y en qué páginas.</li>
  <li><strong>Cuántas terminan en un siguiente paso</strong>: cotización, cita, carrito, WhatsApp.</li>
  <li><strong>Cuántos casos de servicio al cliente resuelve sin una persona</strong>, y cuántos tiene que pasar.</li>
  <li><strong>Cuánto tarda en dar la primera respuesta</strong> frente a lo que tardaba tu equipo.</li>
  <li><strong>Qué preguntas no supo responder</strong> — cada una es algo que hay que enseñarle.</li>
  <li><strong>En qué punto se va la gente</strong> — ahí suele haber una duda mal resuelta.</li>
</ul>

<h2>Por dónde empezar</h2>
<p>No hace falta ponerlo en todo el sitio el primer día. Lo sensato es empezar en las <strong>páginas de servicio que más visitas reciben</strong>, con la información de esos servicios bien preparada, y revisar las conversaciones durante las primeras semanas. Con lo que aparece ahí se afina, y después se extiende al resto.</p>
<p>Si querés un chatbot con IA para tu empresa, en <a href="/agentes-ia-costa-rica/">agentes de IA para tu sitio web, WhatsApp y redes</a> está cómo trabajamos. Si antes querés entender la inversión, mirá <a href="/blog/cuanto-cuesta-un-chatbot-de-ia-para-whatsapp/">cuánto cuesta un chatbot de IA</a>. Y si tus clientes también te escriben por Instagram, está <a href="/agentes-ia-redes-sociales-costa-rica/">agentes de IA para redes sociales</a>.</p>
`,
  },
  {
    slug: 'estafas-sinpe-movil-costa-rica',
    title: 'Estafas por SINPE Móvil en Costa Rica: cómo funcionan y cómo evitarlas',
    metaTitle: 'Estafas por SINPE Móvil en Costa Rica | HacksinCodigos',
    metaDesc:
      'Las estafas por SINPE Móvil más comunes en Costa Rica —comprobante falso, SINPE equivocado, llamadas del falso banco— y qué hacer para evitarlas o si ya te pasó.',
    excerpt:
      'SINPE Móvil es rápido y cómodo, y justamente por eso es el favorito de los estafadores. Así funcionan las estafas más comunes, las señales para reconocerlas y qué hacer si ya caíste.',
    tag: '🔐 Ciberseguridad',
    tagColor: '#ef4444',
    published: '2026-09-07',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online con pagos verificados' },
      { href: '/desarrollo-web-costa-rica/', label: 'desarrollo web seguro' },
    ],
    bodyHtml: `
<p>SINPE Móvil cambió la forma de pagar en Costa Rica: basta un número de teléfono y la plata llega en segundos. Esa misma rapidez es lo que lo volvió el favorito de los estafadores. No porque el sistema sea inseguro, sino porque <strong>las estafas no atacan al sistema: atacan a las personas</strong>, aprovechando la confianza, la prisa y la costumbre de dar por buena una captura de pantalla.</p>
<p>La buena noticia es que casi todas siguen unos pocos guiones que se repiten. Si los conocés, los reconocés. Estos son los más comunes, tanto para negocios como para personas.</p>

<h2>1. El comprobante falso</h2>
<p><strong>Cómo funciona:</strong> alguien compra, dice que ya pagó y te manda la captura del SINPE. Se ve perfecta: tu nombre, el monto, la fecha, el número de referencia. Pero la imagen está editada o es de otra transferencia, y la plata nunca entró. Cuando te das cuenta, el producto ya salió.</p>
<p>Es la estafa que más golpea a los negocios que venden por WhatsApp e Instagram, sobre todo en momentos de mucho movimiento, cuando no hay tiempo de revisar.</p>
<p><strong>Cómo evitarla:</strong> la captura no es prueba de nada. Antes de entregar, confirmá que el dinero está <strong>en la aplicación de tu banco</strong>. Si tenés un negocio con varias personas atendiendo, que una sola sea la encargada de confirmar pagos, y que nadie despache sin su visto bueno.</p>

<h2>2. El SINPE equivocado: "me equivoqué de número"</h2>
<p><strong>Cómo funciona:</strong> te llega un SINPE que no esperabas —o un mensaje que dice que te llegó— y enseguida alguien te escribe muy apenado: se equivocó de número, por favor devolvéselo. Hay varias versiones:</p>
<ul>
  <li><strong>El depósito nunca existió.</strong> Solo te mandaron un mensaje o una captura falsa, y si "devolvés", ponés plata tuya.</li>
  <li><strong>El depósito es real, pero la plata es robada.</strong> Viene de la cuenta de otra víctima. Si la devolvés a un número distinto del que te la envió, terminás mandándole plata robada al estafador — y la cuenta involucrada en el reclamo es la tuya.</li>
  <li><strong>Te piden devolverla a "otro número"</strong> porque el original "no funciona". Es la señal más clara de estafa.</li>
</ul>
<p><strong>Cómo evitarla:</strong> no devuelvas nada por tu cuenta y en caliente. Revisá en tu banco si el ingreso es real. Si lo es, comunicate con tu banco y dejá que ellos gestionen la devolución. Una persona que de verdad se equivocó puede esperar a que el banco lo resuelva; un estafador no, y por eso presiona.</p>

<h2>3. El mensaje falso de "recibió un SINPE"</h2>
<p><strong>Cómo funciona:</strong> llega un mensaje de texto que imita la notificación de tu banco avisando que recibiste un SINPE. Viene de un número cualquiera, pero con el formato de siempre. Sirve para acompañar la estafa del comprobante falso o la del SINPE equivocado.</p>
<p><strong>Cómo evitarla:</strong> las notificaciones se confirman en la aplicación del banco, no en un mensaje. Y un mensaje de texto de un número desconocido no es tu banco, por más parecido que se vea.</p>

<h2>4. La llamada del falso banco</h2>
<p><strong>Cómo funciona:</strong> te llaman diciendo que son del departamento de seguridad de tu banco. Detectaron "un movimiento sospechoso" o "un SINPE que no reconociste" y para detenerlo necesitan que les confirmes un código que te va a llegar, tu clave, o que instalés una aplicación. Hablan con seguridad, conocen tu nombre y a veces hasta los últimos números de tu tarjeta.</p>
<p>Con ese código o esa clave entran a tu banca en línea y vacían la cuenta — muchas veces, justamente, por SINPE.</p>
<p><strong>Cómo evitarla:</strong> <strong>tu banco nunca te va a pedir claves, códigos de autorización ni que instalés nada por teléfono.</strong> Si te llaman, colgá y llamá vos al número oficial que está en la tarjeta o en el sitio del banco. Si era real, ahí te lo confirman.</p>

<h2>5. El comprador o vendedor de redes sociales</h2>
<p><strong>Cómo funciona:</strong> en ventas por Facebook, Marketplace o Instagram hay dos caras. El comprador que "ya pagó" y manda un comprobante falso para que le mandés el producto. Y el vendedor que pide un adelanto por SINPE para "apartar" algo que no existe, y desaparece.</p>
<p><strong>Cómo evitarla:</strong> como vendedor, no entregues sin confirmar el ingreso en tu banco. Como comprador, desconfiá de precios muy por debajo del mercado, de perfiles recién creados y de quien no permite ver el producto ni pagar contra entrega.</p>

<h2>6. El WhatsApp robado que pide plata</h2>
<p><strong>Cómo funciona:</strong> le roban el WhatsApp a un conocido tuyo —normalmente consiguiendo que reenvíe el código de verificación de seis dígitos— y desde su cuenta te escriben: <em>"¿me podés hacer un SINPE? Te lo devuelvo mañana, es una emergencia"</em>. El número es el de tu amigo, la foto también.</p>
<p><strong>Cómo evitarla:</strong> ante cualquier pedido de plata por mensaje, <strong>llamá a la persona</strong> por teléfono. Una emergencia real aguanta una llamada de treinta segundos. Y protegé tu propio WhatsApp: el código de verificación no se comparte nunca, y activá la verificación en dos pasos.</p>

<h2>7. Premios, empleos y alquileres que piden "un trámite"</h2>
<p><strong>Cómo funciona:</strong> ganaste una rifa en la que no participaste, te ofrecen un trabajo muy bien pagado sin entrevista, o encontraste un alquiler buenísimo. Para seguir solo falta un pequeño pago por SINPE: el trámite, el envío del premio, el depósito para apartar.</p>
<p><strong>Cómo evitarla:</strong> la regla es simple. Si para recibir algo tenés que pagar primero, y te apuran para que lo hagás ya, es estafa. Un alquiler se ve antes de pagar; un premio real no cobra por entregarse.</p>

<h2>Las señales de alerta que se repiten en todas</h2>
<ul>
  <li><strong>Urgencia.</strong> "Tiene que ser ya", "se cae la oferta", "le bloqueamos la cuenta".</li>
  <li><strong>Que te pidan un código, una clave o un PIN.</strong> Nunca, con nadie.</li>
  <li><strong>Que la prueba sea una captura</strong> y no el dinero en tu cuenta.</li>
  <li><strong>Que el pago o la devolución vaya a un número distinto</strong> del que corresponde.</li>
  <li><strong>Que no te dejen verificar</strong>: no quieren que llamés, que veás el producto o que consultés con tu banco.</li>
  <li><strong>Que sea demasiado bueno para ser verdad.</strong></li>
</ul>

<h2>Si tenés un negocio: un protocolo de cinco reglas</h2>
<p>Los negocios que venden por WhatsApp y redes son el blanco principal del comprobante falso. Estas reglas cierran casi todas las puertas:</p>
<ol>
  <li><strong>Ningún producto sale con una captura.</strong> Solo con el dinero confirmado en la aplicación del banco.</li>
  <li><strong>Una persona confirma los pagos.</strong> Siempre la misma, aunque atiendan varios.</li>
  <li><strong>Revisá el nombre de quien envía</strong> y que coincida con quien está comprando.</li>
  <li><strong>Activá las notificaciones de tu banco</strong> y usá una cuenta separada solo para el negocio, así los ingresos se revisan fácil.</li>
  <li><strong>Nada de devoluciones sin pasar por el banco.</strong></li>
</ol>
<p>Si vendés mucho en línea, vale considerar una <a href="/tiendas-online-costa-rica/">tienda con pasarela de pago</a>: el pago se confirma de forma automática antes de generar el pedido, y la captura de pantalla deja de ser parte del proceso.</p>

<h2>Si ya te estafaron</h2>
<p>El tiempo importa. Hacé esto en este orden:</p>
<ol>
  <li><strong>Llamá a tu banco de inmediato</strong> por su número oficial y reportá lo que pasó. Pedí que bloqueen lo que haga falta.</li>
  <li><strong>Si diste claves o códigos</strong>, cambialos desde un dispositivo de confianza, empezando por la banca en línea y el correo.</li>
  <li><strong>Guardá toda la evidencia</strong>: capturas de la conversación, el número que te contactó, los comprobantes, fechas y montos. No borres nada.</li>
  <li><strong>Presentá la denuncia ante el OIJ</strong> con esa evidencia.</li>
  <li><strong>Si te robaron el WhatsApp</strong>, recuperalo reinstalando la aplicación con tu número y avisá a tus contactos por otro medio que no respondan pedidos de plata.</li>
</ol>
<p>Y no te quedés con la vergüenza: estas estafas están diseñadas por gente que se dedica a eso, y le pasan a personas muy cuidadosas. Contarlo ayuda a que no le pase a alguien más.</p>

<h2>Lo que hay que llevarse</h2>
<p>SINPE Móvil es seguro. Lo que falla es la verificación. Tres hábitos te protegen de casi todo: <strong>confirmá siempre en la aplicación del banco</strong>, <strong>nunca compartás un código o una clave</strong>, y <strong>desconfiá de la urgencia</strong>.</p>
<p>Si querés ir más allá, en <a href="/blog/ciberseguridad-para-pymes-costa-rica/">ciberseguridad para PYMES</a> están las diez medidas mínimas para proteger tu negocio completo, y en <a href="/blog/seguridad-web-y-seo-disenar-un-sitio-seguro/">seguridad web y SEO</a> cómo cuidar tu página.</p>
`,
  },
  {
    slug: 'como-aparecer-en-google-maps-con-mi-negocio',
    title: 'Cómo aparecer en Google Maps con tu negocio en Costa Rica',
    metaTitle: 'Cómo aparecer en Google Maps con tu negocio | HacksinCodigos',
    metaDesc:
      'Paso a paso para que tu negocio aparezca en Google Maps en Costa Rica: perfil de Google, verificación, categorías, zona de servicio, fotos y reseñas.',
    excerpt:
      'Cuando alguien busca un servicio cerca, los primeros resultados salen con mapa. Así se consigue aparecer ahí: el perfil de negocio, las decisiones que más pesan y los errores que te pueden suspender.',
    tag: '📍 SEO local',
    tagColor: 'var(--accent-blue)',
    published: '2026-09-05',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO y SEO local' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
    ],
    bodyHtml: `
<p>Hacé la prueba: buscá en Google "dentista en Heredia" o "taller mecánico en Cartago". Antes de los resultados normales aparece un mapa con unos pocos negocios, sus estrellas y su teléfono. Ese bloque es lo primero que ve la gente, y para muchas búsquedas locales es donde se decide a quién llamar.</p>
<p>Aparecer ahí no depende de pagar publicidad. Depende de tu <strong>perfil de negocio de Google</strong> y de cómo lo cuidés. Este es el paso a paso.</p>

<h2>Cómo decide Google a quién mostrar</h2>
<p>Google explica públicamente que para los resultados locales mira tres cosas:</p>
<ul>
  <li><strong>Relevancia:</strong> qué tanto coincide tu perfil con lo que la persona buscó.</li>
  <li><strong>Distancia:</strong> qué tan cerca estás de quien busca o de la zona que menciona.</li>
  <li><strong>Prominencia:</strong> qué tan conocido y confiable es tu negocio — reseñas, menciones, tu sitio web.</li>
</ul>
<p>La distancia no la controlás. Las otras dos sí, y todo lo que sigue apunta a ellas.</p>

<h2>Paso 1: crear o reclamar tu perfil</h2>
<p>El perfil de negocio de Google es gratis. Antes de crear uno nuevo, buscá tu negocio en Google Maps: puede que ya exista, creado por Google o por algún cliente. Si existe, lo reclamás; si no, lo creás.</p>
<p>Nunca crees un segundo perfil para el mismo negocio. Los perfiles duplicados confunden a Google y pueden terminar en suspensión.</p>

<h2>Paso 2: verificarlo</h2>
<p>Hasta que no está verificado, tu perfil prácticamente no aparece. Google te indica el método que corresponde a tu caso —puede ser un video mostrando el negocio, una llamada, un mensaje o un correo, entre otros— y el proceso puede tardar desde minutos hasta varios días.</p>
<p>Seguí las instrucciones al pie de la letra. Un video de verificación que no muestra claramente que el negocio existe y opera suele rechazarse.</p>

<h2>Paso 3: el nombre real, sin trucos</h2>
<p>Poné el nombre de tu negocio <strong>tal como aparece en tu rótulo, tus facturas y tu sitio</strong>. Nada más.</p>
<p>La tentación de agregarle palabras clave es enorme —"Taller López Mejor Mecánico Barato San José"— y es uno de los errores más castigados: va contra las políticas de Google y es causa frecuente de suspensión. Además, tus competidores pueden reportarlo.</p>

<h2>Paso 4: la categoría principal, la decisión que más pesa</h2>
<p>De todo el perfil, la <strong>categoría principal</strong> es lo que más influye en por qué búsquedas aparecés. Elegí la que describe con más precisión tu actividad principal, no la más amplia. Después podés agregar categorías secundarias para lo demás que ofrecés.</p>
<p>Un truco útil: buscá en Google Maps a los competidores que aparecen arriba en tu rubro y fijate qué categoría usan.</p>

<h2>Paso 5: dirección o zona de servicio</h2>
<p>Acá hay que decidir qué tipo de negocio sos:</p>
<ul>
  <li><strong>Si atendés clientes en un local</strong> —una tienda, un consultorio, un restaurante— poné la dirección exacta.</li>
  <li><strong>Si vas donde el cliente o trabajás a distancia</strong> —un fontanero, una empresa de desarrollo web, un servicio de limpieza— ocultá la dirección y definí tu <strong>zona de servicio</strong>: las provincias, cantones o ciudades que atendés.</li>
</ul>
<p>Nosotros, por ejemplo, trabajamos en todo el país de forma remota, así que nuestro perfil declara como zona de servicio las siete provincias, y lo mismo dice nuestro sitio.</p>
<p>Lo que nunca conviene: poner una dirección que no es real, o una oficina virtual donde no hay nadie, para "aparecer" en una zona. Es de las causas más comunes de suspensión.</p>

<h2>Paso 6: completá todo lo demás</h2>
<p>Un perfil completo le da a Google más razones para mostrarte y al cliente más razones para escoger:</p>
<ul>
  <li><strong>Teléfono</strong> y, si es tu canal, el acceso a WhatsApp.</li>
  <li><strong>Horario</strong> real, con los feriados actualizados. Llegar y encontrar cerrado un negocio que "estaba abierto" genera malas reseñas.</li>
  <li><strong>Sitio web</strong>, apuntando a la página más relevante.</li>
  <li><strong>Servicios o productos</strong> con descripciones claras.</li>
  <li><strong>Descripción del negocio</strong>, escrita para personas, sin repetir palabras clave.</li>
  <li><strong>Fotos reales</strong>: el logo, la fachada o el espacio de trabajo, el equipo, los trabajos terminados. Los perfiles con fotos propias generan más confianza que los que no tienen ninguna.</li>
</ul>

<h2>Paso 7: reseñas, el factor que más se nota</h2>
<p>Las reseñas pesan en dos lados: le dicen a Google que tu negocio es confiable y le dicen a la persona que busca que otros ya te eligieron. Lo que funciona:</p>
<ul>
  <li><strong>Pedilas siempre</strong>, justo después de entregar un buen trabajo. Tu perfil tiene un enlace directo para compartir por WhatsApp.</li>
  <li><strong>Pedí que escriban algo</strong>, aunque sean dos líneas. Una reseña con texto que menciona el servicio vale mucho más que cinco estrellas solas.</li>
  <li><strong>Respondé todas</strong>, las buenas y las malas. Una respuesta educada a una reseña negativa muchas veces convence más que diez positivas.</li>
</ul>
<p>Y lo que nunca: comprar reseñas, inventarlas, pedirle a familiares que dejen reseñas falsas u ofrecer descuentos a cambio de una reseña. Todo eso va contra las políticas de Google, y las reseñas pueden eliminarse o el perfil sancionarse.</p>

<h2>Paso 8: mantenelo vivo</h2>
<p>Un perfil que no se toca en meses se ve abandonado. Publicá novedades de vez en cuando —un trabajo terminado, un servicio nuevo, un horario especial—, subí fotos nuevas y revisá que los datos sigan correctos. Google favorece los perfiles activos y actualizados.</p>

<h2>Tu página web también empuja tu perfil</h2>
<p>El perfil y el sitio se refuerzan entre sí. Lo que ayuda:</p>
<ul>
  <li><strong>Mismos datos en los dos</strong>: nombre, teléfono y zona exactamente iguales. Si el perfil dice un número y el sitio otro, Google pierde confianza en ambos.</li>
  <li><strong>Una página por servicio</strong>, que le da a Google más contexto sobre qué hacés.</li>
  <li><strong>Mencionar las zonas donde trabajás</strong> de forma natural en tu sitio.</li>
  <li><strong>Datos estructurados</strong> que describan tu negocio, tu zona de servicio y tus horarios, y que enlacen con tu perfil de Google.</li>
</ul>

<h2>Cuánto tarda</h2>
<p>Un perfil recién verificado puede empezar a mostrarse en pocos días para búsquedas con tu nombre. Aparecer en el mapa para búsquedas de tu servicio, compitiendo con negocios que tienen años de reseñas, toma más tiempo: semanas o meses de perfil completo, reseñas constantes y un sitio que lo respalde. No hay atajo legítimo que lo acelere de un día para otro.</p>

<h2>Los errores que más suspenden perfiles</h2>
<ul>
  <li>Agregar palabras clave al nombre del negocio.</li>
  <li>Poner una dirección falsa o una oficina virtual.</li>
  <li>Tener varios perfiles para el mismo negocio.</li>
  <li>Reseñas compradas, inventadas o a cambio de descuentos.</li>
  <li>Datos distintos en el perfil, el sitio y las redes.</li>
</ul>

<h2>Resumen del paso a paso</h2>
<ol>
  <li>Crear o reclamar el perfil.</li>
  <li>Verificarlo.</li>
  <li>Nombre real, sin palabras clave.</li>
  <li>Categoría principal precisa.</li>
  <li>Dirección si atendés en local, o zona de servicio si vas donde el cliente.</li>
  <li>Completar teléfono, horario, sitio, servicios y fotos.</li>
  <li>Pedir y responder reseñas reales.</li>
  <li>Mantenerlo actualizado.</li>
</ol>
<p>Si querés que lo revisemos junto con tu sitio web, en <a href="/seo-costa-rica/">posicionamiento SEO y SEO local</a> está cómo trabajamos. Y si todavía no tenés una página que respalde tu perfil, empezá por <a href="/paginas-web-costa-rica/">páginas web en Costa Rica</a>. Para seguir leyendo: <a href="/blog/guia-seo-negocios-locales-costa-rica/">guía de SEO local</a> y <a href="/blog/por-que-mi-pagina-web-no-aparece-en-google/">por qué tu página no aparece en Google</a>.</p>
`,
  },
  {
    slug: 'mi-computadora-esta-lenta-que-hago',
    title: 'Mi computadora está lenta: qué hacer para que vuelva a andar rápido',
    metaTitle: 'Mi computadora está lenta: qué hacer | HacksinCodigos',
    metaDesc:
      'Por qué tu computadora está lenta y qué hacer paso a paso: programas al inicio, disco lleno, virus, poca RAM, polvo y cuándo conviene un SSD o cambiar de equipo.',
    excerpt:
      'Antes de pensar en comprar otra, casi siempre hay una causa concreta. Así se encuentra en diez minutos y así se arregla — incluido el cambio que más revive a una computadora vieja.',
    tag: '🖥️ Soporte técnico',
    tagColor: '#f97316',
    published: '2026-08-31',
    updated: '2026-09-13',
    readingMinutes: 9,
    relatedServices: [
      { href: '/soporte-tecnico-computadoras-costa-rica/', label: 'soporte técnico remoto de computadoras' },
      { href: '/blog/ciberseguridad-para-pymes-costa-rica/', label: 'ciberseguridad' },
    ],
    bodyHtml: `
<p>Tarda en encender, las ventanas se quedan pegadas, el navegador se congela. Es de las cosas más frustrantes del día a día, y la reacción típica es pensar que ya hay que comprar otra. Casi nunca es así: <strong>una computadora lenta casi siempre tiene una causa concreta</strong>, y muchas se arreglan en una tarde sin gastar nada.</p>
<p>Esta guía está pensada para Windows, que es lo que usa la mayoría, pero la lógica sirve para cualquier equipo.</p>

<h2>Paso 1: averiguá qué la está frenando</h2>
<p>No se arregla lo que no se mide. Abrí el <strong>Administrador de tareas</strong> con <strong>Ctrl + Shift + Esc</strong> y mirá la pestaña de procesos mientras la computadora está lenta. Arriba hay cuatro columnas que importan:</p>
<ul>
  <li><strong>CPU al 100%:</strong> algún programa está trabajando de más. Ordená por esa columna y fijate cuál.</li>
  <li><strong>Memoria muy alta:</strong> te falta RAM para lo que estás usando, o hay algo consumiéndola.</li>
  <li><strong>Disco al 100%:</strong> muy común en computadoras con disco duro mecánico. Es el síntoma clásico de que el disco es el cuello de botella.</li>
  <li><strong>Red alta sin razón:</strong> algo está descargando o subiendo en segundo plano.</li>
</ul>
<p>Con eso ya sabés hacia dónde ir.</p>

<h2>Las causas más comunes, y qué hacer con cada una</h2>

<h3>1. Demasiados programas que arrancan solos</h3>
<p>Cada programa que instalás quiere abrirse al encender la computadora: el de la impresora, el de la música, el de actualizaciones de algo que ni usás. Se acumulan y la dejan arrastrándose desde que prende.</p>
<p><strong>Qué hacer:</strong> en el Administrador de tareas, pestaña <em>Aplicaciones de arranque</em> o <em>Inicio</em>, deshabilitá todo lo que no necesités apenas encendés. No borra nada: solo evita que se abra solo.</p>

<h3>2. El disco está lleno</h3>
<p>Cuando el disco donde está Windows se queda casi sin espacio, todo se pone lento, porque el sistema necesita lugar libre para trabajar.</p>
<p><strong>Qué hacer:</strong> desinstalá programas que no usás, vaciá la papelera, mové fotos y videos a un disco externo o a la nube, y usá el <em>Liberador de espacio</em> o el <em>Sensor de almacenamiento</em> de Windows. Conviene dejar siempre un buen margen libre.</p>

<h3>3. Virus o programas no deseados</h3>
<p>Algunos virus y programas basura trabajan en segundo plano: minan criptomonedas, muestran publicidad o mandan información. Se nota como lentitud general sin explicación.</p>
<p><strong>Qué hacer:</strong> corré un análisis completo con <em>Seguridad de Windows</em>, que ya viene incluido. Revisá también la lista de programas instalados y desinstalá lo que no reconozcás, sobre todo si llegó "de regalo" con otra descarga. Y ojo con las extensiones del navegador: son una fuente muy común de lentitud y de publicidad invasiva.</p>

<h3>4. Todavía tiene disco duro mecánico</h3>
<p>Esta es la causa número uno en computadoras de hace algunos años, y la que tiene el arreglo más espectacular. Los discos duros mecánicos —los que giran— son muchísimo más lentos que los de estado sólido.</p>
<p><strong>Qué hacer:</strong> cambiar el disco duro por un <strong>SSD</strong> es, por lejos, la mejora que más revive a una computadora vieja: arranca en segundos, los programas abren al instante. En muchos casos una computadora que parecía para botar queda perfecta para trabajar. Se clona el disco viejo o se instala el sistema desde cero.</p>

<h3>5. Le falta memoria RAM</h3>
<p>Si la columna de memoria vive alta y abrís pocas cosas, a la computadora le falta RAM. Con poca memoria, el sistema usa el disco como memoria de emergencia, y eso es lentísimo.</p>
<p><strong>Qué hacer:</strong> cerrar pestañas y programas ayuda en el momento. La solución de fondo es ampliar la RAM, si el equipo lo permite. Ojo: en muchas laptops delgadas la memoria viene soldada y no se puede ampliar. Hay que revisarlo antes de comprar nada.</p>

<h3>6. Polvo y calor</h3>
<p>Cuando el procesador se calienta demasiado, baja su velocidad a propósito para protegerse. El polvo acumulado en ventiladores y rejillas —muy común en nuestro clima— hace que se caliente de más. Si la computadora se pone lenta después de un rato de uso y el ventilador suena fuerte, sospechá de esto.</p>
<p><strong>Qué hacer:</strong> limpiar el polvo con aire comprimido, con la computadora apagada y desconectada. En equipos con varios años, a veces también hay que cambiar la pasta térmica del procesador. En laptops, si no tenés experiencia, mejor que lo haga alguien que sepa: es fácil romper un cable plano.</p>

<h3>7. Actualizaciones pendientes o un sistema viejo</h3>
<p>Windows actualizándose en segundo plano puede poner lenta la computadora un rato. Pero el problema más serio es otro: <strong>Windows 10 dejó de recibir actualizaciones de seguridad gratuitas en octubre de 2025</strong>. Una computadora con un sistema sin parches no solo puede andar peor: queda expuesta a ataques.</p>
<p><strong>Qué hacer:</strong> dejá que terminen las actualizaciones y reiniciá. Si seguís en Windows 10, revisá si tu equipo puede pasar a Windows 11 o planificá el cambio.</p>

<h2>Lo que conviene evitar</h2>
<ul>
  <li><strong>Los "optimizadores" y "limpiadores" milagrosos.</strong> Muchos no hacen nada útil y varios instalan publicidad o cosas peores.</li>
  <li><strong>Descargar controladores de sitios desconocidos.</strong> Siempre desde la página oficial del fabricante.</li>
  <li><strong>Borrar archivos del sistema "para liberar espacio"</strong> sin saber qué son.</li>
  <li><strong>Desarmar una laptop sin experiencia</strong> para limpiarla.</li>
</ul>

<h2>¿Arreglarla o cambiarla?</h2>
<p>Conviene <strong>arreglarla</strong> si el problema es de programas, de espacio, de polvo, o si con un SSD y algo más de RAM queda bien para lo que la usás. Es mucho más barato que una computadora nueva.</p>
<p>Conviene <strong>cambiarla</strong> si el procesador ya no da para lo que necesitás, si no puede correr un sistema operativo con soporte de seguridad, o si el costo de las mejoras se acerca al de un equipo nuevo. Si llegás a ese punto, tenemos un PDF de asesoría de compra por ₡5.000 con las opciones que calzan con tu presupuesto y dónde comprarlas al mejor precio.</p>

<h2>Si no querés pelearte con esto</h2>
<p>Buena parte de estos arreglos —revisar qué consume, limpiar el arranque, eliminar programas no deseados, analizar virus, preparar actualizaciones— se pueden hacer <strong>de forma remota</strong>, sin que tengás que llevar la computadora a ningún lado. Es uno de los servicios que damos: <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico remoto de computadoras</a>, con diagnóstico y solución en el momento. Escribinos por WhatsApp y lo vemos.</p>
<p>Y si la lentitud vino junto con ventanas raras, publicidad o el antivirus desactivado, leé también <a href="/blog/ciberseguridad-para-pymes-costa-rica/">ciberseguridad para PYMES</a>.</p>
`,
  },
  {
    slug: 'como-armar-una-pc-gamer-en-costa-rica',
    title: 'Cómo armar una PC gamer en Costa Rica: guía paso a paso desde cero',
    metaTitle: 'Cómo armar una PC gamer en Costa Rica | HacksinCodigos',
    metaDesc:
      'Cómo armar una PC gamer en Costa Rica desde cero: elegir cada componente, revisar compatibilidad, dónde comprar con garantía y el armado paso a paso.',
    excerpt:
      'Armar tu propia PC gamer es más fácil de lo que parece y rinde más por tu plata que una armada. Qué componentes elegir, cómo comprarlos en Costa Rica y cómo armarla sin cometer los errores clásicos.',
    tag: '🎮 PC gamer',
    tagColor: '#f97316',
    published: '2026-09-01',
    updated: '2026-09-13',
    readingMinutes: 12,
    relatedServices: [
      { href: '/soporte-tecnico-computadoras-costa-rica/', label: 'soporte técnico de computadoras' },
      { href: '/blog/que-tarjeta-grafica-comprar/', label: 'cómo elegir tarjeta gráfica' },
    ],
    bodyHtml: `
<p>Armar tu propia computadora gamer tiene tres ventajas: sale mejor por la misma plata que una ya armada, elegís exactamente lo que querés, y después la podés ir mejorando pieza por pieza. Y es mucho más fácil de lo que parece: las piezas encajan de una sola forma y no hace falta soldar nada.</p>
<p>Lo difícil no es armarla. Es <strong>elegir bien</strong>. Por eso esta guía empieza por ahí.</p>

<h2>Antes de comprar nada: tres preguntas</h2>
<ul>
  <li><strong>¿Qué vas a jugar?</strong> No es lo mismo Valorant, Fortnite o Minecraft que los juegos más nuevos con gráficos al máximo.</li>
  <li><strong>¿En qué monitor?</strong> La resolución —1080p, 1440p o 4K— y los hercios —60, 144, 240— definen cuánta potencia necesitás. Una tarjeta de gama alta en un monitor de 1080p a 60 Hz es plata tirada.</li>
  <li><strong>¿Cuál es tu presupuesto real?</strong> Incluyendo monitor, teclado, mouse y el sistema operativo si no los tenés.</li>
</ul>
<p>Con esas tres respuestas, todo lo demás se ordena.</p>

<h2>Los componentes, uno por uno</h2>

<h3>Tarjeta gráfica: donde va la mayor parte de la plata</h3>
<p>Para jugar, es la pieza que más define el rendimiento, y por eso se lleva la parte más grande del presupuesto. La elección depende sobre todo de la resolución de tu monitor. Lo explicamos a fondo en <a href="/blog/que-tarjeta-grafica-comprar/">qué tarjeta gráfica comprar</a>.</p>

<h3>Procesador</h3>
<p>Para jugar no hace falta el más caro: importa que no se quede corto frente a la tarjeta gráfica. Un procesador de gama media actual rinde muy bien para jugar. Si además vas a hacer streaming o edición de video, conviene subir de gama. Ojo con el <strong>socket</strong>: define qué tarjeta madre podés usar. Los detalles están en <a href="/blog/que-procesador-comprar-y-cuanta-ram-necesito/">qué procesador comprar y cuánta RAM necesitás</a>.</p>

<h3>Tarjeta madre</h3>
<p>Tiene que ser compatible con el socket del procesador y con el tipo de memoria. No hace falta la más cara: fijate que tenga los puertos que vas a usar, espacio para un SSD M.2, y buen wifi integrado si no vas a conectar cable.</p>

<h3>Memoria RAM</h3>
<p>Para jugar hoy, <strong>16 GB</strong> es el mínimo razonable y <strong>32 GB</strong> da margen para jugar con otras cosas abiertas o hacer streaming. Comprá <strong>dos módulos iguales</strong> —por ejemplo, dos de 8 o dos de 16— en vez de uno solo: trabajan en doble canal y rinden mejor. Revisá si tu plataforma usa DDR4 o DDR5, porque no son intercambiables.</p>

<h3>Almacenamiento</h3>
<p>Un <strong>SSD NVMe</strong> para el sistema y los juegos es obligatorio: los juegos cargan muchísimo más rápido. Los juegos actuales pesan mucho, así que no te quedés corto de capacidad. Un disco duro mecánico solo sirve como almacenamiento extra para archivos.</p>

<h3>Fuente de poder: donde nunca hay que ahorrar</h3>
<p>Es la pieza que la gente más escatima y la que más problemas causa. Una fuente mala puede apagar la computadora en medio del juego o, en el peor caso, dañar otros componentes. Elegí una <strong>marca reconocida</strong>, con certificación <strong>80 Plus</strong>, con la potencia que pide tu tarjeta gráfica y un margen extra para el futuro.</p>

<h3>Case y enfriamiento</h3>
<p>El case tiene que tener buena ventilación —en nuestro clima importa— y espacio para el largo de tu tarjeta gráfica, que en las de gama alta es considerable. Revisá la medida antes de comprar. El disipador que trae el procesador sirve para gama de entrada; para modelos más potentes conviene uno aparte.</p>

<h2>Compatibilidad: lo que hay que revisar antes de pagar</h2>
<ul>
  <li>Que el <strong>procesador y la tarjeta madre</strong> tengan el mismo socket.</li>
  <li>Que la <strong>RAM</strong> sea del tipo que acepta la tarjeta madre: DDR4 o DDR5.</li>
  <li>Que la <strong>tarjeta gráfica quepa en el case</strong> por largo y grosor.</li>
  <li>Que la <strong>fuente tenga la potencia y los conectores</strong> que pide la tarjeta gráfica.</li>
  <li>Que el <strong>disipador quepa</strong> en el case y no choque con la RAM.</li>
</ul>
<p>Existen herramientas en línea que revisan la compatibilidad de una lista de piezas automáticamente. Usalas antes de comprar.</p>

<h2>Dónde comprar en Costa Rica</h2>
<p>Hay dos caminos, y cada uno tiene su precio escondido:</p>
<ul>
  <li><strong>Tiendas locales:</strong> la gran ventaja es la <strong>garantía</strong>. Si una pieza sale mala, la cambiás acá sin mandar nada fuera del país. Pedí siempre factura electrónica: es tu respaldo para hacer válida la garantía.</li>
  <li><strong>Importar por casillero:</strong> a veces sale más barato, pero hay que sumar el envío y los impuestos de importación, esperar el tiempo de entrega y aceptar que hacer válida una garantía desde acá es complicado. Para piezas delicadas y caras, la garantía local muchas veces vale la diferencia.</li>
</ul>
<p>Con las piezas usadas, cuidado: sobre todo con tarjetas gráficas de origen desconocido. Si comprás usado, que sea probado en persona y, en lo posible, con garantía restante.</p>

<h2>El armado, paso a paso</h2>
<ol>
  <li><strong>Prepará el espacio.</strong> Mesa amplia, buena luz, destornillador de estrella. Tocá algo metálico antes de manipular piezas para descargar la electricidad estática.</li>
  <li><strong>Instalá el procesador en la tarjeta madre</strong>, fuera del case. Encaja en una sola posición: guiate por el triángulo de la esquina. Sin fuerza.</li>
  <li><strong>Instalá la RAM</strong> en las ranuras que indica el manual para doble canal. Empujá hasta que suene el clic.</li>
  <li><strong>Instalá el SSD M.2</strong> en su ranura y atornillalo.</li>
  <li><strong>Colocá el disipador.</strong> Si trae pasta térmica ya aplicada, no pongás más. Y quitá el plástico protector de la base: es un olvido clásico.</li>
  <li><strong>Montá la tarjeta madre en el case</strong> sobre los separadores metálicos, que evitan que toque el metal del case.</li>
  <li><strong>Instalá la fuente</strong> y pasá los cables por detrás para que el aire circule.</li>
  <li><strong>Instalá la tarjeta gráfica</strong> en la ranura PCIe principal y conectale la alimentación de la fuente.</li>
  <li><strong>Conectá los cables:</strong> el conector grande de la tarjeta madre, el de alimentación del procesador —arriba a la izquierda, muy fácil de olvidar— y los del botón de encendido y puertos frontales siguiendo el manual.</li>
  <li><strong>Primer encendido.</strong> Entrá a la BIOS y revisá que reconozca el procesador, la RAM y el SSD.</li>
</ol>

<h2>Después de encender</h2>
<ul>
  <li><strong>Activá el perfil de la RAM</strong> —XMP o EXPO— en la BIOS. Sin eso, la memoria trabaja más lenta de lo que pagaste.</li>
  <li><strong>Instalá Windows</strong> desde una memoria USB creada con la herramienta oficial de Microsoft.</li>
  <li><strong>Instalá los controladores</strong> de la tarjeta gráfica desde la página oficial del fabricante, no desde sitios de terceros.</li>
  <li><strong>Revisá temperaturas</strong> jugando un rato, para confirmar que todo enfría bien.</li>
</ul>

<h2>Los errores más comunes</h2>
<ul>
  <li><strong>Conectar el monitor a la tarjeta madre en vez de a la tarjeta gráfica.</strong> La computadora usa el video integrado —o no da imagen— y los juegos andan fatal. El cable va en la tarjeta gráfica.</li>
  <li>Poner la RAM en las ranuras equivocadas.</li>
  <li>Olvidar el cable de alimentación del procesador.</li>
  <li>No quitar el plástico de la base del disipador.</li>
  <li>No activar el perfil XMP o EXPO.</li>
  <li>Ahorrar en la fuente de poder.</li>
</ul>

<h2>¿Querés que alguien revise tu lista antes de comprar?</h2>
<p>Es el momento donde más plata se pierde: una fuente que no alcanza, una RAM que no es compatible, una tarjeta que no entra en el case. Para eso hacemos un <strong>PDF de asesoría de compra</strong> por ₡5.000: con tu presupuesto y lo que querés hacer, te armamos las opciones que calzan, te decimos en qué lugares conseguir esas piezas al mejor precio y te damos acceso a descuentos por medio de nosotros. Lo pedís desde <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico y asesoría de compra</a>.</p>

<h2>Si algo no enciende o no da imagen</h2>
<p>Revisá, en este orden: que la fuente esté encendida en su interruptor trasero, los dos cables de alimentación de la tarjeta madre, que la RAM esté bien encajada, y que el monitor esté conectado a la tarjeta gráfica. La mayoría de los "no enciende" son uno de esos cuatro.</p>
<p>Y si ya la armaste y no arranca, anda inestable o no rinde lo que debería, en <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico de computadoras</a> te ayudamos a encontrar qué pasa, muchas veces de forma remota.</p>
`,
  },
  {
    slug: 'que-tarjeta-grafica-comprar',
    title: 'Qué tarjeta gráfica comprar: cómo elegir la adecuada para tu PC',
    metaTitle: 'Qué tarjeta gráfica comprar: cómo elegirla | HacksinCodigos',
    metaDesc:
      'Cómo elegir la tarjeta gráfica adecuada según tu monitor, tus juegos o tu trabajo: gamas, memoria de video, NVIDIA o AMD, fuente de poder y errores al comprar.',
    excerpt:
      'La mejor tarjeta gráfica no es la más cara: es la que calza con tu monitor, tu procesador y lo que vas a hacer. Así se elige sin gastar de más ni quedarse corto.',
    tag: '🎮 PC gamer',
    tagColor: '#f97316',
    published: '2026-09-02',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/soporte-tecnico-computadoras-costa-rica/', label: 'soporte técnico de computadoras' },
      { href: '/blog/como-armar-una-pc-gamer-en-costa-rica/', label: 'cómo armar una PC gamer' },
    ],
    bodyHtml: `
<p>Es la pieza más cara de una computadora para jugar y la que más dudas genera. La tentación es comprar la más potente que alcance el presupuesto, pero ese es justamente el error más común: <strong>la mejor tarjeta gráfica no es la más cara, es la que calza</strong> con tu monitor, tu procesador y lo que vas a hacer.</p>
<p>No vamos a darte un ranking de modelos, porque cambia cada pocos meses. Te vamos a enseñar a elegir, que sirve para esta generación y para la siguiente.</p>

<h2>Empezá por el monitor, no por la tarjeta</h2>
<p>Esta es la decisión que ordena todo lo demás. La tarjeta gráfica tiene que mover tu monitor, y lo que más pide potencia es:</p>
<ul>
  <li><strong>La resolución:</strong> 1080p pide mucho menos que 1440p, y 4K pide muchísimo más.</li>
  <li><strong>Los hercios:</strong> un monitor de 60 Hz no muestra más de 60 imágenes por segundo, así que pagar por una tarjeta que da 200 es desperdicio. Uno de 144 o 240 Hz sí aprovecha más potencia.</li>
</ul>
<p>Si todavía no tenés monitor, elegí primero en qué resolución querés jugar y después la tarjeta.</p>

<h2>Cómo leer los nombres: las gamas</h2>
<p>Los fabricantes numeran sus tarjetas de forma que se puede entender la gama sin memorizar modelos:</p>
<ul>
  <li><strong>NVIDIA</strong> usa nombres como RTX de la serie 50. Los dos primeros dígitos indican la generación y los últimos la gama: una xx60 es gama de entrada a media, xx70 media-alta, xx80 alta y xx90 lo máximo.</li>
  <li><strong>AMD</strong> usa la línea Radeon RX con una lógica parecida: dentro de una misma generación, el número más alto es la gama más alta.</li>
  <li><strong>Intel</strong> también tiene tarjetas gráficas, la línea Arc, con opciones interesantes en gama de entrada.</li>
</ul>
<p>La regla práctica: compará siempre tarjetas <strong>de la misma generación</strong>. Una gama alta de hace varias generaciones puede rendir menos que una gama media actual.</p>

<h2>Qué gama para qué uso</h2>
<ul>
  <li><strong>Juegos competitivos y livianos</strong> —Valorant, League of Legends, Fortnite, Minecraft, Roblox— en 1080p: una gama de entrada actual alcanza y sobra.</li>
  <li><strong>Juegos actuales en 1080p con buenos gráficos:</strong> gama media.</li>
  <li><strong>Juegos actuales en 1440p:</strong> gama media-alta.</li>
  <li><strong>4K o gráficos al máximo con trazado de rayos:</strong> gama alta.</li>
</ul>

<h2>La memoria de video (VRAM)</h2>
<p>Es la memoria propia de la tarjeta, y los juegos nuevos piden cada vez más. Quedarse corto provoca tirones y texturas borrosas aunque la tarjeta sea rápida. Como referencia actual:</p>
<ul>
  <li><strong>8 GB:</strong> alcanza para 1080p, pero ya se queda justo en muchos juegos nuevos.</li>
  <li><strong>12 a 16 GB:</strong> lo recomendable para 1440p y para que la tarjeta dure varios años.</li>
  <li><strong>16 GB o más:</strong> para 4K, y para trabajo con inteligencia artificial o 3D.</li>
</ul>

<h2>NVIDIA o AMD</h2>
<p>Las dos son buenas opciones, y conviene comparar el modelo concreto que te alcanza. Las diferencias generales:</p>
<ul>
  <li><strong>NVIDIA</strong> suele destacar en trazado de rayos y tiene DLSS, su tecnología para ganar rendimiento con muy buena calidad de imagen. Además, para <strong>inteligencia artificial, 3D y edición de video</strong> muchos programas aprovechan mejor su plataforma CUDA — si vas a trabajar con eso, pesa mucho.</li>
  <li><strong>AMD</strong> suele ofrecer más memoria de video y más rendimiento por la misma plata en juegos tradicionales, y tiene FSR, su tecnología equivalente para ganar rendimiento.</li>
</ul>
<p>Para jugar, compará por precio y rendimiento del modelo exacto. Para trabajar con IA, 3D o video, NVIDIA suele tener la ventaja.</p>

<h2>Que no se quede corta la computadora</h2>

<h3>El procesador</h3>
<p>Una tarjeta gráfica de gama alta con un procesador viejo o de gama baja no rinde lo que debería: el procesador no le alcanza a mandarle trabajo y queda desaprovechada. Esto se nota sobre todo en 1080p con muchos cuadros por segundo. Buscá un equilibrio: tarjeta y procesador de gamas parecidas.</p>
<p>Y si tu procesador tiene gráficos integrados —como los modelos con "G" de AMD—, recordá que al instalar una tarjeta dedicada el monitor se conecta a la tarjeta, no a la tarjeta madre.</p>

<h3>La fuente de poder</h3>
<p>Las tarjetas actuales consumen bastante. Revisá dos cosas: que la fuente tenga la <strong>potencia recomendada</strong> por el fabricante de la tarjeta, y que tenga los <strong>conectores</strong> que la tarjeta pide. Varias tarjetas de gama alta usan un conector de alimentación nuevo que las fuentes viejas no traen.</p>

<h3>El tamaño</h3>
<p>Las tarjetas de gama media y alta son largas y gruesas. Medí el espacio disponible en tu case antes de comprar. Pasa más de lo que parece que la tarjeta simplemente no entra.</p>

<h2>Comprar nueva o usada</h2>
<p>El mercado de usadas puede dar buenos precios, pero con riesgo: tarjetas que trabajaron años a máxima exigencia, modificadas o con fallas intermitentes. Si comprás usada, probala en persona funcionando con un juego exigente, revisá temperaturas y preferí las que conservan garantía. En Costa Rica, comprar nueva en una tienda local tiene la ventaja de hacer válida la garantía acá; pedí siempre factura electrónica.</p>

<h2>Errores comunes</h2>
<ul>
  <li>Comprar más tarjeta de la que tu monitor puede mostrar.</li>
  <li>Comparar tarjetas de generaciones distintas solo por el número.</li>
  <li>Quedarse corto de memoria de video para jugar varios años.</li>
  <li>Olvidarse de la fuente de poder y sus conectores.</li>
  <li>No medir el case.</li>
  <li>Conectar el monitor a la tarjeta madre en vez de a la tarjeta gráfica.</li>
</ul>

<h2>Si todavía no sabés cuál te conviene</h2>
<p>Con tantas versiones de cada modelo, es normal dudar. Por eso hacemos un <strong>PDF de asesoría de compra</strong> por ₡5.000: con tu presupuesto y lo que querés hacer, te armamos las opciones que calzan, te decimos en qué lugares conseguir esas piezas al mejor precio y te damos acceso a descuentos por medio de nosotros, incluida la tarjeta gráfica que calza con tu monitor y el resto de la computadora. Lo pedís desde <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico y asesoría de compra</a>.</p>

<h2>Si ya la tenés y no rinde</h2>
<p>Si tu tarjeta rinde menos de lo esperado, revisá que el monitor esté conectado a ella, que los controladores estén actualizados desde la página oficial, que las temperaturas sean normales y que el procesador no esté al 100% mientras jugás. Si seguís con dudas, en <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico de computadoras</a> lo revisamos con vos. Y si estás empezando de cero, seguí con <a href="/blog/como-armar-una-pc-gamer-en-costa-rica/">cómo armar una PC gamer en Costa Rica</a>.</p>
`,
  },
  {
    slug: 'que-procesador-comprar-y-cuanta-ram-necesito',
    title: 'Qué procesador comprar y cuánta RAM necesitás para tu PC',
    metaTitle: 'Qué procesador comprar y cuánta RAM necesito | HacksinCodigos',
    metaDesc:
      'Cómo elegir el procesador y cuánta memoria RAM necesitás según lo que hacés: jugar, trabajar, programar, diseñar o usar IA. Núcleos, AMD o Intel, DDR4 o DDR5.',
    excerpt:
      'Ni el procesador más caro ni la mayor cantidad de RAM son la mejor compra. Lo que conviene depende de lo que hacés con la computadora. Así se decide.',
    tag: '🖥️ Hardware',
    tagColor: '#f97316',
    published: '2026-09-03',
    updated: '2026-09-13',
    readingMinutes: 10,
    relatedServices: [
      { href: '/soporte-tecnico-computadoras-costa-rica/', label: 'soporte técnico de computadoras' },
      { href: '/blog/como-armar-una-pc-gamer-en-costa-rica/', label: 'cómo armar una PC' },
    ],
    bodyHtml: `
<p>Son las dos preguntas que más se repiten al comprar o mejorar una computadora: qué procesador conviene y cuánta RAM hace falta. Y en las dos la respuesta honesta es la misma: <strong>depende de lo que hacés</strong>. Una computadora para jugar, otra para programar y otra para editar video no necesitan lo mismo, y comprar de más es tan malo como quedarse corto.</p>

<h2>Parte 1: el procesador</h2>

<h3>Núcleos e hilos, sin enredos</h3>
<p>Los núcleos son como trabajadores dentro del procesador. Más núcleos permiten hacer más cosas a la vez. Pero no todo aprovecha muchos núcleos:</p>
<ul>
  <li><strong>Los juegos</strong> aprovechan una cantidad moderada de núcleos. Les importa más que cada núcleo sea rápido.</li>
  <li><strong>La edición de video, el 3D, compilar código o ejecutar máquinas virtuales</strong> sí aprovechan muchos núcleos.</li>
  <li><strong>El trabajo de oficina</strong> —navegador, correo, documentos, videollamadas— anda perfecto con cualquier procesador actual de gama de entrada.</li>
</ul>

<h3>AMD o Intel</h3>
<p>Las dos marcas tienen buenas opciones en todas las gamas y la ventaja cambia de generación en generación, así que conviene comparar el modelo concreto. Algunas pistas generales:</p>
<ul>
  <li><strong>AMD</strong> tiene los Ryzen, con gamas 3, 5, 7 y 9. Sus modelos con <strong>X3D</strong> están especialmente pensados para juegos y rinden muy bien en ese uso. AMD además ha mantenido sus plataformas durante varias generaciones, lo que facilita cambiar solo el procesador más adelante.</li>
  <li><strong>Intel</strong> tiene sus líneas Core con gamas equivalentes. Fijate en las letras: los modelos con <strong>F</strong> no traen gráficos integrados, y los <strong>K</strong> permiten overclock.</li>
</ul>

<h3>Los gráficos integrados</h3>
<p>Algunos procesadores traen video integrado —en AMD suelen llevar una <strong>G</strong> en el nombre—. Sirve para trabajo de oficina, estudiar, ver video y juegos muy livianos, sin comprar tarjeta gráfica. Si vas a jugar en serio, igual necesitás una tarjeta dedicada, pero tener gráficos integrados es útil como respaldo si la tarjeta falla.</p>

<h3>El socket define tu futuro</h3>
<p>El socket es el tipo de conexión entre el procesador y la tarjeta madre. Tienen que coincidir. Y pensá a futuro: una plataforma que el fabricante va a seguir soportando te permite mejorar el procesador sin cambiar la tarjeta madre ni la memoria.</p>

<h3>Qué gama para qué uso</h3>
<ul>
  <li><strong>Oficina, estudio, navegar:</strong> gama de entrada.</li>
  <li><strong>Jugar:</strong> gama media actual. Es el punto dulce: subir más casi no se nota si la tarjeta gráfica no acompaña.</li>
  <li><strong>Programar:</strong> gama media alcanza para la mayoría. Si compilás proyectos grandes, usás contenedores o máquinas virtuales, conviene subir.</li>
  <li><strong>Diseño gráfico:</strong> gama media para trabajo en 2D; más para 3D.</li>
  <li><strong>Edición de video, 3D y streaming mientras jugás:</strong> gama alta, con muchos núcleos.</li>
</ul>

<h2>Parte 2: cuánta RAM necesitás</h2>
<p>La memoria RAM es el espacio donde la computadora tiene lo que está usando en el momento. Cuando se llena, el sistema recurre al disco, que es muchísimo más lento, y todo se arrastra. Por eso quedarse corto se nota tanto.</p>

<h3>La guía rápida</h3>
<ul>
  <li><strong>8 GB:</strong> hoy se queda corto hasta para uso general cómodo. Un navegador con varias pestañas, una videollamada y Windows ya lo llenan. Solo para uso muy básico.</li>
  <li><strong>16 GB:</strong> el mínimo razonable para una computadora nueva. Alcanza para trabajo de oficina, estudiar, programar y la mayoría de los juegos.</li>
  <li><strong>32 GB:</strong> para jugar con otras cosas abiertas, hacer streaming, editar fotos o video, programar con varias herramientas pesadas o usar máquinas virtuales.</li>
  <li><strong>64 GB o más:</strong> edición de video profesional, 3D pesado, trabajo con modelos de inteligencia artificial en la propia computadora o muchas máquinas virtuales.</li>
</ul>

<h3>Cuánta RAM para jugar</h3>
<p>Juegos livianos como Roblox o Minecraft sin modificaciones andan bien con 8 a 16 GB. Minecraft con muchos mods, o los juegos grandes actuales, piden 16 GB como mínimo, y 32 GB dan margen si tenés el navegador, Discord o el streaming abiertos al mismo tiempo.</p>

<h3>Cuánta RAM para trabajar</h3>
<ul>
  <li><strong>Programas de diseño como AutoCAD o Photoshop:</strong> 16 GB para empezar, 32 GB para proyectos grandes.</li>
  <li><strong>Edición de video:</strong> 32 GB es lo cómodo.</li>
  <li><strong>Inteligencia artificial en la propia computadora:</strong> la RAM y, sobre todo, la memoria de la tarjeta gráfica mandan. Cuanto más, mejor.</li>
</ul>

<h3>DDR4 o DDR5</h3>
<p>No se elige libremente: <strong>depende de tu tarjeta madre</strong>. Las plataformas actuales usan DDR5, que es más rápida; muchas plataformas anteriores usan DDR4. No son intercambiables y no entran en la misma ranura.</p>

<h3>Dos módulos mejor que uno</h3>
<p>Para la misma cantidad, <strong>dos módulos iguales</strong> —dos de 8 para tener 16— rinden mejor que uno solo, porque trabajan en doble canal. Y cuando instales la RAM, entrá a la BIOS y activá el perfil <strong>XMP o EXPO</strong>: sin eso, la memoria trabaja a menor velocidad de la que compraste.</p>

<h3>Ojo con las laptops</h3>
<p>En muchas laptops delgadas la RAM viene soldada y no se puede ampliar nunca. Si estás por comprar una, revisá cuánta trae y si se puede aumentar. Es mejor pagar un poco más al inicio que quedarse corto para siempre.</p>

<h2>¿Mejorar lo que tenés o cambiar?</h2>
<p>Si tu computadora anda lenta, antes de cambiar el procesador revisá lo más barato: un <strong>SSD</strong> y <strong>más RAM</strong> suelen revivir un equipo por una fracción del costo. Lo explicamos en <a href="/blog/mi-computadora-esta-lenta-que-hago/">mi computadora está lenta: qué hacer</a>.</p>
<p>Si estás armando desde cero, seguí con <a href="/blog/como-armar-una-pc-gamer-en-costa-rica/">cómo armar una PC</a> y <a href="/blog/que-tarjeta-grafica-comprar/">qué tarjeta gráfica comprar</a>. Y si tenés dudas sobre qué conviene para tu caso, hacemos un <strong>PDF de asesoría de compra</strong> por ₡5.000: con tu presupuesto y lo que querés hacer, te armamos las opciones que calzan, te decimos en qué lugares conseguir esas piezas al mejor precio y te damos acceso a descuentos por medio de nosotros. Lo encontrás en <a href="/soporte-tecnico-computadoras-costa-rica/">soporte técnico y asesoría de compra</a>.</p>
`,
  },
  {
    slug: 'como-vender-en-linea-en-costa-rica',
    title: 'Cómo vender en línea en Costa Rica: guía para empezar desde cero',
    metaTitle: 'Cómo vender en línea en Costa Rica desde cero | HacksinCodigos',
    metaDesc:
      'Cómo vender por internet en Costa Rica: canales, cobros con SINPE y tarjeta, envíos, factura electrónica, cuánto cuesta una tienda en línea y errores comunes.',
    excerpt:
      'Vender por internet en Costa Rica no empieza por la tienda: empieza por decidir por dónde te van a encontrar, cómo te van a pagar y cómo llega el producto. Esta es la ruta, paso a paso.',
    tag: '🛒 Vender en línea',
    tagColor: '#22c55e',
    published: '2026-09-14',
    updated: '2026-09-14',
    readingMinutes: 10,
    relatedServices: [
      { href: '/tiendas-online-costa-rica/', label: 'tiendas online en Costa Rica' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web para negocios' },
    ],
    bodyHtml: `
<p>Cada vez más gente en Costa Rica compra por internet, y cada vez más negocios quieren vender así. El problema es que la mayoría empieza por el final: se pregunta qué plataforma usar antes de saber cómo va a cobrar, cómo va a enviar o cómo la van a encontrar.</p>
<p>Esta guía va en el orden correcto. Sirve igual si vendés ropa, repuestos, comida, servicios o productos hechos a mano.</p>

<h2>1. Definí qué vendés y a quién</h2>
<p>Suena obvio, pero cambia todo lo demás. Tres preguntas antes de gastar un colón:</p>
<ul>
  <li><strong>¿Cuántos productos tenés?</strong> No es lo mismo vender cinco productos que quinientos. Con pocos, un catálogo simple alcanza; con muchos, hace falta búsqueda, filtros e inventario.</li>
  <li><strong>¿El cliente compra solo o necesita preguntar?</strong> Una camiseta se compra con dos clics. Un mueble a la medida, un repuesto o un servicio casi siempre pasan por una conversación.</li>
  <li><strong>¿Vendés en todo el país o en tu zona?</strong> Eso define cómo resolvés los envíos.</li>
</ul>

<h2>2. Elegí por dónde te van a encontrar</h2>
<p>Hay tres canales, y lo normal es terminar usando más de uno:</p>
<ul>
  <li><strong>Redes sociales</strong> (Instagram, Facebook, TikTok): son buenas para mostrar y generar ganas. Pero la gente te ve solo si el algoritmo decide mostrarte, y la cuenta no es tuya: si la bloquean o la hackean, perdés todo.</li>
  <li><strong>WhatsApp:</strong> es donde el tico cierra la compra. Casi toda venta en Costa Rica pasa por una conversación en algún momento.</li>
  <li><strong>Tu propia página o tienda en línea:</strong> es lo único que te encuentra alguien que <em>busca</em> lo que vendés en Google, está disponible siempre y es tuyo.</li>
</ul>
<p>La combinación que mejor funciona para la mayoría: redes para atraer, página web para que te encuentren y generar confianza, y WhatsApp para cerrar. Si dudás si te hace falta la página, lo analizamos en <a href="/blog/pagina-web-o-redes-sociales-para-mi-negocio/">página web o redes sociales</a>.</p>

<h2>3. Resolvé cómo te van a pagar</h2>
<p>En Costa Rica conviene ofrecer <strong>al menos dos formas de pago</strong>:</p>
<ul>
  <li><strong>SINPE Móvil:</strong> es la forma que más usa la gente acá, rápida y sin comisión para el cliente. Su punto débil es que se confirma a mano, y eso abre la puerta a comprobantes falsos. Confirmá siempre en tu cuenta antes de entregar; lo explicamos en <a href="/blog/estafas-sinpe-movil-costa-rica/">estafas por SINPE Móvil</a>.</li>
  <li><strong>Tarjeta de crédito o débito:</strong> por medio de una pasarela de pago. Cobra una comisión por venta, pero hay clientes que solo compran así y el cobro queda confirmado de una vez.</li>
  <li><strong>Transferencia bancaria:</strong> útil para montos grandes y ventas a empresas.</li>
</ul>
<p>La pasarela conviene elegirla antes de construir la tienda, porque condiciona cómo se arma el proceso de pago.</p>

<h2>4. Resolvé los envíos antes de publicar el primer producto</h2>
<p>Es la parte donde más ventas se caen. Un cliente que llega al final de la compra y descubre un costo de envío que no esperaba, se va.</p>
<ul>
  <li><strong>Definí zonas y tarifas:</strong> Gran Área Metropolitana, resto del país, zonas alejadas.</li>
  <li><strong>Mostrá el costo desde el principio</strong>, no al final.</li>
  <li><strong>Elegí con quién enviás:</strong> Correos de Costa Rica, empresas de mensajería o tu propio repartidor en tu zona. Muchos negocios combinan dos opciones.</li>
  <li><strong>Considerá retiro en tu local</strong> si tenés uno: a mucha gente le sirve.</li>
  <li><strong>Pensá en envío gratis a partir de cierto monto</strong>, si los números te dan. Sube el valor de cada compra.</li>
</ul>

<h2>5. No te olvidés de Hacienda</h2>
<p>Vender por internet no cambia tus obligaciones: si estás inscrito, las ventas en línea también llevan <strong>factura electrónica</strong>. Conviene que tu forma de vender tome en cuenta desde el inicio cómo vas a facturar cada pedido, para no tener que hacerlo todo a mano después. Si tenés dudas sobre tu caso, consultalo con tu contador.</p>

<h2>6. Elegí la herramienta según tu etapa</h2>
<p>No todos tienen que empezar con una tienda completa. Hay una escalera, y cada escalón tiene sentido en su momento:</p>

<h3>Etapa 1: catálogo en WhatsApp Business y redes</h3>
<p>Gratis y rápido para arrancar y probar si el producto se vende. Se queda corto cuando tenés muchos productos, cuando respondés lo mismo cien veces al día o cuando querés que te encuentren en Google.</p>

<h3>Etapa 2: página web con catálogo y pedidos por WhatsApp</h3>
<p>Tu negocio aparece en Google, se ve profesional y el cliente llega a WhatsApp ya sabiendo qué quiere. Es el paso que más cambia la confianza, y para muchos negocios es todo lo que necesitan. Una <a href="/paginas-web-costa-rica/">página web de negocio</a> arranca <strong>desde $499</strong>.</p>

<h3>Etapa 3: tienda en línea completa</h3>
<p>Carrito, pagos con tarjeta y SINPE, cálculo de envíos, inventario y panel de pedidos. Tiene sentido cuando el volumen de ventas ya no se sostiene a mano. Una <a href="/tiendas-online-costa-rica/">tienda online</a> va de <strong>$800 a $2.500</strong> según el tamaño del catálogo y las integraciones. El desglose de costos está en <a href="/blog/cuanto-cuesta-una-pagina-web-en-costa-rica/">cuánto cuesta una página web en Costa Rica</a>.</p>

<h3>Cuando los mensajes no te dan abasto</h3>
<p>Si pasás el día respondiendo precios, horarios y disponibilidad, un <a href="/agentes-ia-costa-rica/">agente de IA</a> puede atender WhatsApp, Instagram o tu web a cualquier hora y pasarte solo las conversaciones listas para cerrar.</p>

<h2>7. Hacé que te encuentren</h2>
<p>Una tienda que nadie visita no vende. Lo básico:</p>
<ul>
  <li><strong>Perfil de Google Business</strong> completo, para aparecer en Google Maps. Te explicamos cómo en <a href="/blog/como-aparecer-en-google-maps-con-mi-negocio/">cómo aparecer en Google Maps</a>.</li>
  <li><strong>Una página por producto o categoría</strong>, con fotos propias y una descripción escrita por vos, no copiada del proveedor.</li>
  <li><strong>Contenido que responda lo que la gente pregunta</strong>: tallas, garantía, tiempos de entrega.</li>
  <li><strong>Enlaces desde tus redes</strong> hacia la página, no solo publicaciones sueltas.</li>
</ul>

<h2>8. Generá confianza</h2>
<p>El tico todavía desconfía de comprar a quien no conoce, con razón. Lo que más ayuda:</p>
<ul>
  <li>Fotos reales de tus productos.</li>
  <li>Políticas claras de envío, cambios y devoluciones, visibles antes de pagar.</li>
  <li>Reseñas reales en tu perfil de Google.</li>
  <li>Un WhatsApp y un teléfono a la vista.</li>
  <li>Un sitio seguro, con el candado en la barra del navegador.</li>
</ul>

<h2>Errores que vemos seguido</h2>
<ul>
  <li><strong>Empezar por la tienda más compleja</strong> antes de saber si el producto se vende.</li>
  <li><strong>Esconder el costo de envío</strong> hasta el final.</li>
  <li><strong>Depender solo de Instagram</strong>, sin nada propio.</li>
  <li><strong>Entregar con un comprobante de SINPE</strong> sin revisar la cuenta.</li>
  <li><strong>Fotos del proveedor</strong> iguales a las de otros veinte vendedores.</li>
  <li><strong>Obligar a todos a pasar por el carrito</strong>, cuando muchos clientes prefieren preguntar antes por WhatsApp.</li>
</ul>

<h2>¿Por dónde empezar con tu negocio?</h2>
<p>Si ya vendés por redes y WhatsApp y querés dar el siguiente paso, escribinos. Te decimos honestamente en qué etapa estás y qué conviene: a veces es una página web sencilla, a veces una tienda completa, y a veces todavía no hace falta invertir. La cotización es gratis y sin compromiso.</p>
<p>Mirá también cómo lo hicimos con <a href="/blog/crm-empresarial-caso-grupo-novo/">Grupo Novo</a>, que vende andamios y accesorios en línea.</p>
`,
  },
  {
    slug: 'pagina-web-o-redes-sociales-para-mi-negocio',
    title: '¿Página web o redes sociales? Qué necesita tu negocio de verdad',
    metaTitle: '¿Página web o redes sociales para mi negocio? | HacksinCodigos',
    metaDesc:
      '¿Tu negocio necesita página web si ya tiene Instagram y Facebook? Diferencias reales entre página web y redes sociales, cuándo alcanza con redes y cuándo no.',
    excerpt:
      'Tener Instagram no es lo mismo que tener página web, y la diferencia se nota justo cuando alguien te busca en Google. Qué hace cada una, cuándo alcanza con redes y cuándo te está costando clientes.',
    tag: '🌐 Página web',
    tagColor: 'var(--accent-blue)',
    published: '2026-09-12',
    updated: '2026-09-14',
    readingMinutes: 8,
    relatedServices: [
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO' },
    ],
    bodyHtml: `
<p>"Para qué quiero una página web si ya tengo Instagram." Es de las frases que más escuchamos, y tiene sentido: las redes son gratis, ya las usás y ahí están tus clientes. Pero página web y redes sociales <strong>no son lo mismo ni hacen el mismo trabajo</strong>, y confundirlas te puede estar costando ventas sin que lo notés.</p>

<h2>Lo que hacen bien las redes sociales</h2>
<ul>
  <li><strong>Mostrar el día a día</strong>: productos nuevos, trabajos terminados, promociones.</li>
  <li><strong>Generar ganas</strong> en gente que todavía no te estaba buscando.</li>
  <li><strong>Conversar</strong> con tu comunidad.</li>
  <li><strong>Arrancar sin costo</strong> y probar si hay interés.</li>
</ul>
<p>Para eso son insuperables, y hay que usarlas.</p>

<h2>Lo que las redes no pueden hacer</h2>

<h3>1. Que te encuentre quien te está buscando</h3>
<p>Esta es la diferencia más grande. Cuando alguien escribe en Google "dentista en Palmares", "ferretería en Cartago" o "diseño de cocinas en Heredia", Google muestra páginas web y perfiles de negocio, casi nunca publicaciones de Instagram. Esa persona ya tiene la necesidad y la billetera en la mano. Si no tenés página, se la lleva la competencia que sí tiene.</p>

<h3>2. Ser tuya</h3>
<p>Tu cuenta de Instagram es de Meta. Si te la hackean, te la suspenden por error o cambian las reglas, perdés tus seguidores y tu vitrina de un día para otro. Tu página web y tu dominio son tuyos.</p>

<h3>3. Dejar de depender del algoritmo</h3>
<p>En redes, cuántas personas ven lo que publicás lo decide la plataforma. En tu página, quien llega ve todo lo que tenés que ofrecer, ordenado como vos querés.</p>

<h3>4. Dar toda la información en un solo lugar</h3>
<p>Precios de referencia, servicios, horarios, ubicación, preguntas frecuentes, formas de pago, garantía. En redes esa información queda enterrada entre publicaciones y la gente termina preguntando lo mismo por mensaje una y otra vez.</p>

<h3>5. Generar confianza para compras grandes</h3>
<p>Para comprar algo caro o contratar un servicio, la gente investiga. Un negocio con página propia, dominio propio y correo con su nombre transmite algo que un perfil de redes no alcanza a transmitir. Más todavía con tantas estafas en redes.</p>

<h2>Diferencias, lado a lado</h2>
<ul>
  <li><strong>Aparecer en Google:</strong> la página sí; las redes, muy poco.</li>
  <li><strong>Propiedad:</strong> la página es tuya; la cuenta es de la plataforma.</li>
  <li><strong>Alcance:</strong> la página no depende de un algoritmo; las redes sí.</li>
  <li><strong>Costo:</strong> las redes son gratis; la página es una inversión inicial más el dominio y el hosting cada año.</li>
  <li><strong>Mostrar novedades:</strong> las redes son mejores para el día a día.</li>
  <li><strong>Información completa y ordenada:</strong> la página.</li>
</ul>

<h2>Cuándo alcanza con redes sociales</h2>
<p>Siendo honestos, hay casos donde todavía no hace falta invertir en una página:</p>
<ul>
  <li>Estás probando si tu producto se vende.</li>
  <li>Vendés solo a gente que ya te conoce, por recomendación.</li>
  <li>Tu cliente nunca te buscaría en Google.</li>
</ul>

<h2>Cuándo ya te está costando clientes no tener página</h2>
<ul>
  <li>Tus clientes buscan tu servicio en Google: servicios profesionales, salud, construcción, turismo, reparaciones, educación.</li>
  <li>Vendés a empresas: casi siempre te van a buscar antes de contratarte.</li>
  <li>Respondés las mismas preguntas todos los días por mensaje.</li>
  <li>Querés cobrar precios más altos y necesitás verte a la altura.</li>
  <li>Tenés competencia que ya aparece en Google y vos no.</li>
</ul>

<h2>La respuesta no es una o la otra: es que trabajen juntas</h2>
<p>Lo que mejor funciona es un sistema simple:</p>
<ol>
  <li><strong>Las redes atraen</strong> y muestran el día a día.</li>
  <li><strong>La página web convence</strong> y te hace aparecer en Google.</li>
  <li><strong>WhatsApp cierra</strong> la venta.</li>
</ol>
<p>Tu biografía de Instagram lleva a tu página; tu página tiene tus redes y un botón de WhatsApp en cada sección; y tu perfil de Google Business apunta a tu página. Así cada canal hace lo que mejor sabe hacer.</p>

<h2>¿Cuánto cuesta dar el paso?</h2>
<p>Una <a href="/paginas-web-costa-rica/">página web de negocio</a> arranca <strong>desde $499</strong> e incluye diseño que se ve bien en celular, la base para aparecer en Google y WhatsApp integrado. Al completar el pago, el sitio y el dominio quedan a tu nombre. Qué tiene que llevar para que funcione lo explicamos en <a href="/blog/que-debe-tener-una-pagina-web-de-negocio/">qué debe tener la página web de un negocio</a>, y los costos completos en <a href="/blog/cuanto-cuesta-una-pagina-web-en-costa-rica/">cuánto cuesta una página web en Costa Rica</a>.</p>
<p>Si no sabés si tu negocio ya la necesita, escribinos. Te lo decimos con honestidad, aunque la respuesta sea que todavía no.</p>
`,
  },
  {
    slug: 'estudio-de-mercado-para-seo',
    title: 'Estudio de mercado para SEO: dónde puede ganar tu negocio en Google',
    metaTitle: 'Estudio de mercado para SEO local e internacional | HacksinCodigos',
    metaDesc:
      'Cómo un estudio de mercado para SEO muestra dónde puede competir tu negocio en Google: palabras clave, análisis de la competencia y SEO local o internacional.',
    excerpt:
      'Antes de escribir una sola página conviene saber qué busca la gente, contra quién competís y en qué búsquedas sí podés ganar. Así se hace un estudio de mercado para SEO, en Costa Rica y afuera.',
    tag: '📊 Estrategia SEO',
    tagColor: 'var(--accent-blue)',
    published: '2026-09-14',
    updated: '2026-09-14',
    readingMinutes: 11,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO en Costa Rica' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web para negocios' },
    ],
    bodyHtml: `
<p>La mayoría de los negocios empieza el SEO al revés: primero hace la página, después escribe lo que se le ocurre y al final se pregunta por qué no sale en Google. El paso que se saltan es el que define todo lo demás: <strong>entender el mercado antes de competir en él</strong>.</p>
<p>Un estudio de mercado para SEO responde tres preguntas: qué está buscando tu cliente, quién aparece hoy cuando lo busca, y en cuáles de esas búsquedas tenés posibilidades reales de ganar. Sin esas respuestas, el posicionamiento es puro tanteo.</p>

<h2>Por qué no alcanza con "quiero salir primero en Google"</h2>
<p>"Salir primero" no significa nada hasta que se define <em>en qué búsqueda</em>. Salir primero en "abogado" es casi imposible y además no te sirve si solo atendés en Alajuela. Salir primero en "abogado laboral en Alajuela" es mucho más alcanzable y te trae justo a quien necesitás.</p>
<p>El estudio de mercado es lo que convierte un deseo general en una lista concreta de búsquedas donde vale la pena pelear.</p>

<h2>1. Qué busca tu cliente: la investigación de palabras clave</h2>
<p>El punto de partida no es cómo describís vos tu negocio, sino <strong>cómo lo busca tu cliente</strong>. Casi nunca coinciden. Una empresa dice "soluciones de climatización"; el cliente escribe "reparación de aire acondicionado en Heredia".</p>

<h3>Fuentes gratuitas que ya tenés a mano</h3>
<ul>
  <li><strong>El autocompletado de Google:</strong> lo que Google sugiere mientras escribís sale de lo que la gente busca de verdad. Configurado para Costa Rica, muestra cómo busca el tico.</li>
  <li><strong>"Otras preguntas de los usuarios"</strong> y las búsquedas relacionadas al final de cada resultado.</li>
  <li><strong>Google Search Console:</strong> si ya tenés sitio, te dice por qué búsquedas te están mostrando, aunque todavía no te hagan clic. Es oro puro.</li>
  <li><strong>Google Trends:</strong> para comparar términos y ver temporadas. Muchos negocios tienen meses fuertes y conviene tener el contenido listo antes.</li>
  <li><strong>El Planificador de palabras clave de Google Ads:</strong> da rangos de volumen de búsqueda.</li>
  <li><strong>Tus propios clientes:</strong> las preguntas que te hacen por WhatsApp son búsquedas que alguien más está haciendo en Google.</li>
</ul>
<p>Las herramientas de pago de análisis SEO agregan estimaciones de volumen y dificultad, y sirven para ir más rápido, pero no reemplazan entender al cliente.</p>

<h3>No todas las búsquedas valen lo mismo: la intención</h3>
<p>Esta es la parte que más dinero ahorra. Cada búsqueda tiene una intención detrás:</p>
<ul>
  <li><strong>Informativa:</strong> "cómo quitar la humedad de una pared". Quiere aprender. Atrae tráfico y confianza, pero no compra hoy.</li>
  <li><strong>Comparativa:</strong> "mejor impermeabilizante para techos". Está evaluando opciones.</li>
  <li><strong>Transaccional:</strong> "impermeabilización de techos precio Cartago". Está listo para contratar.</li>
</ul>
<p>Un buen estudio no busca solo las palabras con más volumen, sino el equilibrio: búsquedas de compra para vender pronto, y búsquedas informativas que atraen gente que después compra. Una búsqueda con poco volumen y mucha intención de compra suele valer más que una muy popular que no convierte.</p>

<h2>2. Contra quién competís: el análisis de la competencia SEO</h2>
<p>Tu competencia en Google no siempre es la misma que en la calle. A veces el negocio de la esquina ni aparece, y quien te quita clientes es un directorio, un sitio de otro país o una empresa grande con una página muy bien hecha.</p>

<h3>Cómo analizarla</h3>
<ol>
  <li><strong>Buscá tus palabras clave principales</strong> desde Costa Rica, en modo incógnito, y anotá quién aparece en los primeros resultados y en el mapa.</li>
  <li><strong>Mirá qué tipo de resultado gana:</strong> ¿páginas de empresas, directorios, artículos, videos, el mapa? Eso te dice qué formato espera Google para esa búsqueda.</li>
  <li><strong>Revisá sus páginas:</strong> qué tan completas son, si responden las preguntas del cliente, si tienen una página por servicio, qué tan rápido cargan en el celular.</li>
  <li><strong>Revisá su perfil de Google Business:</strong> cuántas reseñas tienen, qué tan completo está, si publican.</li>
  <li><strong>Buscá los huecos:</strong> preguntas que nadie responde bien, servicios que nadie explica, zonas que nadie cubre.</li>
</ol>

<h3>Dónde se puede ganar</h3>
<p>El objetivo del análisis no es copiar al que va primero, sino encontrar dónde es débil. Lo que más a menudo encontramos en Costa Rica:</p>
<ul>
  <li><strong>Competidores con una sola página</strong> para todos sus servicios. Una página por servicio suele ganarles.</li>
  <li><strong>Búsquedas por zona sin dueño:</strong> "en Grecia", "en Pérez Zeledón", "en Liberia".</li>
  <li><strong>Preguntas sin respuesta</strong>, sobre todo de precios, tiempos y procesos.</li>
  <li><strong>Perfiles de Google Business abandonados</strong>, con pocas reseñas o datos viejos.</li>
  <li><strong>Sitios lentos o que se ven mal en el celular.</strong></li>
</ul>

<h2>3. Local o internacional: definí la cancha</h2>
<p>La misma estrategia no sirve para un negocio que atiende en su cantón y para uno que le vende al mundo.</p>

<h3>SEO local</h3>
<p>Para negocios que atienden en una zona: clínicas, talleres, restaurantes, abogados, constructoras, servicios a domicilio. Acá la competencia es menor y la intención de compra es altísima: quien busca "veterinaria cerca de mí" quiere ir hoy.</p>
<ul>
  <li>El <strong>perfil de Google Business</strong> pesa tanto como la página web. Lo explicamos en <a href="/blog/como-aparecer-en-google-maps-con-mi-negocio/">cómo aparecer en Google Maps</a>.</li>
  <li><strong>Reseñas reales</strong> y con texto.</li>
  <li><strong>Páginas por zona</strong> solo donde realmente das el servicio, con contenido propio de cada una.</li>
  <li><strong>Datos consistentes</strong> —nombre, teléfono, dirección— en todos lados.</li>
</ul>
<p>Más detalle en la <a href="/blog/guia-seo-negocios-locales-costa-rica/">guía de SEO para negocios locales en Costa Rica</a>.</p>

<h3>SEO nacional</h3>
<p>Para negocios que venden en todo el país: tiendas en línea, servicios remotos, software. Acá no ayuda tanto el mapa y la pelea es por contenido y autoridad: páginas de servicio y categoría muy completas, artículos que respondan lo que se busca, y enlaces de otros sitios costarricenses que te mencionen.</p>

<h3>SEO internacional</h3>
<p>Para negocios que le venden a otros países: turismo, bienes raíces para inversionistas extranjeros, exportación, servicios digitales. Es la cancha con más oportunidades y también con más errores caros.</p>
<ul>
  <li><strong>El idioma no es el país.</strong> Un turista de Estados Unidos no busca igual que uno del Reino Unido, y un cliente en México no usa las mismas palabras que uno en España. El estudio se hace <em>por mercado</em>, no solo por idioma.</li>
  <li><strong>Traducir no es posicionar.</strong> Una página traducida palabra por palabra no responde a cómo busca la gente en ese otro mercado. Hay que investigar las palabras clave de cada uno.</li>
  <li><strong>La estructura técnica importa:</strong> cada idioma o país en su propia sección del sitio, con las etiquetas que le indican a Google qué versión mostrar a quién (hreflang). Si no, Google muestra la versión equivocada o las ve como contenido duplicado.</li>
  <li><strong>La competencia es otra:</strong> en inglés competís contra empresas de todo el mundo. Conviene empezar por nichos concretos donde Costa Rica es la respuesta, como "eco lodge in Monteverde" en vez de "hotels".</li>
  <li><strong>Moneda, forma de pago y confianza</strong> tienen que tener sentido para ese cliente.</li>
</ul>

<h2>4. Convertir el estudio en un plan</h2>
<p>Un estudio que termina en un documento guardado no sirve. Tiene que terminar en decisiones:</p>
<ol>
  <li><strong>Agrupá las búsquedas por tema.</strong> Cada grupo es una página, no cada palabra suelta.</li>
  <li><strong>Priorizá</strong> por tres criterios: intención de compra, posibilidad real de ganar y valor para tu negocio.</li>
  <li><strong>Definí la estructura del sitio</strong> a partir de esos grupos: qué páginas de servicio, de zona, de categoría y de artículos hacen falta.</li>
  <li><strong>Escribí para el cliente</strong>, usando sus palabras con naturalidad. Repetir la palabra clave de más no ayuda; responder bien sí.</li>
  <li><strong>Medí con Search Console</strong> y ajustá cada mes: aparecen búsquedas que no estaban en el estudio y conviene aprovecharlas.</li>
</ol>

<h2>Errores comunes</h2>
<ul>
  <li><strong>Elegir palabras clave por intuición</strong>, sin revisar cómo busca la gente.</li>
  <li><strong>Perseguir solo las búsquedas más grandes</strong>, donde ganan empresas con años de ventaja.</li>
  <li><strong>Ignorar la intención</strong> y llenar el sitio de tráfico que nunca compra.</li>
  <li><strong>Traducir el sitio y llamarlo SEO internacional.</strong></li>
  <li><strong>Crear decenas de páginas por ciudad casi idénticas.</strong> Google las detecta como contenido de relleno.</li>
  <li><strong>Hacer el estudio una vez y no volver a mirarlo.</strong> Los mercados y las búsquedas cambian.</li>
</ul>

<h2>Cómo lo aplicamos</h2>
<p>Es el mismo proceso que usamos en nuestro propio sitio: revisamos cómo buscan en Costa Rica cada servicio, qué preguntas se repiten y quién aparece hoy, y a partir de ahí decidimos qué páginas y qué artículos escribir. Este mismo artículo nació de ese análisis.</p>
<p>Si querés saber dónde puede ganar tu negocio en Google —en tu zona, en todo el país o afuera—, en <a href="/seo-costa-rica/">posicionamiento SEO</a> te explicamos cómo trabajamos. Y si tu sitio ya existe pero no aparece, empezá por <a href="/blog/por-que-mi-pagina-web-no-aparece-en-google/">por qué tu página web no aparece en Google</a>.</p>
`,
  },
  {
    slug: 'cuanto-cuesta-el-seo-en-costa-rica',
    title: 'Cuánto cuesta el SEO en Costa Rica y qué se paga exactamente',
    metaTitle: 'Cuánto cuesta el SEO en Costa Rica | Precios 2026',
    metaDesc:
      'Cuánto cuesta posicionar una página web en Google en Costa Rica: qué incluye cada paquete de SEO, precios de referencia, cuándo se ven resultados y señales de humo.',
    excerpt:
      'Posicionar una página web no tiene precio de lista, pero sí rangos claros. Qué se está pagando de verdad, qué debería incluir cada paquete y cómo detectar al que te va a cobrar por nada.',
    tag: '📈 Precios SEO',
    tagColor: 'var(--accent-blue)',
    published: '2026-09-16',
    updated: '2026-09-17',
    readingMinutes: 10,
    relatedServices: [
      { href: '/seo-costa-rica/', label: 'posicionamiento SEO en Costa Rica' },
      { href: '/paginas-web-costa-rica/', label: 'páginas web para negocios' },
    ],
    bodyHtml: `
<p>"¿Cuánto me cobrás por posicionarme en Google?" es la pregunta, y la respuesta honesta incomoda: depende. Pero "depende" no le sirve a nadie para presupuestar, así que acá van los rangos con los que trabajamos, qué incluye cada uno y —lo más importante— <strong>qué se está pagando exactamente</strong>.</p>
<p>Porque el problema del SEO no es el precio. Es que casi nadie explica qué recibe a cambio, y así es fácil pagar meses por nada.</p>

<h2>Por qué el SEO no tiene precio de lista</h2>
<p>Dos negocios que piden "posicionarse en Google" pueden necesitar trabajos completamente distintos:</p>
<ul>
  <li><strong>El tamaño del sitio.</strong> Optimizar cinco páginas no es lo mismo que optimizar doscientas fichas de producto.</li>
  <li><strong>El estado en el que llega.</strong> Un sitio hecho la semana pasada con buena base necesita menos trabajo que uno de hace ocho años, lento, con contenido duplicado y URLs viejas indexadas.</li>
  <li><strong>La competencia del sector.</strong> Posicionar una veterinaria en Grecia y posicionar un bufete en San José son peleas de peso distinto.</li>
  <li><strong>Hasta dónde querés llegar.</strong> No cuesta lo mismo salir en el mapa de tu cantón que competir por una búsqueda nacional.</li>
</ul>

<h2>Precios de referencia en Costa Rica</h2>
<p>Estos son nuestros rangos, y sirven para comparar cualquier cotización que te pasen.</p>

<h3>Optimización por página — $15 cada una</h3>
<p>El escalón más chico. Se trabaja una página concreta: título y descripción escritos para búsqueda, encabezados ordenados, el texto trabajado con los términos por los que te buscan, enlazado interno y datos estructurados. Sirve cuando el sitio está sano y solo hay páginas que se quedaron atrás, o cuando se agregan páginas nuevas.</p>

<h3>SEO Inicial — desde $250</h3>
<p>El arranque para un negocio que hoy no aparece. Incluye la <strong>auditoría completa</strong> del sitio con el informe de qué está frenando el posicionamiento, la corrección del SEO técnico —títulos, descripciones, encabezados, URLs, sitemap, datos estructurados—, el <strong>perfil de Google Business Profile</strong> creado u optimizado para salir en el mapa, la configuración de Search Console y Bing, y la guía para empezar a pedir reseñas.</p>
<p>Se paga una vez y deja la casa ordenada. Para muchos negocios locales, esto solo ya cambia el panorama.</p>

<h3>SEO + Contenido — desde $500</h3>
<p>Acá empieza a moverse lo que de verdad vende. Suma el <strong>estudio de palabras clave y de la competencia</strong> para saber por dónde sí se puede ganar, la estructura de páginas por servicio y por zona, la implementación del blog con artículos sobre lo que busca tu cliente, y el enlazado interno que reparte la autoridad hacia las páginas que venden.</p>
<p>Es el que recomendamos a quien quiere aparecer <em>por lo que vende</em>, no solo por el nombre de su empresa.</p>

<h3>SEO Completo — desde $1.000</h3>
<p>Para pelear los primeros lugares en un sector competido. Suma contenido sostenido en el tiempo, <strong>monitoreo en Search Console</strong> —posiciones, impresiones, consultas nuevas y errores—, trabajo de enlaces y menciones legítimas, ajustes según lo que muestren los datos y reporte de lo hecho.</p>
<p>El detalle de cada uno está en <a href="/seo-costa-rica/">paquetes de SEO en Costa Rica</a>.</p>

<h2>En qué se va la plata realmente</h2>
<p>El SEO se paga en horas de trabajo, no en una licencia mágica. Esto es lo que hay detrás:</p>
<ul>
  <li><strong>Diagnóstico:</strong> revisar qué páginas conoce Google, cuáles ignora y por qué.</li>
  <li><strong>Investigación:</strong> cómo busca tu cliente y contra quién estás compitiendo.</li>
  <li><strong>Trabajo técnico:</strong> velocidad, estructura, metadatos, datos estructurados, redirecciones.</li>
  <li><strong>Contenido:</strong> escribir páginas y artículos que respondan de verdad. Es lo que más tiempo toma y lo que más resultados da.</li>
  <li><strong>Presencia local:</strong> Google Business Profile, reseñas, datos consistentes.</li>
  <li><strong>Seguimiento:</strong> medir, corregir y aprovechar las búsquedas nuevas que van apareciendo.</li>
</ul>

<h2>Cuándo se ven resultados</h2>
<ul>
  <li><strong>Semanas:</strong> los arreglos técnicos y el perfil de Google Business pueden mover la presencia local relativamente rápido.</li>
  <li><strong>Dos a tres meses:</strong> empiezan a subir las impresiones y aparecen consultas nuevas en Search Console.</li>
  <li><strong>Tres a seis meses o más:</strong> las posiciones en términos competidos, con trabajo sostenido.</li>
</ul>
<p>La posición es lo último en moverse. Antes cambian tres señales, en este orden: páginas indexadas, impresiones y consultas nuevas. Si esas tres suben, el trabajo va bien aunque todavía no estés de primero.</p>

<h2>Señales de que te están vendiendo humo</h2>
<ul>
  <li><strong>"Te garantizo el primer lugar en Google."</strong> Nadie puede garantizarlo: el ranking lo decide Google. Quien lo promete o no sabe, o va a usar trucos que después te cuestan una penalización.</li>
  <li><strong>"Te consigo 500 enlaces por $50."</strong> Son enlaces comprados o de redes de sitios basura. Google los detecta y castiga al que los recibe.</li>
  <li><strong>Reseñas compradas.</strong> Motivo de suspensión del perfil de negocio, y lo notan hasta los clientes.</li>
  <li><strong>No te dice qué va a hacer.</strong> Si la propuesta no lista tareas concretas, no hay forma de saber si trabajó.</li>
  <li><strong>Reportes de "posiciones" sin contexto.</strong> Salir primero en una búsqueda que nadie hace no sirve de nada.</li>
  <li><strong>Cobra mensualidad sin entregar nada.</strong> Todos los meses tiene que haber algo: contenido nuevo, arreglos, reportes.</li>
</ul>

<h2>Cómo saber si vale la pena para tu negocio</h2>
<p>El SEO conviene cuando <strong>tu cliente te busca en Google</strong>. Si vendés servicios profesionales, salud, construcción, reparaciones, turismo, educación o productos que la gente busca por nombre, sí. Si vendés solo por recomendación a gente que ya te conoce, puede que primero convenga invertir en otra cosa.</p>
<p>Una forma rápida de saberlo: buscá en Google lo que vendés, como lo buscaría un cliente. Si aparecen competidores y no aparecés vos, ahí hay dinero yéndose. Si ni siquiera hay resultados relevantes, quizá tu cliente no busca así.</p>

<h2>SEO o publicidad pagada</h2>
<p>La publicidad en Google te pone arriba desde el primer día, pero dejás de aparecer el día que dejás de pagar. El SEO tarda meses, y lo que se construye queda. Lo ideal, cuando el presupuesto da, es usar publicidad mientras el SEO madura. Si hay que escoger uno solo, depende de si necesitás ventas esta semana o clientes todos los meses del próximo año.</p>

<h2>Antes de contratar, preguntá esto</h2>
<ol>
  <li>¿Qué vas a hacer exactamente el primer mes?</li>
  <li>¿Qué me vas a entregar y cada cuánto?</li>
  <li>¿Cómo vamos a medir si funciona?</li>
  <li>¿Los accesos y el contenido quedan a mi nombre?</li>
  <li>¿Qué pasa si dejo de trabajar con vos?</li>
</ol>
<p>Quien tiene claro su trabajo responde eso sin rodeos.</p>

<h2>Empezá por un diagnóstico</h2>
<p>Si querés saber qué necesita tu sitio antes de gastar, escribinos y lo revisamos. Te decimos qué está roto, qué se puede arreglar rápido y qué paquete tiene sentido para tu caso. La cotización es gratis y sin compromiso.</p>
<p>Y si querés entender primero cómo se decide dónde competir, leé <a href="/blog/estudio-de-mercado-para-seo/">estudio de mercado para SEO</a> y <a href="/blog/por-que-mi-pagina-web-no-aparece-en-google/">por qué tu página web no aparece en Google</a>.</p>
`,
  },
  {
    slug: 'como-elegir-agencia-seo-o-diseno-web-costa-rica',
    title: 'Cómo elegir agencia de SEO o diseño web en Costa Rica sin que te vendan humo',
    metaTitle: 'Cómo elegir agencia SEO o de diseño web en Costa Rica',
    metaDesc:
      'Qué revisar antes de contratar una agencia SEO o de diseño web en Costa Rica: preguntas clave, señales de alerta y qué debe quedar a tu nombre.',
    excerpt:
      'Contratar mal cuesta el doble: primero lo que pagaste y después lo que cuesta arreglarlo. Las preguntas que filtran, las señales de alerta y cómo comparar dos cotizaciones que parecen iguales.',
    tag: '🤝 Cómo contratar',
    tagColor: '#22c55e',
    published: '2026-09-17',
    updated: '2026-09-17',
    readingMinutes: 9,
    relatedServices: [
      { href: '/paginas-web-costa-rica/', label: 'páginas web en Costa Rica' },
      { href: '/seo-costa-rica/', label: 'agencia SEO en Costa Rica' },
    ],
    bodyHtml: `
<p>Nos llegan varios clientes al año con el mismo cuento: pagaron una página web o un servicio de posicionamiento, y quedaron peor que antes. Sitio que no aparece en Google, dominio registrado a nombre de otra persona, un panel al que no tienen acceso, o meses de mensualidad sin nada que mostrar.</p>
<p>Contratar mal sale caro dos veces: lo que pagaste y lo que cuesta arreglarlo. Esta guía es lo que nosotros revisaríamos antes de contratar, aunque el resultado sea que elijás a otro.</p>

<h2>1. Pedí ver trabajos reales, en línea</h2>
<p>No capturas de pantalla ni un PDF bonito: <strong>direcciones web que puedas abrir</strong>. Y una vez abiertas, revisá tres cosas:</p>
<ul>
  <li><strong>¿El sitio sigue en línea?</strong> Si la mitad del portafolio ya no existe, algo pasó.</li>
  <li><strong>¿Se ve bien en tu celular?</strong> Ahí es donde entra la mayoría de la gente.</li>
  <li><strong>¿Ese negocio aparece en Google?</strong> Buscá su nombre y su servicio principal. Si un portafolio de "expertos en SEO" no posiciona ni a sus propios clientes, ya sabés.</li>
</ul>
<p>Nuestro <a href="/proyectos/">portafolio</a> está con nombre y enlace a cada sitio, justamente por eso.</p>

<h2>2. Revisá que tengan su propia casa en orden</h2>
<p>Es la prueba más rápida y casi nadie la hace. Buscá en Google el servicio que venden, no su marca. Una agencia que no aparece por "diseño web Costa Rica" ni por "SEO Costa Rica" está en la misma situación en la que vos no querés estar.</p>
<p>Revisá también su propio sitio: ¿carga rápido en el celular?, ¿tiene el candado de seguridad?, ¿tiene reseñas reales en Google?, ¿el blog está vivo o quedó hace tres años?</p>

<h2>3. Exigí que todo quede a tu nombre</h2>
<p>Este punto solo duele cuando ya es tarde. Tiene que quedar por escrito que, al completar el pago:</p>
<ul>
  <li>El <strong>dominio</strong> está registrado a tu nombre o al de tu empresa, no al del proveedor.</li>
  <li>Tenés los <strong>accesos</strong>: hosting, panel de administración, correo.</li>
  <li>El <strong>contenido y las imágenes</strong> son tuyos o tienen licencia a tu nombre.</li>
  <li>Las cuentas de <strong>Google Business Profile, Search Console y Analytics</strong> son tuyas, con el proveedor como invitado.</li>
</ul>
<p>Si el proveedor se queda con el dominio, no sos dueño de tu negocio en internet: sos inquilino. Y el día que se pelean o desaparece, empezás de cero.</p>

<h2>4. Que te digan qué incluye y qué no</h2>
<p>Dos cotizaciones por el mismo monto pueden ser cosas muy distintas. Pedí que la propuesta diga:</p>
<ul>
  <li>Cuántas páginas o secciones, y cuáles.</li>
  <li>Quién escribe los textos: ¿vos o ellos?</li>
  <li>Quién pone las fotos y si son propias o de banco de imágenes.</li>
  <li>Si incluye SEO técnico o es un extra.</li>
  <li>Cuántas rondas de cambios entran en el precio.</li>
  <li>Qué pasa con el hosting y el dominio cada año, y cuánto cuestan.</li>
  <li>Qué cubre la garantía y por cuánto tiempo.</li>
  <li>Qué cuesta un cambio después de entregado.</li>
</ul>
<p>Ese último punto se olvida siempre, y es el que más pleitos genera.</p>

<h2>5. Cuidado con lo que se paga todos los años</h2>
<p>Una página web tiene costos recurrentes reales —dominio y hosting— y eso es normal. Lo que no es normal es enterarse después. Preguntá cuánto se paga cada año, a quién, y qué pasa si querés mover el sitio a otro lado.</p>
<p>El desglose completo está en <a href="/blog/cuanto-cuesta-una-pagina-web-en-costa-rica/">cuánto cuesta una página web en Costa Rica</a>.</p>

<h2>6. Señales de alerta</h2>
<ul>
  <li><strong>Promete el primer lugar en Google.</strong> Nadie puede garantizarlo.</li>
  <li><strong>Precio sospechosamente bajo</strong> con "todo incluido". Casi siempre es una plantilla genérica sin contenido propio, que no posiciona.</li>
  <li><strong>No firma nada</strong> ni entrega propuesta por escrito.</li>
  <li><strong>No te deja hablar con clientes anteriores.</strong></li>
  <li><strong>Testimonios sin nombre ni empresa</strong>, o con fotos de banco de imágenes.</li>
  <li><strong>Desaparece días entre respuestas</strong> mientras te está vendiendo. Después de cobrar no mejora.</li>
  <li><strong>Te apura</strong> con descuentos que vencen hoy.</li>
</ul>

<h2>7. Las preguntas que filtran</h2>
<ol>
  <li>¿Qué me vas a entregar exactamente y en qué plazo?</li>
  <li>¿El dominio y los accesos quedan a mi nombre?</li>
  <li>¿Quién escribe los textos y quién pone las fotos?</li>
  <li>¿Qué pasa si necesito un cambio en seis meses?</li>
  <li>¿Cómo vamos a medir si funcionó?</li>
  <li>¿Qué costos anuales voy a tener?</li>
  <li>¿Puedo ver tres sitios suyos que estén en línea hoy?</li>
</ol>
<p>Quien trabaja en serio responde estas siete sin incomodarse.</p>

<h2>Agencia grande, freelancer o estudio pequeño</h2>
<ul>
  <li><strong>Freelancer:</strong> más barato y más cercano, pero depende de una sola persona. Si se enferma o cambia de trabajo, quedás a la deriva.</li>
  <li><strong>Agencia grande:</strong> más estructura y respaldo, pero un negocio pequeño suele terminar atendido por el personal con menos experiencia.</li>
  <li><strong>Estudio pequeño:</strong> el punto medio, si de verdad tiene portafolio comprobable.</li>
</ul>
<p>Lo que importa no es el tamaño, sino que pueda mostrar trabajos vivos y explicar sus decisiones sin humo.</p>

<h2>Cómo trabajamos nosotros</h2>
<p>Para que compare con lo de arriba: propuesta por escrito antes de empezar, con alcance y precio; el sitio, el dominio y los accesos quedan a tu nombre al completar el pago; 30 días de garantía sobre defectos de nuestro trabajo; portafolio público con nombre y enlace; y cero promesas de posiciones, porque el ranking lo decide Google.</p>
<p>Si estás comparando cotizaciones, escribinos: te decimos con honestidad qué necesita tu caso, aunque termine siendo menos de lo que pensabas contratar. Mirá <a href="/paginas-web-costa-rica/">páginas web en Costa Rica</a> y <a href="/seo-costa-rica/">nuestros paquetes de SEO</a>, que tienen los precios a la vista.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
