import React from "react";

function Review() {
  return (
    <div className="flex flex-col w-2/3 p-5 border-b-2">
      <header className="flex justify- my-5">
        <img className="h-full mr-5 w-[5rem]" src="/assets/profile.png" />
        <div>
          <h1 className="text-dark-500">John Doe | PGPM (Alumni 2009)</h1>
          <span className="text-dark-200">99/99/9999 &#8226; Edited</span>
          <p className="mt-5 text-[#2b3a77] text-medium">
            "Life at IIMA is worth all the hardships."
          </p>
        </div>
        <div className="flex mx-5">
          <img className="mx-3 rounded-md" src="/assets/pic1.png" />
          <img className="mx-1 rounded-md" src="/assets/pic1.png" />
        </div>
      </header>
      <p className="text-dark-900 text-justify">
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
      <div className="flex justify-around">
        <div className="grid grid-cols-3 space-y-1 my-3">
          <span className="flex justify-between mx-5">
            <p>Placements</p> <img src="/assets/Icon.png" />
          </span>
          <span className="flex justify-between mx-5">
            <p>Course</p> <img src="/assets/Icon2.png" />
          </span>
          <span className="flex justify-between mx-5">
            <p>Hostel</p> <img src="/assets/Icon.png" />
          </span>
          <span className="flex justify-between mx-5">
            <p>Faculty</p> <img src="/assets/Icon.png" />
          </span>
          <span className="flex justify-between mx-5">
            <p>College</p> <img src="/assets/Icon.png" />
          </span>
          <span className="flex justify-between mx-5">
            <p>Campus Life</p> <img src="/assets/Icon.png" />
          </span>
        </div>
        <div className="flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-1/2 w-1/2 object-contain mx-5"
              src="assets/Vector.png"
            ></img>
            <span className="absolute bottom-[-2rem] left-[1.5rem]">100</span>
          </span>
          <span className="relative">
            <img
              className="h-1/2 w-1/2 object-contain mx-5"
              src="assets/Vector1.png"
            ></img>
            <span className="absolute bottom-[-2rem] left-[1.8rem]">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Review;
