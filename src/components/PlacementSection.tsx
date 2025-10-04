const PlacementSection = () => {
  const placements = [
    {
      company: "Tata Consulting Engineers Limited",
      designation: "Piping Design Engineer",
      package: "6 Lakhs Per Annum",
      qualification: "BE in Mechanical Engineering"
    },
    {
      company: "Black and Veatch",
      designation: "E3D Piping Designer", 
      package: "6 Lakhs Per Annum",
      qualification: "SSC"
    },
    {
      company: "Effwa Infra & Research LTD.",
      designation: "Piping Designer",
      package: "4 Lakhs Per Annum", 
      qualification: "SSC"
    },
    {
      company: "Tata Consulting Engineers Ltd",
      designation: "E3D Piping Design Engineer",
      package: "7.2 Lakhs Per Annum",
      qualification: "Diploma in Electronics engineering"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Placements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students have been successfully placed in leading companies across the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {placements.map((placement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Company – {placement.company}</h3>
                  <p className="text-gray-700 mb-1">Designation – {placement.designation}</p>
                  <p className="text-blue-600 font-medium mb-1">Package – {placement.package}</p>
                  <p className="text-gray-600 text-sm">Qualification – {placement.qualification}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-600 transition-all duration-200">
            View All Placements
          </button>
        </div>
      </div>
    </section>
  )
}

export default PlacementSection