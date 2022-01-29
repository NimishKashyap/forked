import React, { useState } from 'react';
import Image from "next/image";

function TopRecruiter() {
      const [placement,setPlacement] =useState(true);
      const [admission,setAdmission] =useState(false);
      const [facilities,setFacilities] =useState(false);
      const [campus,setCampus] =useState(false);

      const handlePlacement =()=>{
            setPlacement(true);
            setAdmission(false);
            setCampus(false);
            setFacilities(false);
      }
      const handleAdmission =()=>{
            setPlacement(false);
            setAdmission(true);
            setCampus(false);
            setFacilities(false);
      }
      const handleFacilities =()=>{
            setPlacement(false);
            setAdmission(false);
            setCampus(false);
            setFacilities(true);
      }
      const handleCampus =()=>{
            setPlacement(false);
            setAdmission(false);
            setCampus(true);
            setFacilities(false);
      }

  return <div className="mx-4 sm:mx-12 my-8 ">
      <h1 className="text-2xl text-dark-500">Top Recruiters </h1>
      <div className="my-6 flex gap-6 overflow-x-scroll scrollbar-hide">
          <div><Image src="/collegeInfo/recruiter/google-logo.png" alt="" height="50px" width="150px" /></div>
          <div><Image src="/collegeInfo/recruiter/uber-logo.png" alt="" height="46px" width="130px" /></div>
          <div><Image src="/collegeInfo/recruiter/microsoft-logo.png" alt="" height="45px" width="210px" /></div>
          <div><Image src="/collegeInfo/recruiter/mckinsley.png" alt="" height="59px" width="190px" /></div>
          <div><Image src="/collegeInfo/recruiter/fb-logo.png" alt="" height="37px" width="190px" /></div>
      </div>

{/* college highlights */}
<h1 className="text-2xl text-dark-500 mt-8">College Highlights</h1>
<div className="mt-2">
      <div className="hidden lg:flex rounded-sm gap-5 my-4 w-fit -mb-0">
            <p onClick={handlePlacement} className={`text-base ${placement?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Placements</p>
            <p onClick={handleAdmission} className={`text-base ${admission?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Admissions</p>
            <p onClick={handleFacilities} className={`text-base ${facilities?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Facilities</p>
            <p  onClick={handleCampus} className={`text-base ${campus?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Campus Life</p>
      </div>
      
<div className="flex flex-col-reverse lg:flex-row gap-6 justify-start">
      <div className="flex-1 flex flex-col justify-start mt-4">
      <p className="text-dark-700 text-sm w-full sm:w-5/6"> • ₹ 55.88 LPA marks the highest domestic salary making.
      <br></br>
      
      • ₹26.13 LPA the average domestic salary offered in 2021.
      
      <br></br>
      • ₹1.32 CPA marks the highest international package making ₹61.76 LPA the average international package in 2021. <br></br>
      • McKinsy, MasterCard and Boston Consulting Group were the top recruiting companies in 2021.
      <br></br>
      • 153 Institutes participated in the placement procedure of IIM Ahmedabad.
      <br></br>
      • Fringilla bibendum facilisis mattis porta. Lacus, at consectetur sit orci bibendum. Aliquam mattis eget a, diam. </p>

      </div>
      <div className="flex-1">
          <Image src="/collegeInfo/hightlights.png" width="582px" height="306px" alt="" ></Image>
      </div>
      </div>
</div>

{/* collaborations */}

<div className="my-6">
<h1 className="text-2xl text-dark-500">Collaborations</h1>
      <div className="my-6 flex gap-6 overflow-x-scroll scrollbar-hide">
          <div><Image src="/collegeInfo/recruiter/google-logo.png" alt="" height="50px" width="150px" /></div>
          <div><Image src="/collegeInfo/recruiter/uber-logo.png" alt="" height="46px" width="130px" /></div>
          <div><Image src="/collegeInfo/recruiter/microsoft-logo.png" alt="" height="45px" width="210px" /></div>
          <div><Image src="/collegeInfo/recruiter/mckinsley.png" alt="" height="59px" width="190px" /></div>
          <div><Image src="/collegeInfo/recruiter/fb-logo.png" alt="" height="37px" width="190px" /></div>
      </div>
</div>
  </div>;
}

export default TopRecruiter;
