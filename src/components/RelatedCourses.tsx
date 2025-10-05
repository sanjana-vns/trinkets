'use client'

import Link from 'next/link'

interface Course {
  title: string
  href: string
  description: string
  color: 'blue' | 'indigo' | 'purple' | 'green' | 'red' | 'yellow'
}

interface RelatedCoursesProps {
  currentCourse?: string
  className?: string
}

const RelatedCourses = ({ currentCourse, className = '' }: RelatedCoursesProps) => {
  const allCourses: Course[] = [
    {
      title: 'Piping Design & Engineering',
      href: '/courses/piping-design-engineering',
      description: 'Master PDMS, AutoCAD Plant 3D, and industry standards',
      color: 'blue'
    },
    {
      title: 'HVAC System Design',
      href: '/courses/hvac-system-design',
      description: 'Comprehensive HVAC training and load calculations',
      color: 'green'
    },
    {
      title: 'Process Engineering',
      href: '/courses/process-engineering',
      description: 'Learn process design and simulation techniques',
      color: 'purple'
    },
    {
      title: 'Structural Design & Analysis',
      href: '/courses/structural-design-analysis',
      description: 'Master structural analysis and design fundamentals',
      color: 'indigo'
    },
    {
      title: 'AutoCAD Mechanical Design',
      href: '/courses/autocad-mechanical-design',
      description: 'Professional mechanical design and drafting',
      color: 'red'
    },
    {
      title: 'SolidWorks Professional',
      href: '/courses/solidworks-professional',
      description: 'Advanced 3D modeling and simulation',
      color: 'yellow'
    }
  ]

  // Filter out the current course
  const relatedCourses = allCourses.filter(course => course.href !== currentCourse)

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-100',
      red: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600 hover:bg-yellow-100'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getButtonClasses = (color: string) => {
    const buttonMap = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      red: 'bg-red-600 hover:bg-red-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700'
    }
    return buttonMap[color as keyof typeof buttonMap] || buttonMap.blue
  }

  return (
    <div className={`${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Courses</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expand your expertise with these complementary engineering courses
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedCourses.slice(0, 6).map((course, index) => (
          <Link
            key={index}
            href={course.href}
            className={`block p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${getColorClasses(course.color)}`}
          >
            <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
            <div className={`inline-block text-white px-4 py-2 rounded-lg transition-colors text-sm ${getButtonClasses(course.color)}`}>
              Learn More →
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <span>View All Courses</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RelatedCourses