import Link from "next/link";
import React from "react";

function ScrollViewItems({ svg, icon, name, href }) {
  return (
    <Link href={href ? href : "#"}>
      <div className="flex max-w-[80%] w-16 min-w-fit mx-3 md:mx-10 flex-col items-center justify-center">
        {icon}
        <p className="text-[rgba(100,100,100,1)] text-xs md:text-sm sm:text-base">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default ScrollViewItems;
