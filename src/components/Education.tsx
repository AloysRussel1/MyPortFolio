import { Em, Reveal, SectionHeader } from './ui';
import { education, involvements } from '../portfolio';

const Education = () => (
  <section id="education" className="py-24 md:py-32">
    <div className="container-x">
      <SectionHeader
        index="05"
        label="parcours"
        title={
          <>
            De Dschang à <Em>Polytechnique</Em>.
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="rounded-3xl border border-line/10 bg-surface p-6 md:p-8 lg:col-span-3">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-muted">Formation</p>
          <ol className="space-y-7">
            {education.map(e => (
              <li key={e.school} className="grid grid-cols-[auto_1fr] gap-x-5">
                <span
                  className={`mt-2 h-2.5 w-2.5 rounded-full ${
                    e.current ? 'bg-cyan shadow-[0_0_12px_rgb(var(--cyan)/0.9)]' : 'bg-line/25'
                  }`}
                />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-semibold tracking-tight">{e.degree}</h3>
                    <span className="font-mono text-xs text-muted">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {e.school} · <span className={e.current ? 'text-cyan' : ''}>{e.note}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-line/10 bg-surface p-6 md:p-8 lg:col-span-2">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-muted">Engagements</p>
          <ul className="space-y-5">
            {involvements.map(item => (
              <li key={item.org} className="flex items-start gap-4">
                <span className="rounded-md border border-violet/30 bg-violet/10 px-2 py-0.5 font-mono text-[11px] text-violet">
                  {item.year}
                </span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted">{item.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Education;
