import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [latestData, setLatestData] = useState({});
  const [allData, setAllData] = useState([]);

  const value = {
    latestData,
    setLatestData,
    allData,
    setAllData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
