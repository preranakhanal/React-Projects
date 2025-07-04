import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllBlogs from './pages/AllBlogs';

// Main Portfolio Page Component
const PortfolioHome = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
