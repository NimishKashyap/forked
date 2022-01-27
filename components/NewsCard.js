import React, { useState } from "react";

const newsItems = [
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cut-off list 2021: Hansraj becomes first college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cut-offasdfadf list 2021: Hansraj becomes first college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cuasdfasdt-off list 2021: Hansraj becomes first college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cut-off list 2021: Hansraj becomes fqqqirst college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU new list 2021: Hansraj becomes first ewerwewcollege to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cut off list 2021: Hansraj becomes firsasdfafafasdft college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
  {
    img: "/assets/NewsImage.png",
    header:
      "DU cut-off list 2021: Hansraj becomessdasdf first college to demand a 100% cut-off",
    date: "October 1, 2021",
    readMin: "3 min read",
    source: "livermint",
  },
];

function NewsCard({ index, setIndex }) {
  const handleScroll = (no) => {
    const scrollAmount = 300;
    const scrollContainer = document.querySelector(".scrollbarnews");
    scrollContainer.scrollBy(no * scrollAmount, 0);
  };
  return (
    <div className="relative">
      <div className="flex justify-start w-auto overflow-x-scroll py-5 scrollbarnews scroll-smooth">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col mx-5 rounded-md shadow-md min-w-[240px] max-h-[250px] overflow-hidden text-ellipsis md:min-w-[30%] md:max-w-[50%] md:max-h-[400px]"
          >
            <img src={item.img} alt="news image" className="object-contain" />
            <div className="p-5">
              <h1 className="text-dark-500 font-medium text-sm lg:text-xl md:text-base mb-5">
                {item.header}
              </h1>
              <div className="flex justify-between text-dark-700">
                <p className="text-[10px] md:text-[10px] lg:text-[11px] md:text-base">
                  {item.date} {"  "}
                  {item.readMin}
                </p>
                <p className="text-[10px] md:text-[10px] lg:text-[11px] md:text-base ">
                  Source: {item.source}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex absolute top-[-2rem] right-0 hover:animate-pulse hover:cursor-pointer">
        <svg
          width="38"
          height="38"
          onClick={() => handleScroll(-1)}
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
  );
}

export default NewsCard;
