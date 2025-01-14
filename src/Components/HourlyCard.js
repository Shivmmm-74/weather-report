import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HourlyCard = () => {
  const hourly = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[0]?.hour
  );
  const secondHourly = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[1]?.hour
  );

  const [currentTime, setCurrentTime] = useState("");
  const [hrFilter, setHrFilter] = useState([]);

  useEffect(() => {
    if (hourly) {
      const currentTime_epoch = Math.floor(Date.now() / 1000); // Current time in seconds (epoch)
      const filteredData = hourly.filter(
        (h) => h.time_epoch >= currentTime_epoch
      );
      setHrFilter(filteredData); // Update the state with filtered data // inf not in useffect then it will cause infinte looop impotant
    }

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [hourly]);

  if (!hourly) return <div></div>;
  console.log(hrFilter);
  return (
    <div className=' mt-5 sm:mt-10 sm:px-64 px-2'>
      <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md '>
        <div className='border-b-2 border-black px-8  sm:px-12 py-2  flex justify-between'>
          <p className='font-bold text-sm text-gray-500'>Hourly</p>
          <p className='font-bold text-sm text-gray-600'>{currentTime} </p>
        </div>
        <div className=' flex flex-row overflow-x-scroll h-full w-full gap-5 '>
          {hrFilter.map((e) => (
            <div className='w-32 border border-black h-full flex-shrink-0'>
              {}
            </div>
          ))}
          {secondHourly.map((e) => (
            <div className='w-32 border border-black h-full flex-shrink-0'>
              {new Date(e.time_epoch * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyCard;
