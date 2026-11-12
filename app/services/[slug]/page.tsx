import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ShieldAlert } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, InlineLinks, JsonLd, PageHero, PageShell, ReviewNotice, WhatsAppButton } from '@/components/site'
import { trades } from '@/lib/capabilities'
import { multiWorksMessage, topicMessage } from '@/lib/contact'
import { allServices, isServiceIndexable, servicesBySlug } from '@/lib/content/services'
import { properties } from '@/lib/content/properties'
import { guides } from '@/lib/content/guides'
import { costHref, guideHref, propertyHref, resolveLink, serviceHref } from '@/lib/routes'
import { pageMetadata, showReviewNotices } from '@/lib/seo'
import { absoluteUrl, siteName, siteUrl } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = servicesBySlug[slug]
  if (!s) return {}
  return pageMetadata({ title: s.title, description: s.description, path: serviceHref(slug), indexable: isServiceIndexable(s) })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = servicesBySlug[slug]
  if (!s) notFound()

  const parent = s.parent ? servicesBySlug[s.parent] : undefined
  const children = allServices.filter((x) => x.parent === s.slug)
  const relatedProperties = properties.filter((p) => p.services.includes(s.slug)).slice(0, 6)
  const relatedGuides = guides.filter((g) => g.services.includes(s.slug)).slice(0, 3)
  const indexable = isServiceIndexable(s)
  const breadcrumbs = [{ label: 'Services', href: '/services' }, ...(parent ? [{ label: parent.name, href: serviceHref(parent.slug) }] : []), { label: s.name, href: serviceHref(s.slug) }]

  const schema = siteUrl && indexable
    ? { '@context': 'https://schema.org', '@type': 'Service', name: s.h1, serviceType: s.name, description: s.description, url: absoluteUrl(serviceHref(s.slug)), areaServed: ['Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad'].map((name) => ({ '@type': 'City', name })), provider: { '@id': `${siteUrl}/#business`, name: siteName } }
    : null

  return (
    <PageShell>
      {!indexable && showReviewNotices && <ReviewNotice text={`"${trades[s.trade].label}" is awaiting capability confirmation. This page is noindex and excluded from the sitemap. ${trades[s.trade].verificationNote}`} />}
      <PageHero eyebrow={`${trades[s.trade].label} · Delhi NCR`} title={s.h1} intro={s.intro} breadcrumbs={breadcrumbs}>
        <WhatsAppButton light message={topicMessage(s.name)}>{s.cta}</WhatsAppButton>
        <CallButton />
      </PageHero>
      <JsonLd data={schema} />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section>
            <h2 className="font-serif text-3xl">What the work can include</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.includes.map((item) => <li key={item} className="flex gap-3 rounded-sm border border-[#e3ded3] bg-white p-4 text-sm leading-6"><Check size={18} className="mt-0.5 shrink-0 text-[#a17b3f]" aria-hidden />{item}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-6 text-[#68716b]">The final scope is confirmed in a written, itemised quotation after we understand your requirement.</p>
          </section>

          {children.length > 0 && (
            <section>
              <h2 className="font-serif text-3xl">Specific {s.name.toLowerCase()} services</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {children.map((c) => <li key={c.slug}><Link href={serviceHref(c.slug)} className="block rounded-sm border border-[#ddd8cd] bg-white p-4 hover:border-[#c9a66b]"><span className="font-semibold">{c.name}</span><span className="mt-1 block text-sm text-[#68716b]">{c.description.split(' — ')[0].split('. ')[0]}.</span></Link></li>)}
              </ul>
            </section>
          )}

          {s.sections.map((sec) => (
            <section key={sec.title}>
              <h2 className="font-serif text-3xl">{sec.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#4f5852]">{sec.body}</p>
              {sec.items && <ul className="mt-4 grid gap-2">{sec.items.map((i) => <li key={i} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-[#a17b3f]" aria-hidden />{i}</li>)}</ul>}
            </section>
          ))}

          <section>
            <h2 className="font-serif text-3xl">Who this is for</h2>
            <ul className="mt-5 flex flex-wrap gap-2">{s.suitableFor.map((x) => <li key={x} className="rounded-full border border-[#d8cfbd] bg-white px-4 py-2 text-sm">{x}</li>)}</ul>
          </section>

          <section className="rounded-sm bg-[#ebe4d7] p-6 md:p-8">
            <h2 className="font-serif text-3xl">What affects the quotation</h2>
            <ul className="mt-5 grid gap-3">{s.quoteFactors.map((f) => <li key={f} className="flex gap-3 text-sm leading-6"><Check size={17} className="mt-0.5 shrink-0 text-[#a17b3f]" aria-hidden />{f}</li>)}</ul>
            <p className="mt-5 text-sm leading-6 text-[#5d655f]">We do not publish fixed rates because these variables change the price significantly.{' '}
              <Link href={s.costPage ? costHref(s.costPage) : '/pricing'} className="font-semibold underline decoration-[#c9a66b] underline-offset-4">{s.costPage ? `How ${resolveLink(s.costPage).label.toLowerCase()} is worked out` : 'How quotations are prepared'}</Link></p>
          </section>

          <section className="flex gap-4 rounded-sm border border-[#e3ded3] bg-white p-6">
            <ShieldAlert className="mt-1 shrink-0 text-[#a17b3f]" aria-hidden />
            <div>
              <h2 className="font-serif text-2xl">Scope boundaries</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f5852]">{s.notIncluded}</p>
              <p className="mt-3 text-sm leading-7 text-[#4f5852]">Vibroxi carries out non-structural interior works. We do not provide construction, civil, structural, architectural or interior design services.</p>
            </div>
          </section>

          <FaqList faqs={s.faqs} title={`${s.name}: common questions`} />

          <div className="grid gap-6">
            <InlineLinks title="Related services" items={s.related.map(resolveLink)} />
            {relatedProperties.length > 0 && <InlineLinks title="Property types" items={relatedProperties.map((p) => ({ label: p.name, href: propertyHref(p.slug) }))} />}
            {relatedGuides.length > 0 && <InlineLinks title="Helpful guides" items={relatedGuides.map((g) => ({ label: g.title, href: guideHref(g.slug) }))} />}
          </div>
        </div>
        <EnquiryAside title={s.cta} defaultServices={s.formServices} source={s.name} />
      </div>

      <CtaBand title="Need more than one interior job done?" body="Combine painting, electrical, plumbing, carpentry, ceilings and flooring into one enquiry and one coordinated schedule." cta="Discuss Multiple Interior Works" message={multiWorksMessage} />
    </PageShell>
  )
}
