import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-6 px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Open to all makers and innovators
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Build futuristic projects with a community that ships
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl text-base text-white/80 sm:text-lg"
        >
          We are a student-led tech club crafting open-source tools, exploring AI/ML, web, and hardware. Collaborate, learn, and launch real projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="pointer-events-auto rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl shadow-fuchsia-500/20 transition hover:scale-[1.02] hover:bg-white/90"
          >
            Explore Projects
          </a>
          <a
            href="#join"
            className="pointer-events-auto rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/40"
          >
            Join the Club
          </a>
        </motion.div>
      </div>
    </div>
  );
}
