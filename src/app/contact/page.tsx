"use client"

import { motion } from "framer-motion"
import { useActionState } from "react"
import { submitContactForm, FormState } from "./actions"

const initialState: FormState = {
    success: false,
    message: ""
}

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    return (
        <main className="bg-transparent text-white min-h-screen pt-32 px-6">
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
                        className="bg-neutral-900/40 p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
                    >
                        {state.success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mb-8">
                                    <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Transmission Received</h3>
                                <p className="text-gray-400 max-w-sm">
                                    We've received your mission details and our team is already analyzing them. Stand by for a response.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-10 text-sm font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                                >
                                    Send Another Transmission
                                </button>
                            </motion.div>
                        ) : (
                            <form action={formAction} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">I am</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Reach me at</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Mission</label>
                                    <textarea
                                        name="mission"
                                        required
                                        rows={4}
                                        placeholder="Project Details"
                                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-colors text-xl resize-none"
                                    />
                                </div>

                                {state.message && (
                                    <p className={`text-sm ${state.success ? 'text-green-400' : 'text-red-400 font-bold italic'}`}>
                                        {state.message}
                                    </p>
                                )}

                                <button
                                    disabled={isPending}
                                    className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-indigo-600 hover:text-white transition-all mt-10 disabled:bg-gray-400 disabled:cursor-not-allowed group relative"
                                >
                                    <span className={isPending ? "opacity-0" : "opacity-100"}>
                                        {isPending ? "Syncing..." : "Send Transmission"}
                                    </span>
                                    {isPending && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
