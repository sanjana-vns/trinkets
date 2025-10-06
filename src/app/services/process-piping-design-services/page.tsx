import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Process Piping Design Services in Mumbai | Expert Piping Engineering Solutions | Trinkets Institute',
  description: 'Leading Process Piping Design Services in Mumbai. Expert piping engineering solutions for oil & gas, petrochemical, power plants. Professional training & consultancy. Call +91-9820064471',
  keywords: [
    'Process Piping Design Services Mumbai',
    'Piping Engineering Services Mumbai',
    'Piping Design Consultancy Mumbai',
    'Industrial Piping Solutions',
    'Process Engineering Mumbai',
    'Piping Layout Design',
    'P&ID Development Mumbai',
    'Piping Stress Analysis',
    'Plant Design Services',
    'Pipeline Engineering Mumbai',
    'Process Plant Piping',
    'Mechanical Piping Design',
    'Oil Gas Piping Mumbai',
    'Petrochemical Piping Design',
    'Power Plant Piping Services'
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
    title: 'Process Piping Design Services in Mumbai | Expert Piping Engineering Solutions',
    description: 'Leading Process Piping Design Services in Mumbai. Expert piping engineering solutions for oil & gas, petrochemical, power plants. Professional training & consultancy.',
    url: 'https://trinketsinstitute.com/services/process-piping-design-services',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/process-piping-design-services-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Process Piping Design Services in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Piping Design Services in Mumbai | Expert Piping Engineering Solutions',
    description: 'Leading Process Piping Design Services in Mumbai. Expert piping engineering solutions for oil & gas, petrochemical, power plants.',
    images: ['/images/process-piping-design-services-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/services/process-piping-design-services',
  },
  category: 'Engineering Services',
}

export default function ProcessPipingDesignServices() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Process Piping Design Services in Mumbai',
    description: 'Comprehensive process piping design services and piping engineering solutions in Mumbai for oil & gas, petrochemical, and power plant industries.',
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
    serviceType: 'Process Piping Design and Engineering',
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
      name: 'Process Piping Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'P&ID Development',
            description: 'Comprehensive Piping and Instrumentation Diagram development services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Piping Layout Design',
            description: 'Detailed piping layout and routing design for industrial plants'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stress Analysis',
            description: 'Advanced piping stress analysis and structural integrity assessment'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  }

  const services = [
    {
      title: "P&ID Development & Design",
      description: "Comprehensive Piping and Instrumentation Diagrams for process industries",
      icon: "📋",
      features: ["Process Flow Diagrams", "Instrument Specifications", "Control Logic Design", "Safety Systems Integration"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "3D Piping Layout Design",
      description: "Advanced 3D modeling and layout optimization for industrial plants",
      icon: "🏗️",
      features: ["PDMS/E3D Modeling", "Clash Detection", "Walkthrough Animation", "Constructability Review"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Piping Stress Analysis",
      description: "Structural integrity assessment and stress analysis for piping systems",
      icon: "⚡",
      features: ["CAESAR II Analysis", "Thermal Expansion", "Support Design", "Code Compliance"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Process Engineering",
      description: "Complete process design and optimization for various industries",
      icon: "🔧",
      features: ["Heat & Mass Balance", "Equipment Sizing", "Process Optimization", "Safety Analysis"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Plant Layout & Design",
      description: "Optimal plant layout design for maximum efficiency and safety",
      icon: "🏭",
      features: ["Plot Plan Development", "Equipment Layout", "Utility Distribution", "Safety Considerations"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Consultancy & Training",
      description: "Expert consultancy and professional training services",
      icon: "👨‍🏫",
      features: ["Project Consultation", "Technical Training", "Software Training", "Career Guidance"],
      gradient: "from-teal-600 to-blue-600"
    }
  ]

  const industries = [
    { name: "Oil & Gas", icon: "⛽", description: "Upstream, midstream, and downstream facilities" },
    { name: "Petrochemical", icon: "🧪", description: "Chemical processing and refining plants" },
    { name: "Power Generation", icon: "⚡", description: "Thermal, nuclear, and renewable energy plants" },
    { name: "Pharmaceutical", icon: "💊", description: "Clean room facilities and sterile processing" },
    { name: "Food & Beverage", icon: "🍺", description: "Hygienic process design and equipment" },
    { name: "Water Treatment", icon: "💧", description: "Municipal and industrial water treatment" }
  ]

  const features = [
    { title: "15+ Years Experience", value: "15+", suffix: "Years", icon: "🏆" },
    { title: "500+ Projects Completed", value: "500+", suffix: "Projects", icon: "📈" },
    { title: "98% Client Satisfaction", value: "98", suffix: "%", icon: "⭐" },
    { title: "24/7 Support Available", value: "24/7", suffix: "Support", icon: "🔧" }
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Professional Engineering Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Process Piping Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Expert <strong>Piping Engineering Services in Mumbai</strong> for oil & gas, petrochemical, and power plant industries. 
                Professional process piping design, P&ID development, and 3D modeling solutions with 15+ years of industry experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Get Free Consultation
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 View Training Courses
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
                Our Process Piping
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Design Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive piping engineering solutions designed to meet the unique requirements of your industrial projects
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
                      Learn More
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
                Specialized piping engineering services across diverse industrial sectors
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
              <div className="absolute top-4 right-4 text-6xl opacity-20">🎓</div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Enhance Your Skills with Our
                    <span className="block">Piping Design Training</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Master the latest piping design tools and techniques with our comprehensive training programs. 
                    Learn from industry experts with hands-on experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/courses/piping-design-engineering" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📚 Piping Design Course
                    </Link>
                    <Link 
                      href="/courses/pdms-e3d-training" 
                      className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center"
                    >
                      🔧 PDMS/E3D Training
                    </Link>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🎯 Industry-Relevant Curriculum</h4>
                    <p className="text-white/80">Latest tools and industry best practices</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">👨‍🏫 Expert Instructors</h4>
                    <p className="text-white/80">Learn from experienced professionals</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🏆 100% Placement Support</h4>
                    <p className="text-white/80">Career guidance and job placement assistance</p>
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
                  question: "What process piping design services do you offer in Mumbai?",
                  answer: "We offer comprehensive process piping design services including P&ID development, 3D piping layout design, stress analysis, process engineering, plant layout design, and professional consultancy services for various industries in Mumbai."
                },
                {
                  question: "Which industries do you serve for piping engineering services?",
                  answer: "Our piping engineering services in Mumbai cater to oil & gas, petrochemical, power generation, pharmaceutical, food & beverage, and water treatment industries with specialized solutions for each sector."
                },
                {
                  question: "Do you provide training along with piping design services?",
                  answer: "Yes, we offer comprehensive training programs in piping design, PDMS/E3D, AutoCAD Plant 3D, and other industry-standard software along with our professional piping engineering services."
                },
                {
                  question: "What is the experience level of your piping design team?",
                  answer: "Our team has 15+ years of experience in process piping design and engineering services, having completed 500+ projects across various industries in Mumbai and pan-India."
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
                  Ready to Start Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Piping Design Project?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get expert process piping design services in Mumbai. Contact us for a free consultation and discover how we can optimize your industrial processes.
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
                    href="/services" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🔧 All Services
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