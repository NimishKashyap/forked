import React from "react";

function Button({ children }) {
  return (
    <div className="bg-[#eee] md:bg-[rgba(255,255,255,0.75)] px-5 sm:px-6 mx-2 md:mx-2 md:px-4 py-2 rounded-md  text-[#404366] text-[10px] sm:text-sm md:text-base">
      {children}
    </div>
  );
}

export default Button;
