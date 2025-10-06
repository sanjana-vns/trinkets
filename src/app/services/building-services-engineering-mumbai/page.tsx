import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Building Services Engineering in Mumbai | Complete Building Systems Design & Consulting | Trinkets Institute',
  description: 'Professional Building Services Engineering in Mumbai. Expert MEP design, HVAC systems, electrical infrastructure, plumbing solutions for commercial & residential projects. Call +91-9820064471',
  keywords: [
    'Building Services Engineering Mumbai',
    'Building Systems Design Mumbai',
    'MEP Engineering Services Mumbai',
    'Building Infrastructure Engineering',
    'Commercial Building Services',
    'Residential Building Engineering',
    'Building Automation Systems',
    'HVAC Engineering Mumbai',
    'Electrical Building Services',
    'Plumbing Engineering Mumbai',
    'Fire Safety Engineering',
    'Building Energy Management',
    'Smart Building Solutions',
    'Building Services Consultant',
    'Mechanical Building Services',
    'Building Systems Integration',
    'Sustainable Building Design',
    'Green Building Engineering',
    'Building Performance Optimization',
    'Facility Engineering Services'
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
    title: 'Building Services Engineering in Mumbai | Complete Building Systems Design & Consulting',
    description: 'Professional Building Services Engineering in Mumbai. Expert MEP design, HVAC systems, electrical infrastructure for commercial & residential projects.',
    url: 'https://trinketsinstitute.com/services/building-services-engineering-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/building-services-engineering-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Building Services Engineering in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Services Engineering in Mumbai | Complete Building Systems Design & Consulting',
    description: 'Professional Building Services Engineering in Mumbai. Expert MEP design, HVAC systems, electrical infrastructure.',
    images: ['/images/building-services-engineering-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/building-services-engineering-mumbai',
  },
  category: 'Engineering Services',
}

