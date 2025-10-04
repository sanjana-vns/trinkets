import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServiceCategories from '@/components/services/ServiceCategories'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceTestimonials from '@/components/services/ServiceTestimonials'
import ServiceContact from '@/components/services/ServiceContact'

export const metadata: Metadata = {
  title: 'Engineering Services - Trinkets Institute | Professional Engineering Solutions & Consulting',
  description: 'Comprehensive engineering services including Piping Design, MEP Engineering, HVAC Systems, Structural Analysis, and Project Consulting. Expert solutions for industrial and commercial projects.',
  keywords: 'engineering services, piping design services, MEP engineering consulting, HVAC design services, structural engineering solutions, engineering consulting, industrial design services, plant engineering, piping engineering consultancy, MEP design consultancy, engineering project management, technical consulting, engineering solutions Mumbai, SP3D modeling services, E3D design services, CAESAR II analysis, STAAD Pro consulting, engineering drafting services, CAD services, engineering design outsourcing',
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
  category: 'Engineering Services',
  openGraph: {
    title: 'Engineering Services - Trinkets Institute | Professional Engineering Solutions & Consulting',
    description: 'Comprehensive engineering services including Piping Design, MEP Engineering, HVAC Systems, Structural Analysis, and Project Consulting. Expert solutions for industrial and commercial projects.',
    url: '/services',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Engineering Services and Professional Consulting',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Services - Trinkets Institute | Professional Engineering Solutions & Consulting',
    description: 'Comprehensive engineering services including Piping Design, MEP Engineering, HVAC Systems, Structural Analysis, and Project Consulting. Expert solutions for industrial and commercial projects.',
    images: ['/images/services-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Trinkets Institute Engineering Services",
    "alternateName": "Trinkets Engineering Consulting",
    "url": "https://trinketsinstitute.com/services",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "description": "Professional engineering services provider specializing in Piping Engineering, MEP Design, HVAC Systems, Structural Analysis, and comprehensive engineering consulting for industrial and commercial projects.",
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
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": ["Mumbai", "Maharashtra", "India"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578852495738",
      "https://x.com/titindiamumbai",
      "https://www.youtube.com/@trinketsinstituteoftechnol6645",
      "https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/",
      "https://www.instagram.com/trinketsinstituteinmumbai/"
    ],
    "serviceType": [
      "Piping Engineering Services",
      "MEP Engineering Consulting",
      "HVAC Design Services",
      "Structural Engineering Solutions",
      "Engineering Project Management",
      "CAD Design Services",
      "Technical Consulting"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services Catalog",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Piping Engineering & Design",
          "description": "Comprehensive piping design services using SP3D, AutoCAD, and CAESAR II for industrial projects",
          "provider": "Trinkets Institute of Technology",
          "category": "Engineering Design"
        },
        {
          "@type": "Service",
          "name": "MEP Engineering Consulting",
          "description": "Complete MEP design and consulting services for commercial and industrial buildings",
          "provider": "Trinkets Institute of Technology",
          "category": "Engineering Consulting"
        },
        {
          "@type": "Service",
          "name": "HVAC System Design",
          "description": "Advanced HVAC system design, analysis, and energy optimization services",
          "provider": "Trinkets Institute of Technology",
          "category": "HVAC Engineering"
        },
        {
          "@type": "Service",
          "name": "Structural Engineering Solutions",
          "description": "Structural analysis and design using STAAD Pro, ETABS, and SAP2000",
          "provider": "Trinkets Institute of Technology",
          "category": "Structural Engineering"
        },
        {
          "@type": "Service",
          "name": "Engineering Project Management",
          "description": "End-to-end project management for engineering and construction projects",
          "provider": "Trinkets Institute of Technology",
          "category": "Project Management"
        },
        {
          "@type": "Service",
          "name": "CAD Design & Drafting",
          "description": "Professional CAD design and drafting services for engineering projects",
          "provider": "Trinkets Institute of Technology",
          "category": "Design Services"
        }
      ]
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mumbai and surrounding areas"
    },
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
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
        {/* Services Hero Section */}
        <ServicesHero />
        
        {/* Service Categories */}
        <ServiceCategories />
        
        {/* Service Features & Benefits */}
        <ServiceFeatures />
        
        {/* Service Process & Methodology */}
        <ServiceProcess />
        
        {/* Client Testimonials */}
        <ServiceTestimonials />
        
        {/* Service Contact & Consultation */}
        <ServiceContact />
      </main>
    </>
  )
}