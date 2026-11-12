import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, ClipboardList, Home as HomeIcon, Layers, MessageSquareText, Wrench } from 'lucide-react'
import { ButtonLink, CallButton, CtaBand, EnquiryAside, FaqList, LinkCards, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage, siteVisitMessage } from '@/lib/contact'
import { serviceFamilies, servicesInTrade } from '@/lib/content/services'
import { properties } from '@/lib/content/properties'
import { cities } from '@/lib/content/locations'
import { guides } from '@/lib/content/guides'
import { cityHref, guideHref, propertyHref, serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Residential & Commercial Interior Works Contractor in Delhi NCR',
    description: 'Vibroxi is an interior works, fit-out and finishing contractor for homes and commercial spaces in Delhi NCR — painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring and refurbishment.',
    path: '/',
  }),
  title: { absolute: 'Vibroxi | Residential & Commercial Interior Works Contractor in Delhi NCR' },
}

const steps = [
  { icon: MessageSquareText, title: 'Share your list', text: 'Send a room-by-room list, photos, drawings or a BOQ on WhatsApp. One service or ten — all in one message.' },
  { icon: ClipboardList, title: 'Site visit and scope', text: 'We check surfaces, existing installations and access, then confirm what each trade involves.' },
  { icon: Layers, title: 'One itemised quotation', text: 'A single quotation broken down by room and trade, with materials, inclusions and exclusions stated.' },
  { icon: Wrench, title: 'Sequenced execution', text: 'Trades are scheduled in the right order — electrical and plumbing before ceilings, flooring and paint.' },
]

const faqs = [
  { q: 'What kind of contractor is Vibroxi?', a: 'Vibroxi is a residential and commercial interior works, fit-out and finishing contractor. We execute interior trades — painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchen and bathroom works — and coordinate them as one project.' },
  { q: 'Do you provide interior design?', a: 'No. We are an execution contractor. We work from your requirements, reference images, a designer\'s drawings or a BOQ.' },
  { q: 'Do you do construction or structural work?', a: 'No. Our work is interior and non-structural. Construction, civil, structural and architectural work must be handled by qualified specialists.' },
  { q: 'Can I enquire about several works at once?', a: 'Yes. The enquiry form lets you select multiple services, and the quotation will list each trade separately.' },
  { q: 'Which areas do you cover?', a: 'Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad. Site visits are confirmed after we review the location and scope.' },
]

