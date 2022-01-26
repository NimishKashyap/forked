import React from "react";

function AdmissionDetails() {
  return (
    <div className="my-[3rem] mx-5 text-[#404366]">
      <h1 className="text-4xl my-9">Admission Dates 2021</h1>
      <div className="flex justify-between mx-5">
        <ul className="flex flex-col items-start">
          <span className="text-[#9092A9] text-lg">
            Application Process Open
          </span>
          <span className="text-xl">31st May 2021</span>
        </ul>
        <ul className="flex flex-col items-start">
          <span className="text-[#9092A9] text-lg">
            Application Process End
          </span>
          <span className="text-xl">31st May 2021</span>
        </ul>
        <ul className="flex flex-col items-start">
          <span className="text-[#9092A9] text-lg">
            List of shortlisted candidates
          </span>
          <span className="text-xl">31st May 2021</span>
        </ul>
        <ul className="flex flex-col items-start">
          <span className="text-[#9092A9] text-lg">
            Online interview application deadline
          </span>
          <span className="text-xl">31st May 2021</span>
        </ul>
      </div>
    </div>
  );
}

export default AdmissionDetails;
