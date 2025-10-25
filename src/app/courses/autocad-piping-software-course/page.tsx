import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Settings, Layers, Workflow, Target, Cpu, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AutoCAD Piping Course Mumbai | Piping Design Training',
  description: 'Master AutoCAD Piping with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier piping design institute.',
  keywords: [
    'AutoCAD Piping Software Course in Mumbai',
    'AutoCAD Piping training Mumbai',
    'AutoCAD Piping course Mumbai',
    'AutoCAD Piping software training Mumbai',
    'piping design course Mumbai',
    'AutoCAD Piping certification Mumbai',
    'best AutoCAD Piping training Mumbai',
    'AutoCAD Piping institute Mumbai',
    'AutoCAD Piping classes Mumbai',
    'AutoCAD Piping software course fees Mumbai',
    'AutoCAD Piping training center Mumbai',
    'AutoCAD Piping course duration Mumbai',
    'AutoCAD Piping software certification Mumbai',
    'AutoCAD Piping training institute Mumbai',
    'professional AutoCAD Piping course Mumbai',
    'advanced AutoCAD Piping training Mumbai',
    'AutoCAD Piping design course Mumbai',
    'AutoCAD Piping drafting course Mumbai',
    'AutoCAD Piping 2D 3D training Mumbai',
    'AutoCAD Piping job training Mumbai',
    'AutoCAD Piping placement course Mumbai',
    'AutoCAD Piping skill development Mumbai',
    'mechanical piping course Mumbai',
    'industrial piping design Mumbai',
    'plant design course Mumbai',
    'process piping training Mumbai',
    'oil gas piping course Mumbai',
    'petrochemical piping design Mumbai',
    'piping engineering course Mumbai',
    'AutoCAD Plant 3D course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'AutoCAD Piping Software Course in Mumbai | Best Piping Design Training',
    description: 'Master AutoCAD Piping with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/autocad-piping-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/autocad-piping-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoCAD Piping Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoCAD Piping Software Course in Mumbai | Best Piping Design Training',
    description: 'Master AutoCAD Piping with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/autocad-piping-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/autocad-piping-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/autocad-piping-software-course#course',
      name: 'AutoCAD Piping Software Course in Mumbai',
      description: 'Comprehensive AutoCAD Piping training course in Mumbai with hands-on projects, industry certification, and job placement assistance for piping design professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic AutoCAD knowledge and engineering fundamentals',
      timeRequired: 'P2M',
      offers: {
        '@type': 'Offer',
        category: 'AutoCAD Piping Training',
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
        'AutoCAD Piping Fundamentals',
        '2D Piping Layouts',
        '3D Piping Modeling',
        'Isometric Drawings',
        'P&ID Creation',
        'Plant Design',
        'Industry Standards'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and piping design training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/autocad-piping-software-course#breadcrumb',
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
          name: 'AutoCAD Piping Software Course',
          item: 'https://trinketsinstitute.com/courses/autocad-piping-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/autocad-piping-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AutoCAD Piping Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AutoCAD Piping Software Course in Mumbai is a comprehensive training program covering 2D/3D piping design, isometric drawings, P&ID creation, and industry-standard workflows using AutoCAD and AutoCAD Plant 3D software.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of AutoCAD Piping Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AutoCAD Piping Software Course in Mumbai has a duration of 2 months with flexible timing options including weekday, weekend, and fast-track batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after AutoCAD Piping Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our AutoCAD Piping Software Course in Mumbai with our extensive network of oil & gas, petrochemical, and process industries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after AutoCAD Piping Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our AutoCAD Piping Software Course in Mumbai, you can work as Piping Designer, Plant Layout Engineer, Process Engineer, CAD Technician, or Technical Specialist in oil & gas, petrochemical, and manufacturing industries.'
          }
        }
      ]
    }
  ]
};

