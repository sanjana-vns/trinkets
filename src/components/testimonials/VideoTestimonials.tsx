'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Quote, Star, ChevronLeft, ChevronRight, Calendar, MapPin, Building2 } from 'lucide-react';

const VideoTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoTestimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      course: "SP3D Piping Design",
      company: "L&T Engineering",
      position: "Senior Piping Engineer",
      location: "Mumbai",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      thumbnail: "/images/gallery1.webp",
      rating: 5,
      joinDate: "Jan 2023",
      currentSalary: "₹12 LPA",
      testimonial: "The practical approach and industry exposure at Trinkets Institute completely transformed my career. From a fresh graduate to a senior engineer in just 18 months!"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "CAESAR II Stress Analysis",
      company: "Reliance Industries",
      position: "Stress Analysis Engineer",
      location: "Jamnagar",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      thumbnail: "/images/gallery2.webp",
      rating: 5,
      joinDate: "Mar 2023",
      currentSalary: "₹15 LPA",
      testimonial: "The hands-on training with real projects gave me confidence to handle complex piping systems. Now I'm leading critical projects at Reliance!"
    },
    {
      id: 3,
      name: "Amit Kumar",
      course: "MEP Engineering",
      company: "Tata Consulting Engineers",
      position: "MEP Design Lead",
      location: "Pune",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      thumbnail: "/images/gallery3.webp",
      rating: 5,
      joinDate: "Feb 2023",
      currentSalary: "₹11 LPA",
      testimonial: "The comprehensive MEP course covered everything from basics to advanced concepts. The placement support was exceptional!"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      course: "Structural Design & Analysis",
      company: "Larsen & Toubro",
      position: "Structural Engineer",
      location: "Chennai",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      thumbnail: "/images/gallery4.webp",
      rating: 5,
      joinDate: "Apr 2023",
      currentSalary: "₹10 LPA",
      testimonial: "From theory to practice, Trinkets Institute bridged the gap perfectly. The STAAD Pro and ETABS training was incredibly detailed and practical."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
    setPlayingVideo(null);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setPlayingVideo(null);
  };

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-6">
            <Play className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Video Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Hear From Our Success Stories
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real students share their transformation journeys and career achievements after training with us
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Section */}
              <div className="relative bg-gray-900">
                <div className="aspect-video relative">
                  {playingVideo === currentVideo ? (
                    <iframe
                      src={videoTestimonials[currentVideo].videoUrl}
                      title={`${videoTestimonials[currentVideo].name} Testimonial`}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        src={videoTestimonials[currentVideo].thumbnail}
                        alt={`${videoTestimonials[currentVideo].name} - Piping Course Mumbai Success Story at Trinkets Institute`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => handlePlayVideo(currentVideo)}
                          className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xl"
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Navigation */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={prevVideo}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={nextVideo}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(videoTestimonials[currentVideo].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    &quot;{videoTestimonials[currentVideo].testimonial}&quot;
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {videoTestimonials[currentVideo].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {videoTestimonials[currentVideo].name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {videoTestimonials[currentVideo].position}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Building2 className="w-4 h-4 mr-2" />
                        {videoTestimonials[currentVideo].company}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {videoTestimonials[currentVideo].location}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Joined {videoTestimonials[currentVideo].joinDate}
                      </div>
                      <div className="text-green-600 font-semibold">
                        Current: {videoTestimonials[currentVideo].currentSalary}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 rounded-xl p-4">
                    <p className="text-blue-800 font-medium text-sm">
                      Course: {videoTestimonials[currentVideo].course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentVideo 
                  ? 'ring-4 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setCurrentVideo(index)}
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={`${video.name} - Piping Engineering Course Graduate Mumbai Success Story`}
                  width={200}
                  height={112}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-gray-800 ml-0.5" />
                  </div>
                </div>
                {index === currentVideo && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{video.name}</h4>
                <p className="text-blue-600 text-xs">{video.course}</p>
                <p className="text-gray-500 text-xs">{video.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;