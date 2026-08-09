import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EditorialHero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.4s timeline to complete progress line and fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#F8F8F5] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 select-none overflow-hidden border-b border-[#DDDDD8]">
      <AnimatePresence mode="wait">
        {loading ? (
          /* CINEMATIC ENTRANCE LOADER */
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#F8F8F5] flex flex-col items-center justify-center z-50 pointer-events-none"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.24em] text-[#202124] uppercase mb-4"
            >
              SHARIB MASTAN
            </motion.span>
            <div className="w-48 h-[1px] bg-[#DDDDD8] relative overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#1A73E8] origin-left"
              />
            </div>
          </motion.div>
        ) : (
          /* MAIN EDITORIAL HERO */
          <motion.div
            key="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto flex-grow flex flex-col justify-center w-full relative z-10"
          >
            {/* Title mask reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-[clamp(3.8rem,15vw,9rem)] leading-[0.88] font-black tracking-[-0.05em] text-[#202124]"
              >
                SHARIB.
              </motion.h1>
            </div>

            {/* Subtitle & Description */}
            <div className="max-w-2xl mt-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#202124] leading-tight mb-6"
              >
                I BUILD DIGITAL PRODUCTS WITH CODE, DATA & AI.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
                className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-medium"
              >
                Building modern websites, scalable applications, AI-powered systems, and future digital products. Crafting the next generation of software with a focus on premium quality, clean code, and intuitive user experiences.
              </motion.p>
            </div>

            {/* Settle line component */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}
              className="w-full h-[1px] bg-[#DDDDD8] mt-16 origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explore Indicator */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="max-w-5xl mx-auto w-full flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#6B6B6B] cursor-pointer hover:opacity-100 transition-opacity duration-300 relative z-10"
        >
          <span>SELECTED CREATIVE PORTFOLIO</span>
          <span className="flex items-center gap-1.5 animate-bounce">
            EXPLORE MY WORK <span className="text-[12px]">↓</span>
          </span>
        </motion.div>
      )}
    </section>
  );
};
