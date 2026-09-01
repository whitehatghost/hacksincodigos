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
    industry: 'Materiales y productos de construcción',
    tags: ['E-commerce', 'CRM', 'Construcción', 'WooCommerce'],
    summary: 'E-commerce industrial con catálogo completo de productos de construcción, y un CRM empresarial para gestionar clientes y cotizaciones.',
    objective:
      'Llevar el catálogo de productos de construcción de Grupo Novo a internet y permitir que sus clientes consulten y pidan en línea, sin depender del teléfono o de visitas al local. Después, ordenar la gestión comercial con un CRM propio: clientes, cotizaciones y seguimiento en un solo sistema.',
    scope: [
      'Tienda en línea con catálogo de productos organizados por categoría',
      'Fichas de producto con imágenes y descripciones',
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
    tags: ['E-commerce', 'Gourmet', 'Artesanal'],
    summary: 'Tienda de productos gourmet artesanales con experiencia premium.',
    objective:
      'Dar a una marca de salsas artesanales costarricenses una tienda en línea que transmita el carácter premium del producto.',
    scope: [
      'Tienda en línea de productos gourmet',
      'Diseño de marca aplicado a la experiencia de compra',
      'Fichas de producto con fotografía de producto',
      'Diseño responsive',
    ],
    tech: ['WordPress', 'WooCommerce', 'Diseño responsive'],
    relatedServices: ['/tiendas-online-costa-rica/', '/diseno-web-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#1a0f00,#0d1117)',
    metaTitle: 'Carlouis — Tienda de salsas artesanales gourmet | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: tienda en línea de salsas artesanales gourmet en Costa Rica, desarrollada por HacksinCodigos.',
  },
  {
    slug: 'costa-rica-realty-pro',
    name: 'Costa Rica Realty PRO',
    domain: 'costaricarealtypro.com',
    liveUrl: 'https://costaricarealtypro.com',
    industry: 'Bienes raíces',
    tags: ['Real Estate', 'Inversión', 'Consultoría'],
    summary: 'Portal inmobiliario de alto nivel para inversión en bienes raíces.',
    objective:
      'Presentar propiedades y servicios de asesoría inmobiliaria a un público internacional interesado en invertir en Costa Rica.',
    scope: [
      'Portal inmobiliario con listado de propiedades',
      'Fichas de propiedad con galería de imágenes',
      'Formularios de contacto para consultas de inversión',
      'Diseño orientado a público internacional',
    ],
    tech: ['WordPress', 'Listados de propiedades', 'Diseño responsive'],
    relatedServices: ['/desarrollo-web-costa-rica/', '/seo-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#001a0f,#0d1117)',
    metaTitle: 'Costa Rica Realty PRO — Portal inmobiliario | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: portal inmobiliario para inversión en bienes raíces en Costa Rica, desarrollado por HacksinCodigos.',
  },
  {
    slug: 'ryv-dental',
    name: 'RyV Dental',
    domain: 'ryvdental.com',
    liveUrl: 'https://ryvdental.com',
    industry: 'Salud — clínica dental',
    tags: ['Salud', 'Dental', 'Invisalign'],
    summary: 'Clínica dental premium con presencia digital profesional y agenda online.',
    objective:
      'Dar a una clínica dental una presencia digital profesional que explique sus tratamientos y facilite que los pacientes soliciten una cita.',
    scope: [
      'Sitio web de clínica dental con sus tratamientos',
      'Solicitud de cita en línea',
      'Secciones de servicios y casos',
      'Diseño responsive y enfocado en conversión',
    ],
    tech: ['WordPress', 'Elementor', 'Diseño responsive'],
    relatedServices: ['/diseno-web-costa-rica/', '/desarrollo-web-costa-rica/'],
    thumbGradient: 'linear-gradient(135deg,#0a001a,#0d1117)',
    metaTitle: 'RyV Dental — Sitio web para clínica dental | HacksinCodigos',
    metaDesc:
      'Caso de proyecto: sitio web con solicitud de cita en línea para la clínica RyV Dental, desarrollado por HacksinCodigos en Costa Rica.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
