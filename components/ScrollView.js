import React from "react";
import ScrollViewItems from "./ScrollViewItems";
import Vector from "./Icons/Vector";
function ScrollView() {
  return (
    <div className="relative">
      <ul className="flex mx-[30px] md:mx-auto justify-start md:max-w-[90%] md:justify-center overflow-auto scroll-smooth border-2 border-[rgba(125,125,125,0.4)] rounded-lg p-3 mt-5 no-scrollbar">
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
