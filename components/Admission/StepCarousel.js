import React from "react";

function StepCarousel() {
  return (
    <div className="mx-5 md:mx-[5rem] my-6">
      <h1 className="text-[#ffbf00] text-2xl md:text-5xl">Step 1</h1>
      <p className="text-sm md:text-lg mt-5 mb-auto md:mb-5">
        Candidates an register for any of the three rounds as per convenienece.
      </p>
      <div className="h-[20rem] my-5 rounded-lg bg-[#c4c4c4] relative">
        {/* Carousel Content Here */}
        <div className="hidden md:flex absolute right-3 top-[-3rem]">
          <svg
          
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="18" stroke="#9092A9" strokeWidth="2" />
            <path
              d="M21 13L15 19L21 25"
              stroke="#9092A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="38"
            className="mx-2"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19"
              r="18"
              transform="rotate(180 19 19)"
              stroke="#404366"
              strokeWidth="2"
            />
            <path
              d="M17 25L23 19L17 13"
              stroke="#404366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StepCarousel;
