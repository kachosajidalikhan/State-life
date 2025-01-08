import React, { useState } from 'react';
import LoginSignup1 from '../assets/images/login-signup1.png';
import LoginSignup2 from '../assets/images/login-signup2.png';
import Logo from "../assets/images/Logo.png";
import DashFooter from './DashFooter';
import { useNavigate } from 'react-router-dom';

const LoginSignup = ({ handleCloseModal }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const nav = useNavigate();

  const handlenext = () => {
    handleCloseModal();
    if (selectedOption === 'buyer') {
      nav('/buyer-signup'); // Navigate to buyer signup page
    } else if (selectedOption === 'seller') {
      nav('/seller-signup'); // Navigate to seller signup page
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div className="p-10 bg-[#F4F6F8] flex flex-col">
      <div className="p-8 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Left decoration */}
        <div className="hidden lg:block md:block relative right-[20px] top-[6rem]">
          <img
            src={LoginSignup1}
            alt="LoginSignup"
            className="w-60"
          />
        </div>

        {/* Main card */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>

          <div className="text-center mb-6">
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }} className="text-gray-600 ">Already Have An Account? Log In</p>
          </div>

          <div className="space-y-4 mb-8">
            <label className="flex items-center p-3 border rounded-full cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="userType"
                value="buyer"
                checked={selectedOption === 'buyer'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700 w-full text-center">Do You Want To Buy/Rent Property</span>
            </label>

            <label className="flex items-center p-3 border rounded-full cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="userType"
                value="seller"
                checked={selectedOption === 'seller'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700 w-full text-center">Do You Want To Sell/Rent Property</span>
            </label>
          </div>

          <button
            className="w-full bg-[#1252AE] text-white rounded-full py-3 hover:bg-blue-700 transition-colors"
            onClick={handlenext}
          >
            Next
          </button>
        </div>

        {/* Right decoration */}
        <div style={{ top: "-120px", left: "20px" }} className="hidden lg:block md:block relative  bottom-60">
          <img
            src={LoginSignup2}
            alt="LoginSignup"
            className=" w-60"
          />
        </div>
      </div>
      <DashFooter />
    </div>
  );
};

export default LoginSignup;
