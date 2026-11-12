import { allPublished, isPublished } from './capabilities'
import { allServices, servicesBySlug } from './content/services'
import { properties, propertiesBySlug } from './content/properties'
import { cities } from './content/locations'
import { costPages, costPagesBySlug } from './content/costs'
import { guides, guidesBySlug } from './content/guides'
import type { LinkItem } from './types'

export const serviceHref = (slug: string) => `/services/${slug}`
export const propertyHref = (slug: string) => `/interior-works/${slug}`
export const cityHref = (slug: string) => `/locations/${slug}`
export const costHref = (slug: string) => `/pricing/${slug}`
export const guideHref = (slug: string) => `/resources/${slug}`

/** Resolve a slug used in content `related` / `services` lists to a link. */
export function resolveLink(slug: string): LinkItem {
  const service = servicesBySlug[slug]
  if (service) return { label: service.name, href: serviceHref(slug) }
  const property = propertiesBySlug[slug]
  if (property) return { label: property.name, href: propertyHref(slug) }
  const cost = costPagesBySlug[slug]
  if (cost) return { label: cost.name, href: costHref(slug) }
  const guide = guidesBySlug[slug]
  if (guide) return { label: guide.title, href: guideHref(slug) }
  throw new Error(`Unknown content slug: ${slug}`)
}

/** Static pages that are always published. */
export const staticPaths = [
  '/',
  '/about',
  '/services',
  '/interior-works',
  '/residential-interior-works',
  '/commercial-interior-works',
  '/pricing',
  '/locations',
  '/resources',
  '/contact',
]

type RouteEntry = { path: string; indexable: boolean }

export function allRoutes(): RouteEntry[] {
  return [
    ...staticPaths.map((path) => ({ path, indexable: true })),
    ...allServices.map((s) => ({ path: serviceHref(s.slug), indexable: isPublished(s.trade) })),
    ...properties.map((p) => ({ path: propertyHref(p.slug), indexable: allPublished(p.trades) })),
    ...cities.map((c) => ({ path: cityHref(c.slug), indexable: true })),
    ...costPages.map((c) => ({ path: costHref(c.slug), indexable: allPublished(c.trades) })),
    ...guides.map((g) => ({ path: guideHref(g.slug), indexable: true })),
    { path: '/projects', indexable: false },
  ]
}
