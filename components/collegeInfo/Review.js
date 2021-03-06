import React from "react";

function Review() {
  return (<div className=" mx-4 sm:mx-12">
  <h1  className="text-2xl text-dark-500 mt-8 ">Reviews on IIMA</h1>
    <div className="flex flex-col lg:w-2/3 p-5 pt-2 border-b-2">
      <header className="flex my-5 relative">
        <img
          className="h-full object-contain mr-5 w-[3rem] md:w-[5rem]"
          src="/collegeInfo/profile.png"
        />
        <div>
          <h1 className="text-dark-500 text-sm font-medium">
            John Doe | PGPM (Alumni 2009)
          </h1>
          <span className="text-dark-200 text-xs">
            99/99/9999 &#8226; Edited
          </span>
          <p className="mt-5 text-[#2b3a77] text-medium">
            &quot;Life at IIMA is worth all the hardships.&quot;
          </p>
        </div>
        <div className="hidden md:flex mx-5">
          <img className="mx-3 rounded-md" src="/collegeInfo/pic1.png" />
          <img className="mx-1 rounded-md" src="/collegeInfo/pic1.png" />
        </div>
        <div className="absolute top-6 right-0 md:hidden flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </header>
      <p className="text-dark-900 text-sm md:text-base text-justify">
        IIM A is arguably the best B-School in the country. The institution
        boasts of being the most difficulty management institute in the world to
        enter into, with only 0.1% of applicants getting into the course. The
        admission process in IIM A kicks off with the Common Aptitude Test
        (CAT), followed by the publication of results and shortlisting of
        candidates based on the score obtained therein. This is followed by AWT
        and PI, and subsequently the admission, which is based on parameters
        like academic performance, work experience and performance in these
        interactions.
      </p>
      <div className="flex flex-grow my-5 items-center">
        <div className="grid grid-cols-3 items-start my-3 text-[11px] flex-grow md:text-sm">
          <span className="flex items-center justify-between md:mx-5">
            <p>Placements</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>Course</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Hostel</p>
            <img className="object-contain md:h-10 mr-[-6px]" src="/collegeInfo/Satisfactory.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Faculty</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>College</p>
            <img
              className="object-contain md:mr-0 md:h-10"
              src="/collegeInfo/Amazing.png"
            />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Campus Life</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
        </div>
        <div className="hidden md:top-[-1rem] md:relative md:flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
    {/* second review */}

    <div className="flex flex-col lg:w-2/3 p-5 pt-10 border-b-2">
      <header className="flex my-5 relative">
        <img
          className="h-full object-contain mr-5 w-[3rem] md:w-[5rem]"
          src="/collegeInfo/profile.png"
        />
        <div>
          <h1 className="text-dark-500 text-sm font-medium">
            John Doe | PGPM (Alumni 2009)
          </h1>
          <span className="text-dark-200 text-xs">
            99/99/9999 &#8226; Edited
          </span>
          <p className="mt-5 text-[#2b3a77] text-medium">
            &quot;Life at IIMA is worth all the hardships.&quot;
          </p>
        </div>
        <div className="hidden md:flex mx-5">
          <img className="mx-3 rounded-md" src="/collegeInfo/pic1.png" />
          <img className="mx-1 rounded-md" src="/collegeInfo/pic1.png" />
        </div>
        <div className="absolute top-6 right-0 md:hidden flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </header>
      <p className="text-dark-900 text-sm md:text-base text-justify">
        IIM A is arguably the best B-School in the country. The institution
        boasts of being the most difficulty management institute in the world to
        enter into, with only 0.1% of applicants getting into the course. The
        admission process in IIM A kicks off with the Common Aptitude Test
        (CAT), followed by the publication of results and shortlisting of
        candidates based on the score obtained therein. This is followed by AWT
        and PI, and subsequently the admission, which is based on parameters
        like academic performance, work experience and performance in these
        interactions.
      </p>
      <div className="flex flex-grow my-5 items-center">
        <div className="grid grid-cols-3 items-start my-3 text-[11px] flex-grow md:text-sm">
          <span className="flex items-center justify-between md:mx-5">
            <p>Placements</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>Course</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Hostel</p>
            <img className="object-contain md:h-10 mr-[-6px]" src="/collegeInfo/Satisfactory.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Faculty</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>College</p>
            <img
              className="object-contain md:mr-0 md:h-10"
              src="/collegeInfo/Amazing.png"
            />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Campus Life</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
        </div>
        <div className="hidden md:top-[-1rem] md:relative md:flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
    {/* third review */}

    <div className="flex flex-col lg:w-2/3 p-5 pt-10">
      <header className="flex my-5 relative">
        <img
          className="h-full object-contain mr-5 w-[3rem] md:w-[5rem]"
          src="/collegeInfo/profile.png"
        />
        <div>
          <h1 className="text-dark-500 text-sm font-medium">
            John Doe | PGPM (Alumni 2009)
          </h1>
          <span className="text-dark-200 text-xs">
            99/99/9999 &#8226; Edited
          </span>
          <p className="mt-5 text-[#2b3a77] text-medium">
            &quot;Life at IIMA is worth all the hardships.&quot;
          </p>
        </div>
        <div className="hidden md:flex mx-5">
          <img className="mx-3 rounded-md" src="/collegeInfo/pic1.png" />
          <img className="mx-1 rounded-md" src="/collegeInfo/pic1.png" />
        </div>
        <div className="absolute top-6 right-0 md:hidden flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </header>
      <p className="text-dark-900 text-sm md:text-base text-justify">
        IIM A is arguably the best B-School in the country. The institution
        boasts of being the most difficulty management institute in the world to
        enter into, with only 0.1% of applicants getting into the course. The
        admission process in IIM A kicks off with the Common Aptitude Test
        (CAT), followed by the publication of results and shortlisting of
        candidates based on the score obtained therein. This is followed by AWT
        and PI, and subsequently the admission, which is based on parameters
        like academic performance, work experience and performance in these
        interactions.
      </p>
      <div className="flex flex-grow my-5 items-center">
        <div className="grid grid-cols-3 items-start my-3 text-[11px] flex-grow md:text-sm">
          <span className="flex items-center justify-between md:mx-5">
            <p>Placements</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>Course</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Hostel</p>
            <img className="object-contain md:h-10 mr-[-6px]" src="/collegeInfo/Satisfactory.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Faculty</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
          <span className="flex items-center justify-between md:mx-5 ml-[4px]">
            <p>College</p>
            <img
              className="object-contain md:mr-0 md:h-10"
              src="/collegeInfo/Amazing.png"
            />
          </span>
          <span className="flex items-center justify-between md:mx-5">
            <p>Campus Life</p>
            <img className="object-contain md:h-10" src="/collegeInfo/Amazing.png" />
          </span>
        </div>
        <div className="hidden md:top-[-1rem] md:relative md:flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="/collegeInfo/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="/collegeInfo/Vector1.png"
            ></img>
            <span className="absolute text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
              
              <button className="text-gray-500 uppercase text-sm border flex rounded px-4 my-4 py-1 border-primary-500">
              SEE MORE REVIEWS
              </button>
            
    </div>
  );
}

export default Review;