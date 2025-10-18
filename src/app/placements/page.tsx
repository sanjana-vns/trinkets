import { Metadata } from "next"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LazySection from '@/components/LazySection'
import ErrorBoundary from '@/components/ErrorBoundary'
import ReloadButton from '@/components/ReloadButton'

// Ultra-lightweight mobile hero for instant loading
const MobilePlacementHero = dynamic(() => import('@/components/placement/MobilePlacementHero'), {
  ssr: false,
})

// Full hero for desktop  
const PlacementHero = dynamic(() => import('@/components/placement/PlacementHero'), {
  ssr: false,
})

// Other components load with lazy intersection observer
const PlacementStats = dynamic(() => import('@/components/placement/PlacementStats'), {
  ssr: false,
})

const PlacementProcess = dynamic(() => import('@/components/placement/PlacementProcess'), {
  ssr: false,
})

const PlacementSuccess = dynamic(() => import('@/components/placement/PlacementSuccess'), {
  ssr: false,
})

const PlacementPartners = dynamic(() => import('@/components/placement/PlacementPartners'), {
  ssr: false,
})

const PlacementTestimonials = dynamic(() => import('@/components/placement/PlacementTestimonials'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "Engineering Placements | 100% Job Placement Assistance | Trinkets Institute Mumbai",
  description: "Guaranteed engineering job placements in Mumbai's top companies. 5000+ successful placements in piping design, MEP, HVAC, structural engineering. Industry partnerships, career guidance, salary negotiations, interview preparation.",
  keywords: [
    'engineering placements mumbai',
    'engineering job placement mumbai',
    '100% placement assistance',
    'engineering career guidance mumbai',
    'piping engineer jobs mumbai',
    'MEP engineer placement mumbai',
    'HVAC engineer jobs mumbai',
    'structural engineer placement',
    'mechanical engineering jobs',
    'civil engineering placement',
    'electrical engineering jobs',
    'piping engineering placement',
    'engineering placement services',
    'engineering recruitment mumbai',
    'technical job placement',
    'engineering career opportunities',
    'industry placement program',
    'engineering job guarantee',
    'professional engineering careers',
    'engineering employment assistance',
    'technical career guidance',
    'engineering interview preparation',
    'salary negotiation support',
    'engineering job search',
    'technical recruitment services',
    'engineering placement consultancy',
    'career development support',
    'engineering job portal',
    'technical job opportunities',
    'engineering employment solutions',
    'professional placement services',
    'engineering career advancement',
    'technical skill placement',
    'engineering job training',
    'placement success stories',
    'engineering career transformation',
    'job placement guarantee',
    'engineering placement record',
    'technical career support',
    'industry job placement',
    'engineering employment program'
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Engineering Placements | 100% Job Placement Assistance | Trinkets Institute Mumbai",
    description: "Guaranteed engineering job placements in Mumbai's top companies. 5000+ successful placements with industry partnerships and career guidance.",
    url: 'https://trinketsinstitute.com/placements',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/placements-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Engineering Placements - 100% Job Placement Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Engineering Placements | 100% Job Placement Assistance | Trinkets Institute Mumbai",
    description: "Guaranteed engineering job placements in Mumbai's top companies with expert career guidance.",
    images: ['https://trinketsinstitute.com/images/placements-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/placements',
  },
  category: 'Employment',
}

export default function PlacementsPage() {
  // JobPosting structured data
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Engineering Positions - Multiple Openings",
    "description": "Excellent career opportunities for engineering graduates trained at Trinkets Institute Mumbai. Positions available in piping design, MEP, HVAC, structural engineering across top companies.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Trinkets Institute Placements",
      "value": "ENG-PLACEMENT-2024"
    },
    "datePosted": "2024-01-01",
    "validThrough": "2024-12-31",
    "employmentType": ["FULL_TIME", "CONTRACT"],
    "hiringOrganization": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute of Technology",
      "sameAs": "https://trinketsinstitute.com",
      "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 300000,
        "maxValue": 1500000,
        "unitText": "YEAR"
      }
    },
    "qualifications": [
      "Engineering degree from recognized university",
      "Professional certification from Trinkets Institute",
      "Hands-on experience with engineering software (SP3D, PDMS, E3D, CAESAR II, STAAD Pro)"
    ],
    "skills": [
      "Piping Design",
      "MEP Engineering", 
      "HVAC Systems",
      "Structural Analysis",
      "SP3D",
      "PDMS",
      "E3D",
      "CAESAR II",
      "STAAD Pro",
      "AutoCAD"
    ],
    "benefits": [
      "100% placement assistance",
      "Career guidance and mentoring",
      "Interview preparation",
      "Salary negotiation support",
      "Continuous professional development"
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trinketsinstitute.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Placements",
        "item": "https://trinketsinstitute.com/placements"
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2)
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" role="main">
        {/* SEO H1 for Placements page */}
        <h1 className="sr-only">Engineering Placements | 100% Job Placement Assistance | Trinkets Institute Mumbai</h1>
        
        <ErrorBoundary>
          <Suspense fallback={<div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 animate-pulse" />}>
            {/* Mobile-first hero for performance */}
            <div className="block md:hidden">
              <section aria-label="Mobile placement hero">
                <MobilePlacementHero />
              </section>
            </div>
            
            {/* Desktop hero */}
            <div className="hidden md:block">
              <section aria-label="Desktop placement hero">
                <PlacementHero />
              </section>
            </div>
          </Suspense>

          <section aria-label="Placement statistics">
            <PlacementStats />
          </section>

          <section aria-label="Placement process">
            <PlacementProcess />
          </section>

          <section aria-label="Success stories">
            <PlacementSuccess />
          </section>

          <section aria-label="Industry partners">
            <PlacementPartners />
          </section>

          <section aria-label="Student testimonials">
            <PlacementTestimonials />
          </section>
        </ErrorBoundary>
      </main>
    </>
  )
}