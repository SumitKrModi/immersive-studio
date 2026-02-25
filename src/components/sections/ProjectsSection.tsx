"use client"

import { motion } from "framer-motion"

const projects = [
    {
        title: "Next-Gen Fintech",
        category: "Development",
        size: "col-span-2 row-span-2",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        description: "Building a high-performance trading platform."
    },
    {
        title: "EcoSphere",
        category: "Brand Design",
        size: "col-span-1 row-span-1",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
        description: "Rebranding the future of sustainable energy."
    },
    {
        title: "Quantum SEO",
        category: "Optimization",
        size: "col-span-1 row-span-2",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
        description: "400% organic growth in 6 months."
    },
    {
        title: "UltraMaintenance",
        category: "Services",
        size: "col-span-1 row-span-1",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
        description: "Zero downtime for scale-up ventures."
    }
]

export default function ProjectsSection() {
    return (
        <section className="py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">The Growth Matrix</h2>
                    <h3 className="text-3xl md:text-6xl font-black tracking-tighter">OUR RESULTS DO <br /> THE TALKING.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`${project.size} relative group overflow-hidden border border-white/5 bg-neutral-900/40 rounded-3xl cursor-pointer`}
                        >
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                            </div>
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-2">{project.category}</span>
                                <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
