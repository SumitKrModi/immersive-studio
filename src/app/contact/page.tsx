"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-sm uppercase tracking-[0.4em] text-indigo-500 font-bold mb-6">Ready for Takeoff</h1>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                            LET'S GET <br /> TO WORK.
                        </h2>
                        <div className="mt-20 space-y-8">
                            <div>
                                <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-2">New Projects</span>
                                <a href="mailto:hello@zenvy.tech" className="text-2xl font-bold hover:text-indigo-400 transition-colors">hello@zenvy.tech</a>
                            </div>
                            <div>
                                <span className="block text-gray-600 text-[10px] uppercase tracking-widest font-bold mb-2">Office</span>
                                <p className="text-2xl font-bold">San Francisco, CA</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-900/40 p-12 rounded-[2.5rem] border border-white/5"
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">I am</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Reach me at</label>
                                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Mission</label>
                                <textarea rows={4} placeholder="Project Details" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl resize-none" />
                            </div>
                            <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-indigo-600 hover:text-white transition-all mt-10">
                                Send Transmission
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
