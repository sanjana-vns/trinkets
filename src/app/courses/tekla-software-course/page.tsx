import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Building, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tekla Software Course in Mumbai | Best Structural Engineering Training | Trinkets Institute',
  description: 'Master Tekla Structures with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier structural engineering institute.',
  keywords: [
    'Tekla Software Course in Mumbai',
    'Tekla Structures training Mumbai',
    'Tekla course Mumbai',
    'Tekla software training Mumbai',
    'structural engineering course Mumbai',
    'Tekla Structures certification Mumbai',
    'best Tekla training Mumbai',
    'Tekla institute Mumbai',
    'Tekla classes Mumbai',
    'Tekla software course fees Mumbai',
    'Tekla training center Mumbai',
    'Tekla course duration Mumbai',
    'Tekla software certification Mumbai',
    'Tekla training institute Mumbai',
    'professional Tekla course Mumbai',
    'advanced Tekla training Mumbai',
    'Tekla design course Mumbai',
    'Tekla modeling course Mumbai',
    'Tekla 3D modeling training Mumbai',
    'Tekla job training Mumbai',
    'Tekla placement course Mumbai',
    'Tekla skill development Mumbai',
    'structural design software Mumbai',
    'building design course Mumbai',
    'steel structure design Mumbai',
    'concrete design course Mumbai',
    'BIM modeling training Mumbai',
    'construction software course Mumbai',
    'structural engineering software Mumbai',
    'Tekla BIM course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'Tekla Software Course in Mumbai | Best Structural Engineering Training',
    description: 'Master Tekla Structures with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/tekla-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/tekla-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekla Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tekla Software Course in Mumbai | Best Structural Engineering Training',
    description: 'Master Tekla Structures with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/tekla-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/tekla-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/tekla-software-course#course',
      name: 'Tekla Software Course in Mumbai',
      description: 'Comprehensive Tekla Structures training course in Mumbai with hands-on projects, industry certification, and job placement assistance for structural engineering professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic engineering knowledge and computer skills',
      timeRequired: 'P3M',
      offers: {
        '@type': 'Offer',
        category: 'Tekla Structures Training',
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
        'Tekla Structures Fundamentals',
        'Steel Structure Modeling',
        'Concrete Structure Design',
        'BIM Workflows',
        'Clash Detection',
        'Drawing Generation',
        'Quantity Takeoff'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier engineering and structural design training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/tekla-software-course#breadcrumb',
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
          name: 'Tekla Software Course',
          item: 'https://trinketsinstitute.com/courses/tekla-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/tekla-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Tekla Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Tekla Software Course in Mumbai is a comprehensive structural engineering training program covering 3D modeling, steel and concrete design, BIM workflows, and industry-standard practices using Tekla Structures software.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of Tekla Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Tekla Software Course in Mumbai has a duration of 3 months with flexible timing options including weekday, weekend, and intensive batches to suit working professionals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after Tekla Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our Tekla Software Course in Mumbai with our extensive network of construction and engineering companies across Maharashtra.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after Tekla Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our Tekla Software Course in Mumbai, you can work as Structural Designer, BIM Coordinator, Steel Detailer, Project Engineer, or Technical Specialist in construction, infrastructure, and engineering firms.'
          }
        }
      ]
    }
  ]
};

