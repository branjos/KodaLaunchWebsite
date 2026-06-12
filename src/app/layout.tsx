import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ConsentBanner } from '@/components/ConsentBanner'
import './globals.css'

const GA_ID = 'G-YZLNZZ08XV'

export const metadata: Metadata = {
  metadataBase: new URL('https://kodalaunch.com'),
  title: { default: 'Koda Launch AI — The AI golf coach for your Garmin R10', template: '%s — Koda Launch AI' },
  description: 'Koda Launch AI is a desktop coach for your Garmin R10. Fourteen metrics, every shot, folded into one 0–100 score — plus a Coach Hub when you want to dig in.',
  robots: { index: true, follow: true },
  icons: { icon: '/logo-LightMode.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Koda Launch AI',
    images: [{ url: '/app-light.png' }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="gtag-consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var consent = typeof localStorage !== 'undefined' ? localStorage.getItem('koda_consent') : null;
          gtag('consent', 'default', {
            analytics_storage: consent === 'true' ? 'granted' : 'denied'
          });
        `}</Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ConsentBanner />
        </Providers>
      </body>
    </html>
  )
}
