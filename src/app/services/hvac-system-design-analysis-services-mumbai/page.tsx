import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HVAC System Design Analysis Services in Mumbai | Energy Analysis & Performance Optimization | Trinkets Institute',
  description: 'Professional HVAC System Design Analysis Services in Mumbai. Expert energy analysis, performance optimization, load calculations, CFD analysis. Call +91-9820064471',
  keywords: [
    'HVAC System Design Analysis Services Mumbai',
    'HVAC Design Analysis Mumbai',
    'HVAC Performance Analysis',
    'HVAC Energy Analysis Mumbai',
    'HVAC Load Analysis Services',
    'CFD Analysis HVAC Mumbai',
    'Thermal Analysis HVAC',
    'HVAC System Optimization',
    'HVAC Efficiency Analysis',
    'Building Energy Analysis',
    'HVAC Simulation Services',
    'HVAC Modeling Mumbai',
    'Energy Modeling HVAC',
    'HVAC Performance Testing',
    'Airflow Analysis Services',
    'HVAC Audit Mumbai',
    'HVAC System Evaluation',
    'Cooling Load Analysis',
    'Heating Load Analysis',
    'HVAC Design Validation Mumbai'
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
    title: 'HVAC System Design Analysis Services in Mumbai | Energy Analysis & Performance Optimization',
    description: 'Professional HVAC System Design Analysis Services in Mumbai. Expert energy analysis, performance optimization, load calculations, CFD analysis.',
    url: 'https://trinketsinstitute.com/services/hvac-system-design-analysis-services-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/hvac-design-analysis-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC System Design Analysis Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC System Design Analysis Services in Mumbai | Energy Analysis & Performance Optimization',
    description: 'Professional HVAC System Design Analysis Services in Mumbai. Expert energy analysis, performance optimization.',
    images: ['/images/hvac-design-analysis-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/hvac-system-design-analysis-services-mumbai',
  },
  category: 'Engineering Services',
}

