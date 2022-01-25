import React from "react";

function Button({ children }) {
  return (
    <div className="bg-[rgba(255,255,255,0.75)] mx-2 px-4 py-2 rounded-md text-[#404366]">
      {children}
    </div>
  );
}

export default Button;
