import type { MetadataRoute } from 'next'
import { allRoutes } from '@/lib/routes'
import { absoluteUrl, siteUrl } from '@/lib/site'

// Only canonical, indexable pages. Pages for trades awaiting owner confirmation
// (see lib/capabilities.ts) and /projects are excluded automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return []
  return allRoutes()
    .filter((r) => r.indexable)
    .map((r) => ({ url: absoluteUrl(r.path) }))
}
