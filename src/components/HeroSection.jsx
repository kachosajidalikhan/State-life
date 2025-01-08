// Import React and necessary hooks
import React from 'react';
import Hero from "../assets/images/hero-bg.png";

function HeroSection() {
  return (
    <div className="bg-white">
      <div
        className="relative w-full md:w-[80%]  rounded-lg mx-auto bg-cover bg-center p-4 md:p-6 h-full md:h-[70%]"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0"></div>
        
        <div className="relative flex flex-col h-full text-white p-4 md:p-6">
          <div className="flex flex-col md:flex-col gap-4">
            <div className="w-full md:w-[60%]">
              <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">
                A Vision for Your Life
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold mt-4 text-black">
                Find The Best <span className="text-[#1252AE]">Home & Plots</span>
              </h1>
              
              <p className="text-sm md:text-base text-[#737D8C] mt-4">
                Find your dream home with us. Whether buying, selling, or investing, our expert team will guide you every step of the way. Explore our listings to discover the perfect property that meets your needs.
              </p>
            </div>
            
            <div className="w-full md:w-[70%] md:mt-0">
              <div className="flex flex-wrap gap-2 mt-6">
                <button className=" px-5 py-2 bg-blue-600 text-white rounded-md">Buy</button>
                <button className=" px-5 py-2 bg-white text-blue-600 border border-blue-600 rounded-md">Sell</button>
                <button className=" px-5 py-2 bg-white text-blue-600 border border-blue-600 rounded-md">Rent</button>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-3 mt-8 gap-2">
              <div className="w-full md:w-[30%] bg-white rounded-lg shadow-lg">
                  <select className="w-full bg-transparent text-gray-700 py-2 px-2 rounded focus:outline-none">
                    <option>Price Range</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="w-full md:w-[30%] bg-white rounded-lg shadow-lg">
                  <select className="w-full bg-transparent text-gray-700 py-2 px-2 rounded focus:outline-none">
                    <option>Price Range</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="w-full md:w-[30%] bg-white rounded-lg shadow-lg">
                  <select className="w-full bg-transparent text-gray-700 py-2 px-2 rounded focus:outline-none">
                    <option>Price Range</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="flex h-[40px] justify-center ">
                <button className="bg-blue-600 text-white px-8 py-2 rounded-md">Search</button>
              </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
