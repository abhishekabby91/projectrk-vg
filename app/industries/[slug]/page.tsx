import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentPage } from '@/components/content-page'
import { canonicalMetadata } from '@/lib/site'

const sectors: Record<string, { title: string; description: string; intro: string; sections: { title: string; body: string; items?: string[] }[] }> = {
  'facility-management': {
    title: 'Facility Management Painting Support',
    description: 'Specialist painting and finishing work packages for facility management providers and property operations teams in Delhi NCR.',
    intro: 'Facility management providers may need a specialist contractor for planned repainting, common-area finishing or defined site work packages. Vibroxi discusses the scope, site procedures, access and handover requirements before confirming a project.',
    sections: [
      { title: 'Where a specialist contractor may fit', body: 'A specialist painting and finishing work package can sit alongside the facility provider’s wider maintenance operation. The work boundaries and escalation path should be clear before mobilisation.', items: ['Planned commercial repainting', 'Common-area and shared-space finishing', 'Wood polishing and refinishing', 'Defined site-wise work orders'] },
      { title: 'Vendor and site coordination', body: 'Facility sites may require vendor onboarding, safety induction, work permits, insurance documentation, staff verification and reporting. Requirements must be reviewed and confirmed before any commitment.', items: ['Site induction and access requirements', 'Approved BOQ and work order', 'Site contact and reporting structure', 'Inspection and handover records'] },
      { title: 'Recurring work', body: 'Repeat work can be considered when the property list, service scope, visit frequency, response expectations and exclusions are documented. No response-time or service-level commitment is implied until agreed in writing.' },
    ],
  },
  'hotels-hospitality': {
    title: 'Hotel Painting & Finishing Support',
    description: 'Commercial painting, wood polishing and finishing scopes for hotels and hospitality properties in Delhi NCR.',
    intro: 'Hotels and hospitality operators need finishing work planned around guest experience, operating schedules, room access and protection of existing interiors. Each work package is reviewed with the property team.',
    sections: [
      { title: 'Typical areas to scope', body: 'The property team can identify the rooms and shared spaces that need attention. The final scope depends on surface condition, finish expectations and access.', items: ['Guest corridors and selected rooms', 'Lobbies, reception and meeting areas', 'Doors, panelling and fixed joinery', 'Back-of-house and service areas'] },
      { title: 'Planning around hotel operations', body: 'Phasing, access windows, protection, ventilation and noise considerations should be discussed before work begins. Work is not scheduled until the hotel and contractor agree the practical sequence.', items: ['Room or floor-wise phasing', 'Protection of furniture and fixtures', 'Sample and finish approval', 'Snag review and handover'] },
      { title: 'A clear project brief', body: 'A useful initial brief includes the property location, affected areas, approximate quantities, finish schedule, target dates and any restrictions on guest or staff access.' },
    ],
  },
  'commercial-property': {
    title: 'Commercial Property Finishing & Maintenance',
    description: 'Painting, building repainting and finishing support for commercial property owners and managers in Delhi NCR.',
    intro: 'Commercial property owners and managers may need one-off repainting projects or planned work across shared areas and multiple buildings. Vibroxi reviews each requirement based on property condition, access and delivery capacity.',
    sections: [
      { title: 'Property-level work packages', body: 'The scope can be divided by building, floor, elevation or common area so the property team can review quantities, budget and operating impact.', items: ['Office interiors and common areas', 'Building repainting and external surfaces', 'Wood finishes in reception and shared spaces', 'Phased work across multiple locations'] },
      { title: 'Planning and documentation', body: 'A written scope should identify surfaces, preparation, materials, access arrangements, inclusions, exclusions and handover requirements. Existing BOQs and drawings can be reviewed.', items: ['Site list and area schedule', 'Finish and material specifications', 'Work programme and access plan', 'Inspection and close-out notes'] },
      { title: 'Portfolio requirements', body: 'Multi-property enquiries are reviewed using the site list, geographic spread, scope size and expected programme. Coverage is confirmed project by project.' },
    ],
  },
  'industrial-facilities': {
    title: 'Industrial Facility Painting & Finishing',
    description: 'Industrial property painting and finishing enquiries assessed against site conditions, technical scope and safety requirements.',
    intro: 'Industrial facilities may have specialised substrate, coating, access and safety requirements. Vibroxi will consider enquiries only where the requested work matches verified team capability and the site’s technical and safety conditions.',
    sections: [
      { title: 'Initial scope review', body: 'Before discussing execution, the facility team should share the work location, substrate, existing coating, technical specification, access restrictions and safety requirements.', items: ['Administrative and office-area painting', 'Selected common-area finishing', 'Wood and interior finish requirements', 'Other scopes only after technical review'] },
      { title: 'Technical and safety boundaries', body: 'Specialist industrial coatings, hazardous-area work, structural repairs and regulated electrical tasks must not be assumed to be included. Capability, qualifications, equipment and site approvals must be verified first.' },
      { title: 'Project documentation', body: 'Relevant specifications, method statements, risk assessments, permits and inspection criteria should be reviewed before a project is accepted.' },
    ],
  },
}

export function generateStaticParams() { return Object.keys(sectors).map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = sectors[slug]
  if (!page) return { title: 'Industry page not found', robots: { index: false, follow: true } }
  return { title: page.title, description: page.description, ...canonicalMetadata(`/industries/${slug}`) }
}
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = sectors[slug]
  if (!page) notFound()
  return <ContentPage eyebrow="Industries" title={page.title} intro={page.intro} sections={page.sections} cta="Discuss a commercial requirement"/>
}
