import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { RotateCcw, X } from 'lucide-react';

type SwarmRebuildProps = {
  onComplete?: () => void;
};

const builders = [
  { name: 'layout.exe', color: '#70F0B8', pathX: ['8vw', '28vw', '42vw', '72vw', '88vw'], pathY: ['22vh', '18vh', '48vh', '28vh', '72vh'] },
  { name: 'pixelpilot', color: '#8AA8FF', pathX: ['92vw', '74vw', '56vw', '24vw', '12vw'], pathY: ['20vh', '44vh', '24vh', '70vh', '38vh'] },
  { name: 'typecraft', color: '#FFB86B', pathX: ['14vw', '38vw', '66vw', '82vw', '48vw'], pathY: ['82vh', '60vh', '78vh', '48vh', '16vh'] },
  { name: 'gridrunner', color: '#F49BFF', pathX: ['52vw', '18vw', '34vw', '62vw', '84vw'], pathY: ['12vh', '38vh', '72vh', '56vh', '34vh'] },
];

const buildSteps = [
  'Mapping the page structure',
  'Placing the layout grid',
  'Building sections in parallel',
  'Rendering type and details',
  'Finishing the portfolio',
];

export function SwarmRebuild({ onComplete }: SwarmRebuildProps) {
  const [active, setActive] = useState(true);
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      const id = window.setTimeout(() => {
        setActive(false);
        onComplete?.();
      }, 900);
      return () => window.clearTimeout(id);
    }

    const stepTimer = window.setInterval(() => {
      setStep((current) => Math.min(current + 1, buildSteps.length - 1));
    }, 760);
    const finishTimer = window.setTimeout(() => {
      setActive(false);
      onComplete?.();
    }, 4200);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(finishTimer);
    };
  }, [active, onComplete, reducedMotion]);

  const replay = () => {
    setStep(0);
    setActive(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={replay}
        className="swarm-replay-button"
        aria-label="Replay portfolio rebuild animation"
      >
        <RotateCcw size={14} aria-hidden="true" />
        <span>Replay swarm</span>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="swarm-screen"
            role="status"
            aria-live="polite"
            aria-label="Portfolio rebuild animation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeOut' } }}
          >
            <div className="swarm-scanlines" />
            <div className="swarm-topbar">
              <div className="swarm-brand"><span className="swarm-live-dot" /> SHARIB / PORTFOLIO</div>
              <div className="swarm-status">LIVE REBUILD <span>●</span></div>
              <button className="swarm-skip" onClick={() => { setActive(false); onComplete?.(); }} type="button">
                Skip <X size={13} />
              </button>
            </div>

            <div className="swarm-wireframe" aria-hidden="true">
              <div className="swarm-wire-nav"><i /><i /><i /><i /></div>
              <div className="swarm-wire-hero">
                <div className="swarm-wire-copy">
                  <i className="swarm-line swarm-line-short" />
                  <i className="swarm-line swarm-line-title" />
                  <i className="swarm-line swarm-line-title swarm-line-title-two" />
                  <i className="swarm-line swarm-line-body" />
                  <i className="swarm-line swarm-line-body swarm-line-body-two" />
                  <i className="swarm-wire-button" />
                </div>
                <div className="swarm-wire-orb" />
              </div>
              <div className="swarm-wire-cards"><i /><i /><i /></div>
              <div className="swarm-wire-footer"><i /><i /><i /></div>
            </div>

            {builders.map((builder, index) => (
              <motion.div
                key={builder.name}
                className="swarm-cursor"
                style={{ color: builder.color, left: builder.pathX[0], top: builder.pathY[0] }}
                animate={reducedMotion ? {} : {
                  left: builder.pathX,
                  top: builder.pathY,
                }}
                transition={{ duration: 3.5, delay: index * 0.12, ease: 'easeInOut' }}
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                  <path d="M2 1.5L17.2 15.2L10.1 15.8L6.8 22L2 1.5Z" stroke="#101116" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <span style={{ backgroundColor: builder.color }}>{builder.name}</span>
              </motion.div>
            ))}

            <div className="swarm-console">
              <div className="swarm-console-heading"><span>SWARM ENGINE</span><span>4 BUILDERS CONNECTED</span></div>
              <div className="swarm-step">{buildSteps[step]}<span className="swarm-caret">_</span></div>
              <div className="swarm-progress"><motion.div animate={{ width: `${((step + 1) / buildSteps.length) * 100}%` }} transition={{ duration: 0.45 }} /></div>
              <div className="swarm-console-foot"><span>DOM LAYOUT · TYPE · COMPONENTS</span><span>{Math.min(100, Math.round(((step + 1) / buildSteps.length) * 100))}%</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
