/**
 * Páginas de zona: una por cantón donde se quiere competir en búsquedas locales.
 *
 * REGLA QUE NO SE ROMPE: cada zona tiene contenido propio y verificable sobre
 * ese lugar. Nada de copiar el mismo texto cambiando el nombre del cantón —eso
 * son doorway pages, Google las detecta y terminan hundiendo el dominio entero.
 * Si una zona no tiene nada propio que decir, no se publica.
 *
 * El servicio es remoto en todo el país: en ninguna página se dice o se insinúa
 * que hay oficina en el cantón, porque no la hay.
 *
 * Arranca por Occidente de Alajuela, que es donde ya hay cliente (RyV Dental, en
 * Palmares) y donde la competencia local es más débil que en la capital. El
 * mismo archivo sirve para ir sumando el resto del país.
 */

export interface Zona {
  /** Va en la URL: /paginas-web-<slug>/ */
  slug: string;
  /** Nombre del cantón tal como lo escribe la gente. */
  nombre: string;
  /** Región a la que pertenece, para agrupar en la página de servicio. */
  region: string;
  provincia: string;
  /** Cantones vecinos que también se atienden desde esa página. */
  cerca: string[];
  metaTitle: string;
  metaDesc: string;
  h1: string;
  lead: string;
  /** Párrafos propios de la zona: a qué se dedica y quién busca en Google ahí. */
  contextoHtml: string;
  /** Tipos de negocio de esa zona a los que les sirve el servicio. */
  negocios: string[];
  /** Preguntas frecuentes con respuesta específica de la zona. */
  faqs: { q: string; a: string }[];
}

