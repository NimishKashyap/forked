import React from "react";
import Image from "next/image";

function Stream(){
    return(
        <div className="mx-4 sm:mx-12 my-6">
            <h1 className="my-2 mb-6 not-italic font-normal text-3xl leading-9 text-dark-500">Colleges Based on Streams</h1>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-1 items-center justify-left gap-4">
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/1.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/2.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/3.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/4.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/5.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/6.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/7.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/8.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/9.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/10.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/11.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/12.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/13.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
                <div className="w-40 flex justify-center items-center flex-col">
                    <Image src="/streams/14.svg" alt="stream" width="85px" height="85px"/>
                    <p className="text-lg font-normal text-dark-500">Medical</p>
                </div>
            </div>
        </div>
    );
}

export default Stream;