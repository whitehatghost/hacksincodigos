# Mapa de URLs — WordPress → Cloudflare Pages

Objetivo: **que ninguna URL que Google ya conoce termine en 404**.

Las redirecciones viven en [`public/_redirects`](public/_redirects) y Cloudflare Pages las
aplica antes de servir cualquier archivo. Gana la primera regla que coincida.

---

## 1. URLs que se conservan idénticas

Estas son las 19 URLs que estaban en el sitemap de Rank Math. **Todas siguen existiendo con la
misma dirección**, así que no pierden nada de autoridad acumulada.

| URL | Nota |
| --- | --- |
| `/` | Portada |
| `/shop/` | Tienda |
| `/product/pagina-web-tienda-online-con-carrito/` | |
| `/product/pagina-web-profesional-sin-carrito-de-compras/` | |
| `/product/correo-empresarial-con-dominio/` | |
| `/product/menu-qr-interactivo/` | |
| `/product/mantenimiento-web-corporativo-mensual/` | |
| `/product/mantenimiento-web-pro-mensual/` | |
| `/product/mantenimiento-web-basico-mensual/` | |
| `/product/tarjeta-de-presentacion-digital-para-eventos-con-qr/` | |
| `/product/firma-para-correo-electronico/` | |
| `/product/paquete-profesional-15-imagenes/` | |
| `/product/paquete-emprendedor-10-imagenes/` | |
| `/product/paquete-esencial-4-imagenes/` | |
| `/product/imagen-publicitaria-unica/` | |
| `/product/video-publicitario-1-minuto/` | |
| `/product/video-publicitario-30-35-segundos/` | |
| `/product/videos-3-productos/` | |
| `/product/guia-pro-proteccion-total-de-instagram-y-facebook-2026/` | |

Hay una prueba automática que falla si alguna de estas rutas desaparece de `dist/`
(`tests/data.test.mjs`).

---

## 2. URLs que cambian, con redirección 301

| URL anterior | Nueva URL | Por qué |
| --- | --- | --- |
| `/shop/page/2/` | `/shop/` | Los 17 productos ahora caben en una sola página |
| `/product-category/uncategorized/` | `/shop/` | Categoría genérica de WooCommerce, sin contenido propio |
| `/product-category/*`, `/product-tag/*` | `/shop/` | No hay taxonomías reales que preservar |
| `/sitemap_index.xml` | `/sitemap-index.xml` | Nombre del sitemap generado por Astro |
| `/page-sitemap.xml`, `/product-sitemap.xml`, `/main-sitemap.xsl` | `/sitemap-index.xml` | Sitemaps parciales de Rank Math |
| `/feed/`, `/comments/feed/` | `/blog/` | Ya no hay RSS de WordPress |
| `/category/*`, `/tag/*` | `/blog/` | Taxonomías de entradas |
| `/author/*` | `/` | El contenido lo firma la organización, no un usuario |

---

## 3. URLs que ya devolvían 404 y ahora resuelven

Estas nunca existieron o estaban rotas en WordPress. La redirección no recupera SEO —**no
había**— pero evita que alguien con el enlace guardado se estrelle.

| URL | Destino | Estado anterior |
| --- | --- | --- |
| `/cart/`, `/carrito/` | `/shop/` | 404 |
| `/checkout/`, `/finalizar-compra/` | `/shop/` | 404 |
| `/my-account/`, `/mi-cuenta/` | `/shop/` | 404 |
| `/tienda/` | `/shop/` | 404 |
| `/servicios/` | `/paginas-web-costa-rica/` | 404 (el menú apuntaba a `#servicios`) |
| `/portafolio/` | `/proyectos/` | 404 |
| `/contacto/` | `/#contacto` | 404 |
| `/faq/` | `/#faq` | 404 |
| `/en/`, `/fr/`, `/pt/`, `/de/`, `/ja/`, `/zh/`, `/ru/`, `/zh-tw/` | `/` | 404 — el selector de idioma enlazaba a rutas inexistentes |
| `/og-image.jpg` | `/images/og-hacksincodigos.png` | 404 — lo referenciaban los metadatos |

---

## 4. Restos de WordPress

Se redirigen a la portada y además se bloquean en `robots.txt` para que los rastreadores no
gasten presupuesto en ellos.

| Patrón | Destino |
| --- | --- |
| `/wp-admin/*` | `/` |
| `/wp-login.php` | `/` |
| `/wp-content/*` | `/` |
| `/wp-includes/*` | `/` |
| `/wp-json/*` | `/` |
| `/xmlrpc.php` | `/` |

> **Nota sobre `/wp-content/*`:** las imágenes de producto viven ahora en `/images/productos/`.
> Si Google Imágenes tuviera indexada alguna URL bajo `/wp-content/uploads/`, esa imagen pasa a
> redirigir a la portada. Es una pérdida menor y aceptable: no había tráfico de imágenes que
> proteger, y dejar `/wp-content/` abierto habría significado duplicar 114 archivos en el
> repositorio solo por si acaso.

---

## 5. URLs nuevas

No sustituyen a ninguna anterior; amplían la cobertura de búsqueda.

| URL | Intención de búsqueda que atiende |
| --- | --- |
| `/paginas-web-costa-rica/` | "páginas web Costa Rica", "páginas web en Costa Rica" — página principal de servicio |
| `/diseno-web-costa-rica/` | "diseño web Costa Rica" — la parte visual y de marca |
| `/desarrollo-web-costa-rica/` | "desarrollo web Costa Rica" — a medida, sistemas, APIs |
| `/tiendas-online-costa-rica/` | "tiendas online Costa Rica" — e-commerce |
| `/agentes-ia-costa-rica/` | "chatbot WhatsApp Costa Rica" — automatización |
| `/seo-costa-rica/` | "SEO Costa Rica" — posicionamiento |
| `/proyectos/` | Navegación del portafolio |
| `/proyectos/<slug>/` × 6 | Cada caso de cliente |
| `/blog/` | Índice editorial |
| `/blog/<slug>/` × 3 | Los tres artículos que estaban atrapados dentro de la portada |
| `/politica-de-privacidad/` | Reemplaza un `href="#"` roto |
| `/terminos-de-servicio/` | Reemplaza un `href="#"` roto |
| `/404/` | Página de error propia (`noindex`) |

Cada una tiene título, meta description y H1 únicos. El QA de build falla si se duplica alguno.

---

## 6. Qué revisar después del cambio de DNS

En Google Search Console, durante las 4 semanas siguientes:

1. **Cobertura → Páginas.** Que las 19 URLs de la sección 1 sigan indexadas.
2. **Redirecciones.** Que las de la sección 2 aparezcan como "Página con redirección" y no como
   error.
3. **Sitemaps.** Enviar `https://hacksincodigos.com/sitemap-index.xml` y confirmar 38 URLs
   detectadas.
4. **Core Web Vitals.** Los datos de campo tardan ~28 días en reflejar el cambio.
5. **Rendimiento.** Comparar clics e impresiones contra las 4 semanas previas a la migración.
   Una oscilación de ±10 % en las primeras semanas es normal.
