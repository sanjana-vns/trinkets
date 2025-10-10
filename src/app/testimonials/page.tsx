import { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import heavy components with loading states for better mobile performance
const TestimonialsHero = dynamic(() => import('@/components/testimonials/TestimonialsHero'), {
  loading: () => (
    <div className="min-h-[60vh] bg-gradient-to-br from-blue-600 to-indigo-600 animate-pulse flex items-center justify-center">
      <div className="text-white text-lg">Loading testimonials...</div>
    </div>
  ),
  ssr: true,
})

const FeaturedTestimonials = dynamic(() => import('@/components/testimonials/FeaturedTestimonials'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg"></div>,
  ssr: true,
})

const SuccessStats = dynamic(() => import('@/components/testimonials/SuccessStats'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>,
  ssr: true,
})

const CareerJourney = dynamic(() => import('@/components/testimonials/CareerJourney'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>,
  ssr: true,
})

const ReviewsSection = dynamic(() => import('@/components/testimonials/ReviewsSection'), {
  loading: () => <div className="h-screen bg-gray-50 animate-pulse"></div>,
  ssr: false, // This component is heavy, load it only on client side
})

export const metadata: Metadata = {
  title: 'Student Testimonials & Success Stories - Engineering Career Transformations | Trinkets Institute',
  description: 'Read inspiring testimonials from engineering students who transformed their careers with Trinkets Institute. Discover real success stories, placement achievements, and career growth journeys from mechanical, electrical, civil, and petrochemical engineers.',
  keywords: [
    'engineering student testimonials',
    'engineering career success stories',
    'student placement testimonials',
    'engineering job success',
    'career transformation stories',
    'engineering training reviews',
    'student feedback engineering institute',
    'engineering course testimonials',
    'professional development success',
    'engineering placement success',
    'mechanical engineer testimonials',
    'electrical engineer success stories',
    'civil engineer career stories',
    'petrochemical engineer testimonials',
    'piping engineer success stories',
    'structural engineer testimonials',
    'HVAC engineer career growth',
    'MEP engineer success stories',
    'CAD designer testimonials',
    'engineering software training reviews',
    'SP3D training testimonials',
    'CAESAR II course reviews',
    'STAAD Pro success stories',
    'ETABS training testimonials',
    'Revit MEP course reviews',
    'AutoCAD training success',
    'engineering institute reviews',
    'technical training testimonials',
    'professional certification success',
    'industry placement stories',
    'salary increment testimonials',
    'career advancement stories',
    'engineering consultancy success',
    'real-world project experience',
    'hands-on training testimonials',
    'industry-ready engineer stories',
    'engineering skill development',
    'professional growth testimonials',
    'engineering education excellence',
    'student satisfaction reviews',
    'engineering training effectiveness',
    'career guidance testimonials',
    'placement assistance reviews',
    'engineering mentor testimonials',
    'industry expert training reviews',
    'practical training testimonials',
    'engineering career coaching',
    'professional networking success',
    'engineering leadership development',
    'technical expertise testimonials'
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
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Student Testimonials & Success Stories - Engineering Career Transformations | Trinkets Institute',
    description: 'Read inspiring testimonials from engineering students who transformed their careers with Trinkets Institute. Real success stories, placement achievements, and career growth journeys.',
    url: 'https://trinketsinstitute.com/testimonials',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/testimonials-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineering Student Success Stories and Testimonials - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Testimonials & Success Stories - Engineering Career Transformations',
    description: 'Read inspiring testimonials from engineering students who transformed their careers with professional training.',
    images: ['/images/testimonials-twitter.jpg'],
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

export default function TestimonialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "description": "Leading engineering education institute with outstanding student testimonials and career transformation success stories.",
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
      "contactType": "Student Services",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewBody": "Trinkets Institute transformed my engineering career. The hands-on training and industry exposure helped me secure a position at a leading MNC with 150% salary increment."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewBody": "The piping design course at Trinkets Institute gave me the practical skills needed in the industry. I'm now working as a Senior Piping Engineer at a multinational company."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "alumni": [
      {
        "@type": "Person",
        "name": "Engineering Professionals",
        "description": "Over 5000 successful engineering professionals trained and placed in leading companies worldwide"
      }
    ]
  }

  const reviewsData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trinkets Institute",
    "description": "Premier engineering education institute with exceptional student testimonials and career success stories",
    "url": "https://trinketsinstitute.com/testimonials",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "image": [
      "https://trinketsinstitute.com/images/student-success-stories.jpg",
      "https://trinketsinstitute.com/images/career-transformations.jpg",
      "https://trinketsinstitute.com/images/testimonials-showcase.jpg"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/trinkets-institute",
      "https://www.facebook.com/trinketsinstitute",
      "https://twitter.com/trinketsinstitute"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "datePublished": "2024-09-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Amit Singh"
        },
        "reviewBody": "Excellent training program with real-world applications. The instructors are industry experts who provide valuable insights."
      },
      {
        "@type": "Review",
        "datePublished": "2024-08-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sneha Patel"
        },
        "reviewBody": "The structural engineering course helped me advance my career significantly. Highly recommended for engineering professionals."
      }
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
        "name": "Testimonials",
        "item": "https://trinketsinstitute.com/testimonials"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      {/* Progressive loading for better mobile performance */}
      <TestimonialsHero />
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <FeaturedTestimonials />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse"></div>}>
        <SuccessStats />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <CareerJourney />
      </Suspense>
      
      {/* Load heavy reviews section last */}
      <Suspense fallback={
        <div className="h-screen bg-gray-50 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading student reviews...</p>
          </div>
        </div>
      }>
        <ReviewsSection />
      </Suspense>
    </div>
  )
}