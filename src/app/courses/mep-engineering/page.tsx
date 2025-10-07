import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'MEP Engineering Course in Mumbai - Master Mechanical, Electrical & Plumbing Design | Trinkets Institute',
  description: 'Professional MEP Engineering Course in Mumbai with AutoCAD MEP, Revit MEP, HAP, TRACE 700 training. 100% placement assistance in MEP consultancy, construction & building design industries. Industry-certified curriculum.',
  keywords: [
    'MEP engineering course Mumbai',
    'MEP engineering training Mumbai',
    'MEP design course',
    'mechanical electrical plumbing course',
    'AutoCAD MEP training Mumbai',
    'Revit MEP course Mumbai',
    'MEP consultancy training',
    'building services engineering',
    'HVAC design course Mumbai',
    'electrical design training',
    'plumbing design course',
    'MEP certification Mumbai',
    'building services course',
    'MEP engineering institute Mumbai',
    'MEP design training',
    'construction MEP course',
    'MEP project training',
    'building MEP systems',
    'MEP engineering career',
    'MEP design software training'
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
    canonical: '/courses/mep-engineering',
  },
  openGraph: {
    title: 'MEP Engineering Course in Mumbai - Master Building Services Design | Trinkets Institute',
    description: 'Professional MEP Engineering training in Mumbai with industry-leading software. 100% placement assistance in MEP consultancy and construction industries.',
    url: 'https://trinketsinstitute.com/courses/mep-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/mep-engineering-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MEP Engineering Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP Engineering Course in Mumbai - Master Building Services | Trinkets Institute',
    description: 'Learn professional MEP design with AutoCAD MEP, Revit MEP, HAP, TRACE 700. 100% placement assistance in Mumbai MEP industry.',
    images: ['/images/mep-engineering-course-twitter.jpg'],
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
  category: 'Engineering Course',
}

