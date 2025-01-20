import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useAQIStatus from "../utils/useAqiStatus"; // Ensure the correct path to the custom hook
import { Slide } from "react-awesome-reveal";

const Hourly = () => {
  const weatherData = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[0]?.hour
  );
  const [hrFilter, setHrFilter] = useState([]);

  useEffect(() => {
    if (weatherData) {
      const currentTime_epoch = Math.floor(Date.now() / 1000);
      const filteredData = weatherData.filter(
        (h) => h.time_epoch >= currentTime_epoch
      );
      setHrFilter(filteredData);
    }
  }, [weatherData]);

  return (
    <div className='bg-gray-100 sm:px-64'>
      <Slide direction='right' cascade damping={0.1} triggerOnce>
        {hrFilter.map((e, index) => {
          // const aqi = e.air_quality?.["us-epa-index"];
          // const { color, text } = useAQIStatus(aqi);

          return (
            <div key={index} className=' p-6 py-6 '>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded shadow-md flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500'>{e.time.split(" ")[1]}</p>
                    <div className='flex items-center space-x-2'>
                      <img
                        src={e.condition.icon}
                        alt='Weather Icon'
                        className='w-10 h-10'
                      />
                      <p className='text-xl font-bold'>
                        {Math.round(e.temp_c)}°
                      </p>
                    </div>
                    <p className='text-sm text-gray-600 mt-1'>
                      {e.condition.text}
                    </p>
                  </div>
                  <div>
                    <div className='flex justify-between text-sm space-x-8'>
                      <div>
                        <p className='text-gray-500'>Wind</p>
                        <p>{e.wind_kph} kph</p>
                      </div>
                      <div>
                        <p className='text-gray-500'>Wind Gusts</p>
                        <p>{e.gust_kph} kph</p>
                      </div>
                    </div>
                    <div className='flex justify-between text-sm space-x-8 mt-2'>
                      {/* <div>
                      <p className='text-gray-500'>Air Quality</p>
                      <p className={`${color} font-semibold`}>{text}</p>
                    </div> */}
                      <div>
                        <p className='text-gray-500'>Humidity</p>
                        <p>{e.humidity}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Hourly;
