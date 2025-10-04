import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engineering Placement Services | Trinkets Institute",
  description: "Professional placement assistance for engineering graduates.",
}

export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Engineering Placement Services
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            100% Placement Assistance for Engineering Professionals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold">98%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold">5000+</h3>
              <p>Students Placed</p>
            </div>
            <div className="bg-purple-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold">500+</h3>
              <p>Companies</p>
            </div>
            <div className="bg-cyan-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold">12+ LPA</h3>
              <p>Average Package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
