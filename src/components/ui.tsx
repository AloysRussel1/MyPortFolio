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

/** Apparition discrète au défilement. */
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
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <Reveal className="mb-10 md:mb-12">
    <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-accent">
      <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent to-gold" aria-hidden />
      {label}
    </p>
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
      {title}
      {/* point orange final, sauf si le titre a déjà sa ponctuation */}
      {!/[?!.]$/.test(title) && <span className="text-accent">.</span>}
    </h2>
  </Reveal>
);
