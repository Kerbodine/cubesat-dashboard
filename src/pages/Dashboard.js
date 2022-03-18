import {
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { ReactComponent as DashboardBg } from "../svg/dashboard.svg";

const Dashboard = () => {
  const [latestData, setLatestData] = useState({});

  // https://stackoverflow.com/questions/33036487/one-liner-to-flatten-nested-object
  const flattenObject = (obj) => {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }
    });

    return flattened;
  };

  const db = getDatabase();

  useEffect(() => {
    const unsubscribe = onValue(
      query(ref(db, "data"), orderByChild("timeStamp"), limitToLast(1)),
      (snapshot) => {
        const data = snapshot.val();
        setLatestData(flattenObject(data));
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="w-full h-96 bg-gray-100 rounded-2xl relative overflow-hidden">
        <div className="absolute justify-center bottom-3 md:bottom-6 lg:bottom-0 lg:right-6 flex lg:flex-col h-24 w-full lg:w-[144px] lg:h-full px-3 lg:py-6 lg:px-0 gap-3">
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Temperature:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {latestData.temperature}
              <span className="font-sans text-lg">°C</span>
            </p>
          </div>
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Pressure:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {JSON.stringify(Math.round(latestData.pressure) / 10)}
              <span className="font-sans text-lg">kPa</span>
            </p>
          </div>
          <div className="w-full max-w-[144px] h-full bg-white/70 rounded-lg p-3 relative">
            <h3 className="font-semibold -mt-1 text-black/75">Humidity:</h3>
            <p className="absolute text-gray-600/75 font-semibold text-3xl bottom-3 right-3">
              {JSON.stringify(latestData.humidity)}
              <span className="font-sans text-lg">%</span>
            </p>
          </div>
        </div>
        <div className="absolute left-6 top-6 text-sm px-2 py-1 rounded-lg bg-white/70 text-black/75">
          <span className="font-semibold">Gyro:</span>{" "}
          {Math.round(latestData.pitch * 10) / 10} (Pitch),{" "}
          {Math.round(latestData.roll * 10) / 10} (Roll),{" "}
          {Math.round(latestData.yaw * 10) / 10} (Yaw)
          <br />
          <span className="font-semibold">Accelerometer:</span>{" "}
          {Math.round(latestData.x * 10) / 10} (X),{" "}
          {Math.round(latestData.y * 10) / 10} (Y),{" "}
          {Math.round(latestData.z * 10) / 10} (Z)
          <br />
          <span className="font-semibold">Last updated: </span>
          {latestData.formattedTime && latestData.formattedTime.slice(0, -7)}
        </div>
        <DashboardBg className="bg-slate-800" />
      </div>
    </div>
  );
};

export default Dashboard;
