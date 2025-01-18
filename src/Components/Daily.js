import React from "react";
import { useSelector } from "react-redux";
import useAQIStatus from "../utils/useAqiStatus";

const Daily = () => {
  const weatherData = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday || []
  );

  console.log(weatherData);
  return (
    <div>
      {weatherData.map((e) => {
        const date = new Date(e.date);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${month}/${day}`;
        const dayIndex = date.getDay();
        const aqi = e.day?.air_quality?.["us-epa-index"];
        const { color, text } = useAQIStatus(aqi);

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const weekday = weekdays[dayIndex];
        return (
          <div class='bg-gray-100 p-6'>
            <div class='space-y-4'>
              <div class='bg-white p-4 rounded shadow-md'>
                <div class='flex justify-between items-center'>
                  <div>
                    <p class='text-gray-500'>{weekday}</p>
                    <p class='text-2xl font-bold'>{formattedDate}</p>
                  </div>
                  <img src={e.day.condition.icon} alt='weather'></img>
                </div>
                <div class={`mt-2 text-sm text-gray-600 `}>
                  {e.day.condition.text} ,air quality will be{" "}
                  <span className={`${color}`}>{text}</span>
                </div>
                <div class='grid grid-cols-2 gap-4 mt-4'>
                  <div>
                    <p class='text-gray-500'>Avg Temp</p>
                    <p>
                      {e.day.avgtemp_c}
                      <sup>o</sup>c
                    </p>
                  </div>
                  <div>
                    <p class='text-gray-500'>Wind</p>
                    <p>{e.day.maxwind_kph}kph</p>
                  </div>
                  <div>
                    <p class='text-gray-500'>Chances of rain</p>
                    <p>{e.day.daily_chance_of_rain}%</p>
                  </div>
                  <div>
                    <p class='text-gray-500'>Sunrise</p>
                    <p>{e.astro.sunrise}</p>
                  </div>
                  <div>
                    <p class='text-gray-500'>Sunset</p>
                    <p>{e.astro.sunset}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Daily;
