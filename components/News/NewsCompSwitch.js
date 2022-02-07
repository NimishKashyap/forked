import React, { useState } from "react";

function NewsCompSwitch() {
  const initialState = {
    featured: false,
    admission: false,
    events: false,
    campus: false,
    others: false,
  };
  const [selected, setSelected] = useState({
    featured: true,
    admission: false,
    events: false,
    campus: false,
    others: false,
  });
  const handleClick = (e) => {
    if (e.target.innerHTML == "Featured") {
      setSelected({
        ...initialState,
        featured: true,
      });
    } else if (e.target.innerHTML == "Admission") {
      setSelected({
        ...initialState,
        admission: true,
      });
    } else if (e.target.innerHTML == "Events") {
      setSelected({
        ...initialState,
        events: true,
      });
    } else if (e.target.innerHTML == "Campus Life") {
      setSelected({
        ...initialState,
        campus: true,
      });
    } else if (e.target.innerHTML == "Others") {
      setSelected({
        ...initialState,
        others: true,
      });
    }
  };
  return (
    <ul className=" py-2 flex no-scrollbar max-w-fit mb-6 text-dark-200 text-xs sm:text-sm whitespace-nowrap md:text-base overflow-x-auto">
      <li
        onClick={handleClick}
        className={`ml-1 hover:cursor-pointer ${
          selected.featured === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Featured
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.admission === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Admission
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.events === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
       Events
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.campus === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Campus Life
      </li>
      <li
        onClick={handleClick}
        className={`ml-3 hover:cursor-pointer ${
          selected.others === true
            ? "text-primary-500 font-bold underline underline-offset-8 decoration-[3px] "
            : ""
        }`}
      >
        Others
      </li>
    </ul>
  );
}

export default NewsCompSwitch;
