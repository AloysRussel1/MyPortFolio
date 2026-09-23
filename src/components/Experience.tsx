import { Reveal, SectionHeader, TechTag } from './ui';
import { experiences } from '../portfolio';

const Experience = () => (
  <section id="experience" className="py-16 md:py-24">
    <div className="container-x">
      <SectionHeader label="Expérience" title="Où je travaille" />

      <ol className="divide-y divide-line border-y border-line">
        {experiences.map((exp, i) => (
          <Reveal key={exp.role} delay={i * 0.05}>
            <li className="grid gap-3 py-8 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="text-sm text-muted">
                <p>{exp.period}</p>
                {exp.current && (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> En poste
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                <p className="text-accent">{exp.company}</p>
                {exp.context && <p className="mt-3 text-sm leading-relaxed text-muted">{exp.context}</p>}
                <ul className="mt-4 space-y-2">
                  {exp.points.map(p => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tags.map(t => (
                    <TechTag key={t} name={t} />
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
