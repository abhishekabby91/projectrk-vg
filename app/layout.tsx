import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { siteName, siteUrl } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'Commercial Finishing & Property Maintenance | Vibroxi', template: '%s | Vibroxi' },
  description: 'Commercial painting, building repainting, wood polishing and finishing support for facility management companies and commercial property operators in Delhi NCR.',
  alternates: siteUrl ? { canonical: '/' } : undefined,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Commercial Finishing & Property Maintenance | Vibroxi',
    description: 'Commercial painting, building repainting and wood finishing support for facility teams and commercial property operators in Delhi NCR.',
    siteName,
    locale: 'en_IN',
    type: 'website',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Finishing & Property Maintenance | Vibroxi' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#183c31' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
