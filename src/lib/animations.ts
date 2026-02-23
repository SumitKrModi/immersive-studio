import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (element: string) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
}