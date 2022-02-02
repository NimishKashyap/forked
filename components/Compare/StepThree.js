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
        <div className="grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">College Details</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500 text-xl">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500 text-xl">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500 text-xl">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">Established Date</p>
            <p className="border-b-2 text-dark-500 text-center">1961</p>
            <p className="border-b-2 text-dark-500 text-center">1961</p>
            <p className="border-b-2 text-dark-500 text-center">1961</p>
          </>
          <>
            <p className="border-b-2 pb-2">Ownership</p>
            <p className="border-b-2 text-dark-500 text-center">Government</p>
            <p className="border-b-2 text-dark-500"> </p>
            <p className="border-b-2 text-dark-500"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Campus Size</p>
            <p className="border-b-2 text-dark-500 text-center">2 Acre</p>
            <p className="border-b-2 text-dark-500"> </p>
            <p className="border-b-2 text-dark-500"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">No. of courses offered</p>
            <p className="border-b-2 text-dark-500 text-center">12</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Total Students Intake</p>
            <p className="border-b-2 text-dark-500 text-center">1200</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Total enrollment</p>
            <p className="border-b-2 text-dark-500 text-center">3000</p>
            <p className="border-b-2 text-dark-500"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Student - Faculty Ratio</p>
            <p className="border-b-2 text-dark-500 text-center">25:1</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
        </div>
        {/* Locations */}
        <br />
        <br />
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Location</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">City</p>
            <p className="border-b-2 text-dark-500 text-center">Ahmedabad</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">State</p>
            <p className="border-b-2 text-dark-500 text-center">Gujarat</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Ranking */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Rankings</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">UGC Approved</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">NIRF</p>
            <p className="border-b-2 text-dark-500 text-center">1 (2020)</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">NAAC Grade</p>
            <p className="border-b-2 text-dark-500 text-center">AAA</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Others</p>
            <p className="border-b-2 text-dark-500 text-center">
              1 Outlook (2020)
            </p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Cutoffs */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Cutoffs</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">% in 12th Boards</p>
            <p className="border-b-2 text-dark-500 text-center">95%</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">CGPA in Backelor's Degree</p>
            <p className="border-b-2 text-dark-500 text-center">9 and above</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">CGPA in Master's Degree</p>
            <p className="border-b-2 text-dark-500 text-center">9 and above</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Facilities */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Facilities</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">Hostel</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Library</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Cafeteria</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Sports Complex</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Gym</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">ATM</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Medical Assistance</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Wi-Fi Campus</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Labs</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Auditorium</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Easy Commute Location</p>
            <p className="border-b-2 text-dark-500 text-center">&#10004;</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
        </div>
        <br />
        <br />
        {/* Cost */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Cost</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">Hostel Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$100000 pa.</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Bachelor's Degree Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$10000 pa.</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Master's Degree Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$10000 pa.</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Ph.D / M.Phil Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$100000 pa.</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Cerificate Courses Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$100000 pa.</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Diploma Courses Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$10000 pa.</p>
            <p className="border-b-2"> </p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Average Online Courses Fees</p>
            <p className="border-b-2 text-dark-500 text-center">$10000 pa.</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
        </div>
        <br />
        <br />
        {/* Placements */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Placements</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">
              Median Salary for Bachelor's Degree
            </p>
            <p className="border-b-2 text-dark-500 text-center">$4.5 LPA</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Median Salary for Master's Degree</p>
            <p className="border-b-2 text-dark-500 text-center">$4.5 LPA</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
        </div>
        <br />
        <br />
        {/* Exams */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Exams</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">Required Exams</p>
            <p className="border-b-2 text-dark-500 text-center">CAT</p>
            <p className="border-b-2"></p>
            <p className="border-b-2 text-center"> CAT, GMAT</p>
          </>
        </div>
        <br />
        <br />
        {/* Courses Offered */}
        <div className="my-8 grid grid-cols-4 text-dark-200 gap-y-8">
          <>
            <h1 className="text-2xl  text-dark-500">Courses Offered</h1>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[0].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[1].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-10 mr-3" src={stepOneState[2].img} />{" "}
              <span className="text-dark-500">IIMA</span>
            </div>
          </>
          <>
            <p className="border-b-2 pb-2">Bachelor's Degree</p>
            <p className="border-b-2 text-dark-500 text-center">5</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Master's Degree</p>
            <p className="border-b-2 text-dark-500 text-center">7</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Ph. D/ M. Phil</p>
            <p className="border-b-2 text-dark-500 text-center"></p>
            <p className="border-b-2 text-center">5</p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Certificate Courses</p>
            <p className="border-b-2 text-dark-500 text-center">7</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"></p>
          </>
          <>
            <p className="border-b-2 pb-2">Diploma Courses</p>
            <p className="border-b-2 text-dark-500 text-center"></p>
            <p className="border-b-2 text-center">5</p>
            <p className="border-b-2"> </p>
          </>
          <>
            <p className="border-b-2 pb-2">Online Courses</p>
            <p className="border-b-2 text-dark-500 text-center">7</p>
            <p className="border-b-2"></p>
            <p className="border-b-2"> </p>
          </>
        </div>
      </section>
    </div>
  );
}

export default StepThree;
