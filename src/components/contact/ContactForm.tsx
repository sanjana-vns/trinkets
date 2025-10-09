'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, MapPin, GraduationCap, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    location: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });

  const courses = [
    'Piping Design & Engineering',
    'Structural Design & Analysis', 
    'HVAC Design & Engineering',
    'MEP Engineering',
    'AutoCAD & Drafting',
    'SP3D - Plant Design',
    'CAESAR II - Pipe Stress Analysis',
    'STAAD Pro - Structural Analysis',
    'ETABS - Building Design',
    'Revit MEP',
    'Other/Custom Course'
  ];

  const locations = [
    'Mumbai (Head Office)',
    'Chennai (Branch)',
    'Ludhiana (Branch)',
    'Online Training',
    'Corporate Training'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          course: '',
          location: '',
          message: ''
        });
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  const formFeatures = [
    {
      icon: CheckCircle,
      title: "Quick Response",
      description: "Get response within 2 hours"
    },
    {
      icon: User,
      title: "Expert Counselor",
      description: "Speak with career experts"
    },
    {
      icon: GraduationCap,
      title: "Course Guidance",
      description: "Find the perfect course"
    },
    {
      icon: Phone,
      title: "Free Consultation",
      description: "No charges for guidance"
    }
  ];

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your engineering career transformation? Fill out the form below and our expert counselors will get back to you with personalized guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100"
          >
            {formStatus.isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Our expert counselor will contact you within 2 hours to discuss your career goals and recommend the best course for you.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-blue-700 font-semibold">What happens next?</p>
                  <ul className="text-blue-600 text-sm mt-2 space-y-1">
                    <li>• Expert counselor will call you</li>
                    <li>• Personalized course recommendation</li>
                    <li>• Free career guidance session</li>
                    <li>• Course enrollment assistance</li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Expert Guidance</h3>
                  <p className="text-gray-600">Fill in your details for personalized career counseling</p>
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-ellipsis overflow-hidden"
                    placeholder="Enter your email address"
                    style={{ minWidth: '0' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <div className="flex">
                    <select className="px-3 py-3 border border-gray-300 rounded-l-xl bg-gray-50 text-sm">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Course Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Course of Interest
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Preferred Training Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select preferred location</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your career goals and any specific questions you have..."
                  />
                </div>

                {/* Error Message */}
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-700">{formStatus.error}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message & Get Expert Guidance
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communication from Trinkets Institute about courses and career opportunities.
                </p>
              </form>
            )}
          </motion.div>

          {/* Form Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Guidance?</h3>
              <p className="text-blue-100 mb-6">
                Our expert counselors have helped thousands of engineering professionals transform their careers with the right training and guidance.
              </p>
              <div className="space-y-4">
                {formFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{feature.title}</h4>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">2 Hours</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-gray-600">Career Transformations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">96%</div>
                <div className="text-gray-600">Placement Success Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Prefer to Call?</h4>
              <p className="text-gray-600 mb-4">
                Speak directly with our counselors for immediate assistance.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+919820924788"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  +91 9820 924 788
                </a>
                <a
                  href="mailto:info@trinketsinstitute.com"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  info@trinketsinstitute.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}