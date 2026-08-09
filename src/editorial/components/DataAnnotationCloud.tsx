import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number; // Current x
  y: number; // Current y
  startX: number; // Scattered starting x
  startY: number; // Scattered starting y
  targetX: number; // Assembled target x
  targetY: number; // Assembled target y
  vx: number;
  vy: number;
  size: number;
}

export const DataAnnotationCloud = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000, active: false });

  // Generate target coordinates for the car outline
  const targetPoints = useRef<Array<{ x: number; y: number }>>([]);
  if (targetPoints.current.length === 0) {
    const pts: Array<{ x: number; y: number }> = [];
    
    // Wheels (two circles)
    for (let theta = 0; theta < Math.PI * 2; theta += 0.2) {
      pts.push({ x: 0.26 + 0.08 * Math.cos(theta), y: 0.72 + 0.08 * Math.sin(theta) });
      pts.push({ x: 0.74 + 0.08 * Math.cos(theta), y: 0.72 + 0.08 * Math.sin(theta) });
    }
    
    // Ground base line
    for (let x = 0.05; x <= 0.95; x += 0.04) {
      pts.push({ x, y: 0.72 });
    }
    
    // Bumpers
    for (let y = 0.52; y <= 0.72; y += 0.05) {
      pts.push({ x: 0.05, y });
      pts.push({ x: 0.95, y });
    }
    
    // Hood & Trunk
    for (let x = 0.05; x <= 0.26; x += 0.04) {
      pts.push({ x, y: 0.52 });
    }
    for (let x = 0.74; x <= 0.95; x += 0.04) {
      pts.push({ x, y: 0.52 });
    }
    
    // Cabin windshield (front angle)
    for (let t = 0; t <= 1; t += 0.1) {
      pts.push({ x: 0.26 + t * 0.16, y: 0.52 - t * 0.24 });
    }
    // Cabin roof
    for (let x = 0.42; x <= 0.62; x += 0.04) {
      pts.push({ x, y: 0.28 });
    }
    // Cabin back window (rear angle)
    for (let t = 0; t <= 1; t += 0.1) {
      pts.push({ x: 0.62 + t * 0.12, y: 0.28 + t * 0.24 });
    }
    
    // Add random interior point cloud fills to look like LiDAR reflections
    for (let i = 0; i < 80; i++) {
      const rx = 0.1 + Math.random() * 0.8;
      const ry = 0.32 + Math.random() * 0.38;
      if (ry > 0.52 || (rx > 0.26 && rx < 0.74)) {
        pts.push({ x: rx, y: ry });
      }
    }
    targetPoints.current = pts;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initialize particles
    const particles: Particle[] = targetPoints.current.map((pt) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      return {
        x: startX,
        y: startY,
        startX,
        startY,
        targetX: pt.x,
        targetY: pt.y,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 1.2,
      };
    });

    let assemblyProgress = 0; // 0 to 1

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Increment assembly progress when in view
      if (isInView) {
        assemblyProgress = Math.min(assemblyProgress + 0.015, 1);
      } else {
        assemblyProgress = Math.max(assemblyProgress - 0.02, 0);
      }

      // Physics loop
      particles.forEach((p) => {
        // Map target 0..1 coordinates to canvas size, centered with padding
        const padX = width * 0.15;
        const padY = height * 0.18;
        const tx = padX + p.targetX * (width - padX * 2);
        const ty = padY + p.targetY * (height - padY * 2);

        // Current goal coordinate depends on assemblyProgress
        const gx = p.startX + (tx - p.startX) * assemblyProgress;
        const gy = p.startY + (ty - p.startY) * assemblyProgress;

        // Vector to goal
        const dx = gx - p.x;
        const dy = gy - p.y;

        // Apply friction & force towards goal
        p.vx = p.vx * 0.82 + dx * 0.05;
        p.vy = p.vy * 0.82 + dy * 0.05;

        // Add coordinates
        p.x += p.vx;
        p.y += p.vy;

        // Mouse displacement force (only active when assembled and mouse is active)
        if (mouse.active && assemblyProgress > 0.95) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          const forceRadius = 110;

          if (dist < forceRadius) {
            const force = (1 - dist / forceRadius) * 12;
            const angle = Math.atan2(mdy, mdx);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }

        // Draw particle
        ctx.fillStyle = assemblyProgress > 0.9 ? '#1A73E8' : '#202124';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw bounding box when assembled
      if (assemblyProgress > 0.92) {
        const boxX = width * 0.15 + 0.03 * (width * 0.7);
        const boxY = height * 0.18 + 0.22 * (height * 0.64);
        const boxW = width * 0.7 * 0.92;
        const boxH = height * 0.64 * 0.58;

        ctx.strokeStyle = 'rgba(26, 115, 232, 0.42)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.setLineDash([]);

        // Label tag
        ctx.fillStyle = '#1A73E8';
        ctx.fillRect(boxX, boxY - 20, 142, 20);

        ctx.fillStyle = '#F8F8F5';
        ctx.font = '10px monospace';
        ctx.fillText('CAR / VEHICLE [98%]', boxX + 8, boxY - 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, mouse]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: -1000, y: -1000, active: false });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] max-w-3xl mx-auto rounded-3xl bg-[#DDDDD8]/20 border border-[#DDDDD8] overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full block cursor-crosshair"
      />
      {/* HUD indicators */}
      <div className="absolute top-4 right-4 pointer-events-none font-mono text-[8px] sm:text-[9px] text-[#6B6B6B]/80 flex flex-col items-end">
        <span>FPS: 60.00</span>
        <span className="mt-1">PCD SCALE: 1.0</span>
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none font-mono text-[8px] sm:text-[9px] text-[#6B6B6B]/80">
        <span>ACTIVE SENSOR: LIDAR_VELODYNE_128</span>
      </div>
    </div>
  );
};
