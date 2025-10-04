import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Piping Design & Engineering Course - Master PDMS, AutoCAD Plant 3D, Caesar II | Trinkets Institute',
  description: 'Comprehensive Piping Design & Engineering course with PDMS, AutoCAD Plant 3D, Caesar II, SP3D training. 100% placement assistance in oil & gas, petrochemical industries. Industry-certified curriculum.',
  keywords: [
    'piping design course',
    'piping engineering training',
    'PDMS training',
    'AutoCAD Plant 3D course',
    'Caesar II training',
    'SP3D course',
    'piping design certification',
    'oil and gas piping design',
    'petrochemical piping course',
    'plant design engineering',
    'piping stress analysis',
    'piping layout design',
    'industrial piping course',
    'mechanical engineering piping',
    'process piping design',
    'power plant piping',
    'piping design jobs',
    'piping engineer career',
    'piping design software training',
    'engineering design course',
    'CAD piping training',
    'piping drafting course',
    'pipe routing design',
    'piping isometric drawing',
    'P&ID development',
    'piping material selection',
    'piping codes and standards',
    'ASME B31.3 training',
    'piping design institute',
    'professional piping course'
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
    canonical: '/courses/piping-design-engineering',
  },
  openGraph: {
    title: 'Piping Design & Engineering Course - Master PDMS, AutoCAD Plant 3D, Caesar II | Trinkets Institute',
    description: 'Join our comprehensive Piping Design & Engineering course. Learn PDMS, AutoCAD Plant 3D, Caesar II with 100% placement assistance in oil & gas industry.',
    url: 'https://trinketsinstitute.com/courses/piping-design-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/piping-design-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Design & Engineering Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Design & Engineering Course - Master Industry Software | Trinkets Institute',
    description: 'Learn professional piping design with PDMS, AutoCAD Plant 3D, Caesar II. 100% placement assistance in oil & gas industry.',
    images: ['/images/piping-design-course-twitter.jpg'],
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

export default function PipingDesignCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Piping Design & Engineering Course",
    "description": "Comprehensive training in piping design using industry-standard software including PDMS, AutoCAD Plant 3D, and Caesar II",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "url": "https://trinketsinstitute.com"
    },
    "courseCode": "PDE-101",
    "educationalCredentialAwarded": "Piping Design Engineering Certificate",
    "timeRequired": "P6M",
    "coursePrerequisites": "Basic mechanical engineering knowledge",
    "occupationalCategory": "Piping Design Engineer",
    "educationalLevel": "Professional",
    "teaches": [
      "PDMS (Plant Design Management System)",
      "AutoCAD Plant 3D",
      "Caesar II Stress Analysis",
      "SP3D (Smart Plant 3D)",
      "Piping Codes & Standards",
      "P&ID Development",
      "Isometric Drawing",
      "Pipe Routing & Layout"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": ["Engineering Graduate", "Working Professional", "Career Changer"]
    },
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Classroom", "Online", "Hybrid"],
      "duration": "6 months",
      "instructor": {
        "@type": "Person",
        "name": "Industry Expert Instructors"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Piping Design & Engineering Course
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Master Industry-Standard Software & Launch Your Career in Oil & Gas Industry
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">6 Months Duration</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">100% Placement Assistance</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Industry Certified</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Live Projects</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Enroll Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Course Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Complete piping design workflow from P&ID to 3D modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Industry-standard software: PDMS, AutoCAD Plant 3D, Caesar II, SP3D</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Piping codes & standards (ASME B31.3, API, ANSI)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Stress analysis and pipe support design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Material selection and piping specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Isometric drawing generation and review</span>
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
              <h3 className="text-xl font-bold mb-4">PDMS</h3>
              <p className="text-blue-100 mb-4">Plant Design Management System</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• 3D Plant Modeling</li>
                <li>• Equipment Placement</li>
                <li>• Pipe Routing</li>
                <li>• Clash Detection</li>
                <li>• Drawing Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD Plant 3D</h3>
              <p className="text-green-100 mb-4">Comprehensive Plant Design</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• P&ID Creation</li>
                <li>• 3D Modeling</li>
                <li>• Spec-driven Design</li>
                <li>• Orthographic Views</li>
                <li>• Isometric Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Caesar II</h3>
              <p className="text-purple-100 mb-4">Pipe Stress Analysis</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Static Analysis</li>
                <li>• Dynamic Analysis</li>
                <li>• Stress Evaluation</li>
                <li>• Support Design</li>
                <li>• Code Compliance</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SP3D</h3>
              <p className="text-orange-100 mb-4">Smart Plant 3D</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Intelligent Modeling</li>
                <li>• Catalog Management</li>
                <li>• Equipment Design</li>
                <li>• Piping Design</li>
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
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 1-3: Foundation & Theory</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Piping Engineering Fundamentals</h4>
                  <p className="text-gray-600 text-sm">Process flow diagrams, P&ID symbols, piping components</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Codes & Standards</h4>
                  <p className="text-gray-600 text-sm">ASME B31.3, API standards, ANSI/ASME guidelines</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Material Engineering</h4>
                  <p className="text-gray-600 text-sm">Pipe materials, fittings, valves, specifications</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Module 4-6: Software Applications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">3D Modeling & Design</h4>
                  <p className="text-gray-600 text-sm">PDMS, SP3D, AutoCAD Plant 3D hands-on training</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Stress Analysis</h4>
                  <p className="text-gray-600 text-sm">Caesar II training, stress calculations, support design</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Project Implementation</h4>
                  <p className="text-gray-600 text-sm">Real industry projects, deliverables, quality checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Prospects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">₹</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Salary Range</h3>
              <p className="text-gray-600 mb-2">₹4-15 LPA</p>
              <p className="text-sm text-gray-500">Based on experience and skills</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl font-bold">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industries</h3>
              <p className="text-gray-600 mb-2">Oil & Gas, Petrochemical</p>
              <p className="text-sm text-gray-500">Power, Chemical, Pharmaceutical</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl font-bold">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600 mb-2">Senior Designer</p>
              <p className="text-sm text-gray-500">Lead Engineer, Manager</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Job Roles After Completion</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Piping Design Engineer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Plant Design Engineer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Stress Analysis Engineer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Project Engineer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">CAD Designer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Layout Engineer</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Design Coordinator</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">Technical Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">100% Placement Assistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold mb-2">Resume Building</h3>
              <p className="text-gray-600 text-sm">Professional resume and portfolio development</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Interview Prep</h3>
              <p className="text-gray-600 text-sm">Mock interviews and technical assessments</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold mb-2">Industry Connects</h3>
              <p className="text-gray-600 text-sm">Direct connections with hiring companies</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Career guidance even after placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Piping Design Career?</h2>
          <p className="text-xl mb-6">Join hundreds of successful piping engineers who started their journey with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>15th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 20 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call for Consultation
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - Contact Us Today!
          </p>
        </div>
      </section>
    </div>
  )
}
