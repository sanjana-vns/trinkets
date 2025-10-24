import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Building, Zap, Target, Cpu, Trophy, Settings, Globe, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SolidWorks Professional Course in Mumbai | Best CSWA CSWP Training Institute | Trinkets Institute',
  description: 'Leading SolidWorks Professional Course in Mumbai with CSWA/CSWP certification, 3D CAD modeling, simulation, PDM training. 100% job placement in Mumbai\'s top product design companies. Expert faculty, hands-on projects.',
  keywords: [
    'SolidWorks Professional Course in Mumbai',
    'SolidWorks training Mumbai',
    'CSWA certification Mumbai',
    'CSWP certification Mumbai',
    'SolidWorks institute Mumbai',
    'best SolidWorks course Mumbai',
    'SolidWorks classes Mumbai',
    'CAD training Mumbai',
    '3D modeling course Mumbai',
    'product design course Mumbai',
    'mechanical design training Mumbai',
    'SolidWorks simulation Mumbai',
    'SolidWorks PDM training Mumbai',
    'engineering course Mumbai',
    'SolidWorks professional training Mumbai',
    'CSWA CSWP exam preparation Mumbai',
    'SolidWorks course fees Mumbai',
    'SolidWorks placement Mumbai',
    'automotive design course Mumbai',
    'manufacturing design Mumbai',
    'mechanical engineering course Mumbai',
    'CAD institute Mumbai',
    'product development course Mumbai',
    'design engineering training Mumbai',
    'SolidWorks career Mumbai',
    'Mumbai SolidWorks jobs',
    'SolidWorks freelancing Mumbai',
    'industrial design course Mumbai',
    'machine design course Mumbai',
    'sheet metal design Mumbai',
    'surface modeling Mumbai',
    'finite element analysis Mumbai',
    'motion simulation Mumbai',
    'SolidWorks expert Mumbai',
    'design consultant training Mumbai'
  ].join(', '),
  openGraph: {
    title: 'SolidWorks Professional Course in Mumbai | Best CSWA CSWP Training Institute',
    description: 'Master SolidWorks Professional in Mumbai with hands-on training, CSWA/CSWP certification, and guaranteed job placement. Join Mumbai\'s premier CAD design institute.',
    url: 'https://trinketsinstitute.com/courses/solidworks-professional',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/solidworks-professional-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'SolidWorks Professional Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolidWorks Professional Course in Mumbai | Best CAD Training Institute',
    description: 'Master SolidWorks Professional with CSWA/CSWP certification in Mumbai. Expert training, real projects, guaranteed placement.',
    images: ['/images/courses/solidworks-professional-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/solidworks-professional',
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
      '@id': 'https://trinketsinstitute.com/courses/solidworks-professional#course',
      name: 'SolidWorks Professional Course in Mumbai',
      description: 'Comprehensive SolidWorks Professional training course in Mumbai with CSWA/CSWP certification, 3D CAD modeling, simulation, PDM, and guaranteed job placement assistance.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Professional',
      coursePrerequisites: 'Basic engineering knowledge and computer proficiency',
      timeRequired: 'P5M',
      offers: {
        '@type': 'Offer',
        category: 'SolidWorks Professional Training',
        availabilityEnds: '2025-12-31',
        availabilityStarts: '2025-10-24'
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
        'SolidWorks 3D CAD Modeling',
        'Advanced Assembly Design',
        'CSWA Certification Preparation',
        'CSWP Certification Preparation',
        'SolidWorks Simulation and FEA',
        'Sheet Metal Design',
        'Surface Modeling',
        'Product Data Management (PDM)',
        'Motion Analysis',
        'Design for Manufacturing'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and CAD training institute in Mumbai specializing in SolidWorks, AutoCAD, and advanced design courses',
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
      '@id': 'https://trinketsinstitute.com/courses/solidworks-professional#breadcrumb',
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
          name: 'SolidWorks Professional Course',
          item: 'https://trinketsinstitute.com/courses/solidworks-professional'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/solidworks-professional#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best SolidWorks Professional Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trinkets Institute offers the best SolidWorks Professional Course in Mumbai with comprehensive training in 3D CAD modeling, CSWA/CSWP certification preparation, simulation, PDM, and guaranteed job placement assistance.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of SolidWorks Professional Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our SolidWorks Professional Course in Mumbai spans 5 months (160 hours) with flexible timing options including weekday, weekend, and fast-track batches for working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide CSWA and CSWP certification preparation in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our SolidWorks Professional Course in Mumbai includes comprehensive CSWA and CSWP certification preparation with practice tests, mock exams, and exam strategies.'
          }
        },
        {
          '@type': 'Question',
          name: 'What career opportunities are available after SolidWorks Professional Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our SolidWorks Professional Course in Mumbai, you can work as Product Design Engineer, CAD Designer, Mechanical Design Engineer, R&D Engineer, or Design Consultant in Mumbai\'s automotive, aerospace, and manufacturing industries.'
          }
        }
      ]
    }
  ]
};

