import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerSignup() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cellNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    broker: "",
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Seller Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
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
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
              type="tel"
              name="cellNo"
              placeholder="Cell No."
              value={formData.cellNo}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
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
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <input
          style={{boxShadow:"0px 0px 25px 4px #00000040"}}
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <select
          style={{boxShadow:"0px 0px 25px 4px #00000040"}}
            name="broker"
            value={formData.broker}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Broker</option>
            <option value="seller">Seller</option>
          </select>

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

          <div className="flex justify-end">
            <button
              type="submit"
              onClick={()=>{ nav("/buyersellerprofile")}}
              className="px-6 py-2 bg-[#1252AE] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
