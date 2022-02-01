import React, { useState } from "react";

function StepTwo() {
  const [stepTwoState, setStepTwoState] = useState({
    all: false,
    details: false,
    location: false,
    ranking: false,
    placement: false,
    exams: false,
    cutOffs: false,
    facilities: false,
    cost: false,
    courseOffered: false,
  });
  const handleCheck = (id) => {
    switch (id) {
      case 1:
        setStepTwoState({
          ...stepTwoState,
          details: !stepTwoState.details,
        });
        break;
      case 2:
        setStepTwoState({
          ...stepTwoState,
          location: !stepTwoState.location,
        });
        break;
      case 3:
        setStepTwoState({
          ...stepTwoState,
          ranking: !stepTwoState.ranking,
        });
        break;
      case 4:
        setStepTwoState({
          ...stepTwoState,
          placement: !stepTwoState.placement,
        });
        break;
      case 5:
        setStepTwoState({
          ...stepTwoState,
          exams: !stepTwoState.exams,
        });
        break;
      case 6:
        setStepTwoState({
          ...stepTwoState,
          cutOffs: !stepTwoState.cutOffs,
        });
        break;
      case 7:
        setStepTwoState({
          ...stepTwoState,
          facilities: !stepTwoState.facilities,
        });
        break;
      case 8:
        setStepTwoState({
          ...stepTwoState,
          cost: !stepTwoState.cost,
        });
        break;
      case 9:
        setStepTwoState({
          ...stepTwoState,
          courseOffered: !stepTwoState.courseOffered,
        });
        break;
      case 10:
        setStepTwoState({
          details: true,
          location: true,
          ranking: true,
          placement: true,
          exams: true,
          cutOffs: true,
          facilities: true,
          cost: true,
          courseOffered: true,
        });
        break;
    }
  };

  return (
    <div className="flex items-start my-5">
      <img src="/Compare/Step1.png" className="my-5" alt="" />
      <div className="flex flex-col w-full">
        <div className="flex my-5 items-start justify-start">
          <h1 className="mx-5 text-dark-500 text-xl md:text-2xl">Step 02 : </h1>
          <p className="my-1 text-dark-200 text-xl">
            Select the criteria/criterion you want the comparison to be based on
            and hit compare
          </p>{" "}
        </div>
        <div className="grid grid-cols-5 gap-10 my-10 mx-[10rem]">
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(1)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.details ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(2)}
          >
            <img src="/Compare/location.png" />
            <img
              src={`/Compare/${
                stepTwoState.location ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(3)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.ranking ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(4)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.placement ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(5)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.exams ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(6)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.cutOffs ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(7)}
          >
            <img src="/Compare/location.png" />
            <img
              src={`/Compare/${
                stepTwoState.facilities ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(8)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.cost ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="flex justify-center relative"
            onClick={() => handleCheck(9)}
          >
            <img src="/Compare/details.png" />
            <img
              src={`/Compare/${
                stepTwoState.courseOffered ? "box-check.png" : "box-uncheck.png"
              }`}
              className="absolute top-0 right-0"
            />
          </div>{" "}
          <div
            className="py-5 ml-[4rem]"
            onClick={() => handleCheck(10)}
          >
            <button className="px-5 py-2 rounded-lg text-dark-200 border-2 border-primary-500">
              Select all
            </button>
          </div>{" "}
        </div>
        <button className="mx-auto py-2 px-5 bg-primary-500 text-white rounded-md">Compare</button>
      </div>
    </div>
  );
}

export default StepTwo;
