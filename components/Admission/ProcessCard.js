import Image from "next/image";
import React from "react";

function ProcessCard({ src, step, details }) {
  return (
    
      <div
        className={`flex flex-col items-center justify-center w-auto md:w-1/3 md:mx-8 md:p-5 ${
          step === "Step 1" ? "ml-[2rem]" : ""
        }`}
      >
        <Image
          width={`${step === "Step 1" ? "300px" : "190px"}`}
          height={"240px"}
          className="object-contain"
          src={src}
          alt="steps"
        />
        <img
          className="mx-2 my-2  object-contain w-[70%] md:w-[90%]"
          src="/assets/Indication.png"
          alt="indication"
        />
        <h1 className="my-5 text-primary-500 font-medium text-sm mx-5 md:text-xl">
          {step}
        </h1><p className="text-dark-700 font-medium text-xs mx-5 mb-5 md:text-base">
        {details}
      </p>
      </div>
      
    
  );
}

export default ProcessCard;