export default function AutoCADPipingCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Animated Elements */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-cyan-400/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-teal-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-emerald-300/20 rounded-lg animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link></li>
                  <li className="text-emerald-300">/</li>
                  <li><Link href="/courses" className="hover:text-emerald-300 transition-colors">Courses</Link></li>
                  <li className="text-emerald-300">/</li>
                  <li className="text-emerald-200">AutoCAD Piping Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Industry-Leading Piping Design Training
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AutoCAD Piping Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                Transform your career with Mumbai&apos;s most comprehensive AutoCAD Piping Software Course. 
                Learn from industry experts and become a certified piping design professional with guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-emerald-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-cyan-300" />
                  <span className="font-medium">2 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-emerald-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey Today
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Students Placed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Job Assistance</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  Why Choose Our AutoCAD Piping Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transform Your Career with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> Expert Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive AutoCAD Piping Software Course in Mumbai combines theoretical knowledge 
                  with hands-on practical experience to make you industry-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">Advanced Piping Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master complex piping layouts, 3D modeling, and isometric drawings with industry-standard 
                    tools and techniques used in Mumbai&apos;s leading engineering firms.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Industry-Expert Instructors</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn from certified professionals with 15+ years of experience in oil & gas, 
                    petrochemical, and process industries across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Real Project Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work on actual Mumbai refinery and chemical plant projects to build a professional 
                    portfolio that showcases your piping design capabilities.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Latest Software Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master AutoCAD Plant 3D, P&ID creation, and advanced piping tools with hands-on 
                    training on the latest software versions used in the industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-pink-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized AutoCAD Piping certification that validates your skills 
                    and enhances career prospects in Mumbai&apos;s engineering sector.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">100% Job Placement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Guaranteed placement assistance with our network of 200+ engineering companies 
                    including BPCL, HPCL, Reliance, and other major industries in Mumbai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AutoCAD Piping Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basics to advanced piping design techniques, 
                  ensuring you&apos;re industry-ready upon completion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900">AutoCAD Piping Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD interface and piping-specific tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Drawing setup and layer management for piping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Basic piping symbols and annotations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Coordinate systems and precision drawing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Piping standards and industry codes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">2D Piping Layout Design</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Process flow diagrams (PFD) creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Piping and instrumentation diagrams (P&ID)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment layout and spacing principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pipe routing and optimization techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Dimensioning and annotation standards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">3D Piping & Plant Design</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD Plant 3D fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3D piping modeling and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment modeling and placement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Isometric drawing generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Clash detection and resolution</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Advanced Features & Projects</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Bill of materials (BOM) generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom pipe specifications and catalogs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project collaboration and data management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industry-specific workflow implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Capstone project and portfolio development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Layers className="w-4 h-4 mr-2" />
                  Expand Your Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your piping and engineering skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/piping-design-engineering" className="group block bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">Piping Design Engineering</h3>
                  <p className="text-gray-700 mb-4">Comprehensive piping engineering and design fundamentals</p>
                  <span className="text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/microstation-software-course" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">MicroStation Software Course</h3>
                  <p className="text-gray-700 mb-4">Advanced CAD design and modeling with Bentley MicroStation</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/tekla-software-course" className="group block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Tekla Software Course</h3>
                  <p className="text-gray-700 mb-4">Structural design and BIM modeling with Tekla Structures</p>
                  <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> AutoCAD Piping Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is AutoCAD Piping Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AutoCAD Piping Software Course in Mumbai is a comprehensive training program covering 2D/3D piping design, 
                    isometric drawings, P&ID creation, and industry-standard workflows using AutoCAD and AutoCAD Plant 3D software. 
                    The course is designed for engineers and professionals in oil & gas, petrochemical, and process industries.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of AutoCAD Piping Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The AutoCAD Piping Software Course in Mumbai has a duration of 2 months with flexible timing options. 
                    We offer weekday, weekend, and fast-track batches to accommodate working professionals and students 
                    in Mumbai&apos;s industrial sector.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after AutoCAD Piping Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our AutoCAD Piping Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 200+ engineering companies including major oil & gas, 
                    petrochemical, and process industries across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after AutoCAD Piping Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our AutoCAD Piping Software Course in Mumbai, you can work as Piping Designer, 
                    Plant Layout Engineer, Process Engineer, CAD Technician, Technical Specialist, or pursue senior roles 
                    in oil & gas, petrochemical, pharmaceutical, and manufacturing industries in Mumbai&apos;s industrial belt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 border border-cyan-400/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-teal-400/20 rounded-full animate-bounce"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-emerald-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Start Your Piping Design Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master AutoCAD Piping in Mumbai?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful piping engineers who have launched their careers with our expert training 
                and comprehensive job placement assistance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-emerald-300" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-cyan-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Transform Your Career
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-emerald-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Learn About Our Institute
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}