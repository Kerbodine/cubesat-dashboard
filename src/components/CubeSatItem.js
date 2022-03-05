import React from "react";

const CubeSatItem = ({
  data: { online, name, lastActive, location, orientation },
}) => {
  return (
    <div className="w-full h-28 flex-none flex items-center bg-gray-100 rounded-lg px-2 gap-2">
      <div
        className={`w-24 h-24 ${
          online ? "bg-emerald-500" : "bg-red-400"
        } text-white grid place-items-center font-semibold rounded-md`}
      >
        {online ? "Online" : "Offline"}
      </div>
      <div className="w-0.5 h-24 flex-none bg-gray-200"></div>
      <div className="flex-auto flex flex-col truncate leading-6">
        <p className="text-lg font-medium -mb-1">{name}</p>
        <p className="text-gray-600">Last active: {lastActive}</p>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">Orientation: {orientation}</p>
      </div>
    </div>
  );
};

export default CubeSatItem;
