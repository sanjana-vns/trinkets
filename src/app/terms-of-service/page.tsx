import { Metadata } from 'next'
import React from 'react'
import { Scale, FileText, Users, Shield, AlertTriangle, BookOpen, CreditCard, Gavel } from 'lucide-react'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Terms of Service | Trinkets Institute of Technology | Mumbai Engineering Training',
  description: 'Terms of Service for Trinkets Institute Mumbai. Understand the terms and conditions for our engineering courses, student policies, and service agreements.',
  keywords: [
    'terms of service',
    'trinkets institute terms',
    'student terms conditions',
    'engineering course terms',
    'mumbai institute policies',
    'education service agreement',
    'student rights responsibilities',
    'course enrollment terms',
    'training institute policies',
    'educational terms mumbai',
    'piping course terms',
    'engineering training agreement'
  ],
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
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
  openGraph: {
    title: 'Terms of Service | Trinkets Institute Mumbai',
    description: 'Terms of Service for Trinkets Institute Mumbai. Understand the terms and conditions for our engineering courses.',
    url: 'https://trinketsinstitute.com/terms-of-service',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Terms of Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Trinkets Institute Mumbai',
    description: 'Terms of Service for Trinkets Institute Mumbai engineering courses.',
    images: ['https://trinketsinstitute.com/images/trinketlogo.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/terms-of-service',
  },
}

const TermsOfService = () => {
  const lastUpdated = "October 25, 2024"

  const termsSection = [
    {
      icon: Users,
      title: "User Accounts and Eligibility",
      content: [
        "Students must be 18 years or older, or have parental consent",
        "Accurate and complete information must be provided during enrollment",
        "Students are responsible for maintaining account security",
        "One account per student; sharing accounts is prohibited",
        "Students must notify us of any changes to contact information"
      ]
    },
    {
      icon: BookOpen,
      title: "Course Enrollment and Access",
      content: [
        "Course enrollment is subject to seat availability",
        "Students must meet prerequisite requirements for advanced courses",
        "Course materials are for personal use only and cannot be shared",
        "Access to online materials expires after course completion",
        "Transfer between courses subject to availability and additional fees"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment and Refund Policy",
      content: [
        "Course fees must be paid as per the agreed payment schedule",
        "Refunds are processed according to our refund policy",
        "Late payment may result in course access suspension",
        "Additional charges apply for course material damage or loss",
        "Placement assistance fees are separate from course fees"
      ]
    },
    {
      icon: Shield,
      title: "Student Responsibilities",
      content: [
        "Attend classes regularly and participate actively",
        "Complete assignments and projects within deadlines",
        "Maintain professional conduct during classes and interactions",
        "Respect intellectual property rights of course materials",
        "Follow safety protocols in laboratory and workshop sessions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Sharing course materials without authorization",
        "Disrupting classes or creating hostile environment",
        "Using institute resources for personal commercial purposes",
        "Providing false information or fraudulent documentation",
        "Attempting to hack or misuse institute systems"
      ]
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Institute liability is limited to the course fees paid",
        "We are not responsible for career outcomes post-training",
        "Students participate in practical sessions at their own risk",
        "Force majeure events may affect course delivery",
        "Institute reserves right to modify courses based on industry needs"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <StructuredData type="website" data={{
        name: "Terms of Service - Trinkets Institute Mumbai",
        description: "Terms of Service for Trinkets Institute of Technology Mumbai",
        url: "https://trinketsinstitute.com/terms-of-service"
      }} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-16 h-16 text-orange-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Understanding the terms and conditions for our engineering courses and services.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-orange-200">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Agreement to Terms</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  These Terms of Service ("Terms") govern your use of Trinkets Institute of Technology's 
                  services, including our engineering courses, website, and educational materials. By enrolling 
                  in our courses or using our services, you agree to be bound by these Terms.
                </p>
                <p className="mb-4">
                  Trinkets Institute of Technology is a premier engineering training institute located in 
                  Mumbai, Maharashtra, India, specializing in piping design, MEP engineering, and related 
                  technical disciplines.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Trinkets Institute of 
                  Technology. If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {termsSection.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-orange-500 p-3 rounded-lg mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                Intellectual Property Rights
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  All course materials, including but not limited to lectures, presentations, software tutorials, 
                  project templates, and documentation, are the intellectual property of Trinkets Institute of 
                  Technology or our licensed partners.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What You Can Do:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Use materials for personal learning and skill development</li>
                    <li>Reference concepts in your professional work</li>
                    <li>Apply learned techniques in your career</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">What You Cannot Do:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Distribute or share course materials with others</li>
                    <li>Use materials for commercial training purposes</li>
                    <li>Reverse engineer or copy our curriculum</li>
                    <li>Remove copyright notices or attribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Completion and Certification */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-orange-500 mr-3" />
                Course Completion and Certification
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Completion Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Attend minimum 85% of scheduled classes</li>
                    <li>Complete all assignments and projects satisfactorily</li>
                    <li>Pass final assessments with minimum 70% score</li>
                    <li>Submit all required project documentation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Certificates issued only upon successful completion</li>
                    <li>Digital certificates provided within 15 days of completion</li>
                    <li>Physical certificates available upon request</li>
                    <li>Replacement certificates subject to administrative fees</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Placement Assistance</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Provided to successfully certified students</li>
                    <li>Includes resume building and interview preparation</li>
                    <li>No guarantee of job placement or specific salary</li>
                    <li>Student cooperation required throughout the process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Gavel className="w-8 h-8 text-blue-500 mr-3" />
                Dispute Resolution and Governing Law
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Any disputes arising from these Terms or your use of our services will be resolved 
                  through the following process:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Resolution Process:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Initial discussion with course coordinator or administration</li>
                    <li>Formal complaint submission in writing</li>
                    <li>Internal review and resolution attempt within 15 days</li>
                    <li>Mediation through educational authority if required</li>
                    <li>Legal proceedings as last resort under Indian jurisdiction</li>
                  </ol>
                </div>
                <p className="mb-4">
                  These Terms are governed by the laws of India, and any legal proceedings will be 
                  subject to the jurisdiction of Mumbai courts.
                </p>
                <p>
                  We encourage open communication and will make every effort to resolve any issues 
                  amicably and in the best interest of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Questions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About These Terms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our administration team for clarification on any terms or policies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 98209 24788</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">legal@trinketsinstitute.com</p>
              </div>
            </div>
            <p className="text-blue-100">
              823, Ecstasy Business Park, City of Joy, JSD Road, Mulund West, Mumbai - 400080
            </p>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Terms Updates</h3>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. Students will be notified of 
                significant changes via email or through our website announcements.
              </p>
              <p className="text-sm text-gray-500">
                Continued use of our services after changes indicates acceptance of the updated Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfService