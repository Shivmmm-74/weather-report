import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TodayWeather = () => {
  const day = useSelector((store) => store.weather.weatherForecast);
  const location = useSelector((store) => store.weather.location);
  if (!day || !Location) return <h1>Loading</h1>;
  const today = day.forecastday[0].day;

  const localday_time = location.localtime;
  const [datePart, timePart] = localday_time.split(" ");
  const dateObj = new Date(datePart);

  // date formatting
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const dayNumber = dateObj.getDate();
  const monthName = dateObj.toLocaleDateString("en-US", { month: "short" });

  const formattedDate = `${dayName}, ${dayNumber} ${monthName}`;

  console.log("Formatted Date:", formattedDate);
  return (
    <div className='sm:px-64 px-2 mt-5 sm:mt-10'>
      <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md pb-2'>
        <div className='border-b-2 border-black px-8  sm:px-12 py-2  flex justify-between'>
          <p className='font-bold text-sm text-gray-400'> Today's weather</p>
          <p className='font-bold text-sm text-gray-600'>{formattedDate}</p>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full'>
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
          <div className='row-span-3 '>4</div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
