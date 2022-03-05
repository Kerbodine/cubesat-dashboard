import React from "react";

const TableItem = ({
  data: { timeStamp, temperature, pressure, humidity },
}) => {
  return (
    <div className="w-full h-10 flex items-center bg-gray-100 rounded-lg px-2 gap-2">
      <p className="text-sm font-medium w-36 flex-none">{timeStamp}</p>
      <div className="w-0.5 h-6 bg-gray-300"></div>
      <p className="flex-auto">{temperature}°C</p>
      <p className="flex-auto">{pressure}kPa</p>
      <p className="flex-auto">{humidity}%</p>
    </div>
  );
};

export default TableItem;
