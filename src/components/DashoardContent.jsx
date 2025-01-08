import React from 'react';
import plan from "../assets/images/plan.png";
import dash from "../assets/images/dash.png";
import pic from "../assets/images/pic.png";
import DashFooter from './DashFooter';

const DashboardContent = () => {
  return (
    <div className="p-5 pb-20 space-y-6 bg-gray-100"> {/* Adjusted bottom padding */}
      {/* Upgrade Plan Section */}
      <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-2">Upgrade Your Plan</h3>
          <p className="text-gray-500 text-xs w-[75%] mb-4">
            Exclusive Features Access advanced tools and functionalities tailored to your needs. Increased Limits Enjoy higher usage limits for seamless performance. Priority Support Get faster responses and assistance from our dedicated support team.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Upgrade Now</button>
        </div>
        <img src={plan} alt="Illustration" className="w-[30%]" />
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border-blue-600 border-b-4 p-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Total Buying</p>
          <h4 className="text-blue-600 text-3xl font-semibold">02</h4>
        </div>
        <div className="bg-white p-4 border-blue-600 border-b-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Favourites</p>
          <h4 className="text-blue-600 text-3xl font-semibold">42</h4>
        </div>
        <div className="bg-white p-4 border-blue-600 border-b-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Open Chats</p>
          <h4 className="text-blue-600 text-3xl font-semibold">23</h4>
        </div>
      </div>

      {/* What's New Section */}
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mb-4">What's New</h3>
          <h3 className="text-lg font-semibold text-blue-600">See more</h3>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow">
              <img src={dash} alt="Property" className="w-full mb-2" />
              <div className="flex justify-between px-2">
                <div>
                  <h4 className="font-semibold">Lorem House</h4>
                  <p className="text-gray-400 text-xs mt-3">Location</p>
                </div>
                <p className="text-blue-600 font-semibold">$340</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between px-2 mt-2 mb-2">
                <div className="flex items-center">
                  <img src={pic} alt="Location" className="w-6 h-6" />
                  <p className="text-gray-400 text-xs ml-2">Location</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer fixed at the bottom */}
      <div className="fixed bottom-0 w-full  ">
        <div className="w-[100%]">
          <DashFooter />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
