import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Zap, Battery, Cpu, Power, Cable, CircuitBoard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AutoCAD Electrical Course Mumbai | Electrical Design Training',
  description: 'Master AutoCAD Electrical with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier electrical engineering institute.',
  keywords: [
    'AutoCAD Electrical Software Course in Mumbai',
    'AutoCAD Electrical training Mumbai',
    'AutoCAD Electrical course Mumbai',
    'AutoCAD Electrical software training Mumbai',
    'electrical design course Mumbai',
    'AutoCAD Electrical certification Mumbai',
    'best AutoCAD Electrical training Mumbai',
    'AutoCAD Electrical institute Mumbai',
    'AutoCAD Electrical classes Mumbai',
    'AutoCAD Electrical software course fees Mumbai',
    'AutoCAD Electrical training center Mumbai',
    'AutoCAD Electrical course duration Mumbai',
    'AutoCAD Electrical software certification Mumbai',
    'AutoCAD Electrical training institute Mumbai',
    'professional AutoCAD Electrical course Mumbai',
    'advanced AutoCAD Electrical training Mumbai',
    'AutoCAD Electrical design course Mumbai',
    'AutoCAD Electrical drafting course Mumbai',
    'AutoCAD Electrical schematic training Mumbai',
    'AutoCAD Electrical job training Mumbai',
    'AutoCAD Electrical placement course Mumbai',
    'AutoCAD Electrical skill development Mumbai',
    'electrical engineering course Mumbai',
    'control panel design course Mumbai',
    'electrical schematic design Mumbai',
    'industrial automation course Mumbai',
    'electrical CAD training Mumbai',
    'power systems design Mumbai',
    'electrical control systems Mumbai',
    'PLC programming course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'AutoCAD Electrical Software Course in Mumbai | Best Electrical Design Training',
    description: 'Master AutoCAD Electrical with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/autocad-electrical-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/autocad-electrical-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoCAD Electrical Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoCAD Electrical Software Course in Mumbai | Best Electrical Design Training',
    description: 'Master AutoCAD Electrical with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/autocad-electrical-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/autocad-electrical-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/autocad-electrical-software-course#course',
      name: 'AutoCAD Electrical Software Course in Mumbai',
      description: 'Comprehensive AutoCAD Electrical training course in Mumbai with hands-on projects, industry certification, and job placement assistance for electrical engineering professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic AutoCAD knowledge and electrical engineering fundamentals',
      timeRequired: 'P2M',
      offers: {
        '@type': 'Offer',
        category: 'AutoCAD Electrical Training',
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
        'AutoCAD Electrical Fundamentals',
        'Electrical Schematic Design',
        'Control Panel Layout',
        'Wire Numbering & Reports',
        'PLC Integration',
        'Industrial Automation',
        'Electrical Standards'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and electrical design training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/autocad-electrical-software-course#breadcrumb',
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
          name: 'AutoCAD Electrical Software Course',
          item: 'https://trinketsinstitute.com/courses/autocad-electrical-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/autocad-electrical-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AutoCAD Electrical Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AutoCAD Electrical Software Course in Mumbai is a comprehensive training program covering electrical schematic design, control panel layout, wire numbering, and industrial automation using AutoCAD Electrical software.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of AutoCAD Electrical Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AutoCAD Electrical Software Course in Mumbai has a duration of 2 months with flexible timing options including weekday, weekend, and evening batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after AutoCAD Electrical Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our AutoCAD Electrical Software Course in Mumbai with our extensive network of electrical, automation, and manufacturing companies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after AutoCAD Electrical Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our AutoCAD Electrical Software Course in Mumbai, you can work as Electrical Designer, Control Systems Engineer, Automation Engineer, or Electrical CAD Specialist in manufacturing and power industries.'
          }
        }
      ]
    }
  ]
};

