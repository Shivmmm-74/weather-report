import React from "react";

const Shimmer = () => {
  return (
    <div>
      {/* Skeleton for Header */}
      <div className='top-0 fixed z-[999] h-14 sm:h-20 bg-green-300 w-screen px-2 sm:px-64 flex pb-3 items-end justify-between animate-pulse'>
        <div className='flex gap-2 sm:gap-7'>
          <div className='h-9 sm:h-14 w-9 sm:w-14 bg-gray-300 rounded-full'></div>
          <div className='h-9 sm:h-14 flex items-end pb-1 font-semibold text-lg sm:text-xl gap-2'>
            <div className='h-6 w-24 bg-gray-300 rounded'></div>
            <div className='h-6 w-32 hidden sm:block bg-gray-300 rounded'></div>
            <div className='h-6 w-12 bg-gray-300 rounded'></div>
          </div>
        </div>
        <div>
          <div className='h-10 sm:h-12 w-40 sm:w-60 bg-gray-300 rounded'></div>
        </div>
      </div>

      {/* Skeleton for Navbar */}
      <div className='flex mt-14 pt-2 sm:mt-20 justify-center gap-4 sm:gap-24 pb-2 mx-1 sm:mx-64 border-b-2 border-gray-700 animate-pulse'>
        <div className='h-6 sm:h-8 w-20 bg-gray-300 rounded'></div>
        <div className='h-6 sm:h-8 w-20 bg-gray-300 rounded'></div>
        <div className='h-6 sm:h-8 w-20 bg-gray-300 rounded'></div>
      </div>

      {/* Skeleton for Today's Weather */}
      <div className='sm:px-64 px-2 mt-5 sm:mt-10'>
        {/* Weather Card */}
        <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md pb-2 animate-pulse'>
          <div className='border-b-2 border-black px-8 sm:px-12 py-2 flex justify-between'>
            <div className='h-4 sm:h-5 w-24 bg-gray-300 rounded'></div>
            <div className='h-4 sm:h-5 w-32 bg-gray-300 rounded'></div>
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full'>
            <div className='row-span-2 col-span-2 flex items-center sm:pl-14 sm:gap-7'>
              <div className='w-20 sm:w-28 h-20 sm:h-28 bg-gray-300 rounded-full'></div>
              <div className='w-32 sm:w-40 h-6 bg-gray-300 rounded'></div>
            </div>
            <div className='col-span-2 flex items-center pl-2 sm:pl-14 sm:gap-14 gap-3'>
              <div className='h-6 w-20 bg-gray-300 rounded'></div>
              <div className='h-6 w-20 bg-gray-300 rounded'></div>
            </div>
            <div className='row-span-3 flex items-center justify-center'>
              <div className='h-10 w-10 bg-gray-300 rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Another Skeleton below */}
        <div className='bg-gray-200 border border-black w-full sm:h-64 flex flex-col rounded-md pb-2 animate-pulse mt-5'>
          <div className='border-b-2 border-black px-8 sm:px-12 py-2 flex justify-between'>
            <div className='h-4 sm:h-5 w-24 bg-gray-300 rounded'></div>
            <div className='h-4 sm:h-5 w-32 bg-gray-300 rounded'></div>
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-2 sm:gap-4 h-full'>
            <div className='row-span-2 col-span-2 flex items-center sm:pl-14 sm:gap-7'>
              <div className='w-20 sm:w-28 h-20 sm:h-28 bg-gray-300 rounded-full'></div>
              <div className='w-32 sm:w-40 h-6 bg-gray-300 rounded'></div>
            </div>
            <div className='col-span-2 flex items-center pl-2 sm:pl-14 sm:gap-14 gap-3'>
              <div className='h-6 w-20 bg-gray-300 rounded'></div>
              <div className='h-6 w-20 bg-gray-300 rounded'></div>
            </div>
            <div className='row-span-3 flex items-center justify-center'>
              <div className='h-10 w-10 bg-gray-300 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
