/**
 * Configuración de la tienda.
 *
 * ESTE ES EL ARCHIVO QUE SE EDITA para mantener la tienda al día:
 *
 *   · Cambiar un precio      -> `price`
 *   · Dejar de ofrecer algo  -> `active: false`  (la página deja de generarse y
 *                               la URL redirige sola; no queda ningún enlace roto)
 *   · Reordenar              -> mover la línea de lugar dentro de su categoría
 *   · Cambiar el texto corto -> `tagline`
 *
 * Los textos largos ("Incluye", "No incluye", "Notas") siguen viniendo de
 * `products.json`, que es la extracción del WooCommerce original.
 */

export interface ShopCategory {
  id: string;
  title: string;
  intro: string;
  /** Las categorías destacadas se muestran con tarjetas grandes arriba de todo. */
  featured?: boolean;
  /** Los planes se pintan como tabla comparativa en vez de cuadrícula. */
  layout?: 'grid' | 'plans' | 'featured';
}

export interface ShopItem {
  slug: string;
  category: string;
  /**
   * Precio actual en USD. `null` muestra "Consultar precio" y manda a WhatsApp:
   * sirve para servicios cuyo alcance cambia mucho de un pedido a otro.
   */
  price: number | null;
  /** `month` añade "/ mes" al precio. */
  unit?: 'once' | 'month';
  /** Frase corta propia para la tarjeta. Si falta, se usa la de products.json. */
  tagline?: string;
  /** Puntos que se listan en la tarjeta. Solo para las categorías destacadas. */
  highlights?: string[];
  /** Poné `false` para retirar el servicio del catálogo. */
  active: boolean;
  /** Marca la opción recomendada dentro de su categoría. */
  recommended?: boolean;

  // ── Solo para servicios que NO vienen del WooCommerce original ──────────────
  /** Nombre del servicio. Obligatorio si el slug no está en products.json. */
  title?: string;
  /** Descripción larga en HTML para la ficha. */
  descHtml?: string;
}

export const categories: ShopCategory[] = [
  {
    id: 'paginas-web',
    title: 'Páginas web',
    intro: 'El sitio completo: diseño, programación, SEO técnico y puesta en línea.',
    featured: true,
    layout: 'featured',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento mensual',
    intro:
      'Un sitio publicado necesita actualizaciones de seguridad y respaldos. Estos planes cubren eso y un número de cambios al mes.',
    layout: 'plans',
  },
  {
    id: 'presencia',
    title: 'Presencia digital',
    intro: 'Las piezas que hacen que tu negocio se vea serio en cada punto de contacto.',
  },
  {
    id: 'contenido',
    title: 'Contenido para redes y publicidad',
    intro: 'Creativos listos para publicar o para poner a rodar en campañas de Meta Ads.',
  },
];

export const items: ShopItem[] = [
  // ── Páginas web ─────────────────────────────────────────────────────────────
  {
    slug: 'pagina-web-profesional-sin-carrito-de-compras',
    category: 'paginas-web',
    price: 450,
    active: true,
    tagline:
      'El sitio que necesita un negocio de servicios: se ve profesional, carga rápido y las consultas te llegan por WhatsApp.',
    highlights: [
      'Diseño propio, responsive y rápido',
      'Inicio, Servicios, Sobre nosotros y Contacto',
      'Botón de WhatsApp y formulario de contacto',
      'SEO base: estructura, títulos y jerarquía',
      'Enlaces a redes sociales',
    ],
  },
  {
    slug: 'pagina-web-tienda-online-con-carrito',
    category: 'paginas-web',
    price: 850,
    active: true,
    recommended: true,
    tagline:
      'Todo lo del sitio profesional más catálogo, carrito y cobro en línea. Para dejar de vender contestando mensajes uno por uno.',
    highlights: [
      'Todo lo de la página profesional',
      'Tienda con WooCommerce y carrito',
      'Hasta 50 productos configurados',
      'Pasarela de pago con tarjeta',
      'Panel para gestionar pedidos',
    ],
  },

  // ── Mantenimiento ───────────────────────────────────────────────────────────
  {
    slug: 'mantenimiento-web-basico-mensual',
    category: 'mantenimiento',
    price: 38,
    unit: 'month',
    active: true,
    tagline: 'Actualizaciones, respaldos y soporte.',
      descHtml: `
      <p>El plan mínimo para que un sitio publicado no se degrade. Pensado para páginas
      de negocio que cambian poco.</p>
      <p><strong>Incluye cada mes</strong></p>
      <ul>
        <li>Actualización del gestor, del tema y de los plugins</li>
        <li>Respaldo completo del sitio y de la base de datos</li>
        <li>Revisión de que el sitio cargue y de que los formularios lleguen</li>
        <li>Reporte de lo que se hizo</li>
        <li>Soporte por WhatsApp para incidencias</li>
      </ul>
      <p><strong>No incluye</strong></p>
      <ul>
        <li>Cambios de diseño o secciones nuevas</li>
        <li>Redacción de contenido</li>
        <li>Hosting y dominio, que se pagan aparte</li>
      </ul>
      <p>Si necesitás cambios seguido, el
      <a href="/product/mantenimiento-web-pro-mensual/">plan Pro</a> incluye 20 al mes.</p>`,
  },
  {
    slug: 'mantenimiento-web-pro-mensual',
    category: 'mantenimiento',
    price: 68,
    unit: 'month',
    active: true,
    recommended: true,
    tagline: 'Firewall, respaldos diarios y 20 cambios al mes.',
      descHtml: `
      <p>Para sitios con tráfico real o que venden en línea, donde una caída o un ataque
      cuesta plata.</p>
      <p><strong>Incluye todo lo del plan Básico, más</strong></p>
      <ul>
        <li>Respaldos diarios en vez de mensuales</li>
        <li>Firewall y bloqueo de intentos de acceso</li>
        <li>Hasta 20 cambios de contenido al mes: textos, imágenes, precios</li>
        <li>Monitoreo de caídas</li>
        <li>Revisión de que la pasarela de pago siga funcionando</li>
      </ul>
      <p><strong>Qué cuenta como un cambio</strong></p>
      <ul>
        <li>Cambiar un texto, una foto o un precio</li>
        <li>Publicar una entrada o un producto</li>
        <li>Ajustar un dato de contacto o un horario</li>
      </ul>
      <p>Rediseñar una sección completa no entra: eso se cotiza como proyecto.</p>`,
  },
  {
    slug: 'mantenimiento-web-corporativo-mensual',
    category: 'mantenimiento',
    price: 97,
    unit: 'month',
    active: true,
    tagline: 'Prioridad de atención, hardening avanzado y 40 cambios al mes.',
      descHtml: `
      <p>Para empresas donde el sitio es parte de la operación y hay más de una persona
      pidiendo cambios.</p>
      <p><strong>Incluye todo lo del plan Pro, más</strong></p>
      <ul>
        <li>Prioridad de atención sobre el resto de la cola</li>
        <li>Hardening avanzado: permisos, cabeceras de seguridad y accesos</li>
        <li>Hasta 40 cambios de contenido al mes</li>
        <li>Revisión periódica de rendimiento y Core Web Vitals</li>
        <li>Revisión de errores en Google Search Console</li>
      </ul>
      <p>Si el sitio necesita desarrollo nuevo — una integración, un módulo, una sección
      a medida — eso se cotiza aparte como
      <a href="/desarrollo-web-costa-rica/">proyecto de desarrollo</a>.</p>`,
  },

  // ── Presencia digital ───────────────────────────────────────────────────────
  {
    slug: 'correo-empresarial-con-dominio',
    category: 'presencia',
    price: 150,
    active: true,
    tagline: 'Correo con tu dominio, configurado para que no caiga en spam.',
      descHtml: `
      <p>Correo con tu propio dominio, del tipo nombre@tuempresa.com, en vez de una
      cuenta gratuita. Cambia cómo te ve un cliente y ayuda a que tus mensajes no caigan
      en spam.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Creación de las cuentas de correo del dominio</li>
        <li>Configuración de los registros DNS de autenticación: SPF, DKIM y DMARC,
        según el proveedor</li>
        <li>Configuración en el celular y en la computadora de cada usuario</li>
        <li>Prueba de entregabilidad para confirmar que los correos llegan a la bandeja
        de entrada</li>
      </ul>
      <p><strong>Notas</strong></p>
      <ul>
        <li>El precio cubre la configuración. La licencia mensual del proveedor de correo
        se paga aparte y depende de cuántas cuentas necesités.</li>
        <li>Si todavía no tenés dominio, se puede registrar como parte del trabajo.</li>
      </ul>
      <p>Se complementa con una
      <a href="/product/firma-para-correo-electronico/">firma de correo</a> con tu marca.</p>`,
  },
  {
    slug: 'menu-qr-interactivo',
    category: 'presencia',
    price: 65,
    active: true,
    tagline: 'Carta digital para celular, con QR listo para imprimir.',
      descHtml: `
      <p>La carta de tu negocio en una página pensada para el celular, con un código QR
      para poner en la mesa, en la ventana o en el empaque. Cuando cambia un precio lo
      actualizás y listo: no hay que reimprimir nada.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Menú organizado por categorías, con foto, descripción y precio</li>
        <li>Diseño aplicado a tu marca</li>
        <li>Código QR en alta resolución, listo para imprimir</li>
        <li>Botón de WhatsApp para pedidos</li>
        <li>Carga rápida en datos móviles, sin instalar nada</li>
      </ul>
      <p><strong>Ideal para</strong></p>
      <ul>
        <li>Restaurantes, sodas y cafeterías</li>
        <li>Bares y food trucks</li>
        <li>Cualquier negocio con una lista de precios que cambia</li>
      </ul>`,
  },
  {
    slug: 'tarjeta-de-presentacion-digital-para-eventos-con-qr',
    category: 'presencia',
    price: 100,
    active: true,
    tagline: 'Tarjeta digital con QR para ferias y eventos.',
  },
  {
    slug: 'firma-para-correo-electronico',
    category: 'presencia',
    price: 30,
    active: true,
    tagline: 'Firma de correo con tu logo, compatible con Gmail y Outlook.',
  },
  {
    slug: 'tarjetas-de-presentacion',
    category: 'presencia',
    // TODO: poner el precio real. Con `null` la tarjeta dice "Consultar precio"
    // y manda a WhatsApp, así que el servicio ya se muestra y se puede pedir.
    price: null,
    active: true,
    title: 'Tarjetas de Presentación',
    tagline: 'Diseño de tarjeta de presentación listo para imprenta, con tu marca aplicada.',
    descHtml: `
      <p>Diseño de tarjeta de presentación a partir de tu identidad visual. Si todavía no
      tenés logo, lo resolvemos antes para que todo salga coherente.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Diseño de frente y reverso</li>
        <li>Archivo listo para imprenta en CMYK, con márgenes de corte y sangrado</li>
        <li>Versión digital para compartir por WhatsApp o correo</li>
        <li>Dos rondas de ajustes</li>
      </ul>
      <p><strong>Notas</strong></p>
      <ul>
        <li>El precio cubre el diseño. La impresión se cotiza aparte según cantidad y acabado.</li>
        <li>Si preferís una tarjeta digital con QR en vez de impresa, mirá la
        <a href="/product/tarjeta-de-presentacion-digital-para-eventos-con-qr/">tarjeta digital con QR</a>.</li>
      </ul>`,
  },
  {
    slug: 'invitaciones-para-eventos',
    category: 'presencia',
    // TODO: poner el precio real (o dejarlo en null si depende del evento).
    price: null,
    active: true,
    title: 'Invitaciones para Eventos y Bodas',
    tagline: 'Invitaciones digitales para bodas, cumpleaños y eventos de empresa, con RSVP por WhatsApp.',
    descHtml: `
      <p>Invitación digital diseñada para el evento: bodas, quinceaños, cumpleaños,
      graduaciones y eventos de empresa. Se comparte por WhatsApp y se ve bien en
      cualquier celular.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Diseño a medida según el estilo del evento</li>
        <li>Datos completos: fecha, hora, lugar y código de vestimenta</li>
        <li>Botón de confirmación de asistencia por WhatsApp</li>
        <li>Enlace a la ubicación en Google Maps</li>
        <li>Versión en imagen para compartir y versión en enlace</li>
        <li>Dos rondas de ajustes</li>
      </ul>
      <p><strong>Opcional</strong></p>
      <ul>
        <li>Página web del evento con galería y lista de regalos</li>
        <li>Código QR para las invitaciones impresas</li>
        <li>Versión para imprenta</li>
      </ul>`,
  },

  // ── Contenido publicitario ──────────────────────────────────────────────────
  {
    slug: 'paquete-profesional-15-imagenes',
    category: 'contenido',
    price: 130,
    active: true,
    tagline: 'Creativos profesionales para campañas.',
      descHtml: `
      <p>Veinte piezas: el paquete para negocios que publican seguido o que están
      corriendo campañas pagadas y necesitan varias versiones para comparar cuál rinde
      mejor.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>20 diseños originales con tu marca aplicada</li>
        <li>Todos los formatos: feed, historias, carrusel y portada</li>
        <li>Variaciones de una misma pieza para probar en campañas</li>
        <li>Archivos en JPG y PNG optimizados para redes</li>
        <li>Una ronda de ajustes por pieza</li>
      </ul>
      <p>Es el mejor precio por imagen de los tres paquetes.</p>`,
  },
  {
    slug: 'paquete-emprendedor-10-imagenes',
    category: 'contenido',
    price: 90,
    active: true,
    tagline: '10 imágenes para impulsar ventas en redes.',
      descHtml: `
      <p>Diez piezas: suficiente para cubrir un mes de publicaciones sin repetir, o para
      montar una campaña con varias versiones del mismo mensaje.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>10 diseños originales con tu marca aplicada</li>
        <li>Mezcla de formatos: feed, historias y carrusel</li>
        <li>Archivos en JPG y PNG optimizados para redes</li>
        <li>Una ronda de ajustes por pieza</li>
      </ul>
      <p><strong>Sirve para</strong></p>
      <ul>
        <li>Un mes de contenido planificado</li>
        <li>Lanzar un producto con varias piezas de apoyo</li>
        <li>Probar mensajes distintos en una campaña de Meta Ads</li>
      </ul>`,
  },
  {
    slug: 'paquete-esencial-4-imagenes',
    category: 'contenido',
    price: 40,
    active: true,
    tagline: '4 creativos listos para publicar.',
      descHtml: `
      <p>Cuatro piezas para arrancar: lo mínimo para que un perfil no se vea abandonado y
      tenga con qué publicar la primera semana.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>4 diseños originales con tu marca aplicada</li>
        <li>Formato a elegir por pieza: feed o historia</li>
        <li>Archivos en JPG y PNG optimizados para redes</li>
        <li>Una ronda de ajustes por pieza</li>
      </ul>
      <p>Si vas a publicar de forma sostenida, el
      <a href="/product/paquete-emprendedor-10-imagenes/">paquete de 10</a> baja bastante
      el precio por imagen.</p>`,
  },
  {
    slug: 'imagen-publicitaria-unica',
    category: 'contenido',
    price: 10,
    active: true,
    tagline: '1 diseño para feed o story.',
      descHtml: `
      <p>Un diseño listo para publicar, hecho para tu marca y para el objetivo que nos
      digás: promocionar un producto, anunciar un horario o mover una oferta.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Un diseño original con tu logo, colores y tipografía</li>
        <li>Formato a elegir: cuadrado para feed o vertical para historias y reels</li>
        <li>Archivos en JPG y PNG optimizados para redes</li>
        <li>Una ronda de ajustes</li>
      </ul>
      <p>Si necesitás varias piezas sale más a cuenta un paquete: el
      <a href="/product/paquete-esencial-4-imagenes/">Esencial de 4</a>, el
      <a href="/product/paquete-emprendedor-10-imagenes/">Emprendedor de 10</a> o el
      <a href="/product/paquete-profesional-15-imagenes/">Profesional de 20</a>.</p>`,
  },
  {
    slug: 'video-publicitario-1-minuto',
    category: 'contenido',
    price: 50,
    active: true,
    tagline: 'Video de 1 minuto con estructura de venta.',
      descHtml: `
      <p>Un minuto da espacio para explicar un servicio con detalle, mostrar un proceso
      completo o presentar la empresa. Es el formato para la portada de un sitio o para
      una presentación.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Video de hasta 1 minuto</li>
        <li>Guion trabajado con vos antes de editar</li>
        <li>Formatos vertical, cuadrado y horizontal</li>
        <li>Edición con tu marca: logo, colores y tipografía</li>
        <li>Música de librería con licencia para uso comercial</li>
        <li>Textos en pantalla y subtítulos</li>
        <li>Archivo en MP4 listo para subir</li>
        <li>Dos rondas de ajustes</li>
      </ul>
      <p><strong>Notas</strong></p>
      <ul>
        <li>Se edita con el material que aportés. La producción de grabación se cotiza
        aparte.</li>
      </ul>`,
  },
  {
    slug: 'video-publicitario-30-35-segundos',
    category: 'contenido',
    price: 35,
    active: true,
    tagline: 'Video de 30–35 s para campañas.',
      descHtml: `
      <p>Medio minuto alcanza para plantear un problema, mostrar la solución y cerrar con
      una llamada a la acción. Es la duración estándar de un anuncio.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Video de 30 a 35 segundos con estructura de venta</li>
        <li>Formato vertical 9:16 y una versión cuadrada para feed</li>
        <li>Edición con tu marca: logo, colores y tipografía</li>
        <li>Música de librería con licencia para uso comercial</li>
        <li>Textos en pantalla y subtítulos</li>
        <li>Archivo en MP4 listo para subir</li>
        <li>Una ronda de ajustes</li>
      </ul>
      <p><strong>Notas</strong></p>
      <ul>
        <li>Se edita con el material que aportés. La producción de grabación se cotiza
        aparte.</li>
      </ul>`,
  },
  {
    slug: 'videos-3-productos',
    category: 'contenido',
    price: 20,
    active: true,
    tagline: 'Video de 15 s optimizado para reels y ads.',
      descHtml: `
      <p>Un video de 15 segundos, la duración que mejor funciona en reels y en anuncios:
      lo bastante corto para que la gente lo vea completo.</p>
      <p><strong>Incluye</strong></p>
      <ul>
        <li>Video de 15 segundos en formato vertical 9:16</li>
        <li>Edición con tu marca: logo, colores y tipografía</li>
        <li>Música de librería con licencia para uso comercial</li>
        <li>Textos en pantalla</li>
        <li>Archivo en MP4 listo para subir</li>
        <li>Una ronda de ajustes</li>
      </ul>
      <p><strong>Notas</strong></p>
      <ul>
        <li>Se edita a partir del material que aportés, fotos o clips. Si hay que producir
        la grabación, se cotiza aparte.</li>
      </ul>
      <p>Para contar algo más largo están las versiones de
      <a href="/product/video-publicitario-30-35-segundos/">30 segundos</a> y de
      <a href="/product/video-publicitario-1-minuto/">1 minuto</a>.</p>`,
  },

  // ── Retirados del catálogo ──────────────────────────────────────────────────
  // Esta guía es un infoproducto que no encaja con los servicios que se ofrecen
  // hoy. Se deja en `false`: la página no se genera y /product/<slug>/ redirige a
  // la tienda, así que la URL que Google tenía indexada no queda en 404.
  {
    slug: 'guia-pro-proteccion-total-de-instagram-y-facebook-2026',
    category: 'presencia',
    price: 10,
    active: false,
  },
];

export function itemsOf(categoryId: string): ShopItem[] {
  return items.filter((i) => i.active && i.category === categoryId);
}

export const activeItems = items.filter((i) => i.active);
export const retiredSlugs = items.filter((i) => !i.active).map((i) => i.slug);
