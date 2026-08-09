import { motion } from 'framer-motion';

interface SkillRow {
  category: string;
  items: string[];
  description: string;
}

const skillRows: SkillRow[] = [
  {
    category: 'Data Annotation',
    items: ['3D Cuboid Labeling', '2D Polygon Annotation', 'Video Annotation', 'Bounding Box Annotation', 'Object Tracking', 'Quality Assurance (QA)', 'LiDAR Annotation'],
    description: 'Expertise in high-fidelity spatial data annotation, labeling datasets for autonomous mobility systems, and conducting accuracy audits.',
  },
  {
    category: 'Frontend & Database',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS v4', 'Framer Motion', 'Next.js', 'React Vite', 'MongoDB', 'MySQL'],
    description: 'Designing ultra-responsive, animated interfaces and client applications integrated with structured and unstructured storage engines.',
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Python', 'Java', 'CRUD Operations', 'Spring Boot Java', 'Maven'],
    description: 'Engineering secure endpoints, server architectures, CRUD logic, and enterprise API controllers.',
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'AWS EC2', 'Render', 'Vercel', 'CI/CD', 'Git & GitHub', 'Firebase', 'Hostinger Hosting'],
    description: 'Handling environments containerization, continuous integration workflows, and production deployments.',
  },
  {
    category: 'Tools & AI Platforms',
    items: ['VS Code', 'Figma', 'Kubernetes', 'ChatGPT', 'Gemini', 'Claude', 'GT Studio', 'Supervisely', 'Ango Hub', 'Ango PCT', 'Respo Annotation'],
    description: 'Using professional design suites, local compilers, cloud containers, and LLM generative developer systems.',
  },
];

export const EditorialSkills = () => {
  return (
    <section id="skills" className="py-32 px-6 sm:px-12 bg-[#F8F8F5] relative border-b border-[#DDDDD8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Title Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
            <span className="text-[10px] font-bold tracking-widest text-[#1A73E8] uppercase block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#202124] uppercase leading-[1.05]">
              What I Work With
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-6 leading-relaxed font-medium">
              Developing modern interfaces, writing optimized databases, and engineering robust, semantic dataset annotation tags.
            </p>
          </div>

          {/* Rows List */}
          <div className="lg:col-span-8 flex flex-col">
            {skillRows.map((row, idx) => (
              <div key={idx} className="relative py-8 group select-none">
                {/* Border line drawing from left to right */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                  className="absolute top-0 left-0 right-0 h-[1.2px] bg-[#DDDDD8] origin-left"
                />

                {/* Main Row Content wrapper moving on hover */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#202124] tracking-tight">
                      {row.category}
                    </h3>
                    <span className="text-[10px] font-mono text-[#6B6B6B]/60 uppercase">
                      CAT_0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[#6B6B6B] text-xs leading-relaxed max-w-xl">
                    {row.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {row.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold text-[#202124] border border-[#DDDDD8] bg-[#DDDDD8]/20 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
            
            {/* Ending bottom border line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="w-full h-[1.2px] bg-[#DDDDD8] origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
