import React from "react";
import { FaSearch } from "react-icons/fa";

const Tabletop = ({ searchQuery, handleSearch, handleSort }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label
          htmlFor="filterdays"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Select an option
        </label>
        <select
          id="filterdays"
          className="bg-gray-50 border-2 shadow-lg shadow-gray-300 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-offset-teal-400 focus:border-blue-500 block w-[15rem] p-2.5"
          onChange={handleSort}
        >
          <option value="">Select date</option>
          <option value="asc">old</option>
          <option value="desc">new</option>
        </select>
      </div>
      <div className="border-2 rounded-lg h-[50px] w-[300px]">
        <div className="flex items-center gap-6 p-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 h-[40px] text-gray-900 text-lg pl-2"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="flex items-center justify-between">
            <button className="hover:bg-blue-600 hover:text-white h-[40px] w-[40px] flex items-center justify-center rounded-lg">
              <FaSearch />
            </button>
          </div>
          <button className="bg-blue-700 border-2 text-white h-[40px] px-4 rounded-lg">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabletop;
