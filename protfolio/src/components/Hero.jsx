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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white"
    >
      {/* Blurred blobs background */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[55vw] h-[55vw] bg-gray-300 opacity-30 rounded-full filter blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-gray-400 opacity-20 rounded-full filter blur-2xl z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-0 w-[25vw] h-[25vw] bg-gray-500 opacity-20 rounded-full filter blur-2xl z-0"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Responsive Navbar with PK Logo */}
      <div className="flex justify-center items-center w-full pt-8 absolute top-0 left-0 z-20">
        {/* PK Logo */}
        <a
          href="#home"
          onClick={() => window.location.reload()}
          className="absolute left-4 md:left-16 flex items-center"
          style={{ textDecoration: 'none' }}
        >
          
        </a>
        {/* Nav Links */}
        <div className="flex space-x-4 sm:space-x-8 md:space-x-14">
          <a
            href="#home"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            About
          </a>
          <a
            href="#blogs"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            Projects
          </a>
          <a
            href="#projects"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            Skills
          </a>
          <a
            href="#skills"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-800 font-semibold hover:text-gray-600 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-36 md:pt-32 pb-12">
        <motion.img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-500 mb-4 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I am <span className="text-gray-600">Prerana Khanal</span>
        </motion.h1>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-xl md:text-2xl text-gray-600 font-semibold mb-4 min-h-[2.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter
            words={[
              'Cybersecurity Enthusiast',
              'Ethical Hacker',
              'React Developer',
              'Final Year Student',
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
          className="text-lg text-gray-500 max-w-xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Final year student specializing in Cybersecurity and Ethical Hacking,
          passionate about learning and building digital defenses.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:prerana@gmail.com"
            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="space-x-4 mb-8 flex flex-row justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#contact">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-gray-700 transition">
              <FaPaperPlane /> Contact Me
            </button>
          </a>
          <a href="#projects">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-gray-700 transition">
              <FaFolderOpen /> View Projects
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
