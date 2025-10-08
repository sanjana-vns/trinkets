import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'AutoCAD Design Course in Mumbai | Best AutoCAD Training Institute | 100% Placement',
  description: 'Master AutoCAD Design course in Mumbai at Trinkets Institute. Learn 2D/3D AutoCAD, Inventor, SolidWorks with expert trainers. Real project training, 100% placement assistance in design & manufacturing industry.',
  keywords: [
    'autocad design course in mumbai',
    'autocad training mumbai',
    'autocad course mumbai',
    'autocad design training mumbai',
    'autocad mechanical design mumbai',
    'cad design course mumbai',
    'autocad certification mumbai',
    'autocad institute mumbai',
    'autocad classes mumbai',
    'best autocad course mumbai',
    '2d autocad course mumbai',
    '3d autocad training mumbai',
    'autocad inventor course mumbai',
    'solidworks training mumbai',
    'mechanical design course mumbai',
    'cad training institute mumbai',
    'autocad drafting course mumbai',
    'technical drawing course mumbai',
    'engineering design course mumbai',
    'product design course mumbai',
    'machine design training mumbai',
    'manufacturing design mumbai',
    'autocad design jobs mumbai',
    'cad engineer jobs mumbai',
    'design engineer training mumbai',
    'autocad placement mumbai',
    'mumbai autocad training center',
    'autocad software training mumbai',
    'professional autocad course',
    'trinkets institute mumbai',
    'autocad course duration mumbai',
    'mumbai engineering design training',
    'autocad career mumbai'
  ],
  authors: [{ name: 'Trinkets Institute Mumbai' }],
  creator: 'Trinkets Institute - AutoCAD Design Training Mumbai',
  publisher: 'Trinkets Institute',
  category: 'AutoCAD Design Education',
  classification: 'AutoCAD Design Training Course',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/autocad-mechanical-design',
  },
  openGraph: {
    title: 'AutoCAD Design Course in Mumbai | #1 AutoCAD Training | 100% Placement',
    description: 'Join Mumbai\'s top AutoCAD Design course at Trinkets Institute. Master AutoCAD design with expert trainers. Real project training, 100% placement assistance in design & manufacturing companies.',
    url: 'https://trinketsinstitute.com/courses/autocad-mechanical-design',
    siteName: 'Trinkets Institute Mumbai',
    images: [
      {
        url: '/images/autocad-design-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoCAD Design Course in Mumbai - Best AutoCAD Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoCAD Design Course in Mumbai | Best AutoCAD Training Institute',
    description: 'Master AutoCAD Design in Mumbai. Expert-led training, real projects, 100% placement assistance. Join Trinkets Institute today!',
    images: ['/images/autocad-design-course-mumbai-twitter.jpg'],
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

export default function AutoCADMechanicalDesignCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "AutoCAD Design Course in Mumbai",
        "description": "Comprehensive AutoCAD Design training in Mumbai covering 2D/3D design, AutoCAD Inventor, and SolidWorks. Learn from expert designers with real project exposure and 100% placement assistance.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Trinkets Institute",
          "description": "Premier AutoCAD design training institute in Mumbai",
          "url": "https://trinketsinstitute.com",
          "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "AutoCAD Design Training Center",
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
          "category": "AutoCAD Design Training",
          "availability": "https://schema.org/InStock"
        },
        "courseMode": ["classroom", "online", "blended"],
        "educationalLevel": "Professional",
        "teaches": [
          "AutoCAD 2D Design",
          "AutoCAD 3D Modeling",
          "AutoCAD Inventor",
          "SolidWorks Design",
          "Mechanical Design",
          "Technical Drafting",
          "Product Design",
          "Manufacturing Design",
          "CAD Certification",
          "Design Engineering"
        ],
        "timeRequired": "P4M",
        "inLanguage": "en-IN",
        "isAccessibleForFree": false,
        "educationalUse": "Professional Development",
        "learningResourceType": "Course",
        "educationalAlignment": {
          "@type": "AlignmentObject",
          "alignmentType": "teaches",
          "educationalFramework": "AutoCAD Design Engineering",
          "targetName": "AutoCAD Design Professional"
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "Engineers, Fresh Graduates, Working Professionals, Design Students"
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
          "startDate": "2024-11-15",
          "duration": "P4M",
          "instructor": {
            "@type": "Person",
            "name": "AutoCAD Design Faculty",
            "description": "Expert AutoCAD designers with 12+ years industry experience"
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Trinkets Institute - AutoCAD Training Mumbai",
        "description": "Leading AutoCAD Design training institute in Mumbai offering comprehensive courses in 2D/3D AutoCAD, Inventor, and SolidWorks.",
        "url": "https://trinketsinstitute.com/courses/autocad-mechanical-design",
        "telephone": "+91-9876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "AutoCAD Training Center",
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
        "servesCuisine": "Education",
        "areaServed": {
          "@type": "City",
          "name": "Mumbai"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AutoCAD Design Courses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "AutoCAD Design Course in Mumbai"
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
            "name": "What is the duration of AutoCAD Design course in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our comprehensive AutoCAD Design course in Mumbai spans 4 months with flexible scheduling options including weekend batches, weekday batches, and fast-track programs."
            }
          },
          {
            "@type": "Question",
            "name": "Which AutoCAD software will I learn in Mumbai course?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You'll master AutoCAD 2D, AutoCAD 3D, AutoCAD Inventor, SolidWorks, and other industry-standard design software used in Mumbai's manufacturing and design industry."
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
      <section className="relative min-h-screen bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden" id="hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-float-animated"></div>
          
          {/* CAD Design Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({length: 144}).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 animate-slideUp">
              {/* Course Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-full shadow-lg animate-fadeIn">
                <span className="text-2xl mr-3">🎨</span>
                <span className="font-bold text-lg">AutoCAD Design Course Mumbai</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Best AutoCAD Design
                </span>
                <br />
                <span className="text-white">Course in Mumbai</span>
                <br />
                <span className="text-2xl lg:text-3xl font-normal text-teal-200 mt-4 block">
                  Master 2D/3D Design, Inventor & SolidWorks
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-teal-100 leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
                Join Mumbai&apos;s premier AutoCAD Design training institute. Learn from industry experts, work on real 
                projects, and get 100% placement assistance in top design companies across Mumbai&apos;s manufacturing industry.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 animate-slideUp" style={{animationDelay: '0.6s'}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="font-semibold">4 Months Duration</div>
                  <div className="text-sm text-teal-200">Flexible Batches</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-semibold">4 CAD Software</div>
                  <div className="text-sm text-teal-200">AutoCAD, Inventor, SolidWorks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold">Mumbai Location</div>
                  <div className="text-sm text-teal-200">Prime Training Center</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">100% Placement</div>
                  <div className="text-sm text-teal-200">Guaranteed Assistance</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{animationDelay: '0.8s'}}>
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  Enroll in Mumbai&apos;s Best AutoCAD Course
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="#course-details"
                  className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">📋</span>
                  Download Syllabus
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">⬇</span>
                </Link>
              </div>
            </div>

            {/* Right Content - AutoCAD Software Showcase */}
            <div className="lg:w-1/2 mt-16 lg:mt-0 animate-slideDown" style={{animationDelay: '1s'}}>
              <div className="relative">
                {/* Main Software Grid */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* AutoCAD 2D */}
                  <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 animate-float">
                    <div className="text-4xl mb-4">📐</div>
                    <h3 className="text-xl font-bold mb-2">AutoCAD 2D</h3>
                    <p className="text-sm text-teal-200">Technical Drafting & Design</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Industry Standard
                    </div>
                  </div>

                  {/* AutoCAD 3D */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-float-reverse">
                    <div className="text-4xl mb-4">🗂️</div>
                    <h3 className="text-xl font-bold mb-2">AutoCAD 3D</h3>
                    <p className="text-sm text-teal-200">3D Modeling & Visualization</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      3D Design
                    </div>
                  </div>

                  {/* AutoCAD Inventor */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 animate-float-animated">
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="text-xl font-bold mb-2">Inventor</h3>
                    <p className="text-sm text-teal-200">Parametric Design</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Professional
                    </div>
                  </div>

                  {/* SolidWorks */}
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 animate-float">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-bold mb-2">SolidWorks</h3>
                    <p className="text-sm text-teal-200">Advanced Product Design</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      CAD Excellence
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
                  <div className="text-2xl font-bold text-teal-400">800+</div>
                  <div className="text-sm text-teal-200">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">96%</div>
                  <div className="text-sm text-teal-200">Placement Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">12+</div>
                  <div className="text-sm text-teal-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">250+</div>
                  <div className="text-sm text-teal-200">Hiring Partners</div>
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
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-teal-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <div className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-lg mr-2">🎯</span>
                <span className="font-semibold">Professional AutoCAD Design Course</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Best AutoCAD Design Course in Mumbai
                </span>
                <br />
                <span className="text-gray-800">Master CAD Design with Industry Experts</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Transform your career with Mumbai&apos;s most comprehensive AutoCAD Design course. Learn from industry 
                experts, master professional software, and get guaranteed placement assistance in Mumbai&apos;s top 
                design and manufacturing companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slideUp">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-teal-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">📚</span>
                    Why Choose Our AutoCAD Course in Mumbai?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Comprehensive AutoCAD training from 2D drafting to 3D modeling",
                      "Master AutoCAD, Inventor, SolidWorks with hands-on practice",
                      "Real Mumbai manufacturing project training and industry exposure",
                      "100% placement assistance in top design companies across Mumbai",
                      "Expert faculty with 12+ years CAD industry experience in Mumbai",
                      "Live project exposure with leading Mumbai design consultancies"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-teal-800 transition-colors">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AutoCAD Software Expertise */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">💻</span>
                    AutoCAD Software Mastery
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "AutoCAD 2D", desc: "Technical Drafting", color: "from-teal-400 to-cyan-500" },
                      { name: "AutoCAD 3D", desc: "3D Modeling", color: "from-cyan-400 to-blue-500" },
                      { name: "Inventor", desc: "Parametric Design", color: "from-blue-400 to-purple-500" },
                      { name: "SolidWorks", desc: "Product Design", color: "from-green-400 to-teal-500" }
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
                    Mumbai Design Industry Advantage
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Learn from Mumbai's leading design projects and case studies",
                      "Network with top CAD professionals in Mumbai's manufacturing sector",
                      "Access to Mumbai's extensive design job market and opportunities",
                      "Training aligned with Mumbai's industry standards and requirements",
                      "Site visits to ongoing design projects across Mumbai",
                      "Guest lectures from Mumbai's renowned design engineers"
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
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🎖️</span>
                    Course Highlights
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Duration", value: "4 Months", icon: "⏱️" },
                      { label: "Mode", value: "Classroom/Online", icon: "💻" },
                      { label: "Projects", value: "Live Industry", icon: "🏗️" },
                      { label: "Certification", value: "Industry Recognized", icon: "🏆" },
                      { label: "Placement", value: "100% Assistance", icon: "🎯" },
                      { label: "Location", value: "Mumbai Center", icon: "📍" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="font-semibold text-green-800 text-sm">{item.label}</div>
                        <div className="text-green-600 text-xs">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fadeIn">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Start Your AutoCAD Design Journey in Mumbai Today!</h3>
                <p className="text-teal-100 mb-6 text-lg">
                  Join Mumbai&apos;s most trusted AutoCAD training institute with proven placement record
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Book Free Demo Class
                  </Link>
                  <Link
                    href="#course-curriculum"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD 2D</h3>
              <p className="text-teal-100 mb-4">Technical Drafting & Design</p>
              <ul className="space-y-2 text-teal-100 text-sm">
                <li>• 2D Drawing Commands</li>
                <li>• Layer Management</li>
                <li>• Dimensioning & Annotation</li>
                <li>• Block Creation</li>
                <li>• Plot & Print Setup</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD 3D</h3>
              <p className="text-cyan-100 mb-4">3D Modeling & Visualization</p>
              <ul className="space-y-2 text-cyan-100 text-sm">
                <li>• 3D Solid Modeling</li>
                <li>• Surface Modeling</li>
                <li>• 3D Operations</li>
                <li>• Rendering & Materials</li>
                <li>• Assembly Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD Inventor</h3>
              <p className="text-blue-100 mb-4">Parametric Design & Assembly</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Parametric Modeling</li>
                <li>• Assembly Constraints</li>
                <li>• Sheet Metal Design</li>
                <li>• Stress Analysis</li>
                <li>• Drawing Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SolidWorks</h3>
              <p className="text-green-100 mb-4">Advanced Product Design</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Feature-based Modeling</li>
                <li>• Assembly Design</li>
                <li>• Simulation & Analysis</li>
                <li>• Drawing Documentation</li>
                <li>• Design Automation</li>
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
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Module 1-2: Foundation & 2D Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">CAD Fundamentals</h4>
                  <p className="text-gray-600 text-sm">AutoCAD interface, coordinate systems, drawing setup, basic commands</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">2D Drafting Techniques</h4>
                  <p className="text-gray-600 text-sm">Technical drawing, orthographic projections, sectional views, detailing</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Mechanical Components</h4>
                  <p className="text-gray-600 text-sm">Machine elements, fasteners, bearings, gears, mechanical assemblies</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-cyan-600">Module 3-4: 3D Modeling & Advanced Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">3D Solid Modeling</h4>
                  <p className="text-gray-600 text-sm">Extrude, revolve, sweep, loft, boolean operations</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Parametric Design</h4>
                  <p className="text-gray-600 text-sm">Feature-based modeling, constraints, design intent, modifications</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Product Development</h4>
                  <p className="text-gray-600 text-sm">Design for manufacturing, assembly design, design optimization</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">AutoCAD 2D (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic drawing commands</li>
                    <li>• Object modification and editing</li>
                    <li>• Layers, blocks, and templates</li>
                    <li>• Dimensioning and annotation</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">AutoCAD 3D (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 3D coordinate systems and UCS</li>
                    <li>• Solid modeling techniques</li>
                    <li>• 3D editing and modifications</li>
                    <li>• Rendering and visualization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Inventor & SolidWorks (Weeks 9-16)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Parametric modeling concepts</li>
                    <li>• Assembly design and constraints</li>
                    <li>• Sheet metal and surface design</li>
                    <li>• Drawing documentation and standards</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete product design project including conceptual design, 3D modeling, 
                  assembly creation, and manufacturing drawings using all software tools.
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
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">CAD Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹3-7 LPA</p>
              <p className="text-sm text-gray-500">Create technical drawings and 3D models for manufacturing</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Mechanical Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-9 LPA</p>
              <p className="text-sm text-gray-500">Design mechanical components and systems for various industries</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Product Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹5-12 LPA</p>
              <p className="text-sm text-gray-500">Develop innovative products from concept to manufacturing</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">CAD Drafter</h3>
              <p className="text-gray-600 mb-3">₹2.5-5 LPA</p>
              <p className="text-sm text-gray-500">Create detailed technical drawings and documentation</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Manufacturing Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-8 LPA</p>
              <p className="text-sm text-gray-500">Optimize manufacturing processes and design for production</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Design Consultant</h3>
              <p className="text-gray-600 mb-3">₹6-15 LPA</p>
              <p className="text-sm text-gray-500">Provide specialized design services and technical solutions</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">Tata Motors</div>
              <div className="bg-white p-3 rounded shadow">Mahindra</div>
              <div className="bg-white p-3 rounded shadow">Bajaj Auto</div>
              <div className="bg-white p-3 rounded shadow">Hero MotoCorp</div>
              <div className="bg-white p-3 rounded shadow">Maruti Suzuki</div>
              <div className="bg-white p-3 rounded shadow">Hyundai</div>
              <div className="bg-white p-3 rounded shadow">L&T</div>
              <div className="bg-white p-3 rounded shadow">BHEL</div>
              <div className="bg-white p-3 rounded shadow">Godrej</div>
              <div className="bg-white p-3 rounded shadow">Thermax</div>
              <div className="bg-white p-3 rounded shadow">Cummins</div>
              <div className="bg-white p-3 rounded shadow">Bosch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-teal-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-teal-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹10L</div>
              <div className="text-teal-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">96%</div>
              <div className="text-teal-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Portfolio Development</h3>
              <p className="text-teal-100 text-sm">Build impressive design portfolio showcasing your CAD skills and projects</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p className="text-teal-100 text-sm">Direct partnerships with leading manufacturing and design companies</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Skill Certification</h3>
              <p className="text-teal-100 text-sm">Industry-recognized AutoCAD and CAD software certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section for Voice Search */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 relative overflow-hidden" id="faqs">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float-reverse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl mr-3">❓</span>
              <span className="font-bold text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                AutoCAD Design Course Mumbai
              </span>
              <br />
              <span className="text-gray-800">Everything You Need to Know</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get answers to the most common questions about our AutoCAD Design course in Mumbai. 
              Learn about training duration, placement assistance, and career opportunities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  question: "What is the best AutoCAD Design course in Mumbai?",
                  answer: "Our AutoCAD Design course in Mumbai is the most comprehensive training program covering AutoCAD 2D/3D, Inventor, and SolidWorks. With 12+ years of experience, we provide industry-expert training, live project exposure, and guaranteed placement assistance in Mumbai's top design companies. Our course includes hands-on practice with real Mumbai manufacturing projects and 100% job placement support."
                },
                {
                  question: "How long is the AutoCAD Design course duration in Mumbai?",
                  answer: "Our AutoCAD Design course in Mumbai is a comprehensive 4-month program. This includes 2 months of intensive AutoCAD 2D and 3D training, 1 month of advanced software like Inventor and SolidWorks, and 1 month of live project training with Mumbai-based design companies. We also offer flexible weekend batches for working professionals in Mumbai."
                },
                {
                  question: "Is placement assistance provided for AutoCAD Design course in Mumbai?",
                  answer: "Yes! We provide 100% placement assistance for our AutoCAD Design course in Mumbai. Our placement team has tie-ups with 200+ design companies, manufacturing firms, and engineering consultancies across Mumbai, Pune, and Maharashtra. We guarantee interview calls and provide career counseling, resume building, and interview preparation to ensure successful job placement in Mumbai's design industry."
                },
                {
                  question: "Which companies in Mumbai hire AutoCAD Design professionals?",
                  answer: "Mumbai has excellent opportunities for AutoCAD Design professionals. Top hiring companies include Larsen & Toubro, Godrej, Bajaj Auto, Mahindra, Reliance Industries, Siemens, and numerous design consultancies in Mumbai. Our students work in automotive, manufacturing, aerospace, and product design companies across Mumbai, Navi Mumbai, and Thane with attractive salary packages."
                },
                {
                  question: "What software is covered in AutoCAD Design course Mumbai?",
                  answer: "Our AutoCAD Design course in Mumbai covers comprehensive software training including AutoCAD 2D drafting, AutoCAD 3D modeling, Autodesk Inventor for parametric design, SolidWorks for product design, and basics of CAM software. Students get hands-on experience with the latest versions used by Mumbai's leading design companies and manufacturing industries."
                },
                {
                  question: "Can I learn AutoCAD Design course online in Mumbai?",
                  answer: "Yes! We offer both classroom and online AutoCAD Design course options in Mumbai. Our online training includes live interactive sessions, recorded lectures, software access, and virtual lab practice. Online students receive the same quality training, placement assistance, and certification as classroom students. We also provide hybrid options for Mumbai students who prefer flexible learning schedules."
                },
                {
                  question: "What are the career opportunities after AutoCAD Design course in Mumbai?",
                  answer: "After completing our AutoCAD Design course in Mumbai, you can work as CAD Designer, Mechanical Designer, Product Designer, Design Engineer, Drafting Technician, or 3D Modeler. Mumbai's manufacturing hub offers excellent opportunities in automotive, aerospace, consumer goods, and engineering services with starting salaries ranging from ₹3-6 lakhs per annum."
                },
                {
                  question: "Do you provide AutoCAD Design certification in Mumbai?",
                  answer: "Yes, we provide industry-recognized AutoCAD Design certification in Mumbai upon course completion. Our certificate is valued by Mumbai's top employers and includes proficiency in AutoCAD, Inventor, and SolidWorks. We also assist students in obtaining Autodesk official certifications to enhance their credibility in Mumbai's competitive design job market."
                },
                {
                  question: "What is the eligibility for AutoCAD Design course in Mumbai?",
                  answer: "Our AutoCAD Design course in Mumbai is open to students from any educational background. Minimum qualification is 10th pass, though diploma/degree in mechanical, civil, or electrical engineering is preferred. We welcome fresh graduates, working professionals, and career changers looking to enter Mumbai's thriving design industry. Basic computer knowledge is helpful but not mandatory."
                },
                {
                  question: "Are there weekend batches for AutoCAD Design course in Mumbai?",
                  answer: "Yes, we offer flexible weekend AutoCAD Design course batches in Mumbai for working professionals. Weekend batches run on Saturdays and Sundays with extended hours to cover the complete curriculum. This allows Mumbai working professionals to upgrade their skills without affecting their current job commitments while pursuing career advancement in design."
                },
                {
                  question: "How is practical training provided in AutoCAD Design course Mumbai?",
                  answer: "Our AutoCAD Design course in Mumbai emphasizes hands-on practical training with state-of-the-art computer labs, latest software versions, and real industry projects. Students work on actual design projects from Mumbai companies, visit manufacturing units, and get mentorship from experienced design professionals working in Mumbai's leading engineering firms."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp border border-teal-100" style={{animationDelay: `${index * 0.1}s`}}>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-8 hover:bg-teal-50 transition-colors rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-800 transition-colors leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white transform group-hover:rotate-180 transition-transform duration-300">
                          <span className="text-lg font-bold">+</span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-8 pb-8">
                      <div className="h-px bg-gradient-to-r from-teal-200 to-cyan-200 mb-6"></div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      <div className="mt-4 flex items-center text-teal-600">
                        <span className="text-sm font-semibold">💡 Helpful Answer</span>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Call to Action */}
          <div className="text-center mt-16 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-teal-200">
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl mr-4">🤔</span>
                <h3 className="text-3xl font-bold text-gray-800">Still Have Questions?</h3>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Our admission counselors are here to help you understand everything about our AutoCAD Design course in Mumbai. 
                Get personalized guidance about course details, career prospects, and placement opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📞 Speak to Counselor
                </Link>
                <Link
                  href="#hero"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  📅 Book Free Demo
                </Link>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold">Mumbai Training Center</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">⏰</span>
                  <span className="font-semibold">Flexible Timings</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">💯</span>
                  <span className="font-semibold">100% Placement Assist</span>
                </div>
              </div>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful CAD design graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized AutoCAD training for your design teams.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/autocad-mechanical-design"
          />
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your CAD Design Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful CAD designers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>15th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 30 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-teal-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <Link href="/courses" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  )
}