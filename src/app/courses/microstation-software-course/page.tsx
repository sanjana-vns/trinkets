import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MicroStation Software Course in Mumbai | Best CAD Training Institute | Trinkets Institute',
  description: 'Master MicroStation Software with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier CAD training institute.',
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
    'construction CAD training Mumbai'
  ].join(', '),
  openGraph: {
    title: 'MicroStation Software Course in Mumbai | Best CAD Training Institute',
    description: 'Master MicroStation Software with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Common questions about our MicroStation Software Course in Mumbai
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is MicroStation Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    Our MicroStation Software Course in Mumbai is a comprehensive training program that covers 2D drafting, 
                    3D modeling, parametric design, and industry-standard workflows using Bentley MicroStation software. 
                    The course is designed for students and professionals looking to enhance their CAD skills.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is the duration of MicroStation Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    The MicroStation Software Course in Mumbai has a duration of 2 months with flexible timing options. 
                    We offer weekday, weekend, and fast-track batches to accommodate different schedules and learning preferences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do you provide job placement after MicroStation Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide 100% job placement assistance after completion of our MicroStation Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 500+ partner companies to help you secure the right job opportunity.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the career opportunities after MicroStation Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    After completing our MicroStation Software Course in Mumbai, you can work as CAD Designer, Drafting Engineer, 
                    Design Engineer, Project Coordinator, Technical Specialist, or pursue careers in architecture, civil engineering, 
                    infrastructure development, and construction industries.
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