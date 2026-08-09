import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.04] bg-[#0F1117] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] p-[1px]">
            <div className="w-full h-full bg-[#171A21] rounded-[3px] flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">M</span>
            </div>
          </div>
          <span className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} Mohammed Sharib Mastan. All rights reserved.
          </span>
        </div>

        {/* Center: Author */}
        <div className="text-center">
          <span className="text-xs text-white/50 font-light tracking-wide">
            Designed & Built by <span className="text-white font-medium hover:text-[var(--color-accent-primary)] transition-colors duration-300">Mohammed Sharib Mastan</span>
          </span>
        </div>

        {/* Right: Scroll to top & stack */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-white/40 tracking-wider hidden sm:inline uppercase">
            V4.0 // Core OS
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)] hover:bg-[rgba(var(--color-accent-primary-rgb),0.05)] text-[#9CA3AF] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
