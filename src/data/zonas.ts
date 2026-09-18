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
  {
    slug: 'alajuela',
    nombre: 'Alajuela',
    region: 'Alajuela centro y alrededores',
    provincia: 'Alajuela',
    cerca: ['Grecia', 'Atenas', 'Heredia'],
    metaTitle: 'Páginas Web y SEO en Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para empresas y negocios de Alajuela centro. Desde $499, con WhatsApp integrado y Google Business.',
    h1: 'Páginas web y SEO en Alajuela',
    lead:
      'Alajuela es de los mercados con más competencia del país. Le armamos la página y el posicionamiento para que su negocio no quede enterrado entre los demás.',
    contextoHtml: `
<p>
  Alajuela centro concentra comercio, servicios profesionales, talleres, clínicas y un movimiento
  empresarial fuerte por la cercanía con el aeropuerto Juan Santamaría y con las zonas industriales
  de la provincia. Es la segunda ciudad más grande del país y eso se nota en la competencia.
</p>
<p>
  Acá el problema no es que no haya clientes buscando: es que hay veinte negocios peleando la misma
  búsqueda. "Taller en Alajuela", "abogado en Alajuela", "clínica dental Alajuela" son búsquedas con
  mucha gente detrás y con competidores que llevan años posicionados.
</p>
<p>
  Por eso en Alajuela funciona mejor la estrategia fina: en vez de pelear el término genérico desde
  el día uno, se trabajan las búsquedas específicas del servicio y del distrito —San Antonio, Río
  Segundo, Desamparados de Alajuela, San Rafael— donde sí se puede ganar rápido, y desde ahí se
  sube.
</p>`,
    negocios: [
      'Comercio y servicios del centro',
      'Empresas cerca del aeropuerto y zonas industriales',
      'Talleres, repuestos y servicios automotrices',
      'Clínicas, consultorios y laboratorios',
      'Servicios profesionales y despachos',
      'Restaurantes, sodas y hospedaje de paso',
    ],
    faqs: [
      {
        q: '¿Se puede competir en Alajuela contra negocios que llevan años en Google?',
        a: 'Sí, pero no peleando de entrada el término más grande. Se empieza por las búsquedas específicas —el servicio exacto, el distrito, la urgencia— donde hay menos competencia y más intención de compra, y con eso el dominio va ganando fuerza para las búsquedas grandes.',
      },
      {
        q: '¿Sirve si mi negocio está cerca del aeropuerto y atiende empresas?',
        a: 'Sí, y el enfoque cambia: quien compra en nombre de una empresa investiga antes, compara y necesita ver capacidad. Ahí pesan las páginas por servicio bien explicadas, los casos y que se vea claro cómo cotizar.',
      },
      {
        q: '¿Cuánto cuesta y en cuánto tiempo está?',
        a: 'Un sitio de negocio arranca desde $499 y queda listo en 3 a 7 días hábiles; el SEO Inicial, con auditoría y Google Business, desde $250. Te pasamos la propuesta por escrito antes de empezar.',
      },
    ],
  },
  {
    slug: 'zarcero',
    nombre: 'Zarcero',
    region: 'Occidente de Alajuela',
    provincia: 'Alajuela',
    cerca: ['Naranjo', 'San Ramón', 'Ciudad Quesada'],
    metaTitle: 'Páginas Web y SEO en Zarcero, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Zarcero: agro, lácteos, turismo y comercio local. Desde $499.',
    h1: 'Páginas web y SEO en Zarcero',
    lead:
      'Zarcero recibe visitantes todo el año por sus jardines y vive del agro. Las dos cosas se venden mucho mejor con una página que la gente pueda encontrar.',
    contextoHtml: `
<p>
  Zarcero tiene dos motores. Uno es el turismo de paso: los jardines podados del parque frente a la
  iglesia son parada obligatoria de quien sube hacia la Zona Norte, y esa gente busca en el celular
  dónde comer, qué comprar y dónde quedarse. El otro es el agro de altura: hortalizas, papa,
  lechería y productos lácteos que salen de la zona para todo el país.
</p>
<p>
  Los negocios de turismo de paso pierden ventas por algo simple: el visitante decide en cinco
  minutos, desde el carro, con el celular en la mano. Si el restaurante o la tienda no aparece en
  Google Maps con fotos y horario, no existe para esa decisión.
</p>
<p>
  Y los productores tienen el problema contrario: venden bien de mayoreo pero no tienen dónde
  mandar al cliente que los quiere contactar directo, que suele pagar mejor.
</p>`,
    negocios: [
      'Restaurantes, sodas y cafeterías de paso',
      'Productores de hortalizas y lácteos',
      'Hospedajes y turismo rural',
      'Tiendas de productos típicos de la zona',
      'Servicios y comercio del centro',
      'Transportistas y proveedores agrícolas',
    ],
    faqs: [
      {
        q: 'Mi negocio vive del que va pasando, ¿me sirve una página web?',
        a: 'Sí, y sobre todo el perfil de Google Business: esa gente decide con el mapa abierto. Fotos reales, horario al día y reseñas es lo que hace que se detengan con usted y no en el siguiente. La página web es la que termina de convencer y la que sirve para el que planea el viaje antes de salir.',
      },
      {
        q: '¿Puedo vender mis productos agrícolas o lácteos por internet?',
        a: 'Se puede empezar simple: una página con el catálogo, la forma de pedido por WhatsApp y las condiciones de entrega. Para producto fresco lo que más importa es dejar claras las zonas de reparto y los días.',
      },
      {
        q: '¿Trabajan con negocios de Zarcero aunque estén lejos?',
        a: 'Sí, todo es remoto: WhatsApp o videollamada, revisiones por enlace y entregas por partes. Ya trabajamos así en varios cantones de Occidente.',
      },
    ],
  },
  {
    slug: 'ciudad-quesada',
    nombre: 'Ciudad Quesada',
    region: 'Zona Norte',
    provincia: 'Alajuela',
    cerca: ['La Fortuna', 'Zarcero', 'Aguas Zarcas'],
    metaTitle: 'Páginas Web y SEO en Ciudad Quesada, San Carlos | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Ciudad Quesada y San Carlos: comercio, ganadería, agro y servicios. Desde $499.',
    h1: 'Páginas web y SEO en Ciudad Quesada',
    lead:
      'Ciudad Quesada mueve el comercio de toda la Zona Norte. Le damos a su negocio la página y el posicionamiento para aparecer cuando lo buscan desde San Carlos entero.',
    contextoHtml: `
<p>
  Ciudad Quesada es la cabecera de San Carlos, el cantón más grande del país, y funciona como el
  centro comercial y de servicios de toda la Zona Norte: ahí bajan a comprar y a hacer trámites
  desde Aguas Zarcas, Pital, Venecia, Florencia y las comunidades de la llanura.
</p>
<p>
  La economía es de ganadería, lechería, agroindustria, comercio y servicios, con un turismo fuerte
  alrededor de las aguas termales y de todo el corredor hacia el Arenal.
</p>
<p>
  Para un negocio sancarleño eso significa que su clientela está repartida en un territorio enorme,
  y que buena parte de la gente decide a quién llamar buscando en el celular antes de manejar una
  hora. Aparecer en esa búsqueda es literalmente la diferencia entre que vengan a usted o al de
  al lado.
</p>`,
    negocios: [
      'Comercio y servicios del centro',
      'Agroindustria, ganadería y lechería',
      'Proveedores agrícolas y veterinarias',
      'Turismo, termales y hospedajes',
      'Talleres, construcción y maquinaria',
      'Clínicas, consultorios y servicios profesionales',
    ],
    faqs: [
      {
        q: '¿Puedo aparecer cuando busquen desde todo San Carlos, no solo de Ciudad Quesada?',
        a: 'Sí. Se trabaja la página para Ciudad Quesada y en el perfil de Google Business se configuran las zonas donde de verdad atiende: Aguas Zarcas, Florencia, Pital, Venecia y las demás. Lo que no hacemos es inventar páginas de comunidades donde no da servicio.',
      },
      {
        q: 'Vendo a otras empresas, no al público. ¿Igual sirve?',
        a: 'Sirve, y suele rendir más. El que compra insumos, maquinaria o servicios para una finca o una empresa investiga en Google antes de llamar, y casi ningún proveedor de la zona explica bien qué vende, en qué volúmenes y cómo entrega.',
      },
      {
        q: '¿Qué incluye el paquete de $250 de SEO?',
        a: 'La auditoría del sitio, la corrección del SEO técnico, el perfil de Google Business Profile creado u optimizado, la configuración de Search Console y Bing, y la guía para pedir reseñas a clientes reales.',
      },
    ],
  },
  {
    slug: 'la-fortuna',
    nombre: 'La Fortuna',
    region: 'Zona Norte',
    provincia: 'Alajuela',
    cerca: ['Ciudad Quesada', 'El Castillo', 'Nuevo Arenal'],
    metaTitle: 'Páginas Web y SEO para turismo en La Fortuna, Arenal',
    metaDesc:
      'Páginas web, reservas y posicionamiento en Google para hoteles, tours y restaurantes de La Fortuna y el Arenal. En español e inglés, desde $499.',
    h1: 'Páginas web y SEO en La Fortuna',
    lead:
      'En La Fortuna su cliente busca en inglés, compara reseñas y reserva antes de subirse al avión. La página tiene que estar lista para ese momento.',
    contextoHtml: `
<p>
  La Fortuna vive del turismo del volcán Arenal: hoteles y cabinas, tours de aventura, aguas
  termales, transporte, restaurantes y guías. Es de los destinos más buscados de Costa Rica, y casi
  toda esa búsqueda ocurre <strong>antes</strong> de que el visitante llegue al país.
</p>
<p>
  Eso cambia todo el juego. El cliente no pasa por su puerta: encuentra el hotel o el tour desde su
  casa en Estados Unidos, Canadá o Europa, compara en inglés, lee reseñas y reserva. Si su negocio
  solo existe en las plataformas de reservas, está entregando comisión y no tiene clientes propios.
</p>
<p>
  Un sitio propio bien trabajado —en inglés y español, rápido, con fotos buenas, precios claros y
  reserva o consulta directa— es lo que baja la dependencia de esas plataformas y sube el margen
  por reserva.
</p>`,
    negocios: [
      'Hoteles, cabinas y hospedajes',
      'Operadores de tours y aventura',
      'Aguas termales y spas',
      'Transporte y traslados turísticos',
      'Restaurantes y cafeterías',
      'Guías independientes y experiencias',
    ],
    faqs: [
      {
        q: '¿Hacen el sitio en inglés también?',
        a: 'Sí, y es casi obligatorio acá. Cada idioma va en su propia sección del sitio, con las etiquetas que le indican a Google cuál versión mostrar a quién. Traducir palabra por palabra no posiciona: hay que investigar cómo busca esa persona en su idioma.',
      },
      {
        q: '¿Puedo recibir reservas directas y dejar de pagar tanta comisión?',
        a: 'Sí. Se puede conectar un sistema de reservas o, según el caso, manejar la consulta por WhatsApp o formulario y confirmar a mano. Muchos hospedajes pequeños ganan más así que con carrito completo, porque conversan antes de cerrar.',
      },
      {
        q: '¿Qué tanto pesan las reseñas para un negocio turístico?',
        a: 'Muchísimo. Para el visitante extranjero, las reseñas de Google y su cantidad son el primer filtro. Pedirlas a huéspedes reales y responderlas todas es de lo más barato y efectivo que se puede hacer.',
      },
    ],
  },
  {
    slug: 'orotina',
    nombre: 'Orotina',
    region: 'Pacífico Central',
    provincia: 'Alajuela',
    cerca: ['Atenas', 'San Mateo', 'Esparza'],
    metaTitle: 'Páginas Web y SEO en Orotina, Alajuela | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios de Orotina: comercio, agro, transporte y servicios de paso al Pacífico. Desde $499.',
    h1: 'Páginas web y SEO en Orotina',
    lead:
      'Por Orotina pasa medio país camino al Pacífico. Le armamos la página para que esa gente lo encuentre antes de pasar de largo.',
    contextoHtml: `
<p>
  Orotina es cruce de caminos: quien va de la Meseta Central hacia Jacó, Puntarenas o Caldera pasa
  por la zona, y eso sostiene sodas, frutas, talleres, ventas de camino y servicios. A eso se suma
  una economía agrícola de clima cálido —mango, marañón, frutas— con productores que venden a
  mayoreo.
</p>
<p>
  El negocio de paso tiene una ventana muy corta: el conductor decide en minutos, con el mapa
  abierto. El que aparece con fotos, horario y reseñas es el que recibe la parada.
</p>
<p>
  Y el productor agrícola tiene el potencial de vender directo, pero no tiene a dónde mandar a
  quien lo quiere contactar sin intermediario.
</p>`,
    negocios: [
      'Sodas, restaurantes y ventas de camino',
      'Productores y vendedores de fruta',
      'Talleres, repuestos y servicios en ruta',
      'Transporte y logística',
      'Comercio y servicios del centro',
      'Hospedajes y turismo de paso',
    ],
    faqs: [
      {
        q: '¿Qué me sirve más: la página web o el perfil de Google?',
        a: 'Para negocio de paso, primero el perfil de Google Business, porque es lo que ve quien va manejando. La página web es la que da confianza y la que sirve para quien planea el viaje. Lo ideal es tener los dos, y por eso el paquete de SEO Inicial incluye el perfil.',
      },
      {
        q: 'Vendo fruta al por mayor, ¿me sirve?',
        a: 'Sí. Una página que explique qué producto maneja, en qué temporada, en qué volúmenes y cómo entrega le sirve para que compradores más grandes lo encuentren sin intermediario.',
      },
      {
        q: '¿Trabajan con negocios pequeños o solo con empresas?',
        a: 'Con los dos. De hecho buena parte de nuestros clientes son negocios familiares que vendían solo por WhatsApp y redes.',
      },
    ],
  },
  {
    slug: 'heredia',
    nombre: 'Heredia',
    region: 'Gran Área Metropolitana',
    provincia: 'Heredia',
    cerca: ['Belén', 'Santo Domingo', 'San Rafael'],
    metaTitle: 'Páginas Web y SEO en Heredia | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para empresas y negocios de Heredia. Desde $499, con SEO técnico y Google Business incluidos.',
    h1: 'Páginas web y SEO en Heredia',
    lead:
      'Heredia mezcla comercio de barrio, universidades y empresas de servicios. Cada uno necesita un sitio distinto, y nosotros lo armamos según lo que usted vende.',
    contextoHtml: `
<p>
  Heredia tiene una mezcla poco común: el comercio tradicional de la Ciudad de las Flores, una
  población universitaria grande por la Universidad Nacional, cafetales en las faldas del Barva y,
  al mismo tiempo, una de las concentraciones de empresas de servicios más importantes del país.
</p>
<p>
  Esa mezcla significa públicos muy distintos buscando en Google. El vecino que busca "fisioterapia
  en Heredia" no se parece en nada al encargado de compras de una empresa que busca un proveedor de
  servicios, ni al estudiante que busca dónde imprimir o dónde almorzar barato.
</p>
<p>
  Lo que más falla en la zona es tratar de hablarle a todos con la misma página. Una estructura con
  una página por servicio, cada una respondiendo la búsqueda concreta, rinde mucho más que un sitio
  que dice "somos los mejores en todo".
</p>`,
    negocios: [
      'Comercio y servicios del centro y los distritos',
      'Proveedores de empresas y servicios corporativos',
      'Clínicas, terapias y consultorios',
      'Cafetaleras y turismo en las faldas del Barva',
      'Academias, cursos y servicios para estudiantes',
      'Restaurantes, cafeterías y repostería',
    ],
    faqs: [
      {
        q: 'Le vendo a empresas, no al público. ¿Cambia el trabajo?',
        a: 'Cambia bastante. Quien compra para una empresa compara, pide referencias y necesita ver capacidad y formalidad: páginas por servicio bien explicadas, casos, condiciones claras y una forma de cotizar que no dependa solo de WhatsApp.',
      },
      {
        q: '¿Cómo le gano a negocios de San José que también aparecen acá?',
        a: 'Con señales locales reales: perfil de Google Business bien trabajado, contenido que hable de Heredia y sus distritos, reseñas de clientes de la zona. Un negocio que sí está acá tiene ventaja sobre uno que solo dice que cubre la zona.',
      },
      {
        q: '¿Qué incluye la página de $499?',
        a: 'Diseño que se ve bien en celular, las secciones esenciales, formulario de contacto, botón de WhatsApp y la base de SEO técnico. El monto final depende de cuántas secciones lleve y de si los textos vienen listos.',
      },
    ],
  },
  {
    slug: 'belen',
    nombre: 'Belén',
    region: 'Gran Área Metropolitana',
    provincia: 'Heredia',
    cerca: ['Heredia', 'Alajuela', 'Santa Ana'],
    metaTitle: 'Páginas Web y SEO en Belén, Heredia | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento para empresas, hoteles y servicios en Belén, Heredia. Sitios corporativos, software a la medida y SEO desde $250.',
    h1: 'Páginas web y SEO en Belén',
    lead:
      'Belén concentra empresas, hoteles y proveedores corporativos. Acá el sitio no solo tiene que verse bien: tiene que hacer quedar bien a la empresa.',
    contextoHtml: `
<p>
  Belén es un cantón pequeño con un peso empresarial enorme: por su ubicación entre Heredia,
  Alajuela y el aeropuerto, ahí se instalaron hoteles de negocios, oficinas corporativas, empresas
  de servicios y toda la cadena de proveedores que las atiende.
</p>
<p>
  El cliente de esa cadena no compra por impulso. Busca proveedor, revisa la página, compara, pide
  cotización formal y muchas veces necesita facturación electrónica, tiempos de respuesta
  comprometidos y capacidad comprobable.
</p>
<p>
  Una página que se ve amateur descalifica antes de la primera reunión. Y al revés: un sitio serio,
  rápido y claro puede meter a una empresa pequeña en licitaciones y compras donde antes ni la
  consideraban.
</p>`,
    negocios: [
      'Proveedores de empresas y servicios corporativos',
      'Hoteles y servicios para viajeros de negocios',
      'Logística, transporte y aduanas',
      'Mantenimiento industrial y construcción',
      'Consultoras y servicios profesionales',
      'Comercio y restaurantes de la zona',
    ],
    faqs: [
      {
        q: '¿Hacen sitios corporativos y sistemas internos?',
        a: 'Sí. Además de la página, desarrollamos software a la medida, CRM y aplicaciones que se conectan con los sistemas que la empresa ya usa. Está en nuestra página de software para empresas.',
      },
      {
        q: '¿Pueden integrar el sitio con nuestro sistema de facturación o inventario?',
        a: 'Depende de qué sistema use y de si expone una forma de conectarse. Lo revisamos antes de cotizar y se lo decimos claro, incluso si la respuesta es que no conviene.',
      },
      {
        q: '¿Trabajan con contratos y tiempos de respuesta?',
        a: 'Sí. Para empresas trabajamos con propuesta por escrito, alcance definido y planes de mantenimiento con compromisos de respuesta.',
      },
    ],
  },
  {
    slug: 'cartago',
    nombre: 'Cartago',
    region: 'Cartago',
    provincia: 'Cartago',
    cerca: ['Paraíso', 'Oreamuno', 'La Unión'],
    metaTitle: 'Páginas Web y SEO en Cartago | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para negocios y empresas de Cartago. Desde $499, con SEO técnico y Google Business incluidos.',
    h1: 'Páginas web y SEO en Cartago',
    lead:
      'Comercio, industria y agro de altura en el mismo cantón. Le armamos la página y el posicionamiento según a quién le vende usted.',
    contextoHtml: `
<p>
  Cartago junta tres economías distintas: el comercio y los servicios de la ciudad, un sector
  industrial y de manufactura importante, y la agricultura de altura de la zona —papa, cebolla,
  hortalizas— que abastece a buena parte del país.
</p>
<p>
  A eso se suma un flujo constante de visitantes por la Basílica de Nuestra Señora de los Ángeles,
  que se dispara con la romería de cada agosto: miles de personas buscando dónde comer, dónde
  parquear y dónde quedarse.
</p>
<p>
  Cada uno de esos públicos busca distinto, y ahí está la oportunidad: la mayoría de los negocios
  cartagineses tiene una sola página que no responde a ninguno en específico. Con una estructura por
  servicio y un perfil de Google bien armado se les gana sin pelear a gritos.
</p>`,
    negocios: [
      'Comercio y servicios del centro',
      'Industria, manufactura y talleres',
      'Productores agrícolas de altura',
      'Sodas, restaurantes y hospedaje',
      'Clínicas, consultorios y servicios profesionales',
      'Construcción, ferreterías y acabados',
    ],
    faqs: [
      {
        q: '¿Se puede aprovechar la romería para vender más?',
        a: 'Sí, y conviene preparar el sitio y el perfil de Google con semanas de anticipación: horarios especiales, fotos actualizadas y la información que busca el visitante. Llegar a agosto sin nada de eso es dejar pasar el mes con más movimiento del año.',
      },
      {
        q: 'Vendo producto agrícola al por mayor, ¿me sirve la página?',
        a: 'Sí. Al comprador grande le sirve ver qué produce, en qué temporadas, en qué volúmenes y cómo entrega. Es información que casi ningún productor de la zona tiene publicada, y por eso el que la publica destaca.',
      },
      {
        q: '¿Cuánto cuesta el posicionamiento?',
        a: 'El SEO Inicial arranca en $250 e incluye auditoría, corrección técnica y perfil de Google Business. Si además hace falta contenido y páginas por servicio, el paquete siguiente arranca en $500.',
      },
    ],
  },
  {
    slug: 'turrialba',
    nombre: 'Turrialba',
    region: 'Cartago',
    provincia: 'Cartago',
    cerca: ['Cartago', 'Paraíso', 'Jiménez'],
    metaTitle: 'Páginas Web y SEO en Turrialba, Cartago | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para turismo, queseras, café y comercio de Turrialba. En español e inglés, desde $499.',
    h1: 'Páginas web y SEO en Turrialba',
    lead:
      'Turismo de aventura, queso, café y comercio local. Tres de esas cuatro cosas se venden por internet y casi nadie en la zona las está vendiendo bien.',
    contextoHtml: `
<p>
  Turrialba tiene producto de sobra: el rafting del río Pacuare, que atrae visitantes de todo el
  mundo, el queso turrialba con denominación propia, café de altura, el CATIE y un turismo rural
  que crece año con año.
</p>
<p>
  El problema es la distancia con el mercado. Turrialba queda fuera del paso natural del turista, y
  eso obliga a que la decisión se tome antes: el visitante busca, compara y reserva desde su casa,
  muchas veces en inglés. El que no aparece en esa búsqueda simplemente no entra en el itinerario.
</p>
<p>
  Con el queso y el café pasa algo parecido: el producto tiene fama nacional, pero el productor
  vende a intermediarios porque no tiene a dónde mandar al cliente que lo busca directo.
</p>`,
    negocios: [
      'Tours de rafting y aventura',
      'Hospedajes, cabinas y turismo rural',
      'Queseras y productores de lácteos',
      'Cafetaleras y micro tostadores',
      'Restaurantes y sodas',
      'Comercio y servicios del centro',
    ],
    faqs: [
      {
        q: '¿Puedo recibir reservas de turistas extranjeros desde mi propia página?',
        a: 'Sí, y es lo que más margen deja: cada reserva directa se ahorra la comisión de las plataformas. Se puede integrar un sistema de reservas o manejar la consulta por formulario y WhatsApp, según el tamaño del negocio.',
      },
      {
        q: '¿Vale la pena tener el sitio en inglés?',
        a: 'Para turismo en Turrialba, sí. Pero no basta con traducir: hay que investigar cómo busca esa persona en su idioma y armar cada versión en su propia sección del sitio.',
      },
      {
        q: 'Produzco queso o café, ¿cómo vendo directo?',
        a: 'Con una página que muestre el producto, explique cómo se compra y resuelva envíos y pagos. Se puede arrancar con pedidos por WhatsApp y pasar a tienda con carrito cuando el volumen lo pida.',
      },
    ],
  },
  {
    slug: 'paraiso',
    nombre: 'Paraíso',
    region: 'Cartago',
    provincia: 'Cartago',
    cerca: ['Cartago', 'Orosi', 'Turrialba'],
    metaTitle: 'Páginas Web y SEO en Paraíso y Orosi, Cartago',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios y turismo de Paraíso, Orosi y Cachí. Desde $499, con Google Business incluido.',
    h1: 'Páginas web y SEO en Paraíso',
    lead:
      'El valle de Orosi recibe visitantes todo el año. Le armamos la página para que lleguen a su negocio y no al de enfrente.',
    contextoHtml: `
<p>
  Paraíso es la entrada al valle de Orosi, uno de los paseos de fin de semana más queridos del
  Valle Central: turismo rural, aguas termales, la iglesia colonial, el lago de Cachí y una zona
  agrícola fuerte alrededor.
</p>
<p>
  El visitante de fin de semana planea poco y decide con el celular: busca "qué hacer en Orosi",
  "dónde comer en Paraíso" o "cabinas cerca de Cachí" el viernes en la noche o el mismo sábado
  camino allá.
</p>
<p>
  Eso hace que el perfil de Google con fotos, horarios y reseñas valga oro, y que una página sencilla
  y rápida —que cargue bien con mala señal— convierta mejor que un sitio lleno de animaciones.
</p>`,
    negocios: [
      'Cabinas, hospedajes y turismo rural',
      'Restaurantes, sodas y cafeterías',
      'Tours, termales y experiencias del valle',
      'Productores agrícolas de la zona',
      'Comercio y servicios del centro',
      'Transporte y servicios para visitantes',
    ],
    faqs: [
      {
        q: 'La gente decide el mismo día, ¿cómo le gano a los demás?',
        a: 'Con el perfil de Google Business impecable —fotos reales, horarios al día, reseñas respondidas— y una página que cargue rápido en celular con señal regular. Esas dos cosas deciden más que cualquier diseño elaborado.',
      },
      {
        q: '¿Sirve para negocios que solo abren fines de semana?',
        a: 'Sí, y conviene dejarlo clarísimo en el perfil y en la página: la queja más común de los visitantes es llegar y encontrar cerrado porque el horario publicado estaba viejo.',
      },
      {
        q: '¿Qué tan rápido puedo tenerla lista?',
        a: 'Un sitio de negocio queda en 3 a 7 días hábiles desde que tenemos textos y fotos. Si hay temporada alta cerca, conviene arrancar con tiempo.',
      },
    ],
  },
  {
    slug: 'san-jose',
    nombre: 'San José',
    region: 'Gran Área Metropolitana',
    provincia: 'San José',
    cerca: ['Escazú', 'Santa Ana', 'Curridabat'],
    metaTitle: 'Páginas Web y SEO en San José, Costa Rica | HacksinCodigos',
    metaDesc:
      'Diseño de páginas web y posicionamiento en Google para empresas y negocios de San José, Costa Rica. Desde $499, con SEO técnico incluido.',
    h1: 'Páginas web y SEO en San José',
    lead:
      'San José es el mercado más competido del país. Se gana con estrategia fina, no gritando más fuerte que los demás.',
    contextoHtml: `
<p>
  En San José está la mayor concentración de empresas, oficinas, comercio y servicios del país, y
  también la mayor concentración de competencia en Google. Cada búsqueda importante tiene atrás
  dominios con años de antigüedad y agencias trabajándolos a tiempo completo.
</p>
<p>
  Pelear de frente el término más grande desde un dominio nuevo es tirar la plata. Lo que sí
  funciona es entrar por donde la competencia no está mirando: el servicio específico, el distrito
  —Escalante, Rohrmoser, San Pedro, Sabana, Zapote—, la urgencia, el tipo de cliente.
</p>
<p>
  Esas búsquedas tienen menos volumen pero mucha más intención de compra, y cada una que se gana le
  da fuerza al dominio para las siguientes. Es más lento de contar y mucho más rentable de hacer.
</p>`,
    negocios: [
      'Servicios profesionales y despachos',
      'Empresas de servicios y proveedores corporativos',
      'Clínicas, consultorios y estética',
      'Restaurantes, cafeterías y comercio',
      'Talleres y servicios a domicilio',
      'Startups y negocios digitales',
    ],
    faqs: [
      {
        q: '¿Se puede posicionar en San José con un dominio nuevo?',
        a: 'Sí, pero no por el término más genérico de entrada. Se empieza por búsquedas específicas —servicio + distrito, servicio + urgencia, servicio + tipo de cliente— que sí se pueden ganar, y con eso el dominio gana fuerza para las grandes.',
      },
      {
        q: '¿Cuánto tarda en verse resultado acá?',
        a: 'Más que en un cantón pequeño. Los arreglos técnicos y el perfil de Google pueden moverse en semanas, pero las posiciones en términos competidos toman de tres a seis meses de trabajo sostenido. Cualquiera que le prometa el primer lugar en dos semanas en San José le está mintiendo.',
      },
      {
        q: '¿Trabajan con empresas grandes o solo con PYME?',
        a: 'Con las dos. Para empresas hacemos también software a la medida, CRM e integraciones, con propuesta por escrito y planes de mantenimiento.',
      },
    ],
  },
  {
    slug: 'escazu',
    nombre: 'Escazú',
    region: 'Gran Área Metropolitana',
    provincia: 'San José',
    cerca: ['Santa Ana', 'San José', 'Belén'],
    metaTitle: 'Páginas Web y SEO en Escazú, San José | HacksinCodigos',
    metaDesc:
      'Páginas web de alto nivel y posicionamiento en Google para negocios y empresas de Escazú. En español e inglés, con SEO técnico incluido.',
    h1: 'Páginas web y SEO en Escazú',
    lead:
      'En Escazú el cliente compara antes de escribir y nota cuando un sitio se ve barato. Acá la página es parte del precio que usted puede cobrar.',
    contextoHtml: `
<p>
  Escazú concentra oficinas corporativas, comercio de alto nivel, restaurantes, clínicas estéticas,
  bienes raíces y una comunidad grande de residentes extranjeros. Es una de las zonas con mayor
  poder adquisitivo del país.
</p>
<p>
  Eso cambia el estándar. El cliente escazuceño —o el extranjero que vive acá— compara varias
  opciones, revisa reseñas, mira el sitio en el celular y decide en buena parte por cómo se ve y
  qué tan claro está todo. Un sitio improvisado tumba el precio que usted puede cobrar.
</p>
<p>
  Y muchas búsquedas se hacen en inglés, así que un sitio en dos idiomas bien armado abre un
  mercado que la mayoría de la competencia local no está atendiendo.
</p>`,
    negocios: [
      'Clínicas estéticas, dentales y de salud',
      'Bienes raíces y administración de propiedades',
      'Restaurantes y negocios gastronómicos',
      'Servicios profesionales y consultoras',
      'Comercio y marcas de nicho',
      'Servicios para residentes extranjeros',
    ],
    faqs: [
      {
        q: '¿Pueden hacer el sitio en español e inglés?',
        a: 'Sí, cada idioma en su propia sección y con las etiquetas que le dicen a Google cuál mostrar a quién. En Escazú suele valer la pena por la cantidad de residentes extranjeros.',
      },
      {
        q: '¿Qué hace que un sitio se vea "caro" sin serlo?',
        a: 'Fotos propias en vez de banco de imágenes, tipografía y espacios cuidados, textos concretos sin palabrería, y que cargue rápido. Eso pesa más que cualquier animación.',
      },
      {
        q: '¿Trabajan con clínicas y bienes raíces?',
        a: 'Sí. Hicimos el sitio de RyV Dental y el portal inmobiliario de Costa Rica Realty PRO, con administración de propiedades desde el mismo sitio. Los dos casos están publicados en el portafolio.',
      },
    ],
  },
  {
    slug: 'santa-ana',
    nombre: 'Santa Ana',
    region: 'Gran Área Metropolitana',
    provincia: 'San José',
    cerca: ['Escazú', 'Belén', 'Ciudad Colón'],
    metaTitle: 'Páginas Web y SEO en Santa Ana, San José | HacksinCodigos',
    metaDesc:
      'Páginas web, software a la medida y posicionamiento en Google para empresas y negocios de Santa Ana. Desde $499.',
    h1: 'Páginas web y SEO en Santa Ana',
    lead:
      'Santa Ana creció en oficinas, restaurantes y servicios. Le armamos el sitio y los sistemas para que su negocio aguante ese ritmo.',
    contextoHtml: `
<p>
  Santa Ana pasó de pueblo tranquilo a uno de los polos corporativos y residenciales de más
  crecimiento del área metropolitana: oficinas, restaurantes, gimnasios, servicios profesionales y
  una comunidad importante de residentes extranjeros.
</p>
<p>
  Los negocios de la zona suelen tener el problema del crecimiento: empezaron atendiendo por
  WhatsApp desde un teléfono y hoy reciben más consultas de las que pueden contestar, sin sistema,
  sin orden y perdiendo clientes por no responder a tiempo.
</p>
<p>
  Ahí el sitio web es solo la mitad. La otra mitad es automatizar: un agente de IA que conteste lo
  de siempre a cualquier hora, y si el negocio ya creció, un sistema propio que ordene clientes,
  cotizaciones y seguimiento.
</p>`,
    negocios: [
      'Oficinas, consultoras y servicios profesionales',
      'Restaurantes, cafeterías y gastronomía',
      'Gimnasios, estudios y bienestar',
      'Comercio y marcas de nicho',
      'Servicios para residentes extranjeros',
      'Empresas que necesitan sistemas propios',
    ],
    faqs: [
      {
        q: 'Recibo más mensajes de los que puedo contestar, ¿qué hago?',
        a: 'Un agente de IA conectado a WhatsApp, Instagram o su web responde lo de siempre —precios, horarios, disponibilidad— a cualquier hora, y le pasa a usted solo las conversaciones que valen. Está en nuestra página de agentes de IA.',
      },
      {
        q: '¿Hacen sistemas a la medida además de páginas?',
        a: 'Sí: CRM, control de pedidos, inventarios y aplicaciones conectadas a lo que ya usa. Se puede arrancar por un solo módulo y crecer desde ahí.',
      },
      {
        q: '¿El sitio puede estar en inglés también?',
        a: 'Sí, y en Santa Ana conviene por la cantidad de residentes extranjeros. Cada idioma va en su propia sección, no traducido palabra por palabra.',
      },
    ],
  },
  {
    slug: 'desamparados',
    nombre: 'Desamparados',
    region: 'Gran Área Metropolitana',
    provincia: 'San José',
    cerca: ['San José', 'Aserrí', 'Curridabat'],
    metaTitle: 'Páginas Web y SEO en Desamparados, San José',
    metaDesc:
      'Páginas web accesibles y posicionamiento en Google para negocios de Desamparados y alrededores. Desde $499, con WhatsApp integrado.',
    h1: 'Páginas web y SEO en Desamparados',
    lead:
      'Para el negocio de barrio que ya vende bien por WhatsApp y quiere que lo encuentren también los vecinos que todavía no lo conocen.',
    contextoHtml: `
<p>
  Desamparados es uno de los cantones más poblados del país, con un comercio de barrio enorme:
  pulperías, sodas, talleres, salones de belleza, clínicas, ferreterías, reposteras, servicios a
  domicilio y cientos de emprendimientos que se mueven por WhatsApp y grupos de Facebook.
</p>
<p>
  Ese modelo funciona… hasta donde llega el boca a boca. El vecino que se acaba de mudar, el que
  necesita un servicio urgente o el que busca algo que nunca había comprado, abre Google y escribe
  "cerca de mí". Ahí es donde el negocio de barrio desaparece y gana una cadena que ni siquiera está
  en el cantón.
</p>
<p>
  La buena noticia es que la competencia local en Google es baja: con un perfil de Google Business
  bien armado y una página sencilla se le puede ganar a negocios mucho más grandes en las búsquedas
  del cantón.
</p>`,
    negocios: [
      'Sodas, restaurantes y reposterías',
      'Salones de belleza, barberías y estética',
      'Talleres, ferreterías y servicios a domicilio',
      'Clínicas, consultorios y farmacias',
      'Emprendimientos que venden por WhatsApp',
      'Academias y cursos del barrio',
    ],
    faqs: [
      {
        q: 'Mi negocio es pequeño, ¿de verdad me sirve?',
        a: 'Sí, y en un cantón así rinde más que en San José centro, porque hay menos negocios locales peleando esas búsquedas. Muchas veces con el perfil de Google bien hecho y una página sencilla ya se aparece de primero en el cantón.',
      },
      {
        q: 'No tengo presupuesto para mucho, ¿por dónde empiezo?',
        a: 'Por el perfil de Google Business, que es gratis, y por una página sencilla desde $499. Si hoy no le alcanza ni eso, se lo decimos: primero el perfil, y la página cuando el negocio lo aguante.',
      },
      {
        q: '¿Me sirve si vendo solo por WhatsApp?',
        a: 'La página no reemplaza el WhatsApp: lo alimenta. Le llega gente que ya sabe qué vende y a qué precio, y escribe decidida en vez de preguntar lo mismo veinte veces.',
      },
    ],
  },
  {
    slug: 'perez-zeledon',
    nombre: 'Pérez Zeledón',
    region: 'Zona Sur',
    provincia: 'San José',
    cerca: ['Dominical', 'Buenos Aires', 'San Gerardo'],
    metaTitle: 'Páginas Web y SEO en Pérez Zeledón, San Isidro',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios de Pérez Zeledón y San Isidro de El General: comercio, agro y turismo. Desde $499.',
    h1: 'Páginas web y SEO en Pérez Zeledón',
    lead:
      'San Isidro mueve el comercio de toda la Zona Sur. Le damos a su negocio la presencia para que lo encuentren desde toda la región.',
    contextoHtml: `
<p>
  San Isidro de El General es el centro comercial y de servicios de la Zona Sur: ahí llegan a
  comprar y a resolver desde Buenos Aires, Pejibaye, San Gerardo y buena parte de la región. La
  economía combina comercio, agro —café, piña, ganadería— y un turismo que crece por el Chirripó y
  por el corredor hacia Dominical y la costa.
</p>
<p>
  La distancia con el Valle Central juega a favor y en contra. A favor, porque el cliente de la
  zona prefiere resolver localmente. En contra, porque muchos proveedores de San José aparecen
  primero en Google y se llevan trabajo que podría quedarse en la región.
</p>
<p>
  Un negocio generaleño con presencia digital bien trabajada tiene ventaja real: está cerca, conoce
  la zona y puede demostrarlo con reseñas y contenido local.
</p>`,
    negocios: [
      'Comercio y servicios de San Isidro',
      'Agro: café, piña, ganadería y proveedores',
      'Turismo de montaña y hacia la costa',
      'Talleres, construcción y ferreterías',
      'Clínicas, consultorios y servicios profesionales',
      'Hospedajes, sodas y restaurantes',
    ],
    faqs: [
      {
        q: '¿Puedo aparecer cuando busquen desde toda la Zona Sur?',
        a: 'Sí. Se trabaja la página para Pérez Zeledón y en el perfil de Google se declaran las zonas que realmente atiende. Si de verdad da servicio en Buenos Aires o Dominical, se puede reflejar; inventarlo no.',
      },
      {
        q: 'Mi cliente es turista que va al Chirripó o a la costa, ¿cómo lo agarro?',
        a: 'Ese planea con anticipación y busca en Google desde su casa, a veces en inglés. Ahí lo que manda es que su página explique bien el servicio, los precios y cómo reservar, y que tenga reseñas.',
      },
      {
        q: '¿Trabajan con negocios tan lejos del Valle Central?',
        a: 'Sí, todo es remoto y no cambia nada el precio ni el plazo. Es la ventaja de trabajar así.',
      },
    ],
  },
  {
    slug: 'liberia',
    nombre: 'Liberia',
    region: 'Guanacaste',
    provincia: 'Guanacaste',
    cerca: ['Playas del Coco', 'Cañas', 'Bagaces'],
    metaTitle: 'Páginas Web y SEO en Liberia, Guanacaste | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios de Liberia, Guanacaste: turismo, comercio y servicios. En español e inglés, desde $499.',
    h1: 'Páginas web y SEO en Liberia',
    lead:
      'Por Liberia entra buena parte del turismo que llega al país. Su negocio tiene que aparecer antes de que esa gente aterrice.',
    contextoHtml: `
<p>
  Liberia es la capital guanacasteca y la puerta de entrada del turismo del Pacífico Norte por el
  aeropuerto internacional Daniel Oduber. Alrededor hay comercio, servicios, ganadería y toda la
  cadena que atiende a los visitantes que siguen hacia las playas.
</p>
<p>
  El turista que llega por Liberia decidió casi todo desde su casa: dónde dormir, qué tour hacer,
  qué carro alquilar, a veces hasta dónde va a comer. Esa decisión se toma en Google, en inglés y
  mirando reseñas.
</p>
<p>
  Al mismo tiempo, Liberia tiene una vida local fuerte que busca en español: talleres, clínicas,
  ferreterías, servicios. Son dos públicos distintos y el sitio se puede armar para atender a los
  dos sin confundir a ninguno.
</p>`,
    negocios: [
      'Hoteles, hostales y alquileres turísticos',
      'Tours, transporte y alquiler de vehículos',
      'Restaurantes y comercio del centro',
      'Servicios profesionales y clínicas',
      'Ganadería, agro y proveedores',
      'Construcción y servicios para propiedades',
    ],
    faqs: [
      {
        q: '¿Conviene el sitio en inglés?',
        a: 'Para todo lo que toque turismo, sí, y no como traducción literal: cada idioma en su propia sección y con la investigación de cómo busca esa persona en su idioma.',
      },
      {
        q: '¿Puedo dejar de depender de las plataformas de reserva?',
        a: 'Se puede bajar la dependencia con reservas o consultas directas desde su propio sitio. No desaparecen las plataformas, pero cada reserva directa se ahorra la comisión.',
      },
      {
        q: 'Mi negocio es local, no turístico. ¿También me sirve?',
        a: 'Sí, y compite con menos gente: la mayoría del esfuerzo digital en la zona está puesto en turismo, así que las búsquedas locales quedan más libres.',
      },
    ],
  },
  {
    slug: 'tamarindo',
    nombre: 'Tamarindo',
    region: 'Guanacaste',
    provincia: 'Guanacaste',
    cerca: ['Santa Cruz', 'Nosara', 'Sámara'],
    metaTitle: 'Páginas Web y SEO en Tamarindo, Guanacaste',
    metaDesc:
      'Páginas web en inglés y español para hoteles, tours, bienes raíces y negocios de Tamarindo y Santa Cruz. Reservas directas y SEO desde $250.',
    h1: 'Páginas web y SEO en Tamarindo',
    lead:
      'En Tamarindo su competencia es mundial y su cliente reserva desde afuera. El sitio tiene que estar a esa altura.',
    contextoHtml: `
<p>
  Tamarindo es uno de los destinos más internacionales del país: surf, hoteles y villas, tours,
  restaurantes, escuelas de surf, bienes raíces y una comunidad grande de extranjeros residentes y
  de temporada.
</p>
<p>
  Acá el negocio no compite con el de al lado: compite con playas de todo el mundo en el momento en
  que alguien planea sus vacaciones. Y ese alguien busca en inglés, compara precios en dólares, lee
  reseñas y quiere reservar sin escribirle a nadie.
</p>
<p>
  Los negocios que más ganan en la zona son los que tienen sitio propio rápido, con fotos buenas,
  precios claros y reserva directa, y usan las plataformas solo como complemento, no como único
  canal.
</p>`,
    negocios: [
      'Hoteles, villas y alquileres vacacionales',
      'Escuelas de surf y tours',
      'Bienes raíces y administración de propiedades',
      'Restaurantes y bares',
      'Servicios para residentes extranjeros',
      'Transporte, traslados y concierge',
    ],
    faqs: [
      {
        q: '¿El sitio puede cobrar en dólares y recibir pagos de afuera?',
        a: 'Sí. Se define la pasarela según el banco y el volumen, y se puede mostrar precio en dólares con las condiciones claras. Es parte de lo que revisamos antes de cotizar.',
      },
      {
        q: '¿Hacen el sitio solo en inglés si mis clientes son extranjeros?',
        a: 'Se puede, pero normalmente conviene tener las dos versiones: inglés para el visitante y español para proveedores, personal y clientes locales.',
      },
      {
        q: '¿Cómo compito contra hoteles grandes con presupuestos enormes?',
        a: 'No peleando las búsquedas más generales, sino las específicas: su playa, su tipo de huésped, su experiencia concreta. Esas convierten mejor y son mucho más baratas de ganar.',
      },
    ],
  },
  {
    slug: 'nicoya',
    nombre: 'Nicoya',
    region: 'Guanacaste',
    provincia: 'Guanacaste',
    cerca: ['Sámara', 'Nosara', 'Santa Cruz'],
    metaTitle: 'Páginas Web y SEO en Nicoya, Guanacaste | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios, agro y turismo de Nicoya y la península. Desde $499.',
    h1: 'Páginas web y SEO en Nicoya',
    lead:
      'Nicoya vive del comercio local, del agro y de un turismo que crece hacia Sámara y Nosara. Le armamos la presencia para las tres cosas.',
    contextoHtml: `
<p>
  Nicoya es uno de los cantones con más historia del país y el centro de servicios de la península:
  comercio, agro, ganadería, salud y trámites para toda la zona, además de la ruta natural hacia
  Sámara, Nosara y las playas del sur de Guanacaste.
</p>
<p>
  La zona ganó fama internacional por la longevidad de su gente, y eso trae un turismo distinto:
  visitantes interesados en lo local, en la comida, en las tradiciones y en estadías largas.
</p>
<p>
  Para el negocio nicoyano eso abre dos frentes: el cliente de la zona que busca en español y
  resuelve cerca, y el visitante que planea desde afuera. Pocas empresas locales están trabajando
  los dos, y ahí hay terreno libre.
</p>`,
    negocios: [
      'Comercio y servicios del centro',
      'Agro, ganadería y proveedores',
      'Hospedajes y turismo rural',
      'Restaurantes y comida típica',
      'Clínicas, consultorios y farmacias',
      'Construcción y servicios para propiedades',
    ],
    faqs: [
      {
        q: '¿Vale la pena si mi negocio es solo para gente de la zona?',
        a: 'Sí, y suele ser de lo más rentable: hay poca competencia local en Google, así que con el perfil de Google Business y una página sencilla se aparece de primero en el cantón.',
      },
      {
        q: 'Atiendo también a turistas, ¿cómo les hablo sin perder al cliente local?',
        a: 'Con secciones distintas dentro del mismo sitio, o con una versión en inglés para el visitante. Lo que no funciona es mezclar todo en una sola página que no le queda clara a ninguno.',
      },
      {
        q: '¿Cuánto cuesta y cómo se paga?',
        a: 'Un sitio de negocio arranca desde $499 y el SEO Inicial desde $250. Se paga por SINPE Móvil o transferencia, con propuesta por escrito antes de empezar.',
      },
    ],
  },
  {
    slug: 'jaco',
    nombre: 'Jacó',
    region: 'Pacífico Central',
    provincia: 'Puntarenas',
    cerca: ['Herradura', 'Esterillos', 'Orotina'],
    metaTitle: 'Páginas Web y SEO en Jacó, Puntarenas | HacksinCodigos',
    metaDesc:
      'Páginas web en español e inglés para hoteles, tours, restaurantes y bienes raíces en Jacó y el Pacífico Central. Desde $499.',
    h1: 'Páginas web y SEO en Jacó',
    lead:
      'Jacó recibe al visitante de fin de semana y al extranjero que viene por semanas. Los dos lo buscan en Google antes de llegar.',
    contextoHtml: `
<p>
  Jacó es la playa más cercana al Valle Central y eso le da un ritmo particular: turismo nacional de
  fin de semana, visitantes extranjeros que se quedan temporadas largas, bienes raíces, alquileres
  vacacionales, restaurantes, vida nocturna y tours.
</p>
<p>
  El turista nacional decide rápido y busca desde el carro o el jueves en la noche; el extranjero
  planea con semanas de anticipación, en inglés, comparando precios y reseñas. Un negocio de Jacó
  que solo atiende a uno de los dos está dejando plata sobre la mesa.
</p>
<p>
  Y hay una particularidad más: en temporada alta la señal y la atención escasean, así que el sitio
  tiene que cargar rápido y dejar todo clarísimo —precio, disponibilidad, cómo reservar— en los
  primeros segundos.
</p>`,
    negocios: [
      'Hoteles, cabinas y alquileres vacacionales',
      'Tours, surf y actividades',
      'Restaurantes, bares y comercio',
      'Bienes raíces y administración de propiedades',
      'Transporte y traslados desde San José',
      'Servicios para residentes extranjeros',
    ],
    faqs: [
      {
        q: '¿Cómo aprovecho el turismo nacional de fin de semana?',
        a: 'Con el perfil de Google impecable y una página que cargue rápido y muestre precio, disponibilidad y WhatsApp de una vez. Ese cliente decide en minutos y no lee párrafos largos.',
      },
      {
        q: '¿Y el visitante extranjero?',
        a: 'Ese necesita la versión en inglés, reseñas y condiciones claras: qué incluye, cómo se paga, política de cancelación. Planea con tiempo y compara mucho.',
      },
      {
        q: '¿Me pueden ayudar con las reservas?',
        a: 'Sí, según el tamaño del negocio: desde consultas por WhatsApp o formulario hasta un sistema de reservas con pago en línea.',
      },
    ],
  },
  {
    slug: 'quepos',
    nombre: 'Quepos y Manuel Antonio',
    region: 'Pacífico Central',
    provincia: 'Puntarenas',
    cerca: ['Parrita', 'Dominical', 'Savegre'],
    metaTitle: 'Páginas Web y SEO en Quepos y Manuel Antonio',
    metaDesc:
      'Páginas web y reservas para hoteles, tours y restaurantes de Quepos y Manuel Antonio, en inglés y español. SEO desde $250.',
    h1: 'Páginas web y SEO en Quepos y Manuel Antonio',
    lead:
      'Manuel Antonio es de los destinos más buscados del país. Estar bien posicionado ahí vale más que cualquier anuncio.',
    contextoHtml: `
<p>
  Quepos y Manuel Antonio viven del turismo del parque nacional, la pesca deportiva, los tours de
  naturaleza, los hoteles y la gastronomía. Es uno de los nombres que más se busca cuando alguien
  planea un viaje a Costa Rica.
</p>
<p>
  Esa demanda es la buena noticia. La mala es que la competencia también es alta y que buena parte
  del tráfico se lo llevan las grandes plataformas de reservas y los sitios de comparación, que
  cobran comisión por cada huésped.
</p>
<p>
  El negocio que tiene sitio propio bien trabajado —rápido, en inglés y español, con fotos reales,
  precios claros y reserva directa— recupera parte de ese cliente y mejora el margen de cada
  reserva.
</p>`,
    negocios: [
      'Hoteles, cabinas y villas',
      'Tours de naturaleza y pesca deportiva',
      'Restaurantes y cafeterías',
      'Transporte y traslados',
      'Alquiler de equipo y experiencias',
      'Servicios para propiedades y residentes',
    ],
    faqs: [
      {
        q: '¿Puedo competir con las plataformas de reserva?',
        a: 'No por el término genérico, pero sí por el nombre de su negocio y por búsquedas específicas: su tipo de hospedaje, su experiencia concreta, su zona exacta. Ahí es donde se recupera la reserva directa.',
      },
      {
        q: '¿Qué tan importante es la velocidad del sitio acá?',
        a: 'Mucho: buena parte de sus visitantes navega desde el celular con señal irregular o desde el extranjero. Un sitio pesado pierde gente antes de que cargue la primera foto.',
      },
      {
        q: '¿Hacen el contenido en inglés?',
        a: 'Sí, y con investigación de cómo busca esa persona en su idioma, no traduciendo palabra por palabra.',
      },
    ],
  },
  {
    slug: 'puntarenas',
    nombre: 'Puntarenas',
    region: 'Pacífico Central',
    provincia: 'Puntarenas',
    cerca: ['Esparza', 'Caldera', 'Miramar'],
    metaTitle: 'Páginas Web y SEO en Puntarenas | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios de Puntarenas: comercio, pesca, turismo y servicios portuarios. Desde $499.',
    h1: 'Páginas web y SEO en Puntarenas',
    lead:
      'Puerto, turismo de paseo y comercio local. Le armamos la página para que su negocio aparezca en la búsqueda que le corresponde.',
    contextoHtml: `
<p>
  Puntarenas combina el movimiento del puerto y la actividad de Caldera con un turismo nacional de
  paseo —el Paseo de los Turistas, las marisquerías, los ferris hacia la península— y el comercio y
  los servicios de una ciudad costera.
</p>
<p>
  Los negocios porteños compiten por dos búsquedas muy distintas: la del visitante que llega el fin
  de semana y busca dónde comer o dónde quedarse, y la del cliente local o empresarial que busca un
  servicio.
</p>
<p>
  La mayoría no trabaja ninguna de las dos, así que hay espacio. Con el perfil de Google al día y
  una página sencilla, un negocio porteño puede aparecer de primero en su categoría sin gran
  inversión.
</p>`,
    negocios: [
      'Marisquerías, sodas y restaurantes',
      'Hospedajes y turismo de paseo',
      'Comercio y servicios del centro',
      'Pesca, transporte marítimo y servicios portuarios',
      'Talleres, construcción y servicios técnicos',
      'Clínicas y servicios profesionales',
    ],
    faqs: [
      {
        q: '¿Qué me conviene primero con poco presupuesto?',
        a: 'El perfil de Google Business, que es gratis y es lo que ve quien anda en la zona buscando. Después la página, desde $499, que es la que da confianza y cierra la venta.',
      },
      {
        q: 'Mi negocio depende de los fines de semana, ¿sirve igual?',
        a: 'Sí, y conviene dejar clarísimos los horarios reales, porque el visitante que llega y encuentra cerrado deja reseña negativa y no vuelve.',
      },
      {
        q: '¿Trabajan con empresas del puerto o solo con comercio?',
        a: 'Con las dos. Para empresas hacemos también sistemas a la medida e integraciones, no solo el sitio.',
      },
    ],
  },
  {
    slug: 'monteverde',
    nombre: 'Monteverde',
    region: 'Puntarenas',
    provincia: 'Puntarenas',
    cerca: ['Santa Elena', 'Tilarán', 'Las Juntas'],
    metaTitle: 'Páginas Web y SEO en Monteverde, Puntarenas',
    metaDesc:
      'Páginas web en inglés y español para hoteles, tours y negocios de Monteverde y Santa Elena. Reservas directas y SEO desde $250.',
    h1: 'Páginas web y SEO en Monteverde',
    lead:
      'A Monteverde nadie llega por casualidad: lo planean. Su negocio tiene que estar en ese plan, y eso se decide en Google.',
    contextoHtml: `
<p>
  Monteverde es un destino de bosque nuboso conocido en todo el mundo: reservas naturales, puentes
  colgantes, observación de aves, café y queso de la zona, hospedajes de todos los tamaños y una
  comunidad muy ligada al turismo sostenible.
</p>
<p>
  Nadie pasa por Monteverde de casualidad: se sube a propósito, después de haberlo planeado. Eso
  significa que la decisión —dónde dormir, qué tour hacer, dónde comer— se toma semanas antes,
  desde otro país y en inglés.
</p>
<p>
  Para un negocio de la zona, el sitio propio no es un adorno: es el único lugar donde puede contar
  su historia completa, mostrar el trabajo con la comunidad y cobrar lo que vale sin competir solo
  por precio en una plataforma.
</p>`,
    negocios: [
      'Hoteles, lodges y hospedajes',
      'Tours de naturaleza, aves y canopy',
      'Cafetaleras, queseras y productos locales',
      'Restaurantes y cafeterías',
      'Transporte y traslados',
      'Guías y experiencias educativas',
    ],
    faqs: [
      {
        q: '¿Cómo compito con las plataformas de tours?',
        a: 'Contando lo que ellas no cuentan: quién es usted, cómo trabaja, qué hace distinto. Y facilitando la reserva directa. El visitante de Monteverde valora eso más que el de otros destinos.',
      },
      {
        q: '¿Necesito el sitio en inglés?',
        a: 'Sí, casi todo su mercado busca en inglés. Cada idioma en su propia sección y con investigación real de cómo busca esa persona.',
      },
      {
        q: '¿Puedo vender mi café o queso en línea también?',
        a: 'Sí. Se puede sumar un catálogo con pedidos y envíos al sitio del hospedaje o del negocio, o hacer una tienda aparte si el volumen lo justifica.',
      },
    ],
  },
  {
    slug: 'limon',
    nombre: 'Limón',
    region: 'Caribe',
    provincia: 'Limón',
    cerca: ['Moín', 'Matina', 'Siquirres'],
    metaTitle: 'Páginas Web y SEO en Limón | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios y empresas de Limón: comercio, puerto, servicios y turismo. Desde $499.',
    h1: 'Páginas web y SEO en Limón',
    lead:
      'Limón mueve carga, comercio y cultura. Le armamos la presencia digital para que su negocio no dependa solo de que lo conozcan.',
    contextoHtml: `
<p>
  Limón centro concentra el comercio y los servicios de la provincia, con la actividad portuaria de
  Moín como motor: transporte, logística, aduanas, talleres, proveedores y toda la cadena que vive
  de la carga y de los cruceros.
</p>
<p>
  A eso se suma una identidad cultural fuerte —la gastronomía caribeña, el carnaval, la música— que
  atrae visitantes y que es, en sí misma, algo que se puede contar y vender bien en internet.
</p>
<p>
  La zona está claramente menos trabajada digitalmente que el Valle Central: muchos negocios
  formales no aparecen en Google ni tienen perfil. Eso hace que el esfuerzo rinda más acá que en
  cualquier otro lado del país.
</p>`,
    negocios: [
      'Transporte, logística y servicios portuarios',
      'Comercio y servicios del centro',
      'Restaurantes y gastronomía caribeña',
      'Talleres, construcción y mantenimiento',
      'Hospedajes y turismo',
      'Clínicas y servicios profesionales',
    ],
    faqs: [
      {
        q: '¿Por qué dicen que rinde más el SEO en Limón?',
        a: 'Porque hay menos competencia local trabajando el posicionamiento. En muchas categorías, un negocio con perfil de Google bien armado y una página decente aparece de primero sin gran inversión. Eso en San José es impensable.',
      },
      {
        q: 'Le vendo a empresas del puerto, ¿me sirve?',
        a: 'Sí. Quien contrata transporte, servicios o mantenimiento revisa antes con quién está tratando. Un sitio serio con servicios explicados y datos claros abre puertas a contratos más grandes.',
      },
      {
        q: '¿Trabajan con negocios de toda la provincia?',
        a: 'Sí, todo es remoto: Limón centro, Siquirres, Matina, Guápiles, el Caribe Sur. No cambia el precio ni el plazo.',
      },
    ],
  },
  {
    slug: 'puerto-viejo',
    nombre: 'Puerto Viejo',
    region: 'Caribe',
    provincia: 'Limón',
    cerca: ['Cahuita', 'Manzanillo', 'Bribrí'],
    metaTitle: 'Páginas Web y SEO en Puerto Viejo, Caribe Sur',
    metaDesc:
      'Páginas web en inglés y español para hospedajes, tours y negocios de Puerto Viejo, Cahuita y el Caribe Sur. Desde $499.',
    h1: 'Páginas web y SEO en Puerto Viejo',
    lead:
      'El Caribe Sur vive del visitante que planea desde afuera. Si su negocio no sale en esa búsqueda, no entra en el viaje.',
    contextoHtml: `
<p>
  Puerto Viejo, Cahuita y Manzanillo tienen un turismo propio: viajero que se queda más días, que
  busca ambiente relajado, naturaleza, playas y cultura caribeña. Muchos hospedajes son pequeños,
  familiares o de dueños extranjeros radicados en la zona.
</p>
<p>
  Ese visitante investiga mucho antes de venir, lee reseñas, compara en inglés y valora que el
  negocio se vea auténtico y no una cadena. Es un público que premia exactamente lo que un negocio
  pequeño puede ofrecer, si logra que lo encuentren.
</p>
<p>
  El talón de Aquiles de la zona suele ser técnico: sitios viejos, lentos, que no funcionan bien en
  celular o que dependen solo de una página de Facebook. Arreglar eso ya es media pelea ganada.
</p>`,
    negocios: [
      'Hospedajes, cabinas y hostales',
      'Tours, surf y experiencias de naturaleza',
      'Restaurantes, cafés y comida caribeña',
      'Alquileres y servicios para propiedades',
      'Escuelas, yoga y bienestar',
      'Comercio local y artesanía',
    ],
    faqs: [
      {
        q: 'Solo tengo página de Facebook, ¿es suficiente?',
        a: 'No para este público. El viajero que planea busca en Google, quiere ver precios, disponibilidad y condiciones, y desconfía de quien no tiene sitio propio. La página de Facebook sirve para mostrar el día a día, no para cerrar la reserva.',
      },
      {
        q: '¿Puedo tener el sitio en inglés, español y otro idioma?',
        a: 'Sí. Se estructura cada idioma en su propia sección y se le indica a Google cuál versión mostrar a quién. Conviene empezar por los dos idiomas que de verdad le traen clientes.',
      },
      {
        q: 'La conexión acá no es la mejor, ¿afecta a mi sitio?',
        a: 'Le afecta a sus visitantes, así que el sitio se construye liviano y rápido justamente por eso. Es parte de cómo trabajamos: sitios estáticos, sin peso innecesario.',
      },
    ],
  },
  {
    slug: 'guapiles',
    nombre: 'Guápiles',
    region: 'Caribe',
    provincia: 'Limón',
    cerca: ['Guácimo', 'Siquirres', 'Sarapiquí'],
    metaTitle: 'Páginas Web y SEO en Guápiles, Pococí | HacksinCodigos',
    metaDesc:
      'Páginas web y posicionamiento en Google para negocios de Guápiles y Pococí: agro, comercio, transporte y servicios. Desde $499.',
    h1: 'Páginas web y SEO en Guápiles',
    lead:
      'Guápiles es el centro comercial del Caribe Norte y paso obligado de la ruta 32. Le armamos la presencia para las dos cosas.',
    contextoHtml: `
<p>
  Guápiles es la cabecera de Pococí y el centro de comercio y servicios del Caribe Norte. La
  economía de la zona es fuertemente agrícola —banano, piña, plantas ornamentales, raíces
  tropicales— con empresas exportadoras, proveedores y transportistas alrededor.
</p>
<p>
  Además, por la ruta 32 pasa todo el tránsito entre el Valle Central y Limón, lo que sostiene
  sodas, talleres, hospedajes y servicios de camino.
</p>
<p>
  La competencia digital en la zona es baja, y eso es una oportunidad concreta: en muchas
  categorías el primer negocio que trabaje bien su presencia se queda con la búsqueda del cantón
  por años.
</p>`,
    negocios: [
      'Agroindustria, exportadoras y proveedores',
      'Transporte, logística y maquinaria',
      'Comercio y servicios del centro',
      'Sodas, restaurantes y servicios en ruta',
      'Talleres, construcción y ferreterías',
      'Clínicas, veterinarias y servicios profesionales',
    ],
    faqs: [
      {
        q: 'Le vendo a fincas y empresas, ¿me sirve una página?',
        a: 'Sí, y bastante. El encargado de compras de una finca o una exportadora busca proveedores en Google y compara. Una página que explique qué vende, en qué volúmenes y cómo entrega lo pone en esa lista.',
      },
      {
        q: '¿Puedo vender producto agrícola directo por internet?',
        a: 'Para venta a consumidor final se puede armar catálogo con pedidos y zonas de entrega. Para exportación el trabajo es distinto: ahí importa cómo busca el comprador de afuera, y a veces conviene el sitio en inglés.',
      },
      {
        q: '¿Qué tan rápido se puede ver resultado acá?',
        a: 'Como la competencia local es baja, los arreglos técnicos y el perfil de Google suelen mover cosas en pocas semanas. Las búsquedas más peleadas toman meses, como en todo lado.',
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
