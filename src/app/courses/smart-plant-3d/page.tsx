import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'Smart Plant 3D Course in Mumbai - Master SP3D 3D Plant Design & Engineering | Trinkets Institute',
  description: 'Join Mumbai\'s best Smart Plant 3D (SP3D) course at Trinkets Institute. Master 3D plant design, equipment modeling, piping layout with hands-on training. 100% placement assistance in oil & gas, petrochemical industries.',
  keywords: [
    'Smart Plant 3D course Mumbai',
    'SP3D training Mumbai',
    'Smart Plant 3D certification',
    'SP3D course in Mumbai',
    'Smart Plant 3D institute Mumbai',
    '3D plant design course',
    'AVEVA Smart Plant 3D training',
    'Smart Plant 3D piping course',
    'SP3D equipment modeling',
    'plant design engineering course',
    'Smart Plant 3D Mumbai training',
    'SP3D certification Mumbai',
    'Smart Plant 3D online course',
    '3D plant modeling training',
    'Smart Plant 3D pipeline design',
    'SP3D structural modeling',
    'Smart Plant 3D clash detection',
    'plant layout design course',
    'SP3D isometric drawing',
    'Smart Plant 3D instrumentation',
    'process plant design course',
    'SP3D materials management',
    'Smart Plant 3D orthographic views',
    'petroleum engineering course Mumbai',
    'chemical plant design training',
    'Smart Plant 3D walkthrough',
    'SP3D equipment placement',
    'Smart Plant 3D foundation course',
    'advanced SP3D training',
    'Smart Plant 3D job oriented course',
    'SP3D placement assistance Mumbai',
    'Smart Plant 3D career training',
    'Mumbai plant design institute'
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
    canonical: '/courses/smart-plant-3d',
  },
  openGraph: {
    title: 'Smart Plant 3D Course in Mumbai - Master SP3D Plant Design | Trinkets Institute',
    description: 'Join Mumbai\'s premier Smart Plant 3D (SP3D) course. Master 3D plant design, equipment modeling, piping layout. 100% placement assistance in oil & gas industries.',
    url: 'https://trinketsinstitute.com/courses/smart-plant-3d',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/smart-plant-3d-course-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Plant 3D Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Plant 3D Course in Mumbai - Master SP3D Plant Design | Trinkets Institute',
    description: 'Master Smart Plant 3D (SP3D) with hands-on training in 3D plant design, equipment modeling. 100% placement assistance in Mumbai.',
    images: ['/images/smart-plant-3d-course-mumbai-twitter.jpg'],
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

export default function SmartPlant3DCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Smart Plant 3D Course in Mumbai",
    "description": "Comprehensive Smart Plant 3D (SP3D) training for 3D plant design, equipment modeling, and piping layout in oil & gas industries",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
        "addressLocality": "Mulund West",
        "addressRegion": "Mumbai",
        "postalCode": "400080",
        "addressCountry": "IN"
      },
      "url": "https://trinketsinstitute.com",
      "telephone": "+91-9876543210"
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": ["classroom", "online", "hybrid"],
    "educationalLevel": "Professional",
    "teaches": [
      "Smart Plant 3D Fundamentals",
      "3D Plant Design",
      "Equipment Modeling",
      "Piping Layout Design",
      "Clash Detection",
      "Isometric Generation",
      "Materials Management",
      "Project Setup and Administration"
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
              Smart Plant 3D Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Master AVEVA SP3D for 3D Plant Design & Equipment Modeling
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Smart Plant 3D Course Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master the industry-leading Smart Plant 3D (SP3D) software with our comprehensive course in Mumbai. 
                AVEVA Smart Plant 3D is the world&apos;s most advanced 3D plant design solution used extensively in 
                oil & gas, petrochemical, power, and process industries for creating intelligent 3D models.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-green-600">Why Choose Smart Plant 3D Training in Mumbai?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Industry-standard 3D plant design software used globally</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>High demand for SP3D professionals in Mumbai&apos;s oil & gas sector</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Comprehensive equipment modeling and piping design capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced clash detection and interference management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Automatic isometric generation and materials extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Integration with other AVEVA solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Real-time collaboration and project management features</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <span>Hands-on training with live industry projects</span>
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
                  <h4 className="font-semibold text-blue-800">Projects</h4>
                  <p className="text-blue-600">10+ Real Plants</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Certification</h4>
                  <p className="text-purple-600">Industry Recognized</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Applications in Mumbai</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Oil & Gas</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Petrochemical</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Process Plants</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Power Plants</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Chemical Plants</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Refineries</span>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Mumbai Advantage</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Located in India&apos;s commercial capital</li>
                  <li>• Proximity to major oil & gas companies</li>
                  <li>• Strong petrochemical industry presence</li>
                  <li>• Access to multinational engineering firms</li>
                  <li>• Excellent placement opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Plant 3D Modules */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Smart Plant 3D Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SP3D Fundamentals</h3>
              <p className="text-green-100 mb-4">Foundation & Interface</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Interface Navigation</li>
                <li>• Project Setup</li>
                <li>• Database Configuration</li>
                <li>• User Administration</li>
                <li>• Workspace Customization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Equipment Modeling</h3>
              <p className="text-teal-100 mb-4">3D Equipment Design</p>
              <ul className="space-y-2 text-teal-100 text-sm">
                <li>• Equipment Placement</li>
                <li>• Vessel Modeling</li>
                <li>• Heat Exchanger Design</li>
                <li>• Pump & Compressor Modeling</li>
                <li>• Equipment Orientation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Piping Design</h3>
              <p className="text-blue-100 mb-4">Advanced Piping Layout</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Piping Routing</li>
                <li>• Fittings & Valves</li>
                <li>• Support Modeling</li>
                <li>• Insulation Design</li>
                <li>• Underground Piping</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Advanced Features</h3>
              <p className="text-purple-100 mb-4">Professional Tools</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Clash Detection</li>
                <li>• Isometric Generation</li>
                <li>• Materials Management</li>
                <li>• Report Generation</li>
                <li>• 3D Walkthrough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Comprehensive Smart Plant 3D Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Module 1-2: SP3D Foundation (Weeks 1-4)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Smart Plant 3D Introduction</h4>
                  <p className="text-gray-600 text-sm">Interface, navigation, project hierarchy, database concepts</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Project Setup & Administration</h4>
                  <p className="text-gray-600 text-sm">Database creation, user management, workspace configuration</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Coordinate Systems & Reference</h4>
                  <p className="text-gray-600 text-sm">Site setup, coordinate systems, reference data management</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-teal-600">Module 3-4: Equipment & Structural (Weeks 5-8)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Equipment Modeling</h4>
                  <p className="text-gray-600 text-sm">Vessels, heat exchangers, tanks, pumps, compressors</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Structural Framework</h4>
                  <p className="text-gray-600 text-sm">Steel structures, platforms, ladders, handrails</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Equipment Arrangement</h4>
                  <p className="text-gray-600 text-sm">Plot plan development, equipment spacing, accessibility</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 5-6: Piping Design (Weeks 9-12)</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Piping System Design</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Piping routing and layout principles</li>
                    <li>• Pipe sizing and specification</li>
                    <li>• Fittings, valves, and specialty items</li>
                    <li>• Branch connections and reducers</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Advanced Piping (Weeks 13-14)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Underground and buried piping</li>
                    <li>• Pipe supports and restraints</li>
                    <li>• Insulation and heat tracing</li>
                    <li>• Piping flexibility analysis</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Quality & Deliverables (Weeks 15-16)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Clash detection and resolution</li>
                    <li>• Isometric drawing generation</li>
                    <li>• Materials take-off and reports</li>
                    <li>• 3D model reviews and walkthroughs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Industry Project & Certification</h4>
                <p className="text-gray-600 text-sm">
                  Complete end-to-end process plant design project covering equipment modeling, 
                  piping layout, clash resolution, and deliverable generation using real industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Opportunities in Mumbai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-3">SP3D Design Engineer</h3>
              <p className="text-sm text-gray-500">Create 3D plant models and equipment layouts</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Piping Design Engineer</h3>
              <p className="text-sm text-gray-500">Design complex piping systems and routing</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies in Mumbai</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">L&T</div>
              <div className="bg-white p-3 rounded shadow">Reliance</div>
              <div className="bg-white p-3 rounded shadow">ONGC</div>
              <div className="bg-white p-3 rounded shadow">Shell</div>
              <div className="bg-white p-3 rounded shadow">Chevron</div>
              <div className="bg-white p-3 rounded shadow">Worley</div>
              <div className="bg-white p-3 rounded shadow">Technip</div>
              <div className="bg-white p-3 rounded shadow">KBR</div>
              <div className="bg-white p-3 rounded shadow">Fluor</div>
              <div className="bg-white p-3 rounded shadow">Jacobs</div>
              <div className="bg-white p-3 rounded shadow">McDermott</div>
              <div className="bg-white p-3 rounded shadow">Petrofac</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Success Stories from Mumbai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  RK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Rahul Krishnan</h4>
                  <p className="text-green-600 text-sm">SP3D Design Engineer - L&T Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;The Smart Plant 3D course at Trinkets was exceptional. The hands-on training with real projects prepared me perfectly for my role at L&T. The instructors are industry experts who provide practical insights.&rdquo;
              </p>
              <div className="text-green-600 font-semibold text-sm">Placement: L&T Heavy Engineering</div>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  PS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                  <p className="text-teal-600 text-sm">Piping Design Engineer - Reliance</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;Excellent SP3D training institute in Mumbai! The course covered everything from basics to advanced features. Got placed at Reliance Industries with confident knowledge of 3D plant design.&rdquo;
              </p>
              <div className="text-teal-600 font-semibold text-sm">Placement: Reliance Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai-Specific Advantages */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Why Learn Smart Plant 3D in Mumbai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Hub</h3>
              <p className="text-green-100 text-sm">Mumbai hosts major oil & gas, petrochemical companies offering abundant SP3D opportunities</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-green-100 text-sm">Learn from certified SP3D professionals with 15+ years industry experience</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Live Projects</h3>
              <p className="text-green-100 text-sm">Work on real plant design projects from Mumbai-based engineering companies</p>
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
              <p className="text-gray-600 mb-4">Explore our complete range of advanced engineering courses.</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful SP3D graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized Smart Plant 3D training for your engineering teams.</p>
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
            currentCourse="/courses/smart-plant-3d"
          />
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Smart Plant 3D in Mumbai?</h2>
          <p className="text-xl mb-6">Join Mumbai&apos;s premier Smart Plant 3D course and advance your career in 3D plant design.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>25th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 15 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Secure Your Spot
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Schedule Free Demo
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-4">
            🎯 Special Offer: Get Free SP3D Software License for Practice - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
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