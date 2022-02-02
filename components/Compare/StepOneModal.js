import React from "react";
import SearchBar from "../SearchBar";
import SearchBarModal from "./SearchBarModal";

function StepOneModal({ add, setAdd, stepOneState, setStepOneState }) {
  return (
    <div className="bg-white relative w-4/5 mx-auto my-[4rem] rounded-lg flex flex-col items-center text-dark-200">
      <img
        onClick={() => setAdd(false)}
        className="absolute top-2 right-2 cursor-pointer"
        src="/Compare/cross.png"
        alt="cross"
      />
      <h1 className="text-primary-500 font-medium mt-[4rem] mb-5 text-2xl">
        Add a College to Compare
      </h1>
      <div className="flex gap-x-10 flex-wrap mb-8">
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
              <img
                className="absolute top-2 right-2 "
                src="/Compare/cross.png"
                alt="cross"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
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
        <div
          onClick={() => {
            setAdd(!add);
            console.log(add);
          }}
          className="cursor-pointer"
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
      <SearchBarModal
        stepOneState={stepOneState}
        setStepOneState={setStepOneState}
      />
      <h1 className="text-primary-500 text-2xl mb-5">Similar Colleges</h1>
      <div className="flex gap-10 flex-wrap justify-center mx-[180px] ">
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
        <div>
          <div className="flex rounded-md flex-col items-center md:min-h-[120px] md:max-w-[250px] ">
            <div className="relative border-2 rounded-lg w-[200px] md:w-full py-5 flex justify-center">
              <img
                src={stepOneState[0].img}
                className="object-contain"
                alt="College Image"
              />
            </div>
          </div>
          <p className="mt-2">{stepOneState[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default StepOneModal;
