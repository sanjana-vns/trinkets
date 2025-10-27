import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Wind, Thermometer, Building, Gauge, Fan, Snowflake } from 'lucide-react';
import FAQSectionTemplate from '../../../components/FAQSectionTemplate';

export const metadata: Metadata = {
  title: 'HVAC Drafting Course Mumbai | HVAC Design Training',
  description: 'Master HVAC Drafting with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier HVAC engineering institute.',
  keywords: [
    'HVAC Drafting Course in Mumbai',
    'HVAC drafting training Mumbai',
    'HVAC drafting course Mumbai',
    'HVAC design course Mumbai',
    'HVAC CAD training Mumbai',
    'HVAC drafting certification Mumbai',
    'best HVAC drafting training Mumbai',
    'HVAC drafting institute Mumbai',
    'HVAC drafting classes Mumbai',
    'HVAC drafting course fees Mumbai',
    'HVAC drafting training center Mumbai',
    'HVAC drafting course duration Mumbai',
    'HVAC drafting certification Mumbai',
    'HVAC drafting training institute Mumbai',
    'professional HVAC drafting course Mumbai',
    'advanced HVAC drafting training Mumbai',
    'HVAC system design course Mumbai',
    'HVAC AutoCAD course Mumbai',
    'HVAC ductwork design Mumbai',
    'HVAC job training Mumbai',
    'HVAC placement course Mumbai',
    'HVAC skill development Mumbai',
    'mechanical engineering course Mumbai',
    'building services course Mumbai',
    'MEP drafting course Mumbai',
    'air conditioning design Mumbai',
    'ventilation system design Mumbai',
    'chiller plant design Mumbai',
    'HVAC load calculation Mumbai',
    'building automation course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'HVAC Drafting Course in Mumbai | Best HVAC Design Training',
    description: 'Master HVAC Drafting with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/hvac-drafting-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/hvac-drafting-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC Drafting Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Drafting Course in Mumbai | Best HVAC Design Training',
    description: 'Master HVAC Drafting with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/hvac-drafting-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/hvac-drafting-course',
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
      '@id': 'https://trinketsinstitute.com/courses/hvac-drafting-course#course',
      name: 'HVAC Drafting Course in Mumbai',
      description: 'Comprehensive HVAC Drafting training course in Mumbai with hands-on projects, industry certification, and job placement assistance for HVAC and mechanical engineering professionals.',
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
        category: 'HVAC Drafting Training',
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
        'HVAC System Design',
        'Ductwork Layout',
        'Load Calculations',
        'Equipment Selection',
        'Building Automation',
        'Energy Efficiency',
        'MEP Coordination'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and HVAC design training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/hvac-drafting-course#breadcrumb',
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
          name: 'HVAC Drafting Course',
          item: 'https://trinketsinstitute.com/courses/hvac-drafting-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/hvac-drafting-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is HVAC Drafting Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our HVAC Drafting Course in Mumbai is a comprehensive training program covering HVAC system design, ductwork layout, load calculations, and building automation using industry-standard software and Mumbai building codes.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of HVAC Drafting Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The HVAC Drafting Course in Mumbai has a duration of 3 months with flexible timing options including weekday, weekend, and evening batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after HVAC Drafting Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our HVAC Drafting Course in Mumbai with our extensive network of MEP consultants, construction companies, and building services firms.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after HVAC Drafting Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our HVAC Drafting Course in Mumbai, you can work as HVAC Designer, MEP Draftsman, Building Services Engineer, or HVAC Project Coordinator in construction and building services industries.'
          }
        }
      ]
    }
  ]
};

export default function HVACDraftingCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with HVAC Theme */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - HVAC Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-20 w-6 h-16 bg-teal-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-cyan-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-40 right-32 w-16 h-2 bg-emerald-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-teal-300/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-12 bg-cyan-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-emerald-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-14 h-2 bg-teal-400/20 animate-pulse"></div>
            {/* HVAC Specific Elements */}
            <div className="absolute top-24 right-1/4 w-8 h-8 border border-cyan-300/20 rounded-lg animate-spin" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-12 h-4 bg-emerald-300/20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link></li>
                  <li className="text-emerald-300">/</li>
                  <li><Link href="/courses" className="hover:text-emerald-300 transition-colors">Courses</Link></li>
                  <li className="text-emerald-300">/</li>
                  <li className="text-emerald-200">HVAC Drafting Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Wind className="w-4 h-4 mr-2" />
                  Advanced HVAC Design Training Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">HVAC Drafting</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                Elevate your mechanical engineering career with Mumbai&apos;s most comprehensive HVAC Drafting Course. 
                Master building services design, energy efficiency systems, and MEP coordination with guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-emerald-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-cyan-300" />
                  <span className="font-medium">3 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-emerald-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your HVAC Journey Today
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with HVAC Theme */}
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">800+</div>
                  <div className="text-gray-600 font-medium">HVAC Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Building Projects Designed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">220+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative HVAC Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  Why Choose Our HVAC Drafting Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Climate Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> Expert HVAC Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive HVAC Drafting Course in Mumbai combines cutting-edge building services technology 
                  with practical MEP design experience to make you industry-ready for Mumbai&apos;s construction boom.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">Advanced HVAC System Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master complex ventilation systems, air conditioning design, and heating solutions 
                    with hands-on experience on Mumbai&apos;s major commercial and residential projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Fan className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Ductwork Layout & Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive ductwork design, airflow calculations, and space optimization with 
                    certified professionals experienced in Mumbai&apos;s construction and MEP sectors.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-900">Load Calculations & Energy Efficiency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Calculate heating and cooling loads, energy consumption analysis, and green building 
                    compliance for sustainable HVAC solutions in Mumbai&apos;s tropical climate.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Snowflake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Chiller & AHU Systems</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design central air conditioning systems, chiller plants, and air handling units essential 
                    for large-scale commercial buildings and Mumbai&apos;s high-rise developments.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">MEP Coordination & BIM</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn Building Information Modeling (BIM) for HVAC systems, clash detection, and 
                    coordination with other MEP disciplines following Mumbai&apos;s construction standards.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized HVAC drafting certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s construction and building services industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with HVAC Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Gauge className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  HVAC Drafting Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic HVAC principles to advanced building automation 
                  systems, ensuring you&apos;re ready for Mumbai&apos;s demanding construction and MEP projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900">HVAC Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">HVAC principles and psychrometrics basics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AutoCAD for HVAC drafting and design standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Building codes and Mumbai climate considerations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">HVAC equipment types and selection criteria</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Energy efficiency and green building standards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900">System Design & Load Calculations</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Heating and cooling load calculations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Ventilation requirements and fresh air calculations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">System selection and zoning strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Equipment sizing and energy modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Commercial and residential system design</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">Ductwork Design & Layout</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Ductwork layout and space planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Air distribution and diffuser selection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pressure loss calculations and fan sizing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Insulation and acoustic considerations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Fire and smoke damper placement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Central Systems & Automation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Chiller plant design and piping systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Air handling unit design and selection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Building automation and control systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">MEP coordination and BIM integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Project portfolio and industry certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative HVAC Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  Expand Your Technical Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your HVAC and building services skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/mep-engineering" className="group block bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">MEP Engineering</h3>
                  <p className="text-gray-700 mb-4">Comprehensive mechanical, electrical, and plumbing systems</p>
                  <span className="text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/services/hvac-system-design-services-mumbai" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">HVAC System Design Services</h3>
                  <p className="text-gray-700 mb-4">Professional HVAC design and consultation services</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/services/building-services-engineering-mumbai" className="group block bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Thermometer className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">Building Services Engineering</h3>
                  <p className="text-gray-700 mb-4">Complete building services design and engineering</p>
                  <span className="text-teal-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSectionTemplate
          title="HVAC Drafting Course in Mumbai"
          subtitle="Common Questions About Our Training"
          description="Get answers to the most frequently asked questions about our HVAC Drafting Course in Mumbai. Learn about training duration, placement assistance, and career opportunities."
          faqs={[
            {
              question: "What is HVAC Drafting Course in Mumbai?",
              answer: "Our HVAC Drafting Course in Mumbai is a comprehensive training program covering HVAC system design, ductwork layout, load calculations, and building automation using industry-standard software and Mumbai building codes. The course includes hands-on projects based on Mumbai's construction and MEP industry requirements."
            },
            {
              question: "What is the duration of HVAC Drafting Course in Mumbai?",
              answer: "The HVAC Drafting Course in Mumbai has a duration of 3 months with flexible timing options. We offer weekday, weekend, and evening batches to accommodate working professionals and students in Mumbai's construction and building services sectors."
            },
            {
              question: "Do you provide job placement after HVAC Drafting Course in Mumbai?",
              answer: "Yes, we provide 100% job placement assistance after completion of our HVAC Drafting Course in Mumbai. Our dedicated placement team works with our network of 220+ MEP consultants, construction companies, and building services firms including major developers across Mumbai and Maharashtra."
            },
            {
              question: "What are the career opportunities after HVAC Drafting Course in Mumbai?",
              answer: "After completing our HVAC Drafting Course in Mumbai, you can work as HVAC Designer, MEP Draftsman, Building Services Engineer, HVAC Project Coordinator, or Energy Analyst in construction, consulting, and building services industries across Mumbai's thriving real estate and infrastructure sector."
            },
            {
              question: "What software tools are covered in HVAC Drafting Course in Mumbai?",
              answer: "Our HVAC Drafting Course in Mumbai covers AutoCAD MEP, Revit MEP, HAP (Hourly Analysis Program), Carrier HAP, Trane TRACE, and ductwork design software. You'll gain practical experience with load calculations and system sizing for Mumbai's climate conditions."
            },
            {
              question: "Is prior HVAC experience required for this course in Mumbai?",
              answer: "No prior HVAC experience is required for our HVAC Drafting Course in Mumbai. We start with HVAC fundamentals and progress to advanced system design. Our experienced instructors provide personalized attention to ensure every student masters the concepts and practical applications."
            }
          ]}
          phoneNumber="+91-9820924788"
        />

        {/* Creative Contact CTA with HVAC Theme */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - HVAC Climate Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 border border-emerald-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-cyan-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-teal-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-emerald-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-cyan-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-emerald-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Wind className="w-4 h-4 mr-2" />
                  Cool Your Engineering Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master HVAC Drafting in Mumbai?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful HVAC engineers who have elevated their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s construction and building services industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-emerald-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-cyan-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Cool Your Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-emerald-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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