export default function AutoCADElectricalCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Electrical Theme */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - Electrical Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-20 w-6 h-16 bg-indigo-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-purple-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-40 right-32 w-16 h-2 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-indigo-300/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-12 bg-purple-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-blue-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-14 h-2 bg-indigo-400/20 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">AutoCAD Electrical Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Advanced Electrical Design Training Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AutoCAD Electrical Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Power up your electrical engineering career with Mumbai&apos;s most comprehensive AutoCAD Electrical Software Course. 
                Learn advanced control systems design, industrial automation, and electrical schematics with guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-purple-300" />
                  <span className="font-medium">2 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Energize Your Career Today
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

        {/* Creative Stats Section with Electrical Theme */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">600+</div>
                  <div className="text-gray-600 font-medium">Electrical Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CircuitBoard className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Control Systems Projects</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Power className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">180+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Electrical Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <CircuitBoard className="w-4 h-4 mr-2" />
                  Why Choose Our AutoCAD Electrical Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Power Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Expert Electrical Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive AutoCAD Electrical Software Course in Mumbai combines cutting-edge electrical design 
                  technology with practical industrial automation experience to make you industry-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Advanced Electrical Schematics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master complex electrical schematic design, circuit analysis, and power distribution systems 
                    with hands-on experience on Mumbai&apos;s major industrial and commercial projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CircuitBoard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Control Panel Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive control panel layout, component placement, and wiring design with 
                    certified professionals experienced in Mumbai&apos;s automation and manufacturing sectors.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Power className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Industrial Automation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrate PLC systems, SCADA interfaces, and HMI design with AutoCAD Electrical for 
                    complete industrial automation solutions in Mumbai&apos;s manufacturing industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cable className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Wire Numbering & Reports</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Generate automatic wire numbers, comprehensive reports, and bill of materials essential 
                    for electrical project documentation and Mumbai&apos;s compliance standards.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Standards & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn IEC, IEEE, and Indian electrical standards for professional design practices 
                    meeting Mumbai&apos;s industrial safety and regulatory requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-rose-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized AutoCAD Electrical certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s electrical and automation industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with Electrical Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Battery className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AutoCAD Electrical Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic electrical design to advanced automation 
                  systems, ensuring you&apos;re ready for Mumbai&apos;s demanding electrical engineering projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">AutoCAD Electrical Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD Electrical interface and tools overview</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project setup and electrical standards configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Symbol libraries and component databases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drawing templates and title block customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Electrical design standards and best practices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900">Schematic Design & Components</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Ladder logic and electrical schematic creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Motor control circuits and power distribution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Component insertion and intelligent wiring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cross-referencing and signal tracing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Circuit annotation and wire numbering</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Panel Layout & Documentation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Control panel layout and component placement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3D panel visualization and space optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Terminal strip and connector design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cable and harness design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Panel fabrication drawings and assembly</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">Reports & Project Management</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatic report generation and bill of materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Wire list and cable schedule creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">PLC I/O integration and mapping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project collaboration and data management</span>
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

        {/* Related Courses with Creative Electrical Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Power className="w-4 h-4 mr-2" />
                  Expand Your Technical Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your electrical and automation skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/electrical-design-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Electrical Design Engineering</h3>
                  <p className="text-gray-700 mb-4">Comprehensive electrical engineering design and analysis</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-mechanical-design" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-700 mb-4">Advanced mechanical design and drafting with AutoCAD</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/instrumentation-control" className="group block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CircuitBoard className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Instrumentation & Control</h3>
                  <p className="text-gray-700 mb-4">Advanced instrumentation and control systems engineering</p>
                  <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with Electrical Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AutoCAD Electrical Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is AutoCAD Electrical Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AutoCAD Electrical Software Course in Mumbai is a comprehensive training program covering electrical 
                    schematic design, control panel layout, wire numbering, and industrial automation using AutoCAD Electrical software. 
                    The course includes hands-on projects based on Mumbai&apos;s electrical and automation industry requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of AutoCAD Electrical Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The AutoCAD Electrical Software Course in Mumbai has a duration of 2 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s electrical and automation sectors.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after AutoCAD Electrical Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our AutoCAD Electrical Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 180+ electrical, automation, and manufacturing companies 
                    including major industries across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after AutoCAD Electrical Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our AutoCAD Electrical Software Course in Mumbai, you can work as Electrical Designer, 
                    Control Systems Engineer, Automation Engineer, Electrical CAD Specialist, or Project Engineer in manufacturing, 
                    power generation, automation, and process industries across Mumbai&apos;s thriving industrial sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Electrical Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Electrical Circuit Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 border border-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-purple-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-indigo-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-blue-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-purple-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Electrify Your Engineering Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master AutoCAD Electrical in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful electrical engineers who have powered their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s electrical and automation industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-purple-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Power Your Future
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
