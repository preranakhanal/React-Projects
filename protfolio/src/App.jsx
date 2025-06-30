import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-slate-950 min-h-screen">
      <Hero />
      <About />
      <Blogs />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
import Contact from "./components/Contact";
export default App;
