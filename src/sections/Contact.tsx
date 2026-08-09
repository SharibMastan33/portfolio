import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { PremiumCard } from '../components/PremiumCard';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate premium submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const socials = [
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-4 h-4" />,
      url: 'https://github.com/SharibMastan33',
      color: 'hover:text-[#FFFFFF] hover:border-[#FFFFFF]/25',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/mohammed-sharib-mastan/',
      color: 'hover:text-[#0077B5] hover:border-[#0077B5]/25',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-4 h-4" />,
      url: 'https://www.instagram.com/_mohammed_sharib_/',
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/25',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      url: 'https://wa.me/918618057312',
      color: 'hover:text-[#25D366] hover:border-[#25D366]/25',
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:mohammed@sharibmastan.in',
      color: 'hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/25',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
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
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Work With Me
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
              Let’s collaborate on websites, scalable backends, automated pipelines, or strategic startup concepts.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PremiumCard className="p-8 border-white/[0.04]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-white/95 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] focus:ring-1 focus:ring-[rgba(var(--color-accent-primary-rgb),0.2)] transition-all duration-300 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-white/95 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] focus:ring-1 focus:ring-[rgba(var(--color-accent-primary-rgb),0.2)] transition-all duration-300 disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-white/95 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] focus:ring-1 focus:ring-[rgba(var(--color-accent-primary-rgb),0.2)] transition-all duration-300 resize-none disabled:opacity-50"
                      placeholder="Describe your project, timeline, or idea..."
                    />
                  </div>

                  {/* Form Submit / State */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(var(--color-accent-primary-rgb),0.2)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center gap-2 text-[#25D366]"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-medium">Message sent successfully!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </form>
              </PremiumCard>
            </motion.div>
          </div>

          {/* Right Column: Social Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  Let’s build something together
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Have an exciting startup concept, a role vacancy, or a complex software system that needs building? 
                  Use the contact form, email me directly, or message me via WhatsApp. I normally reply within a few hours.
                </p>
              </div>

              {/* Social links grid (Bento Style) */}
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-[#171A21] border border-white/[0.04] text-xs text-[#9CA3AF] font-medium transition-all duration-300 ${social.color} hover:bg-white/[0.02] ${
                      social.name === 'Email' ? 'col-span-2' : 'col-span-1'
                    }`}
                  >
                    <div className="w-7 h-7 rounded bg-white/[0.03] flex items-center justify-center border border-white/[0.05]">
                      {social.icon}
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Minimal Office details */}
              <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.03] space-y-1.5">
                <span className="text-[9px] uppercase tracking-widest text-[var(--color-accent-primary)] font-bold">Office Availability</span>
                <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                  Open for contract work, technical founding roles, and freelance consulting projects. Remote or hybrid.
                </p>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
