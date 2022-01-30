import React,{useState} from 'react';
import Image from "next/image"

function CollegeRanking() {

  const [overallNat,setOverallNat]=useState(true);
  const [overallInter,setOverallInter]=useState(false);
  const [management,setManagement]=useState(false);
  const [phd,setPhd]=useState(false);

  const handleNatClick=()=>{
    setOverallNat(true);
    setManagement(false);
    setPhd(false);
    setOverallInter(false);
  }
  const handleInterClick=()=>{
    setOverallNat(false);
    setManagement(false);
    setPhd(false);
    setOverallInter(true);
  }
  const handleManagClick=()=>{
    setOverallNat(false);
    setManagement(true);
    setPhd(false);
    setOverallInter(false);
  }
  const handlePhdClick=()=>{
    setOverallNat(false);
    setManagement(false);
    setPhd(true);
    setOverallInter(false);
  }

  return <div className="mx-4 sm:mx-12 my-10">
      <h1 className="text-2xl text-dark-500">College Rankings</h1>
      <div className="hidden md:flex rounded-sm gap-3 my-4 w-fit overflow-x-scroll scrollbar-hide">
            <p onClick={handleNatClick} className={`text-base  w-fit ${overallNat?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Overall National</p>
            <p onClick={handleInterClick} className={`text-base w-fit ${overallInter?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Overall International</p>
            <p onClick={handleManagClick} className={`text-base w-fit ${management?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Management</p>
            <p onClick={handlePhdClick} className={`text-base w-fit ${phd?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>PH.D.</p>
      </div>
      <div className="md:mt-0 mt-6 flex gap-6 overflow-x-scroll scrollbar-hide">
          <div className="justify-end w-56 items-center box-border border bg-white py-3 shrink-0 px-3 border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank1.png" alt="" width="173px" height="33px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border bg-white shrink-0 py-3 px-3  border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank2.png" alt="" width="156px" height="46px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border shrink-0 bg-white py-3 px-3 border-borderColor-500 rouded flex flex-col rounded">
            <div><Image src="/collegeInfo/rank3.png" alt="" width="169px" height="63px"/></div>
            <div className="flex gap-2 items-end mt-4">
                <div><p>Business Today Ranking 2021</p></div>
                <div><Image src="/collegeInfo/medal.png" alt="" width="43px" height="56px"/></div>
            </div>
          </div>
          <div className="justify-end w-56 items-center box-border border shrink-0 bg-white py-3 px-3 border-borderColor-500 rouded flex flex-col rounded">
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
