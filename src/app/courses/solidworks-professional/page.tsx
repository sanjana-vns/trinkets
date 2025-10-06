import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'SolidWorks Professional Course - Master 3D CAD Design, Simulation, PDM | Trinkets Institute',
  description: 'Advanced SolidWorks Professional course with 3D modeling, simulation, sheet metal, surfacing, PDM. 100% placement assistance in product design, automotive, aerospace industries. CSWA/CSWP certification prep.',
  keywords: [
    'SolidWorks professional course',
    'SolidWorks training',
    'SolidWorks certification',
    'CSWA certification',
    'CSWP certification',
    '3D CAD modeling course',
    'SolidWorks simulation',
    'product design course',
    'mechanical design training',
    'SolidWorks PDM',
    'parametric modeling',
    'assembly design',
    'sheet metal design',
    'surface modeling',
    'finite element analysis',
    'CAD design training',
    'SolidWorks professional certification',
    'mechanical engineering design',
    'automotive design course',
    'aerospace design training',
    '3D modeling course',
    'SolidWorks advanced training',
    'design for manufacturing',
    'product development course',
    'CAD engineer training',
    'SolidWorks expert',
    'mechanical CAD course',
    'industrial design training',
    'SolidWorks flow simulation',
    'motion analysis',
    'stress analysis course',
    'design optimization',
    'SolidWorks professional institute'
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
    canonical: '/courses/solidworks-professional',
  },
  openGraph: {
    title: 'SolidWorks Professional Course - Master 3D CAD Design, Simulation, PDM | Trinkets Institute',
    description: 'Join our advanced SolidWorks Professional course. Master 3D modeling, simulation, PDM with CSWA/CSWP certification prep. 100% placement assistance in product design industry.',
    url: 'https://trinketsinstitute.com/courses/solidworks-professional',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/solidworks-professional-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SolidWorks Professional Course - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolidWorks Professional Course - Master Advanced 3D Design | Trinkets Institute',
    description: 'Master SolidWorks Professional with 3D modeling, simulation, PDM. CSWA/CSWP certification prep with 100% placement assistance.',
    images: ['/images/solidworks-professional-course-twitter.jpg'],
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

export default function SolidWorksProCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "SolidWorks Professional Course",
    "description": "Advanced training in professional 3D CAD design using SolidWorks with simulation, PDM, and certification preparation",
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
      "availability": "https://schema.org/InStock"
    },
    "courseMode": ["classroom", "online"],
    "educationalLevel": "Professional",
    "teaches": [
      "SolidWorks 3D Modeling",
      "Advanced Assembly Design",
      "Simulation and Analysis",
      "Sheet Metal Design",
      "Surface Modeling",
      "PDM Implementation",
      "CSWA/CSWP Certification",
      "Product Development"
    ],
    "timeRequired": "P5M",
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
      <section className="bg-gradient-to-r from-slate-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SolidWorks Professional Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Master Advanced 3D CAD Design, Simulation & Product Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Duration: </span>5 Months
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Mode: </span>Classroom/Online
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-semibold">Certification: </span>CSWA/CSWP Prep
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors">
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
                Our comprehensive SolidWorks Professional course is designed to master advanced 3D CAD design and product development. 
                This program covers everything from fundamental parametric modeling to advanced simulation and PDM implementation, 
                preparing you for industry certifications and career advancement in product design and engineering.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-600">What You&apos;ll Master</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced 3D parametric modeling and feature-based design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Complex assembly design with mates and constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Sheet metal design and weldment structures</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced surface modeling and organic shapes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Simulation and finite element analysis (FEA)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Motion analysis and mechanism design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>PDM (Product Data Management) implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>CSWA and CSWP certification preparation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Course Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-emerald-800">Duration</h4>
                  <p className="text-emerald-600">5 Months</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-slate-800">Mode</h4>
                  <p className="text-slate-600">Classroom/Online</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">Certification</h4>
                  <p className="text-blue-600">CSWA/CSWP Prep</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800">Projects</h4>
                  <p className="text-green-600">15+ Real Products</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">Product Design</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Automotive</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Aerospace</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Consumer Goods</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Medical Devices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Training Modules */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Advanced Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-500 to-slate-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Core SolidWorks</h3>
              <p className="text-slate-100 mb-4">Advanced 3D Modeling & Assembly</p>
              <ul className="space-y-2 text-slate-100 text-sm">
                <li>• Advanced Part Modeling</li>
                <li>• Complex Assemblies</li>
                <li>• Configurations & Design Tables</li>
                <li>• Advanced Mates</li>
                <li>• Drawing Documentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Simulation & Analysis</h3>
              <p className="text-emerald-100 mb-4">FEA & Motion Analysis</p>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li>• Static Stress Analysis</li>
                <li>• Thermal Analysis</li>
                <li>• Frequency Analysis</li>
                <li>• Motion Simulation</li>
                <li>• Flow Simulation Basics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Specialized Design</h3>
              <p className="text-blue-100 mb-4">Sheet Metal & Surfacing</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Sheet Metal Design</li>
                <li>• Surface Modeling</li>
                <li>• Weldments</li>
                <li>• Plastic Features</li>
                <li>• Mold Design Basics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">PDM & Collaboration</h3>
              <p className="text-green-100 mb-4">Data Management & Workflow</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• PDM Setup & Admin</li>
                <li>• Workflow Management</li>
                <li>• Version Control</li>
                <li>• Team Collaboration</li>
                <li>• File Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Preparation */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certification Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">CSWA Certification</h3>
              <p className="text-gray-600 mb-4">Certified SolidWorks Associate - Entry level certification</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                  <span>Basic part modeling and modifications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                  <span>Assembly modeling and mate creation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                  <span>Drawing creation and annotation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                  <span>Practice tests and exam strategies</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">CSWP Certification</h3>
              <p className="text-gray-600 mb-4">Certified SolidWorks Professional - Advanced certification</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced part modeling techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Complex assembly modifications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Advanced drawing views and dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span>Mock exams and performance analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-600">Module 1-2: Foundation & Advanced Modeling</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-semibold text-gray-800">SolidWorks Fundamentals</h4>
                  <p className="text-gray-600 text-sm">Interface, sketching, basic features, design intent</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Advanced Part Modeling</h4>
                  <p className="text-gray-600 text-sm">Complex features, patterns, configurations, design tables</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Assembly Design</h4>
                  <p className="text-gray-600 text-sm">Advanced mates, sub-assemblies, large assembly management</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-emerald-600">Module 3-4: Specialized Applications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Sheet Metal & Weldments</h4>
                  <p className="text-gray-600 text-sm">Flanges, bends, forming tools, weldment profiles</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Surface Modeling</h4>
                  <p className="text-gray-600 text-sm">Complex surfaces, boundary surfaces, organic shapes</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Drawing & Documentation</h4>
                  <p className="text-gray-600 text-sm">Advanced views, annotations, GD&T, standards</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Module 5: Simulation & Analysis</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">SolidWorks Simulation (Weeks 17-20)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Static stress analysis and safety factors</li>
                    <li>• Thermal analysis and heat transfer</li>
                    <li>• Frequency and buckling analysis</li>
                    <li>• Non-linear and contact analysis</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Motion Analysis (Weeks 21-22)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Mechanism design and constraints</li>
                    <li>• Motion studies and animations</li>
                    <li>• Force and acceleration analysis</li>
                    <li>• Optimization studies</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">PDM & Collaboration (Weeks 23-24)</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• PDM installation and setup</li>
                    <li>• Workflow design and approval process</li>
                    <li>• Version control and file management</li>
                    <li>• Team collaboration tools</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Capstone Project & Certification</h4>
                <p className="text-gray-600 text-sm">
                  Complete product development project from concept to manufacturing with simulation validation, 
                  followed by intensive CSWA/CSWP exam preparation and practice tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Prospects & Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Senior Design Engineer</h3>
              <p className="text-sm text-gray-500">Lead product development and design optimization projects</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">Product Development Engineer</h3>
              <p className="text-sm text-gray-500">Develop innovative products from concept to market</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">CAD/CAE Specialist</h3>
              <p className="text-sm text-gray-500">Specialize in advanced modeling and simulation analysis</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Mechanical Design Consultant</h3>
              <p className="text-sm text-gray-500">Provide expert design solutions and technical consulting</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">R&D Engineer</h3>
              <p className="text-sm text-gray-500">Research and develop cutting-edge products and technologies</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Design Manager</h3>
              <p className="text-sm text-gray-500">Lead design teams and manage product development cycles</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Top Hiring Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow">Tesla</div>
              <div className="bg-white p-3 rounded shadow">Apple</div>
              <div className="bg-white p-3 rounded shadow">Boeing</div>
              <div className="bg-white p-3 rounded shadow">General Electric</div>
              <div className="bg-white p-3 rounded shadow">Ford Motor</div>
              <div className="bg-white p-3 rounded shadow">Siemens</div>
              <div className="bg-white p-3 rounded shadow">Honeywell</div>
              <div className="bg-white p-3 rounded shadow">Caterpillar</div>
              <div className="bg-white p-3 rounded shadow">John Deere</div>
              <div className="bg-white p-3 rounded shadow">3M Company</div>
              <div className="bg-white p-3 rounded shadow">Johnson & Johnson</div>
              <div className="bg-white p-3 rounded shadow">Philips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-slate-500 to-emerald-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">100% Placement Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="text-slate-100">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-slate-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-slate-100">Placement Rate</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Professional Portfolio</h3>
              <p className="text-slate-100 text-sm">Build impressive design portfolio with real product development projects</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Industry Certification</h3>
              <p className="text-slate-100 text-sm">CSWA/CSWP certified professionals with proven expertise</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Premium Partnerships</h3>
              <p className="text-slate-100 text-sm">Exclusive tie-ups with Fortune 500 and leading product companies</p>
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
              <p className="text-gray-600 mb-4">Read testimonials from our successful SolidWorks graduates.</p>
              <Link href="/testimonials" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Read Stories
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized SolidWorks training for your design teams.</p>
              <Link href="/corporate-training" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/courses" className="inline-block bg-gradient-to-r from-slate-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              🎯 Discover All Our Engineering Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/solidworks-professional"
          />
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-slate-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a SolidWorks Professional?</h2>
          <p className="text-xl mb-6">Join the elite group of certified SolidWorks professionals leading product innovation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Batch Starts: </span>20th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 25 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Secure Your Spot
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors">
              Schedule Free Demo
            </Link>
          </div>
          <p className="text-slate-100 text-sm mt-4">
            🎯 Special Offer: Get CSWA Exam Voucher FREE with Course Enrollment - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              View All Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}