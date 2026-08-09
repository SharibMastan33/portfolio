import { PremiumCard } from '../components/PremiumCard';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Shield, Car, Database, Sparkles, Droplet, LayoutTemplate, Utensils, FileText } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects = () => {
  const otherProjects = [
    {
      id: 'sirius-resume-ai',
      name: 'Sirius Resume AI',
      description: 'An AI-powered resume builder and optimizer that analyzes jobs, highlights target keywords, and drafts tailored resume bullet points.',
      tech: ['React', 'Gemini API', 'TypeScript', 'Tailwind CSS'],
      icon: <FileText className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      liveUrl: 'https://sirius-resume-ai.vercel.app/',
      githubUrl: 'https://github.com/SharibMastan33',
    },
    {
      id: 'le-rolls-n-kebabs',
      name: 'Le Rolls n Kebabs',
      description: 'A premium, modern restaurant landing page and digital menu showcasing signature rolls, kebabs, catering options, and contact systems.',
      tech: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: <Utensils className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      liveUrl: 'https://lerollsnkebabs.netlify.app/',
      githubUrl: 'https://github.com/SharibMastan33',
    },
    {
      id: 'car-comparison',
      name: 'Car Comparison Platform',
      description: 'An interactive analytical platform for comparing vehicle specifications, pricing, performance metrics, and ownership costs with dynamic charts.',
      tech: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
      icon: <Car className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'e-voter',
      name: 'E-Voter System',
      description: 'A secure, authenticated, and decentralized electronic voting application utilizing cryptographic hashing to ensure ballot integrity and verification.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Cryptography'],
      icon: <Shield className="w-5 h-5 text-[var(--color-accent-secondary)]" />,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'recipe-gen',
      name: 'Automatic Recipe Generator',
      description: 'An AI-driven recipe generation tool integrated with Gemini to propose gourmet dishes, preparation steps, and nutritional facts based on available ingredients.',
      tech: ['React', 'Gemini API', 'FastAPI', 'Tailwind CSS'],
      icon: <Sparkles className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'water-management',
      name: 'Water Management Application',
      description: 'A comprehensive mobile utility application designed to track municipal water usage, payment histories, billing data, and leak detection alerts.',
      tech: ['React Native', 'Expo', 'Firebase'],
      icon: <Droplet className="w-5 h-5 text-[var(--color-accent-secondary)]" />,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'ai-company-os',
      name: 'AI Company OS',
      description: 'An autonomous multi-agent operating system that coordinates AI agents to manage project lifecycles, dev operations, and designer workflows.',
      tech: ['React', 'TypeScript', 'LangChain', 'FastAPI'],
      icon: <Database className="w-5 h-5 text-[var(--color-accent-primary)]" />,
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
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
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Featured Work
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              A curated collection of websites, apps, and digital systems built with precision.
            </p>
          </motion.div>
        </div>

        {/* 1. FEATURED PROJECT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Card Wrapper with stronger warm lighting (focal point) */}
          <PremiumCard 
            className="p-5 sm:p-8 md:p-12 border-[rgba(var(--color-accent-primary-rgb),0.15)] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)]"
            spotlightColor="rgba(var(--color-accent-primary-rgb), 0.12)"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Project Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(var(--color-accent-primary-rgb),0.1)] border border-[rgba(var(--color-accent-primary-rgb),0.2)] text-[10px] uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Product</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  MK Interior Design Platform
                </h3>
                
                <p className="text-[#9CA3AF] text-base leading-relaxed">
                  A premium interior design platform showcasing elegant residential and commercial interior concepts. 
                  Focuses on high-end modern aesthetics, ultra-responsive grid layouts, and professional branding 
                  for design studios and architects.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'UI Design'].map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs text-[#9CA3AF] bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://mkinterior-jw.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-black font-semibold text-xs transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/[0.08] hover:bg-white/[0.08] text-white font-medium text-xs transition-all duration-300"
                  >
                    View Source
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Interactive CSS Mockup */}
              <div className="lg:col-span-6 w-full aspect-[4/3] rounded-xl bg-[#0F1117] border border-white/[0.06] overflow-hidden p-4 relative group/mockup">
                
                {/* Browser bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <div className="text-[10px] text-[#9CA3AF]/60 bg-white/[0.02] border border-white/[0.04] px-4 py-0.5 rounded-md w-1/2 text-center select-none truncate">
                    mkinterior-jw.netlify.app
                  </div>
                  <div className="w-6" />
                </div>

                 {/* Dashboard layout simulator */}
                <div className="h-[calc(100%-40px)] flex flex-col justify-between p-2.5 sm:p-3 bg-gradient-to-br from-[#171A21] to-[#0F1117] rounded-lg border border-white/[0.02] relative overflow-hidden">
                  
                  {/* Backdrop glowing lines to look like an interior layout */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <div className="w-[1px] h-full bg-[var(--color-accent-primary)]" />
                    <div className="h-[1px] w-full bg-[var(--color-accent-primary)]" />
                    <div className="w-2/3 h-2/3 border border-[var(--color-accent-primary)] rounded-full" />
                  </div>

                  {/* Header mock */}
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <span className="text-[8px] sm:text-[10px] font-bold text-white tracking-widest uppercase">M K  I N T E R I O R</span>
                    <span className="text-[7px] sm:text-[8px] text-[#9CA3AF] border border-white/10 px-1.5 py-0.5 rounded">STUDIO</span>
                  </div>

                  {/* Main concept mockup */}
                  <div className="grid grid-cols-12 gap-2 sm:gap-3 flex-grow">
                    <div className="col-span-7 rounded-md bg-[#0F1117] border border-white/[0.04] p-2 sm:p-3 flex flex-col justify-between relative overflow-hidden group-hover/mockup:border-[rgba(var(--color-accent-primary-rgb),0.2)] transition-all duration-500">
                      <div className="space-y-1">
                        <div className="h-1 w-10 sm:h-1.5 sm:w-16 bg-[rgba(var(--color-accent-primary-rgb),0.3)] rounded" />
                        <div className="h-2.5 w-24 sm:h-3 sm:w-32 bg-white/70 rounded" />
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="h-8 sm:h-12 w-full rounded bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                          <span className="text-[7px] sm:text-[8px] text-[#9CA3AF] text-center px-1 truncate">Minimalist Living</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-5 flex flex-col gap-2 sm:gap-3">
                      <div className="flex-1 rounded-md bg-[#0F1117]/80 border border-white/[0.04] p-1.5 sm:p-2 flex flex-col justify-between">
                        <div className="h-1 w-8 sm:w-12 bg-white/30 rounded" />
                        <div className="h-6 sm:h-8 w-full bg-[rgba(var(--color-accent-primary-rgb),0.05)] rounded flex items-center justify-center text-[6px] sm:text-[7px] text-[var(--color-accent-primary)]">
                          Residential
                        </div>
                      </div>
                      <div className="flex-1 rounded-md bg-[#0F1117]/80 border border-white/[0.04] p-1.5 sm:p-2 flex flex-col justify-between">
                        <div className="h-1 w-6 sm:w-8 bg-white/30 rounded" />
                        <div className="h-6 sm:h-8 w-full bg-white/[0.01] border border-white/[0.06] rounded flex items-center justify-center text-[6px] sm:text-[7px] text-[#9CA3AF]">
                          Commercial
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom mock bar */}
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/[0.03] text-[6px] sm:text-[7px] text-[#9CA3AF]">
                    <span>© 2026 Concepts</span>
                    <span className="text-[var(--color-accent-primary)] font-semibold flex items-center gap-0.5">Explore Spaces <ArrowUpRight className="w-1.5 h-1.5 sm:w-2 sm:h-2" /></span>
                  </div>

                </div>

              </div>

            </div>
          </PremiumCard>
        </motion.div>

        {/* 2. OTHER PROJECTS GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="col-span-2 md:col-span-1"
            >
              <PremiumCard className="h-full flex flex-col justify-between p-5 md:p-6">
                <div>
                  
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                      {project.icon || <LayoutTemplate className="w-5 h-5 text-[var(--color-accent-primary)]" />}
                    </div>
                    {project.comingSoon ? (
                      <span className="text-[8px] uppercase tracking-widest text-[var(--color-accent-primary)] bg-[rgba(var(--color-accent-primary-rgb),0.1)] border border-[rgba(var(--color-accent-primary-rgb),0.2)] px-2 py-0.5 rounded-md font-bold">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[8px] uppercase tracking-wider text-[#9CA3AF] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]">
                        Complete
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                    {project.name}
                  </h4>

                  {/* Project Description */}
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech and Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-[#9CA3AF]/80 bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <div className="flex items-center gap-3 pt-2 border-t border-white/[0.03]">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1 text-[11px] font-semibold text-[var(--color-accent-primary)] hover:text-white transition-colors duration-300"
                      >
                        Live Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      
                      <span className="text-white/10 text-xs">|</span>
                      
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-[11px] font-medium text-[#9CA3AF] hover:text-white transition-colors duration-300"
                      >
                        Source Code
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