export default function MEPEngineeringCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MEP Engineering Course in Mumbai",
    "description": "Comprehensive MEP (Mechanical, Electrical & Plumbing) Engineering course with AutoCAD MEP, Revit MEP, HAP, TRACE 700 training in Mumbai",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Engineering Hub",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
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
    "courseCode": "MEP-101",
    "educationalLevel": "Professional",
    "teaches": [
      "AutoCAD MEP",
      "Revit MEP",
      "HAP Software",
      "TRACE 700",
      "MEP Design Principles",
      "Building Services Engineering",
      "HVAC System Design",
      "Electrical System Design",
      "Plumbing System Design",
      "Fire Fighting Systems",
      "MEP Coordination",
      "BIM for MEP"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Classroom", "Online"],
      "location": {
        "@type": "Place",
        "name": "Trinkets Institute",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-32 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-animated"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Floating Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full mb-8 animate-bounce">
              <span className="text-2xl mr-3">🏗️</span>
              <span className="font-semibold">MEP Engineering Mastery</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                MEP Engineering
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Course in Mumbai
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Master <span className="text-indigo-600 font-bold">Mechanical</span>, 
              <span className="text-purple-600 font-bold"> Electrical</span> & 
              <span className="text-blue-600 font-bold"> Plumbing Design</span> with Industry-Leading Software
            </p>

            {/* Software Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['AutoCAD MEP', 'Revit MEP', 'HAP Software', 'TRACE 700', '100% Placement'].map((item, index) => {
                const gradients = [
                  'from-indigo-500 to-purple-600',
                  'from-purple-500 to-pink-600',
                  'from-blue-500 to-cyan-600',
                  'from-teal-500 to-green-600',
                  'from-orange-500 to-red-600'
                ];
                return (
                  <span key={index} className={`bg-gradient-to-r ${gradients[index]} text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* Interactive Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-200">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-2xl font-bold text-indigo-600">6 Months</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-200">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-teal-200">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-teal-600">₹15L</div>
                <div className="text-gray-600">Highest Package</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center">
                  🚀 Enroll Now - Limited Seats
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link href="#curriculum" className="group px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center">
                  📚 View Curriculum
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">↓</span>
                </span>
              </Link>
            </div>

            {/* Next Batch Info */}
            <div className="mt-8 inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full border border-green-200">
              <span className="text-green-600 font-semibold">🎯 Next Batch Starts: 15th November 2025</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 text-6xl animate-float opacity-20">⚡</div>
        <div className="absolute top-40 right-32 text-5xl animate-float-reverse opacity-20">🔧</div>
        <div className="absolute bottom-32 left-40 text-4xl animate-float-animated opacity-20">🏗️</div>
        <div className="absolute bottom-20 right-20 text-5xl animate-float opacity-20">💡</div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-indigo-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
                <span className="text-lg mr-2">🏗️</span>
                <span className="font-semibold">Course Overview</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Best MEP Engineering
                </span>
                <br />
                <span className="text-gray-800">Course in Mumbai</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Why Choose Our MEP Course?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Industry-aligned curriculum covering M, E & P systems",
                      "Master AutoCAD MEP, Revit MEP, HAP & TRACE 700",
                      "Real project training from Mumbai's construction industry",
                      "100% placement assistance in top MEP companies",
                      "Expert faculty with 10+ years industry experience",
                      "Live project exposure and site visits"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-6 text-xl flex items-center">
                    <span className="text-2xl mr-3">🌆</span>
                    Mumbai MEP Industry Advantage
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Gateway to India's largest construction market",
                      "Home to major MEP consultancy firms",
                      "Proximity to infrastructure development projects",
                      "Access to multinational engineering companies",
                      "Hub for green building and sustainable design"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-180 transition-transform duration-300">
                          <span className="text-white font-bold text-xs">★</span>
                        </div>
                        <span className="text-gray-700 text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Course Highlights */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                  <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">
                    🚀 Course Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-indigo-500">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⏱️</div>
                      <h4 className="font-bold text-indigo-800 text-lg">Duration</h4>
                      <p className="text-indigo-600 font-semibold">6 Months</p>
                    </div>
                    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💻</div>
                      <h4 className="font-bold text-purple-800 text-lg">Software</h4>
                      <p className="text-purple-600 font-semibold">4 Premium Tools</p>
                    </div>
                    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏗️</div>
                      <h4 className="font-bold text-blue-800 text-lg">Projects</h4>
                      <p className="text-blue-600 font-semibold">15+ Live Projects</p>
                    </div>
                    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-500">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                      <h4 className="font-bold text-teal-800 text-lg">Certification</h4>
                      <p className="text-teal-600 font-semibold">Industry Recognized</p>
                    </div>
                  </div>
                </div>

                {/* Course Content Overview */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-6 text-xl flex items-center">
                    <span className="text-2xl mr-3">📚</span>
                    What You'll Master
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { title: "Mechanical Systems", desc: "HVAC design, load calculations, ductwork", color: "from-red-500 to-orange-500" },
                      { title: "Electrical Systems", desc: "Power distribution, lighting, fire alarm", color: "from-yellow-500 to-amber-500" },
                      { title: "Plumbing Systems", desc: "Water supply, drainage, fire fighting", color: "from-blue-500 to-cyan-500" },
                      { title: "BIM Integration", desc: "3D modeling, clash detection, coordination", color: "from-purple-500 to-pink-500" }
                    ].map((system, index) => (
                      <div key={index} className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${system.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                            <span className="text-white font-bold">M</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800">{system.title}</h5>
                            <p className="text-gray-600 text-sm">{system.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-2xl border border-indigo-200">
                <h4 className="text-2xl font-bold text-indigo-800 mb-4">Ready to Transform Your Career?</h4>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Join Mumbai's most comprehensive MEP Engineering course and become an expert in building services design. 
                  Our industry-aligned curriculum and 100% placement assistance will launch your successful MEP career.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    🎯 Start Your Journey Today
                  </Link>
                  <Link href="#curriculum" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    📋 View Detailed Curriculum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MEP Course - Interactive Features */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">⭐</span>
              <span className="font-bold text-lg">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose Our
              </span>
              <br />
              <span className="text-gray-800">MEP Engineering Course?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Mumbai's most comprehensive MEP training with industry experts and cutting-edge technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✅",
                title: "Industry-Certified Curriculum",
                description: "Learn from Mumbai's top MEP engineering professionals with 10+ years industry experience",
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50",
                borderColor: "border-green-200"
              },
              {
                icon: "🛠️",
                title: "Latest MEP Software Training",
                description: "Master AutoCAD MEP, Revit MEP, HAP, TRACE 700 with hands-on project experience",
                gradient: "from-blue-500 to-cyan-600",
                bgGradient: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200"
              },
              {
                icon: "🎯",
                title: "100% Placement Guarantee",
                description: "Guaranteed job placement in Mumbai's top MEP consultancy and construction companies",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
                borderColor: "border-purple-200"
              },
              {
                icon: "📚",
                title: "Real Project Training",
                description: "Work on live MEP projects from Mumbai's leading construction and infrastructure companies",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50",
                borderColor: "border-orange-200"
              },
              {
                icon: "👨‍🏫",
                title: "Expert Faculty from Mumbai",
                description: "Learn from Mumbai's most experienced MEP engineers and consultants",
                gradient: "from-indigo-500 to-purple-600",
                bgGradient: "from-indigo-50 to-purple-50",
                borderColor: "border-indigo-200"
              },
              {
                icon: "🏆",
                title: "Industry Certification",
                description: "Receive globally recognized MEP engineering certification upon course completion",
                gradient: "from-yellow-500 to-amber-600",
                bgGradient: "from-yellow-50 to-amber-50",
                borderColor: "border-yellow-200"
              }
            ].map((feature, index) => (
              <div key={index} className={`group bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border-2 ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 p-12 rounded-3xl text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <span className="text-4xl mr-4">📊</span>
              Our Success Metrics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  👥
                </div>
                <div className="text-4xl font-bold mb-2 text-green-400">500+</div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  🎯
                </div>
                <div className="text-4xl font-bold mb-2 text-blue-400">95%</div>
                <div className="text-gray-300">Placement Rate</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  💰
                </div>
                <div className="text-4xl font-bold mb-2 text-purple-400">₹15L</div>
                <div className="text-gray-300">Highest Package</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  🏢
                </div>
                <div className="text-4xl font-bold mb-2 text-orange-400">50+</div>
                <div className="text-gray-300">Partner Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum - Visual Journey */}
      <section id="curriculum" className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.1'%3E%3Cpath d='M40 0L40 80M0 40L80 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">📚</span>
              <span className="font-bold text-lg">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                MEP Engineering
              </span>
              <br />
              <span className="text-gray-800">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master MEP engineering through our structured 6-month program designed by industry experts
            </p>
          </div>

          {/* Timeline Journey */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-500 to-blue-500 rounded-full"></div>

            {/* Module Cards */}
            <div className="space-y-16">
              {/* Module 1 - MEP Fundamentals */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold mr-4">MEP Fundamentals & Building Services</h3>
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300">🏗️</div>
                    </div>
                    <p className="text-indigo-100 mb-6">Foundation & Core Concepts</p>
                    <div className="space-y-3 text-indigo-100">
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Introduction to MEP Engineering</span>
                        <span className="text-yellow-300">📚</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-75">
                        <span className="mr-2">Building Services Overview</span>
                        <span className="text-yellow-300">🏢</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-150">
                        <span className="mr-2">MEP Design Standards & Codes</span>
                        <span className="text-yellow-300">📋</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-200">
                        <span className="mr-2">Mumbai Building Bye-laws</span>
                        <span className="text-yellow-300">⚖️</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  1
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Module 2 - AutoCAD MEP */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  2
                </div>
                <div className="w-1/2 pl-12">
                  <div className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🖥️</div>
                      <h3 className="text-2xl font-bold">AutoCAD MEP Mastery</h3>
                    </div>
                    <p className="text-purple-100 mb-6">Professional CAD Design Skills</p>
                    <div className="space-y-3 text-purple-100">
                      <div className="flex items-center group-hover:translate-x-2 transition-transform">
                        <span className="text-yellow-300 mr-2">⚙️</span>
                        <span>AutoCAD MEP Interface & Tools</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                        <span className="text-yellow-300 mr-2">🔧</span>
                        <span>HVAC System Design & Layout</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                        <span className="text-yellow-300 mr-2">⚡</span>
                        <span>Electrical Circuit Design</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                        <span className="text-yellow-300 mr-2">🚿</span>
                        <span>Plumbing & Fire Fighting Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 - Revit MEP & BIM */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold mr-4">Revit MEP & BIM</h3>
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300">🏛️</div>
                    </div>
                    <p className="text-blue-100 mb-6">3D Modeling & BIM Excellence</p>
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Revit MEP Fundamentals</span>
                        <span className="text-yellow-300">🏗️</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-75">
                        <span className="mr-2">BIM for MEP Engineering</span>
                        <span className="text-yellow-300">🧠</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-150">
                        <span className="mr-2">MEP Families Creation</span>
                        <span className="text-yellow-300">🔧</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-200">
                        <span className="mr-2">Coordination Models</span>
                        <span className="text-yellow-300">🤝</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  3
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Module 4 - HVAC Design Software */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  4
                </div>
                <div className="w-1/2 pl-12">
                  <div className="group bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🌡️</div>
                      <h3 className="text-2xl font-bold">HVAC Design Software</h3>
                    </div>
                    <p className="text-teal-100 mb-6">HAP & TRACE 700 Expertise</p>
                    <div className="space-y-3 text-teal-100">
                      <div className="flex items-center group-hover:translate-x-2 transition-transform">
                        <span className="text-yellow-300 mr-2">📊</span>
                        <span>HAP Software & Load Calculations</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                        <span className="text-yellow-300 mr-2">🔍</span>
                        <span>System Sizing & Selection</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                        <span className="text-yellow-300 mr-2">⚡</span>
                        <span>TRACE 700 Energy Analysis</span>
                      </div>
                      <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                        <span className="text-yellow-300 mr-2">📈</span>
                        <span>Life Cycle Cost Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 5 - Real Project Implementation */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold mr-4">Real Project Implementation</h3>
                      <div className="text-4xl group-hover:rotate-12 transition-transform duration-300">🚀</div>
                    </div>
                    <p className="text-orange-100 mb-6">Industry Project Experience</p>
                    <div className="space-y-3 text-orange-100">
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Live MEP Project Analysis</span>
                        <span className="text-yellow-300">📋</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-75">
                        <span className="mr-2">Mumbai Construction Case Studies</span>
                        <span className="text-yellow-300">🏙️</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-150">
                        <span className="mr-2">Site Visit & Inspection</span>
                        <span className="text-yellow-300">👷</span>
                      </div>
                      <div className="flex items-center justify-end group-hover:translate-x-2 transition-transform delay-200">
                        <span className="mr-2">Final Portfolio Development</span>
                        <span className="text-yellow-300">📁</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                  5
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>
            </div>
          </div>

          {/* Completion Badge */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="text-3xl mr-4 animate-bounce">🏆</span>
              <div>
                <div className="font-bold text-lg">MEP Engineering Certification</div>
                <div className="text-green-100 text-sm">Complete all modules & become MEP expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M40 0L40 80M0 40L80 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">🚀</span>
              <span className="font-bold text-lg">Career Launch Pad</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                MEP Engineering Careers
              </span>
              <br />
              <span className="text-gray-800">in Mumbai</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your dream MEP career with our comprehensive placement support and industry connections
            </p>
          </div>

          {/* Career Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🏗️",
                title: "MEP Design Engineer",
                description: "Design mechanical, electrical, and plumbing systems for buildings",
                salary: "₹6-12 LPA",
                gradient: "from-indigo-500 to-purple-600",
                bgGradient: "from-indigo-50 to-purple-100",
                borderColor: "border-indigo-200"
              },
              {
                icon: "🌡️",
                title: "HVAC Design Consultant",
                description: "Specialize in heating, ventilation, and air conditioning systems",
                salary: "₹8-15 LPA",
                gradient: "from-blue-500 to-cyan-600",
                bgGradient: "from-blue-50 to-cyan-100",
                borderColor: "border-blue-200"
              },
              {
                icon: "📋",
                title: "Project Coordinator",
                description: "Coordinate MEP systems in large construction projects",
                salary: "₹7-14 LPA",
                gradient: "from-teal-500 to-green-600",
                bgGradient: "from-teal-50 to-green-100",
                borderColor: "border-teal-200"
              },
              {
                icon: "👷",
                title: "MEP Supervisor",
                description: "Supervise MEP installation and commissioning on sites",
                salary: "₹5-10 LPA",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-100",
                borderColor: "border-orange-200"
              },
              {
                icon: "⚙️",
                title: "Building Services Engineer",
                description: "Design and optimize building services for efficiency",
                salary: "₹9-18 LPA",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-100",
                borderColor: "border-purple-200"
              },
              {
                icon: "💼",
                title: "MEP Consultant",
                description: "Provide expert MEP consulting services to clients",
                salary: "₹12-25 LPA",
                gradient: "from-yellow-500 to-amber-600",
                bgGradient: "from-yellow-50 to-amber-100",
                borderColor: "border-yellow-200"
              }
            ].map((role, index) => (
              <div key={index} className={`group bg-gradient-to-br ${role.bgGradient} p-8 rounded-3xl border-2 ${role.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${role.gradient} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                  <div className={`bg-white p-4 rounded-xl border-2 ${role.borderColor} shadow-lg`}>
                    <div className="text-2xl font-bold text-gray-700 mb-1">{role.salary}</div>
                    <div className="text-gray-600 text-sm">Starting Salary</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Placement Partners */}
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 p-12 rounded-3xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
              <span className="text-4xl mr-4">🏢</span>
              Our MEP Engineering Placement Partners in Mumbai
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "L&T", subtitle: "Construction", gradient: "from-blue-500 to-indigo-600" },
                { name: "Godrej", subtitle: "Properties", gradient: "from-green-500 to-teal-600" },
                { name: "Shapoorji", subtitle: "Pallonji", gradient: "from-purple-500 to-pink-600" },
                { name: "Tata", subtitle: "Projects", gradient: "from-orange-500 to-red-600" },
                { name: "Punj Lloyd", subtitle: "Engineering", gradient: "from-indigo-500 to-purple-600" },
                { name: "JLL", subtitle: "India", gradient: "from-teal-500 to-cyan-600" }
              ].map((company, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-gradient-to-r ${company.gradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer`}>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">{company.name}</div>
                      <div className="text-white/80 text-sm">{company.subtitle}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Placement Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-indigo-200">
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">₹10.5L</div>
                <div className="text-gray-600">Average Package</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Hiring Partners</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">20 Days</div>
                <div className="text-gray-600">Avg. Job Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full mb-6">
              <span className="text-xl mr-3">⭐</span>
              <span className="font-bold text-lg">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                MEP Engineering Success
              </span>
              <br />
              <span className="text-gray-800">Stories from Mumbai</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our graduates who transformed their careers with MEP engineering expertise
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Story 1 - Rohit */}
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-100 p-8 rounded-3xl border-2 border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                    RS
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">⭐</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">Rohit Sharma</h4>
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    MEP Design Engineer at L&T
                  </div>
                  <div className="text-gray-600 text-sm">Package: ₹10 LPA</div>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-indigo-200 mb-4">
                <p className="text-gray-700 italic leading-relaxed">
                  "The MEP course at Trinkets transformed my career. I got placed at L&T Mumbai with a 10 LPA package. The practical training and real project exposure made all the difference."
                </p>
              </div>
              
              <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl">
                <div>
                  <div className="font-bold">L&T Construction</div>
                  <div className="text-indigo-100 text-sm">Placed in 15 days</div>
                </div>
                <div className="text-2xl group-hover:scale-110 transition-transform">🎯</div>
              </div>
            </div>
            
            {/* Story 2 - Priya */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                    PP
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">⭐</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">Priya Patel</h4>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                    HVAC Consultant at Godrej
                  </div>
                  <div className="text-gray-600 text-sm">Package: ₹12 LPA</div>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-blue-200 mb-4">
                <p className="text-gray-700 italic leading-relaxed">
                  "Best MEP engineering institute in Mumbai! The AutoCAD MEP and Revit training was comprehensive. Now working as HVAC consultant earning 12 LPA."
                </p>
              </div>
              
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-2xl">
                <div>
                  <div className="font-bold">Godrej Properties</div>
                  <div className="text-blue-100 text-sm">Placed in 10 days</div>
                </div>
                <div className="text-2xl group-hover:scale-110 transition-transform">🚀</div>
              </div>
            </div>

            {/* Story 3 - Arjun */}
            <div className="group bg-gradient-to-br from-teal-50 to-green-100 p-8 rounded-3xl border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                    AK
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">⭐</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">Arjun Kumar</h4>
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent font-bold">
                    Project Coordinator
                  </div>
                  <div className="text-gray-600 text-sm">Package: ₹14 LPA</div>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-teal-200 mb-4">
                <p className="text-gray-700 italic leading-relaxed">
                  "Mumbai's top MEP training center! The faculty's industry experience and placement support helped me secure a project coordinator role with 14 LPA package."
                </p>
              </div>
              
              <div className="flex items-center justify-between bg-gradient-to-r from-teal-500 to-green-600 text-white p-4 rounded-2xl">
                <div>
                  <div className="font-bold">Shapoorji Pallonji</div>
                  <div className="text-teal-100 text-sm">Placed in 8 days</div>
                </div>
                <div className="text-2xl group-hover:scale-110 transition-transform">🏆</div>
              </div>
            </div>
          </div>

          {/* Overall Success Metrics */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 p-12 rounded-3xl text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <span className="text-4xl mr-4">📈</span>
              Our MEP Training Track Record
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
                <div className="text-4xl font-bold mb-2 text-blue-400">12 Days</div>
                <div className="text-gray-300">Average Job Time</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  💰
                </div>
                <div className="text-4xl font-bold mb-2 text-purple-400">₹25L</div>
                <div className="text-gray-300">Highest Package</div>
              </div>
              
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  🌟
                </div>
                <div className="text-4xl font-bold mb-2 text-orange-400">4.8/5</div>
                <div className="text-gray-300">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          MEP Engineering Course Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Flexible Learning Options</h3>
                <p className="text-gray-600">Weekend and weekday batches available to suit your schedule in Mumbai</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Industry-Standard Software</h3>
                <p className="text-gray-600">Latest versions of AutoCAD MEP, Revit MEP, HAP, and TRACE 700</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Live Project Training</h3>
                <p className="text-gray-600">Work on real MEP projects from Mumbai&apos;s construction industry</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Resume Building Support</h3>
                <p className="text-gray-600">Professional resume and portfolio development for MEP engineers</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Interview Preparation</h3>
                <p className="text-gray-600">Mock interviews and technical preparation for MEP engineering roles</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Industry Networking</h3>
                <p className="text-gray-600">Connect with Mumbai&apos;s MEP engineering professionals and companies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Lifetime Support</h3>
                <p className="text-gray-600">Continued support and guidance throughout your MEP engineering career</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Global Certification</h3>
                <p className="text-gray-600">Industry-recognized MEP engineering certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions - MEP Engineering Course Mumbai
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What is the duration of the MEP Engineering Course in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive MEP engineering course duration is 6 months with flexible weekend and weekday batch options in Mumbai.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What software will I learn in this MEP course?</h3>
                <p className="text-gray-600">You&apos;ll master AutoCAD MEP, Revit MEP, HAP software, TRACE 700, and other industry-standard MEP design software used in Mumbai&apos;s construction industry.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What is the placement record for MEP engineering students?</h3>
                <p className="text-gray-600">We have 100% placement assistance with 95% successful placements in Mumbai&apos;s top MEP consultancy firms and construction companies with packages ranging from 6-15 LPA.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Is this MEP course suitable for freshers?</h3>
                <p className="text-gray-600">Yes, our MEP engineering course is designed for both freshers and working professionals. We start from basics and progress to advanced MEP design concepts.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What are the career opportunities after completing MEP course in Mumbai?</h3>
                <p className="text-gray-600">Career opportunities include MEP Design Engineer, HVAC Consultant, Building Services Engineer, Project Coordinator, and MEP Supervisor roles in Mumbai&apos;s construction and consultancy sector.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/mep-engineering"
          />
          <div className="mt-8 text-center">
            <Link href="/courses" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              🎯 Discover All Our Engineering Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-animated"></div>
        </div>

        <div className="relative z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 text-center">
            {/* Main CTA Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full mb-6">
                <span className="text-2xl mr-3">🚀</span>
                <span className="font-bold text-lg">Ready to Start Your MEP Career?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ready to Start Your <span className="text-yellow-300">MEP Engineering</span>
                <br />
                Career in Mumbai?
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Join Mumbai's best MEP engineering course and transform your career with 100% placement assistance.
              </p>
            </div>

            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold text-xl text-yellow-300">Course Fee</div>
                <div className="text-indigo-100">Contact for Details</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="font-bold text-xl text-yellow-300">Duration</div>
                <div className="text-indigo-100">6 Months</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold text-xl text-yellow-300">Limited Seats</div>
                <div className="text-indigo-100">Only 20 Students</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/contact" className="group relative px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                <span className="relative z-10 flex items-center">
                  🎯 Enroll Now - Book Your Seat
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link href="/contact" className="group px-10 py-5 border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="flex items-center">
                  📞 Call for Consultation
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">📱</span>
                </span>
              </Link>
            </div>

            {/* Special Offers */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-300/30 inline-block">
                <p className="text-green-200 font-semibold">
                  💡 Special Offer: Early Bird Discount Available - 
                  <Link href="/contact" className="underline hover:text-white transition-colors ml-1">Contact Us Today!</Link>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <p className="text-indigo-100 text-lg mb-4">Still have questions? We're here to help!</p>
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
            <Link href="/courses" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              View All Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}