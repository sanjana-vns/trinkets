import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MicroStation Software Course in Mumbai | Best CAD Training Institute | Trinkets Institute',
  description: 'Master MicroStation Software with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Learn 2D/3D design, civil engineering CAD, architectural drafting, and infrastructure design with 100% placement support.',
  keywords: [
    'MicroStation Software Course in Mumbai',
    'MicroStation training Mumbai',
    'MicroStation course Mumbai',
    'MicroStation software training Mumbai',
    'CAD training Mumbai',
    'Bentley MicroStation course Mumbai',
    'MicroStation certification Mumbai',
    'best MicroStation training Mumbai',
    'MicroStation institute Mumbai',
    'MicroStation classes Mumbai',
    'MicroStation software course fees Mumbai',
    'MicroStation training center Mumbai',
    'MicroStation course duration Mumbai',
    'MicroStation software certification Mumbai',
    'MicroStation training institute Mumbai',
    'professional MicroStation course Mumbai',
    'advanced MicroStation training Mumbai',
    'MicroStation design course Mumbai',
    'MicroStation drafting course Mumbai',
    'MicroStation 2D 3D training Mumbai',
    'MicroStation job training Mumbai',
    'MicroStation placement course Mumbai',
    'MicroStation skill development Mumbai',
    'engineering CAD course Mumbai',
    'architectural CAD training Mumbai',
    'infrastructure design course Mumbai',
    'civil engineering CAD Mumbai',
    'structural design software Mumbai',
    'building design course Mumbai',
    'construction CAD training Mumbai',
    'surveying CAD course Mumbai',
    'mapping software training Mumbai'
  ].join(', '),
  openGraph: {
    title: 'MicroStation Software Course in Mumbai | Best CAD Training Institute',
    description: 'Master MicroStation Software with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance with 100% placement support.',
    url: 'https://trinketsinstitute.com/courses/microstation-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/microstation-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'MicroStation Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MicroStation Software Course in Mumbai | Best CAD Training Institute',
    description: 'Master MicroStation Software with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/microstation-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/microstation-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/microstation-software-course#course',
      name: 'MicroStation Software Course in Mumbai',
      description: 'Comprehensive MicroStation Software training course in Mumbai with hands-on projects, industry certification, and job placement assistance.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic computer knowledge',
      timeRequired: 'P2M',
      offers: {
        '@type': 'Offer',
        category: 'MicroStation Software Training',
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
        'MicroStation Fundamentals',
        '2D Drafting and Design',
        '3D Modeling and Visualization',
        'Parametric Design',
        'Project Management',
        'Industry Standards'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and CAD training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/microstation-software-course#breadcrumb',
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
          name: 'MicroStation Software Course',
          item: 'https://trinketsinstitute.com/courses/microstation-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/microstation-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is MicroStation Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our MicroStation Software Course in Mumbai is a comprehensive training program that covers 2D drafting, 3D modeling, parametric design, and industry-standard workflows using Bentley MicroStation software.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of MicroStation Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The MicroStation Software Course in Mumbai has a duration of 2 months with flexible timing options including weekday and weekend batches.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after MicroStation Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our MicroStation Software Course in Mumbai with our extensive industry network and career support.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after MicroStation Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our MicroStation Software Course in Mumbai, you can work as CAD Designer, Drafting Engineer, Design Engineer, Project Coordinator, or Technical Specialist in various industries.'
          }
        }
      ]
    }
  ]
};

