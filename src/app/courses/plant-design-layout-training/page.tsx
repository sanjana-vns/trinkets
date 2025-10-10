import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Building2, 
  Cog, 
  Factory, 
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
  Settings,
  Wrench,
  Layers,
  Shield,
  Zap,
  FileText,
  Database,
  MonitorSpeaker,
  BarChart3,
  Gauge,
  Cpu,
  HardHat,
  Construction,
  Boxes,
  Grid3X3,
  Workflow,
  Package,
  Ruler,
  Compass,
  PenTool
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plant Design and Layout Training in Mumbai | Industrial Plant Engineering Course | Trinkets Technology',
  description: 'Master industrial plant design and layout with our comprehensive training in Mumbai. Learn PDMS, E3D, AutoCAD Plant 3D, piping layout, equipment arrangement, and safety considerations. Expert-led course with 100% placement assistance.',
  keywords: 'plant design and layout training in mumbai, plant design course mumbai, industrial plant layout training, PDMS training, E3D plant design, AutoCAD Plant 3D course, piping layout design, equipment arrangement, plant engineering training, process plant design, industrial layout optimization, plant safety design, plant engineering mumbai, chemical plant design training, petrochemical plant layout',
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
    title: 'Plant Design and Layout Training in Mumbai | Industrial Plant Engineering Course',
    description: 'Master industrial plant design and layout with our comprehensive training in Mumbai. Learn PDMS, E3D, AutoCAD Plant 3D, and advanced plant engineering techniques.',
    url: '/courses/plant-design-layout-training',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: '/images/plant-design-layout-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Plant Design and Layout Training in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plant Design and Layout Training in Mumbai | Industrial Plant Engineering Course',
    description: 'Master industrial plant design and layout with comprehensive training in Mumbai. Expert instruction in PDMS, E3D, AutoCAD Plant 3D, and plant engineering principles.',
    images: ['/images/plant-design-layout-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  alternates: {
    canonical: '/courses/plant-design-layout-training',
  },
}

export default function PlantDesignLayoutTrainingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Plant Design and Layout Training in Mumbai",
    "description": "Comprehensive industrial plant design and layout training covering PDMS, E3D, AutoCAD Plant 3D, piping layout, equipment arrangement, and safety considerations in Mumbai.",
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
    "teaches": ["Plant Design", "Industrial Layout", "PDMS", "E3D", "Piping Layout", "Equipment Arrangement", "Plant Safety"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plant Design and Layout Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "PDMS Plant Design",
          "description": "Master plant design using PDMS software for industrial applications"
        },
        {
          "@type": "Course", 
          "name": "E3D Plant Engineering",
          "description": "Advanced plant design and modeling using AVEVA E3D"
        },
        {
          "@type": "Course",
          "name": "Industrial Layout Optimization",
          "description": "Plant layout design and optimization for process industries"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "312",
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
        {/* Creative Hero Section with Industrial Theme */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white overflow-hidden">
          {/* Animated Background Elements - Industrial Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border border-gray-300/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400/10 rounded-lg animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-slate-300/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-20 w-2 h-32 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-28 h-2 bg-gray-400/20 animate-pulse"></div>
            
            {/* Industrial Icons Animation */}
            <div className="absolute top-24 right-1/3 text-blue-400/30 animate-float">
              <Factory className="w-12 h-12" />
            </div>
            <div className="absolute bottom-40 left-1/4 text-gray-400/30 animate-float-delayed">
              <Cog className="w-10 h-10" />
            </div>
            <div className="absolute top-2/3 right-20 text-slate-400/30 animate-bounce">
              <Building2 className="w-8 h-8" />
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb Navigation */}
              <nav className="mb-8 text-sm">
                <ol className="flex items-center space-x-2 text-blue-200">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li className="text-white font-medium">Plant Design and Layout Training</li>
                </ol>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                    <Factory className="w-4 h-4 mr-2" />
                    Engineer Industrial Excellence
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-300 to-slate-400">
                      Plant Design
                    </span>
                    <br />
                    <span className="text-white">& Layout</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-400">
                      Training in Mumbai
                    </span>
                  </h1>
                  
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                    Master industrial plant design and layout with our comprehensive Plant Design and Layout Training in Mumbai. 
                    Learn PDMS, E3D, AutoCAD Plant 3D, and advanced plant engineering techniques to become 
                    a certified industrial design expert.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                      <span className="font-medium">Mumbai Location</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Clock className="w-5 h-5 mr-2 text-gray-300" />
                      <span className="font-medium">5 Months Duration</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Award className="w-5 h-5 mr-2 text-slate-300" />
                      <span className="font-medium">Industry Certified</span>
                    </div>
                    <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <Users className="w-5 h-5 mr-2 text-blue-300" />
                      <span className="font-medium">100% Placement</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link 
                      href="/contact" 
                      className="bg-gradient-to-r from-blue-500 to-slate-500 hover:from-blue-600 hover:to-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Start Plant Engineering Career
                    </Link>
                    <Link 
                      href="/courses" 
                      className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore All Programs
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-slate-400/10 rounded-3xl blur-xl"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                          <span>PDMS & E3D Plant Design Software</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />
                          <span>AutoCAD Plant 3D & Piping Layout</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-slate-400 mr-3 flex-shrink-0" />
                          <span>Equipment Arrangement & Optimization</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                          <span>Process Plant Safety Design</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />
                          <span>Industrial Layout Optimization</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-slate-400 mr-3 flex-shrink-0" />
                          <span>Real Mumbai Industrial Projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with Industrial Theme */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">800+</div>
                  <div className="text-gray-600 font-medium">Plant Design Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Industrial Plants Designed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600 font-medium">Job Placement Success Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">18+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Plant Design and Layout Training */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Cog className="w-4 h-4 mr-2" />
                  Why Choose Our Plant Design Training?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Master Industrial Plant Design with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Expert Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our Plant Design and Layout Training in Mumbai combines theoretical knowledge with practical skills, 
                  preparing you for successful careers in industrial plant engineering and process design.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Advanced Design Software</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master industry-leading software like PDMS, E3D, and AutoCAD Plant 3D for comprehensive plant design 
                    and layout engineering in Mumbai&apos;s industrial projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Grid3X3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">Layout Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn advanced plant layout optimization techniques, equipment arrangement strategies, and space utilization 
                    for efficient industrial operations in Mumbai&apos;s process industries.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Safety & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master industrial safety standards, hazard analysis, and regulatory compliance for plant design 
                    adhering to Mumbai&apos;s industrial safety regulations and international standards.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Process Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn process flow optimization, equipment integration, and utility distribution for efficient plant operations 
                    in Mumbai&apos;s chemical and petrochemical industries.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Construction className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Construction Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master construction sequencing, material handling, and project execution strategies for industrial plant 
                    construction projects across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Real Industrial Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work on actual plant design projects from Mumbai&apos;s chemical, petrochemical, and pharmaceutical industries 
                    to gain practical experience in industrial engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Creative Curriculum Section with Plant Design Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Plant Design & Layout
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Training Curriculum</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers plant design fundamentals to advanced industrial layout optimization, 
                  ensuring you&apos;re prepared for Mumbai&apos;s process industries and engineering consultancies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Plant Design Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Process plant engineering principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment selection and sizing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Process flow diagram development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Plant layout design principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industrial safety and hazard analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">PDMS & E3D Software Training</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">PDMS plant design and modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AVEVA E3D advanced features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3D modeling and visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment and piping arrangement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Clash detection and resolution</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">AutoCAD Plant 3D & Piping</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD Plant 3D fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Piping and instrumentation design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment modeling and placement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Isometric and orthographic drawings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Plant documentation and reports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900">Layout Optimization & Safety</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Plant layout optimization techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industrial safety and hazard studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Fire and explosion prevention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Emergency evacuation planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Regulatory compliance and standards</span>
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
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  Course Features & Opportunities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Complete Plant Design Training
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> With Industry Exposure</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Plant Design and Layout Training in Mumbai provides hands-on experience with 
                  leading software, expert mentorship, and direct connections to Mumbai&apos;s industrial engineering sector.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Industry-Standard Software</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Master PDMS, E3D, AutoCAD Plant 3D, and other leading plant design software used in Mumbai&apos;s 
                    industrial projects and engineering consultancies.
                  </p>
                  <Link href="/courses/piping-design-engineering" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Learn Piping Integration <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">Real Project Portfolio</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Build an impressive portfolio with real plant design projects from Mumbai&apos;s chemical, petrochemical, 
                    and pharmaceutical industrial developments.
                  </p>
                  <Link href="/gallery" className="text-slate-600 hover:text-slate-700 font-semibold flex items-center">
                    View Project Gallery <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Receive industry-recognized plant design certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s process engineering industry.
                  </p>
                  <Link href="/about" className="text-gray-600 hover:text-gray-700 font-semibold flex items-center">
                    About Our Expertise <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Industry Networking</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Connect with Mumbai&apos;s leading process engineering firms, industrial consultants, and plant design companies 
                    through our extensive industry network and placement assistance.
                  </p>
                  <Link href="/placements" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                    View Placement Success <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Advanced Laboratory</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Practice in our state-of-the-art plant design laboratory with latest software, industrial simulation tools, 
                    and equipment models for comprehensive learning.
                  </p>
                  <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center">
                    Explore Our Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <MonitorSpeaker className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Expert Mentorship</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Learn from certified plant design professionals and industrial engineers with extensive experience in 
                    Mumbai&apos;s process industries and engineering projects.
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
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  Related Training Programs
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expand Your Industrial Design
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Expertise</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complement your Plant Design and Layout skills with these related courses designed for 
                  comprehensive expertise in Mumbai&apos;s industrial engineering and process design sectors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Link href="/courses/piping-design-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">Piping Design Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master piping design principles, layout optimization, and integration with plant equipment 
                    for comprehensive industrial engineering solutions.
                  </p>
                </Link>

                <Link href="/courses/process-engineering" className="group block bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-slate-700 transition-colors">Process Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn process design fundamentals, heat integration, and process optimization techniques 
                    for efficient plant operations and industrial processes.
                  </p>
                </Link>

                <Link href="/courses/sp3d-piping-design-training" className="group block bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">Smart Plant 3D (SP3D)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrate plant design with advanced 3D modeling using SP3D for comprehensive industrial 
                    design and engineering project development.
                  </p>
                </Link>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Corporate Training Available</h3>
                  <p className="text-gray-600 mb-6">
                    Customized Plant Design and Layout training programs for engineering consultancies, 
                    process industries, and industrial companies in Mumbai.
                  </p>
                  <Link href="/corporate-training" className="inline-block bg-gradient-to-r from-blue-600 to-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-slate-700 transition-all duration-300 transform hover:scale-105">
                    Explore Corporate Training
                  </Link>
                </div>
                
                <Link href="/courses" className="inline-block bg-gradient-to-r from-blue-600 to-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-slate-700 transition-all duration-300 transform hover:scale-105">
                  🏭 Discover All Our Industrial Engineering Programs
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
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  Plant Design Training in Mumbai
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Plant Design Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get answers to common questions about our Plant Design and Layout Training in Mumbai, 
                  certification requirements, career prospects, and course details.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Plant Design and Layout Training in Mumbai is a comprehensive course covering industrial plant engineering, 
                    equipment arrangement, piping layout, safety considerations, and process optimization. 
                    The course includes hands-on training with PDMS, E3D, AutoCAD Plant 3D, and real Mumbai industrial projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Plant Design and Layout Training in Mumbai has a duration of 5 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s engineering and industrial sectors.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Plant Design and Layout Training in Mumbai. 
                    Our dedicated placement team works with our network of 200+ engineering consultancies, process industries, 
                    chemical companies, and industrial design firms across Mumbai and India.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What software is covered in Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Plant Design and Layout Training in Mumbai covers PDMS, AVEVA E3D, AutoCAD Plant 3D, 
                    PDS, SmartPlant Review, and other industry-standard plant design software 
                    used in Mumbai&apos;s leading industrial and engineering projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What industries can I work in after Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing Plant Design and Layout Training in Mumbai, you can work in chemical, petrochemical, 
                    pharmaceutical, oil & gas, power, and manufacturing industries. Mumbai&apos;s industrial belt offers 
                    excellent opportunities in process engineering, plant design consultancies, and industrial automation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What career opportunities exist after Plant Design and Layout Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing Plant Design and Layout Training in Mumbai, you can pursue careers as Plant Design Engineer, 
                    Layout Engineer, Process Engineer, Industrial Designer, Plant Safety Engineer, Project Engineer, 
                    or Plant Operations Manager with leading firms in Mumbai&apos;s thriving industrial sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Industrial Theme */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Industrial Theme */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-10 left-10 w-6 h-6 border border-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-slate-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-slate-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-blue-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Factory className="w-4 h-4 mr-2" />
                  Launch Your Plant Engineering Career
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Plant Design and Layout in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful plant design engineers who have advanced their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s industrial and process engineering sectors.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-slate-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-slate-500 hover:from-blue-600 hover:to-slate-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Build Industrial Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Discover Our Industrial Expertise
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}