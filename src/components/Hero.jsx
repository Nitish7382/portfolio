import React from 'react';
import Navbar from './Navbar';
import HeroImage from '../assets/images/hero.png'; // Import your image

const Hero = () => {
  return (
    <div className="h-screen bg-[#F1F0EC]">
      <Navbar />
      
      {/* Flex Container for Text & Image */}
      <div className="flex items-center justify-between h-full px-20 ">
        
        {/* Left Section (Text) */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">I am Nitish Kumar Mohanty</h1>
          <p className="text-2xl">Full Stack Developer</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2 flex justify-end">
          <img src={HeroImage} alt="Hero" className="w-96 h-auto rounded-lg shadow-lg" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
