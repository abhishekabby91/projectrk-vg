import type { Metadata } from 'next'
import { CallButton, CtaBand, EnquiryAside, InlineLinks, LinkCards, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { properties } from '@/lib/content/properties'
import { servicesBySlug } from '@/lib/content/services'
import { guidesBySlug } from '@/lib/content/guides'
import { guideHref, propertyHref, serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Residential Interior Works – Homes, Apartments & Villas',
  description: 'Interior works for homes, apartments, villas, rental properties and housing societies in Delhi NCR — painting, electrical, plumbing, carpentry, ceilings, flooring, kitchens and bathrooms.',
  path: '/residential-interior-works',
})

const who = ['Homeowners and families', 'Apartment and villa owners', 'Landlords and rental property owners', 'NRI owners with vacant property', 'Housing societies and RWAs', 'Property managers']
const featured = ['house-painting', 'apartment-painting', 'wood-polishing', 'electrical-works', 'plumbing-services', 'wardrobe-cabinet-work', 'false-ceiling', 'flooring-services', 'bathroom-interior-works', 'kitchen-interior-works', 'home-interior-maintenance', 'interior-refurbishment']
const guideSlugs = ['plan-multiple-interior-works-home', 'home-interior-checklist-before-moving-in', 'rental-property-maintenance-checklist', 'interior-painting-preparation-checklist']

export default function ResidentialPage() {
  const props = properties.filter((p) => p.segment === 'residential')
  return (
    <PageShell>
      <PageHero eyebrow="Residential · Delhi NCR" title="Residential Interior Works" intro={['Homes rarely need just one thing. Moving in, upgrading or fixing accumulated problems usually involves several trades. We plan them as one project with one itemised quotation.', 'We work with homeowners, apartment and villa owners, landlords, NRI owners, housing societies and property managers.']} breadcrumbs={[{ label: 'Residential Interior Works', href: '/residential-interior-works' }]}>
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
        <EnquiryAside title="Discuss Your Interior Project" defaultProperty="Apartment / flat" source="residential interior works" />
      </div>
      <CtaBand title="One enquiry for all your interior work" body="Select every service you need in one message." cta="Discuss Multiple Interior Works" message={multiWorksMessage} />
    </PageShell>
  )
}
