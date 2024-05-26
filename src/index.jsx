import { createRoot } from "react-dom/client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Teeth } from "./components/Teeth.jsx";
import {PerspectiveCamera } from "@react-three/drei";


createRoot(document.getElementById("root")).render(
  <Canvas    
  >
    <PerspectiveCamera makeDefault position={[0, 0, 25]} />
    <ambientLight intensity={Math.PI / 2} />
    <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      decay={0}
      intensity={Math.PI}
    />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Teeth  position={[0, 0, 0]} />
  </Canvas>
);
