import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <NavBar />
      <Hero />
      <Skills />
      <Education/>
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
