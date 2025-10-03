'use client'

import Link from 'next/link'
import Image from 'next/image'

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500"></div>
                <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
                  About Trinkets Institute
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Future 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                  Engineers & Innovators
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Trinkets Institute of Technology stands at the forefront of technical education, 
                bridging the gap between academic learning and industry requirements. With over 
                a decade of excellence, we have transformed thousands of students into skilled 
                professionals ready to tackle real-world engineering challenges.
              </p>
              <p>
                Our comprehensive programs in Piping Design, HVAC Systems, Process Engineering, 
                and Structural Design are meticulously crafted by industry experts to ensure 
                our graduates possess the practical skills and theoretical knowledge demanded 
                by today&apos;s competitive marketplace.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 
                               rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Expert Faculty</h4>
                  <p className="text-sm text-gray-600">Learn from professionals with real-world experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 
                               rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hands-on Training</h4>
                  <p className="text-sm text-gray-600">Practical approach with live project work</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 
                               rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">100% Placement Support</h4>
                  <p className="text-sm text-gray-600">Dedicated career guidance and job assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 
                               rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Certifications</h4>
                  <p className="text-sm text-gray-600">Globally recognized certificates and credentials</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white 
                         font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-600 
                         transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold 
                         rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-100 to-secondary-100">
                {/* Engineer Image */}
                <div className="relative h-96 lg:h-[500px]">
                  <Image
                    src="/images/engineer.jpg"
                    alt="Trinkets Institute - Professional Engineering Training"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Text overlay on image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Excellence in Education</h3>
                    <p className="text-white/90">Building tomorrow&apos;s engineers today</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-500">5000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
              <div className="w-96 h-96 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection