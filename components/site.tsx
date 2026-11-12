import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { Header, Logo } from '@/components/header'
import { EnquiryForm } from '@/components/enquiry-form'
import { PHONE_DISPLAY, PHONE_SHORT, TEL_URL, whatsappUrl } from '@/lib/contact'
import { absoluteUrl, siteUrl } from '@/lib/site'
import { serviceFamilies } from '@/lib/content/services'
import { cities } from '@/lib/content/locations'
import { cityHref, serviceHref } from '@/lib/routes'
import type { Faq, LinkItem } from '@/lib/types'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="bg-[#f6f1e8] text-[#183c31]">{children}</main>
      <Footer />
    </>
  )
}

export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  const all = [{ label: 'Home', href: '/' }, ...items]
  const data = siteUrl
    ? { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.label, item: absoluteUrl(item.href) })) }
    : null
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/65">
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={12} aria-hidden />}
            {i === all.length - 1 ? <span aria-current="page" className="text-white/90">{item.label}</span> : <Link href={item.href} className="hover:text-[#e1c58f]">{item.label}</Link>}
          </li>
        ))}
      </ol>
      <JsonLd data={data} />
    </nav>
  )
}

export function PageHero({ eyebrow, title, intro, breadcrumbs, children }: { eyebrow?: string; title: string; intro?: string | string[]; breadcrumbs?: LinkItem[]; children?: React.ReactNode }) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : []
  return (
    <section className="bg-[#183c31] pb-14 pt-8 text-white lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && <p className="mt-8 text-xs font-semibold uppercase tracking-[.22em] text-[#d9bd80]">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
        {paragraphs.map((p) => <p key={p.slice(0, 40)} className="mt-5 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">{p}</p>)}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}

export function WhatsAppButton({ children, message, light = false }: { children: React.ReactNode; message?: string; light?: boolean }) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition ${light ? 'bg-[#c9a66b] text-[#183c31] hover:bg-[#e1c58f]' : 'bg-[#1f9d58] text-white hover:bg-[#187d46]'}`}>
      <MessageCircle size={17} aria-hidden /> {children}
    </a>
  )
}

export function CallButton({ dark = false }: { dark?: boolean }) {
  return (
    <a href={TEL_URL} className={`inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold ${dark ? 'border-[#183c31]/30 text-[#183c31]' : 'border-white/30 text-white'}`}>
      <Phone size={16} aria-hidden /> Call {PHONE_SHORT}
    </a>
  )
}

export function ButtonLink({ children, href, light = false }: { children: React.ReactNode; href: string; light?: boolean }) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition ${light ? 'bg-[#c9a66b] text-[#183c31] hover:bg-[#e1c58f]' : 'bg-[#183c31] text-white hover:bg-[#285548]'}`}>
      {children}<ArrowUpRight size={16} aria-hidden />
    </Link>
  )
}

