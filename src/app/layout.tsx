import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

export const metadata: Metadata = {
  metadataBase: new URL('https://cards.witap.me'),
  title: {
    default: 'Witap Cards — ESG NFC Smart Business Cards',
    template: '%s | Witap Cards',
  },
  description: 'Premium ESG-compliant NFC smart business cards. Biodegradable, LED, Metal, and 24K Gold collections. 25,000+ profiles created. One tap to share everything.',
  keywords: ['NFC business card', 'smart business card', 'ESG business card', 'digital business card Malaysia', 'NFC card', 'eco-friendly business card', 'LED business card', 'metal business card'],
  authors: [{ name: 'Witap Tapnology Sdn Bhd' }],
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://cards.witap.me',
    siteName: 'Witap Cards',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Witap NFC Smart Business Cards' }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ position: 'relative', zIndex: 10 }}>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  )
}
