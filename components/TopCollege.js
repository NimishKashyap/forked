import React from "react";

function TopCollege() {
  return (
    <div className="flex justify-around relative">
      <div className=" relative flex flex-col border-2 max-w-fit rounded-md pb-4 mx-5">
        <img className="absolute right-2 top-2" src={"/assets/heartIcon.svg"} />
        <img className="object-cover" src="/assets/image.png" />
        <h1 className="w-2/3 my-2 font-medium text-xl px-4">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex items-center">
          <img
            src="/assets/locationLogo.png"
            className="object-contain ml-5 mr-2 w-4"
          />
          <span>Kashipur</span>
        </div>
      </div>
      <div className=" relative flex flex-col border-2 max-w-fit rounded-md pb-4 mx-5">
        <img className="absolute right-2 top-2" src={"/assets/heartIcon.svg"} />
        <img className="object-cover" src="/assets/image.png" />
        <h1 className="w-2/3 my-2 font-medium text-xl px-4">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex items-center">
          <img
            src="/assets/locationLogo.png"
            className="object-contain ml-5 mr-2 w-4"
          />
          <span>Kashipur</span>
        </div>
      </div>
      <div className=" relative flex flex-col border-2 max-w-fit rounded-md pb-4 mx-5">
        <img className="absolute right-2 top-2" src={"/assets/heartIcon.svg"} />
        <img className="object-cover" src="/assets/image.png" />
        <h1 className="w-2/3 my-2 font-medium text-xl px-4">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex items-center">
          <img
            src="/assets/locationLogo.png"
            className="object-contain ml-5 mr-2 w-4"
          />
          <span>Kashipur</span>
        </div>
      </div>
      <div className=" relative flex flex-col border-2 max-w-fit rounded-md pb-4 mx-5">
        <img className="absolute right-2 top-2" src={"/assets/heartIcon.svg"} />
        <img className="object-cover" src="/assets/image.png" />
        <h1 className="w-2/3 my-2 font-medium text-xl px-4">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex items-center">
          <img
            src="/assets/locationLogo.png"
            className="object-contain ml-5 mr-2 w-4"
          />
          <span>Kashipur</span>
        </div>
      </div>
      <div className="flex absolute right-10 top-[-3rem]">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19" cy="19" r="18" stroke="#9092A9" stroke-width="2" />
          <path
            d="M21 13L15 19L21 25"
            stroke="#9092A9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            stroke-width="2"
          />
          <path
            d="M17 25L23 19L17 13"
            stroke="#404366"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopCollege;
