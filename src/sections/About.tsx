import { PremiumCard } from '../components/PremiumCard';
import { motion } from 'framer-motion';
import { Cpu, Award, Zap, BookOpen } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      value: '15+',
      label: 'Projects Built',
      description: 'Production-ready web & mobile systems.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      value: '20+',
      label: 'Technologies Used',
      description: 'Languages, frameworks, and databases.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      value: '10+',
      label: 'AI Integrations',
      description: 'LLM agents and automated workflows.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      value: 'Always',
      label: 'Learning Journey',
      description: 'Continuous growth in software engineering.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* DESKTOP LAYOUT (2 Columns) */}
        <div className="hidden md:grid grid-cols-12 gap-16 items-start">
          {/* Biography Text */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-4 block">
                Founders Identity
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-[#9CA3AF] leading-relaxed text-base">
                <p>
                  I am a Full-Stack Developer and Data Annotator skilled in ReactJS, Spring Boot, FastAPI, Quality Assurance, and AI data labeling. 
                  I am deeply passionate about building scalable applications, ensuring high data accuracy, and delivering premium technology solutions.
                </p>
                <p>
                  My work is driven by a commitment to code craftsmanship, responsive user interface design, and robust backend systems.
                  Instead of just writing code, I focus on constructing complete, production-ready digital products that load instantly and provide seamless user experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Statistics Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <PremiumCard className="h-full flex flex-col justify-between p-6">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
                        {stat.icon}
                      </div>
                      <span className="text-3xl font-bold text-white tracking-tight block mb-2">
                        {stat.value}
                      </span>
                      <span className="text-sm font-semibold text-white tracking-wide block mb-1">
                        {stat.label}
                      </span>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE BENTO GRID LAYOUT */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {/* Biography Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2"
          >
            <PremiumCard className="p-6 border-white/[0.05]" isInteractive={false}>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-2 block">
                Founders Identity
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                About Me
              </h2>
              <div className="space-y-4 text-xs text-[#9CA3AF] leading-relaxed">
                <p>
                  I am a Full-Stack Developer and Data Annotator skilled in ReactJS, Spring Boot, FastAPI, Quality Assurance, and AI data labeling. 
                  I am passionate about building scalable applications, ensuring high data accuracy, and delivering premium technology solutions.
                </p>
                <p>
                  My work is driven by a commitment to code craftsmanship, responsive user interface design, and robust backend systems.
                  Instead of just writing code, I focus on constructing complete, production-ready digital products that load instantly.
                </p>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Stats Cards in Bento Layout */}
          {stats.map((stat, idx) => (
            <motion.div
              key={`mobile-stat-${stat.label}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="col-span-1"
            >
              <PremiumCard className="h-full p-4 flex flex-col justify-center items-center text-center border-white/[0.04]" isInteractive={false}>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight block mb-0.5">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium text-[#9CA3AF] tracking-wide block">
                    {stat.label}
                  </span>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
