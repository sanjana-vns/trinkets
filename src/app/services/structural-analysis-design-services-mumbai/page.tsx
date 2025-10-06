import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Structural Analysis Design Services in Mumbai | STAAD Pro, ETABS, Foundation Design | Trinkets Institute',
  description: 'Professional Structural Analysis Design Services in Mumbai. Expert STAAD Pro, ETABS modeling, foundation design, seismic analysis. Call +91-9820064471',
  keywords: [
    'Structural Analysis Design Services Mumbai',
    'Structural Design Services Mumbai',
    'STAAD Pro Analysis Mumbai',
    'ETABS Modeling Mumbai',
    'Foundation Design Mumbai',
    'Seismic Analysis Mumbai',
    'Structural Engineering Mumbai',
    'Building Structure Design',
    'Steel Structure Analysis',
    'RCC Design Mumbai',
    'Structural Modeling Services',
    'Load Analysis Mumbai',
    'Earthquake Analysis',
    'Wind Load Analysis',
    'Structural Calculation Services',
    'Construction Analysis Mumbai',
    'Structural Consulting Mumbai',
    'Building Safety Analysis',
    'Structural Assessment Mumbai',
    'Civil Structural Design Mumbai'
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
    title: 'Structural Analysis Design Services in Mumbai | STAAD Pro, ETABS, Foundation Design',
    description: 'Professional Structural Analysis Design Services in Mumbai. Expert STAAD Pro, ETABS modeling, foundation design, seismic analysis.',
    url: 'https://trinketsinstitute.com/services/structural-analysis-design-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/structural-analysis-design-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Structural Analysis Design Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Analysis Design Services in Mumbai | STAAD Pro, ETABS, Foundation Design',
    description: 'Professional Structural Analysis Design Services in Mumbai. Expert STAAD Pro, ETABS modeling.',
    images: ['/images/structural-analysis-design-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/structural-analysis-design-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function StructuralAnalysisDesign() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Structural Analysis Design Services in Mumbai',
    description: 'Professional structural analysis and design services in Mumbai including STAAD Pro analysis, ETABS modeling, foundation design, seismic analysis, and structural engineering for buildings and infrastructure.',
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
    serviceType: 'Structural Analysis and Design Engineering',
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
      name: 'Structural Analysis Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'STAAD Pro Analysis',
            description: 'Advanced structural analysis using STAAD Pro software'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ETABS Modeling',
            description: 'Building analysis and design using ETABS software'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Foundation Design',
            description: 'Foundation design and geotechnical analysis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seismic Analysis',
            description: 'Earthquake analysis and seismic design'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '205'
    }
  }

  const services = [
    {
      title: "STAAD Pro Analysis & Design",
      description: "Advanced structural analysis and design using STAAD Pro for buildings and infrastructure",
      icon: "🏗️",
      features: ["3D Modeling", "Load Analysis", "Steel Design", "Concrete Design", "Dynamic Analysis", "Code Compliance"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "3-6 weeks",
      applications: ["High-rise Buildings", "Industrial Structures", "Bridges", "Towers", "Complex Structures"],
      efficiency: "95% design accuracy"
    },
    {
      title: "ETABS Building Analysis",
      description: "Comprehensive building analysis and design using ETABS software for multi-story structures",
      icon: "🏢",
      features: ["Building Modeling", "Seismic Analysis", "Wind Analysis", "Response Spectrum", "Time History", "Performance Based Design"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Expert",
      timeline: "4-8 weeks",
      applications: ["Residential Buildings", "Commercial Towers", "Mixed-use Buildings", "Institutional Buildings"],
      efficiency: "90% time savings"
    },
    {
      title: "Foundation Design & Analysis",
      description: "Complete foundation design including shallow, deep foundations, and geotechnical analysis",
      icon: "⚒️",
      features: ["Soil Investigation", "Bearing Capacity", "Settlement Analysis", "Pile Design", "Raft Foundation", "Retaining Walls"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Advanced",
      timeline: "2-5 weeks",
      applications: ["Building Foundations", "Industrial Foundations", "Bridge Foundations", "Marine Structures"],
      efficiency: "85% cost optimization"
    },
    {
      title: "Seismic Analysis & Design",
      description: "Earthquake resistant design and seismic analysis for structures in seismic zones",
      icon: "🌊",
      features: ["Response Spectrum Analysis", "Time History Analysis", "Base Isolation", "Damping Systems", "Performance Assessment", "Retrofit Design"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Expert",
      timeline: "3-7 weeks",
      applications: ["Seismic Zone Buildings", "Critical Facilities", "Heritage Structures", "Industrial Plants"],
      efficiency: "99% safety compliance"
    },
    {
      title: "Steel Structure Design",
      description: "Complete steel structure design including connections, fabrication drawings, and optimization",
      icon: "🔩",
      features: ["Member Design", "Connection Design", "Fabrication Details", "Erection Sequence", "Cost Optimization", "Quality Control"],
      gradient: "from-gray-600 to-slate-600",
      complexity: "Advanced",
      timeline: "4-10 weeks",
      applications: ["Industrial Buildings", "Warehouses", "Pre-engineered Buildings", "Steel Towers"],
      efficiency: "30% material savings"
    },
    {
      title: "Load Analysis & Calculations",
      description: "Comprehensive load analysis including dead, live, wind, and seismic loads as per codes",
      icon: "⚖️",
      features: ["Dead Load Analysis", "Live Load Calculation", "Wind Load Analysis", "Seismic Load", "Load Combinations", "Safety Factors"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Advanced",
      timeline: "1-3 weeks",
      applications: ["All Building Types", "Bridges", "Industrial Structures", "Special Structures"],
      efficiency: "100% code compliance"
    }
  ]

  const structuralTypes = [
    {
      category: "Building Structures",
      description: "Complete structural design for residential and commercial buildings",
      icon: "🏢",
      structures: ["Residential Buildings", "Commercial Towers", "Mixed-use Developments", "Institutional Buildings"],
      analysis: ["STAAD Pro", "ETABS", "SAFE", "Manual Calculations"],
      codes: ["IS 456", "IS 1893", "IS 875", "NBC"],
      benefits: ["Optimized Design", "Cost Effective", "Code Compliant", "Earthquake Resistant"]
    },
    {
      category: "Industrial Structures",
      description: "Heavy-duty industrial structure design and analysis",
      icon: "🏭",
      structures: ["Industrial Buildings", "Warehouses", "Manufacturing Plants", "Power Plants"],
      analysis: ["STAAD Pro", "RAM Steel", "Tekla Structures", "Advanced Analysis"],
      codes: ["IS 800", "IS 875", "IS 1893", "AISC"],
      benefits: ["Heavy Load Capacity", "Vibration Control", "Durability", "Safety Compliance"]
    },
    {
      category: "Foundation Systems",
      description: "Advanced foundation design for all soil conditions",
      icon: "⚒️",
      structures: ["Shallow Foundations", "Deep Foundations", "Pile Foundations", "Raft Foundations"],
      analysis: ["SAFE", "PLAXIS", "Geotechnical Analysis", "Settlement Analysis"],
      codes: ["IS 2911", "IS 6403", "IS 1904", "IRC"],
      benefits: ["Optimal Foundation", "Settlement Control", "Cost Effective", "Long-term Stability"]
    },
    {
      category: "Special Structures",
      description: "Specialized structures requiring advanced analysis",
      icon: "🌉",
      structures: ["Bridges", "Towers", "Retaining Walls", "Water Tanks"],
      analysis: ["Advanced FEM", "Dynamic Analysis", "Non-linear Analysis", "Special Modeling"],
      codes: ["IRC", "IS 3370", "IS 4326", "Special Codes"],
      benefits: ["Advanced Design", "Performance Based", "Innovative Solutions", "Risk Mitigation"]
    }
  ]

  const designProcess = [
    {
      phase: "Conceptual Design",
      description: "Initial structural concept and preliminary design",
      icon: "💡",
      activities: ["Structural Planning", "Material Selection", "Preliminary Sizing", "Load Estimation", "Code Review"],
      duration: "1-2 weeks",
      deliverables: ["Conceptual Drawings", "Preliminary Calculations", "Material Estimates", "Design Basis"]
    },
    {
      phase: "Analysis & Modeling",
      description: "Detailed structural analysis and computer modeling",
      icon: "💻",
      activities: ["3D Modeling", "Load Analysis", "Structural Analysis", "Design Optimization", "Code Checking"],
      duration: "3-6 weeks",
      deliverables: ["Analysis Models", "Calculation Reports", "Design Results", "Optimization Studies"]
    },
    {
      phase: "Design Documentation",
      description: "Detailed design drawings and specifications",
      icon: "📐",
      activities: ["Detailed Drawings", "Reinforcement Details", "Connection Design", "Specifications", "Quantity Estimation"],
      duration: "2-4 weeks",
      deliverables: ["Working Drawings", "Detailed Specifications", "BOQ", "Construction Details"]
    },
    {
      phase: "Construction Support",
      description: "Construction phase support and quality assurance",
      icon: "🔧",
      activities: ["Site Support", "Quality Control", "Design Clarifications", "Modifications", "Progress Monitoring"],
      duration: "Throughout Construction",
      deliverables: ["Site Support", "Quality Reports", "As-built Drawings", "Completion Certificate"]
    }
  ]

  const technologies = [
    { name: "STAAD Pro", description: "Advanced structural analysis", icon: "🏗️", category: "Analysis Software" },
    { name: "ETABS", description: "Building analysis and design", icon: "🏢", category: "Building Software" },
    { name: "SAFE", description: "Foundation and slab design", icon: "⚒️", category: "Foundation Software" },
    { name: "AutoCAD", description: "Structural drafting", icon: "📐", category: "Drafting Tools" },
    { name: "Tekla Structures", description: "Steel detailing", icon: "🔩", category: "Steel Software" },
    { name: "RAM Steel", description: "Steel design and analysis", icon: "🏭", category: "Steel Tools" },
    { name: "PLAXIS", description: "Geotechnical analysis", icon: "🌍", category: "Geotechnical" },
    { name: "MIDAS", description: "Bridge and civil structures", icon: "🌉", category: "Specialized Software" }
  ]

  const features = [
    { title: "22+ Years Experience", value: "22+", suffix: "Years", icon: "🏆" },
    { title: "400+ Projects Completed", value: "400+", suffix: "Projects", icon: "📈" },
    { title: "95% Design Accuracy", value: "95", suffix: "%", icon: "✅" },
    { title: "30% Cost Savings", value: "30", suffix: "%", icon: "💰" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">🏗️</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert Structural Design</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Structural Analysis Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>Structural Analysis Design Services in Mumbai</strong> using STAAD Pro, ETABS, 
                and advanced engineering software. Expert foundation design, seismic analysis, and structural engineering 
                with 22+ years of experience for safe and cost-effective building solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Design Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/structural-design-analysis" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn Structural Design
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
                Complete Structural Analysis &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Design Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced structural engineering services using industry-leading software for safe and economical designs
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
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <div className="text-blue-600 font-semibold">{service.timeline}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Efficiency:</span>
                        <div className="text-green-600 font-semibold">{service.efficiency}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center text-gray-700 text-xs">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      service.complexity === 'Expert' ? 'text-purple-600 bg-purple-100' :
                      'text-blue-600 bg-blue-100'
                    }`}>
                      {service.complexity}
                    </span>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structural Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Structural Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive structural design solutions for all types of buildings and infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {structuralTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {type.category}
                      </h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Structure Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.structures.map((structure, structureIndex) => (
                          <div key={structureIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {structure}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Analysis Software:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.analysis.map((software, softwareIndex) => (
                          <div key={softwareIndex} className="flex items-center text-purple-600 text-sm">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {software}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Design Codes:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.codes.map((code, codeIndex) => (
                          <div key={codeIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {code}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.benefits.map((benefit, benIndex) => (
                          <div key={benIndex} className="flex items-center text-orange-600 text-sm">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Structural Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to structural design ensuring safety, economy, and code compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designProcess.map((process, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 relative"
                >
                  <div className="absolute top-4 right-4 text-2xl font-bold text-blue-600/20 group-hover:text-blue-600/40 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {process.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{process.description}</p>
                    
                    <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                      {process.duration}
                    </div>
                    
                    <div className="space-y-4 text-left">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Activities:</h4>
                        <div className="space-y-1">
                          {process.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="text-xs text-gray-600">
                              • {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Deliverables:</h4>
                        <div className="space-y-1">
                          {process.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="text-xs text-green-600">
                              ✓ {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Advanced Structural
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software and tools for precise structural analysis and design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </div>
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
              <div className="absolute top-4 right-4 text-6xl opacity-20">🎓</div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Master Structural Analysis & Design
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced structural analysis and design from industry experts. Professional training programs 
                    covering STAAD Pro, ETABS, foundation design, and seismic analysis with hands-on projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/structural-design-analysis" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Structural Design Course
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
                    <h4 className="font-bold mb-2">🏗️ STAAD Pro Mastery</h4>
                    <p className="text-white/80">Master advanced structural analysis and design using STAAD Pro</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🏢 ETABS Expertise</h4>
                    <p className="text-white/80">Learn building analysis and seismic design with ETABS</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🏆 Industry Certification</h4>
                    <p className="text-white/80">Professional certification and placement assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
                <span className="text-blue-600 font-semibold text-sm mr-2">❓</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Expert Answers</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Frequently Asked
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get expert answers to common questions about structural analysis design services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What structural analysis design services do you offer in Mumbai?",
                    answer: "We offer comprehensive structural analysis design services in Mumbai including STAAD Pro analysis, ETABS building modeling, foundation design, seismic analysis, steel structure design, and load calculations using industry-standard software and Indian codes.",
                    icon: "🏗️",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "Which software do you use for structural analysis and design?",
                    answer: "We use industry-leading software including STAAD Pro for structural analysis, ETABS for building design, SAFE for foundation design, AutoCAD for drafting, Tekla Structures for steel detailing, and PLAXIS for geotechnical analysis.",
                    icon: "💻",
                    category: "Technology",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "Do you provide seismic analysis for earthquake-resistant design?",
                    answer: "Yes, we provide comprehensive seismic analysis including response spectrum analysis, time history analysis, base isolation design, and performance-based seismic design as per IS 1893 and international codes for earthquake-resistant structures.",
                    icon: "🌊",
                    category: "Seismic Design",
                    gradient: "from-purple-600 to-pink-600"
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-blue-200/50 transform hover:-translate-y-1 overflow-hidden relative">
                      <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        {faq.icon}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start mb-4">
                          <div className={`bg-gradient-to-br ${faq.gradient} p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <span className="text-white text-xl">{faq.icon}</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block">
                              {faq.category}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {faq.question}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Secondary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "Do you provide structural design training programs?",
                    answer: "Yes, we offer comprehensive structural design training covering STAAD Pro, ETABS, foundation design, seismic analysis, and steel structures with hands-on project experience and industry-standard software training for professional certification.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What are typical project timelines for structural design?",
                    answer: "Project timelines vary by complexity: conceptual design (1-2 weeks), detailed analysis (3-6 weeks), design documentation (2-4 weeks), and construction support throughout the project. We provide detailed schedules and milestone tracking.",
                    icon: "⏱️",
                    category: "Timeline",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "How much cost savings can optimized structural design achieve?",
                    answer: "Our optimized structural designs typically achieve 25-35% cost savings through efficient material usage, optimized member sizing, advanced analysis techniques, and value engineering without compromising safety and code compliance.",
                    icon: "💰",
                    category: "Cost Optimization",
                    gradient: "from-teal-600 to-cyan-600"
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-purple-200/50 transform hover:-translate-y-1 overflow-hidden relative">
                      <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        {faq.icon}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start mb-4">
                          <div className={`bg-gradient-to-br ${faq.gradient} p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <span className="text-white text-xl">{faq.icon}</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3 inline-block">
                              {faq.category}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                              {faq.question}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏗️</div>
                <div className="text-2xl font-black text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Design Accuracy</div>
                <div className="text-xs text-gray-500 mt-1">Structural Precision</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">22+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">Design Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need Structural Design Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our structural engineering experts are ready to discuss your project requirements and provide customized analysis and design solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      📞 Schedule Consultation
                    </Link>
                    <Link 
                      href="tel:+919820064471" 
                      className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      📱 Call +91-9820064471
                    </Link>
                  </div>
                </div>
              </div>
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
                  Ready for Professional
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Structural Analysis & Design?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert structural analysis design services in Mumbai from certified engineers. Comprehensive 
                  STAAD Pro, ETABS analysis, foundation design, and seismic engineering for safe and economical structures.
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
                    href="/services/building-services-engineering-mumbai" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🏢 Building Services
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