export default function SolidWorksProCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">SolidWorks Professional Course</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master <span className="text-yellow-400">SolidWorks Professional Course</span> in Mumbai
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join Mumbai&apos;s premier SolidWorks Professional Course with CSWA/CSWP certification, advanced 3D CAD modeling, 
                simulation training, and guaranteed job placement in top product design companies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Mumbai Location</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>5 Months Duration</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 mr-2" />
                  <span>CSWA/CSWP Certification</span>
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
                  Why Choose Our SolidWorks Professional Course in Mumbai?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Mumbai&apos;s most comprehensive SolidWorks Professional Course designed to make you industry-ready with 
                  advanced 3D CAD skills, CSWA/CSWP certification, and guaranteed job placement assistance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced 3D CAD Modeling</h3>
                  <p className="text-gray-600">
                    Master professional-grade 3D CAD modeling, parametric design, advanced assembly creation, 
                    and complex surface modeling techniques used by Mumbai&apos;s top product design companies.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">CSWA/CSWP Certification</h3>
                  <p className="text-gray-600">
                    Comprehensive preparation for Certified SolidWorks Associate (CSWA) and Certified SolidWorks 
                    Professional (CSWP) exams with mock tests and expert guidance.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Simulation & Analysis</h3>
                  <p className="text-gray-600">
                    Learn advanced SolidWorks Simulation, Finite Element Analysis (FEA), motion analysis, 
                    and thermal analysis for real-world engineering applications.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Faculty Mumbai</h3>
                  <p className="text-gray-600">
                    Learn from certified SolidWorks professionals and industry experts with 15+ years experience 
                    in product design and manufacturing in Mumbai&apos;s automotive and aerospace sectors.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Mumbai Job Placement</h3>
                  <p className="text-gray-600">
                    100% job placement assistance with our network of 500+ product design and manufacturing 
                    companies across Mumbai, Pune, and Maharashtra region.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Industry Projects</h3>
                  <p className="text-gray-600">
                    Work on real Mumbai industry projects from automotive, aerospace, consumer goods, and 
                    medical device companies to build professional portfolio.
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
                  SolidWorks Professional Course Curriculum in Mumbai
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive 5-month curriculum covering all aspects of professional SolidWorks training from 
                  fundamentals to advanced certification preparation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 1: SolidWorks Fundamentals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">SolidWorks interface and workspace customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced sketching techniques and constraints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">3D feature creation and parametric modeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Design intent and feature trees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Part configurations and design tables</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 2: Advanced Assembly Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complex assembly creation and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced mates and mechanical relationships</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Large assembly performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Sub-assemblies and component patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Assembly configurations and exploded views</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 3: Sheet Metal & Surfacing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Sheet metal design and bend calculations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced surface modeling techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Weldment structures and framework design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complex organic shapes and NURBS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Surface repair and quality analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 4: Simulation & Analysis</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Static stress analysis and safety factors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Thermal analysis and heat transfer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Frequency and buckling analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Motion analysis and mechanism simulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Design optimization and study validation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 5: CSWA Certification Prep</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">CSWA exam format and requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Part modeling and modification exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Assembly modeling and mates practice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Drawing creation and annotation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Practice tests and time management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Module 6: CSWP Certification Prep</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">CSWP exam structure and strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced part modeling challenges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complex assembly modifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced drawing views and dimensions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Mock exams and performance analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Placement Statistics */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mumbai Placement Success Statistics
                </h2>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  Exclusive placement data for SolidWorks Professional Course graduates in Mumbai&apos;s thriving 
                  product design and manufacturing industry.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-blue-200">Placement Rate Mumbai</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">₹4.2L</div>
                  <div className="text-blue-200">Average Salary Mumbai</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-blue-200">Hiring Partners Mumbai</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">2400+</div>
                  <div className="text-blue-200">Students Placed</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Top Hiring Companies in Mumbai</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Tata Motors (Automotive Design)</li>
                    <li>• Mahindra Group (Product Development)</li>
                    <li>• L&T Technology Services</li>
                    <li>• Bajaj Auto (Design Engineering)</li>
                    <li>• Godrej & Boyce (Industrial Design)</li>
                    <li>• Siemens Mumbai (CAD Solutions)</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Popular Job Roles Mumbai</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Product Design Engineer</li>
                    <li>• CAD Designer/Specialist</li>
                    <li>• Mechanical Design Engineer</li>
                    <li>• R&D Engineer</li>
                    <li>• Design Consultant</li>
                    <li>• Senior CAD Engineer</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Mumbai Industry Sectors</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Automotive & Auto Components</li>
                    <li>• Aerospace & Defense</li>
                    <li>• Consumer Electronics</li>
                    <li>• Medical Devices</li>
                    <li>• Pharmaceuticals Equipment</li>
                    <li>• Industrial Machinery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-blue-50 to-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 left-16 w-40 h-40 border-4 border-blue-600 rounded-lg rotate-12 transform"></div>
            <div className="absolute bottom-16 right-16 w-32 h-32 border-3 border-gray-600 rounded-lg -rotate-12 transform"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-blue-400 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-gray-400 rounded-lg rotate-45"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-3 h-10 bg-blue-600 mr-4 transform rotate-12"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-3 h-10 bg-gray-600 ml-4 transform -rotate-12"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get detailed answers about our <span className="font-semibold text-blue-700">SolidWorks Professional Course in Mumbai</span> and build your CAD design career
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    question: "What is the best SolidWorks Professional Course in Mumbai?",
                    answer: "Trinkets Institute offers the best SolidWorks Professional Course in Mumbai with comprehensive training in 3D CAD modeling, CSWA/CSWP certification preparation, advanced simulation, surface modeling, and guaranteed job placement assistance in Mumbai's top product design companies."
                  },
                  {
                    question: "What is the duration of SolidWorks Professional Course in Mumbai?",
                    answer: "Our SolidWorks Professional Course in Mumbai spans 5 months (160 hours) with flexible timing options including weekday sessions (Mon-Fri), weekend intensives (Sat-Sun), and fast-track programs designed for working professionals in Mumbai."
                  },
                  {
                    question: "Do you provide CSWA and CSWP certification preparation in Mumbai?",
                    answer: "Yes, our SolidWorks Professional Course in Mumbai includes comprehensive CSWA (Certified SolidWorks Associate) and CSWP (Certified SolidWorks Professional) certification preparation with dedicated modules, practice tests, mock exams, and exam strategies."
                  },
                  {
                    question: "What career opportunities are available after SolidWorks Professional Course in Mumbai?",
                    answer: "After completing our SolidWorks Professional Course in Mumbai, you can work as Product Design Engineer, CAD Designer, Mechanical Design Engineer, R&D Engineer, Design Consultant, or Senior CAD Specialist in Mumbai's automotive, aerospace, consumer goods, and manufacturing industries."
                  },
                  {
                    question: "What is the job placement rate for SolidWorks Professional Course in Mumbai?",
                    answer: "Our SolidWorks Professional Course in Mumbai achieves 98% placement rate with our network of 500+ hiring partners including Tata Motors, Mahindra Group, L&T Technology Services, Bajaj Auto, and leading product design companies across Mumbai and Maharashtra."
                  },
                  {
                    question: "Which software modules are covered in SolidWorks Professional Course in Mumbai?",
                    answer: "Our SolidWorks Professional Course in Mumbai covers SolidWorks Premium (latest version), SolidWorks Simulation, Motion Analysis, Sheet Metal Design, Surface Modeling, Weldments, PDM, and extensive CSWA/CSWP certification preparation modules."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-blue-200 transform hover:-translate-y-2 hover:scale-[1.02]">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-white font-bold">Q</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-semibold mb-3">🏆 Mumbai Leader</h4>
                  <p className="text-blue-100">
                    Mumbai&apos;s premier SolidWorks training institute with certified instructors and industry partnerships
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 rounded-xl text-white transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-semibold mb-3">🎯 Industry Focus</h4>
                  <p className="text-gray-100">
                    Real-world projects from Mumbai&apos;s automotive, aerospace, and product design companies
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-semibold mb-3">🚀 Career Growth</h4>
                  <p className="text-purple-100">
                    CSWA/CSWP certification pathway with continuous learning and advanced specialization programs
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
                Ready to Start Your SolidWorks Professional Course in Mumbai?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of successful CAD designers who have launched their careers with our expert SolidWorks training
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