import React, { useMemo } from "react";
import { useTable } from "react-table";

const Table = ({ tableData, tableColumns }) => {
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps} className="w-full">
      <thead className="h-8 bg-gray-200 border-2 border-gray-200">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="p-1.5 text-left font-semibold"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="border-2 border-gray-200 divide-x-2 divide-gray-200 text-gray-600"
            >
              {row.cells.map((cell) => {
                return (
                  <td className="p-1.5 text-sm" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
