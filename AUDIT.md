# Auditoría del sitio en WordPress y decisiones de migración

Fecha de la auditoría: **28 de julio de 2026**
Fuente de verdad durante la migración: `https://hacksincodigos.com/` (EasyWP / WordPress).

---

## 1. Qué había

| Capa | Detalle |
| --- | --- |
| CMS | WordPress |
| Tema | Astra 4.11.17 |
| Constructor | Elementor 4.2.1 |
| Tienda | WooCommerce 10.7.0 |
| SEO | Rank Math |
| Otros | Akismet, jQuery 3.7.1 + jquery-migrate |
| Servidor | nginx, con caché de página (`x-cacheable: YES`) |

**Hallazgo clave:** la portada no estaba construida con Elementor. Era un documento HTML
completo —con su propio `<style>`, su `<body>` y hasta su `</html>`— pegado dentro de un widget
HTML de Elementor. El CSS de ese bloque incluía `.site-header, #masthead { display: none }`, es
decir, ocultaba el tema Astra por completo.

En la práctica: **el sitio visible era código a mano; WordPress solo lo servía**. Esto es lo que
hizo que la migración a estático fuera directa y sin pérdida de fidelidad.

---

## 2. Inventario de URLs

Rastreo completo: **194 archivos descargados, 25 páginas HTML, 165 recursos**.

| URL | Qué era | Destino |
| --- | --- | --- |
| `/` | Portada de una sola página con anclas | Se conserva |
| `/shop/` | Listado de WooCommerce (2 páginas) | Se conserva, ahora en una sola página |
| `/product/<slug>/` × 17 | Fichas de producto | Se conservan las 17 |
| `/shop/page/2/` | Paginación | 301 → `/shop/` |
| `/product-category/uncategorized/` | Categoría vacía de WooCommerce | 301 → `/shop/` |
| `/sitemap_index.xml` y sus hijos | Sitemaps de Rank Math | 301 → `/sitemap-index.xml` |

Detalle completo y razonado en [URL-MAP.md](URL-MAP.md).

---

## 3. Funcionalidades encontradas y qué se hizo con cada una

| Funcionalidad | Estado en WordPress | En la versión nueva |
| --- | --- | --- |
| Navegación con anclas | Funciona | Igual, más `Tienda` y `Blog` como páginas |
| Menú móvil a pantalla completa | **Roto** (ver §4) | Corregido |
| Selector de 9 idiomas | Funciona | Igual, con el español tomado del HTML |
| Escena 3D de Spline en el hero | Funciona | Igual |
| Fondo de partículas (tsParticles) | Funciona | Igual |
| Efecto glitch en el H1 | Funciona | Igual |
| Máquina de escribir | Funciona | Igual |
| Contadores animados | Funciona | Igual |
| Carrusel de testimonios | Funciona | Igual |
| Portafolio con arrastre horizontal | Funciona | Igual, más enlace a cada caso |
| Acordeón de FAQ | Funciona | Igual |
| Inclinación 3D de las tarjetas | Funciona | Igual |
| Cursor personalizado | Funciona | Igual |
| Formulario → WhatsApp | Funciona | Igual |
| Botón flotante de WhatsApp | Funciona | Igual |
| Carrito y checkout de WooCommerce | **Roto** (ver §4) | Reemplazado por pedido vía WhatsApp |
| Comentarios / reseñas de producto | Habilitado, sin uso | Retirado |
| Analítica / tracking | **No había ninguna** | Sigue sin haber (ver SEO-MANUAL-ACTIONS.md) |

---

## 4. Defectos encontrados en el sitio en producción

Todos verificados sobre el HTML/CSS/JS servido por hacksincodigos.com.

### 4.1 El menú móvil solo mostraba 3 de 7 enlaces — **crítico**

El CSS declaraba la animación de entrada únicamente para
`.menu-item:nth-child(2)`, `(3)` y `(4)`. Como el primer hijo del contenedor es la etiqueta
`// Navegación`, esos selectores cubren apenas los tres primeros enlaces. Del cuarto en adelante
(`Blog`, `FAQ`, `Contacto`, `WhatsApp`) los elementos se quedaban en `opacity: 0`
permanentemente. En celular no había forma de llegar a Contacto desde el menú.

**Corregido** en `src/styles/pages.css`, con el mismo escalonado de 70 ms extendido a todos los
ítems, más `overflow-y: auto` para pantallas bajas.

### 4.2 El menú móvil no se cerraba al tocar un enlace

El JavaScript escuchaba `.menu-link`, clase que no existe en el marcado (los enlaces usan
`.menu-item`). Al tocar una opción el menú quedaba abierto tapando la sección de destino.

**Corregido** en `src/scripts/site.js`.

### 4.3 El sitio arrancaba en inglés

`var savedLang = 'en';` era el valor por defecto. En la primera visita se aplicaba inglés de
inmediato y solo se corregía si una llamada a `ip-api.com` respondía a tiempo. Si esa petición
fallaba o el usuario tenía bloqueadores, un visitante costarricense veía el sitio en inglés. El
`<html>` se servía además como `lang="en-US"`.

**Corregido**: el idioma por defecto es `es-CR`, coincide con el HTML servido y la detección usa
`navigator.language` sin llamar a terceros.

### 4.4 Código de depuración en producción

```js
if (lang === 'en' && t && t.blog1_title) { document.title = 'BLOG OK: ' + t.blog1_title; }
blogEl.style.outline = '2px solid lime';
```

El título de la pestaña se convertía en `BLOG OK: …` para visitantes en inglés, y el titular de
la sección Blog llevaba un contorno verde lima. **Eliminado.**

### 4.5 El HTML indexado no era el texto que veía el usuario

