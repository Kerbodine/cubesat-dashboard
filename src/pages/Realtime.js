import React from "react";
import Table from "../components/Table";
import { realtimeData } from "../config/data";

const Realtime = () => {
  const columns = [
    {
      Header: "Time",
      accessor: "timeStamp",
    },
    {
      Header: "Temperature",
      accessor: "temperature",
    },
    {
      Header: "Pressure",
      accessor: "pressure",
    },
    {
      Header: "Humidity",
      accessor: "humidity",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Realtime</h1>
      <div className="w-[calc(100vw-88px)] sm:w-full overflow-y-scroll">
        <Table tableData={realtimeData} tableColumns={columns} />
      </div>
    </div>
  );
};

export default Realtime;
