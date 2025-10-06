'use client'

import { useState } from 'react'
import Link from 'next/link'

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Courses', icon: '🎯' },
    { id: 'piping', label: 'Piping Design', icon: '🔧' },
    { id: 'hvac', label: 'HVAC Systems', icon: '❄️' },
    { id: 'process', label: 'Process Engineering', icon: '⚙️' },
    { id: 'structural', label: 'Structural Design', icon: '🏗️' },
    { id: 'mep', label: 'MEP Engineering', icon: '🔌' },
    { id: 'software', label: 'Software Training', icon: '💻' },
    { id: 'mechanical', label: 'Mechanical Design', icon: '⚡' }
  ]

  const courses = [
    {
      title: "Piping Engineering",
      description: "Piping Engineering is a specialized field of Mechanical Engineering focused on designing safe, efficient piping systems for industrial facilities.",
      duration: "6 Months",
      rating: "4.8",
      students: "850+",
      category: "piping",
      link: "/courses/piping-design-engineering",
      features: ["AutoCAD Plant 3D", "PDMS Training", "Industry Projects", "Job Placement"]
    },
    {
      title: "E3D Piping Course",
      description: "E3D Piping is a powerful 3D design tool for modeling complex piping systems, enhancing accuracy, collaboration, efficiency and clash detection.",
      duration: "4 Months",
      rating: "4.9",
      students: "480+",
      category: "piping",
      link: "/courses/e3d-piping",
      features: ["AVEVA E3D", "3D Piping Layout", "Clash Detection", "Plant Modeling"]
    },
    {
      title: "SMART PLANT 3D (SP3D)",
      description: "SP3D is a 3D modeling software used for designing piping, equipment, and structures in industrial plants with precision and efficiency.",
      duration: "5 Months",
      rating: "4.8",
      students: "520+",
      category: "piping",
      link: "/courses/smart-plant-3d",
      features: ["SP3D Modeling", "Equipment Design", "Piping Layout", "Industrial Plants"]
    },
    {
      title: "HVAC Engineering",
      description: "HVAC Engineering designs and optimizes heating, ventilation and air conditioning systems to ensure comfort, air quality and energy efficiency.",
      duration: "4 Months", 
      rating: "4.7",
      students: "650+",
      category: "hvac",
      link: "/courses/hvac-system-design",
      features: ["HAP Software", "Load Calculations", "Duct Design", "Certification"]
    },
    {
      title: "Process Engineering",
      description: "Learn process design, P&ID development, and process simulation with industry software.",
      duration: "5 Months",
      rating: "4.9",
      students: "720+", 
      category: "process",
      link: "/courses/process-engineering",
      features: ["HYSYS Training", "P&ID Design", "Process Safety", "Real Projects"]
    },
    {
      title: "MEP Engineering",
      description: "MEP Engineering involves designing and maintaining mechanical, electrical, and plumbing systems to ensure efficiency and safety in buildings.",
      duration: "5 Months",
      rating: "4.7",
      students: "600+",
      category: "mep",
      link: "/courses/mep-engineering",
      features: ["Mechanical Systems", "Electrical Design", "Plumbing Systems", "Building Codes"]
    },
    {
      title: "Structural Engineering",
      description: "Structural Engineering involves designing safe, stable structures like buildings and bridges. It ensures they withstand loads and environmental forces.",
      duration: "6 Months",
      rating: "4.6",
      students: "580+",
      category: "structural", 
      link: "/courses/structural-design-analysis",
      features: ["STAAD Pro", "ETABS", "Design Codes", "Live Projects"]
    },
    {
      title: "AutoCAD Mechanical Design",
      description: "Complete mechanical design course with 2D drafting and 3D modeling techniques.",
      duration: "3 Months",
      rating: "4.5",
      students: "920+",
      category: "mechanical",
      link: "/courses/autocad-mechanical-design",
      features: ["2D Drafting", "3D Modeling", "GD&T", "Industry Practice"]
    },
    {
      title: "SolidWorks Professional",
      description: "Master 3D CAD design, simulation, and manufacturing with SolidWorks software.",
      duration: "4 Months",
      rating: "4.8",
      students: "780+",
      category: "mechanical",
      link: "/courses/solidworks-professional",
      features: ["3D Modeling", "Simulation", "Assembly Design", "Certification"]
    },
    {
      title: "STAAD Pro",
      description: "STAAD Pro is structural analysis and design software for modeling buildings, bridges and other structures. It supports multiple materials and design codes.",
      duration: "3 Months",
      rating: "4.7",
      students: "450+",
      category: "software",
      link: "/courses/staad-pro",
      features: ["Structural Analysis", "Design Codes", "Building Modeling", "Bridge Design"]
    },
    {
      title: "ETABS",
      description: "ETABS is advanced structural engineering software used for analyzing and designing multi-story buildings efficiently, accurately and reliably.",
      duration: "3 Months",
      rating: "4.6",
      students: "420+",
      category: "software",
      link: "/courses/etabs",
      features: ["Building Analysis", "Multi-story Design", "Seismic Analysis", "Professional Certification"]
    },
    {
      title: "CAESAR II",
      description: "CAESAR II is a software for pipe stress analysis, ensuring safe and efficient piping system design. It supports compliance with industry standards.",
      duration: "2 Months",
      rating: "4.8",
      students: "380+",
      category: "software",
      link: "/courses/caesar-ii",
      features: ["Pipe Stress Analysis", "Industry Standards", "Safety Design", "Professional Training"]
    }
  ]

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-600 font-semibold text-sm">🎓 Our Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Training Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-focused courses designed to advance your engineering career with hands-on training and expert guidance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <span>⭐</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                <p className="text-blue-100 text-sm">{course.students} students enrolled</p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        {feature}
                      </span>
                    ))}
                    {course.features.length > 3 && (
                      <span className="text-gray-500 text-xs">+{course.features.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-end">
                  <Link href={course.link} className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer customized training programs for organizations and individuals. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                Contact Us
              </Link>
              <Link href="/courses" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection