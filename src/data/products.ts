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
  /** Precio actual en USD, como número. */
  price: number;
  unit: 'once' | 'month';
  /** Etiqueta lista para mostrar: "$450" o "$38 / mes". */
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
 * Limpia el HTML que arrastra WooCommerce/Gutenberg: atributos `data-start` y
 * `data-end` del editor, párrafos vacíos y la nota de precios que ahora vive en
 * un bloque propio de la ficha.
 */
function cleanHtml(html: string): string {
  return html
    .replace(/\sdata-(?:start|end)="[^"]*"/g, '')
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

function priceLabel(price: number, unit: 'once' | 'month'): string {
  return unit === 'month' ? `$${price} / mes` : `$${price}`;
}

/** Título para <title>: se añade marca solo si cabe en los ~70 caracteres que muestra Google. */
function buildMetaTitle(title: string): string {
  for (const suffix of [' — Tienda HacksinCodigos Costa Rica', ' — HacksinCodigos Costa Rica', ' — HacksinCodigos']) {
    if (title.length + suffix.length <= 70) return title + suffix;
  }
  return title;
}

function buildMetaDesc(title: string, shortDesc: string, label: string): string {
  const base = shortDesc.length > 20 ? shortDesc : `${title}.`;
  let desc = `${base} Precio: ${label} USD. Servicio de HacksinCodigos en Costa Rica — pedilo por WhatsApp.`;
  if (desc.length > 165) desc = `${base.slice(0, 95).trim()}… ${label} USD. HacksinCodigos Costa Rica.`;
  return desc;
}

const rawBySlug = new Map((raw as any[]).map((p) => [p.slug, p]));

function build(cfg: ShopItem): Product | null {
  const p = rawBySlug.get(cfg.slug);
  if (!p) return null;
  const title = TITLE_FIXES[cfg.slug] ?? p.title;
  const shortDesc = cfg.tagline ?? stripTags(p.shortDescHtml || '');
  const unit = cfg.unit ?? 'once';
  const label = priceLabel(cfg.price, unit);
  return {
    slug: cfg.slug,
    title,
    sku: p.sku || '',
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
    descHtml: cleanHtml(p.descHtml || p.shortDescHtml || ''),
    metaTitle: buildMetaTitle(title),
    metaDesc: buildMetaDesc(title, shortDesc, label),
  };
}

/** Solo lo que se sigue ofreciendo, en el orden definido en shop.ts. */
export const products: Product[] = shopItems
  .filter((i) => i.active)
  .map(build)
  .filter((p): p is Product => p !== null);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsOf(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}
