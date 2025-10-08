'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Award, Star, Filter, Search, CheckCircle, Clock, Users, Target, ExternalLink, Download, BookOpen, TrendingUp, FileText } from 'lucide-react'

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Certifications', count: 25 },
    { id: 'technical', label: 'Technical Skills', count: 8 },
    { id: 'project', label: 'Project Management', count: 5 },
    { id: 'design', label: 'Design & CAD', count: 6 },
    { id: 'safety', label: 'Safety & Quality', count: 4 },
    { id: 'leadership', label: 'Leadership', count: 2 }
  ]

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]

  const featuredCertifications = [
    {
      id: 1,
      title: "Certified Professional Engineer (PE)",
      provider: "National Society of Professional Engineers",
      category: "technical",
      level: "expert",
      duration: "6 months intensive",
      participants: "500+ engineers",
      completionRate: "92%",
      description: "Comprehensive professional engineering certification covering design, analysis, and project management.",
      image: "/images/gallery1.webp",
      color: "from-blue-600 to-indigo-600",
      features: ["Industry Recognition", "Career Advancement", "Legal Authority"],
      nextBatch: "March 2024"
    },
    {
      id: 2,
      title: "Advanced Project Management Professional",
      provider: "Project Management Institute",
      category: "project",
      level: "advanced",
      duration: "4 months",
      participants: "300+ professionals",
      completionRate: "89%",
      description: "Expert-level project management certification for engineering professionals and team leaders.",
      image: "/images/gallery2.webp",
      color: "from-purple-600 to-pink-600",
      features: ["Global Recognition", "Leadership Skills", "Risk Management"],
      nextBatch: "April 2024"
    },
    {
      id: 3,
      title: "CAD Design & Manufacturing Excellence",
      provider: "International Design Council",
      category: "design",
      level: "intermediate",
      duration: "3 months",
      participants: "450+ designers",
      completionRate: "95%",
      description: "Comprehensive CAD and manufacturing design certification with hands-on industry projects.",
      image: "/images/gallery3.webp",
      color: "from-green-600 to-teal-600",
      features: ["Industry Tools", "Portfolio Projects", "Job Placement"],
      nextBatch: "May 2024"
    },
    {
      id: 4,
      title: "Advanced Safety & Quality Management",
      provider: "Safety Engineering Institute",
      category: "safety",
      level: "advanced",
      duration: "5 months",
      participants: "250+ professionals",
      completionRate: "91%",
      description: "Comprehensive safety management and quality assurance certification for industrial environments.",
      image: "/images/gallery4.webp",
      color: "from-orange-600 to-red-600",
      features: ["Safety Protocols", "Quality Systems", "Compliance Certification"],
      nextBatch: "June 2024"
    }
  ]

  const allCertifications = [
    {
      id: 4,
      title: "Quality Assurance & Testing",
      provider: "Quality Engineers Association",
      category: "safety",
      level: "intermediate",
      duration: "2 months",
      status: "available",
      description: "Comprehensive quality control and testing methodologies."
    },
    {
      id: 5,
      title: "Leadership in Engineering Teams",
      provider: "Engineering Leadership Institute",
      category: "leadership",
      level: "advanced",
      duration: "3 months",
      status: "upcoming",
      description: "Advanced leadership skills for engineering professionals."
    },
    {
      id: 6,
      title: "Safety Management Systems",
      provider: "Occupational Safety Council",
      category: "safety",
      level: "intermediate",
      duration: "6 weeks",
      status: "available",
      description: "Workplace safety and risk management certification."
    },
    {
      id: 7,
      title: "Advanced Manufacturing Processes",
      provider: "Manufacturing Excellence Board",
      category: "technical",
      level: "advanced",
      duration: "4 months",
      status: "available",
      description: "Cutting-edge manufacturing technologies and processes."
    },
    {
      id: 8,
      title: "Digital Design & 3D Modeling",
      provider: "Digital Design Academy",
      category: "design",
      level: "beginner",
      duration: "8 weeks",
      status: "available",
      description: "Foundation in digital design and 3D modeling techniques."
    },
    {
      id: 9,
      title: "Project Risk Assessment",
      provider: "Risk Management Institute",
      category: "project",
      level: "intermediate",
      duration: "6 weeks",
      status: "upcoming",
      description: "Comprehensive project risk identification and mitigation."
    }
  ]

  const filteredCertifications = allCertifications.filter(cert => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || cert.level === selectedLevel
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.provider.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700 border-green-200'
      case 'intermediate': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'advanced': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'expert': return 'bg-orange-100 text-orange-700 border-orange-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-700 border-green-200'
      case 'upcoming': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'full': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">
            <FileText className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Professional Certifications</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry-Recognized
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advance your engineering career with our comprehensive certification programs designed 
            in partnership with industry leaders and professional organizations.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <FileText className="w-8 h-8 text-blue-500" />, number: "25+", label: "Certification Programs", description: "Diverse specializations" },
            { icon: <Users className="w-8 h-8 text-green-500" />, number: "2,500+", label: "Certified Professionals", description: "Industry-ready graduates" },
            { icon: <Star className="w-8 h-8 text-yellow-500" />, number: "94%", label: "Success Rate", description: "Completion & placement" },
            { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, number: "40%", label: "Salary Increase", description: "Average post-certification" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Programs</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {featuredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-90 flex items-center justify-center`}>
                      <FileText className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-sm font-medium ${getLevelBadge(cert.level)}`}>
                    {cert.level.charAt(0).toUpperCase() + cert.level.slice(1)}
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="text-blue-600 font-medium text-sm mb-4">{cert.provider}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {cert.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {cert.participants}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {cert.completionRate}
                      </div>
                      <div className="text-blue-600 font-medium">{cert.nextBatch}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm text-center inline-block"
                      >
                        Enroll Now
                      </a>
                      <button className="px-4 py-3 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search certifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Level Filter */}
              <div>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="text-blue-600 text-sm font-medium mb-3">{cert.provider}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-lg border text-xs font-medium ${getLevelBadge(cert.level)}`}>
                        {cert.level}
                      </span>
                      <span className={`px-2 py-1 rounded-lg border text-xs font-medium ${getStatusBadge(cert.status)}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {cert.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No certifications found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                  Browse All Programs
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Catalog
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection