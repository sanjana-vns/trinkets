import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'Smart Plant 3D Course in Mumbai - Master SP3D 3D Plant Design & Engineering | Trinkets Institute',
  description: 'Join Mumbai\'s best Smart Plant 3D (SP3D) course at Trinkets Institute. Master 3D plant design, equipment modeling, piping layout with hands-on training. 100% placement assistance in oil & gas, petrochemical industries.',
  keywords: [
    'Smart Plant 3D course Mumbai',
    'SP3D training Mumbai',
    'Smart Plant 3D certification',
    'SP3D course in Mumbai',
    'Smart Plant 3D institute Mumbai',
    '3D plant design course',
    'AVEVA Smart Plant 3D training',
    'Smart Plant 3D piping course',
    'SP3D equipment modeling',
    'plant design engineering course',
    'Smart Plant 3D Mumbai training',
    'SP3D certification Mumbai',
    'Smart Plant 3D online course',
    '3D plant modeling training',
    'Smart Plant 3D pipeline design',
    'SP3D structural modeling',
    'Smart Plant 3D clash detection',
    'plant layout design course',
    'SP3D isometric drawing',
    'Smart Plant 3D instrumentation',
    'process plant design course',
    'SP3D materials management',
    'Smart Plant 3D orthographic views',
    'petroleum engineering course Mumbai',
    'chemical plant design training',
    'Smart Plant 3D walkthrough',
    'SP3D equipment placement',
    'Smart Plant 3D foundation course',
    'advanced SP3D training',
    'Smart Plant 3D job oriented course',
    'SP3D placement assistance Mumbai',
    'Smart Plant 3D career training',
    'Mumbai plant design institute'
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
    canonical: '/courses/smart-plant-3d',
  },
  openGraph: {
    title: 'Smart Plant 3D Course in Mumbai - Master SP3D Plant Design | Trinkets Institute',
    description: 'Join Mumbai\'s premier Smart Plant 3D (SP3D) course. Master 3D plant design, equipment modeling, piping layout. 100% placement assistance in oil & gas industries.',
    url: 'https://trinketsinstitute.com/courses/smart-plant-3d',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/smart-plant-3d-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Plant 3D Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Plant 3D Course in Mumbai - Master SP3D Plant Design | Trinkets Institute',
    description: 'Master Smart Plant 3D (SP3D) with hands-on training in 3D plant design, equipment modeling. 100% placement assistance in Mumbai.',
    images: ['/images/smart-plant-3d-course-mumbai-twitter.jpg'],
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

export default function SmartPlant3DCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Smart Plant 3D Course in Mumbai",
    "description": "Comprehensive Smart Plant 3D (SP3D) training for 3D plant design, equipment modeling, and piping layout in oil & gas industries",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
        "addressLocality": "Mulund West",
        "addressRegion": "Mumbai",
        "postalCode": "400080",
        "addressCountry": "IN"
      },
      "url": "https://trinketsinstitute.com",
      "telephone": "+91-9876543210"
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": ["classroom", "online", "hybrid"],
    "educationalLevel": "Professional",
    "teaches": [
      "Smart Plant 3D Fundamentals",
      "3D Plant Design",
      "Equipment Modeling",
      "Piping Layout Design",
      "Clash Detection",
      "Isometric Generation",
      "Materials Management",
      "Project Setup and Administration"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-32 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-animated"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Floating Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full mb-8 animate-bounce">
              <span className="text-2xl mr-3">🏭</span>
              <span className="font-semibold">AVEVA Smart Plant 3D Mastery</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Smart Plant 3D
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Course in Mumbai
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Master <span className="text-blue-600 font-bold">AVEVA SP3D</span> for 
              <span className="text-purple-600 font-bold"> 3D Plant Design</span> & 
              <span className="text-teal-600 font-bold"> Equipment Modeling</span>
            </p>

            {/* Interactive Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-2xl font-bold text-blue-600">4 Months</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-200">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-teal-200">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-teal-600">15</div>
                <div className="text-gray-600">Max Students</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-200">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center">
                  🚀 Enroll Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link href="/contact" className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center">
                  📋 Download Syllabus
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">↓</span>
                </span>
              </Link>
            </div>

            {/* Next Batch Info */}
            <div className="mt-8 inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full border border-green-200">
              <span className="text-green-600 font-semibold">🎯 Next Batch Starts: 25th November 2025</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 text-6xl animate-float opacity-20">⚙️</div>
        <div className="absolute top-40 right-32 text-5xl animate-float-reverse opacity-20">🏭</div>
        <div className="absolute bottom-32 left-40 text-4xl animate-float-animated opacity-20">🔧</div>
        <div className="absolute bottom-20 right-20 text-5xl animate-float opacity-20">📐</div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-200/30 to-green-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
                  <span className="text-lg mr-2">🏭</span>
                  <span className="font-semibold">Course Overview</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Smart Plant 3D
                  </span>
                  <br />
                  <span className="text-gray-800">Mastery Program</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Master the industry-leading <span className="font-bold text-blue-600">Smart Plant 3D (SP3D)</span> software with our comprehensive course in Mumbai. 
                  AVEVA Smart Plant 3D is the world's most advanced 3D plant design solution used extensively in 
                  oil & gas, petrochemical, power, and process industries.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Why Choose SP3D Training in Mumbai?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Industry-standard 3D plant design software</span>
                    </div>
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">High demand in Mumbai's oil & gas sector</span>
                    </div>
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Advanced clash detection capabilities</span>
                    </div>
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Automatic isometric generation</span>
                    </div>
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Real-time collaboration features</span>
                    </div>
                    <div className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Hands-on training with live projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Interactive Course Highlights */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">
                  🚀 Course Highlights
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⏱️</div>
                    <h4 className="font-bold text-blue-800 text-lg">Duration</h4>
                    <p className="text-blue-600 font-semibold">4 Months</p>
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💻</div>
                    <h4 className="font-bold text-purple-800 text-lg">Mode</h4>
                    <p className="text-purple-600 font-semibold">Hybrid</p>
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-500">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏗️</div>
                    <h4 className="font-bold text-teal-800 text-lg">Projects</h4>
                    <p className="text-teal-600 font-semibold">10+ Real Plants</p>
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-500">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                    <h4 className="font-bold text-orange-800 text-lg">Certification</h4>
                    <p className="text-orange-600 font-semibold">AVEVA Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Industry Applications */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                <h4 className="font-bold text-green-800 mb-6 text-xl flex items-center">
                  <span className="text-2xl mr-3">🏭</span>
                  Industry Applications in Mumbai
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Oil & Gas", "Petrochemical", "Process Plants", "Power Plants", "Chemical Plants", "Refineries"].map((industry, index) => (
                    <span key={index} className="group bg-white px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-teal-700">
                        {industry}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Mumbai Advantage */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-6 text-xl flex items-center">
                  <span className="text-2xl mr-3">🌆</span>
                  Mumbai Advantage
                </h4>
                <div className="space-y-3">
                  {[
                    "Located in India's commercial capital",
                    "Proximity to major oil & gas companies",
                    "Strong petrochemical industry presence",
                    "Access to multinational engineering firms",
                    "Excellent placement opportunities"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-180 transition-transform duration-300">
                        <span className="text-white font-bold text-xs">★</span>
                      </div>
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Plant 3D Modules - Visual Journey */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">🎓</span>
              <span className="font-bold text-lg">Learning Journey</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Smart Plant 3D
              </span>
              <br />
              <span className="text-gray-800">Training Modules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning path from fundamentals to mastery with hands-on projects and industry applications
            </p>
          </div>

          {/* Timeline Journey */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-teal-500 rounded-full"></div>

            {/* Module Cards */}
            <div className="space-y-16">
              {/* Module 1 - SP3D Fundamentals */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold mr-4">SP3D Fundamentals</h3>
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300">🏗️</div>
                    </div>
                    <p className="text-blue-100 mb-6">Foundation & Interface Mastery</p>
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Interface Navigation</span>
                        <span className="text-yellow-300">✨</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-75">
                        <span className="mr-2">Project Setup & Database</span>
                        <span className="text-yellow-300">⚙️</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-150">
                        <span className="mr-2">User Administration</span>
                        <span className="text-yellow-300">👤</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-200">
                        <span className="mr-2">Workspace Customization</span>
                        <span className="text-yellow-300">🎨</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  1
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Module 2 - Equipment Modeling */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  2
                </div>
                <div className="w-1/2 pl-12">
                  <div className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">⚙️</div>
                      <h3 className="text-2xl font-bold">Equipment Modeling</h3>
                    </div>
                    <p className="text-purple-100 mb-6">3D Equipment Design Excellence</p>
                    <div className="space-y-3 text-purple-100">
                      <div className="flex items-center group-hover:translate-x-2 transition-transform">
                        <span className="text-yellow-300 mr-2">🏭</span>
                        <span>Equipment Placement & Orientation</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                        <span className="text-yellow-300 mr-2">🔧</span>
                        <span>Vessel & Tank Modeling</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                        <span className="text-yellow-300 mr-2">🌡️</span>
                        <span>Heat Exchanger Design</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                        <span className="text-yellow-300 mr-2">⚡</span>
                        <span>Pump & Compressor Modeling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 - Piping Design */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="group bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold mr-4">Piping Design</h3>
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300">🔧</div>
                    </div>
                    <p className="text-teal-100 mb-6">Advanced Piping Layout Systems</p>
                    <div className="space-y-3 text-teal-100">
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Piping Routing & Layout</span>
                        <span className="text-yellow-300">🛤️</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-75">
                        <span className="mr-2">Fittings & Valves</span>
                        <span className="text-yellow-300">🔩</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-150">
                        <span className="mr-2">Support Modeling</span>
                        <span className="text-yellow-300">🏗️</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-200">
                        <span className="mr-2">Insulation Design</span>
                        <span className="text-yellow-300">🛡️</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  3
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Module 4 - Advanced Features */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  4
                </div>
                <div className="w-1/2 pl-12">
                  <div className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🚀</div>
                      <h3 className="text-2xl font-bold">Advanced Features</h3>
                    </div>
                    <p className="text-orange-100 mb-6">Professional Tools & Automation</p>
                    <div className="space-y-3 text-orange-100">
                      <div className="flex items-center group-hover:translate-x-2 transition-transform">
                        <span className="text-yellow-300 mr-2">🔍</span>
                        <span>Clash Detection & Resolution</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                        <span className="text-yellow-300 mr-2">📐</span>
                        <span>Isometric Generation</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                        <span className="text-yellow-300 mr-2">📊</span>
                        <span>Materials Management</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                        <span className="text-yellow-300 mr-2">👁️</span>
                        <span>3D Walkthrough & Reports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Completion Badge */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="text-3xl mr-4 animate-bounce">🏆</span>
              <div>
                <div className="font-bold text-lg">Industry Certification</div>
                <div className="text-green-100 text-sm">Complete all modules & become SP3D expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-green-200/20 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">📚</span>
              <span className="font-bold text-lg">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Smart Plant 3D
              </span>
              <br />
              <span className="text-gray-800">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured 16-week curriculum designed by industry experts for complete SP3D mastery
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 1: Foundation */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4 hover:rotate-12 transition-transform">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">Foundation Phase</h3>
                    <p className="text-blue-600">Weeks 1-4 • Building Strong Basics</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🏗️</span>
                      <h4 className="font-bold text-gray-800 text-lg">Smart Plant 3D Introduction</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Interface navigation, project hierarchy, database concepts, and workspace setup</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Interface</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Navigation</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Database</span>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-indigo-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">⚙️</span>
                      <h4 className="font-bold text-gray-800 text-lg">Project Setup & Administration</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Database creation, user management, workspace configuration, and project standards</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">Project Setup</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">User Management</span>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-purple-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🎯</span>
                      <h4 className="font-bold text-gray-800 text-lg">Coordinate Systems & Reference</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Site setup, coordinate systems, reference data management, and standards implementation</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Coordinates</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Standards</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phase 3: Piping Design */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-3xl border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4 hover:rotate-12 transition-transform">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-teal-800">Piping Mastery</h3>
                    <p className="text-teal-600">Weeks 9-12 • Advanced Piping Systems</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔧</span>
                    Piping System Design Excellence
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Piping routing and layout principles",
                      "Pipe sizing and specification",
                      "Fittings, valves, and specialty items",
                      "Branch connections and reducers",
                      "Underground and buried piping",
                      "Pipe supports and restraints",
                      "Insulation and heat tracing",
                      "Piping flexibility analysis"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-180 transition-transform">
                          <span className="text-white font-bold text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 2: Equipment & Structural */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4 hover:rotate-12 transition-transform">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-800">Equipment & Structural</h3>
                    <p className="text-purple-600">Weeks 5-8 • 3D Modeling Excellence</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-purple-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🏭</span>
                      <h4 className="font-bold text-gray-800 text-lg">Equipment Modeling</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Vessels, heat exchangers, tanks, pumps, compressors, and complex equipment modeling</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Vessels</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Exchangers</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Pumps</span>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-pink-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🏗️</span>
                      <h4 className="font-bold text-gray-800 text-lg">Structural Framework</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Steel structures, platforms, ladders, handrails, and structural support systems</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Steel Structure</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Platforms</span>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1 border-l-4 border-rose-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">📐</span>
                      <h4 className="font-bold text-gray-800 text-lg">Equipment Arrangement</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Plot plan development, equipment spacing, accessibility, and optimization strategies</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-semibold">Plot Plan</span>
                      <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-semibold">Spacing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phase 4: Advanced & Deliverables */}
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-3xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4 hover:rotate-12 transition-transform">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-800">Advanced & Deliverables</h3>
                    <p className="text-orange-600">Weeks 13-16 • Professional Output</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      Advanced Features & Quality Control
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Clash detection and resolution strategies",
                        "Isometric drawing generation and customization",
                        "Materials take-off and comprehensive reports",
                        "3D model reviews and walkthrough creation",
                        "Industry project and certification completion"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                          <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-180 transition-transform">
                            <span className="text-white font-bold text-xs">★</span>
                          </div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Project Showcase */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl text-white hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4 animate-bounce">🏆</span>
                <h4 className="font-bold text-2xl">Capstone Project</h4>
              </div>
              <p className="text-green-100 text-lg max-w-2xl">
                Complete end-to-end process plant design project covering equipment modeling, 
                piping layout, clash resolution, and deliverable generation using real industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667EEA' fill-opacity='0.1'%3E%3Cpath d='M40 0L40 80M0 40L80 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">🚀</span>
              <span className="font-bold text-lg">Career Launch Pad</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Career Opportunities
              </span>
              <br />
              <span className="text-gray-800">in Mumbai</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your dream career with our comprehensive placement support and industry connections
            </p>
          </div>

          {/* Career Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SP3D Design Engineer */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  🏗️
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">SP3D Design Engineer</h3>
                <p className="text-blue-600 mb-6">Create 3D plant models and equipment layouts</p>
                <div className="bg-white p-4 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700 mb-1">₹4-8 LPA</div>
                  <div className="text-blue-600 text-sm">Starting Salary</div>
                </div>
              </div>
            </div>

            {/* Piping Design Engineer */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">Piping Design Engineer</h3>
                <p className="text-purple-600 mb-6">Design complex piping systems and routing</p>
                <div className="bg-white p-4 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700 mb-1">₹5-9 LPA</div>
                  <div className="text-purple-600 text-sm">Starting Salary</div>
                </div>
              </div>
            </div>

            {/* Project Engineer */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-3xl border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  📐
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">Project Engineer</h3>
                <p className="text-teal-600 mb-6">Lead SP3D projects and coordinate teams</p>
                <div className="bg-white p-4 rounded-xl border border-teal-200">
                  <div className="text-2xl font-bold text-teal-700 mb-1">₹6-12 LPA</div>
                  <div className="text-teal-600 text-sm">Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Hiring Companies */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
              <span className="text-4xl mr-4">🏢</span>
              Top Hiring Companies in Mumbai
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "L&T", gradient: "from-blue-500 to-indigo-600" },
                { name: "Reliance", gradient: "from-purple-500 to-pink-600" },
                { name: "ONGC", gradient: "from-green-500 to-emerald-600" },
                { name: "Shell", gradient: "from-orange-500 to-red-600" },
                { name: "Chevron", gradient: "from-teal-500 to-cyan-600" },
                { name: "Worley", gradient: "from-indigo-500 to-purple-600" },
                { name: "Technip", gradient: "from-pink-500 to-rose-600" },
                { name: "KBR", gradient: "from-emerald-500 to-teal-600" },
                { name: "Fluor", gradient: "from-blue-500 to-purple-600" },
                { name: "Jacobs", gradient: "from-orange-500 to-yellow-600" },
                { name: "McDermott", gradient: "from-red-500 to-pink-600" },
                { name: "Petrofac", gradient: "from-cyan-500 to-blue-600" }
              ].map((company, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-gradient-to-r ${company.gradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer`}>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">{company.name}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Placement Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">₹6.5L</div>
                <div className="text-gray-600">Average Package</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Hiring Partners</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">15 Days</div>
                <div className="text-gray-600">Avg. Job Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">⭐</span>
              <span className="font-bold text-lg">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Student Success
              </span>
              <br />
              <span className="text-gray-800">from Mumbai</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our graduates who transformed their careers with Smart Plant 3D expertise
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story 1 - Rahul */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-start mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 group-hover:rotate-12 transition-transform duration-300">
                    RK
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">⭐</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-xl mb-2">Rahul Krishnan</h4>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-lg mb-2">
                    SP3D Design Engineer - L&T Mumbai
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="mr-2">📍</span>
                    <span>Batch 2023 • Package: ₹7.2 LPA</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-green-200 mb-6">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "The Smart Plant 3D course at Trinkets was exceptional. The hands-on training with real projects prepared me perfectly for my role at L&T. The instructors are industry experts who provide practical insights that you won't find anywhere else."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <div className="text-green-600 font-semibold text-sm">5.0 Rating</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl">
                <div>
                  <div className="font-bold text-lg">L&T Heavy Engineering</div>
                  <div className="text-green-100 text-sm">Placed within 12 days</div>
                </div>
                <div className="text-3xl group-hover:scale-110 transition-transform">🎯</div>
              </div>
            </div>
            
            {/* Story 2 - Priya */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-start mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 group-hover:rotate-12 transition-transform duration-300">
                    PS
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">⭐</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-xl mb-2">Priya Sharma</h4>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg mb-2">
                    Piping Design Engineer - Reliance
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="mr-2">📍</span>
                    <span>Batch 2023 • Package: ₹8.5 LPA</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-blue-200 mb-6">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "Excellent SP3D training institute in Mumbai! The course covered everything from basics to advanced features. Got placed at Reliance Industries with confident knowledge of 3D plant design and clash detection techniques."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">5.0 Rating</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl">
                <div>
                  <div className="font-bold text-lg">Reliance Industries</div>
                  <div className="text-blue-100 text-sm">Placed within 8 days</div>
                </div>
                <div className="text-3xl group-hover:scale-110 transition-transform">🚀</div>
              </div>
            </div>
          </div>

          {/* Additional Success Metrics */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 p-12 rounded-3xl text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <span className="text-4xl mr-4">🏆</span>
              Our Track Record
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  📈
                </div>
                <div className="text-4xl font-bold mb-2 text-green-400">500+</div>
                <div className="text-gray-300">Successful Placements</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  ⚡
                </div>
                <div className="text-4xl font-bold mb-2 text-blue-400">10 Days</div>
                <div className="text-gray-300">Average Job Time</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  💰
                </div>
                <div className="text-4xl font-bold mb-2 text-purple-400">₹12L</div>
                <div className="text-gray-300">Highest Package</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  🌟
                </div>
                <div className="text-4xl font-bold mb-2 text-orange-400">4.9/5</div>
                <div className="text-gray-300">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai-Specific Advantages */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Why Learn Smart Plant 3D in Mumbai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Hub</h3>
              <p className="text-green-100 text-sm">Mumbai hosts major oil & gas, petrochemical companies offering abundant SP3D opportunities</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-green-100 text-sm">Learn from certified SP3D professionals with 15+ years industry experience</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Live Projects</h3>
              <p className="text-green-100 text-sm">Work on real plant design projects from Mumbai-based engineering companies</p>
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
              <p className="text-gray-600 mb-4">Explore our complete range of advanced engineering courses.</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful SP3D graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized Smart Plant 3D training for your engineering teams.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/courses" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              🎯 Discover All Our Engineering Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/smart-plant-3d"
          />
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-float-animated"></div>
        </div>

        <div className="relative z-10 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 text-center">
            {/* Main CTA Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full mb-6">
                <span className="text-2xl mr-3">🚀</span>
                <span className="font-bold text-lg">Ready to Transform Your Career?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-yellow-300">Smart Plant 3D</span>
                <br />
                in Mumbai
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join Mumbai's premier Smart Plant 3D course and advance your career in 3D plant design with industry-leading training
              </p>
            </div>

            {/* Urgency Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">⏰</div>
                <div className="font-bold text-xl text-yellow-300">Next Batch</div>
                <div className="text-blue-100">25th November 2025</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold text-xl text-yellow-300">Limited Seats</div>
                <div className="text-blue-100">Only 15 Students</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">🎁</div>
                <div className="font-bold text-xl text-yellow-300">Special Offer</div>
                <div className="text-blue-100">Free SP3D License</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/contact" className="group relative px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                <span className="relative z-10 flex items-center">
                  🎯 Enroll Now - Secure Your Spot
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link href="/courses" className="group px-10 py-5 border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="flex items-center">
                  📚 Compare All Courses
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">↗</span>
                </span>
              </Link>
              
              <Link href="/contact" className="group px-10 py-5 border-2 border-yellow-300 text-yellow-300 rounded-full font-bold text-xl hover:bg-yellow-300 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="flex items-center">
                  🎬 Schedule Free Demo
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">📹</span>
                </span>
              </Link>
            </div>

            {/* Additional Offers */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-300/30 inline-block">
                <p className="text-green-200 font-semibold">
                  🎯 Special Offer: Get Free SP3D Software License for Practice - 
                  <Link href="/contact" className="underline hover:text-white transition-colors ml-1">Contact Us Today!</Link>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-300/30 inline-block">
                <p className="text-yellow-200 font-semibold">
                  💡 Want to explore more courses? 
                  <Link href="/courses" className="underline hover:text-white transition-colors mx-1">View All Engineering Courses</Link> 
                  or check our 
                  <Link href="/courses#courses-hero" className="underline hover:text-white transition-colors ml-1">Course Categories</Link>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <p className="text-blue-100 text-lg mb-4">Still have questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center">
                  <span className="text-yellow-300 text-xl mr-2">📞</span>
                  <span className="font-semibold">+91-9820064471</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 text-xl mr-2">📧</span>
                  <span className="font-semibold">info@trinketsinstitute.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              View All Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}