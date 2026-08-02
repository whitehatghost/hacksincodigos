/**
 * Tecnologías y plataformas con las que trabajamos.
 *
 * Nota sobre cómo se nombra la sección: se habla de "tecnologías con las que
 * trabajamos", no de "partners oficiales". Varias de estas empresas tienen
 * programas de partner formales (Cloudflare, Tilopay, Zoho) y declarar una
 * relación comercial que no existe sería una afirmación falsa. Si HacksinCodigos
 * obtiene el estatus de partner en alguna, se marca con `officialPartner: true`
 * y esa tarjeta pasa a mostrarlo.
 *
 * Los iconos salen de `partner-icons.json`, generado desde simple-icons (CC0).
 * Las marcas que no están en ese catálogo se muestran como wordmark de texto.
 * Todas las URLs se verificaron el 2026-07-29.
 */
import icons from './partner-icons.json';

export interface Partner {
  name: string;
  url: string;
  /** Rol que cumple en nuestro trabajo. Se muestra debajo del nombre. */
  role: string;
  /** Clave en partner-icons.json. Si falta, se dibuja el nombre como wordmark. */
  icon?: keyof typeof icons;
  /** Color de marca al pasar el cursor. Sobrescribe el de simple-icons cuando este
   *  es negro o casi negro y resultaría invisible sobre el fondo oscuro del sitio. */
  hex?: string;
  /** Solo true si existe una relación de partner formal y verificable. */
  officialPartner?: boolean;
}

export const partners: Partner[] = [
  // ── Dominios y hosting ──────────────────────────────────────────────────────
  {
    name: 'Namecheap',
    url: 'https://www.namecheap.com/',
    role: 'Dominios',
    icon: 'namecheap',
  },
  {
    name: 'GoDaddy',
    url: 'https://www.godaddy.com/',
    role: 'Dominios y hosting',
    icon: 'godaddy',
  },
  {
    name: 'EasyWP',
    url: 'https://www.easywp.com/',
    role: 'Hosting WordPress',
  },

  // ── Gestores de contenido y tiendas ─────────────────────────────────────────
  {
    name: 'WordPress',
    url: 'https://wordpress.org/',
    role: 'CMS',
    icon: 'wordpress',
    // El azul de marca es demasiado oscuro sobre #0a0a0f; se usa una versión clara.
    hex: '#4A9FC7',
  },
  {
    name: 'WooCommerce',
    url: 'https://woocommerce.com/',
    role: 'Tiendas online',
    icon: 'woocommerce',
    hex: '#B67FAB',
  },
  {
    name: 'Elementor',
    url: 'https://elementor.com/',
    role: 'Maquetación',
    icon: 'elementor',
    hex: '#E5306E',
  },
  {
    name: 'Wix',
    url: 'https://www.wix.com/',
    role: 'Constructor de sitios',
    icon: 'wix',
    hex: '#4A94FF',
  },

  // ── Pagos ───────────────────────────────────────────────────────────────────
  {
    name: 'Tilopay',
    url: 'https://www.tilopay.com/',
    role: 'Pagos en línea',
  },

  // ── Infraestructura, despliegue y datos ─────────────────────────────────────
  {
    name: 'Cloudflare',
    url: 'https://www.cloudflare.com/',
    role: 'CDN y seguridad',
    icon: 'cloudflare',
  },
  {
    name: 'Netlify',
    url: 'https://www.netlify.com/',
    role: 'Despliegue',
    icon: 'netlify',
  },
  {
    name: 'Render',
    url: 'https://render.com/',
    role: 'Servidores y APIs',
    icon: 'render',
    // El logo de Render es negro; sobre fondo oscuro se pinta en blanco.
    hex: '#FFFFFF',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    role: 'Código y versiones',
    icon: 'github',
    hex: '#FFFFFF',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    role: 'Base de datos',
    icon: 'mongodb',
  },

  // ── Productividad ───────────────────────────────────────────────────────────
  {
    name: 'Zoho',
    url: 'https://www.zoho.com/',
    role: 'Correo y CRM',
    icon: 'zoho',
    hex: '#F06A6A',
  },

  // ── Automatización e inteligencia artificial ────────────────────────────────
  {
    name: 'n8n',
    url: 'https://n8n.io/',
    role: 'Automatización',
    icon: 'n8n',
  },
  {
    name: 'Claude',
    url: 'https://claude.ai/',
    role: 'Agentes de IA',
    icon: 'claude',
  },
  {
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    role: 'Agentes de IA',
    // OpenAI pidió retirar su logo de simple-icons, así que se muestra el nombre
    // como wordmark en vez de reproducir la marca por nuestra cuenta.
  },

  // ── Canales de venta y publicidad ───────────────────────────────────────────
  {
    name: 'Meta',
    // Verificado en navegador: meta.com redirige a la tienda de Quest y gafas, y
    // business.meta.com / facebook.com/business rebotan al login de Facebook.
    // about.meta.com es la única página pública que no exige iniciar sesión.
    url: 'https://about.meta.com/',
    role: 'Meta Ads',
    icon: 'meta',
    hex: '#4A9BFF',
  },
  {
    name: 'WhatsApp',
    url: 'https://business.whatsapp.com/',
    role: 'WhatsApp Business',
    icon: 'whatsapp',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    role: 'Redes sociales',
    icon: 'instagram',
    hex: '#FF4D8D',
  },
];

/** Devuelve el trazo SVG y el color de una marca, si tiene icono. */
export function partnerIcon(p: Partner): { path: string; hex: string } | null {
  if (!p.icon) return null;
  const icon = icons[p.icon];
  if (!icon) return null;
  return { path: icon.path, hex: p.hex ?? icon.hex };
}
