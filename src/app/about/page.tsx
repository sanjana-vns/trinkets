import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutMission from '@/components/about/AboutMission'
import AboutTeam from '@/components/about/AboutTeam'
import AboutValues from '@/components/about/AboutValues'
import AboutAchievements from '@/components/about/AboutAchievements'
import AboutTestimonials from '@/components/about/AboutTestimonials'

export const metadata: Metadata = {
  title: 'About Trinkets Institute | Best Engineering Training Institute Mumbai | Piping Design Education',
  description: 'Leading engineering education institute in Mumbai since 2015. Trinkets Institute transforms students into industry professionals with expert piping design, MEP, HVAC, structural engineering training. 100% placement assistance, 5000+ successful graduates.',
  keywords: [
    'about trinkets institute mumbai',
    'best engineering training institute mumbai',
    'piping design education mumbai',
    'engineering institute mumbai',
    'technical education mumbai',
    'professional engineering training',
    'industry expert faculty',
    'engineering placement institute',
    'trinkets institute history',
    'engineering education mission',
    'technical training vision',
    'mumbai engineering college',
    'piping engineering education',
    'MEP training institute',
    'HVAC education mumbai',
    'structural engineering institute',
    'engineering skill development',
    'technical certification mumbai',
    'engineering career transformation',
    'professional development institute',
    'engineering mentorship mumbai',
    'technical excellence education',
    'industry-ready engineers',
    'engineering job training',
    'technical expertise development',
    'engineering innovation institute',
    'practical engineering education',
    'hands-on technical training',
    'engineering success stories',
    'mumbai technical institute',
    'engineering education excellence',
    'professional engineering certification',
    'technical skill advancement',
    'engineering career guidance',
    'industry-aligned curriculum',
    'engineering placement guarantee',
    'technical education leadership',
    'engineering transformation center'
  ],
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: 'About Trinkets Institute | Best Engineering Training Institute Mumbai',
    description: 'Leading engineering education institute in Mumbai since 2015. Trinkets Institute transforms students into industry professionals with expert training and 100% placement assistance.',
    url: 'https://trinketsinstitute.com/about',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/about-trinkets-institute.jpg',
        width: 1200,
        height: 630,
        alt: 'About Trinkets Institute - Best Engineering Training Institute Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Trinkets Institute | Best Engineering Training Institute Mumbai',
    description: 'Leading engineering education institute in Mumbai since 2015. Expert training with 100% placement assistance.',
    images: ['https://trinketsinstitute.com/images/about-trinkets-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/about',
  },
  category: 'Education',
}

export default function AboutPage() {
  // Structured data for About page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute of Technology",
    "alternateName": ["Trinkets Institute", "TIT Mumbai"],
    "url": "https://trinketsinstitute.com",
    "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
    "description": "Leading engineering education institute in Mumbai specializing in Piping Design, MEP, HVAC, Structural Engineering training with 100% placement assistance.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
      "addressLocality": "Mulund West",
      "addressRegion": "Mumbai",
      "postalCode": "400080",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9820924788",
      "contactType": "customer service",
      "email": "info@trinketsinstitute.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/trinketsinstitute",
      "https://www.linkedin.com/company/trinkets-institute",
      "https://www.youtube.com/trinketsinstitute"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Professional Engineering Certification",
      "credentialCategory": "certificate"
    },
    "alumni": {
      "@type": "Person",
      "name": "5000+ Engineering Professionals"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@type": "Thing",
          "@id": "https://trinketsinstitute.com"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": {
          "@type": "Thing",
          "@id": "https://trinketsinstitute.com/about"
        }
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2)
        }}
      />
      
      <main className="min-h-screen" role="main">
        {/* SEO H1 for About page */}
        <h1 className="sr-only">About Trinkets Institute - Best Engineering Training Institute Mumbai</h1>
        
        <article aria-label="About Trinkets Institute">
          <AboutHero />
        </article>
        
        <section aria-label="Institute history and story">
          <AboutStory />
        </section>
        
        <section aria-label="Mission and vision">
          <AboutMission />
        </section>
        
        <section aria-label="Core values">
          <AboutValues />
        </section>
        
        <section aria-label="Team and faculty">
          <AboutTeam />
        </section>
        
        <section aria-label="Achievements and milestones">
          <AboutAchievements />
        </section>
        
        <section aria-label="Student testimonials">
          <AboutTestimonials />
        </section>
      </main>
    </>
  )
}