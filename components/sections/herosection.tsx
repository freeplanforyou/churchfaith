'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero px-6 text-center">
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl"
      >
        <span className="glass mb-6 inline-flex rounded-full px-5 py-2 text-sm">
          Welcome Home
        </span>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Experience Faith in a New Digital Era
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80 md:text-xl">
          A cinematic worship experience designed for global ministry,
          spiritual growth, and meaningful community.
        </p>

        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <button className="rounded-2xl bg-purple px-8 py-4 shadow-glow transition hover:scale-105">
            Watch Sermons
          </button>

          <button className="glass rounded-2xl px-8 py-4 transition hover:bg-white/10">
            Visit This Sunday
          </button>
        </div>
      </motion.div>
    </section>
  )
}
