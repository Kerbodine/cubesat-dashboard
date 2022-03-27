import React, { Suspense } from "react";
import { useData } from "../contexts/DataContext";
import { ReactComponent as DashboardBg } from "../svg/dashboard.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Dashboard = () => {
  const { latestData } = useData();
  const gltf = useLoader(GLTFLoader, "/satelite_copy.glb");

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="w-full h-96 bg-gray-100 rounded-2xl relative overflow-hidden">
        <div className="absolute justify-center bottom-3 md:bottom-6 lg:bottom-0 lg:right-6 flex flex-col sm:flex-row lg:flex-col h-[300px] sm:h-24 w-full lg:w-[176px] lg:h-full px-3 md:px-6 lg:py-6 lg:px-0 gap-3">
          <div className="max-w-[176px] w-full h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Temp:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {latestData.temperature}
              <span className="text-lg">°C</span>
            </p>
          </div>
          <div className="max-w-[176px] w-full h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Pressure:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {JSON.stringify(Math.round(latestData.pressure) / 10)}
              <span className="text-lg">kPa</span>
            </p>
          </div>
          <div className="max-w-[176px] w-full h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Humidity:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {JSON.stringify(latestData.humidity)}
              <span className="text-lg">%</span>
            </p>
          </div>
        </div>
        <div className="absolute left-3 top-3 md:left-6 md:top-6 text-sm px-2 py-1 h-12 rounded-lg bg-white/70 text-black/75">
          <span className="font-semibold">Last updated: </span>
          <br />
          <span className="font-mono">
            {latestData.formattedTime && latestData.formattedTime.slice(0, -7)}
          </span>
        </div>
        <div className="-left-40 relative hidden lg:block">
          <Canvas
            id="cubesat"
            orthographic
            camera={{ zoom: 40, position: [100, 60, 80] }}
            dpr={window.devicePixelRatio}
            style={{
              width: "50vw",
              height: "384px",
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
        </div>
        <DashboardBg className="bg-slate-800" />
      </div>
    </div>
  );
};

export default Dashboard;
