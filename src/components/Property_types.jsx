import React from 'react';
import icon from "../assets/images/icon.png";

function Property_types() {
  return (
    <div className='w-full bg-white py-8'>
      <div className="w-[90%] lg:w-[85%] mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Property Types</h1>
        </div>

        {/* Property Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {/* Property Type 1 */}
          <div className="flex flex-col items-center">
            <img src={icon} alt="Property Icon" className="w-16 h-16" />
            <h1 className='text-center mt-2 text-lg font-medium'>Private House</h1>
            <h1 className='text-center bg-[#EBEEF2] px-4 py-1 rounded-xl text-xs '>360 Listing</h1>

          </div>

          {/* Property Type 2 */}
          <div className="flex flex-col items-center">
            <img src={icon} alt="Property Icon" className="w-16 h-16" />
            <h1 className='text-center mt-2 text-lg font-medium'>Apartment</h1>
            <h1 className='text-center bg-[#EBEEF2] px-4 py-1 rounded-xl text-xs '>265 Listing</h1>

          </div>

          {/* Property Type 3 */}
          <div className="flex flex-col items-center">
            <img src={icon} alt="Property Icon" className="w-16 h-16" />
            <h1 className='text-center mt-2 text-lg font-medium'>Offices</h1>
            <h1 className='text-center bg-[#EBEEF2] px-4 py-1 rounded-xl text-xs '>480 Listing</h1>

          </div>

          {/* Property Type 4 */}
          <div className="flex flex-col items-center">
            <img src={icon} alt="Property Icon" className="w-16 h-16" />
            <h1 className='text-center mt-2 text-lg font-medium'>Store & Shop</h1>
            <h1 className='text-center bg-[#EBEEF2] px-4 py-1 rounded-xl text-xs '>360 Listing</h1>

          </div>

          {/* Property Type 5 */}
          <div className="flex flex-col items-center">
            <img src={icon} alt="Property Icon" className="w-16 h-16" />
            <h1 className='text-center mt-2 text-lg font-medium'>Warehouse</h1>
            <h1 className='text-center bg-[#EBEEF2] px-4 py-1 rounded-xl text-xs '>360 Listing</h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Property_types;
