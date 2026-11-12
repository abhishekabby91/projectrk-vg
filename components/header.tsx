'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { PHONE_SHORT, TEL_URL, whatsappUrl } from '@/lib/contact'

export const navItems: [string, string][] = [
  ['Services', '/services'],
  ['Residential', '/residential-interior-works'],
  ['Commercial', '/commercial-interior-works'],
  ['Pricing', '/pricing'],
  ['Locations', '/locations'],
  ['Resources', '/resources'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vibroxi home">
      <span className="grid size-10 place-items-center rounded-sm bg-[#c9a66b] text-[#183c31] shadow-sm">
        <span className="font-serif text-xl font-bold">V</span>
      </span>
      <span className="leading-none">
        <span className="block font-serif text-lg font-semibold tracking-tight text-[#f6f1e8]">VIBROXI</span>
        <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#c9a66b]">Interior works contractor</span>
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:px-3 focus:py-2 focus:text-[#183c31]">Skip to content</a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#163a30] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-white/80 transition hover:text-[#e1c58f]">{label}</Link>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#1f9d58] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#187d46]">
              <MessageCircle size={16} aria-hidden /> WhatsApp
            </a>
          </nav>
          <button type="button" className="rounded-sm p-2 xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-white/10 bg-[#163a30] px-4 py-4 xl:hidden">
            {navItems.map(([label, href]) => (
              <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-sm px-3 py-3 text-sm text-white/85 hover:bg-white/10">{label}</Link>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex justify-center gap-2 rounded-sm bg-[#1f9d58] px-4 py-3 text-sm font-semibold text-white"><MessageCircle size={16} aria-hidden /> WhatsApp enquiry</a>
            <a href={TEL_URL} className="inline-flex justify-center gap-2 rounded-sm border border-white/25 px-4 py-3 text-sm text-white"><Phone size={16} aria-hidden /> Call {PHONE_SHORT}</a>
          </nav>
        )}
      </header>
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 print:hidden">
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#187d46]" aria-label="Start a WhatsApp enquiry">
          <MessageCircle size={19} aria-hidden /> WhatsApp
        </a>
        <a href={TEL_URL} className="inline-flex items-center gap-2 rounded-full border border-[#c9a66b] bg-[#183c31] px-4 py-2 text-xs font-semibold text-white shadow-lg" aria-label={`Call ${PHONE_SHORT}`}>
          <Phone size={14} aria-hidden /> Call
        </a>
      </div>
    </>
  )
}
