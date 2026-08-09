import { motion } from 'framer-motion';

interface ExperienceSwitcherProps {
  experience: 'classic' | 'editorial';
  onToggle: () => void;
}

export const ExperienceSwitcher = ({ experience, onToggle }: ExperienceSwitcherProps) => {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      aria-label={`Switch to ${experience === 'classic' ? 'Editorial' : 'Classic'} Experience`}
      className={`fixed bottom-24 right-6 z-[99] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer select-none text-[10px] uppercase tracking-[0.18em] font-bold border transition-all duration-300 ${
        experience === 'classic'
          ? 'bg-[#171A21] border-white/[0.08] text-white hover:border-[var(--color-accent-primary)]/30 hover:shadow-[0_0_15px_rgba(var(--color-accent-primary-rgb),0.15)]'
          : 'bg-[#F8F8F5] border-[#DDDDD8] text-[#202124] hover:border-[#1A73E8]/30 hover:shadow-[0_0_15px_rgba(26,115,232,0.15)]'
      }`}
    >
      <span>
        {experience === 'classic' ? 'Classic' : 'Editorial'}
      </span>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          experience === 'classic' 
            ? 'bg-[var(--color-accent-primary)]' 
            : 'bg-[#1A73E8]'
        }`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${
          experience === 'classic' 
            ? 'bg-[var(--color-accent-primary)]' 
            : 'bg-[#1A73E8]'
        }`} />
      </span>
    </motion.button>
  );
};
