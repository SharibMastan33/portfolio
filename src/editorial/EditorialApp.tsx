import { useEffect } from 'react';
import { EditorialNavbar } from './components/EditorialNavbar';
import { Cursor } from './components/Cursor';
import { SectionIndicator } from './components/SectionIndicator';
import { EditorialHero } from './sections/EditorialHero';
import { EditorialWork } from './sections/EditorialWork';
import { ScrollVelocityHeader } from './components/ScrollVelocityHeader';
import { EditorialSkills } from './sections/EditorialSkills';
import { EditorialAbout } from './sections/EditorialAbout';
import { EditorialContact } from './sections/EditorialContact';

interface EditorialAppProps {
  currentPath: string;
  navigate: (to: string) => void;
}

export const EditorialApp = ({ currentPath, navigate }: EditorialAppProps) => {
  // Sync the current viewport scroll positions depending on the path/hash routing state on boot
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        // Delay to allow DOM layout calculations
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#202124] antialiased selection:bg-[#202124] selection:text-[#F8F8F5] font-sans relative overflow-x-hidden">
      {/* Morphing cursor on desktop */}
      <Cursor />
      
      {/* Fixed section tracker indicator */}
      <SectionIndicator />
      
      {/* Top Navbar */}
      <EditorialNavbar navigate={navigate} />
      
      {/* Section Wrappers */}
      <div id="hero">
        <EditorialHero />
      </div>
      
      <div id="projects">
        <EditorialWork />
      </div>
      
      <ScrollVelocityHeader />
      
      <div id="skills">
        <EditorialSkills />
      </div>
      
      <div id="about">
        <EditorialAbout />
      </div>
      
      <div id="contact">
        <EditorialContact />
      </div>
    </div>
  );
};
