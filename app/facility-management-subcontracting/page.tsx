import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Facility Management Subcontractor',
  description: 'Specialist commercial painting, wood polishing and finishing work packages for facility management providers in Delhi NCR.',
  ...canonicalMetadata('/facility-management-subcontracting'),
}
export default function SubcontractingPage() {
  return <ContentPage eyebrow="Partner with Vibroxi" title="Specialist Finishing Subcontracting for Facility Teams" intro="Facility management providers and commercial property operators may need specialist support for defined painting, wood polishing and finishing packages. Vibroxi discusses the work scope, vendor requirements and site procedures before confirming an engagement." sections={[
    { title: 'Work packages we can discuss', body: 'The intended role is specialist finishing execution within a wider property-management or facility contract—not a claim to provide every integrated facility service.', items: ['Commercial interior and exterior painting', 'Building and common-area repainting', 'Wood polishing and refinishing', 'Surface preparation and finishing'] },
    { title: 'Vendor onboarding and compliance', body: 'Each provider may have its own registration, insurance, safety, labour, documentation and reporting requirements. These must be reviewed against the company’s actual records before any vendor approval or compliance claim is made.', items: ['Vendor registration requirements', 'Site induction and permit process', 'Work order, BOQ and scope approval', 'Inspection and close-out documentation'] },
    { title: 'How work is coordinated', body: 'A named site contact, agreed working hours, access arrangements, work boundaries and escalation route help prevent confusion between the facility manager and specialist contractor.' },
    { title: 'Information for an initial discussion', body: 'Share the property list, locations, service scope, approximate quantities, work schedule, vendor onboarding checklist and expected start date. Vibroxi can then assess fit and availability.' },
  ]} cta="Discuss subcontracting requirements"/>
}
