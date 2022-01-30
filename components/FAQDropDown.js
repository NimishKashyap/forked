import React, { useState } from "react";
import FAQDropDownItem from "./FAQDropDownItem";

function FAQDropDown() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-auto md:w-1/2 my-3 md:px-4">
      <ul className="flex flex-col h-full justify-evenly">
        <FAQDropDownItem />
        <FAQDropDownItem />
        <FAQDropDownItem />
        <FAQDropDownItem />
        <FAQDropDownItem />
      </ul>
    </div>
  );
}

export default FAQDropDown;
