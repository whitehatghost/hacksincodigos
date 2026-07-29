# Despliegue en Cloudflare Pages

---

## Configuración exacta del proyecto

En el panel de Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.

| Campo | Valor |
| --- | --- |
| Repositorio | `whitehatghost/hacksincodigos` |
| Rama de producción | `main` |
| Framework preset | `Astro` (o `None`, da igual: los valores de abajo mandan) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(vacío)* |

### Variables de entorno de la build

| Variable | Valor | Para qué |
| --- | --- | --- |
| `NODE_VERSION` | `20` | Sin esto Cloudflare usa una versión antigua de Node y la build falla |

No hace falta ninguna otra. **El sitio no necesita secretos**: no hay APIs, ni base de datos,
ni claves. Si en el futuro se agrega alguna, va como *Secret* en el panel de Cloudflare y
**nunca** en el repositorio (ver `.env.example`).

---

## Qué pasa en cada build

```
npm install
npm run build
   ├─ astro build            → genera dist/
   ├─ @astrojs/sitemap       → dist/sitemap-index.xml + sitemap-0.xml
   └─ scripts/verify-build.mjs (postbuild)
        Revisa las 39 páginas y rechaza la build si encuentra:
          · enlaces internos rotos
          · imágenes que no existen o sin atributo alt
          · falta de title, meta description, canonical o H1
          · títulos o descriptions duplicados
          · JSON-LD inválido
          · algo con pinta de credencial en la salida
```

Si el QA falla, la build se cae y **Cloudflare no publica nada**. El despliegue anterior sigue
sirviéndose. Es intencional: es más seguro no publicar que publicar roto.

---

## Archivos que Cloudflare lee automáticamente

Ambos salen de `public/` y terminan en la raíz de `dist/`.

### `_redirects`

Las redirecciones 301 desde las URLs de WordPress. Ver [URL-MAP.md](URL-MAP.md).

### `_headers`

- **Seguridad:** HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`, `Cross-Origin-Opener-Policy` y una `Content-Security-Policy` que solo
  permite los orígenes que el sitio realmente usa.
- **Caché:** `/_astro/*` y `/fonts/*` con `immutable` a un año (llevan hash o no cambian);
  el HTML con `must-revalidate` para que un despliegue se vea al instante.

> Si algún día se agrega un script de terceros (Google Analytics, Meta Pixel, un chat), hay que
> añadir su dominio a `script-src` y `connect-src` en `_headers`. Si no, el navegador lo
> bloquea. Es la contrapartida de tener una CSP estricta.

---

## Flujo de trabajo recomendado

**Producción** — todo lo que entra a `main` se publica en el dominio.

**Vista previa** — cualquier otra rama genera una URL propia de tipo
`<hash>.hacksincodigos.pages.dev`. Es la forma de revisar un cambio antes de que lo vea nadie:

```bash
git checkout -b cambio-de-precios
# editar src/data/products.json
git commit -am "Actualizar precios de mantenimiento"
git push -u origin cambio-de-precios
```

Cloudflare comenta la URL de vista previa en el pull request.

> **Importante:** las URLs `*.pages.dev` deben quedar fuera del índice de Google. Ver el paso
> correspondiente en [MANUAL-STEP-BY-STEP.md](MANUAL-STEP-BY-STEP.md).

---

## Reversión

Panel de Cloudflare → **Deployments** → elegir un despliegue anterior → **Rollback**.

Es instantáneo y no necesita rebuild. Cada commit de `main` queda guardado como un despliegue
independiente.

---

## Coste

El plan gratuito de Cloudflare Pages cubre de sobra este sitio: builds ilimitadas en cuanto a
tráfico, 500 builds al mes y ancho de banda sin límite. No hay motivo para pagar plan superior
salvo que se necesiten funciones de Workers.

---

## Si más adelante se quiere cobrar con tarjeta

Hoy el pedido se cierra por WhatsApp (en WordPress el checkout devolvía 404, así que no se
perdió ninguna funcionalidad que existiera). Si se quiere pago automático, en orden de esfuerzo:

1. **Stripe Payment Links** — la vía más simple y la recomendada. Se crea un enlace por producto
   en el panel de Stripe y se pega en `src/data/products.json`. El sitio sigue siendo estático,
   sin backend ni mantenimiento. Stripe se encarga del cobro, el recibo y el cumplimiento PCI.
2. **Cloudflare Pages Functions + Stripe Checkout** — si se necesita carrito con varios
   productos. Añade una función serverless en `functions/` y una clave secreta de Stripe como
   variable de entorno de Cloudflare.
3. **Volver a WooCommerce en un servidor aparte** — solo si aparece la necesidad de inventario,
   cupones y envíos con reglas complejas. Implicaría recuperar el mantenimiento de WordPress.

Para el catálogo actual —17 servicios digitales sin stock ni envíos— la opción 1 es
suficiente.

---

## Solución de problemas

| Síntoma | Causa habitual |
| --- | --- |
| La build falla con un error de sintaxis de Node | Falta `NODE_VERSION = 20` en las variables de entorno |
| La build falla en `verify-build.mjs` | El QA encontró algo real. El log dice exactamente qué y en qué página |
| Se publica pero faltan estilos o imágenes | Un recurso quedó fuera de `public/`. Comprobar con `npm run preview` en local |
| Un script de terceros no carga | La CSP de `_headers` lo bloquea. Hay que añadir su dominio |
| Los cambios no se ven | Purgar caché en Cloudflare → Caching → Purge Everything |
