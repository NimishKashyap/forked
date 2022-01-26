import React from "react";

function QuickUpdateCards({ date, details }) {
  return (
    <div className="border-2 mx-5 min-h-fit p-5 rounded-lg max-w-xs">
      <p className="font-bold text-[#D86748] mb-3">{date}</p>
      <p className="font-light">{details}</p>
      <button className="mt-5 underline underline-offset-1 mx-1">Add to Calender</button>
    </div>
  );
}

export default QuickUpdateCards;
