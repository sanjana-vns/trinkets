import { Metadata } from 'next'
import GalleryHero from '@/components/gallery/GalleryHero'
import AwardsSection from '@/components/gallery/AwardsSection'
import CertificationsSection from '@/components/gallery/CertificationsSection'

export const metadata: Metadata = {
  title: 'Gallery & Awards - Engineering Excellence Recognition | Trinkets Institute',
  description: 'Explore our gallery of achievements, awards, certifications, and engineering project showcases. Discover why Trinkets Institute is the leading choice for engineering education and professional development.',
  keywords: [
    'engineering institute gallery',
    'engineering awards recognition',
    'professional certifications showcase',
    'engineering project gallery',
    'institute achievements',
    'engineering excellence awards',
    'student project showcase',
    'industry recognition',
    'engineering training certifications',
    'professional development awards',
    'engineering design projects',
    'mechanical engineering projects',
    'electrical engineering showcase',
    'civil engineering gallery',
    'petrochemical engineering projects',
    'piping design gallery',
    'plant design showcase',
    'structural engineering projects',
    'HVAC design gallery',
    'MEP engineering projects',
    'CAD design showcase',
    'engineering software training',
    'SP3D project gallery',
    'CAESAR II projects',
    'STAAD Pro showcase',
    'ETABS project gallery',
    'Revit MEP projects',
    'AutoCAD design gallery',
    'engineering institute testimonials',
    'student success gallery',
    'professional achievement awards',
    'industry partnership recognition',
    'engineering education excellence',
    'technical training awards',
    'engineering consultancy projects',
    'real-world engineering solutions'
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
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Gallery & Awards - Engineering Excellence Recognition | Trinkets Institute',
    description: 'Explore our gallery of achievements, awards, certifications, and engineering project showcases. Discover engineering excellence and professional recognition.',
    url: 'https://trinketsinstitute.com/gallery',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Gallery & Awards Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery & Awards - Engineering Excellence Recognition | Trinkets Institute',
    description: 'Explore our gallery of achievements, awards, and engineering project showcases.',
    images: ['/images/gallery-twitter.jpg'],
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

export default function GalleryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "description": "Leading engineering education institute showcasing excellence through awards, certifications, and project achievements.",
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
      "contactType": "Gallery Information",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "award": [
      {
        "@type": "Award",
        "name": "Excellence in Engineering Education",
        "description": "Recognition for outstanding contribution to engineering education and professional development"
      },
      {
        "@type": "Award", 
        "name": "Industry Partnership Excellence",
        "description": "Award for exceptional industry collaboration and student placement success"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Professional Engineering Training Certification",
        "description": "Certified training programs in mechanical, electrical, civil, and petrochemical engineering"
      }
    ],
    "alumni": [
      {
        "@type": "Person",
        "name": "Engineering Professionals",
        "description": "Thousands of successful engineering professionals trained and placed"
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trinkets Institute",
    "description": "Premier engineering education institute with award-winning training programs and industry recognition",
    "url": "https://trinketsinstitute.com/gallery",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "image": [
      "https://trinketsinstitute.com/images/gallery-showcase.jpg",
      "https://trinketsinstitute.com/images/awards-ceremony.jpg",
      "https://trinketsinstitute.com/images/certifications-display.jpg"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/trinkets-institute",
      "https://www.facebook.com/trinketsinstitute",
      "https://twitter.com/trinketsinstitute"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5"
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <GalleryHero />
      <AwardsSection />
      <CertificationsSection />
    </div>
  )
}