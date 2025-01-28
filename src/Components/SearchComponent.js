import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import useSearchinputWeather from "../utils/useSearchinputWeather";

const SearchComponent = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [userInput, setuserInput] = useState(false);
  const toggleSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  const searchstring = useRef();
  useSearchinputWeather(userInput);
  const handleSearchInput = () => {
    setuserInput(searchstring.current.value);
  };
  return (
    <div>
      {/* Main search area */}
      <div className='bg-white p-2 flex gap-3 items-center rounded-md w-auto pr-3 pl-2 sm:pr-8 sm:pl-4'>
        {/* Show search text and icon on small devices */}
        <button
          className='sm:hidden flex items-center gap-2'
          onClick={toggleSearchBox}
        >
          <FontAwesomeIcon icon={faSearch} />
          <span>Search</span>
        </button>

        {/* Search box for larger devices */}
        <button className='hidden sm:flex' onClick={handleSearchInput}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          ref={searchstring}
          placeholder='Enter City or town name'
          className='hidden sm:block px-3 focus:outline-none focus:ring-0 border-none'
        />
      </div>

      {/* Conditional search box for small devices */}
      {showSearchBox && (
        <div className='fixed top-16 left-0 right-0 bg-white p-4 shadow-lg'>
          <div className='flex items-center gap-3'>
            <button onClick={handleSearchInput}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              ref={searchstring}
              placeholder='Enter City or ZipCode'
              className='flex-1 px-3 focus:outline-none focus:ring-0 border-none'
            />
            <button onClick={toggleSearchBox} className='text-gray-500'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
