import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import leftarrow from "../assets/arrow/leftarrow.png";
import right from "../assets/arrow/right.png";

const HourlyCard = () => {
  const hourly = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[0]?.hour
  );
  const secondHourly = useSelector(
    (store) => store.weather?.weatherForecast?.forecastday[1]?.hour
  );
  console.log("hourly", hourly);

  const [currentTime, setCurrentTime] = useState("");
  const [hrFilter, setHrFilter] = useState([]);
  const cont = useRef(null);

  const handleScrollLeft = () => {
    if (cont.current) {
      cont.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (cont.current) {
      cont.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (hourly) {
      const currentTime_epoch = Math.floor(Date.now() / 1000); // i got time in milisecond so convert t in second
      const filteredData = hourly.filter(
        (h) => h.time_epoch >= currentTime_epoch
      );
      setHrFilter(filteredData);
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
    <div className='mt-5 sm:mt-10 sm:px-64 px-2'>
      <div className='bg-gray-200 border border-black w-full flex flex-col rounded-md'>
        <div className='border-b-2 border-black px-8 sm:px-12 py-2 flex justify-between'>
          <p className='font-bold text-sm text-gray-500'>Hourly</p>
          <p className='font-bold text-sm text-gray-600'>{currentTime} </p>
        </div>
        <div className='relative flex flex-row  group w-full gap-5 p-2 sm:p-5 sm:text-lg font-bold bg-gradient-to-t from-orange-500 to-amber-300'>
          {/* Scroll Left Button */}
          <button
            className='hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-40 sm:group-hover:block'
            onClick={handleScrollLeft}
          >
            <img src={leftarrow} className='w-11'></img>
          </button>

          {/* Scroll Right Button */}
          <button
            className='hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-40 group-hover:block'
            onClick={handleScrollRight}
          >
            <img src={right} className='w-11'></img>
          </button>

          <div
            ref={cont}
            className='flex flex-row w-full overflow-x-auto no-scrollbar gap-2 sm:gap-5'
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Hourly Data */}
            {hrFilter.map((e) => (
              <div
                key={e.time_epoch}
                className='w-20 sm:w-32 border border-black h-full flex-shrink-0  bg-gradient-to-b from-sky-400 to-violet-500'
              >
                <div className='flex flex-col justify-center items-center'>
                  <p>
                    {new Date(e.time_epoch * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div>
                    <img src={e.condition.icon} alt='weather icon' />
                  </div>
                  <p>
                    {Math.round(e.temp_c)}
                    <sup>o</sup>c
                  </p>
                </div>
              </div>
            ))}

            {/* Second Hourly Data */}
            {secondHourly.map((e) => (
              <div
                key={e.time_epoch}
                className='w-20 sm:w-32  border border-black h-full flex-shrink-0 bg-gradient-to-b from-sky-400 to-violet-500'
              >
                <div className='flex flex-col justify-center items-center'>
                  <p>
                    {new Date(e.time_epoch * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div>
                    <img src={e.condition.icon} alt='weather icon' />
                  </div>
                  <p>
                    {Math.round(e.temp_c)}
                    <sup>o</sup>c
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyCard;
