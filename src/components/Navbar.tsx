import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'À propos', id: 'about' },
  { name: 'Projets', id: 'projects' },
  { name: 'Expérience', id: 'experience' },
  { name: 'Stack', id: 'skills' },
  { name: 'Parcours', id: 'education' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Section active = celle qui traverse le milieu de l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['hero', ...navLinks.map(l => l.id), 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const ThemeButton = (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className="grid h-9 w-9 place-items-center rounded-full border border-line/10 bg-surface/70 text-muted backdrop-blur-xl transition-colors hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );

  return (
    <>
      {/* Barre de progression de lecture */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-cyan via-violet to-magenta"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="container-x flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-mono text-sm font-medium"
            aria-label="Retour en haut"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line/10 bg-surface/70 backdrop-blur-xl transition-colors group-hover:border-cyan/60">
              <span className="text-gradient font-semibold">AR</span>
            </span>
            <span className="hidden text-muted transition-colors group-hover:text-fg sm:inline">tonfo.dev</span>
          </a>

          <nav className="hidden rounded-full border border-line/10 bg-surface/70 p-1 backdrop-blur-xl md:block">
            <ul className="flex items-center">
              {navLinks.map(link => (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block px-4 py-1.5 text-[13px] transition-colors ${
                      active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {link.name}
                  </a>
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-elevated"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {ThemeButton}
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-bg transition-transform hover:scale-[1.03] sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Me contacter
            </a>
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-line/10 bg-surface/70 backdrop-blur-xl md:hidden"
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-x flex h-full flex-col justify-center gap-2">
              {[...navLinks, { name: 'Contact', id: 'contact' }].map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-4xl font-semibold tracking-tight"
                  >
                    <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
