import { useState } from 'react';
import { motion } from 'framer-motion';
import { Em, Reveal, SectionHeader } from './ui';
import { accentBg, techIcons } from './tech';
import { projects, skillGroups } from '../portfolio';

/**
 * Stack technique en tags. Les puces « projet » filtrent : les compétences
 * utilisées dans le projet choisi s'allument, les autres s'estompent.
 */
const Skills = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const active = filter ? projects.find(p => p.id === filter)?.uses ?? [] : null;

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="stack"
          title={
            <>
              Les outils, <Em>pas les buzzwords</Em>.
            </>
          }
          aside="Clique sur un projet pour voir exactement ce qui tourne dessous."
        />

        <Reveal className="mb-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-muted">filtrer →</span>
          {[{ id: null, title: 'Tout' }, ...projects].map(p => {
            const on = filter === p.id;
            return (
              <button
                key={p.id ?? 'all'}
                onClick={() => setFilter(p.id)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
                  on ? 'border-fg bg-fg text-bg' : 'border-line/15 text-muted hover:border-line/30 hover:text-fg'
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal
              key={g.id}
              delay={gi * 0.06}
              className="rounded-3xl border border-line/10 bg-surface p-6 md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-sm ${accentBg[g.accent]}`} />
                <h3 className="text-lg font-semibold tracking-tight">{g.name}</h3>
                <span className="ml-auto font-mono text-xs text-muted">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(item => {
                  const Icon = techIcons[item];
                  const lit = active ? active.includes(item) : true;
                  return (
                    <motion.li
                      key={item}
                      animate={{ opacity: lit ? 1 : 0.25, scale: lit && active ? 1.04 : 1 }}
                      transition={{ duration: 0.25 }}
                      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors ${
                        lit && active ? 'border-cyan/50 bg-cyan/10' : 'border-line/10 bg-elevated/50'
                      }`}
                    >
                      {Icon && <Icon className="h-4 w-4 text-muted" aria-hidden />}
                      {item}
                    </motion.li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
