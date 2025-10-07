import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Calculator, BarChart3, Zap, Activity, TrendingUp, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MATLAB Software Course in Mumbai | Best Scientific Computing Training | Trinkets Institute',
  description: 'Master MATLAB with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier scientific computing institute.',
  keywords: [
    'MATLAB Software Course in Mumbai',
    'MATLAB training Mumbai',
    'MATLAB course Mumbai',
    'MATLAB software training Mumbai',
    'scientific computing course Mumbai',
    'MATLAB certification Mumbai',
    'best MATLAB training Mumbai',
    'MATLAB institute Mumbai',
    'MATLAB classes Mumbai',
    'MATLAB course fees Mumbai',
    'MATLAB training center Mumbai',
    'MATLAB course duration Mumbai',
    'MATLAB software certification Mumbai',
    'MATLAB training institute Mumbai',
    'professional MATLAB course Mumbai',
    'advanced MATLAB training Mumbai',
    'data analysis course Mumbai',
    'signal processing course Mumbai',
    'image processing Mumbai',
    'MATLAB job training Mumbai',
    'MATLAB placement course Mumbai',
    'MATLAB skill development Mumbai',
    'engineering simulation Mumbai',
    'control systems Mumbai',
    'machine learning Mumbai',
    'deep learning course Mumbai',
    'artificial intelligence Mumbai',
    'mathematical modeling Mumbai',
    'numerical analysis Mumbai',
    'MATLAB Simulink course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'MATLAB Software Course in Mumbai | Best Scientific Computing Training',
    description: 'Master MATLAB with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/matlab-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/matlab-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'MATLAB Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATLAB Software Course in Mumbai | Best Scientific Computing Training',
    description: 'Master MATLAB with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/matlab-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/matlab-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/matlab-software-course#course',
      name: 'MATLAB Software Course in Mumbai',
      description: 'Comprehensive MATLAB training course in Mumbai with hands-on projects, industry certification, and job placement assistance for engineering and scientific computing professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic mathematics and programming fundamentals',
      timeRequired: 'P3M',
      offers: {
        '@type': 'Offer',
        category: 'Scientific Computing Training',
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
        'MATLAB Programming',
        'Data Analysis',
        'Signal Processing',
        'Image Processing',
        'Machine Learning',
        'Simulink Modeling',
        'Scientific Computing'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier scientific computing and engineering training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/matlab-software-course#breadcrumb',
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
          name: 'MATLAB Software Course',
          item: 'https://trinketsinstitute.com/courses/matlab-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/matlab-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is MATLAB Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our MATLAB Software Course in Mumbai is a comprehensive training program covering scientific computing, data analysis, signal processing, and machine learning using industry-standard MATLAB software for engineering and research applications.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of MATLAB Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The MATLAB Software Course in Mumbai has a duration of 3 months with flexible timing options including weekday, weekend, and evening batches for working professionals and students.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after MATLAB Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our MATLAB Software Course in Mumbai with our extensive network of engineering companies, research institutes, and tech firms.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after MATLAB Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our MATLAB Software Course in Mumbai, you can work as Data Analyst, Research Engineer, Control Systems Engineer, or Signal Processing Engineer in aerospace, automotive, telecommunications, and research industries.'
          }
        }
      ]
    }
  ]
};

