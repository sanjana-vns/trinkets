import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
  description: 'Best E3D Piping course in Mumbai with 100% placement assistance. Master AVEVA E3D Design, 3D piping layout, clash detection with live projects. Join Mumbai\'s top E3D training institute.',
  keywords: [
    'E3D Piping Course in Mumbai',
    'AVEVA E3D training Mumbai',
    'E3D Design course Mumbai',
    'E3D Piping training institute Mumbai',
    'AVEVA E3D certification Mumbai',
    'E3D 3D piping design course',
    'E3D piping layout training',
    'E3D clash detection course',
    'E3D plant design Mumbai',
    'E3D equipment modeling course',
    'AVEVA E3D professional training',
    'E3D piping engineering Mumbai',
    'E3D design software training',
    'E3D plant modeling course',
    'E3D piping designer course Mumbai',
    'AVEVA E3D placement Mumbai',
    'E3D training center Mumbai',
    'E3D course fees Mumbai',
    'E3D piping jobs Mumbai',
    'E3D design engineer training',
    'AVEVA E3D institute Mumbai',
    'E3D plant engineering course',
    'E3D modeling training Mumbai',
    'E3D piping design certification',
    'AVEVA E3D career Mumbai',
    'E3D design course with placement',
    'E3D training with job guarantee',
    'Mumbai E3D piping academy',
    'E3D design professional course',
    'AVEVA E3D specialist training',
    'E3D piping layout certification',
    'E3D plant design training Mumbai',
    'E3D engineering course Mumbai'
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
    canonical: '/courses/e3d-piping',
  },
  openGraph: {
    title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
    description: 'Join Mumbai\'s leading E3D Piping course. Master AVEVA E3D Design with 3D piping layout, clash detection & plant modeling. 100% placement assistance.',
    url: 'https://trinketsinstitute.com/courses/e3d-piping',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/e3d-piping-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'E3D Piping Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E3D Piping Course in Mumbai - Master AVEVA E3D Design | Trinkets Institute',
    description: 'Master E3D Piping design in Mumbai with AVEVA E3D training. 3D piping layout, clash detection & 100% placement assistance.',
    images: ['/images/e3d-piping-course-mumbai-twitter.jpg'],
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

export default function E3DPipingCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "E3D Piping Course in Mumbai",
    "description": "Comprehensive AVEVA E3D Piping training course in Mumbai covering 3D piping design, plant modeling, clash detection and equipment layout",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Engineering Hub, Andheri East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400069",
        "addressCountry": "IN"
      },
      "url": "https://trinketsinstitute.com",
      "telephone": "+91-9876543210"
    },
    "offers": {
      "@type": "Offer",
      "category": "E3D Piping Training",
      "availability": "https://schema.org/InStock",
      "availableAtOrFrom": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    },
    "courseMode": ["classroom", "online"],
    "educationalLevel": "Professional",
    "teaches": [
      "AVEVA E3D Design Fundamentals",
      "3D Piping Layout Design",
      "Plant Equipment Modeling",
      "Clash Detection & Resolution",
      "Piping Isometric Generation",
      "E3D Database Management",
      "Plant Design Standards",
      "E3D Administration"
    ],
    "timeRequired": "P4M",
    "inLanguage": "en-IN",
    "isAccessibleForFree": false,
    "educationalUse": "Professional Development",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "locationCreated": {
      "@type": "Place",
      "name": "Mumbai",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E3D Piping Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Master AVEVA E3D Design with Expert Training & 100% Placement Assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Duration: </span>4 Months
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Mode: </span>Classroom/Online
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Location: </span>Mumbai
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
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
                Our comprehensive E3D Piping course in Mumbai is designed to make you a master of AVEVA E3D Design software. 
                This professional training program covers everything from basic 3D piping layout to advanced plant modeling, 
                clash detection, and equipment design. Perfect for aspiring piping engineers and design professionals in Mumbai.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-green-600">What You&apos;ll Master</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>AVEVA E3D Design software fundamentals and advanced features</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>3D piping layout design and routing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Plant equipment modeling and placement strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Clash detection, interference checking, and resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Piping isometric generation and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>E3D database management and administration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Industry standards and best practices for plant design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Live project work on real industrial plant designs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800">Duration</h4>
                  <p className="text-green-600">4 Months</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-teal-800">Mode</h4>
                  <p className="text-teal-600">Classroom/Online</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">Location</h4>
                  <p className="text-blue-600">Mumbai Center</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Projects</h4>
                  <p className="text-purple-600">12+ Live Plants</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Mumbai Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Oil & Gas</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Petrochemicals</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Power Plants</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Chemical Plants</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Refineries</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Pharmaceuticals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E3D Training Modules */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">E3D Piping Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">E3D Fundamentals</h3>
              <p className="text-green-100 mb-4">AVEVA E3D Basics & Interface</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• E3D Interface Navigation</li>
                <li>• Project Setup & Database</li>
                <li>• Basic Drawing Tools</li>
                <li>• View Management</li>
                <li>• File Organization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">3D Piping Design</h3>
              <p className="text-teal-100 mb-4">Advanced Piping Layout</p>
              <ul className="space-y-2 text-teal-100 text-sm">
                <li>• Pipe Routing Techniques</li>
                <li>• Fitting & Valve Placement</li>
                <li>• Branch Connections</li>
                <li>• Support Modeling</li>
                <li>• Piping Specifications</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Equipment Modeling</h3>
              <p className="text-blue-100 mb-4">Plant Equipment Design</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Equipment Placement</li>
                <li>• Nozzle Management</li>
                <li>• Vessel & Tank Modeling</li>
                <li>• Pump & Compressor Setup</li>
                <li>• Heat Exchanger Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Advanced Features</h3>
              <p className="text-purple-100 mb-4">Clash Detection & Output</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Clash Detection Tools</li>
                <li>• Interference Resolution</li>
                <li>• Isometric Generation</li>
                <li>• Bill of Materials</li>
                <li>• Drawing Production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai-Specific Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose E3D Piping Course in Mumbai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Mumbai Industrial Hub</h3>
              <p className="text-gray-600 mb-4">Mumbai is India&apos;s industrial capital with numerous opportunities in E3D piping</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Direct access to Mumbai&apos;s major petrochemical companies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Networking with Mumbai&apos;s leading engineering firms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Live projects from Mumbai-based industrial plants</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Industry expert trainers from Mumbai&apos;s top companies</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">100% Placement Support</h3>
              <p className="text-gray-600 mb-4">Guaranteed job placement assistance with Mumbai&apos;s leading companies</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Direct placement in Mumbai&apos;s engineering companies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Resume building and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Portfolio development with Mumbai industry projects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Life-long career support and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed E3D Piping Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Module 1-2: E3D Foundation & Basics</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">AVEVA E3D Introduction</h4>
                  <p className="text-gray-600 text-sm">Software overview, interface, project setup</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">E3D Database Fundamentals</h4>
                  <p className="text-gray-600 text-sm">Database structure, catalogues, specifications</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Basic Navigation & Tools</h4>
                  <p className="text-gray-600 text-sm">View management, selection methods, display options</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-teal-600">Module 3-4: Piping Design & Layout</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">3D Piping Creation</h4>
                  <p className="text-gray-600 text-sm">Pipe routing, branch creation, fitting placement</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Equipment Integration</h4>
                  <p className="text-gray-600 text-sm">Equipment modeling, nozzle connections, vessel design</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Piping Support Systems</h4>
                  <p className="text-gray-600 text-sm">Support modeling, restraint design, hanger systems</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 5: Advanced E3D Features</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Clash Detection (Weeks 13-14)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interference checking and analysis</li>
                    <li>• Clash resolution strategies</li>
                    <li>• Report generation and documentation</li>
                    <li>• Design optimization techniques</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Isometric Generation (Weeks 15-16)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Automatic isometric creation</li>
                    <li>• Drawing customization and annotation</li>
                    <li>• Bill of materials generation</li>
                    <li>• Drawing standards and templates</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Live Mumbai Projects (Weeks 17-20)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Real petrochemical plant design</li>
                    <li>• Mumbai refinery piping projects</li>
                    <li>• Power plant layout and design</li>
                    <li>• Chemical processing unit modeling</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Certification & Portfolio</h4>
                <p className="text-gray-600 text-sm">
                  Complete E3D certification with portfolio showcasing Mumbai industry projects, 
                  interview preparation, and job placement assistance with leading engineering companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects in Mumbai */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">E3D Piping Career Opportunities in Mumbai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">E3D Piping Designer</h3>
              <p className="text-sm text-gray-500">Design 3D piping layouts for Mumbai&apos;s industrial plants</p>
              <p className="text-sm font-semibold text-green-600 mt-2">₹4-8 LPA</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Plant Design Engineer</h3>
              <p className="text-sm text-gray-500">Lead plant design projects using E3D software</p>
              <p className="text-sm font-semibold text-teal-600 mt-2">₹6-12 LPA</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">E3D Project Manager</h3>
              <p className="text-sm text-gray-500">Manage E3D design teams and projects</p>
              <p className="text-sm font-semibold text-blue-600 mt-2">₹8-15 LPA</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">E3D Consultant</h3>
              <p className="text-sm text-gray-500">Provide E3D expertise to Mumbai companies</p>
              <p className="text-sm font-semibold text-purple-600 mt-2">₹10-20 LPA</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Senior Piping Engineer</h3>
              <p className="text-sm text-gray-500">Lead piping engineering teams in Mumbai</p>
              <p className="text-sm font-semibold text-orange-600 mt-2">₹12-25 LPA</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">E3D Trainer</h3>
              <p className="text-sm text-gray-500">Train professionals in E3D software</p>
              <p className="text-sm font-semibold text-pink-600 mt-2">₹6-15 LPA</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Mumbai Companies Hiring E3D Professionals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">Reliance Industries</div>
              <div className="bg-white p-3 rounded shadow">L&T Hydrocarbon</div>
              <div className="bg-white p-3 rounded shadow">ONGC</div>
              <div className="bg-white p-3 rounded shadow">Indian Oil Corp</div>
              <div className="bg-white p-3 rounded shadow">Bharat Petroleum</div>
              <div className="bg-white p-3 rounded shadow">Hindustan Petroleum</div>
              <div className="bg-white p-3 rounded shadow">Technip Energies</div>
              <div className="bg-white p-3 rounded shadow">Wood Group</div>
              <div className="bg-white p-3 rounded shadow">KBR India</div>
              <div className="bg-white p-3 rounded shadow">Fluor Daniel</div>
              <div className="bg-white p-3 rounded shadow">McDermott</div>
              <div className="bg-white p-3 rounded shadow">Petrofac</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support in Mumbai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-green-100">E3D Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">Mumbai Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Mumbai Industry Network</h3>
              <p className="text-green-100 text-sm">Strong connections with Mumbai&apos;s top engineering and petrochemical companies</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Live Project Portfolio</h3>
              <p className="text-green-100 text-sm">Build impressive portfolio with real Mumbai industrial plant projects</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Career Mentorship</h3>
              <p className="text-green-100 text-sm">One-on-one career guidance from Mumbai industry experts</p>
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
              <p className="text-gray-600 mb-4">Explore our complete range of engineering design courses.</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful E3D graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized E3D training for your engineering teams.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/courses" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              🎯 Discover All Our Engineering Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/e3d-piping"
          />
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master E3D Piping in Mumbai?</h2>
          <p className="text-xl mb-6">Join Mumbai&apos;s leading E3D Piping course and kickstart your engineering career.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>15th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 20 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-4">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Secure Your Spot
            </Link>
            <Link href="/courses" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Compare All Courses
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Schedule Free Demo
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-4">
            💡 Want to explore more courses? <Link href="/courses" className="underline hover:text-white font-semibold">View All Engineering Courses</Link> or check our <Link href="/courses#courses-hero" className="underline hover:text-white">Course Categories</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses in Mumbai</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for Mumbai professionals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              View All Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}