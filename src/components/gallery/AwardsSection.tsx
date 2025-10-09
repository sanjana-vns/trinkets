'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Award, Trophy, Medal, Star, Calendar, MapPin, Users, Target, ExternalLink, Eye, Filter, Search } from 'lucide-react'

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Awards', count: 50 },
    { id: 'academic', label: 'Academic Excellence', count: 15 },
    { id: 'industry', label: 'Industry Recognition', count: 12 },
    { id: 'innovation', label: 'Innovation Awards', count: 10 },
    { id: 'leadership', label: 'Leadership', count: 8 },
    { id: 'community', label: 'Community Service', count: 5 }
  ]

  const featuredAwards = [
    {
      id: 1,
      title: "Best Engineering Institute of the Year 2024",
      organization: "National Education Council",
      date: "March 2024",
      category: "academic",
      level: "National",
      description: "Recognized for outstanding contribution to engineering education and industry partnerships.",
      image: "/images/gallery1.webp",
      color: "from-yellow-500 to-orange-500",
      impact: "15,000+ students benefited"
    },
    {
      id: 2,
      title: "Excellence in Placement Services",
      organization: "Industry Association of Engineers",
      date: "January 2024",
      category: "industry",
      level: "Industry",
      description: "Achieving 98% placement rate with top engineering companies and multinational corporations.",
      image: "/images/gallery2.webp",
      color: "from-blue-500 to-purple-500",
      impact: "2,500+ placements facilitated"
    },
    {
      id: 3,
      title: "Innovation in Technical Education",
      organization: "Ministry of Education",
      date: "November 2023",
      category: "innovation",
      level: "Government",
      description: "Pioneering approach to hands-on technical training and industry-ready curriculum development.",
      image: "/images/gallery3.webp",
      color: "from-green-500 to-teal-500",
      impact: "Revolutionary curriculum adopted"
    },
    {
      id: 4,
      title: "Outstanding Infrastructure Development",
      organization: "Educational Infrastructure Board",
      date: "October 2023",
      category: "innovation",
      level: "National",
      description: "State-of-the-art training facilities and advanced laboratory setup for hands-on learning.",
      image: "/images/gallery4.webp",
      color: "from-indigo-500 to-purple-500",
      impact: "Modern facilities for 5,000+ students"
    },
    {
      id: 5,
      title: "Excellence in Student Development",
      organization: "Student Welfare Association",
      date: "August 2023",
      category: "academic",
      level: "Regional",
      description: "Comprehensive student support programs and career development initiatives.",
      image: "/images/gallery1.webp",
      color: "from-rose-500 to-pink-500",
      impact: "Holistic development programs"
    }
  ]

  const allAwards = [
    {
      id: 4,
      title: "Outstanding Faculty Development Program",
      organization: "Technical Education Board",
      date: "September 2023",
      category: "academic",
      level: "State",
      description: "Comprehensive faculty training and development initiatives.",
      badge: "Faculty Excellence"
    },
    {
      id: 5,
      title: "Best Industry-Academia Partnership",
      organization: "Engineering Council",
      date: "July 2023",
      category: "industry",
      level: "Regional",
      description: "Strongest industry collaborations and internship programs.",
      badge: "Partnership Award"
    },
    {
      id: 6,
      title: "Digital Innovation in Education",
      organization: "EdTech Alliance",
      date: "May 2023",
      category: "innovation",
      level: "National",
      description: "Leading digital transformation in technical education.",
      badge: "Innovation Leader"
    },
    {
      id: 7,
      title: "Community Outreach Excellence",
      organization: "Social Development Council",
      date: "March 2023",
      category: "community",
      level: "Regional",
      description: "Impactful community service and rural development initiatives.",
      badge: "Community Champion"
    },
    {
      id: 8,
      title: "Leadership in Technical Training",
      organization: "Skill Development Authority",
      date: "January 2023",
      category: "leadership",
      level: "State",
      description: "Excellence in skill development and vocational training programs.",
      badge: "Leadership Excellence"
    },
    {
      id: 9,
      title: "Green Campus Initiative Award",
      organization: "Environmental Education Council",
      date: "December 2022",
      category: "innovation",
      level: "National",
      description: "Sustainable campus development and environmental consciousness.",
      badge: "Eco Champion"
    }
  ]

  const filteredAwards = allAwards.filter(award => {
    const matchesCategory = selectedCategory === 'all' || award.category === selectedCategory
    const matchesSearch = award.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         award.organization.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'National': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
      case 'Government': return 'bg-purple-500/20 text-purple-400 border-purple-400/30'
      case 'Industry': return 'bg-blue-500/20 text-blue-400 border-blue-400/30'
      case 'State': return 'bg-green-500/20 text-green-400 border-green-400/30'
      case 'Regional': return 'bg-orange-500/20 text-orange-400 border-orange-400/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30'
    }
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
            <Award className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-yellow-700 text-sm font-medium">Awards & Recognition</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Celebrating Our
            <span className="block bg-gradient-to-r from-yellow-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized through numerous prestigious awards 
            and accolades from industry leaders, government bodies, and educational institutions.
          </p>
        </motion.div>

        {/* Featured Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Awards</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {featuredAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 20%' }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyDebvlGkn9f3K4//2Q=="
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-80 flex items-center justify-center`}>
                      <Trophy className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-sm font-medium ${getLevelColor(award.level)}`}>
                    {award.level}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h4>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {award.organization}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {award.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      <Users className="w-4 h-4 mr-1" />
                      {award.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search awards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 w-72"
              />
            </div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {award.title}
                      </h4>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {award.organization}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {award.date}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-lg border text-xs font-medium ${getLevelColor(award.level)}`}>
                      {award.level}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {award.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {award.badge}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredAwards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Medal className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No awards found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Load More Button */}
        {filteredAwards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Awards
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default AwardsSection