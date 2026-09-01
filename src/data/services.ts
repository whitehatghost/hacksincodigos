/**
 * Los 8 servicios tal como aparecen en la home actual (textos verbatim del sitio en producción).
 * `page` apunta a la landing dedicada cuando existe, para enlazado interno.
 */

export interface Service {
  id: string;
  i18n: string;
  title: string;
  desc: string;
  benefits: string[];
  /** Gradiente del <h3>, tomado del sitio actual. */
  gradient: [string, string];
  /** Fondo del glow de la tarjeta, tomado del sitio actual. */
  cardBg: string;
  /** Color del icono. */
  iconColor: string;
  iconClass?: string;
  /** Estilo extra del botón "Consultar" (el sitio actual solo lo usa en Agentes IA). */
  consultStyle?: string;
  waText: string;
  icon: string;
  page?: string;
}

export const services: Service[] = [
  {
    id: 'desarrollo-web',
    i18n: 'srv1',
    title: 'Desarrollo de Páginas Web',
    desc: 'Sitios responsive con SEO incluido y WhatsApp integrado para que tu negocio destaque en Google.',
    benefits: ['Mobile-first · SEO avanzado', 'Pagos online integrados', 'Hosting y dominio incluidos'],
    gradient: ['#00ff88', '#00bfff'],
    cardBg: 'linear-gradient(135deg, rgba(0,255,136,.15), rgba(0,191,255,.05))',
    iconColor: 'var(--accent-green)',
    waText: 'Hola, me interesa el servicio de Desarrollo Web',
    page: '/desarrollo-web-costa-rica/',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>',
  },
  {
    id: 'agentes-ia',
    i18n: 'srv2',
    title: 'Agentes IA & Chatbots WhatsApp',
    desc: 'Automatiza tus ventas con agentes de IA para WhatsApp, Messenger e Instagram. Incluye WebUI y panel de ventas.',
    benefits: ['Chatbot IA para WhatsApp 24/7', 'Panel de ventas con reportes', '🔧 Gestionado o 👤 Autogestionado'],
    gradient: ['#f59e0b', '#f97316'],
    cardBg: 'linear-gradient(135deg, rgba(245,158,11,.2), rgba(236,72,153,.08))',
    iconColor: 'var(--accent-amber)',
    iconClass: 'amber',
    consultStyle: 'border-color:rgba(245,158,11,.3);color:var(--accent-amber)',
    waText: 'Hola, me interesa el servicio de Agentes IA y Chatbots WhatsApp',
    page: '/agentes-ia-costa-rica/',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>',
  },
  {
    id: 'soporte-remoto',
    i18n: 'srv3',
    title: 'Soporte Remoto de Computadoras',
    desc: 'Diagnóstico y solución de problemas técnicos sin que tengas que desplazarte. Respuesta en minutos.',
    benefits: ['Hardware y software', 'Eliminación de virus', 'Respuesta inmediata'],
    gradient: ['#00bfff', '#6366f1'],
    cardBg: 'linear-gradient(135deg, rgba(0,191,255,.15), rgba(99,102,241,.05))',
    iconColor: 'var(--accent-blue)',
    iconClass: 'blue',
    waText: 'Hola, necesito soporte técnico remoto',
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path stroke-linecap="round" d="M8 21h8M12 17v4"/>',
  },
  {
    id: 'publicidad-digital',
    i18n: 'srv4',
    title: 'Publicidad Digital',
    desc: 'Campañas de alto rendimiento en Meta Ads y Google Ads que generan resultados reales.',
    benefits: ['Segmentación precisa', 'Creativos incluidos', 'Reportes mensuales'],
    gradient: ['#ec4899', '#a855f7'],
    cardBg: 'linear-gradient(135deg, rgba(236,72,153,.15), rgba(168,85,247,.05))',
    iconColor: '#ec4899',
    iconClass: 'pink',
    waText: 'Hola, me interesa la publicidad digital',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>',
  },
  {
    id: 'menus-qr',
    i18n: 'srv5',
    title: 'Menús Digitales QR',
    desc: 'Tu carta digital siempre actualizada, sin reimpresiones ni costos adicionales. Escanea y pide.',
    benefits: ['Categorías organizadas', 'Diseño personalizado', 'Actualizaciones ilimitadas'],
    gradient: ['#a855f7', '#6366f1'],
    cardBg: 'linear-gradient(135deg, rgba(168,85,247,.15), rgba(0,255,136,.05))',
    iconColor: '#a855f7',
    iconClass: 'purple',
    waText: 'Hola, me interesa el menú digital QR',
    page: '/product/menu-qr-interactivo/',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75V16.5zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"/>',
  },
  {
    id: 'diseno-logos',
    i18n: 'srv6',
    title: 'Diseño de Logos',
    desc: 'Identidad visual única que genera confianza y diferencia tu marca de la competencia.',
    benefits: ['Investigación de marca', 'Conceptos 100% originales', 'Archivos vectoriales'],
    gradient: ['#6366f1', '#00ff88'],
    cardBg: 'linear-gradient(135deg, rgba(99,102,241,.15), rgba(245,158,11,.05))',
    iconColor: 'var(--accent-green)',
    waText: 'Hola, necesito un diseño de logo',
    page: '/diseno-web-costa-rica/',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>',
  },
  {
    id: 'apps-personalizadas',
    i18n: 'srv7',
    title: 'Software a la Medida & CRM Empresarial',
    desc: 'Sistemas construidos sobre el proceso real de tu negocio: CRM empresarial, inventario, cotizaciones, reportes y apps.',
    benefits: ['CRM empresarial a medida', 'Inventario, pedidos y facturación', 'Apps móviles y web para tu equipo'],
    gradient: ['#06b6d4', '#8b5cf6'],
    cardBg: 'linear-gradient(135deg, rgba(6,182,212,.15), rgba(139,92,246,.05))',
    iconColor: '#06b6d4',
    waText: 'Hola, me interesa un software a la medida / CRM para mi empresa',
    page: '/software-a-la-medida-costa-rica/',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>',
  },
  {
    id: 'apis-backend',
    i18n: 'srv8',
    title: 'APIs Seguras & Backend',
    desc: 'Diseñamos e implementamos APIs seguras, integraciones con terceros y servicios backend para tu negocio.',
    benefits: ['APIs REST seguras', 'Autenticación y cifrado', 'Integraciones con terceros'],
    gradient: ['#ef4444', '#f59e0b'],
    cardBg: 'linear-gradient(135deg, rgba(239,68,68,.12), rgba(245,158,11,.05))',
    iconColor: '#ef4444',
    waText: 'Hola, me interesa desarrollo de APIs',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>',
  },
];

/** Estilos inline del icono cuando el servicio trae color propio (replica el sitio actual). */
export function iconWrapStyle(s: Service): string {
  if (s.id === 'apps-personalizadas') return 'color:#06b6d4;border-color:rgba(6,182,212,.15);background:rgba(6,182,212,.08)';
  if (s.id === 'apis-backend') return 'color:#ef4444;border-color:rgba(239,68,68,.15);background:rgba(239,68,68,.08)';
  return `color:${s.iconColor}`;
}

export function h3Style(s: Service): string {
  return `background:linear-gradient(135deg,${s.gradient[0]},${s.gradient[1]});-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent`;
}
