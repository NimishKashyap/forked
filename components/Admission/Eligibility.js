import React from "react";

function Eligibility() {
  return (
    <div className="w-full my-0 md:my-5 md:w-1/2 border-2 mx-5 p-5 rounded-md max-h-[300px] md:max-h-min overflow-scroll">
      <h1 className="text-lg md:text-2xl text-dark-500 mb-5 underline underline-offset-4">
        Eligibility
      </h1>
      <ul className="mx-5 list-disc text-xs md:text-base">
        <li className="text-primary-500">
          <p className="text-dark-500">
            Candidates must have a B.Sc, BTECH, BA, or BA (Hons) degree with 50
            per cent marks or equivalent CGPA.
          </p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">
            Applicants from reserved category need 45 per cent marks for both
            these fields.{" "}
          </p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">Reservation Certificates</p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">
            Final year or candidates awaiting results , if selected, will be
            allowed to join the programme provisionally only if they submit a
            certificate before commencement of program.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Eligibility;
