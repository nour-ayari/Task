import React from "react";

export const Tabs = ({ tabs, selected, onSelect }) => {
  return (
    <div className="flex justify-center mb-8 px-4">
  <div className="bg-gray-100 p-1 rounded-full flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 max-w-full overflow-x-auto">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onSelect(tab)}
        className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
          ${
            selected === tab
              ? "bg-teal-600 text-white shadow-sm scale-105"
              : "text-gray-700"
          }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

  );
};
