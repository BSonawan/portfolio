import { Float, Html, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function DeveloperAvatar() {
  const group = useRef();

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.7) * 0.16 + mouse.x * 0.22;
    group.current.rotation.x = mouse.y * 0.12;
  });

  return (
    <group ref={group} position={[0, -0.25, 0]}>
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.45, 48, 48]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.42} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <capsuleGeometry args={[0.48, 1.15, 12, 32]} />
        <meshStandardMaterial color="#2563eb" roughness={0.28} metalness={0.22} />
      </mesh>
      <mesh position={[-0.74, 0.3, 0]} rotation={[0, 0, -0.35]}>
        <capsuleGeometry args={[0.12, 0.9, 8, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0.74, 0.3, 0]} rotation={[0, 0, 0.35]}>
        <capsuleGeometry args={[0.12, 0.9, 8, 16]} />
        <meshStandardMaterial color="#a855f7" emissive="#7c3aed" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, -0.55, 0.24]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[1.45, 0.75, 0.08]} />
        <meshStandardMaterial color="#101828" metalness={0.5} roughness={0.24} />
      </mesh>
      <Html position={[0, -0.55, 0.34]} transform center>
        <div className="mini-terminal">
          <span>Java</span>
          <span>ML</span>
          <span>React</span>
        </div>
      </Html>
    </group>
  );
}

function TechRing() {
  const ring = useRef();

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.y = clock.elapsedTime * 0.45;
    ring.current.rotation.z = Math.sin(clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <group ref={ring}>
      {["Java", "ML", "SQL", "UI", "API", "AI"].map((label, index) => {
        const angle = (index / 6) * Math.PI * 2;
        return (
          <Html
            key={label}
            position={[Math.cos(angle) * 1.95, Math.sin(angle) * 0.42 + 0.45, Math.sin(angle) * 1.95]}
            transform
            center
          >
            <div className="ring-chip">{label}</div>
          </Html>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.7, 5.2], fov: 45 }} dpr={[1, 1.8]}>
      <ambientLight intensity={0.75} />
      <spotLight position={[2, 5, 4]} angle={0.45} penumbra={1} intensity={2.2} color="#38bdf8" />
      <pointLight position={[-3, 1, 2]} intensity={1.7} color="#a855f7" />
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.8}>
        <DeveloperAvatar />
        <TechRing />
      </Float>
      <Sparkles count={90} scale={5.5} size={3} speed={0.35} color="#67e8f9" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
