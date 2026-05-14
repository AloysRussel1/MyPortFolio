import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#0d0d14] border-t border-white/5 px-6 lg:px-12 py-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      <div className="text-center md:text-left">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-widest text-white/60 hover:text-[#F97316] transition-colors"
        >
          AR<span className="text-[#F97316]">.</span>TONFO
        </a>
        <p className="text-white/25 text-xs mt-1">
          Développeur Full Stack · Polytechnique Montréal
        </p>
      </div>

      <nav className="flex gap-8">
        {[
          { name: 'Projets', href: '#projects' },
          { name: 'Compétences', href: '#skills' },
          { name: 'Contact', href: '#contact' },
        ].map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors font-mono"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/AloysRussel1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://linkedin.com/in/AloysRussel1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
        <span className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
