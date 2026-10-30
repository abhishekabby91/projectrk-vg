import type { MetadataRoute } from 'next'
import { absoluteUrl, siteUrl } from '@/lib/site'

const paths = [
  '/',
  '/industries',
  '/industries/facility-management',
  '/industries/hotels-hospitality',
  '/industries/commercial-property',
  '/industries/industrial-facilities',
  '/project-delivery',
  '/projects',
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
