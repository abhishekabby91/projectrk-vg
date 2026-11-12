import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, InlineLinks, LinkCards, PageHero, PageShell, WhatsAppButton } from '@/components/site'
import { cities, citiesBySlug } from '@/lib/content/locations'
import { serviceFamilies, servicesBySlug } from '@/lib/content/services'
import { properties } from '@/lib/content/properties'
import { cityHref, propertyHref, serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = citiesBySlug[slug]
  if (!c) return {}
  return pageMetadata({ title: c.title, description: c.description, path: cityHref(slug) })
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = citiesBySlug[slug]
  if (!c) notFound()
  const message = `Hello Vibroxi, I have an interior work enquiry in ${c.name}.\n\nArea / society:\nProperty type:\nWork needed:`

  return (
    <PageShell>
      <PageHero eyebrow={`${c.name} · Delhi NCR`} title={c.h1} intro={c.intro} breadcrumbs={[{ label: 'Locations', href: '/locations' }, { label: c.name, href: cityHref(c.slug) }]}>
        <WhatsAppButton light message={message}>Discuss Your Project in {c.name}</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-sm border border-[#e3ded3] bg-white p-6">
              <h2 className="font-serif text-2xl">Homes in {c.name}</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f5852]">{c.residential}</p>
              <Link href="/residential-interior-works" className="mt-4 inline-block text-sm font-semibold underline decoration-[#c9a66b] underline-offset-4">Residential interior works</Link>
            </article>
            <article className="rounded-sm border border-[#e3ded3] bg-white p-6">
              <h2 className="font-serif text-2xl">Offices and commercial spaces</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f5852]">{c.commercial}</p>
              <Link href="/commercial-interior-works" className="mt-4 inline-block text-sm font-semibold underline decoration-[#c9a66b] underline-offset-4">Commercial interior works</Link>
            </article>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Interior services in {c.name}</h2>
            <div className="mt-6"><LinkCards items={serviceFamilies.map((f) => ({ label: f.title, href: serviceHref(f.hub), text: servicesBySlug[f.hub].suitableFor.slice(0, 2).join(' · ') }))} /></div>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Areas we receive enquiries from</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">{c.areas.map((a) => <li key={a} className="flex gap-2 text-sm leading-6"><MapPin size={16} className="mt-1 shrink-0 text-[#a17b3f]" aria-hidden />{a}</li>)}</ul>
            <p className="mt-4 text-sm leading-6 text-[#68716b]">These are examples, not a complete list. Share your exact location and we will confirm whether a site visit can be scheduled.</p>
          </section>

          <section className="rounded-sm bg-[#ebe4d7] p-6 md:p-8">
            <h2 className="font-serif text-3xl">Planning notes for {c.name}</h2>
            <ul className="mt-5 grid gap-3">{c.localNotes.map((n) => <li key={n} className="text-sm leading-6">• {n}</li>)}</ul>
          </section>

          <FaqList faqs={c.faqs} title={`Interior works in ${c.name}: questions`} />

          <div className="grid gap-6">
            <InlineLinks title="Property types" items={properties.map((p) => ({ label: p.name, href: propertyHref(p.slug) }))} />
            <InlineLinks title="Other locations" items={cities.filter((x) => x.slug !== c.slug).map((x) => ({ label: x.name, href: cityHref(x.slug) }))} />
          </div>
        </div>
        <EnquiryAside title={`Enquire about work in ${c.name}`} source={`${c.name} location`} />
      </div>
      <CtaBand title={`Request a site visit in ${c.name}`} body="Share the area, property type and work needed. We confirm availability after reviewing the details." cta="Request a Site Visit" message={message} />
    </PageShell>
  )
}
