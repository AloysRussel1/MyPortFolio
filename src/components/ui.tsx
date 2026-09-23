import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { techIcons } from './tech';

export const TechTag = ({ name }: { name: string }) => {
  const Icon = techIcons[name];
  return (
    <span className="tag">
      {Icon && <Icon className="h-3 w-3" aria-hidden />}
      {name}
    </span>
  );
};

export const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/** En-tête de section façon commentaire de code : « // 02 projets » + grand titre. */
export const SectionHeader = ({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
}) => (
  <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="mb-4 font-mono text-xs text-muted">
        <span className="text-cyan">//</span> {index} <span className="text-fg/30">—</span> {label}
      </p>
      <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
    {aside && <div className="max-w-sm text-sm leading-relaxed text-muted">{aside}</div>}
  </Reveal>
);

/** Mot mis en valeur dans les titres : serif italique en dégradé. */
export const Em = ({ children }: { children: ReactNode }) => (
  <span className="text-gradient pr-1 font-serif font-normal italic">{children}</span>
);
