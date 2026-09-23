import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Em, Reveal } from './ui';
import { profile } from '../portfolio';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full rounded-xl border border-line/10 bg-bg px-4 py-3 text-sm placeholder:text-muted/60 transition-colors focus:border-cyan/60 focus:outline-none focus:ring-4 focus:ring-cyan/10';

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
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Erreur formulaire :', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan/15 via-violet/15 to-magenta/15 blur-[120px]" />

      <div className="container-x">
        <Reveal>
          <p className="mb-4 font-mono text-xs text-muted">
            <span className="text-cyan">//</span> 06 <span className="text-fg/30">—</span> contact
          </p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Construisons quelque chose <Em>d'utile</Em>.
          </h2>
          <p className="mt-6 max-w-xl text-muted">
            Stage, poste, mission freelance ou projet IA : je réponds sous 24 h.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={`mailto:${profile.email}`}
              data-cursor="écrire"
              className="ring-gradient group flex items-center justify-between rounded-3xl border border-line/10 bg-surface p-6"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Email</p>
                <p className="mt-1 truncate text-lg font-medium sm:text-xl">{profile.email}</p>
              </div>
              <FiArrowUpRight className="flex-shrink-0 text-2xl text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href={profile.phoneHref} className="rounded-3xl border border-line/10 bg-surface p-5 transition-colors hover:border-line/25">
                <FiPhone className="mb-3 text-muted" />
                <p className="text-sm font-medium">{profile.phone}</p>
              </a>
              <div className="rounded-3xl border border-line/10 bg-surface p-5">
                <FiMapPin className="mb-3 text-muted" />
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-3xl border border-line/10 bg-surface p-5 transition-colors hover:border-fg/40"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm font-medium">GitHub</span>
                <FiArrowUpRight className="ml-auto text-muted transition-colors group-hover:text-fg" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-3xl border border-line/10 bg-surface p-5 transition-colors hover:border-[#0a66c2]/60"
              >
                <FaLinkedinIn className="text-xl text-[#0a66c2]" />
                <span className="text-sm font-medium">LinkedIn</span>
                <FiArrowUpRight className="ml-auto text-muted transition-colors group-hover:text-fg" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-line/10 bg-surface p-6 md:p-8 lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-full border border-lime/30 bg-lime/10 text-2xl text-lime">
                    <FiCheck />
                  </span>
                  <p className="text-xl font-semibold">Message envoyé.</p>
                  <p className="mt-1 text-sm text-muted">Je te réponds très vite.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Nom</span>
                      <input name="name" value={form.name} onChange={onChange} required placeholder="Jean Dupont" className={field} />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder="jean@entreprise.com"
                        className={field}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Message</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      placeholder="Parle-moi de ton projet…"
                      className={`${field} resize-none`}
                    />
                  </label>

                  {status === 'error' && (
                    <p className="text-sm text-red-500">
                      L'envoi a échoué. Réessaie, ou écris-moi directement à {profile.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-[1.01] disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
                    <FiSend className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
