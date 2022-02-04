import React from "react";
import SearchBar from "../SearchBar";
import SearchBarModal from "./SearchBarModal";

function StepOneModal({ add, setAdd, stepOneState, setStepOneState }) {
  return (
    <div className="bg-white relative w-11/12 md:w-4/5 mx-auto my-[4rem] rounded-lg flex flex-col items-center text-dark-200 overflow-y-auto overflow-x-hidden">
      <img
        onClick={() => setAdd(false)}
        className="absolute top-2 right-2 cursor-pointer"
        src="/Compare/cross.png"
        alt="cross"
      />
      <h1 className="text-primary-500 font-medium mt-2 md:mt-[4rem] mb-5 text-lg md:text-2xl">
        Add a College to Compare
      </h1>
      <div className="flex md:gap-x-10 flex-wrap mb-8">
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] ml-2 md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] md:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
              <img
                className="absolute top-2 right-2 "
                src="/Compare/cross.png"
                alt="cross"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] md:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain md:h-16"
                alt="College Image"
              />
              <img
                className="absolute top-2 right-2"
                src="/Compare/cross.png"
                alt="cross"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div
          onClick={() => {
            setAdd(!add);
            console.log(add);
          }}
          className="cursor-pointer ml-5 md:ml-0"
        >
          {!stepOneState[2] ? (
            <div
              onClick={() => {
                setAdd(!add);
                console.log(add);
              }}
              className="cursor-pointer"
            >
              <div className="flex rounded-md flex-col items-center max-w-[250px]">
                <div className="border-2 rounded-lg my-3 md:my-0 py-5 flex flex-col justify-center w-[120px] md:w-[250px] h-[110px]">
                  <img
                    className="object-contain max-h-10"
                    src="/Compare/PlusIcon.png"
                  />
                  <p className="text-center text-dark-500">Add</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center mx-[-1rem] md:mx-0">
              <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px]">
                <div className="relative border-2 rounded-lg w-[120px] md:w-[250px] py-5 flex justify-center">
                  <img
                    src={stepOneState[2].img}
                    className="object-contain md:h-16"
                    alt="College Image"
                  />
                  <img
                    className="absolute top-2 right-2"
                    src="/Compare/cross.png"
                    alt="cross"
                  />
                </div>
              </div>
              <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[2].name}</p>
            </div>
          )}
        </div>
      </div>
      <SearchBarModal
        stepOneState={stepOneState}
        setStepOneState={setStepOneState}
      />
      <h1 className="text-primary-500 text-2xl mb-5">Similar Colleges</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 my-5 flex-wrap justify-center md:mx-[180px] ">
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div><div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[120px] lg:w-[250px] py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain h-16"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2 text-[10px] md:text-base text-center w-2/3 md:w-auto">{stepOneState[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default StepOneModal;
