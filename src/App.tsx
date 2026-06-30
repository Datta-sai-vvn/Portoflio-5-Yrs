import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';

import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

import Contact from './components/Contact';
import StudyHub from './components/StudyHub';
import Certification from './components/Certification';
import FloatingStudyButton from './components/FloatingStudyButton';
import useVisitorTracker from './hooks/useVisitorTracker';

// Helper to scroll to top on route change or scroll to section if hash exists
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useVisitorTracker();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300 font-sans">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />

              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Certification />
              <Contact />
            </main>
          } />
          <Route path="/study-hub" element={<StudyHub />} />
        </Routes>
        <FloatingStudyButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
