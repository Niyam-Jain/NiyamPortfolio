"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NeuralNetwork from "./NeuralNetwork";

export default function HeroScene() {
  return (
    <div className="canvas-container absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <NeuralNetwork />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
