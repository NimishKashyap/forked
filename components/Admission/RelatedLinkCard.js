import React from "react";
import AdmissionOpenHeaderLogo from "./icons/AdmissionOpenHeaderLogo";

function RelatedLinkCard({ header, programme }) {
  return (
    <header className="flex overflow-hidden shadow-md my-5 mx-5">
      <img src={"/assets/other.png"} />
      <div className="flex flex-col justify-between w-full my-5 mt-6">
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
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Program Type</p>
            </span>
            <span className="ml-7 text-[#404366]">Part Time</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Program Type</p>
            </span>
            <span className="ml-7 text-[#404366]">Part Time</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Program Type</p>
            </span>
            <span className="ml-7 text-[#404366]">Part Time</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default RelatedLinkCard;
