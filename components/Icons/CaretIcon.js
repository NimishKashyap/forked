import React from "react";

function CaretIcon({ className }) {
  return (
    <svg
      className={className}
      width={className == "primary-caret" ? 20 : 12}
      height={className == "primary-caret" ? 10 : 8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke={className == "primary-caret" ? "#D97559" : "#4B4B4B"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CaretIcon;