export default function MicroStationCoursePage() {
  return (
    <>
      {/* Creative Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-green-400 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-yellow-400 rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-purple-400 animate-pulse"></div>
        </div>

        {/* Floating CAD Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-blue-400">
              <rect x="10" y="10" width="60" height="40" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="10" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1"/>
              <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-delayed">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-green-400">
              <path d="M20 20 L80 20 L80 60 L60 80 L20 80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1"/>
              <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="1"/>
              <line x1="60" y1="60" x2="60" y2="80" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" className="text-yellow-400">
              <polygon points="45,10 70,35 70,65 45,80 20,65 20,35" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="45" cy="45" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="30" y1="30" x2="60" y2="60" stroke="currentColor" strokeWidth="1"/>
              <line x1="60" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                MicroStation
              </span>
              <br />
              <span className="text-white">CAD Mastery</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Master Bentley MicroStation with Mumbai&apos;s premier CAD training institute. 
              From 2D drafting to 3D modeling, infrastructure design to architectural excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Your CAD Journey
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Download Curriculum
              </button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Job Placement</div>
            </div>
            <div className="animate-float-delayed">
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-sm text-gray-300">Live Projects</div>
            </div>
            <div className="animate-float">
              <div className="text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="animate-float-delayed">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-300">Lab Access</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* Mumbai CAD Industry Opportunities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mumbai&apos;s Booming <span className="text-blue-600">CAD & Design Industry</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mumbai leads India&apos;s infrastructure development. Master MicroStation and join the city&apos;s thriving architecture, engineering, and construction sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Projects</h3>
              <p className="text-gray-600 mb-4">Mumbai Metro, Coastal Road, and MTHL projects require skilled MicroStation professionals for civil engineering design.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Highway & Bridge Design</li>
                <li>• Tunnel Engineering</li>
                <li>• Urban Planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Development</h3>
              <p className="text-gray-600 mb-4">Leading real estate companies in Mumbai use MicroStation for high-rise buildings and township development projects.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Residential Complexes</li>
                <li>• Commercial Buildings</li>
                <li>• Mixed-Use Developments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Utility & Services</h3>
              <p className="text-gray-600 mb-4">Mumbai&apos;s utility companies and government agencies need MicroStation experts for mapping and infrastructure planning.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Water Supply Systems</li>
                <li>• Electrical Networks</li>
                <li>• Telecommunication</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Average MicroStation Professional Salary in Mumbai: <span className="font-bold text-blue-600">₹4.5-8.5 LPA</span>
            </p>
            <Link href="/placements">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Explore Career Opportunities
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for Voice Search Optimization */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Everything you need to know about our MicroStation course
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is MicroStation software and why should I learn it in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                MicroStation is Bentley Systems&apos; premier CAD software for architecture, engineering, and construction. In Mumbai&apos;s booming infrastructure sector, MicroStation skills are essential for metro projects, coastal road development, and high-rise construction. Our comprehensive course prepares you for Mumbai&apos;s top AEC companies with hands-on training and industry-relevant projects.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does it take to become proficient in MicroStation?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our structured MicroStation course spans 3-4 months with intensive training. You&apos;ll master 2D drafting in the first month, 3D modeling in the second month, and advanced features like parametric modeling and collaboration tools in the final months. With daily practice and our expert guidance, you&apos;ll be job-ready within 4 months.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What job opportunities are available for MicroStation professionals in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                Mumbai offers excellent opportunities for MicroStation professionals in infrastructure companies like L&T, Tata Projects, and Shapoorji Pallonji. Roles include CAD Designer, Civil Draftsman, Structural Designer, and Project Coordinator. With Mumbai&apos;s ongoing metro expansion and smart city initiatives, demand for skilled professionals is constantly growing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide placement assistance after completing the MicroStation course?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we provide 100% placement assistance with our extensive network of AEC companies in Mumbai. Our placement cell conducts mock interviews, resume building workshops, and connects you with hiring managers. We have partnerships with over 200+ companies and maintain an excellent placement record with average starting salaries of ₹4.5-6 LPA.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is prior CAD experience required for the MicroStation course?</h3>
              <p className="text-gray-700 leading-relaxed">
                No prior CAD experience is required. Our course starts with fundamental CAD concepts and gradually progresses to advanced MicroStation features. We provide comprehensive training from basic drawing commands to complex 3D modeling and BIM integration. Our expert instructors ensure every student, regardless of background, achieves proficiency in MicroStation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What makes Trinkets Institute the best choice for MicroStation training in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                Trinkets Institute offers industry-leading MicroStation training with certified instructors, state-of-the-art labs, and real project experience. Our curriculum is designed with input from Mumbai&apos;s top AEC companies, ensuring job readiness. We provide flexible timings, weekend batches, and personalized attention with small batch sizes. Our 15+ years of experience and 100% placement record make us Mumbai&apos;s preferred choice for MicroStation training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">MicroStation Software Course</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master <span className="text-yellow-400">MicroStation Software Course</span> in Mumbai
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join Mumbai&apos;s premier MicroStation Software Course and become a certified CAD professional. 
                Learn from industry experts with hands-on training and guaranteed job placement assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Mumbai Location</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>2 Months Duration</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Industry Certification</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Enroll Now
                </Link>
                <Link 
                  href="/courses" 
                  className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our MicroStation Software Course in Mumbai?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive MicroStation Software Course in Mumbai is designed to transform you into a 
                  skilled CAD professional with industry-relevant skills and practical experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">
                    Master 2D drafting, 3D modeling, parametric design, and advanced MicroStation features 
                    with our structured learning approach.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                  <p className="text-gray-600">
                    Learn from certified MicroStation professionals with 10+ years of industry experience 
                    in engineering and design projects.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hands-on Training</h3>
                  <p className="text-gray-600">
                    Work on real-world projects and case studies to build a professional portfolio 
                    that showcases your MicroStation skills.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Certification</h3>
                  <p className="text-gray-600">
                    Receive recognized MicroStation certification that validates your skills and 
                    enhances your career prospects in Mumbai&apos;s job market.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
                  <p className="text-gray-600">
                    100% job placement assistance with our network of 500+ partner companies 
                    across Mumbai and Maharashtra region.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Flexible Timing</h3>
                  <p className="text-gray-600">
                    Choose from weekday, weekend, or fast-track batches to fit your schedule 
                    and learning preferences in Mumbai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  MicroStation Software Course Curriculum in Mumbai
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers all aspects of MicroStation software from basics to advanced 
                  techniques, ensuring you&apos;re job-ready upon completion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 1: MicroStation Fundamentals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>MicroStation interface and workspace setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>File management and project organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Basic drawing tools and commands</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Coordinate systems and precision drawing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Layer management and organization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 2: 2D Drafting & Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Advanced 2D drawing techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Dimensioning and annotation tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Text styles and formatting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Hatch patterns and fill areas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Creating and editing symbols</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 3: 3D Modeling & Visualization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>3D modeling fundamentals and concepts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Solid modeling and surface creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Parametric design and constraints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Rendering and visualization techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Material assignment and lighting</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 4: Advanced Features & Projects</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom tool creation and macros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Database connectivity and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Project collaboration and standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Industry-specific workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Capstone project and portfolio development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Related CAD Courses in Mumbai
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your design skills with our other popular CAD and engineering courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/autocad-mechanical-design" className="block bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-600 mb-4">Master mechanical design and drafting with AutoCAD software</p>
                  <span className="text-blue-600 font-medium">Learn More →</span>
                </Link>

                <Link href="/courses/solidworks-professional" className="block bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">SolidWorks Professional</h3>
                  <p className="text-gray-600 mb-4">Advanced 3D modeling and simulation with SolidWorks</p>
                  <span className="text-green-600 font-medium">Learn More →</span>
                </Link>

                <Link href="/courses/structural-design-analysis" className="block bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-600 mb-4">Comprehensive structural engineering design and analysis</p>
                  <span className="text-purple-600 font-medium">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-600 rounded-lg rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-slate-600 rounded-lg -rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400 rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-8 bg-blue-600 mr-3"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-2 h-8 bg-slate-600 ml-3"></div>
                </div>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Get answers to common questions about our <span className="font-semibold text-blue-700">MicroStation Software Course in Mumbai</span> and start your infrastructure design career
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    question: "What is MicroStation Software Course in Mumbai?",
                    answer: "Our comprehensive MicroStation Software Course in Mumbai is a professional training program covering 2D/3D CAD design, parametric modeling, infrastructure drafting, and Bentley MicroStation workflows. Perfect for aspiring CAD designers, civil engineers, and infrastructure professionals in Mumbai's growing construction sector."
                  },
                  {
                    question: "What is the duration of MicroStation Software Course in Mumbai?",
                    answer: "The MicroStation Software Course in Mumbai spans 2 months (120 hours) with flexible scheduling options. Choose from weekday batches (Mon-Fri), weekend classes (Sat-Sun), or intensive fast-track programs designed to fit your schedule while ensuring thorough skill development."
                  },
                  {
                    question: "Do you provide job placement after MicroStation Software Course in Mumbai?",
                    answer: "Yes! We offer 100% job placement assistance with our MicroStation Software Course in Mumbai. Our dedicated placement cell connects you with 500+ partner companies including infrastructure firms, architectural consultancies, and engineering companies across Mumbai and Maharashtra."
                  },
                  {
                    question: "What career opportunities are available after MicroStation Software Course in Mumbai?",
                    answer: "Graduates of our MicroStation Software Course in Mumbai can pursue roles as CAD Designers, Infrastructure Draftspersons, Design Engineers, Project Coordinators, BIM Specialists, or Technical Consultants in civil engineering, architecture, urban planning, and infrastructure development sectors."
                  },
                  {
                    question: "What software tools are covered in MicroStation Software Course in Mumbai?",
                    answer: "Our MicroStation Software Course in Mumbai covers Bentley MicroStation (latest version), parametric design tools, 3D modeling features, rendering capabilities, annotation tools, and integration with other Bentley products for comprehensive infrastructure design workflows."
                  },
                  {
                    question: "Is prior CAD experience required for MicroStation Software Course in Mumbai?",
                    answer: "No prior experience needed! Our MicroStation Software Course in Mumbai is designed for beginners to advanced users. We start with CAD fundamentals, progress through MicroStation basics, and advance to professional infrastructure design techniques suitable for Mumbai's engineering industry."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 transform hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info Cards */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-3">📍 Location Advantage</h4>
                  <p className="text-blue-100">
                    Located in the heart of Mumbai with easy access to major infrastructure projects and engineering hubs
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-3">🎯 Industry Focus</h4>
                  <p className="text-slate-100">
                    Curriculum aligned with Mumbai&apos;s infrastructure development needs and industry requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your MicroStation Software Course in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of successful students who have launched their CAD careers with our expert training
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91-9876543210</span>
                </div>
                <div className="flex items-center bg-white/10 px-6 py-3 rounded-lg">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@trinketsinstitute.com</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Enroll Today
                </Link>
                <Link 
                  href="/about" 
                  className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}