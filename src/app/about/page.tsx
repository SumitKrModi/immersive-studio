"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-sm uppercase tracking-[0.4em] text-indigo-500 font-bold mb-6">Our Narrative</h1>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        BUILT FOR THE <br /> MOMENTS THAT <br /> MATTER.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-t border-white/5">
                    <div className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium tracking-tight">
                        Zenvy WebTech is a creative marketing and development agency built for category builders. We believe that in the sea of sameness, differentiation is the only path to survival.
                    </div>
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-4">The Philosophy</h3>
                            <p className="text-gray-500 text-lg">
                                Performance and creativity are inseparable. When one is treated in isolation, both fall short. We bridge the gap between technical excellence and disruptive design.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-4">The Mission</h3>
                            <p className="text-gray-500 text-lg">
                                To move brands through their most critical inflection points, ensuring every pixel and every line of code drives measurable growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-40">
                    <h3 className="text-center text-sm uppercase tracking-[0.4em] text-gray-600 font-bold mb-20">Core Principles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Radical Clarity", desc: "No jargon, just results-driven strategy." },
                            { title: "Next-Gen Infrastructure", desc: "Built with the latest tech for maximum scale." },
                            { title: "Category Creation", desc: "We don't compete; we redefine the category." }
                        ].map((p, i) => (
                            <div key={i} className="p-10 border border-white/5 bg-neutral-900/20 rounded-3xl">
                                <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                                <p className="text-gray-500">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