export const zonas: Zona[] = [
  {
    slug: 'palmares',
    nombre: 'Palmares',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['San Ramón', 'Naranjo', 'Atenas'],
    metaTitle: 'Páginas Web y SEO en Palmares, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Palmares, Alajuela. Desde $499, con WhatsApp integrado y perfil de Google Business.',
    h1: 'Páginas web y SEO en Palmares',
    lead:
      'Le hacemos la página web y el posicionamiento a negocios de Palmares que hoy dependen solo de Facebook, del boca a boca o de las fiestas de enero.',
    contextoHtml: `
<p>
  Palmares es un cantón de comercio fuerte para su tamaño: clínicas, sodas y restaurantes,
  talleres, ferreterías, veterinarias, gimnasios, cafetaleras y un montón de emprendimientos que
  venden por WhatsApp. En enero la zona se llena de gente por las fiestas, y el resto del año el
  negocio depende de que lo encuentren los vecinos de Palmares, Zaragoza, Buenos Aires, Santiago,
  Candelaria, La Granja y Esquipulas.
</p>
<p>
  El problema es siempre el mismo: alguien busca en el celular "dentista en Palmares",
  "mecánico en Palmares" o "veterinaria cerca", y aparecen tres negocios. Si el suyo no está
  entre esos tres, esa venta se fue, aunque usted atienda mejor.
</p>
<p>
  Acá es donde trabajamos con <a href="/proyectos/ryv-dental/">RyV Dental</a>, la clínica dental
  de las doctoras Amaya y Mayra en Palmares: sitio propio, contenido y presencia en buscadores.
  El caso completo está publicado con nombre y enlace, para que lo revise usted mismo.
</p>`,
    negocios: [
      'Clínicas dentales, médicas y veterinarias',
      'Sodas, restaurantes y cafeterías',
      'Talleres mecánicos y ferreterías',
      'Cafetaleras y productores de la zona',
      'Emprendimientos que hoy venden solo por WhatsApp',
      'Hospedajes y servicios que se llenan en las fiestas',
    ],
    faqs: [
      {
        q: '¿Trabajan con negocios de Palmares aunque no tengan oficina acá?',
        a: 'Sí, y lo hacemos todo a distancia: reuniones por WhatsApp o videollamada, revisiones por enlace y entregas por partes. No tenemos oficina en Palmares y preferimos decirlo claro. Ya trabajamos así con RyV Dental, que es de acá mismo.',
      },
      {
        q: '¿Cómo hago para salir en Google Maps cuando alguien busca en Palmares?',
        a: 'Con el perfil de Google Business Profile bien armado: categoría correcta, servicios, horarios reales, fotos propias y las zonas donde atendés. Eso, más una página web que diga claramente que estás en Palmares, es lo que hace que aparezcas en el mapa. Va incluido en el paquete de SEO Inicial.',
      },
      {
        q: '¿Me sirve una página web si mis clientes son del pueblo?',
        a: 'Justamente por eso sirve. El vecino que ya te conoce te busca por WhatsApp, pero el que se acaba de mudar, el que viene de San Ramón o el que llega en enero te busca en Google. Si no aparecés, llama al que sí.',
      },
    ],
  },
  {
    slug: 'san-ramon',
    nombre: 'San Ramón',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Palmares', 'Naranjo', 'Zarcero'],
    metaTitle: 'Páginas Web y SEO en San Ramón, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de San Ramón de Alajuela. Desde $499, con WhatsApp integrado y perfil de Google Business.',
    h1: 'Páginas web y SEO en San Ramón',
    lead:
      'San Ramón es el centro comercial y de servicios de Occidente. Le damos a su negocio la página y el posicionamiento para aparecer cuando lo buscan desde toda la zona.',
    contextoHtml: `
<p>
  San Ramón funciona como la cabecera de Occidente: ahí están el hospital, la Sede de Occidente de
  la Universidad de Costa Rica, comercio grande, servicios profesionales y buena parte de los
  proveedores que atienden a los cantones vecinos. Eso significa dos cosas para un negocio
  ramonense.
</p>
<p>
  La primera: su cliente no es solo del centro de San Ramón. Es también de Palmares, Naranjo,
  Zarcero y las comunidades de altura, que bajan a comprar y a hacer trámites. La segunda: hay
  más competencia que en un cantón chico, y con estudiantes y profesionales alrededor, ese
  público busca todo en Google antes de ir.
</p>
<p>
  Por eso acá las páginas que funcionan no son las de "quiénes somos": son las que responden lo
  que la persona está buscando en el momento —qué servicio, a qué precio, con qué horario, en qué
  parte de San Ramón— y ponen el WhatsApp a un toque de distancia.
</p>`,
    negocios: [
      'Servicios profesionales: abogados, contadores, arquitectos',
      'Clínicas, laboratorios y consultorios',
      'Comercios del centro y proveedores de la zona',
      'Academias, cursos y servicios para estudiantes',
      'Constructoras y talleres',
      'Turismo rural y hospedajes de la zona alta',
    ],
    faqs: [
      {
        q: '¿Puedo aparecer también cuando buscan desde Palmares o Naranjo?',
        a: 'Sí. Se trabaja la página para San Ramón y se configuran en el perfil de Google Business las zonas donde de verdad atendés. Lo que no hacemos es llenar el sitio de páginas falsas de cantones donde no das servicio: eso Google lo detecta y termina perjudicando al negocio.',
      },
      {
        q: '¿Cuánto cuesta una página web para un negocio en San Ramón?',
        a: 'Un sitio de negocio arranca desde $499 y suele estar listo en 3 a 7 días hábiles. Una tienda en línea va de $800 a $2.500 según el catálogo. El paquete de SEO Inicial, con auditoría y Google Business, arranca en $250. Te pasamos la propuesta por escrito antes de empezar.',
      },
      {
        q: '¿Tienen que venir a San Ramón para hacer el trabajo?',
        a: 'No hace falta. Todo el proceso es remoto: WhatsApp o videollamada para definir el proyecto, enlaces para revisar los avances y entregas por partes. Así trabajamos con clientes en toda Costa Rica.',
      },
    ],
  },
  {
    slug: 'grecia',
    nombre: 'Grecia',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Naranjo', 'Sarchí', 'Atenas'],
    metaTitle: 'Páginas Web y SEO en Grecia, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Grecia, Alajuela. Desde $499, con WhatsApp integrado y perfil de Google Business.',
    h1: 'Páginas web y SEO en Grecia',
    lead:
      'Negocios de Grecia que hoy no aparecen cuando alguien busca su servicio en el cantón: eso es lo que venimos a arreglar.',
    contextoHtml: `
<p>
  Grecia mezcla dos mundos en el mismo cantón. Por un lado, un casco urbano con comercio, servicios
  y la iglesia de metal que trae visitantes todo el año. Por otro, una zona agrícola fuerte —café,
  caña, piña— con fincas, proveedores y transportistas.
</p>
<p>
  Los dos mundos tienen el mismo agujero: negocios que trabajan bien y venden de boca en boca, pero
  que no existen para quien los busca en el celular. Y en Grecia la cercanía con Alajuela centro y
  con el aeropuerto hace que la competencia no sea solo local: empresas de la capital pescan
  clientes griegos por Google sin moverse de San José.
</p>
<p>
  Una página bien hecha, con las palabras con las que la gente busca de verdad y un perfil de
  Google Business al día, es lo que evita que ese cliente se vaya para afuera del cantón.
</p>`,
    negocios: [
      'Comercios y servicios del centro de Grecia',
      'Fincas, proveedores agrícolas y transportistas',
      'Construcción, remodelación y acabados',
      'Turismo, sodas y hospedajes',
      'Clínicas, consultorios y servicios profesionales',
      'Tiendas que quieren empezar a vender en línea',
    ],
    faqs: [
      {
        q: '¿Por qué aparecen empresas de San José cuando busco servicios en Grecia?',
        a: 'Porque tienen el trabajo de posicionamiento hecho y el negocio local no. Google muestra a quien mejor responde la búsqueda, no al que está más cerca. La ventaja del negocio de Grecia es que, bien trabajado, tiene más señales locales reales que una empresa de la capital.',
      },
      {
        q: '¿Sirve para vender productos agrícolas o a otras empresas?',
        a: 'Sí, y suele rendir más de lo que la gente cree. Quien compra al por mayor investiga en Google antes de llamar, y casi ningún proveedor de la zona tiene una página que explique qué vende, en qué volúmenes y cómo entrega.',
      },
      {
        q: '¿Qué incluye el precio de $499?',
        a: 'El sitio de negocio completo: diseño que se ve bien en celular, las secciones esenciales, formulario de contacto, botón de WhatsApp y la base de SEO para que Google entienda qué hacés y dónde. El monto final depende de cuántas secciones lleve y de si los textos vienen listos.',
      },
    ],
  },
  {
    slug: 'naranjo',
    nombre: 'Naranjo',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Palmares', 'Grecia', 'Zarcero'],
    metaTitle: 'Páginas Web y SEO en Naranjo, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Naranjo, Alajuela. Desde $499, con WhatsApp integrado y perfil de Google Business.',
    h1: 'Páginas web y SEO en Naranjo',
    lead:
      'Para el negocio naranjeño que quiere que lo encuentren sin depender de que alguien lo recomiende en el grupo de WhatsApp del pueblo.',
    contextoHtml: `
<p>
  Naranjo es cantón cafetalero de altura, con beneficios, micro tostadores y fincas que en los
  últimos años empezaron a vender su propio café en vez de entregarlo a granel. Alrededor hay
  comercio de pueblo, servicios y un turismo tranquilo que sube a la zona.
</p>
<p>
  El café de especialidad es el mejor ejemplo de lo que se pierde sin presencia digital: el
  producto vale, la gente lo busca por internet —incluso desde fuera del país— y el que aparece en
  Google es el que vende, no necesariamente el que tiene mejor grano.
</p>
<p>
  Lo mismo aplica al comercio local. En un cantón donde todos se conocen, la página web parece
  innecesaria hasta el día en que llega gente nueva a la zona, o hasta que se quiere vender fuera
  de Naranjo.
</p>`,
    negocios: [
      'Cafetaleras, beneficios y micro tostadores',
      'Comercios y servicios del centro',
      'Turismo rural, cabinas y experiencias de café',
      'Talleres, construcción y servicios a domicilio',
      'Productores que quieren vender en línea',
      'Clínicas y consultorios',
    ],
    faqs: [
      {
        q: '¿Puedo vender mi café en línea desde Naranjo?',
        a: 'Sí. Se puede empezar con una página con catálogo y pedidos por WhatsApp, que es lo más barato y funciona bien al inicio, y pasar a una tienda con carrito y pagos cuando el volumen lo justifique. Lo importante es resolver primero los envíos y las formas de pago.',
      },
      {
        q: '¿Y si mis clientes están fuera de Costa Rica?',
        a: 'Ahí el trabajo cambia: hay que investigar cómo busca la gente en ese otro mercado, no solo traducir la página. Lo explicamos en nuestro artículo sobre estudio de mercado para SEO. Es más trabajo, pero para café y turismo suele valer la pena.',
      },
      {
        q: '¿Cuánto tarda en estar lista la página?',
        a: 'Un sitio de negocio queda en 3 a 7 días hábiles desde que tenemos los textos y las fotos. Si hay que escribir el contenido o preparar las fotos de los productos, toma un poco más.',
      },
    ],
  },
  {
    slug: 'sarchi',
    nombre: 'Sarchí',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Grecia', 'Naranjo', 'Zarcero'],
    metaTitle: 'Páginas Web y SEO en Sarchí, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y tiendas en línea para artesanos, mueblerías y negocios de Sarchí, Alajuela. Desde $499, con WhatsApp y Google Business incluidos.',
    h1: 'Páginas web y SEO en Sarchí',
    lead:
      'Sarchí vende lo que el resto del país usa como símbolo. Le armamos la página y la tienda en línea para que eso se venda también fuera del cantón.',
    contextoHtml: `
<p>
  Sarchí es la capital de la artesanía tica: la carreta pintada, los muebles de madera, las
  mecedoras y el trabajo de taller que aquí es tradición familiar. Es de los pocos cantones del
  país cuyo producto tiene demanda nacional e internacional por sí solo.
</p>
<p>
  Y es justo donde más se nota la falta de presencia digital. El turista que pasó por el taller
  hace seis meses y quiere encargar un mueble, la persona de San José que busca "muebles de madera
  a la medida" o el comprador de afuera que quiere exportar: todos empiezan en Google. Si el taller
  no está ahí, la venta se la lleva un intermediario o un competidor con menos oficio pero con
  mejor página.
</p>
<p>
  Para un taller de Sarchí, una página con catálogo de piezas, fotos buenas y contacto directo por
  WhatsApp vale más que cualquier anuncio: es la vitrina que sigue abierta cuando el local cierra.
</p>`,
    negocios: [
      'Talleres de artesanía y carretas',
      'Mueblerías y ebanisterías a la medida',
      'Tiendas de souvenirs y productos típicos',
      'Turismo, sodas y hospedajes',
      'Servicios y comercio del centro',
      'Productores que quieren exportar o vender por encargo',
    ],
    faqs: [
      {
        q: '¿Me conviene una tienda en línea o una página con catálogo?',
        a: 'Para trabajo a la medida —un mueble, una carreta, un encargo— casi siempre conviene la página con catálogo y pedidos por WhatsApp: el cliente necesita conversar medidas, maderas y tiempos antes de pagar. La tienda con carrito tiene sentido cuando hay piezas estándar y repetidas.',
      },
      {
        q: '¿Pueden ayudarme con las fotos de mis piezas?',
        a: 'Las fotos son la mitad de la venta en artesanía y mueblería. Te decimos cómo tomarlas para que se vean bien en el sitio, y si preferís, se puede contemplar el material fotográfico dentro del proyecto. Lo que no recomendamos es usar fotos de banco de imágenes: en este rubro se nota y resta confianza.',
      },
      {
        q: '¿Sirve si quiero vender a turistas extranjeros?',
        a: 'Sí, y ahí conviene trabajar el sitio pensando en cómo busca esa persona, que no es igual a como buscamos acá. También hay que dejar claros los envíos y las formas de pago desde el principio.',
      },
    ],
  },
  {
    slug: 'atenas',
    nombre: 'Atenas',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Grecia', 'Palmares', 'Orotina'],
    metaTitle: 'Páginas Web y SEO en Atenas, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Atenas, Alajuela, incluido público extranjero residente. Desde $499.',
    h1: 'Páginas web y SEO en Atenas',
    lead:
      'En Atenas su cliente puede estar buscando en español o en inglés. Le armamos la página y el posicionamiento para aparecer en las dos.',
    contextoHtml: `
<p>
  Atenas tiene una particularidad que casi ningún otro cantón de Occidente comparte: además del
  comercio local de siempre, hay una comunidad grande de extranjeros residentes, atraídos por la
  fama del clima de la zona, y un flujo constante de gente que pasa por la ruta hacia el Pacífico.
</p>
<p>
  Eso cambia el trabajo. Un negocio ateniense —bienes raíces, hospedaje, servicios para el hogar,
  restaurantes, salud— tiene dos públicos que buscan distinto: el tico que escribe "soda en Atenas"
  y el extranjero que escribe en inglés y decide por reseñas.
</p>
<p>
  Atender bien a los dos no es traducir la página y ya. Es entender qué busca cada uno, tener
  reseñas cuidadas en Google y dejar claro qué se ofrece, a qué precio y cómo se contacta.
</p>`,
    negocios: [
      'Bienes raíces y administración de propiedades',
      'Hospedajes, cabinas y turismo de paso',
      'Restaurantes, sodas y cafeterías',
      'Servicios para el hogar y mantenimiento',
      'Clínicas, terapias y servicios de salud',
      'Comercio y emprendimientos locales',
    ],
    faqs: [
      {
        q: '¿Pueden hacer la página en español y en inglés?',
        a: 'Sí, y conviene hacerlo bien: cada idioma con su propia sección del sitio y las etiquetas que le indican a Google cuál versión mostrar a quién. Traducir palabra por palabra no posiciona, porque la gente busca distinto en cada idioma.',
      },
      {
        q: '¿Qué tan importantes son las reseñas de Google acá?',
        a: 'Muchísimo, sobre todo con público extranjero: es lo primero que miran antes de escribir. Pedirlas a clientes reales después de atenderlos y responderlas todas, buenas y malas, es de lo más barato y efectivo que se puede hacer.',
      },
      {
        q: '¿Trabajan con negocios de bienes raíces?',
        a: 'Sí. Hicimos el portal inmobiliario de Costa Rica Realty PRO, con administración de propiedades desde el mismo sitio. El caso está publicado en nuestro portafolio.',
      },
    ],
  },
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}

/** Zonas agrupadas por región, para listarlas en la landing de páginas web. */
export function zonasPorRegion(): { region: string; zonas: Zona[] }[] {
  const mapa = new Map<string, Zona[]>();
  for (const z of zonas) {
    const lista = mapa.get(z.region) ?? [];
    lista.push(z);
    mapa.set(z.region, lista);
  }
  return [...mapa.entries()].map(([region, zs]) => ({ region, zonas: zs }));
}
