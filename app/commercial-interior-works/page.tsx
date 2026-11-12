import type { Metadata } from 'next'
import { CallButton, CtaBand, EnquiryAside, InlineLinks, LinkCards, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { properties } from '@/lib/content/properties'
import { servicesBySlug } from '@/lib/content/services'
import { guidesBySlug } from '@/lib/content/guides'
import { guideHref, propertyHref, serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Commercial Interior Works – Offices, Retail, Hotels & More',
  description: 'Commercial interior works and refurbishment in Delhi NCR for offices, shops, showrooms, hotels, restaurants, clinics, schools and commercial property — phased around operations.',
  path: '/commercial-interior-works',
})

const who = ['Office owners and corporate admin teams', 'Retail stores and showrooms', 'Hotels and restaurants', 'Clinics, schools and institutions', 'Commercial property owners', 'Facility and property management companies', 'Builders and fit-out contractors']
const featured = ['office-painting', 'commercial-painting', 'electrical-works', 'lighting-installation', 'interior-partitions', 'false-ceiling', 'flooring-services', 'bathroom-interior-works', 'office-interior-maintenance', 'interior-refurbishment', 'wood-polishing', 'exterior-painting']
const guideSlugs = ['refurbishing-occupied-office', 'prepare-interior-work-boq', 'compare-interior-contractor-quotations']

export default function CommercialPage() {
  const props = properties.filter((p) => p.segment === 'commercial')
  return (
    <PageShell>
      <PageHero eyebrow="Commercial · Delhi NCR" title="Commercial Interior Works" intro={['Commercial interiors have to keep working while they are improved. We plan interior works around operating hours, building rules and customer areas, and phase the work by zone or floor.', 'We work with business owners, admin and facility managers, property management companies, builders and fit-out contractors — from a short repair list to a multi-trade refurbishment executed from your drawings or BOQ.']} breadcrumbs={[{ label: 'Commercial Interior Works', href: '/commercial-interior-works' }]}>
        <WhatsAppButton light message={multiWorksMessage}>Discuss Multiple Interior Works</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section>
            <SectionIntro title="By property type" body="Each page explains the typical requirements and planning considerations for that type of property." />
            <div className="mt-6"><LinkCards items={props.map((p) => ({ label: p.name, href: propertyHref(p.slug), text: p.description.split(' — ')[0] }))} /></div>
          </section>
          <section>
            <SectionIntro title="Services most often requested" />
            <div className="mt-6"><LinkCards items={featured.map((s) => ({ label: servicesBySlug[s].name, href: serviceHref(s) }))} /></div>
          </section>
          <section>
            <h2 className="font-serif text-3xl">Who we work with</h2>
            <ul className="mt-5 flex flex-wrap gap-2">{who.map((w) => <li key={w} className="rounded-full border border-[#d8cfbd] bg-white px-4 py-2 text-sm">{w}</li>)}</ul>
          </section>
          <InlineLinks title="Helpful guides" items={guideSlugs.map((g) => ({ label: guidesBySlug[g].title, href: guideHref(g) }))} />
        </div>
        <EnquiryAside title="Discuss Your Interior Project" defaultProperty="Office" source="commercial interior works" />
      </div>
      <CtaBand title="One enquiry for all your interior work" body="Select every service you need in one message." cta="Discuss Multiple Interior Works" message={multiWorksMessage} />
    </PageShell>
  )
}
