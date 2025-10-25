import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import LocationMap from '@/components/contact/LocationMap'
import OfficeLocations from '@/components/contact/OfficeLocations'

export const metadata: Metadata = {
  title: 'Contact Trinkets Institute | Engineering Training Mumbai',
  description: 'Contact Trinkets Institute for engineering training inquiries. Visit our Mumbai, Chennai, and Ludhiana offices. Get expert guidance for piping design, structural engineering, and technical courses. Call +91 9820 924 788 or email info@trinketsinstitute.com',
  keywords: [
    'contact trinkets institute',
    'engineering training institute contact',
    'piping design training contact',
    'structural engineering course contact',
    'technical training institute mumbai',
    'engineering institute contact number',
    'trinkets institute mumbai address',
    'engineering training center contact',
    'contact engineering courses mumbai',
    'piping engineering training contact',
    'HVAC training institute contact',
    'MEP engineering course contact',
    'CAD training center contact',
    'engineering software training contact',
    'professional development contact',
    'technical skills training contact',
    'engineering certification contact',
    'industry training institute contact',
    'engineering consultancy contact',
    'career guidance contact',
    'placement assistance contact',
    'engineering mentor contact',
    'SP3D training contact',
    'CAESAR II course contact',
    'STAAD Pro training contact',
    'ETABS course contact',
    'Revit MEP training contact',
    'AutoCAD training contact',
    'engineering design contact',
    'technical education contact',
    'engineering skill development contact',
    'professional training contact',
    'engineering institute inquiry',
    'course admission contact',
    'engineering training enrollment',
    'technical course information',
    'engineering education guidance',
    'career transformation contact',
    'engineering job training contact',
    'technical skill enhancement contact',
    'engineering certification guidance',
    'professional development inquiry',
    'engineering training support',
    'technical education consultation',
    'engineering course counseling',
    'career advancement contact',
    'engineering training assistance',
    'technical skills consultation',
    'engineering education support',
    'professional training guidance',
    'engineering institute support'
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
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch with Trinkets Institute | Engineering Training Institute Contact',
    description: 'Contact Trinkets Institute for engineering training inquiries. Visit our Mumbai, Chennai, and Ludhiana offices. Expert guidance for technical courses and career development.',
    url: 'https://trinketsinstitute.com/contact',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Trinkets Institute - Engineering Training Institute Contact Information',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Trinkets Institute - Engineering Training Institute',
    description: 'Get in touch with us for engineering training inquiries. Multiple office locations across India.',
    images: ['/images/contact-twitter.jpg'],
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

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "description": "Leading engineering education institute providing professional training and career development services.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road, Near Mulund Railway Station",
        "addressLocality": "Mulund West",
        "addressRegion": "Mumbai",
        "postalCode": "400080",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress", 
        "streetAddress": "AGSM House, Plot B, Sri Sairam Avenue, Roja Street, Moulivakkam",
        "addressLocality": "Porur",
        "addressRegion": "Chennai",
        "postalCode": "600125",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "516, K-10 tower, Feroze Gandhi Market, Near Ludhiana Stock Exchange",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab", 
        "postalCode": "141001",
        "addressCountry": "IN"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9820-924-788",
        "contactType": "Main Office",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "description": "Head Office Mumbai"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9867-488-499", 
        "contactType": "Mumbai Office",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "description": "Mumbai Branch"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7338-819-986",
        "contactType": "Chennai Office", 
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Tamil"],
        "description": "Chennai Branch"
      }
    ],
    "email": "info@trinketsinstitute.com",
    "foundingDate": "2010",
    "founder": {
      "@type": "Organization",
      "name": "Trinkets Institute Leadership"
    },
    "numberOfEmployees": "50-100",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578852495738",
      "https://x.com/titindiamumbai", 
      "https://www.youtube.com/@trinketsinstituteoftechnol6645",
      "https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/",
      "https://www.instagram.com/trinketsinstituteinmumbai/"
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "19.1704",
        "longitude": "72.9560"
      },
      {
        "@type": "GeoCoordinates", 
        "latitude": "13.0097",
        "longitude": "80.2209"
      },
      {
        "@type": "GeoCoordinates",
        "latitude": "30.9010",
        "longitude": "75.8573"
      }
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trinkets Institute",
    "description": "Premier engineering training institute with multiple locations across India providing professional development courses.",
    "url": "https://trinketsinstitute.com/contact",
    "telephone": "+91-9820-924-788",
    "email": "info@trinketsinstitute.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road, Near Mulund Railway Station",
      "addressLocality": "Mulund West",
      "addressRegion": "Mumbai",
      "postalCode": "400080",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.1704",
      "longitude": "72.9560"
    },
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
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
        "item": "https://trinketsinstitute.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://trinketsinstitute.com/contact"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <OfficeLocations />
    </div>
  )
}