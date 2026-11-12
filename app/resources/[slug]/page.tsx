import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { CtaBand, InlineLinks, JsonLd, PageHero, PageShell } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { guides, guidesBySlug } from '@/lib/content/guides'
import { guideHref, resolveLink } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'
import { absoluteUrl, siteName, siteUrl } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const g = guidesBySlug[slug]
  if (!g) return {}
  return pageMetadata({ title: g.title, description: g.description, path: guideHref(slug) })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = guidesBySlug[slug]
  if (!g) notFound()
  const schema = siteUrl ? { '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.description, url: absoluteUrl(guideHref(g.slug)), publisher: { '@id': `${siteUrl}/#organization`, name: siteName } } : null

  return (
    <PageShell>
      <PageHero eyebrow="Guide" title={g.h1} intro={g.summary} breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: g.title, href: guideHref(g.slug) }]} />
      <JsonLd data={schema} />
      <article className="mx-auto grid max-w-3xl gap-10 px-4 py-14 lg:py-20">
        {g.sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-3xl">{s.title}</h2>
            {s.body && <p className="mt-4 text-base leading-7 text-[#4f5852]">{s.body}</p>}
            {s.items && <ul className="mt-4 grid gap-2">{s.items.map((i) => <li key={i} className="flex gap-3 text-base leading-7"><Check size={18} className="mt-1.5 shrink-0 text-[#a17b3f]" aria-hidden />{i}</li>)}</ul>}
          </section>
        ))}
        <div className="grid gap-6 border-t border-[#ddd8cd] pt-8">
          <InlineLinks title="Related services" items={g.services.map(resolveLink)} />
          <InlineLinks title="More guides" items={g.related.map(resolveLink)} />
        </div>
      </article>
      <CtaBand title="Ready to plan your interior work?" body="Send your room-by-room list or BOQ on WhatsApp and we will help turn it into an itemised quotation." cta={g.cta} message={multiWorksMessage} />
    </PageShell>
  )
}
