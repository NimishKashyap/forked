import React from "react";

function AdvertiseBanner() {
  return (
    <section className="flex justify-center my-6 p-[5rem] bg-[rgba(255,191,0,0.08)] w-screen">
      <img src="/assets/adBook.png" alt="AdBanner" />
      <div className="w-2/3 flex flex-col items-start mx-6 px-5 text-dark-500">
        <h1 className="text-4xl mb-5">
          Easily Apply through to your dream college
        </h1>
        <p className="text-xl w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer dolor sit amet, consectetur adipiscing
          elit. Nunc odio in et. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <button className="mt-5 mx-2 bg-primary-500 px-5 py-2 rounded-md text-white">APPLY NOW</button>
      </div>
    </section>
  );
}

export default AdvertiseBanner;
