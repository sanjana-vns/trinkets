import { Metadata } from 'next'
import GalleryHero from '@/components/gallery/GalleryHero'
import AwardsSection from '@/components/gallery/AwardsSection'
import CertificationsSection from '@/components/gallery/CertificationsSection'

export const metadata: Metadata = {
  title: 'Gallery & Awards | Engineering Excellence Recognition | Trinkets Institute Mumbai',
  description: 'Explore Trinkets Institute Mumbai gallery showcasing engineering projects, student achievements, industry awards, certifications. Witness piping design, MEP, HVAC, structural engineering excellence. 5000+ success stories documented.',
  keywords: [
    'trinkets institute gallery mumbai',
    'engineering institute awards mumbai',
    'piping design projects gallery',
    'MEP engineering projects showcase',
    'HVAC design portfolio mumbai',
    'structural engineering gallery',
    'engineering student achievements',
    'professional certifications showcase',
    'engineering project gallery mumbai',
    'institute achievements recognition',
    'engineering excellence awards',
    'student project showcase',
    'industry recognition mumbai',
    'engineering training certifications',
    'professional development awards',
    'engineering design projects',
    'SP3D project gallery',
    'PDMS design showcase',
    'E3D piping projects',
    'CAESAR II analysis showcase',
    'STAAD Pro projects',
    'AutoCAD design gallery',
    'engineering portfolio mumbai',
    'technical training achievements',
    'engineering innovation showcase',
    'industrial project gallery',
    'engineering competition awards',
    'technical excellence recognition',
    'engineering skill demonstration',
    'professional project portfolio'
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
    title: 'Gallery & Awards | Engineering Excellence Recognition | Trinkets Institute Mumbai',
    description: 'Explore Trinkets Institute Mumbai gallery showcasing engineering projects, student achievements, industry awards, certifications.',
    url: 'https://trinketsinstitute.com/gallery',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Gallery - Engineering Projects and Awards Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery & Awards | Engineering Excellence Recognition | Trinkets Institute Mumbai',
    description: 'Explore engineering projects, student achievements, and industry awards at Mumbai\'s leading engineering institute.',
    images: ['https://trinketsinstitute.com/images/gallery-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/gallery',
  },
  category: 'Education',
}

export default function GalleryPage() {
  // Structured data for Gallery page
  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Trinkets Institute Engineering Projects Gallery",
    "description": "Showcase of engineering projects, student achievements, and industry awards from Trinkets Institute Mumbai",
    "url": "https://trinketsinstitute.com/gallery",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute of Technology",
      "url": "https://trinketsinstitute.com"
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://trinketsinstitute.com/images/gallery1.webp",
        "caption": "Piping Design Projects by Trinkets Institute Students",
        "description": "Professional piping design projects completed by students using SP3D, PDMS, and E3D software"
      },
      {
        "@type": "ImageObject",
        "url": "https://trinketsinstitute.com/images/gallery2.webp",
        "caption": "MEP Engineering Project Portfolio",
        "description": "Comprehensive MEP engineering designs and HVAC system layouts"
      },
      {
        "@type": "ImageObject",
        "url": "https://trinketsinstitute.com/images/gallery3.webp",
        "caption": "Structural Engineering Excellence",
        "description": "STAAD Pro and ETABS structural analysis and design projects"
      },
      {
        "@type": "ImageObject",
        "url": "https://trinketsinstitute.com/images/gallery4.webp",
        "caption": "Industry Recognition and Awards",
        "description": "Awards and certifications received for engineering excellence"
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
        "name": "Gallery",
        "item": "https://trinketsinstitute.com/gallery"
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryStructuredData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2)
        }}
      />
      
      <main className="min-h-screen" role="main">
        {/* SEO H1 for Gallery page */}
        <h1 className="sr-only">Gallery & Awards - Engineering Projects Showcase | Trinkets Institute Mumbai</h1>
        
        <article aria-label="Engineering projects gallery">
          <GalleryHero />
        </article>
        
        <section aria-label="Awards and recognition">
          <AwardsSection />
        </section>
        
        <section aria-label="Professional certifications">
          <CertificationsSection />
        </section>
      </main>
    </>
  )
}