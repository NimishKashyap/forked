import React from "react";
import CaretIcon from "./Icons/CaretIcon";

function FAQDropDown() {
  return (
    <div className="w-auto md:w-1/2 my-3 px-4">
      <ul className="flex flex-col h-full justify-evenly">
        <li className="flex items-center justify-between border-2 p-2 px-3 rounded-md">
          What is the general process to apply for schorlarships in India?
          <CaretIcon />
        </li>
        <li className="flex items-center justify-between border-2  p-2 px-3 rounded-md">
          What is the general process to apply for schorlarships in India?
          <CaretIcon />
        </li>
        <li className="flex items-center justify-between border-2  p-2 px-3 rounded-md">
          What is the general process to apply for schorlarships in India?
          <CaretIcon />
        </li>
        <li className="flex items-center justify-between border-2  p-2 px-3 rounded-md">
          What is the general process to apply for schorlarships in India?
          <CaretIcon />
        </li>
        <li className="flex items-center justify-between border-2 p-2 px-3 rounded-md">
          What is the general process to apply for schorlarships in India?
          <CaretIcon />
        </li>
      </ul>
    </div>
  );
}

export default FAQDropDown;
