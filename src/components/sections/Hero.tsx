"use client"

import Scene from "@/components/three/Scene"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="pointer-events-none"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30 uppercase leading-[0.9] text-glow"
          >
            PRECISION <br />
            ENGINEERED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-base md:text-xl text-gray-400 max-w-2xl font-light tracking-[0.2em] uppercase px-4"
          >
            High-Performance Digital Architecture
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto"
        >
          <Link href="/contact" className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
            <span className="relative z-10">Start Your Era</span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
          </Link>
          <Link href="/projects" className="px-10 py-5 border border-white/20 backdrop-blur-md bg-white/5 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-center">
            Our Work
          </Link>
        </motion.div>
      </div>

    </section>
  )
}