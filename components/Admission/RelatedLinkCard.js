import React from "react";
import CaretIcon from "../Icons/CaretIcon";
import AdmissionOpenHeaderLogo from "./icons/AdmissionOpenHeaderLogo";

function RelatedLinkCard({ header, programme }) {
  return (
    <header className="flex overflow-hidden border-[#eee] border-2 rounded-md shadow-md my-5 mx-5 relative">
      <img src={"/assets/other.png"} />
      <div className="flex flex-col justify-between w-full my-5 mt-6 mr-[6rem]">
        <div className="mx-[4rem]">
          <h3 className="text-2xl mx-1 text-dark-500">{programme}</h3>
          <h1 className="text-4xl text-dark-500">{header}</h1>
        </div>
        <ul className="flex justify-around">
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Program Type</p>
            </span>
            <span className="ml-7 text-[#404366]">Part Time</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Seats</p>
            </span>
            <span className="ml-7 text-[#404366]">100</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Duration</p>
            </span>
            <span className="ml-7 text-[#404366]">2 Years</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2">Program Fee</p>
            </span>
            <span className="ml-7 text-[#404366]">99,999 /Yr</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo />{" "}
              <p className="mx-2">Admission Status</p>
            </span>
            <span className="ml-7 text-[#404366]">Closed</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2">Exams</p>
            </span>
            <span className="ml-7 text-[#404366]">GMAT, CAT</span>
          </li>
        </ul>
      </div>
      <span className="absolute right-3 top-3">
        <img src="/assets/heartClicked.png" />
      </span>
      <CaretIcon className={"absolute bottom-5 right-5"}/>
    </header>
  );
}

export default RelatedLinkCard;
