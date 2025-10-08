import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Piping Engineering Services in Mumbai | Expert Piping Design & Consultancy | Trinkets Institute',
  description: 'Professional Piping Engineering Services in Mumbai. Expert piping design, stress analysis, 3D modeling, CAESAR II analysis, SP3D design services. 15+ years experience. Call +91 9820924788',
  keywords: [
    'Piping Engineering Services in Mumbai',
    'Piping Design Services Mumbai',
    'Piping Stress Analysis Mumbai',
    'CAESAR II Services Mumbai',
    'SP3D Piping Design Mumbai',
    'Piping Consultancy Mumbai',
    'Piping Engineering Consultant',
    'Industrial Piping Services',
    'Process Piping Design',
    'Piping Layout Design',
    'Piping Isometric Drawing',
    'Piping Material Specification',
    'Piping Support Design',
    'Piping Engineering Mumbai',
    'Professional Piping Services'
  ],
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.titindia.com'),
  alternates: {
    canonical: '/services/piping-engineering-services',
  },
  openGraph: {
    title: 'Piping Engineering Services in Mumbai | Expert Piping Design & Consultancy',
    description: 'Professional Piping Engineering Services in Mumbai. Expert piping design, stress analysis, 3D modeling, CAESAR II analysis, SP3D design services. 15+ years experience.',
    url: '/services/piping-engineering-services',
    siteName: 'Trinkets Institute',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/piping-engineering-services-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Engineering Services in Mumbai - Trinkets Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Engineering Services in Mumbai | Expert Piping Design & Consultancy',
    description: 'Professional Piping Engineering Services in Mumbai. Expert piping design, stress analysis, 3D modeling, CAESAR II analysis, SP3D design services.',
    images: ['/images/piping-engineering-services-mumbai.jpg'],
    creator: '@titindiamumbai',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Piping Engineering Services in Mumbai',
  description: 'Professional Piping Engineering Services in Mumbai including piping design, stress analysis, 3D modeling, CAESAR II analysis, and SP3D design services.',
  provider: {
    '@type': 'Organization',
    name: 'Trinkets Institute of Technology',
    url: 'https://www.titindia.com',
    logo: 'https://www.titindia.com/images/trinketlogo.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '823, Ecstasy Business Park, City of Joy, JSD Road',
      addressLocality: 'Mulund West',
      addressRegion: 'Mumbai',
      postalCode: '400080',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9820924788',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'English'
    }
  },
  serviceType: 'Piping Engineering Services',
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
    addressCountry: 'IN'
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: 'Contact for pricing',
    priceCurrency: 'INR'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5'
  }
}

