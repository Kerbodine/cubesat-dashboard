import React, { useState } from "react";
import Navbar from "../components/Navbar";

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
            <div className="ml-[56px] h-full flex-auto sm:ml-0"></div>
            {/* Sidebar section */}
            {/* <Sidebar /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
