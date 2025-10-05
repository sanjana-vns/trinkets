import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'AutoCAD Mechanical Design Course - Master 2D/3D Design, Drafting, Inventor | Trinkets Institute',
  description: 'Comprehensive AutoCAD Mechanical Design course with 2D/3D modeling, AutoCAD Inventor, SolidWorks training. 100% placement assistance in manufacturing, automotive, design industries. Industry-certified curriculum.',
  keywords: [
    'AutoCAD mechanical design course',
    'AutoCAD training',
    'mechanical design course',
    'CAD design training',
    'AutoCAD Inventor course',
    'SolidWorks training',
    'mechanical drafting course',
    '2D design training',
    '3D modeling course',
    'CAD certification',
    'mechanical engineering design',
    'product design course',
    'engineering drawing course',
    'machine design training',
    'manufacturing design',
    'automotive design course',
    'CAD software training',
    'technical drawing course',
    'parametric modeling',
    'assembly design',
    'sheet metal design',
    'mechanical detailing',
    'design engineer training',
    'CAD drafter course',
    'mechanical design jobs',
    'CAD engineer career',
    'AutoCAD certification',
    'mechanical CAD training',
    'design automation',
    'engineering graphics',
    'professional CAD course',
    'industrial design training',
    'mechanical design institute'
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
    canonical: '/courses/autocad-mechanical-design',
  },
  openGraph: {
    title: 'AutoCAD Mechanical Design Course - Master 2D/3D Design, Drafting, Inventor | Trinkets Institute',
    description: 'Join our comprehensive AutoCAD Mechanical Design course. Learn 2D/3D modeling, AutoCAD Inventor, SolidWorks with 100% placement assistance in manufacturing and design industry.',
    url: 'https://trinketsinstitute.com/courses/autocad-mechanical-design',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/autocad-mechanical-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoCAD Mechanical Design Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoCAD Mechanical Design Course - Master Industry Software | Trinkets Institute',
    description: 'Learn professional mechanical design with AutoCAD, Inventor, SolidWorks. 100% placement assistance in manufacturing and design industry.',
    images: ['/images/autocad-mechanical-course-twitter.jpg'],
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

export default function AutoCADMechanicalDesignCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AutoCAD Mechanical Design Course",
    "description": "Comprehensive training in mechanical design using industry-standard software including AutoCAD, AutoCAD Inventor, and SolidWorks",
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
      "AutoCAD Mechanical Design",
      "2D Drafting",
      "3D Modeling",
      "AutoCAD Inventor",
      "SolidWorks Design",
      "Machine Design",
      "Product Design",
      "Manufacturing Design"
    ],
    "timeRequired": "P4M",
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
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AutoCAD Mechanical Design Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Master 2D/3D Mechanical Design with AutoCAD, Inventor & SolidWorks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Duration: </span>4 Months
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Mode: </span>Classroom/Online
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Placement: </span>100% Assistance
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
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
                Our comprehensive AutoCAD Mechanical Design course is designed to transform you into a skilled CAD design professional. 
                This program covers everything from fundamental drafting principles to advanced 3D modeling techniques, 
                providing hands-on training with industry-standard software used by leading manufacturing and design companies worldwide.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-teal-600">What You&apos;ll Learn</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Complete 2D drafting and technical drawing creation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced 3D modeling and parametric design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Assembly design and mechanical constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Sheet metal design and fabrication drawings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Machine design and mechanical components</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Product design and development workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>CAD standards and documentation practices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                  <span>Design automation and customization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-cyan-800">Duration</h4>
                  <p className="text-cyan-600">4 Months</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-teal-800">Mode</h4>
                  <p className="text-teal-600">Classroom/Online</p>
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
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Automotive</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Aerospace</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Product Design</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Machine Tools</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Engineering Services</span>
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
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD 2D</h3>
              <p className="text-teal-100 mb-4">Technical Drafting & Design</p>
              <ul className="space-y-2 text-teal-100 text-sm">
                <li>• 2D Drawing Commands</li>
                <li>• Layer Management</li>
                <li>• Dimensioning & Annotation</li>
                <li>• Block Creation</li>
                <li>• Plot & Print Setup</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD 3D</h3>
              <p className="text-cyan-100 mb-4">3D Modeling & Visualization</p>
              <ul className="space-y-2 text-cyan-100 text-sm">
                <li>• 3D Solid Modeling</li>
                <li>• Surface Modeling</li>
                <li>• 3D Operations</li>
                <li>• Rendering & Materials</li>
                <li>• Assembly Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD Inventor</h3>
              <p className="text-blue-100 mb-4">Parametric Design & Assembly</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Parametric Modeling</li>
                <li>• Assembly Constraints</li>
                <li>• Sheet Metal Design</li>
                <li>• Stress Analysis</li>
                <li>• Drawing Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SolidWorks</h3>
              <p className="text-green-100 mb-4">Advanced Product Design</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Feature-based Modeling</li>
                <li>• Assembly Design</li>
                <li>• Simulation & Analysis</li>
                <li>• Drawing Documentation</li>
                <li>• Design Automation</li>
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
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Module 1-2: Foundation & 2D Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">CAD Fundamentals</h4>
                  <p className="text-gray-600 text-sm">AutoCAD interface, coordinate systems, drawing setup, basic commands</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">2D Drafting Techniques</h4>
                  <p className="text-gray-600 text-sm">Technical drawing, orthographic projections, sectional views, detailing</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Mechanical Components</h4>
                  <p className="text-gray-600 text-sm">Machine elements, fasteners, bearings, gears, mechanical assemblies</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-cyan-600">Module 3-4: 3D Modeling & Advanced Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">3D Solid Modeling</h4>
                  <p className="text-gray-600 text-sm">Extrude, revolve, sweep, loft, boolean operations</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Parametric Design</h4>
                  <p className="text-gray-600 text-sm">Feature-based modeling, constraints, design intent, modifications</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Product Development</h4>
                  <p className="text-gray-600 text-sm">Design for manufacturing, assembly design, design optimization</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Software Training Modules</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">AutoCAD 2D (Weeks 1-4)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interface and basic drawing commands</li>
                    <li>• Object modification and editing</li>
                    <li>• Layers, blocks, and templates</li>
                    <li>• Dimensioning and annotation</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">AutoCAD 3D (Weeks 5-8)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 3D coordinate systems and UCS</li>
                    <li>• Solid modeling techniques</li>
                    <li>• 3D editing and modifications</li>
                    <li>• Rendering and visualization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Inventor & SolidWorks (Weeks 9-16)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Parametric modeling concepts</li>
                    <li>• Assembly design and constraints</li>
                    <li>• Sheet metal and surface design</li>
                    <li>• Drawing documentation and standards</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Capstone Project</h4>
                <p className="text-gray-600 text-sm">
                  Complete product design project including conceptual design, 3D modeling, 
                  assembly creation, and manufacturing drawings using all software tools.
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
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">CAD Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹3-7 LPA</p>
              <p className="text-sm text-gray-500">Create technical drawings and 3D models for manufacturing</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Mechanical Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-9 LPA</p>
              <p className="text-sm text-gray-500">Design mechanical components and systems for various industries</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Product Design Engineer</h3>
              <p className="text-gray-600 mb-3">₹5-12 LPA</p>
              <p className="text-sm text-gray-500">Develop innovative products from concept to manufacturing</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">CAD Drafter</h3>
              <p className="text-gray-600 mb-3">₹2.5-5 LPA</p>
              <p className="text-sm text-gray-500">Create detailed technical drawings and documentation</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Manufacturing Engineer</h3>
              <p className="text-gray-600 mb-3">₹4-8 LPA</p>
              <p className="text-sm text-gray-500">Optimize manufacturing processes and design for production</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Design Consultant</h3>
              <p className="text-gray-600 mb-3">₹6-15 LPA</p>
              <p className="text-sm text-gray-500">Provide specialized design services and technical solutions</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">Tata Motors</div>
              <div className="bg-white p-3 rounded shadow">Mahindra</div>
              <div className="bg-white p-3 rounded shadow">Bajaj Auto</div>
              <div className="bg-white p-3 rounded shadow">Hero MotoCorp</div>
              <div className="bg-white p-3 rounded shadow">Maruti Suzuki</div>
              <div className="bg-white p-3 rounded shadow">Hyundai</div>
              <div className="bg-white p-3 rounded shadow">L&T</div>
              <div className="bg-white p-3 rounded shadow">BHEL</div>
              <div className="bg-white p-3 rounded shadow">Godrej</div>
              <div className="bg-white p-3 rounded shadow">Thermax</div>
              <div className="bg-white p-3 rounded shadow">Cummins</div>
              <div className="bg-white p-3 rounded shadow">Bosch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-teal-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-teal-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹10L</div>
              <div className="text-teal-100">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">96%</div>
              <div className="text-teal-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Portfolio Development</h3>
              <p className="text-teal-100 text-sm">Build impressive design portfolio showcasing your CAD skills and projects</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p className="text-teal-100 text-sm">Direct partnerships with leading manufacturing and design companies</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Skill Certification</h3>
              <p className="text-teal-100 text-sm">Industry-recognized AutoCAD and CAD software certifications</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful CAD design graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized AutoCAD training for your design teams.</p>
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
            currentCourse="/courses/autocad-mechanical-design"
          />
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your CAD Design Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful CAD designers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>15th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 30 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-teal-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>
    </div>
  )
}