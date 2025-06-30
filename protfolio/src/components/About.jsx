import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section
    id="about"
    className="w-full h-screen flex items-center justify-center px-8 bg-white"
  >
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left: Animated Profile Picture */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0 w-full md:w-1/2"
      >
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </motion.div>
      {/* Right: Animated About Me Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ABOUT <span className="text-gray-600">ME</span>
        </h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Prerana Khanal - React Developer
        </h3>
        <p className="text-lg text-gray-500 mb-6">
          Hi! I'm Prerana Khanal, a passionate React Developer and Cybersecurity enthusiast. I enjoy building beautiful, secure web experiences and am always eager to learn new technologies. With a strong focus on modern web development and digital security, I aim to create impactful solutions.
        </p>
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-6 text-2xl text-gray-800"
        >
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance hover:text-gray-600 transition"></i>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-dribbble hover:text-gray-600 transition"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter hover:text-gray-600 transition"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-gray-600 transition"></i>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