El motor i18n reescribía cada elemento `data-i18n` al cargar, incluido el español. Las cadenas
en español de la tabla eran versiones abreviadas del texto del HTML, así que Google indexaba un
párrafo y el visitante leía otro más corto.

**Corregido**: el HTML es la única fuente del español; la tabla i18n solo traduce.

### 4.6 Enlaces rotos

| Enlace | Dónde | Resultado |
| --- | --- | --- |
| `Política de privacidad` | Pie de página | `href="#"` — no iba a ninguna parte |
| `Términos de servicio` | Pie de página | `href="#"` — no iba a ninguna parte |
| `/og-image.jpg` | Metadatos | 404 |
| `/en/`, `/fr/`, `/pt/`, `/de/`, `/ja/`, `/zh/`, `/ru/`, `/zh-tw/` | Selector de idioma | 404 |

**Corregido**: se escribieron las dos páginas legales, se generó la imagen Open Graph a partir
del logo de la marca y las rutas de idioma tienen redirección.

### 4.7 El checkout de WooCommerce no existía

`/cart/`, `/carrito/`, `/checkout/`, `/finalizar-compra/`, `/mi-cuenta/` y `/my-account/`
devolvían **404**. El botón `Add to cart` de las 17 fichas no llevaba a ninguna compra.

**Decisión:** reconstruir la tienda como catálogo estático con pedido por WhatsApp, que es el
canal que el negocio ya usa en todo el sitio. No se pierde ninguna funcionalidad que existiera —
la compra en línea ya estaba caída. Para aceptar tarjeta más adelante, ver
[CLOUDFLARE-DEPLOY.md](CLOUDFLARE-DEPLOY.md).

### 4.8 La tienda estaba huérfana

El tema Astra estaba oculto por CSS, así que ningún enlace del sitio visible llevaba a `/shop/`
ni a las fichas de producto. Las 17 páginas existían y estaban en el sitemap, pero no se podía
llegar a ellas navegando.

**Corregido**: `Tienda` entra en la navegación principal y en el pie de página.

### 4.9 Interfaz de la tienda en inglés

`Add to cart`, `Related products`, `Reviews`, `Uncategorized`, `Sale!` — el sitio de una empresa
costarricense mostraba la tienda en inglés. **Corregido**: toda la tienda está en español.

---

## 5. Rendimiento: qué se quitó

El HTML de la portada pesaba **321 kB** y arrastraba:

- `astra` (tema completo, CSS + JS)
- `elementor` frontend
- `woocommerce` — CSS de layout, smallscreen, general, más `add-to-cart.js`, `js.cookie`,
  `woocommerce.js`, `jquery-blockui`
- `jquery` 3.7.1 + `jquery-migrate`
- `wp-emoji`
- Google Fonts **Roboto** y **Roboto Slab** con los 18 pesos cada una — ninguna de las dos se
  usa en el diseño

Nada de eso era necesario para renderizar la página visible. Todo fuera.

Se conservan los dos recursos externos que sí construyen el diseño: `tsparticles` y el visor de
Spline. Las tipografías que el diseño sí usa (Space Grotesk, Inter, JetBrains Mono) pasaron a
estar autoalojadas.

---

## 6. Estado del SEO antes de la migración

| Señal | Antes | Después |
| --- | --- | --- |
| `<html lang>` | `en-US` | `es-CR` |
| `og:locale` | `en_US` | `es_CR` |
| Título de portada | `Inicio - Hacksincodigos` | Descriptivo, con la propuesta de valor |
| Meta description | Presente en portada | Única en las 39 páginas |
| Canonical | Presente | Presente |
| Imagen Open Graph | Rota (404) | Generada desde la marca |
| Schema | `Organization` + `LocalBusiness` (Rank Math + bloque manual) | `ProfessionalService`, `WebSite`, `WebPage`, `Service`, `Product`, `BreadcrumbList`, `FAQPage`, `BlogPosting`, `ItemList` |
| Sitemap | Rank Math, 18 URLs | Generado, 38 URLs indexables |
| robots.txt | 3 líneas | Con sitemap y bloqueo de restos de WordPress |
| Páginas indexables | 18 | 38 |
| Enlazado interno | Casi nulo (tienda huérfana) | Home → servicios → proyectos → tienda → blog |
| Autor declarado | `azureluis` | La organización |

---

## 7. Seguridad

- **No se encontró ninguna credencial, token ni clave de API** en el HTML, el CSS ni el JS del
  sitio en producción.
- WordPress exponía `/wp-json/`, `/xmlrpc.php` y `/wp-login.php`. En un sitio estático esa
  superficie de ataque desaparece por completo: no hay panel de administración, ni base de
  datos, ni plugins que actualizar.
- Se añadieron cabeceras que el sitio anterior no tenía: `Content-Security-Policy`,
  `Permissions-Policy` y `Cross-Origin-Opener-Policy`.
- Se eliminó la llamada a `ip-api.com`, un tercero que recibía la IP de cada visitante nuevo.

---

## 8. Decisión de arquitectura

**Astro con salida estática**, desplegado en Cloudflare Pages.

Por qué encaja:

- La portada ya era HTML escrito a mano; no hay nada dinámico que preservar.
- Los 17 productos y los 6 proyectos son datos que cambian poco: perfectos para generar en la
  build.
- Astro entrega HTML sin JavaScript de framework. Todo el JS que se envía es el del propio
  sitio, el mismo de antes.
- Cloudflare Pages sirve `dist/` desde su red global con `_headers` y `_redirects` nativos.
- El formato de URL `directory` con barra final reproduce exactamente las rutas de WordPress.

Lo que se descartó: Next.js y React añadían un framework en el cliente sin ninguna necesidad
funcional; HTML plano sin generador habría dejado 17 fichas de producto copiadas a mano.
