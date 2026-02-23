"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { MeshDistortMaterial, Float } from "@react-three/drei"

export default function Model() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse, size } = useThree()

  // Conditionally reduce segments on small screens (mobile)
  const isMobile = size.width < 768
  const segments = useMemo(() => isMobile ? 8 : 15, [isMobile])
  const scale = useMemo(() => isMobile ? 1.2 : 1.5, [isMobile])

  useFrame((state) => {
    if (!isMobile) {
      // Smooth responsive rotation based on mouse (Desktop only)
      const targetRotationX = mouse.y * 0.5
      const targetRotationY = mouse.x * 0.5
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1)
    } else {
      // Automatic rotation for mobile
      meshRef.current.rotation.y += 0.01
    }

    // Constant slow float
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, segments]} />
        <MeshDistortMaterial
          color="#6366f1"
          speed={2}
          distort={isMobile ? 0.3 : 0.4}
          radius={1}
          emissive="#4338ca"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}