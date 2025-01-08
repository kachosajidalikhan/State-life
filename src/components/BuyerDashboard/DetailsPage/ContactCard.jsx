import React from 'react';
import { Star } from 'lucide-react';
import { FaLocationDot } from "react-icons/fa6";

function ContactCard({ name, location, rating, image }) {
  return (
    <div className="w-[16vw]  mt-8 border bg-white rounded-md shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            // width={30}
            // height={10}
            className="rounded-full w-12 h-12"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{name}</h3>
            
          </div>
        </div>
        <div className='flex mt-3 gap-1 text-[#B9B9B9]'>
        <FaLocationDot/>
        <p className="text-sm ">{location}</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
                <span className="text-lg font-semibold">{rating.toFixed(0)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-300 text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <button className="w-full px-4 py-2 bg-[#1252AE] text-white rounded-full hover:bg-blue-600">
          Contact
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
