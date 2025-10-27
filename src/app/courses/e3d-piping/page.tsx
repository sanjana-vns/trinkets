import { Metadata } from 'next'
import Link from 'next/link'
import { Cpu, Zap, Layers, Settings, Building, Users, Award, Star, Target, CheckCircle, ArrowRight, Play, Download, MapPin, Phone, Mail, BookOpen, TrendingUp, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
  description: 'Best E3D Piping course in Mumbai with 100% placement assistance. Master AVEVA E3D Design, 3D piping layout, clash detection with live projects. Join Mumbai\'s top E3D training institute.',
  keywords: [
    'E3D Piping Course in Mumbai',
    'AVEVA E3D training Mumbai',
    'E3D Design course Mumbai',
    'E3D Piping training institute Mumbai',
    'AVEVA E3D certification Mumbai',
    'E3D 3D piping design course',
    'E3D piping layout training',
    'E3D clash detection course',
    'E3D plant design Mumbai',
    'E3D equipment modeling course',
    'AVEVA E3D professional training',
    'E3D piping engineering Mumbai',
    'E3D design software training',
    'E3D plant modeling course',
    'E3D piping designer course Mumbai',
    'AVEVA E3D placement Mumbai',
    'E3D training center Mumbai',
    'E3D course fees Mumbai',
    'E3D piping jobs Mumbai',
    'E3D design engineer training',
    'AVEVA E3D institute Mumbai',
    'E3D plant engineering course',
    'E3D modeling training Mumbai',
    'E3D piping design certification',
    'AVEVA E3D career Mumbai',
    'E3D design course with placement',
    'E3D training with job guarantee',
    'Mumbai E3D piping academy',
    'E3D design professional course',
    'AVEVA E3D specialist training',
    'E3D piping layout certification',
    'E3D plant design training Mumbai',
    'E3D engineering course Mumbai'
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
    canonical: '/courses/e3d-piping',
  },
  openGraph: {
    title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
    description: 'Join Mumbai\'s leading E3D Piping course. Master AVEVA E3D Design with 3D piping layout, clash detection & plant modeling. 100% placement assistance.',
    url: 'https://trinketsinstitute.com/courses/e3d-piping',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/e3d-piping-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'E3D Piping Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
    description: 'Master E3D Piping design in Mumbai with AVEVA E3D training. 3D piping layout, clash detection & 100% placement assistance.',
    images: ['/images/e3d-piping-course-mumbai-twitter.jpg'],
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

export default function E3DPipingCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "E3D Piping Course in Mumbai",
    "description": "Comprehensive AVEVA E3D Piping training course in Mumbai covering 3D piping design, plant modeling, clash detection and equipment layout",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Engineering Hub, Andheri East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400069",
        "addressCountry": "IN"
      },
      "url": "https://trinketsinstitute.com",
      "telephone": "+91-9820924788"
    },
    "offers": {
      "@type": "Offer",
      "category": "E3D Piping Training",
      "availability": "https://schema.org/InStock",
      "availableAtOrFrom": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    },
    "courseMode": ["classroom", "online"],
    "educationalLevel": "Professional",
    "teaches": [
      "AVEVA E3D Design Fundamentals",
      "3D Piping Layout Design",
      "Plant Equipment Modeling",
      "Clash Detection & Resolution",
      "Piping Isometric Generation",
      "E3D Database Management",
      "Plant Design Standards",
      "E3D Administration"
    ],
    "timeRequired": "P4M",
    "inLanguage": "en-IN",
    "isAccessibleForFree": false,
    "educationalUse": "Professional Development",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
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
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50">
        {/* Creative Hero Section with 3D Piping Animation */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 text-white py-20 overflow-hidden">
          {/* Animated Background Piping Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-4 bg-green-400 rounded-full rotate-12 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-4 bg-teal-400 rounded-full -rotate-12 animate-bounce"></div>
            <div className="absolute bottom-32 left-32 w-40 h-4 bg-emerald-400 rounded-full rotate-45 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-300 rounded-full animate-spin"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-4 bg-teal-300 rounded-full -rotate-45 animate-bounce"></div>
            
            {/* Pipe Network Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 600">
              <path d="M50 300 L200 300 L200 150 L350 150 L350 450 L500 450" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
              <path d="M500 300 L650 300 L650 200 L800 200 L800 400 L950 400" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
              <circle cx="200" cy="300" r="8" fill="currentColor" className="animate-pulse" />
              <circle cx="350" cy="150" r="8" fill="currentColor" className="animate-pulse" />
              <circle cx="650" cy="300" r="8" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>

          {/* Industrial Grid Background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* E3D Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-green-400/30 text-green-100 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in">
                <Cpu className="w-5 h-5 mr-3 animate-pulse" />
                Mumbai&apos;s Premier AVEVA E3D Training Institute
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-200 via-white to-teal-200 bg-clip-text text-transparent leading-tight">
                E3D Piping Course in Mumbai
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-4xl mx-auto leading-relaxed">
                Master <span className="font-bold text-yellow-300">AVEVA E3D Design</span> with advanced 3D piping, 
                plant modeling & clash detection. <span className="font-bold text-green-300">100% placement guarantee</span> 
                in Mumbai&apos;s booming petrochemical industry.
              </p>

              {/* Key Features Pills with Animation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-green-300 animate-spin" style={{animationDuration: '3s'}} />
                    <span className="font-semibold">4 Months Intensive</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center">
                    <Building className="w-6 h-6 mr-3 text-teal-300 animate-pulse" />
                    <span className="font-semibold">Live Plant Projects</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center">
                    <Target className="w-6 h-6 mr-3 text-emerald-300 animate-bounce" />
                    <span className="font-semibold">100% Job Guarantee</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons with Hover Effects */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link 
                  href="/contact" 
                  className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    Start Your E3D Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/contact" 
                  className="group border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Free Syllabus & Demo
                  </span>
                </Link>
              </div>

              {/* Trust Indicators with Animation */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-green-200">
                <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                  <span className="text-sm font-semibold">4.9/5 Mumbai Rating</span>
                </div>
                <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-green-400 mr-2 animate-pulse" />
                  <span className="text-sm font-semibold">800+ Students Placed</span>
                </div>
                <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-teal-400 mr-2 animate-pulse" />
                  <span className="text-sm font-semibold">AVEVA Certified Institute</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Course Overview with 3D Effects */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-teal-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-4 h-10 bg-gradient-to-b from-green-600 to-teal-600 mr-4 rounded-full"></div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Why Choose Our E3D Piping Course in Mumbai?
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Mumbai&apos;s petrochemical and oil & gas industry demands skilled <strong>E3D piping professionals</strong>. 
                  Our comprehensive course transforms you into an expert AVEVA E3D designer, ready to tackle 
                  complex plant design projects in Mumbai&apos;s thriving industrial sector.
                </p>
                
                <h3 className="text-2xl font-semibold mb-6 text-green-700 flex items-center">
                  <CheckCircle className="w-7 h-7 mr-3 text-emerald-500" />
                  Master E3D Skills in Mumbai
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Complete AVEVA E3D software mastery with advanced features",
                    "3D piping layout design for Mumbai&apos;s petrochemical plants",
                    "Plant equipment modeling and nozzle management",
                    "Advanced clash detection and interference resolution",
                    "Piping isometric generation and documentation",
                    "E3D database management and administration",
                    "Live projects from Mumbai&apos;s Reliance and ONGC facilities",
                    "Industry-standard best practices for plant design"
                  ].map((skill, index) => (
                    <div key={index} className="group flex items-start hover:bg-green-50 p-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4 mt-2 group-hover:animate-pulse"></div>
                      <span className="text-gray-700 group-hover:text-green-700 transition-colors font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-teal-700 flex items-center">
                  <Layers className="w-7 h-7 mr-3 text-orange-500" />
                  Mumbai E3D Industry Advantages
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <Settings className="w-10 h-10 text-green-600 mb-4 group-hover:animate-spin" style={{animationDuration: '2s'}} />
                    <h4 className="font-bold text-green-800 mb-2">4 Months</h4>
                    <p className="text-green-600 text-sm">Intensive E3D Training</p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <Users className="w-10 h-10 text-teal-600 mb-4 group-hover:animate-bounce" />
                    <h4 className="font-bold text-teal-800 mb-2">1:8 Ratio</h4>
                    <p className="text-teal-600 text-sm">Instructor to Student</p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <Building className="w-10 h-10 text-emerald-600 mb-4 group-hover:animate-pulse" />
                    <h4 className="font-bold text-emerald-800 mb-2">Live Plants</h4>
                    <p className="text-emerald-600 text-sm">Mumbai Industry Projects</p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <Award className="w-10 h-10 text-orange-600 mb-4 group-hover:animate-pulse" />
                    <h4 className="font-bold text-orange-800 mb-2">AVEVA Certified</h4>
                    <p className="text-orange-600 text-sm">Industry Recognition</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full -translate-y-16 translate-x-16"></div>
                  <h4 className="font-bold text-gray-800 mb-6 flex items-center relative z-10">
                    <MapPin className="w-6 h-6 text-red-500 mr-3 animate-pulse" />
                    Mumbai E3D Project Portfolio
                  </h4>
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {[
                      "Reliance Refinery", "ONGC Platforms", "Mumbai Port Trust", 
                      "Tata Power Plants", "L&T Hydrocarbon", "Indian Oil Projects",
                      "BPCL Refineries", "Petrofac Plants"
                    ].map((project, index) => (
                      <div key={index} className="bg-white/80 text-gray-700 px-4 py-3 rounded-xl text-sm border border-gray-300 hover:bg-green-50 hover:border-green-300 transition-all duration-200 transform hover:scale-105 font-medium">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Software Training Showcase */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Master AVEVA E3D with Creative Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the industry&apos;s most powerful 3D plant design software with hands-on training from Mumbai&apos;s experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "E3D Fundamentals",
                subtitle: "AVEVA E3D Basics & Interface",
                icon: Cpu,
                color: "from-green-600 to-green-700",
                features: [
                  "E3D Interface Mastery",
                  "Mumbai Project Database Setup", 
                  "3D Navigation & Tools",
                  "Drawing Standards",
                  "File Organization"
                ]
              },
              {
                title: "3D Piping Design",
                subtitle: "Advanced Piping Layout",
                icon: Settings,
                color: "from-teal-600 to-teal-700",
                features: [
                  "Pipe Routing Techniques",
                  "Mumbai Plant Specifications",
                  "Branch Connections",
                  "Support Integration",
                  "Valve & Fitting Placement"
                ]
              },
              {
                title: "Equipment Modeling",
                subtitle: "Plant Equipment Design",
                icon: Building,
                color: "from-emerald-600 to-emerald-700",
                features: [
                  "Equipment Placement",
                  "Nozzle Management",
                  "Vessel & Tank Design",
                  "Pump & Compressor Setup",
                  "Heat Exchanger Modeling"
                ]
              },
              {
                title: "Advanced E3D",
                subtitle: "Clash Detection & Output",
                icon: Zap,
                color: "from-orange-600 to-orange-700",
                features: [
                  "Clash Detection Tools",
                  "Interference Resolution",
                  "Isometric Generation",
                  "Bill of Materials",
                  "Drawing Production"
                ]
              }
            ].map((module, index) => (
              <div key={index} className="group relative">
                <div className={`bg-gradient-to-br ${module.color} text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden`}>
                  {/* Background Animation */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                    <module.icon className="w-full h-full animate-pulse" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-lg rotate-12 animate-spin opacity-30"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-white/30 rounded-full animate-bounce opacity-30"></div>
                  
                  <div className="relative z-10">
                    <module.icon className="w-14 h-14 mb-6 group-hover:animate-pulse transition-all duration-300" />
                    <h3 className="text-2xl font-bold mb-3">{module.title}</h3>
                    <p className="text-white/80 mb-6 text-sm">{module.subtitle}</p>
                    
                    <ul className="space-y-3">
                      {module.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-white/90 text-sm flex items-center">
                          <div className="w-2 h-2 bg-white/60 rounded-full mr-3 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative FAQ Section with E3D Theme */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-green-50 to-teal-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-4 bg-green-600 rounded-full rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-4 bg-teal-600 rounded-full -rotate-12 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-400 rounded-lg rotate-45 animate-spin"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-3 h-10 bg-green-600 mr-4 rounded-full animate-pulse"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-3 h-10 bg-teal-600 ml-4 rounded-full animate-pulse"></div>
                </div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Get answers to common questions about our <span className="font-semibold text-green-700">E3D Piping Course in Mumbai</span>
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  {
                    question: "What is the best E3D Piping course in Mumbai?",
                    answer: "Trinkets Institute offers the best E3D Piping course in Mumbai with comprehensive AVEVA E3D training covering 3D piping design, plant modeling, clash detection, and equipment layout. Our course includes live projects from Mumbai's petrochemical industry and 100% placement assistance with leading companies like Reliance, ONGC, and L&T Hydrocarbon."
                  },
                  {
                    question: "How long is the E3D Piping course duration in Mumbai?",
                    answer: "Our E3D Piping course in Mumbai has a duration of 4 months (120 hours) with flexible timing options. We offer weekday batches (Mon-Fri), weekend classes (Sat-Sun), and intensive fast-track programs to accommodate working professionals and fresh graduates in Mumbai."
                  },
                  {
                    question: "What software tools are covered in E3D course in Mumbai?",
                    answer: "Our E3D Piping course in Mumbai focuses exclusively on AVEVA E3D Design software, covering all modules including 3D piping layout, equipment modeling, clash detection, isometric generation, database management, and advanced plant design features used by Mumbai's leading engineering companies."
                  },
                  {
                    question: "Do you provide placement assistance after E3D course in Mumbai?",
                    answer: "Yes! We provide 100% placement assistance for our E3D Piping course in Mumbai. Our dedicated placement cell has partnerships with 150+ companies including Reliance Industries, ONGC, Indian Oil, L&T Hydrocarbon, and other leading petrochemical and engineering firms in Mumbai and across India."
                  },
                  {
                    question: "What are the career opportunities after E3D Piping course in Mumbai?",
                    answer: "After completing our E3D Piping course in Mumbai, you can work as E3D Piping Designer (₹4-8 LPA), Plant Design Engineer (₹6-12 LPA), E3D Project Manager (₹8-15 LPA), or Senior Piping Engineer (₹12-25 LPA) in Mumbai's booming petrochemical, oil & gas, and power sectors."
                  },
                  {
                    question: "Is prior experience required for E3D Piping course in Mumbai?",
                    answer: "No prior experience with E3D is required for our course in Mumbai. We start with fundamentals and gradually progress to advanced topics. The course is designed for mechanical/chemical engineering graduates, CAD professionals, and anyone interested in plant design. Our expert instructors ensure thorough understanding of E3D software."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-green-200 transform hover:-translate-y-1">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">Q</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
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
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-semibold mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Mumbai Location Benefits
                  </h4>
                  <p className="text-green-100 leading-relaxed">
                    Located in Andheri East with direct access to Mumbai&apos;s petrochemical belt, 
                    including Reliance Jamnagar, ONGC facilities, and major engineering companies. 
                    Perfect connectivity via Western Express Highway and local trains.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Mumbai Industry Focus
                  </h4>
                  <p className="text-teal-100 leading-relaxed">
                    Curriculum designed specifically for Mumbai&apos;s petrochemical industry needs, 
                    including oil refineries, chemical plants, power generation, and offshore platforms 
                    operated by major companies in Mumbai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 text-white relative overflow-hidden">
          {/* Animated Piping Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <path d="M0 200 L150 200 L150 100 L300 100 L300 300 L450 300 L450 150 L600 150 L600 250 L750 250 L750 120 L900 120 L900 280 L1000 280" 
                stroke="currentColor" strokeWidth="4" fill="none" className="animate-pulse" />
              <circle cx="150" cy="200" r="10" fill="currentColor" className="animate-pulse" />
              <circle cx="300" cy="100" r="10" fill="currentColor" className="animate-pulse" />
              <circle cx="450" cy="300" r="10" fill="currentColor" className="animate-pulse" />
              <circle cx="600" cy="150" r="10" fill="currentColor" className="animate-pulse" />
              <circle cx="750" cy="250" r="10" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master E3D Piping in Mumbai?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join Mumbai&apos;s premier E3D Piping course and become part of the petrochemical industry revolution
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
                  href="/contact" 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Enroll in Mumbai E3D Course
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Mumbai Demo
                </Link>
              </div>

              <p className="text-green-200 text-sm">
                🚀 <strong>Special Mumbai Offer:</strong> Early Bird Discount + Free E3D Project Portfolio + Industry Mentorship
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
