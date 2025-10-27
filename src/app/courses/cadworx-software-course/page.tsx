import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Settings, Layers, Zap, Building, Gauge, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cadworx Software Course Mumbai | Piping Design Training',
  description: 'Master Cadworx with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier piping engineering institute.',
  keywords: [
    'Cadworx Software Course in Mumbai',
    'Cadworx training Mumbai',
    'Cadworx course Mumbai',
    'Cadworx software training Mumbai',
    'piping design course Mumbai',
    'Cadworx certification Mumbai',
    'best Cadworx training Mumbai',
    'Cadworx institute Mumbai',
    'Cadworx classes Mumbai',
    'Cadworx course fees Mumbai',
    'Cadworx training center Mumbai',
    'Cadworx course duration Mumbai',
    'Cadworx software certification Mumbai',
    'Cadworx training institute Mumbai',
    'professional Cadworx course Mumbai',
    'advanced Cadworx training Mumbai',
    'plant design course Mumbai',
    'piping engineering course Mumbai',
    'process piping design Mumbai',
    'Cadworx job training Mumbai',
    'Cadworx placement course Mumbai',
    'Cadworx skill development Mumbai',
    'piping engineering training Mumbai',
    'plant layout design Mumbai',
    'pipe routing course Mumbai',
    'industrial piping Mumbai',
    'oil and gas piping Mumbai',
    'petrochemical training Mumbai',
    'process plant design Mumbai',
    'Cadworx P&ID course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'Cadworx Software Course in Mumbai | Best Piping Design Training',
    description: 'Master Cadworx with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/cadworx-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/cadworx-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Cadworx Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadworx Software Course in Mumbai | Best Piping Design Training',
    description: 'Master Cadworx with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/cadworx-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/cadworx-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/cadworx-software-course#course',
      name: 'Cadworx Software Course in Mumbai',
      description: 'Comprehensive Cadworx training course in Mumbai with hands-on projects, industry certification, and job placement assistance for piping and plant design engineering professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic AutoCAD knowledge and mechanical engineering fundamentals',
      timeRequired: 'P3M',
      offers: {
        '@type': 'Offer',
        category: 'Piping Design Training',
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
        'Cadworx Plant Design',
        'Piping Isometrics',
        'P&ID Development',
        'Equipment Modeling',
        'Pipe Routing',
        'Plant Layout',
        'Industry Standards'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier piping and plant design training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/cadworx-software-course#breadcrumb',
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
          name: 'Cadworx Software Course',
          item: 'https://trinketsinstitute.com/courses/cadworx-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/cadworx-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Cadworx Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Cadworx Software Course in Mumbai is a comprehensive training program covering plant design, piping layout, P&ID development, and process engineering using industry-standard Cadworx software for oil & gas and petrochemical industries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of Cadworx Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Cadworx Software Course in Mumbai has a duration of 3 months with flexible timing options including weekday, weekend, and evening batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after Cadworx Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our Cadworx Software Course in Mumbai with our extensive network of oil & gas companies, petrochemical plants, and engineering consultancies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after Cadworx Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our Cadworx Software Course in Mumbai, you can work as Piping Engineer, Plant Design Engineer, Process Engineer, or CAD Specialist in oil & gas, petrochemical, and process industries.'
          }
        }
      ]
    }
  ]
};

