import React from "react";
import CaretIcon from "./Icons/CaretIcon";

function MerchAd() {
  return (
    <div className="border-2 rounded-md">
      <div className="flex items-center border-b-2 px-5 py-2">
        <img src={"/news/final.png"} alt="T-Shirt" />
        <span className="ml-2">Zenboxx</span>
      </div>
      <div className="flex flex-col px-5 py-3 items-center relative">
        <h1 className="text-center text-lg w-2/3 font-medium">
          Explore Aerospace Merchandise
        </h1>
        <p className="text-sm my-5">
          Made with <span className="text-red-600">♥</span> from SkillZen{" "}
        </p>
        <img src="/news/MerchImage.png" alt="Merch Image" />
        <p className="my-3">$300</p>
        <button className="border-2 px-3 py-2 rounded-lg text-[#4b4b4b] mb-2 border-primary-500">
          Add to Cart
        </button>
        <div>
          <div className="absolute rotate-90 left-5 top-1/2">
            <CaretIcon />
          </div>
          <div className="absolute -rotate-90 right-5 top-1/2">
            <CaretIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchAd;
