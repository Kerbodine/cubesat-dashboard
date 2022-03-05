import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CubeSats from "./CubeSats";
import Dashboard from "./Dashboard";
import Images from "./Images";
import Realtime from "./Realtime";

const MainView = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen w-screen">
      {loading ? (
        <div className="grid h-full w-full place-items-center">
          {/* <Loader /> */}
        </div>
      ) : (
        <>
          <hr className="absolute top-[55px] h-[1px] w-screen border-gray-200" />
          <div className="mx-auto flex h-full w-full max-w-screen-xl">
            {/* Navbar section */}
            <Navbar />
            {/* Main task area */}
            <div className="ml-[56px] w-full h-full flex-auto sm:ml-0">
              <div className="h-[56px] border-b border-gray-200"></div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cubesats" element={<CubeSats />} />
                <Route path="/realtime" element={<Realtime />} />
                <Route path="/images" element={<Images />} />
              </Routes>
            </div>
            {/* Sidebar section */}
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default MainView;
