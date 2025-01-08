import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAQIStatus from "../utils/useAqiStatus";
import useTodayBgImg from "../utils/usetodaybgimg";

const TodayWeather = () => {
  const day = useSelector((store) => store.weather.weatherForecast);
  const location = useSelector((store) => store.weather.location);
  if (!day || !Location) return <h1>Loading</h1>;
  const today = day.forecastday[0].day;
  const aqi = today.air_quality["us-epa-index"];
  const { color, text } = useAQIStatus(aqi);
  const localday_time = location.localtime;
  const [datePart, timePart] = localday_time.split(" ");
  const dateObj = new Date(datePart);
  const weatherCondition = today?.condition?.text.toLowerCase();
  // date formatting
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const dayNumber = dateObj.getDate();
  const monthName = dateObj.toLocaleDateString("en-US", { month: "short" });

  const formattedDate = `${dayName}, ${dayNumber} ${monthName}`;
  const backgroundImage = useTodayBgImg({ weatherCondition: weatherCondition });
  console.log("Formatted Date:", formattedDate);
  return (
    <div className='sm:px-64 px-2 mt-5 sm:mt-10'>
      <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md '>
        <div className='border-b-2 border-black px-8  sm:px-12 py-2  flex justify-between'>
          <p className='font-bold text-sm text-gray-500'> Today's weather</p>
          <p className='font-bold text-sm text-gray-600'>{formattedDate}</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "white", // Fallback color
          }}
        >
          <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full pb-2 bg-gray-400 bg-opacity-60'>
            <div className='row-span-2 col-span-2 flex  items-center sm:pl-14 sm:gap-7'>
              <img
                src={today.condition.icon}
                alt='icon'
                className='sm:w-28'
              ></img>
              <p className='text-lg sm:text-xl font-semibold text-slate-950'>
                {today.condition.text}
              </p>
            </div>
            <div className='col-span-2 flex items-center pl-2 sm:pl-14 sm:gap-14 gap-3 '>
              <p className='font-bold'>
                <span className='text-xl'>High </span>
                {today.maxtemp_c}
                <sup>o</sup>c
              </p>
              <p className='font-bold'>
                <span className='text-xl'>Low </span>
                {today.mintemp_c}
                <sup>o</sup>c
              </p>
            </div>
            <div className='row-span-3 flex flex-col pr-1 sm:px-4 sm:justify-center sm:gap-8 justify-around'>
              <div className='flex justify-between sm:flex-row flex-col pt-2 '>
                <p className='font-bold'>
                  <span className='sm:text-lg text-base font-bold text-gray-800'>
                    AQI:
                  </span>
                  {aqi}
                </p>
                <p className='font-bold'>
                  <span className='sm:text-lg text-base  font-bold text-gray-800'>
                    status:
                  </span>
                  <span className={`${color}`}>{text}</span>
                </p>
              </div>
              <p className='sm:font-bold font-semibold '>
                <span className='text-sm sm:text-lg font-bold text-blue-600'>
                  Chances of Rain :
                </span>
                {today.daily_chance_of_rain ? "Yes" : "No"}
              </p>
              <p className='font-bold'>
                <span className='sm:text-lg text-base  font-bold text-gray-800'>
                  Avg Temp:
                </span>
                {Math.round(today.avgtemp_c)}
                <sup>o</sup>c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
