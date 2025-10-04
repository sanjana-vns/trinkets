import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engineering Placement Services - 100% Placement Assistance | Trinkets Institute",
  description: "Get guaranteed placement assistance in top engineering companies. Expert career guidance, industry partnerships, and 100% placement support for mechanical, electrical, civil engineering professionals.",
}

export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
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

      {/* Placement Process Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Placement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of technical skills, projects, and industry readiness to identify strengths and improvement areas.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview Preparation</h3>
              <p className="text-gray-600">Mock interviews, technical round practice, HR discussions, and personality development to boost confidence.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
              <p className="text-gray-600">Direct placement assistance with our industry partners and continuous support until successful job placement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Partners Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Industry Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-700">Manufacturing</h4>
              <p className="text-sm text-gray-600">Tata Motors, Mahindra, L&T</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-700">Power & Energy</h4>
              <p className="text-sm text-gray-600">NTPC, Siemens, ABB</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-700">Construction</h4>
              <p className="text-sm text-gray-600">L&T Construction, DLF</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-700">Oil & Gas</h4>
              <p className="text-sm text-gray-600">ONGC, Reliance, BPCL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Disciplines Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Engineering Disciplines We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-blue-500 bg-blue-50">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Mechanical Engineering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Design Engineer</li>
                <li>• Production Engineer</li>
                <li>• Quality Engineer</li>
                <li>• Project Engineer</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-green-500 bg-green-50">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Electrical Engineering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Power Systems Engineer</li>
                <li>• Control Engineer</li>
                <li>• Automation Engineer</li>
                <li>• Maintenance Engineer</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-orange-500 bg-orange-50">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Civil Engineering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Structural Engineer</li>
                <li>• Site Engineer</li>
                <li>• Construction Manager</li>
                <li>• Planning Engineer</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-purple-500 bg-purple-50">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Chemical Engineering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Process Engineer</li>
                <li>• Plant Engineer</li>
                <li>• Safety Engineer</li>
                <li>• R&D Engineer</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-red-500 bg-red-50">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Piping Engineering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Piping Design Engineer</li>
                <li>• Stress Analysis Engineer</li>
                <li>• Layout Engineer</li>
                <li>• Piping Supervisor</li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-teal-500 bg-teal-50">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">Instrumentation</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Instrumentation Engineer</li>
                <li>• Control Systems Engineer</li>
                <li>• Calibration Engineer</li>
                <li>• DCS Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Support Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Placement Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Pre-Placement Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Resume building and portfolio development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Technical skill enhancement programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Industry-specific training modules
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Soft skills and communication training
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Post-Placement Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  First 90 days onboarding support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Career progression guidance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Alumni network access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Continuous learning opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-6">Join thousands of successful engineers who found their dream jobs through our placement program.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Placement
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
