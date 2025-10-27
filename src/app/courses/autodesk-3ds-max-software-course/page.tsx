import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, Award, MapPin, Phone, Mail, CheckCircle, BookOpen, Monitor, Briefcase, Box, Layers, Zap, Palette, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Autodesk 3ds Max Software Course in Mumbai | Best 3D Animation Training | Trinkets Institute',
  description: 'Master Autodesk 3ds Max with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance. Join Mumbai\'s premier 3D animation institute.',
  keywords: [
    'Autodesk 3ds Max Software Course in Mumbai',
    'Autodesk 3ds Max training Mumbai',
    'Autodesk 3ds Max course Mumbai',
    '3ds Max software course Mumbai',
    '3D animation course Mumbai',
    'Autodesk 3ds Max certification Mumbai',
    'best Autodesk 3ds Max training Mumbai',
    'Autodesk 3ds Max institute Mumbai',
    'Autodesk 3ds Max classes Mumbai',
    'Autodesk 3ds Max course fees Mumbai',
    'Autodesk 3ds Max training center Mumbai',
    'Autodesk 3ds Max course duration Mumbai',
    '3ds Max software certification Mumbai',
    'Autodesk 3ds Max training institute Mumbai',
    'professional Autodesk 3ds Max course Mumbai',
    'advanced 3ds Max training Mumbai',
    '3D modeling course Mumbai',
    '3D visualization course Mumbai',
    'architectural visualization Mumbai',
    '3ds Max job training Mumbai',
    '3ds Max placement course Mumbai',
    '3D animation skill development Mumbai',
    'game design course Mumbai',
    'product visualization Mumbai',
    'interior design visualization Mumbai',
    'architectural rendering Mumbai',
    'VFX course Mumbai',
    'motion graphics course Mumbai',
    '3D graphics design Mumbai',
    'multimedia course Mumbai'
  ].join(', '),
  openGraph: {
    title: 'Autodesk 3ds Max Software Course in Mumbai | Best 3D Animation Training',
    description: 'Master Autodesk 3ds Max with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    url: 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/autodesk-3ds-max-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Autodesk 3ds Max Software Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autodesk 3ds Max Software Course in Mumbai | Best 3D Animation Training',
    description: 'Master Autodesk 3ds Max with our comprehensive course in Mumbai. Industry-expert training, hands-on projects, job placement assistance.',
    images: ['/images/courses/autodesk-3ds-max-course-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course',
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
      '@id': 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course#course',
      name: 'Autodesk 3ds Max Software Course in Mumbai',
      description: 'Comprehensive Autodesk 3ds Max training course in Mumbai with hands-on projects, industry certification, and job placement assistance for 3D animation and visualization professionals.',
      provider: {
        '@type': 'Organization',
        name: 'Trinkets Institute',
        '@id': 'https://trinketsinstitute.com/#organization'
      },
      courseMode: ['in-person', 'online'],
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'Basic computer knowledge and interest in 3D graphics',
      timeRequired: 'P4M',
      offers: {
        '@type': 'Offer',
        category: '3D Animation Training',
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
        '3D Modeling',
        'Animation Techniques',
        'Rendering & Lighting',
        'Texturing & Materials',
        'Visual Effects',
        'Architectural Visualization',
        'Game Asset Creation'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://trinketsinstitute.com/#organization',
      name: 'Trinkets Institute',
      url: 'https://trinketsinstitute.com',
      logo: 'https://trinketsinstitute.com/images/logo.png',
      description: 'Premier 3D animation and visualization training institute in Mumbai',
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
      '@id': 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course#breadcrumb',
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
          name: 'Autodesk 3ds Max Software Course',
          item: 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trinketsinstitute.com/courses/autodesk-3ds-max-software-course#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Autodesk 3ds Max Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Autodesk 3ds Max Software Course in Mumbai is a comprehensive training program covering 3D modeling, animation, rendering, and visualization using industry-standard 3ds Max software for gaming, architecture, and VFX industries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the duration of Autodesk 3ds Max Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Autodesk 3ds Max Software Course in Mumbai has a duration of 4 months with flexible timing options including weekday, weekend, and evening batches for working professionals and students.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide job placement after Autodesk 3ds Max Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 100% job placement assistance after completion of our Autodesk 3ds Max Software Course in Mumbai with our extensive network of animation studios, game development companies, and architectural visualization firms.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the career opportunities after Autodesk 3ds Max Software Course in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After completing our Autodesk 3ds Max Software Course in Mumbai, you can work as 3D Artist, Animator, Visualization Specialist, Game Asset Artist, or VFX Artist in gaming, animation, architecture, and entertainment industries.'
          }
        }
      ]
    }
  ]
};

