import React from "react";
import "../utils/images/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-50 text-center px-4'>
      {/* 404 Error Section */}
      <h1 className='text-5xl sm:text-6xl font-bold text-blue-600'>
        404 Error
      </h1>
      <p className='text-base sm:text-lg text-gray-600 mt-4 max-w-md sm:max-w-lg'>
        The page you are looking for was moved, removed, renamed, or might never
        have existed.
      </p>

      {/* Go to Homepage Button */}
      <Link to='/'>
        <button className='mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-300'>
          Go to Homepage
        </button>
      </Link>

      {/* Image Section */}
      <div className='mt-8 w-full max-w-xs sm:max-w-md'>
        <img
          src={require("../utils/images/error.png")}
          alt='404 Error'
          className='w-full'
        />
      </div>

      {/* Attribution */}
      <p className='text-sm text-gray-500 mt-4'>Developer Abhinav Ranjan</p>
    </div>
  );
};

export default ErrorPage;
