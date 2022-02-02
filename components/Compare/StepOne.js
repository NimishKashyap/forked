import React, { useState } from "react";
import StepOneModal from "./StepOneModal";

function StepOne({ stepOneState, setStepOneState, name }) {
  const [addCollege, setAddCollege] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-start">
        <img
          src="/Compare/Step1.png"
          className="my-5 h-[12rem] md:h-auto"
          alt=""
        />
        <div className="flex flex-col mx-2 text-dark-200">
          <div className="flex my-5 md:items-start md:justify-start ">
            <h1 className="mx-2 md:mx-5 text-dark-500 text-lg md:text-2xl">
              {name ? name : "Step 01"}{" "}
              <span className=" my-1 text-dark-200 text-sm md:text-xl">
                {name
                  ? "Check the comparison or add colleges or comparison parameters."
                  : " Pick atleast two colleges to begin."}
              </span>{" "}
            </h1>
          </div>
          <div className="flex md:mx-[4rem] gap-[5rem] md:my-[2rem] overflow-x-auto px-5">
            {name && (
              <div className="border-2 relative flex flex-col items-center rounded-lg pb-[100px] px-2">
                <h1 className="text-center text-dark-500 my-5 md:max-w-[60%]">
                  Selected Fields of Comparison
                </h1>
                <ul className="list-disc text-dark-200">
                  <li>College Details</li>
                  <li>Location</li>
                  <li>Rankings</li>
                </ul>
                <div className="absolute bottom-2 right-3 text-dark-200">
                  {" "}
                  + Add
                </div>
                <svg
                  className="absolute top-0"
                  width="95"
                  height="7"
                  viewBox="0 0 95 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M94.2588 0C94.2588 3.76881 91.2036 6.82403 87.4348 6.82403L7.56581 6.82403C3.797 6.82403 0.741783 3.76881 0.741783 0L94.2588 0Z"
                    fill="#FFBF00"
                  />
                </svg>
              </div>
            )}

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
              <p className="mt-2">{stepOneState[0].name}</p>
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
              <p className="mt-2">{stepOneState[1].name}</p>
            </div>
            {!stepOneState[2] ? (
              <div
                onClick={() => {
                  setAdd(!add);
                  console.log(add);
                }}
                className="cursor-pointer"
              >
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
            ) : (
              <div>
                <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px]">
                  <h3 className="text-dark-500 text-2xl mb-5">
                    {stepOneState[2].header}
                  </h3>
                  <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
                    <img
                      src={stepOneState[2].img}
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
                <p className="mt-2">{stepOneState[2].name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)] z-10 ${
          add ? "flex" : "hidden"
        }`}
      >
        <StepOneModal add={add} setAdd={setAdd} stepOneState={stepOneState} setStepOneState={setStepOneState}/>
      </div>
    </>
  );
}

export default StepOne;
