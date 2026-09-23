import GoogleAnalytics from './components/GoogleAnalytics';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="noise relative min-h-screen">
    <GoogleAnalytics />
    <Cursor />
    <Navbar />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
