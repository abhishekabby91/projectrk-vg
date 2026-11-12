import type { Metadata } from 'next'
import Link from 'next/link'
import { CallButton, CtaBand, PageHero, PageShell, SectionIntro, WhatsAppButton } from '@/components/site'
import { multiWorksMessage } from '@/lib/contact'
import { serviceFamilies, servicesInTrade } from '@/lib/content/services'
import { serviceHref } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Interior Works Services – Painting, Electrical, Plumbing & More',
  description: 'All Vibroxi interior services in Delhi NCR: painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchen and bathroom works, refurbishment and maintenance.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="Interior works services" intro="Every service below can be enquired about on its own or combined into one project. Each page explains what the work includes, what affects the quotation and what falls outside our scope." breadcrumbs={[{ label: 'Services', href: '/services' }]}>
        <WhatsAppButton light message={multiWorksMessage}>Discuss Multiple Interior Works</WhatsAppButton>
        <CallButton />
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:px-8 lg:py-20">
        {serviceFamilies.map((f) => (
          <section key={f.trade} className="grid gap-6 border-b border-[#ddd8cd] pb-12 last:border-0 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionIntro title={f.title} body={f.summary} />
              <Link href={serviceHref(f.hub)} className="mt-5 inline-block text-sm font-semibold underline decoration-[#c9a66b] underline-offset-4">Overview: {f.title.toLowerCase()}</Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {servicesInTrade(f.trade).map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s.slug)} className="block h-full rounded-sm border border-[#ddd8cd] bg-white p-4 transition hover:border-[#c9a66b]">
                    <span className="font-semibold">{s.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-[#68716b]">{s.includes.slice(0, 3).join(' · ')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand title="Not sure which service you need?" body="Describe the problem or send photos. We will tell you which trades are involved." cta="Discuss Your Interior Project" message={multiWorksMessage} />
    </PageShell>
  )
}
