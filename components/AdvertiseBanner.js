import React from "react";

function AdvertiseBanner() {
  return (
    <section className="flex justify-center my-3 p-10 md:p-[5rem] bg-[rgba(255,191,0,0.08)] w-screen h-[300px] md:h-auto">
      <img className="h-[150px] md:h-auto object-contain" src="/assets/adBook.png" alt="AdBanner" />
      <div className="hidden w-auto md:w-2/3 md:flex flex-col items-start mx-6 px-5 text-dark-500">
        <h1 className="text-xl md:text-2xl mb-5 font-bold">
          Easily Apply through to your dream college
        </h1>
        <p className="text-lg w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer dolor sit amet, consectetur adipiscing
          elit. Nunc odio in et. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <button className="mt-5 mx-2 bg-primary-500 px-5 py-2 rounded-md text-white">APPLY NOW</button>
      </div>
      <div className="flex flex-col justify-start mt-5 ml-5 md:hidden">
        <h1 className="text-dark-500 font-bold">Complete your profile to enjoy the benefits of <span className="text-primary-500">CollegeKing</span></h1>
        <button className="mt-5 w-1/2 mx-2 bg-primary-500 px-5 py-2 rounded-md text-white">Sign Up</button>
      </div>
    </section>
  );
}

export default AdvertiseBanner;
