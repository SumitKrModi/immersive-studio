"use client"

import { motion } from "framer-motion"
import ServicesSection from "@/components/sections/ServicesSection"

export default function ServicesPage() {
    return (
        <main className="bg-transparent text-white min-h-screen pt-32">
            <div className="px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-sm uppercase tracking-[0.4em] text-indigo-500 font-bold mb-6">Capabilities</h1>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        TOOLS FOR <br /> GLOBAL <br /> DOMINANCE.
                    </h2>
                </motion.div>
            </div>

            <ServicesSection />

            <div className="px-6 max-w-7xl mx-auto py-40 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-6">Our Tech Stack</h3>
                        <div className="flex flex-wrap gap-4">
                            {["Next.js", "React 19", "Three.js", "GSAP", "Tailwind 4", "PostgreSQL", "Edge Functions"].map((tech, i) => (
                                <span key={i} className="px-6 py-2 border border-white/10 rounded-full text-sm text-gray-400 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-6">The Process</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-indigo-500 font-black">01</span>
                                <p className="text-gray-400"><span className="text-white font-bold">Discovery & Audit:</span> Deep dive into your data and market positioning.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-indigo-500 font-black">02</span>
                                <p className="text-gray-400"><span className="text-white font-bold">Creative Strategy:</span> Crafting the hook that makes competitors jealous.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-indigo-500 font-black">03</span>
                                <p className="text-gray-400"><span className="text-white font-bold">Rapid Deployment:</span> Building with precision and speed to capture momentum.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
