import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MEP Coordination & Clash Detection Services in Mumbai | 3D BIM Coordination & Conflict Resolution | Trinkets Institute',
  description: 'Professional MEP Coordination & Clash Detection Services in Mumbai. Expert 3D BIM coordination, clash resolution, installation drawings for MEP systems. Call +91-9820064471',
  keywords: [
    'MEP Coordination Services Mumbai',
    'Clash Detection Services Mumbai',
    'MEP Clash Detection Mumbai',
    '3D MEP Coordination',
    'BIM Coordination Services',
    'MEP Conflict Resolution',
    'Installation Coordination',
    'MEP Coordination Drawings',
    'Building Services Coordination',
    'MEP Systems Integration',
    'Clash Detection Analysis',
    'MEP Installation Support',
    'Coordination Engineering',
    'MEP Project Coordination',
    'Building Systems Integration',
    'MEP Design Coordination',
    'Construction Coordination',
    'MEP Clash Resolution',
    'Navisworks Coordination',
    'MEP BIM Services Mumbai'
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
    title: 'MEP Coordination & Clash Detection Services in Mumbai | 3D BIM Coordination & Conflict Resolution',
    description: 'Professional MEP Coordination & Clash Detection Services in Mumbai. Expert 3D BIM coordination, clash resolution, installation drawings for MEP systems.',
    url: 'https://trinketsinstitute.com/services/mep-coordination-clash-detection-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/mep-coordination-clash-detection-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'MEP Coordination & Clash Detection Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP Coordination & Clash Detection Services in Mumbai | 3D BIM Coordination & Conflict Resolution',
    description: 'Professional MEP Coordination & Clash Detection Services in Mumbai. Expert 3D BIM coordination, clash resolution.',
    images: ['/images/mep-coordination-clash-detection-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/mep-coordination-clash-detection-mumbai',
  },
  category: 'Engineering Services',
}

