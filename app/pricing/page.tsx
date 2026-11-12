import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, LinkCards, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { costPages, generalPricingFactors, pricingBasis } from '@/lib/content/costs'
import { costHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Interior Work Pricing & Quotations in Delhi NCR',
  description: 'How Vibroxi prepares interior work quotations — per square foot, per item, item-wise BOQ or after a site visit — and the factors that affect painting, electrical, plumbing, ceiling and flooring costs.',
  path: '/pricing',
})

const quoteMessage = ['Hello Vibroxi, I would like an estimate for interior work.', '', 'Property type:', 'Location:', 'Rooms / areas:', 'Works needed:', 'Approximate size:', 'Target start date:'].join('\n')

const checklist = ['Property type, location and size', 'Room-by-room list of work needed', 'Photos of each area and any problems', 'Drawings, BOQ or specifications if you have them', 'Material or brand preferences', 'Whether the property is occupied, and any time restrictions', 'Target start and completion dates']

const faqs = [
  { q: 'Do you have a rate card?', a: 'No. Published rates rarely match real site conditions. We prepare a written, itemised quotation after understanding the work.' },
  { q: 'When is per-square-foot pricing appropriate?', a: 'When the work is uniform and measurable — walls in similar condition, a flat ceiling, one flooring type. The measured area must be clearly defined.' },
  { q: 'When is a site visit needed?', a: 'When condition is unknown, several trades are involved, there are signs of water or structural issues, or the property is occupied and phasing matters.' },
  { q: 'Is the site visit charged?', a: 'Discuss this when you enquire; it depends on location and scope.' },
  { q: 'Are materials included?', a: 'Quotations can be labour-only or labour and material. Each quotation states which, along with brands or specifications.' },
]

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Pricing & quotations" title="How interior work quotations are prepared" intro={['There is no honest single rate for interior work. The price depends on how much work there is, what condition the surfaces and installations are in, the materials chosen, access and timing.', 'Here is how we measure and price work, what changes the cost, and what to send for an accurate estimate. We do not publish Vibroxi rates.']} breadcrumbs={[{ label: 'Pricing', href: '/pricing' }]}>
        <WhatsAppButton light message={quoteMessage}>Get an Estimate</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section>
            <SectionIntro title="Four ways work is priced" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">{pricingBasis.map((b) => <article key={b.method} className="rounded-sm border border-[#e3ded3] bg-white p-5"><h3 className="font-semibold">{b.method}</h3><p className="mt-2 text-sm leading-6 text-[#5d655f]">{b.when}</p></article>)}</div>
          </section>
          <section>
            <SectionIntro title="What affects the cost" body="Not every factor applies to every job, but these are the variables we review." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">{generalPricingFactors.map((f) => <article key={f.title} className="rounded-sm bg-[#fbf9f4] p-5 ring-1 ring-[#e3ded3]"><h3 className="font-semibold">{f.title}</h3><p className="mt-2 text-sm leading-6 text-[#5d655f]">{f.body}</p></article>)}</div>
          </section>
          <section>
            <SectionIntro title="Cost guides by type of work" />
            <div className="mt-6"><LinkCards items={costPages.map((c) => ({ label: c.name, href: costHref(c.slug) }))} /></div>
          </section>
          <section className="rounded-sm bg-[#ebe4d7] p-6 md:p-8">
            <h2 className="font-serif text-3xl">What to send for an estimate</h2>
            <ul className="mt-5 grid gap-3">{checklist.map((x) => <li key={x} className="flex gap-3 text-sm"><Check size={17} className="mt-0.5 text-[#a17b3f]" aria-hidden />{x}</li>)}</ul>
          </section>
          <FaqList faqs={faqs} title="Pricing questions" />
        </div>
        <EnquiryAside title="Get an Estimate" source="pricing" />
      </div>
      <CtaBand title="Send your scope on WhatsApp" body="Photos, measurements, a BOQ or just a list — we will tell you what else is needed." cta="Get an Estimate" message={quoteMessage} />
    </PageShell>
  )
}
