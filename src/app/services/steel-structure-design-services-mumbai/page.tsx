import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Steel Structure Design Services in Mumbai | Industrial Buildings, Warehouses, Pre-engineered Buildings | Trinkets Institute',
  description: 'Professional Steel Structure Design Services in Mumbai. Expert steel building design, connection design, fabrication drawings. 22+ years experience. Call +91-9820064471',
  keywords: [
    'Steel Structure Design Services Mumbai',
    'Steel Building Design Mumbai',
    'Industrial Steel Structure Mumbai',
    'Pre-engineered Building Design',
    'Steel Connection Design Mumbai',
    'Steel Fabrication Drawings',
    'Warehouse Steel Design',
    'Steel Structure Engineering',
    'Industrial Building Design',
    'Steel Frame Design Mumbai',
    'Structural Steel Design',
    'Steel Detailing Services',
    'Steel Construction Design',
    'Heavy Steel Structure',
    'Steel Plant Design Mumbai',
    'Steel Structure Consultant',
    'Steel Building Engineering',
    'Metal Building Design',
    'Steel Structure Analysis',
    'Steel Erection Design Mumbai'
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
    title: 'Steel Structure Design Services in Mumbai | Industrial Buildings, Warehouses, Pre-engineered Buildings',
    description: 'Professional Steel Structure Design Services in Mumbai. Expert steel building design, connection design, fabrication drawings.',
    url: 'https://trinketsinstitute.com/services/steel-structure-design-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/steel-structure-design-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Steel Structure Design Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel Structure Design Services in Mumbai | Industrial Buildings, Warehouses, Pre-engineered Buildings',
    description: 'Professional Steel Structure Design Services in Mumbai. Expert steel building design, connection design.',
    images: ['/images/steel-structure-design-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/steel-structure-design-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function SteelStructureDesign() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Steel Structure Design Services in Mumbai',
    description: 'Professional steel structure design services in Mumbai including industrial buildings, warehouses, pre-engineered buildings, steel connections, fabrication drawings, and structural steel engineering for commercial and industrial projects.',
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
    serviceType: 'Steel Structure Design and Engineering',
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
      name: 'Steel Structure Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Steel Building Design',
            description: 'Complete design of industrial steel buildings and warehouses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Steel Connection Design',
            description: 'Detailed connection design and analysis for steel structures'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fabrication Drawings',
            description: 'Detailed fabrication and erection drawings'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-engineered Building Design',
            description: 'PEB design and engineering solutions'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '185'
    }
  }

  const services = [
    {
      title: "Industrial Steel Building Design",
      description: "Complete design of industrial steel buildings including manufacturing plants and warehouses",
      icon: "🏭",
      features: ["Structural Analysis", "Load Calculations", "Wind Analysis", "Seismic Design", "Foundation Interface", "Cost Optimization"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "6-12 weeks",
      applications: ["Manufacturing Plants", "Warehouses", "Distribution Centers", "Industrial Sheds"],
      efficiency: "35% cost savings"
    },
    {
      title: "Steel Connection Design",
      description: "Detailed connection design and analysis for all types of steel connections",
      icon: "🔗",
      features: ["Bolted Connections", "Welded Connections", "Moment Connections", "Shear Connections", "Base Plates", "Splice Connections"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Expert",
      timeline: "2-4 weeks",
      applications: ["Column Connections", "Beam Connections", "Bracing Connections", "Foundation Connections"],
      efficiency: "99% connection reliability"
    },
    {
      title: "Fabrication & Erection Drawings",
      description: "Detailed fabrication drawings and erection sequences for steel structures",
      icon: "📐",
      features: ["Shop Drawings", "Erection Drawings", "Material Lists", "Bolt Lists", "Weld Details", "Piece Marks"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Advanced",
      timeline: "3-6 weeks",
      applications: ["Steel Fabrication", "Site Erection", "Quality Control", "Material Planning"],
      efficiency: "90% construction efficiency"
    },
    {
      title: "Pre-engineered Building (PEB) Design",
      description: "Complete PEB design and engineering for cost-effective steel buildings",
      icon: "🏗️",
      features: ["Primary Frame Design", "Secondary Structure", "Sheeting Design", "Door/Window Details", "Accessories", "Foundation Design"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Advanced",
      timeline: "4-8 weeks",
      applications: ["Commercial Buildings", "Sports Complexes", "Aircraft Hangars", "Storage Buildings"],
      efficiency: "40% faster construction"
    },
    {
      title: "Heavy Steel Structure Design",
      description: "Design of heavy steel structures for industrial and infrastructure projects",
      icon: "⚙️",
      features: ["Equipment Supports", "Conveyor Structures", "Pipe Racks", "Platforms", "Crane Girders", "Special Structures"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Expert",
      timeline: "4-10 weeks",
      applications: ["Power Plants", "Chemical Plants", "Steel Mills", "Mining Facilities"],
      efficiency: "Heavy load capacity"
    },
    {
      title: "Steel Structure Retrofitting",
      description: "Strengthening and modification of existing steel structures",
      icon: "🔧",
      features: ["Structural Assessment", "Strengthening Design", "Modification Plans", "Life Extension", "Seismic Upgrades", "Load Enhancement"],
      gradient: "from-teal-600 to-cyan-600",
      complexity: "Expert",
      timeline: "3-8 weeks",
      applications: ["Building Upgrades", "Industrial Modernization", "Seismic Retrofitting", "Capacity Enhancement"],
      efficiency: "75% life extension"
    }
  ]

  const steelTypes = [
    {
      category: "Industrial Buildings",
      description: "Heavy-duty industrial steel building design and engineering",
      icon: "🏭",
      structures: ["Manufacturing Plants", "Steel Mills", "Power Plants", "Chemical Plants"],
      features: ["Heavy Loads", "Crane Systems", "Equipment Supports", "Vibration Control"],
      codes: ["IS 800", "IS 875", "IS 1893", "AISC"],
      benefits: ["High Strength", "Fast Construction", "Cost Effective", "Expandable"]
    },
    {
      category: "Commercial Buildings",
      description: "Commercial steel structure design for offices and retail",
      icon: "🏢",
      structures: ["Office Buildings", "Shopping Malls", "Hotels", "Convention Centers"],
      features: ["Long Spans", "Architectural Freedom", "MEP Integration", "Fire Safety"],
      codes: ["IS 800", "NBC", "IS 1642", "Local Codes"],
      benefits: ["Design Flexibility", "Speed Construction", "Energy Efficient", "Modern Aesthetics"]
    },
    {
      category: "Warehouses & Storage",
      description: "Optimized warehouse and storage facility design",
      icon: "📦",
      structures: ["Warehouses", "Distribution Centers", "Cold Storage", "Logistics Hubs"],
      features: ["Clear Spans", "High Clearance", "Loading Docks", "Racking Systems"],
      codes: ["IS 800", "IS 875", "Fire Codes", "Storage Codes"],
      benefits: ["Maximum Storage", "Operational Efficiency", "Easy Expansion", "Low Maintenance"]
    },
    {
      category: "Infrastructure",
      description: "Steel infrastructure and special structure design",
      icon: "🌉",
      structures: ["Bridges", "Towers", "Stadiums", "Aircraft Hangars"],
      features: ["Long Spans", "Special Loads", "Dynamic Analysis", "Unique Geometry"],
      codes: ["IRC", "IS 4326", "Special Codes", "International Standards"],
      benefits: ["Innovative Design", "Large Spans", "Aesthetic Appeal", "Landmark Structures"]
    }
  ]

  const designProcess = [
    {
      phase: "Project Planning",
      description: "Initial project assessment and planning phase",
      icon: "📋",
      activities: ["Requirements Analysis", "Site Assessment", "Load Requirements", "Code Review", "Preliminary Design"],
      duration: "1-2 weeks",
      deliverables: ["Project Brief", "Design Criteria", "Preliminary Layout", "Cost Estimates"]
    },
    {
      phase: "Structural Analysis",
      description: "Detailed structural analysis and member sizing",
      icon: "📊",
      activities: ["3D Modeling", "Load Analysis", "Member Design", "Connection Design", "Stability Analysis"],
      duration: "3-6 weeks",
      deliverables: ["Analysis Models", "Calculation Reports", "Member Sizes", "Connection Details"]
    },
    {
      phase: "Detailed Design",
      description: "Detailed design drawings and specifications",
      icon: "📐",
      activities: ["General Arrangement", "Detail Drawings", "Specifications", "Material Lists", "Quality Plans"],
      duration: "4-8 weeks",
      deliverables: ["GA Drawings", "Detail Drawings", "Specifications", "Material Lists"]
    },
    {
      phase: "Fabrication Support",
      description: "Fabrication and erection support services",
      icon: "🔧",
      activities: ["Shop Drawings", "Fabrication Support", "Quality Control", "Erection Planning", "Site Support"],
      duration: "Throughout Fabrication",
      deliverables: ["Shop Drawings", "Quality Plans", "Erection Drawings", "Site Support"]
    }
  ]

  const steelGrades = [
    { grade: "IS 2062", description: "General structural steel", icon: "🔩", applications: "Buildings, Bridges" },
    { grade: "IS 8500", description: "High strength steel", icon: "💪", applications: "Heavy Structures" },
    { grade: "Weathering Steel", description: "Corrosion resistant", icon: "🌧️", applications: "Exposed Structures" },
    { grade: "High Tensile", description: "Special applications", icon: "⚡", applications: "Critical Structures" }
  ]

  const features = [
    { title: "22+ Years Experience", value: "22+", suffix: "Years", icon: "🏆" },
    { title: "300+ Steel Projects", value: "300+", suffix: "Projects", icon: "📈" },
    { title: "35% Cost Savings", value: "35", suffix: "%", icon: "💰" },
    { title: "99% Design Accuracy", value: "99", suffix: "%", icon: "✅" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">🏭</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert Steel Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Steel Structure Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>Steel Structure Design Services in Mumbai</strong> for industrial buildings, 
                warehouses, pre-engineered buildings, and heavy steel structures. Expert connection design, 
                fabrication drawings, and structural steel engineering with 22+ years of experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Steel Design Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/structural-design-analysis" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn Steel Design
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
                Complete Steel Structure
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Design Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive steel engineering services from concept to construction with advanced analysis and optimization
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

        {/* Steel Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Steel Structure
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized steel structure design for diverse industries and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steelTypes.map((type, index) => (
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
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-purple-600 text-sm">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {feature}
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

        {/* Design Process Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Steel Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to steel structure design ensuring optimal performance and cost-effectiveness
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

        {/* Steel Grades Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Steel Grades &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Materials
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expertise in all standard and specialized steel grades for optimal structural performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steelGrades.map((steel, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {steel.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {steel.grade}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{steel.description}</p>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {steel.applications}
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
                    Master Steel Structure Design
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced steel structure design from industry experts. Professional training programs 
                    covering connection design, fabrication drawings, PEB design, and heavy steel structures with hands-on projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/structural-design-analysis" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Steel Design Course
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
                    <h4 className="font-bold mb-2">🏭 Industrial Steel Design</h4>
                    <p className="text-white/80">Master heavy industrial steel structure design and analysis</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🔗 Connection Design</h4>
                    <p className="text-white/80">Learn advanced steel connection design and detailing</p>
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
                Get expert answers to common questions about steel structure design services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What steel structure design services do you offer in Mumbai?",
                    answer: "We offer comprehensive steel structure design services in Mumbai including industrial building design, warehouse design, pre-engineered buildings (PEB), steel connection design, fabrication drawings, heavy steel structures, and retrofitting services using advanced software and Indian codes.",
                    icon: "🏭",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "Do you provide fabrication drawings and shop drawings?",
                    answer: "Yes, we provide detailed fabrication drawings, shop drawings, erection drawings, material lists, bolt lists, weld details, and piece marks. Our drawings ensure smooth fabrication and construction with 90% construction efficiency and reduced site issues.",
                    icon: "📐",
                    category: "Fabrication",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "What types of steel connections do you design?",
                    answer: "We design all types of steel connections including bolted connections, welded connections, moment connections, shear connections, base plates, splice connections, column connections, beam connections, and bracing connections with 99% connection reliability.",
                    icon: "🔗",
                    category: "Connections",
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
                    question: "Do you provide steel structure design training programs?",
                    answer: "Yes, we offer comprehensive steel structure design training covering connection design, fabrication drawings, PEB design, heavy steel structures, and software training with hands-on project experience and industry-standard design practices for professional certification.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What are typical timelines for steel structure design projects?",
                    answer: "Project timelines vary by complexity: planning (1-2 weeks), structural analysis (3-6 weeks), detailed design (4-8 weeks), and fabrication support throughout construction. We provide detailed schedules and milestone tracking for all projects.",
                    icon: "⏱️",
                    category: "Timeline",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "How much cost savings can optimized steel design achieve?",
                    answer: "Our optimized steel designs typically achieve 30-40% cost savings through efficient member sizing, optimized connections, advanced analysis techniques, and value engineering without compromising structural safety and code compliance.",
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
                <div className="text-3xl mb-3">🏭</div>
                <div className="text-2xl font-black text-gray-900 mb-2">99%</div>
                <div className="text-gray-600 font-semibold">Design Accuracy</div>
                <div className="text-xs text-gray-500 mt-1">Steel Precision</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">35%</div>
                <div className="text-gray-600 font-semibold">Cost Savings</div>
                <div className="text-xs text-gray-500 mt-1">Design Optimization</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need Steel Structure Design Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our steel engineering experts are ready to discuss your project requirements and provide customized design solutions for industrial, commercial, and infrastructure projects.
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
                    Steel Structure Design?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert steel structure design services in Mumbai from certified engineers. Comprehensive 
                  industrial building design, connection design, fabrication drawings, and PEB design for safe and economical structures.
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