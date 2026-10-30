import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'Vibroxi project portfolio. Verified commercial painting and finishing case studies will be published with client approval.',
  robots: { index: false, follow: true },
  ...canonicalMetadata('/projects'),
}
export default function ProjectsPage() {
  return <ContentPage eyebrow="Project portfolio" title="Project evidence will be published when verified." intro="This page is reserved for completed commercial work with approved photographs, accurate scope descriptions and permission to publish. No placeholder examples are presented as completed client projects." sections={[
    { title: 'What each case study will show', body: 'A useful project record should help a property or procurement team understand the work—not just display a photograph.', items: ['Property type and location, where approved', 'Scope, surfaces and approximate quantities', 'Preparation and finish requirements', 'Phasing, access and handover notes'] },
    { title: 'Client confidentiality', body: 'Client names, site photographs, logos and project outcomes will be published only with appropriate permission. Until then, this page remains outside the search index.' },
  ]} cta="Discuss a commercial project"/>
}
