import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Piping Engineering Fundamentals Training in Mumbai | Professional Piping Course Institute',
  description: 'Master piping engineering fundamentals in Mumbai with comprehensive training in pipe design, routing, stress analysis, and industry standards. Expert-led course with 100% placement assistance at Trinkets Institute.',
  keywords: [
    'piping engineering fundamentals training in Mumbai',
    'piping engineering course Mumbai',
    'pipe design training Mumbai',
    'piping fundamentals course',
    'piping engineering basics Mumbai',
    'pipe routing training',
    'piping design course Mumbai',
    'industrial piping training',
    'piping systems course Mumbai',
    'pipe stress fundamentals',
    'piping layout training',
    'mechanical piping course',
    'oil gas piping training Mumbai',
    'petrochemical piping course',
    'piping engineering certification Mumbai'
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
    canonical: '/courses/piping-engineering-fundamentals-training',
  },
  openGraph: {
    title: 'Piping Engineering Fundamentals Training in Mumbai | Professional Training Institute',
    description: 'Master piping engineering fundamentals with comprehensive training in pipe design, routing, stress analysis, and industry standards. Expert-led course with placement assistance.',
    url: '/courses/piping-engineering-fundamentals-training',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/piping-engineering-fundamentals-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Engineering Fundamentals Training Course in Mumbai - Professional Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Engineering Fundamentals Training in Mumbai | Professional Training',
    description: 'Master piping engineering fundamentals with comprehensive training in pipe design, routing, stress analysis, and industry standards.',
    images: ['/images/piping-engineering-fundamentals-twitter.jpg'],
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

export default function PipingEngineeringFundamentalsPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Piping Engineering Fundamentals Training in Mumbai",
    "description": "Comprehensive piping engineering fundamentals training course covering pipe design, routing, stress analysis, materials, codes & standards, and industrial applications for oil & gas, petrochemical, and process industries.",
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
    "educationalLevel": "Beginner to Intermediate",
    "timeRequired": "P4M",
    "coursePrerequisites": "Basic mechanical engineering knowledge",
    "educationalCredentialAwarded": "Piping Engineering Fundamentals Certification",
    "teaches": [
      "Piping Design Fundamentals",
      "Pipe Routing and Layout",
      "Piping Materials and Specifications",
      "Pipe Stress Analysis Basics",
      "Industry Codes and Standards",
      "Piping System Components",
      "Process Flow Diagrams",
      "Piping and Instrumentation Diagrams",
      "Equipment Layout Principles",
      "Industrial Safety in Piping"
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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-indigo-400 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-purple-400 rounded-full animate-spin"></div>
            <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-blue-400 animate-pulse"></div>
          </div>

          {/* Floating Engineering Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" className="text-blue-400">
                <rect x="10" y="30" width="90" height="50" stroke="currentColor" strokeWidth="3" fill="none"/>
                <line x1="10" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="65" x2="100" y2="65" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="80" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="55" y="25" fill="currentColor" fontSize="8" textAnchor="middle">PIPING</text>
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-delayed">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-indigo-400">
                <path d="M20 60 L100 60" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M30 40 L30 80 M50 40 L50 80 M70 40 L70 80 M90 40 L90 80" stroke="currentColor" strokeWidth="2"/>
                <rect x="25" y="45" width="10" height="30" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="45" y="45" width="10" height="30" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="65" y="45" width="10" height="30" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="85" y="45" width="10" height="30" stroke="currentColor" strokeWidth="1" fill="none"/>
                <text x="60" y="100" fill="currentColor" fontSize="10" textAnchor="middle">DESIGN</text>
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/3 animate-float">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-purple-400">
                <polygon points="50,10 80,35 80,65 50,90 20,65 20,35" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M35 35 L65 65 M65 35 L35 65" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 20 L50 30 M50 70 L50 80 M30 50 L20 50 M80 50 L70 50" stroke="currentColor" strokeWidth="2"/>
                <text x="50" y="95" fill="currentColor" fontSize="8" textAnchor="middle">ENGINEERING</text>
              </svg>
            </div>
          </div>

          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Piping
                </span>
                <br />
                <span className="text-white">Engineering</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6 animate-pulse"></div>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Master piping engineering fundamentals with Mumbai&apos;s premier institute. 
                From design principles to industry standards, build your engineering foundation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Engineering Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Download Curriculum
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-float">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-300">Job Placement</div>
              </div>
              <div className="animate-float-delayed">
                <div className="text-3xl font-bold text-indigo-400">40+</div>
                <div className="text-sm text-gray-300">Live Projects</div>
              </div>
              <div className="animate-float">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="animate-float-delayed">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
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

        {/* Course Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Why Choose Piping Engineering Fundamentals Training?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Piping engineering fundamentals form the backbone of industrial design in oil & gas, petrochemical, power generation, and process industries. Master the essential concepts and practical skills needed for a successful career.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">What is Piping Engineering Fundamentals?</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Piping engineering fundamentals encompass the core principles of designing, routing, and analyzing piping systems that transport fluids in industrial facilities. This comprehensive training covers everything from basic pipe sizing and material selection to advanced concepts like stress analysis and thermal expansion management.
                  </p>
                  <p>
                    Our piping engineering fundamentals training in Mumbai provides hands-on experience with real-world projects from Mumbai&apos;s industrial sectors including refineries, chemical plants, and manufacturing facilities. You&apos;ll learn to read and create P&IDs, understand process flow diagrams, and apply industry codes like ASME B31.3 and API standards.
                  </p>
                  <p>
                    The course builds a solid foundation in piping materials, fittings, valves, and support systems while introducing modern design tools like AutoCAD Plant 3D and basic stress analysis concepts. Students gain practical skills in piping layout, routing optimization, and equipment integration essential for Mumbai&apos;s growing industrial landscape.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-6 text-blue-600">Course Highlights</h4>
                <div className="space-y-4">
                  {[
                    'Comprehensive piping design fundamentals',
                    'Hands-on training with real industry projects',
                    'AutoCAD Plant 3D and piping software',
                    'Industry codes and standards (ASME B31.3, API)',
                    'Piping materials and component selection',
                    '100% placement assistance in Mumbai industries'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                Comprehensive Piping Engineering Fundamentals Curriculum
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master every aspect of piping engineering fundamentals with our industry-aligned curriculum designed for Mumbai&apos;s engineering professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Piping Design Basics",
                  duration: "Week 1-2",
                  topics: [
                    "Introduction to piping engineering",
                    "Process flow diagrams (PFDs)",
                    "Piping and instrumentation diagrams (P&IDs)",
                    "Basic pipe sizing principles",
                    "Fluid flow fundamentals"
                  ]
                },
                {
                  module: "Module 2", 
                  title: "Piping Materials & Components",
                  duration: "Week 3-4",
                  topics: [
                    "Pipe materials and specifications",
                    "Fittings, flanges, and connections",
                    "Valves and control devices",
                    "Gaskets and sealing systems",
                    "Material selection criteria"
                  ]
                },
                {
                  module: "Module 3",
                  title: "Piping Layout & Routing",
                  duration: "Week 5-6",
                  topics: [
                    "Equipment layout principles",
                    "Pipe routing optimization",
                    "Piping supports and restraints",
                    "Space management and accessibility",
                    "Maintenance considerations"
                  ]
                },
                {
                  module: "Module 4",
                  title: "Industry Codes & Standards",
                  duration: "Week 7-8",
                  topics: [
                    "ASME B31.3 process piping code",
                    "API standards and specifications",
                    "ASTM material standards",
                    "Safety and environmental regulations",
                    "Quality assurance and testing"
                  ]
                },
                {
                  module: "Module 5",
                  title: "Stress Analysis Fundamentals",
                  duration: "Week 9-10",
                  topics: [
                    "Basic pipe stress concepts",
                    "Thermal expansion and flexibility",
                    "Support design principles",
                    "Introduction to CAESAR II",
                    "Stress analysis workflow"
                  ]
                },
                {
                  module: "Module 6",
                  title: "AutoCAD Plant 3D & Projects",
                  duration: "Week 11-16",
                  topics: [
                    "AutoCAD Plant 3D fundamentals",
                    "3D piping modeling techniques",
                    "Isometric generation",
                    "Industry project implementation",
                    "Drawing standards and documentation"
                  ]
                }
              ].map((moduleData, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                    {moduleData.module}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{moduleData.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{moduleData.duration}</p>
                  <ul className="space-y-2">
                    {moduleData.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
                Industry-Standard Software Training
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master professional software tools used by leading engineering companies in Mumbai and globally for piping design and analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "AutoCAD Plant 3D",
                  description: "Industry-leading 3D piping design software for modeling and documentation",
                  icon: "📐",
                  features: ["3D Piping Modeling", "Isometric Generation", "Equipment Integration", "Drawing Automation"]
                },
                {
                  name: "CAESAR II",
                  description: "Introduction to pipe stress analysis software for thermal and structural analysis",
                  icon: "🔧",
                  features: ["Stress Analysis Basics", "Thermal Expansion", "Support Design", "Code Compliance"]
                },
                {
                  name: "PDMS/E3D",
                  description: "Advanced 3D plant design management system for large-scale projects",
                  icon: "🏭",
                  features: ["Plant Modeling", "Clash Detection", "Design Review", "Data Management"]
                },
                {
                  name: "MS Visio",
                  description: "Professional diagramming software for P&IDs and process flow diagrams",
                  icon: "📊",
                  features: ["P&ID Creation", "Process Diagrams", "Symbol Libraries", "Documentation"]
                }
              ].map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-white px-3 py-1 rounded-full text-xs text-blue-600 font-medium">
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
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                Career Opportunities in Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Piping engineering fundamentals expertise opens doors to exciting career opportunities in Mumbai&apos;s thriving industrial and engineering sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Job Roles & Salary Ranges</h3>
                <div className="space-y-4">
                  {[
                    { role: "Piping Designer", salary: "₹3.5L - ₹6L", experience: "0-2 years" },
                    { role: "Piping Engineer", salary: "₹6L - ₹10L", experience: "2-4 years" },
                    { role: "Senior Piping Engineer", salary: "₹10L - ₹18L", experience: "4-7 years" },
                    { role: "Lead Piping Engineer", salary: "₹18L - ₹30L", experience: "7-10 years" },
                    { role: "Piping Engineering Manager", salary: "₹30L - ₹45L", experience: "10-15 years" },
                    { role: "Principal Piping Engineer", salary: "₹45L - ₹65L+", experience: "15+ years" }
                  ].map((job, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-gray-800">{job.role}</h4>
                          <p className="text-sm text-gray-600">{job.experience}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{job.salary}</p>
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
                    { sector: "Petrochemicals", icon: "⚗️", companies: "ONGC Petro, IOCL" },
                    { sector: "Chemical Plants", icon: "🧪", companies: "UPL, Aarti Industries" },
                    { sector: "Power Generation", icon: "⚡", companies: "NTPC, Tata Power" },
                    { sector: "Pharmaceutical", icon: "💊", companies: "Cipla, Dr. Reddy's" },
                    { sector: "Engineering Consultancy", icon: "🏗️", companies: "L&T, Technimont" }
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
                Why Learn Piping Engineering in Mumbai?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mumbai is India&apos;s industrial capital with the highest concentration of oil & gas, petrochemical, and engineering companies requiring piping engineering expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Industrial Hub",
                  description: "Mumbai hosts major refineries, petrochemical complexes, and engineering companies requiring piping design expertise.",
                  icon: "🏭",
                  stats: "600+ Companies"
                },
                {
                  title: "High Demand",
                  description: "Growing demand for skilled piping engineers in oil & gas, chemical, and process industries across Mumbai.",
                  icon: "📈",
                  stats: "3000+ Jobs"
                },
                {
                  title: "Career Growth",
                  description: "Excellent career advancement opportunities with leading MNCs and engineering consultancies based in Mumbai.",
                  icon: "🚀",
                  stats: "40% Growth"
                }
              ].map((reason, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold">
                    {reason.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mumbai Piping Engineering Industry Opportunities */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mumbai&apos;s <span className="text-blue-600">Piping Engineering Industry</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mumbai is India&apos;s engineering hub with major EPC companies, refineries, and process industries. Master piping fundamentals and join the city&apos;s thriving engineering sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">EPC Companies</h3>
                <p className="text-gray-600 mb-4">L&T, Technimont, Engineers India, and Petrofac Mumbai offices require skilled piping engineers for major refinery and petrochemical projects across India and overseas.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Process Plant Design</li>
                  <li>• Equipment Layout</li>
                  <li>• Piping Specifications</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Industries</h3>
                <p className="text-gray-600 mb-4">Tata Steel, JSW, and chemical manufacturing companies in Mumbai region need piping engineers for plant utility systems and process piping design.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Utility Piping Systems</li>
                  <li>• Chemical Process Lines</li>
                  <li>• Steam Distribution</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Projects</h3>
                <p className="text-gray-600 mb-4">Mumbai metro, airport expansion, and smart city projects require piping engineers for building services, HVAC systems, and infrastructure piping networks.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Building Services</li>
                  <li>• HVAC Piping Systems</li>
                  <li>• Water Distribution</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Average Piping Engineer Salary in Mumbai: <span className="font-bold text-blue-600">₹4.5-9 LPA</span>
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Explore Career Opportunities
              </button>
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
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Everything you need to know about our Piping Engineering course
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is piping engineering and why should I learn it in Mumbai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Piping engineering involves the design, analysis, and specification of piping systems for industrial processes. In Mumbai&apos;s industrial landscape with major refineries, petrochemical plants, and EPC companies like L&T and Technimont, piping engineering skills are essential for process plant design, utility systems, and infrastructure projects. Our comprehensive course prepares you for Mumbai&apos;s high-demand engineering roles.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How long does it take to master piping engineering fundamentals?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive piping engineering fundamentals course spans 3-4 months with intensive practical training. You&apos;ll master basic concepts in the first month, design principles and standards in the second month, and advanced applications including stress analysis and material selection in the final months. With hands-on projects and expert guidance, you&apos;ll be industry-ready within 4 months.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What job opportunities are available for piping engineers in Mumbai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mumbai offers excellent opportunities for piping engineers in EPC companies, refineries, petrochemical plants, and manufacturing industries. Roles include Piping Design Engineer, Process Engineer, Project Engineer, and Design Coordinator. With Mumbai&apos;s expanding industrial sector and new infrastructure projects, demand for skilled piping engineers continues to grow significantly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide placement assistance after completing the piping engineering course?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we provide 100% placement assistance with our extensive network of EPC companies, refineries, and engineering consultancies in Mumbai. Our placement cell conducts technical interviews, project portfolio development, and connects you directly with hiring managers. We maintain partnerships with 200+ companies and achieve excellent placement rates with average starting salaries of ₹4.5-6 LPA.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Is prior engineering experience required for piping engineering fundamentals training?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Basic understanding of mechanical engineering is helpful but not mandatory. Our course starts with engineering fundamentals and gradually progresses to advanced piping design techniques. We provide comprehensive training covering fluid mechanics, material science, and industry codes. Our expert instructors ensure every student, regardless of background, achieves proficiency in piping engineering principles.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What makes Trinkets Institute the best choice for piping engineering training in Mumbai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trinkets Institute offers industry-leading piping engineering training with experienced design engineers, state-of-the-art design labs, and real project experience. Our curriculum is developed with input from Mumbai&apos;s top EPC companies, ensuring immediate job readiness. We provide flexible timings, weekend batches, and personalized mentoring with small batch sizes. Our 15+ years of experience and 100% placement record make us Mumbai&apos;s preferred choice for piping engineering training.
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
                Advanced Piping Engineering Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take your piping engineering skills to the next level with our advanced specialized training programs designed for Mumbai professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SP3D Piping Design Training",
                  description: "Master Smart Plant 3D for advanced 3D piping design and plant layout with complex industry projects.",
                  link: "/courses/sp3d-piping-design-training",
                  icon: "🔧",
                  duration: "4 months"
                },
                {
                  title: "CAESAR II Stress Analysis",
                  description: "Advanced pipe stress analysis training with CAESAR II software for thermal and dynamic analysis.",
                  link: "/courses/caesar-ii-stress-analysis", 
                  icon: "🔩",
                  duration: "3 months"
                },
                {
                  title: "Electrical Design Engineering",
                  description: "Complete electrical design training with AutoCAD Electrical, ETAP, and power distribution systems.",
                  link: "/courses/electrical-design-engineering",
                  icon: "⚡",
                  duration: "6 months"
                }
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-semibold">{course.duration}</span>
                    <Link href={course.link} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="enrollment" className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Start Your Piping Engineering Career Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Mumbai&apos;s premier piping engineering fundamentals training program and build a strong foundation for a successful career in industrial design with 100% placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Enroll Now - Limited Seats
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Download Brochure
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}