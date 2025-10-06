import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Piping Stress Analysis Services in Mumbai | Expert CAESAR II Analysis | Trinkets Institute',
  description: 'Professional Piping Stress Analysis Services in Mumbai using CAESAR II, AutoPIPE. Expert structural integrity assessment, thermal expansion analysis. Call +91-9820064471',
  keywords: [
    'Piping Stress Analysis Services Mumbai',
    'CAESAR II Analysis Mumbai',
    'Piping Stress Calculation Mumbai',
    'Thermal Expansion Analysis',
    'Pipe Support Design Mumbai',
    'Structural Integrity Analysis',
    'AutoPIPE Stress Analysis',
    'Process Piping Stress Services',
    'Industrial Piping Analysis',
    'Pipeline Stress Assessment',
    'Piping Flexibility Analysis',
    'Stress Engineering Mumbai',
    'Piping Code Compliance',
    'Mechanical Stress Analysis',
    'Plant Piping Stress Services'
  ].join(', '),
  authors: [{ name: 'Trinkets Institute' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
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
    title: 'Piping Stress Analysis Services in Mumbai | Expert CAESAR II Analysis',
    description: 'Professional Piping Stress Analysis Services in Mumbai using CAESAR II, AutoPIPE. Expert structural integrity assessment, thermal expansion analysis.',
    url: 'https://trinketsinstitute.com/services/piping-stress-analysis-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/piping-stress-analysis-services-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Stress Analysis Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Stress Analysis Services in Mumbai | Expert CAESAR II Analysis',
    description: 'Professional Piping Stress Analysis Services in Mumbai using CAESAR II, AutoPIPE. Expert structural integrity assessment.',
    images: ['/images/piping-stress-analysis-services-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/piping-stress-analysis-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function PipingStressAnalysisServices() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Piping Stress Analysis Services in Mumbai',
    description: 'Professional piping stress analysis services in Mumbai using CAESAR II and AutoPIPE for structural integrity assessment, thermal expansion analysis, and code compliance verification.',
    provider: {
      '@type': 'Organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Business Address',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400001',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9820064471',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi']
      }
    },
    serviceType: 'Piping Stress Analysis and Engineering',
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
      containedIn: {
        '@type': 'State',
        name: 'Maharashtra',
        containedIn: {
          '@type': 'Country',
          name: 'India'
        }
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Piping Stress Analysis Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CAESAR II Analysis',
            description: 'Comprehensive piping stress analysis using industry-standard CAESAR II software'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thermal Expansion Analysis',
            description: 'Detailed thermal stress and expansion analysis for process piping systems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pipe Support Design',
            description: 'Optimal pipe support design and structural analysis for safe operations'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '180'
    }
  }

  const services = [
    {
      title: "CAESAR II Stress Analysis",
      description: "Comprehensive piping stress analysis using industry-standard CAESAR II software",
      icon: "⚡",
      features: ["Static Analysis", "Dynamic Analysis", "Code Compliance", "Fatigue Assessment"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Thermal Expansion Analysis",
      description: "Detailed thermal stress and expansion analysis for high-temperature systems",
      icon: "🌡️",
      features: ["Temperature Mapping", "Expansion Calculations", "Stress Distribution", "Movement Analysis"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "AutoPIPE Stress Analysis",
      description: "Advanced stress analysis using AutoPIPE for complex piping configurations",
      icon: "🔧",
      features: ["3D Modeling", "Multi-load Cases", "Seismic Analysis", "Wind Load Analysis"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Pipe Support Design",
      description: "Optimal pipe support design and structural analysis for safe operations",
      icon: "🏗️",
      features: ["Support Optimization", "Load Calculations", "Structural Design", "Installation Guidelines"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Code Compliance Verification",
      description: "Ensure compliance with international piping codes and standards",
      icon: "📋",
      features: ["ASME B31.3", "ASME B31.1", "ASME B31.4", "API Standards"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Flexibility Analysis",
      description: "Piping flexibility analysis and stress mitigation solutions",
      icon: "🔄",
      features: ["Loop Stress Analysis", "Expansion Joint Design", "Flexibility Calculations", "Optimization"],
      gradient: "from-teal-600 to-blue-600"
    }
  ]

  const analysisTypes = [
    {
      type: "Static Analysis",
      description: "Comprehensive static stress analysis for sustained loads",
      icon: "⚖️",
      applications: ["Dead Weight", "Pressure Loads", "Spring Hangers", "Support Reactions"]
    },
    {
      type: "Dynamic Analysis",
      description: "Dynamic stress analysis for varying operational conditions",
      icon: "📊",
      applications: ["Seismic Loads", "Wind Loads", "Harmonic Analysis", "Time History"]
    },
    {
      type: "Thermal Analysis",
      description: "Thermal stress and expansion analysis for temperature variations",
      icon: "🔥",
      applications: ["Thermal Growth", "Temperature Cycling", "Thermal Fatigue", "Expansion Loops"]
    },
    {
      type: "Fatigue Analysis",
      description: "Fatigue life assessment for cyclic loading conditions",
      icon: "🔄",
      applications: ["Pressure Cycling", "Thermal Cycling", "Vibration Fatigue", "Life Assessment"]
    }
  ]

  const industries = [
    { name: "Oil & Gas Refineries", icon: "⛽", description: "High-pressure, high-temperature piping systems" },
    { name: "Petrochemical Plants", icon: "🧪", description: "Complex process piping with corrosive fluids" },
    { name: "Power Generation", icon: "⚡", description: "Steam lines, feedwater, and cooling systems" },
    { name: "Chemical Processing", icon: "⚗️", description: "Reactor systems and process equipment piping" },
    { name: "LNG Facilities", icon: "❄️", description: "Cryogenic piping and thermal stress analysis" },
    { name: "Steel Plants", icon: "🏭", description: "High-temperature furnace and cooling systems" }
  ]

  const features = [
    { title: "20+ Years Experience", value: "20+", suffix: "Years", icon: "🏆" },
    { title: "1000+ Analysis Completed", value: "1000+", suffix: "Projects", icon: "📈" },
    { title: "100% Code Compliance", value: "100", suffix: "%", icon: "✅" },
    { title: "24/7 Technical Support", value: "24/7", suffix: "Support", icon: "📞" }
  ]

  const software = [
    { name: "CAESAR II", description: "Industry standard for piping stress analysis", icon: "💻", expertise: "Expert" },
    { name: "AutoPIPE", description: "Advanced 3D piping stress analysis", icon: "🖥️", expertise: "Advanced" },
    { name: "PIPESTRESS", description: "Comprehensive stress analysis software", icon: "⚙️", expertise: "Professional" },
    { name: "ROHR2", description: "European standard stress analysis tool", icon: "🔧", expertise: "Intermediate" }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float-animated"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200/15 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
                <span className="text-blue-600 font-semibold text-sm mr-2">⚡</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert Analysis Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Piping Stress Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>Piping Stress Analysis Services in Mumbai</strong> using CAESAR II, AutoPIPE, and advanced 
                engineering tools. Expert structural integrity assessment, thermal expansion analysis, and code compliance 
                verification for oil & gas, petrochemical, and power plant industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Expert Analysis
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/piping-design-course-mumbai" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn Stress Analysis
                  </span>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group text-center transform transition-all duration-500 hover:scale-110"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-sm">
                      {feature.suffix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Our Piping Stress Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Service Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive stress analysis services ensuring structural integrity and code compliance for your piping systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden relative"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl">{service.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="/contact"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      Get Quote
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Types of Stress
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Analysis We Perform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive analysis methods to ensure your piping systems meet all safety and performance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analysisTypes.map((analysis, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {analysis.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {analysis.type}
                      </h3>
                      <p className="text-gray-600 mb-4">{analysis.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {analysis.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-gray-700 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software & Tools Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Advanced Software &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Analysis Tools
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software tools for accurate and reliable piping stress analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {software.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {tool.expertise}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Industries We
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Serve
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized stress analysis services across diverse industrial sectors in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Integration Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">📊</div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Master Piping Stress Analysis
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn CAESAR II, AutoPIPE, and advanced stress analysis techniques from industry experts. 
                    Comprehensive training programs with hands-on project experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/piping-design-course-mumbai" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Stress Analysis Course
                    </Link>
                    <Link 
                      href="/contact" 
                      className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center"
                    >
                      🎯 Corporate Training
                    </Link>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">💻 CAESAR II Mastery</h4>
                    <p className="text-white/80">Complete training on industry-standard software</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🔧 Hands-on Projects</h4>
                    <p className="text-white/80">Real-world stress analysis case studies</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🏆 Industry Certification</h4>
                    <p className="text-white/80">Professional certification and placement support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Frequently Asked
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What piping stress analysis services do you offer in Mumbai?",
                  answer: "We offer comprehensive piping stress analysis services in Mumbai including CAESAR II analysis, thermal expansion analysis, AutoPIPE stress analysis, pipe support design, code compliance verification, and flexibility analysis for various industrial applications."
                },
                {
                  question: "Which software tools do you use for stress analysis?",
                  answer: "Our experts use industry-standard software including CAESAR II, AutoPIPE, PIPESTRESS, and ROHR2 for comprehensive piping stress analysis, ensuring accurate results and code compliance."
                },
                {
                  question: "What industries do you serve for piping stress analysis in Mumbai?",
                  answer: "We serve oil & gas refineries, petrochemical plants, power generation facilities, chemical processing units, LNG facilities, and steel plants in Mumbai with specialized stress analysis solutions."
                },
                {
                  question: "Do you provide training on piping stress analysis software?",
                  answer: "Yes, we offer comprehensive training programs on CAESAR II, AutoPIPE, and other stress analysis software along with our professional services. Our courses include hands-on projects and industry certification."
                },
                {
                  question: "What codes and standards do you follow for stress analysis?",
                  answer: "We ensure compliance with international codes including ASME B31.3, ASME B31.1, ASME B31.4, API standards, and other relevant industry codes for safe and reliable piping design."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-4 left-4 w-12 h-12 border-2 border-blue-200/50 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-200/30 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Need Expert Piping
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Stress Analysis?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get professional piping stress analysis services in Mumbai from certified experts. Ensure structural integrity and code compliance for your piping systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📞 Call +91-9820064471
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    href="/services/process-piping-design-services" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🔧 All Piping Services
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}