import { motion } from 'framer-motion';
import { Em, Reveal, SectionHeader, TechTag } from './ui';
import { experiences } from '../portfolio';

/** Expérience présentée comme un `git log --graph` de carrière. */
const Experience = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="container-x">
      <SectionHeader
        index="03"
        label="expérience"
        title={
          <>
            Mon historique de <Em>commits</Em>.
          </>
        }
      />

      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line/10 bg-surface">
          {/* barre de terminal */}
          <div className="flex items-center gap-2 border-b border-line/10 px-5 py-3 font-mono text-xs text-muted">
            <span className="text-lime">➜</span>
            <span className="text-cyan">~/career</span>
            <span>git log --graph --oneline</span>
          </div>

          <ol className="px-5 py-6 md:px-8 md:py-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.hash}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative grid grid-cols-[20px_1fr] gap-4 pb-10 last:pb-2 md:grid-cols-[20px_180px_1fr] md:gap-6"
              >
                {/* graphe */}
                <div className="relative flex justify-center">
                  <span
                    className={`relative z-10 mt-1.5 h-3 w-3 rounded-full border-2 ${
                      i === 0 ? 'border-magenta bg-magenta/30 shadow-[0_0_14px_rgb(var(--magenta)/0.8)]' : 'border-cyan bg-bg'
                    }`}
                  />
                  {i < experiences.length - 1 && (
                    <span className="absolute bottom-[-8px] top-6 w-px bg-gradient-to-b from-magenta/60 to-cyan/40" />
                  )}
                </div>

                {/* meta commit */}
                <div className="col-start-2 font-mono text-xs md:col-start-auto">
                  <p className="text-[#e5b567]">{exp.hash}</p>
                  <p className="mt-1 text-muted">{exp.period}</p>
                  <p className="mt-2 inline-block rounded border border-cyan/30 bg-cyan/10 px-1.5 py-0.5 text-[10px] text-cyan">
                    {exp.ref}
                  </p>
                </div>

                {/* message */}
                <div className="col-start-2 md:col-start-auto">
                  <h3 className="text-2xl font-semibold tracking-tight">{exp.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">{exp.company}</p>
                  <ul className="mt-4 space-y-1.5 text-[15px]">
                    {exp.points.map(p => (
                      <li key={p} className="flex gap-3">
                        <span className="select-none font-mono text-lime">+</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map(t => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Experience;
