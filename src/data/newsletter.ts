/**
 * Boletín mensual.
 *
 * CÓMO SE MANDA HOY: a mano, desde la cuenta de Zoho Mail, con los destinatarios
 * en copia oculta. Son pocos correos, así que no hace falta pagar ni depender de
 * ninguna plataforma. El paso a paso está en NEWSLETTER.md.
 *
 * El sitio es estático (Cloudflare Pages): no envía correo ni guarda
 * suscriptores. Lo que sí hace es explicar en /newsletter/ qué se manda y cada
 * cuánto, y recoger interesados por WhatsApp, que es un canal que ya funciona.
 *
 * scripts/build-newsletter.mjs arma el HTML de la edición con el contenido real
 * del sitio — artículos, proyectos y servicios publicados — para copiarlo y
 * pegarlo en el correo. Así el boletín nunca dice algo que el sitio no diga.
 *
 * CUÁNDO CAMBIAR DE MÉTODO: la copia oculta deja de servir cerca de los 40 o 50
 * destinatarios, por entregabilidad y porque hay que gestionar las bajas a mano.
 * A partir de ahí conviene Zoho Campaigns, que tiene plan gratuito, y entonces
 * se llena la configuración de la sección 2.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. Envío
// ─────────────────────────────────────────────────────────────────────────────

export const envio = {
  metodo: 'manual' as 'manual' | 'zoho-campaigns',
  /**
   * La lista de destinatarios NO vive en el repositorio: es público en GitHub y
   * una lista de correos ahí queda expuesta a scrapers. Vive en
   * newsletter/contactos/, que está en .gitignore.
   */
  archivoContactos: 'newsletter/contactos/suscriptores.csv',
  /** Siempre en copia oculta: nadie ve el correo de los demás. */
  usarCopiaOculta: true,
  /** Con envío manual, la baja se gestiona respondiendo el correo. */
  palabraDeBaja: 'BAJA',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 2. Zoho Campaigns — solo si algún día la lista crece
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Datos del formulario de alta de Zoho Campaigns.
 *
 * Mientras `formAction` sea `null`, el sitio NO muestra formulario: ofrece
 * suscribirse por WhatsApp. Así no se publica un formulario sin destino que
 * pierda correos en silencio.
 *
 * Para activarlo: Zoho Campaigns → Contactos → Formularios de registro →
 * "Insertar en el sitio web" → copiar el action del form y todos sus
 * input type="hidden". Después hay que autorizar ese host en la directiva
 * form-action de la CSP, en public/_headers.
 *
 * Nada de esto es secreto: queda visible en el HTML de cualquier sitio que use
 * Zoho Campaigns. No poner acá contraseñas, tokens de API ni claves.
 */
export const zoho: {
  formAction: string | null;
  hidden: Record<string, string>;
  /** Host del `action`, para poder autorizarlo en la CSP. */
  host: string | null;
} = {
  formAction: null,
  hidden: {},
  host: null,
};

/** ¿Está lista la integración para mostrar el formulario? */
export const zohoListo = Boolean(zoho.formAction);

// ─────────────────────────────────────────────────────────────────────────────
// 3. Qué se le promete al que se suscribe
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Esto no es texto de relleno: es el compromiso que se adquiere con quien deja
 * su correo. Si cambia la frecuencia o el contenido, cambiarlo también acá.
 */
export const promesa = {
  frecuencia: 'Una vez al mes',
  frecuenciaCorta: 'mensual',
  /** Lo que llega en cada edición. */
  incluye: [
    'Lo nuevo del mes: servicios, artículos y proyectos publicados',
    'Un caso real de un cliente y qué se resolvió',
    'Una recomendación práctica que podés aplicar sin contratarnos',
    'Si hay algo con condiciones especiales ese mes, lo decimos claro',
  ],
  /** Lo que NO va a pasar. Tan importante como lo anterior. */
  noIncluye: [
    'No mandamos correo todas las semanas',
    'No compartimos ni vendemos tu correo a nadie',
    'Te podés dar de baja respondiendo el correo con la palabra BAJA',
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 4. Ediciones
// ─────────────────────────────────────────────────────────────────────────────

export interface Edicion {
  /** Mes de la edición en formato AAAA-MM. Es el identificador. */
  mes: string;
  /** Asunto del correo. Lo que decide si lo abren. */
  asunto: string;
  /** Texto de vista previa (lo que se ve junto al asunto en la bandeja). */
  preheader: string;
  /** Saludo y contexto del mes. Escrito a mano, breve. */
  intro: string;
  /** Artículos del blog a destacar, por slug. */
  articulos?: string[];
  /** Proyectos del portafolio a destacar, por slug. */
  proyectos?: string[];
  /** Servicios del catálogo a ofrecer este mes, por slug. */
  servicios?: string[];
  /** El consejo práctico del mes: se lee aunque no se compre nada. */
  consejo?: { titulo: string; texto: string };
  /** Cierre. */
  despedida?: string;
}

export const ediciones: Edicion[] = [
  {
    mes: '2026-09',
    asunto: 'Ahora hacemos software a la medida y CRM para empresas',
    preheader:
      'Software a la medida y CRM empresarial, tres trabajos nuevos en el portafolio y el caso de Grupo Novo.',
    intro: `Arrancamos este boletín porque hay cosas que pasan en HacksinCodigos y no
      se enteran ni los clientes que ya trabajan con nosotros. Este mes: abrimos una línea
      de software a la medida, y sumamos al portafolio tres trabajos que valía la pena
      mostrar. Va a llegar una vez al mes, con lo nuevo, un caso real y algo que puedas
      aplicar sin contratarnos. Si en algún momento deja de servirte, respondés este
      correo con la palabra BAJA y listo.`,
    servicios: ['software-a-la-medida-pymes', 'crm-empresarial', 'aplicaciones-moviles-y-web'],
    articulos: ['crm-empresarial-caso-grupo-novo'],
    proyectos: ['grupo-novo-crm', 'redes-deportivas-cr', 'ryv-dental'],
    consejo: {
      titulo: 'Antes de mandar a programar un sistema, medí el cuello de botella',
      texto: `La pregunta no es "¿qué se puede automatizar?" sino "¿dónde se está
        perdiendo la información hoy?". Durante una semana anotá cada vez que alguien del
        equipo tiene que preguntarle algo a otra persona porque el dato no está en ningún
        lado. Ese conteo vale más que cualquier propuesta: te dice qué módulo construir
        primero y cuál puede esperar. Casi siempre es uno solo, y casi nunca es el que se
        creía.`,
    },
    despedida: `Si algo de esto te calza para tu negocio, respondé este correo o
      escribinos por WhatsApp y lo conversamos. La cotización no compromete a nada.`,
  },
];

/** Devuelve la edición de un mes, o la más reciente si no se especifica. */
export function getEdicion(mes?: string): Edicion | undefined {
  if (mes) return ediciones.find((e) => e.mes === mes);
  return [...ediciones].sort((a, b) => b.mes.localeCompare(a.mes))[0];
}
