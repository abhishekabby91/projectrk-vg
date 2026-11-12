import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Building2, MapPin } from 'lucide-react'
import { Footer, Header, SectionIntro } from '@/components/site-shell'
import { canonicalMetadata } from '@/lib/site'

type Faq = { question: string; answer: string }
type CityPage = {
  name: string
  title: string
  description: string
  intro: string
  areas: string[]
  propertyTypes: string[]
  planning: string[]
  faqs: Faq[]
}

const cities: Record<string, CityPage> = {
  delhi: {
    name: 'Delhi',
    title: 'Commercial Painting & Finishing Contractors in Delhi',
    description: 'Commercial painting, building repainting and wood polishing enquiries for offices, hotels and managed properties across Delhi.',
    intro: 'Vibroxi reviews commercial painting, building repainting, wood polishing and defined finishing work packages across Delhi. Each enquiry is assessed against property type, access, operating hours, surface condition and mobilisation requirements before availability is confirmed.',
    areas: ['Connaught Place and central business districts', 'Aerocity and airport-side commercial properties', 'Okhla and Naraina industrial and business areas', 'Dwarka, Rohini and other commercial clusters'],
    propertyTypes: ['Corporate offices, business centres and commercial buildings', 'Hotels, hospitality premises and public-facing interiors', 'Managed properties, lobbies, corridors and shared spaces', 'Commercial fit-out and refurbishment work packages'],
    planning: ['Phasing work around occupied offices, tenants and visitors', 'Reviewing façade or elevated access before pricing', 'Defining surface preparation, paint systems and protection', 'Agreeing work areas, timing and inspection before mobilisation'],
    faqs: [
      { question: 'Which parts of Delhi can be considered?', answer: 'Enquiries from central, south, west, north, east and airport-side commercial locations can be reviewed. Mobilisation is confirmed after reviewing the exact site and work scope.' },
      { question: 'Do you take commercial office repainting projects?', answer: 'Office repainting can be discussed by floor, zone or complete building, subject to site access, quantities and programme.' },
      { question: 'Can work be planned in an occupied property?', answer: 'Work windows, area isolation, protection and handover sequence can be discussed with the facility or property manager.' },
      { question: 'Can I send a BOQ or site photographs on WhatsApp?', answer: 'Yes. Use the WhatsApp contact on this page to share the location, photographs, BOQ or finish schedule for an initial review.' },
    ],
  },
  gurugram: {
    name: 'Gurugram',
    title: 'Commercial Painting & Finishing Contractors in Gurugram',
    description: 'Commercial interior painting, building repainting and wood refinishing enquiries for offices, hotels and managed properties in Gurugram.',
    intro: 'Commercial projects in Gurugram may require coordination around office occupancy, business-park access, tenant approvals, building management rules and phased handover. Vibroxi reviews these details before confirming a painting or finishing work package.',
    areas: ['Cyber City and DLF business districts', 'Udyog Vihar and industrial-commercial estates', 'Golf Course Road and Golf Course Extension Road', 'Sohna Road and Manesar-side commercial locations'],
    propertyTypes: ['Corporate offices, managed towers and business parks', 'Hotels, serviced properties and hospitality interiors', 'Retail, reception and shared commercial areas', 'Facility management and fit-out contractor work packages'],
    planning: ['Coordinating security access, work permits and material movement', 'Scheduling work around tenant operations and common-area use', 'Reviewing high-level façade access and safety requirements', 'Confirming approved materials, finish samples and snag process'],
    faqs: [
      { question: 'Do you consider projects in Cyber City and Udyog Vihar?', answer: 'Enquiries from these commercial districts can be reviewed. Site access, building permissions, work timing and mobilisation are confirmed individually.' },
      { question: 'Can a business park be handled in phases?', answer: 'A phased approach by tower, floor, tenant area or common space can be discussed where the programme and site permissions allow.' },
      { question: 'Can you work with facility management companies?', answer: 'Defined painting and finishing work packages can be discussed with facility providers, subject to scope, documentation and delivery capacity.' },
      { question: 'How should I share a project brief?', answer: 'Send the site location, approximate area, photographs or BOQ, required finish and target dates through WhatsApp for an initial discussion.' },
    ],
  },
  noida: {
    name: 'Noida',
    title: 'Commercial Painting & Finishing Contractors in Noida',
    description: 'Commercial painting, office repainting and wood polishing enquiries for business parks, offices, hotels and managed properties in Noida.',
    intro: 'Noida has a mix of office campuses, IT and business parks, retail premises, hotels and institutional properties. Vibroxi reviews commercial painting and finishing enquiries with attention to access approvals, operating hours, surface condition and area-wise handover.',
    areas: ['Sector 16, Sector 18 and central commercial areas', 'Sector 62 and adjoining office campuses', 'Sectors 63 and 64 business and industrial clusters', 'Sectors 125, 126, 127 and 132 business districts'],
    propertyTypes: ['IT offices, corporate campuses and business parks', 'Retail premises, showrooms and commercial common areas', 'Hotels and hospitality properties', 'Facility-managed buildings and fit-out projects'],
    planning: ['Coordinating work permits and building management approvals', 'Planning floor-wise or block-wise execution', 'Agreeing protection for equipment, furniture and finished interiors', 'Confirming material specifications and handover checks'],
    faqs: [
      { question: 'Can you take office painting work in Noida sectors?', answer: 'Commercial office enquiries across Noida sectors can be reviewed. Exact availability depends on site access, project size, programme and current capacity.' },
      { question: 'Can painting be completed outside office hours?', answer: 'Evening, weekend or phased work windows can be discussed, but they must be agreed against site permissions and the project schedule.' },
      { question: 'Do you work with property and facility managers?', answer: 'Defined work packages can be discussed with property operators and facility management teams.' },
      { question: 'What details help with an initial estimate?', answer: 'Share the sector and site address, approximate area, surface photographs, BOQ if available, access details and target start date.' },
    ],
  },
  'greater-noida': {
    name: 'Greater Noida',
    title: 'Commercial Painting & Finishing Contractors in Greater Noida',
    description: 'Commercial building repainting, office painting and finishing enquiries for Greater Noida business parks, institutions and managed properties.',
    intro: 'Vibroxi reviews commercial finishing enquiries in Greater Noida for offices, institutional premises, business parks, hotels and managed buildings. Larger sites may need block-wise quantities, mobilisation planning, access arrangements and a clearly sequenced handover.',
    areas: ['Knowledge Park and education-business clusters', 'Pari Chowk and commercial developments', 'Ecotech industrial and business areas', 'Greater Noida West commercial and mixed-use clusters'],
    propertyTypes: ['Business parks, offices and institutional buildings', 'Hotels, banquet and hospitality premises', 'Managed developments and common areas', 'Industrial estate offices and administrative blocks'],
    planning: ['Confirming site count, block layout and total quantities', 'Planning mobilisation for larger or multi-building sites', 'Separating office and administrative scope from specialist process areas', 'Agreeing site-specific access, safety and work sequencing'],
    faqs: [
      { question: 'Do you cover Knowledge Park and Ecotech areas?', answer: 'Enquiries from these areas can be submitted for review. Feasibility is confirmed after checking site details, scope and mobilisation.' },
      { question: 'Can you quote for multiple buildings at one location?', answer: 'A site list, block-wise areas, photographs and BOQ help define a multi-building work package.' },
      { question: 'Can industrial facilities be included?', answer: 'Office and administrative areas may be reviewed. Process areas or specialist industrial coatings require separate technical and capability confirmation.' },
      { question: 'Is Greater Noida West included?', answer: 'Commercial and managed-property enquiries from Greater Noida West can be reviewed against the same project and mobilisation criteria.' },
    ],
  },
  ghaziabad: {
    name: 'Ghaziabad',
    title: 'Commercial Painting & Finishing Contractors in Ghaziabad',
    description: 'Commercial painting and building repainting enquiries for offices, managed properties, hotels and institutional facilities in Ghaziabad.',
    intro: 'Commercial properties in Ghaziabad can involve occupied offices, mixed-use buildings, institutional facilities and managed developments. Vibroxi assesses surface condition, site access, work areas and programme before confirming whether a finishing scope can be undertaken.',
    areas: ['Indirapuram and adjoining commercial centres', 'Vaishali and Kaushambi business areas', 'Sahibabad industrial and commercial estates', 'Raj Nagar, Raj Nagar Extension and Mohan Nagar'],
    propertyTypes: ['Commercial buildings and office premises', 'Hotels and institutional properties, subject to scope', 'Managed developments and common areas', 'Administrative offices within industrial estates'],
    planning: ['Confirming the exact site, access route and work timings', 'Reviewing dampness, peeling or damaged surfaces before repainting', 'Separating minor preparation from major civil repair work', 'Planning material storage, protection and waste removal'],
    faqs: [
      { question: 'Which Ghaziabad localities can send an enquiry?', answer: 'Enquiries from Indirapuram, Vaishali, Kaushambi, Sahibabad, Raj Nagar, Mohan Nagar and nearby commercial areas can be reviewed.' },
      { question: 'Can common areas in managed buildings be repainted?', answer: 'Lobbies, corridors, staircases and other shared areas can be scoped after reviewing quantities, access and building operations.' },
      { question: 'Are dampness and structural repairs included?', answer: 'The painting scope should distinguish surface preparation from leak rectification, structural repair or major civil work. Those items are not assumed to be included.' },
      { question: 'How do I check availability?', answer: 'Send the site location, work description, approximate area and target dates by WhatsApp. Availability is confirmed after review.' },
    ],
  },
  faridabad: {
    name: 'Faridabad',
    title: 'Commercial Painting & Finishing Contractors in Faridabad',
    description: 'Commercial painting, office repainting and wood finishing enquiries for Faridabad business premises, industrial offices and managed properties.',
    intro: 'Vibroxi reviews commercial painting and finishing requirements in Faridabad for offices, business premises, industrial administrative blocks, hotels and managed properties. Site conditions, work area, access and mobilisation are checked before a quotation or programme is confirmed.',
    areas: ['Sector 12, Sector 15 and Sector 16 commercial areas', 'Sector 24 and Sector 25 industrial-commercial estates', 'Neharpar and Greater Faridabad developments', 'Ballabgarh and adjoining business locations'],
    propertyTypes: ['Office buildings and commercial premises', 'Industrial office and administrative blocks', 'Hotels, retail premises and shared areas', 'Facility management and commercial contractor packages'],
    planning: ['Defining the office or administrative scope separately from process areas', 'Checking surface condition and preparation requirements', 'Planning access, work permits and material movement', 'Confirming mobilisation and site-wise programme for larger projects'],
    faqs: [
      { question: 'Can industrial office blocks in Faridabad be considered?', answer: 'Office and administrative areas can be reviewed. Specialist process coatings, plant areas or technical systems require separate capability confirmation.' },
      { question: 'Do you cover Ballabgarh and Greater Faridabad?', answer: 'Enquiries from these locations can be submitted. Feasibility depends on the site, work scope, schedule and mobilisation.' },
      { question: 'Can a facility manager send a BOQ for pricing?', answer: 'Yes. Share the BOQ, site photographs, location, access requirements and proposed programme for an initial review.' },
      { question: 'Do you provide recurring painting maintenance?', answer: 'A planned or recurring work arrangement can be discussed after reviewing the property list, inspection expectations and exact service boundaries.' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(cities).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = cities[slug]
  if (!city) return { title: 'Location not found', robots: { index: false, follow: true } }
  return { title: city.title, description: city.description, ...canonicalMetadata(`/locations/${slug}`) }
}

export default async function CityLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = cities[slug]
  if (!city) notFound()
  const otherCities = Object.entries(cities).filter(([key]) => key !== slug)
  const message = encodeURIComponent(`Hello Vibroxi, I have a commercial project enquiry in ${city.name}.\nSite / property:\nService required:\nApproximate area:\nExpected start date:\n`)
  return <main className="bg-[#f6f1e8] text-[#183c31]">
    <Header/>
    <section className="bg-[#183c31] px-5 pb-20 pt-40 text-white lg:px-8"><div className="mx-auto max-w-7xl">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.25em] text-[#d9bd80]"><MapPin size={14}/> Delhi NCR · {city.name}</p>
      <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">{city.title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{city.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href={`https://wa.me/919312122559?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#c9a66b] px-5 py-3 text-sm font-semibold text-[#183c31]">WhatsApp about a {city.name} project <ArrowUpRight size={16}/></a><a href="tel:+919312122559" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white">Call 93121 22559</a></div>
    </div></section>
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:px-8">
      <div className="grid gap-12">
        <article><SectionIntro eyebrow={`Local coverage · ${city.name}`} title="Commercial areas we can review" body="The localities below are examples of commercial clusters, not a promise of an active site presence or guaranteed response time. Share the exact address to confirm feasibility."/><div className="mt-7 grid gap-3 sm:grid-cols-2">{city.areas.map((area)=><div key={area} className="flex gap-3 border-b border-[#ddd8cd] pb-3 text-sm leading-6"><MapPin size={17} className="mt-0.5 shrink-0 text-[#a17b3f]"/>{area}</div>)}</div></article>
        <article><SectionIntro eyebrow="Property types" title="Projects and properties considered" body="Vibroxi is positioned for defined commercial work packages. Each enquiry is reviewed for site type, scope and execution requirements."/><div className="mt-7 grid gap-3 sm:grid-cols-2">{city.propertyTypes.map((item)=><div key={item} className="flex gap-3 border border-[#ddd8cd] bg-[#fbf9f4] p-4 text-sm leading-6"><Building2 size={18} className="mt-0.5 shrink-0 text-[#a17b3f]"/>{item}</div>)}</div></article>
        <article><SectionIntro eyebrow="Planning considerations" title={`What matters on a ${city.name} site`} body="A useful quotation begins with the details that affect execution. These points are reviewed before the work package is finalised."/><ol className="mt-7 grid gap-4">{city.planning.map((item,i)=><li key={item} className="flex gap-4 border-b border-[#ddd8cd] pb-4"><span className="font-serif text-xl text-[#a17b3f]">0{i+1}</span><span className="text-sm leading-6 text-[#5d655f]">{item}</span></li>)}</ol></article>
        <article><h2 className="font-serif text-3xl md:text-4xl">Questions about commercial projects in {city.name}</h2><div className="mt-6 grid gap-3">{city.faqs.map((faq)=><details key={faq.question} className="border-b border-[#ddd8cd] py-4"><summary className="cursor-pointer text-sm font-semibold">{faq.question}</summary><p className="mt-3 text-sm leading-6 text-[#5d655f]">{faq.answer}</p></details>)}</div></article>
      </div>
      <aside className="h-fit rounded-sm bg-[#ebe4d7] p-7 lg:sticky lg:top-8"><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a17b3f]">Start with WhatsApp</p><h2 className="mt-4 font-serif text-3xl">Share your {city.name} project brief.</h2><p className="mt-4 text-sm leading-7 text-[#5d655f]">Send the property name or address, service required, approximate area, photographs or BOQ, access details and expected start date.</p><a href={`https://wa.me/919312122559?text=${message}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white">WhatsApp 93121 22559 <ArrowUpRight size={16}/></a><a href="tel:+919312122559" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#183c31]/20 px-5 py-3 text-sm font-semibold text-[#183c31]">Call 93121 22559</a><p className="mt-4 text-xs leading-5 text-[#68716b]">Project availability and coverage are confirmed individually. No response-time or mobilisation guarantee is implied.</p></aside>
    </section>
    <section className="border-t border-[#ddd8cd] px-5 py-16"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Other Delhi NCR locations" title="Explore other service areas" body="Each city page covers a separate commercial market. You can also review the regional coverage page for the full service area."/><div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">{otherCities.map(([key,location])=><Link key={key} href={`/locations/${key}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#183c31] underline decoration-[#c9a66b] underline-offset-4">{location.name} <ArrowUpRight size={14}/></Link>)}<Link href="/locations/delhi-ncr" className="text-sm font-semibold text-[#183c31] underline decoration-[#c9a66b] underline-offset-4">Delhi NCR overview</Link></div></div></section>
    <Footer/>
  </main>
}
