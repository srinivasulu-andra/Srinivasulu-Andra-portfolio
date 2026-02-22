import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AnimatedSphere() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="purple" wireframe />
    </mesh>
  );
}