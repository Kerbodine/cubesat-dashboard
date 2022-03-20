import React, { useEffect } from "react";
import { useData } from "../contexts/DataContext";

const GetWeather = () => {
  const { location, setForecastData } = useData();

  const count = 6;

  const getData = async () => {
    const response = await fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&cnt=${count}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log("Fetch API");
    setForecastData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default GetWeather;
