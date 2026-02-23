"use client"

import Scene from "@/components/three/Scene"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-fluid-h1 font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 uppercase break-words px-2"
        >
          DEFINING THE <br />
          NEXT GEN WEB
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 max-w-2xl font-medium tracking-tight px-4"
        >
          Zenvy WebTech crafts high-converting, SEO-optimized digital ecosystems for ambitious ventures.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all duration-500 text-center">
            Start Your Era
          </Link>
          <Link href="/projects" className="px-10 py-5 border border-white/10 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all text-center">
            Our Work
          </Link>
        </motion.div>
      </div>

      <Scene />

    </section>
  )
}