export default function Autodesk3dsMaxCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Creative Hero Section with 3D Graphics Theme */}
        <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements - 3D Graphics Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 border-2 border-purple-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-32 left-20 w-6 h-16 bg-pink-400/20 animate-pulse"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-orange-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-32 w-16 h-2 bg-purple-400/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-pink-300/20 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-4 h-12 bg-orange-400/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-purple-300/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/2 w-14 h-2 bg-pink-400/20 animate-pulse"></div>
            {/* 3D Specific Elements */}
            <div className="absolute top-24 right-1/4 w-8 h-8 border border-orange-300/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-12 h-4 bg-purple-300/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-pink-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <nav className="flex justify-center mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <li><Link href="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
                  <li className="text-purple-300">/</li>
                  <li><Link href="/courses" className="hover:text-purple-300 transition-colors">Courses</Link></li>
                  <li className="text-purple-300">/</li>
                  <li className="text-purple-200">Autodesk 3ds Max Course</li>
                </ol>
              </nav>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Box className="w-4 h-4 mr-2" />
                  Advanced 3D Graphics Training Hub
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Autodesk 3ds Max Software</span>
                <br />Course in Mumbai
              </h1>
              
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Transform your creative vision into stunning 3D reality with Mumbai&apos;s most comprehensive Autodesk 3ds Max Software Course. 
                Master animation, visualization, and VFX with industry-expert training and guaranteed placement assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MapPin className="w-5 h-5 mr-2 text-purple-300" />
                  <span className="font-medium">Mumbai Location</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 mr-2 text-pink-300" />
                  <span className="font-medium">4 Months Duration</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-orange-300" />
                  <span className="font-medium">Industry Certification</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Create Your 3D Future Today
                </Link>
                <Link 
                  href="/courses" 
                  className="border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Stats Section with 3D Graphics Theme */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1200+</div>
                  <div className="text-gray-600 font-medium">3D Artists Trained</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                  <div className="text-gray-600 font-medium">3D Projects Completed</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">97%</div>
                  <div className="text-gray-600 font-medium">Industry Placement Rate</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Studio Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features with Creative 3D Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Box className="w-4 h-4 mr-2" />
                  Why Choose Our Autodesk 3ds Max Course?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Sculpt Your Future with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600"> Expert 3D Training</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive Autodesk 3ds Max Software Course in Mumbai combines cutting-edge 3D graphics technology 
                  with practical industry experience to make you ready for Mumbai&apos;s thriving animation and gaming industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-900">Advanced 3D Modeling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Master complex 3D modeling techniques, polygon manipulation, and surface creation 
                    with hands-on experience on Mumbai&apos;s major animation and architectural visualization projects.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-pink-900">Animation & Rigging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn character animation, keyframe techniques, and advanced rigging systems with 
                    certified professionals experienced in Mumbai&apos;s animation and gaming studios.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-900">Rendering & Lighting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create photorealistic renders, master lighting techniques, and material creation for 
                    professional visualization projects in Mumbai&apos;s architectural and product design industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-900">Visual Effects & Particles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design stunning visual effects, particle systems, and dynamics simulations essential 
                    for film production and advertising projects across Mumbai&apos;s entertainment industry.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">Texturing & Materials</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn advanced texturing techniques, material creation, and UV mapping following 
                    industry standards for Mumbai&apos;s gaming and visualization market requirements.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-900">Industry Certification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive globally recognized Autodesk 3ds Max certification that validates your expertise 
                    and enhances career prospects in Mumbai&apos;s animation, gaming, and visualization industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Curriculum Section with 3D Focus */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Layers className="w-4 h-4 mr-2" />
                  Comprehensive Curriculum
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Autodesk 3ds Max Software Course
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600"> Curriculum in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured curriculum covers everything from basic 3D modeling to advanced animation and VFX, 
                  ensuring you&apos;re ready for Mumbai&apos;s demanding entertainment and visualization industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">3ds Max Fundamentals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3ds Max interface and navigation essentials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Basic 3D modeling and primitive objects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Viewport navigation and display modes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Object transformation and coordinate systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Scene organization and layer management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-pink-900">Advanced Modeling & Texturing</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Polygon modeling and editable poly workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">NURBS and spline-based modeling techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">UV mapping and texture coordinate management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Material creation and shader development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Procedural texturing and bitmap coordination</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-900">Animation & Rigging</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Keyframe animation and timeline management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Character rigging and bone system setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Biped and CAT character animation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Constraints and animation controllers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Path animation and morphing techniques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-900">Rendering & Visual Effects</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">V-Ray and Arnold rendering engines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Lighting design and camera composition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Particle systems and dynamics simulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Post-production and compositing workflow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Portfolio project and industry certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses with Creative 3D Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Expand Your Creative Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Related Creative Courses
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600"> in Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your 3D and visualization skills with our other specialized courses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/courses/solidworks-professional" className="group block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">SolidWorks Professional</h3>
                  <p className="text-gray-700 mb-4">Advanced 3D CAD design and engineering modeling</p>
                  <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/autocad-mechanical-design" className="group block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">AutoCAD Mechanical Design</h3>
                  <p className="text-gray-700 mb-4">Professional mechanical drafting and design</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>

                <Link href="/courses/structural-design-analysis" className="group block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Structural Design & Analysis</h3>
                  <p className="text-gray-700 mb-4">Advanced structural engineering and modeling</p>
                  <span className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative FAQ Section with 3D Theme */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions About Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600"> Autodesk 3ds Max Course</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is Autodesk 3ds Max Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Autodesk 3ds Max Software Course in Mumbai is a comprehensive training program covering 3D modeling, 
                    animation, rendering, and visualization using industry-standard 3ds Max software for gaming, architecture, and VFX industries. 
                    The course includes hands-on projects based on Mumbai&apos;s animation and entertainment industry requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What is the duration of Autodesk 3ds Max Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Autodesk 3ds Max Software Course in Mumbai has a duration of 4 months with flexible timing options. 
                    We offer weekday, weekend, and evening batches to accommodate working professionals and students 
                    in Mumbai&apos;s animation and gaming sectors.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Do you provide job placement after Autodesk 3ds Max Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we provide 100% job placement assistance after completion of our Autodesk 3ds Max Software Course in Mumbai. 
                    Our dedicated placement team works with our network of 150+ animation studios, game development companies, 
                    and architectural visualization firms including major entertainment companies across Mumbai and India.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What are the career opportunities after Autodesk 3ds Max Software Course in Mumbai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After completing our Autodesk 3ds Max Software Course in Mumbai, you can work as 3D Artist, 
                    Animator, Visualization Specialist, Game Asset Artist, VFX Artist, or Motion Graphics Designer in gaming, 
                    animation, architecture, advertising, and entertainment industries across Mumbai&apos;s thriving creative sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Contact CTA with 3D Theme */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
          {/* Animated Background Elements - 3D Creative Theme */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 border border-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 border border-orange-400/20 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-2 bg-pink-400/20 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-2 h-16 bg-purple-300/20 animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-4 h-4 border border-orange-300/20 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-purple-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Box className="w-4 h-4 mr-2" />
                  Shape Your 3D Career Today
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Autodesk 3ds Max in Mumbai?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful 3D artists who have transformed their creative careers with our expert training 
                and comprehensive job placement assistance in Mumbai&apos;s animation and entertainment industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-3 text-purple-300" />
                  <span className="font-medium">+91-9820924788</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-3 text-pink-300" />
                  <span className="font-medium">info@trinketsinstitute.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enroll Now & Create Your Future
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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
