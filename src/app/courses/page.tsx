import { Metadata } from 'next'
import Link from 'next/link'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseDetails from '@/components/courses/CourseDetails'
import CourseFeatures from '@/components/courses/CourseFeatures'
import CourseTestimonials from '@/components/courses/CourseTestimonials'
import CourseEnrollment from '@/components/courses/CourseEnrollment'

export const metadata: Metadata = {
  title: 'Engineering Courses & Professional Training | Trinkets Institute Mumbai',
  description: 'Master engineering design with industry-leading courses in Piping, MEP, HVAC, Structural, and Software training. Expert-led programs with 100% placement assistance at Trinkets Institute Mumbai.',
  keywords: [
    'engineering courses Mumbai',
    'piping engineering training',
    'MEP engineering course',
    'HVAC design training',
    'structural engineering course',
    'SP3D training Mumbai',
    'E3D piping course',
    'STAAD Pro training',
    'AutoCAD course Mumbai',
    'CAESAR II training',
    'engineering design course',
    'industrial training Mumbai',
    'placement guarantee engineering',
    'professional engineering certification'
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
    title: 'Engineering Courses & Professional Training | Trinkets Institute',
    description: 'Master engineering design with industry-leading courses in Piping, MEP, HVAC, Structural training with 100% placement assistance.',
    url: '/courses',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/courses-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Engineering Courses and Professional Training Programs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Courses & Professional Training | Trinkets Institute',
    description: 'Master engineering design with industry-leading courses in Piping, MEP, HVAC, Structural training with 100% placement assistance.',
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
    "description": "Professional engineering training institute offering comprehensive courses in Piping Engineering, MEP Design, HVAC, Structural Analysis, SP3D, E3D modeling with placement assistance.",
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
      "name": "Engineering Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Piping Engineering & Design",
          "description": "Comprehensive piping design training with SP3D, AutoCAD, and CAESAR II",
          "provider": "Trinkets Institute of Technology"
        },
        {
          "@type": "Course", 
          "name": "MEP Engineering",
          "description": "Complete MEP design training with industry software and placement assistance",
          "provider": "Trinkets Institute of Technology"
        },
        {
          "@type": "Course",
          "name": "HVAC Design & Analysis",
          "description": "Advanced HVAC system design and energy analysis training",
          "provider": "Trinkets Institute of Technology"
        },
        {
          "@type": "Course",
          "name": "Structural Engineering",
          "description": "Structural analysis and design using STAAD Pro, ETABS, and SAP2000",
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
        
        {/* Internal Links Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore More</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover all that Trinkets Institute has to offer for your engineering career
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Featured Course</h3>
                <p className="text-gray-600 mb-4">Deep dive into our most popular piping design course</p>
                <Link href="/courses/piping-design-engineering" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Piping Design Course
                </Link>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-green-600">Career Support</h3>
                <p className="text-gray-600 mb-4">100% placement assistance and career guidance</p>
                <Link href="/placements" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Placement Services
                </Link>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">Success Stories</h3>
                <p className="text-gray-600 mb-4">Read testimonials from our successful graduates</p>
                <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Student Stories
                </Link>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Contact Us</h3>
                <p className="text-gray-600 mb-4">Get in touch for personalized course consultation</p>
                <Link href="/contact" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}