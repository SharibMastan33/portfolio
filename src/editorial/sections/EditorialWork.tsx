import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, FileText, Utensils, Shield, Droplet, Database, Layout } from 'lucide-react';
import { ProjectModal } from '../components/ProjectModal';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  comingSoon?: boolean;
  categories: string[];
}

const projects: Project[] = [
  {
    id: 'sirius-resume-ai',
    name: 'Sirius Resume AI',
    description: 'An AI-powered resume builder and optimizer that analyzes job listings, highlights target keywords, and drafts tailored resume bullet points using the Gemini API.',
    tech: ['React', 'Gemini API', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://sirius-resume-ai.vercel.app/',
    githubUrl: 'https://github.com/SharibMastan33',
    year: '2026',
    categories: ['ai', 'web'],
  },
  {
    id: 'le-rolls-n-kebabs',
    name: 'Le Rolls n Kebabs',
    description: 'A premium, modern restaurant landing page and digital menu showcasing signature rolls, kebabs, catering packages, and interactive contact systems.',
    tech: ['React', 'JavaScript', 'Vanilla CSS', 'Responsive Layouts'],
    liveUrl: 'https://lerollsnkebabs.netlify.app/',
    githubUrl: 'https://github.com/SharibMastan33',
    year: '2026',
    categories: ['web'],
  },
  {
    id: 'mk-interior',
    name: 'MK Interior Design',
    description: 'A luxury architecture and interior design presentation platform demonstrating premium residential and commercial studio layout concepts with micro-transitions.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://mkinterior-jw.netlify.app/',
    githubUrl: '#',
    year: '2026',
    categories: ['web'],
  },
  {
    id: 'car-comparison',
    name: 'Car Comparison Platform',
    description: 'An interactive vehicle specification analytical database for comparing automotive models, metrics, engine stats, and pricing dashboards.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
    categories: ['web'],
  },
  {
    id: 'e-voter',
    name: 'E-Voter System',
    description: 'A secure electronic voting application utilizing SHA-256 cryptographic hashes to guarantee voter authenticity, transaction receipts, and audit trail safety.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Cryptography'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
    categories: ['web', 'experiments'],
  },
  {
    id: 'recipe-gen',
    name: 'AI Recipe Generator',
    description: 'An intelligent recipe formulation utility connected to the Gemini API to structure gourmet ingredients, instructions, and macro logs based on fridge items.',
    tech: ['React', 'Gemini API', 'FastAPI', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
    categories: ['ai', 'experiments'],
  },
  {
    id: 'water-management',
    name: 'Water Management System',
    description: 'A mobile utility tool designed to map local water pipeline health, billing metrics, municipal consumption logs, and automated leak detection notifications.',
    tech: ['React Native', 'Expo', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
    categories: ['web'],
  },
  {
    id: 'ai-company-os',
    name: 'AI Company OS',
    description: 'An autonomous multi-agent software operating system that coordinates specialised AI developer, designer, and QA agents to manage project lifecycles.',
    tech: ['React', 'TypeScript', 'LangChain', 'FastAPI'],
    year: 'Coming Soon',
    comingSoon: true,
    categories: ['ai', 'experiments'],
  },
];

const ProjectVisual = ({ id }: { id: string }) => {
  const containerClass = "w-full h-full bg-[#DDDDD8]/10 flex items-center justify-center p-6 select-none";
  const boxClass = "w-full h-full border border-[#DDDDD8] rounded-[20px] flex flex-col justify-between p-4 relative overflow-hidden bg-[#F8F8F5]/50";

  switch (id) {
    case 'sirius-resume-ai':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>RESUME OPTIMIZER // GEMINI</span>
              <span>SIRIUS_AI</span>
            </div>
            <div className="space-y-2.5 max-w-[130px] mx-auto w-full my-auto flex flex-col">
              <div className="h-1.5 w-full bg-[#DDDDD8] rounded-full" />
              <div className="h-1.5 w-[85%] bg-[#DDDDD8] rounded-full" />
              <div className="h-1.5 w-[90%] bg-[#1A73E8]/30 rounded-full" />
              <div className="h-1.5 w-[65%] bg-[#DDDDD8] rounded-full" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">01 // CONTEXT</span>
          </div>
        </div>
      );
    case 'le-rolls-n-kebabs':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>RESTAURANT // DIGITAL MENU</span>
              <span>L R N K</span>
            </div>
            <div className="w-16 h-16 border border-[#DDDDD8] rounded-full mx-auto my-auto flex items-center justify-center relative">
              <Utensils className="w-6 h-6 text-[#1A73E8]/80" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">02 // DIGITAL PRODUCTS</span>
          </div>
        </div>
      );
    case 'mk-interior':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>M K  I N T E R I O R</span>
              <span>ARCH_DESIGN</span>
            </div>
            <div className="w-24 h-24 border border-[#DDDDD8] rounded-full mx-auto my-auto flex items-center justify-center relative">
              <div className="w-16 h-16 border border-[#DDDDD8] rounded-full" />
              <div className="absolute w-[1px] h-full bg-[#DDDDD8]" />
              <div className="absolute h-[1px] w-full bg-[#DDDDD8]" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">03 // LUXURY CONCEPT</span>
          </div>
        </div>
      );
    case 'car-comparison':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>ANALYTICAL METRICS</span>
              <span>VEHICLE_COMP</span>
            </div>
            <div className="w-full flex justify-center gap-4 my-auto items-end h-16 max-w-[140px] mx-auto">
              <div className="w-6 bg-[#DDDDD8] h-[55%] rounded-t-sm" />
              <div className="w-6 bg-[#1A73E8]/40 h-[90%] rounded-t-sm" />
              <div className="w-6 bg-[#DDDDD8] h-[35%] rounded-t-sm" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">04 // ANALYTICS</span>
          </div>
        </div>
      );
    case 'e-voter':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>BALLOT CRYPTO SECURITY</span>
              <span>SHA_256</span>
            </div>
            <div className="w-16 h-16 border border-[#DDDDD8] rounded-[16px] mx-auto my-auto flex items-center justify-center relative bg-[#1A73E8]/5">
              <Shield className="w-7 h-7 text-[#1A73E8]" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">05 // CRYPTOGRAPHY</span>
          </div>
        </div>
      );
    case 'recipe-gen':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>INGREDIENTS SCAN</span>
              <span>GEMINI_RECIPE</span>
            </div>
            <div className="w-14 h-14 border border-[#DDDDD8] rounded-xl mx-auto my-auto flex items-center justify-center relative rotate-45">
              <Sparkles className="w-6 h-6 text-[#1A73E8] -rotate-45" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">06 // AI_GENERATION</span>
          </div>
        </div>
      );
    case 'water-management':
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>MUNICIPAL INFRASTRUCTURE</span>
              <span>WATER_OS</span>
            </div>
            <div className="w-16 h-16 border border-[#DDDDD8] rounded-full mx-auto my-auto flex items-center justify-center relative">
              <Droplet className="w-6 h-6 text-[#1A73E8]" />
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">07 // MOBILE_APP</span>
          </div>
        </div>
      );
    default:
      return (
        <div className={containerClass}>
          <div className={boxClass}>
            <div className="flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]">
              <span>MULTI-AGENT ORCHESTRATION</span>
              <span>AI_COMPANY_OS</span>
            </div>
            <div className="w-full max-w-[120px] grid grid-cols-3 gap-3 my-auto mx-auto items-center justify-center h-12">
              <div className="w-6 h-6 border border-[#DDDDD8] rounded-md flex items-center justify-center"><Database className="w-3.5 h-3.5 text-[#6B6B6B]" /></div>
              <div className="w-6 h-6 border border-[#1A73E8] rounded-md flex items-center justify-center bg-[#1A73E8]/5"><Layout className="w-3.5 h-3.5 text-[#1A73E8]" /></div>
              <div className="w-6 h-6 border border-[#DDDDD8] rounded-md flex items-center justify-center"><FileText className="w-3.5 h-3.5 text-[#6B6B6B]" /></div>
            </div>
            <span className="text-[7px] font-mono text-[#6B6B6B]/60 text-right">08 // MULTI_AGENTS</span>
          </div>
        </div>
      );
  }
};

