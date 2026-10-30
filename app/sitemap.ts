import type { MetadataRoute } from 'next'
import { absoluteUrl, siteUrl } from '@/lib/site'

// Only canonical, public and indexable pages belong in this list.
// The projects page stays out until verified case studies are ready.
const paths = [
  '/',
  '/industries',
  '/industries/facility-management',
  '/industries/hotels-hospitality',
  '/industries/commercial-property',
  '/industries/industrial-facilities',
  '/project-delivery',
  '/locations/delhi-ncr',
  '/contact',
  '/annual-maintenance-contracts',
  '/facility-management-subcontracting',
  '/services/commercial-painting',
  '/services/building-repainting',
  '/services/wood-polishing',
  '/services/surface-preparation-finishing',
]

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return []
  return paths.map((path) => ({ url: absoluteUrl(path) }))
}
