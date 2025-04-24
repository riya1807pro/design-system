import React from "react";

const Tooltip = () => (
  <div className="relative group w-fit">
    <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-200">
      Hover me
    </button>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-lg whitespace-nowrap z-10">
      I'm a ✨ stylish tooltip!
    </div>
  </div>
);

export default Tooltip;
