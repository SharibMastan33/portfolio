import { Magnetic } from './Magnetic';

interface EditorialNavbarProps {
  navigate: (to: string) => void;
}

export const EditorialNavbar = ({ navigate }: EditorialNavbarProps) => {
  const navItems = [
    { name: 'Work', to: '/#projects' },
    { name: 'About', to: '/#about' },
    { name: 'Skills', to: '/#skills' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F8F8F5]/80 backdrop-blur-md border-b border-[#DDDDD8] py-5 px-6 sm:px-12 select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Magnetic range={40} strength={0.25}>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#');
            }}
            data-cursor="text"
            className="text-xs font-black tracking-[0.22em] text-[#202124] uppercase"
          >
            SHARIB MASTAN
          </a>
        </Magnetic>

        {/* Navigation items */}
        <div className="flex items-center gap-6 sm:gap-10">
          {navItems.map((item) => (
            <Magnetic key={item.name} range={35} strength={0.2}>
              <a
                href={item.to}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.to);
                }}
                data-cursor="text"
                className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#6B6B6B] hover:text-[#202124] uppercase transition-colors duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1.5px] after:bg-[#202124] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
              >
                {item.name}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </nav>
  );
};
