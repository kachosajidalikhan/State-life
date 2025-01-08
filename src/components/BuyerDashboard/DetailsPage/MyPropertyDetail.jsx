import React from 'react';
import { Bed, Bath, Maximize2, Barcode as Garage } from 'lucide-react';
import ContactCard from './ContactCard';
import ImageCarousel from './ImageCarousel';
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import {files} from '../../../constants/index';

// Sample data - replace with your actual data

const propertyImages = [
  files.deals1,
  files.deals2,
  files.deals3,
];

function MyPropertyDetail() {

  const location = useLocation();
  const { house } = location.state || {}; // Ensure state exists to avoid errors
  console.log(house);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto">
        <ImageCarousel images={propertyImages} />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mt-6">
              <div className="flex flex-col items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{house.name}</h1>
                  <p className="flex justify-center items-center text-muted-foreground text-[#B9B9B9]">
                    <FaLocationDot className="text-[#B9B9B9] w-[10px] mr-2" />
                    {house.location}
                  </p>
                </div>
                <div className="text-right mt-6">
                  <div className="text-2xl text-[#1252AE] font-bold text-primary">
                    Price: {house.price}
                  </div>
                </div>
                <hr className="my-6" />
                <div>
                  <h1 className="text-3xl font-semibold">Property Details</h1>
                  <p className="mt-4 text-muted-foreground">{house.description}</p>
                </div>
              </div>
              <div className="grid mt-4 grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                    <div className="font-semibold">{house.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                    <div className="font-semibold">{house.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-5 w-5 text-muted-foreground" />
                    <div className="font-semibold">{house.area}</div>
                    <div className="text-sm text-muted-foreground">Sq.Ft.</div>
                </div>
                <div className="flex items-center gap-2">
                  <Garage className="h-5 w-5 text-muted-foreground" />
                    <div className="font-semibold">{house.garage}</div>
                    <div className="text-sm text-muted-foreground">Garage</div>
                </div>
              </div>
            </div>
          </div>
      
          {/* <div className="lg:sticky lg:top-6 lg:h-fit">
            <ContactCard
              name={house.agentName}
              location={house.location}
              rating={house.agentRating}
              image={house.agentImage || '/placeholder.svg?height=96&width=96'}
            />
          </div> */}
        </div>
      </main>
      <hr className="my-6" />
    </div>
  );
}

export default MyPropertyDetail;
