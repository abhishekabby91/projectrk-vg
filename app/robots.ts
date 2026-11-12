import type { MetadataRoute } from 'next'
import { absoluteUrl, siteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  // Block indexing entirely until the production domain is confirmed.
  if (!siteUrl) return { rules: { userAgent: '*', disallow: '/' } }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
