import React, { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'A Modern House Accentuates',
    location: '4059 Waterview Texico, NM 88135',
    price: 'PKR 200,000',
    status: 'For Sale',
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Capital Hill Residence in New York',
    location: '1788 Lake Floyd Circle, DE 19707',
    price: 'PKR 200,000',
    status: 'For Sale',
    image: 'https://via.placeholder.com/300x200',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'A Modern House Accentuates',
    location: '3994 Jewel Road, MN 55402',
    price: 'PKR 200,000',
    status: 'For Sale',
    image: 'https://via.placeholder.com/300x200',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'A Modern House Accentuates',
    location: '3994 Jewel Road, MN 55402',
    price: 'PKR 200,000',
    status: 'For Sale',
    image: 'https://via.placeholder.com/300x200',
    rating: 4.6,
  },
  {
    id: 5,
    title: 'A Modern House Accentuates',
    location: '3994 Jewel Road, MN 55402',
    price: 'PKR 200,000',
    status: 'For Sale',
    image: 'https://via.placeholder.com/300x200',
    rating: 4.6,
  },
];

const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 < properties.length ? prevIndex + 3 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 >= 0 ? prevIndex - 3 : properties.length - 3
    );
  };

  return (
    <div className='w-full bg-gray-100 mt-8'>
    <div className="w-[85%] mx-auto p-4">
    <div className="py-8 ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">
          Featured <span className="text-blue-600">Properties</span>
        </h2>
      </div>
      <div className="relative flex justify-center items-center max-w-6xl mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 w-full">
          {properties.slice(currentIndex, currentIndex + 3).map((property) => (
            <div key={property.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{property.title}</h3>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <p className="font-bold text-blue-600 mt-2">{property.price}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                    {property.status}
                  </span>
                  <div className="flex items-center">
                    {Array(Math.floor(property.rating)).fill().map((_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                    {property.rating % 1 !== 0 && <span className="text-yellow-500">&#9733;</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array(Math.ceil(properties.length / 3)).fill().map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === index * 3 ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PropertyCarousel;
