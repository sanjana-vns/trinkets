'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Type definition for training program
interface TrainingProgram {
  id: number;
  title: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  technologies: string[];
  participants: string;
  customizable: boolean;
  price: string;
  features: string[];
  courseLink?: string;
}

// Ultra-Creative Training Programs Component
const TrainingPrograms = () => {
  const [activeCategory, setActiveCategory] = useState('piping')
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null)
  const [selectedDuration, setSelectedDuration] = useState('all')

  const categories = [
    { id: 'piping', name: 'Piping Engineering', icon: '�', gradient: 'from-blue-600 to-purple-600' },
    { id: 'mep', name: 'MEP Engineering', icon: '⚡', gradient: 'from-green-600 to-teal-600' },
    { id: 'hvac', name: 'HVAC Systems', icon: '❄️', gradient: 'from-cyan-600 to-blue-600' },
    { id: 'structural', name: 'Structural Engineering', icon: '🏗️', gradient: 'from-red-600 to-pink-600' },
    { id: 'cad', name: 'CAD & Design Software', icon: '�', gradient: 'from-blue-600 to-indigo-600' },
    { id: 'process', name: 'Process Engineering', icon: '⚙️', gradient: 'from-purple-600 to-indigo-600' }
  ]

  const trainingPrograms = {
    piping: [
      {
        id: 1,
        title: "SP3D Piping Design Training",
        description: "Comprehensive training in Smart Plant 3D for industrial piping design and modeling",
        duration: "80 hours",
        format: "On-site/Virtual",
        level: "Intermediate",
        technologies: ["SP3D", "AutoCAD", "Piping Specifications", "Isometric Generation"],
        participants: "10-15",
        customizable: true,
        price: "Contact for Quote",
        features: ["3D Modeling", "Clash Detection", "Isometric Drawings", "Equipment Placement"],
        courseLink: "/courses/sp3d-piping-design-training"
      },
      {
        id: 2,
        title: "CAESAR II Stress Analysis",
        description: "Advanced piping stress analysis using CAESAR II for industrial applications",
        duration: "60 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["CAESAR II", "ASME B31.3", "Stress Analysis", "Support Design"],
        participants: "8-12",
        customizable: true,
        price: "Contact for Quote",
        features: ["Thermal Stress Analysis", "Seismic Analysis", "Support Optimization", "Code Compliance"],
        courseLink: "/courses/caesar-ii-stress-analysis"
      },
      {
        id: 3,
        title: "Piping Engineering Fundamentals",
        description: "Complete piping engineering training from basics to advanced concepts",
        duration: "100 hours",
        format: "On-site/Hybrid",
        level: "Beginner",
        technologies: ["AutoCAD", "P&ID", "Piping Design", "Material Selection"],
        participants: "15-20",
        customizable: true,
        price: "Contact for Quote",
        features: ["Piping Fundamentals", "Design Standards", "Material Engineering", "Project Management"],
        courseLink: "/courses/piping-engineering-fundamentals-training"
      }
    ],
    mep: [
      {
        id: 4,
        title: "MEP Design & Coordination",
        description: "Comprehensive MEP engineering training for building services design",
        duration: "120 hours",
        format: "On-site/Virtual",
        level: "Intermediate",
        technologies: ["Revit MEP", "AutoCAD MEP", "HAP", "Elite Software"],
        participants: "12-18",
        customizable: true,
        price: "Contact for Quote",
        features: ["Electrical Design", "Plumbing Systems", "Fire Protection", "BIM Coordination"],
        courseLink: "/courses/mep-engineering"
      },
      {
        id: 5,
        title: "Building Information Modeling (BIM)",
        description: "Advanced BIM implementation for MEP engineering and coordination",
        duration: "80 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["Revit MEP", "Navisworks", "BIM 360", "Dynamo"],
        participants: "10-15",
        customizable: true,
        price: "Contact for Quote",
        features: ["3D Modeling", "Clash Detection", "4D Scheduling", "5D Cost Analysis"],
        courseLink: undefined
      }
    ],
    hvac: [
      {
        id: 6,
        title: "HVAC System Design & Analysis",
        description: "Complete HVAC system design using industry-standard software and methods",
        duration: "90 hours",
        format: "On-site/Virtual",
        level: "Intermediate",
        technologies: ["HAP", "Trace 700", "Elite CHVAC", "Duct Design"],
        participants: "12-16",
        customizable: true,
        price: "Contact for Quote",
        features: ["Load Calculations", "System Design", "Energy Analysis", "Duct Sizing"],
        courseLink: "/courses/hvac-system-design"
      },
      {
        id: 7,
        title: "Energy Modeling & Green Building",
        description: "Advanced energy modeling and sustainable HVAC design practices",
        duration: "70 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["eQUEST", "EnergyPlus", "Green Building", "LEED"],
        participants: "8-12",
        customizable: true,
        price: "Contact for Quote",
        features: ["Energy Simulation", "LEED Compliance", "Sustainable Design", "Cost-Benefit Analysis"],
        courseLink: undefined
      }
    ],
    structural: [
      {
        id: 8,
        title: "STAAD Pro Structural Analysis",
        description: "Comprehensive structural analysis and design using STAAD Pro software",
        duration: "80 hours",
        format: "On-site/Virtual",
        level: "Intermediate",
        technologies: ["STAAD Pro", "ETABS", "Structural Design", "IS Codes"],
        participants: "12-16",
        customizable: true,
        price: "Contact for Quote",
        features: ["Structural Modeling", "Load Analysis", "Design Optimization", "Code Compliance"],
        courseLink: "/courses/staad-pro"
      },
      {
        id: 9,
        title: "Advanced Steel Structure Design",
        description: "Specialized training in steel structure design for industrial applications",
        duration: "70 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["STAAD Pro", "SAP2000", "Connection Design", "Fabrication"],
        participants: "8-12",
        customizable: true,
        price: "Contact for Quote",
        features: ["Connection Design", "Fabrication Details", "Erection Planning", "Cost Optimization"],
        courseLink: undefined
      }
    ],
    cad: [
      {
        id: 10,
        title: "AutoCAD for Engineering Design",
        description: "Master AutoCAD for engineering drawings and technical documentation",
        duration: "60 hours",
        format: "On-site/Virtual",
        level: "Beginner",
        technologies: ["AutoCAD", "Technical Drawing", "Dimensioning", "3D Modeling"],
        participants: "15-20",
        customizable: true,
        price: "Contact for Quote",
        features: ["2D Drafting", "3D Modeling", "Technical Standards", "Plot Management"],
        courseLink: "/courses/autocad-mechanical-design"
      },
      {
        id: 11,
        title: "Advanced CAD & 3D Modeling",
        description: "Advanced CAD techniques and 3D modeling for engineering applications",
        duration: "80 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["AutoCAD 3D", "Inventor", "SolidWorks", "3D Printing"],
        participants: "10-15",
        customizable: true,
        price: "Contact for Quote",
        features: ["Parametric Modeling", "Assembly Design", "Simulation", "Manufacturing Integration"],
        courseLink: undefined
      }
    ],
    process: [
      {
        id: 12,
        title: "Process Engineering Fundamentals",
        description: "Complete process engineering training for chemical and petrochemical industries",
        duration: "100 hours",
        format: "On-site/Virtual",
        level: "Intermediate",
        technologies: ["HYSYS", "Aspen Plus", "P&ID", "Process Simulation"],
        participants: "12-18",
        customizable: true,
        price: "Contact for Quote",
        features: ["Process Design", "Heat Integration", "Safety Analysis", "Economic Evaluation"],
        courseLink: undefined
      },
      {
        id: 13,
        title: "Plant Design & Layout",
        description: "Industrial plant design and layout optimization for process industries",
        duration: "90 hours",
        format: "On-site",
        level: "Advanced",
        technologies: ["PDMS", "E3D", "Plant Layout", "Safety Considerations"],
        participants: "8-12",
        customizable: true,
        price: "Contact for Quote",
        features: ["Equipment Layout", "Pipe Routing", "Safety Compliance", "Maintenance Access"],
        courseLink: undefined
      }
    ]
  }

  const currentPrograms = trainingPrograms[activeCategory as keyof typeof trainingPrograms] || []

  const filteredPrograms = selectedDuration === 'all' 
    ? currentPrograms 
    : currentPrograms.filter(program => {
        const hours = parseInt(program.duration)
        if (selectedDuration === 'short') return hours <= 40
        if (selectedDuration === 'medium') return hours > 40 && hours <= 60
        if (selectedDuration === 'long') return hours > 60
        return true
      })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Training Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology training programs designed specifically for corporate teams. 
            Each program is customizable to meet your organization&apos;s unique needs and objectives.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Duration Filter */}
          <div className="flex justify-center gap-4">
            <label className="text-gray-600 font-medium">Filter by Duration:</label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Durations</option>
              <option value="short">Short (≤40 hours)</option>
              <option value="medium">Medium (41-60 hours)</option>
              <option value="long">Long (60+ hours)</option>
            </select>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Customizable Badge */}
              {program.customizable && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-teal-500">
                    Customizable
                  </span>
                </div>
              )}

              {/* Program Header */}
              <div className={`relative p-6 bg-gradient-to-br ${categories.find(c => c.id === activeCategory)?.gradient || 'from-blue-600 to-purple-600'} text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {categories.find(c => c.id === activeCategory)?.icon || '💻'}
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-semibold">{program.duration}</div>
                    <div className="text-white/80">{program.format}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 leading-tight">{program.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{program.description}</p>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Level:</span>
                    <p className="font-semibold text-gray-800">{program.level}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Participants:</span>
                    <p className="font-semibold text-gray-800">{program.participants}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.gradient || 'from-blue-500 to-purple-500'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg font-bold text-gray-800">{program.price}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Enterprise Pricing
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {program.courseLink ? (
                    <Link href={program.courseLink}>
                      <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.gradient || 'from-blue-600 to-purple-600'} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.gradient || 'from-blue-600 to-purple-600'} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Request Information
                    </button>
                  )}
                  <button className="w-full py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              {hoveredProgram === program.id && (
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.gradient || 'from-blue-600 to-purple-600'} opacity-10 blur-xl -z-10 scale-110`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Custom Training CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Training Program?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We design bespoke training solutions tailored to your specific technology stack, 
              business objectives, and team requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact"
                className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discuss Custom Solution
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
              <a 
                href="/testimonials"
                className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Success Stories
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-2000"></div>
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms