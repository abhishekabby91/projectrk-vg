'use client'

import Link from 'next/link'
import { ArrowUpRight, Hammer, Menu, ShieldCheck, Sparkles, Target, Upload, X, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const CONTACT_NUMBER = '919312122559'
const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent('Hello Vibroxi, I have a commercial painting or finishing project enquiry in Delhi NCR. Please let me know the next steps.')}`

export const navItems = [
  ['Services', '/services/commercial-painting'],
  ['Industries', '/industries'],
  ['Pricing', '/pricing'],
  ['Maintenance contracts', '/annual-maintenance-contracts'],
  ['Subcontracting', '/facility-management-subcontracting'],
  ['Coverage', '/locations/delhi-ncr'],
  ['Contact', '/contact'],
]

export function Logo() {
  return <Link href="/" className="group flex items-center gap-3" aria-label="Vibroxi home"><span className="grid size-10 place-items-center rounded-sm bg-[#c9a66b] text-[#183c31] shadow-sm"><span className="font-serif text-xl font-bold">V</span></span><span className="leading-none"><span className="block font-serif text-lg font-semibold tracking-tight text-[#f6f1e8]">VIBROXI</span><span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.22em] text-[#c9a66b]">Commercial finishes</span></span></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-[#163a30]/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map(([label, href]) => <Link key={label} href={href} className="text-sm text-white/75 transition hover:text-[#e1c58f]">{label}</Link>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#c9a66b] px-4 py-2.5 text-sm font-semibold text-[#183c31] transition hover:bg-[#e1c58f]"><MessageCircle size={16}/> WhatsApp us</a>
        </nav>
        <button className="rounded-sm p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#163a30] px-5 py-4 xl:hidden">
        {navItems.map(([label,href])=><Link onClick={()=>setOpen(false)} key={label} href={href} className="rounded-sm px-3 py-3 text-sm text-white/80 hover:bg-white/10">{label}</Link>)}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex justify-center gap-2 rounded-sm bg-[#c9a66b] px-4 py-3 text-sm font-semibold text-[#183c31]"><MessageCircle size={16}/> WhatsApp project enquiry</a>
        <a href="tel:+919312122559" className="inline-flex justify-center gap-2 rounded-sm border border-white/20 px-4 py-3 text-sm text-white"><Phone size={16}/> Call 93121 22559</a>
      </nav>}
    </header>
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-2">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#187d46]" aria-label="Start a WhatsApp project enquiry"><MessageCircle size={19}/> WhatsApp</a>
      <a href="tel:+919312122559" className="inline-flex items-center gap-2 rounded-full border border-[#c9a66b] bg-[#183c31] px-4 py-2.5 text-xs font-semibold text-white shadow-lg"><Phone size={15}/> Call 93121 22559</a>
    </div>
  </>
}

export function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) { return <div className="max-w-2xl"><p className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#d9bd80]' : 'text-[#a17b3f]'}`}>{eyebrow}</p><h2 className={`font-serif text-4xl leading-tight tracking-tight md:text-5xl ${light ? 'text-white' : 'text-[#183c31]'}`}>{title}</h2>{body && <p className={`mt-5 text-base leading-7 ${light ? 'text-white/70' : 'text-[#5d655f]'}`}>{body}</p>}</div> }

export function ButtonLink({ children, href = '#contact', dark = false }: { children: React.ReactNode; href?: string; dark?: boolean }) { const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition ${dark ? 'bg-[#c9a66b] text-[#183c31] hover:bg-[#e1c58f]' : 'bg-[#183c31] text-white hover:bg-[#285548]'}`; return href === '/contact' ? <a href={WHATSAPP_URL} target='_blank' rel='noopener noreferrer' className={classes}>{children}<ArrowUpRight size={16}/></a> : <Link href={href} className={classes}>{children}<ArrowUpRight size={16}/></Link> }

export const serviceCards = [
  { title: 'Commercial painting', text: 'Interior and exterior painting for commercial buildings and managed properties.', icon: Sparkles, href: '/services/commercial-painting' },
  { title: 'Building repainting', text: 'Planned repainting for façades, common areas and occupied properties.', icon: Hammer, href: '/services/building-repainting' },
  { title: 'Wood polishing & refinishing', text: 'Refinishing for doors, joinery, panelling and reception areas.', icon: Target, href: '/services/wood-polishing' },
  { title: 'Surface preparation & finishing', text: 'Preparation and finishing work aligned to the approved project scope.', icon: ShieldCheck, href: '/services/surface-preparation-finishing' },
]

export function EnquiryForm() {
  function sendToWhatsApp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const fields = [
      'Hello Vibroxi, I would like to discuss a commercial project.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Project location: ${data.get('location') || ''}`,
      `Organisation type: ${data.get('buyer') || ''}`,
      `Engagement: ${data.get('engagement') || ''}`,
      `Services: ${data.get('services') || ''}`,
      `Project scope: ${data.get('scope') || ''}`,
    ]
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(fields.join('\n'))}`, '_blank', 'noopener,noreferrer')
  }
  return <form className="grid gap-4" onSubmit={sendToWhatsApp}>
    <div className="rounded-sm border border-[#b9d8c4] bg-[#eef7f0] p-4">
      <p className="text-sm font-semibold text-[#183c31]">WhatsApp is the quickest way to contact us.</p>
      <p className="mt-1 text-xs leading-5 text-[#52655d]">Submit this brief to open WhatsApp with your project details ready to send to 93121 22559.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Name<input required name="name" autoComplete="name" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="Your name"/></label>
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Company<input required name="company" autoComplete="organization" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="Company name"/></label>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Work email<input required type="email" name="email" autoComplete="email" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="you@company.com"/></label>
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Phone<input required type="tel" name="phone" autoComplete="tel" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="+91"/></label>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Project location<input name="location" autoComplete="address-level2" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="City / site"/></label>
      <label className="grid gap-2 text-sm font-medium text-[#183c31]">Organisation type<select name="buyer" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2"><option>Facility management company</option><option>Commercial property owner / manager</option><option>Hotel / hospitality group</option><option>Corporate office / business park</option><option>Industrial / institutional facility</option><option>Commercial fit-out contractor</option><option>Other organisation</option></select></label>
    </div>
    <label className="grid gap-2 text-sm font-medium text-[#183c31]">Engagement type<select name="engagement" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2"><option>One-time commercial project</option><option>Recurring / annual maintenance</option><option>Specialist subcontracting</option><option>Multi-site requirement</option><option>Not sure yet</option></select></label>
    <label className="grid gap-2 text-sm font-medium text-[#183c31]">Required services<input name="services" className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="Painting, wood refinishing, finishing…"/></label>
    <label className="grid gap-2 text-sm font-medium text-[#183c31]">Project scope<textarea required name="scope" rows={4} className="rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 outline-none ring-[#c9a66b] focus:ring-2" placeholder="Property type, approximate area, number of sites, access and expected start date"/></label>
    <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-sm bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#187d46]"><MessageCircle size={17}/> Continue to WhatsApp <ArrowUpRight size={16}/></button>
    <a href="tel:+919312122559" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#183c31] underline decoration-[#c9a66b] underline-offset-4"><Phone size={16}/> Prefer to call? 93121 22559</a>
    <p className="text-xs leading-5 text-[#77786f]">Your details are placed into a WhatsApp message. Review and send the message in WhatsApp to complete the enquiry. No form submission is stored on this website.</p>
  </form>
}

export function Footer() { return <footer className="bg-[#102c25] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8"><div className="md:col-span-2"><Logo/><p className="mt-6 max-w-sm text-sm leading-6 text-white/60">Commercial painting, wood finishing and property maintenance execution for facility teams, property operators and commercial contractors in Delhi NCR.</p><div className="mt-6 flex flex-wrap gap-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#1f9d58] px-4 py-2.5 text-sm font-semibold text-white"><MessageCircle size={16}/> WhatsApp 93121 22559</a><a href="tel:+919312122559" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-4 py-2.5 text-sm text-white"><Phone size={16}/> Call us</a></div></div><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd80]">Services</p><div className="grid gap-3 text-sm text-white/65"><Link href="/services/commercial-painting">Commercial painting</Link><Link href="/services/building-repainting">Building repainting</Link><Link href="/services/wood-polishing">Wood polishing</Link><Link href="/services/surface-preparation-finishing">Surface preparation</Link><Link href="/pricing">Pricing & quotations</Link><Link href="/annual-maintenance-contracts">Maintenance contracts</Link></div></div><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd80]">Company</p><div className="grid gap-3 text-sm text-white/65"><Link href="/industries">Industries</Link><Link href="/facility-management-subcontracting">Subcontracting</Link><Link href="/project-delivery">Project delivery</Link><Link href="/locations/delhi-ncr">Delhi NCR coverage</Link><Link href="/locations/delhi">Delhi</Link><Link href="/locations/gurugram">Gurugram</Link><Link href="/locations/noida">Noida</Link><Link href="/locations/greater-noida">Greater Noida</Link><Link href="/locations/ghaziabad">Ghaziabad</Link><Link href="/locations/faridabad">Faridabad</Link><Link href="/contact">Contact</Link></div></div></div><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between lg:px-8"><span>© 2026 Vibroxi. Commercial project enquiries.</span></div></footer> }
