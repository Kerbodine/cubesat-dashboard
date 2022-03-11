import { useView } from "../contexts/ViewContext";
import { forecast } from "../config/data";
import { weatherIcons } from "../config/icons";

export default function Sidebar() {
  const { sidebar } = useView();

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
        sidebar ? "w-[240px]" : "hidden w-0 lg:block lg:w-[240px] flex-none"
      } absolute right-0 h-full border-l border-gray-200 bg-white lg:relative`}
    >
      <div className="h-[56px] w-full flex items-center border-b border-gray-200 px-4">
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
  );
}
