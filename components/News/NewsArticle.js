import React from "react";
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
];

function NewsArticle({ check, setCheck }) {
  return (
    <div className="overflow-x-scroll no-scrollbar overflow-y-hidden">
      <div className="grid gap-x-[1rem] grid-cols-3 min-w-[800px] gap-5 my-5">
        {newsItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setCheck(true)}
            className="cursor-pointer flex flex-col mx-5 rounded-md shadow-md min-w-[240px] max-h-[270px] text-ellipsis md:min-w-[30%] md:max-w-full md:max-h-[400px]"
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
    </div>
  );
}

export default NewsArticle;
