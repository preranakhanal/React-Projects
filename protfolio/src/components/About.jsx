import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaTwitter, FaLinkedin, FaDownload, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { Section, Button, Badge, Card } from './ui';

const About = () => (
  <Section
    id="about"
    background="gradient"
    badge="Get to Know Me"
    title={<>About <span className="text-indigo-600">Me</span></>}
    subtitle="Passionate developer creating innovative solutions with modern technologies"
  >
    <div className="max-w-7xl mx-auto w-full">
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
            <Card hover={true} padding="md" shadow="lg" className="border border-gray-100">
              <FaCode className="text-2xl text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Frontend Expert</h4>
              <p className="text-sm text-gray-600">React, JavaScript, TypeScript</p>
            </Card>
            <Card hover={true} padding="md" shadow="lg" className="border border-gray-100">
              <FaShieldAlt className="text-2xl text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Security Focused</h4>
              <p className="text-sm text-gray-600">Cybersecurity & Best Practices</p>
            </Card>
            <Card hover={true} padding="md" shadow="lg" className="border border-gray-100">
              <FaRocket className="text-2xl text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-800">Innovation Driven</h4>
              <p className="text-sm text-gray-600">Always Learning & Growing</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<FaDownload />}
            >
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

export default About;
