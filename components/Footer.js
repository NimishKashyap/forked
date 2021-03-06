import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="px-4 sm:px-12 flex flex-col bg-fadeWhite-200 p-4">
      <div className="flex justify-between gap-5 mt-12">
        <div className="flex gap-5 md:w-3/5 lg:w-1/2 xl:w-2/6  justify-between">
          <div className="hidden md:flex flex-col gap-2">
            <h3 className="font-bold text-dark-500 text-base mb-4">
              Popular Fields
            </h3>
            <p className="text-sm text-dark-500 font-normal">
              Computer Science/IT
            </p>
            <p className="text-sm text-dark-500 font-normal">Electronics</p>
            <p className="text-sm text-dark-500 font-normal">Mechanical</p>
            <p className="text-sm text-dark-500 font-normal">Civil</p>
            <p className="text-sm text-dark-500 font-normal">Marketing</p>
            <p className="text-sm text-dark-500 font-normal">Design</p>
            <p className="text-sm text-dark-500 font-normal">Finance</p>
            <p className="text-sm text-dark-500 font-normal">Humanities</p>
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <h3 className="font-bold text-dark-500 text-base mb-4">
              Popular Locations
            </h3>
            <p className="text-sm text-dark-500 font-normal">Bangalore</p>
            <p className="text-sm text-dark-500 font-normal">Delhi</p>
            <p className="text-sm text-dark-500 font-normal">Pune</p>
            <p className="text-sm text-dark-500 font-normal">Mumbai</p>
            <p className="text-sm text-dark-500 font-normal">Kolkata</p>
            <p className="text-sm text-dark-500 font-normal">Ahmedabad</p>
            <p className="text-sm text-dark-500 font-normal">Chennai</p>
            <p className="text-sm text-dark-500 font-normal">Hyderabad</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-dark-500 text-base mb-4">Company</h3>
            <p className="text-sm text-dark-500 font-normal">About Us</p>
            <p className="text-sm text-dark-500 font-normal">Contact Us</p>
            <p className="text-sm text-dark-500 font-normal">Blogs</p>
            <p className="text-sm text-dark-500 font-normal">Careers</p>
            <p className="text-sm text-dark-500 font-normal">FAQs</p>
          </div>
        </div>
        <div className="flex flex-col sm:gap-4">
          <div className="flex flex-col sm:gap-3">
            <h2 className="mb-1 text-base font-bold text-dark-500">
              Contact Us
            </h2>
            <div className="flex">
              <Image
                src="/footer/phone.svg"
                alt="phone"
                width="15px"
                height="15px"
              />
              <p className="ml-2 text-sm text-dark-500 font-normal">
                +91-9999000999
              </p>
            </div>
            <div className="flex">
              <Image
                src="/footer/mail.svg"
                alt="mail"
                width="20px"
                height="15px"
              />
              <p className="ml-2 text-sm text-dark-500 font-normal">
                College.king@skilzen.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <h2 className="text-base font-bold text-dark-500">Follow Us</h2>
            <div className="flex gap-4">
              <div className="border border-borderColor3-500 rounded-full w-3 h-3 sm:w-10 md:h-10 md:p-3 flex items-center justify-center">
                <img src="/footer/fb.png" alt="fb" />
              </div>
              <div className="border border-borderColor3-500 rounded-full w-3 h-3 sm:w-10 md:h-10 flex items-center justify-center">
                <img src="/footer/linkedin.png" alt="linkedin" />
              </div>
              <div className="border border-borderColor3-500 rounded-full w-3 h-3 sm:w-10 md:h-10 flex items-center justify-center">
                <img src="/footer/twitter.png" alt="twitter" />
              </div>
              <div className="border border-borderColor3-500 rounded-full w-3 h-3 sm:w-10 md:h-10 flex items-center justify-center">
                <img src="/footer/instagram.png" alt="instagram" />
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <div className="h-full relative">
              <img className="w-[160px] md:w-[200px]" src="/NavBar/logo.svg" alt="logo" />
              <img className="absolute" src="/footer/skilzen-logo.png" alt="skilzen" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 pt-1 gap-10 my-4 items-center justify-center sm:justify-start">
        <p className="text-sm text-dark-500">
          2021 Skilzen, All rights reserved.
        </p>
        <p className="hidden sm:block text-sm text-dark-500">
          Terms & Conditions
        </p>
        <p className="hidden sm:block text-sm text-dark-500">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
