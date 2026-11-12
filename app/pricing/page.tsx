import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { Footer, Header, SectionIntro } from '@/components/site-shell'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Painting & Finishing Pricing in Delhi NCR | Vibroxi',
  description: 'Understand how Vibroxi prepares commercial painting, building repainting, wood polishing and finishing quotations across Delhi NCR. Pricing depends on volume, scope and site conditions.',
  ...canonicalMetadata('/pricing'),
}

const factors = [
  ['Total work volume', 'Measured paintable surface area, number of doors or joinery items, number of buildings, floors, blocks and sites. Larger quantities may change mobilisation and productivity assumptions, but do not guarantee a fixed discount.'],
  ['Type of work and finish', 'Interior or exterior painting, repainting, wood refinishing, preparation-only work and the specified finish system have different labour, material and process requirements.'],
  ['Existing surface condition', 'Peeling paint, cracks, uneven surfaces, old polish, damaged edges, staining and previous coatings can change preparation time and material consumption.'],
  ['Material and specification', 'The selected product, brand, finish, colour, number of coats, primer and any client-approved specification affect the quotation.'],
  ['Access and working conditions', 'Ceiling height, façade access, scaffolding or lift requirements, occupied premises, security procedures, parking, material movement and site restrictions affect execution.'],
  ['Work schedule and phasing', 'Night or weekend shifts, restricted work windows, phased floor handovers, multiple mobilisation dates and coordination with other trades can affect labour planning.'],
  ['Protection and handover requirements', 'Furniture and equipment protection, masking, dust control, waste handling, sample approval, inspection points and snag closure should be defined in the scope.'],
  ['Location and mobilisation', 'The exact address, site count, distance between sites, loading access and expected start date are reviewed before confirming availability and logistics.'],
]

const serviceLinks = [
  { href: '/services/commercial-painting', title: 'Commercial painting', text: 'Office, hotel, retail and other commercial interior or exterior painting work packages.' },
  { href: '/services/building-repainting', title: 'Building repainting', text: 'Exterior elevations, common areas and phased repainting for managed buildings.' },
  { href: '/services/wood-polishing', title: 'Commercial wood polishing', text: 'Doors, frames, fixed joinery, panelling and reception-area refinishing.' },
  { href: '/services/surface-preparation-finishing', title: 'Surface preparation and finishing', text: 'Defined preparation, primer and finishing stages based on the approved substrate and specification.' },
]

const faqs = [
  ['How is commercial painting priced in Delhi NCR?', 'There is no single rate that applies to every commercial project. The estimate depends on measurable work volume, paintable area, surface condition, material specification, access, working hours and the agreed inclusions. Vibroxi reviews these details before confirming a project quotation.'],
  ['Can you give a price per square foot?', 'A per-square-foot rate may be useful for a clearly defined and measurable scope, but the measurement basis must be agreed first. Wall area, ceiling area, floor area and façade area are not interchangeable. Item-based or BOQ pricing may be more suitable for doors, railings, joinery or mixed work packages.'],
  ['Does a larger project always get a lower rate?', 'Not automatically. Larger volume can improve planning when areas are continuous and access is straightforward. Multiple sites, short work windows, difficult access, phased handovers or extensive preparation can offset those efficiencies.'],
  ['Are labour and materials included?', 'The quotation will state whether labour, paint or polish materials, primer, consumables, access equipment, protection and disposal are included or supplied by the client. Do not assume an item is included unless it appears in the written scope.'],
  ['Can you quote from photographs or a BOQ?', 'Photographs and an existing BOQ are useful for an initial review. The final quantity, surface condition, access and specification may still need a site assessment or measurement before a firm quotation is issued.'],
  ['Are repairs, seepage treatment or scaffolding included?', 'Only items listed in the agreed scope are included. Major civil repairs, leak rectification, structural work, specialist access systems and specialist coating systems must be assessed and separately identified where applicable.'],
  ['How do I request a commercial painting quotation?', 'Share the site address, property type, service required, approximate quantity or BOQ, photographs, material specification if known, access restrictions and target dates through WhatsApp. The team can then review the information and advise the next step.'],
]

