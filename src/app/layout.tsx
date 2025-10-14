import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Map from '@/components/Map'
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
    default: 'Piping Course In Mumbai | Best Piping Design Training Institute | Trinkets Institute',
    template: '%s | Trinkets Institute - Professional Engineering Training'
  },
  description: 'Leading Piping Course In Mumbai at Trinkets Institute. Learn piping design, PDMS, SP3D, E3D, CAESAR II with 100% placement assistance. Best piping training institute in Mumbai with industry expert faculty.',
  keywords: [
    'piping course in mumbai',
    'piping course mumbai',
    'piping design course mumbai',
    'piping training mumbai',
    'piping engineering course mumbai',
    'best piping course mumbai',
    'piping design training mumbai',
    'professional piping course',
    'SP3D training mumbai',
    'PDMS training mumbai',
    'E3D piping course',
    'CAESAR II course mumbai',
    'piping stress analysis training',
    'process piping course mumbai',
    'oil gas piping training',
    'petrochemical piping course',
    'mechanical piping course',
    'piping layout training',
    'piping isometric course',
    'engineering training Mumbai',
    'HVAC training institute',
    'MEP engineering course',
    'structural engineering training',
    'AutoCAD course Mumbai',
    'engineering placement assistance',
    'professional engineering courses',
    'STAAD Pro course',
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
    siteName: 'Trinkets Institute - Piping Course In Mumbai',
    title: 'Piping Course In Mumbai | Best Piping Design Training Institute | Trinkets Institute',
    description: 'Leading Piping Course In Mumbai at Trinkets Institute. Learn piping design, PDMS, SP3D, E3D, CAESAR II with 100% placement assistance. Best piping training institute in Mumbai.',
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
    title: 'Piping Course In Mumbai | Best Piping Design Training Institute',
    description: 'Leading Piping Course In Mumbai at Trinkets Institute. Learn piping design, PDMS, SP3D, E3D, CAESAR II with 100% placement assistance.',
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
            description: "Mumbai's Best Piping Course Institute offering comprehensive Piping Design Training, PDMS, SP3D, E3D, CAESAR II courses. Leading piping training institute in Mumbai with 100% placement assistance."
          }} 
        />
        <StructuredData 
          type="website" 
          data={{}} 
        />
        <StructuredData 
          type="course" 
          data={{
            name: "Piping Course In Mumbai - Comprehensive Piping Design Training",
            description: "Best Piping Course In Mumbai at Trinkets Institute. Learn PDMS, SP3D, E3D, AutoCAD Plant 3D, CAESAR II, piping stress analysis with 100% placement assistance.",
            duration: "P6M",
            price: "Contact for pricing",
            rating: "4.9",
            reviewCount: "1200",
            certification: "Professional Piping Design Certificate"
          }} 
        />
        <StructuredData 
          type="faq" 
          data={[
            {
              question: "What is the best Piping Course In Mumbai?",
              answer: "Trinkets Institute offers the best Piping Course In Mumbai covering comprehensive piping design training including PDMS, SP3D, E3D, AutoCAD Plant 3D, CAESAR II, and piping stress analysis. Our piping course in Mumbai includes live industry projects and 100% placement assistance."
            },
            {
              question: "What is the duration of Piping Course In Mumbai?",
              answer: "Our comprehensive Piping Course In Mumbai duration is 6 months with flexible timing options. We offer weekday, weekend, and evening batches for our piping design training. Fast-track 4-month piping courses are also available for working professionals in Mumbai."
            },
            {
              question: "Do you provide placement assistance after Piping Course In Mumbai?",
              answer: "Yes, we provide 100% placement assistance after completing our Piping Course In Mumbai. Our dedicated placement team has partnerships with leading oil & gas, petrochemical, and EPC companies. Students from our piping course in Mumbai get placed in top companies with attractive packages."
            },
            {
              question: "What software is covered in Piping Course In Mumbai?",
              answer: "Our Piping Course In Mumbai covers industry-standard piping design software including PDMS, SP3D (SmartPlant 3D), E3D, AutoCAD Plant 3D, CAESAR II for stress analysis, and PDS. You'll gain hands-on experience with the same piping design tools used by professionals in Mumbai's top engineering companies."
            }
          ]} 
        />
        <Navigation />
        <main role="main">{children}</main>
        <Map />
        <Footer />
      </body>
    </html>
  )
}