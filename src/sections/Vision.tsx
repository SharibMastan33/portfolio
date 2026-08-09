import { motion } from 'framer-motion';
import { Cpu, Terminal, Compass, ShieldCheck, CloudLightning, Layers } from 'lucide-react';
import { PremiumCard } from '../components/PremiumCard';

export const Vision = () => {
  const concepts = [
    {
      id: 'company-os',
      title: 'AI Company OS',
      role: 'Core Orchestrator',
      description: 'An autonomous operations platform that coordinates multiple AI agents to run company operations, balance workloads, and track progress.',
      icon: <Layers className="w-4 h-4 text-[var(--color-accent-primary)]" />,
      time: 'Phase 1 - Foundational Kernel',
    },
    {
      id: 'pm-ai',
      title: 'Project Manager AI',
      role: 'Scope & Planning',
      description: 'Extracts requirements from conversations, translates them into modular task lists, assigns milestones, and schedules builds.',
      icon: <Compass className="w-4 h-4 text-[var(--color-accent-secondary)]" />,
      time: 'Phase 2 - Execution Scheduler',
    },
    {
      id: 'designer-ai',
      title: 'Designer AI',
      role: 'Asset & Layout',
      description: 'Generates UI layouts, constructs component structures, aligns branding color guides, and exports styled markup.',
      icon: <Cpu className="w-4 h-4 text-[var(--color-accent-primary)]" />,
      time: 'Phase 3 - Visual Architect',
    },
    {
      id: 'developer-ai',
      title: 'Developer AI',
      role: 'Code & Build',
      description: 'Writes clean code matching project guidelines, configures libraries, builds API schemas, and resolves package conflicts.',
      icon: <Terminal className="w-4 h-4 text-[var(--color-accent-secondary)]" />,
      time: 'Phase 4 - Engine Developer',
    },
    {
      id: 'qa-ai',
      title: 'QA AI',
      role: 'Validation & Tests',
      description: 'Deploys integration test rigs, mocks user actions, crawls routes for errors, and writes automated testing scripts.',
      icon: <ShieldCheck className="w-4 h-4 text-[var(--color-accent-primary)]" />,
      time: 'Phase 5 - System Auditor',
    },
    {
      id: 'deployment-ai',
      title: 'Deployment AI',
      role: 'Operations & Host',
      description: 'Manages cloud infrastructure, spins up sandboxes, triggers CI/CD builds, and monitors production health logs.',
      icon: <CloudLightning className="w-4 h-4 text-[var(--color-accent-secondary)]" />,
      time: 'Phase 6 - Cloud Release',
    },
  ];

  return (
    <section id="vision" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
                Long-Term Roadmap
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Building The Future
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#9CA3AF] text-sm md:text-base leading-relaxed"
            >
              My vision is to build an autonomous software ecosystem: a suite of specialized AI-powered agents 
              that collaborate to design, develop, test, and host applications, enabling creators to scale ideas 
              with unprecedented efficiency.
            </motion.p>
          </div>
        </div>

        {/* Minimal Timeline Layout */}
        <div className="relative">
          {/* Vertical line through timeline (hidden on small screen, visible on medium) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-white/[0.05] hidden md:block" />

          <div className="space-y-12">
            {concepts.map((concept, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={concept.id} 
                  className={`flex flex-col md:flex-row items-center justify-center relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Outer Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0F1117] border-2 border-[rgba(var(--color-accent-primary-rgb),0.4)] hidden md:flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)]" />
                  </div>

                  {/* Card Container (Left/Right side) */}
                  <div className="w-full md:w-[calc(50%-40px)] px-0 md:px-4">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <PremiumCard 
                        className={`p-6 border-white/[0.04]`}
                        spotlightColor={isEven ? 'rgba(255, 184, 107, 0.08)' : 'rgba(217, 168, 108, 0.08)'}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                            {concept.icon}
                          </div>
                          <div>
                            <span className="text-[10px] text-[var(--color-accent-primary)] uppercase font-bold tracking-wider block">
                              {concept.time}
                            </span>
                            <h3 className="text-base font-bold text-white tracking-tight">
                              {concept.title}
                            </h3>
                          </div>
                        </div>

                        <span className="inline-block text-[10px] font-semibold text-[#9CA3AF] bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded mb-3">
                          {concept.role}
                        </span>

                        <p className="text-xs text-[#9CA3AF] leading-relaxed">
                          {concept.description}
                        </p>
                      </PremiumCard>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="w-full md:w-[calc(50%-40px)] hidden md:block" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
