import React from "react";
import Table from "../components/Table";
import { realtimeData } from "../config/data";
import { useData } from "../contexts/DataContext";

const Realtime = () => {
  const columns = [
    {
      Header: "Time",
      accessor: "formattedTime",
      Cell: (props) => <div>{props.value.slice(0, -7)}</div>,
    },
    {
      Header: "Temperature (°C)",
      accessor: "temperature",
    },
    {
      Header: "Pressure (kPa)",
      accessor: "pressure",
    },
    {
      Header: "Humidity (%)",
      accessor: "humidity",
    },
  ];

  const { allData } = useData();
  console.log(allData);

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Realtime</h1>
      <div className="w-[calc(100vw-88px)] sm:w-full overflow-y-scroll p-0">
        <Table tableData={allData} tableColumns={columns} />
      </div>
    </div>
  );
};

export default Realtime;
