// ImageGallery.js
import React from 'react';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="row-span-2">
        <img
          src="https://playo-website.gumlet.io/playo-website-v3/hero/hero_left.png" // Replace with actual image URL
          alt="Basketball"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
      <div>
        <img
          src="https://playo-website.gumlet.io/playo-website-v3/hero/hero_right_top.png" // Replace with actual image URL
          alt="Badminton Court"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
      <div>
        <img
          src="https://playo-website.gumlet.io/playo-website-v3/hero/hero_right_bottom.png" // Replace with actual image URL
          alt="Soccer Game"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
