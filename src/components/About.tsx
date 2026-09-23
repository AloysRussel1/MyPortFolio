import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { Em, Reveal, SectionHeader } from './ui';
import { languages, profile } from '../portfolio';

const stages = ['data', 'model', 'API', 'UI', 'prod'];

/** Pipeline animé : un paquet traverse les étapes de data à prod, en boucle. */
const Pipeline = () => (
  <div className="relative mt-8">
    <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan/40 via-violet/40 to-magenta/40" />
    <motion.span
      aria-hidden
      className="absolute top-1/2 h-2 w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent to-cyan blur-[1px]"
      animate={{ left: ['0%', '100%'] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
    />
    <ol className="relative flex justify-between">
      {stages.map((s, i) => (
        <li
          key={s}
          className="rounded-md border border-line/10 bg-surface px-2 py-1 font-mono text-[10px] text-muted sm:px-3 sm:text-xs"
        >
          <span className="text-cyan/70">{i}</span> {s}
        </li>
      ))}
    </ol>
  </div>
);

const MontrealClock = () => {
  const fmt = () =>
    new Intl.DateTimeFormat('fr-CA', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Toronto',
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
};

const card = 'rounded-3xl border border-line/10 bg-surface p-6 md:p-7';

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container-x">
      <SectionHeader
        index="01"
        label="à propos"
        title={
          <>
            Deux mondes, <Em>un seul</Em> pipeline.
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className={`${card} md:col-span-2 md:row-span-2 flex flex-col justify-between`}>
          <div>
            <p className="text-xl leading-snug tracking-tight md:text-2xl">
              La plupart des modèles ML meurent dans un notebook.{' '}
              <span className="text-muted">
                Moi, je les branche à de vraies applications : une API Django testée, une interface React soignée,
                un déploiement CI/CD —
              </span>{' '}
              et quand il le faut, un bras robotique.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
              Étudiant en génie informatique à Polytechnique Montréal, freelance depuis 2022 et développeur IA
              chez Heka ST. J'aime les problèmes où le code touche le monde réel.
            </p>
          </div>
          <Pipeline />
        </Reveal>

        <Reveal delay={0.08} className={card}>
          <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted">
            <span className="flex items-center gap-1.5">
              <FiMapPin /> Basé à
            </span>
            <MontrealClock />
          </div>
          <p className="text-3xl font-semibold tracking-tight">{profile.location}</p>
          <p className="mt-1 text-sm text-muted">Sur place, hybride ou remote.</p>
        </Reveal>

        <Reveal delay={0.16} className={card}>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-wider text-muted">Langues</p>
          <ul className="space-y-2.5">
            {languages.map(l => (
              <li key={l.name} className="flex items-baseline justify-between border-b border-dashed border-line/10 pb-2.5 last:border-0 last:pb-0">
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
