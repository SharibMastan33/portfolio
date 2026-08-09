import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { PremiumCard } from '../components/PremiumCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, X, Plus } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  rating: number;
  comment: string;
  project: string;
  isCustom?: boolean;
}

const DEFAULT_REVIEWS: Review[] = [];

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [project, setProject] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load reviews from localStorage + defaults
  useEffect(() => {
    const saved = localStorage.getItem('client_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        setReviews([...DEFAULT_REVIEWS, ...parsed]);
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
      }
    } else {
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !role || !project || !comment) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: Review = {
        name,
        role,
        rating,
        comment,
        project,
        isCustom: true,
      };

      const saved = localStorage.getItem('client_reviews');
      let customReviews: Review[] = [];
      if (saved) {
        try {
          customReviews = JSON.parse(saved) as Review[];
        } catch (e) {
          customReviews = [];
        }
      }
      
      const updatedCustom = [...customReviews, newReview];
      localStorage.setItem('client_reviews', JSON.stringify(updatedCustom));
      setReviews([...DEFAULT_REVIEWS, ...updatedCustom]);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setName('');
      setRole('');
      setProject('');
      setRating(5);
      setComment('');

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
      }, 1500);
    }, 1200);
  };

  return (
    <section id="reviews" className="py-24 px-6 relative z-10 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Write Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-primary)] font-semibold mb-3 block">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Client Reviews
            </h2>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Here is what clients and project managers say about working with me, or write your own feedback using the form.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/[0.08] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)] hover:bg-[rgba(var(--color-accent-primary-rgb),0.05)] text-white text-xs font-semibold tracking-wide transition-all duration-300 w-fit cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[var(--color-accent-primary)]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        {reviews.length === 0 ? (
          <div className="w-full">
            <PremiumCard className="p-12 text-center flex flex-col items-center justify-center border-white/[0.04] bg-white/[0.01]" isInteractive={false}>
              <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-4 text-[#9CA3AF]">
                <Quote className="w-5 h-5 opacity-40 text-[var(--color-accent-primary)]" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">No reviews yet</h3>
              <p className="text-xs text-[#9CA3AF] max-w-sm mb-6 leading-relaxed">
                Be the first to share your experience working with me! Click the "Write a Review" button above to submit your feedback.
              </p>
            </PremiumCard>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={`${review.name}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="col-span-1"
              >
                <PremiumCard className="h-full p-8 flex flex-col justify-between relative overflow-hidden" spotlightColor="rgba(var(--color-accent-primary-rgb), 0.08)">
                  {/* Quote Icon Background */}
                  <div className="absolute -top-4 -right-4 text-white/[0.01] pointer-events-none">
                    <Quote className="w-24 h-24 stroke-[3]" />
                  </div>

                  <div className="space-y-6">
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[var(--color-accent-primary)] text-[var(--color-accent-primary)]" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-[#9CA3AF] text-sm leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                        {review.name}
                        {review.isCustom && (
                          <span className="text-[8px] bg-white/[0.05] border border-white/10 px-1.5 py-0.5 rounded text-white/50 font-normal">New</span>
                        )}
                      </h4>
                      <p className="text-[10px] text-white/50 font-medium tracking-wide mt-0.5">
                        {review.role}
                      </p>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--color-accent-primary)] bg-[rgba(var(--color-accent-primary-rgb),0.08)] px-2 py-1 rounded font-bold">
                      {review.project}
                    </span>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#171A21] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.05] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Write a Review</h3>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">Share your experience working with me.</p>
                </div>
                <button
                  disabled={isSubmitting}
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Grid Inputs (Name & Role) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-white/90 uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting || submitSuccess}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-xs focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-white/90 uppercase tracking-wide">Your Role / Designation</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting || submitSuccess}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. CTO, TechCorp"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-xs focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Category */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-white/90 uppercase tracking-wide">Project Category</label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting || submitSuccess}
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="e.g. Website Development, AI Integration"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-xs focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] transition-colors"
                  />
                </div>

                {/* Star Rating Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-white/90 uppercase tracking-wide block">Rating</label>
                  <div className="flex gap-2 py-1">
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const isHighlighted = (hoveredRating !== null ? hoveredRating : rating) >= starValue;
                      return (
                        <button
                          key={starValue}
                          type="button"
                          disabled={isSubmitting || submitSuccess}
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoveredRating(starValue)}
                          onMouseLeave={() => setHoveredRating(null)}
                          className="p-1 -m-1 transition-transform hover:scale-110 cursor-pointer disabled:cursor-not-allowed"
                        >
                          <Star
                            className={`w-6 h-6 transition-all duration-300 ${
                              isHighlighted 
                                ? 'fill-[var(--color-accent-primary)] text-[var(--color-accent-primary)] drop-shadow-[0_0_8px_rgba(var(--color-accent-primary-rgb),0.3)]'
                                : 'text-[#9CA3AF]/40 hover:text-[#9CA3AF]/80'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Review Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-white/90 uppercase tracking-wide">Review Comment</label>
                  <textarea
                    rows={4}
                    required
                    disabled={isSubmitting || submitSuccess}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe your collaboration, details, or outcomes..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1117] border border-white/[0.06] text-white text-xs focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] resize-none transition-colors"
                  />
                </div>

                {/* Form Footer Action */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Submit Review</span>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="text-xs text-[#06D6A0] font-semibold flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06D6A0] animate-pulse" />
                        <span>Review posted successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
