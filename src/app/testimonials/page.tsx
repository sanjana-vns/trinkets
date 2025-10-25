import { Metadata } from 'next'
import Link from 'next/link'
import { Quote, Star, Users, TrendingUp, Award, Heart, CheckCircle, Target, Play, ArrowRight, ThumbsUp, MessageSquare, Calendar, User, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Testimonials & Success Stories - Engineering Career Transformations | Trinkets Institute',
  description: 'Read inspiring testimonials from engineering students who transformed their careers with Trinkets Institute. Discover real success stories, placement achievements, and career growth journeys from mechanical, electrical, civil, and petrochemical engineers.',
  keywords: [
    'engineering student testimonials',
    'engineering career success stories',
    'student placement testimonials',
    'engineering job success',
    'career transformation stories',
    'engineering training reviews',
    'student feedback engineering institute',
    'engineering course testimonials',
    'professional development success',
    'engineering placement success',
    'mechanical engineer testimonials',
    'electrical engineer success stories',
    'civil engineer career stories',
    'petrochemical engineer testimonials',
    'piping engineer success stories',
    'structural engineer testimonials',
    'HVAC engineer career growth',
    'MEP engineer success stories',
    'CAD designer testimonials',
    'engineering software training reviews',
    'SP3D training testimonials',
    'CAESAR II course reviews',
    'STAAD Pro success stories',
    'ETABS training testimonials',
    'Revit MEP course reviews',
    'AutoCAD training success',
    'engineering institute reviews',
    'technical training testimonials',
    'professional certification success',
    'industry placement stories',
    'salary increment testimonials',
    'career advancement stories',
    'engineering consultancy success',
    'real-world project experience',
    'hands-on training testimonials',
    'industry-ready engineer stories',
    'engineering skill development',
    'professional growth testimonials',
    'engineering education excellence',
    'student satisfaction reviews',
    'engineering training effectiveness',
    'career guidance testimonials',
    'placement assistance reviews',
    'engineering mentor testimonials',
    'industry expert training reviews',
    'practical training testimonials',
    'engineering career coaching',
    'professional networking success',
    'engineering leadership development',
    'technical expertise testimonials'
  ],
  authors: [{ name: 'Trinkets Institute' }],
  creator: 'Trinkets Institute',
  publisher: 'Trinkets Institute',
  openGraph: {
    title: 'Student Testimonials & Success Stories - Engineering Career Transformations | Trinkets Institute',
    description: 'Read inspiring testimonials from engineering students who transformed their careers with Trinkets Institute. Real success stories, placement achievements, and career growth journeys.',
    url: 'https://trinketsinstitute.com/testimonials',
    siteName: 'Trinkets Institute',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Testimonials & Success Stories - Engineering Career Transformations',
    description: 'Read inspiring testimonials from engineering students who transformed their careers with professional training.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/testimonials',
  },
}