export default function BuildingServicesEngineering() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Building Services Engineering in Mumbai',
    description: 'Professional building services engineering in Mumbai including MEP design, HVAC systems, electrical infrastructure, plumbing solutions, fire safety systems, and building automation for commercial and residential projects.',
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
    serviceType: 'Building Services Engineering and Consulting',
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
      name: 'Building Services Engineering Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MEP Engineering Design',
            description: 'Comprehensive mechanical, electrical, and plumbing engineering design services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Building Automation Systems',
            description: 'Smart building automation and control systems integration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energy Management Systems',
            description: 'Building energy optimization and management solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fire Safety Engineering',
            description: 'Fire protection systems design and safety compliance'
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
      title: "MEP Engineering Design",
      description: "Comprehensive mechanical, electrical, and plumbing engineering design for optimal building performance",
      icon: "⚡",
      features: ["HVAC System Design", "Electrical Distribution", "Plumbing Systems", "Fire Safety Design", "Energy Analysis", "Load Calculations"],
      gradient: "from-blue-600 to-indigo-600",
      complexity: "Expert",
      timeline: "4-10 weeks",
      applications: ["Commercial Buildings", "Residential Complex", "Office Towers", "Shopping Centers"],
      efficiency: "30-45% energy savings"
    },
    {
      title: "Building Automation Systems",
      description: "Smart building automation and control systems for enhanced efficiency and occupant comfort",
      icon: "🏠",
      features: ["BMS Integration", "SCADA Systems", "IoT Sensors", "Smart Controls", "Remote Monitoring", "Energy Optimization"],
      gradient: "from-purple-600 to-pink-600",
      complexity: "Expert",
      timeline: "6-12 weeks",
      applications: ["Smart Buildings", "Corporate Offices", "Hospitals", "Educational Institutes"],
      efficiency: "40-60% operational efficiency"
    },
    {
      title: "HVAC Systems Engineering",
      description: "Advanced heating, ventilation, and air conditioning systems for optimal indoor climate control",
      icon: "❄️",
      features: ["Climate Control", "Air Quality Management", "Energy Efficient Design", "Duct Design", "Equipment Selection", "CFD Analysis"],
      gradient: "from-cyan-600 to-blue-600",
      complexity: "Advanced",
      timeline: "3-8 weeks",
      applications: ["Office Buildings", "Retail Spaces", "Healthcare Facilities", "Data Centers"],
      efficiency: "35-50% energy reduction"
    },
    {
      title: "Electrical Infrastructure Design",
      description: "Complete electrical systems design including power distribution, lighting, and backup systems",
      icon: "💡",
      features: ["Power Distribution", "Lighting Design", "UPS Systems", "Generator Setup", "Cable Management", "Safety Systems"],
      gradient: "from-orange-600 to-red-600",
      complexity: "Expert",
      timeline: "4-10 weeks",
      applications: ["High-rise Buildings", "Industrial Facilities", "Commercial Complex", "Residential Projects"],
      efficiency: "25-40% power optimization"
    },
    {
      title: "Plumbing & Water Systems",
      description: "Comprehensive plumbing engineering with water efficiency and sustainable design principles",
      icon: "💧",
      features: ["Water Supply Design", "Drainage Systems", "Water Treatment", "Rainwater Harvesting", "Pump Systems", "Sustainability Solutions"],
      gradient: "from-blue-600 to-teal-600",
      complexity: "Advanced",
      timeline: "3-6 weeks",
      applications: ["Residential Buildings", "Hotels", "Hospitals", "Educational Buildings"],
      efficiency: "30-45% water conservation"
    },
    {
      title: "Fire Safety & Life Protection",
      description: "Fire protection systems design ensuring complete safety compliance and life protection standards",
      icon: "🔥",
      features: ["Fire Detection", "Sprinkler Systems", "Smoke Management", "Emergency Systems", "Safety Compliance", "Evacuation Planning"],
      gradient: "from-red-600 to-pink-600",
      complexity: "Expert",
      timeline: "4-8 weeks",
      applications: ["High-rise Buildings", "Shopping Malls", "Industrial Plants", "Public Buildings"],
      efficiency: "100% safety compliance"
    }
  ]

  const buildingTypes = [
    {
      category: "Commercial Buildings",
      description: "Office complexes, retail spaces, and business centers",
      icon: "🏢",
      systems: ["Central HVAC", "Power Distribution", "IT Infrastructure", "Security Systems", "Elevators", "Parking Systems"],
      challenges: ["Energy Efficiency", "Occupant Comfort", "Operational Costs", "Sustainability"],
      solutions: ["Smart Controls", "Energy Management", "Integrated Systems", "Predictive Maintenance"]
    },
    {
      category: "Residential Complex",
      description: "Apartments, housing societies, and gated communities",
      icon: "🏠",
      systems: ["Individual HVAC", "Electrical Supply", "Water Systems", "Security", "Intercom", "Waste Management"],
      challenges: ["Cost Optimization", "Maintenance", "Individual Control", "Safety"],
      solutions: ["Modular Design", "Smart Meters", "Community Systems", "Safety Protocols"]
    },
    {
      category: "Healthcare Facilities",
      description: "Hospitals, clinics, and medical centers",
      icon: "🏥",
      systems: ["Medical Gas", "Clean Rooms", "HVAC Zones", "Emergency Power", "Medical Equipment", "Infection Control"],
      challenges: ["Critical Systems", "Backup Power", "Air Quality", "Compliance"],
      solutions: ["Redundant Systems", "Medical Standards", "Contamination Control", "Emergency Protocols"]
    },
    {
      category: "Educational Institutes",
      description: "Schools, colleges, and universities",
      icon: "🎓",
      systems: ["Classroom HVAC", "IT Networks", "Laboratories", "Auditoriums", "Sports Facilities", "Cafeterias"],
      challenges: ["Large Occupancy", "Varied Usage", "Budget Constraints", "Safety"],
      solutions: ["Zone Control", "Flexible Systems", "Cost-effective Design", "Safety Standards"]
    }
  ]

  const technologies = [
    { name: "Revit MEP", description: "3D Building Information Modeling", icon: "🏗️", category: "BIM Software" },
    { name: "AutoCAD MEP", description: "2D/3D MEP design and drafting", icon: "📐", category: "Design Tools" },
    { name: "HAP Software", description: "HVAC load analysis and calculations", icon: "❄️", category: "Analysis" },
    { name: "ETAP", description: "Electrical system analysis", icon: "⚡", category: "Electrical" },
    { name: "EnergyPRO", description: "Building energy simulation", icon: "🔋", category: "Energy Analysis" },
    { name: "Navisworks", description: "Project coordination and clash detection", icon: "🎯", category: "Coordination" },
    { name: "DesignBuilder", description: "Building performance simulation", icon: "📊", category: "Simulation" },
    { name: "Trane TRACE", description: "HVAC system analysis", icon: "🌡️", category: "HVAC Tools" }
  ]

  const certifications = [
    { name: "LEED Certification", description: "Green building standards", icon: "🌱", category: "Sustainability" },
    { name: "GRIHA Rating", description: "Indian green building rating", icon: "🏆", category: "Green Building" },
    { name: "IGBC Standards", description: "Indian Green Building Council", icon: "🌿", category: "Environmental" },
    { name: "NBC Compliance", description: "National Building Code", icon: "📋", category: "Regulatory" },
    { name: "IS Standards", description: "Indian Standards compliance", icon: "✅", category: "Quality" },
    { name: "ASHRAE Standards", description: "HVAC industry standards", icon: "🔧", category: "Technical" }
  ]

  const features = [
    { title: "25+ Years Experience", value: "25+", suffix: "Years", icon: "🏆" },
    { title: "1000+ Building Projects", value: "1000+", suffix: "Projects", icon: "📈" },
    { title: "99.5% Client Satisfaction", value: "99.5", suffix: "%", icon: "✅" },
    { title: "50% Energy Optimization", value: "50", suffix: "%", icon: "🌱" }
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
                <span className="text-blue-600 font-semibold text-sm mr-2">🏢</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Expert Building Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Building Services Engineering
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional <strong>Building Services Engineering in Mumbai</strong> for comprehensive MEP design, 
                HVAC systems, electrical infrastructure, and smart building solutions. Expert engineering services 
                for commercial, residential, and industrial buildings with 25+ years of building systems expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Building Design Quote
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses/mep-engineering" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 Learn Building Engineering
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
                Complete Building Services
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Engineering Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end building engineering services for optimal performance, efficiency, and sustainability
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

        {/* Building Types Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Building Types &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Specialized Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tailored engineering solutions for different building types and their unique requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {buildingTypes.map((building, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {building.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {building.category}
                      </h3>
                      <p className="text-gray-600 mb-4">{building.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Building Systems:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {building.systems.map((system, sysIndex) => (
                          <div key={sysIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {system}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Engineering Challenges:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {building.challenges.map((challenge, chalIndex) => (
                          <div key={chalIndex} className="flex items-center text-red-600 text-sm">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {building.solutions.map((solution, solIndex) => (
                          <div key={solIndex} className="flex items-center text-green-600 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {solution}
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

        {/* Technologies Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Advanced Engineering
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge software and tools for precise building services engineering and analysis
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

        {/* Certifications Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Certifications &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Standards Compliance
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Full compliance with international standards and green building certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {cert.category}
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
                    Master Building Services Engineering
                    <span className="block">with Expert Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Learn comprehensive building services engineering from industry experts. Professional training 
                    programs covering MEP design, building automation, energy systems, and smart building technologies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/mep-engineering" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Building Engineering Course
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
                    <h4 className="font-bold mb-2">🏢 Building Systems Design</h4>
                    <p className="text-white/80">Master MEP integration and building automation</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🌱 Sustainable Engineering</h4>
                    <p className="text-white/80">Learn green building and energy optimization</p>
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
                Get expert answers to common questions about building services engineering in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Primary FAQs */}
              <div className="space-y-6">
                {[
                  {
                    question: "What building services engineering solutions do you offer in Mumbai?",
                    answer: "We offer comprehensive building services engineering in Mumbai including MEP design, HVAC systems, electrical infrastructure, plumbing solutions, fire safety systems, building automation, and energy management for commercial, residential, and industrial buildings.",
                    icon: "🏢",
                    category: "Services",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    question: "Which building types do you specialize in for engineering services?",
                    answer: "We specialize in commercial buildings, residential complexes, healthcare facilities, educational institutes, hospitality projects, industrial facilities, data centers, and smart buildings with customized engineering solutions for each building type.",
                    icon: "🏗️",
                    category: "Building Types",
                    gradient: "from-green-600 to-teal-600"
                  },
                  {
                    question: "What certifications and standards do you follow for building engineering?",
                    answer: "We follow LEED certification, GRIHA rating, IGBC standards, NBC compliance, IS standards, and ASHRAE standards ensuring sustainable, efficient, and compliant building services engineering solutions.",
                    icon: "🏆",
                    category: "Standards",
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
                    question: "Do you provide building services engineering training programs?",
                    answer: "Yes, we offer comprehensive building services engineering training covering MEP design, building automation, energy systems, BIM modeling, and sustainable design. Our courses include hands-on software training and industry certification.",
                    icon: "🎓",
                    category: "Training",
                    gradient: "from-orange-600 to-red-600"
                  },
                  {
                    question: "How do you ensure energy efficiency in building services design?",
                    answer: "We implement energy-efficient strategies including smart building automation, optimized HVAC design, LED lighting systems, renewable energy integration, and advanced control systems achieving 30-50% energy savings in building operations.",
                    icon: "🌱",
                    category: "Efficiency",
                    gradient: "from-indigo-600 to-purple-600"
                  },
                  {
                    question: "What is the typical timeline for building services engineering projects?",
                    answer: "Project timelines depend on building complexity: Small buildings (4-8 weeks), Medium buildings (8-16 weeks), Large complexes (16-24 weeks). We provide detailed project schedules and milestone tracking for all engineering phases.",
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
                <div className="text-2xl font-black text-gray-900 mb-2">99.5%</div>
                <div className="text-gray-600 font-semibold">Satisfaction</div>
                <div className="text-xs text-gray-500 mt-1">Client Success Rate</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-black text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support</div>
                <div className="text-xs text-gray-500 mt-1">Expert Consultation</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-black text-gray-900 mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-xs text-gray-500 mt-1">Engineering Experience</div>
              </div>
            </div>

            {/* Contact FAQ Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need Building Engineering Consultation?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our building services engineering experts are ready to discuss your project requirements and provide customized solutions.
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
                    Building Services Engineering?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert building services engineering in Mumbai from certified engineers. Comprehensive MEP design, 
                  automation systems, and sustainable building solutions.
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