export function SectionIntro({ eyebrow, title, body, light = false, as: Tag = 'h2' }: { eyebrow?: string; title: string; body?: string; light?: boolean; as?: 'h2' | 'h3' }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? 'text-[#d9bd80]' : 'text-[#a17b3f]'}`}>{eyebrow}</p>}
      <Tag className={`font-serif text-3xl leading-tight tracking-tight md:text-4xl ${light ? 'text-white' : 'text-[#183c31]'}`}>{title}</Tag>
      {body && <p className={`mt-4 text-base leading-7 ${light ? 'text-white/70' : 'text-[#5d655f]'}`}>{body}</p>}
    </div>
  )
}

export function FaqList({ faqs, title = 'Frequently asked questions' }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null
  const data = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-serif text-3xl">{title}</h2>
      <div className="mt-5 grid">
        {faqs.map((f) => (
          <details key={f.q} className="border-b border-[#ddd8cd] py-4">
            <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
            <p className="mt-3 text-sm leading-7 text-[#5d655f]">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={data} />
    </section>
  )
}

export function LinkCards({ items }: { items: (LinkItem & { text?: string })[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group flex flex-col justify-between rounded-sm border border-[#ddd8cd] bg-white p-5 transition hover:border-[#c9a66b] hover:shadow-sm">
          <span>
            <span className="font-serif text-lg">{item.label}</span>
            {item.text && <span className="mt-2 block text-sm leading-6 text-[#68716b]">{item.text}</span>}
          </span>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#a17b3f]">View <ArrowRight size={14} className="transition group-hover:translate-x-1" aria-hidden /></span>
        </Link>
      ))}
    </div>
  )
}

export function InlineLinks({ title, items }: { title: string; items: LinkItem[] }) {
  if (!items.length) return null
  return (
    <nav aria-label={title}>
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a17b3f]">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {items.map((l) => <li key={l.href}><Link href={l.href} className="text-sm font-semibold underline decoration-[#c9a66b] underline-offset-4 hover:text-[#a17b3f]">{l.label}</Link></li>)}
      </ul>
    </nav>
  )
}

export function EnquiryAside({ title = 'Discuss your interior project', body, defaultServices, defaultProperty, source }: { title?: string; body?: string; defaultServices?: string[]; defaultProperty?: string; source?: string }) {
  return (
    <aside id="enquiry" className="h-fit rounded-sm bg-white p-5 shadow-sm md:p-7 lg:sticky lg:top-24">
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <p className="mb-6 mt-2 text-sm leading-6 text-[#68716b]">{body ?? 'Tell us what needs doing — one service or several. You can select more than one service below.'}</p>
      <EnquiryForm defaultServices={defaultServices} defaultProperty={defaultProperty} source={source} />
    </aside>
  )
}

export function CtaBand({ title, body, cta, message }: { title: string; body?: string; cta: string; message?: string }) {
  return (
    <section className="bg-[#183c31] py-14 text-white">
      <div className="mx-auto flex max-w-7xl px-4 lg:px-8 flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight">{title}</h2>
          {body && <p className="mt-3 text-sm leading-7 text-white/70">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton message={message} light>{cta}</WhatsAppButton>
          <CallButton />
        </div>
      </div>
    </section>
  )
}

export function ReviewNotice({ text }: { text: string }) {
  return (
    <div role="note" className="border-b border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 lg:px-8">
      <div className="mx-auto max-w-7xl"><strong>Owner review (not shown in production):</strong> {text}</div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#102c25] pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">Residential and commercial interior works, fit-out and finishing contractor in Delhi NCR. Painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchens, bathrooms and refurbishment — coordinated by one team.</p>
          <p className="mt-4 max-w-sm text-xs leading-5 text-white/45">We execute interior works to your requirements, drawings or BOQ. We are not a construction, civil, structural, architecture or interior design firm.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#1f9d58] px-4 py-2.5 text-sm font-semibold text-white"><MessageCircle size={16} aria-hidden /> WhatsApp {PHONE_SHORT}</a>
            <a href={TEL_URL} className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-4 py-2.5 text-sm text-white"><Phone size={16} aria-hidden /> {PHONE_DISPLAY}</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd80]">Services</p>
          <ul className="grid gap-2.5 text-sm text-white/70">
            {serviceFamilies.map((f) => <li key={f.hub}><Link href={serviceHref(f.hub)} className="hover:text-white">{f.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd80]">Customers</p>
          <ul className="grid gap-2.5 text-sm text-white/70">
            <li><Link href="/residential-interior-works" className="hover:text-white">Residential interior works</Link></li>
            <li><Link href="/commercial-interior-works" className="hover:text-white">Commercial interior works</Link></li>
            <li><Link href="/interior-works" className="hover:text-white">Interior works contractor</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing &amp; quotations</Link></li>
            <li><Link href="/resources" className="hover:text-white">Guides &amp; checklists</Link></li>
            <li><Link href="/about" className="hover:text-white">About Vibroxi</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd80]">Locations</p>
          <ul className="grid gap-2.5 text-sm text-white/70">
            <li><Link href="/locations" className="hover:text-white">Delhi NCR</Link></li>
            {cities.map((c) => <li key={c.slug}><Link href={cityHref(c.slug)} className="hover:text-white">{c.name}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 px-4 py-5 text-xs text-white/45 lg:px-8">© {new Date().getFullYear()} Vibroxi. Interior works enquiries across Delhi NCR.</div>
    </footer>
  )
}
