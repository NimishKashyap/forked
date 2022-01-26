import React from "react";
import Image from "next/image";

function Location(){
    return(
        <div className="mx-6 my-12">
        <div className="flex justify-between my-4">
        <h1 className="not-italic font-normal text-3xl leading-9 text-dark-500">Colleges Based on Location</h1>
        <div className="border flex items-center w-72 border-borderColor2-500">
        <div className="m-2">
        <Image src="/NavBar/search.svg" alt="search" width="15px" height="15px" 
        />
        </div>
            <input type="text" placeholder="Search here..." className="flex-1 outline-0"/>
        </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-16">
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/1.svg" alt="stream" width="109px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Kochi</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/2.svg" alt="stream" width="108px" height="100px"/>
                <p className="text-lg font-normal text-dark-500">Delhi</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/3.svg" alt="stream" width="141px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Shimla</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/4.svg" alt="stream" width="140px" height="95"/>
                <p className="text-lg font-normal text-dark-500">Mumbai</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/5.svg" alt="stream" width="162px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Kolkata</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/6.svg" alt="stream" width="135px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Ahmedabad</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/1.svg" alt="stream" width="109px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Kochi</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/2.svg" alt="stream" width="108px" height="100px"/>
                <p className="text-lg font-normal text-dark-500">Delhi</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/3.svg" alt="stream" width="141px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Shimla</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/4.svg" alt="stream" width="140px" height="95"/>
                <p className="text-lg font-normal text-dark-500">Mumbai</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/5.svg" alt="stream" width="162px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Kolkata</p>
            </div>
            <div className="w-48 flex justify-center items-center flex-col">
                <Image src="/location/6.svg" alt="stream" width="135px" height="95px"/>
                <p className="text-lg font-normal text-dark-500">Ahmedabad</p>
            </div>
        </div>
    </div>
    );
}

export default Location;