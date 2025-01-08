import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 mt-8'>
    <div className="w-[95%] mx-auto p-4">
    <footer className=" py-10 px-6 md:px-16">
      <div className="  grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social Links */}
        <div>
          <h2 className="text-lg font-bold">LOGO</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-blue-600">How It Works</a></li>
            <li><a href="#" className="hover:text-blue-600">Customers</a></li>
            <li><a href="#" className="hover:text-blue-600">Our Story</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
          </ul>
        </div>

        {/* Support & Summary Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Support & Summary</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy & Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="mailto:youremail@example.com" className="hover:text-blue-600">youremail@example.com</a></li>
            <li><a href="tel:+1234567890" className="hover:text-blue-600">+123 456 7890</a></li>
            <li><span>Address Line 1</span></li>
            <li><span>City, State, Zip</span></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2024 Your Company. All rights reserved. Terms & Conditions | Privacy
      </div>
    </footer>
    
    </div></div>
  );
};

export default Footer;
