import React from 'react';
import Image from "next/image";
import Link from "next/link"

function SearchBar() {
    return(
        <div className="mx-4 sm:mx-12 flex items-center justify-center -my-6">
        <div className="border border-borderColor w-5/6 md:w-4/6 box-border rounded bg-fadeWhite-500 flex items-center">
            <div className="mx-4 my-2"><Image src="/NavBar/search.svg" alt="search" width="15px" height="15px" /></div>
            
            <input type="text" placeholder="Search here.." className="bg-fadeWhite-500 flex-1 outline-0"/>
                <button className="bg-primary-500 py-2 px-6 rounded text-white uppercase text-sm m-1 sm:block hidden">Search</button>
                </div>
        </div>
    );
}

export default SearchBar;