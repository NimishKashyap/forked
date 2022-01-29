import React from "react";

function QuickUpdateCards({ date, details }) {
  return (
    <div className="flex flex-col items-start border-2 mx-5 min-w-[200px] md:min-w-[20%] max-w-[80%] w-16 p-5 rounded-lg">
      <p className="font-bold text-[#D86748] mb-3">{date}</p>
      <p className="font-light text-ellipsis text-sm lg:text-base overflow-hidden">{details}</p>
      <button className="mt-5 underline underline-offset-1 mx-1">Add to Calender</button>
    </div>
  );
}

export default QuickUpdateCards;
