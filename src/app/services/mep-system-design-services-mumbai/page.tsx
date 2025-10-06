import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MEP System Design Services in Mumbai | Mechanical Electrical Plumbing Engineering | Trinkets Institute',
  description: 'Professional MEP System Design Services in Mumbai. Expert mechanical, electrical & plumbing engineering solutions for commercial & industrial projects. Call +91-9820064471',
  keywords: [
    'MEP System Design Services Mumbai',
    'Mechanical Electrical Plumbing Mumbai',
    'MEP Engineering Services',
    'Building Services Design Mumbai',
    'HVAC Design Services Mumbai',
    'Electrical System Design',
    'Plumbing System Design',
    'Fire Safety System Design',
    'MEP Coordination Services',
    'Building Automation Systems',
    'Energy Efficient MEP Design',
    'MEP BIM Services Mumbai',
    'MEP Consultant Mumbai',
    'Commercial MEP Design',
    'Industrial MEP Engineering',
    'MEP System Installation',
    'MEP Project Management',
    'Sustainable MEP Solutions',
    'Smart Building Design',
    'MEP Clash Detection Services'
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
    title: 'MEP System Design Services in Mumbai | Mechanical Electrical Plumbing Engineering',
    description: 'Professional MEP System Design Services in Mumbai. Expert mechanical, electrical & plumbing engineering solutions for commercial & industrial projects.',
    url: 'https://trinketsinstitute.com/services/mep-system-design-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/mep-system-design-services-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'MEP System Design Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP System Design Services in Mumbai | Mechanical Electrical Plumbing Engineering',
    description: 'Professional MEP System Design Services in Mumbai. Expert mechanical, electrical & plumbing engineering solutions.',
    images: ['/images/mep-system-design-services-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/mep-system-design-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function MEPSystemDesignServices() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MEP System Design Services in Mumbai',
    description: 'Professional MEP (Mechanical, Electrical, Plumbing) system design services in Mumbai including HVAC design, electrical systems, plumbing engineering, fire safety, and building automation for commercial and industrial projects.',
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
    serviceType: 'MEP Engineering and System Design',
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
      name: 'MEP System Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC System Design',
            description: 'Complete heating, ventilation, and air conditioning system design and optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical System Design',
            description: 'Comprehensive electrical system design including power distribution and lighting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing System Design',
            description: 'Complete plumbing and drainage system design for buildings'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fire Safety System Design',
            description: 'Fire protection and life safety system design and compliance'
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
      title: "HVAC System Design",
      description: "Complete heating, ventilation, and air conditioning system design for optimal comfort and energy efficiency",
      icon: "❄️",
      features: ["Load Calculations", "Duct Design", "Equipment Selection", "Energy Modeling", "CFD Analysis", "Control Systems"],
      gradient: "from-blue-600 to-cyan-600",
      complexity: "Advanced",
      timeline: "3-6 weeks",
      applications: ["Commercial Buildings", "Industrial Facilities", "Healthcare Centers", "Data Centers"]
    },
    {
      title: "Electrical System Design",
      description: "Comprehensive electrical system design including power distribution, lighting, and control systems",
      icon: "⚡",
      features: ["Power Distribution", "Lighting Design", "Panel Schedules", "Cable Routing", "Earthing Systems", "UPS Design"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Expert",
      timeline: "4-8 weeks",
      applications: ["Office Buildings", "Manufacturing Plants", "Residential Complex", "Shopping Malls"]
    },
    {
      title: "Plumbing System Design",
      description: "Complete plumbing and drainage system design with water efficiency and sustainability focus",
      icon: "🚿",
      features: ["Water Supply Design", "Drainage Systems", "Pump Sizing", "Pipe Routing", "Water Treatment", "Rainwater Harvesting"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Advanced",
      timeline: "2-5 weeks",
      applications: ["Residential Buildings", "Hotels & Hospitals", "Educational Institutes", "Commercial Complexes"]
    },
    {
      title: "Fire Safety System Design",
      description: "Fire protection and life safety system design ensuring compliance with safety regulations",
      icon: "🔥",
      features: ["Fire Detection", "Sprinkler Systems", "Smoke Extraction", "Emergency Lighting", "Fire Pumps", "Safety Compliance"],
      gradient: "from-red-600 to-pink-600",
      complexity: "Expert",
      timeline: "3-6 weeks",
      applications: ["High-rise Buildings", "Industrial Plants", "Warehouses", "Public Buildings"]
    },
    {
      title: "Building Automation Systems",
      description: "Intelligent building automation and control systems for enhanced efficiency and comfort",
      icon: "🏠",
      features: ["BMS Design", "SCADA Systems", "IoT Integration", "Smart Controls", "Energy Management", "Remote Monitoring"],
      gradient: "from-purple-600 to-indigo-600",
      complexity: "Expert",
      timeline: "4-10 weeks",
      applications: ["Smart Buildings", "Corporate Offices", "Hospitals", "Universities"]
    },
    {
      title: "MEP Coordination & BIM",
      description: "3D MEP coordination and Building Information Modeling for clash-free installations",
      icon: "🎯",
      features: ["3D Modeling", "Clash Detection", "Coordination Drawings", "Installation Drawings", "BIM Management", "4D Scheduling"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Advanced",
      timeline: "2-6 weeks",
      applications: ["Complex Buildings", "Infrastructure Projects", "Industrial Facilities", "Mixed-use Developments"]
    }
  ]

  const systemTypes = [
    {
      category: "Mechanical Systems",
      description: "HVAC, ventilation, and mechanical equipment design",
      icon: "⚙️",
      systems: ["HVAC Systems", "Ventilation Systems", "Chilled Water Systems", "Heating Systems", "Exhaust Systems", "Air Handling Units"],
      efficiency: "Up to 40% energy savings",
      compliance: ["ASHRAE Standards", "NBC Compliance", "Energy Conservation Code"]
    },
    {
      category: "Electrical Systems", 
      description: "Power distribution, lighting, and electrical infrastructure",
      icon: "💡",
      systems: ["Power Distribution", "Lighting Systems", "UPS & Generator", "Cable Management", "Earthing & Protection", "Control Panels"],
      efficiency: "30-50% energy reduction",
      compliance: ["IS Standards", "CEA Regulations", "NBC Electrical Code"]
    },
    {
      category: "Plumbing Systems",
      description: "Water supply, drainage, and plumbing infrastructure",
      icon: "💧",
      systems: ["Water Supply", "Drainage Systems", "Sewage Treatment", "Rainwater Harvesting", "Hot Water Systems", "Pump Systems"],
      efficiency: "25-35% water conservation",
      compliance: ["IS Plumbing Code", "Water Conservation Norms", "Environmental Regulations"]
    },
    {
      category: "Fire Safety Systems",
      description: "Fire protection, detection, and life safety systems",
      icon: "🛡️",
      systems: ["Fire Detection", "Sprinkler Systems", "Fire Pumps", "Smoke Extraction", "Emergency Systems", "Fire Barriers"],
      efficiency: "100% safety compliance",
      compliance: ["NBC Fire Safety", "NFPA Standards", "Local Fire Regulations"]
    }
  ]

  const projectTypes = [
    { name: "Commercial Buildings", icon: "🏢", description: "Office complexes, shopping malls, retail spaces" },
    { name: "Residential Complexes", icon: "🏠", description: "Apartments, housing societies, townships" },
    { name: "Industrial Facilities", icon: "🏭", description: "Manufacturing plants, warehouses, factories" },
    { name: "Healthcare Facilities", icon: "🏥", description: "Hospitals, clinics, medical centers" },
    { name: "Educational Institutes", icon: "🎓", description: "Schools, colleges, universities" },
    { name: "Hospitality Projects", icon: "🏨", description: "Hotels, resorts, restaurants" },
    { name: "Data Centers", icon: "💻", description: "IT facilities, server rooms, telecom centers" },
    { name: "Infrastructure Projects", icon: "🚇", description: "Airports, metro stations, public buildings" }
  ]

  const technologies = [
    { name: "AutoCAD MEP", description: "2D/3D MEP design and drafting", icon: "📐", category: "Design Software" },
    { name: "Revit MEP", description: "Building Information Modeling for MEP", icon: "🏗️", category: "BIM Software" },
    { name: "HAP Software", description: "HVAC load calculations and analysis", icon: "❄️", category: "Analysis Tools" },
    { name: "ETAP", description: "Electrical system analysis and design", icon: "⚡", category: "Electrical Design" },
    { name: "Navisworks", description: "MEP coordination and clash detection", icon: "🎯", category: "Coordination" },
    { name: "CFD Analysis", description: "Computational fluid dynamics for HVAC", icon: "🌪️", category: "Simulation" }
  ]

  const features = [
    { title: "20+ Years Experience", value: "20+", suffix: "Years", icon: "🏆" },
    { title: "500+ MEP Projects", value: "500+", suffix: "Projects", icon: "📈" },
    { title: "99.8% Design Accuracy", value: "99.8", suffix: "%", icon: "✅" },
    { title: "40% Energy Savings", value: "40", suffix: "%", icon: "🌱" }
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert MEP Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                MEP System Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>MEP System Design Services in Mumbai</strong> for mechanical, electrical, and plumbing 
                engineering solutions. Expert design of HVAC, electrical systems, plumbing infrastructure, and building 
                automation with 20+ years of MEP engineering expertise in commercial and industrial projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get MEP Design Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/mep-engineering" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn MEP Engineering
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
                Comprehensive MEP System
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Design Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end MEP engineering services for optimal building performance and energy efficiency
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
                    
                    <div className="flex items-center justify-between text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-blue-600 font-semibold">{service.timeline}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        service.complexity === 'Expert' ? 'text-purple-600 bg-purple-100' :
                        service.complexity === 'Advanced' ? 'text-blue-600 bg-blue-100' :
                        'text-green-600 bg-green-100'
                      }`}>
                        {service.complexity}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center text-gray-700 text-xs">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      Get Consultation
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

        {/* System Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                MEP System
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive coverage of all MEP system categories for building engineering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemTypes.map((system, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {system.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {system.category}
                      </h3>
                      <p className="text-gray-600 mb-4">{system.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">System Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {system.systems.map((sys, sysIndex) => (
                        <div key={sysIndex} className="flex items-center text-gray-700 text-sm">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {sys}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm font-semibold text-green-600">{system.efficiency}</span>
                      <p className="text-xs text-gray-500">Efficiency Improvement</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Compliance:</h4>
                    <div className="flex flex-wrap gap-2">
                      {system.compliance.map((comp, compIndex) => (
                        <span key={compIndex} className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Advanced Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software and tools for precise MEP system design and analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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

        {/* Project Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Project Types We
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Handle
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized MEP system design services across diverse project categories in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectTypes.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
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
                    Master MEP System Design
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn comprehensive MEP engineering from industry experts. Professional training programs 
                    covering HVAC design, electrical systems, plumbing engineering, and building automation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/mep-engineering" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 MEP Engineering Course
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
                    <h4 className="font-bold mb-2">⚡ HVAC System Design</h4>
                    <p className="text-white/80">Master HVAC design principles and energy optimization</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🔌 Electrical System Design</h4>
                    <p className="text-white/80">Learn power distribution and electrical system design</p>
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
                Get expert answers to common questions about MEP system design services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What MEP system design services do you offer in Mumbai?",
                    answer: "We offer comprehensive MEP system design services in Mumbai including HVAC system design, electrical system design, plumbing engineering, fire safety systems, building automation, and MEP coordination with BIM modeling for commercial and industrial projects.",
                    icon: "🔧",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "Which software and technologies do you use for MEP design?",
                    answer: "We use industry-leading software including AutoCAD MEP, Revit MEP, HAP for HVAC calculations, ETAP for electrical analysis, Navisworks for coordination, and CFD analysis tools for optimal system design and performance.",
                    icon: "💻",
                    category: "Technology",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "What types of projects do you handle for MEP system design?",
                    answer: "We handle diverse projects including commercial buildings, residential complexes, industrial facilities, healthcare centers, educational institutes, hotels, data centers, and infrastructure projects with specialized MEP requirements.",
                    icon: "🏢",
                    category: "Projects",
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
                    question: "Do you provide MEP training and certification programs?",
                    answer: "Yes, we offer comprehensive MEP engineering training programs covering HVAC design, electrical systems, plumbing engineering, and building automation. Our courses include hands-on software training and industry certification.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "How do you ensure energy efficiency in MEP system design?",
                    answer: "We implement energy-efficient design strategies including optimal equipment selection, advanced control systems, renewable energy integration, and compliance with green building standards to achieve 30-40% energy savings.",
                    icon: "🌱",
                    category: "Efficiency",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "What is the typical timeline for MEP system design projects?",
                    answer: "Project timelines vary by complexity: HVAC design (3-6 weeks), Electrical systems (4-8 weeks), Plumbing design (2-5 weeks), and comprehensive MEP projects (6-12 weeks). We provide detailed schedules during consultation.",
                    icon: "⏱️",
                    category: "Timeline",
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
                <div className="text-3xl mb-3">🎯</div>
                <div className="text-2xl font-black text-gray-900 mb-2">99.8%</div>
                <div className="text-gray-600 font-semibold">Accuracy</div>
                <div className="text-xs text-gray-500 mt-1">Design Precision</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Expert Consultation</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">20+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">MEP Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need MEP Design Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our MEP engineering experts are ready to discuss your project requirements and provide customized solutions.
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
                    MEP System Design?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert MEP system design services in Mumbai from certified engineers. Comprehensive solutions for 
                  optimal building performance and energy efficiency.
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
                    href="/services/hvac-system-design-mumbai" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ❄️ HVAC Design Services
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