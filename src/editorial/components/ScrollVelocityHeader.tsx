import { useRef } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

export const ScrollVelocityHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Map velocity pixels/sec to scroll horizontal offset
  const rawX = useTransform(scrollVelocity, [-2500, 2500], [-120, 120]);
  const x = useSpring(rawX, { damping: 50, stiffness: 350 });

  return (
    <div
      ref={ref}
      className="w-full bg-[#F8F8F5] py-6 sm:py-10 overflow-hidden select-none border-b border-[#DDDDD8] flex items-center justify-center"
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap font-black text-[clamp(3.5rem,10vw,7.5rem)] text-[#DDDDD8]/60 uppercase tracking-tight flex items-center gap-12"
      >
        <span>DIGITAL SOLUTIONS</span>
        <span className="text-[#1A73E8]/30">•</span>
        <span>INTELLIGENT SYSTEMS</span>
        <span className="text-[#1A73E8]/30">•</span>
        <span>DATA GRAPH</span>
        <span className="text-[#1A73E8]/30">•</span>
        <span>SECURE CODE</span>
      </motion.div>
    </div>
  );
};
