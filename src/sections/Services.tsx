import { PremiumCard } from '../components/PremiumCard';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, BrainCircuit, Compass, Flame } from 'lucide-react';

export const Services = () => {
  const servicesList = [
    {
      title: 'Website Development',
      description: 'Modern, high-performance websites and rich web applications built on clean architectural foundations.',
      icon: <Laptop className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform native mobile applications crafted with Expo and React Native for smooth touch interactions.',
      icon: <Smartphone className="w-5 h-5 text-[var(--color-accent-secondary)]" />,
      accent: 'rgba(var(--color-accent-secondary-rgb), 0.08)',
    },
    {
      title: 'AI Integrations',
      description: 'Gemini-powered systems, custom RAG integrations, LLM orchestration, and smart pipeline automation.',
      icon: <BrainCircuit className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
    {
      title: 'UI/UX Design',
      description: 'Premium user interfaces and cohesive design systems that balance visual elegance with intuitive user flow.',
      icon: <Compass className="w-5 h-5 text-[var(--color-accent-secondary)]" />,
      accent: 'rgba(var(--color-accent-secondary-rgb), 0.08)',
    },
    {
      title: 'Startup MVP Development',
      description: 'Rapid development of lean, startup-ready products to validate ideas quickly without compromising on clean engineering.',
      icon: <Flame className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              What I Build
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              Engineered software services designed to accelerate product ideas from design canvas to scale.
            </p>
          </motion.div>
        </div>

        {/* Services Grid (Bento Grid Layout) */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-8">
          {servicesList.map((service, idx) => {
            // Bento spans mapping:
            // Mobile: idx 0 (Web) spans 2; others span 1.
            // Tablet (md): all span 3 (creates 2 equal columns).
            // Desktop (lg): idx 0,1,2 span 2 (3 equal cols); idx 3,4 span 3 (2 equal cols).
            let spanClass = 'col-span-2 md:col-span-3';
            if (idx === 0 || idx === 1 || idx === 2) {
              spanClass = 'col-span-2 md:col-span-3 lg:col-span-2';
            } else {
              spanClass = 'col-span-2 md:col-span-3 lg:col-span-3';
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={spanClass}
              >
                <PremiumCard 
                  className="h-full p-5 md:p-8 flex flex-col justify-between"
                  spotlightColor={service.accent}
                >
                  <div className="space-y-6">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
