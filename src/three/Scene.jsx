import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere(){

return(

<Float speed={3} rotationIntensity={2}>

<mesh>

<sphereGeometry args={[2,64,64]}/>

<meshStandardMaterial
color="#8b5cf6"
wireframe
/>

</mesh>

</Float>

);

}

export default function Scene(){

return(

<Canvas>

<ambientLight intensity={0.5}/>

<pointLight position={[10,10,10]}/>

<Sphere/>

<OrbitControls enableZoom={false}/>

</Canvas>

);

}