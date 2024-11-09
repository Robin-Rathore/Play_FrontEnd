// HeroText.js
import React from 'react';

const HeroText = () => {
  return (
    <div className="text-center lg:text-left w-[80%]">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 font-extrabold">
        Find Players & Venues Nearby
      </h1>
      <p className="text-gray-600 mt-4 lg:text-lg ">
        Seamlessly explore sports venues and play with sports enthusiasts just like you!
      </p>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroText;
