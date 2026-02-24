"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import ProjectsSection from "@/components/sections/ProjectsSection"

export default function ProjectsPage() {
    return (
        <main className="bg-transparent text-white min-h-screen pt-32">
            <div className="px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-sm uppercase tracking-[0.4em] text-indigo-500 font-bold mb-6">The Hall of Fame</h1>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        SELECTED <br /> VENTURES.
                    </h2>
                </motion.div>
            </div>

            <ProjectsSection />

            <div className="px-6 max-w-7xl mx-auto py-40 border-t border-white/5 text-center">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">WANT TO BE NEXT?</h3>
                <Link href="/contact" className="inline-block px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-indigo-600 hover:text-white transition-all">
                    Start Your Project
                </Link>
            </div>
        </main>
    )
}
