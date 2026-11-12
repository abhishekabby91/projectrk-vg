import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Header, Footer, SectionIntro } from '@/components/site-shell'
import { canonicalMetadata } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Painting & Finishing Contractors Across Delhi NCR',
  description: 'Commercial painting, building repainting and wood polishing enquiries across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad.',
  ...canonicalMetadata('/locations/delhi-ncr'),
}

const cities = [
  { name: 'Delhi', href: '/locations/delhi', detail: 'Commercial offices, hospitality properties, managed buildings and business districts.' },
  { name: 'Gurugram', href: '/locations/gurugram', detail: 'Business parks, corporate towers, hotels and facility-managed properties.' },
  { name: 'Noida', href: '/locations/noida', detail: 'IT campuses, office buildings, retail premises and commercial developments.' },
  { name: 'Greater Noida', href: '/locations/greater-noida', detail: 'Business parks, institutional buildings, hotels and multi-block properties.' },
  { name: 'Ghaziabad', href: '/locations/ghaziabad', detail: 'Commercial buildings, managed developments and industrial administrative offices.' },
  { name: 'Faridabad', href: '/locations/faridabad', detail: 'Business premises, industrial office blocks and managed commercial properties.' },
]

export default function DelhiNcrPage() {
  return <main className="bg-[#f6f1e8] text-[#183c31]"><Header/>
    <section className="bg-[#183c31] px-5 pb-20 pt-40 text-white lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#d9bd80]">Service region</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">Commercial Finishing Support Across Delhi NCR</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">Delhi NCR is Vibroxi’s initial service region. Commercial painting, building repainting, wood polishing and defined finishing enquiries can be reviewed across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad. Project availability is confirmed against the site, scope, timing and delivery capacity.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://wa.me/919312122559?text=Hello%20Vibroxi%2C%20I%20have%20a%20commercial%20project%20enquiry%20in%20Delhi%20NCR." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#c9a66b] px-5 py-3 text-sm font-semibold text-[#183c31]">WhatsApp project enquiry <ArrowUpRight size={16}/></a><a href="tel:+919312122559" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white">Call 93121 22559</a></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="City coverage" title="Choose the location of your commercial property." body="Each city page covers local commercial property contexts, planning considerations and project enquiries. Coverage and mobilisation are confirmed individually."/><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cities.map((city)=><Link key={city.href} href={city.href} className="group border border-[#ddd8cd] bg-[#fbf9f4] p-7 transition hover:border-[#c9a66b]"><MapPin size={21} className="text-[#a17b3f]"/><h2 className="mt-6 font-serif text-2xl text-[#183c31]">{city.name}</h2><p className="mt-3 text-sm leading-6 text-[#68716b]">{city.detail}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a17b3f]">View local coverage <ArrowUpRight size={15}/></span></Link>)}</div></section>
    <section className="bg-[#ebe4d7] px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Commercial work" title="Painting, repainting and wood finishing enquiries." body="The regional pages are intended for property-level and larger commercial work rather than small household repair bookings. Share the exact property address, work scope, approximate area, access requirements and target dates. A location is not a guarantee of mobilisation."/><div className="mt-8 grid gap-3 text-sm text-[#52655d] sm:grid-cols-2 lg:grid-cols-4">{['Office and commercial building repainting','Hotel and hospitality finishing','Wood polishing and refinishing','Facility management subcontracting','Planned maintenance work packages','Multi-site commercial requirements'].map((item)=><div key={item} className="border-b border-[#d4ccbd] py-3">{item}</div>)}</div></div></section><Footer/>
  </main>
}
