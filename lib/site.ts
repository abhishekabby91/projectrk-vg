export const siteName = 'Vibroxi'

/**
 * Set NEXT_PUBLIC_SITE_URL to the verified production origin before deployment.
 * Example: https://www.your-domain.com
 * No production domain is assumed in source code.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path
  if (!siteUrl) return path
  return new URL(path.startsWith('/') ? path : `/${path}`, siteUrl).toString()
}

export function canonicalMetadata(path: string) {
  return { alternates: { canonical: absoluteUrl(path) } }
}
