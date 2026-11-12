import type { Metadata } from 'next'
import { CtaBand, PageHero, PageShell } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description: 'Vibroxi project records will be published with genuine photographs and client permission.',
  path: '/projects',
  indexable: false,
})

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Projects" title="Project records will be published when verified" intro="This page is reserved for completed work with genuine photographs, accurate scope descriptions and permission to publish. No stock images or placeholder examples are presented as Vibroxi projects. It is excluded from search indexing until real case studies are added." breadcrumbs={[{ label: 'Projects', href: '/projects' }]} />
      <CtaBand title="Ask about work similar to yours" cta="Discuss Your Interior Project" message={multiWorksMessage} />
    </PageShell>
  )
}
