import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ErrorBoundary from '@/components/ErrorBoundary'

// Dynamic imports with error boundaries for better loading
const ServicesHero = dynamic(() => import('@/components/services/ServicesHero'), {
  loading: () => <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

const ServiceCategories = dynamic(() => import('@/components/services/ServiceCategories'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

const ServiceFeatures = dynamic(() => import('@/components/services/ServiceFeatures'), {
  loading: () => <div className="h-64 bg-blue-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

const ServiceProcess = dynamic(() => import('@/components/services/ServiceProcess'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

const ServiceTestimonials = dynamic(() => import('@/components/services/ServiceTestimonials'), {
  loading: () => <div className="h-64 bg-blue-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

const ServiceContact = dynamic(() => import('@/components/services/ServiceContact'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg"></div>,
  ssr: true
})

export const metadata: Metadata = {
  title: 'Engineering Services Mumbai | Piping MEP HVAC Structural',
  description: 'Premier Engineering Services in Mumbai. Expert Piping Design, MEP Engineering, HVAC Systems, Structural Analysis, CAESAR II, SP3D, STAAD Pro consulting. 15+ years experience, 500+ projects delivered.',
  keywords: [
    'Engineering Services Mumbai',
    'Piping Design Services Mumbai',
    'MEP Engineering Consulting Mumbai',
    'HVAC Design Services Mumbai',
    'Structural Engineering Solutions Mumbai',
    'Engineering Consulting Mumbai',
    'Industrial Design Services Mumbai',
    'Plant Engineering Services Mumbai',
    'Piping Engineering Consultancy Mumbai',
    'MEP Design Consultancy Mumbai',
    'Engineering Project Management Mumbai',
    'Technical Consulting Mumbai',
    'Professional Engineering Services',
    'SP3D Modeling Services Mumbai',
    'E3D Design Services Mumbai',
    'CAESAR II Analysis Services Mumbai',
    'STAAD Pro Consulting Mumbai',
    'Engineering Drafting Services Mumbai',
    'CAD Design Services Mumbai',
    'Engineering Design Outsourcing Mumbai',
    'Process Engineering Services Mumbai',
    'Oil Gas Engineering Services',
    'Petrochemical Engineering Consulting',
    'Power Plant Engineering Services',
    'Building Services Engineering Mumbai',
    'HVAC System Design Analysis Mumbai',
    'Piping Stress Analysis Services',
    'Structural Analysis Design Services',
    'MEP Coordination Services Mumbai',
    'Engineering Design Solutions',
    'Construction Engineering Services',
    'Industrial Engineering Solutions',
    'Energy Engineering Consulting',
    'Green Building Engineering Services',
    'BIM Engineering Services Mumbai',
    'Mechanical Engineering Services',
    'Electrical Engineering Consulting',
    'Civil Engineering Services Mumbai',
    'Engineering Consulting Firm Mumbai',
    'Professional Engineering Consultancy'
  ],
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
  creator: 'Trinkets Institute of Technology - Premier Engineering Services Provider',
  publisher: 'Trinkets Institute of Technology',
  category: 'Engineering Services',
  classification: 'Professional Engineering Consulting Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Engineering Services Mumbai | #1 Piping, MEP, HVAC & Structural Engineering Solutions',
    description: 'Premier Engineering Services in Mumbai. Expert Piping Design, MEP Engineering, HVAC Systems, Structural Analysis, CAESAR II, SP3D, STAAD Pro consulting. 15+ years experience, 500+ projects delivered.',
    url: 'https://trinketsinstitute.com/services',
    siteName: 'Trinkets Institute - Engineering Services Mumbai',
    images: [
      {
        url: '/images/services-engineering-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineering Services Mumbai - Professional Piping MEP HVAC Structural Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Services Mumbai | Professional Piping, MEP, HVAC & Structural Solutions',
    description: 'Premier Engineering Services in Mumbai. Expert Piping Design, MEP Engineering, HVAC Systems, Structural Analysis. 15+ years experience, 500+ projects.',
    images: ['/images/services-engineering-mumbai-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
}

export default function ServicesPage() {
  // Comprehensive Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://trinketsinstitute.com/services#organization",
        "name": "Trinkets Institute Engineering Services",
        "alternateName": "Trinkets Engineering Consulting Mumbai",
        "url": "https://trinketsinstitute.com/services",
        "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
        "description": "Premier engineering services provider in Mumbai specializing in Piping Engineering, MEP Design, HVAC Systems, Structural Analysis, CAESAR II analysis, SP3D modeling, and comprehensive engineering consulting for industrial, commercial, and infrastructure projects across Mumbai and Maharashtra.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Engineering Services Division",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400080",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0760",
          "longitude": "72.8777"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9820924788",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi", "Marathi"],
          "areaServed": ["Mumbai", "Maharashtra", "India"],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "19.0760",
              "longitude": "72.8777"
            },
            "geoRadius": "100000"
          }
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61578852495738",
          "https://x.com/titindiamumbai",
          "https://www.youtube.com/@trinketsinstituteoftechnol6645",
          "https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/",
          "https://www.instagram.com/trinketsinstituteinmumbai/"
        ],
        "serviceType": [
          "Piping Engineering & Design Services",
          "MEP Engineering Consulting",
          "HVAC System Design & Analysis",
          "Structural Engineering Solutions",
          "Engineering Project Management",
          "CAD Design & Drafting Services",
          "Technical Engineering Consulting",
          "SP3D Piping Modeling Services",
          "CAESAR II Stress Analysis",
          "STAAD Pro Structural Analysis",
          "Process Engineering Consulting",
          "Building Services Engineering",
          "Industrial Engineering Solutions"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Engineering Services Portfolio Mumbai",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Piping Engineering & Design Services Mumbai",
              "description": "Comprehensive piping design services using SP3D, E3D, AutoCAD Plant 3D, and CAESAR II for oil & gas, petrochemical, power, and industrial projects in Mumbai",
              "provider": "Trinkets Institute of Technology",
              "category": "Piping Engineering",
              "areaServed": "Mumbai",
              "serviceType": "Engineering Design"
            },
            {
              "@type": "Service",
              "name": "MEP Engineering Consulting Mumbai",
              "description": "Complete MEP design, coordination, and consulting services for commercial buildings, hospitals, hotels, and industrial facilities across Mumbai",
              "provider": "Trinkets Institute of Technology",
              "category": "MEP Engineering",
              "areaServed": "Mumbai",
              "serviceType": "Engineering Consulting"
            },
            {
              "@type": "Service",
              "name": "HVAC System Design & Analysis Mumbai",
              "description": "Advanced HVAC system design, load calculations, energy optimization, and building automation services for Mumbai's commercial and residential projects",
              "provider": "Trinkets Institute of Technology",
              "category": "HVAC Engineering",
              "areaServed": "Mumbai",
              "serviceType": "HVAC Design"
            },
            {
              "@type": "Service",
              "name": "Structural Engineering Solutions Mumbai",
              "description": "Structural analysis, design, and consulting using STAAD Pro, ETABS, SAP2000 for buildings, bridges, and industrial structures in Mumbai",
              "provider": "Trinkets Institute of Technology",
              "category": "Structural Engineering",
              "areaServed": "Mumbai",
              "serviceType": "Structural Design"
            },
            {
              "@type": "Service",
              "name": "Engineering Project Management Mumbai",
              "description": "End-to-end project management for engineering, construction, and infrastructure projects across Mumbai and Maharashtra",
              "provider": "Trinkets Institute of Technology",
              "category": "Project Management",
              "areaServed": "Mumbai",
              "serviceType": "Project Management"
            },
            {
              "@type": "Service",
              "name": "CAD Design & Drafting Services Mumbai",
              "description": "Professional CAD design, drafting, and 3D modeling services for engineering projects using AutoCAD, SolidWorks, and Inventor",
              "provider": "Trinkets Institute of Technology",
              "category": "CAD Services",
              "areaServed": "Mumbai",
              "serviceType": "Design Services"
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mumbai"
          },
          {
            "@type": "State",
            "name": "Maharashtra"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "priceRange": "₹₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "foundingDate": "2010",
        "slogan": "Engineering Excellence in Mumbai",
        "knowsAbout": [
          "Piping Engineering",
          "MEP Design",
          "HVAC Systems",
          "Structural Engineering",
          "Process Engineering",
          "Project Management",
          "CAD Design",
          "Engineering Consulting"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://trinketsinstitute.com/services#localbusiness",
        "name": "Trinkets Institute Engineering Services Mumbai",
        "description": "Leading engineering services company in Mumbai providing professional piping design, MEP engineering, HVAC systems, and structural engineering solutions",
        "url": "https://trinketsinstitute.com/services",
        "telephone": "+91-9820924788",
        "email": "info@trinketsinstitute.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Engineering Services Center",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400080",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0760",
          "longitude": "72.8777"
        },
        "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
        "priceRange": "₹₹₹",
        "servesCuisine": "Engineering Services",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Cheque"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://trinketsinstitute.com/services#breadcrumb",
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
            "name": "Engineering Services",
            "item": "https://trinketsinstitute.com/services"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://trinketsinstitute.com/services#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What engineering services do you provide in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive engineering services in Mumbai including Piping Engineering & Design, MEP Engineering Consulting, HVAC System Design, Structural Engineering Solutions, Engineering Project Management, CAD Design & Drafting, and Technical Consulting using industry-standard software."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide piping design services using SP3D and CAESAR II in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide expert piping design services in Mumbai using SP3D, E3D, AutoCAD Plant 3D for 3D modeling and CAESAR II for stress analysis. Our team has extensive experience in oil & gas, petrochemical, and industrial piping projects."
            }
          },
          {
            "@type": "Question",
            "name": "What is your experience in MEP engineering services in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have 15+ years of experience in MEP engineering services in Mumbai, having completed 500+ projects including commercial buildings, hospitals, hotels, and industrial facilities. We provide complete MEP design, coordination, and consulting services."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide HVAC system design and analysis services in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive HVAC system design and analysis services in Mumbai using HAP, TRACE 700, and Revit MEP. Our services include load calculations, system design, energy optimization, and building automation for Mumbai's climate conditions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Comprehensive Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Main Content with Semantic HTML */}
      <main className="min-h-screen bg-gray-50" role="main" itemScope itemType="https://schema.org/ProfessionalService">
        {/* Hidden SEO H1 for Search Engines */}
        <h1 className="sr-only">Engineering Services Mumbai | Professional Piping MEP HVAC Structural Engineering Solutions</h1>
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><a href="/">Home</a></li>
            <li>Engineering Services</li>
          </ol>
        </nav>
        
        {/* Services Hero Section */}
        <section aria-labelledby="services-hero-title">
          <ErrorBoundary fallback={<div className="h-96 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center"><h1 className="text-4xl font-bold">Engineering Services Mumbai</h1></div>}>
            <ServicesHero />
          </ErrorBoundary>
        </section>
        
        {/* Service Categories */}
        <section aria-labelledby="service-categories-title">
          <ErrorBoundary fallback={<div className="py-16 text-center"><h2 className="text-2xl font-bold">Service Categories Loading...</h2></div>}>
            <ServiceCategories />
          </ErrorBoundary>
        </section>
        
        {/* Service Features & Benefits */}
        <section aria-labelledby="service-features-title">
          <ErrorBoundary fallback={<div className="py-16 text-center"><h2 className="text-2xl font-bold">Service Features Loading...</h2></div>}>
            <ServiceFeatures />
          </ErrorBoundary>
        </section>
        
        {/* Service Process & Methodology */}
        <section aria-labelledby="service-process-title">
          <ErrorBoundary fallback={<div className="py-16 text-center"><h2 className="text-2xl font-bold">Service Process Loading...</h2></div>}>
            <ServiceProcess />
          </ErrorBoundary>
        </section>
        
        {/* Client Testimonials */}
        <section aria-labelledby="service-testimonials-title">
          <ErrorBoundary fallback={<div className="py-16 text-center"><h2 className="text-2xl font-bold">Testimonials Loading...</h2></div>}>
            <ServiceTestimonials />
          </ErrorBoundary>
        </section>
        
        {/* Service Contact & Consultation */}
        <section aria-labelledby="service-contact-title">
          <ErrorBoundary fallback={<div className="py-16 text-center"><h2 className="text-2xl font-bold">Contact Information Loading...</h2></div>}>
            <ServiceContact />
          </ErrorBoundary>
        </section>
        
        {/* Backup Static Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Engineering Services in Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trinkets Institute provides comprehensive engineering services with over 15 years of experience 
                in Mumbai&apos;s industrial and commercial sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 mb-4">🔧 Piping Engineering</h3>
                <p className="text-gray-600 mb-4">Expert piping design using SP3D, E3D, AutoCAD Plant 3D, and CAESAR II stress analysis.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 3D Piping Modeling</li>
                  <li>• Stress Analysis</li>
                  <li>• P&ID Development</li>
                  <li>• Material Specifications</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">⚡ MEP Engineering</h3>
                <p className="text-gray-600 mb-4">Complete Mechanical, Electrical & Plumbing design for commercial and industrial buildings.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• MEP System Design</li>
                  <li>• Load Calculations</li>
                  <li>• Equipment Selection</li>
                  <li>• Coordination Services</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 mb-4">❄️ HVAC Systems</h3>
                <p className="text-gray-600 mb-4">Advanced HVAC system design and analysis using HAP, TRACE 700, and Revit MEP.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• System Design</li>
                  <li>• Load Analysis</li>
                  <li>• Energy Optimization</li>
                  <li>• Building Automation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-green-600 mb-4">🏢 Structural Engineering</h3>
                <p className="text-gray-600 mb-4">Structural analysis and design using STAAD Pro, ETABS, and SAP2000.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Structural Analysis</li>
                  <li>• Foundation Design</li>
                  <li>• Steel Structures</li>
                  <li>• Seismic Analysis</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-orange-600 mb-4">📊 Project Management</h3>
                <p className="text-gray-600 mb-4">End-to-end project management for engineering and construction projects.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Project Planning</li>
                  <li>• Resource Management</li>
                  <li>• Quality Control</li>
                  <li>• Timeline Management</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 mb-4">💻 CAD Services</h3>
                <p className="text-gray-600 mb-4">Professional CAD design and drafting services for all engineering disciplines.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Technical Drawings</li>
                  <li>• 3D Modeling</li>
                  <li>• As-Built Drawings</li>
                  <li>• Design Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional SEO Content for Services */}
        <article className="container mx-auto px-4 py-16" itemScope itemType="https://schema.org/Article">
          <div className="max-w-4xl mx-auto">
            <header>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" itemProp="headline">
                Professional Engineering Services in Mumbai - Complete Solutions
              </h2>
            </header>
            
            <div className="prose prose-lg max-w-none" itemProp="articleBody">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Trinkets Institute</strong> stands as Mumbai&apos;s premier provider of comprehensive engineering services, 
                delivering excellence in <em>Piping Engineering</em>, <em>MEP Engineering</em>, <em>HVAC System Design</em>, 
                and <em>Structural Engineering Solutions</em>. With over 15 years of industry experience and 500+ successfully 
                completed projects across Mumbai and Maharashtra, we have established ourselves as the trusted engineering 
                consultancy for industrial, commercial, and infrastructure developments.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Engineering Services Portfolio
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our engineering services encompass the full spectrum of design, analysis, and consulting requirements for 
                modern industrial and commercial projects in Mumbai. From detailed <strong>piping design using SP3D and CAESAR II</strong> 
                to sophisticated <strong>MEP engineering solutions</strong>, we deliver precision-engineered solutions that meet 
                international standards while addressing Mumbai&apos;s specific environmental and regulatory requirements.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Advanced Engineering Software & Technologies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team leverages cutting-edge engineering software including <em>SP3D for piping modeling</em>, 
                <em>CAESAR II for stress analysis</em>, <em>STAAD Pro for structural design</em>, <em>AutoCAD Plant 3D</em>, 
                <em>Revit MEP for building services</em>, and <em>HAP for HVAC analysis</em>. This technological expertise 
                enables us to deliver high-quality engineering solutions efficiently and accurately for Mumbai&apos;s diverse 
                industrial landscape.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mumbai-Specific Engineering Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our deep understanding of Mumbai&apos;s industrial ecosystem, regulatory framework, and environmental conditions 
                allows us to provide tailored engineering solutions. Whether it&apos;s designing HVAC systems for Mumbai&apos;s 
                tropical climate, piping networks for the petrochemical complexes in Mahul, or structural solutions for 
                high-rise developments in BKC, our local expertise ensures optimal project outcomes.
              </p>
            </div>
            
            <meta itemProp="author" content="Trinkets Institute Engineering Team" />
            <meta itemProp="datePublished" content="2024-01-01" />
            <meta itemProp="dateModified" content="2024-12-07" />
          </div>
        </article>
      </main>
    </>
  )
}