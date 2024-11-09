// Drawer.js
import React from 'react';

const Drawer = ({ link }) => {
  const items = {
    Play: ['Football', 'Basketball', 'Tennis'],
    Book: ['Venues', 'Events', 'Sessions'],
    Learn: ['Tutorials', 'Articles', 'Workshops']
  };

  return (
    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4">
      {items[link].map((item, index) => (
        <div key={index} className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Drawer;
