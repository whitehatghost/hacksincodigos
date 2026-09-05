/**
 * Proyectos reales del portafolio.
 *
 * REGLA: aquí solo va información verificable — nombre del cliente, sector, el tipo de
 * sitio que se construyó y las funcionalidades observables en el sitio publicado.
 * NO se incluyen métricas, porcentajes de aumento de ventas, ni testimonios inventados.
 * `liveUrl` se deja en null cuando el dominio no respondió en la última verificación.
 */

export interface Project {
  slug: string;
  name: string;
  domain: string;
  /** null = el dominio no respondió al verificar; no se enlaza para no dejar links rotos. */
  liveUrl: string | null;
  industry: string;
  tags: string[];
  /** Resumen corto — es el texto que ya usaba la home. */
  summary: string;
  objective: string;
  /** Qué se construyó. Hechos observables, no resultados. */
  scope: string[];
  tech: string[];
  /** Servicios de HacksinCodigos relacionados, para enlazado interno. */
  relatedServices: string[];
  /** Gradiente del thumb, tal como en la home actual. */
  thumbGradient?: string;
  metaTitle: string;
  metaDesc: string;
}

export const projects: Project[] = [
  {
    slug: 'grupo-novo',
    name: 'Grupo Novo',
    domain: 'gruponovocr.com',
    liveUrl: 'https://gruponovocr.com',
    industry: 'Andamios y accesorios para construcción',
    tags: ['E-commerce', 'CRM', 'Andamios', 'WooCommerce'],
    summary: 'Tienda en línea de andamios y accesorios para construcción, con venta y alquiler de equipo, y un CRM empresarial para la gestión comercial.',
    objective:
      'Llevar a internet el catálogo de andamios, accesorios y materiales de Grupo Novo, y permitir que contratistas y maestros de obra consulten y pidan en línea sin depender del teléfono o de visitas al local. Después, ordenar la gestión comercial con un CRM propio: clientes, cotizaciones y seguimiento en un solo sistema.',
    scope: [
      'Tienda en línea con el catálogo organizado por categoría: andamios, accesorios, alambres, mallas y geotextiles',
      'Fichas de producto con imagen, descripción y precio',
      'Carrito de compras y consulta directa por WhatsApp en cada producto',
      'Catálogo descargable para compartir con quien aprueba la compra',
      'Diseño responsive orientado a consulta desde el celular en obra',
      'Estructura preparada para búsqueda en Google',
      'CRM empresarial para centralizar clientes, cotizaciones y seguimiento comercial',
      'Acceso por usuario con permisos según el rol dentro de la empresa',
    ],
    tech: ['WordPress', 'WooCommerce', 'CRM a la medida', 'Diseño responsive'],
    relatedServices: [
      '/tiendas-online-costa-rica/',
      '/software-a-la-medida-costa-rica/',
      '/desarrollo-web-costa-rica/',
    ],
    metaTitle: 'Grupo Novo — E-commerce y CRM empresarial | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: tienda en línea con catálogo de productos de construcción y CRM empresarial para Grupo Novo, desarrollados por HacksinCodigos en Costa Rica.',
  },
  {
    slug: 'redes-deportivas-cr',
    name: 'Redes Deportivas CR',
    domain: 'redesdeportivascr.com',
    liveUrl: 'https://redesdeportivascr.com',
    industry: 'Fabricación de redes deportivas y de protección',
    tags: ['Sitio estático', 'SEO local', 'Fabricación'],
    summary:
      'Sitio de una fábrica nacional de redes a la medida, con una página por tipo de red y cotización directa por WhatsApp.',
    objective:
      'Que quien busca en Google "redes de fútbol", "redes de protección para balcón" o "trampolín de catamarán" llegue a la página de ese producto en concreto y pueda cotizar en el momento, sin formularios de por medio.',
    scope: [
      'Una página por tipo de red — fútbol, baloncesto, tenis y pádel, voleibol, golf, catamarán, protección, descanso y glamping, perimetrales y mascotas',
      'Especificaciones de material, calibre y luz de malla en cada página',
      'Galería de trabajos instalados y sección de proyectos',
      'Cotización por WhatsApp desde cualquier página, con el mensaje ya escrito',
      'Blog y página de contacto',
      'Schema.org de negocio local y estructura orientada a búsqueda por producto',
    ],
    tech: ['Sitio estático', 'SEO local', 'Schema.org', 'Diseño responsive'],
    relatedServices: ['/paginas-web-costa-rica/', '/seo-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#04140a,#0d1117)',
    metaTitle: 'Redes Deportivas CR — Sitio de fábrica de redes | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: sitio web para una fábrica costarricense de redes deportivas y de protección a la medida, con una página por tipo de red y cotización por WhatsApp.',
  },
  {
    slug: 'grupo-novo-crm',
    name: 'CRM de Grupo Novo',
    domain: 'Sistema interno',
    // Un CRM es de uso interno: no hay URL pública que enseñar, y no se publican
    // capturas con datos de clientes del cliente.
    liveUrl: null,
    industry: 'Andamios y accesorios para construcción',
    tags: ['CRM', 'Software a la medida', 'Andamios'],
    summary:
      'CRM empresarial para un distribuidor de andamios: clientes, cotizaciones y seguimiento comercial en un solo sistema.',
    objective:
      'Sacar la información comercial de las agendas personales y las conversaciones sueltas, y ponerla donde la empresa la pueda consultar: quién es cada cliente, qué se le cotizó, en qué quedó y a quién le toca darle seguimiento.',
    scope: [
      'Base única de clientes y contactos, con el historial de cada cuenta',
      'Registro de cotizaciones y su desenlace',
      'Seguimientos asignados a una persona y con fecha',
      'Acceso por usuario con permisos según el rol',
      'Reportes de la actividad comercial',
    ],
    tech: ['Software a la medida', 'Base de datos', 'Acceso por rol'],
    relatedServices: ['/software-a-la-medida-costa-rica/', '/desarrollo-web-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#04141a,#0d1117)',
    metaTitle: 'CRM de Grupo Novo — Software a la medida | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: CRM empresarial a la medida para Grupo Novo, distribuidor de andamios en Costa Rica, con clientes, cotizaciones y seguimiento comercial.',
  },
  {
    slug: 'la-casita-del-bebe',
    name: 'La Casita del Bebé',
    domain: 'lacasitadelbebecr.com',
    liveUrl: 'https://lacasitadelbebecr.com',
    industry: 'Retail — productos para bebé',
    tags: ['E-commerce', 'Tienda', 'Pagos online'],
    summary: 'Tienda online especializada en productos para bebés con pagos integrados.',
    objective:
      'Abrir un canal de venta en línea para una tienda de productos de bebé, con carrito y pagos, además de su punto de venta físico.',
    scope: [
      'Tienda en línea con carrito de compras',
      'Integración de pagos en línea',
      'Catálogo por categorías de producto',
      'Diseño mobile-first para compra desde el celular',
    ],
    tech: ['WordPress', 'WooCommerce', 'Pasarela de pagos'],
    relatedServices: ['/tiendas-online-costa-rica/', '/desarrollo-web-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#1a0a2e,#0d1117)',
    metaTitle: 'La Casita del Bebé — Tienda online en Costa Rica | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: tienda en línea con carrito y pagos para La Casita del Bebé, desarrollada por HacksinCodigos en Costa Rica.',
  },
  {
    slug: 'ticos-home-remodeling',
    name: "Tico's Home Remodeling",
    domain: 'ticoshomeremodeling.com',
    liveUrl: 'https://ticoshomeremodeling.com',
    industry: 'Remodelación y construcción residencial',
    tags: ['Astro', 'Sitio estático', 'Construcción'],
    summary:
      'Sitio de remodelación y drywall en Connecticut, construido como sitio estático para que cargue rápido y posicione en búsquedas locales.',
    objective:
      'Dar a una empresa de remodelación en Connecticut un sitio que explique sus servicios y consiga solicitudes de presupuesto, con la velocidad y la estructura que Google necesita para mostrarla en búsquedas locales de su zona.',
    scope: [
      'Sitio estático generado con Astro: HTML ya construido, sin base de datos',
      'Páginas de servicio por especialidad — drywall, pintura, pisos y azulejo',
      'Galería de proyectos terminados',
      'Solicitud de presupuesto sin costo desde cualquier página',
      'SEO local orientado a Connecticut y Nueva Inglaterra',
    ],
    tech: ['Astro', 'Sitio estático', 'SEO local', 'Diseño responsive'],
    relatedServices: ['/desarrollo-web-costa-rica/', '/seo-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#1a1408,#0d1117)',
    metaTitle: "Tico's Home Remodeling — Sitio estático en Astro | HacksinCodigos",
    metaDesc:
      'Caso de proyecto: sitio web en Astro para una empresa de remodelación y drywall en Connecticut, desarrollado por HacksinCodigos.',
  },
  {
    slug: 'carlouis',
    name: 'Carlouis',
    domain: 'carlouis.net',
    liveUrl: 'https://carlouis.net',
    industry: 'Alimentos gourmet artesanales',
    tags: ['Rediseño', 'Fotografía', 'Contenido', 'Gourmet'],
    summary: 'Rediseño del sitio, producción de imágenes y contenido para una marca de salsas artesanales gourmet.',
    objective:
      'Dar a una marca de salsas artesanales costarricenses una tienda en línea que transmita el carácter premium del producto.',
    scope: [
      'Rediseño completo del sitio',
      'Producción de imágenes de producto',
      'Contenido editorial: recetarios descargables y páginas de evento',
      'Secciones de cobertura de entrega, puntos de venta y testimonios',
      'Sitio estático y liviano, pensado para consulta desde el celular',
    ],
    tech: ['Sitio estático', 'Fotografía', 'Diseño responsive'],
    relatedServices: ['/tiendas-online-costa-rica/', '/diseno-web-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#1a0f00,#0d1117)',
    metaTitle: 'Carlouis — Rediseño, imágenes y contenido | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: rediseño del sitio, fotografía de producto y contenido para Carlouis, marca de salsas artesanales gourmet en Costa Rica.',
  },
  {
    slug: 'costa-rica-realty-pro',
    name: 'Costa Rica Realty PRO',
    domain: 'costaricarealtypro.com',
    liveUrl: 'https://costaricarealtypro.com',
    industry: 'Bienes raíces',
    tags: ['Real Estate', 'WordPress', 'App de propiedades', 'Inversión'],
    summary: 'Sitio en WordPress para bienes raíces, con una aplicación para publicar y administrar las propiedades en venta.',
    objective:
      'Presentar propiedades y servicios de asesoría inmobiliaria a un público internacional interesado en invertir en Costa Rica, y darle a la empresa una herramienta para mantener el inventario al día sin depender del desarrollador.',
    scope: [
      'Sitio en WordPress administrable por el propio cliente',
      'Aplicación para publicar, editar y retirar propiedades en venta',
      'Área de cliente (Customer Cabinet)',
      'Categorías de propiedad: playa, naturaleza, apartamentos y comercial',
      'Contacto directo para consultas de inversión',
      'Diseño y contenido orientados a comprador internacional',
    ],
    tech: ['WordPress', 'Astra', 'Elementor', 'App de propiedades', 'Diseño responsive'],
    relatedServices: ['/desarrollo-web-costa-rica/', '/seo-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#001a0f,#0d1117)',
    metaTitle: 'Costa Rica Realty PRO — Sitio y app inmobiliaria | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: sitio en WordPress con aplicación para vender propiedades, para una empresa de bienes raíces en Costa Rica. Desarrollado por HacksinCodigos.',
  },
  {
    slug: 'ryv-dental',
    name: 'RyV Dental',
    domain: 'ryvdental.com',
    liveUrl: 'https://ryvdental.com',
    industry: 'Salud — clínica dental en Palmares, Alajuela',
    tags: ['Salud', 'Dental', 'Invisalign', 'Sitio estático'],
    summary:
      'Sitio de una clínica dental familiar en Palmares, con Invisalign al frente y una página propia por especialidad y por especialista.',
    objective:
      'Que una clínica con más de treinta años de trayectoria se vea en internet como se ve en consulta, y que quien busca un tratamiento concreto —ortodoncia invisible, diseño de sonrisa, endodoncia— llegue a la página de ese tratamiento y pueda escribir por WhatsApp.',
    scope: [
      'Sitio estático, sin base de datos que consultar en cada visita',
      'Invisalign como eje de la portada, con el proceso explicado paso a paso',
      'Una página por especialidad — diseño de sonrisa, ortodoncia, botox estético y para bruxismo, cirugía maxilofacial, endodoncia y las demás',
      'Una página por cada profesional del equipo',
      'Solicitud de valoración por WhatsApp desde cualquier página',
      'SEO local orientado a Palmares y la zona de Alajuela',
      'Blog con contenido escrito por nosotros, orientado a la búsqueda previa a elegir clínica',
    ],
    tech: ['Sitio estático', 'SEO local', 'Contenido', 'Diseño responsive'],
    relatedServices: ['/paginas-web-costa-rica/', '/diseno-web-costa-rica/', '/seo-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#0a001a,#0d1117)',
    metaTitle: 'RyV Dental — Sitio web para clínica dental | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: sitio web para RyV Dental, clínica dental en Palmares, Alajuela, con página por especialidad y por especialista. Desarrollado por HacksinCodigos.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
