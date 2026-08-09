import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiGooglegemini,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Braces, Cloud, Database } from "lucide-react";

const FLOAT_DURATION = 1550;
const SWITCH_INTERVAL = 115;
const FUSION_DURATION = 250;
const REVEAL_DURATION = 750;
const EXIT_DURATION = 330;
const BRAND_NAME = "Mohammed Sharib Mastan";

const floatingLogos = [
  {
    label: "React",
    Icon: SiReact,
    start: ["-8vw", "18vh"],
    end: ["24vw", "34vh"],
    drift: -7,
    rotate: 10,
    depth: 0.92,
  },
  {
    label: "JavaScript",
    Icon: SiJavascript,
    start: ["108vw", "14vh"],
    end: ["76vw", "30vh"],
    drift: 8,
    rotate: -8,
    depth: 1.08,
  },
  {
    label: "Python",
    Icon: SiPython,
    start: ["12vw", "108vh"],
    end: ["34vw", "76vh"],
    drift: -6,
    rotate: -12,
    depth: 0.86,
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    start: ["106vw", "72vh"],
    end: ["71vw", "60vh"],
    drift: 7,
    rotate: 9,
    depth: 1,
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    start: ["-9vw", "72vh"],
    end: ["22vw", "59vh"],
    drift: 6,
    rotate: -7,
    depth: 1.1,
  },
  {
    label: "Docker",
    Icon: SiDocker,
    start: ["61vw", "-10vh"],
    end: ["58vw", "24vh"],
    drift: -8,
    rotate: 8,
    depth: 0.88,
  },
  {
    label: "Vercel",
    Icon: SiVercel,
    start: ["91vw", "109vh"],
    end: ["83vw", "77vh"],
    drift: 5,
    rotate: -10,
    depth: 0.96,
  },
];

const ambientParticles = [
  { left: "12%", top: "24%", size: 2, delay: 0.1, duration: 3.8 },
  { left: "21%", top: "82%", size: 1, delay: 0.7, duration: 4.4 },
  { left: "36%", top: "16%", size: 1, delay: 0.35, duration: 3.6 },
  { left: "47%", top: "72%", size: 2, delay: 0.9, duration: 4.7 },
  { left: "64%", top: "12%", size: 1, delay: 0.5, duration: 4.1 },
  { left: "72%", top: "84%", size: 1, delay: 0.2, duration: 3.9 },
  { left: "86%", top: "43%", size: 2, delay: 0.8, duration: 4.5 },
  { left: "92%", top: "68%", size: 1, delay: 0.4, duration: 3.7 },
];

const fusionSparks = Array.from({ length: 12 }, (_, index) => {
  const angle = (Math.PI * 2 * index) / 12;
  const distance = 68 + (index % 3) * 18;

  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: (index % 4) * 0.018,
    length: 8 + (index % 3) * 4,
  };
});

const introStages = ["Discover", "Synthesize", "Identify"];

interface IdentityMarkProps {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

function IdentityMark({ size, className = "" }: IdentityMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 96 96"
      width={size}
    >
      <path
        d="M35 25 16 48l19 23M61 25l19 23-19 23"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <path
        d="m48 29 14 19-14 19-14-19 14-19Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle cx="48" cy="48" fill="currentColor" r="5" />
      <path
        d="M48 19v10M48 67v10M19 48h15M62 48h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <circle cx="48" cy="15" fill="currentColor" r="3" />
      <circle cx="48" cy="81" fill="currentColor" r="3" />
      <circle cx="15" cy="48" fill="currentColor" r="3" />
      <circle cx="81" cy="48" fill="currentColor" r="3" />
    </svg>
  );
}

function AnimatedBrandName() {
  return (
    <motion.h1
      animate="visible"
      aria-label={BRAND_NAME}
      className="text-[clamp(1.55rem,5vw,3.4rem)] leading-none font-semibold tracking-[-0.045em] text-white"
      initial="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.04,
            staggerChildren: 0.018,
          },
        },
      }}
    >
      {Array.from(BRAND_NAME).map((character, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          key={`${character}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.h1>
  );
}

const centerLogos = [
  { label: "React", Icon: SiReact },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "Python", Icon: SiPython },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "GitHub", Icon: SiGithub },
  { label: "Docker", Icon: SiDocker },
  { label: "Vercel", Icon: SiVercel },
  { label: "VS Code", Icon: VscVscode },
  { label: "Figma", Icon: SiFigma },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Gemini AI", Icon: SiGooglegemini },
  { label: "OpenAI", Icon: SiOpenai },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Database", Icon: Database },
  { label: "Cloud", Icon: Cloud },
  { label: "API", Icon: Braces },
  { label: "AI", Icon: IdentityMark },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

/**
 * Premium full-screen portfolio loading animation.
 *
 * @param {{ onComplete?: () => void }} props
 */
export function PortfolioIntro({ onComplete = () => {} }) {
  const [phase, setPhase] = useState("floating");
  const [logoIndex, setLogoIndex] = useState(0);
  const timersRef = useRef<number[]>([]);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });
  const smoothPointerY = useSpring(pointerY, {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });
  const foregroundX = useTransform(smoothPointerX, (value) => value * 0.34);
  const foregroundY = useTransform(smoothPointerY, (value) => value * 0.34);
  const backgroundX = useTransform(smoothPointerX, (value) => value * -0.22);
  const backgroundY = useTransform(smoothPointerY, (value) => value * -0.22);

  onCompleteRef.current = onComplete;

  const visibleFloatingLogos = useMemo(
    () => floatingLogos.slice(0, isMobile ? 5 : 7),
    [isMobile],
  );

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const finish = useCallback(
    (skipped = false) => {
      if (completedRef.current) return;
      completedRef.current = true;
      clearTimers();
      setPhase("exiting");

      const delay = skipped ? 220 : EXIT_DURATION;
      timersRef.current.push(
        window.setTimeout(() => onCompleteRef.current(), delay),
      );
    },
    [clearTimers],
  );

  // Lock scroll behavior during the intro
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timersRef.current.push(timer);
    };

    schedule(() => {
      setPhase("switching");
      setLogoIndex(0);
    }, FLOAT_DURATION);

    centerLogos.slice(1).forEach((_, index) => {
      schedule(
        () => setLogoIndex(index + 1),
        FLOAT_DURATION + (index + 1) * SWITCH_INTERVAL,
      );
    });

    const fusionAt = FLOAT_DURATION + centerLogos.length * SWITCH_INTERVAL;
    const revealAt = fusionAt + FUSION_DURATION;
    schedule(() => setPhase("fusion"), fusionAt);
    schedule(() => setPhase("reveal"), revealAt);
    schedule(() => finish(false), revealAt + REVEAL_DURATION);

    return clearTimers;
  }, [clearTimers, finish]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        finish(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finish]);

  const CurrentLogo = centerLogos[logoIndex].Icon;
  const logoProgress = logoIndex / (centerLogos.length - 1);
  const isCenterVisible = phase !== "floating";
  const isFusion = phase === "fusion";
  const isReveal = phase === "reveal";
  const isFinalMark = isFusion || isReveal;
  const activeStage =
    phase === "floating" ? 0 : phase === "switching" || isFusion ? 1 : 2;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (isMobile || reduceMotion) return;
    pointerX.set((event.clientX / window.innerWidth - 0.5) * 28);
    pointerY.set((event.clientY / window.innerHeight - 0.5) * 22);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.section
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      aria-label="Portfolio introduction. Click or press Enter to skip."
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#0F1117] text-white select-none"
      exit={{ opacity: 0 }}
      onClick={() => finish(true)}
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
      role="button"
      tabIndex={0}
      transition={{ duration: phase === "exiting" ? 0.33 : 0.2 }}
    >
      <motion.div
        animate={{
          opacity: phase === "exiting" ? 0 : [0.014, 0.026, 0.014],
          scale: [0.98, 1.02, 0.98],
        }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center text-[min(44vw,40rem)] leading-none font-black tracking-[-0.12em] text-white"
        style={{ x: backgroundX, y: backgroundY }}
        transition={{
          duration: reduceMotion ? 0 : 6,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
        }}
      >
        MS
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          x: smoothPointerX,
          y: smoothPointerY,
          background:
            "radial-gradient(circle, rgba(var(--color-accent-primary-rgb),0.2) 0%, rgba(var(--color-accent-primary-rgb),0.05) 34%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.55, 0.8, 0.55], scale: [0.95, 1.05, 0.95] }}
        className="pointer-events-none absolute -top-[38%] -right-[24%] h-[78vw] max-h-[940px] w-[78vw] max-w-[940px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--color-accent-primary-rgb),0.18) 0%, rgba(var(--color-accent-primary-rgb),0.065) 36%, transparent 70%)",
          filter: "blur(8px)",
        }}
        transition={{
          duration: reduceMotion ? 0 : 5,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-[36%] -left-[18%] h-[60vw] max-h-[720px] w-[60vw] max-w-[720px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(120,130,154,0.09) 0%, transparent 68%)",
          filter: "blur(20px)",
        }}
      />

      <div className="intro-dot-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="intro-grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,17,23,0.08)_44%,rgba(15,17,23,0.72)_100%)]" />

      <motion.div
        animate={{ opacity: isReveal ? 0 : 1 }}
        className="pointer-events-none absolute top-5 left-5 z-20 flex items-center gap-3 sm:top-7 sm:left-8"
        initial={{ opacity: 0, y: -8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-[8px] font-semibold tracking-[0.14em] text-[var(--color-accent-primary)]/80">
          MS
        </div>
        <div>
          <p className="text-[8px] font-medium tracking-[0.24em] text-white/42 uppercase sm:text-[9px]">
            Portfolio system
          </p>
          <p className="mt-1 text-[7px] tracking-[0.19em] text-white/20 uppercase">
            Initializing identity
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: isReveal ? 0 : 0.32 }}
        className="pointer-events-none absolute top-8 right-8 z-20 hidden text-right sm:block"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-[8px] tracking-[0.22em] text-white uppercase">
          18 systems
        </p>
        <p className="mt-1 text-[7px] tracking-[0.18em] text-[var(--color-accent-primary)] uppercase">
          01 identity
        </p>
      </motion.div>

      <motion.div
        animate={{ opacity: isReveal ? 0 : 1 }}
        className="pointer-events-none absolute top-1/2 right-8 z-20 hidden -translate-y-1/2 lg:block"
        initial={{ opacity: 0, x: 10 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <div className="space-y-5">
          {introStages.map((stage, index) => {
            const isActive = index === activeStage;
            const isComplete = index < activeStage;

            return (
              <div className="flex items-center justify-end gap-3" key={stage}>
                <motion.div
                  animate={{
                    color: isActive
                      ? "rgba(var(--color-accent-primary-rgb),0.9)"
                      : isComplete
                        ? "rgba(255,255,255,0.34)"
                        : "rgba(255,255,255,0.16)",
                    x: isActive ? -3 : 0,
                  }}
                  className="text-right"
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-[7px] tracking-[0.21em] uppercase">
                    0{index + 1}
                  </p>
                  <p className="mt-1 text-[8px] font-medium tracking-[0.19em] uppercase">
                    {stage}
                  </p>
                </motion.div>
                <motion.span
                  animate={{
                    backgroundColor: isActive
                      ? "var(--color-accent-primary)"
                      : isComplete
                        ? "rgba(255,255,255,0.28)"
                        : "rgba(255,255,255,0.1)",
                    boxShadow: isActive
                      ? "0 0 12px rgba(var(--color-accent-primary-rgb),0.6)"
                      : "0 0 0 rgba(var(--color-accent-primary-rgb),0)",
                    scale: isActive ? 1.3 : 1,
                  }}
                  className="h-1.5 w-1.5 rounded-full"
                  transition={{ duration: 0.25 }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      {ambientParticles.map(({ left, top, size, delay, duration }, index) => (
        <motion.span
          animate={
            reduceMotion
              ? { opacity: 0.2 }
              : {
                  opacity: [0.08, 0.46, 0.08],
                  y: [0, index % 2 === 0 ? -13 : 11, 0],
                }
          }
          aria-hidden="true"
          className="pointer-events-none absolute z-[1] rounded-full bg-[var(--color-accent-primary)]"
          key={`${left}-${top}`}
          style={{ left, top, width: size, height: size }}
          transition={{
            delay,
            duration,
            ease: "easeInOut",
            repeat: reduceMotion ? 0 : Infinity,
          }}
        />
      ))}

      <AnimatePresence>
        {phase === "floating" || phase === "switching"
          ? visibleFloatingLogos.map(
              (
                { label, Icon, start, end, drift, rotate, depth },
                index,
              ) => {
                const converging = phase === "switching";

                return (
                  <motion.div
                    animate={{
                      x: converging ? "50vw" : end[0],
                      y: converging ? "50vh" : end[1],
                      opacity: converging ? 0 : 0.48,
                      filter: converging ? "blur(7px)" : "blur(0px)",
                    }}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 will-change-transform"
                    exit={{ opacity: 0 }}
                    initial={{
                      x: start[0],
                      y: start[1],
                      opacity: 0,
                    }}
                    key={label}
                    transition={
                      converging
                        ? {
                            duration: 0.42,
                            delay: index * 0.022,
                            ease: [0.76, 0, 0.24, 1],
                          }
                        : {
                            duration: reduceMotion ? 0.2 : 1.5,
                            delay: index * 0.035,
                            ease: [0.22, 1, 0.36, 1],
                          }
                    }
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={
                          converging
                            ? { scale: 0.18, rotate: 0 }
                            : {
                                scale: depth,
                                y: reduceMotion ? 0 : [0, drift, 0],
                                rotate: reduceMotion
                                  ? 0
                                  : [0, rotate, -rotate * 0.35, 0],
                              }
                        }
                        className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/[0.07] bg-[#171A21]/88 text-[var(--color-accent-secondary)] shadow-[0_0_28px_rgba(var(--color-accent-primary-rgb),0.12)] backdrop-blur-[2px] sm:h-12 sm:w-12 sm:rounded-2xl"
                        transition={{
                          duration: reduceMotion ? 0 : 2.3 + index * 0.14,
                          ease: "easeInOut",
                          repeat: converging || reduceMotion ? 0 : Infinity,
                        }}
                      >
                        <span className="absolute inset-[3px] rounded-[inherit] border border-white/[0.025]" />
                        <Icon className="h-[44%] w-[44%] drop-shadow-[0_0_8px_rgba(var(--color-accent-primary-rgb),0.28)]" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              },
            )
          : null}
      </AnimatePresence>

      <AnimatePresence>
        {isCenterVisible && (
          <motion.div
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 z-10 grid place-items-center"
            initial={{ opacity: 0 }}
            key="center-stage"
            style={{ x: foregroundX, y: foregroundY }}
          >
            <motion.div
              animate={{ y: isReveal ? (isMobile ? -70 : -88) : 0 }}
              className="relative grid place-items-center will-change-transform"
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{
                  rotate: reduceMotion ? 0 : 360,
                  scale: isFinalMark ? 0.88 : 1,
                  opacity: isReveal ? 0.22 : 0.46,
                }}
                className="absolute h-40 w-40 rounded-full border border-dashed border-[var(--color-accent-primary)]/20 sm:h-56 sm:w-56"
                transition={{
                  rotate: {
                    duration: 13,
                    ease: "linear",
                    repeat: reduceMotion ? 0 : Infinity,
                  },
                  scale: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.35 },
                }}
              >
                <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--color-accent-primary)] shadow-[0_0_12px_rgba(var(--color-accent-primary-rgb),0.7)]" />
              </motion.div>

              <svg
                aria-hidden="true"
                className="absolute h-36 w-36 -rotate-90 sm:h-52 sm:w-52"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  r="47"
                  stroke="rgba(255,255,255,0.035)"
                  strokeWidth="0.7"
                />
                <motion.circle
                  animate={{
                    pathLength: isFinalMark ? 1 : 0.08 + logoProgress * 0.92,
                    opacity: isReveal ? 0.25 : 0.8,
                  }}
                  cx="50"
                  cy="50"
                  fill="none"
                  initial={{ pathLength: 0.04 }}
                  r="47"
                  stroke="var(--color-accent-primary)"
                  strokeLinecap="round"
                  strokeWidth="0.8"
                  transition={{ duration: 0.14, ease: "easeOut" }}
                />
              </svg>

              <motion.div
                animate={{
                  opacity: isFinalMark ? 0.62 : 0.28 + logoProgress * 0.28,
                  scale: isFinalMark ? 1.48 : 0.8 + logoProgress * 0.62,
                }}
                className="absolute h-36 w-36 rounded-full sm:h-48 sm:w-48"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--color-accent-primary-rgb),0.38), rgba(var(--color-accent-primary-rgb),0.11) 44%, transparent 72%)",
                  filter: "blur(12px)",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />

              <motion.div
                animate={{
                  scale: isFinalMark ? 1.12 : 0.82 + logoProgress * 0.34,
                  borderColor: isFinalMark
                    ? "rgba(var(--color-accent-primary-rgb),0.42)"
                    : "rgba(var(--color-accent-primary-rgb),0.2)",
                }}
                className="relative grid h-24 w-24 place-items-center rounded-[1.7rem] border bg-[#171A21]/88 text-[var(--color-accent-secondary)] shadow-[0_0_54px_rgba(var(--color-accent-primary-rgb),0.13)] backdrop-blur-md sm:h-32 sm:w-32 sm:rounded-[2.1rem]"
                transition={{ duration: 0.12, ease: "easeOut" }}
              >
                <span className="absolute inset-1.5 rounded-[1.35rem] border border-white/[0.045] sm:rounded-[1.65rem]" />
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="absolute inset-0 grid place-items-center"
                    exit={{
                      opacity: 0,
                      scale: 1.16,
                      rotate: logoIndex % 2 === 0 ? 3 : -3,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.72,
                      rotate: logoIndex % 2 === 0 ? -4 : 4,
                    }}
                    key={centerLogos[logoIndex].label}
                    transition={{ duration: 0.085, ease: "easeOut" }}
                  >
                    <CurrentLogo
                      className="h-[52%] w-[52%] drop-shadow-[0_0_14px_rgba(var(--color-accent-primary-rgb),0.38)]"
                      size="54%"
                      strokeWidth={1.65}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <AnimatePresence mode="popLayout">
                {phase === "switching" && (
                  <motion.p
                    animate={{ opacity: 0.52, y: 0 }}
                    className="absolute top-[calc(100%+2.65rem)] text-[8px] font-medium tracking-[0.25em] text-white uppercase sm:text-[9px]"
                    exit={{ opacity: 0, y: -4 }}
                    initial={{ opacity: 0, y: 5 }}
                    key={centerLogos[logoIndex].label}
                    transition={{ duration: 0.08 }}
                  >
                    {centerLogos[logoIndex].label}
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isFusion &&
                  [0, 1, 2].map((ring) => (
                    <motion.span
                      animate={{ opacity: 0, scale: 1.95 }}
                      aria-hidden="true"
                      className="absolute h-28 w-28 rounded-full border border-[var(--color-accent-primary)]/35 sm:h-36 sm:w-36"
                      initial={{ opacity: 0.55, scale: 0.72 }}
                      key={ring}
                      transition={{
                        delay: ring * 0.055,
                        duration: 0.36,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </AnimatePresence>

              <AnimatePresence>
                {isFusion &&
                  fusionSparks.map(({ x, y, delay, length }, index) => (
                    <motion.span
                      animate={{ opacity: 0, x, y, scaleX: 1 }}
                      aria-hidden="true"
                      className="absolute h-px origin-left bg-gradient-to-r from-[var(--color-accent-primary)] to-transparent"
                      initial={{ opacity: 0.8, x: 0, y: 0, scaleX: 0.15 }}
                      key={`spark-${index}`}
                      style={{
                        width: length,
                        rotate: `${(360 / fusionSparks.length) * index}deg`,
                      }}
                      transition={{
                        delay,
                        duration: 0.34,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {isReveal && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-1/2 left-1/2 w-[min(92vw,720px)] -translate-x-1/2 pt-7 text-center sm:pt-9"
                  initial={{ opacity: 0, y: 20 }}
                  key="brand-reveal"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AnimatedBrandName />

                  <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-[clamp(0.68rem,1.7vw,0.95rem)] font-medium tracking-[0.19em] text-[var(--color-accent-primary)]/85 uppercase"
                    initial={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.18, duration: 0.38 }}
                  >
                    Full Stack Developer <span className="px-1.5">•</span> AI
                    Builder
                  </motion.p>

                  <div className="relative mx-auto mt-6 h-px w-52 overflow-hidden bg-white/10 sm:w-72">
                    <motion.div
                      animate={{ scaleX: 1 }}
                      className="h-full origin-left bg-[var(--color-accent-primary)] shadow-[0_0_12px_rgba(var(--color-accent-primary-rgb),0.5)]"
                      initial={{ scaleX: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.48,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                    <motion.span
                      animate={{ x: ["-100%", "420%"] }}
                      className="absolute top-[-2px] left-0 h-[5px] w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]"
                      initial={{ x: "-100%" }}
                      transition={{
                        delay: 0.24,
                        duration: 0.52,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: isReveal ? 0.12 : phase === "floating" ? 0.42 : 0.24,
        }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap sm:bottom-8"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <span className="h-1 w-1 rounded-full bg-[var(--color-accent-primary)]" />
        <p className="text-[9px] font-medium tracking-[0.18em] text-white uppercase sm:text-[10px]">
          Click or press Enter to skip
        </p>
      </motion.div>
    </motion.section>
  );
}
