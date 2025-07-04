import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AllBlogs from "./pages/AllBlogs";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-blue-900 to-slate-950 min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Blogs />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
