import React, { useState } from "react";
import TableItem from "../components/TableItem";

const Realtime = () => {
  const data = [
    {
      id: 1,
      timeStamp: "01/01/2020 00:00:00",
      temperature: "23",
      pressure: "76",
      humidity: "56",
    },
    {
      id: 2,
      timeStamp: "01/01/2020 00:00:00",
      temperature: "22",
      pressure: "84",
      humidity: "58",
    },
    {
      id: 3,
      timeStamp: "01/01/2020 00:00:00",
      temperature: "24",
      pressure: "112",
      humidity: "62",
    },
    {
      id: 4,
      timeStamp: "01/01/2020 00:00:00",
      temperature: "25",
      pressure: "100",
      humidity: "65",
    },
    {
      id: 5,
      timeStamp: "01/01/2020 00:00:00",
      temperature: "24",
      pressure: "96",
      humidity: "72",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Realtime</h1>
      <div className="w-full space-y-2">
        <div className="w-full h-10 flex items-center bg-gray-200 rounded-lg px-2 gap-2 font-medium">
          <p className="w-36 flex-none">Timestamp:</p>
          <div className="w-0.5 h-6 bg-gray-300 flex-none"></div>
          <p className="w-full truncate">Temperature:</p>
          <p className="w-full truncate">Pressure:</p>
          <p className="w-full truncate">Humidity:</p>
        </div>
        <hr className="h-0.5 bg-gray-200" />
        {data.map((item) => (
          <TableItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Realtime;
