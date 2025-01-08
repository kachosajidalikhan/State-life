import React from "react";
import { FaPen } from "react-icons/fa";

const ProfileInformation = () => {
  return (
    <div className=" w-full">
      {/* Content */}
      <div className="lg:flex block lg:gap-4 justify-between">
        {/* Profile Form */}
        <div className="lg:w-1/2">
          <div className="flex justify-start mb-6">
            <div className="relative">
              <img
                src="../../src/assets/images/profileimage.jpg"
                alt="Profile"
                className="rounded-full w-24 h-24"
              />
              <button className="absolute bottom-0 right-0 bg-[#1252AE] text-white p-2 rounded-full">
                <FaPen size={12} />
              </button>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-6">
            Profile Information
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Cell No."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="w-full flex justify-end mt-6">
            <button className="w-1/2 bg-[#1252AE] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Update
            </button>
            </div>
          </form>
        </div>

        {/* Profile Update Policy */}
        <div className="bg-white lg:w-[22vw] mb-2 mt-4 float-left shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Profile Update Policy</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li>
              <strong>1. Data Privacy:</strong> Your personal information (e.g.,
              Name, Email, Contact) is securely stored and encrypted. No data is
              shared with third parties without consent.
            </li>
            <li>
              <strong>2. Accuracy:</strong> Please provide accurate and
              up-to-date information. Fake details may result in account
              suspension.
            </li>
            <li>
              <strong>3. Security:</strong> Your data is protected with SSL
              encryption and multi-factor authentication.
            </li>
            <li>
              <strong>4. User Rights:</strong> You can update or delete your
              information at any time.
            </li>
            <li>
              <strong>5. Consent:</strong> You will receive a confirmation
              notification after updating your profile.
            </li>
            <li>
              <strong>6. Misuse:</strong> Uploading illegal or inappropriate
              data is strictly prohibited.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
