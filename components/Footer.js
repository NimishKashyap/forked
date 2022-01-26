import React from "react";
<<<<<<< HEAD

function Footer() {
  return (
    <div className="flex flex-col bg-[#f2f2f2] mt-5">
      <div className="flex justify-between border-b-2 px-[6rem] py-[3rem] mt-5 ">
        <div className="grid grid-cols-3 w-1/2">
          <div>
            <h1 className="text-dark-500 font-bold mb-1 text-xl">
              Popular Fields
            </h1>
            <p className="font-normal mt-3">Computer science</p>
            <p className="font-normal mt-3">Electronics</p>
            <p className="font-normal mt-3">Mechanical</p>
            <p className="font-normal mt-3">Civil</p>
            <p className="font-normal mt-3">Marketing</p>
            <p className="font-normal mt-3">Design</p>
            <p className="font-normal mt-3">Finance</p>
            <p className="font-normal mt-3">Humanities</p>
          </div>
          <div>
            <h1 className="text-dark-500 font-bold mb-1 text-xl">
              Popular Locations
            </h1>
            <p className="font-normal mt-3">Banglaore</p>
            <p className="font-normal mt-3">Delhi</p>
            <p className="font-normal mt-3">Pune</p>
            <p className="font-normal mt-3">Mumbai</p>
            <p className="font-normal mt-3">Kolkata</p>
            <p className="font-normal mt-3">Ahmedabad</p>
            <p className="font-normal mt-3">Chandigarh</p>
            <p className="font-normal mt-3">Hydrabad</p>
          </div>
          <div>
            <h1 className="text-dark-500 font-bold mb-1 text-xl">Company</h1>
            <p className="font-normal mt-3">About Us</p>
            <p className="font-normal mt-3">Contact Us</p>
            <p className="font-normal mt-3">Blogs</p>
            <p className="font-normal mt-3">Careers</p>
            <p className="font-normal mt-3">FAQs</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-dark-500 font-bold mb-1 text-xl">Contact Us</h1>
          <p className="flex mt-3">
            <img src="/assets/phoneIcon.png" className="mr-5" /> +91-9999909999
          </p>
          <p className="flex mt-5">
            <img src="/assets/mail.png" className="mr-5" />{" "}
            college.king@skilzen.com
          </p>
          <h1 className="my-4 text-dark-500 font-bold text-xl">Follow Us</h1>
          <div className="flex">
            <img className="mr-5" src="/assets/twitter.png" />
            <img className="mr-5" src="/assets/twitter.png" />
            <img className="mr-5" src="/assets/twitter.png" />
            <img className="mr-5" src="/assets/twitter.png" />
          </div>{" "}
          <div className="relative mt-5 ml-[2rem]">
            <img src="/assets/Group.png" />
            <img src="/assets/LogoBy.png" className="absolute right-0" />
          </div>
        </div>
      </div>
      <div className="flex text-sm text-dark-500 px-[5rem] py-3">
        <p className="mr-8">&copy; 2021 Skilzen, All rights reserved.</p>
        <p className="mr-8">Terms and Conditions</p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
}

export default Footer;
