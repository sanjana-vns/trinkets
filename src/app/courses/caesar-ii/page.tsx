import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CAESAR II Course in Mumbai | Pipe Stress Analysis Training',
  description: 'Master CAESAR II pipe stress analysis software in Mumbai. Industry-focused training for piping system design, safety analysis, and compliance with expert guidance.',
  keywords: 'CAESAR II course Mumbai, pipe stress analysis training, piping design course, stress analysis software, CAESAR II certification Mumbai, piping engineering training',
  openGraph: {
    title: 'CAESAR II Course in Mumbai | Pipe Stress Analysis Training',
    description: 'Master CAESAR II pipe stress analysis software in Mumbai. Industry-focused training for piping system design and safety analysis.',
    type: 'website',
    url: 'https://trinkets.com/courses/caesar-ii',
  },
}

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "Piping Engineering",
      description: "Complete piping design and engineering program",
      duration: "6 Months",
      link: "/courses/piping-design-engineering"
    },
    {
      title: "E3D Piping Course",
      description: "AVEVA E3D for 3D piping design and modeling",
      duration: "4 Months",
      link: "/courses/e3d-piping"
    },
    {
      title: "SMART PLANT 3D (SP3D)",
      description: "3D modeling software for industrial plant design",
      duration: "5 Months",
      link: "/courses/smart-plant-3d"
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

export default function CaesarIICoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-red-200 font-semibold text-sm">🔧 Pipe Stress Analysis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CAESAR II Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Master pipe stress analysis for safe and efficient piping system design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Master CAESAR II Software</h2>
              <p className="text-lg text-gray-600 mb-6">
                CAESAR II is a software for pipe stress analysis, ensuring safe and efficient piping system design. 
                It supports compliance with industry standards and is widely used in oil & gas, petrochemical, and power industries.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-red-600 font-medium">2 Months</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                  <p className="text-green-600 font-medium">⭐ 4.8/5</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                  <p className="text-blue-600 font-medium">380+ Enrolled</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mode</h3>
                  <p className="text-orange-600 font-medium">Online & Offline</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Pipe stress analysis fundamentals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Thermal expansion calculations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Support system design and optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Industry codes and standards (ASME, API)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Fatigue and dynamic analysis</span>
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
            <p className="text-lg text-gray-600">Comprehensive CAESAR II training modules</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Introduction to Pipe Stress</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stress analysis fundamentals</li>
                <li>• Piping system components</li>
                <li>• Load types and combinations</li>
                <li>• Industry codes overview</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CAESAR II Modeling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Software interface and tools</li>
                <li>• Piping model creation</li>
                <li>• Material properties input</li>
                <li>• Boundary conditions setup</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stress analysis execution</li>
                <li>• Result interpretation</li>
                <li>• Support optimization</li>
                <li>• Report generation</li>
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
            <p className="text-lg text-gray-600">CAESAR II is essential across multiple industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛢️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Oil & Gas</h3>
              <p className="text-gray-600 text-sm">Refineries, pipelines, offshore platforms</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚗️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Petrochemicals</h3>
              <p className="text-gray-600 text-sm">Chemical plants, processing facilities</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Power Generation</h3>
              <p className="text-gray-600 text-sm">Thermal power plants, nuclear facilities</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Industrial plants, process facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Prospects in Mumbai</h2>
            <p className="text-lg text-gray-600">High demand for pipe stress analysis specialists</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pipe Stress Engineer</li>
                <li>• Piping Design Engineer</li>
                <li>• Stress Analysis Specialist</li>
                <li>• Piping Project Engineer</li>
                <li>• Senior Stress Analyst</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reliance Industries</li>
                <li>• ONGC</li>
                <li>• Indian Oil Corporation</li>
                <li>• Bechtel India</li>
                <li>• Technip FMC</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Entry Level: ₹4-6 LPA</li>
                <li>• Mid Level: ₹6-10 LPA</li>
                <li>• Senior Level: ₹10-16 LPA</li>
                <li>• Lead Engineer: ₹16-25 LPA</li>
                <li>• Consultant: ₹25+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master CAESAR II?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join Mumbai&apos;s premier pipe stress analysis training program and advance your piping career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
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