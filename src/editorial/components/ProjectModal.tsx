import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  comingSoon?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#202124]/30 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
    >
      <motion.div
        initial={{ y: 40, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#F8F8F5] border border-[#DDDDD8] rounded-[28px] overflow-hidden shadow-2xl p-8 sm:p-10 relative cursor-default"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Details"
          className="absolute top-6 right-6 p-2 rounded-full border border-[#DDDDD8] hover:bg-[#202124] hover:text-[#F8F8F5] text-[#202124] transition-all duration-300 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#6B6B6B] uppercase">
              {project.year || '2026'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202124] mt-1">
              {project.name}
            </h3>
          </div>

          <p className="text-[#6B6B6B] text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2">
            <h4 className="text-[10px] font-bold tracking-widest text-[#202124] uppercase">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#6B6B6B] bg-[#DDDDD8]/30 px-3 py-1 rounded-full border border-[#DDDDD8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.comingSoon ? (
            <div className="inline-block px-4 py-2 rounded-lg bg-[#DDDDD8]/40 border border-[#DDDDD8] text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
              Coming Soon
            </div>
          ) : (
            <div className="flex gap-4 pt-4 border-t border-[#DDDDD8]">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1A73E8] hover:bg-[#155cb0] text-[#F8F8F5] text-xs font-semibold tracking-wider transition-colors duration-300"
                >
                  Visit Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#DDDDD8] hover:bg-[#202124] hover:text-[#F8F8F5] text-[#202124] text-xs font-semibold tracking-wider transition-colors duration-300"
                >
                  Source Code
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
