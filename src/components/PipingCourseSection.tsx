'use client'

import Link from 'next/link'
import { CheckCircle, Star, Users, Clock, Award, MapPin } from 'lucide-react'

const PipingCourseSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Industry-Standard Piping Software",
      description: "Master PDMS, SP3D, E3D, AutoCAD Plant 3D, and CAESAR II used by top companies in Mumbai"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Expert Piping Instructors",
      description: "Learn from experienced piping engineers with 15+ years in oil & gas, petrochemical industries"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Flexible Batch Timings",
      description: "Weekday, weekend, and evening batches for working professionals in Mumbai"
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: "Industry Certification",
      description: "Get certified in piping design with globally recognized certificates"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "Mumbai Location Advantage",
      description: "Strategic location in Mumbai with easy access to major engineering companies"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "100% Placement Support",
      description: "Dedicated placement assistance with 98% success rate in piping engineering jobs"
    }
  ]

  const courseModules = [
    "Piping Design Fundamentals",
    "PDMS (Plant Design Management System)",
    "SP3D (SmartPlant 3D) Training",
    "E3D (AVEVA Everything3D)",
    "AutoCAD Plant 3D",
    "CAESAR II Stress Analysis",
    "P&ID (Piping & Instrumentation Diagram)",
    "Piping Material Engineering",
    "Piping Layout & Routing",
    "Pipe Stress Analysis",
    "Isometric Drawing Generation",
    "Industry Project Work"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-blue-600 font-semibold text-sm mr-2">🔧</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Complete Piping Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Piping Course In Mumbai?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join Mumbai&apos;s most comprehensive piping design training program with hands-on experience, 
            industry projects, and guaranteed job placement assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Benefits Grid */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Piping Course Benefits
            </h3>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Modules */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Piping Course Curriculum
            </h3>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Start Your Piping Career?</h4>
                <p className="text-blue-100 mb-4">
                  Join our comprehensive piping course in Mumbai and become a certified piping design engineer
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Enroll in Piping Course Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Piping Engineering Journey Today!
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance, hands-on training, and guaranteed placement assistance with our 
            comprehensive Piping Course In Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses/piping-design-course-mumbai"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              View Detailed Piping Course
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Get Free Counseling
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PipingCourseSection