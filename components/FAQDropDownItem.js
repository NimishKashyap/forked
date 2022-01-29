import React, { useState } from "react";

import CaretIcon from "./Icons/CaretIcon";
function FAQDropDownItem() {
  const [checked, setChecked] = useState(false);
  return (
    <li className="flex flex-col border-2 p-2 px-3 rounded-md">
      <div className="flex items-center justify-between">
        What is the general process to apply for schorlarships in India?
        <button
          className={`${checked ? "rotate-180" : ""}`}
          onClick={() => setChecked(!checked)}
        >
          <CaretIcon />
        </button>
      </div>
      <div className={`${checked ? "block" : "hidden"}`}>
        <p>This is some content</p>
      </div>
    </li>
  );
}

export default FAQDropDownItem;
