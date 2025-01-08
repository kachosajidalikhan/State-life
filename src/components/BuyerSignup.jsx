import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login"; // Assuming this is your popup component

export default function BuyerSignup() {
  const nav  = useNavigate()
  const [showLoginPopup, setShowLoginPopup] = useState(false); // Manage popup visibility
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cellNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // const handleLoginCloseModal = () => {
  //   setShowLoginPopup(false); // Close the popup
  // };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Buyer Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="tel"
              name="cellNo"
              placeholder="Cell No."
              value={formData.cellNo}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              style={{ boxShadow: "0px 0px 25px 4px #00000040" }}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckbox}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I have read and I agree to the Sukoon Reality{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {nav('/login')}} // Show the login popup
              className="w-[400px] px-4 py-4 bg-[#1252AE] text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Start Buying
            </button>
          </div>
        </form>
      </div>

      {/* Login Popup */}
      {/* {showLoginPopup && (
        <div className={`modal-overlay ${showLoginPopup ? "active" : ""}`} onClick={handleLoginCloseModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button z-50" onClick={handleLoginCloseModal}>
            &times;
          </button>
          <Login />
        </div>
      </div>
      )} */}
    </div>
  );
}
