import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Building2, Route, Mountain, Compass, Calculator, Ruler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AutoCAD Civil Course Mumbai | Civil Engineering Training',
  description: 'Master AutoCAD Civil 3D with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier civil engineering institute.',
  keywords: [
    'AutoCAD Civil Software Course in Mumbai',
    'AutoCAD Civil 3D training Mumbai',
    'AutoCAD Civil course Mumbai',
    'AutoCAD Civil software training Mumbai',
    'civil engineering course Mumbai',
    'AutoCAD Civil 3D certification Mumbai',
    'best AutoCAD Civil training Mumbai',
    'AutoCAD Civil institute Mumbai',
    'AutoCAD Civil classes Mumbai',
    'AutoCAD Civil software course fees Mumbai',
    'AutoCAD Civil training center Mumbai',
    'AutoCAD Civil course duration Mumbai',
    'AutoCAD Civil software certification Mumbai',
    'AutoCAD Civil training institute Mumbai',
    'professional AutoCAD Civil course Mumbai',
    'advanced AutoCAD Civil training Mumbai',
    'AutoCAD Civil design course Mumbai',
    'AutoCAD Civil drafting course Mumbai',
    'AutoCAD Civil 3D modeling training Mumbai',
    'AutoCAD Civil job training Mumbai',
    'AutoCAD Civil placement course Mumbai',
    'AutoCAD Civil skill development Mumbai',
    'civil engineering design Mumbai',
    'infrastructure design course Mumbai',
    'road design course Mumbai',
    'highway design training Mumbai',
    'survey engineering course Mumbai',
    'land development course Mumbai',
    'construction engineering Mumbai',
    'civil CAD training Mumbai'
  ].join(', '),
  openGraph: {
    title: 'AutoCAD Civil Software Course in Mumbai | Best Civil Engineering Training',
    description: 'Master AutoCAD Civil 3D with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/autocad-civil-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/autocad-civil-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoCAD Civil Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoCAD Civil Software Course in Mumbai | Best Civil Engineering Training',
    description: 'Master AutoCAD Civil 3D with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/autocad-civil-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/autocad-civil-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/autocad-civil-software-course#course',
      name: 'AutoCAD Civil Software Course in Mumbai',
      description: 'Comprehensive AutoCAD Civil 3D training course in Mumbai with hands-on projects, industry certification, and job placement assistance for civil engineering professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic AutoCAD knowledge and civil engineering fundamentals',
      timeRequired: 'P3M',
      offers: {
        '@type': 'Offer',
        category: 'AutoCAD Civil 3D Training',
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
        'AutoCAD Civil 3D Fundamentals',
        'Road Design & Highway Planning',
        'Land Development & Site Design',
        'Survey Data Processing',
        'Infrastructure Modeling',
        'Construction Documentation',
        'Quantity Takeoffs'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and civil design training institute in Mumbai',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9876543210',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi']
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://trinketsinstitute.com/courses/autocad-civil-software-course#breadcrumb',
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
          name: 'AutoCAD Civil Software Course',
          item: 'https://trinketsinstitute.com/courses/autocad-civil-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/autocad-civil-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AutoCAD Civil Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AutoCAD Civil Software Course in Mumbai is a comprehensive training program covering AutoCAD Civil 3D, road design, land development, survey data processing, and infrastructure modeling for civil engineering professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of AutoCAD Civil Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AutoCAD Civil Software Course in Mumbai has a duration of 3 months with flexible timing options including weekday, weekend, and evening batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after AutoCAD Civil Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our AutoCAD Civil Software Course in Mumbai with our extensive network of construction, infrastructure, and consulting companies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after AutoCAD Civil Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our AutoCAD Civil Software Course in Mumbai, you can work as Civil Designer, Highway Engineer, Land Development Specialist, Survey Engineer, or Infrastructure Planner in construction and consulting firms.'
          }
        }
      ]
    }
  ]
};

