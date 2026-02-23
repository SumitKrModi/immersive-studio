"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [hovered, setHovered] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Immersive
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  )
}