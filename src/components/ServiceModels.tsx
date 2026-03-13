import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function CoreSphere() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  
  // Generate random points for neural nodes
  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 40; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      ));
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.1;
      outerRef.current.rotation.z = t * 0.05;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.2;
      innerRef.current.scale.setScalar(0.8 + Math.sin(t * 2) * 0.05);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Neural Network Nodes */}
        <group ref={outerRef}>
          {nodes.map((pos, i) => (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshBasicMaterial color="#0ea5e9" transparent opacity={0.6} />
            </mesh>
          ))}
          {/* Connecting Lines (Simulated by an Octahedron wireframe for tech feel) */}
          <mesh scale={2}>
            <octahedronGeometry args={[1, 2]} />
            <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.1} />
          </mesh>
        </group>
        
        {/* Core AI Intelligence */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#0ea5e9"
            envMapIntensity={2}
            clearcoat={1}
            metalness={0.9}
            roughness={0.1}
            distort={0.4}
            speed={4}
          />
        </mesh>

        {/* Dynamic Light Pulses */}
        <pointLight intensity={10} distance={10} color="#0ea5e9">
          <Sphere args={[0.05, 16, 16]}>
            <meshBasicMaterial color="#0ea5e9" />
          </Sphere>
        </pointLight>
      </group>
    </Float>
  );
}

export function CyberTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.5}
            color="#0ea5e9"
          />
        </mesh>
        
        {/* Internal Structure */}
        <Box args={[0.5, 0.5, 0.5]}>
          <meshBasicMaterial color="#0ea5e9" wireframe />
        </Box>
        
        <mesh scale={1.1}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}
