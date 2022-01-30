import React from "react";
import ScrollViewItems from "./ScrollViewItems";
import Vector from "./Icons/Vector";
import CaretIcon from "./Icons/CaretIcon";
import CourseFeeIcon from "./Icons/CourseFeeIcon";
import AdmissionIcon from "./Icons/AdmissionIcon";
import CutOffIcon from "./Icons/CutOffIcon";
import Scholarship from "./Icons/Scholarship";
import PlacementIcon from "./Icons/PlacementIcon";
import CampusIcon from "./Icons/CampusIcon";
import FacultyIcon from "./Icons/FacultyIcon";
import Clubs from "./Icons/Clubs";
import AchievementIcon from "./Icons/AchievementIcon";
import Link from "next/link";
function ScrollView() {
  const handleScroll = (no) => {
    const scroll = document.querySelector(".scrollview-scroll");
    const caretIcon = document.querySelector(".caret-icon");
    caretIcon.style.left += no * 100;
    scroll.scrollBy(no * 100, 0);
  };
  return (
    <div className="relative mx-2 my-3 xl:my-5 border-2 border-[rgba(125,125,125,0.4)] px-5 rounded-md">
      <span
        onClick={() => handleScroll(-1)}
        className="caret-icon absolute top-6 md:top-7 left-5 md:left-[2rem] text-primary-500 rotate-90 "
      >
        <CaretIcon className={"primary-caret"} />
      </span>
      <span
        onClick={() => handleScroll(1)}
        className="caret-icon absolute top-6 md:top-7 right-5 md:right-[2rem] text-primary-500 rotate-[-90deg] "
      >
        <CaretIcon className={"primary-caret"} />
      </span>
      <ul className="scrollview-scroll relative flex mx-[25px]  justify-start xl:max-w-full md:justify-start overflow-auto scroll-smooth rounded-lg p-3 no-scrollbar">
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems
          href={"/courses"}
          icon={<CourseFeeIcon />}
          name={"COURSE & FEES"}
        />
        <ScrollViewItems
          href={"/admission"}
          icon={<AdmissionIcon />}
          name={"ADMISSION"}
        />
        <ScrollViewItems icon={<CutOffIcon />} name={"CUTOFFS"} />
        <ScrollViewItems href={"/scholarship"} icon={<Scholarship />} name={"SCHOLARSHIPS"} />
        <ScrollViewItems icon={<PlacementIcon />} name={"PLACEMENTS"} />
        <ScrollViewItems icon={<CampusIcon />} name={"CAMPUS"} />
        <ScrollViewItems icon={<FacultyIcon />} name={"FACULTY"} />
        <ScrollViewItems icon={<Clubs />} name={"CLUBS"} />
        <ScrollViewItems icon={<AchievementIcon />} name={"ACHIEVEMENTS"} />
      </ul>
    </div>
  );
}

export default ScrollView;
