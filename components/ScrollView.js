import React from "react";
import ScrollViewItems from "./ScrollViewItems";
import Vector from "./Icons/Vector";
import CaretIcon from "./Icons/CaretIcon";
function ScrollView() {
  const handleScroll = (no) => {
    const scroll = document.querySelector(".scrollview-scroll");
    scroll.scrollBy(no * 100, 0);
  };
  return (
    <div className="relative">
      <ul className="scrollview-scroll relative flex mx-[30px] md:mx-auto justify-start md:max-w-[90%] md:justify-center overflow-auto scroll-smooth border-2 border-[rgba(125,125,125,0.4)] rounded-lg p-3 mt-5 no-scrollbar">
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
      </ul>
      <span
        onClick={() => handleScroll(1)}
        className="absolute top-7 text-primary-500 right-10 rotate-[-90deg]"
      >
        <CaretIcon className={"primary-caret"} />
      </span>
      <span
        onClick={() => handleScroll(-1)}
        className="absolute top-7 text-primary-500 left-10 rotate-[90deg]"
      >
        <CaretIcon className={"primary-caret"} />
      </span>
    </div>
  );
}

export default ScrollView;
