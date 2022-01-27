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
  const handleNext = () => {
    setIndex((index + 1) % 3);
  };
  return (
    <div className="flex justify-start relative w-auto overflow-x-scroll py-5">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className=" flex flex-col mx-5 rounded-md shadow-md min-w-[300px] max-h-[420px] md:min-w-[33.33%] md:max-w-[33.33%]"
        >
          <img src={item.img} alt="news image" className="object-contain" />
          <div className="p-5">
            <h1 className="text-dark-500 font-medium text-xl mb-5">
              {item.header}
            </h1>
            <div className="flex justify-between text-dark-700">
              <p>
                {item.date} {"  "}
                {item.readMin}
              </p>
              <p>Source: {item.source}</p>
            </div>
          </div>
        </div>
      ))}

      <div
        onClick={handleNext}
        className="hidden md:flex absolute right-10 top-[-3rem] hover:animate-pulse hover:cursor-pointer"
      >
        <svg
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
