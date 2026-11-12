import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { siteName, siteUrl } from '@/lib/site'
import { PHONE_DISPLAY } from '@/lib/contact'
import './globals.css'

const description = 'Residential and commercial interior works, fit-out and finishing contractor in Delhi NCR — painting, wood polishing, electrical, plumbing, carpentry, false ceilings, flooring, kitchens, bathrooms and refurbishment.'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'Vibroxi | Interior Works Contractor in Delhi NCR', template: '%s | Vibroxi' },
  description,
  applicationName: siteName,
  formatDetection: { telephone: true },
  openGraph: { siteName, locale: 'en_IN', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#183c31', width: 'device-width', initialScale: 1 }

// Only facts confirmed by the owner: name, phone, service area. No address, hours,
// ratings or reviews are published until verified.
const structuredData = siteUrl
  ? {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, url: siteUrl, telephone: PHONE_DISPLAY, description },
        { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: siteName, url: siteUrl, inLanguage: 'en-IN', publisher: { '@id': `${siteUrl}/#organization` } },
        {
          '@type': 'HomeAndConstructionBusiness',
          '@id': `${siteUrl}/#business`,
          name: siteName,
          url: siteUrl,
          telephone: PHONE_DISPLAY,
          description,
          parentOrganization: { '@id': `${siteUrl}/#organization` },
          areaServed: ['Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad'].map((name) => ({ '@type': 'City', name })),
        },
      ],
    }
  : null

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
