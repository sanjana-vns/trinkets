import { Metadata } from 'next'
import PlacementHero from '@/components/placement/PlacementHero'
import PlacementStats from '@/components/placement/PlacementStats'
import PlacementPartners from '@/components/placement/PlacementPartners'
import PlacementSuccess from '@/components/placement/PlacementSuccess'
import PlacementProcess from '@/components/placement/PlacementProcess'
import PlacementSupport from '@/components/placement/PlacementSupport'

export const metadata: Metadata = {
  title: 'Engineering Placement Services - 100% Placement Assistance | Trinkets Institute',
  description: 'Get guaranteed placement assistance in top engineering companies. Expert career guidance, industry partnerships, and 100% placement support for mechanical, electrical, civil engineering professionals.',
  keywords: [
    'engineering placement services',
    'career placement assistance',
    'engineering job placement',
    'mechanical engineering jobs',
    'electrical engineering careers',
    'civil engineering placement',
    'petrochemical engineering jobs',
    'structural engineering careers',
    'piping design jobs',
    'plant design careers',
    'engineering recruitment',
    'technical job placement',
    'engineering career guidance',
    'industry placement partners',
    'engineering internships',
    'graduate engineer placement',
    'experienced engineer jobs',
    'multinational company placements',
    'engineering consultancy jobs',
    'project engineering careers',
    'design engineering jobs',
    'construction engineering placement',
    'oil and gas engineering jobs',
    'power plant engineering careers',
    'infrastructure engineering jobs',
    'automation engineering placement',
    'maintenance engineering jobs',
    'quality engineering careers',
    'safety engineering placement',
    'commissioning engineering jobs',
    'engineering leadership roles'
  ],
  authors: [{ name: 'Trinkets Institute' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/placements',
  },
  openGraph: {
    title: 'Engineering Placement Services - 100% Placement Assistance | Trinkets Institute',
    description: 'Get guaranteed placement assistance in top engineering companies. Expert career guidance, industry partnerships, and 100% placement support for engineering professionals.',
    url: 'https://trinketsinstitute.com/placements',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/placement-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Engineering Placement Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Placement Services - 100% Placement Assistance | Trinkets Institute',
    description: 'Get guaranteed placement assistance in top engineering companies. Expert career guidance and industry partnerships.',
    images: ['/images/placement-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function PlacementPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "description": "Leading engineering education institute providing comprehensive placement assistance and career guidance for engineering professionals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Engineering Excellence Center",
      "addressLocality": "Technology Hub",
      "addressRegion": "Tech State",
      "postalCode": "12345",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "Placement Services",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "offers": {
      "@type": "Offer",
      "category": "Placement Services",
      "description": "100% placement assistance for engineering professionals",
      "availability": "https://schema.org/InStock"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Engineering Placement Certification",
        "description": "Comprehensive placement assistance program for engineering graduates and professionals"
      }
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Top Engineering Companies",
        "description": "Our alumni work in leading engineering companies worldwide"
      }
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "Placement Department",
        "description": "Dedicated placement assistance and career guidance department"
      }
    ]
  }

  const jobPostingData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Engineering Job Opportunities",
    "description": "Current engineering job opportunities through Trinkets Institute placement services",
    "numberOfItems": 50,
    "itemListElement": [
      {
        "@type": "JobPosting",
        "title": "Mechanical Design Engineer",
        "description": "Design and develop mechanical systems for industrial applications",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Leading Engineering Company"
        },
        "jobLocation": {
          "@type": "Place",
          "address": "Multiple Locations, India"
        },
        "employmentType": "FULL_TIME",
        "validThrough": "2024-12-31"
      }
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingData) }}
      />
      
      <PlacementHero />
      <PlacementStats />
      <PlacementPartners />
      <PlacementSuccess />
      <PlacementProcess />
      <PlacementSupport />
    </div>
  )
}