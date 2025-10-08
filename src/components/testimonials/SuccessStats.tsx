'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Users, Award, Target, Building2, MapPin, Calendar, Trophy, Star, CheckCircle, ArrowUpRight } from 'lucide-react'

const SuccessStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    studentsPlaced: 0,
    averageSalary: 0,
    companies: 0,
    placementRate: 0,
    experience: 0,
    satisfaction: 0
  })

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: 5000,
      suffix: '+',
      label: 'Students Placed',
      description: 'Successful career transformations',
      color: 'blue',
      trend: '+15% this year'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      number: 8.5,
      suffix: ' LPA',
      label: 'Average Salary',
      description: 'Starting package after training',
      color: 'green',
      trend: '+22% increase'
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-500" />,
      number: 500,
      suffix: '+',
      label: 'Partner Companies',
      description: 'Industry hiring partners',
      color: 'purple',
      trend: 'Top MNCs included'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      number: 96,
      suffix: '%',
      label: 'Placement Rate',
      description: 'Students placed within 6 months',
      color: 'orange',
      trend: 'Industry leading'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Training industry professionals',
      color: 'yellow',
      trend: 'Proven expertise'
    },
    {
      icon: <Star className="w-8 h-8 text-pink-500" />,
      number: 4.9,
      suffix: '/5',
      label: 'Student Rating',
      description: 'Average satisfaction score',
      color: 'pink',
      trend: '2000+ reviews'
    }
  ]

  const achievements = [
    {
      title: 'Best Training Institute 2024',
      organization: 'Engineering Excellence Awards',
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      year: '2024'
    },
    {
      title: 'Highest Placement Rate',
      organization: 'Technical Education Board',
      icon: <Target className="w-6 h-6 text-green-500" />,
      year: '2023-24'
    },
    {
      title: 'Industry Partnership Excellence',
      organization: 'Professional Engineering Council',
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      year: '2024'
    },
    {
      title: 'Student Satisfaction Leader',
      organization: 'Education Quality Assessment',
      icon: <Star className="w-6 h-6 text-purple-500" />,
      year: '2024'
    }
  ]

  const topRecruiters = [
    { name: 'Reliance Industries', positions: '250+ hired' },
    { name: 'Tata Consultancy Services', positions: '180+ hired' },
    { name: 'Larsen & Toubro', positions: '220+ hired' },
    { name: 'ONGC', positions: '150+ hired' },
    { name: 'Infosys', positions: '190+ hired' },
    { name: 'Wipro', positions: '160+ hired' },
    { name: 'HCL Technologies', positions: '140+ hired' },
    { name: 'Tech Mahindra', positions: '130+ hired' }
  ]

  const startCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const countersData = [
      { key: 'studentsPlaced', target: 5000 },
      { key: 'averageSalary', target: 8.5 },
      { key: 'companies', target: 500 },
      { key: 'placementRate', target: 96 },
      { key: 'experience', target: 15 },
      { key: 'satisfaction', target: 4.9 }
    ]

    countersData.forEach(({ key, target }) => {
      let current = 0
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({
          ...prev,
          [key]: key === 'averageSalary' || key === 'satisfaction' ? 
            parseFloat(current.toFixed(1)) : Math.floor(current)
        }))
      }, stepDuration)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('success-stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="success-stats" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-400/20 mb-6">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-medium">Success Metrics</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Track Record of
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the success of our students. 
            These numbers tell the story of thousands of transformed careers and fulfilled dreams.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(stat.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {index === 0 && counters.studentsPlaced.toLocaleString()}
                    {index === 1 && counters.averageSalary}
                    {index === 2 && counters.companies.toLocaleString()}
                    {index === 3 && counters.placementRate}
                    {index === 4 && counters.experience}
                    {index === 5 && counters.satisfaction}
                    <span className="text-2xl text-gray-600">{stat.suffix}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? '100%' : 0 }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${getColorClasses(stat.color)} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-2xl">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                <span className="text-blue-600 text-sm font-medium">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Top Recruiting Partners</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our students are placed in leading companies across various industries, 
              from multinational corporations to innovative startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRecruiters.map((recruiter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white mb-1">{recruiter.name}</h4>
                    <p className="text-blue-200 text-sm">{recruiter.positions}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/placements">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
                View All Recruiters
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Join Our Success Story?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These numbers represent real people who transformed their careers with us. 
              Your success story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-center">
                Start Your Journey
              </Link>
              <Link href="/placements" className="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-center">
                View Placement Records
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStats