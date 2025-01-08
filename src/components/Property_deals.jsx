import React from 'react';
import deals1 from "../assets/images/deals1.png";
import deals2 from "../assets/images/deals2.png";
import deals3 from "../assets/images/deals3.png"; 
// Import other images as needed

function PropertyDeals() {
  const properties = [
    {
      img: deals1,
      title: "Modern Family Home",
      location: "456 Elm Street, Lahore, Pakistan",
      bedrooms: 4,
      bathrooms: 3,
      garage: 1,
      price: "PKR 300,000/-",
    },
    {
      img: deals2,
      title: "Luxury Villa",
      location: "789 Maple Avenue, Islamabad, Pakistan",
      bedrooms: 5,
      bathrooms: 4,
      garage: 2,
      price: "PKR 500,000/-",
    },
  
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    {
      img: deals3,
      title: "Cozy Cottage",
      location: "101 Pine Lane, Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      garage: 1,
      price: "PKR 200,000/-",
    },
    // Add more property objects as needed
  ];

  return (
    <div className="w-full bg-[#F4F6F8] mt-8">
      <div className="w-[90%] lg:w-[85%] mx-auto p-4">
        
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#1252AE]">
            Popular <span className="text-black">Property Deals</span>
          </h1>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img src={property.img} alt={property.title} className="rounded-t-lg w-full"/>
              
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{property.title}</h1>
                <p className="text-xs font-light mb-2">{property.location}</p>

                <div className="flex justify-between text-xs font-light mb-2">
                  <p>{property.bedrooms} Bedroom</p>
                  <span>·</span>
                  <p>{property.bathrooms} Bathroom</p>
                  <span>·</span>
                  <p>{property.garage} Garage</p>
                </div>

                <hr className="border-gray-300 mb-2" />

                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#1252AE]">{property.price}</p>
                  <button className="text-sm text-[#1252AE] font-semibold">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-[#1252AE] text-white rounded-md text-sm font-semibold">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDeals;
