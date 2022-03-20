import React from "react";
import { useData } from "../contexts/DataContext";

const Forecast = () => {
  const { location } = useData();

  return <div>{JSON.stringify(location)}</div>;
};

export default Forecast;
