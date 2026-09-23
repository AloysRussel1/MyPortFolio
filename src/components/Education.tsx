import type { ReactNode } from 'react';
import { Reveal, SectionHeader } from './ui';
import { education, involvements, languages } from '../portfolio';

const Column = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h3 className="mb-4 text-sm font-medium text-muted">{title}</h3>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const Item = ({ title, sub, note }: { title: string; sub?: string; note: string }) => (
  <li className="flex items-baseline justify-between gap-4">
    <div>
      <p className="font-medium">{title}</p>
      {sub && <p className="text-sm text-muted">{sub}</p>}
    </div>
    <span className="flex-shrink-0 text-sm text-muted">{note}</span>
  </li>
);

const Education = () => (
  <section id="education" className="py-16 md:py-24">
    <div className="container-x">
      <SectionHeader label="Parcours" title="Formation & langues" />

      <Reveal className="grid gap-10 border-t border-line pt-8 md:grid-cols-3 md:gap-12">
        <Column title="Formation">
          {education.map(e => (
            <Item key={e.school} title={e.title} sub={e.school} note={e.note} />
          ))}
        </Column>
        <Column title="Langues">
          {languages.map(l => (
            <Item key={l.name} title={l.name} note={l.level} />
          ))}
        </Column>
        <Column title="Engagement">
          {involvements.map(i => (
            <Item key={i.title} title={i.title} sub={i.org} note={i.note} />
          ))}
        </Column>
      </Reveal>
    </div>
  </section>
);

export default Education;
