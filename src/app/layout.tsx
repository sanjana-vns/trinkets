import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Trinkets Institute - Leading Engineering Training Institute in Mumbai',
    template: '%s | Trinkets Institute - Professional Engineering Training'
  },
  description: 'Premier engineering training institute in Mumbai offering professional courses in Piping Design, HVAC, MEP, Structural Engineering, SP3D, CAESAR II, AutoCAD with 100% placement assistance.',
  keywords: [
    'engineering training Mumbai',
    'piping design course',
    'HVAC training institute',
    'MEP engineering course',
    'SP3D training',
    'CAESAR II course',
    'structural engineering training',
    'AutoCAD course Mumbai',
    'engineering placement assistance',
    'professional engineering courses',
    'piping stress analysis training',
    'STAAD Pro course',
    'E3D piping training',
    'engineering design institute Mumbai'
  ],
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Replace with actual Google Search Console verification code
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com',
    languages: {
      'en-IN': 'https://trinketsinstitute.com',
      'en': 'https://trinketsinstitute.com'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://trinketsinstitute.com',
    siteName: 'Trinkets Institute - Engineering Training Mumbai',
    title: 'Trinkets Institute - Leading Engineering Training Institute in Mumbai',
    description: 'Premier engineering training institute offering professional courses in Piping Design, HVAC, MEP, Structural Engineering with 100% placement assistance in Mumbai.',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/og-trinkets-institute.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute - Leading Engineering Training Institute Mumbai',
        type: 'image/jpeg',
      },
      {
        url: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
        width: 400,
        height: 400,
        alt: 'Trinkets Institute Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TrinketsInstitute',
    creator: '@TrinketsInstitute',
    title: 'Trinkets Institute - Engineering Training Mumbai',
    description: 'Premier engineering training institute offering professional courses in Piping Design, HVAC, MEP, Structural Engineering with placement assistance.',
    images: ['https://trinketsinstitute.com/images/og-trinkets-institute.jpg'],
  },
  manifest: '/manifest.json',
  category: 'education',
  classification: 'Engineering Education',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Trinkets Institute',
    'application-name': 'Trinkets Institute',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#3b82f6',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Inline critical CSS for fastest loading */
            .navigation-critical{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid #e5e7eb;box-shadow:0 1px 3px 0 rgba(0,0,0,0.1)}
            .nav-container{max-width:80rem;margin:0 auto;padding:0 1rem}
            .nav-content{display:flex;justify-content:space-between;align-items:center;height:5rem}
            .hero-critical{min-height:100vh;background:linear-gradient(135deg,#3b82f6 0%,#f97316 100%);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
            .hero-container{max-width:80rem;margin:0 auto;padding:0 1rem;text-align:center;color:white;position:relative;z-index:10}
            .hero-title{font-size:3rem;font-weight:800;line-height:1.1;margin-bottom:1.5rem}
            @media(max-width:640px){.hero-title{font-size:2rem}}
          `
        }} />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/trinketlogo.jpg" as="image" />
        <link rel="preload" href="/icons/icon-192x192.svg" as="image" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ServiceWorkerRegistration />
        <StructuredData 
          type="organization" 
          data={{
            name: "Trinkets Institute of Technology",
            description: "Leading technical education institute specializing in Engineering Design, Piping, HVAC, MEP, Structural Engineering, and Professional Training Programs in Mumbai."
          }} 
        />
        <StructuredData 
          type="website" 
          data={{}} 
        />
        <Navigation />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}