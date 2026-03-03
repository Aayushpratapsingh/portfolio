"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

export default function EventCard3D({
  title,
  description,
  tech,
  index,
  total,
  position,
  rotationY,
}) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      // Smoothly rotate to target rotation
      mesh.current.rotation.y += (rotationY - mesh.current.rotation.y) * 0.1;
    }
  });

  return (
    <motion.mesh
      ref={mesh}
      position={position}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      initial={{ y: 3, opacity: 0 }}
      animate={{ y: position[1], opacity: 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
    >
      <boxGeometry args={[3, 4, 0.2]} />
      <meshStandardMaterial
        color={hovered ? "#FFD700" : "#fff"}
        metalness={0.2}
        roughness={0.5}
      />

      <Html center distanceFactor={1.1}>
        <div className="w-72 h-96 p-4 flex flex-col justify-between text-center rounded-lg bg-black/70 text-white shadow-lg">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
          <div className="flex gap-2 justify-center mt-2 flex-wrap">
            {tech.map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </motion.mesh>
  );
}