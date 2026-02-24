"use client"

import { useEffect } from "react"
import Hero from "@/components/sections/Hero"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import CTASection from "@/components/sections/CTASection"
import { revealOnScroll } from "@/lib/animations"
import { gsap } from "gsap"

export default function Home() {
  useEffect(() => {
    // GSAP Context ensures all animations/triggers created inside are cleaned up automatically
    const ctx = gsap.context(() => {
      revealOnScroll("section")
    })

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <CTASection />
    </main>
  )
}