import React, { useState } from "react";

function CutOffCompSwitch() {
  const initialState = {
    mba: false,
    certificate: false,
    diploma: false,
    executive: false,
    fpm: false,
  };
  const [selected, setSelected] = useState({
    mba: true,
    certificate: false,
    diploma: false,
    executive: false,
    fpm: false,
  });
  const handleClick = (e) => {
    if (e.target.innerHTML == "MBA/PGDM") {
      setSelected({
        ...initialState,
        mba: true,
      });
    } else if (e.target.innerHTML == "Certificate") {
      setSelected({
        ...initialState,
        certificate: true,
      });
    } else if (e.target.innerHTML == "Executive MBA") {
      setSelected({
        ...initialState,
        executive: true,
      });
    } else if (e.target.innerHTML == "Diploma") {
      setSelected({
        ...initialState,
        diploma: true,
      });
    } else if (e.target.innerHTML == "FPM") {
      setSelected({
        ...initialState,
        fpm: true,
      });
    }
  };
  return (
    <ul className="py-2 flex no-scrollbar max-w-fit mb-6 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto">
      <li
        onClick={handleClick}
        className={`ml-1 hover:cursor-pointer ${
          selected.mba === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        MBA/PGDM
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.certificate === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Certificate
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.diploma === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Diploma
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.executive === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Executive MBA
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.fpm === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        FPM
      </li>
    </ul>
  );
}

export default CutOffCompSwitch;
