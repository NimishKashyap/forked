import React, { useState } from "react";
import Image from "next/image";

const addedItem = {
  header: "College 03",
  img: "/Compare/collegeLogo.png",
  name: "Indian Institute of Management (IIMA)",
};

function SearchBarModal({ stepOneState, setStepOneState }) {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () =>{
      setStepOneState([...stepOneState, addedItem]);
  }
  return (
    <div className=" mx-4 sm:mx-12 flex w-full items-center justify-center my-4 md:my-6">
      <div className="border relative border-borderColor w-5/6 md:w-4/6 box-border rounded bg-fadeWhite-500 flex items-center">
        <div className="mx-4 my-2 ">
          <Image
            src="/NavBar/search.svg"
            alt="search"
            width="15px"
            height="15px"
          />
          <p className={`${stepOneState.length>=3?"block" : "hidden"} absolute top-[-2.5rem] md:top-[-26px] z-50 left-0 text-primary-500 w-full text-xs`}>You can compare only 3 colleges at a time. Remove one to add a new college.</p>
        </div>

        <input
          onClick={() => setDropdown(!dropdown)}
          type="text"
          placeholder="Search here.."
          className="bg-fadeWhite-500 flex-1 outline-0"
        />
        <button className="bg-primary-500 py-2 px-6 rounded text-white uppercase text-sm m-1 sm:block hidden">
          Search
        </button>
        {dropdown && (
          <div className="absolute shadow-md rounded-b-lg top-11 px-10 py-3 text-dark-500 bg-white z-10 w-full border-2">
            <ul>
              <li onClick={()=>handleClick()} className="hover:text-primary-500 hover:font-medium cursor-pointer">
                Indian Institute of Technology
              </li>
              <li className="hover:text-primary-500 hover:font-medium cursor-pointer">
                Indian Institute of Technology
              </li>
              <li className="hover:text-primary-500 hover:font-medium cursor-pointer">
                Indian Institute of Technology
              </li>
              <li className="hover:text-primary-500 hover:font-medium cursor-pointer">
                Indian Institute of Technology
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBarModal;
