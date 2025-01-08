import React from 'react'
import about from "../assets/images/about.png"

function Services() {
  return (
    <div className='w-full bg-white mt-8'>
      <div className="w-[85%] mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text Section */}
          <div className="md:col-span-1">
            <div className="w-full md:w-[90%]">
              <h1 className='text-2xl md:text-3xl font-semibold'>
                We Are Offering The Best 
                <span className="text-[#1252AE]"> Real Estate</span> Deals
              </h1>
            </div>
            <div className="mt-4 md:mt-7">
              <p className='text-sm md:text-xs font-light'>
                At our agency, we pride ourselves on offering the best real estate deals available. Our expert team works tirelessly to find exceptional opportunities tailored to your needs, ensuring you get the best value whether you're buying, selling, or renting. With our deep market knowledge and commitment to client satisfaction, you can trust us to deliver outstanding deals that help you achieve your real estate goals.
              </p>
            </div>

            <div className="mt-5">
              <ul className="max-w-2xl mx-auto mt-4 md:mt-8 space-y-2">
                <li className='text-sm'>A building with only one room and typically a steep pointy roof.</li>
                <li className='text-sm'>A building with only one room and typically a steep pointy roof.</li>
                <li className='text-sm'>A building with only one room and typically a steep pointy roof.</li>
                <li className='text-sm'>A building with only one room and typically a steep pointy roof.</li>
                <li className='text-sm'>A building with only one room and typically a steep pointy roof.</li>
              </ul>
            </div>

            <div className="mt-5">
              <button className='px-4 py-2 rounded-md bg-[#1252AE] text-white text-sm md:text-base'>View More</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img src={about} className="w-full h-auto md:max-w-md rounded-lg" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