export default function MATLABCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with Scientific Computing Theme */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - Scientific/Mathematical Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-20 w-6 h-16 bg-purple-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-orange-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-40 right-32 w-16 h-2 bg-blue-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-purple-300/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-12 bg-orange-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-blue-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-14 h-2 bg-purple-400/20 animate-pulse"></div>
            {/* Scientific Computing Specific Elements */}
            <div className="absolute top-24 right-1/4 w-8 h-8 border border-orange-300/20 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-12 h-4 bg-blue-300/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-purple-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">MATLAB Software Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Calculator className="w-4 h-4 mr-2" />
                  Advanced Scientific Computing Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">MATLAB Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Compute your future with Mumbai&apos;s most comprehensive MATLAB Software Course. 
                Master scientific computing, data analysis, and machine learning with industry-expert training and guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-purple-300" />
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
                  className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Compute Your Future Today
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

        {/* Creative Stats Section with Scientific Theme */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1500+</div>
                  <div className="text-gray-600 font-medium">Engineers Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">400+</div>
                  <div className="text-gray-600 font-medium">Research Projects</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-gray-600 font-medium">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative Scientific Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Brain className="w-4 h-4 mr-2" />
                  Why Choose Our MATLAB Software Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Calculate Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> Expert MATLAB Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive MATLAB Software Course in Mumbai combines cutting-edge scientific computing technology 
                  with practical engineering applications to make you industry-ready for Mumbai&apos;s research and technology sector.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Advanced Programming & Algorithms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master MATLAB programming fundamentals, algorithm development, and optimization techniques 
                    with hands-on experience on Mumbai&apos;s major engineering and research projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Data Analysis & Visualization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn comprehensive data analysis, statistical computing, and advanced visualization techniques with 
                    certified professionals experienced in Mumbai&apos;s data science and analytics sector.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Signal & Image Processing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design advanced signal processing algorithms, image analysis, and computer vision applications for 
                    telecommunications and medical imaging projects in Mumbai&apos;s technology industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900">Machine Learning & AI</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Implement machine learning algorithms, neural networks, and AI solutions essential 
                    for data science and artificial intelligence projects across Mumbai&apos;s tech ecosystem.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Control Systems & Simulink</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn control system design, Simulink modeling, and system simulation following 
                    industry standards for Mumbai&apos;s aerospace and automotive engineering requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-pink-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized MATLAB certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s engineering and technology industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with Scientific Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  MATLAB Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic programming to advanced machine learning, 
                  ensuring you&apos;re ready for Mumbai&apos;s demanding research and engineering projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">MATLAB Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">MATLAB environment and command window</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Variables, arrays, and matrix operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Programming constructs and functions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">File input/output and data import</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Debugging and optimization techniques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Data Analysis & Visualization</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Statistical analysis and data processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">2D and 3D plotting and visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Curve fitting and regression analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Time series analysis and forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Interactive dashboards and GUI development</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-900">Signal & Image Processing</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Digital signal processing fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Filtering and frequency domain analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Image processing and computer vision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Feature extraction and pattern recognition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Audio and speech processing applications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">Advanced Applications</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Machine learning and neural networks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Control systems and Simulink modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Optimization and numerical methods</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Parallel computing and GPU acceleration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Portfolio project and industry certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative Scientific Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Brain className="w-4 h-4 mr-2" />
                  Expand Your Technical Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Engineering Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your scientific computing and engineering skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/solidworks-professional" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">SolidWorks Professional</h3>
                  <p className="text-gray-700 mb-4">Advanced CAD design and engineering simulation</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-mechanical-design" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-700 mb-4">Professional mechanical drafting and analysis</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/structural-design-analysis" className="group block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced structural engineering and simulation</p>
                  <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with Scientific Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> MATLAB Software Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is MATLAB Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our MATLAB Software Course in Mumbai is a comprehensive training program covering scientific computing, 
                    data analysis, signal processing, and machine learning using industry-standard MATLAB software for engineering and research applications. 
                    The course includes hands-on projects based on Mumbai&apos;s research and technology industry requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of MATLAB Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The MATLAB Software Course in Mumbai has a duration of 3 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s engineering and research sectors.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after MATLAB Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our MATLAB Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 250+ engineering companies, research institutes, 
                    and tech firms including major organizations across Mumbai and India.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after MATLAB Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our MATLAB Software Course in Mumbai, you can work as Data Analyst, 
                    Research Engineer, Control Systems Engineer, Signal Processing Engineer, or Machine Learning Specialist in aerospace, 
                    automotive, telecommunications, biomedical, and research industries across Mumbai&apos;s thriving technology sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with Scientific Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - Scientific Computing Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 border border-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-orange-400/20 rounded-lg animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-purple-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-blue-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-orange-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Calculator className="w-4 h-4 mr-2" />
                  Compute Your Engineering Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master MATLAB Software in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful engineers who have advanced their careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s technology and research industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-orange-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Compute Your Future
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