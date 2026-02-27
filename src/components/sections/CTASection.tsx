"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
    return (
        <section className="py-40 bg-transparent text-center px-6 relative overflow-hidden">
            {/* Background Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full z-0" />

            <div className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-fluid-h2 font-black tracking-tighter uppercase wrap-break-word px-4"
                >
                    READY FOR <br /> COMMITMENT?
                </motion.h2>
                <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-xl mx-auto font-medium tracking-tight px-6">
                    Join the category disrupters. Let's build the next generation of the web together.
                </p>
                <div className="mt-12">
                    <Link href="/contact" className="group relative inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden transition-colors hover:text-white">
                        <span className="relative z-10">Start A Project</span>
                        <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                </div>

                <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-4xl mx-auto pt-20 border-t border-white/5 px-6">
                    <div>
                        <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-3">Connect</span>
                        <a href="#" className="text-lg md:text-base hover:text-indigo-400 transition-colors">LinkedIn</a>
                    </div>
                    <div>
                        <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-3">Social</span>
                        <a href="https://www.instagram.com/zenvywebtech?igsh=MTJiMzdjMnEzOXJtZQ==" className="text-lg md:text-base hover:text-indigo-400 transition-colors">Instagram</a>
                    </div>
                    <div>
                        <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-3">Email</span>
                        <a href="mailto:hello@zenvy.tech" className="text-md md:text-sm hover:text-indigo-400 transition-colors break-all">zenvywebtech@gmail.com</a>
                    </div>
                    <div>
                        <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-3">Call</span>
                        <a href="tel:+91 92049 10346" className="text-lg md:text-base hover:text-indigo-400 transition-colors">+91 92049 10346</a> <br />
                        <a href="tel:+91 70042 87513" className="text-lg md:text-base hover:text-indigo-400 transition-colors">+91 7004287513</a> <br />
                        <a href="tel:+91 89358 88196" className="text-lg md:text-base hover:text-indigo-400 transition-colors">+91 9204910346</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