// Lightweight Hero Section - Instant Loading
const TestimonialsHero = () => (
  <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-purple-400 rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-indigo-400 rounded-full"></div>
    </div>

    <div className="relative container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <Heart className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-100 text-sm font-medium">Real Success Stories</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Career</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformations
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Discover inspiring stories of engineering professionals who transformed their careers 
            with our industry-focused training programs. Real people, real results, real success.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.youtube.com/@trinketsinstituteoftechnol6645"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
            >
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-blue-100 hover:bg-blue-500/10 transition-all duration-300"
            >
              <span className="flex items-center">
                <Quote className="w-5 h-5 mr-2" />
                Start Your Journey
              </span>
            </Link>
          </div>
        </div>

        {/* Right Content - Featured Success Story */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Rajesh Kumar</h3>
                <p className="text-blue-300 text-sm font-medium mb-1">Senior Mechanical Engineer</p>
                <p className="text-gray-400 text-sm">Reliance Industries</p>
              </div>
              <div className="text-right">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-400 text-sm font-bold">+180% Salary</p>
              </div>
            </div>

            {/* Transformation Timeline */}
            <div className="grid grid-cols-3 gap-4 my-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-red-300 text-sm font-medium">Before</p>
                <p className="text-white text-xs">Fresh Graduate</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-blue-300 text-sm font-medium">Training</p>
                <p className="text-white text-xs">Mechanical Design</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-green-300 text-sm font-medium">After</p>
                <p className="text-white text-xs">Senior Engineer</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <Quote className="w-6 h-6 text-blue-400 mb-2" />
              <p className="text-gray-200 text-sm leading-relaxed italic">
                &ldquo;Trinkets Institute transformed my career completely. From a confused graduate to a confident senior engineer at Reliance Industries.&rdquo;
              </p>
            </div>

            {/* Achievement */}
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-3 border border-blue-400/20">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-300 text-sm font-medium">
                Led 5 major projects worth ₹50+ crores
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">5,000+</div>
          <div className="text-blue-300 font-semibold mb-1">Success Stories</div>
          <div className="text-gray-400 text-sm">Career transformations</div>
        </div>

        <div className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
          <div className="text-blue-300 font-semibold mb-1">Student Rating</div>
          <div className="text-gray-400 text-sm">Consistent excellence</div>
        </div>

        <div className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">165%</div>
          <div className="text-blue-300 font-semibold mb-1">Avg Salary Increase</div>
          <div className="text-gray-400 text-sm">Post-training growth</div>
        </div>

        <div className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">98%</div>
          <div className="text-blue-300 font-semibold mb-1">Placement Rate</div>
          <div className="text-gray-400 text-sm">Industry placement success</div>
        </div>
      </div>
    </div>
  </section>
)

// Featured Testimonials Section
const FeaturedTestimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from our graduates who have transformed their engineering careers</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Priya Sharma</h3>
              <p className="text-blue-600 text-sm">Lead Piping Engineer</p>
              <p className="text-gray-500 text-xs">ONGC</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <Quote className="w-8 h-8 text-blue-400 mb-4" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;The hands-on training and industry exposure at Trinkets Institute gave me the confidence to excel in the oil & gas sector.&rdquo;
          </p>
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              220% Salary Increase
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              Designed pipeline systems across 3 states
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Amit Singh</h3>
              <p className="text-blue-600 text-sm">Structural Design Engineer</p>
              <p className="text-gray-500 text-xs">L&T Construction</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <Quote className="w-8 h-8 text-blue-400 mb-4" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;Switching careers at 28 seemed impossible until I found Trinkets Institute. Now I&rsquo;m designing skyscrapers!&rdquo;
          </p>
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              150% Salary Increase
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              Designed 10+ high-rise buildings
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Sneha Patel</h3>
              <p className="text-blue-600 text-sm">HVAC Design Engineer</p>
              <p className="text-gray-500 text-xs">Godrej & Boyce</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <Quote className="w-8 h-8 text-blue-400 mb-4" />
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;After 2 years of unemployment, Trinkets Institute gave me not just a job, but a thriving career in HVAC design.&rdquo;
          </p>
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              200% Salary Increase
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              Designed HVAC for 50+ commercial projects
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Reviews Grid Section
const ReviewsGrid = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Students Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real reviews from engineering professionals who transformed their careers</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: 'Arjun Mehta',
            role: 'Mechanical Engineer',
            company: 'Bajaj Auto',
            course: 'Advanced Mechanical Design',
            rating: 5,
            review: 'Exceptional training program! The hands-on approach and real industry projects prepared me perfectly for my role at Bajaj Auto.',
            achievements: ['Placed at Bajaj Auto', '50% Salary Increase', 'Team Lead Role']
          },
          {
            name: 'Rohit Patel',
            role: 'Electrical Engineer',
            company: 'Siemens',
            course: 'Power System Design',
            rating: 5,
            review: 'Outstanding curriculum covering all aspects of power system design. The ETAP and MATLAB training was excellent.',
            achievements: ['Siemens Placement', 'ETAP Expert', 'Power Systems Lead']
          },
          {
            name: 'Deepika Nair',
            role: 'Structural Engineer',
            company: 'DLF',
            course: 'Structural Engineering & Design',
            rating: 5,
            review: 'The structural design course exceeded my expectations. STAAD Pro and ETABS training was thorough with real project scenarios.',
            achievements: ['DLF Placement', 'STAAD Pro Expert', 'Lead Engineer']
          },
          {
            name: 'Vikram Shah',
            role: 'Process Engineer',
            company: 'Indian Oil',
            course: 'Process Engineering',
            rating: 5,
            review: 'Comprehensive process engineering course with focus on petroleum refining. The industry connections helped me get placed at IOCL.',
            achievements: ['IOCL Placement', 'Process Expert', '60% Salary Hike']
          },
          {
            name: 'Kavya Reddy',
            role: 'Design Engineer',
            company: 'Mahindra',
            course: 'CAD Design',
            rating: 5,
            review: 'The CAD training was industry-focused with latest software versions. Placement assistance was exceptional.',
            achievements: ['Mahindra Placement', 'CAD Expert', 'Design Team Lead']
          },
          {
            name: 'Ravi Kumar',
            role: 'Project Manager',
            company: 'Tata Steel',
            course: 'Project Management',
            rating: 5,
            review: 'Excellent project management course with real case studies. The leadership training component was particularly valuable.',
            achievements: ['Tata Steel Placement', 'PMP Certified', 'Project Manager']
          }
        ].map((review, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <p className="text-blue-600 text-sm">{review.role}</p>
                <p className="text-gray-500 text-xs">{review.company}</p>
              </div>
            </div>

            <div className="flex items-center mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-500 text-sm ml-2">{review.course}</span>
            </div>

            <p className="text-gray-700 text-sm mb-4 italic">
              &ldquo;{review.review}&rdquo;
            </p>

            <div className="space-y-1">
              {review.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/contact" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Start Your Success Story
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
)

// Call to Action Section
const TestimonialsCTA = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Join thousands of engineering professionals who have transformed their careers with our industry-focused training programs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
        >
          Start Your Journey
        </Link>
        <Link 
          href="/courses" 
          className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  </section>
)

export default function TestimonialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trinkets Institute",
    "url": "https://trinketsinstitute.com",
    "description": "Leading engineering education institute with outstanding student testimonials and career transformation success stories.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "EducationalOrganization",
        "name": "Trinkets Institute"
      },
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "EducationalOrganization",
          "name": "Trinkets Institute"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewBody": "Trinkets Institute transformed my engineering career. The hands-on training and industry exposure helped me secure a position at a leading MNC with 150% salary increment.",
        "datePublished": "2024-01-15"
      }
    ]
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <TestimonialsHero />
      <FeaturedTestimonials />
      <ReviewsGrid />
      <TestimonialsCTA />
    </main>
  )
}