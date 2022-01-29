import React from 'react';
import Image from "next/image"

function CollegeRanking() {
  return <div className="mx-4 sm:mx-12 my-10">
      <h1 className="text-2xl text-dark-500">College Rankings</h1>
      <div className="flex border-b-2 rounded-sm border-borderColor-500 gap-3 my-4 w-fit">
            <p className="font-normal text-base text-dark-200">Overall National</p>
            <p className="font-normal text-base text-dark-200">Overall National</p>
            <p className="font-normal text-base text-dark-200">Overall National</p>
            <p className="font-normal text-base text-dark-200">Overall National</p>
            <p className="font-normal text-base text-dark-200">Overall National</p>
      </div>
      <div className="flex gap-6">
          <div className="justify-end w-56 items-center box-border border bg-white py-2 px-3 border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank1.png" alt="" width="173px" height="33px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border bg-white py-2 px-3  border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank2.png" alt="" width="156px" height="46px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border bg-white py-2 px-3 border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank3.png" alt="" width="109px" height="73px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border bg-white py-2 px-3 border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank1.png" alt="" width="173px" height="33px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
      </div>
  </div>;
}

export default CollegeRanking;
