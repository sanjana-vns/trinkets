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
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Piping Engineering Fundamentals
                <span className="block text-blue-300">Training in Mumbai</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Master the fundamentals of piping engineering with comprehensive training in pipe design, routing, materials, stress analysis, and industry standards. Build a strong foundation for your career in oil & gas, petrochemical, and process industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#enrollment" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Enroll Now
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
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