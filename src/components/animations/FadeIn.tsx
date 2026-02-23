"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ScrollFadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.from(ref.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      }
    })
  }, [])

  return <div ref={ref}>{children}</div>
}