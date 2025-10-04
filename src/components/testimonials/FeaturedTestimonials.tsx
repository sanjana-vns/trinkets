'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, Play, ArrowRight, ArrowLeft, Users, Calendar, MapPin, TrendingUp, Award, CheckCircle, ExternalLink } from 'lucide-react'

const FeaturedTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedStory, setSelectedStory] = useState(0)
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'All Stories', count: 12 },
    { id: 'mechanical', label: 'Mechanical', count: 4 },
    { id: 'electrical', label: 'Electrical', count: 3 },
    { id: 'civil', label: 'Civil', count: 3 },
    { id: 'piping', label: 'Piping', count: 2 }
  ]

  const featuredStories = [
    {
      id: 1,
      category: 'mechanical',
      name: "Rahul Krishnan",
      role: "Senior Design Engineer", 
      company: "Tata Motors",
      location: "Pune, Maharashtra",
      experience: "5 years",
      course: "Advanced Mechanical Design",
      duration: "6 months",
      beforeSalary: "₹3.5 LPA",
      afterSalary: "₹12 LPA",
      salaryIncrease: "243%",
      joinDate: "January 2023",
      placement: "March 2023",
      rating: 5,
      testimonialFull: "I was stuck in a low-paying job with no growth opportunities. The mechanical design course at Trinkets Institute was a game-changer. The hands-on training with industry-standard software and real projects gave me the confidence to apply for senior positions. Within 2 months of completing the course, I landed a job at Tata Motors with a 243% salary increase.",
      achievements: [
        "Led design team for 3 major automotive projects",
        "Optimized manufacturing process saving ₹5 crores annually",
        "Mentoring 5 junior engineers",
        "Filed 2 patents in automotive design"
      ],
      skills: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "GD&T"],
      background: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      category: 'piping',
      name: "Anjali Verma",
      role: "Lead Piping Engineer",
      company: "IOCL Refinery",
      location: "Mathura, UP",
      experience: "4 years",
      course: "Piping Design & Stress Analysis",
      duration: "4 months",
      beforeSalary: "₹4 LPA",
      afterSalary: "₹15 LPA",
      salaryIncrease: "275%",
      joinDate: "August 2022",
      placement: "December 2022",
      rating: 5,
      testimonialFull: "As a female engineer in the oil & gas sector, I faced many challenges. The comprehensive piping design course at Trinkets Institute not only taught me technical skills but also boosted my confidence. Learning CAESAR II, SP3D, and stress analysis opened doors I never thought possible.",
      achievements: [
        "Designed piping systems for 2 major refineries",
        "Reduced material costs by 15% through optimization",
        "Led safety improvements preventing major incidents",
        "Received Excellence Award from IOCL management"
      ],
      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD", "Piping Stress Analysis"],
      background: "from-purple-600 to-pink-600"
    }
  ]

  const filteredStories = activeTab === 'all' 
    ? featuredStories 
    : featuredStories.filter(story => story.category === activeTab)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setSelectedStory(0)
  }, [activeTab])

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
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">
            <Quote className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Featured Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Students,
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Transformations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into detailed success stories of our students who transformed their careers 
            with industry-focused training and secured positions at top engineering companies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-0.5 bg-black/10 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Story Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${filteredStories[selectedStory]?.background || 'from-blue-600 to-indigo-600'} p-8 text-white`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-white/10 flex items-center justify-center">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.name}</h3>
                      <p className="text-white/90 mb-1">{filteredStories[selectedStory]?.role}</p>
                      <p className="text-white/80 text-sm">{filteredStories[selectedStory]?.company}</p>
                    </div>
                  </div>
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.salaryIncrease}</div>
                    <div className="text-white/80 text-sm">Salary Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.experience}</div>
                    <div className="text-white/80 text-sm">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.duration}</div>
                    <div className="text-white/80 text-sm">Training Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      {[...Array(filteredStories[selectedStory]?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <div className="text-white/80 text-sm">Rating</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Testimonial */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "{filteredStories[selectedStory]?.testimonialFull}"
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-purple-500 mr-2" />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {filteredStories[selectedStory]?.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredStories[selectedStory]?.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video Story
                  </button>
                  <button className="px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center space-x-4 mt-12"
        >
          <button
            onClick={() => setSelectedStory(Math.max(0, selectedStory - 1))}
            disabled={selectedStory === 0}
            className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <span className="text-gray-600">
            {selectedStory + 1} of {filteredStories.length}
          </span>
          
          <button
            onClick={() => setSelectedStory(Math.min(filteredStories.length - 1, selectedStory + 1))}
            disabled={selectedStory === filteredStories.length - 1}
            className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedTestimonials