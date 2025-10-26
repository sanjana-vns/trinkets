import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Map from '@/components/Map'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import StructuredData from '@/components/StructuredData'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    default: 'Best Piping Course in Mumbai | Trinkets Institute',
    template: '%s | Trinkets Institute'
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
        alt: 'Piping Course In Mumbai - Best Piping Design Engineering Training at Trinkets Institute',
        type: 'image/jpeg',
      },
      {
        url: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
        width: 400,
        height: 400,
        alt: 'Trinkets Institute Mumbai - Professional Piping Course Training Center',
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
    images: [
      {
        url: 'https://trinketsinstitute.com/images/og-trinkets-institute.jpg',
        alt: 'Piping Course In Mumbai - Best Piping Design Engineering Training Institute'
      }
    ],
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
    
    // Advanced SEO Meta Tags
    'google-site-verification': 'your-google-site-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'pinterest-rich-pins': 'true',
    'fb:app_id': 'your-facebook-app-id',
    'fb:admins': 'your-facebook-admin-id',
    
    // Business and Location
    'business:contact_data:street_address': '823, Ecstasy Business Park, City of Joy, JSD Road',
    'business:contact_data:locality': 'Mulund West',
    'business:contact_data:region': 'Mumbai',
    'business:contact_data:postal_code': '400080',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91-9820924788',
    'business:contact_data:email': 'info@trinketsinstitute.com',
    
    // Industry and Category
    'og:business:industry': 'Engineering Education',
    'og:business:category': 'Piping Training Institute',
    'og:business:specialty': 'Piping Design Training Mumbai',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Trinkets Institute" />
        <meta name="application-name" content="Trinkets Institute" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Geo and Location Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.1762;72.9951" />
        <meta name="ICBM" content="19.1762, 72.9951" />
        
        {/* Security and Privacy */}
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        
        {/* Content and Language */}
        <meta name="content-language" content="en-IN" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="rating" content="general" />
        
        {/* Favicons - Multiple formats for better browser support */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/favicon-48x48.svg" sizes="48x48" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <link rel="preload" href="/images/engineer.jpg" as="image" />
        <link rel="preload" href="/images/bg1.jpg" as="image" />
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
            price: "50000",
            rating: "4.9",
            reviewCount: "1200",
            certification: "Professional Piping Design Certificate",
            startDate: "2024-11-01",
            endDate: "2025-05-01",
            prerequisites: "Basic Engineering Knowledge"
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
        <StructuredData 
          type="localBusiness" 
          data={{
            name: "Trinkets Institute - Best Piping Course In Mumbai",
            description: "Leading Piping Course Institute in Mumbai offering comprehensive piping design training with PDMS, SP3D, E3D, CAESAR II courses and 100% placement assistance.",
            telephone: "+91-9820924788",
            email: "info@trinketsinstitute.com",
            address: {
              streetAddress: "823, Ecstasy Business Park, City of Joy, JSD Road",
              addressLocality: "Mulund West",
              addressRegion: "Mumbai",
              postalCode: "400080",
              addressCountry: "India"
            },
            geo: {
              latitude: "19.1729",
              longitude: "72.9573"
            },
            openingHours: ["Mo-Sa 09:00-19:00"],
            priceRange: "₹₹-₹₹₹",
            paymentAccepted: ["Cash", "Credit Card", "UPI", "Bank Transfer"],
            currenciesAccepted: ["INR"],
            areaServed: ["Mumbai", "Thane", "Navi Mumbai", "Maharashtra"],
            serviceArea: {
              geo: {
                addressCountry: "India",
                addressRegion: "Maharashtra"
              }
            }
          }} 
        />
        <Navigation />
        <main role="main">{children}</main>
        <Map />
        <Footer />
        
        {/* WhatsApp Button - mobile optimized positioning */}
        <WhatsAppButton 
          phoneNumber="+919820924788"
          message="Hi! I'm interested in engineering courses at Trinkets Institute Mumbai. Please provide course details, fees, and admission process."
          position="bottom-right"
          size="medium"
        />
      </body>
    </html>
  )
}