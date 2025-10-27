import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ETABS Course in Mumbai | Advanced Structural Engineering Software Training',
  description: 'Master ETABS software for multi-story building analysis and design in Mumbai. Advanced structural engineering training with expert guidance and industry projects.',
  keywords: 'ETABS course Mumbai, structural engineering software, building analysis training, multi-story design course, ETABS certification Mumbai, seismic analysis training',
  openGraph: {
    title: 'ETABS Course in Mumbai | Advanced Structural Engineering Software Training',
    description: 'Master ETABS software for multi-story building analysis and design in Mumbai. Advanced structural engineering training with expert guidance.',
    type: 'website',
    url: 'https://trinketsinstitute.com/courses/etabs',
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/etabs',
    languages: {
      'en': 'https://trinketsinstitute.com/courses/etabs',
    }
  },
  robots: {
    index: true,
    follow: true,
  }
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
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-2deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
    50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
  }
  @keyframes building-rise {
    0% { transform: translateY(100px) scale(0.8); opacity: 0; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }
  .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
  .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
  .animate-slideDown { animation: slideDown 0.8s ease-out forwards; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
  .animate-building-rise { animation: building-rise 1.2s ease-out forwards; }
`;

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "STAAD Pro",
      description: "Structural analysis and design for buildings and bridges",
      duration: "3 Months",
      link: "/courses/staad-pro"
    },
    {
      title: "Structural Engineering",
      description: "Complete structural design and analysis program",
      duration: "6 Months", 
      link: "/courses/structural-design-analysis"
    },
    {
      title: "CAESAR II",
      description: "Pipe stress analysis software training",
      duration: "2 Months",
      link: "/courses/caesar-ii"
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

export default function ETABSCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Enhanced Creative Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-purple-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-purple-500/20 animate-fadeIn">
                <span className="text-3xl mr-3">🏗️</span>
                <span className="text-purple-200 font-bold text-lg">Advanced Structural Engineering</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp">
                <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  ETABS Course
                </span>
                <br />
                <span className="text-white">in Mumbai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
                Master advanced structural engineering software for multi-story building design. 
                Create skyscrapers, analyze seismic forces, and design world-class structures.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-slideUp" style={{animationDelay: '0.6s'}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="font-semibold">High-Rise Design</div>
                  <div className="text-sm text-purple-200">Multi-story Buildings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🌊</div>
                  <div className="font-semibold">Seismic Analysis</div>
                  <div className="text-sm text-purple-200">Earthquake Simulation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold">3 Months</div>
                  <div className="text-sm text-purple-200">Expert Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="font-semibold">4.6/5 Rating</div>
                  <div className="text-sm text-purple-200">Student Reviews</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{animationDelay: '0.8s'}}>
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  Start ETABS Journey
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="#curriculum"
                  className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">📋</span>
                  View Curriculum
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">⬇</span>
                </Link>
              </div>
            </div>

            {/* Right Content - ETABS Building Showcase */}
            <div className="lg:w-full mt-16 lg:mt-0 animate-slideDown" style={{animationDelay: '1s'}}>
              <div className="relative">
                {/* Building Structure Visualization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Building Modeling */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-building-rise">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-xl font-bold mb-2">Building Modeling</h3>
                    <p className="text-sm text-purple-200">3D multi-story structures</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Advanced Modeling
                    </div>
                  </div>

                  {/* Seismic Analysis */}
                  <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 animate-building-rise" style={{animationDelay: '0.2s'}}>
                    <div className="text-4xl mb-4">🌊</div>
                    <h3 className="text-xl font-bold mb-2">Seismic Analysis</h3>
                    <p className="text-sm text-purple-200">Earthquake simulation</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Dynamic Analysis
                    </div>
                  </div>

                  {/* Wind Analysis */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-building-rise" style={{animationDelay: '0.4s'}}>
                    <div className="text-4xl mb-4">💨</div>
                    <h3 className="text-xl font-bold mb-2">Wind Analysis</h3>
                    <p className="text-sm text-purple-200">Wind load calculations</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Load Analysis
                    </div>
                  </div>

                  {/* Optimization */}
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 animate-building-rise" style={{animationDelay: '0.6s'}}>
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-2">Optimization</h3>
                    <p className="text-sm text-purple-200">Design optimization</p>
                    <div className="mt-4 flex items-center text-xs text-green-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Smart Design
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fadeIn" style={{animationDelay: '1.2s'}}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-300">420+</div>
                  <div className="text-sm text-purple-200">Students Enrolled</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-pink-300">⭐ 4.6</div>
                  <div className="text-sm text-purple-200">Rating</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-300">100%</div>
                  <div className="text-sm text-purple-200">Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Course Overview */}
      <section className="container mx-auto px-4 py-20 relative" id="course-details">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-purple-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <span className="text-lg mr-2">🎯</span>
                <span className="font-semibold">Advanced ETABS Course</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Master ETABS Software
                </span>
                <br />
                <span className="text-gray-800">Mumbai&apos;s Premier Building Design Training</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Advance your structural engineering career with Mumbai&apos;s most comprehensive ETABS course. 
                Learn multi-story building design, seismic analysis, and high-rise optimization from industry experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slideUp">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏢</span>
                    Why Choose Our ETABS Course?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Multi-story building modeling techniques and best practices",
                      "Advanced seismic analysis methods for earthquake simulation",
                      "Wind load analysis and design for high-rise buildings",
                      "Performance-based design concepts and optimization",
                      "Expert faculty with 12+ years building design experience",
                      "Live project exposure with Mumbai's leading construction firms"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-purple-800 transition-colors">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ETABS Features */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">⚡</span>
                    ETABS Key Features
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Building Modeling", desc: "3D Structures", color: "from-purple-400 to-indigo-500" },
                      { name: "Seismic Analysis", desc: "Earthquake Design", color: "from-indigo-400 to-blue-500" },
                      { name: "Wind Analysis", desc: "Load Calculations", color: "from-blue-400 to-cyan-500" },
                      { name: "Optimization", desc: "Design Tools", color: "from-cyan-400 to-purple-500" }
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
                {/* Mumbai Construction Benefits */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🏙️</span>
                    Mumbai Construction Advantage
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Learn from Mumbai's high-rise building projects",
                      "Network with structural engineers from top Mumbai developers",
                      "Access to Mumbai's booming construction job market",
                      "Training aligned with Mumbai's seismic zone regulations",
                      "Site visits to iconic Mumbai skyscraper projects",
                      "Guest lectures from Mumbai's leading building designers"
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
                      { label: "Rating", value: "⭐ 4.6/5", icon: "🌟" },
                      { label: "Students", value: "420+ Enrolled", icon: "👥" },
                      { label: "Mode", value: "Online & Offline", icon: "💻" },
                      { label: "Projects", value: "Live Buildings", icon: "🏗️" },
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
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Start Your Building Design Journey!</h3>
                <p className="text-purple-100 mb-6 text-lg">
                  Join Mumbai&apos;s most trusted ETABS training institute with proven high-rise design expertise
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Book Free Demo Class
                  </Link>
                  <Link
                    href="#curriculum"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
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
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20 relative overflow-hidden" id="faqs">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl animate-float-reverse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl mr-3">❓</span>
              <span className="font-bold text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ETABS Course Mumbai
              </span>
              <br />
              <span className="text-gray-800">Everything You Need to Know</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get answers to the most common questions about our ETABS structural engineering course in Mumbai. 
              Learn about training duration, placement assistance, and career opportunities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  question: "What is the best ETABS course in Mumbai?",
                  answer: "Our ETABS course in Mumbai is the most comprehensive structural engineering training program covering advanced multi-story building analysis, seismic design, and high-rise optimization. With 12+ years of experience, we provide industry-expert training, live project exposure, and guaranteed placement assistance in Mumbai&apos;s top construction companies. Our course includes hands-on practice with real Mumbai building projects and 100% job placement support."
                },
                {
                  question: "How long is the ETABS course duration in Mumbai?",
                  answer: "Our ETABS course in Mumbai is a comprehensive 3-month program. This includes 1 month of intensive ETABS fundamentals and building modeling, 1 month of advanced seismic and wind analysis, and 1 month of live project training with Mumbai-based construction firms. We also offer flexible weekend batches for working professionals in Mumbai&apos;s building design industry."
                },
                {
                  question: "What is the ETABS course fees in Mumbai?",
                  answer: "Our ETABS course fees in Mumbai is very competitive and includes all software licenses, study materials, and placement assistance. We offer flexible payment options including EMI facilities. The course fee covers ETABS software training, building analysis projects, and guaranteed job placement support. Contact us for current fees and special Mumbai resident discounts."
                },
                {
                  question: "Is placement assistance provided for ETABS course in Mumbai?",
                  answer: "Yes! We provide 100% placement assistance for our ETABS course in Mumbai. Our placement team has tie-ups with 200+ construction companies, real estate developers, and structural consultancies across Mumbai, Pune, and Maharashtra. We guarantee interview calls and provide career counseling, resume building, and interview preparation to ensure successful job placement in Mumbai's construction industry."
                },
                {
                  question: "Which companies in Mumbai hire ETABS professionals?",
                  answer: "Mumbai has excellent opportunities for ETABS professionals. Top hiring companies include Godrej Properties, Oberoi Realty, Lodha Group, Hiranandani Group, Piramal Realty, Shapoorji Pallonji, and numerous structural design consultancies in Mumbai. Our students work in high-rise building design, residential projects, and commercial developments across Mumbai, Navi Mumbai, and Thane with attractive salary packages."
                },
                {
                  question: "What software is covered in ETABS course Mumbai?",
                  answer: "Our ETABS course in Mumbai covers comprehensive software training including ETABS for building analysis and design, SAFE for foundation design, and integration with AutoCAD for drafting. Students get hands-on experience with the latest ETABS versions used by Mumbai's leading construction companies and real estate developers for high-rise building projects."
                },
                {
                  question: "Can I learn ETABS course online in Mumbai?",
                  answer: "Yes! We offer both classroom and online ETABS course options in Mumbai. Our online training includes live interactive sessions, recorded lectures, software access, and virtual lab practice. Online students receive the same quality training, placement assistance, and certification as classroom students. We also provide hybrid options for Mumbai students who prefer flexible learning schedules."
                },
                {
                  question: "What are the career opportunities after ETABS course in Mumbai?",
                  answer: "After completing our ETABS course in Mumbai, you can work as Structural Design Engineer, High-rise Building Designer, Seismic Analysis Specialist, Building Design Consultant, or Structural Project Manager. Mumbai's construction boom offers excellent opportunities in residential towers, commercial complexes, and infrastructure development with starting salaries ranging from ₹3.5-10 lakhs per annum."
                },
                {
                  question: "Do you provide ETABS certification in Mumbai?",
                  answer: "Yes, we provide industry-recognized ETABS certification in Mumbai upon course completion. Our certificate is valued by Mumbai's top employers and includes proficiency in multi-story building design, seismic analysis, and optimization. We also assist students in obtaining CSI official ETABS certifications to enhance their credibility in Mumbai's competitive construction job market."
                },
                {
                  question: "What is the eligibility for ETABS course in Mumbai?",
                  answer: "Our ETABS course in Mumbai is open to students with engineering background. Minimum qualification is diploma/degree in civil, structural, or mechanical engineering. We welcome fresh graduates, working professionals, and career changers looking to enter Mumbai's thriving construction and real estate industry. Basic understanding of structural engineering concepts is helpful but not mandatory."
                },
                {
                  question: "Are there weekend batches for ETABS course in Mumbai?",
                  answer: "Yes, we offer flexible weekend ETABS course batches in Mumbai for working professionals. Weekend batches run on Saturdays and Sundays with extended hours to cover the complete curriculum. This allows Mumbai working professionals to upgrade their skills without affecting their current job commitments while pursuing career advancement in building design and construction."
                },
                {
                  question: "How is practical training provided in ETABS course Mumbai?",
                  answer: "Our ETABS course in Mumbai emphasizes hands-on practical training with state-of-the-art computer labs, latest software versions, and real industry projects. Students work on actual building design projects from Mumbai companies, visit construction sites of high-rise buildings, and get mentorship from experienced structural engineers working in Mumbai&apos;s leading construction firms and real estate developers."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp border border-purple-100" style={{animationDelay: `${index * 0.1}s`}}>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-8 hover:bg-purple-50 transition-colors rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-800 transition-colors leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white transform group-hover:rotate-180 transition-transform duration-300">
                          <span className="text-lg font-bold">+</span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-8 pb-8">
                      <div className="h-px bg-gradient-to-r from-purple-200 to-indigo-200 mb-6"></div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      <div className="mt-4 flex items-center text-purple-600">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-purple-200">
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl mr-4">🤔</span>
                <h3 className="text-3xl font-bold text-gray-800">Still Have Questions?</h3>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Our admission counselors are here to help you understand everything about our ETABS course in Mumbai. 
                Get personalized guidance about course details, career prospects, and placement opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📞 Speak to Counselor
                </Link>
                <Link
                  href="#hero"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
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
            <p className="text-lg text-gray-600">Comprehensive ETABS training modules</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ETABS Fundamentals</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Software interface and tools</li>
                <li>• Building modeling basics</li>
                <li>• Material and section properties</li>
                <li>• Grid systems and templates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Modeling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Complex geometry creation</li>
                <li>• Load patterns and combinations</li>
                <li>• Diaphragm and floor systems</li>
                <li>• Non-linear modeling techniques</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dynamic analysis procedures</li>
                <li>• Seismic design optimization</li>
                <li>• Performance-based design</li>
                <li>• Result evaluation and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ETABS Key Features</h2>
            <p className="text-lg text-gray-600">Industry-leading capabilities for building design</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Building Modeling</h3>
              <p className="text-gray-600 text-sm">Intuitive 3D modeling for complex buildings</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seismic Analysis</h3>
              <p className="text-gray-600 text-sm">Advanced earthquake simulation and design</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wind Analysis</h3>
              <p className="text-gray-600 text-sm">Comprehensive wind load calculations</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Automated design optimization tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities in Mumbai</h2>
            <p className="text-lg text-gray-600">High demand for ETABS specialists in construction industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Structural Design Engineer</li>
                <li>• High-rise Building Designer</li>
                <li>• Seismic Analysis Specialist</li>
                <li>• Building Design Consultant</li>
                <li>• Structural Project Manager</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Employers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Godrej Properties</li>
                <li>• Oberoi Realty</li>
                <li>• Lodha Group</li>
                <li>• Hiranandani Group</li>
                <li>• Piramal Realty</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Prospects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Fresher: ₹3.5-5 LPA</li>
                <li>• Experienced: ₹6-10 LPA</li>
                <li>• Senior Designer: ₹10-15 LPA</li>
                <li>• Design Manager: ₹15-25 LPA</li>
                <li>• Consultant: ₹25+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master ETABS?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join Mumbai&apos;s leading ETABS training program and excel in high-rise building design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <RelatedCourses />
    </div>
  )
}