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
        <p
          onClick={() => setShow(!show)}
          className="text-dark-500 border-b-2 max-w-fit flex items-center"
        >
          <span className="mr-5 hover:cursor-pointer">Year {courseYear}</span>
          <span
            className={`transition-all duration-300 ${
              show ? "rotate-180" : ""
            }`}
          >
            <CaretIcon />
          </span>
        </p>
        <div
          className={`absolute top-0 flex flex-col left-0 z-500 bg-white list-none ${
            show ? "block" : "hidden"
          }`}
        >
          {course.curriculumOutline.map((item, index) => (
            <li  key={index}>Year {item.year}</li>
          ))}
        </div>
        
      </span>
    </div>
  );
}

export default YearDropDown;
