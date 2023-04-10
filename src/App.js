import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers, Hands } from "react-xr";
import * as THREE from "three";

function InteractiveBox() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  const handlePointerUp = () => {
    console.log("Clicked");
  };

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      scale={isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <VRCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <InteractiveBox position={[-2, 0, -5]} />
        <DefaultXRControllers />
        <Hands />
      </VRCanvas>
    </div>
  );
}

export default App;
