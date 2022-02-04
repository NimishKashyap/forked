import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function StepThree({ compare, setCompare, stepOneState }) {
  const handleCompare = () => setCompare(false);
  return (
    <div>
      <p className="mt-5 cursor-pointer">
        {"<"}{" "}
        <span
          onClick={() => handleCompare()}
          className="underline underline-offset-2 text-dark-500"
        >
          Back to Steps 1 and 2
        </span>
      </p>
      <StepOne name="Step 03" stepOneState={stepOneState} />
      <section className="w-full mt-5">
        {/* College Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              College Details
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500 text-xl">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500 text-xl">IIMA</span>
            </div>
            {stepOneState.length == 3 && (
              <div className="hidden md:flex items-center justify-center">
                <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
                <span className="text-dark-500 text-xl">IIMA</span>
              </div>
            )}
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Established Date
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">1961</p>
            <p className="md:border-b-2 text-dark-500 text-center">1961</p>
            <p className="md:border-b-2 hidden md:block text-dark-500 text-center">
              1961
            </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Ownership
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              Government
            </p>
            <p className="md:border-b-2 text-dark-500"> </p>
            <p className="md:border-b-2 hidden md:block text-dark-500"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Campus Size
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">2 Acre</p>
            <p className="md:border-b-2 text-dark-500"> </p>
            <p className="md:border-b-2 hidden md:block text-dark-500"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              No. of courses offered
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">12</p>
            <p className="md:border-b-2 text-dark-500 text-center"> </p>
            <p className="md:border-b-2 hidden md:block text-dark-500 text-center">
              {" "}
            </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Total Students Intake
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">1200</p>
            <p className="md:border-b-2"> </p>
            <p className="md:border-b-2 hidden md:block"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Total enrollment
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">3000</p>
            <p className="md:border-b-2 text-dark-500"> </p>
            <p className="md:border-b-2 hidden md:block"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Student - Faculty Ratio
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">25:1</p>
            <p className="md:border-b-2"> </p>
            <p className="md:border-b-2 hidden md:block"> </p>
          </>
        </div>
        {/* Locations */}
        <br />
        <br />
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Location
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            {stepOneState.length == 3 && (
              <div className="hidden md:flex items-center justify-center">
                <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
                <span className="text-dark-500">IIMA</span>
              </div>
            )}
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              City
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">Ahmedabad</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              State
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">Gujarat</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Ranking */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Rankings
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              UGC Approved
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              NIRF
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">1 (2020)</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              NAAC Grade
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">AAA</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Others
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              1 Outlook (2020)
            </p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Cutoffs */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Cutoffs
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              % in 12th Boards
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">95%</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              CGPA in Backelor&apos;s Degree
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              9 and above
            </p>
            <p className="md:border-b-2"> </p>
            <p className="md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              CGPA in Master&apos;s Degree
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              9 and above
            </p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Facilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Facilities
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Hostel
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Library
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Cafeteria
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Sports Complex
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Gym
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              ATM
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Medical Assistance
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Wi-Fi Campus
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Labs
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Auditorium
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Easy Commute Location
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Cost */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Cost
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Hostel Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $100000 pa.
            </p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Bachelor&apos;s Degree Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $10000 pa.
            </p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Master&apos;s Degree Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $10000 pa.
            </p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Ph.D / M.Phil Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $100000 pa.
            </p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Cerificate Courses Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $100000 pa.
            </p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Diploma Courses Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $10000 pa.
            </p>
            <p className="md:border-b-2"> </p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Average Online Courses Fees
            </p>
            <p className="md:border-b-2 text-dark-500 text-center">
              $10000 pa.
            </p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
        </div>
        <br />
        <br />
        {/* Placements */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">
              Placements
            </h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">
              Median Salary for Bachelor&apos;s Degree
            </p>
            <p className="md:border-b-2 text-dark-500 text-center"></p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Median Salary for Master&apos;s Degree</p>
            <p className="md:border-b-2 text-dark-500 text-center"></p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
        </div>
        <br />
        <br />
        {/* Exams */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">Exams</h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Required Exams</p>
            <p className="md:border-b-2 text-dark-500 text-center">CAT</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2 text-center"> CAT, GMAT</p>
          </>
        </div>
        <br />
        <br />
        {/* Courses Offered */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 text-dark-200 gap-y-3 md:gap-y-8">
          <>
            <h1 className="text-lg md:text-2xl text-dark-500 col-span-2 md:col-span-1">Courses Offered</h1>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Bachelor&apos;s Degree</p>
            <p className="md:border-b-2 text-dark-500 text-center">5</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Master&apos;s Degree</p>
            <p className="md:border-b-2 text-dark-500 text-center">7</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Ph. D/ M. Phil</p>
            <p className="md:border-b-2 text-dark-500 text-center"></p>
            <p className="md:border-b-2 text-center"></p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Certificate Courses</p>
            <p className="md:border-b-2 text-dark-500 text-center">7</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"></p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Diploma Courses</p>
            <p className="md:border-b-2 text-dark-500 text-center">5</p>
            <p className="md:border-b-2 text-center"></p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
          <>
            <p className="bg-gray-100 md:bg-white md:border-b-2 text-dark-200 font-medium pb-2 col-span-2 md:col-span-1">Online Courses</p>
            <p className="md:border-b-2 text-dark-500 text-center">5</p>
            <p className="md:border-b-2"></p>
            <p className="hidden md:block md:border-b-2"> </p>
          </>
        </div>
      </section>
    </div>
  );
}

export default StepThree;
