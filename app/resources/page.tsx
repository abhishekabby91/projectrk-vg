import type { Metadata } from 'next'
import { CtaBand, LinkCards, PageHero, PageShell, SectionIntro } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { guides } from '@/lib/content/guides'
import { costPages } from '@/lib/content/costs'
import { costHref, guideHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Interior Work Guides & Checklists',
  description: 'Practical guides for planning home and office interior works — multi-trade sequencing, move-in checklists, electrical and plumbing checklists, BOQs, quotations and finish selection.',
  path: '/resources',
})

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Resources" title="Interior work guides and checklists" intro="Practical, non-promotional guides to help you plan interior work, prepare a brief and compare quotations — whichever contractor you choose." breadcrumbs={[{ label: 'Resources', href: '/resources' }]} />
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <SectionIntro title="Planning guides" />
        <div className="mt-8"><LinkCards items={guides.map((g) => ({ label: g.title, href: guideHref(g.slug), text: g.summary }))} /></div>
        <div className="mt-16"><SectionIntro title="Cost guides" /></div>
        <div className="mt-8"><LinkCards items={costPages.map((c) => ({ label: c.name, href: costHref(c.slug) }))} /></div>
      </section>
      <CtaBand title="Want help applying a checklist to your property?" cta="Discuss Your Interior Project" message={multiWorksMessage} />
    </PageShell>
  )
}
