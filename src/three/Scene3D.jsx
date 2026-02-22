import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function AnimatedSphere(){

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[3,1]} />
      <meshStandardMaterial
        wireframe
        color="#06b6d4"
      />
    </mesh>
  );

}

export default function Scene3D(){

  return(

    <Canvas>

      <ambientLight intensity={0.5} />

      <pointLight position={[10,10,10]} />

      <AnimatedSphere />

    </Canvas>

  );

}