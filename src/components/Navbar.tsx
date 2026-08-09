import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenTesting: () => void;
}

export const Navbar = ({ onOpenTesting }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#0F1117]/80 backdrop-blur-md border-b border-white/[0.05]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] p-[1px] transition-transform duration-300 group-hover:rotate-12">
            <div className="w-full h-full bg-[#171A21] rounded-[7px] flex items-center justify-center">
              <span className="text-white text-xs font-semibold tracking-wider">M</span>
            </div>
          </div>
          <span className="text-white font-medium tracking-tight text-lg group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">
            Sharib <span className="text-outline-logo font-light">Mastan</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#9CA3AF] hover:text-white text-sm font-medium transition-colors duration-300 relative py-1"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={onOpenTesting}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/[0.08] hover:border-[var(--color-accent-primary)]/30 hover:bg-[rgba(var(--color-accent-primary-rgb),0.1)] text-[#9CA3AF] hover:text-white text-xs font-medium transition-all duration-300 cursor-pointer"
          >
            Testing
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/[0.08] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)] hover:bg-[rgba(var(--color-accent-primary-rgb),0.1)] hover:text-white text-white text-xs font-medium transition-all duration-300"
          >
            Work With Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#9CA3AF] hover:text-white transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0F1117]/95 border-b border-white/[0.08] backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#9CA3AF] hover:text-white text-base font-medium py-2 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTesting();
                }}
                className="flex items-center justify-center gap-1.5 w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/[0.08] text-[#9CA3AF] hover:text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                Testing
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-black text-sm font-semibold transition-all duration-300 hover:brightness-110"
              >
                Work With Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
