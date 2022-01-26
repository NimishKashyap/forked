import React from "react";

function AdmissionDetails() {
  return (
    <div className="my-[3rem] mx-5 text-[#404366]">
      <div className="flex mx-5">
        <ul className="flex flex-col items-center w-1/4">
          <span className="text-[#9092A9] text-lg">15%</span>
          <span className="text-xl">Scheduled Caste</span>
        </ul>
        <ul className="flex flex-col items-center w-1/4">
          <span className="text-[#9092A9] text-lg">7.5%</span>
          <span className="text-xl">Scheduled Tribe</span>
        </ul>
        <ul className="flex flex-col items-center w-1/4">
          <span className="text-[#9092A9] text-lg">10%</span>
          <span className="text-xl">Economically Weaker Section</span>
        </ul>
        <ul className="flex flex-col items-center w-1/4">
          <span className="text-[#9092A9] text-lg">5%</span>
          <span className="text-xl">Persons with Benchmark Disabilities</span>
        </ul>
      </div>
    </div>
  );
}

export default AdmissionDetails;
