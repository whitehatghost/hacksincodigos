# HacksinCodigos.com

Sitio web de **HacksinCodigos** — desarrollo web, agentes de IA para WhatsApp, soporte IT
remoto y ciberseguridad en Costa Rica.

Migrado desde WordPress/EasyWP a un sitio estático en **Astro**, desplegado en
**Cloudflare Pages**.

---

## Arranque rápido

```bash
npm install
npm run dev
```

El sitio queda en <http://localhost:4321>.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera `dist/` y ejecuta el QA automático |
| `npm run preview` | Sirve `dist/` como lo haría Cloudflare |
| `npm run check` | Verificación de tipos de Astro/TypeScript |
| `npm test` | Pruebas de datos, SEO y seguridad sobre `dist/` |

Node 20 o superior.

---

## Cómo está organizado

```
src/
├─ data/            Contenido real del negocio. Editá acá, no en el HTML.
│  ├─ site.ts       NAP, redes, navegación
│  ├─ services.ts   Los 8 servicios de la home
│  ├─ projects.ts   Portafolio (6 proyectos reales)
│  ├─ products.ts   Catálogo de la tienda (deriva de products.json)
│  ├─ products.json Datos extraídos de WooCommerce — no editar a mano
│  ├─ articles.ts   Artículos del blog
│  └─ content.ts    FAQ, proceso, testimonios, teasers de blog
├─ components/      Piezas de UI reutilizables
├─ layouts/         Base.astro (todas las páginas) y ServiceLanding.astro
├─ lib/schema.ts    Constructores de JSON-LD
├─ pages/           Una ruta por archivo
├─ scripts/site.js  JS del sitio: i18n, animaciones, formulario
└─ styles/
   ├─ fonts.css     @font-face autogenerado — no editar
   ├─ site.css      Diseño migrado del sitio original
   └─ pages.css     Estilos añadidos en la migración

public/             Se copia tal cual a la raíz del sitio
├─ _headers         Cabeceras de seguridad y caché de Cloudflare
├─ _redirects       Redirecciones 301 desde las URLs de WordPress
├─ robots.txt
├─ fonts/           Tipografías autoalojadas
└─ images/          Logo, Open Graph e imágenes de producto

scripts/            Utilidades que se corren a mano
├─ prepare-assets.mjs  Reprocesa imágenes desde el mirror de WordPress
├─ fetch-fonts.mjs     Vuelve a descargar las tipografías
└─ verify-build.mjs    QA automático (se ejecuta solo tras `npm run build`)

_migracion/         Material de referencia de la migración
```

---

## Tareas comunes

**Cambiar un precio, un texto o el teléfono** → `src/data/`. Nada de eso está incrustado en el
marcado.

**Publicar un artículo** → agregá una entrada a `src/data/articles.ts`. La página, el sitemap y
el enlazado interno se generan solos.

**Agregar un proyecto al portafolio** → agregá una entrada a `src/data/projects.ts`. Si el sitio
del cliente no responde, dejá `liveUrl: null` y no se enlaza.

**Agregar un servicio a la tienda** → agregá el objeto a `src/data/products.json` y colocá la
imagen en `public/images/productos/<slug>.webp` (800×800) y `<slug>-400.webp`.

---

## Reglas del proyecto

1. **Nada de datos inventados.** Ni reseñas, ni ratings, ni métricas de resultados, ni
   direcciones. Las pruebas fallan si aparece `aggregateRating` o `review` en el JSON-LD.
2. **Nada de secretos en el repositorio.** Ver `.env.example`. El QA de build rechaza la salida
   si detecta algo con pinta de credencial.
3. **Las URLs no se cambian a la ligera.** Cada URL que WordPress tenía indexada sigue viva o
   tiene su 301 en `public/_redirects`. El mapa completo está en [URL-MAP.md](URL-MAP.md).
4. **El HTML es la fuente de verdad del español.** El motor i18n solo traduce a otros idiomas;
   no reemplaza el contenido en español.

---

## Documentación

| Archivo | Contenido |
| --- | --- |
| [AUDIT.md](AUDIT.md) | Auditoría del sitio en WordPress y qué se hizo con cada cosa |
| [URL-MAP.md](URL-MAP.md) | Mapa de URLs viejas → nuevas y redirecciones |
| [CLOUDFLARE-DEPLOY.md](CLOUDFLARE-DEPLOY.md) | Configuración exacta de Cloudflare Pages |
| [MANUAL-STEP-BY-STEP.md](MANUAL-STEP-BY-STEP.md) | Los pasos que hay que hacer a mano |
| [SEO-MANUAL-ACTIONS.md](SEO-MANUAL-ACTIONS.md) | Acciones de SEO fuera del código |
| [SEO-BACKLINK-OUTREACH.md](SEO-BACKLINK-OUTREACH.md) | Plan de atribución con clientes |

---

## Licencia

Código y contenido © HacksinCodigos. Todos los derechos reservados.
