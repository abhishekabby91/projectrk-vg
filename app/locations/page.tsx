import type { Metadata } from 'next'
import { CallButton, CtaBand, LinkCards, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { siteVisitMessage } from '@/lib/contact'
import { cities } from '@/lib/content/locations'
import { cityHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Interior Works Across Delhi NCR – Locations',
  description: 'Interior works for homes and commercial properties in Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad. Site visits confirmed after reviewing location and scope.',
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Locations" title="Interior works across Delhi NCR" intro="We review residential and commercial interior work enquiries across Delhi NCR. Each city page covers typical property types and local planning considerations. We do not claim local offices; site visits are confirmed after we review the exact location, scope and schedule." breadcrumbs={[{ label: 'Locations', href: '/locations' }]}>
        <WhatsAppButton light message={siteVisitMessage}>Request a Site Visit</WhatsAppButton>
        <CallButton />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <SectionIntro title="Choose your city" />
        <div className="mt-8"><LinkCards items={cities.map((c) => ({ label: c.name, href: cityHref(c.slug), text: c.description }))} /></div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-[#5d655f]">Outside these cities? Send the location and scope on WhatsApp. Larger projects elsewhere may be considered, but availability cannot be assumed.</p>
      </section>
      <CtaBand title="Request a site visit" body="Share your area, property type and what needs doing." cta="Request a Site Visit" message={siteVisitMessage} />
    </PageShell>
  )
}
