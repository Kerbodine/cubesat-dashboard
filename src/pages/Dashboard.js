import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
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
              <div className="w-full h-full p-4 sm:p-8 lg:p-12">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <div className="w-full h-96 bg-gray-100 rounded-2xl relative">
                  <div className="absolute justify-center bottom-3 md:bottom-6 lg:bottom-0 lg:right-6 flex lg:flex-col h-24 w-full lg:w-[144px] lg:h-full px-3 lg:py-6 lg:px-0 gap-3">
                    <div className="w-full max-w-[144px] h-full bg-gray-200 rounded-lg"></div>
                    <div className="w-full max-w-[144px] h-full bg-gray-200 rounded-lg"></div>
                    <div className="w-full max-w-[144px] h-full bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar section */}
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