export default function PipingEngineeringServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Breadcrumb */}
              <nav className="flex justify-center lg:justify-start mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                      🏠 Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <Link href="/services" className="text-gray-500 hover:text-blue-600 transition-colors">
                        Services
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <span className="text-blue-600 font-medium">Piping Engineering Services</span>
                    </div>
                  </li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Professional
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Piping Engineering Services
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-700">
                  in Mumbai
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert <strong>Piping Engineering Services in Mumbai</strong> with 15+ years of experience. 
                Comprehensive piping design, stress analysis, 3D modeling, and consultancy services for industrial projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/contact" className="group">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    🚀 Get Free Consultation
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </Link>
                <a href="tel:+919820924788" className="group">
                  <button className="w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    📞 Call +91 9820924788
                  </button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  15+ Years Experience
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  500+ Projects Completed
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ISO Certified
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 Support
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/services.jpg"
                  alt="Piping Engineering Services in Mumbai - Professional Piping Design"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Piping Engineering Services</span> in Mumbai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive piping engineering solutions from concept to commissioning with latest industry standards and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Piping Design & Layout",
                description: "Complete piping system design, layout optimization, and equipment arrangement using industry-standard software like SP3D and AutoCAD Plant 3D.",
                features: ["3D Piping Layout", "Equipment Arrangement", "Pipe Routing", "Design Optimization"]
              },
              {
                icon: "📊",
                title: "Stress Analysis Services",
                description: "Advanced pipe stress analysis using CAESAR II to ensure structural integrity and compliance with international codes and standards.",
                features: ["CAESAR II Analysis", "Code Compliance", "Support Design", "Thermal Analysis"]
              },
              {
                icon: "📐",
                title: "Piping Isometric Drawing",
                description: "Detailed isometric drawings and piping documentation for fabrication, installation, and maintenance purposes.",
                features: ["ISO Drawings", "BOM Generation", "Fabrication Details", "Installation Drawings"]
              },
              {
                icon: "🏗️",
                title: "Piping Support Design",
                description: "Comprehensive piping support design and analysis ensuring proper support of piping systems under all operating conditions.",
                features: ["Support Calculation", "Spring Hanger Design", "Guide Support", "Anchor Design"]
              },
              {
                icon: "📋",
                title: "Material Specification",
                description: "Development of piping material specifications, line lists, and material take-offs for accurate project estimation.",
                features: ["MTO Preparation", "Line List", "Material Specs", "Vendor Evaluation"]
              },
              {
                icon: "🎯",
                title: "Project Consultancy",
                description: "Expert piping engineering consultancy for complex industrial projects with feasibility studies and optimization solutions.",
                features: ["Feasibility Studies", "Design Review", "Code Compliance", "Optimization"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Software */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-blue-600">Technology & Software</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading software and technologies to deliver precise and efficient piping engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "SP3D",
                description: "Smart Plant 3D for comprehensive piping design and modeling",
                icon: "🎯",
                features: ["3D Modeling", "Clash Detection", "Automated Drawings", "Material Reports"]
              },
              {
                name: "CAESAR II",
                description: "Advanced pipe stress analysis and flexibility analysis software",
                icon: "📊",
                features: ["Stress Analysis", "Code Compliance", "Dynamic Analysis", "Support Design"]
              },
              {
                name: "AutoCAD Plant 3D",
                description: "Plant design software for piping and instrumentation",
                icon: "📐",
                features: ["P&ID Creation", "3D Plant Design", "Isometric Generation", "Data Management"]
              },
              {
                name: "PDMS",
                description: "Plant Design Management System for large-scale projects",
                icon: "🏗️",
                features: ["Multi-discipline", "Clash Detection", "Review & Walk-through", "Data Integration"]
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="text-3xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{tech.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{tech.description}</p>
                <ul className="space-y-1">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-700">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Industry Applications</span> We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our piping engineering services cater to diverse industries with specialized solutions for each sector&apos;s unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oil & Gas Industry",
                icon: "⛽",
                description: "Comprehensive piping solutions for refineries, petrochemical plants, and offshore platforms.",
                applications: ["Refinery Piping", "Petrochemical Plants", "Gas Processing", "Offshore Platforms"]
              },
              {
                title: "Power Generation",
                icon: "⚡",
                description: "Piping design for thermal, nuclear, and renewable energy power generation facilities.",
                applications: ["Thermal Power Plants", "Nuclear Facilities", "Steam Systems", "Cooling Water Systems"]
              },
              {
                title: "Chemical Processing",
                icon: "🧪",
                description: "Specialized piping for chemical plants handling corrosive and hazardous materials.",
                applications: ["Chemical Plants", "Pharmaceutical", "Specialty Chemicals", "Process Equipment"]
              },
              {
                title: "Water Treatment",
                icon: "💧",
                description: "Piping systems for water treatment plants, sewage treatment, and industrial water systems.",
                applications: ["Water Treatment", "Sewage Plants", "Industrial Water", "Desalination"]
              },
              {
                title: "Food & Beverage",
                icon: "🍽️",
                description: "Sanitary piping design for food processing and beverage manufacturing facilities.",
                applications: ["Food Processing", "Beverage Plants", "Dairy Industry", "Pharmaceutical"]
              },
              {
                title: "Manufacturing",
                icon: "🏭",
                description: "Industrial piping for manufacturing facilities and process industries.",
                applications: ["Steel Plants", "Cement Industry", "Paper Mills", "Textile Industry"]
              }
            ].map((industry, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-blue-500 mr-2">•</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-400">Engineering Process</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Systematic approach ensuring quality, efficiency, and compliance in every piping engineering project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Project Analysis",
                description: "Comprehensive project requirement analysis, site survey, and feasibility studies.",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Design Development",
                description: "Detailed piping design using advanced 3D modeling software and industry standards.",
                icon: "📐"
              },
              {
                step: "03",
                title: "Analysis & Validation",
                description: "Stress analysis, code compliance verification, and design optimization.",
                icon: "🔬"
              },
              {
                step: "04",
                title: "Documentation",
                description: "Complete project documentation, drawings, and material specifications delivery.",
                icon: "📋"
              }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{process.icon}</div>
                  <div className="text-blue-400 font-bold text-sm mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Training Courses */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Skills with Our <span className="text-blue-600">Training Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement our services with professional training courses to build in-house expertise in piping engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SP3D Piping Design Training",
                duration: "6 Weeks",
                level: "Professional",
                description: "Master Smart Plant 3D for comprehensive piping design and modeling with hands-on projects.",
                features: ["3D Modeling", "Clash Detection", "Isometric Generation", "Industry Projects"],
                link: "/courses/sp3d-piping-design-training",
                price: "₹45,000"
              },
              {
                title: "CAESAR II Stress Analysis",
                duration: "4 Weeks", 
                level: "Advanced",
                description: "Advanced pipe stress analysis and flexibility analysis using CAESAR II software.",
                features: ["Stress Analysis", "Code Compliance", "Dynamic Analysis", "Certification"],
                link: "/courses/caesar-ii-stress-analysis",
                price: "₹35,000"
              },
              {
                title: "Piping Engineering Fundamentals",
                duration: "8 Weeks",
                level: "Beginner to Advanced",
                description: "Complete piping engineering fundamentals from basics to advanced concepts.",
                features: ["Theory & Practical", "Industry Standards", "Design Principles", "Career Support"],
                link: "/courses/piping-engineering-fundamentals-training",
                price: "₹25,000"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">{course.level}</span>
                    <span className="text-2xl font-bold">{course.price}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-blue-100">Duration: {course.duration}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={course.link} className="block">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105">
                      View Course Details →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-blue-600">Piping Engineering Services</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of excellence in piping engineering with proven track record and satisfied clients across Mumbai.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "🏆",
                  title: "15+ Years Experience",
                  description: "Extensive experience in piping engineering with 500+ successfully completed projects across various industries."
                },
                {
                  icon: "👥",
                  title: "Expert Team",
                  description: "Certified piping engineers with expertise in latest software and international codes and standards."
                },
                {
                  icon: "🎯",
                  title: "Quality Assurance",
                  description: "ISO certified processes ensuring highest quality deliverables with comprehensive quality checks."
                },
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  description: "Efficient project execution with on-time delivery and 24/7 technical support throughout the project."
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "Competitive pricing with transparent cost structure and no hidden charges for all services."
                },
                {
                  icon: "📞",
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and consultation for all your piping engineering requirements."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6">Get Started Today!</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">📞</span>
                    <span>Call: +91 9820924788</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">✉️</span>
                    <span>Email: info@titindia.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">📍</span>
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    Request Free Consultation
                  </button>
                </Link>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4 animate-bounce">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-400 rounded-full p-4 animate-pulse">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our piping engineering services in Mumbai.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What piping engineering services do you offer in Mumbai?",
                answer: "We offer comprehensive piping engineering services including piping design & layout, stress analysis using CAESAR II, 3D modeling with SP3D, isometric drawings, material specifications, support design, and project consultancy for various industries."
              },
              {
                question: "Which software do you use for piping design and analysis?",
                answer: "We use industry-leading software including SP3D (Smart Plant 3D), CAESAR II for stress analysis, AutoCAD Plant 3D, PDMS, and other specialized tools to ensure accurate and efficient piping engineering solutions."
              },
              {
                question: "What industries do you serve with your piping engineering services?",
                answer: "We serve diverse industries including Oil & Gas, Power Generation, Chemical Processing, Water Treatment, Food & Beverage, Manufacturing, Pharmaceuticals, and other process industries with specialized piping solutions."
              },
              {
                question: "How long does a typical piping engineering project take?",
                answer: "Project duration varies based on complexity and scope. Small projects may take 2-4 weeks, while large industrial projects can take several months. We provide detailed timelines during project planning phase."
              },
              {
                question: "Do you provide training along with piping engineering services?",
                answer: "Yes, we offer comprehensive training courses in SP3D Piping Design, CAESAR II Stress Analysis, and Piping Engineering Fundamentals to help build in-house expertise for our clients."
              },
              {
                question: "What makes your piping engineering services different?",
                answer: "Our 15+ years of experience, certified engineers, use of latest software, ISO certified processes, competitive pricing, 24/7 support, and proven track record of 500+ successful projects make us the preferred choice for piping engineering services in Mumbai."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Piping Engineering Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get professional <strong>Piping Engineering Services in Mumbai</strong> with 15+ years of experience. 
            Contact us today for free consultation and project quotation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="group">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                🚀 Get Free Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </Link>
            <a href="tel:+919820924788" className="group">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                📞 Call Now: +91 9820924788
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <span className="mr-2">⚡</span>
              Fast Response
            </div>
            <div className="flex items-center">
              <span className="mr-2">💰</span>
              Competitive Pricing
            </div>
            <div className="flex items-center">
              <span className="mr-2">🏆</span>
              Quality Assured
            </div>
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              24/7 Support
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}