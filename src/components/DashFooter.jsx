import React from 'react';

const DashFooter = () => {
  return (
    <footer className="p-4 flex justify-between items-center bg-gray-100 py-5">
      <div className="space-x-4">
        <a href="#" className="text-gray-600">Home</a>
        <a href="#" className="text-gray-600">About</a>
        <a href="#" className="text-gray-600">Privacy Policy</a>
        <a href="#" className="text-gray-600">Terms and Conditions</a>
      </div>
      <div className="space-x-4 text-gray-600">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>
    </footer>
  );
};

export default DashFooter;
