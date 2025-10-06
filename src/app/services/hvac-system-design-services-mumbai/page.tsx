import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HVAC System Design Services in Mumbai | Commercial & Residential HVAC Engineering | Trinkets Institute',
  description: 'Professional HVAC System Design Services in Mumbai. Expert heating, ventilation, air conditioning design, load calculations, energy modeling. Call +91-9820064471',
  keywords: [
    'HVAC System Design Services Mumbai',
    'HVAC Design Services Mumbai',
    'HVAC Engineering Mumbai',
    'Commercial HVAC Design',
    'Residential HVAC Design',
    'HVAC Load Calculations',
    'Air Conditioning Design',
    'Ventilation System Design',
    'HVAC Energy Modeling',
    'HVAC System Installation',
    'HVAC Duct Design',
    'HVAC Equipment Selection',
    'Building HVAC Services',
    'HVAC System Optimization',
    'Green HVAC Design',
    'Energy Efficient HVAC',
    'HVAC Consulting Services',
    'HVAC Project Management',
    'HVAC System Analysis',
    'HVAC Design Engineering Mumbai'
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
    title: 'HVAC System Design Services in Mumbai | Commercial & Residential HVAC Engineering',
    description: 'Professional HVAC System Design Services in Mumbai. Expert heating, ventilation, air conditioning design, load calculations, energy modeling.',
    url: 'https://trinketsinstitute.com/services/hvac-system-design-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/hvac-system-design-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC System Design Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC System Design Services in Mumbai | Commercial & Residential HVAC Engineering',
    description: 'Professional HVAC System Design Services in Mumbai. Expert heating, ventilation, air conditioning design.',
    images: ['/images/hvac-system-design-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/hvac-system-design-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function HVACSystemDesign() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HVAC System Design Services in Mumbai',
    description: 'Professional HVAC system design services in Mumbai including commercial and residential HVAC engineering, load calculations, energy modeling, equipment selection, and installation support.',
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
    serviceType: 'HVAC System Design and Engineering',
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
      name: 'HVAC System Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial HVAC Design',
            description: 'Complete commercial HVAC system design and engineering'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential HVAC Design',
            description: 'Residential HVAC system design and load calculations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Load Calculations',
            description: 'Precise heating and cooling load calculations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energy Modeling',
            description: 'HVAC energy modeling and optimization'
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
      title: "Commercial HVAC Design",
      description: "Complete commercial HVAC system design for offices, retail, and industrial buildings",
      icon: "🏢",
      features: ["Load Calculations", "System Layout", "Equipment Sizing", "Duct Design", "Energy Analysis", "Code Compliance"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "4-8 weeks",
      applications: ["Office Buildings", "Shopping Malls", "Hospitals", "Hotels", "Industrial Facilities"],
      efficiency: "30% energy savings"
    },
    {
      title: "Residential HVAC Design",
      description: "Custom residential HVAC solutions for apartments, villas, and housing complexes",
      icon: "🏠",
      features: ["Room-wise Calculations", "Comfort Analysis", "System Selection", "Installation Design", "Cost Optimization", "Maintenance Planning"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Advanced",
      timeline: "2-4 weeks",
      applications: ["Apartments", "Villas", "Townhouses", "Luxury Homes", "Housing Complexes"],
      efficiency: "25% cost reduction"
    },
    {
      title: "HVAC Load Calculations",
      description: "Precise heating and cooling load calculations using advanced methodologies",
      icon: "📊",
      features: ["Heat Gain Analysis", "Cooling Load", "Heating Load", "Equipment Sizing", "Seasonal Analysis", "Peak Load Calculations"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Advanced",
      timeline: "1-2 weeks",
      applications: ["All Building Types", "Retrofit Projects", "New Construction", "System Upgrades"],
      efficiency: "95% accuracy"
    },
    {
      title: "Energy Modeling & Analysis",
      description: "Comprehensive energy modeling for HVAC system optimization and efficiency",
      icon: "⚡",
      features: ["Energy Simulation", "Performance Analysis", "Cost Optimization", "Green Building", "LEED Compliance", "ROI Analysis"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Expert",
      timeline: "3-6 weeks",
      applications: ["Green Buildings", "LEED Projects", "Energy Audits", "Retrofit Analysis"],
      efficiency: "40% energy reduction"
    },
    {
      title: "HVAC Equipment Selection",
      description: "Expert selection and specification of HVAC equipment for optimal performance",
      icon: "⚙️",
      features: ["Equipment Sizing", "Performance Analysis", "Cost Comparison", "Efficiency Rating", "Vendor Selection", "Specification"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Advanced",
      timeline: "2-3 weeks",
      applications: ["New Installations", "Equipment Replacement", "System Upgrades", "Performance Improvement"],
      efficiency: "20% performance boost"
    },
    {
      title: "Duct System Design",
      description: "Comprehensive ductwork design for efficient air distribution systems",
      icon: "🌬️",
      features: ["Duct Sizing", "Layout Design", "Pressure Drop", "Air Distribution", "Insulation Design", "Noise Control"],
      gradient: "from-cyan-600 to-teal-600",
      complexity: "Advanced",
      timeline: "2-4 weeks",
      applications: ["Commercial Buildings", "Industrial Facilities", "Residential Projects", "Clean Rooms"],
      efficiency: "15% airflow improvement"
    }
  ]

  const hvacSystems = [
    {
      category: "Central Air Conditioning",
      description: "Large-scale cooling systems for commercial buildings",
      icon: "❄️",
      types: ["Chilled Water Systems", "VRF/VRV Systems", "Packaged Units", "Split Systems"],
      capacity: "10 TR to 500+ TR",
      applications: ["Offices", "Malls", "Hospitals", "Hotels"],
      benefits: ["Energy Efficient", "Centralized Control", "Easy Maintenance", "Zone Control"]
    },
    {
      category: "HVAC Controls & Automation",
      description: "Smart control systems for optimal HVAC performance",
      icon: "🎛️",
      types: ["BMS Integration", "Smart Thermostats", "Variable Speed Drives", "Automated Controls"],
      capacity: "Single Zone to Multi-Zone",
      applications: ["Smart Buildings", "Energy Management", "Comfort Control", "Monitoring"],
      benefits: ["Energy Savings", "Remote Control", "Real-time Monitoring", "Predictive Maintenance"]
    },
    {
      category: "Ventilation Systems",
      description: "Fresh air and exhaust systems for indoor air quality",
      icon: "💨",
      types: ["Fresh Air Units", "Exhaust Systems", "Heat Recovery", "Air Purification"],
      capacity: "500 CFM to 50,000+ CFM",
      applications: ["Hospitals", "Laboratories", "Industrial", "Commercial"],
      benefits: ["Air Quality", "Energy Recovery", "Code Compliance", "Health Safety"]
    },
    {
      category: "Specialized HVAC",
      description: "Custom HVAC solutions for specific applications",
      icon: "🔬",
      types: ["Clean Room HVAC", "Process Cooling", "Server Room Cooling", "Kitchen Ventilation"],
      capacity: "Application Specific",
      applications: ["Pharmaceuticals", "Data Centers", "Food Processing", "Research Labs"],
      benefits: ["Precise Control", "Contamination Control", "Process Reliability", "Compliance"]
    }
  ]

  const designSteps = [
    {
      step: "Site Survey & Analysis",
      description: "Comprehensive site assessment and requirement analysis",
      icon: "🔍",
      activities: ["Building Assessment", "Load Analysis", "Space Planning", "Existing System Review"],
      duration: "3-5 days",
      deliverables: ["Site Report", "Load Summary", "Requirement Analysis", "Feasibility Study"]
    },
    {
      step: "System Design & Calculations",
      description: "Detailed HVAC system design and engineering calculations",
      icon: "📐",
      activities: ["Load Calculations", "Equipment Sizing", "Duct Design", "Control Strategy"],
      duration: "2-3 weeks",
      deliverables: ["Design Drawings", "Calculations", "Equipment List", "Specifications"]
    },
    {
      step: "Energy Modeling & Optimization",
      description: "Energy analysis and system optimization for efficiency",
      icon: "⚡",
      activities: ["Energy Simulation", "Performance Analysis", "Cost Optimization", "Sustainability Assessment"],
      duration: "1-2 weeks",
      deliverables: ["Energy Report", "Performance Analysis", "Cost Estimates", "ROI Analysis"]
    },
    {
      step: "Documentation & Approval",
      description: "Complete documentation and regulatory approval process",
      icon: "📋",
      activities: ["Drawing Finalization", "Specification Writing", "Approval Submissions", "Quality Review"],
      duration: "1-2 weeks",
      deliverables: ["Final Drawings", "Specifications", "Approval Documents", "Installation Manual"]
    }
  ]

  const technologies = [
    { name: "AutoCAD MEP", description: "HVAC design and drafting", icon: "🖥️", category: "Design Software" },
    { name: "Revit MEP", description: "3D HVAC modeling and BIM", icon: "🏗️", category: "BIM Software" },
    { name: "HAP (Carrier)", description: "Load calculations and analysis", icon: "📊", category: "Analysis Tools" },
    { name: "Trace 700", description: "Energy modeling and simulation", icon: "⚡", category: "Energy Tools" },
    { name: "Elite CHVAC", description: "HVAC load calculations", icon: "🔢", category: "Calculation Tools" },
    { name: "EnergyPlus", description: "Building energy simulation", icon: "🌱", category: "Simulation" },
    { name: "McQuay PipeSizer", description: "Pipe sizing and design", icon: "🔧", category: "Sizing Tools" },
    { name: "Duct Designer", description: "Ductwork design and sizing", icon: "🌬️", category: "Duct Design" }
  ]

  const features = [
    { title: "18+ Years Experience", value: "18+", suffix: "Years", icon: "🏆" },
    { title: "300+ HVAC Projects", value: "300+", suffix: "Projects", icon: "📈" },
    { title: "35% Energy Savings", value: "35", suffix: "%", icon: "⚡" },
    { title: "98% Client Satisfaction", value: "98", suffix: "%", icon: "✅" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">❄️</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert HVAC Design</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                HVAC System Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>HVAC System Design Services in Mumbai</strong> for commercial and residential 
                buildings. Expert heating, ventilation, air conditioning design with load calculations, energy modeling, 
                and 18+ years of HVAC engineering expertise for optimal comfort and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🌟 Get HVAC Design Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/hvac-system-design" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn HVAC Design
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
                Complete HVAC System
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Design Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive HVAC design services for optimal comfort, energy efficiency, and system performance
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

        {/* HVAC Systems Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                HVAC System
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive HVAC system design covering all building types and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hvacSystems.map((system, index) => (
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
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">System Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {system.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Capacity Range:</span>
                        <div className="text-sm text-blue-600 font-bold">{system.capacity}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {system.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {system.benefits.map((benefit, benIndex) => (
                          <div key={benIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
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
                HVAC Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to HVAC system design ensuring optimal performance and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.map((step, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 relative"
                >
                  <div className="absolute top-4 right-4 text-2xl font-bold text-blue-600/20 group-hover:text-blue-600/40 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                      {step.duration}
                    </div>
                    
                    <div className="space-y-4 text-left">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Activities:</h4>
                        <div className="space-y-1">
                          {step.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="text-xs text-gray-600">
                              • {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Deliverables:</h4>
                        <div className="space-y-1">
                          {step.deliverables.map((deliverable, delIndex) => (
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
                HVAC Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software and tools for precise HVAC system design and analysis
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
                    Master HVAC System Design
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced HVAC system design from industry experts. Professional training programs 
                    covering load calculations, energy modeling, equipment selection, and system optimization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/hvac-system-design" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 HVAC Design Course
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
                    <h4 className="font-bold mb-2">❄️ HVAC System Mastery</h4>
                    <p className="text-white/80">Master commercial and residential HVAC design techniques</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">⚡ Energy Optimization</h4>
                    <p className="text-white/80">Learn energy modeling and system efficiency optimization</p>
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
                Get expert answers to common questions about HVAC system design services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What HVAC system design services do you offer in Mumbai?",
                    answer: "We offer comprehensive HVAC system design services in Mumbai including commercial and residential HVAC design, load calculations, energy modeling, equipment selection, duct system design, and installation support for all types of buildings and applications.",
                    icon: "❄️",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "How do you calculate HVAC loads for different building types?",
                    answer: "We use advanced methodologies including heat gain analysis, cooling load calculations, heating load assessments, and seasonal analysis using industry-standard software like HAP, Trace 700, and Elite CHVAC for precise equipment sizing and system design.",
                    icon: "📊",
                    category: "Load Calculations",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "Which HVAC design software do you use for projects?",
                    answer: "We use industry-leading software including AutoCAD MEP for design, Revit MEP for 3D modeling, HAP for load calculations, Trace 700 for energy modeling, EnergyPlus for simulation, and specialized tools for duct and pipe sizing.",
                    icon: "💻",
                    category: "Technology",
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
                    question: "Do you provide HVAC design training programs?",
                    answer: "Yes, we offer comprehensive HVAC system design training covering load calculations, energy modeling, equipment selection, duct design, and system optimization with hands-on project experience using industry-standard software and methodologies.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What are typical timelines for HVAC design projects?",
                    answer: "Project timelines vary by complexity: residential HVAC design (2-4 weeks), commercial HVAC design (4-8 weeks), load calculations (1-2 weeks), and energy modeling (3-6 weeks). We provide detailed schedules and milestone tracking for all projects.",
                    icon: "⏱️",
                    category: "Timeline",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "How much energy savings can HVAC design optimization achieve?",
                    answer: "Our optimized HVAC designs typically achieve 30-40% energy savings compared to conventional systems through proper load calculations, equipment selection, system optimization, and energy modeling for maximum efficiency and cost reduction.",
                    icon: "⚡",
                    category: "Efficiency",
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
                <div className="text-3xl mb-3">❄️</div>
                <div className="text-2xl font-black text-gray-900 mb-2">35%</div>
                <div className="text-gray-600 font-semibold">Energy Savings</div>
                <div className="text-xs text-gray-500 mt-1">Average Efficiency Gain</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">18+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">HVAC Design Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need HVAC Design Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our HVAC design experts are ready to discuss your project requirements and provide customized heating, ventilation, and air conditioning solutions.
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
                    HVAC System Design?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert HVAC system design services in Mumbai from certified engineers. Comprehensive 
                  commercial and residential HVAC solutions with energy optimization and performance guarantee.
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
                    href="/services/mep-system-design-services-mumbai" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ⚡ MEP Design Services
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