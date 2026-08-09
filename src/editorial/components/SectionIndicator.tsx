import { useEffect, useState } from 'react';

export const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'projects', 'skills', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(idx);
          }
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6 items-center select-none pointer-events-none">
      {sections.map((_, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className={`text-[9px] font-mono transition-colors duration-300 ${
            activeSection === idx ? 'text-[#1A73E8] font-bold' : 'text-[#6B6B6B]/40'
          }`}>
            0{idx + 1}
          </span>
          <div className="w-[1.2px] h-6 bg-[#DDDDD8] my-1.5 relative">
            {activeSection === idx && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