export default function HVACSystemDesignAnalysis() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HVAC System Design Analysis Services in Mumbai',
    description: 'Professional HVAC system design analysis services in Mumbai including energy analysis, performance optimization, load calculations, CFD analysis, thermal modeling, and system evaluation for optimal HVAC performance.',
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
    serviceType: 'HVAC System Design Analysis and Performance Optimization',
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
      name: 'HVAC System Design Analysis Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energy Analysis',
            description: 'Comprehensive energy analysis and optimization for HVAC systems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Analysis',
            description: 'HVAC system performance evaluation and optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CFD Analysis',
            description: 'Computational Fluid Dynamics analysis for airflow optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Load Analysis',
            description: 'Detailed heating and cooling load analysis'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '195'
    }
  }

  const services = [
    {
      title: "Energy Analysis & Optimization",
      description: "Comprehensive energy analysis and optimization strategies for HVAC systems to maximize efficiency",
      icon: "⚡",
      features: ["Energy Modeling", "Consumption Analysis", "Efficiency Optimization", "Cost Reduction", "Green Building", "LEED Compliance"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "3-5 weeks",
      applications: ["Commercial Buildings", "Industrial Facilities", "Hospitals", "Data Centers", "Educational Buildings"],
      efficiency: "40% energy savings"
    },
    {
      title: "Performance Analysis & Testing",
      description: "Detailed performance analysis and testing of HVAC systems for optimal operation",
      icon: "📊",
      features: ["Performance Testing", "System Evaluation", "Efficiency Analysis", "Benchmarking", "Optimization", "Reporting"],
      gradient: "from-green-600 to-teal-600",
      complexity: "Expert",
      timeline: "2-4 weeks",
      applications: ["Existing Systems", "New Installations", "Retrofit Projects", "Commissioning"],
      efficiency: "35% performance improvement"
    },
    {
      title: "CFD Analysis & Simulation",
      description: "Advanced Computational Fluid Dynamics analysis for airflow and thermal optimization",
      icon: "🌪️",
      features: ["Airflow Analysis", "Thermal Modeling", "Pressure Distribution", "Velocity Profiles", "Temperature Mapping", "Visualization"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Expert",
      timeline: "3-6 weeks",
      applications: ["Clean Rooms", "Laboratories", "Data Centers", "Industrial Facilities"],
      efficiency: "50% airflow optimization"
    },
    {
      title: "Load Analysis & Calculations",
      description: "Precise heating and cooling load analysis for accurate HVAC system sizing",
      icon: "📐",
      features: ["Heat Gain Analysis", "Cooling Load", "Heating Load", "Peak Load", "Seasonal Analysis", "Equipment Sizing"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Advanced",
      timeline: "1-3 weeks",
      applications: ["New Buildings", "Renovations", "System Upgrades", "Energy Audits"],
      efficiency: "95% sizing accuracy"
    },
    {
      title: "Thermal Comfort Analysis",
      description: "Comprehensive thermal comfort analysis for optimal indoor environmental quality",
      icon: "🌡️",
      features: ["Comfort Assessment", "PMV/PPD Analysis", "Temperature Uniformity", "Humidity Control", "Air Quality", "Occupant Satisfaction"],
      gradient: "from-indigo-600 to-blue-600",
      complexity: "Advanced",
      timeline: "2-4 weeks",
      applications: ["Offices", "Hospitals", "Hotels", "Residential", "Educational"],
      efficiency: "90% comfort satisfaction"
    },
    {
      title: "System Optimization & Tuning",
      description: "Advanced system optimization and performance tuning for maximum HVAC efficiency",
      icon: "⚙️",
      features: ["Control Optimization", "Sequence Tuning", "Equipment Optimization", "Energy Monitoring", "Performance Tracking", "Maintenance Planning"],
      gradient: "from-cyan-600 to-teal-600",
      complexity: "Expert",
      timeline: "2-5 weeks",
      applications: ["BMS Integration", "Smart Buildings", "Automated Systems", "Performance Contracts"],
      efficiency: "30% operational efficiency"
    }
  ]

  const analysisTypes = [
    {
      category: "Energy Analysis",
      description: "Comprehensive energy performance evaluation and optimization",
      icon: "⚡",
      methods: ["Energy Modeling", "Consumption Tracking", "Efficiency Benchmarking", "Cost Analysis"],
      tools: ["EnergyPlus", "eQUEST", "Trace 700", "IES VE"],
      deliverables: ["Energy Reports", "Optimization Strategies", "Cost Savings", "ROI Analysis"],
      benefits: ["Reduced Energy Bills", "Environmental Impact", "LEED Points", "Performance Guarantee"]
    },
    {
      category: "CFD Analysis",
      description: "Advanced computational fluid dynamics for airflow optimization",
      icon: "🌪️",
      methods: ["3D Modeling", "Turbulence Analysis", "Heat Transfer", "Pressure Drop"],
      tools: ["ANSYS Fluent", "CFX", "STAR-CCM+", "FloTHERM"],
      deliverables: ["CFD Reports", "Visualization", "Airflow Maps", "Optimization Recommendations"],
      benefits: ["Optimal Airflow", "Temperature Uniformity", "Energy Efficiency", "Comfort Enhancement"]
    },
    {
      category: "Performance Testing",
      description: "Real-time performance measurement and validation",
      icon: "📊",
      methods: ["Field Testing", "Data Monitoring", "Performance Metrics", "Validation"],
      tools: ["Data Loggers", "Flow Meters", "Thermal Imaging", "Power Analyzers"],
      deliverables: ["Test Reports", "Performance Data", "Benchmarking", "Improvement Plans"],
      benefits: ["Verified Performance", "Operational Efficiency", "Problem Identification", "System Optimization"]
    },
    {
      category: "Thermal Modeling",
      description: "Advanced thermal analysis and comfort evaluation",
      icon: "🌡️",
      methods: ["Heat Transfer Analysis", "Comfort Modeling", "Load Calculations", "Temperature Mapping"],
      tools: ["TRNSYS", "TAS", "DesignBuilder", "HVAC Solution"],
      deliverables: ["Thermal Reports", "Comfort Analysis", "Load Profiles", "Design Recommendations"],
      benefits: ["Thermal Comfort", "Energy Efficiency", "Design Validation", "Code Compliance"]
    }
  ]

  const analysisPhases = [
    {
      phase: "Data Collection & Survey",
      description: "Comprehensive data gathering and system assessment",
      icon: "📋",
      activities: ["Site Survey", "System Documentation", "Operating Data", "Energy Bills", "Performance Metrics"],
      duration: "3-5 days",
      deliverables: ["Survey Report", "Data Collection", "System Assessment", "Baseline Establishment"]
    },
    {
      phase: "Modeling & Simulation",
      description: "Advanced modeling and simulation analysis",
      icon: "💻",
      activities: ["3D Modeling", "System Simulation", "Energy Analysis", "CFD Analysis", "Performance Prediction"],
      duration: "2-4 weeks",
      deliverables: ["Analysis Models", "Simulation Results", "Performance Data", "Optimization Scenarios"]
    },
    {
      phase: "Analysis & Evaluation",
      description: "Detailed analysis and performance evaluation",
      icon: "🔍",
      activities: ["Data Analysis", "Performance Evaluation", "Efficiency Assessment", "Problem Identification", "Benchmarking"],
      duration: "1-2 weeks",
      deliverables: ["Analysis Reports", "Performance Metrics", "Efficiency Ratings", "Issue Identification"]
    },
    {
      phase: "Optimization & Recommendations",
      description: "System optimization and improvement recommendations",
      icon: "🎯",
      activities: ["Optimization Strategies", "Improvement Plans", "Cost-Benefit Analysis", "Implementation Roadmap"],
      duration: "1-2 weeks",
      deliverables: ["Optimization Report", "Recommendations", "Implementation Plan", "ROI Analysis"]
    }
  ]

  const technologies = [
    { name: "EnergyPlus", description: "Building energy simulation", icon: "⚡", category: "Energy Analysis" },
    { name: "ANSYS Fluent", description: "CFD analysis and simulation", icon: "🌪️", category: "CFD Tools" },
    { name: "Trace 700", description: "HVAC energy modeling", icon: "📊", category: "Energy Tools" },
    { name: "IES VE", description: "Integrated environmental solutions", icon: "🏢", category: "Building Analysis" },
    { name: "STAR-CCM+", description: "Multiphysics simulation", icon: "🔬", category: "CFD Tools" },
    { name: "DesignBuilder", description: "Building performance simulation", icon: "🏗️", category: "Simulation" },
    { name: "TRNSYS", description: "Thermal system simulation", icon: "🌡️", category: "Thermal Analysis" },
    { name: "FloTHERM", description: "Electronics cooling analysis", icon: "💾", category: "Thermal CFD" }
  ]

  const features = [
    { title: "20+ Years Experience", value: "20+", suffix: "Years", icon: "🏆" },
    { title: "250+ Analysis Projects", value: "250+", suffix: "Projects", icon: "📈" },
    { title: "45% Energy Reduction", value: "45", suffix: "%", icon: "⚡" },
    { title: "99% Analysis Accuracy", value: "99", suffix: "%", icon: "✅" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">📊</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert HVAC Analysis</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                HVAC System Design Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>HVAC System Design Analysis Services in Mumbai</strong> for energy optimization, 
                performance analysis, CFD simulation, and thermal modeling. Expert analysis with 20+ years of HVAC 
                engineering expertise for maximum efficiency and optimal comfort in commercial and industrial buildings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Analysis Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/hvac-system-design" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn HVAC Analysis
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
                Complete HVAC Analysis &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Optimization Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced HVAC system analysis services for energy optimization, performance enhancement, and operational efficiency
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

        {/* Analysis Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Analysis Types &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Methodologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced analysis methodologies using cutting-edge tools and technologies
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
                        {analysis.category}
                      </h3>
                      <p className="text-gray-600 mb-4">{analysis.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Methods:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {analysis.methods.map((method, methodIndex) => (
                          <div key={methodIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tools & Software:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {analysis.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-center text-purple-600 text-sm">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {analysis.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {analysis.benefits.map((benefit, benIndex) => (
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
                Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to HVAC analysis ensuring comprehensive evaluation and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analysisPhases.map((phase, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 relative"
                >
                  <div className="absolute top-4 right-4 text-2xl font-bold text-blue-600/20 group-hover:text-blue-600/40 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    
                    <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                      {phase.duration}
                    </div>
                    
                    <div className="space-y-4 text-left">
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
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Deliverables:</h4>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, delIndex) => (
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
                Analysis
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading software and tools for precise HVAC system analysis and optimization
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
                    Master HVAC System Analysis
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn advanced HVAC system analysis from industry experts. Professional training programs 
                    covering energy analysis, CFD simulation, performance optimization, and thermal modeling.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/hvac-system-design" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 HVAC Analysis Course
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
                    <h4 className="font-bold mb-2">📊 Analysis Mastery</h4>
                    <p className="text-white/80">Master energy analysis, CFD simulation, and performance optimization</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">⚡ Advanced Tools</h4>
                    <p className="text-white/80">Learn EnergyPlus, ANSYS Fluent, and advanced analysis software</p>
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
                Get expert answers to common questions about HVAC system design analysis services in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What HVAC system design analysis services do you offer in Mumbai?",
                    answer: "We offer comprehensive HVAC system design analysis services in Mumbai including energy analysis, performance optimization, CFD simulation, load calculations, thermal comfort analysis, and system optimization using advanced software like EnergyPlus, ANSYS Fluent, and specialized analysis tools.",
                    icon: "📊",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "What is CFD analysis and how does it benefit HVAC systems?",
                    answer: "CFD (Computational Fluid Dynamics) analysis uses advanced simulation to analyze airflow patterns, temperature distribution, and pressure drops in HVAC systems. It helps optimize air distribution, improve comfort, reduce energy consumption, and solve complex thermal problems in buildings.",
                    icon: "🌪️",
                    category: "CFD Analysis",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "Which software tools do you use for HVAC analysis?",
                    answer: "We use industry-leading software including EnergyPlus for energy simulation, ANSYS Fluent for CFD analysis, Trace 700 for energy modeling, IES VE for building analysis, STAR-CCM+ for multiphysics simulation, and TRNSYS for thermal system analysis.",
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
                    question: "Do you provide HVAC analysis training programs?",
                    answer: "Yes, we offer comprehensive HVAC system analysis training covering energy modeling, CFD simulation, thermal analysis, performance optimization, and advanced software training with hands-on project experience using industry-standard tools and methodologies.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "What are typical timelines for HVAC analysis projects?",
                    answer: "Project timelines vary by complexity: energy analysis (3-5 weeks), CFD analysis (3-6 weeks), performance testing (2-4 weeks), and thermal modeling (2-4 weeks). We provide detailed schedules and milestone tracking for all analysis projects.",
                    icon: "⏱️",
                    category: "Timeline",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "How much energy savings can HVAC analysis achieve?",
                    answer: "Our comprehensive HVAC analysis typically identifies 40-50% energy savings opportunities through system optimization, performance tuning, control improvements, and operational efficiency enhancements based on detailed analysis and simulation results.",
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
                <div className="text-3xl mb-3">📊</div>
                <div className="text-2xl font-black text-gray-900 mb-2">45%</div>
                <div className="text-gray-600 font-semibold">Energy Reduction</div>
                <div className="text-xs text-gray-500 mt-1">Average Analysis Results</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Project Support</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">20+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">Analysis Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need HVAC Analysis Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our HVAC analysis experts are ready to discuss your project requirements and provide customized energy optimization and performance analysis solutions.
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
                    HVAC System Analysis?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert HVAC system design analysis services in Mumbai from certified engineers. Comprehensive 
                  energy optimization, performance analysis, and CFD simulation for maximum efficiency and comfort.
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
                    href="/services/hvac-system-design-services-mumbai" 
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