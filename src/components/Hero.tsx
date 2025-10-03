'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Turning Students into Professionals",
      subtitle: "Practical, job-ready training programs tailored for colleges and universities.",
      image: "/images/construction-workers.jpg",
      gradient: "from-primary-600 to-primary-800"
    },
    {
      title: "Empower Your Engineering Future",
      subtitle: "Kickstart your career with expert-led training, real-world projects, and industry-recognized certifications in engineering design.",
      image: "/images/mechanic-working.jpg",
      gradient: "from-secondary-500 to-secondary-700"
    },
    {
      title: "Master Design with Experts",
      subtitle: "Learn advanced design tools, software, and industry practices from experienced professionals at Trinkets Institute of Technology.",
      image: "/images/background-mechanic.jpg",
      gradient: "from-primary-500 to-secondary-600"
    },
    {
      title: "Boost Your Career Potential",
      subtitle: "Join industry-ready courses in piping, HVAC, process, and structural engineering with hands-on learning opportunities.",
      image: "/images/construction-workers.jpg",
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className={index % 2 === 0 ? 'text-white' : 'text-secondary-200'}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Course Enquiry Form Preview */}
      <div className="absolute bottom-8 right-8 z-20 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Enquiry</h3>
        <p className="text-sm text-gray-600 mb-4">Get Information and Guidance</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-2 rounded-md font-medium hover:from-primary-700 hover:to-secondary-600 transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero