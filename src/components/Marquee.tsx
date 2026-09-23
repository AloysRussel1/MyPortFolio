import { techIcons } from './tech';

const items = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn', 'Django', 'PostgreSQL', 'Redis',
  'Celery', 'Docker', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'pytest', 'Vercel', 'Linux',
];

/** Bandeau infini des technos — masqué aux lecteurs d'écran (purement décoratif). */
const Marquee = () => (
  <div
    aria-hidden
    className="relative overflow-hidden border-y border-line/10 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
  >
    <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
      {[...items, ...items].map((name, i) => {
        const Icon = techIcons[name];
        return (
          <span key={i} className="flex items-center gap-3 font-mono text-sm text-muted">
            {Icon && <Icon className="h-4 w-4" />}
            {name}
            <span className="ml-9 text-cyan/60">✦</span>
          </span>
        );
      })}
    </div>
  </div>
);

export default Marquee;
