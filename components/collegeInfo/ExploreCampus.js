import React from "react";
import Image from "next/image";

function ExploreCampus() {
  return (
    <div className="mx-4 sm:mx-12 h-3/5">
      <h1 className="text-2xl text-dark-500">Explore Campus</h1>
      <div className="flex border-b-2 rounded-sm border-borderColor-500 gap-3 my-4 w-fit">
        <p className="font-normal text-base text-dark-200">Infrastructure</p>
        <p className="font-normal text-base text-dark-200">Classrooms</p>
        <p className="font-normal text-base text-dark-200">Library</p>
        <p className="font-normal text-base text-dark-200">Campus Life</p>
        <p className="font-normal text-base text-dark-200">Hostel</p>
        <p className="font-normal text-base text-dark-200">Computer Lab</p>
        <p className="font-normal text-base text-dark-200">Others</p>
      </div>
      <div className="flex h-full gap-2">
        <div className="flex-initial w-2/5 flex gap-2 flex-col">
          <div className="flex-initial w-full">
            {" "}
            <Image
              src="/collegeInfo/explore/one.png"
              alt=""
              width="800px"
              height="486px"
            />
          </div>
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/two.png"
                alt=""
                width="500px"
                height="350px"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/three.png"
                alt=""
                width="259px"
                height="182px"
              />
            </div>
          </div>
        </div>
        <div className="flex-initial w-100">
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/four.png"
                alt=""
                width="367px"
                height="190px"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/five.png"
                alt=""
                width="352px"
                height="190px"
              />
            </div>
          </div>
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-initial w-3/5">
              <Image
                src="/collegeInfo/explore/six.png"
                alt=""
                width="492px"
                height="311px"
              />
            </div>
            <div className="flex-initial w-2/5">
              <Image
                src="/collegeInfo/explore/seven.png"
                alt=""
                width="270px"
                height="290px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCampus;
