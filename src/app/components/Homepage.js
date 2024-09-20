
"use client"; 
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Homepage = () => {
  const [activeOption, setActiveOption] = useState("Buy");
  const [searchFocused, setSearchFocused] = useState(false);

  const options = ["Buy", "Rent", "Sold"];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <div
      className="bg-cover bg-center h-screen md:h-[80vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url("https://img.staticmb.com/mbcontent/images/crop/uploads/2023/3/Outside-stairs-design_0_1200.jpg")',
      }}
    >
      <h1 className="text-5xl font-bold text-white mb-6 text-center">
        <span>Discover a place</span>
        <br />
        <span>you`&apos;`ll love to live</span>
      </h1>

      <div className="flex space-x-4 mb-6 rounded-lg bg-opacity-50 bg-black">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`px-5 py-2 rounded-lg text-white transition-all duration-300 ${
              activeOption === option
                ? "bg-white hover:bg-transparent hover:bg-opacity-50  hover:text-green-600 text-green-500 font-bold"
                : "hover:bg-white hover:text-green-600 hover:font-bold"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="relative w-72 ">
        <input
          type="text"
          placeholder={searchFocused ? "Search by commute name..." : "Search..."}
          className={`w-full px-4 outline-none py-4 pr-10 rounded border-2 transition-all duration-300 ${
            searchFocused
              ? "border-blue-500 text-blue-500"
              : "border-white text-white"
          }`}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <button
          onClick={() => setSearchFocused(!searchFocused)}
          className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-white bg-red-500  px-4 py-5"
        >
         {!searchFocused ? <FaSearch />  : <h1>Cancel</h1>}
        </button>

        {searchFocused && (
          <div className="absolute bg-white w-full mt-2 p-2 rounded shadow-lg">
            <div className="py-1 px-2 cursor-pointer hover:bg-gray-200">
              Current Location
            </div>
            <div className="py-1 px-2 cursor-pointer hover:bg-gray-200">
              Search by commute name
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
