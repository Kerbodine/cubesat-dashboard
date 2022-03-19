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

export const forecast = [
  {
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    weather: "Overcast",
    icon: "overcast",
    minTemp: "17",
    maxTemp: "22",
  },
  {
    date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
    weather: "Cloudy",
    icon: "cloudy",
    minTemp: "19",
    maxTemp: "23",
  },
  {
    date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
    weather: "Sunny",
    icon: "sunny",
    minTemp: "21",
    maxTemp: "27",
  },
  {
    date: new Date(new Date().getTime() + 96 * 60 * 60 * 1000),
    weather: "Rain",
    icon: "rain",
    minTemp: "20",
    maxTemp: "24",
  },
  {
    date: new Date(new Date().getTime() + 120 * 60 * 60 * 1000),
    weather: "Thunder",
    icon: "thunder",
    minTemp: "19",
    maxTemp: "23",
  },
];
