/**
 * Catálogo de servicios.
 *
 * El contenido de los servicios heredados del WooCommerce original —textos largos
 * e imágenes— sale de `products.json`. El orden, las categorías, qué se sigue
 * ofreciendo y los servicios agregados después se definen en `shop.ts`, que es el
 * archivo pensado para editar a mano.
 *
 * Sobre los precios: el catálogo ya no publica montos. Cada proyecto tiene un
 * alcance distinto y un precio de lista obliga a inventar un promedio que a unos
 * les queda caro y a otros barato; además, el WooCommerce arrastraba "ofertas"
 * con precio tachado que llevaban meses sin cambiar. Todo se cotiza por WhatsApp.
 *
 * El campo `price` se mantiene en el modelo por si alguna vez se quiere volver a
 * publicar precios en parte del catálogo: `products.ts` y las plantillas ya saben
 * mostrarlo cuando no es `null`.
 */
import raw from './products.json';
import { items as shopItems, type ShopItem } from './shop';
import { wa } from './site';

export interface Product {
  slug: string;
  title: string;
  sku: string;
  /** Precio en USD. Hoy siempre `null`: el catálogo cotiza caso por caso. */
  price: number | null;
  unit: 'once' | 'month';
  /** Etiqueta lista para mostrar: "$450", "$38 / mes" o "a cotizar". */
  priceLabel: string;
  category: string;
  recommended: boolean;
  tagline: string;
  highlights: string[];
  image: string;
  imageSmall: string;
  shortDesc: string;
  descHtml: string;
  metaTitle: string;
  metaDesc: string;
}

/** Correcciones de acentuación en títulos. El contenido no cambia. */
const TITLE_FIXES: Record<string, string> = {
  'firma-para-correo-electronico': 'Firma para Correo Electrónico',
  'guia-pro-proteccion-total-de-instagram-y-facebook-2026':
    'GUÍA PRO: Protección Total de Instagram y Facebook (2026)',
  'pagina-web-tienda-online-con-carrito': 'Página Web + Tienda Online',
  'pagina-web-profesional-sin-carrito-de-compras': 'Página Web Profesional',
  'tarjeta-de-presentacion-digital-para-eventos-con-qr':
    'Tarjeta de Presentación Digital con QR',
  'videos-3-productos': 'Video Publicitario 15 segundos',
  'paquete-profesional-15-imagenes': 'Paquete Profesional (20 imágenes)',
};

/**
 * Frases de precio y de medio de pago que venían incrustadas en las descripciones
 * de WooCommerce. Ya no corresponden: el catálogo no publica montos y el cobro es
 * por SINPE Móvil o transferencia, no con tarjeta ni PayPal.
 */
const OBSOLETE = [
  /Se paga con\s*(?:<strong>)?\s*tarjeta[^.<]*(?:<\/strong>)?\s*\.?/gi,
  /Pago (?:en USD )?con tarjeta(?: de cr[ée]dito)?(?:\/d[ée]bito)?(?: o PayPal)?\s*\.?/gi,
  /Precio en USD\.\s*/gi,
  /Pago con tarjeta o PayPal\.?/gi,
  /Pago mensual en USD\.?/gi,
  /USD \+ IVA\.?/gi,
  /\bUSD\.\s*(?=<|$)/gi,
];

/** Limpia el HTML que arrastra WooCommerce/Gutenberg y las frases obsoletas. */
function cleanHtml(html: string): string {
  let out = html.replace(/\sdata-(?:start|end)="[^"]*"/g, '');
  for (const re of OBSOLETE) out = out.replace(re, '');
  return out
    .replace(/<strong>\s*<\/strong>/g, '')
    .replace(/<li>\s*(?:<p>\s*<\/p>\s*)?<\/li>/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html: string): string {
  return cleanHtml(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function priceLabel(price: number | null, unit: 'once' | 'month'): string {
  if (price === null) return 'a cotizar';
  return unit === 'month' ? `$${price} / mes` : `$${price}`;
}

/** Título para <title>: se añade marca solo si cabe en los ~70 caracteres de Google. */
function buildMetaTitle(title: string): string {
  for (const suffix of [' — HacksinCodigos Costa Rica', ' — HacksinCodigos']) {
    if (title.length + suffix.length <= 70) return title + suffix;
  }
  return title;
}

function buildMetaDesc(title: string, shortDesc: string): string {
  const base = shortDesc.length > 20 ? shortDesc : `${title}.`;
  let desc = `${base} Cotización sin compromiso por WhatsApp — HacksinCodigos, Costa Rica.`;
  if (desc.length > 165) desc = `${base.slice(0, 95).trim()}… Cotizá por WhatsApp con HacksinCodigos.`;
  return desc;
}

const rawBySlug = new Map((raw as any[]).map((p) => [p.slug, p]));

/**
 * Un servicio puede venir del WooCommerce original (`products.json`) o estar
 * definido por completo en `shop.ts`. Lo segundo es el camino para los servicios
 * nuevos: basta con darles `title` y `descHtml`.
 */
function build(cfg: ShopItem): Product {
  const p = rawBySlug.get(cfg.slug);
  const title = cfg.title ?? TITLE_FIXES[cfg.slug] ?? p?.title ?? cfg.slug;
  const shortDesc = cfg.tagline ?? stripTags(p?.shortDescHtml || '');
  const unit = cfg.unit ?? 'once';
  return {
    slug: cfg.slug,
    title,
    sku: p?.sku || '',
    price: cfg.price,
    unit,
    priceLabel: priceLabel(cfg.price, unit),
    category: cfg.category,
    recommended: Boolean(cfg.recommended),
    tagline: shortDesc,
    highlights: cfg.highlights ?? [],
    image: `/images/productos/${cfg.slug}.webp`,
    imageSmall: `/images/productos/${cfg.slug}-400.webp`,
    shortDesc,
    descHtml: cleanHtml(cfg.descHtml ?? p?.descHtml ?? p?.shortDescHtml ?? ''),
    metaTitle: buildMetaTitle(title),
    metaDesc: buildMetaDesc(title, shortDesc),
  };
}

/** Solo lo que se sigue ofreciendo, en el orden definido en shop.ts. */
export const products: Product[] = shopItems.filter((i) => i.active).map(build);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsOf(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

/**
 * Enlace de WhatsApp para cotizar. Acepta un servicio o un texto suelto, para que
 * el mensaje se arme en un solo lugar y no se repita en cada plantilla.
 */
export function waFor(target: Product | string): string {
  if (typeof target === 'string') return wa(target);
  return wa(`Hola, quiero cotizar ${target.title}. ¿Me pasan más información?`);
}
