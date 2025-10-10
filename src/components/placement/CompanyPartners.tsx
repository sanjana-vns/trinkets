'use client''use client''use client'

import { motion } from "framer-motion"

import Image from "next/image"import { motion } from "framer-motion"import { motion } from "framer-motion"

import { useState, useEffect, useMemo } from 'react'

import Image from "next/image"import Image from "next/image"

const CompanyPartners = () => {

  const [isVisible, setIsVisible] = useState(false)import { useState, useEffect, useMemo } from 'react'import { useSt    name: "Technology",

  const [isMobile, setIsMobile] = useState(false)

  const [reducedMotion, setReducedMotion] = useState(false)    companies: 40,



  // Mobile detection and reduced motion preferenceconst CompanyPartners = () => {    icon: "💻",

  useEffect(() => {

    const checkMobile = () => setIsMobile(window.innerWidth < 768)  const [isVisible, setIsVisible] = useState(false)    color: "from-cyan-500 to-teal-500"

    const checkReducedMotion = () => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

      const [isMobile, setIsMobile] = useState(false)  }

    checkMobile()

    checkReducedMotion()  const [reducedMotion, setReducedMotion] = useState(false)], [])

    

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)

  }, [])  // Mobile detection and reduced motion preference  useEffect(() => {eMemo } from 'react'



  // Memoize companies data  useEffect(() => {

  const companies = useMemo(() => [

    {    const checkMobile = () => setIsMobile(window.innerWidth < 768)const CompanyPartners = () => {

      name: "Tata Motors",

      logo: "/api/placeholder/120/60",    const checkReducedMotion = () => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)  const [isVisible, setIsVisible] = useState(false)

      sector: "Automotive",

      positions: "Design Engineer, Production Engineer",      const [isMobile, setIsMobile] = useState(false)

      package: "₹6-12 LPA"

    },    checkMobile()  const [reducedMotion, setReducedMotion] = useState(false)

    {

      name: "L&T Construction",     checkReducedMotion()

      logo: "/api/placeholder/120/60",

      sector: "Construction",      // Mobile detection and reduced motion preference

      positions: "Site Engineer, Project Manager",

      package: "₹5-10 LPA"    window.addEventListener('resize', checkMobile)  useEffect(() => {

    },

    {    return () => window.removeEventListener('resize', checkMobile)    const checkMobile = () => setIsMobile(window.innerWidth < 768)

      name: "Reliance Industries",

      logo: "/api/placeholder/120/60",  }, [])    const checkReducedMotion = () => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

      sector: "Oil & Gas",

      positions: "Process Engineer, Safety Engineer",    

      package: "₹8-15 LPA"

    },  // Memoize companies data    checkMobile()

    {

      name: "ONGC",  const companies = useMemo(() => [    checkReducedMotion()

      logo: "/api/placeholder/120/60",

      sector: "Oil & Gas",    {    

      positions: "Drilling Engineer, Reservoir Engineer",

      package: "₹9-16 LPA"      name: "Tata Motors",    window.addEventListener('resize', checkMobile)

    },

    {      logo: "/api/placeholder/120/60",    return () => window.removeEventListener('resize', checkMobile)

      name: "Mahindra Group",

      logo: "/api/placeholder/120/60",      sector: "Automotive",  }, [])

      sector: "Automotive",

      positions: "Mechanical Engineer, Quality Engineer",      positions: "Design Engineer, Production Engineer",

      package: "₹5-11 LPA"

    },      package: "₹6-12 LPA"  // Memoize companies data

    {

      name: "Infosys",    },  const companies = useMemo(() => [

      logo: "/api/placeholder/120/60",

      sector: "Technology",    {  {

      positions: "Software Engineer, System Engineer",

      package: "₹6-12 LPA"      name: "L&T Construction",     name: "Tata Motors",

    },

    {      logo: "/api/placeholder/120/60",    logo: "/api/placeholder/120/60",

      name: "NTPC",

      logo: "/api/placeholder/120/60",      sector: "Construction",    sector: "Automotive",

      sector: "Power",

      positions: "Power Engineer, Operations Engineer",       positions: "Site Engineer, Project Manager",    positions: "Design Engineer, Production Engineer",

      package: "₹7-14 LPA"

    }      package: "₹5-10 LPA"    package: "₹6-12 LPA"

  ], [])

    },  },

  // Mobile-optimized motion configurations

  const getMotionConfig = () => {    {  {

    if (reducedMotion) {

      return { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }      name: "Reliance Industries",    name: "L&T Construction", 

    }

          logo: "/api/placeholder/120/60",    logo: "/api/placeholder/120/60",

    return isMobile 

      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }      sector: "Oil & Gas",    sector: "Construction",

      : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }

  }      positions: "Process Engineer, Safety Engineer",    positions: "Site Engineer, Project Manager",



  // Reduce the number of companies displayed initially for better mobile performance      package: "₹8-15 LPA"    package: "₹5-10 LPA"

  const mobileCompanies = companies.slice(0, 4)

    },  },

  const sectors = useMemo(() => [

    {    {  {

      name: "Manufacturing",

      companies: 85,      name: "ONGC",    name: "Siemens",

      icon: "🏭",

      color: "from-blue-500 to-cyan-500"      logo: "/api/placeholder/120/60",    logo: "/api/placeholder/120/60",

    },

    {      sector: "Oil & Gas",    sector: "Technology", 

      name: "Oil & Gas",

      companies: 45,      positions: "Drilling Engineer, Reservoir Engineer",    positions: "Automation Engineer, R&D Engineer",

      icon: "⚡",

      color: "from-orange-500 to-red-500"      package: "₹9-16 LPA"    package: "₹8-15 LPA"

    },

    {    },  },

      name: "Construction",

      companies: 65,    {  {

      icon: "🏗️",

      color: "from-green-500 to-emerald-500"      name: "Mahindra Group",    name: "NTPC",

    },

    {      logo: "/api/placeholder/120/60",    logo: "/api/placeholder/120/60",

      name: "Automotive",

      companies: 55,      sector: "Automotive",    sector: "Power",

      icon: "🚗",

      color: "from-indigo-500 to-blue-500"      positions: "Mechanical Engineer, Quality Engineer",    positions: "Power Engineer, Operations Engineer", 

    },

    {      package: "₹5-11 LPA"    package: "₹7-14 LPA"

      name: "Technology",

      companies: 40,    },  }

      icon: "💻",

      color: "from-cyan-500 to-teal-500"    {], [])

    }

  ], [])      name: "Infosys",



  useEffect(() => {      logo: "/api/placeholder/120/60",  // Mobile-optimized motion configurations

    const observer = new IntersectionObserver(

      ([entry]) => {      sector: "Technology",  const getMotionConfig = () => {

        if (entry.isIntersecting) {

          setIsVisible(true)      positions: "Software Engineer, System Engineer",    if (reducedMotion) {

        }

      },      package: "₹6-12 LPA"      return { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }

      { threshold: isMobile ? 0.1 : 0.3 }

    )    },    }



    const section = document.getElementById('company-partners')    {    

    if (section) {

      observer.observe(section)      name: "NTPC",    return isMobile 

    }

      logo: "/api/placeholder/120/60",      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }

    return () => observer.disconnect()

  }, [isMobile])      sector: "Power",      : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }



  return (      positions: "Power Engineer, Operations Engineer",   }

    <section id="company-partners" className="py-20 bg-white">

      <div className="container mx-auto px-4">      package: "₹7-14 LPA"

        {/* Section Header */}

        <motion.div    }  // Reduce the number of companies displayed initially for better mobile performance

          {...getMotionConfig()}

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) }}  ], [])  const mobileCompanies = companies.slice(0, 4)

          className="text-center mb-16"

        >

          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">

            <span className="text-blue-700 font-semibold">Industry Partners</span>  // Mobile-optimized motion configurations  const sectors = useMemo(() => [

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">  const getMotionConfig = () => {  {

            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hiring</span> Partners

          </h2>    if (reducedMotion) {    name: "Manufacturing",

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            Join thousands of our alumni working at India's top companies across diverse engineering sectors      return { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }    companies: 85,

          </p>

        </motion.div>    }    icon: "🏭",



        {/* Companies Grid */}        color: "from-blue-500 to-cyan-500"

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">

          {(isMobile ? mobileCompanies : companies).map((company, index) => (    return isMobile   },

            <motion.div

              key={index}      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }  {

              {...getMotionConfig()}

              animate={{       : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }    name: "Oil & Gas",

                opacity: isVisible ? 1 : 0, 

                y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)   }    companies: 45,

              }}

              transition={{     icon: "⚡",

                duration: isMobile ? 0.3 : 0.6, 

                delay: isMobile ? 0 : index * 0.1   // Reduce the number of companies displayed initially for better mobile performance    color: "from-orange-500 to-red-500"

              }}

              className={`group relative p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:-translate-y-1' : ''}`}  const mobileCompanies = companies.slice(0, 4)  },

            >

              <div className="text-center space-y-4">  {

                <div className="w-24 h-12 mx-auto bg-white rounded-lg flex items-center justify-center shadow-sm">

                  <Image   const sectors = useMemo(() => [    name: "Power & Energy",

                    src={company.logo} 

                    alt={company.name}    {    companies: 65,

                    width={80}

                    height={40}      name: "Manufacturing",    icon: "🔋",

                    className="object-contain"

                  />      companies: 85,    color: "from-green-500 to-emerald-500"

                </div>

                <div>      icon: "🏭",  },

                  <h3 className="font-bold text-gray-900 mb-1">{company.name}</h3>

                  <p className="text-sm text-blue-600 font-medium mb-2">{company.sector}</p>      color: "from-blue-500 to-cyan-500"  {

                  <p className="text-xs text-gray-600 mb-2">{company.positions}</p>

                  <p className="text-sm font-bold text-green-600">{company.package}</p>    },    name: "Construction",

                </div>

              </div>    {    companies: 70,

            </motion.div>

          ))}      name: "Oil & Gas",    icon: "🏗️",

        </div>

      companies: 45,    color: "from-purple-500 to-pink-500"

        {/* Sector Statistics */}

        <motion.div      icon: "⚡",  },

          {...getMotionConfig()}

          animate={{       color: "from-orange-500 to-red-500"  {

            opacity: isVisible ? 1 : 0, 

            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)     },    name: "Automotive",

          }}

          transition={{     {    companies: 55,

            duration: isMobile ? 0.3 : 0.8, 

            delay: isMobile ? 0 : 0.6       name: "Construction",    icon: "🚗",

          }}

          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12"      companies: 65,    color: "from-indigo-500 to-blue-500"

        >

          <div className="text-center mb-12">      icon: "🏗️",  },

            <h3 className="text-3xl font-bold text-gray-900 mb-4">

              Industry <span className="text-blue-600">Distribution</span>      color: "from-green-500 to-emerald-500"  {

            </h3>

            <p className="text-lg text-gray-600">    },    name: "Technology",

              Our placement network spans across multiple engineering sectors

            </p>    {    companies: 40,

          </div>

      name: "Automotive",    icon: "💻",

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

            {sectors.map((sector, index) => (      companies: 55,    color: "from-cyan-500 to-teal-500"

              <motion.div

                key={index}      icon: "🚗",  }

                {...getMotionConfig()}

                animate={{       color: "from-indigo-500 to-blue-500"]

                  opacity: isVisible ? 1 : 0, 

                  y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)     },

                }}

                transition={{     {export default function CompanyPartners() {

                  duration: isMobile ? 0.3 : 0.6, 

                  delay: isMobile ? 0 : 0.8 + index * 0.1       name: "Technology",  const [isMobile, setIsMobile] = useState(false)

                }}

                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"      companies: 40,  

              >

                <div className="text-4xl mb-4">{sector.icon}</div>      icon: "💻",  useEffect(() => {

                <h4 className="font-bold text-gray-900 mb-2">{sector.name}</h4>

                <div className={`text-2xl font-bold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`}>      color: "from-cyan-500 to-teal-500"    const checkMobile = () => setIsMobile(window.innerWidth < 768)

                  {sector.companies}+

                </div>    }    checkMobile()

                <p className="text-sm text-gray-600 mt-1">Companies</p>

              </motion.div>  ], [])    window.addEventListener('resize', checkMobile)

            ))}

          </div>    return () => window.removeEventListener('resize', checkMobile)

        </motion.div>

  useEffect(() => {  }, [])

        {/* Call to Action */}

        <motion.div    const observer = new IntersectionObserver(

          {...getMotionConfig()}

          animate={{       ([entry]) => {  // Use fewer companies on mobile for better performance

            opacity: isVisible ? 1 : 0, 

            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)         if (entry.isIntersecting) {  const displayCompanies = isMobile ? mobileCompanies : companies

          }}

          transition={{           setIsVisible(true)

            duration: isMobile ? 0.3 : 0.8, 

            delay: isMobile ? 0 : 1.0         }  return (

          }}

          className="text-center mt-16"      },    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">

        >

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">      { threshold: isMobile ? 0.1 : 0.3 }      <div className="container mx-auto px-4">

            <h3 className="text-3xl font-bold mb-4">Ready to Join These Companies?</h3>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">    )        {/* Section Header */}

              Start your journey with our industry-aligned training programs and guaranteed placement assistance.

            </p>        <motion.div

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">    const section = document.getElementById('company-partners')          initial={{ opacity: 0, y: 30 }}

                Explore Courses

              </button>    if (section) {          whileInView={{ opacity: 1, y: 0 }}

              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">

                Get Placement Assistance      observer.observe(section)          transition={{ duration: 0.8 }}

              </button>

            </div>    }          viewport={{ once: true }}

          </div>

        </motion.div>          className="text-center mb-16"

      </div>

    </section>    return () => observer.disconnect()        >

  )

}  }, [isMobile])          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">



export default CompanyPartners            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Partners</span>

  return (          </h2>

    <section id="company-partners" className="py-20 bg-white">          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

      <div className="container mx-auto px-4">            We&apos;ve partnered with industry leaders across multiple sectors to provide 

        {/* Section Header */}            diverse career opportunities for our graduates

        <motion.div          </p>

          {...getMotionConfig()}        </motion.div>

          animate={{ opacity: isVisible ? 1 : 0, y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) }}

          className="text-center mb-16"        {/* Industry Sectors */}

        >        <motion.div

          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">          initial={{ opacity: 0, y: 30 }}

            <span className="text-blue-700 font-semibold">Industry Partners</span>          whileInView={{ opacity: 1, y: 0 }}

          </div>          transition={{ duration: 0.8, delay: 0.2 }}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">          viewport={{ once: true }}

            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hiring</span> Partners          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"

          </h2>        >

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">          {sectors.map((sector, index) => (

            Join thousands of our alumni working at India's top companies across diverse engineering sectors            <motion.div

          </p>              key={sector.name}

        </motion.div>              initial={{ opacity: 0, scale: 0.9 }}

              whileInView={{ opacity: 1, scale: 1 }}

        {/* Companies Grid */}              transition={{ duration: 0.5, delay: index * 0.1 }}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">              viewport={{ once: true }}

          {(isMobile ? mobileCompanies : companies).map((company, index) => (              className="group relative overflow-hidden"

            <motion.div            >

              key={index}              <div className={`bg-gradient-to-br ${sector.color} p-6 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>

              {...getMotionConfig()}                <div className="text-3xl mb-3">{sector.icon}</div>

              animate={{                 <h3 className="font-semibold text-sm mb-2">{sector.name}</h3>

                opacity: isVisible ? 1 : 0,                 <p className="text-xs opacity-90">{sector.companies}+ Companies</p>

                y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)               </div>

              }}            </motion.div>

              transition={{           ))}

                duration: isMobile ? 0.3 : 0.6,         </motion.div>

                delay: isMobile ? 0 : index * 0.1 

              }}        {/* Featured Companies */}

              className={`group relative p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:-translate-y-1' : ''}`}        <motion.div

            >          initial={{ opacity: 0, y: 30 }}

              <div className="text-center space-y-4">          whileInView={{ opacity: 1, y: 0 }}

                <div className="w-24 h-12 mx-auto bg-white rounded-lg flex items-center justify-center shadow-sm">          transition={{ duration: 0.8, delay: 0.4 }}

                  <Image           viewport={{ once: true }}

                    src={company.logo}           className="mb-16"

                    alt={company.name}        >

                    width={80}          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Featured Hiring Partners</h3>

                    height={40}          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    className="object-contain"            {displayCompanies.map((company, index) => (

                  />              <motion.div

                </div>                key={company.name}

                <div>                initial={{ opacity: 0, y: 20 }}

                  <h3 className="font-bold text-gray-900 mb-1">{company.name}</h3>                whileInView={{ opacity: 1, y: 0 }}

                  <p className="text-sm text-blue-600 font-medium mb-2">{company.sector}</p>                transition={{ duration: 0.5, delay: index * 0.1 }}

                  <p className="text-xs text-gray-600 mb-2">{company.positions}</p>                viewport={{ once: true }}

                  <p className="text-sm font-bold text-green-600">{company.package}</p>                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"

                </div>              >

              </div>                <div className="flex items-center justify-center h-16 mb-4 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">

            </motion.div>                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">

          ))}                    {company.name}

        </div>                  </div>

                </div>

        {/* Sector Statistics */}                <h4 className="font-bold text-gray-800 mb-2">{company.name}</h4>

        <motion.div                <p className="text-sm text-blue-600 font-medium mb-2">{company.sector}</p>

          {...getMotionConfig()}                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{company.positions}</p>

          animate={{                 <div className="flex items-center justify-between">

            opacity: isVisible ? 1 : 0,                   <span className="text-sm font-semibold text-green-600">{company.package}</span>

            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

          }}                </div>

          transition={{               </motion.div>

            duration: isMobile ? 0.3 : 0.8,             ))}

            delay: isMobile ? 0 : 0.6           </div>

          }}        </motion.div>

          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12"

        >        {/* Statistics Banner */}

          <div className="text-center mb-12">        <motion.div

            <h3 className="text-3xl font-bold text-gray-900 mb-4">          initial={{ opacity: 0, scale: 0.95 }}

              Industry <span className="text-blue-600">Distribution</span>          whileInView={{ opacity: 1, scale: 1 }}

            </h3>          transition={{ duration: 0.8, delay: 0.6 }}

            <p className="text-lg text-gray-600">          viewport={{ once: true }}

              Our placement network spans across multiple engineering sectors          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"

            </p>        >

          </div>          <h3 className="text-2xl font-bold mb-4">Partnership Impact</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">            <div>

            {sectors.map((sector, index) => (              <div className="text-3xl font-bold mb-2">500+</div>

              <motion.div              <div className="text-sm opacity-90">Active Partners</div>

                key={index}            </div>

                {...getMotionConfig()}            <div>

                animate={{               <div className="text-3xl font-bold mb-2">25+</div>

                  opacity: isVisible ? 1 : 0,               <div className="text-sm opacity-90">Industry Sectors</div>

                  y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30)             </div>

                }}            <div>

                transition={{               <div className="text-3xl font-bold mb-2">150+</div>

                  duration: isMobile ? 0.3 : 0.6,               <div className="text-sm opacity-90">Cities Covered</div>

                  delay: isMobile ? 0 : 0.8 + index * 0.1             </div>

                }}            <div>

                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"              <div className="text-3xl font-bold mb-2">95%</div>

              >              <div className="text-sm opacity-90">Partner Retention</div>

                <div className="text-4xl mb-4">{sector.icon}</div>            </div>

                <h4 className="font-bold text-gray-900 mb-2">{sector.name}</h4>          </div>

                <div className={`text-2xl font-bold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`}>        </motion.div>

                  {sector.companies}+      </div>

                </div>    </div>

                <p className="text-sm text-gray-600 mt-1">Companies</p>  )

              </motion.div>}
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          {...getMotionConfig()}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) 
          }}
          transition={{ 
            duration: isMobile ? 0.3 : 0.8, 
            delay: isMobile ? 0 : 1.0 
          }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join These Companies?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your journey with our industry-aligned training programs and guaranteed placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Explore Courses
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Get Placement Assistance
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyPartners