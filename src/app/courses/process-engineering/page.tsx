import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'
import LocationSection from '@/components/LocationSection'

export const metadata: Metadata = {
  title: 'Process Engineering Course - Master HYSYS, Aspen Plus, HTRI, Pro/II | Trinkets Institute',
  description: 'Comprehensive Process Engineering course with HYSYS, Aspen Plus, HTRI, Pro/II training. 100% placement assistance in chemical, petrochemical, oil & gas industries. Industry-certified curriculum.',
  keywords: [
    'process engineering course',
    'process engineering training',
    'HYSYS training',
    'Aspen Plus course',
    'HTRI software training',
    'Pro/II course',
    'process simulation training',
    'chemical engineering course',
    'process design certification',
    'chemical process design',
    'process optimization course',
    'distillation column design',
    'heat exchanger design',
    'process safety training',
    'chemical plant design',
    'petrochemical engineering',
    'oil and gas processing',
    'process control course',
    'process equipment design',
    'chemical reactor design',
    'separation processes',
    'process modeling course',
    'mass transfer operations',
    'heat transfer course',
    'fluid mechanics training',
    'thermodynamics course',
    'process engineering jobs',
    'chemical engineer career',
    'process design software',
    'process engineering institute',
    'professional process course',
    'industrial process design',
    'process flow diagram',
    'P&ID development course'
  ],
  authors: [{ name: 'Trinkets Institute' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/process-engineering',
  },
  openGraph: {
    title: 'Process Engineering Course - Master HYSYS, Aspen Plus, HTRI, Pro/II | Trinkets Institute',
    description: 'Join our comprehensive Process Engineering course. Learn HYSYS, Aspen Plus, HTRI, Pro/II with 100% placement assistance in chemical and petrochemical industry.',
    url: 'https://trinketsinstitute.com/courses/process-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/process-engineering-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Process Engineering Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Engineering Course - Master Industry Software | Trinkets Institute',
    description: 'Learn professional process engineering with HYSYS, Aspen Plus, HTRI, Pro/II. 100% placement assistance in chemical and petrochemical industry.',
    images: ['/images/process-engineering-course-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function ProcessEngineeringCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Process Engineering Course",
    "description": "Comprehensive training in process engineering using industry-standard software including HYSYS, Aspen Plus, HTRI, and Pro/II",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Engineering Hub",
        "addressLocality": "Tech City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": ["classroom", "online"],
    "educationalLevel": "Professional",
    "teaches": [
      "Process Engineering",
      "HYSYS Simulation",
      "Aspen Plus",
      "HTRI Design",
      "Pro/II Modeling",
      "Process Design",
      "Chemical Plant Design",
      "Process Optimization"
    ],
    "timeRequired": "P6M",
    "inLanguage": "en-IN",
    "isAccessibleForFree": false,
    "educationalUse": "Professional Development",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Process Engineering Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Master Chemical Process Design with HYSYS, Aspen Plus, HTRI & Pro/II
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Duration: </span>6 Months
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Mode: </span>Classroom/Online
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Placement: </span>100% Assistance
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive Process Engineering course is designed to transform you into a skilled process design engineer. 
                This program covers everything from fundamental chemical engineering principles to advanced process simulation, 
                providing hands-on training with industry-standard software used by leading chemical and petrochemical companies worldwide.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-orange-600">What You&apos;ll Learn</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Complete process design from conceptual to detailed engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Process simulation and optimization techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Heat exchanger design and thermal analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Distillation column design and separation processes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Chemical reactor design and kinetics modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Process safety analysis and hazard identification</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>Economic evaluation and process optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span>P&ID development and process documentation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-red-800">Duration</h4>
                  <p className="text-red-600">6 Months</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-orange-800">Mode</h4>
                  <p className="text-orange-600">Classroom/Online</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Certification</h4>
                  <p className="text-purple-600">Industry Recognized</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">Projects</h4>
                  <p className="text-blue-600">Real Industry</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Chemical Plants</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Petrochemicals</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Oil & Gas</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Pharmaceuticals</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Refineries</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Fertilizers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Training Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Software Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HYSYS</h3>
              <p className="text-orange-100 mb-4">Process Simulation & Design</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Steady State Simulation</li>
                <li>• Dynamic Modeling</li>
                <li>• Unit Operations</li>
                <li>• Property Packages</li>
                <li>• Process Optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Aspen Plus</h3>
              <p className="text-red-100 mb-4">Advanced Process Modeling</p>
              <ul className="space-y-2 text-red-100 text-sm">
                <li>• Flowsheet Development</li>
                <li>• Thermodynamic Analysis</li>
                <li>• Separation Design</li>
                <li>• Reactor Modeling</li>
                <li>• Economic Evaluation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HTRI</h3>
              <p className="text-blue-100 mb-4">Heat Transfer Design</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Heat Exchanger Design</li>
                <li>• Thermal Rating</li>
                <li>• Performance Analysis</li>
                <li>• Optimization Studies</li>
                <li>• Cost Estimation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Pro/II</h3>
              <p className="text-purple-100 mb-4">Steady State Simulation</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Process Simulation</li>
                <li>• Equipment Design</li>
                <li>• Case Studies</li>
                <li>• What-if Analysis</li>
                <li>• Report Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Module 1-3: Foundation & Fundamentals</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Chemical Engineering Fundamentals</h4>
                  <p className="text-gray-600 text-sm">Mass balance, energy balance, thermodynamics, fluid mechanics</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Process Equipment Design</h4>
                  <p className="text-gray-600 text-sm">Heat exchangers, distillation columns, reactors, pumps, compressors</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Mass Transfer Operations</h4>
                  <p className="text-gray-600 text-sm">Distillation, absorption, extraction, crystallization</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-red-600">Module 4-6: Advanced Process Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Process Simulation</h4>
                  <p className="text-gray-600 text-sm">HYSYS, Aspen Plus modeling, convergence techniques</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Process Safety & HAZOP</h4>
                  <p className="text-gray-600 text-sm">Risk assessment, safety instrumented systems, relief sizing</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Economic Evaluation</h4>
                  <p className="text-gray-600 text-sm">Capital cost estimation, NPV analysis, optimization</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">HYSYS (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic operations</li>
                    <li>• Flowsheet development and unit operations</li>
                    <li>• Property package selection</li>
                    <li>• Steady state and dynamic simulation</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Aspen Plus (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Process modeling concepts</li>
                    <li>• Thermodynamic methods</li>
                    <li>• Separation system design</li>
                    <li>• Reactor design and kinetics</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">HTRI & Pro/II (Weeks 9-12)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Heat exchanger design using HTRI</li>
                    <li>• Pro/II simulation techniques</li>
                    <li>• Integration with process design</li>
                    <li>• Case study implementations</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete process design for a chemical plant including process simulation, 
                  equipment design, safety analysis, and economic evaluation using all software tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Prospects & Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Process Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹5-10 LPA</p>
              <p className="text-sm text-gray-500">Design chemical processes and equipment for manufacturing plants</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Process Simulation Engineer</h3>
              <p className="text-gray-600 mb-3">₹6-12 LPA</p>
              <p className="text-sm text-gray-500">Develop and validate process models using simulation software</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Project Engineer</h3>
              <p className="text-gray-600 mb-3">₹7-14 LPA</p>
              <p className="text-sm text-gray-500">Manage chemical plant design and construction projects</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Process Safety Engineer</h3>
              <p className="text-gray-600 mb-3">₹8-15 LPA</p>
              <p className="text-sm text-gray-500">Conduct safety analysis and risk assessment for chemical processes</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Plant Operations Engineer</h3>
              <p className="text-gray-600 mb-3">₹6-11 LPA</p>
              <p className="text-sm text-gray-500">Optimize plant operations and troubleshoot process issues</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Process Consultant</h3>
              <p className="text-gray-600 mb-3">₹10-20 LPA</p>
              <p className="text-sm text-gray-500">Provide specialized consulting for process improvement and optimization</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">Reliance Industries</div>
              <div className="bg-white p-3 rounded shadow">ONGC</div>
              <div className="bg-white p-3 rounded shadow">Indian Oil</div>
              <div className="bg-white p-3 rounded shadow">BPCL</div>
              <div className="bg-white p-3 rounded shadow">Tata Chemicals</div>
              <div className="bg-white p-3 rounded shadow">UPL</div>
              <div className="bg-white p-3 rounded shadow">Pidilite</div>
              <div className="bg-white p-3 rounded shadow">Asian Paints</div>
              <div className="bg-white p-3 rounded shadow">Hindalco</div>
              <div className="bg-white p-3 rounded shadow">L&T</div>
              <div className="bg-white p-3 rounded shadow">Tecnimont</div>
              <div className="bg-white p-3 rounded shadow">Engineers India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">400+</div>
              <div className="text-orange-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-orange-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹12L</div>
              <div className="text-orange-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-orange-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Technical Interviews</h3>
              <p className="text-orange-100 text-sm">Process engineering focused interview preparation and mock sessions</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Projects</h3>
              <p className="text-orange-100 text-sm">Real-world projects to build impressive portfolio for employers</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Company Partnerships</h3>
              <p className="text-orange-100 text-sm">Direct partnerships with leading chemical and petrochemical companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore More at Trinkets Institute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">All Engineering Courses</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of engineering and design courses.</p>
              <Link href="/courses" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View All Courses
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Placement Services</h3>
              <p className="text-gray-600 mb-4">Learn about our comprehensive placement assistance program.</p>
              <Link href="/placements" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Placement Details
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Student Success Stories</h3>
              <p className="text-gray-600 mb-4">Read testimonials from our successful process engineering graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized process engineering training for your organization.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/process-engineering"
          />
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Process Engineering Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful process engineers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>15th January 2026
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 20 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-orange-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection 
        title="Visit Our Process Engineering Centers"
        subtitle="Experience our advanced process simulation labs and industrial training facilities"
        compact={true}
      />

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <Link href="/courses" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  )
}