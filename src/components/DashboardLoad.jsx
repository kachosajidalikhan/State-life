import React from 'react';

import dash from "../assets/images/dash.png"
import pic from "../assets/images/pic.png"
import DashFooter from './DashFooter';

function DashboardLoad() {
  return (
    <div className="">
              <div className="grid grid-cols-5 gap-4 bg-gray-100 p-2 mt-2 mb-16">
          {[1, 2, 3, 4,5,6,7,8,9,10,11,12].map((item) => (
            <div key={item} className="bg-white  rounded-lg shadow ">
              
              <img
                src={dash}
                alt="Property"
                className="w-full  mb-2"
              />
              <div className="flex justify-between pl-2 pr-2">
                <div className="">
              <h4 className="font-semibold">Lorem House</h4>
              <p className="text-gray-400 text-xs mt-3">Location</p>
              </div>
              <div className="">
                <p>$340</p>
              </div>

            
              </div>
              <div className="mt-2">
                <hr className='border-[1px] border-gray-300'/>
              </div>


              <div className="flex justify-between pl-2 pr-2 mt-2 mb-2">
                <div className="flex">
                    <div className="">
              <img src={pic}/>
              </div>
              <div className="ml-2">
              <p className="text-gray-400 text-xs ">Location</p>
              </div>
              </div>
              <div className="">
                
              </div>

            
              </div>

            </div>
          ))}
             
    
        </div>
        <div className="fixed bottom-0 w-full  ">
        <div className="w-[100%]">
          <DashFooter />
        </div>
      </div>
        </div>
  )
}

export default DashboardLoad
