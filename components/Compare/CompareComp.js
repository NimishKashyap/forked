import React, { useState } from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
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
  const [compareClick, setCompareClick] = useState(false);

  if (compareClick) {
    return (
      <>
        <StepThree
          stepOneState={stepOneState}
          compare={compareClick}
          setCompare={setCompareClick}
        />
      </>
    );
  } else {
    return (
      <>
        <StepOne
          stepOneState={stepOneState}
          setStepOneState={setStepOneState}
        />
        <StepTwo compare={compareClick} setCompare={setCompareClick} />
      </>
    );
  }
}

export default CompareComp;
