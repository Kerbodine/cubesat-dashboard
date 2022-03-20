import { useView } from "../contexts/ViewContext";
import { forecast } from "../config/data";
import { weatherIcons } from "../config/icons";
import { openWeatherIcons } from "../config/icons";
import { BiMenu } from "react-icons/bi";
import { useData } from "../contexts/DataContext";
import { WiBarometer, WiHumidity, WiThermometerExterior } from "react-icons/wi";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useView();
  const { location, forecastData } = useData();

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  console.log(forecastData);

  return (
    <div
      className={`${
        sidebar ? "w-[240px]" : "w-0 lg:w-[240px]"
      } absolute lg:block flex-none right-0 h-full border-l border-gray-200 bg-white lg:relative transition-all`}
    >
      <div className={`${!sidebar && "hidden lg:block"}`}>
        <div className="h-[56px] w-full flex items-center border-b border-gray-200 px-4 gap-2">
          <button
            onClick={toggleSidebar}
            className={`grid h-8 w-8 place-items-center text-xl text-gray-500 lg:hidden`}
          >
            <BiMenu />
          </button>
          <div>
            <p className="font-semibold -mb-1">Weather Forecast</p>
            <p className="text-gray-600 text-sm">
              Location: {location && location.country_name}
            </p>
          </div>
        </div>
        <div className="space-y-3 p-3 overflow-y-auto h-[calc(100vh-56px)] w-full">
          {forecastData ? (
            <>
              <h3 className="text-xs text-gray-500 font-bold">TODAY</h3>
              <WeatherCard day={forecastData.list[0]} />
              <hr className="border-gray-200" />
              <h3 className="text-xs text-gray-500 font-bold">UPCOMING</h3>
              {forecastData.list.slice(1).map((day, index) => (
                <WeatherCard key={index} day={day} />
              ))}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