export default function MEPCoordinationClashDetection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MEP Coordination & Clash Detection Services in Mumbai',
    description: 'Professional MEP coordination and clash detection services in Mumbai including 3D BIM coordination, conflict resolution, installation drawings, and systems integration for MEP projects.',
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
    serviceType: 'MEP Coordination and Clash Detection Engineering',
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
      name: 'MEP Coordination & Clash Detection Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '3D MEP Coordination',
            description: 'Complete 3D coordination of mechanical, electrical, and plumbing systems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clash Detection Analysis',
            description: 'Advanced clash detection and conflict resolution for MEP systems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation Coordination',
            description: 'Detailed installation drawings and coordination support'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'BIM Coordination Services',
            description: 'Building Information Modeling coordination and management'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '175'
    }
  }

  const services = [
    {
      title: "3D MEP Coordination",
      description: "Comprehensive 3D coordination of mechanical, electrical, and plumbing systems for clash-free installation",
      icon: "🎯",
      features: ["3D Modeling", "System Integration", "Space Planning", "Route Optimization", "Interference Check", "Constructability Review"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Advanced",
      timeline: "2-6 weeks",
      applications: ["Commercial Buildings", "Industrial Facilities", "Healthcare Projects", "Data Centers"],
      efficiency: "90% clash reduction"
    },
    {
      title: "Clash Detection Analysis",
      description: "Advanced clash detection using cutting-edge software to identify and resolve MEP system conflicts",
      icon: "⚠️",
      features: ["Hard Clash Detection", "Soft Clash Identification", "Clearance Analysis", "Conflict Reports", "Priority Assessment", "Resolution Strategies"],
      gradient: "from-red-600 to-orange-600",
      complexity: "Expert",
      timeline: "1-4 weeks",
      applications: ["Complex Buildings", "High-rise Projects", "Infrastructure", "Renovation Projects"],
      efficiency: "95% clash resolution"
    },
    {
      title: "Installation Coordination",
      description: "Detailed installation drawings and coordination support for seamless MEP system installation",
      icon: "🔧",
      features: ["Installation Drawings", "Fabrication Details", "Coordination Plans", "Sequencing", "Field Support", "Quality Control"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Advanced",
      timeline: "3-8 weeks",
      applications: ["Construction Projects", "Retrofit Works", "System Upgrades", "Maintenance"],
      efficiency: "80% installation time savings"
    },
    {
      title: "BIM Coordination Management",
      description: "Complete Building Information Modeling coordination and project management services",
      icon: "🏗️",
      features: ["BIM Management", "Model Coordination", "4D Scheduling", "5D Cost Integration", "Collaboration", "Standards Compliance"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Expert",
      timeline: "4-12 weeks",
      applications: ["Large Projects", "Multi-disciplinary", "International Projects", "Government Buildings"],
      efficiency: "70% project efficiency"
    },
    {
      title: "Systems Integration Planning",
      description: "Strategic planning for MEP systems integration ensuring optimal performance and coordination",
      icon: "⚡",
      features: ["Integration Strategy", "Interface Planning", "Control Systems", "Performance Optimization", "Testing Protocols", "Commissioning Support"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Expert",
      timeline: "3-10 weeks",
      applications: ["Smart Buildings", "Automated Systems", "Control Integration", "Performance Buildings"],
      efficiency: "85% system efficiency"
    },
    {
      title: "Coordination Documentation",
      description: "Comprehensive documentation and reporting for MEP coordination and clash detection processes",
      icon: "📋",
      features: ["Coordination Reports", "Clash Registers", "Resolution Documentation", "Progress Tracking", "Quality Reports", "Compliance Records"],
      gradient: "from-cyan-600 to-teal-600",
      complexity: "Intermediate",
      timeline: "1-3 weeks",
      applications: ["All Project Types", "Regulatory Compliance", "Quality Assurance", "Project Records"],
      efficiency: "100% documentation accuracy"
    }
  ]

  const clashTypes = [
    {
      category: "Hard Clashes",
      description: "Physical conflicts where MEP elements intersect",
      icon: "💥",
      examples: ["Duct-Pipe Intersection", "Cable Tray Conflicts", "Equipment Interference", "Structural Conflicts"],
      impact: "Critical - Stops Installation",
      resolution: ["Route Modification", "Equipment Relocation", "System Redesign", "Elevation Changes"]
    },
    {
      category: "Soft Clashes",
      description: "Clearance violations and access issues",
      icon: "⚠️",
      examples: ["Maintenance Access", "Clearance Violations", "Space Constraints", "Service Accessibility"],
      impact: "Major - Affects Operation",
      resolution: ["Access Planning", "Clearance Adjustment", "Service Routes", "Maintenance Zones"]
    },
    {
      category: "Workflow Clashes",
      description: "Installation sequence and construction conflicts",
      icon: "🔄",
      examples: ["Installation Sequence", "Construction Access", "Material Handling", "Work Space Conflicts"],
      impact: "Moderate - Delays Work",
      resolution: ["Sequence Planning", "Phased Installation", "Logistics Planning", "Temporary Solutions"]
    },
    {
      category: "Code Compliance",
      description: "Regulatory and standard compliance violations",
      icon: "📋",
      examples: ["Fire Rating Violations", "Code Clearances", "Safety Requirements", "Standard Deviations"],
      impact: "Critical - Legal Issues",
      resolution: ["Code Review", "Compliance Updates", "Authority Approval", "Design Modifications"]
    }
  ]

  const technologies = [
    { name: "Navisworks", description: "Industry-leading clash detection", icon: "🎯", category: "Coordination" },
    { name: "Revit MEP", description: "3D MEP modeling and coordination", icon: "🏗️", category: "BIM Software" },
    { name: "AutoCAD MEP", description: "MEP design and coordination", icon: "📐", category: "Design Tools" },
    { name: "Solibri", description: "Model checking and quality assurance", icon: "✅", category: "Quality Control" },
    { name: "Tekla Structures", description: "Structural and MEP coordination", icon: "🏢", category: "Coordination" },
    { name: "BIM 360", description: "Cloud collaboration platform", icon: "☁️", category: "Collaboration" },
    { name: "Bentley MicroStation", description: "3D design and coordination", icon: "🔧", category: "Design Platform" },
    { name: "Synchro", description: "4D construction sequencing", icon: "⏱️", category: "Scheduling" }
  ]

  const projectPhases = [
    {
      phase: "Design Development",
      description: "Early coordination during design phase",
      icon: "📐",
      activities: ["Initial Coordination", "Space Allocation", "Route Planning", "Preliminary Clash Check"],
      timeline: "20-30% design stage",
      benefits: ["Early Issue Identification", "Design Optimization", "Cost Savings", "Time Efficiency"]
    },
    {
      phase: "Construction Documentation",
      description: "Detailed coordination for construction",
      icon: "📋",
      activities: ["Detailed Coordination", "Clash Resolution", "Installation Drawings", "Fabrication Details"],
      timeline: "80-100% design stage",
      benefits: ["Clash-free Drawings", "Installation Ready", "Reduced RFIs", "Quality Assurance"]
    },
    {
      phase: "Pre-Construction",
      description: "Final coordination before construction",
      icon: "🚧",
      activities: ["Final Review", "Field Verification", "Coordination Meetings", "Approval Process"],
      timeline: "Pre-construction phase",
      benefits: ["Construction Ready", "Risk Mitigation", "Team Alignment", "Quality Control"]
    },
    {
      phase: "Construction Support",
      description: "Ongoing support during construction",
      icon: "⚡",
      activities: ["Field Coordination", "Issue Resolution", "RFI Support", "Quality Monitoring"],
      timeline: "Throughout construction",
      benefits: ["Real-time Support", "Issue Resolution", "Quality Maintenance", "Project Success"]
    }
  ]

  const features = [
    { title: "15+ Years Experience", value: "15+", suffix: "Years", icon: "🏆" },
    { title: "500+ Coordination Projects", value: "500+", suffix: "Projects", icon: "📈" },
    { title: "95% Clash Resolution", value: "95", suffix: "%", icon: "✅" },
    { title: "80% Time Savings", value: "80", suffix: "%", icon: "⚡" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">🎯</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert MEP Coordination</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                MEP Coordination & Clash Detection
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>MEP Coordination & Clash Detection Services in Mumbai</strong> for 3D BIM coordination, 
                conflict resolution, and installation support. Expert clash detection analysis and MEP systems integration 
                with 15+ years of coordination expertise for complex building projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Coordination Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/mep-engineering" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn MEP Coordination
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
                Complete MEP Coordination &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Clash Detection Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive coordination services for clash-free MEP installation and optimal system performance
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
                      <div className="grid grid-cols-2 gap-2">
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
                      service.complexity === 'Advanced' ? 'text-blue-600 bg-blue-100' :
                      'text-green-600 bg-green-100'
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

        {/* Clash Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Clash Types &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Resolution Strategies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive clash detection and resolution for all types of MEP system conflicts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clashTypes.map((clash, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {clash.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {clash.category}
                      </h3>
                      <p className="text-gray-600 mb-4">{clash.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Examples:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {clash.examples.map((example, exIndex) => (
                          <div key={exIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Impact Level:</span>
                        <div className={`text-sm font-bold ${
                          clash.impact.includes('Critical') ? 'text-red-600' :
                          clash.impact.includes('Major') ? 'text-orange-600' :
                          'text-yellow-600'
                        }`}>
                          {clash.impact}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Resolution Methods:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {clash.resolution.map((method, resIndex) => (
                          <div key={resIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {method}
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

        {/* Project Phases Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Coordination Project
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Phases
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Strategic coordination approach across all project phases for optimal results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectPhases.map((phase, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    
                    <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                      {phase.timeline}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Activities:</h4>
                        <div className="space-y-1">
                          {phase.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="text-xs text-gray-600">
                              • {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                        <div className="space-y-1">
                          {phase.benefits.map((benefit, benIndex) => (
                            <div key={benIndex} className="text-xs text-green-600">
                              ✓ {benefit}
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
                Advanced Coordination
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software and tools for precise MEP coordination and clash detection
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
                    Master MEP Coordination & Clash Detection
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced MEP coordination and clash detection from industry experts. Professional training 
                    programs covering BIM coordination, Navisworks, clash resolution, and installation coordination.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/mep-engineering" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 MEP Coordination Course
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
                    <h4 className="font-bold mb-2">🎯 3D Coordination Mastery</h4>
                    <p className="text-white/80">Master 3D MEP coordination and clash detection techniques</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">⚠️ Clash Resolution Expertise</h4>
                    <p className="text-white/80">Learn advanced clash detection and resolution strategies</p>
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
                Get expert answers to common questions about MEP coordination & clash detection services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What MEP coordination & clash detection services do you offer in Mumbai?",
                    answer: "We offer comprehensive MEP coordination & clash detection services in Mumbai including 3D MEP coordination, clash detection analysis, installation coordination, BIM management, systems integration planning, and detailed coordination documentation for all types of building projects.",
                    icon: "🎯",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "What types of clashes can you detect and resolve?",
                    answer: "We detect and resolve all clash types including hard clashes (physical intersections), soft clashes (clearance violations), workflow clashes (installation conflicts), and code compliance issues using advanced software like Navisworks and specialized coordination expertise.",
                    icon: "⚠️",
                    category: "Clash Types",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "Which software technologies do you use for coordination?",
                    answer: "We use industry-leading technologies including Navisworks for clash detection, Revit MEP for 3D coordination, AutoCAD MEP for design, Solibri for quality control, BIM 360 for collaboration, and Synchro for 4D scheduling.",
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
                    question: "Do you provide MEP coordination training programs?",
                    answer: "Yes, we offer comprehensive MEP coordination and clash detection training covering 3D coordination techniques, Navisworks software, BIM coordination, clash resolution strategies, and installation coordination with hands-on project experience.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What project phases do you support for coordination?",
                    answer: "We support all project phases including design development (early coordination), construction documentation (detailed coordination), pre-construction (final review), and construction support (ongoing coordination) with phase-specific deliverables and timelines.",
                    icon: "📋",
                    category: "Project Phases",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "What are the typical timelines for coordination projects?",
                    answer: "Project timelines vary by complexity: 3D coordination (2-6 weeks), clash detection (1-4 weeks), installation coordination (3-8 weeks), and BIM management (4-12 weeks). We provide detailed schedules and milestone tracking for all coordination phases.",
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
                <div className="text-2xl font-black text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Resolution</div>
                <div className="text-xs text-gray-500 mt-1">Clash Resolution Rate</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">Coordination Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need MEP Coordination Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our MEP coordination experts are ready to discuss your project requirements and provide customized clash detection solutions.
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
                    MEP Coordination & Clash Detection?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert MEP coordination & clash detection services in Mumbai from certified engineers. Comprehensive 
                  3D coordination, clash resolution, and installation support for your projects.
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