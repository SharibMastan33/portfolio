import { PremiumCard } from '../components/PremiumCard';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ShieldCheck, Cpu, GraduationCap } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: 'ZST Outsourcing Services Pvt Ltd',
      role: 'Data Annotation (Full-time)',
      period: 'June 2025 - Present',
      description: 'Specializing in high-fidelity 3D and 2D data annotation pipelines, leading quality audits, and driving domain training for next-generation machine learning and computer vision systems.',
      details: [
        {
          title: '3D LiDAR & 2D Spatial Annotation',
          desc: 'Added precise 3D cuboids and bounding volumes to LiDAR point clouds and camera feeds to train autonomous mobility and self-driving vehicle AI models.',
          icon: <Cpu className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
        {
          title: 'QA Auditing & SME Consultation',
          desc: 'Verified annotation quality as a QA Lead, established accuracy standards, trained annotator groups, and advised on annotation strategy as a Subject Matter Expert.',
          icon: <ShieldCheck className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
        {
          title: 'Corporate Partnership Projects',
          desc: 'Delivered high-volume dataset verification and annotation pipelines for top-tier clients and partners including Telus and iMerit.',
          icon: <Briefcase className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
      ],
      projects: ['Puls', 'Teramesu', 'Soccer', 'OD', 'Motor', 'R3C', 'Granite'],
      tools: ['GT Studio', 'Supervisely', 'Ango Hub', 'Ango PCT', 'Respo Annotation'],
    },
    {
      company: 'Freelance',
      role: 'Web Designer & Developer',
      period: '2025 - Present',
      description: 'Designing and developing high-fidelity responsive websites, landing pages, webapps, and hybrid applications for international businesses and individual clients.',
      details: [
        {
          title: 'Full Stack Engineering',
          desc: 'Building responsive full-stack applications using ReactJS, Spring Boot, FastAPI, MongoDB, and MySQL.',
          icon: <Cpu className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
        {
          title: 'MK Interior Studio',
          desc: 'Designed and built the luxury portfolio website featuring elegant interior concepts, custom styling, and layout controls.',
          icon: <ShieldCheck className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
        {
          title: 'AI Company OS',
          desc: 'Architecting an AI-powered project tracking, task management, and autonomous agent workflow platform (In Progress).',
          icon: <Briefcase className="w-4 h-4 text-[var(--color-accent-primary)]" />,
        },
      ],
      projects: ['MK Interior Website', 'AI Company OS', 'Car Comparison', 'E-Voter System'],
      tools: ['ReactJS', 'Spring Boot', 'FastAPI', 'MongoDB', 'MySQL', 'Framer Motion'],
    },
  ];

  const education = [
    {
      institution: 'Computer Paradise',
      program: 'Full Stack Web Development (Internship)',
      period: 'Year 2024 - 2025',
      description: 'Gained hands-on industry experience building modern, responsive frontends and backend services. Focused on database optimization and standard engineering workflows.',
    },
    {
      institution: 'D.Banumaiah polytechnic college',
      program: 'Diploma In Computer Science & Engineering',
      period: 'Year 2021 - 25',
      description: 'Acquired foundation in computer science principles, algorithms, data structures, and database systems. Completed with a CGPA of 7.8/10.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
              Professional Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Work Experience
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              A record of engineering high-quality AI training datasets and supervising complex annotation workflows.
            </p>
          </motion.div>
        </div>

        {/* Experience Cards Layout */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <PremiumCard className="p-8 md:p-12 relative overflow-hidden">
                {/* Accent glow behind company name */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[rgba(var(--color-accent-primary-rgb),0.02)] rounded-full filter blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.05] pb-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-[var(--color-accent-primary)]" />
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-accent-primary)] tracking-wide mt-1.5 uppercase">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-[#9CA3AF] font-medium tracking-wide w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-accent-primary)]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company Bio */}
                <p className="text-[#9CA3AF] leading-relaxed text-base mb-8 max-w-4xl">
                  {exp.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {exp.details.map((detail) => (
                    <div 
                      key={detail.title} 
                      className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.03] flex flex-col gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                        {detail.icon}
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {detail.title}
                      </h4>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">
                        {detail.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Projects and Tools Metadata footer */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                  {/* Projects Worked */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold block mb-3">
                      Key Projects Contributed
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((proj) => (
                        <span 
                          key={proj}
                          className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.05] text-xs text-white/70 tracking-wide font-medium"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Mastered */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold block mb-3">
                      Annotation Tools / Tech Mastered
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-[rgba(var(--color-accent-primary-rgb),0.04)] border border-[rgba(var(--color-accent-primary-rgb),0.1)] text-xs text-[var(--color-accent-primary)] tracking-wide font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Education & Internships Heading */}
        <div className="flex flex-col items-center text-center mt-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
              Academic Foundations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Education & Internship
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              Formal training and professional internships that shaped my engineering background.
            </p>
          </motion.div>
        </div>

        {/* Education & Internship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="col-span-1"
            >
              <PremiumCard className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[rgba(var(--color-accent-primary-rgb),0.01)] rounded-full filter blur-[50px] pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[var(--color-accent-primary)]" />
                        {edu.program}
                      </h4>
                      <p className="text-xs font-semibold text-[var(--color-accent-primary)] tracking-wide mt-1.5 uppercase">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#9CA3AF] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05] whitespace-nowrap font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
