import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'HVAC System Design Course - Master AutoCAD MEP, Revit MEP, HAP, TRACE 700 | Trinkets Institute',
  description: 'Comprehensive HVAC System Design course with AutoCAD MEP, Revit MEP, HAP, TRACE 700 training. 100% placement assistance in MEP, construction, building design industries. Industry-certified curriculum.',
  keywords: [
    'HVAC system design course',
    'HVAC engineering training',
    'AutoCAD MEP training',
    'Revit MEP course',
    'HAP software training',
    'TRACE 700 course',
    'HVAC design certification',
    'mechanical engineering HVAC',
    'building services engineering',
    'MEP design course',
    'air conditioning design',
    'heating system design',
    'ventilation design course',
    'HVAC load calculation',
    'duct design training',
    'chiller plant design',
    'HVAC controls course',
    'building automation systems',
    'energy efficient HVAC',
    'HVAC design software',
    'commercial HVAC design',
    'residential HVAC course',
    'HVAC drafting training',
    'HVAC engineer career',
    'HVAC design jobs',
    'building mechanical systems',
    'HVAC calculation methods',
    'psychrometric analysis',
    'HVAC design institute',
    'professional HVAC course',
    'HVAC system optimization',
    'green building HVAC design'
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
    canonical: '/courses/hvac-system-design',
  },
  openGraph: {
    title: 'HVAC System Design Course - Master AutoCAD MEP, Revit MEP, HAP, TRACE 700 | Trinkets Institute',
    description: 'Join our comprehensive HVAC System Design course. Learn AutoCAD MEP, Revit MEP, HAP, TRACE 700 with 100% placement assistance in MEP and building design industry.',
    url: 'https://trinketsinstitute.com/courses/hvac-system-design',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/hvac-design-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC System Design Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC System Design Course - Master Industry Software | Trinkets Institute',
    description: 'Learn professional HVAC design with AutoCAD MEP, Revit MEP, HAP, TRACE 700. 100% placement assistance in MEP and building design industry.',
    images: ['/images/hvac-design-course-twitter.jpg'],
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

export default function HVACSystemDesignCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HVAC System Design Course",
    "description": "Comprehensive training in HVAC system design using industry-standard software including AutoCAD MEP, Revit MEP, HAP, and TRACE 700",
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
      "HVAC System Design",
      "AutoCAD MEP",
      "Revit MEP",
      "HAP Software",
      "TRACE 700",
      "Load Calculations",
      "Duct Design",
      "Building Services Engineering"
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
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb 
          items={[
            { label: 'Courses', href: '/courses' },
            { label: 'HVAC System Design' }
          ]} 
        />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HVAC System Design Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Master Professional HVAC Design with AutoCAD MEP, Revit MEP, HAP & TRACE 700
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
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Syllabus
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
                Our comprehensive HVAC System Design course is designed to transform you into a skilled HVAC design engineer. 
                This program covers everything from fundamental thermodynamics to advanced building automation systems, 
                providing hands-on training with industry-standard software used by leading MEP consultancies worldwide.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-blue-600">What You&apos;ll Learn</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Complete HVAC system design from concept to commissioning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Load calculation methods and psychrometric analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Duct design, sizing, and layout optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Chiller plant design and equipment selection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Energy efficiency and green building compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Building automation and control systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>HVAC codes, standards, and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Project management and cost estimation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800">Duration</h4>
                  <p className="text-green-600">6 Months</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">Mode</h4>
                  <p className="text-blue-600">Classroom/Online</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Certification</h4>
                  <p className="text-purple-600">Industry Recognized</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-orange-800">Projects</h4>
                  <p className="text-orange-600">Real Industry</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Commercial Buildings</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hospitals</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Data Centers</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Residential</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Retail</span>
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
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD MEP</h3>
              <p className="text-blue-100 mb-4">Mechanical, Electrical & Plumbing</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• HVAC System Design</li>
                <li>• Duct Routing & Sizing</li>
                <li>• Equipment Placement</li>
                <li>• Load Calculations</li>
                <li>• Drawing Documentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Revit MEP</h3>
              <p className="text-green-100 mb-4">Building Information Modeling</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• 3D MEP Modeling</li>
                <li>• Parametric Design</li>
                <li>• Clash Detection</li>
                <li>• Quantity Takeoffs</li>
                <li>• Collaborative Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HAP</h3>
              <p className="text-purple-100 mb-4">Hourly Analysis Program</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Energy Modeling</li>
                <li>• Load Calculations</li>
                <li>• System Simulation</li>
                <li>• Energy Analysis</li>
                <li>• Performance Reports</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">TRACE 700</h3>
              <p className="text-orange-100 mb-4">Building Energy Analysis</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Building Modeling</li>
                <li>• System Analysis</li>
                <li>• Energy Optimization</li>
                <li>• Cost Analysis</li>
                <li>• LEED Compliance</li>
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
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 1-3: Foundation & Theory</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Fundamentals of HVAC</h4>
                  <p className="text-gray-600 text-sm">Thermodynamics, heat transfer, psychrometrics, comfort conditions</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Load Calculations</h4>
                  <p className="text-gray-600 text-sm">Cooling/heating loads, CLTD/CLF method, ASHRAE standards</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Air Distribution Systems</h4>
                  <p className="text-gray-600 text-sm">Duct design, fan selection, air balancing techniques</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-green-600">Module 4-6: Advanced Systems</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Central Plant Systems</h4>
                  <p className="text-gray-600 text-sm">Chiller design, cooling towers, pumping systems</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Controls & Automation</h4>
                  <p className="text-gray-600 text-sm">BMS, DDC systems, energy management strategies</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Energy Efficiency</h4>
                  <p className="text-gray-600 text-sm">Green building standards, LEED compliance, optimization</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">AutoCAD MEP (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic operations</li>
                    <li>• HVAC system creation and modification</li>
                    <li>• Duct routing and equipment placement</li>
                    <li>• Load calculations and reports</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Revit MEP (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• BIM modeling concepts</li>
                    <li>• MEP families and templates</li>
                    <li>• 3D system modeling</li>
                    <li>• Coordination and clash detection</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">HAP & TRACE 700 (Weeks 9-12)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Building energy modeling</li>
                    <li>• System performance analysis</li>
                    <li>• Energy optimization strategies</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete HVAC design for a commercial building including load calculations, 
                  system design, equipment selection, and energy analysis using all software tools.
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
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">HVAC Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-8 LPA</p>
              <p className="text-sm text-gray-500">Design HVAC systems for commercial and residential buildings</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">MEP Consultant</h3>
              <p className="text-gray-600 mb-3">₹6-12 LPA</p>
              <p className="text-sm text-gray-500">Provide consulting services for building mechanical systems</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Energy Analyst</h3>
              <p className="text-gray-600 mb-3">₹5-10 LPA</p>
              <p className="text-sm text-gray-500">Analyze building energy performance and optimization</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Project Manager</h3>
              <p className="text-gray-600 mb-3">₹8-15 LPA</p>
              <p className="text-sm text-gray-500">Manage HVAC installation and commissioning projects</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Building Commissioning Engineer</h3>
              <p className="text-gray-600 mb-3">₹6-11 LPA</p>
              <p className="text-sm text-gray-500">Ensure proper HVAC system installation and performance</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Green Building Consultant</h3>
              <p className="text-gray-600 mb-3">₹7-13 LPA</p>
              <p className="text-sm text-gray-500">Specialize in sustainable HVAC design and LEED certification</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">L&T Construction</div>
              <div className="bg-white p-3 rounded shadow">Johnson Controls</div>
              <div className="bg-white p-3 rounded shadow">Honeywell</div>
              <div className="bg-white p-3 rounded shadow">Carrier</div>
              <div className="bg-white p-3 rounded shadow">Trane</div>
              <div className="bg-white p-3 rounded shadow">Voltas</div>
              <div className="bg-white p-3 rounded shadow">Blue Star</div>
              <div className="bg-white p-3 rounded shadow">Godrej & Boyce</div>
              <div className="bg-white p-3 rounded shadow">Thermax</div>
              <div className="bg-white p-3 rounded shadow">Sterling & Wilson</div>
              <div className="bg-white p-3 rounded shadow">Shapoorji Pallonji</div>
              <div className="bg-white p-3 rounded shadow">CBRE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-green-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹8.5L</div>
              <div className="text-green-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Resume Building</h3>
              <p className="text-green-100 text-sm">Professional resume creation with industry-specific keywords</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Interview Preparation</h3>
              <p className="text-green-100 text-sm">Mock interviews and technical round preparation</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p className="text-green-100 text-sm">Direct referrals to leading MEP and construction companies</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful HVAC engineering graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized HVAC training solutions for engineering teams.</p>
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Related Engineering Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Piping Design & Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">Master PDMS, AutoCAD Plant 3D, Caesar II for piping design in oil & gas industry.</p>
              <Link href="/courses/piping-design-engineering" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-600 mb-3">Structural Design Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">Advanced structural analysis and design using STAAD Pro, ETABS, and SAFE software.</p>
              <Link href="/courses" className="text-green-600 hover:text-green-800 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Electrical Design Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">Electrical system design for industrial and commercial applications.</p>
              <Link href="/courses" className="text-purple-600 hover:text-purple-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your HVAC Design Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful HVAC engineers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>1st December 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 25 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>
    </div>
  )
}