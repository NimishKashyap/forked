import React from "react";
import ScrollViewItems from "./ScrollViewItems";
import Vector from "./Icons/Vector";
import CaretIcon from "./Icons/CaretIcon";
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
        className="caret-icon absolute top-6 md:top-7 left-5 md:left-16 text-primary-500 rotate-90 "
      >
        <CaretIcon className={"primary-caret"} />
      </span>
      <span
        onClick={() => handleScroll(1)}
        className="caret-icon absolute top-6 md:top-7 right-5 md:right-16 text-primary-500 rotate-[-90deg] "
      >
        <CaretIcon className={"primary-caret"} />
      </span>
      <ul className="scrollview-scroll relative flex mx-[25px] md:mx-[5rem] justify-start md:max-w-[80%] xl:max-w-full md:justify-center overflow-auto scroll-smooth rounded-lg p-3 no-scrollbar">
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
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
    </div>
  );
}

export default ScrollView;
