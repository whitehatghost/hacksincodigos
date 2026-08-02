/**
 * Datos reales del negocio. Única fuente de verdad para NAP, enlaces y schema.
 * NO agregar datos inventados aquí (direcciones, reviews, precios, certificaciones).
 */

export const site = {
  name: 'HacksinCodigos',
  legalName: 'HacksinCodigos',
  url: 'https://hacksincodigos.com',
  locale: 'es-CR',
  lang: 'es-CR',
  country: 'CR',
  countryName: 'Costa Rica',
  description:
    'Desarrollo de páginas web, agentes de IA para WhatsApp, soporte IT remoto, publicidad digital y ciberseguridad en Costa Rica.',
  founded: '2015',
  phone: '+506 8984 0662',
  phoneE164: '+50689840662',
  whatsappNumber: '50689840662',
  instagram: 'https://instagram.com/hacksincodigos',
  instagramHandle: '@hacksincodigos',
  hours: 'Lunes–Viernes · 8am–6pm',
  hoursSchema: 'Mo,Tu,We,Th,Fr 08:00-18:00',
  logo: '/images/logo-hacksincodigos.png',
  ogImage: '/images/og-hacksincodigos.png',
} as const;

/**
 * Cómo cobra HacksinCodigos sus propios servicios.
 *
 * No confundir con las pasarelas de pago que se le pueden montar a un cliente en
 * su tienda online: eso es una capacidad del servicio y se describe en
 * /tiendas-online-costa-rica/. Esto de acá es cómo se paga a HacksinCodigos.
 *
 * Los textos del WooCommerce original decían "tarjeta de crédito/débito o PayPal",
 * que no corresponde a la realidad del negocio.
 */
export const payment = {
  methods: ['SINPE Móvil', 'transferencia bancaria'],
  /** Frase lista para usar en la ficha de servicio y en la tienda. */
  label: 'SINPE Móvil o transferencia bancaria',
  currency: 'USD',
  currencyNote:
    'Los precios están en dólares estadounidenses. El monto en colones se calcula al tipo de cambio del día del pago.',
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function wa(text?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Zonas donde se presta servicio (remoto en todo el país). */
export const areasServed = [
  'San José',
  'Alajuela',
  'Heredia',
  'Cartago',
  'Guanacaste',
  'Puntarenas',
  'Limón',
] as const;

/** Navegación principal. Los anclajes viven en la home; las rutas son páginas reales. */
export const mainNav = [
  { label: 'Servicios', href: '/#servicios', i18n: 'nav_services' },
  { label: 'Cómo trabajamos', href: '/#proceso', i18n: 'nav_process' },
  { label: 'Portafolio', href: '/proyectos/', i18n: 'nav_portfolio' },
  { label: 'Precios', href: '/shop/', i18n: 'nav_shop' },
  { label: 'Blog', href: '/blog/', i18n: 'nav_blog' },
  { label: 'FAQ', href: '/#faq', i18n: 'nav_faq' },
  { label: 'Contacto', href: '/#contacto', i18n: 'nav_contact' },
] as const;
