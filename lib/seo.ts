import type { Metadata } from 'next'
import { absoluteUrl, siteName, siteUrl } from './site'

/** Shared metadata: canonical, Open Graph, Twitter and robots for one page. */
export function pageMetadata({ title, description, path, indexable = true }: { title: string; description: string; path: string; indexable?: boolean }): Metadata {
  const url = siteUrl ? absoluteUrl(path) : undefined
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: `${title} | ${siteName}`, description, siteName, locale: 'en_IN', type: 'website', ...(url ? { url } : {}) },
    twitter: { card: 'summary', title: `${title} | ${siteName}`, description },
  }
}

/**
 * Owner-review notices on pages whose trade capability is not yet confirmed.
 * Shown on Vercel preview deployments, in local development, or when SHOW_REVIEW_NOTICES=true.
 */
export const showReviewNotices =
  process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development' || process.env.SHOW_REVIEW_NOTICES === 'true'
