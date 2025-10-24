import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Users, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Pulse.AI',
    icon: <Rocket className="h-5 w-5" />,
    desc: 'Real-time sentiment and topic clustering for campus events using embeddings.',
    tags: ['Python', 'Vector DB', 'Streamlit'],
    accent: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'NovaKit',
    icon: <Code className="h-5 w-5" />,
    desc: 'Starter stack for full-stack hackathons with auth, DB, and deploy scripts.',
    tags: ['React', 'Express', 'Postgres'],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'MeshNet',
    icon: <Users className="h-5 w-5" />,
    desc: 'Low-power mesh network nodes for off-grid communication across campus.',
    tags: ['ESP32', 'LoRa', 'Rust'],
    accent: 'from-emerald-400 to-teal-500',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10 flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Hands-on builds that ship. Join a team, learn by doing, and contribute to open source.
          </p>
        </div>
        <a
          href="#join"
          className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:border-white/30 md:inline-block"
        >
          Join a build sprint
        </a>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 * i }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-30`}></div>
            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-white">{p.icon}</span>
                {p.title}
              </div>
              <p className="mb-4 text-sm text-white/80">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
          <Calendar className="h-4 w-4" />
          Weekly build nights • Fridays 6pm
        </div>
        <p className="text-sm text-white/70">
          Show-and-tell, code reviews, and snacks. Drop in and hack with us.
        </p>
      </motion.div>
    </div>
  );
}