export const EditorialWork = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'experiments'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: Array<{ label: string; value: typeof filter }> = [
    { label: 'Featured', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'AI', value: 'ai' },
    { label: 'Experiments', value: 'experiments' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true; // Show all for standard curated view
    return p.categories.includes(filter);
  });

  return (
    <section id="projects" className="py-32 px-6 sm:px-12 bg-[#F8F8F5] relative border-b border-[#DDDDD8]">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-widest text-[#1A73E8] uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#202124] leading-tight">
            PRODUCTS & SYSTEMS
          </h2>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2.5 mt-8 border-b border-[#DDDDD8] pb-6">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                data-cursor="text"
                className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                  filter === f.value
                    ? 'bg-[#202124] border-[#202124] text-[#F8F8F5]'
                    : 'bg-transparent border-[#DDDDD8] text-[#6B6B6B] hover:border-[#202124] hover:text-[#202124]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Alternate Showcase list */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual block */}
                <div
                  onClick={() => setSelectedProject(project)}
                  data-cursor="project"
                  className={`lg:col-span-7 aspect-[16/10] overflow-hidden rounded-[28px] border border-[#DDDDD8] cursor-pointer group relative shadow-sm ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ProjectVisual id={project.id} />
                  </motion.div>
                </div>

                {/* Text description details block */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#6B6B6B]">
                      {project.year || '2026'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#202124] mt-1">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-[#6B6B6B] text-sm leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-[#6B6B6B] bg-[#DDDDD8]/30 px-2 py-0.5 rounded border border-[#DDDDD8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor="text"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A73E8] hover:text-[#155cb0] transition-colors tracking-wide mt-2 text-left w-fit cursor-pointer"
                  >
                    VIEW PROJECT DETAILS
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details overlay view modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
