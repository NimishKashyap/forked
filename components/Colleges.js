import React from "react";
import Image from "next/image";

function Colleges(){
    return(
        <div className="mx-6 my-12">
            <h1 className="not-italic font-normal text-3xl leading-9 text-dark-500 mb-8">Popular Colleges</h1>
            <div className="flex gap-6 overflow-x-scroll scrollbar-hide justify-between">
                <div >
                    <Image src="/colleges/1.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="12px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/colleges/4.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="12px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/colleges/1.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="12px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/colleges/2.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="12px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/colleges/3.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="12px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/colleges/4.png" alt="college" width="200px" height="234px" />
                    <h1 className="w-48 font-bold text-dark-500 text-base">
                    Indian Institute of Management (IIM) 
                    </h1>
                    <div className="flex m-2">
                        <Image src="/colleges/1.png" alt="" width="10px" height="10px" />
                        <p className="ml-2">
                        Kashipur
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Colleges;