import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'STAAD Pro Course in Mumbai | Structural Analysis & Design Training',
  description: 'Master STAAD Pro structural analysis and design software in Mumbai. Industry-focused training for building modeling, bridge design, and structural engineering with expert guidance.',
  keywords: 'STAAD Pro course Mumbai, structural analysis training, building design course, bridge design training, structural engineering Mumbai, STAAD Pro certification',
  openGraph: {
    title: 'STAAD Pro Course in Mumbai | Structural Analysis & Design Training',
    description: 'Master STAAD Pro structural analysis and design software in Mumbai. Industry-focused training for building modeling, bridge design, and structural engineering.',
    type: 'website',
    url: 'https://trinkets.com/courses/staad-pro',
  },
}

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "ETABS",
      description: "Advanced structural engineering software for multi-story buildings",
      duration: "3 Months",
      link: "/courses/etabs"
    },
    {
      title: "Structural Engineering",
      description: "Complete structural design and analysis program",
      duration: "6 Months", 
      link: "/courses/structural-design-analysis"
    },
    {
      title: "E3D Piping Course",
      description: "AVEVA E3D for 3D piping design and modeling",
      duration: "4 Months",
      link: "/courses/e3d-piping"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{course.duration}</span>
                <Link href={course.link} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function STAADProCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-blue-200 font-semibold text-sm">💻 Software Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              STAAD Pro Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master structural analysis and design with industry-standard STAAD Pro software
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Enroll Now
              </Link>
              <Link href="#curriculum" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Master STAAD Pro Software</h2>
              <p className="text-lg text-gray-600 mb-6">
                STAAD Pro is structural analysis and design software for modeling buildings, bridges and other structures. 
                It supports multiple materials and design codes, making it essential for structural engineers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-blue-600 font-medium">3 Months</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                  <p className="text-green-600 font-medium">⭐ 4.7/5</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                  <p className="text-purple-600 font-medium">450+ Enrolled</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mode</h3>
                  <p className="text-orange-600 font-medium">Online & Offline</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Structural modeling and analysis fundamentals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Building and bridge design techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>International design codes (IS, ACI, BS)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Load combinations and analysis methods</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Real-world project implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-lg text-gray-600">Comprehensive STAAD Pro training modules</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Introduction to STAAD Pro</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Software interface and navigation</li>
                <li>• Basic structural concepts</li>
                <li>• Material properties definition</li>
                <li>• Unit systems and conventions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structural Modeling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Geometry creation techniques</li>
                <li>• Member properties and sections</li>
                <li>• Boundary conditions and supports</li>
                <li>• Load application methods</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Linear and non-linear analysis</li>
                <li>• Dynamic and seismic analysis</li>
                <li>• Design code implementation</li>
                <li>• Result interpretation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600">STAAD Pro is widely used across various engineering sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Building Design</h3>
              <p className="text-gray-600 text-sm">Multi-story buildings, residential complexes</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌉</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bridge Engineering</h3>
              <p className="text-gray-600 text-sm">Highway bridges, railway bridges</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industrial Structures</h3>
              <p className="text-gray-600 text-sm">Warehouses, manufacturing plants</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Power plants, transmission towers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Prospects in Mumbai</h2>
            <p className="text-lg text-gray-600">Excellent opportunities for STAAD Pro professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Structural Design Engineer</li>
                <li>• Building Design Consultant</li>
                <li>• Bridge Design Engineer</li>
                <li>• Structural Analysis Specialist</li>
                <li>• Project Engineer</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• L&T Construction</li>
                <li>• Tata Consulting Engineers</li>
                <li>• Shapoorji Pallonji</li>
                <li>• Godrej & Boyce</li>
                <li>• Mahindra Lifespace</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Entry Level: ₹3-5 LPA</li>
                <li>• Mid Level: ₹5-8 LPA</li>
                <li>• Senior Level: ₹8-15 LPA</li>
                <li>• Lead Engineer: ₹15+ LPA</li>
                <li>• Consultant: ₹20+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master STAAD Pro?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Mumbai&apos;s premier STAAD Pro training program and advance your structural engineering career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <RelatedCourses />
    </div>
  )
}