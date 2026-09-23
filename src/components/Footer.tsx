import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../portfolio';

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line/10 pt-10">
    <div className="container-x flex flex-col gap-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} — conçu & codé à Montréal.</p>
      <div className="flex items-center gap-6">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-fg">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-fg">
          LinkedIn
        </a>
        <a href="#hero" className="inline-flex items-center gap-1.5 hover:text-fg">
          Haut <FiArrowUp />
        </a>
      </div>
    </div>

    {/* Signature géante, coupée par le bas de page */}
    <p
      aria-hidden
      className="text-gradient mt-8 select-none whitespace-nowrap text-center font-serif text-[22vw] italic leading-[0.75] opacity-90"
    >
      Tonfo.
    </p>
  </footer>
);

export default Footer;
