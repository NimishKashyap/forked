import React from "react";

function DocumentsRequired() {
  return (
    <div className="w-full md:my-5 md:w-1/2 border-2 mx-5 my-2 p-5 rounded-md max-h-[300px] md:max-h-min overflow-scroll">
      <h1 className="text-2xl text-dark-500 mb-5 underline underline-offset-4">
        Documents Required
      </h1>
      <ul className="mx-5 list-disc text-xs md:text-base">
        <li className="text-primary-500">
          <p className="text-dark-500">Class 10th Mark Sheet</p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">10+2 Mark Sheet</p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">Reservation Certificates</p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">
            Bachelor&apos;s Degree (Official/Provisional)
          </p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">Resume</p>
        </li>
        <li className="text-primary-500">
          <p className="text-dark-500">Work Experience</p>
        </li>
      </ul>
    </div>
  );
}

export default DocumentsRequired;
