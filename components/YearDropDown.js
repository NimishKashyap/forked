import React, { useState } from "react";
import CaretIcon from "./Icons/CaretIcon";

function YearDropDown({ course }) {
  const [courseYear, setCourseYear] = useState(
    course.curriculumOutline[0].year
  );
  const [show, setShow] = useState(false);
  useState(() => {
    console.log("Content of course: ", course);
  }, []);
  return (
    <div className="mx-5 my-5 relative">
      <span>
        <div
          onClick={() => setShow(!show)}
          className="text-dark-500 max-w-[150px] flex items-center justify-between relative p-2 shadow-sm"
        >
          <span className="ml-2 py-2 hover:cursor-pointer">
            Year {courseYear}
          </span>
          <span
            className={`transition-all duration-300 ${
              show ? "rotate-180" : ""
            }`}
          >
            <CaretIcon />
          </span>
          <div
            className={`absolute transition-all p-2 max-h-[200px] md:max-h-[500px] overflow-y-auto duration-300 flex flex-col w-full top-10 left-0 bg-white rounded-lg z-500 list-none ${
              show ? "block" : "hidden"
            }`}
          >
            <ul>
              {course.curriculumOutline.map((item, index) => (
                <li
                  onClick={(e) => {
                    setShow(!show);
                    setCourseYear(item.year)
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                  key={index}
                >
                  Year {item.year}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </span>
    </div>
  );
}

export default YearDropDown;
