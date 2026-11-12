import type { TradeId } from './capabilities'

export type Faq = { q: string; a: string }
export type LinkItem = { label: string; href: string }
export type Section = { title: string; body: string; items?: string[] }

export type ServicePage = {
  slug: string
  trade: TradeId
  /** Name used in cards, breadcrumbs and the enquiry form. */
  name: string
  /** SEO <title> (brand is appended by the layout template). */
  title: string
  h1: string
  description: string
  intro: string[]
  includes: string[]
  suitableFor: string[]
  sections: Section[]
  quoteFactors: string[]
  notIncluded: string
  faqs: Faq[]
  related: string[]
  /** Enquiry form service options to preselect. */
  formServices: string[]
  cta: string
  /** Parent service slug for breadcrumbs (sub-services). */
  parent?: string
  /** Optional cost page slug. */
  costPage?: string
}

export type PropertyPage = {
  slug: string
  segment: 'residential' | 'commercial'
  name: string
  title: string
  h1: string
  description: string
  intro: string[]
  needs: Section[]
  services: string[]
  planning: string[]
  faqs: Faq[]
  trades: TradeId[]
  formProperty: string
  cta: string
  guides?: string[]
}

export type CityPage = {
  slug: string
  name: string
  title: string
  h1: string
  description: string
  intro: string[]
  residential: string
  commercial: string
  areas: string[]
  localNotes: string[]
  faqs: Faq[]
}

export type CostPage = {
  slug: string
  trades: TradeId[]
  name: string
  title: string
  h1: string
  description: string
  intro: string[]
  pricingBasis: { method: string; when: string }[]
  factors: { title: string; body: string }[]
  checklist: string[]
  faqs: Faq[]
  services: string[]
  cta: string
}

export type GuidePage = {
  slug: string
  title: string
  h1: string
  description: string
  summary: string
  sections: Section[]
  services: string[]
  related: string[]
  cta: string
}
