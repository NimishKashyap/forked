import React from "react";

function ProcessCard({ src, step, details }) {
  return (
    <div className="w-1/3 mx-8 p-5">
      <img className="mx-5 my-5" src={src} alt="steps" />
      <img src="/assets/Indication.png" alt="indication" />
      <h1 className="my-5 text-primary-500 font-medium text-xl">{step}</h1>
      <p className="text-dark-700 font-medium text-base">{details}</p>
    </div>
  );
}

export default ProcessCard;
