import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { ButtonLink, EnquiryForm, Footer, Header } from '@/components/site-shell'
import { canonicalMetadata } from '@/lib/site'

type ServicePageData = {
  label: string
  title: string
  description: string
  intro: string
  scope: string[]
  workflow: string[]
  faqs: { question: string; answer: string }[]
}

const pages: Record<string, ServicePageData> = {
  'commercial-painting': {
    label: 'Commercial painting',
    title: 'Commercial Painting Contractors',
    description: 'Commercial interior and exterior painting for offices, hotels, managed properties and commercial buildings across Delhi NCR.',
    intro: 'Vibroxi discusses commercial painting scopes with facility teams, property operators and project contractors. Work is planned around the condition of the surfaces, site access, occupancy, finish requirements and the agreed programme.',
    scope: ['Interior painting for offices, hotels and shared commercial areas', 'Exterior repainting and common-area work packages', 'Surface preparation, primer and finish coats as agreed in the BOQ', 'Protection, phasing and area-wise handover planning'],
    workflow: ['Share the property type, site address, approximate area and target dates.', 'Arrange a site review to understand surface condition, access and operational constraints.', 'Confirm the BOQ, material system, inclusions, exclusions and schedule.', 'Coordinate the approved work package and review the handover areas.'],
    faqs: [
      { question: 'What types of commercial properties can be considered?', answer: 'Office buildings, hotels, commercial premises and managed properties can be considered after reviewing the location, work scope and delivery requirements.' },
      { question: 'Can painting be planned while a building remains occupied?', answer: 'Phasing can be discussed around access windows, operating hours, protection requirements and the areas released by the property team.' },
      { question: 'Can Vibroxi work from an existing BOQ?', answer: 'Yes. An existing BOQ, drawings or finish schedule can be reviewed as part of the scope discussion. Site conditions may still need verification.' },
      { question: 'Does the quotation include materials and labour?', answer: 'The quotation should clearly state whether materials, labour, access equipment, protection and disposal are included. These items are confirmed for each project.' },
      { question: 'Can a commercial painting project be split into phases?', answer: 'A project can be discussed by floor, zone, building or work package, subject to site access and the agreed programme.' },
    ],
  },
  'building-repainting': {
    label: 'Building repainting',
    title: 'Commercial Building Repainting',
    description: 'Building repainting scopes for commercial property owners and facility managers in Delhi NCR, planned around access and site conditions.',
    intro: 'Building repainting requires more than selecting a paint finish. Surface condition, access, weather exposure, protection, occupied areas and the handover sequence all affect the work plan.',
    scope: ['Exterior and façade repainting where access and safety can be arranged', 'Common-area repainting for corridors, lobbies and shared spaces', 'Surface preparation and coating systems defined in the approved scope', 'Phased execution for operating commercial properties'],
    workflow: ['Review building type, height, surface condition and access arrangements.', 'Inspect representative areas and confirm preparation requirements.', 'Document coating system, quantities, protection and exclusions.', 'Agree work sequencing, inspection points and final handover.'],
    faqs: [
      { question: 'Can repainting be planned for an occupied building?', answer: 'Yes, phasing and access windows can be discussed with the building manager. The final sequence depends on operational restrictions and safety requirements.' },
      { question: 'Do you assess the existing surface before quoting?', answer: 'A site assessment is important because peeling, cracks, dampness and previous coatings can change preparation requirements and quantities.' },
      { question: 'Can common areas be included in the same project?', answer: 'Lobbies, corridors, staircases and other shared spaces can be scoped as separate work areas within a wider building repainting programme.' },
      { question: 'Are access systems included?', answer: 'Scaffolding, lifts, rope access or other access arrangements must be specified and priced explicitly in the project quotation.' },
      { question: 'Can a multi-building programme be considered?', answer: 'A portfolio or multi-building requirement can be reviewed using a site list, approximate areas, access conditions and proposed programme.' },
    ],
  },
  'wood-polishing': {
    label: 'Wood polishing and refinishing',
    title: 'Commercial Wood Polishing & Refinishing',
    description: 'Wood polishing and refinishing for commercial interiors, hotel joinery, doors, panelling and reception areas in Delhi NCR.',
    intro: 'Wood surfaces in hotels, offices and commercial interiors need a finish suited to the existing substrate, usage and desired appearance. The scope should begin with a review of the wood condition and a sample approval where appropriate.',
    scope: ['Doors, frames, wall panelling and fixed joinery', 'Reception counters and selected interior wood surfaces', 'Surface preparation, stain matching and finish application', 'Refinishing of existing surfaces where condition allows'],
    workflow: ['Share photographs and identify the wood surface and property use.', 'Review the existing finish and whether repair or stripping is required.', 'Agree sample, finish type, preparation and protection requirements.', 'Complete the approved areas and inspect finish consistency.'],
    faqs: [
      { question: 'Which commercial wood surfaces can be considered?', answer: 'Doors, frames, panelling, reception counters and fixed joinery can be considered after reviewing the substrate and current finish.' },
      { question: 'Can existing polished wood be refinished?', answer: 'Existing surfaces may be refinished where their condition allows. The preparation method depends on the current coating, damage and substrate.' },
      { question: 'Can a sample finish be approved before larger work begins?', answer: 'A sample or test area is a useful way to agree colour and sheen before proceeding across a larger visible area.' },
      { question: 'Can the work be carried out in an operating hotel or office?', answer: 'Work phasing, ventilation, access and protection can be discussed with the site team. The practical method depends on the selected materials and location.' },
      { question: 'Are specialist finishes such as PU or melamine available?', answer: 'Specific finish systems should only be confirmed after the team verifies product availability, substrate suitability and execution capability for the project.' },
    ],
  },
  'surface-preparation-finishing': {
    label: 'Surface preparation',
    title: 'Surface Preparation & Finishing',
    description: 'Surface preparation and finishing support for commercial painting and property refurbishment scopes in Delhi NCR.',
    intro: 'A durable finish depends on what happens before the final coat. Vibroxi scopes preparation around the existing surface, approved coating system, protection needs and site conditions.',
    scope: ['Removal of loose or unsound existing finish where included', 'Minor filling, sanding and surface preparation as specified', 'Primer and finish-coat coordination with the approved system', 'Protection of adjacent fixtures and work-area handover'],
    workflow: ['Identify the substrate and existing coating condition.', 'Agree preparation level, sample requirements and material specifications.', 'Confirm protection, access, exclusions and work sequence.', 'Inspect prepared surfaces and completed finish against the agreed scope.'],
    faqs: [
      { question: 'Why is surface preparation important?', answer: 'Preparation affects adhesion and the appearance of the final finish. The required method depends on the substrate and condition.' },
      { question: 'Are major civil repairs included?', answer: 'Major civil, structural or construction work is outside the stated finishing focus and should not be assumed to be included. Any minor preparation is defined in writing.' },
      { question: 'Can the material system be specified by the client?', answer: 'Client specifications can be reviewed and incorporated where suitable for the substrate and agreed scope.' },
      { question: 'Will the work area be protected?', answer: 'Protection requirements for floors, furniture, fixtures and adjacent areas should be listed in the project scope and agreed before work starts.' },
      { question: 'How is completed work inspected?', answer: 'Inspection criteria should be agreed for the project, including finish appearance, coverage, snag items and area-wise handover.' },
    ],
  },
'office-commercial-interior-painting': {
    label: 'Commercial interiors',
    title: 'Office & Commercial Interior Painting',
    description: 'Interior repainting for offices, hotels, retail environments and shared commercial spaces in Delhi NCR.',
    intro: 'Planned interior repainting for offices, business parks, hotels and commercial common areas, coordinated around access and occupancy.',
    scope: ['Work-area phasing for occupied properties', 'Wall, ceiling and feature-surface preparation', 'Colour and finish coordination with project teams', 'Handover by floor, zone or work package'],
    workflow: ['Review the property and affected areas.', 'Agree access, protection and working windows.', 'Confirm surface preparation and finish schedule.', 'Complete work by the agreed area sequence.'],
    faqs: [
      { question: 'Can office painting be completed outside business hours?', answer: 'Working windows can be discussed with the property team and reflected in the agreed programme.' },
      { question: 'Can one floor be completed at a time?', answer: 'Floor-wise or zone-wise phasing can be considered where site access and resources allow.' },
      { question: 'Can the client specify paint products?', answer: 'Specified products can be reviewed and included in the scope after confirming suitability and availability.' },
      { question: 'Can ceilings and common areas be included?', answer: 'Ceilings and shared areas can be included when quantities, access and preparation requirements are defined.' },
      { question: 'How do you minimise disruption?', answer: 'The work plan can address access windows, protection, sequencing and handover with the building representative.' },
    ],
  },
'commercial-wood-polishing-refinishing': {
    label: 'Wood finishes',
    title: 'Commercial Wood Polishing & Refinishing',
    description: 'Wood polishing and refinishing for commercial joinery, doors, panelling and reception areas.',
    intro: 'Wood polishing and refinishing for joinery, doors, panelling, reception desks and hospitality interiors where finish consistency matters.',
    scope: ['Surface preparation and stain matching', 'Finish-system review based on substrate', 'Refinishing for existing joinery where feasible', 'Sample approval before larger-area application'],
    workflow: ['Identify the wood surface and existing coating.', 'Review repair and preparation requirements.', 'Approve the sample and finish specification.', 'Complete and inspect the agreed areas.'],
    faqs: [
      { question: 'Can existing wood finishes be restored?', answer: 'Restoration may be possible depending on the existing coating, substrate and level of damage.' },
      { question: 'Do you provide stain matching?', answer: 'Stain matching can be discussed using a sample and the available material system.' },
      { question: 'Can work be performed in hotel common areas?', answer: 'Access, ventilation, protection and guest movement need to be coordinated with hotel operations.' },
      { question: 'Are all wood types suitable for the same polish?', answer: 'No. The substrate and current coating affect the suitable preparation and finish system.' },
      { question: 'Can you provide a written scope?', answer: 'The agreed scope should list the surfaces, preparation, finish system, sample approval and exclusions.' },
    ],
  },
'painting-subcontractor-interior-fit-out-contractors': {
    label: 'For fit-out teams',
    title: 'Painting & Finishing Subcontractor',
    description: 'Painting and finishing execution support for commercial fit-out contractors and project managers in Delhi NCR.',
    intro: 'Vibroxi can discuss painting and finishing work packages with commercial fit-out contractors. The role is execution support for defined finishing scopes, not design or construction.',
    scope: ['Painting and finishing work packages', 'Sequence alignment with other trades', 'Scope clarity around preparation and final coats', 'Punch-list and snag closure within the agreed package'],
    workflow: ['Review drawings, BOQ, finish schedule and programme.', 'Confirm work boundaries, interfaces and exclusions.', 'Agree mobilisation, access and inspection points.', 'Complete the package and close agreed snags.'],
    faqs: [
      { question: 'Do you provide interior design or construction?', answer: 'No. The focus is painting, polishing and finishing execution. Design and construction are not presented as Vibroxi services.' },
      { question: 'Can you work from a fit-out BOQ?', answer: 'A BOQ and finish schedule can be reviewed to define the painting and finishing work package.' },
      { question: 'Can you coordinate with other trades?', answer: 'Trade interfaces and work sequence can be discussed with the project manager before execution.' },
      { question: 'Can you support snag closure?', answer: 'Snag items within the agreed painting and finishing scope can be reviewed and scheduled for closure.' },
      { question: 'Do you accept projects outside Delhi NCR?', answer: 'Projects outside the initial region can be reviewed individually based on size, schedule and mobilisation feasibility.' },
    ],
  },
'commercial-painting-maintenance-programs': {
    label: 'Recurring work',
    title: 'Commercial Painting Maintenance Programmes',
    description: 'Planned repainting and recurring finishing work packages for commercial properties and facility teams.',
    intro: 'A planned programme can help property teams identify priority areas and schedule repainting before work becomes an urgent operational issue. Scope and service levels must be agreed for each property.',
    scope: ['Periodic review of painted areas', 'Priority-based repainting work packages', 'Portfolio and multi-site requirements', 'Planned work aligned to property operations'],
    workflow: ['List properties, areas and current maintenance concerns.', 'Review condition and establish priorities.', 'Agree annual or periodic scope, exclusions and budget process.', 'Schedule work and review completed packages.'],
    faqs: [
      { question: 'Is this an annual maintenance contract?', answer: 'An annual or periodic arrangement can be discussed, but the exact services, visits, response times and exclusions must be agreed in writing.' },
      { question: 'Does the programme include emergency repairs?', answer: 'Emergency response is not assumed. It must be separately defined with realistic availability and response commitments.' },
      { question: 'Can multiple properties be covered?', answer: 'Portfolio requirements can be assessed using property locations, site count, condition and expected work volume.' },
      { question: 'How are priorities decided?', answer: 'Priorities can be based on site condition, safety, visibility, operational impact and the property manager’s requirements.' },
      { question: 'Can the scope be reviewed each year?', answer: 'The programme can include a periodic review process if inspection frequency and reporting responsibilities are agreed.' },
    ],
  },
}

