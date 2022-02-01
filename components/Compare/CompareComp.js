import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function CompareComp() {
  const [stepOneState, setStepOneState] = useState([
    {
      header: "College 01",
      img: "/Compare/collegeLogo.png",
      name: "Indian Institute of Management (IIMA)",
    },
    {
      header: "College 02",
      img: "/Compare/collegeLogo.png",
      name: "Indian Institute of Management (IIMA)",
    },
  ]);
  return (
    <>
      <StepOne stepOneState={stepOneState} setStepOneState={setStepOneState} />
      <StepTwo />
    </>
  );
}

export default CompareComp;
