import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentPage } from '@/components/content-page'

const locations = {
  delhi: {
    name: 'Delhi',
    title: 'Commercial Painting Contractors in Delhi',
    description: 'Commercial painting, wood finishing and planned maintenance support for offices, institutions, hospitality properties and contractors across Delhi, subject to project availability.',
    intro: 'Vibroxi supports commercial property and contractor enquiries in Delhi with scoped painting, repainting, wood finishing and maintenance execution. Final mobilisation depends on the site, access, programme and agreed scope.',
    sections: [
      { title: 'Typical Delhi project requirements', body: 'Enquiries may include occupied-office repainting, commercial building refreshes, common-area work, hospitality finishing and fit-out packages. A site brief helps define preparation, protection, phasing and handover requirements.', items: ['Office and commercial interiors', 'Building repainting and common areas', 'Wood polishing and finishing packages'] },
      { title: 'Planning around occupied properties', body: 'Delhi sites often require coordination with tenants, security, loading access and operating hours. Include access windows, floor sequencing, protection needs and any shutdown restrictions in the project brief.' },
      { title: 'Service availability', body: 'This page describes an enquiry area, not an automatic service guarantee. Confirm the address, scope, schedule and commercial terms with Vibroxi before planning mobilisation.' },
    ],
  },
  noida: {
    name: 'Noida',
    title: 'Commercial Painting Contractors in Noida',
    description: 'Commercial interior painting, exterior repainting, wood finishing and maintenance execution for Noida properties and project contractors.',
    intro: 'Vibroxi discusses commercial painting and finishing scopes across Noida, including offices, business parks, retail environments, societies and fit-out projects. Each requirement is assessed against access, quantity, phasing and availability.',
    sections: [
      { title: 'Noida commercial scopes', body: 'Share whether the requirement covers a single office, a tower or campus, a retail unit, a society common area or a contractor package. The scope can then be structured around preparation, coatings, protection and handover.', items: ['Business parks and office floors', 'Common-area and society repainting', 'Fit-out and finishing subcontracting'] },
      { title: 'What helps with a quotation', body: 'Floor plans, BOQs, photographs, approximate areas, surface conditions, access windows and the expected start date make a Noida quotation discussion more useful and reduce assumptions.' },
      { title: 'Availability note', body: 'Noida coverage is subject to confirmation for the specific address and programme. Multi-building or phased enquiries should include a site list and sequencing expectations.' },
    ],
  },
  gurugram: {
    name: 'Gurugram',
    title: 'Commercial Painting Contractors in Gurugram',
    description: 'Commercial painting, wood polishing, finishing and maintenance support for Gurugram offices, hotels, retail and property portfolios.',
    intro: 'Vibroxi supports scoped commercial painting and finishing enquiries in Gurugram for property managers, facility teams, hospitality operators, developers and contractors. The delivery approach is shaped by the property’s operating conditions and programme.',
    sections: [
      { title: 'For offices, hotels and managed properties', body: 'Projects may require night or weekend work, floor-by-floor phasing, protection of furniture and coordination with facilities or security teams. Explain these constraints early so the scope and sequence are realistic.', items: ['Occupied office repainting', 'Hotel and hospitality finishing', 'Portfolio and planned maintenance enquiries'] },
      { title: 'Finishing and material coordination', body: 'For wood, PU, melamine or protective coating work, include the substrate, existing finish, desired appearance and approval process. Samples or a site assessment may be needed before finalising the method.' },
      { title: 'Project confirmation', body: 'Gurugram enquiries are reviewed project by project. Location, access, quantities and start date must be confirmed before any workforce or subcontractor mobilisation is planned.' },
    ],
  },
  ghaziabad: {
    name: 'Ghaziabad',
    title: 'Commercial Painting Contractors in Ghaziabad',
    description: 'Commercial building repainting, interior painting, wood finishing and common-area maintenance enquiries in Ghaziabad.',
    intro: 'Vibroxi accepts commercial painting and finishing enquiries for Ghaziabad properties where the scope and programme can be clearly defined. Share site conditions, approximate quantities and access details for a practical discussion.',
    sections: [
      { title: 'Suitable enquiry types', body: 'The service brief may cover commercial interiors, building repainting, society common areas, wood finishing or subcontracted work within a larger construction or fit-out package.', items: ['Commercial and institutional buildings', 'Housing society common areas', 'Contractor-led repainting packages'] },
      { title: 'Site information matters', body: 'For larger or occupied properties, note the number of blocks or floors, current surface condition, working hours, protection requirements and whether materials are specified by the client or contractor.' },
      { title: 'Coverage subject to confirmation', body: 'Ghaziabad is presented as an enquiry location. Actual availability depends on the address, scope, timing and agreed commercial terms.' },
    ],
  },
  faridabad: {
    name: 'Faridabad',
    title: 'Commercial Painting Contractors in Faridabad',
    description: 'Commercial painting, industrial-area building repainting, wood finishing and maintenance project enquiries in Faridabad.',
    intro: 'Vibroxi discusses commercial painting, finishing and property maintenance scopes in Faridabad for owners, facility managers, societies, developers and contractors. Requirements are assessed individually rather than treated as a blanket service promise.',
    sections: [
      { title: 'Faridabad project requirements', body: 'Useful briefs can include office or institutional interiors, building exteriors, common areas, woodwork finishing, protective coatings or phased repainting across a property portfolio.', items: ['Interior and exterior repainting', 'Protective and finishing scopes', 'Planned maintenance programmes'] },
      { title: 'Preparing a project brief', body: 'Include the site address, approximate area, surface type, existing condition, drawings or BOQ if available, access limitations and expected start date. This helps separate preparation, materials and execution requirements.' },
      { title: 'Availability and mobilisation', body: 'Faridabad enquiries are confirmed after reviewing scope, programme, access and resource requirements. Do not treat the location page as confirmation of a booked team.' },
    ],
  },
} as const

type LocationSlug = keyof typeof locations

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const location = locations[slug as LocationSlug]
  if (!location) return {}
  return { title: `${location.title} | Vibroxi`, description: location.description, alternates: { canonical: `/locations/${slug}` }, openGraph: { title: `${location.title} | Vibroxi`, description: location.description, type: 'website' } }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = locations[slug as LocationSlug]
  if (!location) notFound()
  return <ContentPage eyebrow={`Coverage · ${location.name}`} title={location.title} intro={location.intro} sections={[...location.sections]} cta="Request a location-specific quote" />
}