const canonicalServiceSlugs = ['commercial-painting', 'building-repainting', 'wood-polishing', 'surface-preparation-finishing']
export function generateStaticParams() { return canonicalServiceSlugs.map((slug) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return { title: 'Service not found', robots: { index: false, follow: true } }
  return { title: page.title, description: page.description, ...canonicalMetadata(`/services/${slug}`) }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()
  return <main className="bg-[#f6f1e8] text-[#183c31]"><Header/>
    <section className="bg-[#183c31] px-5 pb-20 pt-40 text-white lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#d9bd80]">{page.label} · Delhi NCR</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">{page.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{page.intro}</p><div className="mt-8"><ButtonLink dark href="/contact">Discuss a commercial project</ButtonLink></div></div></section>
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:px-8"><div className="grid gap-12">
      <article><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a17b3f]">Potential scope</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">What the work package may include</h2><div className="mt-8 grid gap-4">{page.scope.map((point)=><div key={point} className="flex gap-3 border-b border-[#ddd8cd] pb-4 text-base"><Check size={19} className="mt-0.5 shrink-0 text-[#a17b3f]"/>{point}</div>)}</div></article>
      <article><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a17b3f]">Project workflow</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">From site review to handover</h2><ol className="mt-8 grid gap-5">{page.workflow.map((step,i)=><li key={step} className="flex gap-4 border-b border-[#ddd8cd] pb-4"><span className="font-serif text-xl text-[#a17b3f]">0{i+1}</span><span className="text-sm leading-6 text-[#5d655f]">{step}</span></li>)}</ol></article>
      <section><h2 className="font-serif text-3xl md:text-4xl">Questions about this service</h2><div className="mt-6 grid gap-3">{page.faqs.map((faq)=><details key={faq.question} className="border-b border-[#ddd8cd] py-4"><summary className="cursor-pointer text-sm font-semibold">{faq.question}</summary><p className="mt-3 text-sm leading-6 text-[#5d655f]">{faq.answer}</p></details>)}</div></section>
    </div><aside id="contact" className="h-fit rounded-sm bg-white p-6 shadow-sm md:p-8"><h2 className="font-serif text-3xl">Request a project discussion</h2><p className="mb-7 mt-3 text-sm leading-6 text-[#68716b]">Share the site, approximate quantities, service requirement and target programme. Availability and scope are confirmed after review.</p><EnquiryForm/></aside></section>
    <section className="border-t border-[#ddd8cd] px-5 py-16"><div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a17b3f]">Related information</p><h2 className="mt-2 font-serif text-3xl">Explore other commercial work</h2></div><Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a17b3f]">Industries we support <ArrowRight size={16}/></Link></div></section><Footer/></main>
}
