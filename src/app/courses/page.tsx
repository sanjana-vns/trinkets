import { Metadata } from 'next'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseDetails from '@/components/courses/CourseDetails'
import CourseFeatures from '@/components/courses/CourseFeatures'
import CourseTestimonials from '@/components/courses/CourseTestimonials'
import CourseEnrollment from '@/components/courses/CourseEnrollment'

export const metadata: Metadata = {
  title: 'Professional IT Courses & Training Programs | Trinkets Institute Mumbai',
  description: 'Discover industry-leading IT courses at Trinkets Institute Mumbai. Expert training in software development, data science, cybersecurity, web development with 100% placement assistance. Start your tech career today!',
  keywords: [
    'IT training courses Mumbai',
    'software development training',
    'data science courses',
    'cybersecurity training',
    'web development bootcamp',
    'programming courses',
    'placement guarantee training',
    'professional IT certification',
    'tech career courses',
    'computer science training',
    'coding bootcamp Mumbai',
    'best IT institute Mumbai',
    'job oriented courses',
    'industry ready training'
  ].join(', '),
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Professional IT Courses & Training Programs | Trinkets Institute',
    description: 'Transform your career with industry-leading IT courses. Expert training in software development, data science, cybersecurity with 100% placement assistance.',
    url: '/courses',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/courses-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute IT Courses and Training Programs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional IT Courses & Training Programs | Trinkets Institute',
    description: 'Transform your career with industry-leading IT courses. Expert training with 100% placement assistance.',
    images: ['/images/courses-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function CoursesPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute of Technology",
    "alternateName": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "description": "Professional IT training institute offering comprehensive courses in software development, data science, cybersecurity, and web development with placement assistance.",
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
      "name": "IT Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Software Development Bootcamp",
          "description": "Comprehensive full-stack development training with placement assistance",
          "provider": "Trinkets Institute of Technology"
        },
        {
          "@type": "Course", 
          "name": "Data Science & Analytics",
          "description": "Complete data science training with real-world projects",
          "provider": "Trinkets Institute of Technology"
        },
        {
          "@type": "Course",
          "name": "Cybersecurity Specialist",
          "description": "Advanced cybersecurity training for enterprise security",
          "provider": "Trinkets Institute of Technology"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section with enhanced semantics */}
        <section aria-label="Course offerings overview">
          <CoursesHero />
        </section>
        
        {/* Course Categories with filtering */}
        <section aria-label="Course categories and filters">
          <CourseCategories />
        </section>
        
        {/* Detailed Course Information */}
        <section aria-label="Detailed course information">
          <CourseDetails />
        </section>
        
        {/* Course Features & Benefits */}
        <section aria-label="Course features and benefits">
          <CourseFeatures />
        </section>
        
        {/* Student Success Stories */}
        <section aria-label="Student testimonials and success stories">
          <CourseTestimonials />
        </section>
        
        {/* Enrollment Call-to-Action */}
        <section aria-label="Course enrollment and contact information">
          <CourseEnrollment />
        </section>
      </div>
    </>
  )
}