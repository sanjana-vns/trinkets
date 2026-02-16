import { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Users, Award, Building, ArrowRight, CheckCircle, Star, Quote, Briefcase, Clock, Target, Globe } from 'lucide-react'
import PlacementHero from '@/components/placement/PlacementHero'

export const metadata: Metadata = {
  title: "Placement Assistance - 100% Job Guarantee | Trinkets Institute Mumbai",
  description: "Get guaranteed job placement assistance with 98% success rate. Expert career guidance, interview preparation, and industry connections. Transform your engineering career in Mumbai.",
  keywords: [
    "placement assistance mumbai",
    "engineering job placement",
    "career guidance mumbai",
    "interview preparation",
    "job guarantee program",
    "engineering jobs mumbai",
    "placement consultancy",
    "career development",
    "technical interview coaching",
    "resume building services",
    "industry connections",
    "engineering recruitment",
    "job search assistance",
    "career counseling mumbai",
    "placement services",
    "engineering careers",
    "job placement agency",
    "professional development",
    "skill assessment",
    "career transition",
    "engineering opportunities",
    "placement support",
    "job readiness program",
    "career coaching",
    "employment assistance",
    "engineering placements",
    "career advancement",
    "job preparation",
    "placement training",
    "career success",
    "job market preparation",
    "professional growth",
    "engineering employment",
    "career planning",
    "job placement success",
    "engineering job search",
    "placement guidance",
    "career mentorship",
    "job interview skills",
    "placement program"
  ],
  openGraph: {
    title: "Placement Assistance - 100% Job Guarantee | Trinkets Institute Mumbai",
    description: "Get guaranteed job placement assistance with 98% success rate. Expert career guidance, interview preparation, and industry connections.",
    type: "website",
    locale: "en_IN",
    siteName: "Trinkets Institute"
  },
  twitter: {
    card: "summary_large_image",
    title: "Placement Assistance - 100% Job Guarantee | Trinkets Institute Mumbai",
    description: "Get guaranteed job placement assistance with 98% success rate. Expert career guidance, interview preparation, and industry connections."
  },
  alternates: {
    canonical: "https://trinketsinstitute.com/placements"
  }
}

// Use shared component-level PlacementHero for consistency

// Quick Stats Section
const PlacementStats = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center group">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform group-hover:scale-110" />
          <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        <div className="text-center group">
          <Target className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform group-hover:scale-110" />
          <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
          <div className="text-gray-600">Career Support</div>
        </div>
        <div className="text-center group">
          <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform group-hover:scale-110" />
          <div className="text-3xl font-bold text-blue-600 mb-1">₹6-20L</div>
          <div className="text-gray-600">Salary Range</div>
        </div>
        <div className="text-center group">
          <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform group-hover:scale-110" />
          <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
          <div className="text-gray-600">Support Rate</div>
        </div>
      </div>
    </div>
  </section>
)

// Placement Process Section
const PlacementProcess = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Placement Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple 4-step process to secure your dream job with personalized guidance at every stage</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <div className="absolute -inset-2 bg-blue-100 rounded-full -z-10 transition-all group-hover:scale-125 opacity-0 group-hover:opacity-100"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills Assessment</h3>
          <p className="text-gray-600">Comprehensive evaluation of your technical skills, soft skills, and career readiness to create a personalized development plan.</p>
        </div>
        
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <div className="absolute -inset-2 bg-indigo-100 rounded-full -z-10 transition-all group-hover:scale-125 opacity-0 group-hover:opacity-100"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Training & Preparation</h3>
          <p className="text-gray-600">Intensive interview coaching, resume optimization, and industry-specific training to make you job-ready and confident.</p>
        </div>
        
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <div className="absolute -inset-2 bg-purple-100 rounded-full -z-10 transition-all group-hover:scale-125 opacity-0 group-hover:opacity-100"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Matching</h3>
          <p className="text-gray-600">Strategic matching with relevant opportunities based on your skills, preferences, and career goals through our industry network.</p>
        </div>
        
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <span className="text-3xl font-bold text-white">4</span>
            </div>
            <div className="absolute -inset-2 bg-pink-100 rounded-full -z-10 transition-all group-hover:scale-125 opacity-0 group-hover:opacity-100"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Support</h3>
          <p className="text-gray-600">Ongoing mentorship, performance tracking, and career advancement guidance even after successful job placement.</p>
        </div>
      </div>
    </div>
  </section>
)

// Success Stories Section
const SuccessStories = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real students, real results - hear from our graduates who transformed their careers</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <Quote className="w-10 h-10 text-blue-400 mb-6" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;The comprehensive training helped me transition from campus to a senior design role. The placement team&rsquo;s guidance was instrumental in landing my dream job at Siemens.&rdquo;
          </p>
          <div className="border-t pt-6">
            <div className="font-semibold text-gray-800 text-lg">Rajesh Kumar</div>
            <div className="text-blue-600 font-medium">Senior Design Engineer at Siemens</div>
            <div className="text-sm text-gray-600 mt-1">Package: ₹14 LPA • Mechanical Engineering</div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <Quote className="w-10 h-10 text-blue-400 mb-6" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;Amazing support throughout the journey. The interview preparation sessions gave me confidence to crack multiple technical rounds and secure my position at ABB.&rdquo;
          </p>
          <div className="border-t pt-6">
            <div className="font-semibold text-gray-800 text-lg">Priya Sharma</div>
            <div className="text-blue-600 font-medium">Automation Engineer at ABB</div>
            <div className="text-sm text-gray-600 mt-1">Package: ₹12 LPA • Electrical Engineering</div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <Quote className="w-10 h-10 text-blue-400 mb-6" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;Helped me switch from general civil role to specialized structural engineering with 80% salary hike. The industry connections made all the difference.&rdquo;
          </p>
          <div className="border-t pt-6">
            <div className="font-semibold text-gray-800 text-lg">Arjun Patel</div>
            <div className="text-blue-600 font-medium">Structural Engineer at L&T</div>
            <div className="text-sm text-gray-600 mt-1">Package: ₹16 LPA • Civil Engineering</div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link 
          href="/testimonials" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25"
        >
          View All Success Stories
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
)

// Hiring Partners Section
const HiringPartners = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Hiring Partners</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">500+ leading companies trust us for their talent acquisition needs across various engineering domains</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        {[
          'Siemens', 'ABB', 'L&T', 'Tata Steel', 'Mahindra', 'Reliance',
          'ONGC', 'IOCL', 'Thermax', 'Godrej', 'Shapoorji Pallonji', 'Technimont',
          'Bajaj Auto', 'Ashok Leyland', 'BHEL', 'NTPC', 'Jindal Steel', 'Adani'
        ].map((company, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:bg-blue-50 hover:shadow-lg group"
          >
            <div className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              {company}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-6">And many more industry leaders...</p>
        <Link 
          href="/contact" 
          className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Partner With Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
)

// Call to Action Section
const PlacementCTA = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Join thousands of successful engineers who trusted us with their career journey. 
        Get personalized placement assistance and land your dream job.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
        >
          Start Your Journey Today
        </Link>
        <Link 
          href="/courses" 
          className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600"
        >
          Explore Our Courses
        </Link>
      </div>
    </div>
  </section>
)

export default function PlacementsPage() {
  return (
    <main className="min-h-screen">
      <PlacementHero />
      <PlacementStats />
      <PlacementProcess />
      <SuccessStories />
      <HiringPartners />
      <PlacementCTA />
    </main>
  )
}