import React from 'react';
import Image from "next/image";
import Link from "next/link"

function Navbar() {
  return (
  <div className="w-full flex justify-between px-4 sm:px-12 py-1 items-center shadow">
      <div>
      <div className="flex flex-col ">
          <Image src="/NavBar/logo.svg" alt="logo" width="175px" height="52px" />
          </div>
      </div>
      <div>
      {/* responsive */}
        <div className="flex items-center gap-6 xl:hidden">
            <div><Image src="/NavBar/search.svg" alt="search" width="15px" height="16px" /></div>
            <div><Image src="/NavBar/chat.svg" alt="chat" width="16px" height="16px" /></div>
            <div><Image src="/NavBar/notify.svg" alt="notify" width="16px" height="18px" /></div>
            <div><Image src="/NavBar/menu.svg" alt="menu" width="24px" height="16px" /></div>
        </div>
      {/* responsive */}
         <div className="hidden xl:flex items-center gap-6">
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
  </div>
  );
}

export default Navbar;