export default function TeklaCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                  <li className="text-blue-300">/</li>
                  <li><Link href="/courses" className="hover:text-blue-300 transition-colors">Courses</Link></li>
                  <li className="text-blue-300">/</li>
                  <li className="text-blue-200">Tekla Software Course</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master <span className="text-yellow-400">Tekla Software Course</span> in Mumbai
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join Mumbai&apos;s premier Tekla Software Course and become a certified structural engineering professional. 
                Learn from industry experts with hands-on training and guaranteed job placement assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Mumbai Location</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>3 Months Duration</span>
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
                  Why Choose Our Tekla Software Course in Mumbai?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Tekla Software Course in Mumbai is designed to transform you into a 
                  skilled structural engineering professional with industry-relevant skills and practical experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Structural Engineering Focus</h3>
                  <p className="text-gray-600">
                    Master steel and concrete structure modeling, design principles, and industry standards 
                    with our specialized structural engineering approach.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                  <p className="text-gray-600">
                    Learn from certified Tekla professionals with 15+ years of experience in major 
                    infrastructure and construction projects across Mumbai.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">BIM Integration</h3>
                  <p className="text-gray-600">
                    Learn advanced BIM workflows, clash detection, and collaborative design processes 
                    essential for modern construction projects.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Certification</h3>
                  <p className="text-gray-600">
                    Receive recognized Tekla certification that validates your structural engineering 
                    skills and enhances your career prospects in Mumbai&apos;s construction industry.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
                  <p className="text-gray-600">
                    100% job placement assistance with our network of 300+ construction and engineering 
                    companies across Mumbai and Maharashtra region.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Live Projects</h3>
                  <p className="text-gray-600">
                    Work on real Mumbai infrastructure projects including bridges, high-rises, and 
                    industrial structures to build practical experience.
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
                  Tekla Software Course Curriculum in Mumbai
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers all aspects of Tekla Structures from fundamentals to advanced 
                  BIM workflows, ensuring you&apos;re industry-ready upon completion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-6">Module 1: Tekla Fundamentals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Tekla Structures interface and workspace setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Project setup and model organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Basic modeling tools and commands</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Grid systems and reference planes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Materials and section properties</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-6">Module 2: Steel Structure Modeling</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Steel frame modeling and design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Connection design and detailing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Bolted and welded connections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Steel member optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Fabrication drawings and details</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-6">Module 3: Concrete Structure Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Concrete modeling fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Reinforcement design and detailing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Precast and cast-in-place elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Rebar scheduling and quantity takeoff</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Construction documentation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-6">Module 4: BIM & Advanced Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>BIM collaboration workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Model sharing and version control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Clash detection and resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>4D sequencing and project planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Portfolio project and certification</span>
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
                  Related Engineering Courses in Mumbai
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your structural engineering skills with our other popular courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/microstation-software-course" className="block bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">MicroStation Software Course</h3>
                  <p className="text-gray-600 mb-4">Master Bentley MicroStation for comprehensive CAD design and drafting</p>
                  <span className="text-blue-600 font-medium">Learn More →</span>
                </Link>

                <Link href="/courses/structural-design-analysis" className="block bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-600 mb-4">Advanced structural analysis and design principles for engineers</p>
                  <span className="text-green-600 font-medium">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-mechanical-design" className="block bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-600 mb-4">Professional mechanical design and drafting with AutoCAD</p>
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
                  Common questions about our Tekla Software Course in Mumbai
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is Tekla Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    Our Tekla Software Course in Mumbai is a comprehensive structural engineering training program covering 
                    3D modeling, steel and concrete design, BIM workflows, and industry-standard practices using Tekla Structures software. 
                    The course is designed for engineers and professionals looking to specialize in structural design and construction.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is the duration of Tekla Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    The Tekla Software Course in Mumbai has a duration of 3 months with flexible timing options. 
                    We offer weekday, weekend, and intensive batches to accommodate working professionals and students in Mumbai.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do you provide job placement after Tekla Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide 100% job placement assistance after completion of our Tekla Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 300+ construction and engineering companies to help 
                    you secure positions in top firms across Mumbai and Maharashtra.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the career opportunities after Tekla Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-600">
                    After completing our Tekla Software Course in Mumbai, you can work as Structural Designer, BIM Coordinator, 
                    Steel Detailer, Project Engineer, Technical Specialist, or pursue senior roles in construction, infrastructure 
                    development, and engineering consultancy firms in Mumbai&apos;s booming construction sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Tekla Software Course in Mumbai?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of successful structural engineers who have launched their careers with our expert training
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
                  className="border border-white hover:bg-white hover:text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors"
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