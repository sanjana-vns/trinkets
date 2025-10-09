import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Settings, Zap, TrendingUp, Building, Wrench, Activity, Layers, Box, Grid, Search, Code2, MousePointer, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Building Information Modelling Training in Mumbai | BIM Course | Trinkets Institute',
  description: 'Master Building Information Modelling (BIM) with our comprehensive training in Mumbai. Learn Revit, AutoCAD, Navisworks, and advanced BIM techniques with 100% placement assistance.',
  keywords: [
    'Building Information Modelling Training in Mumbai',
    'BIM training Mumbai',
    'BIM course Mumbai',
    'Building Information Modelling course Mumbai',
    'Revit training Mumbai',
    'AutoCAD BIM Mumbai',
    'Navisworks training Mumbai',
    'BIM certification Mumbai',
    'best BIM training Mumbai',
    'BIM institute Mumbai',
    'BIM classes Mumbai',
    'BIM course fees Mumbai',
    'BIM training center Mumbai',
    'BIM course duration Mumbai',
    'BIM design training Mumbai',
    'BIM modeling course Mumbai',
    'professional BIM course Mumbai',
    'advanced BIM training Mumbai',
    'construction BIM Mumbai',
    'architectural BIM Mumbai',
    'structural BIM Mumbai',
    'MEP BIM Mumbai',
    'BIM coordination Mumbai',
    'BIM project management Mumbai',
    'BIM skill development Mumbai',
    'BIM career Mumbai',
    'BIM placement Mumbai',
    '3D modeling BIM Mumbai',
    '4D BIM Mumbai',
    '5D BIM Mumbai',
    'BIM workflow Mumbai',
    'BIM standards Mumbai',
    'BIM software training Mumbai',
    'BIM technology Mumbai',
    'digital construction Mumbai'
  ].join(', '),
  openGraph: {
    title: 'Building Information Modelling Training in Mumbai | BIM Course',
    description: 'Master Building Information Modelling (BIM) with our comprehensive training in Mumbai. Learn Revit, AutoCAD, Navisworks, and advanced BIM techniques with 100% placement assistance.',
    url: 'https://trinketsinstitute.com/courses/building-information-modelling-training',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/bim-training-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Building Information Modelling Training in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Information Modelling Training in Mumbai | BIM Course',
    description: 'Master Building Information Modelling (BIM) with our comprehensive training in Mumbai. Learn Revit, AutoCAD, Navisworks, and advanced BIM techniques with 100% placement assistance.',
    images: ['/images/courses/bim-training-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/building-information-modelling-training',
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
      '@id': 'https://trinketsinstitute.com/courses/building-information-modelling-training#course',
      name: 'Building Information Modelling Training in Mumbai',
      description: 'Comprehensive Building Information Modelling (BIM) training in Mumbai covering Revit, AutoCAD, Navisworks, 3D/4D/5D BIM, project coordination, and digital construction workflows with hands-on projects and 100% placement assistance.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic engineering or architecture knowledge',
      timeRequired: 'P6M',
      offers: {
        '@type': 'Offer',
        category: 'Building Information Modelling Training',
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
        'Autodesk Revit Architecture',
        'Autodesk Revit Structure',
        'Autodesk Revit MEP',
        'AutoCAD BIM Integration',
        'Navisworks Project Review',
        '3D/4D/5D BIM Modeling',
        'BIM Coordination & Clash Detection',
        'Digital Construction Workflows'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier Building Information Modelling and engineering training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/building-information-modelling-training#breadcrumb',
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
          name: 'Building Information Modelling Training',
          item: 'https://trinketsinstitute.com/courses/building-information-modelling-training'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/building-information-modelling-training#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Building Information Modelling Training in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Building Information Modelling Training in Mumbai is a comprehensive course covering Revit Architecture, Structure, MEP, AutoCAD integration, Navisworks, and advanced BIM workflows for construction and architectural projects.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of Building Information Modelling Training in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Building Information Modelling Training in Mumbai has a duration of 6 months with flexible timing options including weekday, weekend, and evening batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after Building Information Modelling Training in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our Building Information Modelling Training in Mumbai with our extensive network of construction companies, architectural firms, and engineering consultancies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What software is covered in Building Information Modelling Training in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Building Information Modelling Training in Mumbai covers Autodesk Revit (Architecture, Structure, MEP), AutoCAD, Navisworks, BIM 360, SketchUp, and other industry-standard BIM software and tools.'
          }
        }
      ]
    }
  ]
};

export default function BuildingInformationModellingTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with BIM Theme */}
        <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - BIM/Construction Theme */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-32 right-20 w-20 h-20 border border-indigo-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-16 w-24 h-3 bg-indigo-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-8 h-8 border border-blue-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-6 h-16 bg-slate-300/20 animate-pulse"></div>
            {/* BIM Specific Elements */}
            <div className="absolute top-24 right-1/4 w-14 h-14 border-2 border-indigo-300/30 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '15s'}}></div>
            <div className="absolute bottom-24 left-1/4 w-18 h-4 bg-blue-300/20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-10 h-10 border border-indigo-300/20 rounded-lg animate-bounce" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">Building Information Modelling Training</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Box className="w-4 h-4 mr-2" />
                  Advanced BIM Technology Hub
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Building Information</span>
                <br />Modelling Training in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Transform your career with Mumbai&apos;s most comprehensive Building Information Modelling Training. 
                Master Revit, AutoCAD, Navisworks, and advanced BIM workflows with industry-expert training and guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-indigo-300" />
                  <span className="font-medium">6 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">BIM Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your BIM Journey
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with BIM Theme */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1500+</div>
                  <div className="text-gray-600 font-medium">BIM Professionals Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">BIM Projects Completed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600 font-medium">BIM Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative BIM Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Layers className="w-4 h-4 mr-2" />
                  Why Choose Our Building Information Modelling Training?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Master BIM Technology with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> Expert Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Building Information Modelling Training in Mumbai combines cutting-edge BIM technology 
                  with practical construction applications to make you industry-ready for Mumbai&apos;s architecture and construction industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Advanced Revit Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master Revit Architecture, Structure, and MEP with hands-on experience 
                    on Mumbai&apos;s major construction and architectural projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">3D/4D/5D BIM Modeling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive 3D modeling, 4D scheduling, and 5D cost estimation techniques with 
                    certified professionals experienced in Mumbai&apos;s construction industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Navisworks & Clash Detection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master project review, clash detection, and coordination essential 
                    for large-scale construction projects in Mumbai&apos;s building landscape.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Grid className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">BIM Project Coordination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work on live BIM projects from Mumbai&apos;s residential, commercial, and infrastructure developments 
                    to gain real-world experience in BIM coordination and management.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Digital Construction Workflows</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn digital construction processes, BIM standards, and collaborative workflows following 
                    international standards and Mumbai&apos;s construction requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-900">BIM Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized BIM certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s architecture and construction industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Creative Curriculum Section with BIM Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building Information Modelling
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> Training Curriculum</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic BIM concepts to advanced digital construction workflows, 
                  ensuring you&apos;re ready for Mumbai&apos;s demanding architecture and construction projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900">BIM Fundamentals & Revit Basics</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Introduction to BIM concepts and workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Revit interface and basic tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3D modeling fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Family creation and parametric design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">BIM standards and best practices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Advanced Revit & Specializations</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Revit Architecture advanced features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Revit Structure and structural modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Revit MEP systems and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Advanced family creation and customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Rendering and visualization techniques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">BIM Coordination & Navisworks</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Navisworks project review and navigation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Clash detection and resolution workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">4D simulation and construction sequencing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Multi-discipline coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project collaboration and file management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Industry Projects & Certification</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Live residential and commercial projects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Infrastructure and MEP case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">BIM project management and delivery</span>
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

        {/* Software Tools Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Monitor className="w-4 h-4 mr-2" />
                  Industry-Standard BIM Software
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Master Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> BIM Tools</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Learn the most sought-after BIM software used by leading architecture and construction firms
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-indigo-900 mb-2">Autodesk Revit</h3>
                  <p className="text-sm text-gray-600">Architecture, Structure & MEP</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Grid className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">AutoCAD</h3>
                  <p className="text-sm text-gray-600">2D Drafting & BIM Integration</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Navisworks</h3>
                  <p className="text-sm text-gray-600">Project Review & Clash Detection</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">BIM 360</h3>
                  <p className="text-sm text-gray-600">Cloud Collaboration Platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative BIM Layout */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Wrench className="w-4 h-4 mr-2" />
                  Expand Your BIM Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your BIM and construction engineering skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/structural-design-analysis" className="group block bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced structural engineering and simulation</p>
                  <span className="text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/mep-engineering" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">MEP Engineering</h3>
                  <p className="text-gray-700 mb-4">Mechanical, electrical, and plumbing systems</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-civil-software-course" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Grid className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">AutoCAD Civil</h3>
                  <p className="text-gray-700 mb-4">Civil engineering design and drafting</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with BIM Theme */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> BIM Training Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Building Information Modelling Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Building Information Modelling Training in Mumbai is a comprehensive course covering Revit Architecture, Structure, MEP, 
                    AutoCAD integration, Navisworks, and advanced BIM workflows for construction and architectural projects. 
                    The course includes hands-on projects based on Mumbai&apos;s construction and architectural requirements.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Building Information Modelling Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Building Information Modelling Training in Mumbai has a duration of 6 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s architecture and construction sectors.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Building Information Modelling Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Building Information Modelling Training in Mumbai. 
                    Our dedicated placement team works with our network of 150+ construction companies, architectural firms, and engineering consultancies 
                    including major organizations across Mumbai and India.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What software is covered in Building Information Modelling Training in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Building Information Modelling Training in Mumbai covers Autodesk Revit (Architecture, Structure, MEP), 
                    AutoCAD, Navisworks, BIM 360, SketchUp, and other industry-standard BIM software and tools used in 
                    Mumbai&apos;s leading construction and architectural projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with BIM Theme */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - BIM Theme */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-10 left-10 w-6 h-6 border border-indigo-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-blue-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-indigo-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-blue-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-indigo-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-indigo-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Box className="w-4 h-4 mr-2" />
                  Start Your BIM Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Building Information Modelling in Mumbai?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful BIM professionals who have advanced their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s architecture and construction industries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-indigo-300" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Build Your Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-indigo-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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