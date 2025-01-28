import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useAQIStatus from "../utils/useAqiStatus";
import usedayBgImg from "../utils/usetodaybgimg";
import generatedayWeatherMessage from "../utils/generateTodayweathermsg";
import { Fade } from "react-awesome-reveal";

const TodayWeather = () => {
  const day = useSelector((store) => store.weather?.currentWeather);
  const today = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[0]?.day
  );
  const [isShowMore, setIsShowMore] = useState(false);
  const location = useSelector((store) => store?.weather?.location);

  if (!day || !Location) return <div></div>;
  const aqi = day?.air_quality["us-epa-index"];
  const { color, text } = useAQIStatus(aqi);
  const localday_time = location?.localtime;
  const [datePart, timePart] = localday_time.split(" ");
  const dateObj = new Date(datePart);
  const weatherCondition = day?.condition?.text.toLowerCase();
  // date formatting
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const dayNumber = dateObj.getDate();
  const monthName = dateObj.toLocaleDateString("en-US", { month: "short" });

  const formattedDate = `${dayName}, ${dayNumber} ${monthName}`;
  const backgroundImage = usedayBgImg({
    weatherCondition: weatherCondition.toLowerCase(),
  });
  const weatherMessage = generatedayWeatherMessage({
    temp: today.avgtemp_c,
    humidity: today.avghumidity,
    cloud: today.cloud,
    aqi: aqi,
    condition: weatherCondition.toLowerCase(),
    location: location.name,
  });

  // console.log(astro?.moon_phase);

  return (
    <div
      className={`mt-5 sm:mt-10 sm:px-64 px-2 transform transition-transform duration-[2000ms] ease-in-out `}
    >
      <div className='bg-opacity-80 border border-black w-full  flex flex-col rounded-md overflow-hidden'>
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
                {Math.floor(today.maxtemp_c)}
                <sup>o</sup>c
              </p>
              <p className='font-bold'>
                <span className='text-xl'>Low </span>
                {Math.floor(today.mintemp_c)}
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
        <div className='sm:p-3 bg-gray-800 text-center text-white font-semibold '>
          <div
            className={`${isShowMore ? "line-clamp-none" : " line-clamp-2"}`}
          >
            {weatherMessage}
          </div>
          <button
            className='text-semibold'
            onClick={() => {
              setIsShowMore(!isShowMore);
            }}
          >
            {isShowMore ? "....Show Less" : "Show More...."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
