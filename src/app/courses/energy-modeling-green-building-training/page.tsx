import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Building, 
  Zap, 
  Leaf, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  BookOpen, 
  TrendingUp, 
  Globe, 
  Target, 
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  PlayCircle,
  Download,
  ArrowRight,
  Lightbulb,
  Battery,
  Sun,
  Wind,
  TreePine,
  Recycle,
  Shield,
  Calculator,
  BarChart3,
  Gauge,
  Settings,
  FileText,
  Cpu,
  Database,
  MonitorSpeaker
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Energy Modeling and Green Building Training in Mumbai | LEED Certification Course | Trinkets Technology',
  description: 'Master energy modeling and green building design with our comprehensive training in Mumbai. Learn eQUEST, EnergyPlus, LEED certification, sustainable HVAC design, and green building technologies. Expert-led course with 100% placement assistance.',
  keywords: 'energy modeling and green building training in mumbai, energy modeling course mumbai, green building training mumbai, LEED certification training, eQUEST training, EnergyPlus course, sustainable building design, energy efficiency training, green building certification, HVAC energy analysis, building energy simulation, sustainable design training mumbai, energy auditing course, green building consultant training, renewable energy systems training',
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
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  category: 'Engineering Education',
  openGraph: {
    title: 'Energy Modeling and Green Building Training in Mumbai | LEED Certification Course',
    description: 'Master energy modeling and green building design with our comprehensive training in Mumbai. Learn eQUEST, EnergyPlus, LEED certification, and sustainable building technologies.',
    url: '/courses/energy-modeling-green-building-training',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/energy-modeling-green-building-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy Modeling and Green Building Training in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Modeling and Green Building Training in Mumbai | LEED Certification Course',
    description: 'Master energy modeling and green building design with comprehensive training in Mumbai. Expert instruction in eQUEST, EnergyPlus, LEED certification, and sustainable technologies.',
    images: ['/images/energy-modeling-green-building-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: '/courses/energy-modeling-green-building-training',
  },
}

export default function EnergyModelingGreenBuildingTrainingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Energy Modeling and Green Building Training in Mumbai",
    "description": "Comprehensive energy modeling and green building training covering eQUEST, EnergyPlus, LEED certification, sustainable HVAC design, and green building technologies in Mumbai.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute of Technology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
        "addressLocality": "Mulund West",
        "addressRegion": "Mumbai",
        "postalCode": "400080",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9820924788",
        "contactType": "admissions"
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": ["On-site", "Online", "Hybrid"],
    "educationalLevel": "Professional",
    "teaches": ["Energy Modeling", "Green Building Design", "LEED Certification", "Sustainable HVAC", "Building Energy Simulation", "Renewable Energy Systems"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Energy Modeling and Green Building Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "eQUEST Energy Modeling",
          "description": "Master building energy modeling using eQUEST software"
        },
        {
          "@type": "Course", 
          "name": "LEED Certification Training",
          "description": "Complete LEED Green Associate and AP certification preparation"
        },
        {
          "@type": "Course",
          "name": "Sustainable HVAC Design",
          "description": "Energy-efficient HVAC system design and optimization"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247",
      "bestRating": "5"
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Creative Hero Section with Energy Theme */}
        <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-emerald-900 text-white overflow-hidden">
          {/* Animated Background Elements - Energy Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border border-teal-300/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-400/10 rounded-lg animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-green-300/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-20 w-2 h-32 bg-teal-400/20 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-28 h-2 bg-green-400/20 animate-pulse"></div>
            
            {/* Energy Icons Animation */}
            <div className="absolute top-24 right-1/3 text-green-400/30 animate-float">
              <Sun className="w-12 h-12" />
            </div>
            <div className="absolute bottom-40 left-1/4 text-teal-400/30 animate-float-delayed">
              <Wind className="w-10 h-10" />
            </div>
            <div className="absolute top-2/3 right-20 text-emerald-400/30 animate-bounce">
              <Leaf className="w-8 h-8" />
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb Navigation */}
              <nav className="mb-8 text-sm">
                <ol className="flex items-center space-x-2 text-green-200">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li className="text-white font-medium">Energy Modeling and Green Building Training</li>
                </ol>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-green-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                    <Leaf className="w-4 h-4 mr-2" />
                    Build Sustainable Future
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400">
                      Energy Modeling
                    </span>
                    <br />
                    <span className="text-white">& Green Building</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
                      Training in Mumbai
                    </span>
                  </h1>
                  
                  <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
                    Master sustainable building design with our comprehensive Energy Modeling and Green Building Training in Mumbai. 
                    Learn eQUEST, EnergyPlus, LEED certification, and cutting-edge green building technologies to become 
                    a certified sustainable design expert.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <MapPin className="w-5 h-5 mr-2 text-green-300" />
                      <span className="font-medium">Mumbai Location</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Clock className="w-5 h-5 mr-2 text-teal-300" />
                      <span className="font-medium">4 Months Duration</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Award className="w-5 h-5 mr-2 text-emerald-300" />
                      <span className="font-medium">LEED Certified</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Users className="w-5 h-5 mr-2 text-green-300" />
                      <span className="font-medium">100% Placement</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link 
                      href="/contact" 
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Start Green Career Journey
                    </Link>
                    <Link 
                      href="/courses" 
                      className="border-2 border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore All Programs
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-3xl blur-xl"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                          <span>eQUEST & EnergyPlus Energy Modeling</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0" />
                          <span>LEED Green Associate & AP Certification</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                          <span>Sustainable HVAC System Design</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                          <span>Renewable Energy Integration</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0" />
                          <span>Building Performance Optimization</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                          <span>Green Building Certification Process</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with Energy Theme */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Green Building Experts Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">LEED Certified Professionals</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Job Placement Success Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Energy Modeling and Green Building Training */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Why Choose Our Energy Modeling Training?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Master Sustainable Design with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> Expert Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our Energy Modeling and Green Building Training in Mumbai combines theoretical knowledge with practical skills, 
                  preparing you for successful careers in sustainable building design and energy efficiency consulting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Advanced Energy Modeling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master industry-leading software like eQUEST and EnergyPlus for comprehensive building energy analysis 
                    and optimization in Mumbai&apos;s diverse climate conditions.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">LEED Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Complete preparation for LEED Green Associate and LEED AP credentials, essential for green building 
                    professionals in Mumbai&apos;s sustainable construction market.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">Renewable Energy Systems</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn solar, wind, and other renewable energy integration strategies for sustainable building design 
                    tailored to Mumbai&apos;s energy requirements and policies.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Performance Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master building performance optimization techniques, energy auditing, and commissioning processes 
                    for maximum efficiency in Mumbai&apos;s commercial and residential projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-lime-900">Sustainable Design Principles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive sustainable design principles, green materials selection, and environmental impact 
                    assessment for eco-friendly construction in Mumbai.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Real Mumbai Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work on actual green building projects from Mumbai&apos;s residential, commercial, and institutional sectors 
                    to gain practical experience in sustainable design implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Creative Curriculum Section with Energy Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Energy Modeling & Green Building
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> Training Curriculum</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers energy modeling fundamentals to advanced green building technologies, 
                  ensuring you&apos;re prepared for Mumbai&apos;s sustainable construction and consulting opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">Energy Modeling Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Building energy basics and thermodynamics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">eQUEST software training and modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Climate analysis for Mumbai region</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Building envelope optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Energy consumption analysis techniques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900">Advanced Energy Simulation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">EnergyPlus advanced modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Dynamic thermal simulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">HVAC system energy optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Lighting and daylighting analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Energy cost optimization strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900">LEED Certification & Green Building</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">LEED rating system and certification process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Green building materials and technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Water efficiency and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Indoor environmental quality optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Sustainable site development</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">Renewable Energy & Sustainability</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Solar energy system design and integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Wind energy and microgrids</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Energy storage and smart building systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Life cycle assessment and carbon footprint</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Net-zero energy building design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Features Section with Internal Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  Course Features & Opportunities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Complete Energy Modeling Training
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> With Industry Exposure</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Energy Modeling and Green Building Training in Mumbai provides hands-on experience with 
                  leading software, expert mentorship, and direct connections to Mumbai&apos;s sustainable construction industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Industry-Standard Software</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Master eQUEST, EnergyPlus, DesignBuilder, and other leading energy modeling software used in Mumbai&apos;s 
                    green building projects and sustainability consulting firms.
                  </p>
                  <Link href="/courses/hvac-system-design" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                    Learn HVAC Integration <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Real Project Portfolio</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Build an impressive portfolio with real energy modeling projects from Mumbai&apos;s commercial, residential, 
                    and institutional green building developments.
                  </p>
                  <Link href="/gallery" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center">
                    View Project Gallery <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">LEED Certification Prep</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Complete preparation for LEED Green Associate and LEED AP certifications, essential credentials for 
                    green building professionals in Mumbai&apos;s sustainable construction market.
                  </p>
                  <Link href="/about" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center">
                    About Our Expertise <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Industry Networking</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Connect with Mumbai&apos;s leading green building consultants, energy auditors, and sustainable design firms 
                    through our extensive industry network and placement assistance.
                  </p>
                  <Link href="/placements" className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center">
                    View Placement Success <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-lime-900">Hands-on Laboratory</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Practice in our state-of-the-art energy modeling laboratory with latest software, building simulation tools, 
                    and renewable energy system components for comprehensive learning.
                  </p>
                  <Link href="/services" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                    Explore Our Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <MonitorSpeaker className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Expert Mentorship</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Learn from certified LEED professionals and energy modeling experts with extensive experience in 
                    Mumbai&apos;s green building and sustainable design projects.
                  </p>
                  <Link href="/testimonials" className="text-orange-600 hover:text-orange-700 font-semibold flex items-center">
                    Read Success Stories <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses Section with Internal Links */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  Related Training Programs
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expand Your Sustainable Design
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> Expertise</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complement your Energy Modeling and Green Building skills with these related courses designed for 
                  comprehensive expertise in Mumbai&apos;s sustainable construction and engineering sectors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Link href="/courses/hvac-system-design" className="group block bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900 group-hover:text-cyan-700 transition-colors">HVAC System Design & Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master sustainable HVAC design, energy-efficient systems, and integration with green building technologies 
                    for optimal building performance in Mumbai&apos;s climate.
                  </p>
                </Link>

                <Link href="/courses/mep-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">MEP Engineering & Coordination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive MEP system design with focus on energy efficiency, sustainable technologies, 
                    and green building integration for Mumbai projects.
                  </p>
                </Link>

                <Link href="/courses/building-information-modelling-training" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900 group-hover:text-green-700 transition-colors">Building Information Modeling (BIM)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrate energy modeling with BIM workflows for comprehensive sustainable building design and 
                    performance analysis throughout the project lifecycle.
                  </p>
                </Link>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Corporate Training Available</h3>
                  <p className="text-gray-600 mb-6">
                    Customized Energy Modeling and Green Building training programs for architectural firms, 
                    engineering consultancies, and construction companies in Mumbai.
                  </p>
                  <Link href="/corporate-training" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    Explore Corporate Training
                  </Link>
                </div>
                
                <Link href="/courses" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  🌱 Discover All Our Sustainable Design Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative SEO Content Section for Mumbai */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  Energy Modeling Training in Mumbai
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> Energy Modeling Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get answers to common questions about our Energy Modeling and Green Building Training in Mumbai, 
                  certification requirements, career prospects, and course details.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Energy Modeling and Green Building Training in Mumbai is a comprehensive course covering building energy simulation, 
                    sustainable design principles, LEED certification, renewable energy systems, and green building technologies. 
                    The course includes hands-on training with eQUEST, EnergyPlus, and real Mumbai green building projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Energy Modeling and Green Building Training in Mumbai has a duration of 4 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s architecture, engineering, and construction sectors.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Energy Modeling and Green Building Training in Mumbai. 
                    Our dedicated placement team works with our network of 150+ green building consultants, energy auditing firms, 
                    architectural practices, and sustainable design companies across Mumbai and India.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What software is covered in Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Energy Modeling and Green Building Training in Mumbai covers eQUEST, EnergyPlus, DesignBuilder, 
                    LEED Online, RETScreen, ECOTECT, and other industry-standard energy modeling and green building software 
                    used in Mumbai&apos;s leading sustainable construction and consulting projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Is LEED certification included in Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, our Energy Modeling and Green Building Training in Mumbai includes comprehensive LEED certification preparation 
                    for both LEED Green Associate and LEED AP credentials. We provide study materials, practice exams, 
                    and guidance for successful certification essential for green building professionals in Mumbai.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What career opportunities exist after Energy Modeling and Green Building Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing Energy Modeling and Green Building Training in Mumbai, you can pursue careers as Energy Analyst, 
                    Green Building Consultant, LEED AP, Sustainability Consultant, Energy Auditor, Building Performance Analyst, 
                    or Renewable Energy Specialist with leading firms in Mumbai&apos;s growing sustainable construction sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Energy Theme */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Energy Theme */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-10 left-10 w-6 h-6 border border-green-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-teal-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-green-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-teal-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-green-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-green-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Leaf className="w-4 h-4 mr-2" />
                  Launch Your Green Building Career
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Energy Modeling and Green Building in Mumbai?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful energy modeling professionals who have advanced their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s sustainable construction and consulting industries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-green-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-teal-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Build Sustainable Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-green-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Discover Our Green Expertise
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
