import React from "react";
import Table from "../components/Table";
import { useData } from "../contexts/DataContext";
import { columns } from "../config/data";

const Realtime = () => {
  const { allData } = useData();

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
