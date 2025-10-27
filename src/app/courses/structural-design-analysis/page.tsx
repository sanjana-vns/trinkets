import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Building, Calculator, Award, Users, MapPin, Phone, Mail, Clock, Target, CheckCircle, Star, TrendingUp, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Structural Design and Analysis Course in Mumbai | STAAD Pro, ETABS, SAFE Training | Trinkets Institute',
  description: 'Best Structural Design and Analysis Course in Mumbai with 100% placement. Learn STAAD Pro, ETABS, SAFE, SAP2000 from industry experts. Mumbai&apos;s top structural engineering training institute with live projects.',
  keywords: [
    'structural design and analysis course in mumbai',
    'structural design course mumbai',
    'structural analysis course mumbai',
    'STAAD Pro training mumbai',
    'ETABS course mumbai',
    'SAFE software training mumbai',
    'SAP2000 course mumbai',
    'structural engineering course mumbai',
    'civil engineering training mumbai',
    'structural design certification mumbai',
    'building design course mumbai',
    'best structural design course mumbai',
    'structural engineering institute mumbai',
    'structural design training mumbai',
    'structural analysis training mumbai',
    'mumbai structural design course',
    'mumbai civil engineering course',
    'structural engineering jobs mumbai',
    'construction course mumbai',
    'engineering training mumbai',
    'professional structural course mumbai',
    'structural design placement mumbai',
    'mumbai engineering institute',
    'structural consultant training mumbai',
    'civil engineering career mumbai',
    'structural software training mumbai',
    'mumbai infrastructure course',
    'building design training mumbai',
    'structural modeling course mumbai',
    'earthquake engineering mumbai',
    'seismic design course mumbai',
    'foundation design course mumbai',
    'steel structure course mumbai',
    'concrete design training mumbai'
  ],
  authors: [{ name: 'Trinkets Institute Mumbai' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute Mumbai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/structural-design-analysis',
  },
  openGraph: {
    title: 'Best Structural Design and Analysis Course in Mumbai | 100% Placement | Trinkets Institute',
    description: 'Master structural engineering with Mumbai&apos;s top-rated course. Learn STAAD Pro, ETABS, SAFE, SAP2000 with live projects from Mumbai infrastructure. 100% placement assistance guaranteed.',
    url: 'https://trinketsinstitute.com/courses/structural-design-analysis',
    siteName: 'Trinkets Institute Mumbai',
    images: [
      {
        url: '/images/structural-design-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Structural Design and Analysis Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Design and Analysis Course in Mumbai | STAAD Pro, ETABS Training',
    description: 'Join Mumbai&apos;s premier structural engineering course. Learn from industry experts, work on real Mumbai infrastructure projects. 100% placement guaranteed.',
    images: ['/images/structural-design-course-mumbai-twitter.jpg'],
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
    google: 'mumbai-structural-design-course-verification',
  },
}

export default function StructuralDesignAnalysisCourseMumbaiPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://trinketsinstitute.com/courses/structural-design-analysis#course",
        "name": "Structural Design and Analysis Course in Mumbai",
        "description": "Comprehensive structural design and analysis training in Mumbai using STAAD Pro, ETABS, SAFE, and SAP2000. Learn from industry experts with 100% placement assistance.",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://trinketsinstitute.com/#organization",
          "name": "Trinkets Institute",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Engineering Hub, Andheri East",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400069",
            "addressCountry": "IN"
          },
          "telephone": "+91-9820924788",
          "url": "https://trinketsinstitute.com"
        },
        "locationCreated": {
          "@type": "Place",
          "name": "Mumbai",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "category": "Professional Training",
          "availability": "https://schema.org/InStock"
        },
        "courseMode": ["classroom", "online"],
        "educationalLevel": "Professional",
        "teaches": [
          "Structural Design Engineering",
          "STAAD Pro Analysis Mumbai",
          "ETABS Building Modeling",
          "SAFE Foundation Design",
          "SAP2000 Analysis",
          "Mumbai Infrastructure Design",
          "Seismic Design for Mumbai",
          "Steel Structure Design",
          "Concrete Design IS Code"
        ],
        "timeRequired": "P6M",
        "inLanguage": "en-IN",
        "isAccessibleForFree": false,
        "educationalUse": "Professional Development",
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "classroom",
          "location": {
            "@type": "Place",
            "name": "Trinkets Institute Mumbai",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Engineering Hub, Andheri East",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400069",
              "addressCountry": "IN"
            }
          },
          "startDate": "2024-02-01",
          "endDate": "2024-08-01"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://trinketsinstitute.com/courses/structural-design-analysis#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best structural design and analysis course in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trinkets Institute offers the best structural design and analysis course in Mumbai with comprehensive training in STAAD Pro, ETABS, SAFE, and SAP2000. Our course includes live projects from Mumbai infrastructure developments and 100% placement assistance."
            }
          },
          {
            "@type": "Question",
            "name": "How long is the structural design and analysis course in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our structural design and analysis course in Mumbai has a duration of 6 months with flexible timing options including weekday, weekend, and fast-track batches to accommodate working professionals in Mumbai."
            }
          },
          {
            "@type": "Question", 
            "name": "What software is taught in structural design course in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our structural design and analysis course in Mumbai covers STAAD Pro, ETABS, SAFE, and SAP2000 - all industry-standard software used by leading structural engineering firms in Mumbai and across India."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://trinketsinstitute.com/#organization",
        "name": "Trinkets Institute Mumbai",
        "image": "https://trinketsinstitute.com/images/trinkets-institute-mumbai.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Engineering Hub, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400069",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.1136",
          "longitude": "72.8697"
        },
        "telephone": "+91-9820924788",
        "email": "info@trinketsinstitute.com",
        "url": "https://trinketsinstitute.com",
        "openingHours": "Mo-Sa 09:00-18:00",
        "areaServed": {
          "@type": "City",
          "name": "Mumbai"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Creative Hero Section with Mumbai Focus */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400 rounded-lg -rotate-12 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-indigo-300 rounded-full animate-spin"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-blue-300 rounded-lg rotate-45 animate-pulse"></div>
          </div>

          {/* Mumbai Skyline Silhouette Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Mumbai Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                <MapPin className="w-4 h-4 mr-2" />
                Mumbai&apos;s Premier Structural Engineering Institute
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent leading-tight">
                Structural Design and Analysis Course in Mumbai
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Master building design with <span className="font-semibold text-yellow-300">STAAD Pro, ETABS, SAFE & SAP2000</span> - Learn from Mumbai&apos;s infrastructure experts with <span className="font-semibold text-green-300">100% placement guarantee</span>
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-300" />
                    <span className="font-semibold">6 Months Duration</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 mr-2 text-purple-300" />
                    <span className="font-semibold">Live Mumbai Projects</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-300" />
                    <span className="font-semibold">100% Placement</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact#get-expert-guidance" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Enroll Now - Limited Seats
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-blue-200">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm">4.9/5 Student Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">2000+ Students Placed</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai-Focused Course Overview */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-600 to-purple-600 mr-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Why Choose Our Structural Design and Analysis Course in Mumbai?
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Mumbai&apos;s fastest-growing infrastructure demands skilled structural engineers. Our comprehensive 
                  <strong> structural design and analysis course in Mumbai</strong> is specifically designed to meet 
                  the industry requirements of Mumbai&apos;s construction boom, including high-rise buildings, 
                  metro projects, and coastal infrastructure.
                </p>
                
                <h3 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                  What You&apos;ll Master in Mumbai
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Complete structural design for Mumbai&apos;s high-rise buildings",
                    "Seismic analysis specific to Mumbai&apos;s Zone III requirements",
                    "Coastal structure design for Mumbai&apos;s marine environment",
                    "Steel and concrete design as per latest IS codes",
                    "Foundation design for Mumbai&apos;s soil conditions",
                    "Wind load analysis for Mumbai&apos;s coastal winds",
                    "Metro and infrastructure project methodologies",
                    "Mumbai building regulations and approval processes"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 group-hover:text-blue-700 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-700 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-orange-500" />
                  Mumbai Industry Advantages
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <Clock className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-blue-800 mb-2">6 Months</h4>
                    <p className="text-blue-600 text-sm">Intensive Training</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <Users className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-purple-800 mb-2">1:10 Ratio</h4>
                    <p className="text-purple-600 text-sm">Instructor to Student</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                    <Building className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-semibold text-green-800 mb-2">Live Projects</h4>
                    <p className="text-green-600 text-sm">Mumbai Infrastructure</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                    <Award className="w-8 h-8 text-orange-600 mb-3" />
                    <h4 className="font-semibold text-orange-800 mb-2">Certified</h4>
                    <p className="text-orange-600 text-sm">Industry Recognition</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-red-500 mr-2" />
                    Mumbai Project Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Bandra-Worli Sea Link", "Mumbai Metro", "High-rise Towers", 
                      "Coastal Buildings", "IT Parks", "Residential Complexes",
                      "Bridge Projects", "Industrial Structures"
                    ].map((project, index) => (
                      <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Training with Mumbai Context */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master Industry Software Used in Mumbai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the exact software tools used by Mumbai&apos;s top structural engineering firms for iconic projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "STAAD Pro",
                subtitle: "Structural Analysis & Design",
                color: "from-purple-600 to-purple-700",
                icon: Calculator,
                features: [
                  "3D Structural Modeling",
                  "Mumbai Building Code Analysis", 
                  "Steel & Concrete Design",
                  "Seismic Zone III Analysis",
                  "Wind Load for Coastal Areas"
                ]
              },
              {
                name: "ETABS",
                subtitle: "Building Analysis & Design",
                color: "from-blue-600 to-blue-700",
                icon: Building,
                features: [
                  "High-rise Building Modeling",
                  "Mumbai Seismic Analysis",
                  "Wind Load Analysis",
                  "Performance-based Design",
                  "IS Code Compliance"
                ]
              },
              {
                name: "SAFE",
                subtitle: "Foundation & Slab Design",
                color: "from-indigo-600 to-indigo-700", 
                icon: Shield,
                features: [
                  "Mumbai Soil Foundation Design",
                  "Coastal Structure Analysis",
                  "Pile Foundation Design",
                  "Slab Design & Analysis",
                  "Punching Shear Checks"
                ]
              },
              {
                name: "SAP2000",
                subtitle: "Advanced Analysis",
                color: "from-teal-600 to-teal-700",
                icon: Zap,
                features: [
                  "Nonlinear Analysis",
                  "Bridge Design (Mumbai)",
                  "Dynamic Analysis",
                  "Cable Structure Design",
                  "Time History Analysis"
                ]
              }
            ].map((software, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${software.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <software.icon className="w-full h-full" />
                  </div>
                  
                  <div className="relative z-10">
                    <software.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">{software.name}</h3>
                    <p className="text-white/80 mb-6 text-sm">{software.subtitle}</p>
                    
                    <ul className="space-y-2">
                      {software.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-white/90 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative FAQ Section with Mumbai VSO */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-600 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-600 rounded-lg -rotate-12 animate-bounce"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-2 h-8 bg-blue-600 mr-3"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-2 h-8 bg-purple-600 ml-3"></div>
                </div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Get answers to common questions about our <span className="font-semibold text-blue-700">structural design and analysis course in Mumbai</span>
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  {
                    question: "What is the best structural design and analysis course in Mumbai?",
                    answer: "Trinkets Institute offers the best structural design and analysis course in Mumbai with comprehensive training in STAAD Pro, ETABS, SAFE, and SAP2000. Our course is specifically designed for Mumbai's infrastructure needs, covering high-rise buildings, coastal structures, and seismic design for Zone III. With 100% placement assistance and live projects from Mumbai's construction industry, we are Mumbai's top-rated structural engineering training institute."
                  },
                  {
                    question: "How long is the structural design and analysis course in Mumbai?",
                    answer: "Our structural design and analysis course in Mumbai has a duration of 6 months (180 hours) with flexible scheduling options. We offer weekday batches (Mon-Fri), weekend classes (Sat-Sun), and fast-track intensive programs to accommodate working professionals in Mumbai. The course includes both theoretical concepts and practical software training."
                  },
                  {
                    question: "What software is taught in structural design course in Mumbai?",
                    answer: "Our structural design and analysis course in Mumbai covers all industry-standard software: STAAD Pro for structural analysis, ETABS for building design, SAFE for foundation and slab design, and SAP2000 for advanced structural analysis. These are the exact software tools used by Mumbai's leading structural engineering firms for major infrastructure projects."
                  },
                  {
                    question: "Do you provide placement assistance after structural design course in Mumbai?",
                    answer: "Yes! We provide 100% placement assistance for our structural design and analysis course in Mumbai. Our dedicated placement cell has partnerships with 300+ construction companies, consulting firms, and infrastructure developers in Mumbai and Maharashtra. We have successfully placed 2000+ structural engineers with leading companies like L&T, Tata Projects, and Shapoorji Pallonji."
                  },
                  {
                    question: "What are the career opportunities after structural design course in Mumbai?",
                    answer: "After completing our structural design and analysis course in Mumbai, you can work as Structural Design Engineer (₹4-9 LPA), Structural Consultant (₹6-15 LPA), Project Manager (₹8-18 LPA), or Bridge Design Engineer (₹7-14 LPA) in Mumbai's booming construction sector. Mumbai offers excellent opportunities in high-rise construction, infrastructure development, and coastal engineering projects."
                  },
                  {
                    question: "Is prior experience required for structural design course in Mumbai?",
                    answer: "No prior experience is required for our structural design and analysis course in Mumbai. We start with fundamental structural engineering concepts and gradually progress to advanced topics. The course is designed for civil engineering graduates, working professionals, and anyone interested in structural design. Our expert instructors ensure thorough understanding of both theory and practical applications in Mumbai's construction industry."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 transform hover:-translate-y-1">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold">Q</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Mumbai Info Cards */}
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-semibold mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Mumbai Location Advantage
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    Located in Andheri East with easy access to Mumbai&apos;s major construction hubs, 
                    consulting firms, and infrastructure projects. Perfect connectivity via metro, 
                    local trains, and bus networks.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Mumbai Industry Focus
                  </h4>
                  <p className="text-purple-100 leading-relaxed">
                    Curriculum specifically designed for Mumbai&apos;s construction boom including 
                    high-rises, metro projects, coastal infrastructure, and seismic design 
                    requirements for Zone III.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA with Mumbai Focus */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400 rounded-lg -rotate-12 animate-bounce"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Structural Engineering Career in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join Mumbai&apos;s premier structural design and analysis course and become part of the city&apos;s infrastructure transformation
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91-9820924788</span>
                </div>
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@trinketsinstitute.com</span>
                </div>
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Andheri East, Mumbai</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact#get-expert-guidance" 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Now - Mumbai Batch
                </Link>
                <Link 
                  href="/contact#get-expert-guidance" 
                  className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Mumbai Visit
                </Link>
              </div>

              <p className="text-blue-200 text-sm">
                🚀 <strong>Special Mumbai Offer:</strong> Early Bird Discount + Free Mumbai Project Portfolio
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
