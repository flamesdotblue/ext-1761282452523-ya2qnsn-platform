import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Rocket } from 'lucide-react';

export default function Join() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-fuchsia-500 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Users className="h-4 w-4" />
                Become a member
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">Join the club and start building</h3>
              <p className="mt-2 text-white/70">
                No experience needed. We welcome designers, developers, hardware hackers, and curious minds.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/80">
                <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Weekly workshops and build nights</li>
                <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Project mentorship and lightning talks</li>
                <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Access to tools, repos, and a vibrant community</li>
              </ul>
            </div>

            <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="mb-4">
            <label className="mb-1 block text-xs text-white/70">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/30"
              placeholder="Alex Johnson"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-xs text-white/70">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/30"
              placeholder="you@school.edu"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-xs text-white/70">What do you want to build?</label>
            <textarea
              rows="3"
              className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/30"
              placeholder="AI tools, robotics, web apps, hardware hacks..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold text-black transition hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" />
            Request Invite
          </button>
          <p className="mt-3 text-center text-xs text-white/60">
            We’ll reach out with next steps. Or email us at
            <a className="ml-1 underline decoration-dotted underline-offset-4" href="mailto:hello@novatech.club">
              hello@novatech.club
            </a>
          </p>
        </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
