import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere } from "@react-three/drei";
import * as THREE from "three";

const FloatingLaptop = ({ position, rotation, scale = 1 }: { 
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={scale}>
        {/* Laptop Base */}
        <mesh ref={meshRef} rotation={rotation}>
          <boxGeometry args={[2, 0.1, 1.4]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Laptop Screen */}
        <mesh position={[0, 0.7, -0.65]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[2, 1.3, 0.05]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, 0.7, -0.6]} rotation={[-0.3, 0, 0]}>
          <planeGeometry args={[1.8, 1.1]} />
          <meshBasicMaterial color="#25afd0" opacity={0.3} transparent />
        </mesh>
      </group>
    </Float>
  );
};

const GlowingSphere = ({ position, color, size = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
}) => {
  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={2}>
      <Sphere args={[size, 32, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          opacity={0.7}
          transparent
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ position: [x, y, z] as [number, number, number] });
    }
    return temp;
  }, []);

  return (
    <>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#25afd0" opacity={0.6} transparent />
        </mesh>
      ))}
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#25afd0" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1a8fa8" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} color="#ffffff" />
      
      <FloatingLaptop position={[3, 0, -2]} rotation={[0.2, -0.5, 0]} scale={0.8} />
      <FloatingLaptop position={[-3, -1, -3]} rotation={[0.1, 0.4, 0]} scale={0.6} />
      <FloatingLaptop position={[0, 2, -4]} rotation={[0.3, 0, 0.1]} scale={0.5} />
      
      <GlowingSphere position={[4, 2, -3]} color="#25afd0" size={0.5} />
      <GlowingSphere position={[-4, -2, -2]} color="#1a8fa8" size={0.4} />
      <GlowingSphere position={[2, -2, -4]} color="#0e6b7f" size={0.3} />
      
      <ParticleField />
      
      <Environment preset="city" />
    </>
  );
};

export const FloatingDevices = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};
