'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Corporate Contact Component
const CorporateContact = () => {
  const [activeTab, setActiveTab] = useState('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    trainingType: '',
    timeline: '',
    budget: '',
    message: ''
  })
  const [showScheduler, setShowScheduler] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('')

  const contactMethods = {
    contact: {
      title: "Get in Touch",
      icon: "📧",
      gradient: "from-blue-600 to-purple-600",
      description: "Send us your requirements and we'll get back to you within 24 hours"
    },
    schedule: {
      title: "Schedule Consultation",
      icon: "📅",
      gradient: "from-green-600 to-teal-600",
      description: "Book a 30-minute strategy session with our training experts"
    },
    demo: {
      title: "Request Demo",
      icon: "🎯",
      gradient: "from-blue-600 to-indigo-600",
      description: "See our training methodology and platform in action"
    }
  }

  const availableSlots = [
    { date: "Oct 5, 2025", time: "10:00 AM", available: true },
    { date: "Oct 5, 2025", time: "2:00 PM", available: true },
    { date: "Oct 6, 2025", time: "11:00 AM", available: false },
    { date: "Oct 6, 2025", time: "3:00 PM", available: true },
    { date: "Oct 7, 2025", time: "9:00 AM", available: true },
    { date: "Oct 7, 2025", time: "1:00 PM", available: true }
  ]

  const quickActions = [
    {
      title: "Download Corporate Brochure",
      description: "Comprehensive guide to our corporate training services",
      icon: "📄",
      action: "Download PDF",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Training ROI Calculator",
      description: "Calculate potential return on investment for your team",
      icon: "📊",
      action: "Use Calculator",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Success Stories",
      description: "Read detailed case studies from our corporate clients",
      icon: "📖",
      action: "View Stories",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Emergency Consultation",
      description: "Need urgent training solutions? Get priority support",
      icon: "🚨",
      action: "Get Help Now",
      gradient: "from-red-500 to-orange-500"
    }
  ]

  const contactInfo = [
    {
      type: "Phone",
      value: "+91 98765 43210",
      icon: "📞",
      description: "Direct line to our corporate team"
    },
    {
      type: "Email",
      value: "corporate@trinkets.edu",
      icon: "✉️",
      description: "For detailed inquiries and proposals"
    },
    {
      type: "WhatsApp",
      value: "+91 98765 43210",
      icon: "💬",
      description: "Quick responses for urgent queries"
    },
    {
      type: "Address",
      value: "Trinkets Institute, Tech Hub, Bangalore",
      icon: "📍",
      description: "Visit us for in-person consultations"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const currentMethod = contactMethods[activeTab as keyof typeof contactMethods]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Animated Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300/20 text-3xl animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              {['📧', '📞', '💬', '📅', '🎯', '📄'][i % 6]}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Let&apos;s Get Started
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your team? Get in touch with our corporate training experts 
            to discuss customized solutions for your organization.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative p-6 bg-gradient-to-br ${action.gradient} text-white`}>
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {action.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight">{action.title}</h3>
                <p className="text-white/90 text-sm mb-4">{action.description}</p>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/30 transition-colors duration-300">
                  {action.action}
                </button>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods & Form */}
          <div className="lg:col-span-2">
            {/* Method Selector */}
            <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200 mb-8">
              {Object.entries(contactMethods).map(([key, method]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${method.gradient} text-white shadow-lg`
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl">{method.icon}</span>
                    <span className="hidden sm:inline">{method.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Method Content */}
            <div className={`relative p-8 bg-gradient-to-br ${currentMethod.gradient} rounded-3xl text-white shadow-2xl overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12"></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{currentMethod.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{currentMethod.title}</h3>
                    <p className="text-white/90">{currentMethod.description}</p>
                  </div>
                </div>

                {/* Contact Form */}
                {activeTab === 'contact' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      >
                        <option value="" className="text-gray-800">Team Size</option>
                        <option value="10-25" className="text-gray-800">10-25 employees</option>
                        <option value="26-50" className="text-gray-800">26-50 employees</option>
                        <option value="51-100" className="text-gray-800">51-100 employees</option>
                        <option value="100+" className="text-gray-800">100+ employees</option>
                      </select>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                        required
                      >
                        <option value="" className="text-gray-800">Timeline</option>
                        <option value="immediate" className="text-gray-800">Immediate (1-2 weeks)</option>
                        <option value="short" className="text-gray-800">Short term (1 month)</option>
                        <option value="medium" className="text-gray-800">Medium term (2-3 months)</option>
                        <option value="long" className="text-gray-800">Long term (6+ months)</option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your training requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}

                {/* Scheduler */}
                {activeTab === 'schedule' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Available Time Slots</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {availableSlots.map((slot, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedSlot(`${slot.date} ${slot.time}`)}
                            disabled={!slot.available}
                            className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                              selectedSlot === `${slot.date} ${slot.time}`
                                ? 'bg-white text-blue-600 shadow-lg'
                                : slot.available
                                ? 'bg-white/20 hover:bg-white/30 text-white'
                                : 'bg-white/10 text-white/50 cursor-not-allowed'
                            }`}
                          >
                            <div className="text-sm">{slot.date}</div>
                            <div className="font-bold">{slot.time}</div>
                            {!slot.available && <div className="text-xs">Booked</div>}
                          </button>
                        ))}
                      </div>
                    </div>
                    {selectedSlot && (
                      <div className="p-4 bg-white/20 rounded-xl">
                        <p className="text-white/90 mb-4">Selected: {selectedSlot}</p>
                        <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-300">
                          Confirm Booking
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Demo Request */}
                {activeTab === 'demo' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                      />
                    </div>
                    <select className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm">
                      <option value="" className="text-gray-800">Interested Training Area</option>
                      <option value="full-stack" className="text-gray-800">Full Stack Development</option>
                      <option value="data-science" className="text-gray-800">Data Science & ML</option>
                      <option value="cloud" className="text-gray-800">Cloud & DevOps</option>
                      <option value="security" className="text-gray-800">Cybersecurity</option>
                    </select>
                    <button className="w-full py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Schedule Demo
                    </button>
                  </div>
                )}
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-800">{info.type}</div>
                        <div className="text-blue-600 font-medium">{info.value}</div>
                        <div className="text-gray-600 text-sm">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Urgent Support */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">🚨 Urgent Support</h4>
              <p className="text-white/90 text-sm mb-4">
                Need immediate assistance for critical training requirements?
              </p>
              <button className="w-full py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-300">
                Emergency Hotline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateContact