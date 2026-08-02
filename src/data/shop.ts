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
  },
  {
    slug: 'mantenimiento-web-pro-mensual',
    category: 'mantenimiento',
    price: 68,
    unit: 'month',
    active: true,
    recommended: true,
    tagline: 'Firewall, respaldos diarios y 20 cambios al mes.',
  },
  {
    slug: 'mantenimiento-web-corporativo-mensual',
    category: 'mantenimiento',
    price: 97,
    unit: 'month',
    active: true,
    tagline: 'Prioridad de atención, hardening avanzado y 40 cambios al mes.',
  },

  // ── Presencia digital ───────────────────────────────────────────────────────
  {
    slug: 'correo-empresarial-con-dominio',
    category: 'presencia',
    price: 150,
    active: true,
    tagline: 'Correo con tu dominio, configurado para que no caiga en spam.',
  },
  {
    slug: 'menu-qr-interactivo',
    category: 'presencia',
    price: 65,
    active: true,
    tagline: 'Carta digital para celular, con QR listo para imprimir.',
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
  },
  {
    slug: 'paquete-emprendedor-10-imagenes',
    category: 'contenido',
    price: 90,
    active: true,
    tagline: '10 imágenes para impulsar ventas en redes.',
  },
  {
    slug: 'paquete-esencial-4-imagenes',
    category: 'contenido',
    price: 40,
    active: true,
    tagline: '4 creativos listos para publicar.',
  },
  {
    slug: 'imagen-publicitaria-unica',
    category: 'contenido',
    price: 10,
    active: true,
    tagline: '1 diseño para feed o story.',
  },
  {
    slug: 'video-publicitario-1-minuto',
    category: 'contenido',
    price: 50,
    active: true,
    tagline: 'Video de 1 minuto con estructura de venta.',
  },
  {
    slug: 'video-publicitario-30-35-segundos',
    category: 'contenido',
    price: 35,
    active: true,
    tagline: 'Video de 30–35 s para campañas.',
  },
  {
    slug: 'videos-3-productos',
    category: 'contenido',
    price: 20,
    active: true,
    tagline: 'Video de 15 s optimizado para reels y ads.',
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
