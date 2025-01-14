import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useBackgroundImage from "../utils/useBackgroungImage";
import generateWeatherMessage from "../utils/generateWeatherMessage";

const CurrentWeather = () => {
  const location = useSelector((store) => store.weather.location);
  const localday_time = location?.localtime || "";
  const [datePart, timePart] = localday_time.split(" ") || ["", ""];
  const current = useSelector((store) => store.weather.currentWeather);

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

  const backgroundImage = useBackgroundImage({
    weatherCondition: weatherCondition.toLowerCase(),
    is_day: is_day,
  });

  const weatherMessage = generateWeatherMessage(current);

  return (
    <div className='sm:px-64 px-2 mt-5 sm:mt-10 h-fit'>
      <div className='border bg-opacity-80 border-black w-full  flex flex-col rounded-md overflow-hidden'>
        <div className='border-b-2 border-black px-8 sm:px-12 py-2 flex justify-between'>
          <p className='font-bold text-sm text-gray-500'>Current Weather</p>
          <p className='font-bold text-sm text-gray-600'>{timePart}</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "white",
          }}
        >
          <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full pb-2 bg-gray-400 bg-opacity-30 text-white'>
            <div className='row-span-2 col-span-2 flex items-center sm:pl-14 sm:gap-7'>
              <img src={icon} alt='icon' className='sm:w-28'></img>
              <div className='flex items-center sm:gap-7 gap-1'>
                <p className='text-lg sm:text-xl font-semibold text-white'>
                  {text}
                </p>
                <p className='text-5xl sm:text-8xl font-bold'>
                  {Math.floor(temp_c)}
                  <sup>o</sup>c
                </p>
              </div>
            </div>
            <div className='col-span-2 flex items-center pl-2 sm:pl-14 sm:gap-14 gap-3'>
              <p className='font-medium sm:font-bold'>
                <span className='text-base sm:text-xl'>Feels </span>
                {Math.floor(feelslike_c)}
                <sup>o</sup>c
              </p>
              <p className='font-medium sm:font-bold'>
                <span className='text-base sm:text-xl'>Humidity </span>
                {humidity} %
              </p>
            </div>
            <div className='row-span-3 flex flex-col pr-1 sm:px-4 sm:justify-center sm:gap-8 gap-2'>
              <div className='flex justify-between sm:flex-row flex-col pt-2 gap-2'>
                <p className='font-medium sm:font-bold'>
                  <span className='sm:text-lg text-base sm:font-bold text-white'>
                    Wind:
                  </span>
                  {wind_kph} Kmph
                </p>
                <p className='font-medium sm:font-bold'>
                  <span className='sm:text-lg text-base sm:font-bold text-white'>
                    Wind Direction:
                  </span>
                  {wind_dir}
                </p>
              </div>
              <p className='sm:font-bold font-semibold'>
                <span className='text-sm sm:text-lg sm:font-bold text-white'>
                  Wind Feels:
                </span>
                {windchill_c}
                <sup>o</sup>c
              </p>
              <p className='sm:font-bold font-medium'>
                <span className='text-sm sm:text-lg sm:font-bold text-white'>
                  Visibility:
                </span>
                {vis_km} Km
              </p>
            </div>
          </div>
        </div>

        <div className='sm:p-3 bg-gray-800 text-center text-white font-semibold'>
          {weatherMessage}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
