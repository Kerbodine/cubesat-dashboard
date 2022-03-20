export const columns = [
  {
    Header: "Time",
    accessor: "formattedTime",
    Cell: (props) => <p>{props.value.slice(0, -7)}</p>,
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
