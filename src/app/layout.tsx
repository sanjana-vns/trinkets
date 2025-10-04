import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Trinkets Institute - Turning Students into Professionals',
  description: 'Practical, job-ready training programs tailored for colleges and universities. Expert-led training in engineering design, piping, HVAC, electrical, and structural engineering.',
  keywords: 'engineering training, piping engineering, HVAC engineering, electrical design, structural engineering, MEP engineering, professional courses, Mumbai',
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
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trinketsinstitute.com',
    siteName: 'Trinkets Institute',
    title: 'Trinkets Institute - Turning Students into Professionals',
    description: 'Practical, job-ready training programs for engineering professionals.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Engineering Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TrinketsInstitute',
    creator: '@TrinketsInstitute',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}