'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function SystemScanner() {
  const meshRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  // Generate data-stream particles
  const particles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        speed: 0.01 + Math.random() * 0.02
      });
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Animate scanning beam
    if (beamRef.current) {
      beamRef.current.position.y = Math.sin(t * 1.5) * 2;
    }

    // Rotate computer model slightly
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += particles[i].speed;
        if (child.position.y > 2) child.position.y = -2;
        child.rotation.x += 0.01;
        child.rotation.z += 0.01;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* The Diagnostic Neon Mainframe (High-Contrast & Lucrative) */}
        <group ref={meshRef}>
          {/* Polished Chrome Frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4.2, 2.0, 0.3]} />
            <meshStandardMaterial 
              color="#e2e8f0" 
              roughness={0.05} 
              metalness={1} 
            />
          </mesh>

          {/* High-Impact Neon Lime Display Pad */}
          <mesh position={[0, 0, 0.16]}>
            <planeGeometry args={[4, 1.8]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.05}
              chromaticAberration={0.02}
              anisotropy={1}
              distortion={0}
              color="#c1ff00"
              transmission={0.9}
              emissive="#c1ff00"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Technical Detail: Gold-Plated Side Connectors */}
          <mesh position={[-2.2, 0, 0]}>
            <boxGeometry args={[0.2, 1.4, 0.5]} />
            <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.1} />
          </mesh>
          <mesh position={[2.2, 0, 0]}>
            <boxGeometry args={[0.2, 1.4, 0.5]} />
            <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.1} />
          </mesh>

          {/* Moving Data Strips (Neon Lime) */}
          <group position={[0, 0, 0.17]}>
            {[...Array(6)].map((_, i) => (
              <mesh key={i} position={[(i - 2.5) * 0.6, Math.sin(i + Date.now() * 0.001) * 0.1, 0]}>
                <boxGeometry args={[0.05, 1.2, 0.01]} />
                <meshBasicMaterial color="#c1ff00" transparent opacity={0.6} />
              </mesh>
            ))}
          </group>

          {/* Rotating Cooling Fan / Tech Core */}
          <mesh position={[1.5, -0.5, 0.18]} rotation={[0, 0, Date.now() * 0.002]}>
             <torusGeometry args={[0.2, 0.02, 16, 32]} />
             <meshBasicMaterial color="#c1ff00" />
          </mesh>

          {/* High-End Base (Carbon Fiber Look) */}
          <mesh position={[0, -1.6, 0]}>
             <boxGeometry args={[2.5, 0.1, 1.2]} />
             <meshStandardMaterial color="#0a0a0a" roughness={1} metalness={0} />
          </mesh>
          <mesh position={[0, -1.3, -0.1]}>
             <boxGeometry args={[0.4, 0.6, 0.1]} />
             <meshStandardMaterial color="#64748b" metalness={1} />
          </mesh>
        </group>

        {/* Outer Orbiting Rings (Stitch Neon Lime) */}
        <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <mesh>
            <torusGeometry args={[4.8, 0.01, 16, 100]} />
            <meshBasicMaterial color="#c1ff00" transparent opacity={0.3} />
          </mesh>
        </group>

        {/* High-Intensity Scanning Beam (Restored Red for Danger/Contrast) */}
        <group ref={beamRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3.8, 3.85, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.9} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
            <ringGeometry args={[0, 3.8, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.12} side={THREE.DoubleSide} />
          </mesh>
          <pointLight color="#ef4444" intensity={15} distance={6} />
        </group>

        {/* Neural Particles (High Visibility) */}
        <group ref={particlesRef}>
          {particles.map((p, i) => (
            <mesh key={i} position={p.position}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshBasicMaterial color={i % 2 === 0 ? "#c1ff00" : "#ffffff"} transparent opacity={0.8} />
            </mesh>
          ))}
        </group>

        {/* Ambient background grid lines */}
        <gridHelper args={[10, 20, "#1e293b", "#0f172a"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
      </group>
    </Float>
  );
}
