import React from "react";

function NewsCard() {
  return (
    <div className="flex flex-col mx-5 rounded-md shadow-md">
      <img
        src="/assets/NewsImage.png"
        alt="news image"
        className="object-cover"
      />
      <div className="p-5">
        <h1 className="text-dark-500 font-medium text-xl mb-5">
          DU cut-off list 2021: Hansraj becomes first college to demand a 100%
          cut-off
        </h1>
        <div className="flex justify-between text-dark-700">
          <p>October 1, 2021 {"  "}3 min read</p>
          <p>Source: livermint</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
