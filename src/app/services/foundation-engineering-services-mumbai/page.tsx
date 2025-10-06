import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Foundation Engineering Services in Mumbai | Pile Foundation, Soil Analysis, Geotechnical Design | Trinkets Institute',
  description: 'Professional Foundation Engineering Services in Mumbai. Expert pile foundation, soil analysis, shallow & deep foundation design. 22+ years experience. Call +91-9820064471',
  keywords: [
    'Foundation Engineering Services Mumbai',
    'Foundation Design Services Mumbai',
    'Pile Foundation Design Mumbai',
    'Soil Analysis Mumbai',
    'Geotechnical Engineering Mumbai',
    'Deep Foundation Design',
    'Shallow Foundation Design',
    'Foundation Consulting Mumbai',
    'Soil Investigation Mumbai',
    'Foundation Analysis Mumbai',
    'Raft Foundation Design',
    'Retaining Wall Design Mumbai',
    'Foundation Settlement Analysis',
    'Bearing Capacity Analysis',
    'Foundation Stability Analysis',
    'Ground Improvement Mumbai',
    'Foundation Construction Mumbai',
    'Structural Foundation Design',
    'Building Foundation Mumbai',
    'Industrial Foundation Design Mumbai'
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
    title: 'Foundation Engineering Services in Mumbai | Pile Foundation, Soil Analysis, Geotechnical Design',
    description: 'Professional Foundation Engineering Services in Mumbai. Expert pile foundation, soil analysis, shallow & deep foundation design.',
    url: 'https://trinketsinstitute.com/services/foundation-engineering-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/foundation-engineering-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Foundation Engineering Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Engineering Services in Mumbai | Pile Foundation, Soil Analysis, Geotechnical Design',
    description: 'Professional Foundation Engineering Services in Mumbai. Expert pile foundation, soil analysis.',
    images: ['/images/foundation-engineering-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/foundation-engineering-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function FoundationEngineering() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Foundation Engineering Services in Mumbai',
    description: 'Professional foundation engineering services in Mumbai including pile foundation design, soil analysis, geotechnical engineering, shallow and deep foundation design, soil investigation, and foundation consulting for residential, commercial, and industrial projects.',
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
    serviceType: 'Foundation Engineering and Geotechnical Design',
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
      name: 'Foundation Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pile Foundation Design',
            description: 'Complete pile foundation design and analysis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soil Investigation',
            description: 'Comprehensive soil analysis and geotechnical investigation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Foundation Settlement Analysis',
            description: 'Settlement analysis and foundation stability assessment'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Retaining Wall Design',
            description: 'Earth retaining structures and slope stability'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '165'
    }
  }

  const services = [
    {
      title: "Pile Foundation Design",
      description: "Complete design of pile foundations for all soil conditions and load requirements",
      icon: "🔨",
      features: ["Driven Piles", "Bored Piles", "Pile Load Testing", "Group Effect Analysis", "Negative Friction", "Pile Capacity Analysis"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "3-8 weeks",
      applications: ["High-rise Buildings", "Industrial Structures", "Bridge Foundations", "Marine Structures"],
      efficiency: "95% load capacity optimization"
    },
    {
      title: "Soil Investigation & Analysis",
      description: "Comprehensive soil investigation and geotechnical analysis for foundation design",
      icon: "🌍",
      features: ["Bore Hole Testing", "SPT Testing", "Laboratory Analysis", "Soil Classification", "Bearing Capacity", "Settlement Analysis"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Advanced",
      timeline: "2-6 weeks",
      applications: ["Site Investigation", "Foundation Design", "Earthwork Design", "Slope Stability"],
      efficiency: "Accurate soil parameters"
    },
    {
      title: "Shallow Foundation Design",
      description: "Design of spread footings, strip footings, and raft foundations for optimal performance",
      icon: "📐",
      features: ["Isolated Footings", "Combined Footings", "Strip Footings", "Raft Foundations", "Settlement Control", "Bearing Pressure"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Advanced",
      timeline: "2-5 weeks",
      applications: ["Residential Buildings", "Commercial Structures", "Industrial Buildings", "Institutional Projects"],
      efficiency: "85% material optimization"
    },
    {
      title: "Deep Foundation Systems",
      description: "Advanced deep foundation systems for challenging soil conditions",
      icon: "⚡",
      features: ["Caisson Foundations", "Diaphragm Walls", "Secant Pile Walls", "Micro Piles", "Ground Anchors", "Soil Nailing"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Expert",
      timeline: "4-10 weeks",
      applications: ["Deep Excavations", "High Load Structures", "Basement Construction", "Slope Stabilization"],
      efficiency: "Maximum depth capability"
    },
    {
      title: "Retaining Wall Design",
      description: "Earth retaining structures and slope stability analysis for various applications",
      icon: "🧱",
      features: ["Gravity Walls", "Cantilever Walls", "Counterfort Walls", "Gabion Walls", "Soil Nailing", "Ground Anchors"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Advanced",
      timeline: "3-7 weeks",
      applications: ["Highway Structures", "Building Basements", "Slope Protection", "Waterfront Structures"],
      efficiency: "Optimal earth pressure"
    },
    {
      title: "Foundation Settlement Analysis",
      description: "Comprehensive settlement analysis and foundation performance assessment",
      icon: "📊",
      features: ["Immediate Settlement", "Consolidation Settlement", "Secondary Settlement", "Differential Settlement", "Time Analysis", "Monitoring"],
      gradient: "from-teal-600 to-cyan-600",
      complexity: "Expert",
      timeline: "2-6 weeks",
      applications: ["High-rise Buildings", "Infrastructure", "Industrial Plants", "Sensitive Structures"],
      efficiency: "Predictive accuracy 95%"
    }
  ]

  const foundationTypes = [
    {
      category: "Shallow Foundations",
      description: "Cost-effective foundation solutions for moderate loads",
      icon: "🏗️",
      foundations: ["Isolated Footings", "Strip Footings", "Combined Footings", "Raft Foundations"],
      soilTypes: ["Dense Sand", "Stiff Clay", "Rock", "Medium Dense Soil"],
      applications: ["Low-rise Buildings", "Residential Structures", "Light Industrial", "Commercial Buildings"],
      benefits: ["Cost Effective", "Quick Construction", "Simple Design", "Easy Maintenance"]
    },
    {
      category: "Deep Foundations",
      description: "Advanced foundation systems for challenging conditions",
      icon: "🔩",
      foundations: ["Driven Piles", "Bored Piles", "Caissons", "Micro Piles"],
      soilTypes: ["Soft Clay", "Loose Sand", "Fill Material", "Variable Strata"],
      applications: ["High-rise Buildings", "Heavy Structures", "Marine Works", "Bridge Foundations"],
      benefits: ["High Capacity", "Deep Bearing", "Vibration Resistance", "Lateral Stability"]
    },
    {
      category: "Specialized Foundations",
      description: "Custom foundation solutions for unique requirements",
      icon: "⚙️",
      foundations: ["Ground Improvement", "Soil Replacement", "Chemical Stabilization", "Dynamic Compaction"],
      soilTypes: ["Problem Soils", "Expansive Clay", "Collapsible Soil", "Liquefaction Prone"],
      applications: ["Difficult Sites", "Special Structures", "Rehabilitation", "Ground Treatment"],
      benefits: ["Site Specific", "Innovative Solutions", "Risk Mitigation", "Performance Guarantee"]
    },
    {
      category: "Marine Foundations",
      description: "Foundation systems for waterfront and marine structures",
      icon: "🌊",
      foundations: ["Marine Piles", "Caissons", "Cofferdams", "Floating Foundations"],
      soilTypes: ["Marine Clay", "Loose Sand", "Coral", "Variable Marine"],
      applications: ["Ports & Harbors", "Bridges", "Offshore Structures", "Waterfront Development"],
      benefits: ["Corrosion Resistance", "Wave Load Resistance", "Tidal Consideration", "Marine Environment"]
    }
  ]

  const analysisProcess = [
    {
      phase: "Site Investigation",
      description: "Comprehensive site investigation and soil characterization",
      icon: "🔍",
      activities: ["Desk Study", "Site Reconnaissance", "Bore Hole Investigation", "Laboratory Testing", "Geophysical Survey"],
      duration: "2-4 weeks",
      deliverables: ["Site Investigation Report", "Soil Parameters", "Groundwater Data", "Design Recommendations"]
    },
    {
      phase: "Foundation Analysis",
      description: "Detailed foundation analysis and design optimization",
      icon: "📊",
      activities: ["Load Analysis", "Bearing Capacity", "Settlement Analysis", "Stability Analysis", "Foundation Selection"],
      duration: "3-6 weeks",
      deliverables: ["Foundation Design", "Analysis Reports", "Design Calculations", "Performance Assessment"]
    },
    {
      phase: "Design Development",
      description: "Detailed foundation design and construction drawings",
      icon: "📐",
      activities: ["Detailed Design", "Reinforcement Details", "Construction Drawings", "Specifications", "Quantity Estimation"],
      duration: "2-5 weeks",
      deliverables: ["Foundation Drawings", "Specifications", "BOQ", "Construction Details"]
    },
    {
      phase: "Construction Support",
      description: "Construction supervision and quality assurance",
      icon: "🔧",
      activities: ["Construction Supervision", "Quality Control", "Load Testing", "Monitoring", "Performance Verification"],
      duration: "Throughout Construction",
      deliverables: ["Site Supervision", "Test Reports", "Quality Certificates", "As-built Drawings"]
    }
  ]

  const soilTypes = [
    { type: "Sandy Soil", description: "Good drainage, moderate bearing", icon: "🏖️", bearing: "150-300 kN/m²" },
    { type: "Clay Soil", description: "Variable properties, settlement", icon: "🧱", bearing: "75-200 kN/m²" },
    { type: "Rock", description: "High bearing capacity", icon: "🪨", bearing: "1000+ kN/m²" },
    { type: "Fill Material", description: "Requires special treatment", icon: "🏗️", bearing: "50-150 kN/m²" }
  ]

  const features = [
    { title: "22+ Years Experience", value: "22+", suffix: "Years", icon: "🏆" },
    { title: "250+ Foundation Projects", value: "250+", suffix: "Projects", icon: "📈" },
    { title: "95% Design Accuracy", value: "95", suffix: "%", icon: "✅" },
    { title: "40% Cost Savings", value: "40", suffix: "%", icon: "💰" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">🌍</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert Foundation Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Foundation Engineering
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>Foundation Engineering Services in Mumbai</strong> for pile foundations, 
                soil analysis, geotechnical design, and foundation consulting. Expert shallow and deep foundation 
                design with 22+ years of experience for safe and economical structures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Foundation Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/structural-design-analysis" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn Foundation Design
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
                Complete Foundation
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Engineering Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive foundation engineering services from soil investigation to construction support
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

        {/* Foundation Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Foundation
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized foundation solutions for all soil conditions and project requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {foundationTypes.map((type, index) => (
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
                      <h4 className="font-semibold text-gray-900 mb-3">Foundation Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.foundations.map((foundation, foundationIndex) => (
                          <div key={foundationIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {foundation}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Suitable Soil Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.soilTypes.map((soil, soilIndex) => (
                          <div key={soilIndex} className="flex items-center text-purple-600 text-sm">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {soil}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.applications.map((application, appIndex) => (
                          <div key={appIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {application}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
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

        {/* Analysis Process Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Foundation Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to foundation engineering ensuring optimal performance and safety
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analysisProcess.map((process, index) => (
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

        {/* Soil Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Soil Types &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Bearing Capacity
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert foundation design for all soil conditions and bearing capacities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soilTypes.map((soil, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {soil.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {soil.type}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{soil.description}</p>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {soil.bearing}
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
                    Master Foundation Engineering
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced foundation engineering from industry experts. Professional training programs 
                    covering pile design, soil analysis, geotechnical engineering, and foundation design with hands-on projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/structural-design-analysis" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Foundation Design Course
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
                    <h4 className="font-bold mb-2">🔨 Pile Foundation Design</h4>
                    <p className="text-white/80">Master pile foundation design and load capacity analysis</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🌍 Geotechnical Engineering</h4>
                    <p className="text-white/80">Learn soil mechanics and geotechnical analysis</p>
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
                Get expert answers to common questions about foundation engineering services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What foundation engineering services do you offer in Mumbai?",
                    answer: "We offer comprehensive foundation engineering services in Mumbai including pile foundation design, soil investigation, geotechnical analysis, shallow and deep foundation design, retaining wall design, settlement analysis, and foundation consulting for residential, commercial, and industrial projects.",
                    icon: "🌍",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "Do you provide soil investigation and geotechnical analysis?",
                    answer: "Yes, we provide comprehensive soil investigation including bore hole testing, SPT testing, laboratory analysis, soil classification, bearing capacity determination, and settlement analysis. Our geotechnical reports form the basis for optimal foundation design.",
                    icon: "🔍",
                    category: "Soil Analysis",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "What types of pile foundations do you design?",
                    answer: "We design all types of pile foundations including driven piles, bored piles, cast-in-situ piles, micro piles, and caisson foundations. Our designs include pile load testing, group effect analysis, and capacity optimization for maximum efficiency.",
                    icon: "🔨",
                    category: "Pile Design",
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
                    question: "Do you provide foundation engineering training programs?",
                    answer: "Yes, we offer comprehensive foundation engineering training covering pile design, soil mechanics, geotechnical analysis, foundation design, and settlement analysis with hands-on project experience and industry-standard design practices for professional certification.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What are typical timelines for foundation engineering projects?",
                    answer: "Project timelines vary by complexity: site investigation (2-4 weeks), foundation analysis (3-6 weeks), design development (2-5 weeks), and construction support throughout the project. We provide detailed schedules and milestone tracking.",
                    icon: "⏱️",
                    category: "Timeline",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "How much cost savings can optimized foundation design achieve?",
                    answer: "Our optimized foundation designs typically achieve 30-45% cost savings through proper foundation selection, soil improvement techniques, efficient design, and value engineering without compromising safety and structural integrity.",
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
                <div className="text-3xl mb-3">🌍</div>
                <div className="text-2xl font-black text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Design Accuracy</div>
                <div className="text-xs text-gray-500 mt-1">Foundation Precision</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">40%</div>
                <div className="text-gray-600 font-semibold">Cost Savings</div>
                <div className="text-xs text-gray-500 mt-1">Design Optimization</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need Foundation Engineering Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our foundation engineering experts are ready to discuss your project requirements and provide customized foundation design and geotechnical solutions.
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
                    Foundation Engineering?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert foundation engineering services in Mumbai from certified engineers. Comprehensive 
                  pile foundation design, soil analysis, geotechnical engineering, and foundation consulting for safe and economical structures.
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
                    href="/services/structural-analysis-design-services-mumbai" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🏗️ Structural Analysis
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