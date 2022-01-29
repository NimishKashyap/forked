import React from 'react';
import Image from "next/image"

function CampusFacility() {
  return <div className="mx-4 sm:mx-12 my-6">
      <h1 className="text-2xl text-dark-500">Campus Facilities</h1>
      <div className="flex gap-6 my-6 justify-between">
      <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/1.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">ATM</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/2.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Girls Hostel</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/3.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Boys Hostel</p>
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
      <div className="flex border-b-2 rounded-sm border-borderColor-500 gap-3 my-4 w-fit -mb-0">
            <p className="font-normal text-base text-dark-200">Girls Hostel</p>
            <p className="font-normal text-base text-dark-200">Boys Hostel</p>
            <p className="font-normal text-base text-dark-200">ATMs</p>
            <p className="font-normal text-base text-dark-200">GYM</p>
            <p className="font-normal text-base text-dark-200">Library</p>
            <p className="font-normal text-base text-dark-200">Cafeteria</p>
            <p className="font-normal text-base text-dark-200">Auditorium</p>
      </div>
      <div className="flex gap-6 justify-start">
      <div className="flex-1 flex flex-col justify-start mt-2">
      <p className="text-dark-700 text-base w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo porttitor ipsum, a molestie purus bibendum ac. Fusce porttitor eget lacus vel aliquam. Nunc eget purus tristique, efficitur nibh a, iaculis tortor. Donec consequat ipsum sed neque gravida consequat.</p>
      <br></br>
      <p className="text-dark-700 text-base w-5/6">
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
