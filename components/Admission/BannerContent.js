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
        <span className="absolute bottom-[-1.20rem] left-[7px] md:bottom-[-3rem] md:left-0 text-xs font-medium md:text-xl hover:underline hover:cursor-pointer">
          Estd. in 1947
        </span>

        <span className="absolute md:bottom-[-3rem] flex items-start bottom-[-1.5rem] right-[10px] md:right-[10rem] text-xs md:text-xl hover:underline hover:cursor-pointer text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <p>Ahmedabad, Gujrat</p>
        </span>
      </h1>
    </div>
  );
}

export default BannerContent;
