import Image from "next/image";
import React, { useState } from "react";

function CourseSwitch({ course }) {
  const initialState = {
    about: false,
    curriculum: false,
    courseFee: false,
    eligibility: false,
    admissionProcess: false,
  };
  const [selected, setSelected] = useState({
    about: true,
    curriculum: false,
    courseFee: false,
    eligibility: false,
    admissionProcess: false,
  });
  const handleClick = (e) => {
    if (e.target.innerHTML == "About") {
      setSelected({
        ...initialState,
        about: true,
      });
    } else if (e.target.innerHTML == "Curriculum") {
      setSelected({
        ...initialState,
        curriculum: true,
      });
    } else if (e.target.innerHTML == "Course Fee") {
      setSelected({
        ...initialState,
        courseFee: true,
      });
    } else if (e.target.innerHTML == "Eligibility") {
      setSelected({
        ...initialState,
        eligibility: true,
      });
    } else if (e.target.innerHTML == "Admission Process") {
      setSelected({
        ...initialState,
        admissionProcess: true,
      });
    }
  };
  return (
    <>
      <ul className="mx-5 my-3 py-2 flex max-w-fit mb-6 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto">
        <li
          onClick={handleClick}
          className={`ml-1 hover:cursor-pointer ${
            selected.about === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          About
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected.curriculum === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          Curriculum
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected.courseFee === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          Course Fee
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected.eligibility === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          Eligibility
        </li>
        <li
          onClick={handleClick}
          className={`ml-3 hover:cursor-pointer ${
            selected.admissionProcess === true
              ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
              : ""
          }`}
        >
          Admission Process
        </li>
      </ul>
      <div className="pb-5 flex justify-between items-center">
        <div className="md:w-2/3 mx-5">
          <h1 className="text-dark-500 md:text-2xl">About this Course</h1>
          <p className="text-xs md:text-base font-light text-justify py-5">{course.about}</p>
          <button className="flex items-center px-5 py-2 md:py-3 border-2 text-dark-200 border-primary-500 rounded-lg">
            <svg
              width="17"
              height="18"
              className="mr-5"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11.4247V14.758C16 15.2 15.8244 15.624 15.5118 15.9365C15.1993 16.2491 14.7754 16.4247 14.3333 16.4247H2.66667C2.22464 16.4247 1.80072 16.2491 1.48816 15.9365C1.17559 15.624 1 15.2 1 14.758V11.4247"
                stroke="#818181"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13211 12.1916C8.24272 12.2447 8.36662 12.2747 8.49748 12.2751C8.49831 12.2751 8.49915 12.2751 8.49998 12.2751C8.50439 12.2751 8.50878 12.275 8.51316 12.275C8.61086 12.2735 8.70456 12.2555 8.79161 12.2237C8.90455 12.1826 9.01051 12.1167 9.10111 12.0261L13.2678 7.85945C13.5997 7.5275 13.5997 6.98931 13.2678 6.65737C12.9358 6.32542 12.3976 6.32542 12.0657 6.65737L9.34998 9.37307L9.34998 1.42507C9.34998 0.955631 8.96942 0.575073 8.49998 0.575073C8.03054 0.575073 7.64998 0.955631 7.64998 1.42507L7.64998 9.37291L4.93444 6.65737C4.60249 6.32542 4.0643 6.32542 3.73236 6.65737C3.40041 6.98931 3.40041 7.5275 3.73236 7.85945L7.89196 12.019C7.91876 12.0465 7.94741 12.0721 7.9777 12.0957C8.02633 12.1337 8.07813 12.1656 8.13211 12.1916Z"
                fill="#818181"
              />
            </svg>
            <span>COLLEGE BOOKLET</span>
          </button>
          <div className=" flex items-center justify-between mt-5">
            <h1 className="text-dark-500 mr-5 text-xs md:text-xl font-medium">
              Curious about Food and Agribusiness Management?
            </h1>
            <button className="text-xs min-w-[40%] md:min-w-[25%] sm:w-auto md:text-base bg-primary-500 text-white px-3 py-2 md:px-4 md:py-2 font-medium rounded-lg">
              LEARN MORE
            </button>
          </div>
        </div>
        <img
          className="hidden md:block object-contain rounded-lg md:max-h-[220px] md:max-w-[40%]"
          src={`/course/courseInnerImage.png`}
        />
      </div>
    </>
  );
}

export default CourseSwitch;