export default function Home() {
  const residential = properties.filter((p) => p.segment === 'residential')
  const commercial = properties.filter((p) => p.segment === 'commercial')
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[#173d32] py-16 text-white lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#d9bd80]">Interior works · Fit-out · Finishing · Delhi NCR</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] md:text-6xl">One contractor for your home and commercial interior works.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchens, bathrooms and refurbishment — planned together, quoted together and carried out in the right order.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton light message={multiWorksMessage}>Discuss Your Interior Project</WhatsAppButton>
              <CallButton />
            </div>
            <p className="mt-6 text-sm text-white/55">For homeowners, landlords, housing societies, offices, shops, hotels, restaurants, clinics, schools and property managers.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {serviceFamilies.map((f) => (
              <li key={f.hub}><Link href={serviceHref(f.hub)} className="flex h-full items-center rounded-sm border border-white/15 bg-white/5 px-4 py-3 transition hover:border-[#c9a66b] hover:bg-white/10">{f.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <SectionIntro eyebrow="Services" title="Interior trades handled through one point of contact" body="Choose one service or combine several. Each trade has its own page explaining the scope, what affects the quotation and what is not included." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceFamilies.map((f) => (
            <article key={f.hub} className="flex flex-col rounded-sm border border-[#ddd8cd] bg-white p-6">
              <h3 className="font-serif text-2xl"><Link href={serviceHref(f.hub)} className="hover:text-[#a17b3f]">{f.title}</Link></h3>
              <p className="mt-3 text-sm leading-6 text-[#5d655f]">{f.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {servicesInTrade(f.trade).filter((s) => s.slug !== f.hub).slice(0, 4).map((s) => <li key={s.slug}><Link href={serviceHref(s.slug)} className="text-[#a17b3f] underline-offset-2 hover:underline">{s.name}</Link></li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8"><ButtonLink href="/services">All services</ButtonLink></div>
      </section>

      <section className="bg-[#ebe4d7] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:px-8 lg:grid-cols-2">
          <div>
            <HomeIcon className="text-[#a17b3f]" aria-hidden />
            <h2 className="mt-3 font-serif text-3xl">Residential interior works</h2>
            <p className="mt-3 text-sm leading-7 text-[#4f5852]">Homes, apartments, villas, rental properties and housing societies. Work planned around family routines and society rules.</p>
            <ul className="mt-5 grid gap-2">{residential.map((p) => <li key={p.slug}><Link href={propertyHref(p.slug)} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[#a17b3f]"><ArrowRight size={14} aria-hidden />{p.name}</Link></li>)}</ul>
            <div className="mt-6"><ButtonLink href="/residential-interior-works">Residential overview</ButtonLink></div>
          </div>
          <div>
            <Building2 className="text-[#a17b3f]" aria-hidden />
            <h2 className="mt-3 font-serif text-3xl">Commercial interior works</h2>
            <p className="mt-3 text-sm leading-7 text-[#4f5852]">Offices, retail and showrooms, hotels, restaurants, clinics, schools and commercial property. Phased, after-hours work where needed.</p>
            <ul className="mt-5 grid gap-2">{commercial.map((p) => <li key={p.slug}><Link href={propertyHref(p.slug)} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[#a17b3f]"><ArrowRight size={14} aria-hidden />{p.name}</Link></li>)}</ul>
            <div className="mt-6"><ButtonLink href="/commercial-interior-works">Commercial overview</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <SectionIntro eyebrow="How it works" title="Multiple interior works, one coordinated plan" body="Separate tradespeople often work out of sequence, so finished surfaces get damaged and redone. We plan the order of work before anyone starts." />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-sm border border-[#ddd8cd] bg-white p-6">
              <s.icon className="text-[#a17b3f]" aria-hidden />
              <p className="mt-4 text-xs font-semibold text-[#a17b3f]">Step {i + 1}</p>
              <h3 className="mt-1 font-serif text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d655f]">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-sm border border-[#e3ded3] bg-[#fbf9f4] p-6 text-sm leading-7 text-[#4f5852]">
          <strong className="text-[#183c31]">What we are not:</strong> Vibroxi does not provide building construction, civil or structural work, architecture or interior design. We carry out non-structural interior works to your requirements, drawings or BOQ, and we point out when something needs a structural or specialist assessment.
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:px-8 lg:grid-cols-[1fr_.9fr]">
          <div className="grid content-start gap-10">
            <SectionIntro eyebrow="Pricing" title="Clear, itemised quotations — no generic rate card" body="Interior work cost depends on area, condition, materials, access and how many trades are involved. We explain the measurement basis and list what is included and excluded." />
            <div className="flex flex-wrap gap-3"><ButtonLink href="/pricing">How pricing works</ButtonLink><WhatsAppButton message={siteVisitMessage}>Request a Site Visit</WhatsAppButton></div>
            <div>
              <h2 className="font-serif text-2xl">Locations</h2>
              <ul className="mt-4 flex flex-wrap gap-2">{cities.map((c) => <li key={c.slug}><Link href={cityHref(c.slug)} className="inline-block rounded-full border border-[#d8cfbd] px-4 py-2 text-sm hover:border-[#c9a66b]">{c.name}</Link></li>)}</ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl">Planning guides</h2>
              <div className="mt-4"><LinkCards items={guides.slice(0, 3).map((g) => ({ label: g.title, href: guideHref(g.slug) }))} /></div>
            </div>
            <FaqList faqs={faqs} />
          </div>
          <EnquiryAside title="Discuss Multiple Interior Works" source="homepage" />
        </div>
      </section>

      <CtaBand title="Tell us what your property needs." body="WhatsApp is the quickest way to reach us. Send photos and a short list — we will reply with the next step." cta="Discuss Your Interior Project" message={multiWorksMessage} />
    </PageShell>
  )
}
