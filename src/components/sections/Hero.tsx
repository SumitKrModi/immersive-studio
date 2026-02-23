"use client"

import Scene from "@/components/three/Scene"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Immersive 3D Experiences
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          We craft cinematic web interactions that elevate modern brands.
        </p>
      </div>

      <Scene />

    </section>
  )
}