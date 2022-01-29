import React from "react";

function AdmissionDetails() {
  return (
    <div className="my-5 w-full md:w-auto flex md:my-[3rem] mx-5 text-[#404366]">
      <div className="flex flex-col md:flex-row items-start md:mx-5 w-full text-center">
        <ul className="flex md:flex-col md:items-center md:justify-center md:w-1/4 my-3">
          <p className="text-base mr-5 md:text-xl">Scheduled Caste</p>
          <p className="text-[#9092A9] text-lg">15%</p>
        </ul>
        <ul className="flex md:flex-col md:items-center md:justify-center md:w-1/4 my-3">
          <p className="text-base mr-5 md:text-xl">Scheduled Tribe</p>
          <p className="text-[#9092A9] text-lg">7.5%</p>
        </ul>
        <ul className="flex md:flex-col md:items-center md:justify-center md:w-1/4 my-3">
          <p className="text-base mr-5 md:text-xl">
            Economically Weaker Sections{" "}
          </p>
          <p className="text-[#9092A9] text-lg">10%</p>
        </ul>
        <ul className="flex md:flex-col md:items-center md:justify-center md:w-1/4 my-3">
          <p className="text-base mr-5 md:text-xl">
            Economically Weaker Sections{" "}
          </p>
          <p className="text-[#9092A9] text-lg">10%</p>
        </ul>
      </div>
    </div>
  );
}

export default AdmissionDetails;
