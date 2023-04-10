import React from "react";
import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers, Hands, useXR } from "react-xr";
import { Box, Sphere, OrbitControls } from "drei";

function InteractiveBox() {
  const { isHovered, onClick } = useXR((state) => ({
    isHovered: state.hovered,
    onClick: state.select,
  }));

  return (
    <Box
      args={[1, 1, 1]}
      onClick={onClick}
      onPointerUp={onClick}
      scale={isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </Box>
  );
}

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <VRCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <InteractiveBox position={[-2, 0, -5]} />
        <Sphere args={[1, 32, 32]} position={[2, 0, -5]}>
          <meshStandardMaterial color="blue" />
        </Sphere>
        <DefaultXRControllers />
        <Hands />
        <OrbitControls />
      </VRCanvas>
    </div>
  );
}

export default App;
