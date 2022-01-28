import Image from "next/image";
import React, { useState } from "react";
import ExamsAcceptedCards from "../Admission/ExamsAcceptedCards";
import ProcessCard from "../Admission/ProcessCard";
import CaretIcon from "../Icons/CaretIcon";
import YearDropDown from "../YearDropDown";

function CourseSwitch({ course, hostel }) {
  const [term, setTerm] = useState("1st Term");
  const [caret, setCaret] = useState(false);
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
      <ul className="mx-5 my-3 py-2 flex max-w-fit mb-6 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto cursor-pointer no-scrollbar">
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
      {/* About section */}
      <div
        className={`pb-5 flex justify-between items-center ${
          selected.about ? "block" : "hidden"
        }`}
      >
        <div className="md:w-2/3 mx-5">
          <h1 className="text-dark-500 md:text-2xl">About this Course</h1>
          <p className="text-xs md:text-base font-light text-justify py-5">
            {course.about}
          </p>
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
          className="hidden lg:block object-contain rounded-lg mr-5 md:max-h-[220px] md:max-w-[40%]"
          src={`/course/courseInnerImage.png`}
        />
      </div>
      {/* Curriculum */}
      <div className={`${selected.curriculum ? "block" : "hidden"}`}>
        <h1 className="text-dark-500 text-xl mx-5">Curriculum Outline</h1>
        <YearDropDown course={course} />
        <div className="mx-5">
          <h3 className="text-dark-500 mb-5 text-xl">Semester 1</h3>
          <div className="grid gap-y-2 w-full md:grid-cols-2 md:grid-flow-col grid-rows-4 md:grid-rows-8 list-none text-dark-200">
            <li className="flex items-center">
              1) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              2) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              3) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              4) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              5) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              6) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              7) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              8) Advanced Agricultural Management
            </li>
          </div>
          <h3 className="text-dark-500 mb-5 text-xl mt-5">Semester 2</h3>
          <div className="grid gap-2 w-full md:grid-cols-2 md:grid-flow-col grid-rows-4 md:grid-rows-8 list-none mb-5 text-dark-200">
            <li className="flex items-center">
              1) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              2) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              3) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              4) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              5) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              6) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              7) Advanced Agricultural Management
            </li>
            <li className="flex items-center">
              8) Advanced Agricultural Management
            </li>
          </div>
        </div>
      </div>
      {/* CouseFee */}
      <div className={`w-full ${selected.courseFee ? "block" : "hidden"}`}>
        {/* Large screen */}
        <div className="hidden md:grid grid-cols-7 gap-3 relative text-dark-200">
          <div className="col-span-2 flex flex-col ml-5 border-b-2">
            <h1 className="font-bold text-dark-500">Parameters</h1>
          </div>
          <div className="border-b-2">
            <h1 className="font-bold text-dark-500">1st Term </h1>
          </div>
          <div className="border-b-2">
            <h1 className="font-bold text-dark-500">2nd Term </h1>
          </div>
          <div className="border-b-2">
            <h1 className="font-bold text-dark-500">3rd Term </h1>
          </div>
          <div className="col-span-2 flex flex-col items-end mr-5 border-b-2">
            <h1 className="font-bold text-dark-500">Total INR</h1>
          </div>
          {course.courseFee.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-2 flex flex-col ml-5 border-b-2">
                  <h1>{Object.keys(item)[0]}</h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["1st Term"]}</h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["2nd Term"]} </h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["3rd Term"]} </h1>
                </div>
                <div className="col-span-2 flex flex-col items-end mr-5 border-b-2">
                  <h1>{item[Object.keys(item)[0]].total()} </h1>
                </div>
              </React.Fragment>
            );
          })}
          <span className="absolute bottom-[-2rem] right-5 font-bold text-dark-500">
            <span className="text-primary-500 mr-5">Sub Total: </span>45000
          </span>
        </div>
        {/* Small screen */}
        <div className="grid text-xs md:hidden grid-cols-4 gap-3 relative text-dark-200">
          <div className="col-span-2 flex flex-col ml-5 border-b-2">
            <h1 className="font-bold text-dark-500">Parameters</h1>
          </div>
          <div className="border-b-2 relative">
            <h1 className="font-bold text-dark-500">
              <span
                className="flex items-center justify-between"
                onClick={() => {
                  setCaret(!caret);
                }}
              >
                {term}{" "}
                <span
                  className={`transition-all duration-300 ${
                    caret ? "rotate-180" : ""
                  }`}
                >
                  <CaretIcon />
                </span>
              </span>
            </h1>
            <div
              className={`${
                !caret
                  ? "hidden"
                  : "  absolute flex flex-col items-start border-2 top-6 left-0 w-full bg-white rounded-md text-dark-500"
              }`}
            >
              <ul className="w-full">
                <li
                  onClick={(e) => {
                    setTerm(e.target.innerHTML);
                    setCaret(!caret);
                  }}
                  className="border-b-2 mx-2 my-2"
                >
                  Term 1
                </li>
                <li
                  onClick={(e) => {
                    setTerm(e.target.innerHTML);
                    setCaret(!caret);
                  }}
                  className="border-b-2 mx-2 my-2"
                >
                  Term 2
                </li>
                <li
                  onClick={(e) => {
                    setTerm(e.target.innerHTML);
                    setCaret(!caret);
                  }}
                  className="mx-2 pb-2"
                >
                  Term 3
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-end mr-5 border-b-2">
            <h1 className="font-bold text-dark-500">Total INR</h1>
          </div>
          {course.courseFee.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-2 flex flex-col ml-5 border-b-2">
                  <h1>{Object.keys(item)[0]}</h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]][term]}</h1>
                </div>

                <div className="flex flex-col items-end mr-5 border-b-2">
                  <h1>{item[Object.keys(item)[0]].total()} </h1>
                </div>
              </React.Fragment>
            );
          })}
          <span className="absolute bottom-[-2rem] right-5 font-bold text-dark-500">
            <span className="text-primary-500 mr-5">Sub Total: </span>45000
          </span>
        </div>
        <br />
        <br />
        <div className="hidden md:grid grid-col-4 md:grid-cols-7 gap-3 mb-10 relative text-dark-200">
          {hostel.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-2 flex flex-col ml-5 border-b-2">
                  <h1>{Object.keys(item)[0]}</h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["1st Term"]}</h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["2nd Term"]} </h1>
                </div>
                <div className="border-b-2">
                  <h1>{item[Object.keys(item)[0]]["3rd Term"]} </h1>
                </div>
                <div className="col-span-2 border-b-2 flex flex-col items-end mr-5">
                  <h1>{item[Object.keys(item)[0]].total()} </h1>
                </div>
              </React.Fragment>
            );
          })}
          <span className="absolute bottom-[-2rem] right-5 font-bold text-dark-500">
            <span className="text-primary-500 mr-5">Total: </span>45000
          </span>
        </div>
      </div>
      {/* eligibility */}
      <div className={`${selected.eligibility ? "block" : "hidden"}`}>
        <div
          className={`flex justify-between m-5 overflow-x-scroll no-scrollbar`}
        >
          <ExamsAcceptedCards />
          <ExamsAcceptedCards />
          <ExamsAcceptedCards />
        </div>
        <h1 className="text-dark-500 mx-5 md:text-2xl font-medium mt-6 mb-5">
          Eligibility Criteria
        </h1>
        <ul className="mx-6 md:mx-10 mb-5 md:w-2/3 text-justify list-disc text-xs md:text-base">
          <li className="text-primary-500">
            <p className="text-dark-500">
              The candidate must hold a Bachelor&apos;s or Master&apos;s Degree
              in agricultural sciences or agriculture-related disciplines, with
              at least 50% marks or equivalent CGPA from a university recognised
              by UGC.
            </p>
          </li>
          <br />
          <li className="text-primary-500">
            <p className="text-dark-500">
              In case of the candidates belonging to Scheduled Caste
              (SC)/Scheduled Tribe (ST) and Differently Abled (DA) category,
              this is relaxed to 45%.
            </p>
          </li>
          <br />
          <li className="text-primary-500">
            <p className="text-dark-500">
              The Bachelor’s Degree or equivalent qualification obtained by the
              candidate must entail a minimum of three years of education after
              completing higher secondary schooling (10+2) or equivalent.
            </p>
          </li>
          <br />
          <li className="text-primary-500">
            <p className="text-dark-500">
              Should have a strong interest in agriculture, food, rural and
              allied sectors. Such candidates will be required to submit a
              special form as described in section 2.1 under the admission
              procedure.
            </p>
          </li>
          <br />
          <li className="text-primary-500">
            <p className="text-dark-500">
              Failure to submit the form will disqualify the candidate from
              being considered further for admission to the program.
            </p>
          </li>
        </ul>
        <div className="flex items-center mx-5 my-7">
          <h1 className="text-dark-500 mr-5 text-sm md:text-xl font-medium">
            Check Cutoffs and Selection Process Lorem Ipsum
          </h1>
          <button className="text-xs sm:w-auto md:text-base bg-primary-500 text-white px-5 py-2 md:px-10 md:py-2 font-medium rounded-lg">
            CUTOFFS
          </button>
        </div>
      </div>
      {/* Admission Process */}
      <div
        className={`flex flex-col md:flex-row justify-evenly md:w-full ${
          selected.admissionProcess ? "block" : "hidden"
        }`}
      >
        <ProcessCard
          src="/assets/step1.png"
          step={"Step 1"}
          details={
            "Candidates will be short-listed for Group Discussion (GD) and have to be in a group of all the selected candidates."
          }
        />
        <ProcessCard
          src="/assets/step2.png"
          step={"Step 2"}
          details={
            "Candidates will be short-listed for Group Discussion (GD) and have to be in a group of all the selected candidates."
          }
        />
        <ProcessCard
          src="/assets/step3.png"
          step={"Step 3"}
          details={
            "Candidates will be short-listed for Group Discussion (GD) and have to be in a group of all the selected candidates."
          }
        />
      </div>
    </>
  );
}

export default CourseSwitch;
