import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [latestData, setLatestData] = useState({});
  const [allData, setAllData] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const value = {
    latestData,
    setLatestData,
    allData,
    setAllData,
    allImages,
    setAllImages,
    location,
    setLocation,
    forecastData,
    setForecastData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
