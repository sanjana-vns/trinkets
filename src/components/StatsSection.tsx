const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Courses" },
    { number: "5000+", label: "Trained Students" },
    { number: "95%", label: "Placement Rate" },
    { number: "100+", label: "Expert Teachers" },
    { number: "25+", label: "Industry Awards" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Helping Growing Industries by Providing Trained Manpower
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection