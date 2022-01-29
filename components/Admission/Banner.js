import React from "react";
import BannerContent from "./BannerContent";
import Button from "./Button";
import HeartIcon from "./icons/HeartIcon";

function Banner() {
  return (
    <div className="box-content bg-hero-pattern flex flex-col justify-between px-5 py-[3rem] h-[120px] sm:h-[150px] md:h-60 md:justify-start md:flex-row bg-cover bg-no-repeat md:mt-16 rounded-xl relative">
      <BannerContent />
      <div className="relative top-[10px] left-0 md:top-auto md:left-auto flex w-full justify-center items-baseline md:w-auto md:absolute right-5 bottom-5 md:mr-[2rem]">
        <Button>APPLY NOW</Button>
        <Button>FOLLOW</Button>
      </div>
      <span className="absolute top-3 right-3 md:top-auto md:bottom-6 md:right-3">
        <HeartIcon />
      </span>
    </div>
  );
}

export default Banner;
