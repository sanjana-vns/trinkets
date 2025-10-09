import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'STAAD Pro Course in Mumbai | Structural Analysis & Design Training',
  description: 'Master STAAD Pro structural analysis and design software in Mumbai. Industry-focused training for building modeling, bridge design, and structural engineering with expert guidance.',
  keywords: 'STAAD Pro course Mumbai, structural analysis training, building design course, bridge design training, structural engineering Mumbai, STAAD Pro certification',
  openGraph: {
    title: 'STAAD Pro Course in Mumbai | Structural Analysis & Design Training',
    description: 'Master STAAD Pro structural analysis and design software in Mumbai. Industry-focused training for building modeling, bridge design, and structural engineering.',
    type: 'website',
    url: 'https://trinkets.com/courses/staad-pro',
  },
}

// Performance-optimized animations
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
  .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
  .animate-slideDown { animation: slideDown 0.8s ease-out forwards; }
`;

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "ETABS",
      description: "Advanced structural engineering software for multi-story buildings",
      duration: "3 Months",
      link: "/courses/etabs"
    },
    {
      title: "Structural Engineering",
      description: "Complete structural design and analysis program",
      duration: "6 Months", 
      link: "/courses/structural-design-analysis"
    },
    {
      title: "E3D Piping Course",
      description: "AVEVA E3D for 3D piping design and modeling",
      duration: "4 Months",
      link: "/courses/e3d-piping"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{course.duration}</span>
                <Link href={course.link} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function STAADProCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Enhanced Creative Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-500/20 animate-fadeIn">
                <span className="text-3xl mr-3">🏗️</span>
                <span className="text-blue-200 font-bold text-lg">Structural Engineering Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp">
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  STAAD Pro Course
                </span>
                <br />
                <span className="text-white">in Mumbai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
                Master structural analysis and design with industry-standard STAAD Pro software. 
                Build bridges, skyscrapers, and complex structures with confidence.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-slideUp" style={{animationDelay: '0.6s'}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="font-semibold">Building Design</div>
                  <div className="text-sm text-blue-200">Complete Modeling</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🌉</div>
                  <div className="font-semibold">Bridge Analysis</div>
                  <div className="text-sm text-blue-200">Advanced Design</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold">3 Months</div>
                  <div className="text-sm text-blue-200">Expert Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">100% Placement</div>
                  <div className="text-sm text-blue-200">Guaranteed Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{animationDelay: '0.8s'}}>
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  Start STAAD Pro Journey
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="#curriculum"
                  className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">📋</span>
                  View Curriculum
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">⬇</span>
                </Link>
              </div>
            </div>

            {/* Right Content - STAAD Pro Features Showcase */}
            <div className="lg:w-full mt-16 lg:mt-0 animate-slideDown" style={{animationDelay: '1s'}}>
              <div className="relative">
                {/* Main Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Structural Modeling */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">🏗️</div>
                    <h3 className="text-xl font-bold mb-2">Structural Modeling</h3>
                    <p className="text-sm text-blue-200">Complete 3D structure creation</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Industry Standard
                    </div>
                  </div>

                  {/* Analysis Engine */}
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-2">Analysis Engine</h3>
                    <p className="text-sm text-blue-200">Advanced structural analysis</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Powerful Computing
                    </div>
                  </div>

                  {/* Design Codes */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">📋</div>
                    <h3 className="text-xl font-bold mb-2">Design Codes</h3>
                    <p className="text-sm text-blue-200">IS, ACI, BS, Eurocode support</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Global Standards
                    </div>
                  </div>

                  {/* Bridge Design */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">🌉</div>
                    <h3 className="text-xl font-bold mb-2">Bridge Design</h3>
                    <p className="text-sm text-blue-200">Specialized bridge modeling</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Advanced Features
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20"></div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fadeIn" style={{animationDelay: '1.2s'}}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-300">450+</div>
                  <div className="text-sm text-blue-200">Students Trained</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300">⭐ 4.7</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-blue-200">Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Course Overview */}
      <section className="container mx-auto px-4 py-20 relative" id="course-details">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-lg mr-2">🎯</span>
                <span className="font-semibold">Professional STAAD Pro Course</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Master STAAD Pro Software
                </span>
                <br />
                <span className="text-gray-800">Mumbai&apos;s Premier Structural Training</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Transform your structural engineering career with Mumbai&apos;s most comprehensive STAAD Pro course. 
                Learn building modeling, bridge design, and advanced structural analysis from industry experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slideUp">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏗️</span>
                    Why Choose Our STAAD Pro Course?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Complete structural modeling and analysis fundamentals",
                      "Master building design techniques with real Mumbai projects",
                      "Bridge design and infrastructure modeling expertise",
                      "International design codes (IS, ACI, BS, Eurocode) training",
                      "Expert faculty with 15+ years structural engineering experience",
                      "Live project exposure with Mumbai's leading engineering firms"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-blue-800 transition-colors">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAAD Pro Software Features */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-cyan-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">⚡</span>
                    STAAD Pro Software Mastery
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Building Design", desc: "Multi-story Modeling", color: "from-blue-400 to-indigo-500" },
                      { name: "Bridge Analysis", desc: "Infrastructure Design", color: "from-indigo-400 to-purple-500" },
                      { name: "Load Analysis", desc: "Dynamic Modeling", color: "from-cyan-400 to-blue-500" },
                      { name: "Design Codes", desc: "Global Standards", color: "from-green-400 to-cyan-500" }
                    ].map((feature, index) => (
                      <div key={index} className="group">
                        <div className={`bg-gradient-to-r ${feature.color} text-white p-4 rounded-xl text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                          <div className="font-bold text-sm mb-1">{feature.name}</div>
                          <div className="text-xs opacity-90">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
                {/* Mumbai Engineering Benefits */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏙️</span>
                    Mumbai Engineering Advantage
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Learn from Mumbai's iconic infrastructure projects",
                      "Network with structural engineers from top Mumbai firms",
                      "Access to Mumbai's extensive construction job market",
                      "Training aligned with Mumbai's building regulations",
                      "Site visits to ongoing Mumbai construction projects",
                      "Guest lectures from Mumbai's renowned structural engineers"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">★</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Statistics */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">📊</span>
                    Course Statistics
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Duration", value: "3 Months", icon: "⏱️" },
                      { label: "Rating", value: "⭐ 4.7/5", icon: "🌟" },
                      { label: "Students", value: "450+ Enrolled", icon: "👥" },
                      { label: "Mode", value: "Online & Offline", icon: "💻" },
                      { label: "Projects", value: "Live Industry", icon: "🏗️" },
                      { label: "Placement", value: "100% Support", icon: "🎯" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="font-semibold text-green-800 text-sm">{item.label}</div>
                        <div className="text-green-600 text-xs">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Start Your Structural Engineering Journey!</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join Mumbai&apos;s most trusted STAAD Pro training institute with proven industry success
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Book Free Demo Class
                  </Link>
                  <Link
                    href="#curriculum"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    📋 View Detailed Curriculum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section for Voice Search */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-20 relative overflow-hidden" id="faqs">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl mr-3">❓</span>
              <span className="font-bold text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                STAAD Pro Course Mumbai
              </span>
              <br />
              <span className="text-gray-800">Everything You Need to Know</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get answers to the most common questions about our STAAD Pro structural analysis course in Mumbai. 
              Learn about training duration, placement assistance, and career opportunities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  question: "What is the best STAAD Pro course in Mumbai?",
                  answer: "Our STAAD Pro course in Mumbai is the most comprehensive structural analysis training program covering complete building modeling, bridge design, and advanced structural engineering. With 15+ years of experience, we provide industry-expert training, live project exposure, and guaranteed placement assistance in Mumbai&apos;s top engineering companies. Our course includes hands-on practice with real Mumbai infrastructure projects and 100% job placement support."
                },
                {
                  question: "How long is the STAAD Pro course duration in Mumbai?",
                  answer: "Our STAAD Pro course in Mumbai is a comprehensive 3-month program. This includes 1 month of intensive STAAD Pro fundamentals, 1 month of advanced structural modeling and analysis, and 1 month of live project training with Mumbai-based engineering firms. We also offer flexible weekend batches for working professionals in Mumbai&apos;s construction industry."
                },
                {
                  question: "What is the STAAD Pro course fees in Mumbai?",
                  answer: "Our STAAD Pro course fees in Mumbai is very competitive and includes all software licenses, study materials, and placement assistance. We offer flexible payment options including EMI facilities. The course fee covers STAAD Pro software training, structural analysis projects, and guaranteed job placement support. Contact us for current fees and special Mumbai resident discounts."
                },
                {
                  question: "Is placement assistance provided for STAAD Pro course in Mumbai?",
                  answer: "Yes! We provide 100% placement assistance for our STAAD Pro course in Mumbai. Our placement team has tie-ups with 150+ structural engineering companies, construction firms, and design consultancies across Mumbai, Pune, and Maharashtra. We guarantee interview calls and provide career counseling, resume building, and interview preparation to ensure successful job placement in Mumbai's engineering industry."
                },
                {
                  question: "Which companies in Mumbai hire STAAD Pro professionals?",
                  answer: "Mumbai has excellent opportunities for STAAD Pro professionals. Top hiring companies include L&T Construction, Tata Consulting Engineers, Shapoorji Pallonji, Godrej & Boyce, Mahindra Lifespace, and numerous structural design consultancies in Mumbai. Our students work in building design, bridge engineering, and infrastructure companies across Mumbai, Navi Mumbai, and Thane with attractive salary packages."
                },
                {
                  question: "What software is covered in STAAD Pro course Mumbai?",
                  answer: "Our STAAD Pro course in Mumbai covers comprehensive software training including STAAD Pro structural analysis, STAAD Foundation for foundation design, and integration with AutoCAD for drafting. Students get hands-on experience with the latest STAAD Pro versions used by Mumbai's leading structural engineering companies and infrastructure development firms."
                },
                {
                  question: "Can I learn STAAD Pro course online in Mumbai?",
                  answer: "Yes! We offer both classroom and online STAAD Pro course options in Mumbai. Our online training includes live interactive sessions, recorded lectures, software access, and virtual lab practice. Online students receive the same quality training, placement assistance, and certification as classroom students. We also provide hybrid options for Mumbai students who prefer flexible learning schedules."
                },
                {
                  question: "What are the career opportunities after STAAD Pro course in Mumbai?",
                  answer: "After completing our STAAD Pro course in Mumbai, you can work as Structural Design Engineer, Building Design Consultant, Bridge Design Engineer, Structural Analysis Specialist, or Project Engineer. Mumbai's construction boom offers excellent opportunities in building design, infrastructure development, and engineering services with starting salaries ranging from ₹3-8 lakhs per annum."
                },
                {
                  question: "Do you provide STAAD Pro certification in Mumbai?",
                  answer: "Yes, we provide industry-recognized STAAD Pro certification in Mumbai upon course completion. Our certificate is valued by Mumbai's top employers and includes proficiency in structural modeling, analysis, and design. We also assist students in obtaining Bentley official STAAD Pro certifications to enhance their credibility in Mumbai's competitive engineering job market."
                },
                {
                  question: "What is the eligibility for STAAD Pro course in Mumbai?",
                  answer: "Our STAAD Pro course in Mumbai is open to students with engineering background. Minimum qualification is diploma/degree in civil, mechanical, or structural engineering. We welcome fresh graduates, working professionals, and career changers looking to enter Mumbai's thriving construction and infrastructure industry. Basic understanding of structural engineering concepts is helpful but not mandatory."
                },
                {
                  question: "Are there weekend batches for STAAD Pro course in Mumbai?",
                  answer: "Yes, we offer flexible weekend STAAD Pro course batches in Mumbai for working professionals. Weekend batches run on Saturdays and Sundays with extended hours to cover the complete curriculum. This allows Mumbai working professionals to upgrade their skills without affecting their current job commitments while pursuing career advancement in structural engineering."
                },
                {
                  question: "How is practical training provided in STAAD Pro course Mumbai?",
                  answer: "Our STAAD Pro course in Mumbai emphasizes hands-on practical training with state-of-the-art computer labs, latest software versions, and real industry projects. Students work on actual structural design projects from Mumbai companies, visit construction sites, and get mentorship from experienced structural engineers working in Mumbai&apos;s leading engineering firms and infrastructure companies."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp border border-blue-100" style={{animationDelay: `${index * 0.1}s`}}>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-8 hover:bg-blue-50 transition-colors rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white transform group-hover:rotate-180 transition-transform duration-300">
                          <span className="text-lg font-bold">+</span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-8 pb-8">
                      <div className="h-px bg-gradient-to-r from-blue-200 to-indigo-200 mb-6"></div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      <div className="mt-4 flex items-center text-blue-600">
                        <span className="text-sm font-semibold">💡 Helpful Answer</span>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Call to Action */}
          <div className="text-center mt-16 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-blue-200">
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl mr-4">🤔</span>
                <h3 className="text-3xl font-bold text-gray-800">Still Have Questions?</h3>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Our admission counselors are here to help you understand everything about our STAAD Pro course in Mumbai. 
                Get personalized guidance about course details, career prospects, and placement opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📞 Speak to Counselor
                </Link>
                <Link
                  href="#hero"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  📅 Book Free Demo
                </Link>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold">Mumbai Training Center</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">⏰</span>
                  <span className="font-semibold">Flexible Timings</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <span className="text-2xl">💯</span>
                  <span className="font-semibold">100% Placement Assist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-lg text-gray-600">Comprehensive STAAD Pro training modules</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Introduction to STAAD Pro</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Software interface and navigation</li>
                <li>• Basic structural concepts</li>
                <li>• Material properties definition</li>
                <li>• Unit systems and conventions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structural Modeling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Geometry creation techniques</li>
                <li>• Member properties and sections</li>
                <li>• Boundary conditions and supports</li>
                <li>• Load application methods</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Linear and non-linear analysis</li>
                <li>• Dynamic and seismic analysis</li>
                <li>• Design code implementation</li>
                <li>• Result interpretation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600">STAAD Pro is widely used across various engineering sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Building Design</h3>
              <p className="text-gray-600 text-sm">Multi-story buildings, residential complexes</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌉</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bridge Engineering</h3>
              <p className="text-gray-600 text-sm">Highway bridges, railway bridges</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industrial Structures</h3>
              <p className="text-gray-600 text-sm">Warehouses, manufacturing plants</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Power plants, transmission towers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Prospects in Mumbai</h2>
            <p className="text-lg text-gray-600">Excellent opportunities for STAAD Pro professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Structural Design Engineer</li>
                <li>• Building Design Consultant</li>
                <li>• Bridge Design Engineer</li>
                <li>• Structural Analysis Specialist</li>
                <li>• Project Engineer</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• L&T Construction</li>
                <li>• Tata Consulting Engineers</li>
                <li>• Shapoorji Pallonji</li>
                <li>• Godrej & Boyce</li>
                <li>• Mahindra Lifespace</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Entry Level: ₹3-5 LPA</li>
                <li>• Mid Level: ₹5-8 LPA</li>
                <li>• Senior Level: ₹8-15 LPA</li>
                <li>• Lead Engineer: ₹15+ LPA</li>
                <li>• Consultant: ₹20+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master STAAD Pro?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Mumbai&apos;s premier STAAD Pro training program and advance your structural engineering career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <RelatedCourses />
    </div>
  )
}