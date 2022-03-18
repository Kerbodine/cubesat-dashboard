import { useView } from "../contexts/ViewContext";
import { forecast } from "../config/data";
import { weatherIcons } from "../config/icons";
import { BiMenu } from "react-icons/bi";

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useView();

  const formatTime = (date) => {
    const options = {
      weekday: "long",
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (tomorrow.toDateString() === date.toDateString()) {
      return "Tomorrow";
    }

    return date.toLocaleString("en-US", options);
  };

  return (
    <div
      className={`${
        sidebar ? "w-[240px]" : "w-0 lg:block lg:w-[240px] flex-none"
      } absolute right-0 h-full border-l border-gray-200 bg-white lg:relative transition-all`}
    >
      <div className={`${!sidebar && "hidden"}`}>
        <div className="h-[56px] w-full flex items-center border-b border-gray-200 px-4 gap-2">
          <button
            onClick={toggleSidebar}
            className={`grid h-8 w-8 place-items-center text-xl text-gray-500 sm:hidden`}
          >
            <BiMenu />
          </button>
          <p className="font-semibold">5-day Forecast</p>
        </div>
        <div className="space-y-3 p-3 overflow-y-auto h-[calc(100vh-56px)]">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="w-full rounded-lg bg-gray-100 flex items-center p-2 gap-2 text-gray-700"
            >
              <span className="text-4xl">{weatherIcons[day.icon]}</span>
              <div>
                <p className="text-sm -mb-1">{formatTime(day.date)}</p>
                <p className="font-medium -mb-1.5 text-lg">{day.weather}</p>
                <p className="text-sm">
                  {day.minTemp}°-{day.maxTemp}°
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
