import React from "react";
import CubeSatItem from "../components/CubeSatItem";

const CubeSats = () => {
  const data = [
    {
      id: 1,
      online: true,
      name: "CubeSat 1",
      lastActive: "01/01/2020 00:00:00",
      location: "23° N | 77° W",
      orientation: "X:24 | Y:56 | Z:173",
    },
    {
      id: 2,
      online: true,
      name: "CubeSat 2",
      lastActive: "01/01/2020 00:00:00",
      location: "23° N | 77° W",
      orientation: "X:24 | Y:56 | Z:173",
    },
    {
      id: 3,
      online: false,
      name: "CubeSat 3",
      lastActive: "01/01/2020 00:00:00",
      location: "23° N | 77° W",
      orientation: "X:24 | Y:56 | Z:173",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">CubeSats</h1>
      <div className="w-full space-y-2">
        {data.map((item) => (
          <CubeSatItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CubeSats;
