import React from 'react';
import house from "../assets/images/house.png"
const Subscribe = () => {
  return (
    <div className='w-full bg-white mt-8 mb-6'>
    <div className="w-[85%] mx-auto p-4">
    <div className="bg-blue-100  px-6 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-lg ">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Subscribe to get the latest news for you!
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter your WhatsApp..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
            Message
          </button>
        </div>
      </div>
      <div>
        {/* Placeholder for house image */}
        <img
          src={house} // Replace with actual image URL
          alt="House"
          className="w-full md:w-64 h-auto"
        />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Subscribe;