export default function CadworxCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Piping/Plant Design Theme */}
        <section className="relative bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - Piping/Plant Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-400/30 rounded-lg animate-pulse"></div>
            <div className="absolute top-32 left-20 w-6 h-16 bg-teal-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-green-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-32 w-16 h-2 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-teal-300/20 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-12 bg-green-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-blue-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-14 h-2 bg-teal-400/20 animate-pulse"></div>
            {/* Piping Specific Elements */}
            <div className="absolute top-24 right-1/4 w-8 h-8 border border-green-300/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-12 h-4 bg-blue-300/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-teal-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">Cadworx Software Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced Plant Design Training Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Cadworx Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Engineer your future with Mumbai&apos;s most comprehensive Cadworx Software Course. 
                Master plant design, piping engineering, and process systems with industry-expert training and guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-teal-300" />
                  <span className="font-medium">3 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-green-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Engineer Your Future Today
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

        {/* Creative Stats Section with Piping Theme */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">900+</div>
                  <div className="text-gray-600 font-medium">Piping Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-gray-600 font-medium">Plant Projects Designed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">96%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">180+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Piping Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  Why Choose Our Cadworx Software Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Expert Piping Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Cadworx Software Course in Mumbai combines cutting-edge plant design technology 
                  with practical piping engineering experience to make you industry-ready for Mumbai&apos;s oil & gas sector.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Advanced Plant Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master complex process plant design, equipment layout, and piping systems 
                    with hands-on experience on Mumbai&apos;s major petrochemical and refinery projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Piping Isometrics & P&ID</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive piping isometric generation, P&ID development, and instrumentation design with 
                    certified professionals experienced in Mumbai&apos;s process engineering sector.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Equipment Modeling & Layout</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design process equipment, vessel modeling, and optimal plant layout for 
                    efficient operations in Mumbai&apos;s oil & gas and chemical processing industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Pipe Routing & Stress Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master intelligent pipe routing, stress analysis integration, and support design essential 
                    for safe and efficient piping systems in Mumbai&apos;s industrial projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Industry Standards & Codes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn ASME, ANSI, and international piping standards for professional design practices 
                    meeting Mumbai&apos;s oil & gas industry safety and regulatory requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized Cadworx certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s petrochemical and process industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with Piping Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Layers className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cadworx Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic piping fundamentals to advanced plant design, 
                  ensuring you&apos;re ready for Mumbai&apos;s demanding oil & gas and petrochemical projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Cadworx Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cadworx interface and project setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Plant design principles and standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Specification database configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Component libraries and catalogs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drawing templates and title blocks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900">Equipment & Piping Design</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment modeling and placement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Piping component insertion and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Valve and fitting selection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pipe support and hanger design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Nozzle and connection management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">P&ID & Isometric Generation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">P&ID development and instrumentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatic isometric generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Dimensioning and annotation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Material take-off and BOM</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drawing extraction and plotting</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">Advanced Features & Integration</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stress analysis integration with Caesar II</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Plant layout optimization and clash detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project collaboration and data management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Customization and productivity tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Portfolio project and industry certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative Piping Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Expand Your Technical Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your piping and plant design skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/piping-design-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Piping Design Engineering</h3>
                  <p className="text-gray-700 mb-4">Comprehensive piping design and engineering principles</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/caesar-ii-stress-analysis" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Caesar II Stress Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced piping stress analysis and design validation</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/process-engineering" className="group block bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">Process Engineering</h3>
                  <p className="text-gray-700 mb-4">Process design and chemical engineering fundamentals</p>
                  <span className="text-teal-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with Piping Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Cadworx Software Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Cadworx Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Cadworx Software Course in Mumbai is a comprehensive training program covering plant design, 
                    piping layout, P&ID development, and process engineering using industry-standard Cadworx software for oil & gas and petrochemical industries. 
                    The course includes hands-on projects based on Mumbai&apos;s process engineering industry requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Cadworx Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Cadworx Software Course in Mumbai has a duration of 3 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s oil & gas and process engineering sectors.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Cadworx Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Cadworx Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 180+ oil & gas companies, petrochemical plants, 
                    and engineering consultancies including major process industries across Mumbai and India.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after Cadworx Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our Cadworx Software Course in Mumbai, you can work as Piping Engineer, 
                    Plant Design Engineer, Process Engineer, CAD Specialist, or Project Engineer in oil & gas, 
                    petrochemical, power generation, and process industries across Mumbai&apos;s thriving industrial sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Piping Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Piping Industrial Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 border border-blue-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-green-400/20 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-teal-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-blue-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-green-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Settings className="w-4 h-4 mr-2" />
                  Build Your Engineering Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Cadworx Software in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful piping engineers who have built their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s oil & gas and process industries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-green-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Build Your Future
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
