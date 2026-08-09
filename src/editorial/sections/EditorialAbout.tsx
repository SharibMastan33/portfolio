import { motion } from 'framer-motion';
import { DataAnnotationCloud } from '../components/DataAnnotationCloud';

export const EditorialAbout = () => {
  const line1 = "BUILDING";
  const line2 = "DIGITAL";
  const line3 = "SYSTEMS.";

  const revealVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="about" className="py-32 px-6 sm:px-12 bg-[#F8F8F5] relative border-b border-[#DDDDD8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Biography Statement */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#1A73E8] uppercase block mb-3">
                Background
              </span>
              
              {/* Oversized Statement Staggered */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="text-4xl sm:text-6xl font-black tracking-tight text-[#202124] leading-[0.95]"
              >
                <div className="overflow-hidden h-fit py-1">
                  <motion.div variants={revealVariants}>{line1}</motion.div>
                </div>
                <div className="overflow-hidden h-fit py-1">
                  <motion.div variants={revealVariants}>{line2}</motion.div>
                </div>
                <div className="overflow-hidden h-fit py-1">
                  <motion.div variants={revealVariants}>{line3}</motion.div>
                </div>
              </motion.div>
            </div>

            {/* Biography paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6 text-sm text-[#6B6B6B] leading-relaxed font-medium"
            >
              <p>
                I am a Full-Stack Developer and Data Annotator skilled in ReactJS, Spring Boot, FastAPI, Quality Assurance, and AI data labeling. I am deeply passionate about building scalable applications, ensuring high data accuracy, and delivering premium technology solutions.
              </p>
              <p>
                My work is driven by a commitment to code craftsmanship, responsive user interface design, and robust backend systems. Instead of just writing code, I focus on constructing complete, production-ready digital products that load instantly and provide seamless user experiences.
              </p>
              
              {/* Education block */}
              <div className="pt-6 border-t border-[#DDDDD8] space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-[#202124] uppercase block">
                  Education & Milestones
                </span>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#202124]">
                      Diploma In Computer Science & Engineering
                    </h4>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">
                      D.Banumaiah polytechnic college • 2021 — 2025 • CGPA 7.8/10
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#202124]">
                      Full Stack Web Development (Internship)
                    </h4>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">
                      Computer Paradise • 2024 — 2025
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic point-cloud annotation */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-36">
            <span className="text-[10px] font-mono tracking-widest text-[#6B6B6B] uppercase block">
              EXPERIMENT_08 // LIDAR POINT CLOUD ASSEMBLY
            </span>
            <DataAnnotationCloud />
            <p className="text-[11px] text-[#6B6B6B] font-mono leading-relaxed mt-2 text-right">
              * Hover canvas to apply vector magnetic displacement. Scroll out to reset coordinates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
