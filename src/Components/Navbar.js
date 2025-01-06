import React from "react";
import { navlist } from "../utils/constants";

const Navbar = () => {
  return (
    <div className='flex mt-14 pt-2 sm:mt-20 justify-center sm:gap-24 pb-2  mx-1 sm:mx-64 border-b-2 border-gray-700 '>
      {navlist.map((nav) => (
        <p className=' text-lg font-bold text-gray-600 hover:cursor-pointer hover:opacity-85 hover:scale-105'>
          {nav}
        </p>
      ))}
    </div>
  );
};

export default Navbar;
