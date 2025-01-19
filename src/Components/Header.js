import React from "react";
import SearchComponent from "./SearchComponent";
import useWeatheApi from "../utils/useWeatheApi";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Header = () => {
  const { originweather, originlocation } = useSelector(
    (store) => store.weather
  );
  // console.log(originweather);
  useWeatheApi();
  if (!originweather || !originlocation) return <Shimmer />;
  return (
    <div className='top-0 fixed z-[999] h-14 sm:h-20 bg-green-300 w-screen px-2  sm:px-64 flex pb-3 items-end justify-between'>
      <div className='flex gap-2 sm:gap-7'>
        <Link to='/'>
          <img src={require("../logo.png")} className='h-9 sm:h-14' />
        </Link>
        <div className='h-9 sm:h-14 flex items-end pb-1 font-semibold text-lg sm:text-xl  gap-2'>
          <p>{originlocation.name}</p>
          <p className='hidden sm:block'>{originlocation.region}</p>
          <p>
            {Math.round(originweather.temp_c)}
            <sup>o</sup>c
          </p>
        </div>
      </div>
      <div>
        <SearchComponent />
      </div>
    </div>
  );
};

export default Header;
