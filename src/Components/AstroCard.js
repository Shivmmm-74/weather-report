import React from "react";
import { useSelector } from "react-redux";

const AstroCard = () => {
  const data = useSelector((store) => store.weather.weatherForecast);
  const astro = data?.forecastday[0]?.astro;

  return (
    <div className=' mt-5 sm:mt-10 sm:px-64 px-2'>
      <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md '>
        <div className='border-b-2 border-black px-8  sm:px-12 py-2  flex justify-between'>
          <p className='font-bold text-sm text-gray-500'> Astronmy</p>
          <p className='font-bold text-sm text-gray-600'>Date </p>
        </div>
        <div className='grid grid-cols-12 h-full bg-gradient-to-t from-red-600 via-orange-600 via-blue-600 via-indigo-800  to-purple-600'>
          <div className='col-span-5  font-semibold text-xl flex flex-col gap-5 pl-2'>
            <p>Sunrise : {astro?.sunrise}</p>
            <p>Sunset : {astro?.sunset}</p>
            <p>Sun Up : {astro?.is_sun_up ? "Yes" : "No"}</p>
          </div>
          <div className='col-span-7'>
            <p>MoonRise : {astro?.moonrise}</p>
            <p>MoonSet : {astro?.moonset}</p>
            <p>Moon</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
