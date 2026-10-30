export const siteName = 'Vibroxi'

/**
 * Keep the brand and production domain provisional until the owner confirms them.
 * Set NEXT_PUBLIC_SITE_URL to the verified production origin before launch.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path
  if (!siteUrl) return path
  return new URL(path.startsWith('/') ? path : `/${path}`, siteUrl).toString()
}

/** Do not emit relative canonicals that Next.js could resolve against localhost. */
export function canonicalMetadata(path: string) {
  return siteUrl ? { alternates: { canonical: absoluteUrl(path) } } : {}
}
