'use client''use client''use client''use client'

import { useState } from 'react'

import { motion } from 'framer-motion'import { useState, useEffect } from 'react'

import { Quote, Star, Users, Calendar, MapPin, Award } from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'import { useState, useEffect } from 'react'import { useState, useEffect } from 'react'

export default function FeaturedTestimonials() {

  const [selectedStory, setSelectedStory] = useState(0)import { Quote, Star, ArrowRight, ArrowLeft, Users, Calendar, MapPin, TrendingUp, Award, CheckCircle } from 'lucide-react'



  const stories = [import { motion, AnimatePresence } from 'framer-motion'import { motion, AnimatePresence } from 'framer-motion'

    {

      name: "Rahul Krishnan",const FeaturedTestimonials = () => {

      role: "Senior Design Engineer", 

      company: "Tata Motors",  const [isVisible, setIsVisible] = useState(false)import { Quote, Star, ArrowRight, ArrowLeft, Users, Calendar, MapPin, TrendingUp, Award, CheckCircle } from 'lucide-react'import { Quote, Star, ArrowRight, ArrowLeft, Users, Calendar, MapPin, TrendingUp, Award, CheckCircle } from 'lucide-react'

      location: "Pune, Maharashtra",

      course: "Mechanical Design with SolidWorks",  const [selectedStory, setSelectedStory] = useState(0)

      beforeSalary: "₹3.5 LPA",

      afterSalary: "₹12 LPA",  const [activeTab, setActiveTab] = useState('all')

      increase: "243%",

      rating: 5,

      testimonial: "The mechanical design course at Trinkets Institute was a game-changer. Within 2 months of completing the course, I landed a job at Tata Motors with a 243% salary increase.",

      achievements: ["Led 3 major automotive projects", "Saved ₹5 crores annually", "Mentoring 5 engineers", "Filed 2 patents"],  const categories = [const FeaturedTestimonials = () => {const FeaturedTestimonials = () => {

      skills: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD"],

      background: "from-blue-600 to-indigo-600"    { id: 'all', label: 'All Stories', count: 6 },

    },

    {    { id: 'mechanical', label: 'Mechanical', count: 2 },  const [isVisible, setIsVisible] = useState(false)  const [isVisible, setIsVisible] = useState(false)

      name: "Anjali Verma",

      role: "Lead Piping Engineer",    { id: 'electrical', label: 'Electrical', count: 2 },

      company: "IOCL Refinery",

      location: "Mathura, UP",    { id: 'civil', label: 'Civil', count: 1 },  const [selectedStory, setSelectedStory] = useState(0)  const [selectedStory, setSelectedStory] = useState(0)

      course: "Piping Design & Stress Analysis",

      beforeSalary: "₹4 LPA",    { id: 'piping', label: 'Piping', count: 1 }

      afterSalary: "₹15 LPA",

      increase: "275%",  ]  const [activeTab, setActiveTab] = useState('all')  const [activeTab, setActiveTab] = useState('all')

      rating: 5,

      testimonial: "The comprehensive piping design course boosted my confidence. Learning CAESAR II and SP3D opened doors I never thought possible.",

      achievements: ["Designed 2 major refineries", "Reduced costs by 15%", "Led safety improvements", "Excellence Award"],

      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD"],  const featuredStories = [

      background: "from-purple-600 to-pink-600"

    },    {

    {

      name: "Suresh Patil",      id: 1,  const categories = [  const categories = [

      role: "Electrical Design Engineer",

      company: "L&T Electrical & Automation",      category: 'mechanical',

      location: "Mumbai, Maharashtra",

      course: "Electrical Design Engineering",      name: "Rahul Krishnan",    { id: 'all', label: 'All Stories', count: 6 },    { id: 'all', label: 'All Stories', count: 6 },

      beforeSalary: "₹3 LPA",

      afterSalary: "₹10 LPA",      role: "Senior Design Engineer", 

      increase: "233%",

      rating: 5,      company: "Tata Motors",    { id: 'mechanical', label: 'Mechanical', count: 2 },    { id: 'mechanical', label: 'Mechanical', count: 2 },

      testimonial: "Trinkets Institute's electrical design course gave me industry-level expertise in power distribution and automation.",

      achievements: ["10+ industrial projects", "₹2 crores savings", "Schneider certified", "Leading 8 technicians"],      location: "Pune, Maharashtra",

      skills: ["AutoCAD Electrical", "ETAP", "PLC", "SCADA"],

      background: "from-green-600 to-teal-600"      experience: "5 years",    { id: 'electrical', label: 'Electrical', count: 2 },    { id: 'electrical', label: 'Electrical', count: 2 },

    }

  ]      course: "Advanced Mechanical Design with SolidWorks",



  return (      duration: "6 months",    { id: 'civil', label: 'Civil', count: 1 },    { id: 'civil', label: 'Civil', count: 1 },

    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <div className="container mx-auto px-4">      beforeSalary: "₹3.5 LPA",

        <motion.div

          initial={{ opacity: 0, y: 30 }}      afterSalary: "₹12 LPA",    { id: 'piping', label: 'Piping', count: 1 }    { id: 'piping', label: 'Piping', count: 1 }

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}      salaryIncrease: "243%",

          className="text-center mb-16"

        >      joinDate: "January 2023",  ]  ]

          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/20 mb-6">

            <Quote className="w-5 h-5 text-blue-600 mr-2" />      placement: "March 2023",

            <span className="text-blue-700 text-sm font-medium">Success Stories</span>

          </div>      rating: 5,

          

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">      testimonialFull: "I was stuck in a low-paying job with no growth opportunities. The mechanical design course at Trinkets Institute was a game-changer. The hands-on training with industry-standard software and real projects gave me the confidence to apply for senior positions. Within 2 months of completing the course, I landed a job at Tata Motors with a 243% salary increase.",

            Real Students,

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">      achievements: [  const featuredStories = [  const featuredStories = [

              Real Transformations

            </span>        "Led design team for 3 major automotive projects",

          </h2>

                  "Optimized manufacturing process saving ₹5 crores annually",    {    {

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            Success stories of students who transformed their careers with industry-focused training.        "Mentoring 5 junior engineers",

          </p>

        </motion.div>        "Filed 2 patents in automotive design"      id: 1,      id: 1,



        <div className="max-w-4xl mx-auto">      ],

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className={`bg-gradient-to-r ${stories[selectedStory].background} p-8 text-white`}>      skills: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "GD&T"],      category: 'mechanical',      category: 'mechanical',

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

                <div className="mb-6 lg:mb-0">      background: "from-blue-600 to-indigo-600"

                  <div className="flex items-center mb-4">

                    {[...Array(5)].map((_, i) => (    },      name: "Rahul Krishnan",      name: "Rahul Krishnan",

                      <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />

                    ))}    {

                  </div>

                  <h3 className="text-3xl font-bold mb-2">{stories[selectedStory].name}</h3>      id: 2,      role: "Senior Design Engineer",       role: "Senior Design Engineer", 

                  <p className="text-lg opacity-90 mb-2">{stories[selectedStory].role}</p>

                  <p className="opacity-80">{stories[selectedStory].company}</p>      category: 'piping',

                </div>

                      name: "Anjali Verma",      company: "Tata Motors",      company: "Tata Motors",

                <div className="text-right">

                  <div className="text-4xl font-bold mb-2">+{stories[selectedStory].increase}</div>      role: "Lead Piping Engineer",

                  <div className="opacity-90">Salary Growth</div>

                </div>      company: "IOCL Refinery",      location: "Pune, Maharashtra",      location: "Pune, Maharashtra",

              </div>

            </div>      location: "Mathura, UP",



            <div className="p-8">      experience: "4 years",      experience: "5 years",      experience: "5 years",

              <div className="grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">      course: "Piping Design & Stress Analysis (SP3D + CAESAR II)",

                  <Quote className="w-8 h-8 text-blue-600 mb-4" />

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">      duration: "4 months",      course: "Advanced Mechanical Design with SolidWorks",      course: "Advanced Mechanical Design with SolidWorks",

                    "{stories[selectedStory].testimonial}"

                  </p>      beforeSalary: "₹4 LPA",

                  

                  <div className="mb-6">      afterSalary: "₹15 LPA",      duration: "6 months",      duration: "6 months",

                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">

                      <Award className="w-5 h-5 text-blue-600 mr-2" />      salaryIncrease: "275%",

                      Key Achievements

                    </h4>      joinDate: "August 2022",      beforeSalary: "₹3.5 LPA",      beforeSalary: "₹3.5 LPA",

                    <ul className="space-y-2">

                      {stories[selectedStory].achievements.map((achievement, idx) => (      placement: "December 2022",

                        <li key={idx} className="flex items-start">

                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>      rating: 5,      afterSalary: "₹12 LPA",      afterSalary: "₹12 LPA",

                          <span className="text-gray-600 text-sm">{achievement}</span>

                        </li>      testimonialFull: "As a female engineer in the oil & gas sector, I faced many challenges. The comprehensive piping design course at Trinkets Institute not only taught me technical skills but also boosted my confidence. Learning CAESAR II, SP3D, and stress analysis opened doors I never thought possible. The placement support was exceptional.",

                      ))}

                    </ul>      achievements: [      salaryIncrease: "243%",      salaryIncrease: "243%",

                  </div>

        "Designed piping systems for 2 major refineries",

                  <div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>        "Reduced material costs by 15% through optimization",      joinDate: "January 2023",      joinDate: "January 2023",

                    <div className="flex flex-wrap gap-2">

                      {stories[selectedStory].skills.map((skill, idx) => (        "Led safety improvements preventing major incidents",

                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">

                          {skill}        "Received Excellence Award from IOCL management"      placement: "March 2023",      placement: "March 2023",

                        </span>

                      ))}      ],

                    </div>

                  </div>      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD", "Piping Stress Analysis"],      rating: 5,      rating: 5,

                </div>

      background: "from-purple-600 to-pink-600"

                <div className="lg:col-span-1 space-y-6">

                  <div className="bg-gray-50 rounded-2xl p-6">    },      testimonialFull: "I was stuck in a low-paying job with no growth opportunities. The mechanical design course at Trinkets Institute was a game-changer. The hands-on training with industry-standard software and real projects gave me the confidence to apply for senior positions. Within 2 months of completing the course, I landed a job at Tata Motors with a 243% salary increase.",      testimonialFull: "I was stuck in a low-paying job with no growth opportunities. The mechanical design course at Trinkets Institute was a game-changer. The hands-on training with industry-standard software and real projects gave me the confidence to apply for senior positions. Within 2 months of completing the course, I landed a job at Tata Motors with a 243% salary increase.",

                    <h4 className="font-semibold text-gray-900 mb-4">Career Journey</h4>

                    <div className="space-y-4">    {

                      <div>

                        <div className="text-sm text-gray-500">Before</div>      id: 3,      achievements: [      achievements: [

                        <div className="text-lg font-semibold text-red-600">{stories[selectedStory].beforeSalary}</div>

                      </div>      category: 'electrical',

                      <div>

                        <div className="text-sm text-gray-500">After</div>      name: "Suresh Patil",        "Led design team for 3 major automotive projects",        "Led design team for 3 major automotive projects",

                        <div className="text-lg font-semibold text-green-600">{stories[selectedStory].afterSalary}</div>

                      </div>      role: "Electrical Design Engineer",

                    </div>

                  </div>      company: "L&T Electrical & Automation",        "Optimized manufacturing process saving ₹5 crores annually",        "Optimized manufacturing process saving ₹5 crores annually",



                  <div className="space-y-3 text-sm">      location: "Mumbai, Maharashtra",

                    <div className="flex items-center text-gray-600">

                      <Calendar className="w-4 h-4 mr-2" />      experience: "3 years",        "Mentoring 5 junior engineers",        "Mentoring 5 junior engineers",

                      Course: {stories[selectedStory].course}

                    </div>      course: "Electrical Design Engineering with AutoCAD Electrical",

                    <div className="flex items-center text-gray-600">

                      <MapPin className="w-4 h-4 mr-2" />      duration: "5 months",        "Filed 2 patents in automotive design"        "Filed 2 patents in automotive design"

                      {stories[selectedStory].location}

                    </div>      beforeSalary: "₹3 LPA",

                    <div className="flex items-center text-gray-600">

                      <Users className="w-4 h-4 mr-2" />      afterSalary: "₹10 LPA",      ],      ],

                      Industry Professional

                    </div>      salaryIncrease: "233%",

                  </div>

                </div>      joinDate: "June 2023",      skills: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "GD&T"],      skills: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "GD&T"],

              </div>

            </div>      placement: "November 2023",

          </div>

        </div>      rating: 5,      background: "from-blue-600 to-indigo-600"      background: "from-blue-600 to-indigo-600"



        <div className="flex justify-center items-center space-x-4 mt-8">      testimonialFull: "After my B.E. Electrical, I was working in a small company with limited exposure. Trinkets Institute's electrical design course gave me industry-level expertise in power distribution, control systems, and automation. The practical projects and industry mentorship helped me secure a position at L&T.",

          <div className="flex space-x-2">

            {stories.map((_, idx) => (      achievements: [    },    },

              <button

                key={idx}        "Designed electrical systems for 10+ industrial projects",

                onClick={() => setSelectedStory(idx)}

                className={`w-3 h-3 rounded-full transition-all duration-300 ${        "Implemented energy-saving solutions worth ₹2 crores",    {    {

                  idx === selectedStory ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'

                }`}        "Certified in Schneider Electric automation systems",

              />

            ))}        "Leading a team of 8 electrical technicians"      id: 2,      id: 2,

          </div>

        </div>      ],

      </div>

    </section>      skills: ["AutoCAD Electrical", "ETAP", "PLC Programming", "SCADA", "Power System Design"],      category: 'piping',      category: 'piping',

  )

}      background: "from-green-600 to-teal-600"

    },      name: "Anjali Verma",      name: "Anjali Verma",

    {

      id: 4,      role: "Lead Piping Engineer",      role: "Lead Piping Engineer",

      category: 'civil',

      name: "Priya Agarwal",      company: "IOCL Refinery",      company: "IOCL Refinery",

      role: "Structural Design Engineer",

      company: "DLF Construction",      location: "Mathura, UP",      location: "Mathura, UP",

      location: "Gurgaon, Haryana",

      experience: "4 years",      experience: "4 years",      experience: "4 years",

      course: "Structural Design & Analysis (STAAD Pro + ETABS)",

      duration: "4 months",      course: "Piping Design & Stress Analysis (SP3D + CAESAR II)",      course: "Piping Design & Stress Analysis (SP3D + CAESAR II)",

      beforeSalary: "₹3.2 LPA",

      afterSalary: "₹11 LPA",      duration: "4 months",      duration: "4 months",

      salaryIncrease: "244%",

      joinDate: "September 2022",      beforeSalary: "₹4 LPA",      beforeSalary: "₹4 LPA",

      placement: "January 2023",

      rating: 5,      afterSalary: "₹15 LPA",      afterSalary: "₹15 LPA",

      testimonialFull: "The structural engineering course at Trinkets Institute transformed my understanding of building design. From basic concepts to advanced analysis using STAAD Pro and ETABS, everything was covered with real-world examples. The faculty's industry experience made all the difference.",

      achievements: [      salaryIncrease: "275%",      salaryIncrease: "275%",

        "Designed structures for 15+ high-rise buildings",

        "Optimized steel usage reducing costs by 12%",      joinDate: "August 2022",      joinDate: "August 2022",

        "Specialist in seismic-resistant design",

        "Received Best Young Engineer Award 2024"      placement: "December 2022",      placement: "December 2022",

      ],

      skills: ["STAAD Pro", "ETABS", "SAFE", "AutoCAD", "Revit Structure"],      rating: 5,      rating: 5,

      background: "from-orange-600 to-red-600"

    },      testimonialFull: "As a female engineer in the oil & gas sector, I faced many challenges. The comprehensive piping design course at Trinkets Institute not only taught me technical skills but also boosted my confidence. Learning CAESAR II, SP3D, and stress analysis opened doors I never thought possible. The placement support was exceptional.",      testimonialFull: "As a female engineer in the oil & gas sector, I faced many challenges. The comprehensive piping design course at Trinkets Institute not only taught me technical skills but also boosted my confidence. Learning CAESAR II, SP3D, and stress analysis opened doors I never thought possible. The placement support was exceptional.",

    {

      id: 5,      achievements: [      achievements: [

      category: 'mechanical',

      name: "Vikram Singh",        "Designed piping systems for 2 major refineries",        "Designed piping systems for 2 major refineries",

      role: "HVAC Design Engineer",

      company: "Blue Star Engineering",        "Reduced material costs by 15% through optimization",        "Reduced material costs by 15% through optimization",

      location: "Chennai, Tamil Nadu",

      experience: "3 years",        "Led safety improvements preventing major incidents",        "Led safety improvements preventing major incidents",

      course: "HVAC System Design & Energy Management",

      duration: "3 months",        "Received Excellence Award from IOCL management"        "Received Excellence Award from IOCL management"

      beforeSalary: "₹3.8 LPA",

      afterSalary: "₹12 LPA",      ],      ],

      salaryIncrease: "216%",

      joinDate: "April 2023",      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD", "Piping Stress Analysis"],      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD", "Piping Stress Analysis"],

      placement: "July 2023",

      rating: 5,      background: "from-purple-600 to-pink-600"      background: "from-purple-600 to-pink-600"

      testimonialFull: "Working in a generic mechanical role, I wanted to specialize in HVAC. Trinkets Institute's comprehensive HVAC course covered everything from load calculations to energy optimization. The hands-on training with industry software prepared me for real challenges at Blue Star.",

      achievements: [    },    },

        "Designed HVAC systems for 25+ commercial buildings",

        "Achieved 20% energy savings in 5 major projects",    {    {

        "Certified in Carrier HAP and Trane TRACE",

        "Leading HVAC optimization for smart buildings"      id: 3,      id: 3,

      ],

      skills: ["Carrier HAP", "Trane TRACE", "AutoCAD MEP", "Energy Modeling", "CFD Analysis"],      category: 'electrical',      category: 'electrical',

      background: "from-cyan-600 to-blue-600"

    },      name: "Suresh Patil",      name: "Suresh Patil",

    {

      id: 6,      role: "Electrical Design Engineer",      role: "Electrical Design Engineer",

      category: 'electrical',

      name: "Ravi Kumar",      company: "L&T Electrical & Automation",      company: "L&T Electrical & Automation",

      role: "Instrumentation Engineer",

      company: "Bharat Petroleum",      location: "Mumbai, Maharashtra",      location: "Mumbai, Maharashtra",

      location: "Kochi, Kerala",

      experience: "5 years",      experience: "3 years",      experience: "3 years",

      course: "Instrumentation & Control Engineering",

      duration: "5 months",      course: "Electrical Design Engineering with AutoCAD Electrical",      course: "Electrical Design Engineering with AutoCAD Electrical",

      beforeSalary: "₹4.5 LPA",

      afterSalary: "₹16 LPA",      duration: "5 months",      duration: "5 months",

      salaryIncrease: "256%",

      joinDate: "March 2023",      beforeSalary: "₹3 LPA",      beforeSalary: "₹3 LPA",

      placement: "August 2023",

      rating: 5,      afterSalary: "₹10 LPA",      afterSalary: "₹10 LPA",

      testimonialFull: "The instrumentation course at Trinkets Institute gave me deep expertise in process control and automation. Learning about DCS, PLC, and SCADA systems with practical lab sessions prepared me for the complex challenges in petroleum refining industry.",

      achievements: [      salaryIncrease: "233%",      salaryIncrease: "233%",

        "Implemented automation in 3 refinery units",

        "Reduced process downtime by 30%",      joinDate: "June 2023",      joinDate: "June 2023",

        "Expert in Honeywell DCS and Siemens PLC",

        "Received Safety Excellence Award 2024"      placement: "November 2023",      placement: "November 2023",

      ],

      skills: ["DCS Programming", "PLC/SCADA", "Process Control", "Loop Tuning", "Safety Systems"],      rating: 5,      rating: 5,

      background: "from-indigo-600 to-purple-600"

    }      testimonialFull: "After my B.E. Electrical, I was working in a small company with limited exposure. Trinkets Institute's electrical design course gave me industry-level expertise in power distribution, control systems, and automation. The practical projects and industry mentorship helped me secure a position at L&T.",      testimonialFull: "After my B.E. Electrical, I was working in a small company with limited exposure. Trinkets Institute's electrical design course gave me industry-level expertise in power distribution, control systems, and automation. The practical projects and industry mentorship helped me secure a position at L&T.",

  ]

      achievements: [      achievements: [

  const filteredStories = activeTab === 'all' 

    ? featuredStories         "Designed electrical systems for 10+ industrial projects",        "Designed electrical systems for 10+ industrial projects",

    : featuredStories.filter(story => story.category === activeTab)

        "Implemented energy-saving solutions worth ₹2 crores",        "Implemented energy-saving solutions worth ₹2 crores",

  useEffect(() => {

    setIsVisible(true)        "Certified in Schneider Electric automation systems",        "Certified in Schneider Electric automation systems",

  }, [])

        "Leading a team of 8 electrical technicians"        "Leading a team of 8 electrical technicians"

  useEffect(() => {

    setSelectedStory(0)      ],      ],

  }, [activeTab])

      skills: ["AutoCAD Electrical", "ETAP", "PLC Programming", "SCADA", "Power System Design"],      skills: ["AutoCAD Electrical", "ETAP", "PLC Programming", "SCADA", "Power System Design"],

  return (

    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">      background: "from-green-600 to-teal-600"      background: "from-green-600 to-teal-600"

      <div className="container mx-auto px-4">

        {/* Section Header */}    },    },

        <motion.div

          initial={{ opacity: 0, y: 30 }}    {    {

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}

          transition={{ duration: 0.8 }}      id: 4,      id: 4,

          className="text-center mb-16"

        >      category: 'civil',      category: 'civil',

          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">

            <Quote className="w-5 h-5 text-blue-600 mr-2" />      name: "Priya Agarwal",      name: "Priya Agarwal",

            <span className="text-blue-700 text-sm font-medium">Featured Success Stories</span>

          </div>      role: "Structural Design Engineer",      role: "Structural Design Engineer",

          

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">      company: "DLF Construction",      company: "DLF Construction",

            Real Students,

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">      location: "Gurgaon, Haryana",      location: "Gurgaon, Haryana",

              Real Transformations

            </span>      experience: "4 years",      experience: "4 years",

          </h2>

                course: "Structural Design & Analysis (STAAD Pro + ETABS)",      course: "Structural Design & Analysis (STAAD Pro + ETABS)",

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Dive deep into detailed success stories of our students who transformed their careers       duration: "4 months",      duration: "4 months",

            with industry-focused training and secured positions at top engineering companies.

          </p>      beforeSalary: "₹3.2 LPA",      beforeSalary: "₹3.2 LPA",

        </motion.div>

      afterSalary: "₹11 LPA",      afterSalary: "₹11 LPA",

        {/* Category Tabs */}

        <motion.div      salaryIncrease: "244%",      salaryIncrease: "244%",

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}      joinDate: "September 2022",      joinDate: "September 2022",

          transition={{ duration: 0.8, delay: 0.2 }}

          className="flex flex-wrap justify-center gap-3 mb-12"      placement: "January 2023",      placement: "January 2023",

        >

          {categories.map((category) => (      rating: 5,      rating: 5,

            <button

              key={category.id}      testimonialFull: "The structural engineering course at Trinkets Institute transformed my understanding of building design. From basic concepts to advanced analysis using STAAD Pro and ETABS, everything was covered with real-world examples. The faculty's industry experience made all the difference.",      testimonialFull: "The structural engineering course at Trinkets Institute transformed my understanding of building design. From basic concepts to advanced analysis using STAAD Pro and ETABS, everything was covered with real-world examples. The faculty's industry experience made all the difference.",

              onClick={() => setActiveTab(category.id)}

              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${      achievements: [      achievements: [

                activeTab === category.id

                  ? 'bg-blue-600 text-white shadow-lg scale-105'        "Designed structures for 15+ high-rise buildings",        "Designed structures for 15+ high-rise buildings",

                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'

              }`}        "Optimized steel usage reducing costs by 12%",        "Optimized steel usage reducing costs by 12%",

            >

              {category.label}        "Specialist in seismic-resistant design",        "Specialist in seismic-resistant design",

              <span className="ml-2 px-2 py-0.5 bg-black/10 rounded-full text-xs">

                {category.count}        "Received Best Young Engineer Award 2024"        "Received Best Young Engineer Award 2024"

              </span>

            </button>      ],      ],

          ))}

        </motion.div>      skills: ["STAAD Pro", "ETABS", "SAFE", "AutoCAD", "Revit Structure"],      skills: ["STAAD Pro", "ETABS", "SAFE", "AutoCAD", "Revit Structure"],



        {/* Featured Story Display */}      background: "from-orange-600 to-red-600"      background: "from-orange-600 to-red-600"

        <motion.div

          initial={{ opacity: 0, y: 30 }}    },    },

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}

          transition={{ duration: 0.8, delay: 0.4 }}    {    {

          className="max-w-4xl mx-auto"

        >      id: 5,      id: 5,

          <AnimatePresence mode="wait">

            <motion.div      category: 'mechanical',      category: 'mechanical',

              key={selectedStory}

              initial={{ opacity: 0, y: 20 }}      name: "Vikram Singh",      name: "Vikram Singh",

              animate={{ opacity: 1, y: 0 }}

              exit={{ opacity: 0, y: -20 }}      role: "HVAC Design Engineer",      role: "HVAC Design Engineer",

              transition={{ duration: 0.5 }}

              className="bg-white rounded-3xl shadow-2xl overflow-hidden"      company: "Blue Star Engineering",      company: "Blue Star Engineering",

            >

              {filteredStories.length > 0 && (      location: "Chennai, Tamil Nadu",      location: "Chennai, Tamil Nadu",

                <div className={`bg-gradient-to-r ${filteredStories[selectedStory]?.background} p-8 text-white`}>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">      experience: "3 years",      experience: "3 years",

                    <div className="mb-6 lg:mb-0">

                      <div className="flex items-center mb-4">      course: "HVAC System Design & Energy Management",      course: "HVAC System Design & Energy Management",

                        {[...Array(filteredStories[selectedStory]?.rating || 5)].map((_, i) => (

                          <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />      duration: "3 months",      duration: "3 months",

                        ))}

                      </div>      beforeSalary: "₹3.8 LPA",      beforeSalary: "₹3.8 LPA",

                      <h3 className="text-3xl font-bold mb-2">{filteredStories[selectedStory]?.name}</h3>

                      <p className="text-lg opacity-90 mb-2">{filteredStories[selectedStory]?.role}</p>      afterSalary: "₹12 LPA",      afterSalary: "₹12 LPA",

                      <p className="opacity-80">{filteredStories[selectedStory]?.company}</p>

                    </div>      salaryIncrease: "216%",      salaryIncrease: "216%",

                    

                    <div className="text-right">      joinDate: "April 2023",      joinDate: "April 2023",

                      <div className="text-4xl font-bold mb-2">+{filteredStories[selectedStory]?.salaryIncrease}</div>

                      <div className="opacity-90">Salary Growth</div>      placement: "July 2023",      placement: "July 2023",

                    </div>

                  </div>      rating: 5,      rating: 5,

                </div>

              )}      testimonialFull: "Working in a generic mechanical role, I wanted to specialize in HVAC. Trinkets Institute's comprehensive HVAC course covered everything from load calculations to energy optimization. The hands-on training with industry software prepared me for real challenges at Blue Star.",      testimonialFull: "Working in a generic mechanical role, I wanted to specialize in HVAC. Trinkets Institute's comprehensive HVAC course covered everything from load calculations to energy optimization. The hands-on training with industry software prepared me for real challenges at Blue Star.",



              <div className="p-8">      achievements: [      achievements: [

                <div className="grid lg:grid-cols-3 gap-8">

                  {/* Main Content */}        "Designed HVAC systems for 25+ commercial buildings",        "Designed HVAC systems for 25+ commercial buildings",

                  <div className="lg:col-span-2">

                    <Quote className="w-8 h-8 text-blue-600 mb-4" />        "Achieved 20% energy savings in 5 major projects",        "Achieved 20% energy savings in 5 major projects",

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">

                      "{filteredStories[selectedStory]?.testimonialFull}"        "Certified in Carrier HAP and Trane TRACE",        "Certified in Carrier HAP and Trane TRACE",

                    </p>

                            "Leading HVAC optimization for smart buildings"        "Leading HVAC optimization for smart buildings"

                    <div className="mb-6">

                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">      ],      ],

                        <Award className="w-5 h-5 text-blue-600 mr-2" />

                        Key Achievements      skills: ["Carrier HAP", "Trane TRACE", "AutoCAD MEP", "Energy Modeling", "CFD Analysis"],      skills: ["Carrier HAP", "Trane TRACE", "AutoCAD MEP", "Energy Modeling", "CFD Analysis"],

                      </h4>

                      <ul className="space-y-2">      background: "from-cyan-600 to-blue-600"      background: "from-cyan-600 to-blue-600"

                        {filteredStories[selectedStory]?.achievements.map((achievement, idx) => (

                          <li key={idx} className="flex items-start">    },    },

                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />

                            <span className="text-gray-600 text-sm">{achievement}</span>    {    {

                          </li>

                        ))}      id: 6,      id: 6,

                      </ul>

                    </div>      category: 'electrical',      category: 'electrical',



                    <div>      name: "Ravi Kumar",      name: "Ravi Kumar",

                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>

                      <div className="flex flex-wrap gap-2">      role: "Instrumentation Engineer",      role: "Instrumentation Engineer",

                        {filteredStories[selectedStory]?.skills.map((skill, idx) => (

                          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">      company: "Bharat Petroleum",      company: "Bharat Petroleum",

                            {skill}

                          </span>      location: "Kochi, Kerala",      location: "Kochi, Kerala",

                        ))}

                      </div>      experience: "5 years",      experience: "5 years",

                    </div>

                  </div>      course: "Instrumentation & Control Engineering",      course: "Instrumentation & Control Engineering",



                  {/* Sidebar Stats */}      duration: "5 months",      duration: "5 months",

                  <div className="lg:col-span-1 space-y-6">

                    <div className="bg-gray-50 rounded-2xl p-6">      beforeSalary: "₹4.5 LPA",      beforeSalary: "₹4.5 LPA",

                      <h4 className="font-semibold text-gray-900 mb-4">Career Journey</h4>

                      <div className="space-y-4">      afterSalary: "₹16 LPA",      afterSalary: "₹16 LPA",

                        <div>

                          <div className="text-sm text-gray-500">Before</div>      salaryIncrease: "256%",      salaryIncrease: "256%",

                          <div className="text-lg font-semibold text-red-600">{filteredStories[selectedStory]?.beforeSalary}</div>

                        </div>      joinDate: "March 2023",      joinDate: "March 2023",

                        <div className="relative">

                          <div className="absolute inset-0 flex items-center">      placement: "August 2023",      placement: "August 2023",

                            <div className="w-full border-t border-gray-200"></div>

                          </div>      rating: 5,      rating: 5,

                          <div className="relative flex justify-center">

                            <TrendingUp className="w-6 h-6 text-green-500 bg-gray-50" />      testimonialFull: "The instrumentation course at Trinkets Institute gave me deep expertise in process control and automation. Learning about DCS, PLC, and SCADA systems with practical lab sessions prepared me for the complex challenges in petroleum refining industry.",      testimonialFull: "The instrumentation course at Trinkets Institute gave me deep expertise in process control and automation. Learning about DCS, PLC, and SCADA systems with practical lab sessions prepared me for the complex challenges in petroleum refining industry.",

                          </div>

                        </div>      achievements: [      achievements: [

                        <div>

                          <div className="text-sm text-gray-500">After</div>        "Implemented automation in 3 refinery units",        "Implemented automation in 3 refinery units",

                          <div className="text-lg font-semibold text-green-600">{filteredStories[selectedStory]?.afterSalary}</div>

                        </div>        "Reduced process downtime by 30%",        "Reduced process downtime by 30%",

                      </div>

                    </div>        "Expert in Honeywell DCS and Siemens PLC",        "Expert in Honeywell DCS and Siemens PLC",



                    <div className="space-y-3 text-sm">        "Received Safety Excellence Award 2024"        "Received Safety Excellence Award 2024"

                      <div className="flex items-center text-gray-600">

                        <Calendar className="w-4 h-4 mr-2" />      ],      ],

                        Course Duration: {filteredStories[selectedStory]?.duration}

                      </div>      skills: ["DCS Programming", "PLC/SCADA", "Process Control", "Loop Tuning", "Safety Systems"],      skills: ["DCS Programming", "PLC/SCADA", "Process Control", "Loop Tuning", "Safety Systems"],

                      <div className="flex items-center text-gray-600">

                        <MapPin className="w-4 h-4 mr-2" />      background: "from-indigo-600 to-purple-600"      background: "from-indigo-600 to-purple-600"

                        {filteredStories[selectedStory]?.location}

                      </div>    }    }

                      <div className="flex items-center text-gray-600">

                        <Users className="w-4 h-4 mr-2" />  ]  ]

                        {filteredStories[selectedStory]?.experience} Industry Experience

                      </div>      location: "Mathura, UP",

                    </div>

                  </div>  const filteredStories = activeTab === 'all'       experience: "4 years",

                </div>

              </div>    ? featuredStories       course: "Piping Design & Stress Analysis",

            </motion.div>

          </AnimatePresence>    : featuredStories.filter(story => story.category === activeTab)      duration: "4 months",

        </motion.div>

      beforeSalary: "₹4 LPA",

        {/* Story Navigation */}

        {filteredStories.length > 1 && (  useEffect(() => {      afterSalary: "₹15 LPA",

          <motion.div

            initial={{ opacity: 0, y: 20 }}    setIsVisible(true)      salaryIncrease: "275%",

            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}

            transition={{ duration: 0.8, delay: 0.6 }}  }, [])      joinDate: "August 2022",

            className="flex justify-center items-center space-x-4 mt-8"

          >      placement: "December 2022",

            <button

              onClick={() => setSelectedStory((prev) => prev > 0 ? prev - 1 : filteredStories.length - 1)}  useEffect(() => {      rating: 5,

              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"

            >    setSelectedStory(0)      testimonialFull: "As a female engineer in the oil & gas sector, I faced many challenges. The comprehensive piping design course at Trinkets Institute not only taught me technical skills but also boosted my confidence. Learning CAESAR II, SP3D, and stress analysis opened doors I never thought possible.",

              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />

            </button>  }, [activeTab])      achievements: [

            

            <div className="flex space-x-2">        "Designed piping systems for 2 major refineries",

              {filteredStories.map((_, idx) => (

                <button  return (        "Reduced material costs by 15% through optimization",

                  key={idx}

                  onClick={() => setSelectedStory(idx)}    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">        "Led safety improvements preventing major incidents",

                  className={`w-3 h-3 rounded-full transition-all duration-300 ${

                    idx === selectedStory ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'      <div className="container mx-auto px-4">        "Received Excellence Award from IOCL management"

                  }`}

                />        {/* Section Header */}      ],

              ))}

            </div>        <motion.div      skills: ["SP3D", "CAESAR II", "PDMS", "AutoCAD", "Piping Stress Analysis"],

            

            <button          initial={{ opacity: 0, y: 30 }}      background: "from-purple-600 to-pink-600"

              onClick={() => setSelectedStory((prev) => prev < filteredStories.length - 1 ? prev + 1 : 0)}

              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}    }

            >

              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />          transition={{ duration: 0.8 }}  ]

            </button>

          </motion.div>          className="text-center mb-16"

        )}

      </div>        >  const filteredStories = activeTab === 'all' 

    </section>

  )          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">    ? featuredStories 

}

            <Quote className="w-5 h-5 text-blue-600 mr-2" />    : featuredStories.filter(story => story.category === activeTab)

export default FeaturedTestimonials
            <span className="text-blue-700 text-sm font-medium">Featured Success Stories</span>

          </div>  useEffect(() => {

              setIsVisible(true)

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">  }, [])

            Real Students,

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">  useEffect(() => {

              Real Transformations    setSelectedStory(0)

            </span>  }, [activeTab])

          </h2>

            return (

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

            Dive deep into detailed success stories of our students who transformed their careers       <div className="container mx-auto px-4">

            with industry-focused training and secured positions at top engineering companies.        {/* Section Header */}

          </p>        <motion.div

        </motion.div>          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}

        {/* Category Tabs */}          transition={{ duration: 0.8 }}

        <motion.div          className="text-center mb-16"

          initial={{ opacity: 0, y: 20 }}        >

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">

          transition={{ duration: 0.8, delay: 0.2 }}            <Quote className="w-5 h-5 text-blue-600 mr-2" />

          className="flex flex-wrap justify-center gap-3 mb-12"            <span className="text-blue-700 text-sm font-medium">Featured Success Stories</span>

        >          </div>

          {categories.map((category) => (          

            <button          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">

              key={category.id}            Real Students,

              onClick={() => setActiveTab(category.id)}            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">

              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${              Real Transformations

                activeTab === category.id            </span>

                  ? 'bg-blue-600 text-white shadow-lg scale-105'          </h2>

                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'          

              }`}          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

            >            Dive deep into detailed success stories of our students who transformed their careers 

              {category.label}            with industry-focused training and secured positions at top engineering companies.

              <span className="ml-2 px-2 py-0.5 bg-black/10 rounded-full text-xs">          </p>

                {category.count}        </motion.div>

              </span>

            </button>        {/* Category Tabs */}

          ))}        <motion.div

        </motion.div>          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}

        {/* Featured Story Display */}          transition={{ duration: 0.8, delay: 0.2 }}

        <motion.div          className="flex flex-wrap justify-center gap-3 mb-12"

          initial={{ opacity: 0, y: 30 }}        >

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}          {categories.map((category) => (

          transition={{ duration: 0.8, delay: 0.4 }}            <button

          className="max-w-4xl mx-auto"              key={category.id}

        >              onClick={() => setActiveTab(category.id)}

          <AnimatePresence mode="wait">              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${

            <motion.div                activeTab === category.id

              key={selectedStory}                  ? 'bg-blue-600 text-white shadow-lg scale-105'

              initial={{ opacity: 0, y: 20 }}                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'

              animate={{ opacity: 1, y: 0 }}              }`}

              exit={{ opacity: 0, y: -20 }}            >

              transition={{ duration: 0.5 }}              {category.label}

              className="bg-white rounded-3xl shadow-2xl overflow-hidden"              <span className="ml-2 px-2 py-0.5 bg-black/10 rounded-full text-xs">

            >                {category.count}

              {filteredStories.length > 0 && (              </span>

                <div className={`bg-gradient-to-r ${filteredStories[selectedStory]?.background} p-8 text-white`}>            </button>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">          ))}

                    <div className="mb-6 lg:mb-0">        </motion.div>

                      <div className="flex items-center mb-4">

                        {[...Array(filteredStories[selectedStory]?.rating || 5)].map((_, i) => (        {/* Featured Story Display */}

                          <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />        <motion.div

                        ))}          initial={{ opacity: 0, y: 30 }}

                      </div>          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}

                      <h3 className="text-3xl font-bold mb-2">{filteredStories[selectedStory]?.name}</h3>          transition={{ duration: 0.8, delay: 0.4 }}

                      <p className="text-lg opacity-90 mb-2">{filteredStories[selectedStory]?.role}</p>          className="max-w-4xl mx-auto"

                      <p className="opacity-80">{filteredStories[selectedStory]?.company}</p>        >

                    </div>          <AnimatePresence mode="wait">

                                <motion.div

                    <div className="text-right">              key={selectedStory}

                      <div className="text-4xl font-bold mb-2">+{filteredStories[selectedStory]?.salaryIncrease}</div>              initial={{ opacity: 0, y: 20 }}

                      <div className="opacity-90">Salary Growth</div>              animate={{ opacity: 1, y: 0 }}

                    </div>              exit={{ opacity: 0, y: -20 }}

                  </div>              transition={{ duration: 0.5 }}

                </div>              className="bg-white rounded-3xl shadow-xl overflow-hidden"

              )}            >

              {/* Header */}

              <div className="p-8">              <div className={`bg-gradient-to-r ${filteredStories[selectedStory]?.background || 'from-blue-600 to-indigo-600'} p-8 text-white`}>

                <div className="grid lg:grid-cols-3 gap-8">                <div className="flex items-start justify-between mb-6">

                  {/* Main Content */}                  <div className="flex items-center space-x-4">

                  <div className="lg:col-span-2">                    <div className="relative">

                    <Quote className="w-8 h-8 text-blue-600 mb-4" />                      <div className="w-20 h-20 bg-white/20 rounded-full overflow-hidden">

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">                        <div className="w-full h-full bg-white/10 flex items-center justify-center">

                      "{filteredStories[selectedStory]?.testimonialFull}"                          <Users className="w-10 h-10 text-white" />

                    </p>                        </div>

                                          </div>

                    <div className="mb-6">                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">

                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">                        <CheckCircle className="w-3 h-3 text-white" />

                        <Award className="w-5 h-5 text-blue-600 mr-2" />                      </div>

                        Key Achievements                    </div>

                      </h4>                    <div>

                      <ul className="space-y-2">                      <h3 className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.name}</h3>

                        {filteredStories[selectedStory]?.achievements.map((achievement, idx) => (                      <p className="text-white/90 mb-1">{filteredStories[selectedStory]?.role}</p>

                          <li key={idx} className="flex items-start">                      <p className="text-white/80 text-sm">{filteredStories[selectedStory]?.company}</p>

                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />                    </div>

                            <span className="text-gray-600 text-sm">{achievement}</span>                  </div>

                          </li>                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">

                        ))}                    <Play className="w-6 h-6 text-white" />

                      </ul>                  </button>

                    </div>                </div>



                    <div>                {/* Quick Stats */}

                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                      <div className="flex flex-wrap gap-2">                  <div className="text-center">

                        {filteredStories[selectedStory]?.skills.map((skill, idx) => (                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.salaryIncrease}</div>

                          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">                    <div className="text-white/80 text-sm">Salary Increase</div>

                            {skill}                  </div>

                          </span>                  <div className="text-center">

                        ))}                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.experience}</div>

                      </div>                    <div className="text-white/80 text-sm">Experience</div>

                    </div>                  </div>

                  </div>                  <div className="text-center">

                    <div className="text-2xl font-bold mb-1">{filteredStories[selectedStory]?.duration}</div>

                  {/* Sidebar Stats */}                    <div className="text-white/80 text-sm">Training Duration</div>

                  <div className="lg:col-span-1 space-y-6">                  </div>

                    <div className="bg-gray-50 rounded-2xl p-6">                  <div className="text-center">

                      <h4 className="font-semibold text-gray-900 mb-4">Career Journey</h4>                    <div className="flex justify-center mb-1">

                      <div className="space-y-4">                      {[...Array(filteredStories[selectedStory]?.rating || 5)].map((_, i) => (

                        <div>                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />

                          <div className="text-sm text-gray-500">Before</div>                      ))}

                          <div className="text-lg font-semibold text-red-600">{filteredStories[selectedStory]?.beforeSalary}</div>                    </div>

                        </div>                    <div className="text-white/80 text-sm">Rating</div>

                        <div className="relative">                  </div>

                          <div className="absolute inset-0 flex items-center">                </div>

                            <div className="w-full border-t border-gray-200"></div>              </div>

                          </div>

                          <div className="relative flex justify-center">              {/* Content */}

                            <TrendingUp className="w-6 h-6 text-green-500 bg-gray-50" />              <div className="p-8 space-y-8">

                          </div>                {/* Testimonial */}

                        </div>                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">

                        <div>                  <Quote className="w-8 h-8 text-blue-500 mb-4" />

                          <div className="text-sm text-gray-500">After</div>                  <p className="text-gray-700 leading-relaxed italic text-lg">

                          <div className="text-lg font-semibold text-green-600">{filteredStories[selectedStory]?.afterSalary}</div>                    &ldquo;{filteredStories[selectedStory]?.testimonialFull}&rdquo;

                        </div>                  </p>

                      </div>                </div>

                    </div>

                {/* Achievements */}

                    <div className="space-y-3 text-sm">                <div>

                      <div className="flex items-center text-gray-600">                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">

                        <Calendar className="w-4 h-4 mr-2" />                    <Award className="w-5 h-5 text-purple-500 mr-2" />

                        Course Duration: {filteredStories[selectedStory]?.duration}                    Key Achievements

                      </div>                  </h4>

                      <div className="flex items-center text-gray-600">                  <div className="grid md:grid-cols-2 gap-3">

                        <MapPin className="w-4 h-4 mr-2" />                    {filteredStories[selectedStory]?.achievements.map((achievement, index) => (

                        {filteredStories[selectedStory]?.location}                      <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">

                      </div>                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                      <div className="flex items-center text-gray-600">                        <span className="text-purple-700 text-sm">{achievement}</span>

                        <Users className="w-4 h-4 mr-2" />                      </div>

                        {filteredStories[selectedStory]?.experience} Industry Experience                    ))}

                      </div>                  </div>

                    </div>                </div>

                  </div>

                </div>                {/* Skills */}

              </div>                <div>

            </motion.div>                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills Acquired</h4>

          </AnimatePresence>                  <div className="flex flex-wrap gap-2">

        </motion.div>                    {filteredStories[selectedStory]?.skills.map((skill, index) => (

                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">

        {/* Story Navigation */}                        {skill}

        {filteredStories.length > 1 && (                      </span>

          <motion.div                    ))}

            initial={{ opacity: 0, y: 20 }}                  </div>

            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}                </div>

            transition={{ duration: 0.8, delay: 0.6 }}

            className="flex justify-center items-center space-x-4 mt-8"                {/* Action Buttons */}

          >                <div className="flex gap-4 pt-4 border-t border-gray-200">

            <button                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">

              onClick={() => setSelectedStory((prev) => prev > 0 ? prev - 1 : filteredStories.length - 1)}                    <Play className="w-5 h-5 mr-2" />

              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"                    Watch Video Story

            >                  </button>

              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />                  <button className="px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center">

            </button>                    <ExternalLink className="w-5 h-5 mr-2" />

                                LinkedIn Profile

            <div className="flex space-x-2">                  </button>

              {filteredStories.map((_, idx) => (                </div>

                <button              </div>

                  key={idx}            </motion.div>

                  onClick={() => setSelectedStory(idx)}          </AnimatePresence>

                  className={`w-3 h-3 rounded-full transition-all duration-300 ${        </motion.div>

                    idx === selectedStory ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'

                  }`}        {/* Navigation */}

                />        <motion.div

              ))}          initial={{ opacity: 0, y: 20 }}

            </div>          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}

                      transition={{ duration: 0.8, delay: 0.8 }}

            <button          className="flex justify-center items-center space-x-4 mt-12"

              onClick={() => setSelectedStory((prev) => prev < filteredStories.length - 1 ? prev + 1 : 0)}        >

              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"          <button

            >            onClick={() => setSelectedStory(Math.max(0, selectedStory - 1))}

              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />            disabled={selectedStory === 0}

            </button>            className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"

          </motion.div>          >

        )}            <ArrowLeft className="w-5 h-5 text-gray-600" />

      </div>          </button>

    </section>          

  )          <span className="text-gray-600">

}            {selectedStory + 1} of {filteredStories.length}

          </span>

export default FeaturedTestimonials          
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