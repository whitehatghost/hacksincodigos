/**
 * Catálogo de la tienda, extraído de los 17 productos reales de WooCommerce.
 *
 * Los precios, SKUs, descripciones e imágenes son los publicados hoy en
 * hacksincodigos.com — no hay nada inventado.
 *
 * Sobre el checkout: en el sitio en WordPress las páginas /cart/ y /checkout/
 * devuelven 404, así que el botón "Add to cart" no completaba ninguna compra.
 * En la versión estática el pedido se cierra por WhatsApp, que es el canal que
 * el negocio ya usa en todo el sitio. Ver CLOUDFLARE-DEPLOY.md si en el futuro
 * se quiere pago con tarjeta (Stripe Payment Links es la vía más directa).
 */
import raw from './products.json';

export interface Product {
  slug: string;
  title: string;
  sku: string;
  price: string | null;
  regularPrice: string | null;
  onSale: boolean;
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
  'pagina-web-tienda-online-con-carrito': 'Página Web + Tienda Online (con carrito)',
  'tarjeta-de-presentacion-digital-para-eventos-con-qr':
    'Tarjeta de Presentación Digital para Eventos con QR',
};

/**
 * Limpia el HTML que arrastra WooCommerce/Gutenberg: atributos `data-start` y
 * `data-end` del editor, y párrafos vacíos. Mantiene el texto intacto.
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

/** Título para <title>: se le añade marca solo si cabe en los ~70 caracteres que muestra Google. */
function buildMetaTitle(title: string): string {
  for (const suffix of [' — Tienda HacksinCodigos Costa Rica', ' — HacksinCodigos Costa Rica', ' — HacksinCodigos']) {
    if (title.length + suffix.length <= 70) return title + suffix;
  }
  return title;
}

/**
 * Meta description: parte de la descripción corta real del producto y la completa
 * con el contexto del negocio hasta entrar en el rango que Google muestra completo.
 */
function buildMetaDesc(title: string, shortDesc: string, price: string | null): string {
  const base = shortDesc.length > 20 ? shortDesc : `${title}.`;
  const priceBit = price ? ` Precio: $${price} USD.` : '';
  let desc = `${base}${priceBit} Servicio de HacksinCodigos en Costa Rica — pedilo por WhatsApp.`;
  if (desc.length > 165) desc = `${base.slice(0, 100).trim()}…${priceBit} HacksinCodigos Costa Rica.`;
  return desc;
}

export const products: Product[] = (raw as any[]).map((p) => {
  const title = TITLE_FIXES[p.slug] ?? p.title;
  const shortDesc = stripTags(p.shortDescHtml || '');
  const price = p.price ?? null;
  return {
    slug: p.slug,
    title,
    sku: p.sku || '',
    price,
    regularPrice: p.regularPrice ?? null,
    onSale: Boolean(p.onSale),
    image: `/images/productos/${p.slug}.webp`,
    imageSmall: `/images/productos/${p.slug}-400.webp`,
    shortDesc,
    descHtml: cleanHtml(p.descHtml || p.shortDescHtml || ''),
    metaTitle: buildMetaTitle(title),
    metaDesc: buildMetaDesc(title, shortDesc, price),
  };
});

/** Orden de la tienda: primero lo de mayor valor, para que la portada del shop venda. */
const ORDER = [
  'pagina-web-tienda-online-con-carrito',
  'pagina-web-profesional-sin-carrito-de-compras',
  'correo-empresarial-con-dominio',
  'menu-qr-interactivo',
  'mantenimiento-web-corporativo-mensual',
  'mantenimiento-web-pro-mensual',
  'mantenimiento-web-basico-mensual',
  'tarjeta-de-presentacion-digital-para-eventos-con-qr',
  'firma-para-correo-electronico',
  'paquete-profesional-15-imagenes',
  'paquete-emprendedor-10-imagenes',
  'paquete-esencial-4-imagenes',
  'imagen-publicitaria-unica',
  'video-publicitario-1-minuto',
  'video-publicitario-30-35-segundos',
  'videos-3-productos',
  'guia-pro-proteccion-total-de-instagram-y-facebook-2026',
];

export const productsOrdered: Product[] = [...products].sort(
  (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug)
);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
