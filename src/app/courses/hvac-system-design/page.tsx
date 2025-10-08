import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'
import LocationSection from '@/components/LocationSection'

export const metadata: Metadata = {
  title: 'HVAC System Design Course in Mumbai | Best HVAC Training Institute | 100% Placement',
  description: 'Master HVAC System Design course in Mumbai at Trinkets Institute. Learn AutoCAD MEP, Revit MEP, HAP, TRACE 700 with expert trainers. Real project training, 100% placement assistance in HVAC & MEP industry.',
  keywords: [
    'hvac system design course in mumbai',
    'hvac training mumbai',
    'hvac engineering course mumbai',
    'hvac design training mumbai',
    'autocad mep course mumbai',
    'revit mep training mumbai',
    'hap software course mumbai',
    'trace 700 training mumbai',
    'hvac course mumbai',
    'hvac design institute mumbai',
    'hvac certification mumbai',
    'mep course mumbai',
    'hvac system design training',
    'hvac engineering training mumbai',
    'heating ventilation air conditioning course',
    'building services engineering mumbai',
    'mechanical engineering hvac mumbai',
    'hvac design software training',
    'energy efficient hvac design',
    'commercial hvac design course',
    'residential hvac training mumbai',
    'hvac load calculation course',
    'duct design training mumbai',
    'chiller plant design course',
    'hvac controls training mumbai',
    'building automation systems mumbai',
    'green building hvac mumbai',
    'hvac design jobs mumbai',
    'hvac engineer career mumbai',
    'mumbai hvac training institute',
    'best hvac course mumbai',
    'hvac design certification mumbai',
    'trinkets institute mumbai',
    'hvac engineering mumbai fees',
    'hvac course duration mumbai'
  ],
  authors: [{ name: 'Trinkets Institute Mumbai' }],
  creator: 'Trinkets Institute - HVAC System Design Training Mumbai',
  publisher: 'Trinkets Institute',
  category: 'HVAC Engineering Education',
  classification: 'HVAC System Design Training Course',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/hvac-system-design',
  },
  openGraph: {
    title: 'HVAC System Design Course in Mumbai | #1 HVAC Training | 100% Placement',
    description: 'Join Mumbai\'s top HVAC System Design course at Trinkets Institute. Master HVAC design with expert trainers. Real project training, 100% placement assistance in HVAC & MEP consultancy.',
    url: 'https://trinketsinstitute.com/courses/hvac-system-design',
    siteName: 'Trinkets Institute Mumbai',
    images: [
      {
        url: '/images/hvac-system-design-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC System Design Course in Mumbai - Best HVAC Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC System Design Course in Mumbai | Best HVAC Training Institute',
    description: 'Master HVAC System Design in Mumbai. Expert-led training, real projects, 100% placement assistance. Join Trinkets Institute today!',
    images: ['/images/hvac-system-design-course-mumbai-twitter.jpg'],
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
}

export default function HVACSystemDesignCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "HVAC System Design Course in Mumbai",
        "description": "Comprehensive HVAC System Design training in Mumbai using industry-standard software including AutoCAD MEP, Revit MEP, HAP, and TRACE 700. Learn from expert HVAC engineers with real project exposure.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Trinkets Institute",
          "description": "Premier HVAC training institute in Mumbai",
          "url": "https://trinketsinstitute.com",
          "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Engineering Training Center",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          }
        },
        "offers": {
          "@type": "Offer",
          "category": "HVAC Engineering Training",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2024-12-31"
        },
        "courseMode": ["classroom", "online", "blended"],
        "educationalLevel": "Professional",
        "teaches": [
          "HVAC System Design",
          "AutoCAD MEP",
          "Revit MEP", 
          "HAP Software",
          "TRACE 700",
          "Load Calculations",
          "Duct Design",
          "Building Services Engineering",
          "Energy Analysis",
          "Green Building Design"
        ],
        "timeRequired": "P6M",
        "inLanguage": "en-IN",
        "isAccessibleForFree": false,
        "educationalUse": "Professional Development",
        "learningResourceType": "Course",
        "educationalAlignment": {
          "@type": "AlignmentObject",
          "alignmentType": "teaches",
          "educationalFramework": "HVAC Engineering",
          "targetName": "HVAC System Design Professional"
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "Engineers, Fresh Graduates, Working Professionals"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "classroom",
          "location": {
            "@type": "Place",
            "name": "Trinkets Institute Mumbai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          },
          "startDate": "2024-12-01",
          "duration": "P6M",
          "instructor": {
            "@type": "Person",
            "name": "HVAC Engineering Faculty",
            "description": "Expert HVAC engineers with 15+ years industry experience"
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Trinkets Institute - HVAC Training Mumbai",
        "description": "Leading HVAC System Design training institute in Mumbai offering comprehensive courses in AutoCAD MEP, Revit MEP, HAP, and TRACE 700.",
        "url": "https://trinketsinstitute.com/courses/hvac-system-design",
        "telephone": "+91-9876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "HVAC Training Center",
          "addressLocality": "Mumbai", 
          "addressRegion": "Maharashtra",
          "postalCode": "400001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0760,
          "longitude": 72.8777
        },
        "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
        "priceRange": "₹₹",
        "servesCuisine": "Education",
        "areaServed": {
          "@type": "City", 
          "name": "Mumbai"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "HVAC System Design Courses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "HVAC System Design Course in Mumbai"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the duration of HVAC System Design course in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Our comprehensive HVAC System Design course in Mumbai spans 6 months with flexible scheduling options including weekend batches, weekday batches, and fast-track programs."
            }
          },
          {
            "@type": "Question",
            "name": "Which software will I learn in HVAC course in Mumbai?", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You'll master AutoCAD MEP, Revit MEP, HAP (Hourly Analysis Program), TRACE 700, and other industry-standard HVAC design software used in Mumbai's construction industry."
            }
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Creative Animated Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden" id="hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-animated"></div>
          
          {/* Mumbai Skyline Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 animate-slideUp">
              {/* Course Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full shadow-lg animate-fadeIn">
                <span className="text-2xl mr-3">🏗️</span>
                <span className="font-bold text-lg">HVAC System Design Course Mumbai</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Best HVAC System Design
                </span>
                <br />
                <span className="text-white">Course in Mumbai</span>
                <br />
                <span className="text-2xl lg:text-3xl font-normal text-blue-200 mt-4 block">
                  Master AutoCAD MEP, Revit MEP, HAP & TRACE 700
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
                Join Mumbai&apos;s premier HVAC System Design training institute. Learn from industry experts, work on real 
                projects, and get 100% placement assistance in top HVAC companies across Mumbai&apos;s construction industry.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 animate-slideUp" style={{animationDelay: '0.6s'}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="font-semibold">6 Months Duration</div>
                  <div className="text-sm text-blue-200">Flexible Batches</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-semibold">4 Industry Software</div>
                  <div className="text-sm text-blue-200">AutoCAD MEP, Revit MEP</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold">Mumbai Location</div>
                  <div className="text-sm text-blue-200">Prime Training Center</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">100% Placement</div>
                  <div className="text-sm text-blue-200">Guaranteed Assistance</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{animationDelay: '0.8s'}}>
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  Enroll in Mumbai&apos;s Best HVAC Course
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="#course-details"
                  className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">📋</span>
                  Download Syllabus
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">⬇</span>
                </Link>
              </div>
            </div>

            {/* Right Content - HVAC Software Showcase */}
            <div className="lg:w-1/2 mt-16 lg:mt-0 animate-slideDown" style={{animationDelay: '1s'}}>
              <div className="relative">
                {/* Main Software Grid */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* AutoCAD MEP */}
                  <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:scale-105 animate-float">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-bold mb-2">AutoCAD MEP</h3>
                    <p className="text-sm text-blue-200">Mechanical, Electrical & Plumbing Design</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Industry Standard
                    </div>
                  </div>

                  {/* Revit MEP */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 animate-float-reverse">
                    <div className="text-4xl mb-4">🏗️</div>
                    <h3 className="text-xl font-bold mb-2">Revit MEP</h3>
                    <p className="text-sm text-blue-200">Building Information Modeling</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      3D Modeling
                    </div>
                  </div>

                  {/* HAP Software */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-float-animated">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-bold mb-2">HAP Software</h3>
                    <p className="text-sm text-blue-200">Hourly Analysis Program</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Energy Analysis
                    </div>
                  </div>

                  {/* TRACE 700 */}
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 animate-float">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-2">TRACE 700</h3>
                    <p className="text-sm text-blue-200">Building Energy Simulation</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      LEED Certified
                    </div>
                  </div>
                </div>

                {/* Mumbai Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Mumbai&apos;s #1 Choice
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="absolute bottom-8 left-0 right-0 animate-slideUp" style={{animationDelay: '1.2s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-blue-200">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-blue-200">Placement Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">200+</div>
                  <div className="text-sm text-blue-200">Hiring Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Course Overview */}
      <section className="container mx-auto px-4 py-20 relative" id="course-details">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-lg mr-2">🎯</span>
                <span className="font-semibold">Professional HVAC System Design Course</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Best HVAC System Design Course in Mumbai
                </span>
                <br />
                <span className="text-gray-800">Master HVAC Engineering with Industry Experts</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Transform your career with Mumbai&apos;s most comprehensive HVAC System Design course. Learn from industry 
                experts, master professional software, and get guaranteed placement assistance in Mumbai&apos;s top 
                construction and MEP companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slideUp">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">📚</span>
                    Why Choose Our HVAC Course in Mumbai?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Comprehensive HVAC system design training from fundamentals to advanced",
                      "Master AutoCAD MEP, Revit MEP, HAP, TRACE 700 with hands-on practice",
                      "Real Mumbai construction project training and site visits",
                      "100% placement assistance in top HVAC companies across Mumbai",
                      "Expert faculty with 15+ years HVAC industry experience in Mumbai",
                      "Live project exposure with leading Mumbai HVAC consultancies"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-blue-800 transition-colors">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HVAC Software Expertise */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">💻</span>
                    HVAC Software Mastery
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "AutoCAD MEP", desc: "HVAC Design & Drafting", color: "from-red-400 to-orange-500" },
                      { name: "Revit MEP", desc: "3D BIM Modeling", color: "from-blue-400 to-cyan-500" },
                      { name: "HAP Software", desc: "Load Calculations", color: "from-purple-400 to-pink-500" },
                      { name: "TRACE 700", desc: "Energy Analysis", color: "from-green-400 to-teal-500" }
                    ].map((software, index) => (
                      <div key={index} className="group">
                        <div className={`bg-gradient-to-r ${software.color} text-white p-4 rounded-xl text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                          <div className="font-bold text-sm mb-1">{software.name}</div>
                          <div className="text-xs opacity-90">{software.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
                {/* Mumbai Benefits */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏙️</span>
                    Mumbai HVAC Industry Advantage
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Learn from Mumbai's leading HVAC projects and case studies",
                      "Network with top HVAC professionals in Mumbai's construction sector",
                      "Access to Mumbai's extensive HVAC job market and opportunities",
                      "Training aligned with Mumbai's climate and building requirements",
                      "Site visits to ongoing HVAC projects across Mumbai",
                      "Guest lectures from Mumbai's renowned HVAC engineers"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">★</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🎖️</span>
                    Course Highlights
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Duration", value: "6 Months", icon: "⏱️" },
                      { label: "Mode", value: "Classroom/Online", icon: "💻" },
                      { label: "Projects", value: "Live Industry", icon: "🏗️" },
                      { label: "Certification", value: "Industry Recognized", icon: "🏆" },
                      { label: "Placement", value: "100% Assistance", icon: "🎯" },
                      { label: "Location", value: "Mumbai Center", icon: "📍" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="font-semibold text-purple-800 text-sm">{item.label}</div>
                        <div className="text-purple-600 text-xs">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Start Your HVAC Engineering Journey in Mumbai Today!</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join Mumbai&apos;s most trusted HVAC training institute with proven placement record
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Book Free Demo Class
                  </Link>
                  <Link
                    href="#course-curriculum"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    📋 View Detailed Curriculum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Training Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Software Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD MEP</h3>
              <p className="text-blue-100 mb-4">Mechanical, Electrical & Plumbing</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• HVAC System Design</li>
                <li>• Duct Routing & Sizing</li>
                <li>• Equipment Placement</li>
                <li>• Load Calculations</li>
                <li>• Drawing Documentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Revit MEP</h3>
              <p className="text-green-100 mb-4">Building Information Modeling</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• 3D MEP Modeling</li>
                <li>• Parametric Design</li>
                <li>• Clash Detection</li>
                <li>• Quantity Takeoffs</li>
                <li>• Collaborative Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HAP</h3>
              <p className="text-purple-100 mb-4">Hourly Analysis Program</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Energy Modeling</li>
                <li>• Load Calculations</li>
                <li>• System Simulation</li>
                <li>• Energy Analysis</li>
                <li>• Performance Reports</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">TRACE 700</h3>
              <p className="text-orange-100 mb-4">Building Energy Analysis</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Building Modeling</li>
                <li>• System Analysis</li>
                <li>• Energy Optimization</li>
                <li>• Cost Analysis</li>
                <li>• LEED Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 1-3: Foundation & Theory</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Fundamentals of HVAC</h4>
                  <p className="text-gray-600 text-sm">Thermodynamics, heat transfer, psychrometrics, comfort conditions</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Load Calculations</h4>
                  <p className="text-gray-600 text-sm">Cooling/heating loads, CLTD/CLF method, ASHRAE standards</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Air Distribution Systems</h4>
                  <p className="text-gray-600 text-sm">Duct design, fan selection, air balancing techniques</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-green-600">Module 4-6: Advanced Systems</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Central Plant Systems</h4>
                  <p className="text-gray-600 text-sm">Chiller design, cooling towers, pumping systems</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Controls & Automation</h4>
                  <p className="text-gray-600 text-sm">BMS, DDC systems, energy management strategies</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Energy Efficiency</h4>
                  <p className="text-gray-600 text-sm">Green building standards, LEED compliance, optimization</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">AutoCAD MEP (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic operations</li>
                    <li>• HVAC system creation and modification</li>
                    <li>• Duct routing and equipment placement</li>
                    <li>• Load calculations and reports</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Revit MEP (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• BIM modeling concepts</li>
                    <li>• MEP families and templates</li>
                    <li>• 3D system modeling</li>
                    <li>• Coordination and clash detection</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">HAP & TRACE 700 (Weeks 9-12)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Building energy modeling</li>
                    <li>• System performance analysis</li>
                    <li>• Energy optimization strategies</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete HVAC design for a commercial building including load calculations, 
                  system design, equipment selection, and energy analysis using all software tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Prospects & Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">HVAC Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-8 LPA</p>
              <p className="text-sm text-gray-500">Design HVAC systems for commercial and residential buildings</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">MEP Consultant</h3>
              <p className="text-gray-600 mb-3">₹6-12 LPA</p>
              <p className="text-sm text-gray-500">Provide consulting services for building mechanical systems</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Energy Analyst</h3>
              <p className="text-gray-600 mb-3">₹5-10 LPA</p>
              <p className="text-sm text-gray-500">Analyze building energy performance and optimization</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Project Manager</h3>
              <p className="text-gray-600 mb-3">₹8-15 LPA</p>
              <p className="text-sm text-gray-500">Manage HVAC installation and commissioning projects</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Building Commissioning Engineer</h3>
              <p className="text-gray-600 mb-3">₹6-11 LPA</p>
              <p className="text-sm text-gray-500">Ensure proper HVAC system installation and performance</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Green Building Consultant</h3>
              <p className="text-gray-600 mb-3">₹7-13 LPA</p>
              <p className="text-sm text-gray-500">Specialize in sustainable HVAC design and LEED certification</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">L&T Construction</div>
              <div className="bg-white p-3 rounded shadow">Johnson Controls</div>
              <div className="bg-white p-3 rounded shadow">Honeywell</div>
              <div className="bg-white p-3 rounded shadow">Carrier</div>
              <div className="bg-white p-3 rounded shadow">Trane</div>
              <div className="bg-white p-3 rounded shadow">Voltas</div>
              <div className="bg-white p-3 rounded shadow">Blue Star</div>
              <div className="bg-white p-3 rounded shadow">Godrej & Boyce</div>
              <div className="bg-white p-3 rounded shadow">Thermax</div>
              <div className="bg-white p-3 rounded shadow">Sterling & Wilson</div>
              <div className="bg-white p-3 rounded shadow">Shapoorji Pallonji</div>
              <div className="bg-white p-3 rounded shadow">CBRE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-green-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹8.5L</div>
              <div className="text-green-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Resume Building</h3>
              <p className="text-green-100 text-sm">Professional resume creation with industry-specific keywords</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Interview Preparation</h3>
              <p className="text-green-100 text-sm">Mock interviews and technical round preparation</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p className="text-green-100 text-sm">Direct referrals to leading MEP and construction companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore More at Trinkets Institute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">All Engineering Courses</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of engineering and design courses.</p>
              <Link href="/courses" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View All Courses
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Placement Services</h3>
              <p className="text-gray-600 mb-4">Learn about our comprehensive placement assistance program.</p>
              <Link href="/placements" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Placement Details
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Student Success Stories</h3>
              <p className="text-gray-600 mb-4">Read testimonials from our successful HVAC engineering graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized HVAC training solutions for engineering teams.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced FAQ Section for Voice Search */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-lg mr-2">❓</span>
              <span className="font-semibold">HVAC System Design Course FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                HVAC System Design Course in Mumbai
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get answers to all your questions about our HVAC System Design course, placement opportunities, 
              and career prospects in Mumbai&apos;s HVAC and MEP industry.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="space-y-6 animate-slideUp">
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">🕐</span>
                      What is the duration of HVAC System Design course in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our comprehensive HVAC System Design course spans 6 months with flexible scheduling options. 
                      We offer weekend batches, weekday batches, and fast-track intensive programs. Each batch 
                      includes 200+ hours of practical training covering HVAC fundamentals, software mastery, 
                      and real project exposure.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">💻</span>
                      Which software will I learn in HVAC System Design course in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You&apos;ll master AutoCAD MEP, Revit MEP, HAP (Hourly Analysis Program), TRACE 700, and other 
                      industry-standard HVAC design software. These are the most demanded software in Mumbai&apos;s 
                      HVAC industry. Our curriculum also covers Excel calculations for load analysis and system sizing.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">💰</span>
                      What is the fee structure for HVAC System Design course in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our HVAC System Design course fee is highly competitive with flexible payment options. 
                      We offer EMI facilities, early bird discounts, and group discounts. The course fee 
                      includes all software licenses, project materials, and placement assistance. Contact us 
                      for current pricing and available scholarships.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">🎓</span>
                      What qualifications do I need for HVAC System Design course?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Candidates with Diploma/BE/B.Tech in Mechanical, Electrical, or Civil Engineering can join. 
                      Fresh graduates, working professionals, and career changers are welcome. Basic knowledge 
                      of engineering concepts is beneficial but not mandatory as we start from HVAC fundamentals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6 animate-slideUp" style={{animationDelay: '0.2s'}}>
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">📈</span>
                      What is the placement record for HVAC students in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We maintain 100% placement assistance with 95% successful job placements in Mumbai&apos;s top 
                      HVAC companies including Johnson Controls, Honeywell, Carrier, and Trane. Our students 
                      receive starting packages from ₹5-12 LPA based on experience and skills. We have partnerships 
                      with 150+ HVAC companies in Mumbai.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">🚀</span>
                      Is HVAC System Design course suitable for freshers in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Absolutely! Our HVAC System Design course is specifically designed for freshers and career 
                      starters. We begin with fundamental concepts of thermodynamics, heat transfer, and psychrometrics 
                      before advancing to complex HVAC system design and software training. 75% of our students 
                      are fresh graduates who successfully transition to HVAC careers.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">💼</span>
                      What career opportunities after HVAC course completion in Mumbai?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Career opportunities include HVAC Design Engineer, MEP Consultant, Building Services Engineer, 
                      Energy Analyst, HVAC Project Manager, and Commissioning Engineer roles. Mumbai&apos;s booming 
                      construction sector offers positions in consultancy firms, HVAC manufacturers, real estate 
                      developers, and green building projects.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-start">
                      <span className="text-2xl mr-3 mt-1">🏗️</span>
                      Do you provide hands-on project training in HVAC course?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes! Our HVAC course includes live project training on actual Mumbai construction projects. 
                      Students work on commercial, residential, and industrial HVAC designs. We organize site visits 
                      to ongoing HVAC projects in Mumbai, providing real-world exposure to HVAC installation, 
                      commissioning, and maintenance processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action in FAQ */}
            <div className="text-center mt-16 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your HVAC Engineering Career in Mumbai?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join thousands of successful HVAC engineers who started their journey with us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Book Free Counseling
                  </Link>
                  <Link
                    href="#course-details"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    📋 Download Syllabus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/hvac-system-design"
          />
          <div className="mt-8 text-center">
            <Link href="/courses" className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
              🎯 Discover All Our Engineering Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Mumbai Local SEO Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20" id="mumbai-benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-lg mr-2">🏙️</span>
              <span className="font-semibold">Why Mumbai for HVAC Engineering Career</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                HVAC Engineering Opportunities in Mumbai
              </span>
              <br />
              <span className="text-gray-700">India&apos;s HVAC Industry Hub</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Mumbai leads India&apos;s HVAC industry with the highest demand for HVAC engineers. From high-rise 
              commercial buildings in BKC to luxury residential projects in South Mumbai, the city offers 
              unparalleled career opportunities for HVAC professionals.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Major HVAC Projects */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 animate-slideUp">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Major HVAC Projects Mumbai</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Jio World Centre BKC - Central HVAC
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Palais Royale Worli - Luxury HVAC
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Navi Mumbai Airport Terminal
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Mumbai Metro Stations HVAC
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Lodha World Towers HVAC
                  </li>
                </ul>
              </div>

              {/* Top HVAC Companies */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 animate-slideUp" style={{animationDelay: '0.1s'}}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Top HVAC Companies Mumbai</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Johnson Controls India
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Honeywell International
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Carrier Aircon India
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Trane Technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Blue Star Limited
                  </li>
                </ul>
              </div>

              {/* HVAC Salary Prospects */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 animate-slideUp" style={{animationDelay: '0.2s'}}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Mumbai HVAC Salary Range</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Fresher: ₹5-8 LPA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    2-5 Years: ₹8-15 LPA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    5-10 Years: ₹15-25 LPA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Senior Level: ₹25-40 LPA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Consultant: ₹40+ LPA
                  </li>
                </ul>
              </div>
            </div>

            {/* Mumbai HVAC Market Stats */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Mumbai HVAC Market Facts</h3>
                <p className="text-blue-100 text-lg">
                  Why Mumbai is the Best Place for HVAC Engineering Career Growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">₹3L Cr</div>
                  <div className="text-blue-200">Annual HVAC Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">12,000+</div>
                  <div className="text-blue-200">HVAC Engineers Required</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">300+</div>
                  <div className="text-blue-200">HVAC Projects Ongoing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">45%</div>
                  <div className="text-blue-200">India&apos;s HVAC Hub</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">🚀</span>
                  Start Your Mumbai HVAC Career Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your HVAC Design Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful HVAC engineers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>1st December 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 25 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection 
        title="Visit Our HVAC Training Centers"
        subtitle="Experience our advanced HVAC labs and simulation software across multiple locations"
        compact={true}
      />

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              View All Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}