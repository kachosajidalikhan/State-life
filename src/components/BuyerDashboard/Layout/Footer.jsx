import React from "react";

function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 lg:flex-row lg:gap-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="text-gray-500 hover:underline">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            About
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Terms and Conditions
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 text-sm">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Facebook
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Instagram
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
