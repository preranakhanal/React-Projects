import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
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
        className="flex justify-center items-center w-full pt-8 absolute top-0 left-0 z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* PK Logo */}
        <motion.a
          href="#home"
          onClick={() => window.location.reload()}
          className="absolute left-4 md:left-16 flex items-center group"
          style={{ textDecoration: 'none' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            PK
          </div>
        </motion.a>
        {/* Nav Links */}
        <div className="flex space-x-2 sm:space-x-4 md:space-x-8">
          <a
            href="#home"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#blogs"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Blogs
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-semibold text-sm md:text-base hover:text-white hover:bg-indigo-600 transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-36 md:pt-32 pb-12">
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
          <img
            src="/cat.jpg"
            alt="Profile"
            className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover object-center"
            style={{
              imageRendering: 'auto',
              imageResolution: 'from-image',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          
        </motion.div>
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-200 shadow-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Prerana Khanal
            </span>
          </h1>
        </motion.div>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-xl md:text-3xl text-gray-600 font-bold mb-6 min-h-[3rem] flex items-center justify-center"
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
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed text-center"
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
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/preranakhanal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-gray-700 group-hover:text-indigo-600 text-2xl transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prerana-khanal-b73490263/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-gray-700 group-hover:text-blue-600 text-2xl transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="mailto:prerana@gmail.com"
            className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-gray-700 group-hover:text-red-500 text-2xl transition-colors duration-300" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:shadow-indigo-500/25 group">
              <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300" /> 
              Contact Me
            </button>
          </motion.a>
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-indigo-600 hover:text-white hover:shadow-xl transition-all duration-300 transform group">
              <FaFolderOpen className="group-hover:scale-110 transition-transform duration-300" /> 
              View Projects
            </button>
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
