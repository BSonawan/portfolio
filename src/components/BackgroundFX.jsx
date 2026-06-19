import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function FloatingObjects() {
  const group = useRef();

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.08 + mouse.x * 0.12;
    group.current.rotation.x = mouse.y * 0.06;
  });

  return (
    <group ref={group}>
      {Array.from({ length: 18 }).map((_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 6 + (index % 4);
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 1.7) * 2.6,
              Math.sin(angle) * radius - 5
            ]}
          >
            <icosahedronGeometry args={[0.08 + (index % 3) * 0.025, 1]} />
            <meshStandardMaterial
              color={index % 2 ? "#22d3ee" : "#8b5cf6"}
              emissive={index % 2 ? "#0891b2" : "#6d28d9"}
              emissiveIntensity={1.2}
              roughness={0.35}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function BackgroundFX() {
  return (
    <div className="background-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 58 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 4, 5]} intensity={1.8} color="#38bdf8" />
        <pointLight position={[-4, -2, 2]} intensity={1.1} color="#a855f7" />
        <Stars radius={80} depth={45} count={1800} factor={4} fade speed={0.7} />
        <FloatingObjects />
      </Canvas>
    </div>
  );
}
