import React, { useState } from "react";

function StepOne({ stepOneState, setStepOneState }) {
  const [addCollege, setAddCollege] = useState(false);
  return (
    <div className="flex items-start">
      <img
        src="/Compare/Step1.png"
        className="my-5 h-[12rem] md:h-auto"
        alt=""
      />
      <div className="flex flex-col mx-2">
        <div className="flex my-5 md:items-start md:justify-start ">
          <h1 className="mx-2 md:mx-5 text-dark-500 text-lg md:text-2xl">
            Step 01 :{" "}
            <span className=" my-1 text-dark-200 text-sm md:text-xl">
              Pick atleast two colleges to begin.
            </span>{" "}
          </h1>
        </div>
        <div className="flex md:mx-[4rem] gap-[5rem] md:my-[2rem] overflow-scroll">
          <div>
            <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
              <h3 className="text-dark-500 md:text-2xl mb-5">
                {stepOneState[0].header}
              </h3>
              <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
                <img
                  src={stepOneState[0].img}
                  className="object-contain"
                  alt="College Image"
                />
                <img
                  className="absolute top-2 right-2"
                  src="/Compare/cross.png"
                  alt="cross"
                />
              </div>
            </div>
            <p className="">{stepOneState[0].name}</p>
          </div>
          <div>
            <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px]">
              <h3 className="text-dark-500 text-2xl mb-5">
                {stepOneState[1].header}
              </h3>
              <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
                <img
                  src={stepOneState[1].img}
                  className="object-contain"
                  alt="College Image"
                />
                <img
                  className="absolute top-2 right-2"
                  src="/Compare/cross.png"
                  alt="cross"
                />
              </div>
            </div>
            <p className="">{stepOneState[1].name}</p>
          </div>
          <div>
            <div className="flex rounded-md flex-col items-center max-w-[250px]">
              <h3 className="text-dark-500 text-2xl mb-5">College 03</h3>
              <div className="border-2 rounded-lg py-5 flex flex-col justify-center w-[250px] h-[124px]">
                <img
                  className="object-contain max-h-10"
                  src="/Compare/PlusIcon.png"
                />
                <p className="text-center text-dark-500">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
