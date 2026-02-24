"use client"

import { motion } from "framer-motion"

const services = [
    { id: "01", name: "Next-Gen Web Apps", description: "Scalable React & Next.js solutions built for speed." },
    { id: "02", name: "SEO & Performance", description: "Rank high, load fast, and convert every visitor." },
    { id: "03", name: "Maintenance & Scale", description: "Reliable infrastructure for growing businesses." },
    { id: "04", name: "3D Immersive Design", description: "Cinematic experiences using Three.js & WebGL." }
]

export default function ServicesSection() {
    return (
        <section className="py-32 bg-transparent border-t border-white/10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            SERVICES <br /> TO IGNITE <br /> GROWTH.
                        </h2>
                        <p className="mt-8 text-gray-500 max-w-sm text-lg tracking-tight">
                            We don't just build sites; we build high-performing digital engines that move the needle.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                className="group border-b border-white/10 py-12 flex items-start gap-8 cursor-pointer relative overflow-hidden"
                            >
                                <span className="text-sm font-bold text-indigo-500 mt-2">{service.id}</span>
                                <div>
                                    <h4 className="text-3xl font-bold group-hover:translate-x-4 transition-transform duration-500">{service.name}</h4>
                                    <p className="mt-4 text-gray-500 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 30L30 10M30 10H10M30 10V30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
