import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Building2, Factory, Hotel, ShieldCheck } from 'lucide-react'
import { Header, Footer, SectionIntro } from '@/components/site-shell'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Industries We Support',
  description: 'Commercial painting and finishing support for facility management companies, hotels, commercial property owners and industrial facilities.',
  ...canonicalMetadata('/industries'),
}
const sectors = [
  { title: 'Facility management companies', description: 'Specialist painting and finishing work packages for facility providers and property operations teams.', href: '/industries/facility-management', icon: ShieldCheck },
  { title: 'Hotels & hospitality', description: 'Finishing scopes planned around guest areas, operating schedules, access and handover.', href: '/industries/hotels-hospitality', icon: Hotel },
  { title: 'Commercial property owners', description: 'Building repainting and property-level finishing for owners, asset managers and operators.', href: '/industries/commercial-property', icon: Building2 },
  { title: 'Industrial & institutional facilities', description: 'Enquiries reviewed against technical requirements, site conditions and safety capability.', href: '/industries/industrial-facilities', icon: Factory },
]
export default function IndustriesPage() {
  return <main className="bg-[#f6f1e8] text-[#183c31]"><Header/>
    <section className="bg-[#183c31] px-5 pb-20 pt-40 text-white lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#d9bd80]">Buyer segments</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">Commercial finishing support for property teams.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Different properties have different access, operating and handover requirements. Explore how a defined painting and finishing work package may fit your site.</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="Industries" title="Start with the property and the work required." body="These pages explain the buyer-specific context. Final scope and availability are confirmed after a project review."/><div className="mt-12 grid gap-4 md:grid-cols-2">{sectors.map(({title,description,href,icon:Icon})=><Link key={title} href={href} className="group border border-[#ddd8cd] bg-[#fbf9f4] p-8 transition hover:border-[#c9a66b]"><Icon size={26} className="text-[#a17b3f]"/><h2 className="mt-8 font-serif text-3xl">{title}</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#68716b]">{description}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a17b3f]">Explore sector <ArrowUpRight size={15}/></span></Link>)}</div></section>
    <section className="bg-[#ebe4d7] px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Project enquiries" title="Have a multi-site or specialist requirement?" body="Share the property list, locations, approximate quantities, required services and expected programme so the scope can be assessed."/><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#183c31] px-5 py-3 text-sm font-semibold text-white">Discuss a requirement <ArrowUpRight size={16}/></Link></div></section><Footer/>
  </main>
}
