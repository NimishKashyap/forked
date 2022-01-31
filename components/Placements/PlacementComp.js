import React, { useState } from "react";

function PlacementComp() {
  const initialState = {
    2021: false,
    2020: false,
    2019: false,
    2018: false,
    2017: false,
  };
  const [selected, setSelected] = useState({
    2021: true,
    2020: false,
    2019: false,
    2018: false,
    2017: false,
  });
  const handleClick = (e) => {
    if (e.target.innerHTML == "2021") {
      setSelected({
        ...initialState,
        2021: true,
      });
    } else if (e.target.innerHTML == "2020") {
      setSelected({
        ...initialState,
        2020: true,
      });
    } else if (e.target.innerHTML == "2019") {
      setSelected({
        ...initialState,
        2019: true,
      });
    } else if (e.target.innerHTML == "2018") {
      setSelected({
        ...initialState,
        2018: true,
      });
    } else if (e.target.innerHTML == "2017") {
      setSelected({
        ...initialState,
        2017: true,
      });
    }
  };
  return (
    <>
      <h1 className="text-dark-500 text-xl md:text-2xl mt-5 font-medium md:mt-[4rem]">Placements</h1>
      <ul className="py-3 flex no-scrollbar max-w-fit mb-3 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto">
        <li
          onClick={handleClick}
          className={`ml-1 hover:cursor-pointer ${
            selected[2021] === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          2021
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected[2020] === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          2020
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected[2019] === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          2019
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected[2018] === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          2018
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected[2017] === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          2017
        </li>
      </ul>
      <div className="flex justify-between md:justify-start items-end flex-wrap">
        <div className="flex items-end">
          <img className="h-16 md:h-auto" src="/collegeInfo/line.png" alt="" />

          <div className="sm:mb-0 mb-1 mx-3 md:mr-[10rem]">
            <h1 className="text-dark-500 font-bold uppercase md:text-2xl ">
              100%
            </h1>
            <p className="text-dark-700 text-xs text-left sm:text-base">
              Placement Rate
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <img className="h-16 md:h-auto" src="/collegeInfo/line.png" alt="" />
          <div className="sm:mb-0 mb-1 mx-3 md:mr-[10rem]">
            <h1 className="text-dark-500 font-bold uppercase md:text-2xl">
              182
            </h1>
            <p className="text-dark-700 text-xs md:text-base">No. of offers</p>
          </div>
        </div>
        <div className="flex items-end">
          <img
            className="h-16 md:h-auto"
            height={"100%"}
            src="/collegeInfo/line.png"
            alt=""
          />
          <div className="sm:mb-0 mb-1 mx-3 md:mr-[10rem]">
            <h1 className="text-dark-500 font-bold uppercase md:text-2xl">
              150
            </h1>
            <p className="text-dark-700 text-xs text-left sm:text-base">
              No. of dream offers
            </p>
          </div>
        </div>
        <div className="flex items-end my-4">
          <img
            className="h-16 md:h-auto"
            height={"100%"}
            src="/collegeInfo/line.png"
            alt=""
          />
          <div className="sm:mb-0 mb-1 mx-3 md:mr-20">
            <h1 className="text-dark-500 font-bold uppercase md:text-2xl">
              182
            </h1>
            <p className="text-dark-700 text-xs text-left sm:text-base">
              No. of recruiters
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacementComp;
