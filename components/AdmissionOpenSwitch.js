import React, { useState } from "react";

function AdmissionOpenSwitch() {
  const initialState = {
    bachelor: false,
    masters: false,
    cerificate: false,
    diploma: false,
    phd: false,
  };
  const [selected, setSelected] = useState({
    bachelor: true,
    masters: false,
    cerificate: false,
    diploma: false,
    phd: false,
  });
  const handleClick = (e) => {
    if (e.target.innerHTML == "Bachelors") {
      setSelected({
        ...initialState,
        bachelor: true,
      });
    } else if (e.target.innerHTML == "Masters") {
      setSelected({
        ...initialState,
        masters: true,
      });
    } else if (e.target.innerHTML == "Certificate") {
      setSelected({
        ...initialState,
        cerificate: true,
      });
    } else if (e.target.innerHTML == "Diploma") {
      setSelected({
        ...initialState,
        diploma: true,
      });
    } else if (e.target.innerHTML == "Ph. D") {
      setSelected({
        ...initialState,
        phd: true,
      });
    }
  };
  return (
    <ul className="py-2 flex max-w-fit mb-6 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto">
      <li
        onClick={handleClick}
        className={`ml-1 hover:cursor-pointer ${
          selected.bachelor === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Bachelors
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.masters === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Masters
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.cerificate === true
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
          selected.phd === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Ph. D
      </li>
    </ul>
  );
}

export default AdmissionOpenSwitch;
