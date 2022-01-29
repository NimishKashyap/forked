import React from 'react';
import Image from "next/image"

function Banner() {
  return (
    <div className="mx-4 sm:mx-12 mb-2 mt-5 relative md:static">
    <div className="w-100 h-237 rounded bg-no-repeat bg-cover flex items-left justify-center flex-col pl-6 sm:pl-12" style={{backgroundImage:`url('/collegeInfo/bannerCollege.png')`}}>
      <div className="flex mr-8 mt-10">
          <div className="mt-2">
          <Image src="/collegeInfo/collegeLogo.svg" alt="college-logo" width="92px" height="92px" />
          </div>
          <div className="w-full ml-6 flex flex-col gap-5">
          <div>
              <h1 className="text-fadeWhite-400 font-bold text-2xl lg:text-4xl w-full md:w-9/12 lg:w-1/2 leading-10">Indian Institutes of Management Ahmedabad</h1>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 justify-between w-full">
              <div className="flex gap-6 text-2xl text-fadeWhite-400 items-center justify-left -mt-4">
                  <p className="text-xs sm:text-lg lg:text-2xl text-fadeWhite-400">Estd. in 1947</p>
                  <div className="flex items-center">
                  <Image src="/collegeInfo/locate-white.png" alt="locate" width="13px" height="20px" />
                  <p className="text-xs sm:text-lg lg:text-2xl text-fadeWhite-400 ml-2">
                  Ahmedabad, Gujarat</p>
                  </div>
              </div>
              <div className="flex gap-4">
                  <button className="bg-white py-2 px-3 opacity-70 rounded text-sm uppercase text-dark-500">Apply Now</button>
                  <button className="py-2 bg-white opacity-70 rounded px-3 text-sm uppercase text-dark-500">Follow</button>
                  <div className="absolute right-2 top-2 md:static">
                  <Image src="/collegeInfo/heart.svg" alt="heart" width="36px" height="32px" />
                  </div>
              </div>
          </div>
          </div>
      </div>
    </div>
</div>);
}

export default Banner;
