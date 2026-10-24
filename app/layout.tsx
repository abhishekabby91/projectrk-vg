import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { metadataBase: new URL('https://example.com'), title: { default: 'Arbor & Coat | Commercial Painting & Finishing in Delhi NCR', template: '%s | Arbor & Coat' }, description: 'Commercial painting, wood polishing, finishing and property maintenance execution partner serving Delhi NCR.', alternates: { canonical: '/' }, openGraph: { title: 'Arbor & Coat | Commercial Painting & Finishing', description: 'A B2B painting and finishing execution partner for commercial properties and contractors in Delhi NCR.', type: 'website' } }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#183c31' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
