"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 3D Neural Network visualization.
 * Creates a set of nodes arranged in layered clusters with animated connecting lines.
 * Mouse position drives subtle rotation via the parent Canvas's camera.
 */
export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate node positions in "layers" resembling a neural net
  const { positions, connections } = useMemo(() => {
    const layers = [5, 8, 10, 8, 5];
    const layerSpacing = 1.8;
    const nodes: THREE.Vector3[] = [];

    layers.forEach((count, layerIdx) => {
      const x = (layerIdx - (layers.length - 1) / 2) * layerSpacing;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = 1.2 + Math.random() * 0.3;
        const y = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        nodes.push(new THREE.Vector3(x, y, z));
      }
    });

    // Build edges between adjacent layers
    const edges: number[] = [];
    let offset = 0;
    for (let l = 0; l < layers.length - 1; l++) {
      const currCount = layers[l];
      const nextCount = layers[l + 1];
      const nextOffset = offset + currCount;
      for (let i = 0; i < currCount; i++) {
        // Connect each node to 2-3 random nodes in the next layer
        const numConnections = 2 + Math.floor(Math.random() * 2);
        const connected = new Set<number>();
        for (let c = 0; c < numConnections; c++) {
          let target = Math.floor(Math.random() * nextCount);
          while (connected.has(target)) {
            target = (target + 1) % nextCount;
          }
          connected.add(target);
          const from = nodes[offset + i];
          const to = nodes[nextOffset + target];
          edges.push(from.x, from.y, from.z, to.x, to.y, to.z);
        }
      }
      offset += currCount;
    }

    // Float32 for points geometry
    const posArray = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      posArray[i * 3] = n.x;
      posArray[i * 3 + 1] = n.y;
      posArray[i * 3 + 2] = n.z;
    });

    return { positions: posArray, connections: new Float32Array(edges) };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes as points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00d4ff"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Connecting lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.15} />
      </lineSegments>

      {/* Ambient glow sphere */}
      <mesh>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
