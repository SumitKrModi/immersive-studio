"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import Model from "./Model"

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >

        {/* Modern Studio Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#6366f1" castShadow />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#4338ca" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />

        <Model />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} makeDefault />
      </Canvas>
    </div>
  )
}