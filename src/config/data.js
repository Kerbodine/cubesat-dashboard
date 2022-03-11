export const realtimeData = [
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
