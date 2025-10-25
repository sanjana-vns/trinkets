import { Metadata } from 'next'
import React from 'react'
import { Shield, Lock, Eye, UserCheck, FileText, Globe, Phone, Mail } from 'lucide-react'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Privacy Policy | Trinkets Institute of Technology | Mumbai Engineering Training',
  description: 'Privacy Policy for Trinkets Institute Mumbai. Learn how we protect your personal information, data collection practices, and your rights regarding privacy for our engineering courses.',
  keywords: [
    'privacy policy',
    'trinkets institute privacy',
    'data protection mumbai',
    'student privacy rights',
    'engineering course privacy',
    'mumbai institute privacy policy',
    'personal data protection',
    'student information security',
    'privacy rights india',
    'data collection policy',
    'engineering training privacy',
    'mumbai education privacy'
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
    title: 'Privacy Policy | Trinkets Institute Mumbai',
    description: 'Privacy Policy for Trinkets Institute Mumbai. Learn how we protect your personal information and data collection practices.',
    url: 'https://trinketsinstitute.com/privacy-policy',
    siteName: 'Trinkets Institute of Technology',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/trinketlogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinkets Institute Privacy Policy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Trinkets Institute Mumbai',
    description: 'Privacy Policy for Trinkets Institute Mumbai. Learn how we protect your personal information.',
    images: ['https://trinketsinstitute.com/images/trinketlogo.jpg'],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/privacy-policy',
  },
}

const PrivacyPolicy = () => {
  const lastUpdated = "October 25, 2024"

  const privacyPolicySections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, address, educational background",
        "Course Information: Course preferences, enrollment details, academic progress",
        "Technical Information: Browser type, device information, IP address, cookies",
        "Communication Records: Emails, phone calls, chat conversations, feedback"
      ]
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our engineering training services",
        "Process course enrollments and manage student accounts",
        "Communicate about courses, schedules, and important updates",
        "Provide placement assistance and career guidance",
        "Improve our website and educational content",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        "We use industry-standard security measures to protect your data",
        "SSL encryption for all data transmission",
        "Regular security audits and updates",
        "Limited access to personal information on a need-to-know basis",
        "Secure storage of physical and digital records"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We do not sell or rent your personal information to third parties",
        "Information may be shared with potential employers for placement purposes (with your consent)",
        "Service providers who assist in operating our institute (under strict confidentiality)",
        "Legal authorities when required by law or to protect our rights"
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate information",
        "Request deletion of your personal data (subject to legal requirements)",
        "Opt-out of marketing communications",
        "File complaints with relevant data protection authorities"
      ]
    },
    {
      icon: Globe,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to improve website functionality and user experience",
        "Analytics cookies help us understand website usage patterns",
        "You can control cookie settings through your browser",
        "Some features may not work properly if cookies are disabled"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <StructuredData type="website" data={{
        name: "Privacy Policy - Trinkets Institute Mumbai",
        description: "Privacy Policy for Trinkets Institute of Technology Mumbai",
        url: "https://trinketsinstitute.com/privacy-policy"
      }} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-orange-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we protect and handle your personal information.
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Trinkets Institute of Technology ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website, enroll in our courses, or interact with our services.
                </p>
                <p className="mb-4">
                  This policy applies to our engineering training institute located in Mumbai, Maharashtra, India, 
                  and covers all our educational services, website interactions, and communication channels.
                </p>
                <p>
                  By using our services or providing your information to us, you agree to the collection and use 
                  of information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {privacyPolicySections.map((section, index) => (
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

      {/* Data Retention */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                Data Retention
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Student records: Maintained for minimum 7 years after course completion</li>
                  <li>Financial records: Retained as per Indian taxation and compliance requirements</li>
                  <li>Marketing communications: Until you opt-out or request deletion</li>
                  <li>Website analytics: Typically 26 months, anonymized after 14 months</li>
                </ul>
                <p>
                  When information is no longer needed, we securely delete or anonymize it in accordance 
                  with our data retention schedule and applicable legal requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Globe className="w-8 h-8 text-orange-500 mr-3" />
                Third-Party Services
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Our website and services may integrate with third-party services that have their own privacy policies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Google Services</h4>
                    <p className="text-sm text-gray-600">
                      Google Analytics, Google Maps, Google Fonts for website functionality and analytics.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Communication Tools</h4>
                    <p className="text-sm text-gray-600">
                      Email services, WhatsApp Business, and communication platforms for student support.
                    </p>
                  </div>
                </div>
                <p>
                  We recommend reviewing the privacy policies of these third-party services to understand 
                  how they handle your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Privacy Questions?</h2>
              <p className="text-center text-blue-100 mb-8 text-lg">
                Contact us if you have any questions about this Privacy Policy or our data practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-orange-300 mr-3" />
                    <h3 className="text-xl font-semibold">Call Us</h3>
                  </div>
                  <p className="text-blue-100">+91 98209 24788</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-orange-300 mr-3" />
                    <h3 className="text-xl font-semibold">Email Us</h3>
                  </div>
                  <p className="text-blue-100">info@trinketsinstitute.com</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-blue-100">
                  823, Ecstasy Business Park, City of Joy, JSD Road, Mulund West, Mumbai - 400080
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h3>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm text-gray-500">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy