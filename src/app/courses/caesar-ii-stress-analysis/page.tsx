import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CAESAR II Stress Analysis in Mumbai | Professional Piping Stress Analysis Course Institute',
  description: 'Master CAESAR II stress analysis in Mumbai with comprehensive training in pipe stress analysis, thermal analysis, and code compliance. Expert-led course with 100% placement assistance at Trinkets Institute.',
  keywords: [
    'CAESAR II stress analysis in Mumbai',
    'CAESAR II training Mumbai',
    'pipe stress analysis course Mumbai',
    'piping stress analysis training',
    'CAESAR II certification Mumbai',
    'stress analysis software training',
    'thermal stress analysis course',
    'pipe stress engineer training',
    'ASME B31 code training',
    'API standards training Mumbai',
    'industrial piping stress analysis',
    'petrochemical stress analysis',
    'oil gas piping stress course',
    'mechanical engineering Mumbai',
    'piping design stress analysis'
  ].join(', '),
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/caesar-ii-stress-analysis',
  },
  openGraph: {
    title: 'CAESAR II Stress Analysis in Mumbai | Professional Training Institute',
    description: 'Master CAESAR II stress analysis with comprehensive training in pipe stress analysis, thermal analysis, and code compliance. Expert-led course with placement assistance.',
    url: '/courses/caesar-ii-stress-analysis',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/caesar-ii-stress-analysis-og.jpg',
        width: 1200,
        height: 630,
        alt: 'CAESAR II Stress Analysis Course in Mumbai - Professional Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAESAR II Stress Analysis in Mumbai | Professional Training',
    description: 'Master CAESAR II stress analysis with comprehensive training in pipe stress analysis, thermal analysis, and code compliance.',
    images: ['/images/caesar-ii-stress-analysis-twitter.jpg'],
    creator: '@TrinketsInstitute',
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
}

export default function CaesarIIStressAnalysisPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CAESAR II Stress Analysis in Mumbai",
    "description": "Comprehensive CAESAR II stress analysis training course covering pipe stress analysis, thermal analysis, code compliance, and industry standards for oil & gas, petrochemical, and power plant industries.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute of Technology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
        "addressLocality": "Mulund West",
        "addressRegion": "Mumbai",
        "postalCode": "400080",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9820924788",
        "contactType": "customer service"
      }
    },
    "courseMode": "In-person",
    "educationalLevel": "Advanced",
    "timeRequired": "P3M",
    "coursePrerequisites": "Basic mechanical engineering knowledge and piping fundamentals",
    "educationalCredentialAwarded": "CAESAR II Stress Analysis Certification",
    "teaches": [
      "CAESAR II Software Fundamentals",
      "Pipe Stress Analysis Theory",
      "Thermal Stress Analysis",
      "ASME B31 Code Compliance",
      "API Standards Implementation",
      "Restraint and Support Design",
      "Flexibility Analysis",
      "Dynamic Analysis",
      "Code Verification Methods",
      "Industry Project Implementation"
    ],
    "availableLanguage": "English",
    "inLanguage": "en-IN",
    "isAccessibleForFree": false,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "In-person",
      "location": {
        "@type": "Place",
        "name": "Trinkets Institute of Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                CAESAR II Stress Analysis
                <span className="block text-yellow-300">in Mumbai</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Master professional pipe stress analysis with CAESAR II software. Comprehensive training in thermal analysis, code compliance, and industry standards for oil & gas, petrochemical, and power plant industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#enrollment" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Enroll Now
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300">
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Why Choose CAESAR II Stress Analysis Course?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                CAESAR II is the industry-standard software for pipe stress analysis, used by leading engineering companies worldwide for critical piping system design and analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">What is CAESAR II Stress Analysis?</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    CAESAR II stress analysis is a comprehensive methodology for evaluating the structural integrity of piping systems under various operating conditions. This advanced engineering discipline ensures that piping systems can safely withstand thermal expansion, pressure loads, external forces, and dynamic effects throughout their operational life.
                  </p>
                  <p>
                    Our CAESAR II stress analysis course in Mumbai provides hands-on training with real-world projects from oil & gas, petrochemical, and power generation industries. You&apos;ll learn to perform thermal stress analysis, sustained load analysis, and occasional load analysis while ensuring compliance with international codes like ASME B31.1, B31.3, and API standards.
                  </p>
                  <p>
                    The course covers advanced topics including flexibility analysis, restraint design, pipe support optimization, and dynamic analysis. Students gain expertise in using CAESAR II software for critical applications in refineries, chemical plants, and power stations across Mumbai&apos;s industrial landscape.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-6 text-red-600">Course Highlights</h4>
                <div className="space-y-4">
                  {[
                    'Industry-standard CAESAR II software training',
                    'Real piping stress analysis projects',
                    'ASME B31 & API code compliance',
                    'Thermal and dynamic analysis techniques',
                    'Professional certification upon completion',
                    '100% placement assistance in Mumbai industries'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Comprehensive CAESAR II Training Curriculum
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master every aspect of pipe stress analysis with our industry-aligned curriculum designed for Mumbai&apos;s engineering professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "CAESAR II Fundamentals",
                  duration: "Week 1-2",
                  topics: [
                    "Introduction to pipe stress analysis",
                    "CAESAR II interface and navigation",
                    "Basic piping modeling techniques",
                    "Material properties and databases",
                    "Loading conditions and boundary conditions"
                  ]
                },
                {
                  module: "Module 2", 
                  title: "Sustained Load Analysis",
                  duration: "Week 3-4",
                  topics: [
                    "Dead weight and pressure analysis",
                    "Support reaction calculations",
                    "Stress evaluation criteria",
                    "ASME B31.1 and B31.3 code compliance",
                    "Allowable stress verification"
                  ]
                },
                {
                  module: "Module 3",
                  title: "Thermal Stress Analysis",
                  duration: "Week 5-6",
                  topics: [
                    "Thermal expansion calculations",
                    "Displacement stress analysis",
                    "Temperature load cases",
                    "Flexibility analysis techniques",
                    "Thermal anchor design"
                  ]
                },
                {
                  module: "Module 4",
                  title: "Dynamic Analysis",
                  duration: "Week 7-8",
                  topics: [
                    "Modal analysis and natural frequencies",
                    "Harmonic analysis for rotating equipment",
                    "Seismic analysis and wind loading",
                    "Occasional load combinations",
                    "Equipment nozzle load verification"
                  ]
                },
                {
                  module: "Module 5",
                  title: "Advanced Modeling",
                  duration: "Week 9-10",
                  topics: [
                    "Complex piping configurations",
                    "Spring hanger design and selection",
                    "Expansion joint modeling",
                    "Buried and insulated piping analysis",
                    "Non-linear analysis techniques"
                  ]
                },
                {
                  module: "Module 6",
                  title: "Industry Projects",
                  duration: "Week 11-12",
                  topics: [
                    "Oil & gas refinery piping projects",
                    "Petrochemical plant stress analysis",
                    "Power plant steam line analysis",
                    "Offshore platform piping systems",
                    "Report generation and documentation"
                  ]
                }
              ].map((moduleData, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                    {moduleData.module}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{moduleData.title}</h3>
                  <p className="text-red-600 font-semibold mb-4">{moduleData.duration}</p>
                  <ul className="space-y-2">
                    {moduleData.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Professional Software Tools Training
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master industry-standard software tools used by leading engineering companies in Mumbai and globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "CAESAR II",
                  description: "Industry-standard pipe stress analysis software for thermal, sustained, and dynamic analysis",
                  icon: "🔧",
                  features: ["Stress Analysis", "Thermal Expansion", "Dynamic Loading", "Code Compliance"]
                },
                {
                  name: "AutoCAD Plant 3D",
                  description: "3D piping design and modeling software for creating detailed piping isometrics",
                  icon: "📐",
                  features: ["3D Modeling", "Isometric Generation", "Plant Design", "Equipment Modeling"]
                },
                {
                  name: "PDMS/E3D",
                  description: "Advanced 3D plant design management system for large-scale industrial projects",
                  icon: "🏭",
                  features: ["Plant Modeling", "Clash Detection", "Design Review", "Data Management"]
                },
                {
                  name: "PV Elite",
                  description: "Pressure vessel design and analysis software for equipment stress verification",
                  icon: "⚡",
                  features: ["Vessel Design", "Nozzle Analysis", "Fatigue Analysis", "API Standards"]
                }
              ].map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-white px-3 py-1 rounded-full text-xs text-red-600 font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Prospects */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Career Opportunities in Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                CAESAR II stress analysis expertise opens doors to high-paying positions in Mumbai&apos;s thriving engineering and industrial sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Job Roles & Salary Ranges</h3>
                <div className="space-y-4">
                  {[
                    { role: "Junior Stress Engineer", salary: "₹4.5L - ₹7L", experience: "0-2 years" },
                    { role: "Pipe Stress Engineer", salary: "₹7L - ₹12L", experience: "2-5 years" },
                    { role: "Senior Stress Analyst", salary: "₹12L - ₹20L", experience: "5-8 years" },
                    { role: "Lead Stress Engineer", salary: "₹20L - ₹35L", experience: "8-12 years" },
                    { role: "Principal Engineer", salary: "₹35L - ₹50L", experience: "12+ years" },
                    { role: "Engineering Manager", salary: "₹50L - ₹75L+", experience: "15+ years" }
                  ].map((job, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-gray-800">{job.role}</h4>
                          <p className="text-sm text-gray-600">{job.experience}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-red-600">{job.salary}</p>
                          <p className="text-xs text-gray-500">per annum</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Industry Sectors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { sector: "Oil & Gas Refineries", icon: "🛢️", companies: "BPCL, HPCL, RIL" },
                    { sector: "Petrochemicals", icon: "⚗️", companies: "ONGC, Shell, BP" },
                    { sector: "Power Generation", icon: "⚡", companies: "NTPC, Tata Power, Adani" },
                    { sector: "Chemical Plants", icon: "🧪", companies: "UPL, Aarti Industries" },
                    { sector: "Pharmaceutical", icon: "💊", companies: "Cipla, Dr. Reddy's, Lupin" },
                    { sector: "Engineering Consultancy", icon: "🏗️", companies: "L&T, Technip, Worley" }
                  ].map((industry, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">{industry.icon}</div>
                      <h4 className="font-bold text-gray-800 mb-1">{industry.sector}</h4>
                      <p className="text-xs text-gray-600">{industry.companies}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Mumbai */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Why Learn CAESAR II in Mumbai?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mumbai is India&apos;s industrial capital with the highest concentration of oil & gas, petrochemical, and engineering companies requiring CAESAR II expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Industrial Hub",
                  description: "Mumbai hosts major refineries, petrochemical complexes, and engineering companies requiring pipe stress analysis expertise.",
                  icon: "🏭",
                  stats: "500+ Companies"
                },
                {
                  title: "High Demand",
                  description: "Growing demand for certified CAESAR II professionals in oil & gas, power, and chemical industries across Mumbai.",
                  icon: "📈",
                  stats: "2000+ Jobs"
                },
                {
                  title: "Career Growth",
                  description: "Excellent career advancement opportunities with leading MNCs and engineering consultancies based in Mumbai.",
                  icon: "🚀",
                  stats: "35% Growth"
                }
              ].map((reason, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold">
                    {reason.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Related Engineering Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expand your expertise with our comprehensive engineering training programs designed for Mumbai professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SP3D Piping Design Training",
                  description: "Master Smart Plant 3D for advanced 3D piping design and plant layout with industry projects.",
                  link: "/courses/sp3d-piping-design-training",
                  icon: "🔧",
                  duration: "4 months"
                },
                {
                  title: "Electrical Design Engineering",
                  description: "Complete electrical design training with AutoCAD Electrical, ETAP, and power distribution systems.",
                  link: "/courses/electrical-design-engineering", 
                  icon: "⚡",
                  duration: "6 months"
                },
                {
                  title: "Instrumentation & Control",
                  description: "Master PLC programming, SCADA systems, and DCS for process automation and control.",
                  link: "/courses/instrumentation-control",
                  icon: "📊",
                  duration: "5 months"
                }
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-600 font-semibold">{course.duration}</span>
                    <Link href={course.link} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="enrollment" className="py-16 md:py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Start Your CAESAR II Career Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Mumbai&apos;s premier CAESAR II stress analysis training program and become a certified pipe stress engineer with 100% placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Enroll Now - Limited Seats
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300">
                Download Brochure
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}