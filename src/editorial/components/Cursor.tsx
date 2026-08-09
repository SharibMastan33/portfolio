import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export type CursorType = 'default' | 'text' | 'project' | 'link';

export const Cursor = () => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging springs
  const springConfig = { stiffness: 250, damping: 28, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is mobile or touch
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Global cursor state detector via data attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]');
      if (cursorAttr) {
        const val = cursorAttr.getAttribute('data-cursor');
        setCursorType(val as CursorType);
      } else {
        setCursorType('default');
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  // Determine cursor styles based on state
  const getVariants = () => {
    switch (cursorType) {
      case 'text':
        return {
          width: 56,
          height: 56,
          backgroundColor: 'rgba(32, 33, 36, 0.03)',
          border: '1px solid #202124',
          borderRadius: '50%',
        };
      case 'project':
        return {
          width: 78,
          height: 78,
          backgroundColor: 'rgba(32, 33, 36, 0.08)',
          border: '1px solid #202124',
          borderRadius: '50%',
        };
      case 'link':
        return {
          width: 48,
          height: 48,
          backgroundColor: 'rgba(32, 33, 36, 0.05)',
          border: '1px solid #202124',
          borderRadius: '50%',
        };
      default:
        return {
          width: 8,
          height: 8,
          backgroundColor: '#202124',
          border: '0px solid transparent',
          borderRadius: '50%',
        };
    }
  };

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={getVariants()}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      className="fixed pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
    >
      {cursorType === 'project' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] font-bold tracking-widest text-[#202124] uppercase"
        >
          View
        </motion.span>
      )}
      {cursorType === 'link' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xs font-medium text-[#202124]"
        >
          ↗
        </motion.span>
      )}
    </motion.div>
  );
};
