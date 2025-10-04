'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Course Enrollment CTA Component
const CourseEnrollment = () => {
  const [selectedCourse, setSelectedCourse] = useState('full-stack')
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'full-stack'
  })
  const [countdown, setCountdown] = useState({ hours: 12, minutes: 30, seconds: 45 })

  // Countdown timer for limited offer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const courses = [
    {
      id: 'full-stack',
      name: 'Full Stack Development',
      price: '₹45,000',
      originalPrice: '₹60,000',
      duration: '6 months',
      icon: '🌐',
      gradient: 'from-blue-600 to-purple-600',
      popular: true
    },
    {
      id: 'data-science',
      name: 'Data Science & ML',
      price: '₹55,000',
      originalPrice: '₹75,000',
      duration: '8 months',
      icon: '📊',
      gradient: 'from-green-600 to-teal-600',
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      price: '₹50,000',
      originalPrice: '₹65,000',
      duration: '5 months',
      icon: '🔒',
      gradient: 'from-red-600 to-pink-600',
      popular: false
    }
  ]

  const benefits = [
    { icon: '🎯', title: '100% Placement Guarantee', desc: 'Get your dream job or money back' },
    { icon: '👨‍🏫', title: 'Expert Mentorship', desc: '1-on-1 guidance from industry veterans' },
    { icon: '💼', title: 'Real Projects', desc: 'Build portfolio with industry projects' },
    { icon: '🔄', title: 'Lifetime Access', desc: 'Course materials & updates forever' },
    { icon: '💳', title: 'EMI Options', desc: 'Affordable monthly payment plans' },
    { icon: '🏆', title: 'Certification', desc: 'Industry-recognized certificates' }
  ]

  const selectedCourseData = courses.find(course => course.id === selectedCourse)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setShowContactForm(false)
    // Show success message or redirect
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl animate-morph-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 text-2xl animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {['🚀', '⭐', '💎', '🔥', '✨'][i % 5]}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Limited Time Offer Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-lg shadow-2xl animate-pulse">
            <span className="text-2xl">🔥</span>
            <span>Limited Time Offer - Save up to 25%</span>
            <span className="text-2xl">🔥</span>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="text-white/80">Ends in:</span>
            <div className="flex gap-2">
              {Object.entries(countdown).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30">
                    <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-white/80 uppercase">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Enrollment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Your Career?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of successful graduates who landed their dream jobs after completing 
              our industry-focused training programs. Your journey to success starts here!
            </p>

            {/* Course Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your Course</h3>
              <div className="grid grid-cols-1 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedCourse === course.id
                        ? `bg-gradient-to-r ${course.gradient} text-white shadow-2xl`
                        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    {course.popular && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          selectedCourse === course.id ? 'bg-white/20' : 'bg-gradient-to-br ' + course.gradient
                        }`}>
                          {course.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{course.name}</h4>
                          <p className={`text-sm ${
                            selectedCourse === course.id ? 'text-white/80' : 'text-gray-400'
                          }`}>
                            {course.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{course.price}</div>
                        <div className={`text-sm line-through ${
                          selectedCourse === course.id ? 'text-white/60' : 'text-gray-500'
                        }`}>
                          {course.originalPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{benefit.title}</div>
                    <div className="text-gray-300 text-xs">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enrollment Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${selectedCourseData?.gradient} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-2xl`}>
                  {selectedCourseData?.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCourseData?.name}</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl font-black text-white">{selectedCourseData?.price}</span>
                  <span className="text-lg text-gray-400 line-through">{selectedCourseData?.originalPrice}</span>
                  <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full font-bold">
                    Save 25%
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className={`group w-full py-4 bg-gradient-to-r ${selectedCourseData?.gradient} text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now - Limited Seats
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="w-full py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Download Detailed Brochure
                </button>

                <button className="w-full py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300">
                  Schedule Free Demo Class
                </button>
              </div>

              {/* EMI Options */}
              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <h4 className="font-semibold text-white mb-2">💳 EMI Options Available</h4>
                <div className="text-sm text-gray-300">
                  Pay as low as <span className="font-bold text-white">₹3,750/month</span> for 12 months
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">2000+</div>
                  <div className="text-xs text-gray-300">Students Placed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-gray-300">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.8/5</div>
                  <div className="text-xs text-gray-300">Rating</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Started Today!</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                  ))}
                </select>
                
                <button
                  type="submit"
                  className={`w-full py-4 bg-gradient-to-r ${selectedCourseData?.gradient} text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Submit Enrollment Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CourseEnrollment