import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaTwitter, FaLinkedin, FaDownload, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';

const About = () => (
  <section
    id="about"
    className="w-full flex items-center justify-center px-8 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
  >
    <div className="max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">Get to Know Me</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Passionate developer creating innovative solutions with modern technologies
        </p>
        <div className="flex items-center justify-center mt-8">
          <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full mx-4"></div>
          <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Coding Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding Animation"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Right: About Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Hi! I'm <span className="text-indigo-600">Prerana Khanal</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A passionate <strong>React Developer</strong> and <strong>Cybersecurity enthusiast </strong>
              with a love for creating beautiful, secure web experiences. I thrive on turning complex 
              problems into simple, elegant solutions and am always eager to learn cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong foundation in modern web development and digital security, I focus on 
              building impactful applications that not only look great but also prioritize user 
              experience and data protection.
            </p>
          </div>

          {/* Key Skills/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <FaCode className="text-2xl text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Frontend Expert</h4>
              <p className="text-sm text-gray-600">React, JavaScript, TypeScript</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <FaShieldAlt className="text-2xl text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Security Focused</h4>
              <p className="text-sm text-gray-600">Cybersecurity & Best Practices</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <FaRocket className="text-2xl text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Innovation Driven</h4>
              <p className="text-sm text-gray-600">Always Learning & Growing</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <FaDownload />
              Download CV
            </a>
            <a href="#contact" className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
