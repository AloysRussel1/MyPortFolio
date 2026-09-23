import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'Expérience', id: 'experience' },
  { name: 'Projets', id: 'projects' },
  { name: 'Compétences', id: 'skills' },
  { name: 'Parcours', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Section active = celle qui traverse le milieu de l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['hero', ...navLinks.map(l => l.id)].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Aloys Russel Tonfo<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="mr-2 hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`link mx-3 py-1 text-sm ${
                      active === link.id ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="icon-link h-9 w-9"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md text-muted hover:text-fg md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line md:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-muted transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
