import React from 'react';
import Image from "next/image";
import Link from "next/link"

function Navbar() {
  return <div className="flex justify-between mx-6 h-20 items-center border-2">
      <div>
      <div className="flex flex-col ">
          <Image src="/NavBar/logo.svg" alt="logo" width="175px" height="68px" />
          </div>
      </div>
      <div>
         <div className="flex items-center gap-10">
         <span className="text-base text-dark-200 font-normal">
             <Link href="" >Home</Link>
             </span>
             <span className="text-base text-dark-500 font-bold">
             <Link href="" >Colleges</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="" >Courses</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="" >Careers</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="">Exams</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="">Scholarships</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="">Loans</Link>
             </span>
             <span className="text-base text-dark-200 font-normal">
             <Link href="">Resources</Link>
             </span>
             <Image src="/NavBar/search.svg" alt="search" width="19px" height="20px" />
             <button className="bg-primary-500 py-2 px-6 rounded text-white uppercase text-sm">Sign Up</button>
             <span className="text-base text-dark-500">
             <Link href="">Log In</Link>
             </span>
         </div>
      </div>
  </div>;
}

export default Navbar;
