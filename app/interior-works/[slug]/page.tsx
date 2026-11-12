import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, InlineLinks, LinkCards, PageHero, PageShell, ReviewNotice, WhatsAppButton } from '@/components/site'
import { allPublished } from '@/lib/capabilities'
import { multiWorksMessage, siteVisitMessage, topicMessage } from '@/lib/contact'
import { properties, propertiesBySlug } from '@/lib/content/properties'
import { servicesBySlug } from '@/lib/content/services'
import { cities } from '@/lib/content/locations'
import { cityHref, guideHref, propertyHref, resolveLink, serviceHref } from '@/lib/routes'
import { guidesBySlug } from '@/lib/content/guides'
import { pageMetadata, showReviewNotices } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = propertiesBySlug[slug]
  if (!p) return {}
  return pageMetadata({ title: p.title, description: p.description, path: propertyHref(slug), indexable: allPublished(p.trades) })
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = propertiesBySlug[slug]
  if (!p) notFound()
  const indexable = allPublished(p.trades)
  const hub = p.segment === 'residential' ? { label: 'Residential interior works', href: '/residential-interior-works' } : { label: 'Commercial interior works', href: '/commercial-interior-works' }
  const siblings = properties.filter((x) => x.segment === p.segment && x.slug !== p.slug)
  const message = p.cta === 'Request a Site Visit' ? siteVisitMessage : p.cta.includes('Multiple') ? multiWorksMessage : topicMessage(p.name)

  return (
    <PageShell>
      {!indexable && showReviewNotices && <ReviewNotice text="This page describes multi-trade work. It stays noindex until every trade it covers is confirmed in lib/capabilities.ts." />}
      <PageHero eyebrow={`${p.segment === 'residential' ? 'Residential' : 'Commercial'} · Delhi NCR`} title={p.h1} intro={p.intro} breadcrumbs={[hub, { label: p.name, href: propertyHref(p.slug) }]}>
        <WhatsAppButton light message={message}>{p.cta}</WhatsAppButton>
        <CallButton />
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          {p.needs.map((n) => (
            <section key={n.title}>
              <h2 className="font-serif text-3xl">{n.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#4f5852]">{n.body}</p>
              {n.items && <ul className="mt-4 grid gap-2 sm:grid-cols-2">{n.items.map((i) => <li key={i} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-[#a17b3f]" aria-hidden />{i}</li>)}</ul>}
            </section>
          ))}

          <section>
            <h2 className="font-serif text-3xl">Services commonly needed</h2>
            <p className="mt-3 text-sm leading-6 text-[#5d655f]">Select any combination in one enquiry. Each trade is listed separately in the quotation.</p>
            <div className="mt-6">
              <LinkCards items={p.services.map((sl) => ({ label: servicesBySlug[sl].name, href: serviceHref(sl), text: servicesBySlug[sl].suitableFor[0] }))} />
            </div>
          </section>

          <section className="rounded-sm bg-[#ebe4d7] p-6 md:p-8">
            <h2 className="font-serif text-3xl">How the project is planned</h2>
            <ol className="mt-6 grid gap-4">
              {p.planning.map((step, i) => <li key={step} className="flex gap-4 text-sm leading-6"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#183c31] font-semibold text-white">{i + 1}</span><span className="pt-1">{step}</span></li>)}
            </ol>
          </section>

          <FaqList faqs={p.faqs} />

          <div className="grid gap-6">
            {p.guides && <InlineLinks title="Helpful guides" items={p.guides.map((g) => ({ label: guidesBySlug[g].title, href: guideHref(g) }))} />}
            <InlineLinks title={`Other ${p.segment} property types`} items={siblings.map((x) => resolveLink(x.slug))} />
            <InlineLinks title="Locations" items={cities.map((c) => ({ label: c.name, href: cityHref(c.slug) }))} />
          </div>
        </div>
        <EnquiryAside title={p.cta} defaultProperty={p.formProperty} source={p.name} />
      </div>
      <CtaBand title="Prefer to talk it through?" body="Send photos and a short list of what needs doing on WhatsApp. We will tell you what information we need for a quotation." cta="Discuss Your Interior Project" message={topicMessage(p.name)} />
    </PageShell>
  )
}
