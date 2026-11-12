import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { CallButton, CtaBand, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Us – Interior Works, Fit-Out & Finishing Contractor',
  description: 'About Vibroxi: a residential and commercial interior works, fit-out and finishing contractor in Delhi NCR, and how we plan, quote and execute multi-trade interior projects.',
  path: '/about',
})

const process = [
  ['Enquiry', 'You share your requirement — usually on WhatsApp — with photos, a list, drawings or a BOQ.'],
  ['Site visit', 'Where needed, we inspect surfaces, existing installations, access and building rules.'],
  ['Scope and quotation', 'A written, itemised quotation by room and trade, with measurement basis, materials, inclusions and exclusions.'],
  ['Schedule', 'Trades are sequenced: strip-out, electrical and plumbing, ceilings, flooring, carpentry, painting and polishing, fixtures.'],
  ['Execution', 'Protection of floors and furniture, daily clean-up and a single point of contact for updates.'],
  ['Handover', 'Walk-through, snag list and closure of snag items.'],
]

const principles = ['We put scope, inclusions and exclusions in writing', 'We tell you when something needs a structural or specialist assessment', 'We do not publish rates that would not hold up on site', 'We do not claim certifications, ratings, project counts or guarantees we cannot evidence']

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About" title="An interior works contractor, not a design studio or builder" intro={['Vibroxi is a residential and commercial interior works, fit-out and finishing contractor serving Delhi NCR. Customers approach us for painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchen and bathroom works, refurbishment and maintenance.', 'Our role is execution: turning your requirement, a designer\'s drawings or a BOQ into finished interior work, with the trades coordinated in the right order.']} breadcrumbs={[{ label: 'About', href: '/about' }]}>
        <WhatsAppButton light message={multiWorksMessage}>Discuss Your Interior Project</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-14 lg:px-8 lg:py-20">
        <section id="process">
          <SectionIntro eyebrow="How we work" title="From enquiry to handover" />
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([t, d], i) => <li key={t} className="rounded-sm border border-[#ddd8cd] bg-white p-6"><p className="text-xs font-semibold text-[#a17b3f]">0{i + 1}</p><h3 className="mt-2 font-serif text-xl">{t}</h3><p className="mt-2 text-sm leading-6 text-[#5d655f]">{d}</p></li>)}
          </ol>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-[#e3ded3] bg-white p-6">
            <h2 className="font-serif text-2xl">How we operate</h2>
            <ul className="mt-4 grid gap-2">{principles.map((p) => <li key={p} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-[#1f9d58]" aria-hidden />{p}</li>)}</ul>
          </div>
          <div className="rounded-sm border border-[#e3ded3] bg-white p-6">
            <h2 className="font-serif text-2xl">What we are not</h2>
            <ul className="mt-4 grid gap-2">{['A building construction company', 'A civil or structural contractor', 'An architecture firm', 'An interior design studio or design consultancy'].map((p) => <li key={p} className="flex gap-2 text-sm"><X size={16} className="mt-0.5 text-[#b4483c]" aria-hidden />{p}</li>)}</ul>
          </div>
        </section>
        <section className="max-w-3xl">
          <SectionIntro title="Project evidence" body="We will publish completed projects, photographs and client feedback only when they are genuine and we have permission. Until then, ask us directly about work similar to yours." />
        </section>
      </div>
      <CtaBand title="Tell us about your property" cta="Discuss Your Interior Project" message={multiWorksMessage} />
    </PageShell>
  )
}
