import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Settings, Zap, TrendingUp, Building, Wrench, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Piping Design Engineering Course in Mumbai | Best Industrial Training | Trinkets Institute',
  description: 'Master piping design with our comprehensive course in Mumbai. Industry-expert training in PDMS, SP3D, AutoCAD Plant 3D, Caesar II with job placement assistance.',
  keywords: [
    'Piping Design Engineering Course in Mumbai',
    'piping design training Mumbai',
    'piping design course Mumbai',
    'piping engineering Mumbai',
    'PDMS course Mumbai',
    'SP3D training Mumbai',
    'AutoCAD Plant 3D Mumbai',
    'Caesar II course Mumbai',
    'best piping design training Mumbai',
    'piping design institute Mumbai',
    'piping design classes Mumbai',
    'piping course fees Mumbai',
    'piping training center Mumbai',
    'piping course duration Mumbai',
    'piping design certification Mumbai',
    'piping training institute Mumbai',
    'professional piping course Mumbai',
    'advanced piping training Mumbai',
    'oil and gas course Mumbai',
    'petrochemical training Mumbai',
    'piping stress analysis Mumbai',
    'plant design course Mumbai',
    'piping job training Mumbai',
    'piping placement course Mumbai',
    'piping skill development Mumbai',
    'industrial piping Mumbai',
    'process piping Mumbai',
    'power plant piping Mumbai',
    'refinery piping Mumbai',
    'chemical plant design Mumbai'
  ].join(', '),
  openGraph: {
    title: 'Piping Design Engineering Course in Mumbai | Best Industrial Training',
    description: 'Master piping design with our comprehensive course in Mumbai. Industry-expert training in PDMS, SP3D, AutoCAD Plant 3D, Caesar II with job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/piping-design-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/piping-design-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Design Engineering Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piping Design Engineering Course in Mumbai | Best Industrial Training',
    description: 'Master piping design with our comprehensive course in Mumbai. Industry-expert training in PDMS, SP3D, AutoCAD Plant 3D, Caesar II with job placement assistance.',
    images: ['/images/courses/piping-design-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/piping-design-engineering',
  },
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://trinketsinstitute.com/courses/piping-design-engineering#course',
      name: 'Piping Design Engineering Course in Mumbai',
      description: 'Comprehensive piping design engineering course in Mumbai covering PDMS, SP3D, AutoCAD Plant 3D, Caesar II with hands-on projects, industry certification, and job placement assistance.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic engineering knowledge',
      timeRequired: 'P6M',
      offers: {
        '@type': 'Offer',
        category: 'Industrial Engineering Training',
        availabilityEnds: '2025-12-31',
        availabilityStarts: '2025-10-07'
      },
      location: {
        '@type': 'Place',
        name: 'Trinkets Institute Mumbai',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN'
        }
      },
      teaches: [
        'PDMS (Plant Design Management System)',
        'SP3D (Smart Plant 3D)',
        'AutoCAD Plant 3D',
        'Caesar II Pipe Stress Analysis',
        'P&ID Development',
        'Piping Layout Design',
        'Industrial Piping Systems'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier piping design and industrial engineering training institute in Mumbai',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9820924788',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi']
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://trinketsinstitute.com/courses/piping-design-engineering#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://trinketsinstitute.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Courses',
          item: 'https://trinketsinstitute.com/courses'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Piping Design Engineering',
          item: 'https://trinketsinstitute.com/courses/piping-design-engineering'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/piping-design-engineering#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Piping Design Engineering Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Piping Design Engineering Course in Mumbai is a comprehensive training program covering PDMS, SP3D, AutoCAD Plant 3D, Caesar II, and industrial piping systems design for oil & gas, petrochemical, and power plant industries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of Piping Design Engineering Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Piping Design Engineering Course in Mumbai has a duration of 6 months with flexible timing options including weekday, weekend, and evening batches for working professionals and students.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after Piping Design Engineering Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our Piping Design Engineering Course in Mumbai with our extensive network of oil & gas companies, refineries, and engineering consultancies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after Piping Design Engineering Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our Piping Design Engineering Course in Mumbai, you can work as Piping Design Engineer, Plant Design Engineer, Stress Analysis Engineer, or CAD Designer in oil & gas, petrochemical, power plant, and process industries.'
          }
        }
      ]
    }
  ]
};

