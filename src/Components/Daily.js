import React from "react";
import { useSelector } from "react-redux";
import useAQIStatus from "../utils/useAqiStatus";

const Daily = () => {
  const weatherData = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday || []
  );

  // console.log(weatherData);
  return (
    <div>
      {weatherData.map((e, index) => {
        const date = new Date(e.date);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${month}/${day}`;
        const dayIndex = date.getDay();
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const weekday = weekdays[dayIndex];
        return (
          <div className='bg-gray-100 p-6 py-6 sm:px-64' key={index}>
            <div className='space-y-4'>
              <div className='bg-white p-4 rounded shadow-md'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500'>{weekday}</p>
                    <p className='text-2xl font-bold'>{formattedDate}</p>
                  </div>
                  <img src={e.day.condition.icon} alt='weather'></img>
                </div>
                <div className={`mt-2 text-lg text-gray-600 `}>
                  <strong>{e.day.condition.text} </strong>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div>
                    <p className='text-gray-500'>Avg Temp</p>
                    <p>
                      {e.day.avgtemp_c}
                      <sup>o</sup>c
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-500'>Wind</p>
                    <p>{e.day.maxwind_kph}kph</p>
                  </div>
                  <div>
                    <p className='text-gray-500'>Chances of rain</p>
                    <p>{e.day.daily_chance_of_rain}%</p>
                  </div>
                  <div>
                    <p className='text-gray-500'>Sunrise</p>
                    <p>{e.astro.sunrise}</p>
                  </div>
                  <div>
                    <p className='text-gray-500'>Sunset</p>
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
