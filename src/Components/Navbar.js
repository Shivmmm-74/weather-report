import React from "react";
import { navlist } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className='flex mt-14 pt-2 sm:mt-20 justify-center gap-4 sm:gap-24 pb-2  mx-1 sm:mx-64 border-b-2 border-gray-700 '>
      {navlist.map((nav) => (
        <Link key={nav.link} to={nav.link}>
          <p
            className={`text-base  sm:text-lg  font-bold hover:cursor-pointer hover:opacity-85 hover:scale-105 ${
              location.pathname === nav.link
                ? "border-b-4 border-blue-500 pb-1 text-blue-600"
                : " text-gray-600"
            }`}
          >
            {nav.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
