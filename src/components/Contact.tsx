import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Point de départ pour intégration Formspree ou Resend
    const mailto = `mailto:rtonfo@gmail.com?subject=Contact depuis portfolio - ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AEmail: ${form.email}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0a0a0f] py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#F97316] text-xs tracking-widest uppercase mb-3">
            — Parlons-en
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Me contacter
          </h2>
          <p className="text-white/50 max-w-xl text-base leading-relaxed">
            Vous avez un projet, une opportunité ou simplement envie d'échanger ?
            Je réponds dans les 24 heures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: <FaEnvelope />,
                label: 'Email',
                value: 'rtonfo@gmail.com',
                href: 'mailto:rtonfo@gmail.com',
              },
              {
                icon: <FaPhone />,
                label: 'Téléphone',
                value: '+1 418 473-7672',
                href: 'tel:+14184737672',
              },
              {
                icon: <FaMapMarkerAlt />,
                label: 'Localisation',
                value: 'Saint-Jérôme, QC — Remote OK',
                href: null,
              },
            ].map(info => (
              <div
                key={info.label}
                className="flex gap-4 bg-[#0f0f18] border border-white/6 rounded-xl p-5 hover:border-[#F97316]/25 transition-all"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#F97316]/10 border border-[#F97316]/25 rounded-lg flex items-center justify-center text-[#F97316] text-sm">
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white/80 text-sm hover:text-[#F97316] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-[#0f0f18] border border-white/6 rounded-xl p-5">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
                Réseaux
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AloysRussel1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <FaGithub size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/AloysRussel1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/60 text-sm hover:text-[#0077b5] transition-colors"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-[#0f0f18] border border-white/6 rounded-xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-emerald-400/10 border border-emerald-400/25 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-400 text-2xl">✓</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message envoyé !</h3>
                <p className="text-white/50 text-sm">Je vous réponds dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs font-mono uppercase tracking-widest">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F97316]/60 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-xs font-mono uppercase tracking-widest">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.com"
                      className="bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F97316]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-mono uppercase tracking-widest">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou opportunité..."
                    className="bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F97316]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 bg-[#F97316] text-[#0a0a0f] font-bold text-sm tracking-wide rounded-lg hover:bg-[#fb923c] transition-all shadow-lg shadow-[#F97316]/20 hover:shadow-[#F97316]/40"
                >
                  Envoyer le message →
                </button>

                <p className="text-white/25 text-xs text-center">
                  Ou contactez-moi directement à{' '}
                  <a href="mailto:rtonfo@gmail.com" className="text-[#F97316]/60 hover:text-[#F97316]">
                    rtonfo@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
