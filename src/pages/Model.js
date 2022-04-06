import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/satelite_copy.glb");

  return (
    <Canvas
      id="cubesat"
      orthographic
      camera={{ zoom: 80, position: [100, 60, 80] }}
      dpr={window.devicePixelRatio}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[-25, 25, 10]} angle={0.4} intensity={2} />
      <Suspense fallback={<p>Loading...</p>}>
        <primitive object={gltf.scene} />
      </Suspense>
      <OrbitControls enableZoom={false} scale={0.5} />
    </Canvas>
  );
};

export default Model;
