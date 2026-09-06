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
        const url = item.url;

        // La prioridad sigue la estrategia del diagnóstico de posicionamiento, no
        // el orden en que se fueron creando las páginas.
        if (url === 'https://hacksincodigos.com/') {
          item.priority = 1.0;
        } else if (/\/(agentes-ia|agentes-ia-redes-sociales)-costa-rica\//.test(url)) {
          // Donde el primer lugar es alcanzable este año: en Costa Rica casi
          // todos los competidores de estos términos son de 2025 en adelante.
          item.priority = 1.0;
        } else if (/\/(software-a-la-medida|software-empresas|aplicaciones-moviles)-costa-rica\//.test(url)) {
          // Menos saturado que el resto y con mejor margen por proyecto.
          item.priority = 0.9;
        } else if (url.includes('/paginas-web-costa-rica/')) {
          // El término más buscado, pero también el de los dominios de 25 años.
          item.priority = 0.9;
        } else if (/\/(diseno-web|desarrollo-web|tiendas-online|seo)-costa-rica\//.test(url)) {
          item.priority = 0.8;
        } else if (url.includes('/blog/caso-') || url.includes('caso-grupo-novo')) {
          // Los casos de cliente sostienen a las landings: son la prueba.
          item.priority = 0.7;
        } else if (url.includes('/proyectos/')) {
          item.priority = 0.7;
        } else if (url.includes('/product/')) {
          item.priority = 0.6;
        } else {
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
});
