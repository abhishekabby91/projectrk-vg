import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { ContentPage } from '@/components/content-page'
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
  return <ContentPage
    eyebrow="Service region"
    title="Commercial Finishing Support Across Delhi NCR"
    intro="Delhi NCR is Vibroxi’s initial service region. Commercial painting, building repainting, wood polishing and defined finishing enquiries can be reviewed across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad. Project availability is confirmed against the site, scope, timing and delivery capacity."
    sections={[
      { title: 'Commercial work we can review', body: 'The regional pages are intended for property-level and larger commercial work rather than small household repair bookings.', items: ['Office and commercial building repainting', 'Hotel and hospitality finishing', 'Wood polishing and refinishing', 'Facility management subcontracting', 'Planned maintenance work packages'] },
      { title: 'How coverage is confirmed', body: 'A location is not a guarantee of mobilisation. Share the exact property address, work scope, approximate area, access requirements and target dates. The team reviews whether the project can be supported before confirming a quotation or programme.' },
    ]}
    cta="WhatsApp a Delhi NCR project enquiry"
  >
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div className="mb-8 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.24em] text-[#a17b3f]">City coverage</p><h2 className="mt-3 font-serif text-3xl text-[#183c31] md:text-4xl">Choose the location of your commercial property.</h2><p className="mt-4 text-sm leading-7 text-[#5d655f]">Each city page covers local commercial property contexts, planning considerations and project enquiries. Coverage and mobilisation are confirmed individually.</p></div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => <Link key={city.href} href={city.href} className="group border border-[#ddd8cd] bg-[#fbf9f4] p-6 transition hover:border-[#c9a66b]"><MapPin size={21} className="text-[#a17b3f]"/><h3 className="mt-6 font-serif text-2xl text-[#183c31]">{city.name}</h3><p className="mt-3 text-sm leading-6 text-[#68716b]">{city.detail}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a17b3f]">View local coverage <ArrowUpRight size={15}/></span></Link>)}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#ddd8cd] pt-8"><a href="https://wa.me/919312122559?text=Hello%20Vibroxi%2C%20I%20have%20a%20commercial%20project%20enquiry%20in%20Delhi%20NCR." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white">WhatsApp 93121 22559 <ArrowUpRight size={16}/></a><a href="tel:+919312122559" className="text-sm font-semibold text-[#183c31] underline decoration-[#c9a66b] underline-offset-4">Call 93121 22559</a></div>
    </section>
  </ContentPage>
}
