import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaFolderOpen,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Blurred blobs background */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[55vw] h-[55vw] bg-gradient-to-br from-indigo-300 to-purple-300 opacity-20 rounded-full filter blur-3xl z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-gradient-to-br from-purple-300 to-blue-300 opacity-15 rounded-full filter blur-2xl z-0"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-0 w-[25vw] h-[25vw] bg-gradient-to-br from-blue-300 to-indigo-300 opacity-15 rounded-full filter blur-2xl z-0"
        animate={{ 
          scale: [1, 1.12, 1],
          rotate: [180, 360, 180]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Responsive Navbar with PK Logo */}
      <motion.div 
        className="flex justify-center items-center w-full pt-4 sm:pt-6 md:pt-8 absolute top-0 left-0 z-20 px-2 sm:px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* PK Logo - Hidden on mobile */}
        <motion.a
          href="#home"
          onClick={() => window.location.reload()}
          className="absolute left-2 sm:left-4 md:left-16 flex items-center group hidden sm:flex"
          style={{ textDecoration: 'none' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            PK
          </div>
        </motion.a>
        {/* Nav Links */}
        <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-8 px-2">
          <a
            href="#home"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#blogs"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Blogs
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-2 sm:px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 px-4">
        <motion.div
          className="relative mb-3 sm:mb-4 md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
          <img
            src="/cat.jpg"
            alt="Profile"
            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-2xl object-cover object-center"
            style={{
              imageRendering: 'auto',
              imageResolution: 'from-image',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          
        </motion.div>
        <motion.div
          className="text-center mb-4 sm:mb-5 md:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-200 shadow-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Prerana Khanal
            </span>
          </h1>
        </motion.div>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-bold mb-3 sm:mb-4 md:mb-5 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-indigo-600 mr-2">I'm a</span>
          <Typewriter
            words={[
              'Cybersecurity Enthusiast 🛡️',
              'Ethical Hacker 👨‍💻',
              'React Developer ⚛️',
              'Final Year Student 🎓',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-4 sm:mb-5 md:mb-6 leading-relaxed text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Final year student specializing in{' '}
          <span className="font-semibold text-indigo-600">Cybersecurity</span> and{' '}
          <span className="font-semibold text-purple-600">Ethical Hacking</span>,
          passionate about learning and building{' '}
          <span className="font-semibold text-blue-600">digital defenses</span>.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-5 md:space-x-6 mb-4 sm:mb-5 md:mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/preranakhanal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-gray-700 group-hover:text-indigo-600 text-xl sm:text-2xl transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prerana-khanal-b73490263/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-gray-700 group-hover:text-blue-600 text-xl sm:text-2xl transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="mailto:prerana@gmail.com"
            className="group bg-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-gray-700 group-hover:text-red-500 text-xl sm:text-2xl transition-colors duration-300" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-0 w-full max-w-md sm:max-w-lg px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a 
            href="#contact"
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:shadow-2xl transition-all duration-300 transform hover:shadow-indigo-500/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300 relative z-10 text-sm sm:text-base" /> 
              <span className="relative z-10">Contact Me</span>
            </button>
          </motion.a>
          <motion.a 
            href="#projects"
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="w-full bg-white border-2 border-indigo-600 text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:shadow-2xl hover:border-transparent transition-all duration-300 transform group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaFolderOpen className="group-hover:scale-110 transition-transform duration-300 relative z-10 text-sm sm:text-base" /> 
              <span className="relative z-10">View Projects</span>
            </button>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
