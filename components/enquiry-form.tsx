'use client'

import { useId, useMemo, useState } from 'react'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { PHONE_SHORT, TEL_URL, whatsappUrl } from '@/lib/contact'
import { enquiryServiceOptions } from '@/lib/content/services'

const propertyTypes = [
  'Apartment / flat',
  'Independent house / builder floor',
  'Villa',
  'Rental property',
  'Housing society / RWA',
  'Office',
  'Retail shop / showroom',
  'Hotel / guest house',
  'Restaurant / café',
  'Clinic / healthcare',
  'School / institution',
  'Commercial property',
  'Builder / contractor / facility manager',
  'Other',
]

const cityOptions = ['Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad', 'Other']

type Props = {
  /** Services to preselect, e.g. ['Painting']. */
  defaultServices?: string[]
  defaultProperty?: string
  /** Page the enquiry starts from; included in the message for context. */
  source?: string
  submitLabel?: string
}

const inputClass = 'w-full rounded-sm border border-[#d7d4cb] bg-white px-3 py-3 text-base text-[#183c31] outline-none ring-[#c9a66b] focus:ring-2'

/**
 * Builds a WhatsApp message from whatever the visitor fills in. Every field is optional,
 * so partial enquiries are allowed. Nothing is stored or sent by this website.
 */
export function EnquiryForm({ defaultServices = [], defaultProperty = '', source, submitLabel = 'Continue to WhatsApp' }: Props) {
  const id = useId()
  const [fields, setFields] = useState({ name: '', phone: '', email: '', company: '', city: '', location: '', property: defaultProperty, message: '' })
  const [services, setServices] = useState<string[]>(defaultServices)
  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFields((f) => ({ ...f, [key]: e.target.value }))
  const toggle = (service: string) => setServices((list) => (list.includes(service) ? list.filter((s) => s !== service) : [...list, service]))

  const message = useMemo(() => {
    const lines: string[] = []
    const add = (label: string, value: string) => { if (value.trim()) lines.push(`${label}: ${value.trim()}`) }
    add('Name', fields.name)
    add('Phone', fields.phone)
    add('Email', fields.email)
    add('Company', fields.company)
    add('Project location', [fields.location, fields.city].filter((v) => v.trim()).join(', '))
    add('Property type', fields.property)
    if (services.length) lines.push(`Services needed: ${services.join(', ')}`)
    const blocks = ['Hello Vibroxi, I would like to discuss interior work.']
    if (lines.length) blocks.push(lines.join('\n'))
    if (fields.message.trim()) blocks.push(`Details: ${fields.message.trim()}`)
    if (source) blocks.push(`(Sent from the ${source} page)`)
    return blocks.join('\n\n')
  }, [fields, services, source])

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const url = whatsappUrl(message)
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) window.location.href = url
  }

  return (
    <form className="grid gap-4" onSubmit={submit} noValidate>
      <p className="rounded-sm border border-[#b9d8c4] bg-[#eef7f0] p-3 text-sm leading-6 text-[#2c4a3f]">
        Fill in as much or as little as you like. The button opens WhatsApp with your details ready — you review and send the message yourself.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Name<input name="name" autoComplete="name" value={fields.name} onChange={set('name')} className={inputClass} /></label>
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Phone number<input type="tel" name="phone" autoComplete="tel" inputMode="tel" value={fields.phone} onChange={set('phone')} className={inputClass} placeholder="+91" /></label>
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Email<input type="email" name="email" autoComplete="email" value={fields.email} onChange={set('email')} className={inputClass} /></label>
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Company <span className="font-normal text-[#77786f]">(optional)</span><input name="company" autoComplete="organization" value={fields.company} onChange={set('company')} className={inputClass} /></label>
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">City
          <select name="city" value={fields.city} onChange={set('city')} className={inputClass}>
            <option value="">Select city</option>
            {cityOptions.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Area / sector / society<input name="location" autoComplete="address-level3" value={fields.location} onChange={set('location')} className={inputClass} placeholder="e.g. Sector 50" /></label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Property type
        <select name="property" value={fields.property} onChange={set('property')} className={inputClass}>
          <option value="">Select property type</option>
          {propertyTypes.map((p) => <option key={p}>{p}</option>)}
        </select>
      </label>
      <fieldset className="grid gap-2">
        <legend className="mb-1 text-sm font-medium text-[#183c31]">Services needed <span className="font-normal text-[#77786f]">(select all that apply)</span></legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {enquiryServiceOptions.map((service) => {
            const checked = services.includes(service)
            return (
              <label key={service} htmlFor={`${id}-${service}`} className={`flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2.5 text-sm transition ${checked ? 'border-[#183c31] bg-[#183c31] text-white' : 'border-[#d7d4cb] bg-white text-[#183c31] hover:border-[#c9a66b]'}`}>
                <input id={`${id}-${service}`} type="checkbox" className="size-4 accent-[#c9a66b]" checked={checked} onChange={() => toggle(service)} />
                {service}
              </label>
            )
          })}
        </div>
      </fieldset>
      <label className="grid gap-1.5 text-sm font-medium text-[#183c31]">Message
        <textarea name="message" rows={4} value={fields.message} onChange={set('message')} className={inputClass} placeholder="Rooms or areas, approximate size, what needs doing, preferred start date" />
      </label>
      <details className="rounded-sm border border-[#e3ded3] bg-[#fbf9f4] p-3 text-sm">
        <summary className="cursor-pointer font-medium text-[#183c31]">Preview your WhatsApp message</summary>
        <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-5 text-[#4d5a54]">{message}</pre>
      </details>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-[#1f9d58] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#187d46]">
          <MessageCircle size={17} aria-hidden /> {submitLabel} <ArrowUpRight size={16} aria-hidden />
        </button>
        <a href={TEL_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-[#183c31] underline decoration-[#c9a66b] underline-offset-4"><Phone size={16} aria-hidden /> Or call {PHONE_SHORT}</a>
      </div>
      <p className="text-xs leading-5 text-[#6b6d65]">This form does not store or send your details. Your enquiry is only sent when you press send in WhatsApp.</p>
    </form>
  )
}
