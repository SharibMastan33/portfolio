import { PremiumCard } from '../components/PremiumCard';
import { motion } from 'framer-motion';
import { Layout, Server, Terminal, Brain, Cloud } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Annotation',
      icon: <Brain className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      skills: ['3D Cuboid Labeling', '2D Polygon Annotation', 'Video Annotation', 'Bounding Box Annotation', 'Object Tracking', 'Quality Assurance (QA)', 'LiDAR Annotation'],
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
    {
      title: 'Frontend & Database',
      icon: <Layout className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS v4', 'Framer Motion', 'Next.js', 'React Vite', 'MongoDB', 'MySQL'],
      accent: 'rgba(var(--color-accent-secondary-rgb), 0.08)',
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      skills: ['FastAPI', 'Python', 'Java', 'CRUD Operations', 'Spring Boot Java', 'Maven'],
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      skills: ['Docker', 'AWS EC2', 'Render', 'Vercel', 'CI/CD', 'Git & GitHub', 'Firebase', 'Hostinger Hosting'],
      accent: 'rgba(var(--color-accent-secondary-rgb), 0.08)',
    },
    {
      title: 'Tools & AI Platforms',
      icon: <Terminal className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      skills: ['VS Code', 'Figma', 'Kubernetes', 'ChatGPT', 'Gemini', 'Claude', 'GT Studio', 'Supervisely', 'Ango Hub', 'Ango PCT', 'Respo Annotation'],
      accent: 'rgba(var(--color-accent-primary-rgb), 0.08)',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              An stack designed to deliver fast, secure, and intelligent applications from inception to deployment.
            </p>
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              className={`col-span-2 ${categoryIdx === 4 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <PremiumCard 
                className="h-full p-5 md:p-8"
                spotlightColor={category.accent}
              >
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#9CA3AF] bg-white/[0.03] px-2 py-0.5 md:px-2.5 md:py-1 rounded-md border border-white/[0.05]">
                    {category.skills.length} Techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (categoryIdx * 0.1) + (skillIdx * 0.05) }}
                      className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-[var(--color-accent-primary)]/[0.03] hover:border-[rgba(var(--color-accent-primary-rgb),0.2)] transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgba(var(--color-accent-primary-rgb),0.6)] group-hover:bg-[var(--color-accent-primary)] transition-colors duration-300" />
                      <span className="text-xs md:text-sm text-[#9CA3AF] group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
