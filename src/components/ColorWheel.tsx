import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined theme colors with properties
export interface ThemeColor {
  name: string;
  english: string;
  primary: string;
  secondary: string;
  centerAngle: number; // Center of segment in CSS coordinates (0° is top, clockwise)
  rotationAngle: number; // Angle to rotate the wheel to align with 3 o'clock (90°) or 9 o'clock (270°)
}

export const THEME_COLORS: ThemeColor[] = [
  {
    name: 'orange',
    english: 'orange',
    primary: '#FFB86B',
    secondary: '#D9A86C',
    centerAngle: 300,
    rotationAngle: 150, // (90 - 300) = -210 -> 150
  },
  {
    name: 'blue',
    english: 'blue',
    primary: '#3A86FF',
    secondary: '#00C2FF',
    centerAngle: 120,
    rotationAngle: 150, // (270 - 120) = 150
  },
  {
    name: 'purple',
    english: 'purple',
    primary: '#8338EC',
    secondary: '#C084FC',
    centerAngle: 180,
    rotationAngle: 90, // (270 - 180) = 90
  },
  {
    name: 'green',
    english: 'green',
    primary: '#06D6A0',
    secondary: '#34D399',
    centerAngle: 60,
    rotationAngle: 30, // (90 - 60) = 30
  },
  {
    name: 'red',
    english: 'red',
    primary: '#FF006E',
    secondary: '#FF4D6D',
    centerAngle: 240,
    rotationAngle: 30, // (270 - 240) = 30
  },
  {
    name: 'yellow',
    english: 'yellow',
    primary: '#FFBE0B',
    secondary: '#FFD166',
    centerAngle: 0,
    rotationAngle: 90, // (90 - 0) = 90
  },
];

