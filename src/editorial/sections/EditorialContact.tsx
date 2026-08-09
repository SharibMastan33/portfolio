import { Magnetic } from '../components/Magnetic';

export const EditorialContact = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SharibMastan33' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-sharib-mastan/' },
    { name: 'Instagram', url: 'https://www.instagram.com/_mohammed_sharib_/' },
    { name: 'WhatsApp', url: 'https://wa.me/918618057312' },
  ];

  return (
    <section id="contact" className="py-32 px-6 sm:px-12 bg-[#F8F8F5] relative select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#1A73E8] uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-[#202124] uppercase leading-[0.9]">
            Let's Build<br />Something.
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#6B6B6B] max-w-lg leading-relaxed font-medium">
          If you have a project idea, website concept, or data labeling campaign, let's collaborate to build something outstanding.
        </p>

        {/* Magnetic CTA Button */}
        <div className="py-4">
          <Magnetic range={60} strength={0.3}>
            <a
              href="mailto:mohammed@sharibmastan.in"
              data-cursor="link"
              className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-[#202124] text-[#F8F8F5] text-xs font-bold tracking-widest uppercase hover:bg-[#1A73E8] hover:text-[#F8F8F5] transition-all duration-500 shadow-xl"
            >
              Start A Project ↗
            </a>
          </Magnetic>
        </div>

        {/* Social Links Editorial */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-12 border-t border-[#DDDDD8] w-full">
          {socialLinks.map((link) => (
            <Magnetic key={link.name} range={35} strength={0.2}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="text-[10px] sm:text-xs font-bold tracking-widest text-[#6B6B6B] hover:text-[#202124] uppercase transition-colors duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1px] after:bg-[#202124] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
              >
                {link.name} ↗
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-16 text-center">
          <p className="text-[10px] font-mono tracking-widest text-[#6B6B6B]/60 uppercase">
            © 2026 Mohammed Sharib Mastan
          </p>
        </div>
      </div>
    </section>
  );
};
