import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! I am Sirius, Sharib's AI assistant. Ask me anything about his technical skills, full-stack projects, AI data annotation experience, or availability for work!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const suggestions = [
    { text: 'What are your core skills?', query: 'skills' },
    { text: 'Tell me about Sirius Resume AI', query: 'sirius' },
    { text: 'What is your data annotation experience?', query: 'annotation' },
    { text: 'Are you available for work?', query: 'work' },
  ];

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase().trim();
    
    // 1. Who are you / What is your name
    if (q.includes('who are you') || q.includes('who are u') || q.includes('what is your name') || q.includes('whats your name') || q.includes('your name') || q.includes('identity')) {
      return "I am Sirius, Mohammed Sharib Mastan's custom AI assistant. I am built to answer queries about his portfolio, his technical skills, and his professional work in Full-Stack Development and AI Data Annotation. Feel free to ask about his projects like Sirius Resume AI!";
    }

    // 2. Greetings (hi, hello, hey, hlo, hy)
    if (/^(hi|hlo|hello|hey|hy|greetings|yo|sup)(\s|$)/.test(q) || q === 'hi' || q === 'hlo' || q === 'hello' || q === 'hey' || q === 'hy') {
      return "Hello! I am Sirius, Sharib's AI assistant. How can I help you today? Ask me about his projects, technical skills, or work availability!";
    }

    // 3. Skills
    if (q.includes('skill') || q.includes('stack') || q.includes('technolog') || q.includes('language') || q.includes('expert')) {
      return "Sharib is a Full Stack Developer & AI Builder. His core skills include:\n\n• Frontend: React, Vite, Tailwind CSS, TypeScript, JavaScript\n• Backend & APIs: FastAPI, Spring Boot (Java), Node.js\n• Databases: MongoDB, MySQL, Firebase\n• DevOps: Docker, Vercel, Cloud platforms\n• Specialized: AI Data Annotation, QA, LiDAR 3D/2D data processing.";
    }
    
    // 4. Data Annotation / ZST / LiDAR / QA / Experience
    if (q.includes('annotation') || q.includes('lidar') || q.includes('zst') || q.includes('qa') || q.includes('experience') || q.includes('job') || q.includes('work history')) {
      return "Sharib has 1 year of experience as a Data Annotator, QA, and Subject Matter Expert (SME) at ZST Outsourcing Services Pvt Ltd. He specializes in:\n\n• LiDAR 3D/2D point cloud and camera projection data pipelines\n• High-precision semantic labeling, object tracking, and quality assurance audits\n• Collaborating with international clients (Telus, iMerit)\n• Projects managed: Soccer, Puls, Teramesu, etc.";
    }

    // 5. Projects (MK Interior, Sirius Resume AI, Le Rolls n Kebabs)
    if (q.includes('project') || q.includes('portfolio') || q.includes('website') || q.includes('build')) {
      if (q.includes('sirius') || q.includes('resume')) {
        return "Sirius Resume AI (https://sirius-resume-ai.vercel.app/) is a live AI-powered resume builder and optimizer. It parses job listings, extracts keywords, and generates tailored resume bullet points using the Gemini API. Built with React, TypeScript, and Tailwind CSS.";
      }
      if (q.includes('interior') || q.includes('mk')) {
        return "MK Interior Design Platform (https://mkinterior-jw.netlify.app/) is a luxury visual layout showcasing architectural and interior design portfolios. It features high-end animations, responsive grids, and matte surface cards.";
      }
      if (q.includes('rolls') || q.includes('kebab') || q.includes('restaurant')) {
        return "Le Rolls n Kebabs (https://lerollsnkebabs.netlify.app/) is a premium digital landing page and menu built with React and CSS for a modern kebab restaurant, complete with catering options and contact systems.";
      }
      return "Some of Sharib's top projects are:\n\n1. Sirius Resume AI (https://sirius-resume-ai.vercel.app/) - AI resume builder\n2. MK Interior Design (https://mkinterior-jw.netlify.app/) - Luxury studio website\n3. Le Rolls n Kebabs (https://lerollsnkebabs.netlify.app/) - Premium restaurant page\n4. AI Company OS - Multi-agent autonomous OS (coming soon!)";
    }

    // 6. Sirius Resume AI specific query
    if (q.includes('sirius')) {
      return "Sirius Resume AI (https://sirius-resume-ai.vercel.app/) is an AI-powered resume builder that utilizes Gemini to extract keywords and draft tailored bullet points. It was built using React, Tailwind CSS, TypeScript, and Framer Motion.";
    }

    // 7. MK Interior Design specific query
    if (q.includes('mk') || q.includes('interior')) {
      return "MK Interior Design Platform (https://mkinterior-jw.netlify.app/) is a luxury website representing a design studio, built using React + Vite, Tailwind CSS, and Framer Motion.";
    }

    // 8. Le Rolls n Kebabs specific query
    if (q.includes('rolls') || q.includes('kebab') || q.includes('restaurant')) {
      return "Le Rolls n Kebabs (https://lerollsnkebabs.netlify.app/) is a restaurant website built using React and CSS, showcasing menu items and event packages.";
    }

    // 9. Availability / Contact / Phone / WhatsApp / Hire
    if (q.includes('hire') || q.includes('availability') || q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('freelance') || q.includes('number')) {
      return "Sharib is currently available for Full-Stack Developer, AI Builder, or Data Annotation QA contract/freelance roles! You can contact him at:\n\n• Email: mohammed@sharibmastan.in\n• Phone & WhatsApp: +91 8618057312\n• You can also use the contact form at the bottom of the page.";
    }

    // 10. AI Company OS / Vision
    if (q.includes('os') || q.includes('future') || q.includes('company') || q.includes('agent') || q.includes('vision')) {
      return "Sharib's vision is building 'AI Company OS', an autonomous multi-agent operating system coordinating AI agents (Project Manager, Designer, Developer, QA) to manage projects and build software products autonomously.";
    }

    return "I'm not fully sure about that detail, but I'd love to connect you with him! You can email him at mohammed@sharibmastan.in or call/WhatsApp at +91 8618057312.";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMsg: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. CHATBOX PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="w-[320px] sm:w-[380px] h-[480px] bg-[#171A21] border border-white/[0.08] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 mr-1 md:mr-0"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#0F1117] border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[rgba(var(--color-accent-primary-rgb),0.15)] border border-[rgba(var(--color-accent-primary-rgb),0.3)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent-primary)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Sirius AI</h4>
                  <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-[#9CA3AF] hover:text-white hover:bg-white/[0.03] transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[var(--color-accent-primary)] text-black font-medium rounded-tr-none'
                        : 'bg-[#0F1117] text-[#9CA3AF] border border-white/[0.04] rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span
                      className={`text-[8px] mt-1 block text-right ${
                        msg.sender === 'user' ? 'text-black/50' : 'text-white/20'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Thinking loader */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#0F1117] border border-white/[0.04] rounded-xl rounded-tl-none px-4 py-3.5 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-5 py-2.5 bg-[#0F1117]/30 border-t border-white/[0.03] space-y-1.5">
                <span className="text-[9px] uppercase tracking-widest text-[var(--color-accent-primary)] font-bold block mb-1">
                  Common Questions
                </span>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.query}
                      onClick={() => handleSendMessage(s.text)}
                      className="text-[10px] text-white/70 bg-[#0F1117] border border-white/[0.05] hover:border-[rgba(var(--color-accent-primary-rgb),0.3)] hover:text-white px-2.5 py-1.5 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      {s.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-[#0F1117] border-t border-white/[0.05] flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Sirius..."
                disabled={isTyping}
                className="flex-1 px-3.5 py-2 rounded-lg bg-[#171A21] border border-white/[0.06] text-white text-xs focus:outline-none focus:border-[rgba(var(--color-accent-primary-rgb),0.4)] transition-colors duration-300 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="w-8 h-8 rounded-lg bg-[var(--color-accent-primary)] text-black flex items-center justify-center transition-all duration-300 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. GLOWING LAUNCH BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-[#0F1117] flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-12 cursor-pointer relative group"
        aria-label="Ask Sirius AI"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--color-accent-primary)] opacity-10 group-hover:scale-125 transition-transform duration-500 animate-pulse-slow" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-[#0F1117]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6 text-[#0F1117]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

    </div>
  );
};
