"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function Model() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  )
}