interface ColorWheelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorWheel = ({ isOpen, onClose }: ColorWheelProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync state with local storage theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'orange';
    const index = THEME_COLORS.findIndex((c) => c.name === savedTheme);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, []);

  // Update theme attributes on index change
  useEffect(() => {
    const activeColor = THEME_COLORS[activeIndex];
    document.documentElement.setAttribute('data-theme', activeColor.name);
    localStorage.setItem('portfolio-theme', activeColor.name);
  }, [activeIndex]);

  // Disable page scrolling when the color wheel overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Handle native wheel events to block page scrolling and rotate the wheel
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault(); // Lock background page scroll!
      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % THEME_COLORS.length);
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev - 1 + THEME_COLORS.length) % THEME_COLORS.length);
      }
    };

    if (isOpen) {
      overlay.addEventListener('wheel', handleWheelNative, { passive: false });
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('wheel', handleWheelNative);
      }
    };
  }, [isOpen]);

  const activeColor = THEME_COLORS[activeIndex];

  // Determine which side of the screen the wheel sits on
  // Yellow, Green, and Orange sit on the LEFT side of the screen.
  // Blue, Purple, and Red sit on the RIGHT side of the screen.
  const isLeftWheel = activeColor.name === 'yellow' || activeColor.name === 'green' || activeColor.name === 'orange';

  // Wheel click handler to resolve angle
  const handleWheelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wheelRef.current) return;

    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const dx = clickX - centerX;
    const dy = clickY - centerY;

    // Ensure they clicked on the wheel track (radius bounds)
    const distance = Math.sqrt(dx * dx + dy * dy);
    const outerRadius = rect.width / 2;
    // Allow a click margin
    if (distance < outerRadius * 0.5 || distance > outerRadius * 1.1) return;

    // Calculate polar angle in degrees (-180 to 180)
    let polarAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (polarAngle < 0) polarAngle += 360;

    // Convert standard polar angle to wheel-relative CSS angle
    const targetCssAngle = isLeftWheel ? 90 : 270;
    const rotation = (targetCssAngle - activeColor.centerAngle) % 360;
    let cssAngle = (polarAngle - rotation + 90) % 360;
    if (cssAngle < 0) cssAngle += 360;

    // Find the closest color angle mathematically
    const colorAngles = [
      { index: 0, angle: 300 }, // Orange
      { index: 1, angle: 120 }, // Blue
      { index: 2, angle: 180 }, // Purple
      { index: 3, angle: 60 },  // Green
      { index: 4, angle: 240 }, // Red
      { index: 5, angle: 0 },   // Yellow
    ];

    let closestIndex = 0;
    let minDiff = 360;
    for (const item of colorAngles) {
      let diff = Math.abs(cssAngle - item.angle);
      if (diff > 180) diff = 360 - diff;
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = item.index;
      }
    }

    setActiveIndex(closestIndex);

    // Auto-close the fullscreen overlay after a brief snapping delay
    setTimeout(() => {
      onClose();
    }, 450);
  };

  // Compute rotation angle dynamically
  const targetCssAngle = isLeftWheel ? 90 : 270;
  const currentRotationAngle = (targetCssAngle - activeColor.centerAngle) % 360;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fullscreen Immersive Dark Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-hidden flex items-center justify-center select-none"
          >
            {/* Close Button in the top right corner */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all duration-300 z-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrolling Instructions Banner at the bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold block text-center">
                Scroll Anywhere to Rotate • Click Wheel to Snaps & Apply
              </span>
            </div>

            {/* Immersive Layout Container */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-between px-6">
              
              {/* Sliding/Fading Text Info Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeColor.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10 w-[280px] sm:w-[380px] md:w-[480px]"
                  style={{
                    left: isLeftWheel ? 'auto' : '10vw',
                    right: isLeftWheel ? '10vw' : 'auto',
                  }}
                >
                  {/* English Name (Tall Condensed Bebas Font with gradient) */}
                  <span
                    className="font-bebas text-8xl sm:text-9xl md:text-[11rem] leading-none tracking-normal select-none font-bold uppercase bg-gradient-to-b bg-clip-text text-transparent transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, #FFFFFF 15%, ${activeColor.primary} 60%, ${activeColor.secondary} 100%)`,
                      filter: `drop-shadow(0 4px 15px ${activeColor.primary}22)`,
                    }}
                  >
                    {activeColor.english}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Sliding Color Wheel Semicircle */}
              <motion.div
                key={isLeftWheel ? 'left-wheel' : 'right-wheel'}
                initial={{ 
                  x: isLeftWheel ? '-80vw' : '80vw',
                  opacity: 0,
                  rotate: isLeftWheel ? -90 : 90
                }}
                animate={{ 
                  x: 0,
                  opacity: 1,
                  rotate: 0
                }}
                exit={{ 
                  x: isLeftWheel ? '-80vw' : '80vw',
                  opacity: 0,
                  rotate: isLeftWheel ? -90 : 90
                }}
                transition={{ type: 'spring', damping: 28, stiffness: 120 }}
                className={`absolute top-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] ${
                  isLeftWheel 
                    ? 'left-[-170px] sm:left-[-230px] md:left-[-280px]' 
                    : 'right-[-170px] sm:right-[-230px] md:right-[-280px]'
                }`}
              >
                {/* Rotating Inner Wheel Container */}
                <div
                  ref={wheelRef}
                  onClick={handleWheelClick}
                  style={{
                    transform: `rotate(${currentRotationAngle}deg)`,
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="relative w-full h-full rounded-full bg-[conic-gradient(from_0deg,#FFBE0B,#06D6A0,#3A86FF,#8338EC,#FF006E,#FFB86B,#FFBE0B)] shadow-[0_0_80px_rgba(0,0,0,0.6)] cursor-pointer active:scale-[0.98] transition-transform duration-200"
                >
                  {/* Outer Ring Border */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#171A21]/30" />

                  {/* Inner Dark Hollow Mask (Makes it a hollow ring) */}
                  <div className="absolute inset-[15%] rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.04] shadow-inner" />
                </div>

                {/* Fixed Indicator White Ring (Centered on the track at 3 o'clock or 9 o'clock) */}
                <div 
                  className="absolute w-[10%] h-[10%] rounded-full border-4 border-white bg-transparent z-20 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
                  style={{
                    left: isLeftWheel ? 'auto' : '10%',
                    right: isLeftWheel ? '10%' : 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    boxShadow: `0 0 20px ${activeColor.primary}, inset 0 0 8px ${activeColor.primary}`,
                  }}
                />
              </motion.div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
