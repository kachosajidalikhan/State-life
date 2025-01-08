import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen flex flex-col fixed left-0 top-0">
      <div className='pl-5'>
        <h1 className="text-2xl font-semibold mb-6">Logo</h1>
        <ul>
          <li className="flex items-center p-2 text-blue-600 bg-[#b7c4ef] mb-2">
            <Link to='/main-page'><span className="ml-3">Dashboard</span></Link>
          </li>
          <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-200 mb-2">
            <Link to='/saved-search'><span className="ml-3">Saved Search</span></Link> 
          </li>
          <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-200 mb-2">
            <span className="ml-3">Chats</span>
          </li>
          <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-200 mb-2">
            <span className="ml-3">My Properties</span>
          </li>
          <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-200 mb-2">
            <span className="ml-3">Notifications</span>
          </li>
        </ul>
      </div>
      <button className="bg-blue-600 text-white p-3 w-[90%] mx-auto rounded-lg mt-auto mb-4">
        Contact Support
      </button>
    </div>
  );
};

export default Sidebar;
