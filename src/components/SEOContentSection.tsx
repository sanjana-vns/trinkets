'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Building, Award, Target, Zap, Globe, BookOpen, TrendingUp, Shield, CheckCircle, MapPin, Phone, Mail, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export default function SEOContentSection() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premier Engineering Training Institute in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Mumbai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trinkets Institute stands as Mumbai&apos;s leading destination for professional engineering education, offering world-class training programs in structural engineering, MEP engineering, piping design, and advanced CAD technologies. Our comprehensive curriculum is designed to bridge the gap between academic knowledge and industry requirements.
          </p>
        </motion.div>

        {/* Engineering Excellence Section */}
        <motion.div 
          className="mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                Industry-Leading Training Programs
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Transform Your Engineering Career with Advanced Technical Training
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our specialized engineering courses are meticulously crafted by industry experts with decades of experience in structural design, MEP systems, and project management. We offer hands-on training in cutting-edge software including STAAD Pro, ETABS, AutoCAD, Revit MEP, and Smart Plant 3D, ensuring our students are equipped with the most sought-after skills in the engineering industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Industry Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Placement Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Flexible Schedules</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">5000+</h4>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <Building className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">95%</h4>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <Target className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">25+</h4>
                <p className="text-gray-600">Course Programs</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <Star className="w-10 h-10 text-yellow-500 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">4.9/5</h4>
                <p className="text-gray-600">Student Rating</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Comprehensive Course Offerings */}
        <motion.div 
          className="mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Engineering Course Portfolio
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our extensive range of engineering courses covers all major disciplines, from structural design and analysis to MEP engineering and advanced CAD modeling, designed to meet diverse career aspirations and industry demands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Structural Engineering */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Structural Engineering Courses</h4>
              <p className="text-gray-600 mb-6">Master structural design and analysis with industry-standard software and real-world project experience.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  STAAD Pro Advanced Training
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  ETABS Structural Modeling
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Foundation Design & Analysis
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Seismic Design Principles
                </li>
              </ul>
              <Link href="/courses/structural-design-analysis" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* MEP Engineering */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">MEP Engineering Programs</h4>
              <p className="text-gray-600 mb-6">Comprehensive training in mechanical, electrical, and plumbing systems design and implementation.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  HVAC System Design
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Electrical Design Engineering
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Plumbing & Fire Protection
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  MEP Coordination & BIM
                </li>
              </ul>
              <Link href="/courses/mep-engineering" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Piping Design */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Piping Design Specialization</h4>
              <p className="text-gray-600 mb-6">Advanced piping engineering training for oil & gas, petrochemical, and process industries.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  Smart Plant 3D (SP3D)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  CAESAR II Stress Analysis
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  Process Engineering
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  Piping Material Engineering
                </li>
              </ul>
              <Link href="/courses/piping-design-engineering" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Industry-Specific Training */}
        <motion.div 
          className="mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Engineering Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized training programs are tailored to meet the specific requirements of various industries, ensuring our graduates are ready to contribute from day one in their chosen field.
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Oil & Gas Industry Training</h4>
                <p className="mb-4">
                  The oil and gas sector demands specialized expertise in piping design, process engineering, and safety systems. Our comprehensive training programs cover advanced piping design using Smart Plant 3D, CAESAR II stress analysis, and process engineering fundamentals. Students learn to design complex piping systems for refineries, petrochemical plants, and offshore platforms, ensuring compliance with international standards like ASME, API, and NORSOK.
                </p>
                <p className="mb-4">
                  Our curriculum includes hands-on training in pipe stress analysis, equipment layout design, P&ID development, and 3D plant modeling. Students work on real-world projects involving crude oil processing, natural gas handling, and chemical plant design, preparing them for challenging roles in engineering consultancies and EPC companies.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Construction & Infrastructure</h4>
                <p className="mb-4">
                  The construction industry requires robust structural design capabilities and comprehensive project management skills. Our structural engineering courses focus on high-rise buildings, industrial structures, and infrastructure projects using advanced software like STAAD Pro and ETABS. Students master reinforced concrete design, steel structure design, and foundation engineering principles.
                </p>
                <p className="mb-4">
                  Training includes seismic design considerations, wind load analysis, and sustainable building practices. Our placement-oriented approach ensures students are well-versed in Indian building codes (IS codes), international standards, and modern construction technologies including prefabricated structures and green building concepts.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">HVAC & Building Services</h4>
                <p className="mb-4">
                  Modern buildings require sophisticated HVAC systems for optimal comfort and energy efficiency. Our MEP engineering courses provide comprehensive training in heating, ventilation, air conditioning, and building automation systems. Students learn psychrometric calculations, duct design, chilled water systems, and fire protection systems design.
                </p>
                <p className="mb-4">
                  The curriculum covers energy-efficient design practices, LEED certification requirements, and smart building technologies. Practical training includes load calculations, equipment selection, and commissioning procedures, preparing students for roles in building services engineering and facility management companies.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing & Process Industries</h4>
                <p className="mb-4">
                  Manufacturing facilities require specialized engineering solutions for process optimization and equipment design. Our courses cover industrial automation, instrumentation and control systems, and process optimization techniques. Students learn PLC programming, SCADA systems, and industrial communication protocols.
                </p>
                <p className="mb-4">
                  Training includes lean manufacturing principles, Six Sigma methodologies, and quality control systems. Our industry partnerships provide exposure to real manufacturing challenges, ensuring graduates can contribute effectively to automotive, pharmaceutical, food processing, and chemical manufacturing industries.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Career Development & Placement Support */}
        <motion.div 
          className="mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Comprehensive Career Development & Placement Support
                </h3>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  At Trinkets Institute, we don&apos;t just provide technical training – we build careers. Our dedicated placement cell works tirelessly to connect our graduates with leading engineering companies across Mumbai, Pune, Delhi, Bangalore, and other major industrial hubs. With a proven track record of 95% placement success, we ensure every student finds the right opportunity to launch their engineering career.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">500+</div>
                    <div className="text-blue-200 text-sm">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">₹8.5L</div>
                    <div className="text-blue-200 text-sm">Avg. Package</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Resume Building & Interview Preparation</h4>
                    <p className="text-blue-100">Professional resume crafting, mock interviews, and technical skill assessment to ensure interview success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Industry Networking & Job Referrals</h4>
                    <p className="text-blue-100">Direct connections with hiring managers and exclusive job opportunities through our industry network.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Lifetime Career Support</h4>
                    <p className="text-blue-100">Ongoing career guidance, skill upgrade recommendations, and job change assistance throughout your career.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Information & Training Locations */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Mumbai Training Center</h4>
            <p className="text-gray-600 mb-4">
              Located in the heart of Mumbai&apos;s business district, our state-of-the-art training facility provides easy access via local trains and metro connectivity.
            </p>
            <div className="text-blue-600 font-semibold">
              Andheri West, Mumbai - 400053
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">24/7 Student Support</h4>
            <p className="text-gray-600 mb-4">
              Our dedicated support team is available round-the-clock to assist with course queries, technical issues, and career guidance.
            </p>
            <div className="text-green-600 font-semibold">
              +91 98765 43210
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning Options</h4>
            <p className="text-gray-600 mb-4">
              Choose from weekday, weekend, or fast-track batches designed to accommodate working professionals and fresh graduates.
            </p>
            <div className="text-purple-600 font-semibold">
              Mon-Sun: 6 AM - 10 PM
            </div>
          </motion.div>
        </motion.div>

        {/* Final Call-to-Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Engineering Career?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of successful engineers who have accelerated their careers through our comprehensive training programs. Take the first step towards your dream engineering job today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Book Free Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}