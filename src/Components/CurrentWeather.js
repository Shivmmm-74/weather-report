import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useBackgroundImage from "../utils/useBackgroungImage";

const CurrentWeather = () => {
  const location = useSelector((store) => store.weather.location);
  const localday_time = location?.localtime || "";
  const [datePart, timePart] = localday_time.split(" ") || ["", ""];
  const current = useSelector((store) => store.weather.currentWeather);
  console.log(current);
  if (!current) {
    return <Shimmer />;
  }
  const {
    is_day,
    condition,
    wind_kph,
    wind_dir,
    humidity,
    feelslike_c,
    vis_km,
    windchill_c,
    temp_c,
  } = current;
  const weatherCondition = condition.text.toLowerCase();
  const { text, icon } = condition;
  // Determine the background image based on weather condition

  const backgroundImage = useBackgroundImage({
    weatherCondition: weatherCondition,
    is_day: is_day,
  });
  return (
    <div className='sm:px-64 px-2 mt-5 sm:mt-10'>
      <div className=' border bg-opacity-80  border-black w-full sm:h-64 flex flex-col rounded-md '>
        <div className='border-b-2 border-black px-8  sm:px-12 py-2  flex justify-between'>
          <p className='font-bold text-sm text-gray-500'> Current weather</p>
          <p className='font-bold text-sm text-gray-600'>{timePart}</p>
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
          <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full pb-2 bg-gray-400 bg-opacity-40'>
            <div className='row-span-2 col-span-2 flex  items-center sm:pl-14 sm:gap-7'>
              <div className='row-span-2 col-span-2 flex  items-center sm:pl-14 sm:gap-7'>
                <img src={icon} alt='icon' className='sm:w-28'></img>
                <p className='text-lg sm:text-xl font-semibold text-slate-950'>
                  {text}
                </p>
              </div>
            </div>
            <div className='col-span-2 flex items-center pl-2 sm:pl-14 sm:gap-14 gap-3 '>
              <p className='font-bold'>
                <span className='text-base sm:text-xl'>Temp </span>
                {temp_c}
                <sup>o</sup>c
              </p>
              <p className='font-bold'>
                <span className='text-base  sm:text-xl'>Feels Like </span>
                {feelslike_c}
                <sup>o</sup>c
              </p>
            </div>
            <div className='row-span-3 flex flex-col pr-1 sm:px-4 sm:justify-center sm:gap-8'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
