import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import useMoonPhase from "../utils/useMoonPhase";

const AstroCard = () => {
  const data = useSelector((store) => store.weather.weatherForecast);
  const astro = data?.forecastday[0]?.astro;
  const moonphse = useMoonPhase({ moonphase: astro?.moon_phase || "New Moon" });
  const astroRef = useRef(null);
  const [astroVisible, setAstroVisible] = useState(true);
  // console.log(astro?.moon_phase);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setAstroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (astroRef.current) {
      observer.observe(astroRef.current);
    }

    return () => {
      if (astroRef.current) {
        observer.unobserve(astroRef.current);
      }
    };
  }, []);

  if (!astro) {
    return (
      <div className='flex justify-center items-center h-64'>
        <p className='text-gray-500'>Loading Astronomy Data...</p>
      </div>
    );
  }

  return (
    <div
      ref={astroRef}
      className={`mt-5 sm:mt-10 sm:px-64 px-2 transform transition-transform duration-[2000ms] ease-in-out ${
        astroVisible ? "scale-100 " : "scale-0 "
      }`}
    >
      <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md'>
        <div className='border-b-2 border-black px-8 sm:px-12 py-2 flex justify-between'>
          <p className='font-bold text-sm text-gray-500'>Astronomy</p>
          <p className='font-bold text-sm text-gray-600'>Date</p>
        </div>
        <div className='grid grid-cols-12 h-full sm:items-center bg-gradient-to-t from-red-600 via-sky-500 to-purple-600'>
          <div className='col-span-5 font-semibold text-base sm:text-xl flex flex-col gap-5 justify-between pl-2'>
            <p>
              Sunrise: <span className='text-white'>{astro?.sunrise}</span>
            </p>
            <p>
              Sunset: <span className='text-white'>{astro?.sunset}</span>
            </p>
            <p>
              Sun Up:{" "}
              <span className='text-white'>
                {astro?.is_sun_up ? "Yes" : "No"}
              </span>
            </p>
          </div>
          <div className='col-span-7 font-semibold text-base sm:text-xl flex flex-col justify-center ml-2 sm:ml-5 gap-5'>
            <p>
              MoonRise:{" "}
              <span className='text-slate-100'>{astro?.moonrise}</span>
            </p>
            <p>
              MoonSet: <span className='text-slate-100'>{astro?.moonset}</span>
            </p>
            <div className='flex sm:flex-row flex-col sm:gap-5'>
              <div className='flex flex-row items-center gap-2 sm:gap-5'>
                <p>
                  <span className='text-amber-300'>{astro?.moon_phase}</span>
                </p>
                <img
                  src={moonphse}
                  alt={`Moon phase: ${astro?.moon_phase}`}
                  className='w-10 rounded-full'
                />
              </div>
              <p>
                Moon Illumination:{" "}
                <span className='text-gray-300'>
                  {astro?.moon_illumination}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
