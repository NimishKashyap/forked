import React from "react";

function DocumentsRequired() {
  return (
    <div className="w-1/2 border-2 mx-5 p-5 rounded-md">
      <h1 className="text-2xl text-dark-500 mb-5 underline underline-offset-4">
        Documents Required
      </h1>
      <ul className="mx-5 list-disc">
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
            Bachelor's Degree (Official/Provisional)
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
