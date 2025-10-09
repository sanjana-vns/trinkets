'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Building, Award, Target, Zap, Globe, BookOpen, TrendingUp, Shield, CheckCircle, MapPin, Phone, Mail, Clock, Star, Sparkles, Rocket, Brain, Trophy, ChevronRight, Play, Code, Lightbulb, GraduationCap, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function SEOContentSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  }

  const industryTabs = [
    { 
      id: 0, 
      name: 'Oil & Gas', 
      icon: Globe, 
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    { 
      id: 1, 
      name: 'Construction', 
      icon: Building, 
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      id: 2, 
      name: 'HVAC Systems', 
      icon: Zap, 
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      id: 3, 
      name: 'Manufacturing', 
      icon: Target, 
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/60 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header with Creative Design */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 animate-spin" />
            Mumbai&apos;s #1 Engineering Institute
            <Sparkles className="w-4 h-4 ml-2 animate-spin" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Transform Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x">
              Engineering Dreams
            </span>
            <br />
            <span className="text-gray-900">Into Reality</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Join the elite league of engineers with cutting-edge training in structural design, MEP engineering, 
            and advanced CAD technologies. Where innovation meets excellence.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '5000+', label: 'Success Stories', icon: GraduationCap, color: 'text-blue-600' },
              { number: '95%', label: 'Dream Jobs', icon: Briefcase, color: 'text-green-600' },
              { number: '25+', label: 'Expert Courses', icon: BookOpen, color: 'text-purple-600' },
              { number: '₹8.5L', label: 'Avg Package', icon: Trophy, color: 'text-yellow-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revolutionary Course Cards */}
        <motion.div 
          className="mb-20"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Next-Generation Learning
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Master Tomorrow&apos;s 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Technologies Today</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into cutting-edge engineering disciplines with our immersive, hands-on training programs designed by industry veterans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Structural Mastery',
                subtitle: 'Buildings That Touch the Sky',
                description: 'Design skyscrapers, bridges, and mega structures with confidence using STAAD Pro and ETABS.',
                icon: Building,
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50',
                features: ['STAAD Pro Wizardry', 'ETABS Excellence', 'Seismic Design Secrets', 'Foundation Mastery'],
                link: '/courses/structural-design-analysis',
                delay: 0
              },
              {
                title: 'MEP Innovation',
                subtitle: 'Smart Building Solutions',
                description: 'Create intelligent building systems that breathe, think, and respond to human needs.',
                icon: Lightbulb,
                gradient: 'from-green-500 to-emerald-500',
                bgGradient: 'from-green-50 to-emerald-50',
                features: ['HVAC Intelligence', 'Electrical Mastery', 'Plumbing Precision', 'BIM Integration'],
                link: '/courses/mep-engineering',
                delay: 0.2
              },
              {
                title: 'Piping Artistry',
                subtitle: 'Industrial Flow Dynamics',
                description: 'Master the art of moving fluids through complex industrial systems with precision.',
                icon: Globe,
                gradient: 'from-purple-500 to-violet-500',
                bgGradient: 'from-purple-50 to-violet-50',
                features: ['SP3D Mastery', 'CAESAR II Pro', 'Process Excellence', 'Stress Analysis'],
                link: '/courses/piping-design-engineering',
                delay: 0.4
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={scaleOnHover}
              >
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${course.bgGradient} p-8 shadow-xl border border-white/20 transition-all duration-500 ${hoveredCard === index ? 'shadow-2xl' : ''}`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`}></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon with Glow Effect */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${course.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <course.icon className="w-8 h-8" />
                    </div>

                    {/* Title and Subtitle */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h4>
                    <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">{course.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient} mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link 
                      href={course.link} 
                      className={`inline-flex items-center justify-center w-full py-4 bg-gradient-to-r ${course.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Industry Tabs */}
        <motion.div 
          className="mb-20"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Industry Expertise Hub
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Where Theory Meets 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Real-World Impact</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore specialized training programs tailored for different industries, each designed to address real-world challenges and opportunities.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industryTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : `${tab.bgColor} ${tab.textColor} hover:scale-105`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.name}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900">Oil & Gas Mastery</h4>
                      <p className="text-orange-600 font-semibold">Energy Sector Excellence</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dive into the complex world of oil and gas engineering with specialized training in piping design, 
                    process engineering, and safety systems. Master the tools and techniques used in refineries, 
                    petrochemical plants, and offshore platforms.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Smart Plant 3D Design', 'CAESAR II Analysis', 'Process Flow Design', 'Safety Systems'].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl"></div>
                  <div className="relative p-8 space-y-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">₹12L+</div>
                    <p className="text-gray-600">Average Package in Oil & Gas</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Job Opportunities</span>
                        <span className="font-bold text-gray-900">Excellent</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Course Duration</span>
                        <span className="font-bold text-gray-900">6-8 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Skill Level</span>
                        <span className="font-bold text-gray-900">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900">Construction Excellence</h4>
                      <p className="text-blue-600 font-semibold">Building the Future</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Shape skylines and infrastructure with advanced structural engineering skills. Learn to design 
                    earthquake-resistant buildings, optimize material usage, and create sustainable construction solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['STAAD Pro Mastery', 'ETABS Modeling', 'Seismic Design', 'Green Buildings'].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl"></div>
                  <div className="relative p-8 space-y-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">₹8.5L+</div>
                    <p className="text-gray-600">Average Package in Construction</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Job Opportunities</span>
                        <span className="font-bold text-gray-900">Abundant</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Course Duration</span>
                        <span className="font-bold text-gray-900">4-6 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Skill Level</span>
                        <span className="font-bold text-gray-900">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900">HVAC Innovation</h4>
                      <p className="text-green-600 font-semibold">Climate Control Mastery</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Design intelligent climate control systems for modern buildings. Master energy-efficient HVAC design, 
                    smart automation, and sustainable building services that reduce environmental impact.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Load Calculations', 'Duct Design', 'Energy Modeling', 'Smart Controls'].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-2xl"></div>
                  <div className="relative p-8 space-y-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">₹7.5L+</div>
                    <p className="text-gray-600">Average Package in HVAC</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Job Opportunities</span>
                        <span className="font-bold text-gray-900">Growing</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Course Duration</span>
                        <span className="font-bold text-gray-900">3-5 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Skill Level</span>
                        <span className="font-bold text-gray-900">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900">Manufacturing 4.0</h4>
                      <p className="text-purple-600 font-semibold">Smart Factory Solutions</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Step into the future of manufacturing with Industry 4.0 technologies. Learn automation, robotics, 
                    IoT integration, and smart manufacturing processes that define modern production facilities.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['PLC Programming', 'SCADA Systems', 'Process Optimization', 'Quality Control'].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/10 rounded-2xl"></div>
                  <div className="relative p-8 space-y-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">₹9L+</div>
                    <p className="text-gray-600">Average Package in Manufacturing</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Job Opportunities</span>
                        <span className="font-bold text-gray-900">High Demand</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Course Duration</span>
                        <span className="font-bold text-gray-900">5-7 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Skill Level</span>
                        <span className="font-bold text-gray-900">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Career Development Section */}
        <motion.div 
          className="mb-20"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10 p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8">
                    <Rocket className="w-4 h-4 mr-2" />
                    Career Transformation Hub
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    From Learning to 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Leading</span>
                  </h3>
                  
                  <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                    Our comprehensive career ecosystem doesn&apos;t just teach you engineering – it transforms you into an industry leader. 
                    Join the ranks of engineers who are shaping the future of technology and infrastructure.
                  </p>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                      <div className="text-blue-200 text-sm">Industry Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">₹8.5L</div>
                      <div className="text-blue-200 text-sm">Avg. Starting Package</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/placements"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
                    >
                      <Trophy className="mr-2 w-5 h-5" />
                      Success Stories
                    </Link>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Career Consultation
                    </Link>
                  </div>
                </div>
                
                {/* Interactive Career Features */}
                <div className="space-y-6">
                  {[
                    {
                      title: 'AI-Powered Resume Building',
                      description: 'Create industry-optimized resumes that pass ATS filters and impress hiring managers.',
                      icon: Brain,
                      color: 'from-cyan-400 to-blue-500'
                    },
                    {
                      title: 'Mock Interview Mastery',
                      description: 'Practice with real interview scenarios and get personalized feedback from industry experts.',
                      icon: Users,
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      title: 'Industry Network Access',
                      description: 'Connect directly with hiring managers and senior engineers from top companies.',
                      icon: Shield,
                      color: 'from-purple-400 to-pink-500'
                    },
                    {
                      title: 'Lifetime Career Support',
                      description: 'Ongoing mentorship, skill updates, and career guidance throughout your professional journey.',
                      icon: Award,
                      color: 'from-yellow-400 to-orange-500'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Creative Contact & Location Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: 'Mumbai Training Hub',
              subtitle: 'Heart of Innovation',
              description: 'Located in the heart of Mumbai&apos;s business district with seamless connectivity.',
              icon: MapPin,
              gradient: 'from-blue-500 to-cyan-500',
              bgColor: 'from-blue-50 to-cyan-50',
              detail: 'Andheri West, Mumbai - 400053',
              feature: 'Metro & Train Connected'
            },
            {
              title: '24/7 Expert Support',
              subtitle: 'Always Here for You',
              description: 'Round-the-clock assistance for all your learning and career needs.',
              icon: Phone,
              gradient: 'from-green-500 to-emerald-500',
              bgColor: 'from-green-50 to-emerald-50',
              detail: '+91 98765 43210',
              feature: 'Instant Response Guaranteed'
            },
            {
              title: 'Flexible Learning',
              subtitle: 'Your Schedule, Your Pace',
              description: 'Choose from multiple batch timings designed for working professionals.',
              icon: Clock,
              gradient: 'from-purple-500 to-violet-500',
              bgColor: 'from-purple-50 to-violet-50',
              detail: 'Mon-Sun: 6 AM - 10 PM',
              feature: 'Weekend & Evening Batches'
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${contact.bgColor} p-8 shadow-xl border border-white/50 h-full`}>
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${contact.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${contact.gradient} opacity-10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700`}></div>
                </div>

                <div className="relative z-10 text-center">
                  {/* Animated Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${contact.gradient} text-white shadow-lg mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <contact.icon className="w-10 h-10" />
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{contact.title}</h4>
                  <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">{contact.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{contact.description}</p>

                  {/* Detail Box */}
                  <div className={`bg-gradient-to-r ${contact.gradient} text-white p-4 rounded-xl mb-4`}>
                    <div className="font-bold text-lg">{contact.detail}</div>
                    <div className="text-sm opacity-90">{contact.feature}</div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href="/contact"
                    className={`block w-full py-3 bg-gradient-to-r ${contact.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 text-center`}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Final Call-to-Action */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-12 lg:p-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

          <div className="relative z-10 text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Engineering Success Starts Here
              <Sparkles className="w-4 h-4 ml-2" />
            </div>

            {/* Main Heading */}
            <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Build Your 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Engineering Empire?
              </span>
            </h3>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the ranks of elite engineers who are designing tomorrow&apos;s world. Your journey from 
              aspiring engineer to industry leader begins with a single click.
            </p>

            {/* Interactive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {[
                { number: '5000+', label: 'Engineers Trained', icon: Users },
                { number: '95%', label: 'Placement Success', icon: Trophy },
                { number: '₹8.5L', label: 'Average Package', icon: TrendingUp },
                { number: '500+', label: 'Hiring Partners', icon: Building }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/courses" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Rocket className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explore Courses
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Free Career Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Placement Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}