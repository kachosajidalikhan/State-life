import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Christopher J. Larson',
    position: 'Service Manager',
    text: 'Provided outstanding service, making our home search smooth and stress-free. Their expertise and attention to detail were top-notch. Highly recommend their professional team!',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
    rating: 5,
  },
  {
    name: 'Muhib bin asif',
    position: 'ACP Officer',
    text: 'Exceeded our expectations with their expertise and dedication. They found us the perfect home and guided us seamlessly through the process. Highly recommend their exceptional service!',
    image: 'https://via.placeholder.com/100',
    rating: 5,
  },
  {
    name: 'Stanley S. Nesbitt',
    position: 'Company Founder',
    text: 'Made buying our home a breeze. Their professional, attentive service and market knowledge were exceptional. We highly recommend them for any real estate needs!',
    image: 'https://via.placeholder.com/100',
    rating: 5,
  },
  {
    name: 'Stanley S. Nesbitt',
    position: 'Company Founder',
    text: 'Made buying our home a breeze. Their professional, attentive service and market knowledge were exceptional. We highly recommend them for any real estate needs!',
    image: 'https://via.placeholder.com/100',
    rating: 5,
  },

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < testimonials.length ? prevIndex + 3 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : testimonials.length - 3
    );
  };

  return (
    <div className='w-full bg-white mt-8'>
    <div className="w-[95%] mx-auto p-4">
    <div className="flex flex-col items-center py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">
        What Our <span className="text-blue-600">Client Says</span>
      </h2>
      <div className="relative flex justify-center items-center w-full max-w-5xl">
        {/* <button onClick={handlePrev} className="text-blue-600 p-2">
          &#8592;
        </button> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 w-full">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                {Array(testimonial.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={handleNext} className="text-blue-600 p-2">
          &#8594;
        </button> */}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array(Math.ceil(testimonials.length / 3)).fill().map((_, index) => (
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

export default Testimonials;
