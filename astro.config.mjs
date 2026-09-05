// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Salida 100% estática -> Cloudflare Pages sirve `dist/` directamente.
 * `format: 'directory'` + `trailingSlash: 'always'` reproducen exactamente
 * las URLs que WordPress ya tenía indexadas (p. ej. /product/menu-qr-interactivo/).
 */
export default defineConfig({
  site: 'https://hacksincodigos.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      // Solo URLs indexables: nada de 404, ni páginas de utilidad.
      filter: (page) => !page.includes('/404') && !page.includes('/newsletter/edicion/'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://hacksincodigos.com/') item.priority = 1.0;
        else if (item.url.includes('/paginas-web-costa-rica/')) item.priority = 0.9;
        else if (/\/(diseno-web|desarrollo-web|tiendas-online|agentes-ia|seo)-costa-rica\//.test(item.url)) item.priority = 0.8;
        else if (item.url.includes('/proyectos/')) item.priority = 0.7;
        else if (item.url.includes('/product/')) item.priority = 0.6;
        else item.priority = 0.5;
        return item;
      },
    }),
  ],
});
