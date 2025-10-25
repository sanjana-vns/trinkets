import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CAESAR II Stress Analysis Course Mumbai | Piping Training',
  description: 'Join the best CAESAR II stress analysis course in Mumbai at Trinkets Institute. Master pipe stress analysis, thermal analysis, ASME codes with hands-on training & 100% placement assistance in Mumbai industries.',
  keywords: [
    'CAESAR II stress analysis course in Mumbai',
    'CAESAR II stress analysis course Mumbai',
    'best CAESAR II training Mumbai',
    'CAESAR II course Mumbai',
    'pipe stress analysis course Mumbai',
    'piping stress analysis training Mumbai',
    'CAESAR II certification course Mumbai',
    'stress analysis software course Mumbai',
    'thermal stress analysis course Mumbai',
    'pipe stress engineer course Mumbai',
    'ASME B31 code training Mumbai',
    'API standards course Mumbai',
    'industrial piping stress course Mumbai',
    'petrochemical stress analysis Mumbai',
    'oil gas piping stress course Mumbai',
    'mechanical engineering course Mumbai',
    'piping design stress analysis Mumbai',
    'CAESAR II institute Mumbai',
    'stress analysis training center Mumbai',
    'professional CAESAR II course Mumbai'
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
    title: 'CAESAR II Stress Analysis Course in Mumbai | Best Training Institute',
    description: 'Join the best CAESAR II stress analysis course in Mumbai. Master pipe stress analysis, thermal analysis, ASME codes with hands-on training & 100% placement assistance.',
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
    "name": "CAESAR II Stress Analysis Course in Mumbai",
    "description": "Best CAESAR II stress analysis course in Mumbai covering comprehensive pipe stress analysis, thermal analysis, code compliance, and industry standards for oil & gas, petrochemical, and power plant industries at Trinkets Institute.",
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
        
        {/* Creative Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-400 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-orange-400 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-yellow-400 rounded-full animate-spin"></div>
            <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-red-400 animate-pulse"></div>
          </div>

          {/* Static Pipe Stress Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-red-400">
                <rect x="10" y="40" width="80" height="20" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="20" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                <circle cx="80" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                <path d="M30 35 L30 65 M50 35 L50 65 M70 35 L70 65" stroke="currentColor" strokeWidth="2"/>
                <text x="50" y="30" fill="currentColor" fontSize="8" textAnchor="middle">STRESS</text>
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/4">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-orange-400">
                <path d="M20 60 L100 60" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M20 60 Q40 30 60 60 Q80 90 100 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M45 45 L75 75 M75 45 L45 75" stroke="currentColor" strokeWidth="2"/>
                <text x="60" y="100" fill="currentColor" fontSize="10" textAnchor="middle">CAESAR II</text>
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/3">
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" className="text-yellow-400">
                <rect x="20" y="30" width="70" height="50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M30 40 L80 40 M30 50 L80 50 M30 60 L80 60 M30 70 L80 70" stroke="currentColor" strokeWidth="1"/>
                <circle cx="95" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M87 55 L103 55 M95 47 L95 63" stroke="currentColor" strokeWidth="2"/>
                <text x="55" y="25" fill="currentColor" fontSize="8" textAnchor="middle">ANALYSIS</text>
              </svg>
            </div>
          </div>

          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  CAESAR II
                </span>
                <br />
                <span className="text-white">Stress Analysis Course in Mumbai</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mb-6 animate-pulse"></div>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Master professional pipe stress analysis with Mumbai&apos;s leading institute. 
                From thermal analysis to code compliance, become a certified stress analysis expert.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Start Stress Analysis Journey
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Download Curriculum
                </button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400">100%</div>
                <div className="text-sm text-gray-300">Job Placement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-300">Live Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-300">Lab Access</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Course Overview - Target Keyword Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Best CAESAR II Stress Analysis Course in Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trinkets Institute offers the most comprehensive CAESAR II stress analysis course in Mumbai. Our industry-expert instructors provide hands-on training with real-world projects from Mumbai&apos;s leading refineries and petrochemical plants, making us the preferred choice for aspiring stress analysis engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Our CAESAR II Stress Analysis Course in Mumbai?</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our CAESAR II stress analysis course in Mumbai is designed by industry experts with 15+ years of experience in pipe stress analysis. This comprehensive methodology trains you to evaluate the structural integrity of piping systems under various operating conditions, ensuring piping systems can safely withstand thermal expansion, pressure loads, external forces, and dynamic effects throughout their operational life.
                  </p>
                  <p>
                    What makes our CAESAR II stress analysis course in Mumbai unique is the hands-on training approach with real-world projects from Mumbai&apos;s oil & gas, petrochemical, and power generation industries. You&apos;ll master thermal stress analysis, sustained load analysis, and occasional load analysis while ensuring compliance with international codes like ASME B31.1, B31.3, and API standards - skills highly demanded by Mumbai&apos;s industrial sector.
                  </p>
                  <p>
                    Our CAESAR II stress analysis course in Mumbai covers advanced topics including flexibility analysis, restraint design, pipe support optimization, and dynamic analysis. Students gain expertise in using CAESAR II software for critical applications in Mumbai&apos;s refineries like BPCL and HPCL, chemical plants, and power stations, preparing them for immediate employment in Mumbai&apos;s thriving engineering sector.
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

        {/* CAESAR II Course Location Benefits */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Take <span className="text-red-600">CAESAR II Stress Analysis Course in Mumbai</span>?
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Mumbai is India&apos;s industrial capital with the highest concentration of refineries, petrochemical plants, and engineering companies requiring CAESAR II stress analysis expertise. Our CAESAR II stress analysis course in Mumbai is strategically designed to meet the specific demands of Mumbai&apos;s industrial sector.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Mumbai&apos;s Industrial Advantage for CAESAR II Professionals
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">Major Refineries in Mumbai</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>BPCL Mahul Refinery</strong> - Requires CAESAR II experts for process piping</li>
                    <li>• <strong>HPCL Mumbai Refinery</strong> - Continuous demand for stress analysis engineers</li>
                    <li>• <strong>RIL Jamnagar Proximity</strong> - Easy access to India&apos;s largest refinery</li>
                    <li>• <strong>IOC Projects</strong> - Ongoing expansion requires skilled professionals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">Engineering Companies Hub</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>L&T Mumbai</strong> - Leading EPC contractor with CAESAR II projects</li>
                    <li>• <strong>Technimont India</strong> - Petrochemical plant engineering</li>
                    <li>• <strong>Worley Parsons</strong> - International engineering consultancy</li>
                    <li>• <strong>KBR India</strong> - Oil & gas engineering solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Stress Analysis Industry Opportunities */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mumbai&apos;s <span className="text-red-600">Stress Analysis Industry</span>
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mumbai leads India&apos;s petrochemical and refinery sector. Master CAESAR II and join the city&apos;s thriving oil & gas, power, and process industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refineries & Petrochemicals</h3>
                <p className="text-gray-600 mb-4">BPCL, HPCL, and RIL Mumbai refineries require skilled CAESAR II professionals for critical piping stress analysis and safety compliance.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Process Plant Design</li>
                  <li>• Equipment Piping Analysis</li>
                  <li>• Thermal Stress Assessment</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Power Generation</h3>
                <p className="text-gray-600 mb-4">Tata Power, Adani Power and thermal power plants in Mumbai region need CAESAR II experts for steam piping and pressure vessel analysis.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Steam Line Analysis</li>
                  <li>• Boiler Piping Design</li>
                  <li>• High-Pressure Systems</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-500">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Processing</h3>
                <p className="text-gray-600 mb-4">Chemical companies in Mumbai and Thane industrial belt require CAESAR II professionals for process piping and reactor design analysis.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Chemical Plant Piping</li>
                  <li>• Reactor Support Analysis</li>
                  <li>• Corrosive Media Handling</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Average CAESAR II Professional Salary in Mumbai: <span className="font-bold text-red-600">₹6-12 LPA</span>
              </p>
              <Link href="/placements">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                  Explore Career Opportunities
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section for Voice Search Optimization */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Everything you need to know about our CAESAR II course
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is CAESAR II stress analysis and why is it important in Mumbai&apos;s industry?</h3>
                <p className="text-gray-700 leading-relaxed">
                  CAESAR II is the industry-standard software for pipe stress analysis used in refineries, petrochemical plants, and power stations. In Mumbai&apos;s industrial landscape with major refineries like BPCL and RIL, CAESAR II expertise is crucial for ensuring piping system safety, thermal expansion analysis, and code compliance. Our comprehensive course prepares you for Mumbai&apos;s high-paying stress analysis roles.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How long does it take to master CAESAR II stress analysis?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive CAESAR II course spans 3-4 months with intensive hands-on training. You&apos;ll master stress analysis fundamentals in the first month, advanced modeling techniques in the second month, and real-world applications including thermal analysis and code compliance in the final months. With daily practice and expert guidance, you&apos;ll be industry-ready within 4 months.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What job opportunities are available for CAESAR II professionals in Mumbai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mumbai offers excellent opportunities for CAESAR II professionals in refineries, petrochemical plants, power stations, and EPC companies like L&T, Technimont, and Petrofac. Roles include Stress Engineer, Piping Design Engineer, Senior Analyst, and Technical Consultant. With Mumbai&apos;s expanding industrial sector and new refinery projects, demand for skilled professionals continues to grow significantly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide placement assistance after completing the CAESAR II course?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we provide 100% placement assistance with our extensive network of refineries, petrochemical companies, and EPC contractors in Mumbai. Our placement cell conducts specialized technical interviews, portfolio development workshops, and connects you directly with hiring managers. We maintain partnerships with 150+ companies and achieve excellent placement rates with average starting salaries of ₹6-8 LPA.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Is prior piping engineering experience required for CAESAR II training?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Basic understanding of piping engineering is helpful but not mandatory. Our course starts with piping fundamentals and gradually progresses to advanced CAESAR II modeling techniques. We provide comprehensive training covering pipe stress theory, thermal analysis principles, and industry codes. Our expert instructors ensure every student, regardless of background, achieves proficiency in CAESAR II stress analysis.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What makes Trinkets Institute the best choice for CAESAR II stress analysis course in Mumbai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trinkets Institute offers the most comprehensive CAESAR II stress analysis course in Mumbai with certified stress engineers, state-of-the-art software labs, and real refinery project experience. Our CAESAR II stress analysis course in Mumbai curriculum is developed with input from Mumbai&apos;s top petrochemical companies like BPCL, HPCL, and RIL, ensuring immediate job readiness. We provide flexible timings, weekend batches, and personalized mentoring with small batch sizes. Our 15+ years of experience and 100% placement record make us Mumbai&apos;s preferred institute for CAESAR II stress analysis course training.
                </p>
              </div>
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