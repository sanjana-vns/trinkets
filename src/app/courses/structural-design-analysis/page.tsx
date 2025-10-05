import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'Structural Design & Analysis Course - Master STAAD Pro, ETABS, SAFE, SAP2000 | Trinkets Institute',
  description: 'Comprehensive Structural Design & Analysis course with STAAD Pro, ETABS, SAFE, SAP2000 training. 100% placement assistance in construction, infrastructure, consulting industries. Industry-certified curriculum.',
  keywords: [
    'structural design course',
    'structural analysis training',
    'STAAD Pro training',
    'ETABS course',
    'SAFE software training',
    'SAP2000 course',
    'structural engineering course',
    'civil engineering design',
    'structural design certification',
    'building design course',
    'bridge design training',
    'seismic analysis course',
    'concrete design training',
    'steel structure design',
    'foundation design course',
    'structural modeling course',
    'earthquake engineering',
    'wind load analysis',
    'structural detailing course',
    'reinforcement design',
    'structural optimization',
    'construction engineering',
    'infrastructure design',
    'structural consultant training',
    'building codes training',
    'IS code design',
    'ACI code training',
    'structural engineering jobs',
    'civil engineer career',
    'structural design software',
    'structural engineering institute',
    'professional structural course',
    'industrial structure design',
    'high rise building design'
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
    canonical: '/courses/structural-design-analysis',
  },
  openGraph: {
    title: 'Structural Design & Analysis Course - Master STAAD Pro, ETABS, SAFE, SAP2000 | Trinkets Institute',
    description: 'Join our comprehensive Structural Design & Analysis course. Learn STAAD Pro, ETABS, SAFE, SAP2000 with 100% placement assistance in construction and infrastructure industry.',
    url: 'https://trinketsinstitute.com/courses/structural-design-analysis',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/structural-design-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Structural Design & Analysis Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Design & Analysis Course - Master Industry Software | Trinkets Institute',
    description: 'Learn professional structural design with STAAD Pro, ETABS, SAFE, SAP2000. 100% placement assistance in construction and infrastructure industry.',
    images: ['/images/structural-design-course-twitter.jpg'],
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

export default function StructuralDesignAnalysisCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Structural Design & Analysis Course",
    "description": "Comprehensive training in structural engineering using industry-standard software including STAAD Pro, ETABS, SAFE, and SAP2000",
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
      "Structural Engineering",
      "STAAD Pro Analysis",
      "ETABS Modeling",
      "SAFE Foundation Design",
      "SAP2000 Analysis",
      "Seismic Design",
      "Steel Structure Design",
      "Concrete Design"
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
      <div className="bg-white border-b">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Courses', href: '/courses' },
            { label: 'Structural Design & Analysis', href: '/courses/structural-design-analysis' }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structural Design & Analysis Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Master Building & Infrastructure Design with STAAD Pro, ETABS, SAFE & SAP2000
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
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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
                Our comprehensive Structural Design & Analysis course is designed to transform you into a skilled structural engineer. 
                This program covers everything from fundamental structural principles to advanced analysis techniques, 
                providing hands-on training with industry-standard software used by leading construction and consulting companies worldwide.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-purple-600">What You&apos;ll Learn</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Complete structural design from conceptual to detailed engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced structural analysis and modeling techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Seismic analysis and earthquake resistant design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Steel and concrete structure design principles</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Foundation design and soil-structure interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Wind load analysis and design optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Building codes and international design standards</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                  <span>Structural detailing and construction documentation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-indigo-800">Duration</h4>
                  <p className="text-indigo-600">6 Months</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Mode</h4>
                  <p className="text-purple-600">Classroom/Online</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">Certification</h4>
                  <p className="text-blue-600">Industry Recognized</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800">Projects</h4>
                  <p className="text-green-600">Real Industry</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">High-rise Buildings</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Bridges</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Industrial Structures</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Residential Buildings</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Infrastructure</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Stadiums</span>
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
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">STAAD Pro</h3>
              <p className="text-purple-100 mb-4">Structural Analysis & Design</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• 3D Structural Modeling</li>
                <li>• Load Application</li>
                <li>• Analysis & Design</li>
                <li>• Steel & Concrete Design</li>
                <li>• Report Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ETABS</h3>
              <p className="text-indigo-100 mb-4">Building Analysis & Design</p>
              <ul className="space-y-2 text-indigo-100 text-sm">
                <li>• Building Modeling</li>
                <li>• Seismic Analysis</li>
                <li>• Wind Load Analysis</li>
                <li>• Code-based Design</li>
                <li>• Performance Assessment</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SAFE</h3>
              <p className="text-blue-100 mb-4">Foundation & Slab Design</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Foundation Design</li>
                <li>• Slab Analysis</li>
                <li>• Soil-Structure Interaction</li>
                <li>• Punching Shear Check</li>
                <li>• Reinforcement Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SAP2000</h3>
              <p className="text-teal-100 mb-4">Advanced Structural Analysis</p>
              <ul className="space-y-2 text-teal-100 text-sm">
                <li>• Linear & Nonlinear Analysis</li>
                <li>• Dynamic Analysis</li>
                <li>• Bridge Design</li>
                <li>• Pushover Analysis</li>
                <li>• Time History Analysis</li>
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
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Module 1-3: Foundation & Theory</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Structural Fundamentals</h4>
                  <p className="text-gray-600 text-sm">Mechanics of structures, material properties, load analysis, design philosophy</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Design Codes & Standards</h4>
                  <p className="text-gray-600 text-sm">IS codes, ACI standards, Eurocode, design methodologies</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Steel Structure Design</h4>
                  <p className="text-gray-600 text-sm">Steel design principles, connections, tension members, compression members</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-indigo-600">Module 4-6: Advanced Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Concrete Structure Design</h4>
                  <p className="text-gray-600 text-sm">RCC design, prestressed concrete, detailing, durability</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Seismic & Wind Design</h4>
                  <p className="text-gray-600 text-sm">Earthquake engineering, wind load analysis, dynamic analysis</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Foundation Design</h4>
                  <p className="text-gray-600 text-sm">Shallow foundations, deep foundations, soil mechanics, pile design</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">STAAD Pro (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic modeling</li>
                    <li>• Load definition and application</li>
                    <li>• Analysis and design verification</li>
                    <li>• Steel and concrete member design</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">ETABS (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Building modeling concepts</li>
                    <li>• Seismic analysis and design</li>
                    <li>• Wind load analysis</li>
                    <li>• Performance-based design</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">SAFE & SAP2000 (Weeks 9-12)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Foundation design using SAFE</li>
                    <li>• Advanced analysis in SAP2000</li>
                    <li>• Bridge design and analysis</li>
                    <li>• Nonlinear and dynamic analysis</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete structural design of a multi-story building including analysis, 
                  design, detailing, and documentation using all software tools.
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
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Structural Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-9 LPA</p>
              <p className="text-sm text-gray-500">Design buildings, bridges, and infrastructure projects</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Structural Consultant</h3>
              <p className="text-gray-600 mb-3">₹6-15 LPA</p>
              <p className="text-sm text-gray-500">Provide specialized consulting for complex structural projects</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Project Manager</h3>
              <p className="text-gray-600 mb-3">₹8-18 LPA</p>
              <p className="text-sm text-gray-500">Manage construction and infrastructure development projects</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Bridge Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹7-14 LPA</p>
              <p className="text-sm text-gray-500">Specialize in bridge and highway infrastructure design</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Seismic Design Specialist</h3>
              <p className="text-gray-600 mb-3">₹8-16 LPA</p>
              <p className="text-sm text-gray-500">Focus on earthquake-resistant design and retrofitting</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Construction Manager</h3>
              <p className="text-gray-600 mb-3">₹6-12 LPA</p>
              <p className="text-sm text-gray-500">Oversee construction operations and quality control</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">L&T Construction</div>
              <div className="bg-white p-3 rounded shadow">Tata Projects</div>
              <div className="bg-white p-3 rounded shadow">Shapoorji Pallonji</div>
              <div className="bg-white p-3 rounded shadow">Hindustan Construction</div>
              <div className="bg-white p-3 rounded shadow">Gammon India</div>
              <div className="bg-white p-3 rounded shadow">NCC Limited</div>
              <div className="bg-white p-3 rounded shadow">AFCONS Infrastructure</div>
              <div className="bg-white p-3 rounded shadow">IRB Infrastructure</div>
              <div className="bg-white p-3 rounded shadow">Punj Lloyd</div>
              <div className="bg-white p-3 rounded shadow">DLF</div>
              <div className="bg-white p-3 rounded shadow">Godrej Properties</div>
              <div className="bg-white p-3 rounded shadow">Brigade Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">600+</div>
              <div className="text-purple-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">180+</div>
              <div className="text-purple-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹15L</div>
              <div className="text-purple-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-purple-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Technical Skills Training</h3>
              <p className="text-purple-100 text-sm">Comprehensive technical interview preparation and skill assessment</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Portfolio Development</h3>
              <p className="text-purple-100 text-sm">Real project portfolio to showcase your structural design expertise</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Network</h3>
              <p className="text-purple-100 text-sm">Direct connections with leading construction and consulting firms</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful structural engineering graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized structural engineering training for your organization.</p>
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
            currentCourse="/courses/structural-design-analysis"
          />
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Structural Engineering Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful structural engineers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>1st February 2026
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 25 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-purple-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <Link href="/courses" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  )
}