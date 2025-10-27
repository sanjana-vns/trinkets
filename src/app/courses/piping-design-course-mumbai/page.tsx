import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSectionTemplate from '../../../components/FAQSectionTemplate'

export const metadata: Metadata = {
  title: 'Piping Design Course in Mumbai | Best Piping Design Training Institute | Trinkets Institute',
  description: 'Join the best Piping Design Course in Mumbai at Trinkets Institute. Learn PDMS, E3D, AutoCAD Plant 3D, P&ID, stress analysis. 100% placement support. Call +91-9820064471',
  keywords: [
    'Piping Design Course Mumbai',
    'Piping Design Training Mumbai',
    'Piping Design Institute Mumbai',
    'PDMS Training Mumbai',
    'E3D Training Mumbai',
    'AutoCAD Plant 3D Course Mumbai',
    'P&ID Training Mumbai',
    'Piping Stress Analysis Course',
    'Process Piping Design Training',
    'Plant Design Course Mumbai',
    'Mechanical Piping Course',
    'Oil Gas Piping Training',
    'Petrochemical Piping Course',
    'Piping Engineering Course Mumbai',
    'Best Piping Design Institute'
  ].join(', '),
  authors: [{ name: 'Trinkets Institute' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Piping Design Course in Mumbai | Best Piping Design Training Institute',
    description: 'Join the best Piping Design Course in Mumbai at Trinkets Institute. Learn PDMS, E3D, AutoCAD Plant 3D, P&ID, stress analysis. 100% placement support.',
    url: 'https://trinketsinstitute.com/courses/piping-design-course-mumbai',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/piping-design-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Design Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Design Course in Mumbai | Best Piping Design Training Institute',
    description: 'Join the best Piping Design Course in Mumbai at Trinkets Institute. Learn PDMS, E3D, AutoCAD Plant 3D, P&ID, stress analysis.',
    images: ['/images/piping-design-course-mumbai.jpg'],
    creator: '@TrinketsInst',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/piping-design-course-mumbai',
  },
  category: 'Education',
}

export default function PipingDesignCourseMumbai() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Piping Design Course in Mumbai',
    description: 'Comprehensive piping design course in Mumbai covering PDMS, E3D, AutoCAD Plant 3D, P&ID development, stress analysis and process piping design for oil & gas and petrochemical industries.',
    provider: {
      '@type': 'Organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Business Address',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400001',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9820064471',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi']
      }
    },
    courseMode: ['In-person', 'Online'],
    educationalLevel: 'Intermediate',
    teaches: [
      'PDMS (Plant Design Management System)',
      'E3D (Everything 3D)',
      'AutoCAD Plant 3D',
      'Piping & Instrumentation Diagrams (P&ID)',
      'Piping Stress Analysis',
      'Process Piping Design',
      'Plant Layout Design',
      'Equipment Modeling'
    ],
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'In-person',
      location: {
        '@type': 'Place',
        name: 'Trinkets Institute',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN'
        }
      },
      instructor: {
        '@type': 'Person',
        name: 'Industry Expert Instructors',
        description: '15+ years experience in piping design and engineering'
      }
    },
    offers: {
      '@type': 'Offer',
      category: 'Education',
      availability: 'InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200'
    }
  }

  const courseModules = [
    {
      title: "Fundamentals of Piping Design",
      duration: "Week 1-2",
      description: "Introduction to piping systems, codes & standards, material specifications",
      icon: "📚",
      topics: ["Piping Components", "Codes & Standards", "Material Selection", "Process Understanding"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "P&ID Development",
      duration: "Week 3-4",
      description: "Comprehensive training on Piping & Instrumentation Diagrams creation",
      icon: "📋",
      topics: ["P&ID Symbols", "Process Flow", "Instrument Integration", "Safety Systems"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "PDMS Training",
      duration: "Week 5-8",
      description: "Hands-on training on Plant Design Management System for 3D modeling",
      icon: "🖥️",
      topics: ["3D Modeling", "Equipment Placement", "Piping Routing", "Clash Detection"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "E3D Training",
      duration: "Week 9-10",
      description: "Advanced Everything 3D software training for complex plant design",
      icon: "🔧",
      topics: ["Advanced Modeling", "Multi-discipline Integration", "Design Review", "Walkthrough"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "AutoCAD Plant 3D",
      duration: "Week 11-12",
      description: "Complete training on AutoCAD Plant 3D for piping design and drafting",
      icon: "🏗️",
      topics: ["2D Drafting", "3D Modeling", "Isometric Generation", "Bill of Materials"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Stress Analysis & Project Work",
      duration: "Week 13-16",
      description: "Piping stress analysis using CAESAR II and real project implementation",
      icon: "⚡",
      topics: ["CAESAR II", "Thermal Analysis", "Support Design", "Live Project"],
      gradient: "from-teal-600 to-blue-600"
    }
  ]

  const highlights = [
    { title: "16 Weeks Duration", value: "16", suffix: "Weeks", icon: "⏰" },
    { title: "100% Placement Support", value: "100", suffix: "%", icon: "🎯" },
    { title: "Industry Expert Faculty", value: "15+", suffix: "Years Exp", icon: "👨‍🏫" },
    { title: "Live Projects", value: "5+", suffix: "Projects", icon: "🚀" }
  ]

  const softwareTools = [
    { name: "PDMS", description: "Plant Design Management System", icon: "🏭", level: "Advanced" },
    { name: "E3D", description: "Everything 3D Design Software", icon: "⚙️", level: "Advanced" },
    { name: "AutoCAD Plant 3D", description: "3D Plant Design & Drafting", icon: "📐", level: "Professional" },
    { name: "CAESAR II", description: "Piping Stress Analysis", icon: "⚡", level: "Intermediate" },
    { name: "SmartPlant 3D", description: "Intergraph Plant Design", icon: "🔧", level: "Basic" },
    { name: "Navisworks", description: "Design Review & Clash Detection", icon: "👁️", level: "Intermediate" }
  ]

  const careerOpportunities = [
    { position: "Piping Design Engineer", package: "4-8 LPA", companies: "50+ Companies", icon: "👷‍♂️" },
    { position: "Process Piping Designer", package: "3.5-7 LPA", companies: "40+ Companies", icon: "🏗️" },
    { position: "Plant Design Engineer", package: "5-10 LPA", companies: "30+ Companies", icon: "🏭" },
    { position: "CAD Piping Designer", package: "3-6 LPA", companies: "60+ Companies", icon: "💻" },
    { position: "Senior Piping Engineer", package: "8-15 LPA", companies: "25+ Companies", icon: "🎯" },
    { position: "Project Engineer", package: "6-12 LPA", companies: "35+ Companies", icon: "📊" }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float-animated"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200/15 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
                <span className="text-blue-600 font-semibold text-sm mr-2">🎓</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Premium Training Program</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Piping Design Course
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  in Mumbai
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Master the art of <strong>Piping Design Course in Mumbai</strong> with hands-on training on PDMS, E3D, AutoCAD Plant 3D, 
                and stress analysis. Join Mumbai&apos;s leading piping design training institute with 100% placement support and industry-expert faculty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Enroll Now - Call +91-9820064471
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="#curriculum" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 View Curriculum
                  </span>
                </Link>
              </div>
            </div>

            {/* Course Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group text-center transform transition-all duration-500 hover:scale-110"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {highlight.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-sm">
                      {highlight.suffix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Curriculum Section */}
        <section id="curriculum" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Comprehensive Piping Design
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Course Curriculum
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                16-week intensive piping design course in Mumbai covering industry-standard software and real-world applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden relative"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {module.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-br ${module.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{module.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {module.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">{module.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-gray-700 text-sm">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Tools Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Software Tools You&apos;ll
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Master
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn industry-standard software tools used by leading engineering companies in Mumbai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareTools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {tool.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{tool.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {tool.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Career Opportunities After
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Piping Design Course
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore lucrative career opportunities in Mumbai&apos;s booming engineering industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerOpportunities.map((career, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden relative"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {career.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {career.position}
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        💰 {career.package}
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        🏢 {career.companies}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">🎓</div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Why Choose Our
                    <span className="block">Piping Design Course in Mumbai?</span>
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Join Mumbai&apos;s premier piping design training institute with industry-expert faculty, 
                    comprehensive curriculum, and guaranteed placement support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      📞 Get Course Details
                    </Link>
                    <Link 
                      href="/placements" 
                      className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center"
                    >
                      🎯 View Placements
                    </Link>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🏆 15+ Years Experience</h4>
                    <p className="text-white/80">Industry-expert faculty with extensive project experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">💻 Hands-on Training</h4>
                    <p className="text-white/80">Practical training on live industrial projects</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🎯 100% Placement Support</h4>
                    <p className="text-white/80">Dedicated placement cell with industry connections</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">🌐 Flexible Learning</h4>
                    <p className="text-white/80">Weekend batches and online sessions available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSectionTemplate
          title="Piping Design Course in Mumbai"
          subtitle="Everything You Need to Know"
          description="Get answers to the most frequently asked questions about our comprehensive Piping Design Course in Mumbai. Learn about training duration, placement assistance, and career opportunities."
          faqs={[
            {
              question: "What is the duration of the piping design course in Mumbai?",
              answer: "Our comprehensive piping design course in Mumbai is a 16-week intensive program covering PDMS, E3D, AutoCAD Plant 3D, P&ID development, and stress analysis with hands-on project work."
            },
            {
              question: "Which software tools are covered in the piping design training?",
              answer: "The course covers industry-standard software including PDMS, E3D, AutoCAD Plant 3D, CAESAR II for stress analysis, SmartPlant 3D, and Navisworks for design review and clash detection."
            },
            {
              question: "Do you provide placement assistance after the piping design course?",
              answer: "Yes, we provide 100% placement support with our dedicated placement cell. We have partnerships with 500+ companies in Mumbai and across India for piping design engineer positions."
            },
            {
              question: "What are the career opportunities after completing piping design course in Mumbai?",
              answer: "Graduates can work as Piping Design Engineers, Process Piping Designers, Plant Design Engineers, CAD Piping Designers, Senior Piping Engineers, and Project Engineers with packages ranging from 3-15 LPA."
            },
            {
              question: "Is the piping design course suitable for fresh graduates?",
              answer: "Yes, our piping design course in Mumbai is designed for both fresh graduates and working professionals. We provide comprehensive training from basics to advanced levels with practical exposure."
            },
            {
              question: "What projects will I work on during the piping design training?",
              answer: "You'll work on real industry projects including oil & gas facilities, petrochemical plants, power plants, and pharmaceutical facilities. Projects include complete piping layout, equipment modeling, and isometric drawings."
            }
          ]}
          phoneNumber="+91-9820924788"
        />

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-4 left-4 w-12 h-12 border-2 border-blue-200/50 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-200/30 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Ready to Start Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Piping Design Career?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join Mumbai&apos;s best piping design course with industry-expert faculty, comprehensive curriculum, and guaranteed placement support. Start your engineering career today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📞 Enroll Now - Call +91-9820064471
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    href="/services/process-piping-design-services" 
                    className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🔧 Our Services
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}