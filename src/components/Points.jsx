import React from 'react';
import Vector from "../assets/images/Vector.png";

function Points() {
  return (
    <div className='w-full bg-[#F4F6F8] mt-4'>
      <div className="w-[90%] lg:w-[85%] mx-auto p-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-10 gap-4">
          {/* Card 1 */}
          <div className="col-span-1 bg-white px-3 py-5 rounded shadow-md">
            <div className="flex justify-center">
              <img src={Vector} alt="Vector Icon" />
            </div>
            <div className="flex justify-center mt-3">
              <h1 className='text-3xl font-semibold'>1.5K</h1>
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-center text-gray-600">Premium Property</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 bg-white px-3 py-5 rounded shadow-md">
            <div className="flex justify-center">
              <img src={Vector} alt="Vector Icon" />
            </div>
            <div className="flex justify-center mt-3">
              <h1 className='text-3xl font-semibold'>1.5K</h1>
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-center text-gray-600">Premium Property</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 bg-white px-3 py-5 rounded shadow-md">
            <div className="flex justify-center">
              <img src={Vector} alt="Vector Icon" />
            </div>
            <div className="flex justify-center mt-3">
              <h1 className='text-3xl font-semibold'>1.5K</h1>
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-center text-gray-600">Premium Property</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-span-1 bg-white px-3 py-5 rounded shadow-md">
            <div className="flex justify-center">
              <img src={Vector} alt="Vector Icon" />
            </div>
            <div className="flex justify-center mt-3">
              <h1 className='text-3xl font-semibold'>1.5K</h1>
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-center text-gray-600">Premium Property</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;
