"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

export default function Model({ baseOpacity = 1.0 }: { baseOpacity?: number }) {
  const primaryPointsRef = useRef<THREE.Points>(null!)
  const primaryLinesRef = useRef<THREE.LineSegments>(null!)
  const secondaryPointsRef = useRef<THREE.Points>(null!)
  const dustRef = useRef<THREE.Points>(null!)

  const opacityRef = useRef(baseOpacity)

  const scrollRef = useRef(0)
  const { size } = useThree()

  const isMobile = size.width < 768
  const primaryCount = isMobile ? 50 : 120
  const secondaryCount = isMobile ? 30 : 60
  const dustCount = isMobile ? 100 : 300

  // 1. Primary Lattice Data
  const [primaryPos, primaryIndices] = useMemo(() => {
    const pos = new Float32Array(primaryCount * 3)
    for (let i = 0; i < primaryCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    const indices = []
    for (let i = 0; i < primaryCount; i++) {
      for (let j = i + 1; j < primaryCount; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 3) indices.push(i, j)
      }
    }
    return [pos, new Uint16Array(indices)]
  }, [primaryCount])

  // 2. Secondary Lattice Data (Fainter, further away)
  const secondaryPos = useMemo(() => {
    const pos = new Float32Array(secondaryCount * 3)
    for (let i = 0; i < secondaryCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [secondaryCount])

  // 3. Ambient Dust/Particles
  const dustPos = useMemo(() => {
    const pos = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [dustCount])

  useFrame((state) => {
    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight
    const totalHeight = document.documentElement.scrollHeight - viewportHeight
    const progress = Math.min(Math.max(scrollY / totalHeight, 0), 1)

    scrollRef.current = THREE.MathUtils.lerp(scrollRef.current, progress, 0.08)
    opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, baseOpacity, 0.05)

    const assembly = scrollRef.current
    const globalOpacity = opacityRef.current
    const time = state.clock.getElapsedTime()

    // Animation Logic with Depth Layers
    if (primaryPointsRef.current) {
      primaryPointsRef.current.rotation.y = time * 0.05
      primaryPointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
      primaryPointsRef.current.position.z = -5 + assembly * 15 // Dive forward

      const lineMesh = primaryLinesRef.current
      lineMesh.rotation.copy(primaryPointsRef.current.rotation)
      lineMesh.position.copy(primaryPointsRef.current.position)

      const mat = primaryPointsRef.current.material as THREE.PointsMaterial
      mat.size = (isMobile ? 0.06 : 0.1) * (Math.sin(time * 2) * 0.2 + 0.8)
      mat.opacity = 0.9 * globalOpacity
    }

    if (secondaryPointsRef.current) {
      secondaryPointsRef.current.rotation.y = -time * 0.03
      secondaryPointsRef.current.position.z = -15 + assembly * 10 // Slower move

      const mat = secondaryPointsRef.current.material as THREE.PointsMaterial
      mat.opacity = 0.3 * globalOpacity
    }

    if (dustRef.current) {
      dustRef.current.rotation.y = time * 0.01
      dustRef.current.position.y = Math.sin(time * 0.5) * 0.5

      const mat = dustRef.current.material as THREE.PointsMaterial
      mat.opacity = 0.2 * globalOpacity
    }

    if (primaryLinesRef.current) {
      const mat = primaryLinesRef.current.material as THREE.LineBasicMaterial
      mat.opacity = 0.4 * globalOpacity
    }
  })

  return (
    <group>
      {/* Primary Lattice Nodes */}
      <points ref={primaryPointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[primaryPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#6366f1"
          size={0.1}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Primary Connections */}
      <lineSegments ref={primaryLinesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[primaryPos, 3]} />
          <bufferAttribute attach="index" args={[primaryIndices, 1]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4338ca"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Secondary Distant Nodes */}
      <points ref={secondaryPointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[secondaryPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#818cf8"
          size={0.05}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Ambient Dust */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dustPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.02}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <pointLight intensity={3} color="#6366f1" distance={15} />
    </group>
  )
}
