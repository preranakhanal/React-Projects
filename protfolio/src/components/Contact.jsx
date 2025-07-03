import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

// This component displays contact information and a contact form

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white hover:bg-indigo-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-all duration-300">
                  <div className="bg-amber-600 p-3 rounded-xl shadow-lg ">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:prerana@gmail.com" className="text-amber-600 hover:text-white transition-colors font-medium">
                      preranakhanal@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300">
                  <div className="bg-green-600 p-3 rounded-xl shadow-lg">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 transition-colors font-medium">
                      +1 234 567 890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300">
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600 font-medium">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="bg-blue-600 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                    <FaLinkedin className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                    <FaGithub className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                     className="bg-blue-400 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                    <FaTwitter className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:bg-indigo-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
              <p className="text-gray-600">I'll get back to you within 24 hours</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Let's work together"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300 resize-none"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or just say hello! I'm excited to hear from you..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact