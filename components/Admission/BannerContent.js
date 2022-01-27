import React from "react";
import CollegeLogo from "./icons/CollegeLogo";

function BannerContent() {
  return (
    <div className="md:ml-24 flex items-center justify-start">
      <CollegeLogo />
      <h1 className="text-white ml-5 relative">
        <span className="text-base font-medium md:text-[2rem] md:font-bold ">
          Indian Institues of Management Ahmedabad
        </span>
        <span className="absolute bottom-[-1.20rem] left-[1rem] md:bottom-[-3rem] md:left-0 text-xs font-medium md:text-xl hover:underline hover:cursor-pointer">
          Estd. in 1947
        </span>

        <span className="absolute md:bottom-[-3rem] flex items-center bottom-[-1.5rem] right-[1rem] md:right-[10rem] text-xs md:text-xl hover:underline hover:cursor-pointer">
          <svg
            width="30"
            height="30"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7.875C7.03553 7.875 7.875 7.03553 7.875 6C7.875 4.96447 7.03553 4.125 6 4.125C4.96447 4.125 4.125 4.96447 4.125 6C4.125 7.03553 4.96447 7.875 6 7.875Z"
              stroke="#FAFAFA"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M-nan -nanL6 1C4.67392 1 3.40215 1.54786 2.46447 2.52304C1.52678 3.49823 1 4.82087 1 6.2C1 7.4298 1.25125 8.2345 1.9375 9.125L5.61589 13.5391C5.81579 13.7789 6.18421 13.7789 6.38411 13.5391L10.0625 9.125C10.7488 8.2345 11 7.4298 11 6.2C11 4.82087 10.4732 3.49823 9.53553 2.52304C8.59785 1.54786 7.32608 1 6 1L-nan -nanL-nan -nanZ"
              stroke="#FAFAFA"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Ahmedabad, Gujrat
        </span>
      </h1>
    </div>
  );
}

export default BannerContent;
