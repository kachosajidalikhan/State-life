import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Deals1 from "../assets/images/deals1.png";
import Deals2 from "../assets/images/deals2.png";
import { Plus } from 'lucide-react';

const PropertyCard = ({
  forSale,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
}) => (
  <div className="bg-white w-full sm:max-w-sm border rounded shadow-md">
    <div className="relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm font-semibold">
        {forSale ? "For Sale" : "For Rent"}
      </div>
      <button
        className="absolute top-2 right-2 p-2 bg-[#2A323C33] rounded-full shadow-md"
        aria-label="Favorite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className=" h-5 w-5 text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
    </div>
    <div className="m-6 border-b-2 pb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-4 w-4 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0 3.866-3.134 7-7 7S2 7 2 7 7.134 3 12 3s7 3.134 7 7z"
          />
        </svg>
        {location}
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <span className="mr-1">🛏️</span>
          {bedrooms} Bedroom
        </div>
        <div className="flex items-center">
          <span className="mr-1">🛁</span>
          {bathrooms} Bathroom
        </div>
      </div>
    </div>
    <div className="m-4 w-full"></div>

    <div className="flex justify-between items-center m-6 pt-0">
      <div className="text-lg font-bold text-blue-600">{price}</div>
      <button className="text-sm px-4 py-2 border rounded-lg bg-[#EBEEF2]">
        View More
      </button>
    </div>
  </div>
);

export default function RealEstateListings({ userType = 'seller' }) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-1/4">
          <ProfileSidebar />
        </div>
        <div className="container mx-auto p-4 md:p-6 flex-1">
          <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PropertyCard
              forSale={true}
              title="The Ultimate Modern Home"
              location="123 Dream Street, Karachi, Pakistan"
              bedrooms={3}
              bathrooms={2}
              price="PKR 25,00,000/-"
              imageUrl={Deals1}
            />
            <PropertyCard
              forSale={false}
              title="Elegant Family Residence"
              location="45 Clifton, Karachi, Pakistan"
              bedrooms={4}
              bathrooms={3}
              price="PKR 30,00,000/-"
              imageUrl={Deals2}
            />
            <PropertyCard
              forSale={false}
              title="Elegant Family Residence"
              location="45 Clifton, Karachi, Pakistan"
              bedrooms={4}
              bathrooms={3}
              price="PKR 30,00,000/-"
              imageUrl={Deals2}
            />
          </div>
          {userType === 'seller' && (
            <div className="fixed bottom-6 right-6">
              <button className="bg-blue-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
                Post Ad
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
