import { Metadata } from 'next'
import CorporateHero from '@/components/corporate/CorporateHero'
import TrainingPrograms from '@/components/corporate/TrainingPrograms'
import CorporateClients from '@/components/corporate/CorporateClients'
import TrainingMethodology from '@/components/corporate/TrainingMethodology'
import CorporatePackages from '@/components/corporate/CorporatePackages'
import CorporateContact from '@/components/corporate/CorporateContact'

export const metadata: Metadata = {
  title: 'Corporate Engineering Training - Trinkets Institute | Enterprise Engineering Solutions',
  description: 'Transform your workforce with customized corporate engineering training programs. Expert-led sessions in Piping, MEP, HVAC, Structural design with flexible scheduling and proven ROI.',
  keywords: 'corporate engineering training, enterprise engineering training, piping engineering training for companies, MEP training, HVAC corporate training, structural engineering training, workforce development, custom engineering curriculum, SP3D training, E3D training, CAESAR II training, STAAD Pro training',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  category: 'Engineering Education',
  openGraph: {
    title: 'Corporate Engineering Training - Trinkets Institute | Enterprise Engineering Solutions',
    description: 'Transform your workforce with customized corporate engineering training programs. Expert-led sessions in Piping, MEP, HVAC, Structural design with flexible scheduling and proven ROI.',
    url: '/corporate-training',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/corporate-training-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Corporate Engineering Training Programs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Engineering Training - Trinkets Institute | Enterprise Engineering Solutions',
    description: 'Transform your workforce with customized corporate engineering training programs. Expert-led sessions in Piping, MEP, HVAC, Structural design with flexible scheduling and proven ROI.',
    images: ['/images/corporate-training-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: '/corporate-training',
  },
}

export default function CorporateTrainingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute of Technology",
    "alternateName": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "description": "Professional corporate engineering training institute offering customized programs in Piping Engineering, MEP Design, HVAC Systems, and Structural Analysis for enterprise clients.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
      "addressLocality": "Mulund West",
      "addressRegion": "Mumbai",
      "postalCode": "400080",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.1646",
      "longitude": "72.9507"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9820924788",
      "contactType": "corporate sales",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578852495738",
      "https://x.com/titindiamumbai",
      "https://www.youtube.com/@trinketsinstituteoftechnol6645",
      "https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/",
      "https://www.instagram.com/trinketsinstituteinmumbai/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Engineering Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Corporate Piping Engineering Training",
          "description": "Comprehensive piping design training for corporate teams using SP3D, AutoCAD, and CAESAR II",
          "provider": "Trinkets Institute of Technology",
          "audience": "Corporate Teams"
        },
        {
          "@type": "Course",
          "name": "Corporate MEP Engineering Training",
          "description": "Complete MEP design training for enterprise workforce with industry software",
          "provider": "Trinkets Institute of Technology",
          "audience": "Corporate Teams"
        },
        {
          "@type": "Course",
          "name": "Corporate HVAC Training",
          "description": "Advanced HVAC system design and energy analysis training for corporate clients",
          "provider": "Trinkets Institute of Technology",
          "audience": "Corporate Teams"
        },
        {
          "@type": "Course",
          "name": "Corporate Structural Engineering Training",
          "description": "Structural analysis and design using STAAD Pro, ETABS, and SAP2000 for enterprise teams",
          "provider": "Trinkets Institute of Technology",
          "audience": "Corporate Teams"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "50000",
      "highPrice": "500000",
      "offerCount": "4"
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-gray-50">
        {/* Corporate Training Hero Section */}
        <CorporateHero />
        
        {/* Training Programs & Technologies */}
        <TrainingPrograms />
        
        {/* Corporate Clients & Success Stories */}
        <CorporateClients />
        
        {/* Training Methodology & Approach */}
        <TrainingMethodology />
        
        {/* Corporate Packages & Pricing */}
        <CorporatePackages />
        
        {/* Corporate Contact & Consultation */}
        <CorporateContact />
      </main>
    </>
  )
}