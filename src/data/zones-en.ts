/**
 * Versiones en inglés de las zonas donde vive y hace negocios la comunidad
 * extranjera: playas, destinos turísticos y el corredor Escazú–Santa Ana.
 *
 * POR QUÉ EXISTE ESTE ARCHIVO. El sitio tiene un cambiador de idioma por
 * JavaScript, pero eso no sirve para buscadores: Google indexa el HTML servido,
 * que está en español. El extranjero que vive en Costa Rica busca "web designer
 * costa rica" o "web design nosara" en inglés, y esas búsquedas hoy se las
 * llevan sitios para expatriados. Estas páginas son HTML real en inglés, con
 * hreflang cruzado contra su equivalente en español.
 *
 * MISMA REGLA QUE EN ESPAÑOL: cada zona con contenido propio. Y no son
 * traducciones literales: el dueño de un hotel en Nosara tiene otras dudas que
 * el de una soda en Palmares.
 */

export interface ZoneEn {
  slug: string;
  name: string;
  /** Slug de la misma zona en español, para el hreflang. */
  esSlug: string;
  region: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  lead: string;
  contextHtml: string;
  businesses: string[];
  faqs: { q: string; a: string }[];
}

export const zonesEn: ZoneEn[] = [
  {
    slug: 'nosara',
    name: 'Nosara',
    esSlug: 'nosara',
    region: 'Guanacaste',
    metaTitle: 'Web Design & SEO in Nosara, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites and Google rankings for hotels, surf camps, retreats and real estate in Nosara and Guiones. Direct bookings, English and Spanish. From $499.',
    h1: 'Web design and SEO in Nosara',
    lead:
      'Your guests book from another country, months ahead, in English. Your website has to win that moment — not your Instagram feed.',
    contextHtml: `
<p>
  Nosara competes with surf and wellness destinations worldwide, not with the business next door.
  Around Playa Guiones and Playa Pelada there are boutique hotels, vacation rentals, surf schools,
  yoga studios and retreats, real estate offices and restaurants — most of them selling to people
  who have never set foot in Costa Rica.
</p>
<p>
  That guest researches for weeks, compares photos and reviews, checks prices in dollars, and wants
  availability without having to message anyone. If your site is slow, Spanish-only, or you only
  exist on a booking platform, you either lose that guest or pay a commission for them.
</p>
<p>
  We build fast, bilingual sites that load on a bad connection, show your rates clearly, and take
  the booking or inquiry directly — so the guest becomes yours, not the platform's.
</p>`,
    businesses: [
      'Boutique hotels, villas and vacation rentals',
      'Surf schools and surf camps',
      'Yoga studios, retreats and wellness',
      'Real estate and property management',
      'Restaurants and cafés',
      'Construction, maintenance and property services',
    ],
    faqs: [
      {
        q: 'Do you work in English?',
        a: 'Yes. We work with you in English by WhatsApp, email or video call, and we build the site in English, Spanish, or both — each language in its own section of the site, with the tags that tell Google which version to show to whom.',
      },
      {
        q: 'Can I take direct bookings and pay fewer platform commissions?',
        a: 'Yes. Depending on your size, that ranges from a clean inquiry form and WhatsApp to a full booking system with online payment. We review payment gateways with you, including what they charge and which ones work with local banks.',
      },
      {
        q: 'How much does it cost and how long does it take?',
        a: 'A business website starts at $499 and is usually ready in 3 to 7 business days once we have your text and photos. SEO packages start at $250. You get a written proposal with scope and price before anything begins.',
      },
      {
        q: 'Who owns the site when it is done?',
        a: 'You do. Once the project is paid, the site, the domain and every account are in your name, with us as a guest if you want ongoing help. We have seen too many owners locked out by a former web guy.',
      },
    ],
  },
  {
    slug: 'tamarindo',
    name: 'Tamarindo',
    esSlug: 'tamarindo',
    region: 'Guanacaste',
    metaTitle: 'Web Design & SEO in Tamarindo, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites, direct bookings and Google rankings for hotels, tours, restaurants and real estate in Tamarindo, Guanacaste. English and Spanish, from $499.',
    h1: 'Web design and SEO in Tamarindo',
    lead:
      'Tamarindo is one of the most searched beach towns in Costa Rica. That is good news and bad news: the traffic is there, and so is everyone else.',
    contextHtml: `
<p>
  Hotels, condos, surf lessons, sport fishing, restaurants, bars and a real estate market that runs
  largely in dollars and in English. Tamarindo has one of the highest concentrations of foreign-owned
  businesses in the country.
</p>
<p>
  Most of them share the same two problems. First, the booking platforms and the big comparison
  sites take the generic searches and charge for every guest they send. Second, a lot of local sites
  were built years ago, load slowly on mobile, and have not been touched since.
</p>
<p>
  You are not going to outrank a global booking platform for "hotels in Tamarindo", and we will not
  pretend otherwise. What you can win are the specific searches — your type of stay, your
  experience, your street, your niche — which convert far better and cost far less to earn.
</p>`,
    businesses: [
      'Hotels, condos and vacation rentals',
      'Surf schools, tours and sport fishing',
      'Restaurants and bars',
      'Real estate and property management',
      'Services for foreign residents',
      'Transport, transfers and concierge',
    ],
    faqs: [
      {
        q: 'Can you show prices and take payments in dollars?',
        a: 'Yes. We set that up with the payment gateway that fits your bank and your volume, and we make the terms — deposits, cancellation, taxes — clear before checkout, which is where most bookings are lost.',
      },
      {
        q: 'My site was built years ago. Rebuild or fix?',
        a: 'We will tell you honestly after looking at it. If the structure is sound and it is just slow and dated, fixing is cheaper. If it is a pile of plugins on an abandoned theme, rebuilding is safer — and usually faster than patching it.',
      },
      {
        q: 'Do I need the site in Spanish too?',
        a: 'Usually yes, even if your guests are foreign: your staff, suppliers and local customers search in Spanish. Both versions live in the same site, each in its own section.',
      },
    ],
  },
  {
    slug: 'jaco',
    name: 'Jacó',
    esSlug: 'jaco',
    region: 'Central Pacific',
    metaTitle: 'Web Design & SEO in Jacó, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites and Google rankings for hotels, tours, restaurants and real estate in Jacó and Herradura. English and Spanish, direct bookings, from $499.',
    h1: 'Web design and SEO in Jacó',
    lead:
      'Jacó gets two very different customers: the weekend crowd from San José and the foreign visitor who stays for weeks. Your site can win both.',
    contextHtml: `
<p>
  Being the closest beach to the capital gives Jacó a rhythm no other beach town has: heavy national
  weekend traffic, long-stay foreign visitors, a busy rental and real estate market, restaurants,
  nightlife and tours.
</p>
<p>
  The national visitor decides fast, often from the car on a Friday night, and wants price,
  availability and a WhatsApp button in the first five seconds. The foreign visitor plans weeks
  ahead, in English, and reads every review before paying a deposit.
</p>
<p>
  Most sites in town are built for one of the two and ignore the other. Building for both is not
  complicated — it is a matter of structure — and it is the cheapest growth available to a business
  here.
</p>`,
    businesses: [
      'Hotels, cabinas and vacation rentals',
      'Tours, surf lessons and activities',
      'Restaurants, bars and retail',
      'Real estate and property management',
      'Transfers from San José and the airport',
      'Services for foreign residents',
    ],
    faqs: [
      {
        q: 'Will the site work on a weak connection?',
        a: 'That is how we build by default: static sites, no unnecessary weight, images compressed properly. It matters here, where a lot of your visitors are browsing on mobile data at the beach.',
      },
      {
        q: 'Can you connect my site to a booking calendar?',
        a: 'Yes, or keep it simpler with a form and WhatsApp if your volume does not justify a booking engine yet. We will tell you which one actually fits your case.',
      },
      {
        q: 'Do you work with foreign-owned businesses?',
        a: 'Yes, and often. We work in English, send written proposals, and everything ends up registered in your name.',
      },
    ],
  },
  {
    slug: 'manuel-antonio',
    name: 'Manuel Antonio',
    esSlug: 'quepos',
    region: 'Central Pacific',
    metaTitle: 'Web Design & SEO in Manuel Antonio and Quepos',
    metaDesc:
      'Websites, direct bookings and SEO for hotels, tours and restaurants in Manuel Antonio and Quepos. English and Spanish, from $499.',
    h1: 'Web design and SEO in Manuel Antonio',
    lead:
      'Manuel Antonio is one of the most searched destinations in the country. The question is whether the booking gets to you or to a platform.',
    contextHtml: `
<p>
  The national park, the beaches, sport fishing out of Quepos, the wildlife tours and a long strip of
  hotels and restaurants make this one of the highest-demand tourism markets in Costa Rica.
</p>
<p>
  That demand is mostly captured by large booking and comparison sites, which sit at the top of the
  generic searches and take a cut of every guest. Meanwhile, plenty of excellent local businesses
  have sites that are slow, outdated or only reachable through a Facebook page.
</p>
<p>
  A fast, well-structured site of your own does two things: it gets you the guests who search for
  your name or your specific experience, and it gives you somewhere to send the people who find you
  on social media — without paying a commission for them.
</p>`,
    businesses: [
      'Hotels, lodges and vacation rentals',
      'Nature tours and sport fishing',
      'Restaurants and cafés',
      'Transfers and transport',
      'Equipment rental and experiences',
      'Property services and management',
    ],
    faqs: [
      {
        q: 'Can I compete with the big booking sites?',
        a: 'Not on the broadest searches, and anyone promising that is selling you something. You can win your own name, your specific type of stay or tour, and the long-tail searches that convert best — that is where direct bookings come from.',
      },
      {
        q: 'What about reviews?',
        a: 'For foreign visitors, reviews are the first filter. Asking real guests for a Google review after their stay, and replying to all of them, is the cheapest and most effective thing you can do. We set that process up with you.',
      },
      {
        q: 'How do we work together if I am not in Costa Rica year-round?',
        a: 'Everything is remote — video call, WhatsApp or email, previews by link. Plenty of our clients approve their site from another country.',
      },
    ],
  },
  {
    slug: 'la-fortuna',
    name: 'La Fortuna',
    esSlug: 'la-fortuna',
    region: 'Northern Zone',
    metaTitle: 'Web Design & SEO in La Fortuna and Arenal, Costa Rica',
    metaDesc:
      'Websites and direct bookings for hotels, tours and hot springs in La Fortuna and Arenal. English and Spanish, SEO from $250.',
    h1: 'Web design and SEO in La Fortuna',
    lead:
      'Nobody stumbles into La Fortuna. They plan it — from home, in English, weeks before they land.',
    contextHtml: `
<p>
  Arenal is on almost every first-time Costa Rica itinerary: volcano views, hot springs, hanging
  bridges, rafting, waterfalls. Hotels, tour operators, transport companies and restaurants here all
  depend on a decision made long before the traveler arrives in the country.
</p>
<p>
  Which means your website is not a brochure. It is the sales floor. If it does not load fast, show
  real photos, state what is included and let the traveler book or ask in one step, the sale goes to
  whoever does.
</p>
<p>
  We also build the AI agents that answer those questions at 2 a.m. in the traveler's time zone —
  which in a market that sells to three continents is worth more than it sounds.
</p>`,
    businesses: [
      'Hotels, lodges and cabinas',
      'Tour operators and adventure companies',
      'Hot springs and spas',
      'Transport and shuttle services',
      'Restaurants and cafés',
      'Independent guides and experiences',
    ],
    faqs: [
      {
        q: 'Can something answer guests while I sleep?',
        a: 'Yes — an AI agent on WhatsApp, Instagram or your website answers the repetitive questions (rates, availability, what is included, how to get there) around the clock in English and Spanish, and hands you the conversations worth closing. That is one of our core services.',
      },
      {
        q: 'Do you build multilingual sites?',
        a: 'Yes, each language in its own section with the correct tags. We research how travelers actually search in that language instead of translating word for word.',
      },
      {
        q: 'What does it cost?',
        a: 'Websites start at $499, SEO packages at $250, and AI agents are quoted by scope. Everything is confirmed in writing before we start.',
      },
    ],
  },
  {
    slug: 'monteverde',
    name: 'Monteverde',
    esSlug: 'monteverde',
    region: 'Puntarenas',
    metaTitle: 'Web Design & SEO in Monteverde, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites and direct bookings for lodges, tours and businesses in Monteverde and Santa Elena. English and Spanish, from $499.',
    h1: 'Web design and SEO in Monteverde',
    lead:
      'Monteverde sells a story — conservation, cloud forest, community. A platform listing cannot tell it. Your own site can.',
    contextHtml: `
<p>
  Cloud forest reserves, birding, canopy tours, coffee and cheese, small lodges and a community with
  a long history in conservation and sustainable tourism. Monteverde attracts a traveler who reads,
  compares, and cares who they give their money to.
</p>
<p>
  That traveler is exactly the one a listing on a booking platform cannot win for you: the platform
  shows a price and a photo, not your story, your guides, or what your business gives back to the
  area.
</p>
<p>
  A site of your own — fast, honest, bilingual — is where that traveler decides you are worth more
  than the cheapest option on the list.
</p>`,
    businesses: [
      'Lodges, hotels and B&Bs',
      'Nature, birding and canopy tours',
      'Coffee, cheese and local products',
      'Restaurants and cafés',
      'Transport and shuttles',
      'Guides and educational experiences',
    ],
    faqs: [
      {
        q: 'Can I sell coffee or local products online too?',
        a: 'Yes. We can add a catalog with orders and shipping to your existing site, or build a separate store if the volume justifies it. Shipping rules and payment options get decided before we build, not after.',
      },
      {
        q: 'Is a slow connection a problem for my visitors?',
        a: 'It is, which is why we build static, lightweight sites. A heavy site loses people before the first photo appears.',
      },
      {
        q: 'Do you handle both English and Spanish?',
        a: 'Yes, with each language in its own section and real keyword research for each one, not a word-for-word translation.',
      },
    ],
  },
  {
    slug: 'puerto-viejo',
    name: 'Puerto Viejo',
    esSlug: 'puerto-viejo',
    region: 'Caribbean',
    metaTitle: 'Web Design & SEO in Puerto Viejo, Caribbean Costa Rica',
    metaDesc:
      'Websites and SEO for hostels, hotels, tours and restaurants in Puerto Viejo, Cahuita and the Caribbean coast. English and Spanish, from $499.',
    h1: 'Web design and SEO in Puerto Viejo',
    lead:
      'The Caribbean side runs on long-stay travelers who research hard before they come. Most local businesses are invisible to them.',
    contextHtml: `
<p>
  Puerto Viejo, Cahuita and Manzanillo attract a traveler who stays longer, spends locally and picks
  places that feel real rather than corporate. Many of the businesses here are small, family-run, or
  owned by foreigners who settled in the area.
</p>
<p>
  The weak spot is almost always technical, not commercial: sites built years ago, slow on mobile,
  or no site at all — just a Facebook page. That traveler wants rates, availability and terms before
  they commit, and a social page cannot give them that.
</p>
<p>
  Fixing that is not expensive, and on this coast it is still uncrowded: the local search competition
  is far lighter than in Guanacaste, so good work shows up in results quickly.
</p>`,
    businesses: [
      'Hostels, hotels and cabinas',
      'Surf, nature and jungle tours',
      'Restaurants, cafés and Caribbean food',
      'Rentals and property services',
      'Yoga, wellness and schools',
      'Local shops and artisans',
    ],
    faqs: [
      {
        q: 'I only have a Facebook page. Is that enough?',
        a: 'Not for this traveler. They search on Google, want to see rates and availability, and trust a business with its own site more than one that only exists on social media. Keep the page for daily life; the site is what closes the booking.',
      },
      {
        q: 'Can the site be in more than two languages?',
        a: 'Yes, though we suggest starting with the two that actually bring you guests. Each language gets its own section and the proper tags so Google shows the right one.',
      },
      {
        q: 'Do you come out here to work?',
        a: 'No need — everything is remote, and it does not change the price or the timeline. That is the advantage of working this way.',
      },
    ],
  },
  {
    slug: 'liberia',
    name: 'Liberia',
    esSlug: 'liberia',
    region: 'Guanacaste',
    metaTitle: 'Web Design & SEO in Liberia, Guanacaste | HacksinCodigos',
    metaDesc:
      'Websites and Google rankings for businesses in Liberia, Guanacaste: tourism, rentals, services and retail. English and Spanish, from $499.',
    h1: 'Web design and SEO in Liberia',
    lead:
      'Most Guanacaste visitors land in Liberia with every decision already made. Your business has to be in those decisions.',
    contextHtml: `
<p>
  Liberia is the gateway to the North Pacific through the Daniel Oduber international airport, plus
  the commercial and service hub of the province: car rentals, transfers, hotels, clinics, retail and
  the suppliers that keep the coastal tourism business running.
</p>
<p>
  Two very different markets search here. The arriving visitor searches in English, from abroad,
  before the trip. The local business, farm or resident searches in Spanish, right now, for something
  practical.
</p>
<p>
  A single site can serve both if it is structured properly — and most of your competitors are only
  serving one of them, which is where the opening is.
</p>`,
    businesses: [
      'Hotels, hostels and vacation rentals',
      'Car rental, tours and transfers',
      'Restaurants and retail',
      'Clinics and professional services',
      'Construction and property services',
      'Suppliers to coastal tourism businesses',
    ],
    faqs: [
      {
        q: 'Should my site be bilingual?',
        a: 'If any part of your revenue touches tourism, yes. Each language lives in its own section, with research into how people actually search in that language.',
      },
      {
        q: 'Can you help me get found for airport-related searches?',
        a: 'Those are competitive but specific, which helps: transfers, rentals, and services tied to arrival times can be targeted precisely. We look at what is realistic for your case before quoting.',
      },
      {
        q: 'How do payments work for a foreign-owned business?',
        a: 'We invoice in dollars and accept SINPE Móvil or bank transfer. The proposal, scope and price are in writing before we start.',
      },
    ],
  },
  {
    slug: 'escazu',
    name: 'Escazú',
    esSlug: 'escazu',
    region: 'Greater Metropolitan Area',
    metaTitle: 'Web Design & SEO in Escazú, Costa Rica | HacksinCodigos',
    metaDesc:
      'Premium websites and SEO for clinics, law firms, real estate and companies in Escazú and Santa Ana. English and Spanish, built in Costa Rica.',
    h1: 'Web design and SEO in Escazú',
    lead:
      'In Escazú your client compares before they call, and they can tell when a website was cheap. Your site is part of the price you get to charge.',
    contextHtml: `
<p>
  Escazú concentrates corporate offices, high-end retail and restaurants, medical and dental
  clinics, law and accounting firms, real estate, and one of the largest communities of foreign
  residents in the country.
</p>
<p>
  This market behaves differently from the rest of Costa Rica. People research in English and
  Spanish, read reviews, look at the site on their phone, and quietly discount any business whose
  website looks improvised. In medical tourism, real estate and professional services, that first
  impression is worth thousands of dollars per client.
</p>
<p>
  We build the kind of site that holds that standard: fast, clearly written, bilingual when it makes
  sense, with the technical SEO done properly so you also show up in the searches your competitors
  are paying Google for.
</p>`,
    businesses: [
      'Dental, medical and aesthetic clinics',
      'Law, accounting and consulting firms',
      'Real estate and property management',
      'Restaurants and hospitality',
      'Corporate offices and B2B services',
      'Services for foreign residents',
    ],
    faqs: [
      {
        q: 'Do you work with medical tourism clients?',
        a: 'Yes. We built the site for RyV Dental, a dental clinic in Palmares, and the Costa Rica Realty PRO property portal. Both are published in our portfolio with names and links, so you can check the work yourself.',
      },
      {
        q: 'Can you handle English and Spanish properly?',
        a: 'Yes, and properly means separate sections per language with the right tags — not a plugin that machine-translates the page, which is what usually damages rankings.',
      },
      {
        q: 'We also need internal systems, not just a website.',
        a: 'We build custom software too: CRMs, quoting and inventory systems, mobile apps and integrations with what you already use. You can start with one module and grow from there.',
      },
    ],
  },
  {
    slug: 'santa-ana',
    name: 'Santa Ana',
    esSlug: 'santa-ana',
    region: 'Greater Metropolitan Area',
    metaTitle: 'Web Design & SEO in Santa Ana, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites, custom software and SEO for companies and businesses in Santa Ana and Ciudad Colón. English and Spanish, from $499.',
    h1: 'Web design and SEO in Santa Ana',
    lead:
      'Santa Ana businesses usually do not have a marketing problem. They have a "too many messages, no system" problem.',
    contextHtml: `
<p>
  Santa Ana has grown into one of the busiest corporate and residential corridors in the country:
  offices, restaurants, gyms and studios, professional services, and a large community of foreign
  residents and remote workers.
</p>
<p>
  The pattern we see here is consistent. The business started with one phone and WhatsApp, grew, and
  now loses customers not for lack of demand but because nobody answered in time, or because there is
  no record of who asked what.
</p>
<p>
  So the work is usually two things: a site that answers the obvious questions before anyone writes,
  and automation behind it — an AI agent for the repetitive messages, and a proper system when the
  business has outgrown spreadsheets.
</p>`,
    businesses: [
      'Professional services and consultancies',
      'Restaurants and hospitality',
      'Gyms, studios and wellness',
      'Retail and niche brands',
      'Companies needing custom software',
      'Services for foreign residents',
    ],
    faqs: [
      {
        q: 'Can an AI agent handle customer messages in English?',
        a: 'Yes, in English and Spanish, on WhatsApp, Instagram or your website. It answers the repetitive questions at any hour and passes you the conversations that are worth your time.',
      },
      {
        q: 'Do you build custom systems?',
        a: 'Yes: CRM, orders, inventory, internal tools and integrations with the software you already run. We scope it in writing first, and you can start with a single module.',
      },
      {
        q: 'How do we handle contracts and invoicing?',
        a: 'Written proposal with scope and price before work starts, electronic invoicing, and maintenance plans with response commitments if you need them.',
      },
    ],
  },
  {
    slug: 'atenas',
    name: 'Atenas',
    esSlug: 'atenas',
    region: 'Alajuela',
    metaTitle: 'Web Design & SEO in Atenas, Costa Rica | HacksinCodigos',
    metaDesc:
      'Websites and SEO for businesses in Atenas, Alajuela, serving both the local market and the foreign resident community. From $499.',
    h1: 'Web design and SEO in Atenas',
    lead:
      'Atenas has one of the country´s best known expat communities. Half your market searches in English — and most local businesses ignore that half.',
    contextHtml: `
<p>
  Atenas built its reputation on climate, and with it came a sizeable community of foreign residents
  and retirees, alongside the traditional local commerce and a steady flow of traffic heading toward
  the Pacific coast.
</p>
<p>
  That creates two markets in one small canton. The Costa Rican customer searches in Spanish for a
  service nearby. The foreign resident searches in English — for home services, health care,
  restaurants, property help — and often asks in a Facebook group because they cannot find anything
  in Google.
</p>
<p>
  Being the business that actually shows up in that English search, with clear information and real
  reviews, is an advantage almost nobody in the area is claiming yet.
</p>`,
    businesses: [
      'Home services, maintenance and construction',
      'Real estate and property management',
      'Restaurants, cafés and small hotels',
      'Health, therapy and wellness services',
      'Local retail and trades',
      'Services aimed at foreign residents',
    ],
    faqs: [
      {
        q: 'Most of my customers are expats. Should the site be English-only?',
        a: 'Usually not. Keep both: English for the resident community and Spanish for local customers, suppliers and staff. Both versions live in the same site, each in its own section.',
      },
      {
        q: 'How do I get found by the expat community?',
        a: 'An English version of the pages that matter, a Google Business profile with correct information, and reviews from real customers. That community relies heavily on reviews and recommendations.',
      },
      {
        q: 'Is it worth it for a small local business?',
        a: 'In a canton this size, yes — the local search competition is light, so a solid profile plus a simple site often puts you first for your category.',
      },
    ],
  },
];

export function getZoneEn(slug: string): ZoneEn | undefined {
  return zonesEn.find((z) => z.slug === slug);
}
