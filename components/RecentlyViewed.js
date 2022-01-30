import React from 'react';
import Image from "next/image"

function RecentlyViewed() {

  const handleScroll = (no) => {
    const scrollAmount = 150;
    const scrollContainer = document.querySelector(".scrollbar");
    scrollContainer.scrollBy(no * scrollAmount, 0);
  };

  return (
    <div className="mx-4 sm:mx-12 my-12">
    <div className="flex justify-between">
    <h1 className="not-italic font-normal text-3xl leading-9 text-dark-500 mb-8">
    Recently Viewed
    </h1>
    <div className="hidden md:flex">
          <svg
            onClick={() => handleScroll(-1)}
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

    <div className="flex gap-6 overflow-x-scroll scrollbar-hide justify-between pb-10 scrollbar transition-all">
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/1.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="12px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/4.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="12px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/1.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/3.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>
 
        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/4.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
      <div className="shadow-xl rounded-md relative transition-all">
        <Image
          src="/colleges/2.png"
          alt="college"
          width="200px"
          height="234px"
        />
        <h1 className="w-48 ml-3 font-bold text-dark-500 text-base">
          Indian Institute of Management (IIM)
        </h1>
        <div className="flex my-2 ml-3">
          <Image
            src="/colleges/location-color.png"
            alt=""
            width="17px"
            height="10px"
          />
          <p className="ml-2">Kashipur</p>
          <div className="absolute right-3 top-2"><Image src="/colleges/heart.svg" alt="" width="35px" height="35px" /></div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default RecentlyViewed;
