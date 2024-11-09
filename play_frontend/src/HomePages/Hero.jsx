// Hero.js
import React from 'react';
import HeroText from './HeroText';
import ImageGallery from './ImageGallery';
import LocationSelector from './LocationSelector';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center pt-[10rem] px-4 lg:px-16 py-[2rem] bg-[white] rounded-3xl">
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-1 mb-6 lg:mb-0 gap-8">
        <LocationSelector />
        <HeroText />
      </div>
      <div className="flex-1 flex justify-center items-center lg:mt-0 mt-8">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Hero;
