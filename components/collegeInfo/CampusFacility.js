import React,{useState} from 'react';
import Image from "next/image"

function CampusFacility() {
    const [girlsHostel,setGirlsHostel]=useState(true);
    const [boysHostel,setBoysHostel]=useState(false);
    const [atm,setAtm]=useState(false);
    const [gym,setGym]=useState(false);
    const [library,setLibrary]=useState(false);
    const [cafeteria,setCafeteria]=useState(false);
    const [auditorium,setAuditorium]=useState(false);

    const handleGirlsHostel=()=>{
        setBoysHostel(false);
        setGirlsHostel(true);
        setAtm(false);
        setGym(false);
        setLibrary(false);
        setCafeteria(false);
        setAuditorium(false);
    }
    const handleBoysHostel=()=>{
        setBoysHostel(true);
        setGirlsHostel(false);
        setAtm(false);
        setGym(false);
        setLibrary(false);
        setCafeteria(false);
        setAuditorium(false);
    }
    const handleAtm=()=>{
        setBoysHostel(false);
        setGirlsHostel(false);
        setAtm(true);
        setGym(false);
        setLibrary(false);
        setCafeteria(false);
        setAuditorium(false);
    }
    const handleGym=()=>{
        setBoysHostel(false);
        setGirlsHostel(false);
        setAtm(false);
        setGym(true);
        setLibrary(false);
        setCafeteria(false);
        setAuditorium(false);
    }
    const handleLibrary=()=>{
        setBoysHostel(false);
        setGirlsHostel(false);
        setAtm(false);
        setGym(false);
        setLibrary(true);
        setCafeteria(false);
        setAuditorium(false);
    }
    const handleCafeteria=()=>{
        setBoysHostel(false);
        setGirlsHostel(false);
        setAtm(false);
        setGym(false);
        setLibrary(false);
        setCafeteria(true);
        setAuditorium(false);
    }
    const handleAuditorium=()=>{
        setBoysHostel(false);
        setGirlsHostel(false);
        setAtm(false);
        setGym(false);
        setLibrary(false);
        setCafeteria(false);
        setAuditorium(true);
    }

  return <div className="mx-4 sm:mx-12 my-6">
      <h1 className="text-2xl text-dark-500">Campus Facilities</h1>
      <div className="flex gap-6 my-6 justify-between overflow-x-scroll scrollbar-hide">
      <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/1.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">ATM</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/2.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Hostel</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/3.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Hostel</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/4.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">ATM</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/5.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/5.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
      </div>
      <div className="mt-10">
      <div className="hidden lg:flex rounded-sm gap-3 my-4 w-fit -mb-0">
            <p onClick={handleGirlsHostel} className={`text-base ${girlsHostel?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Girls Hostel</p>
            <p onClick={handleBoysHostel} className={`text-base ${boysHostel?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Boys Hostel</p>
            <p onClick={handleAtm} className={`text-base ${atm?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>ATMs</p>
            <p onClick={handleGym} className={`text-base ${gym?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>GYM</p>
            <p onClick={handleLibrary} className={`text-base ${library?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Library</p>
            <p onClick={handleCafeteria} className={`text-base ${cafeteria?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Cafeteria</p>
            <p onClick={handleAuditorium} className={`text-base ${auditorium?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Auditorium</p>
      </div>
      <div className="flex gap-6 justify-start flex-col-reverse lg:flex-row">
      <div className="flex-1 flex flex-col justify-start mt-2">
      <p className="text-dark-700 text-base w-full sm:w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo porttitor ipsum, a molestie purus bibendum ac. Fusce porttitor eget lacus vel aliquam. Nunc eget purus tristique, efficitur nibh a, iaculis tortor. Donec consequat ipsum sed neque gravida consequat.</p>
      <br></br>
      <p className="text-dark-700 text-base w-full sm:w-5/6">
Mauris ante eros, hendrerit sit amet egestas ac, porttitor sed massa. Ut non tortor sit amet mauris scelerisque gravida vel a mauris. Nulla elit purus, malesuada vel nisl eget, ullamcorper egestas turpis. Donec accumsan tortor vitae neque convallis porttitor. Pellentesque cursus porta ante in iaculis.</p>

      </div>
      <div className="flex-1">
          <Image src="/collegeInfo/right-png.png" width="582px" height="306px" alt="" ></Image>
      </div>
      </div>
</div>
  </div>;
}

export default CampusFacility;
