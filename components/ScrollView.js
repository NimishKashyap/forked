import React from "react";
import ScrollViewItems from "./ScrollViewItems";
import Vector from "./Icons/Vector";
function ScrollView() {
  return (
    <div>
      <ul className="flex md:mx-[50px] justify-start overflow-auto scroll-smooth border-2 border-[rgba(125,125,125,0.4)] rounded-lg p-3 mt-5">

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
        <ScrollViewItems icon={<Vector />} name={"COLLEGE INFO"} />
      </ul>
    </div>
  );
}

export default ScrollView;
