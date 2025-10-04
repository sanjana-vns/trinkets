'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Filter, Search, Play, ThumbsUp, MessageSquare, Calendar, User, Award, CheckCircle, ExternalLink } from 'lucide-react'

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 6

  const filters = [
    { id: 'all', label: 'All Reviews', count: 150 },
    { id: 'mechanical', label: 'Mechanical', count: 45 },
    { id: 'electrical', label: 'Electrical', count: 38 },
    { id: 'civil', label: 'Civil', count: 32 },
    { id: 'piping', label: 'Piping', count: 25 },
    { id: 'software', label: 'Software', count: 10 }
  ]

  const ratingFilters = [
    { id: 'all', label: 'All Ratings' },
    { id: '5', label: '5 Stars' },
    { id: '4', label: '4+ Stars' },
    { id: '3', label: '3+ Stars' }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Arjun Mehta',
      role: 'Mechanical Engineer',
      company: 'Bajaj Auto',
      course: 'Advanced Mechanical Design',
      rating: 5,
      date: '2024-03-15',
      review: 'Exceptional training program! The hands-on approach and real industry projects prepared me perfectly for my role at Bajaj Auto. The instructors are true industry experts who share practical insights that you won\'t find in textbooks. Highly recommend for anyone looking to excel in mechanical engineering.',
      likes: 24,
      helpful: 18,
      verified: true,
      category: 'mechanical',
      avatar: '/api/placeholder/60/60',
      achievements: ['Placed at Bajaj Auto', '50% Salary Increase', 'Team Lead Role']
    },
    {
      id: 2,
      name: 'Priyanka Sharma',
      role: 'Piping Engineer',
      company: 'L&T Hydrocarbon',
      course: 'Piping Design & Stress Analysis',
      rating: 5,
      date: '2024-02-20',
      review: 'The piping course transformed my career completely. CAESAR II and SP3D training was comprehensive and practical. Within 3 months of completion, I secured a position at L&T Hydrocarbon with 80% salary hike. The placement support was outstanding!',
      likes: 31,
      helpful: 25,
      verified: true,
      category: 'piping',
      avatar: '/api/placeholder/60/60',
      achievements: ['L&T Hydrocarbon', '80% Salary Hike', 'CAESAR II Certified']
    },
    {
      id: 3,
      name: 'Rohit Patel',
      role: 'Electrical Engineer',
      company: 'Siemens',
      course: 'Power System Design',
      rating: 5,
      date: '2024-01-10',
      review: 'Outstanding curriculum covering all aspects of power system design. The ETAP and MATLAB training was excellent. Faculty members are highly experienced and always available for doubt clearing. Got placed at Siemens with a fantastic package!',
      likes: 19,
      helpful: 15,
      verified: true,
      category: 'electrical',
      avatar: '/api/placeholder/60/60',
      achievements: ['Siemens Placement', 'ETAP Expert', 'Power Systems Lead']
    },
    {
      id: 4,
      name: 'Deepika Nair',
      role: 'Structural Engineer',
      company: 'DLF',
      course: 'Structural Engineering & Design',
      rating: 5,
      date: '2023-12-05',
      review: 'The structural design course exceeded my expectations. STAAD Pro and ETABS training was thorough with real project scenarios. The placement assistance team worked tirelessly to get me placed at DLF. Forever grateful!',
      likes: 27,
      helpful: 22,
      verified: true,
      category: 'civil',
      avatar: '/api/placeholder/60/60',
      achievements: ['DLF Placement', 'STAAD Pro Expert', 'High-rise Projects']
    },
    {
      id: 5,
      name: 'Karan Singh',
      role: 'CAD Designer',
      company: 'Mahindra',
      course: 'Mechanical Design',
      rating: 4,
      date: '2023-11-18',
      review: 'Great institute for practical learning. The SolidWorks and CATIA training was comprehensive. Faculty is supportive and placement team is proactive. Successfully placed at Mahindra with good growth opportunities.',
      likes: 16,
      helpful: 12,
      verified: true,
      category: 'mechanical',
      avatar: '/api/placeholder/60/60',
      achievements: ['Mahindra Placement', 'CAD Expert', 'Design Innovation']
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      role: 'Project Engineer',
      company: 'Larsen & Toubro',
      course: 'Civil Engineering Design',
      rating: 5,
      date: '2023-10-25',
      review: 'Excellent training quality and placement support. The course covered all essential civil engineering software and practical applications. The mock interviews and resume building sessions were very helpful.',
      likes: 21,
      helpful: 17,
      verified: true,
      category: 'civil',
      avatar: '/api/placeholder/60/60',
      achievements: ['L&T Placement', 'Project Management', 'Site Engineer']
    }
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesCategory = selectedFilter === 'all' || review.category === selectedFilter
    const matchesRating = selectedRating === 'all' || 
      (selectedRating === '5' && review.rating === 5) ||
      (selectedRating === '4' && review.rating >= 4) ||
      (selectedRating === '3' && review.rating >= 3)
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.review.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesRating && matchesSearch
  })

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage)
  const startIndex = (currentPage - 1) * reviewsPerPage
  const currentReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedFilter, selectedRating, searchTerm])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-6">
            <MessageSquare className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-yellow-700 text-sm font-medium">Student Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Really Think
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Honest feedback from real students who completed our training programs. 
            Their success stories and experiences speak for the quality of our education.
          </p>
        </motion.div>

        {/* Overall Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-600">Overall Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Placement Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search reviews by name, company, or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Course Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                >
                  {filters.map((filter) => (
                    <option key={filter.id} value={filter.id}>
                      {filter.label} ({filter.count})
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Rating Filter */}
              <div>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                >
                  {ratingFilters.map((filter) => (
                    <option key={filter.id} value={filter.id}>
                      {filter.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{review.role}</p>
                      <p className="text-gray-500 text-sm">{review.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-400 text-xs">{review.date}</p>
                  </div>
                </div>

                {/* Course Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {review.course}
                  </span>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-gray-300 mb-2" />
                  <p className="text-gray-700 leading-relaxed italic">
                    {review.review}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {review.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-green-600 transition-colors">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center space-x-4"
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Share Your Success Story</h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Are you a Trinkets Institute graduate? We&apos;d love to hear about your journey 
              and share your success with future students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                Write a Review
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Submit Video Testimonial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection