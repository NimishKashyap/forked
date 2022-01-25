import React from "react";
import BannerContent from "./BannerContent";
import Button from "./Button";
import HeartIcon from "./icons/HeartIcon";

function Banner() {
  return (
    <div className="bg-hero-pattern flex bg-cover h-72 bg-no-repeat mt-24 rounded-xl relative">
      <BannerContent />
      <div className="flex items-center absolute right-5 bottom-5">
        <Button>APPLY NOW</Button>
        <Button>FOLLOW</Button>
        <HeartIcon />
      </div>
    </div>
  );
}

export default Banner;
