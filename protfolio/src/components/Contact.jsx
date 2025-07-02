import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

// This component displays contact information and a contact form

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together!
        </p>
        
        {/* Divider Line */}
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <FaEnvelope className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:prerana@gmail.com" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                      prerana@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 transition-colors">
                      +1 234 567 890
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-50 p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <FaLinkedin className="text-blue-600 text-xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-50 p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <FaGithub className="text-gray-800 text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-50 p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <FaTwitter className="text-blue-400 text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact