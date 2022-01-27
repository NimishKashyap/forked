import React from "react";

function ScrollViewItems({ svg, icon, name }) {
  return (
    <div className="flex max-w-[80%] w-16 min-w-fit mx-5 flex-col items-center">
      {icon}
      <p className="text-[rgba(100,100,100,1)] text-sm sm:text-base">{name}</p>
    </div>
  );
}

export default ScrollViewItems;
