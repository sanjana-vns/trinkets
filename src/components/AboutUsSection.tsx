'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({ years: 0, students: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate statistics
          const animateNumbers = () => {
            let yearsCount = 0
            let studentsCount = 0
            const yearsTarget = 10
            const studentsTarget = 5000
            
            const interval = setInterval(() => {
              if (yearsCount < yearsTarget) {
                yearsCount++
                setAnimatedStats(prev => ({ ...prev, years: yearsCount }))
              }
              if (studentsCount < studentsTarget) {
                studentsCount += 100
                setAnimatedStats(prev => ({ ...prev, students: studentsCount }))
              }
              if (yearsCount >= yearsTarget && studentsCount >= studentsTarget) {
                clearInterval(interval)
              }
            }, 50)
          }
          animateNumbers()
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about-section"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trinkets Institute of Technology",
            "description": "Leading technical education institute specializing in Piping Design, HVAC Systems, Process Engineering, and Structural Design",
            "url": "https://trinketsinstitute.com",
            "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
            "foundingDate": "2013",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/trinketsinstitute",
              "https://www.linkedin.com/company/trinketsinstitute"
            ],
            "knowsAbout": ["Piping Design", "HVAC Systems", "Process Engineering", "Structural Design", "Technical Education"],
            "hasCredential": "Industry Certifications",
            "employee": {
              "@type": "Person",
              "jobTitle": "Industry Expert Faculty"
            }
          })
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-200/25 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Content Side */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Section Header with enhanced styling */}
            <header className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
                <span className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm bg-blue-100 px-3 py-1 rounded-full">
                  About Trinkets Institute
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                Empowering Future 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 animate-gradient">
                  Engineers & Innovators
                </span>
              </h1>
            </header>

            {/* Enhanced Description with better typography */}
            <div className="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg lg:text-xl font-medium text-gray-800 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                Trinkets Institute of Technology stands at the forefront of technical education, 
                bridging the gap between academic learning and industry requirements. With over 
                a decade of excellence, we have transformed thousands of students into skilled 
                professionals ready to tackle real-world engineering challenges.
              </p>
              <p className="text-base lg:text-lg">
                Our comprehensive programs in <strong className="text-blue-700">Piping Design</strong>, <strong className="text-blue-700">HVAC Systems</strong>, 
                <strong className="text-blue-700"> Process Engineering</strong>, and <strong className="text-blue-700">Structural Design</strong> are meticulously crafted by industry experts to ensure 
                our graduates possess the practical skills and theoretical knowledge demanded 
                by today&apos;s competitive marketplace.
              </p>
            </div>

            {/* Enhanced Key Features with animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  ),
                  title: "Industry Expert Faculty",
                  description: "Learn from professionals with 15+ years real-world experience"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Hands-on Training",
                  description: "Practical approach with live project work and industry tools"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "100% Placement Support",
                  description: "Dedicated career guidance and guaranteed job assistance"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Global Certifications",
                  description: "Internationally recognized certificates and industry credentials"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 
                                 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl 
                                 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm lg:text-base group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons with better mobile UX */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-6">
              <Link
                href="/about"
                className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 
                         text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 
                         transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
                         active:scale-95 overflow-hidden"
                aria-label="Learn more about Trinkets Institute"
              >
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group px-6 lg:px-8 py-3 lg:py-4 border-2 border-blue-600 text-blue-600 font-bold 
                         rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-700 
                         transition-all duration-300 text-center hover:shadow-lg hover:scale-105
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
                         active:scale-95"
                aria-label="Contact Trinkets Institute"
              >
                Contact Us Today
              </Link>
            </div>
          </div>

          {/* Enhanced Visual Side with modern design */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main Image Container with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              {/* Engineer Image */}
              <div className="relative h-80 sm:h-96 lg:h-[520px] xl:h-[580px]">
                <Image
                  src="/images/engineer.jpg"
                  alt="Trinkets Institute of Technology - Professional Engineering Training and Technical Education Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent 
                               group-hover:from-blue-900/95 transition-all duration-500"></div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
                
                {/* Enhanced text overlay */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 z-10">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 
                                 transform group-hover:scale-105 transition-all duration-300">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 lg:mb-3 leading-tight">
                      Excellence in 
                      <span className="block text-blue-400 font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Education & Innovation
                      </span>
                    </h2>
                    <p className="text-white/95 text-sm lg:text-base leading-relaxed font-medium">
                      Building tomorrow&apos;s engineers today with cutting-edge technology and industry expertise
                    </p>
                    <div className="mt-3 lg:mt-4 flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white/90 text-xs lg:text-sm font-medium">Live Projects</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-white/90 text-xs lg:text-sm font-medium">Expert Faculty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Stats Cards with animations */}
            <div className="absolute -bottom-6 -left-4 lg:-left-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 
                           border border-blue-100 z-20 transform hover:scale-110 transition-all duration-300 
                           hover:shadow-3xl group cursor-pointer">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-blue-600 
                               group-hover:text-blue-700 transition-colors">
                  {animatedStats.years}+
                </div>
                <div className="text-xs lg:text-sm text-gray-700 font-bold uppercase tracking-wider">
                  Years Excellence
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mx-auto mt-2"></div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 
                           border border-blue-100 z-20 transform hover:scale-110 transition-all duration-300 
                           hover:shadow-3xl group cursor-pointer">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-blue-600 
                               group-hover:text-blue-700 transition-colors">
                  {animatedStats.students.toLocaleString()}+
                </div>
                <div className="text-xs lg:text-sm text-gray-700 font-bold uppercase tracking-wider">
                  Students Trained
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mx-auto mt-2"></div>
              </div>
            </div>

            {/* Additional floating achievement badge */}
            <div className="absolute top-1/2 -left-8 bg-gradient-to-br from-blue-600 to-indigo-600 
                           rounded-full p-3 lg:p-4 shadow-xl z-10 transform hover:scale-110 
                           transition-all duration-300 hover:rotate-12 group cursor-pointer">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors" 
                   fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Certificate badge */}
            <div className="absolute bottom-1/3 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 
                           rounded-full p-3 lg:p-4 shadow-xl z-10 transform hover:scale-110 
                           transition-all duration-300 hover:-rotate-12 group cursor-pointer">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors" 
                   fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our graduates work in top engineering companies worldwide, making significant contributions to major projects
            </p>
          </div>
          
          {/* Industry Partnerships Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {['BECHTEL', 'FLUOR', 'JACOBS', 'WOOD'].map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl 
                                        transition-all duration-300 hover:scale-105 text-center
                                        border border-gray-100">
                <div className="text-lg lg:text-xl font-bold text-gray-700 tracking-wider">
                  {company}
                </div>
                <div className="text-xs text-gray-500 mt-1">Industry Partner</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection