/**
 * Constructores de JSON-LD.
 *
 * REGLA: solo datos verificables. No se emite `aggregateRating`, `review`, `address`
 * postal ni `award` porque hoy no existen datos reales que los respalden; emitirlos
 * sería Schema falso y es motivo de acción manual por parte de Google.
 */
import { site, areasServed } from '../data/site';

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

/** La entidad de negocio. Se referencia por @id desde el resto de los bloques. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    alternateName: 'HackSinCodigos',
    url: site.url + '/',
    description: site.description,
    telephone: site.phoneE164,
    foundingDate: site.founded,
    image: new URL(site.logo, site.url).href,
    logo: {
      '@type': 'ImageObject',
      '@id': `${site.url}/#logo`,
      url: new URL(site.logo, site.url).href,
      caption: site.name,
    },
    sameAs: [site.instagram],
    knowsLanguage: ['es', 'en'],
    // Negocio que opera de forma remota en todo el país: se declara el área de
    // servicio, no una dirección física (no hay una dirección pública verificable).
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
      identifier: 'CR',
    },
    serviceArea: areasServed.map((a) => ({
      '@type': 'AdministrativeArea',
      name: a,
      containedInPlace: { '@type': 'Country', name: 'Costa Rica' },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phoneE164,
        contactType: 'customer service',
        areaServed: 'CR',
        availableLanguage: ['Spanish', 'English'],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.url + '/',
    name: site.name,
    description: site.description,
    inLanguage: 'es-CR',
    publisher: { '@id': ORG_ID },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'ItemPage';
}) {
  const url = new URL(opts.path, site.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'es-CR',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).href,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${new URL(opts.path, site.url).href}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Costa Rica' },
    url: new URL(opts.path, site.url).href,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Un proyecto del portafolio: obra creativa cuyo autor es HacksinCodigos. */
export function creativeWorkSchema(opts: {
  name: string;
  description: string;
  path: string;
  clientUrl: string | null;
  industry: string;
  image?: string;
  /**
   * Qué se construyó. No todo proyecto es un sitio web: declarar un CRM interno
   * como `WebSite` es un dato falso en los datos estructurados.
   */
  tipo?: 'WebSite' | 'SoftwareApplication';
}) {
  const url = new URL(opts.path, site.url).href;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': opts.tipo ?? 'WebSite',
    '@id': `${url}#project`,
    name: opts.name,
    description: opts.description,
    creator: { '@id': ORG_ID },
    inLanguage: 'es-CR',
    mainEntityOfPage: url,
  };
  if (opts.clientUrl) schema.url = opts.clientUrl;
  if (opts.image) schema.image = new URL(opts.image, site.url).href;
  return schema;
}

/**
 * Producto de la tienda. Solo se declara `Offer` con el precio real publicado.
 * `availability` no promete stock físico: son servicios digitales bajo pedido.
 */
export function productSchema(opts: {
  name: string;
  description: string;
  path: string;
  price: string | null;
  sku?: string;
  image?: string | null;
}) {
  const url = new URL(opts.path, site.url).href;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: opts.name,
    description: opts.description,
    brand: { '@type': 'Brand', name: site.name },
    url,
  };
  if (opts.sku) schema.sku = opts.sku;
  if (opts.image) schema.image = new URL(opts.image, site.url).href;
  if (opts.price) {
    schema.offers = {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url,
      seller: { '@id': ORG_ID },
    };
  }
  return schema;
}