export default function PricingPage() {
  const message = encodeURIComponent('Hello Vibroxi, I would like to discuss pricing for a commercial painting or finishing project in Delhi NCR.\nProperty / site location:\nType of work:\nApproximate area / quantity:\nNumber of floors / buildings / sites:\nSurface condition:\nMaterial or finish specification (if known):\nAccess / working hours:\nTarget start date:\n')
  return <main className="bg-[#f6f1e8] text-[#183c31]"><Header/>
    <section className="bg-[#183c31] px-5 pb-20 pt-40 text-white lg:px-8"><div className="mx-auto max-w-7xl">
      <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#d9bd80]">Project pricing · Delhi NCR</p>
      <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">Commercial Painting & Finishing Pricing</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">Commercial project pricing depends on the volume of work, type of finish required and actual site conditions. Vibroxi prepares quotations around the defined work package rather than applying one generic rate to every building or surface.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href={`https://wa.me/919312122559?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#c9a66b] px-5 py-3 text-sm font-semibold text-[#183c31]"><MessageCircle size={17}/> Request pricing on WhatsApp <ArrowUpRight size={16}/></a><a href="tel:+919312122559" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white"><Phone size={16}/> Call 93121 22559</a></div>
    </div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="How estimates are prepared" title="What determines the project price?" body="The same floor area can produce very different quotations depending on how much surface is paintable, what preparation is needed and how the work can be carried out. These are the main variables reviewed before pricing."/>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{factors.map(([title,body],i)=><article key={title} className="border border-[#ddd8cd] bg-[#fbf9f4] p-6"><p className="font-serif text-2xl text-[#a17b3f]">0{i+1}</p><h2 className="mt-4 font-serif text-xl">{title}</h2><p className="mt-3 text-sm leading-7 text-[#68716b]">{body}</p></article>)}</div>
    </section>
    <section className="bg-[#ebe4d7] px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Pricing by service type" title="Different work needs different measurement." body="A commercial quotation may use measured area, item counts, BOQ quantities or a combined schedule. The measurement basis is agreed before the price is finalised."/><div className="mt-10 grid gap-4 md:grid-cols-2">{serviceLinks.map((s)=><Link href={s.href} key={s.href} className="group border border-[#d4ccbd] bg-[#f6f1e8] p-6 transition hover:border-[#a17b3f]"><h3 className="font-serif text-2xl">{s.title}</h3><p className="mt-3 text-sm leading-7 text-[#68716b]">{s.text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a17b3f]">Review service scope <ArrowUpRight size={15}/></span></Link>)}</div></div></section>
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:px-8"><div><SectionIntro eyebrow="Quotation checklist" title="What to send for a useful estimate" body="A clear brief helps avoid repeated clarification and makes it easier to compare quotations on the same scope."/><ul className="mt-8 grid gap-4">{['Property name, exact site address and contact person','Property type, number of buildings, floors and work areas','Approximate paintable area, item count or existing BOQ','Photographs showing typical surfaces and damaged areas','Required service, finish, paint or polish specification if known','Current occupancy, access restrictions and permitted working hours','Whether materials, access equipment and protection are client-supplied or contractor-supplied','Expected start date, deadline and preferred handover sequence'].map(x=><li key={x} className="flex gap-3 border-b border-[#ddd8cd] pb-3 text-sm leading-6"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#a17b3f]"/>{x}</li>)}</ul></div>
      <aside className="h-fit rounded-sm bg-[#183c31] p-8 text-white"><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#d9bd80]">Request a project estimate</p><h2 className="mt-4 font-serif text-3xl">Send the scope on WhatsApp.</h2><p className="mt-4 text-sm leading-7 text-white/70">You can share a BOQ, site photographs, a finish schedule or a short description. Initial review does not replace site measurement where that is required.</p><a href={`https://wa.me/919312122559?text=${message}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white"><MessageCircle size={17}/> WhatsApp 93121 22559</a><a href="tel:+919312122559" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-sm font-semibold text-white"><Phone size={16}/> Call 93121 22559</a><p className="mt-5 text-xs leading-5 text-white/55">A quotation is subject to scope review, site conditions, material specification and availability. No fixed rate or mobilisation commitment is implied by this page.</p></aside>
    </section>
    <section className="border-t border-[#ddd8cd] px-5 py-20"><div className="mx-auto max-w-4xl"><SectionIntro eyebrow="Pricing questions" title="Commercial painting quotation FAQs" body="Answers to common questions about commercial painting cost, wood polishing pricing and contractor quotations in Delhi NCR."/><div className="mt-8 grid gap-3">{faqs.map(([q,a])=><details key={q} className="border-b border-[#ddd8cd] py-4"><summary className="cursor-pointer text-sm font-semibold">{q}</summary><p className="mt-3 text-sm leading-7 text-[#68716b]">{a}</p></details>)}</div></div></section>
    <Footer/>
  </main>
}
