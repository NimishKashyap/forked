import React from "react";
import Image from "next/image";

function Degree(){
    return(
        <div className="mx-4 sm:mx-12 my-10">
            <h1 className="my-2 mb-6 not-italic font-normal text-3xl leading-9 text-dark-500">Colleges Based on Degree</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-left gap-4">
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
                <div className="shadow-md w-72 flex justify-center items-left flex-col">
                    <Image src="/degree/1.jpg" alt="stream" width="312px" height="151px"/>
                    <p className="my-1 mx-2 font-bold text-xl leading-6 text-dark-700">Colleges for 10+</p>
                </div>
            </div>
        </div>
    );
}

export default Degree;