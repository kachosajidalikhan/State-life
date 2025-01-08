import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow">
      <h2 className="text-xl text-black font-semibold">Welcome, Peter</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Peter Parkur</span>
        <img
          src="https://via.placeholder.com/40" // Replace with actual profile image URL
          alt="User"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
