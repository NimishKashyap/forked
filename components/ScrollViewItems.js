import React from "react";

function ScrollViewItems({ svg, icon, name }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-[rgba(100,100,100,1)]">{name}</p>
    </div>
  );
}

export default ScrollViewItems;
