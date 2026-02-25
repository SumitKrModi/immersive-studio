"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Block scroll and blur background when menu is open
  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    if (isOpen) {
      document.body.style.overflow = "hidden"
      mainContent?.classList.add("modal-blur")
    } else {
      document.body.style.overflow = "unset"
      mainContent?.classList.remove("modal-blur")
    }
  }, [isOpen])

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-100 backdrop-blur-xl border-b border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-101">

        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors">
          ZENVY
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-indigo-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-101"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 md:hidden flex flex-col bg-black/95 backdrop-blur-3xl z-9999"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tighter">
                ZENVY
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
              >
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45 rounded-full" />
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45 rounded-full" />
                </div>
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black tracking-tighter uppercase hover:text-indigo-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}