import React from 'react'
import about from "../assets/images/about.png"

function AboutUs() {
  return (
    <div className='w-full bg-white mt-8'>
      <div className="w-[90%] md:w-[85%] mx-auto p-4">
        <div className="text-center md:text-left">
          <h1 className='text-2xl md:text-3xl font-semibold text-[#1252AE]'>
            About<span className='text-black'> Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-8">
          <div className="col-span-1 flex justify-center md:justify-start">
            <img src={about} className="w-full md:w-[80%] h-auto" alt="About us" />
          </div>

          <div className="col-span-1">
            <div className="w-full md:w-[90%]">
              <h1 className='text-xl md:text-3xl font-semibold'>
                We Are The Best And Trusted <span className="text-[#1252AE]">Real Estate</span> Agency
              </h1>
            </div>

            <div className="mt-4 md:mt-7">
              <p className='text-sm md:text-xs font-light'>
                At our real estate agency, we pride ourselves on being the best and most trusted in the industry.
                With a proven track record of delivering exceptional service and results, our team of dedicated
                professionals ensures that every client receives personalized attention and expert guidance throughout
                their real estate journey. Whether you’re buying, selling, or investing, you can rely on us for honesty,
                integrity, and unparalleled market knowledge. Trust us to make your real estate dreams a reality with
                confidence and ease.
              </p>
            </div>

            <ul className="max-w-full md:max-w-2xl mx-auto mt-6 md:mt-8">
              <li className='divide-y mb-4 shadow shadow-blue-600 rounded-xl'>
                <details className="group">
                  <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    <span>What services does your real estate agency offer?</span>
                  </summary>
                  <article className="px-4 pb-4 text-sm md:text-base">
                    <p>
                      We offer a comprehensive range of services including buying, selling, and renting residential and commercial properties.
                      Our services also include property valuation.
                    </p>
                  </article>
                </details>
              </li>

              <li className='divide-y mb-4 shadow shadow-blue-600 rounded-xl'>
                <details className="group">
                  <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    <span>How can I contact an agent?</span>
                  </summary>
                  <article className="px-4 pb-4 text-sm md:text-base">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.</p>
                  </article>
                </details>
              </li>

              <li className='divide-y mb-4 shadow shadow-blue-600 rounded-xl'>
                <details className="group">
                  <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    <span>What areas do you cover?</span>
                  </summary>
                  <article className="px-4 pb-4 text-sm md:text-base">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.</p>
                  </article>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