export default function PipingDesignEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Industrial Theme */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - Industrial/Piping Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-16 h-4 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute top-32 left-20 w-4 h-16 bg-slate-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-40 right-32 w-20 h-3 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 border border-slate-300/20 rounded-lg rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 right-1/3 w-3 h-20 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-slate-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-24 h-3 bg-slate-400/20 animate-pulse"></div>
            {/* Industrial Piping Specific Elements */}
            <div className="absolute top-24 right-1/4 w-10 h-10 border border-blue-300/20 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-16 h-4 bg-slate-300/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-blue-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">Piping Design Engineering</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-slate-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced Industrial Engineering Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">Piping Design</span>
                <br />Engineering in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Engineer your future with Mumbai&apos;s most comprehensive Piping Design Engineering Course. 
                Master PDMS, SP3D, AutoCAD Plant 3D, and Caesar II with industry-expert training and guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-slate-300" />
                  <span className="font-medium">6 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-slate-500 hover:from-blue-600 hover:to-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Design Your Career Today
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Programs
                </Link>
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
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
                  <div className="text-gray-600 font-medium">Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Industrial Projects</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Industrial Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Wrench className="w-4 h-4 mr-2" />
                  Why Choose Our Piping Design Engineering Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Engineer Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Expert Piping Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Piping Design Engineering Course in Mumbai combines cutting-edge industrial technology 
                  with practical engineering applications to make you industry-ready for Mumbai&apos;s oil & gas and process industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Advanced PDMS & SP3D Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master Plant Design Management System and Smart Plant 3D with hands-on experience 
                    on Mumbai&apos;s major oil & gas and petrochemical projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">AutoCAD Plant 3D & P&ID</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive plant design, P&ID development, and 3D modeling techniques with 
                    certified professionals experienced in Mumbai&apos;s industrial engineering sector.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Caesar II Stress Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master pipe stress analysis, support design, and code compliance essential 
                    for refinery and power plant projects in Mumbai&apos;s industrial landscape.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Industrial Project Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work on live industrial projects from Mumbai&apos;s refineries, chemical plants, and power stations 
                    to gain real-world experience in piping design and plant layout.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Process & Plant Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn process flow diagrams, equipment sizing, and plant layout design following 
                    international standards and Mumbai&apos;s industrial engineering requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized piping design certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s oil & gas and process industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Creative Curriculum Section with Industrial Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Piping Design Engineering
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic piping fundamentals to advanced plant design, 
                  ensuring you&apos;re ready for Mumbai&apos;s demanding industrial and process engineering projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Piping Design Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Piping components and materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">P&ID symbols and standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Process flow diagrams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment layout principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industry codes and standards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">PDMS & SP3D Mastery</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3D plant modeling techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment placement and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Intelligent catalog management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Clash detection and resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automated drawing generation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">AutoCAD Plant 3D & Caesar II</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Spec-driven piping design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Orthographic and isometric views</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pipe stress analysis fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Static and dynamic analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Support design and optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Industrial Project & Certification</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Live refinery project work</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Chemical plant design case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Power plant piping systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industry visits and internships</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Professional certification and portfolio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative Industrial Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Wrench className="w-4 h-4 mr-2" />
                  Expand Your Engineering Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your piping and industrial engineering skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/process-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Process Engineering</h3>
                  <p className="text-gray-700 mb-4">Advanced process design and optimization</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/structural-design-analysis" className="group block bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced structural engineering and simulation</p>
                  <span className="text-slate-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/mep-engineering" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">MEP Engineering</h3>
                  <p className="text-gray-700 mb-4">Mechanical, electrical, and plumbing systems</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with Industrial Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600"> Piping Design Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Piping Design Engineering Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Piping Design Engineering Course in Mumbai is a comprehensive training program covering PDMS, SP3D, AutoCAD Plant 3D, 
                    Caesar II, and industrial piping systems design for oil & gas, petrochemical, and power plant industries. 
                    The course includes hands-on projects based on Mumbai&apos;s industrial engineering requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Piping Design Engineering Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Piping Design Engineering Course in Mumbai has a duration of 6 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s oil & gas and process engineering sectors.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Piping Design Engineering Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Piping Design Engineering Course in Mumbai. 
                    Our dedicated placement team works with our network of 300+ oil & gas companies, refineries, and engineering consultancies 
                    including major organizations across Mumbai and India.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after Piping Design Engineering Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our Piping Design Engineering Course in Mumbai, you can work as Piping Design Engineer, 
                    Plant Design Engineer, Stress Analysis Engineer, or CAD Designer in oil & gas, petrochemical, power plant, 
                    and process industries across Mumbai&apos;s thriving industrial sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Industrial Theme */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Industrial Theme */}
          <div className="absolute inset-0">
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
                  <Settings className="w-4 h-4 mr-2" />
                  Engineer Your Industrial Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Piping Design Engineering in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful piping engineers who have advanced their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s oil & gas and process industries.
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
                  Enroll Now & Engineer Your Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Discover Our Institute
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
