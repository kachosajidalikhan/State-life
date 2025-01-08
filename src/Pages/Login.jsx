import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {

  const nav = useNavigate()
  const handleLoginClick = () => {
    if (typeof onLogin === "function") {
      onLogin("buyer"); // Pass the role to the parent component
      nav('/')
    } else {
      console.error("onLogin is not a function!");
    }
  };
  return (
    <div className="flex p-4 bg-gray-100">
      {/* Left Side - Image & Text */}
      <div className="md:w-1/2 md:block hidden bg-blue-600 flex flex-col items-center justify-center text-center p-8">
        <div className="max-w-sm">
          <img
            src="https://via.placeholder.com/300x400" // Replace with the actual image URL
            alt="House"
            className="rounded-lg mb-6"
          />
          <h2 className="text-white text-2xl font-semibold">
            Find Your Perfect Place With Homeey
          </h2>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className=" w-full bg-white flex flex-col items-center justify-center">
        <div className="max-w-sm w-full p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v13a1 1 0 001 1h3m10-15h3a1 1 0 011 1v11a1 1 0 01-1 1h-3M4 4h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm6 5v2m0 4v2m4-8v2m0 4v2" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Welcome to Name</h2>
            <p className="text-gray-500 mt-2">Welcome back! Login with your data that you entered during registration.</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" placeholder="Enter your email" className="mt-1 px-4 py-2 border w-full rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" placeholder="********" className="mt-1 px-4 py-2 border w-full rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
            </div>
            <button onClick={handleLoginClick} className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
              LOGIN
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center py-2 px-4 border rounded-md hover:bg-gray-50">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="h-6 w-6 mr-2" />
              Login with Google
            </button>
            <button className="flex items-center py-2 px-4 border rounded-md hover:bg-gray-50">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="h-6 w-6 mr-2" />
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React from "react";

// const Login = ({ onLogin }) => {
//   const handleLoginClick = () => {
//     if (typeof onLogin === "function") {
//       onLogin("buyer"); // Pass the role to the parent component
//     } else {
//       console.error("onLogin is not a function!");
//     }
//   };

//   return (
//     <div className="flex bg-gray-100">
//       {/* Login Form */}
//       <div className="w-full bg-white flex flex-col items-center justify-center">
//         <div className="max-w-sm w-full p-8">
//           <h2 className="text-2xl font-semibold mb-4">Login</h2>
//           <form className="space-y-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//             <button
//               type="button"
//               onClick={handleLoginClick}
//               className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
//             >
//               LOGIN
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