export default function AutoCADCivilCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Animated Elements */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - Civil Engineering Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-2 bg-orange-400/20 animate-pulse"></div>
            <div className="absolute top-32 left-20 w-2 h-24 bg-amber-400/20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 border-2 border-yellow-400/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-orange-300/20 rotate-45 animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-4 bg-amber-300/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-4 h-16 bg-yellow-400/20 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-orange-300 transition-colors">Home</Link></li>
                  <li className="text-orange-300">/</li>
                  <li><Link href="/courses" className="hover:text-orange-300 transition-colors">Courses</Link></li>
                  <li className="text-orange-300">/</li>
                  <li className="text-orange-200">AutoCAD Civil Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  Premier Civil Engineering Training Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">AutoCAD Civil Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-3xl mx-auto">
                Transform your civil engineering career with Mumbai&apos;s most comprehensive AutoCAD Civil Software Course. 
                Learn advanced infrastructure design, road planning, and land development with guaranteed placement assistance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-orange-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-yellow-300" />
                  <span className="font-medium">3 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-orange-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Begin Your Civil Journey
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with Civil Theme */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">750+</div>
                  <div className="text-gray-600 font-medium">Civil Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Route className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Infrastructure Projects</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Job Success Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Civil Engineering Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Calculator className="w-4 h-4 mr-2" />
                  Why Choose Our AutoCAD Civil Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> Expert Civil Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive AutoCAD Civil Software Course in Mumbai combines cutting-edge technology 
                  with practical infrastructure design experience to make you industry-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Route className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Advanced Road Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master highway planning, corridor design, and traffic engineering with hands-on experience 
                    on Mumbai&apos;s major infrastructure projects and road networks.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-900">Land Development Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn site design, grading, drainage systems, and utility planning with certified 
                    professionals experienced in Mumbai&apos;s urban development projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-amber-900">Survey Data Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Process real survey data, create accurate terrain models, and develop comprehensive 
                    topographic maps for Mumbai&apos;s challenging geographical conditions.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-900">Infrastructure Modeling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design complex infrastructure systems including bridges, tunnels, and drainage networks 
                    using advanced 3D modeling techniques and BIM workflows.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Quantity Takeoffs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Generate accurate material estimates, cost calculations, and construction schedules 
                    essential for project management in Mumbai&apos;s construction industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized AutoCAD Civil 3D certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s civil engineering sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with Civil Engineering Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Ruler className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AutoCAD Civil Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic civil design to advanced infrastructure 
                  modeling, ensuring you&apos;re ready for Mumbai&apos;s demanding civil engineering projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-900">AutoCAD Civil 3D Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD Civil 3D interface and workspace setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drawing setup and coordinate systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Basic object creation and editing tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project management and data organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Civil engineering standards and codes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-900">Survey & Terrain Modeling</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Survey data import and processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Creating and editing surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Contour generation and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Volume calculations and earthwork analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drainage and watershed analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900">Road Design & Alignment</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Horizontal and vertical alignment design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Corridor modeling and assembly creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Intersection and roundabout design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Superelevation and lane transitioning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cross-section generation and analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-900">Site Development & Documentation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Land development and site grading</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Utility design and pipe networks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Construction documentation and plan production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Quantity takeoffs and material estimation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Portfolio project and industry certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative Civil Engineering Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  Expand Your Engineering Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your civil engineering and design skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/structural-design-analysis" className="group block bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced structural engineering and analysis techniques</p>
                  <span className="text-orange-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-mechanical-design" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-700 mb-4">Comprehensive mechanical design and drafting with AutoCAD</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/tekla-software-course" className="group block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Route className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Tekla Software Course</h3>
                  <p className="text-gray-700 mb-4">Advanced structural modeling and BIM workflows</p>
                  <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with Civil Engineering Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> AutoCAD Civil Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is AutoCAD Civil Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AutoCAD Civil Software Course in Mumbai is a comprehensive training program covering AutoCAD Civil 3D, 
                    road design, land development, survey data processing, and infrastructure modeling for civil engineering 
                    professionals. The course includes hands-on projects based on Mumbai&apos;s infrastructure development needs.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of AutoCAD Civil Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The AutoCAD Civil Software Course in Mumbai has a duration of 3 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s civil engineering sector.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after AutoCAD Civil Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our AutoCAD Civil Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 250+ engineering companies including major construction, 
                    infrastructure, and consulting firms across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after AutoCAD Civil Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our AutoCAD Civil Software Course in Mumbai, you can work as Civil Designer, 
                    Highway Engineer, Land Development Specialist, Survey Engineer, Infrastructure Planner, or Project Engineer 
                    in construction, consulting, and government sectors across Mumbai&apos;s thriving infrastructure industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Civil Engineering Theme */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Infrastructure Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-24 h-4 bg-orange-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border border-yellow-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-amber-400/20 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-20 bg-orange-300/20 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Building2 className="w-4 h-4 mr-2" />
                  Build Your Civil Engineering Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master AutoCAD Civil in Mumbai?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful civil engineers who have built their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s infrastructure sector.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-orange-300" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-yellow-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Build Your Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-orange-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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