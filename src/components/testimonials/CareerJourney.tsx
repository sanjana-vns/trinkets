'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, TrendingUp, Award, ChevronRight, Building2, GraduationCap, Briefcase, Code, Database, Cloud } from 'lucide-react';

export default function CareerJourney() {
  const journeys = [
    {
      id: 1,
      name: "Priya Sharma",
      photo: "/api/placeholder/80/80",
      course: "Full Stack Development",
      courseIcon: Code,
      timeline: [
        {
          date: "Jan 2023",
          title: "Started Learning",
          description: "B.Tech Fresher, No coding experience",
          type: "start",
          icon: GraduationCap,
          salary: "₹0",
          location: "College Graduate"
        },
        {
          date: "Mar 2023",
          title: "First Project",
          description: "Built personal portfolio website",
          type: "milestone",
          icon: Award,
          salary: "₹0",
          location: "Learning Phase"
        },
        {
          date: "Jun 2023",
          title: "Internship",
          description: "Software Development Intern at StartupXYZ",
          type: "internship",
          icon: Briefcase,
          salary: "₹15,000",
          location: "Bangalore"
        },
        {
          date: "Sep 2023",
          title: "Full-time Role",
          description: "Software Engineer at TechCorp",
          type: "job",
          icon: Building2,
          salary: "₹6.5 LPA",
          location: "Hyderabad"
        },
        {
          date: "Mar 2024",
          title: "Promotion",
          description: "Senior Software Engineer",
          type: "promotion",
          icon: TrendingUp,
          salary: "₹9.2 LPA",
          location: "Hyderabad"
        }
      ]
    },
    {
      id: 2,
      name: "Rohit Kumar",
      photo: "/api/placeholder/80/80",
      course: "Data Science & AI",
      courseIcon: Database,
      timeline: [
        {
          date: "Aug 2022",
          title: "Career Switch",
          description: "From Mechanical Engineer to Tech",
          type: "start",
          icon: GraduationCap,
          salary: "₹3.5 LPA",
          location: "Manufacturing Industry"
        },
        {
          date: "Nov 2022",
          title: "First ML Project",
          description: "Predictive Analytics Dashboard",
          type: "milestone",
          icon: Award,
          salary: "₹3.5 LPA",
          location: "Learning Phase"
        },
        {
          date: "Feb 2023",
          title: "Data Analyst",
          description: "Junior Data Analyst at FinTech Startup",
          type: "job",
          icon: Briefcase,
          salary: "₹5.8 LPA",
          location: "Mumbai"
        },
        {
          date: "Aug 2023",
          title: "Data Scientist",
          description: "ML Engineer at E-commerce Giant",
          type: "promotion",
          icon: Building2,
          salary: "₹11.5 LPA",
          location: "Bangalore"
        },
        {
          date: "Feb 2024",
          title: "Senior Role",
          description: "Senior Data Scientist & Team Lead",
          type: "promotion",
          icon: TrendingUp,
          salary: "₹16.8 LPA",
          location: "Bangalore"
        }
      ]
    },
    {
      id: 3,
      name: "Ananya Patel",
      photo: "/api/placeholder/80/80",
      course: "DevOps & Cloud",
      courseIcon: Cloud,
      timeline: [
        {
          date: "May 2023",
          title: "Fresh Graduate",
          description: "Computer Science Graduate",
          type: "start",
          icon: GraduationCap,
          salary: "₹0",
          location: "College Graduate"
        },
        {
          date: "Jul 2023",
          title: "Cloud Certification",
          description: "AWS Solutions Architect Certified",
          type: "milestone",
          icon: Award,
          salary: "₹0",
          location: "Learning Phase"
        },
        {
          date: "Sep 2023",
          title: "DevOps Engineer",
          description: "Junior DevOps at Cloud Solutions Inc",
          type: "job",
          icon: Briefcase,
          salary: "₹7.2 LPA",
          location: "Pune"
        },
        {
          date: "Jan 2024",
          title: "Team Lead",
          description: "DevOps Team Lead - Infrastructure",
          type: "promotion",
          icon: Building2,
          salary: "₹12.5 LPA",
          location: "Pune"
        }
      ]
    }
  ];

  const getTimelineItemColor = (type: string) => {
    switch (type) {
      case 'start': return 'bg-gray-500';
      case 'milestone': return 'bg-yellow-500';
      case 'internship': return 'bg-blue-500';
      case 'job': return 'bg-green-500';
      case 'promotion': return 'bg-purple-500';
      default: return 'bg-blue-500';
    }
  };

  const getSalaryGrowth = (timeline: any[]) => {
    const start = parseFloat(timeline[0].salary.replace(/[₹,LPA]/g, '')) || 0;
    const end = parseFloat(timeline[timeline.length - 1].salary.replace(/[₹,LPA]/g, ''));
    if (start === 0) return `${end}x growth`;
    return `${Math.round((end / start) * 10) / 10}x growth`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Career Transformation Journeys
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the inspiring career paths of our students from their first day of learning to achieving their dream roles
          </p>
        </motion.div>

        {/* Journey Cards */}
        <div className="space-y-16">
          {journeys.map((journey, journeyIndex) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: journeyIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Student Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-center gap-6 mb-4 lg:mb-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-4 border-blue-200 shadow-lg">
                      <journey.courseIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {journey.course.split(' ')[0]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{journey.name}</h3>
                    <p className="text-blue-600 font-semibold">{journey.course}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-700">{getSalaryGrowth(journey.timeline)}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-400 rounded-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {journey.timeline.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-16 h-16 rounded-full ${getTimelineItemColor(item.type)} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                                {item.date}
                              </span>
                              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                            </div>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{item.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="lg:text-right mt-4 lg:mt-0">
                            <div className="text-2xl font-bold text-green-600">{item.salary}</div>
                            {item.salary !== "₹0" && (
                              <div className="text-sm text-gray-500">Package</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Journey Summary */}
              <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {Math.ceil((new Date(journey.timeline[journey.timeline.length - 1].date).getTime() - 
                      new Date(journey.timeline[0].date).getTime()) / (1000 * 60 * 60 * 24 * 30))}
                    </div>
                    <div className="text-blue-200">Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{journey.timeline.length - 1}</div>
                    <div className="text-blue-200">Milestones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {journey.timeline[journey.timeline.length - 1].salary.replace('₹', '').replace(' LPA', '')}
                    </div>
                    <div className="text-blue-200">Current LPA</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Start Your Transformation Today</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully transformed their careers with our expert guidance
            </p>
            <Link href="/courses">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 flex items-center gap-3 mx-auto">
                Begin Your Journey
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}