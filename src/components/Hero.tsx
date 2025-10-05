'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Turning Students into Professionals",
      subtitle: "Practical, job-ready training programs tailored for colleges and universities.",
      image: "/images/bg1.jpg",
      gradient: "from-primary-600 to-primary-800"
    },
    {
      title: "Empower Your Engineering Future",
      subtitle: "Kickstart your career with expert-led training, real-world projects, and industry-recognized certifications in engineering design.",
      image: "/images/bg2.jpg",
      gradient: "from-secondary-500 to-secondary-700"
    },
    {
      title: "Master Design with Experts",
      subtitle: "Learn advanced design tools, software, and industry practices from experienced professionals at Trinkets Institute of Technology.",
      image: "/images/bg3.jpg",
      gradient: "from-primary-500 to-secondary-600"
    },
    {
      title: "Boost Your Career Potential",
      subtitle: "Join industry-ready courses in piping, HVAC, process, and structural engineering with hands-on learning opportunities.",
      image: "/images/bg1.jpg",
      gradient: "from-secondary-600 to-primary-700"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90`} />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className={index % 2 === 0 ? 'text-white' : 'text-blue-200'}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed px-4">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Our Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
            
            {/* Quick Navigation Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link
                href="/about"
                className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/placements"
                className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              >
                Placements
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              >
                Services
              </Link>
              <Link
                href="/corporate-training"
                className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              >
                Corporate Training
              </Link>
              <Link
                href="/testimonials"
                className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Course Enquiry Form Preview - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-20 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Enquiry</h3>
        <p className="text-sm text-gray-600 mb-4">Get Information and Guidance</p>
        
        {/* Quick Course Links */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Link href="/courses/piping-design-engineering" className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition-colors text-center">
            Piping Design
          </Link>
          <Link href="/courses/hvac-system-design" className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition-colors text-center">
            HVAC Systems
          </Link>
          <Link href="/courses/process-engineering" className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition-colors text-center">
            Process Engg.
          </Link>
          <Link href="/courses/structural-design-analysis" className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition-colors text-center">
            Structural
          </Link>
        </div>
        
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 rounded-md font-medium hover:from-blue-700 hover:to-indigo-600 transition-all duration-200 text-sm">
            Get Course Info
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <Link href="/courses" className="text-xs text-blue-600 hover:text-blue-800 underline">
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero