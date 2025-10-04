'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Course Details Component
const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('curriculum')
  const [selectedCourse, setSelectedCourse] = useState(0)
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      subtitle: "Master Modern Web Technologies",
      duration: "24 Weeks",
      format: "Live + Recorded",
      certificate: "Industry Recognized",
      placement: "100% Assistance",
      curriculum: [
        {
          module: "Frontend Fundamentals",
          duration: "6 weeks",
          topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Bootstrap & Tailwind"]
        },
        {
          module: "React Ecosystem",
          duration: "6 weeks", 
          topics: ["React Components", "State Management", "React Router", "Redux/Context API"]
        },
        {
          module: "Backend Development",
          duration: "6 weeks",
          topics: ["Node.js & Express", "RESTful APIs", "Authentication", "Database Integration"]
        },
        {
          module: "Full Stack Projects",
          duration: "6 weeks",
          topics: ["Real-world Projects", "Deployment", "Testing", "Performance Optimization"]
        }
      ],
      tools: ["VS Code", "Git/GitHub", "MongoDB", "AWS", "Docker", "Figma"],
      outcomes: [
        "Build responsive web applications",
        "Create RESTful APIs and microservices", 
        "Deploy applications to cloud platforms",
        "Implement modern development workflows"
      ],
      prerequisites: "Basic computer knowledge",
      price: "₹45,000",
      emi: "₹3,750/month"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      subtitle: "Transform Data into Insights",
      duration: "32 Weeks",
      format: "Live + Hands-on Labs",
      certificate: "IBM Certified",
      placement: "95% Success Rate",
      curriculum: [
        {
          module: "Python for Data Science",
          duration: "8 weeks",
          topics: ["Python Fundamentals", "NumPy & Pandas", "Data Manipulation", "Statistical Computing"]
        },
        {
          module: "Data Analysis & Visualization",
          duration: "8 weeks",
          topics: ["Exploratory Data Analysis", "Matplotlib & Seaborn", "Plotly & Dash", "Statistical Analysis"]
        },
        {
          module: "Machine Learning",
          duration: "8 weeks",
          topics: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Evaluation"]
        },
        {
          module: "Advanced Projects",
          duration: "8 weeks",
          topics: ["Real-world Datasets", "End-to-end Projects", "Model Deployment", "MLOps"]
        }
      ],
      tools: ["Python", "Jupyter", "TensorFlow", "Scikit-learn", "Tableau", "SQL"],
      outcomes: [
        "Analyze complex datasets",
        "Build machine learning models",
        "Create data visualizations",
        "Deploy ML models in production"
      ],
      prerequisites: "Basic mathematics and statistics",
      price: "₹55,000",
      emi: "₹4,583/month"
    }
  ]

  const tabs = [
    { id: 'curriculum', label: 'Curriculum', icon: '📚' },
    { id: 'tools', label: 'Tools & Tech', icon: '🛠️' },
    { id: 'outcomes', label: 'Learning Outcomes', icon: '🎯' },
    { id: 'details', label: 'Course Details', icon: 'ℹ️' }
  ]

  const course = featuredCourses[selectedCourse]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-morph-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Course Deep Dive
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive details about our most popular courses. Each program is carefully crafted 
            to ensure industry-relevant skills and hands-on experience.
          </p>
        </div>

        {/* Course Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {featuredCourses.map((course, index) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCourse === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {course.title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Overview Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-blue-100 mb-4">{course.subtitle}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-blue-200">Duration</div>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Format</div>
                      <div className="font-semibold">{course.format}</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Certificate</div>
                      <div className="font-semibold">{course.certificate}</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Placement</div>
                      <div className="font-semibold">{course.placement}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-black text-gray-800 mb-1">{course.price}</div>
                    <div className="text-gray-600">or {course.emi} EMI</div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Enroll Now
                    </button>
                    <button className="w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                      Download Syllabus
                    </button>
                    <button className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300">
                      Schedule Demo
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Prerequisites:</div>
                    <div className="text-gray-800">{course.prerequisites}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h3>
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                Module {index + 1}: {module.module}
                              </h4>
                              <p className="text-gray-600">{module.duration}</p>
                            </div>
                            <svg 
                              className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                                expandedModule === index ? 'rotate-180' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        
                        {expandedModule === index && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                              {module.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-gray-700">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'tools' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Tools & Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {course.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="group p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold">{tool.slice(0, 2)}</span>
                            </div>
                            <h4 className="font-semibold text-gray-800">{tool}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Learning Outcomes</h3>
                    <div className="space-y-4">
                      {course.outcomes.map((outcome, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 font-medium">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">📅 Schedule</h4>
                            <p className="text-gray-600">Weekdays: 7 PM - 9 PM<br />Weekends: 10 AM - 1 PM</p>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">👥 Batch Size</h4>
                            <p className="text-gray-600">Maximum 15 students per batch for personalized attention</p>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">🎓 Certification</h4>
                            <p className="text-gray-600">Industry-recognized certificate upon completion</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">💼 Placement Support</h4>
                            <p className="text-gray-600">100% placement assistance with our industry partners</p>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">🔄 Lifetime Access</h4>
                            <p className="text-gray-600">Lifetime access to course materials and updates</p>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-2">🏆 Project Portfolio</h4>
                            <p className="text-gray-600">Build 5+ real-world projects for your portfolio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails