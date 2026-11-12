import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, InlineLinks, PageHero, PageShell, ReviewNotice, WhatsAppButton } from '@/components/site'
import { allPublished } from '@/lib/capabilities'
import { topicMessage } from '@/lib/contact'
import { costPages, costPagesBySlug } from '@/lib/content/costs'
import { costHref, resolveLink } from '@/lib/routes'
import { pageMetadata, showReviewNotices } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return costPages.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = costPagesBySlug[slug]
  if (!c) return {}
  return pageMetadata({ title: c.title, description: c.description, path: costHref(slug), indexable: allPublished(c.trades) })
}

export default async function CostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = costPagesBySlug[slug]
  if (!c) notFound()
  const indexable = allPublished(c.trades)
  const message = topicMessage(`a quotation for ${c.name.replace(/ cost$/i, '')}`, c.checklist.slice(0, 3).map((x) => `${x}:`))

  return (
    <PageShell>
      {!indexable && showReviewNotices && <ReviewNotice text="This cost page covers a trade that is awaiting capability confirmation. It is noindex until confirmed." />}
      <PageHero eyebrow="Pricing guide · Delhi NCR" title={c.h1} intro={c.intro} breadcrumbs={[{ label: 'Pricing', href: '/pricing' }, { label: c.name, href: costHref(c.slug) }]}>
        <WhatsAppButton light message={message}>{c.cta}</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section>
            <h2 className="font-serif text-3xl">How the price is measured</h2>
            <div className="mt-6 grid gap-4">
              {c.pricingBasis.map((b) => <article key={b.method} className="rounded-sm border border-[#e3ded3] bg-white p-5"><h3 className="font-semibold">{b.method}</h3><p className="mt-2 text-sm leading-6 text-[#5d655f]">{b.when}</p></article>)}
            </div>
          </section>
          <section>
            <h2 className="font-serif text-3xl">Factors that affect the quotation</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.factors.map((f) => <article key={f.title} className="rounded-sm bg-[#fbf9f4] p-5 ring-1 ring-[#e3ded3]"><h3 className="font-semibold">{f.title}</h3><p className="mt-2 text-sm leading-6 text-[#5d655f]">{f.body}</p></article>)}
            </div>
          </section>
          <section className="rounded-sm bg-[#ebe4d7] p-6 md:p-8">
            <h2 className="font-serif text-3xl">What to send for an accurate estimate</h2>
            <ul className="mt-5 grid gap-3">{c.checklist.map((x) => <li key={x} className="flex gap-3 text-sm"><Check size={17} className="mt-0.5 text-[#a17b3f]" aria-hidden />{x}</li>)}</ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl">Why there is no rate card</h2>
            <p className="mt-3 text-sm leading-7 text-[#4f5852]">Vibroxi does not publish fixed rates. Online rate ranges rarely reflect the condition, specification and access of a real property. You receive a written, itemised quotation that states the measurement basis, materials, inclusions and exclusions.</p>
          </section>
          <FaqList faqs={c.faqs} />
          <InlineLinks title="Related services" items={c.services.map(resolveLink)} />
        </div>
        <EnquiryAside title={c.cta} source={c.name} />
      </div>
      <CtaBand title="Get an itemised estimate" body="Send photos, measurements or a BOQ on WhatsApp. We will tell you whether a site visit is needed." cta="Get an Estimate" message={message} />
    </PageShell>
  )
}
