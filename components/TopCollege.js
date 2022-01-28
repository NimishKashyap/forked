import Head from "next/head";
import React from "react";
import ProcessCard from "./Admission/ProcessCard";

const collegeItems = [
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
  {
    imgSrc: "/assets/image.png",
    header: "Indian Institute of Management (IIM)",
    location: "Kashipur",
  },
];

function TopCollegeItems({ imgSrc, header, location }) {
  return (
    <div className="relative flex flex-col border-2 md:max-w-[90%] min-w-[250px]  max-h-[400px] md:max-h-fit rounded-md pb-4 mx-5 md:my-5">
      <img className="absolute right-2 top-2" src={"/assets/heart.svg"} />
      <img className="object-cover" src={imgSrc} />
      <h1 className="w-2/3 my-2 font-medium xl:text-xl px-4 md:text-md lg:text-lg sm:text-sm xs:text-xs">
        {header}
      </h1>
      <div className="flex items-center">
        <img
          src="/assets/locationLogo.png"
          className="object-contain ml-5 mr-2 w-4"
        />
        <span className="xl:text-normal md:text-sm sm:text-xs">{location}</span>
      </div>
    </div>
  );
}

function TopCollege() {
  const handleScroll = (no) => {
    const scrollAmount = 150;
    const scrollContainer = document.querySelector(".scrollbar");
    scrollContainer.scrollBy(no * scrollAmount, 0);
  };

  return (
    <div className="flex justify-center md:my-5 relative ">
      <div className="no-scrollbar flex overflow-x-auto scroll-smooth scrollbar">
        {collegeItems.map((item, index) => (
          <TopCollegeItems
            key={index}
            imgSrc={item.imgSrc}
            header={item.header}
            location={item.location}
          />
        ))}

        <div className="hidden md:flex absolute right-0 md:right-10 top-[-3rem]">
          <svg
            onClick={() => handleScroll(-1)}
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="18" stroke="#9092A9" strokeWidth="2" />
            <path
              d="M21 13L15 19L21 25"
              stroke="#9092A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="38"
            onClick={() => handleScroll(1)}
            className="mx-2"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19"
              r="18"
              transform="rotate(180 19 19)"
              stroke="#404366"
              strokeWidth="2"
            />
            <path
              d="M17 25L23 19L17 13"
              stroke="#404366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopCollege;
