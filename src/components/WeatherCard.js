import React, { useState } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import {
  WiBarometer,
  WiCloud,
  WiHumidity,
  WiStrongWind,
  WiThermometerExterior,
} from "react-icons/wi";
import { openWeatherIcons } from "../config/icons";

const WeatherCard = ({ day }) => {
  const [expanded, setExpanded] = useState(false);

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div
      className={`${
        expanded ? "h-40" : "h-14"
      } w-full rounded-lg bg-gray-100 flex p-2 text-gray-700 gap-2 transition-all relative`}
    >
      <div className="space-y-1 h-full flex flex-col justify-center">
        <span className="text-4xl">
          {openWeatherIcons[day.weather[0].icon]}
        </span>
        {day.rain > 0 && expanded && (
          <p className="text-sm leading-3 text-center">
            {day.rain}
            <br />
            mm
          </p>
        )}
      </div>
      <div>
        <p className="text-sm -mb-0.5 text-gray-500">{formatTime(day.dt)}</p>
        <p className="font-medium -mb-0.5">{day.weather[0].main}</p>
        {expanded && (
          <div className="mt-2">
            <p className="text-sm flex items-center">
              <span className="text-xl -ml-1">
                <WiThermometerExterior />
              </span>
              {day.feels_like.day}°
            </p>
            <p className="text-sm flex items-center">
              <span className="text-xl -ml-1">
                <WiHumidity />
              </span>
              {day.humidity}%
            </p>
            <p className="text-sm flex items-center">
              <span className="text-xl -ml-1">
                <WiBarometer />
              </span>
              {day.pressure / 10}kPa
            </p>
            <p className="text-sm flex items-center">
              <span className="text-xl -ml-1">
                <WiCloud />
              </span>
              {day.clouds}%
            </p>
            <p className="text-sm flex items-center">
              <span className="text-xl -ml-1">
                <WiStrongWind />
              </span>
              {day.gust}m/s
            </p>
          </div>
        )}
      </div>
      <button
        className="p-1 h-10 rounded-lg bg-white absolute right-2 top-2 text-2xl text-gray-500"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <BiChevronUpCircle /> : <BiChevronDownCircle />}
      </button>
    </div>
  );
};

export default WeatherCard;
