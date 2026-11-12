import type { Metadata } from 'next'
import { MessageCircle, Phone } from 'lucide-react'
import { PageHero, PageShell } from '@/components/site'
import { EnquiryForm } from '@/components/enquiry-form'
import { PHONE_DISPLAY, TEL_URL, whatsappUrl } from '@/lib/contact'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us – WhatsApp or Call for Interior Works',
  description: 'Contact Vibroxi on WhatsApp or phone (+91 93121 22559) for home and commercial interior works in Delhi NCR. Send one enquiry for multiple services.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Discuss your interior project" intro="WhatsApp is the quickest way to reach us — you can send photos, drawings and a BOQ directly. Prefer to talk? Call us." breadcrumbs={[{ label: 'Contact', href: '/contact' }]} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-20">
        <div className="grid h-fit gap-4">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm bg-[#1f9d58] p-6 text-white">
            <MessageCircle size={28} aria-hidden />
            <span><span className="block text-xs uppercase tracking-[.2em] text-white/80">WhatsApp (preferred)</span><span className="mt-1 block text-xl font-semibold">{PHONE_DISPLAY}</span></span>
          </a>
          <a href={TEL_URL} className="flex items-center gap-4 rounded-sm border border-[#183c31]/20 bg-white p-6">
            <Phone size={26} className="text-[#183c31]" aria-hidden />
            <span><span className="block text-xs uppercase tracking-[.2em] text-[#68716b]">Phone</span><span className="mt-1 block text-xl font-semibold">{PHONE_DISPLAY}</span></span>
          </a>
          <div className="rounded-sm bg-[#ebe4d7] p-6 text-sm leading-7 text-[#4f5852]">
            <h2 className="font-serif text-xl text-[#183c31]">Helpful to include</h2>
            <ul className="mt-2 list-disc pl-5"><li>Property type and location</li><li>Services needed (select several below)</li><li>Photos of the areas</li><li>Drawings or BOQ, if available</li><li>Preferred start date</li></ul>
          </div>
        </div>
        <section aria-labelledby="form-heading" className="rounded-sm bg-white p-5 shadow-sm md:p-8">
          <h2 id="form-heading" className="font-serif text-3xl">Enquiry form</h2>
          <p className="mb-6 mt-2 text-sm leading-6 text-[#68716b]">All fields are optional. Select every service you need — one combined enquiry is easier than several.</p>
          <EnquiryForm source="contact" />
        </section>
      </div>
    </PageShell>
  )
}
