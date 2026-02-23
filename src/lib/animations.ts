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

export const revealOnScroll = (element: string) => {
  const el = document.querySelectorAll(element)
  if (!el.length) return

  gsap.from(el, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2
  })
}

export const cinematicScale = (element: string) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      scrub: true
    },
    scale: 0.8,
    opacity: 0.5,
    duration: 1
  })
}