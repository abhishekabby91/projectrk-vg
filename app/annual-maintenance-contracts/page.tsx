import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Maintenance Contracts',
  description: 'Discuss planned painting and finishing maintenance for commercial buildings, managed properties and multi-site facilities in Delhi NCR.',
  ...canonicalMetadata('/annual-maintenance-contracts'),
}
export default function MaintenanceContractsPage() {
  return <ContentPage eyebrow="Recurring property work" title="Planned Maintenance for Commercial Properties" intro="For facility and property teams considering recurring painting, wood finishing and selected maintenance work, Vibroxi can review a defined programme based on site condition, locations and delivery capacity." sections={[
    { title: 'What a planned arrangement can cover', body: 'A recurring arrangement should begin with a property list and a clear definition of the work included. It may combine periodic condition reviews with planned repainting or finishing work packages.', items: ['Periodic review of painted and finished areas', 'Priority-based repainting scopes', 'Wood polishing and refinishing requirements', 'Site-wise work planning and handover'] },
    { title: 'Define the service boundaries', body: 'The contract should state which properties and areas are covered, what constitutes additional work, how quotations and approvals are handled, and which materials or access arrangements are included.', items: ['Property and area schedule', 'Inspection frequency and reporting', 'Work-order and approval process', 'Exclusions, emergency work and additional charges'] },
    { title: 'Service levels must be realistic', body: 'Response times, emergency attendance, staffing levels and guaranteed availability are not assumed. They should be agreed only after reviewing the sites, resources, hours and operational requirements.' },
    { title: 'How to begin', body: 'Share the property list, site locations, approximate areas, known maintenance issues and expected inspection or work frequency. A site review can then establish whether a recurring programme is practical.' },
  ]} cta="Discuss a maintenance programme"/>
}
