import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Formation', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-widest text-white/90 hover:text-[#F97316] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          AR<span className="text-[#F97316]">.</span>TONFO
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-xs tracking-widest uppercase font-medium transition-all duration-300 pb-0.5 border-b ${
                    isActive
                      ? 'text-[#F97316] border-[#F97316]'
                      : 'text-white/60 border-transparent hover:text-white hover:border-white/30'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 text-xs tracking-widest uppercase font-semibold bg-[#F97316] text-[#0a0a0f] rounded hover:bg-[#fb923c] transition-colors"
            >
              Embauchez-moi
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0d0d14] border-t border-white/5`}
      >
        <ul className="flex flex-col py-6 px-6 gap-1">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-white/70 hover:text-[#F97316] tracking-widest uppercase border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-xs tracking-widest uppercase font-semibold bg-[#F97316] text-[#0a0a0f] rounded hover:bg-[#fb923c] transition-colors"
            >
              Embauchez-moi
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
