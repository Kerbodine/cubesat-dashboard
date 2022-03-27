import React, { Suspense } from "react";
import { useData } from "../contexts/DataContext";
import { ReactComponent as DashboardBg } from "../svg/dashboard.svg";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Dashboard = () => {
  const { latestData } = useData();
  const gltf = useLoader(GLTFLoader, "/satelite_copy.glb");

  const deg2rad = (degrees) => degrees * (Math.PI / 180);

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
          {/* <span className="font-semibold">Gyro:</span>
          <br /> {Math.round(latestData.pitch * 10) / 10} (Pitch),{" "}
          {Math.round(latestData.roll * 10) / 10} (Roll),{" "}
          {Math.round(latestData.yaw * 10) / 10} (Yaw)
          <br />
          <span className="font-semibold">Accelerometer:</span>
          <br /> {Math.round(latestData.x * 10) / 10} (X),{" "}
          {Math.round(latestData.y * 10) / 10} (Y),{" "}
          {Math.round(latestData.z * 10) / 10} (Z)
          <br /> */}
          <span className="font-semibold">Last updated: </span>
          <br />
          <span className="font-mono">
            {latestData.formattedTime && latestData.formattedTime.slice(0, -7)}
          </span>
        </div>
        <div className="absolute top-24 hidden md:block">
          <Canvas
            id="cubesat"
            orthographic
            camera={{ zoom: 20, position: [0, 0, 40] }}
            pixelRatio={window.devicePixelRatio}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
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
