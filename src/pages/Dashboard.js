import React from "react";
import { ReactComponent as DashboardBg } from "../svg/dashboard.svg";

const Dashboard = () => {
  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="w-full h-96 bg-gray-100 rounded-2xl relative overflow-hidden">
        <div className="absolute justify-center bottom-3 md:bottom-6 lg:bottom-0 lg:right-6 flex lg:flex-col h-24 w-full lg:w-[144px] lg:h-full px-3 lg:py-6 lg:px-0 gap-3">
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="text-lg font-semibold -mt-1">Temperature:</h3>
            <p className="absolute text-gray-600/75 font-mono font-semibold text-4xl bottom-3 right-3">
              23<span className="font-sans text-xl">°C</span>
            </p>
          </div>
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="text-lg font-semibold -mt-1">Pressure:</h3>
            <p className="absolute text-gray-600/75 font-mono font-semibold text-4xl bottom-3 right-3">
              72<span className="font-sans text-xl">kPa</span>
            </p>
          </div>
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="text-lg font-semibold -mt-1">Humidity:</h3>
            <p className="absolute text-gray-600/75 font-mono font-semibold text-4xl bottom-3 right-3">
              87<span className="font-sans text-xl">%</span>
            </p>
          </div>
        </div>
        <div className="absolute left-6 top-6 text-sm px-2 py-1 rounded-lg bg-white/70">
          23° N | 77° W <br /> X:24 | Y:56 | Z:173 <br /> CubeSat: 1A
        </div>
        <DashboardBg className="bg-slate-800" />
      </div>
    </div>
  );
};

export default Dashboard;
