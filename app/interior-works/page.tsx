import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { CallButton, CtaBand, EnquiryAside, FaqList, LinkCards, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { serviceFamilies } from '@/lib/content/services'
import { properties } from '@/lib/content/properties'
import { propertyHref, serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Interior Works Contractor in Delhi NCR – Homes & Commercial',
  description: 'Interior works contractor for homes, offices and commercial properties in Delhi NCR. Multi-trade interior execution — painting, electrical, plumbing, carpentry, ceilings and flooring — under one contractor.',
  path: '/interior-works',
})

const doWork = ['Interior painting and wall finishing', 'Wood polishing and refinishing', 'Internal electrical works', 'Internal plumbing and sanitary fittings', 'Carpentry, wardrobes and doors', 'False ceilings and non-structural partitions', 'Flooring and tiling', 'Kitchen and bathroom upgrades', 'Interior refurbishment and maintenance', 'Execution from your drawings, BOQ or specifications']
const notWork = ['Building construction', 'Civil or structural work', 'Architecture and planning approvals', 'Interior design and 3D visualisation', 'Waterproofing guarantees (unless separately confirmed)', 'Main utility supply, sewer and gas lines']

const faqs = [
  { q: 'What does an interior works contractor do?', a: 'An interior works contractor carries out the trades inside a property — painting, electrical, plumbing, carpentry, ceilings, flooring and fixtures — and coordinates them so the work happens in the right order.' },
  { q: 'How is that different from an interior designer?', a: 'A designer plans how the space should look and specifies materials. An interior works contractor executes the work. Vibroxi is an execution contractor and can work from a designer\'s drawings.' },
  { q: 'Is it cheaper to hire separate tradespeople?', a: 'Sometimes per trade, but you take on scheduling, coordination and responsibility for rework. A single contractor gives one schedule and one point of responsibility.' },
]

export default function InteriorWorksHub() {
  return (
    <PageShell>
      <PageHero eyebrow="Interior works contractor · Delhi NCR" title="Interior Works Contractor for Homes and Commercial Spaces" intro={['Vibroxi is an interior works, fit-out and finishing contractor. Customers come to us when they have one or several interior jobs — repainting, rewiring, a bathroom upgrade, wardrobes, a false ceiling, new flooring — and want them executed properly and in the right order.', 'We work in homes, apartments and villas, and in offices, shops, hotels, restaurants, clinics, schools and managed properties across Delhi NCR.']} breadcrumbs={[{ label: 'Interior works contractor', href: '/interior-works' }]}>
        <WhatsAppButton light message={multiWorksMessage}>Discuss Your Interior Project</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="grid gap-12">
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-[#e3ded3] bg-white p-6">
              <h2 className="font-serif text-2xl">What we do</h2>
              <ul className="mt-4 grid gap-2">{doWork.map((x) => <li key={x} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-[#1f9d58]" aria-hidden />{x}</li>)}</ul>
            </div>
            <div className="rounded-sm border border-[#e3ded3] bg-white p-6">
              <h2 className="font-serif text-2xl">What we do not do</h2>
              <ul className="mt-4 grid gap-2">{notWork.map((x) => <li key={x} className="flex gap-2 text-sm"><X size={16} className="mt-0.5 text-[#b4483c]" aria-hidden />{x}</li>)}</ul>
            </div>
          </section>
          <section>
            <SectionIntro title="Interior trades" body="Each trade has its own page with scope, quotation factors and exclusions." />
            <div className="mt-6"><LinkCards items={serviceFamilies.map((f) => ({ label: f.title, href: serviceHref(f.hub), text: f.summary }))} /></div>
          </section>
          <section>
            <SectionIntro title="By property type" />
            <div className="mt-6"><LinkCards items={properties.map((p) => ({ label: p.name, href: propertyHref(p.slug) }))} /></div>
          </section>
          <FaqList faqs={faqs} />
        </div>
        <EnquiryAside title="Discuss Multiple Interior Works" source="interior works contractor" />
      </div>
      <CtaBand title="Have a list of interior jobs?" body="Send it on WhatsApp — one message for all of them." cta="Discuss Multiple Interior Works" message={multiWorksMessage} />
    </PageShell>
  )
}
