import React from "react";

function AdmissionDetails() {
  return (
    <div className="my-5 flex justify-items-stretch md:my-[3rem] mx-5 text-[#404366]">
      <div className="flex flex-col md:flex-row md:mx-5 w-2/3 md:w-full">
        <ul className="flex md:flex-col justify-start items-start md:items-center md:w-1/4 my-3">
          <span className="text-base mr-5 md:mr-auto md:text-xl">Scheduled Caste</span>
          <span className="text-[#9092A9] text-lg">15%</span>
        </ul>
        <ul className="flex md:flex-col justify-start items-start md:items-center md:w-1/4 my-3">
          <span className="text-base mr-5 md:mr-auto md:text-xl">Scheduled Tribe</span>
          <span className="text-[#9092A9] text-lg">7.5%</span>
        </ul>
        <ul className="flex md:flex-col justify-start items-start md:items-center md:w-1/4 my-3">
          <span className="text-base mr-5 md:mr-auto md:text-xl">Economically Weaker Section</span>
          <span className="text-[#9092A9] text-lg">10%</span>
        </ul>
        <ul className="flex md:flex-col justify-start items-start md:items-center md:w-1/4 my-3">
          <span className="text-base mr-5 md:mr-auto md:text-xl break-words">Persons with Benchmark Disabilities</span>
          <span className="text-[#9092A9] text-lg">5%</span>
        </ul>
      </div>
    </div>
  );
}

export default AdmissionDetails;
