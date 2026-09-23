import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FiCheck, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Reveal, SectionHeader } from './ui';
import { profile } from '../portfolio';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full rounded-md border border-line bg-bg px-3.5 py-2.5 text-sm placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

const channels = [
  { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: profile.phone, href: profile.phoneHref },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: profile.linkedin },
  { icon: <FaGithub />, label: 'GitHub', href: profile.github },
  { icon: <FiMapPin />, label: profile.location },
];

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Erreur formulaire :', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-x">
        <SectionHeader label="Contact" title="On en parle ?" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="leading-relaxed text-muted">
              Un poste, un stage, une mission freelance ou un projet en IA ? Écrivez-moi, je réponds rapidement.
            </p>
            <ul className="mt-8 space-y-3.5">
              {channels.map(c => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="text-accent">{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            {status === 'sent' ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center card rounded-xl text-center">
                <FiCheck className="mb-3 text-2xl text-accent" />
                <p className="font-medium">Message envoyé</p>
                <p className="mt-1 text-sm text-muted">Je vous réponds rapidement.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card flex flex-col gap-4 rounded-xl p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm">
                    Nom
                    <input name="name" value={form.name} onChange={onChange} required className={field} />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    Email
                    <input type="email" name="email" value={form.email} onChange={onChange} required className={field} />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-sm">
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    className={`${field} resize-none`}
                  />
                </label>

                {status === 'error' && (
                  <p className="text-sm text-red-500">
                    L'envoi a échoué. Réessayez ou écrivez directement à {profile.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary self-start"
                >
                  {status === 'sending' ? 'Envoi…' : 'Envoyer'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
