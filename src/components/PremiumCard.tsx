import { useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  isInteractive?: boolean;
}

export const PremiumCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(var(--color-accent-primary-rgb), 0.08)',
  isInteractive = true,
}: PremiumCardProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isInteractive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#171A21] p-6 shadow-premium transition-all duration-500 hover:border-white/[0.12] hover:shadow-premium-hover ${className}`}
    >
      {isInteractive && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
