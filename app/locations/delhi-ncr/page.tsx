import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Finishing Contractors Delhi NCR',
  description: 'Commercial painting, building repainting and wood finishing enquiries across Delhi NCR, subject to project scope and site availability.',
  ...canonicalMetadata('/locations/delhi-ncr'),
}
export default function DelhiNcrPage() {
  return <ContentPage eyebrow="Service region" title="Commercial Finishing Support Across Delhi NCR" intro="Delhi NCR is Vibroxi’s initial service region. Commercial painting, building repainting, wood polishing and defined finishing enquiries can be reviewed across the region, with availability confirmed against each project." sections={[
    { title: 'Initial coverage area', body: 'The initial enquiry area includes Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad. A location is not a guarantee of mobilisation; the project scope, timing and available delivery capacity are reviewed first.', items: ['Delhi', 'Gurugram', 'Noida and Greater Noida', 'Ghaziabad', 'Faridabad'] },
    { title: 'Types of commercial requirements', body: 'The region page is intended for property-level and larger commercial work rather than small household repair bookings.', items: ['Office and commercial building repainting', 'Hotel and hospitality finishing', 'Wood polishing and refinishing', 'Facility management subcontracting', 'Planned maintenance work packages'] },
    { title: 'Projects beyond Delhi NCR', body: 'Multi-site or out-of-region requirements can be submitted for review. Travel, mobilisation, project size and scheduling determine whether the work can be considered.' },
  ]} cta="Discuss a Delhi NCR project"/>
}
