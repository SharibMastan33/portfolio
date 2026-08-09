import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Download } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Soft Ambient Tagline */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-[var(--color-accent-primary)] font-medium tracking-wide mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Innovating at the Intersection of Code & AI</span>
        </motion.div>

        {/* Large Name Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 select-none leading-tight md:leading-none text-center px-4"
          >
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Mohammed Sharib </span>
            <span className="text-outline-hero">Mastan</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2 
            variants={itemVariants}
            className="text-xs xs:text-sm sm:text-lg md:text-2xl font-light tracking-widest text-[var(--color-accent-primary)] uppercase mb-8 flex flex-wrap justify-center items-center gap-y-2 gap-x-3 md:gap-x-4 px-4"
          >
            <span className="whitespace-nowrap">Full Stack Developer</span>
            <span className="text-white/20 text-xs hidden xs:inline">•</span>
            <span className="whitespace-nowrap">AI Builder</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-[#9CA3AF] font-normal leading-relaxed max-w-2xl mb-12"
          >
            Building modern websites, scalable applications, AI-powered systems, and future digital products. 
            Crafting the next generation of software with a relentless focus on premium quality, clean code, and intuitive user experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-[#0F1117] font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(var(--color-accent-primary-rgb),0.3)]"
            >
              View Projects
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-medium text-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15]"
            >
              Work With Me
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Mohammed_Sharib_Mastan_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)] hover:bg-[rgba(var(--color-accent-primary-rgb),0.05)] text-white font-medium text-sm transition-all duration-300 cursor-pointer"
            >
              Hire Me
              <Download className="w-4 h-4 text-[var(--color-accent-primary)]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity duration-300"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF]">Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#9CA3AF] to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};
