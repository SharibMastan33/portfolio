import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioIntro } from './components/PortfolioIntro';
import { Navbar } from './components/Navbar';
import { DotGrid } from './components/DotGrid';
import { AmbientLight } from './components/AmbientLight';
import { Chatbot } from './components/Chatbot';
import { SwarmRebuild } from './components/SwarmRebuild';
import { ColorWheel } from './components/ColorWheel';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Vision } from './sections/Vision';
import { Reviews } from './sections/Reviews';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// Editorial Imports
import { EditorialApp } from './editorial/EditorialApp';
import { ExperienceSwitcher } from './components/ExperienceSwitcher';
import { useLocation } from './components/useLocation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isColorWheelOpen, setIsColorWheelOpen] = useState(false);
  const [experience, setExperience] = useState<'classic' | 'editorial'>(
    (localStorage.getItem('portfolio-experience') as any) || 'classic'
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { pathname, navigate } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-experience', experience);
  }, [experience]);

  const toggleExperience = () => {
    setIsTransitioning(true);
    
    // Switch state halfway through transition
    setTimeout(() => {
      const next = experience === 'classic' ? 'editorial' : 'classic';
      setExperience(next);
      localStorage.setItem('portfolio-experience', next);

      // Extract section identifier from path or hash
      let sectionId = '';
      if (window.location.pathname !== '/') {
        sectionId = window.location.pathname.substring(1);
      } else if (window.location.hash) {
        sectionId = window.location.hash.substring(1);
      }

      if (sectionId) {
        if (next === 'editorial') {
          navigate(`/#${sectionId}`);
        } else {
          window.history.pushState(null, '', `/#${sectionId}`);
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'auto' });
          }, 150);
        }
      } else {
        if (next === 'editorial') {
          navigate('/');
        } else {
          window.history.pushState(null, '', '/');
          window.scrollTo(0, 0);
        }
      }
    }, 450);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  return (
    <>
      {/* Intro Animation Screen */}
      <AnimatePresence>
        {showIntro && (
          <PortfolioIntro key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Experience Layout Swapping */}
      {!showIntro && (
        <div className="relative w-full">
          {experience === 'classic' ? (
            <div className="relative min-h-screen bg-[#0F1117] text-white overflow-x-hidden selection:bg-[rgba(var(--color-accent-primary-rgb),0.2)] selection:text-white">
              {/* Background Dot Canvas */}
              <DotGrid />
              
              {/* Top Right Warm Light Source */}
              <AmbientLight />

              {/* Floating Header */}
              <Navbar onOpenTesting={() => setIsColorWheelOpen(true)} />

              {/* Sections Wrapper */}
              <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Services />
                <Vision />
                <Reviews />
                <Contact />
              </main>

              {/* Footer */}
              <Footer />

              {/* Interactive Theme Color Selector Wheel Panel */}
              <ColorWheel isOpen={isColorWheelOpen} onClose={() => setIsColorWheelOpen(false)} />
            </div>
          ) : (
            <EditorialApp currentPath={pathname} navigate={navigate} />
          )}

          {/* Experience Selector Floating Pill */}
          <ExperienceSwitcher experience={experience} onToggle={toggleExperience} />

          {/* Interactive Chatbot */}
          <Chatbot />

          {/* Swarm Rebuild intro + replay control */}
          <SwarmRebuild />
        </div>
      )}

      {/* Grid line sweep transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[1000] bg-[#171A21]/75 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#1A73E8] origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
