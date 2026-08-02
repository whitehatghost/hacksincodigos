/**
 * Catálogo de la tienda.
 *
 * Los textos largos ("Incluye", "No incluye", "Notas") y las imágenes vienen de
 * `products.json`, la extracción del WooCommerce original. Los precios, el orden,
 * las categorías y qué se sigue ofreciendo se definen en `shop.ts`, que es el
 * archivo pensado para editar a mano.
 *
 * Sobre los precios: se muestra un solo precio, el actual. El WooCommerce tenía
 * varios servicios marcados como "oferta" con un precio tachado que llevaba meses
 * sin cambiar — un descuento permanente no es un descuento y resta credibilidad.
 *
 * Sobre el checkout: en el sitio en WordPress las páginas /cart/ y /checkout/
 * devolvían 404, así que el botón "Add to cart" no completaba ninguna compra. El
 * pedido se cierra por WhatsApp, que es el canal que el negocio ya usa en todo el
 * sitio. Ver CLOUDFLARE-DEPLOY.md para activar pago con tarjeta.
 */
import raw from './products.json';
import { items as shopItems, type ShopItem } from './shop';

export interface Product {
  slug: string;
  title: string;
  sku: string;
  /** Precio actual en USD. `null` = se cotiza según el caso. */
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
 * Frases de medio de pago que venían incrustadas en las descripciones de
 * WooCommerce y que ya no corresponden: el cobro es por SINPE Móvil o
 * transferencia, no con tarjeta ni PayPal. La información de pago vive ahora en
 * un solo lugar (`payment` en site.ts) y se muestra en su propio bloque, así que
 * acá simplemente se eliminan en vez de duplicarlas mal.
 */
const OBSOLETE_PAYMENT = [
  /Se paga con\s*(?:<strong>)?\s*tarjeta[^.<]*(?:<\/strong>)?\s*\.?/gi,
  /Pago (?:en USD )?con tarjeta(?: de cr[ée]dito)?(?:\/d[ée]bito)?(?: o PayPal)?\s*\.?/gi,
  /Precio en USD\.\s*/gi,
  /Pago con tarjeta o PayPal\.?/gi,
];

/**
 * Limpia el HTML que arrastra WooCommerce/Gutenberg: atributos `data-start` y
 * `data-end` del editor, párrafos vacíos y las frases de pago obsoletas.
 */
function cleanHtml(html: string): string {
  let out = html.replace(/\sdata-(?:start|end)="[^"]*"/g, '');
  for (const re of OBSOLETE_PAYMENT) out = out.replace(re, '');
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

/** Título para <title>: se añade marca solo si cabe en los ~70 caracteres que muestra Google. */
function buildMetaTitle(title: string): string {
  for (const suffix of [' — Tienda HacksinCodigos Costa Rica', ' — HacksinCodigos Costa Rica', ' — HacksinCodigos']) {
    if (title.length + suffix.length <= 70) return title + suffix;
  }
  return title;
}

function buildMetaDesc(title: string, shortDesc: string, price: number | null, label: string): string {
  const base = shortDesc.length > 20 ? shortDesc : `${title}.`;
  const precio = price === null ? 'Cotización sin compromiso.' : `Precio: ${label} USD.`;
  let desc = `${base} ${precio} Servicio de HacksinCodigos en Costa Rica — pedilo por WhatsApp.`;
  if (desc.length > 165) desc = `${base.slice(0, 95).trim()}… ${precio} HacksinCodigos Costa Rica.`;
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
  const label = priceLabel(cfg.price, unit);
  return {
    slug: cfg.slug,
    title,
    sku: p?.sku || '',
    price: cfg.price,
    unit,
    priceLabel: label,
    category: cfg.category,
    recommended: Boolean(cfg.recommended),
    tagline: shortDesc,
    highlights: cfg.highlights ?? [],
    image: `/images/productos/${cfg.slug}.webp`,
    imageSmall: `/images/productos/${cfg.slug}-400.webp`,
    shortDesc,
    descHtml: cleanHtml(cfg.descHtml ?? p?.descHtml ?? p?.shortDescHtml ?? ''),
    metaTitle: buildMetaTitle(title),
    metaDesc: buildMetaDesc(title, shortDesc, cfg.price, label),
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
