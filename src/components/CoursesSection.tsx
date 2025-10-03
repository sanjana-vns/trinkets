const CoursesSection = () => {
  const courses = [
    {
      title: "Piping Engineering",
      description: "Piping Engineering is a specialized field of Mechanical Engineering focused on designing safe, efficient piping systems for industrial facilities.",
      icon: "🔧"
    },
    {
      title: "Instrumentation & Control",
      description: "Instrumentation & Control ensures safe and efficient process automation using sensors, control systems and monitoring technologies across industries.",
      icon: "⚡"
    },
    {
      title: "Electrical Design Engineering",
      description: "Electrical Design Engineering focuses on planning electrical systems for buildings and industries, ensuring power distribution and safety standards.",
      icon: "💡"
    },
    {
      title: "Structural Engineering",
      description: "Structural Engineering involves designing safe, stable structures like buildings and bridges. It ensures they withstand loads and environmental forces.",
      icon: "🏗️"
    },
    {
      title: "MEP Engineering",
      description: "MEP Engineering involves designing and maintaining mechanical, electrical, and plumbing systems to ensure efficiency and safety in buildings.",
      icon: "🔌"
    },
    {
      title: "HVAC Engineering",
      description: "HVAC Engineering designs and optimizes heating, ventilation and air conditioning systems to ensure comfort, air quality and energy efficiency.",
      icon: "❄️"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engineering Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-oriented training programs designed to empower your career with practical skills and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection