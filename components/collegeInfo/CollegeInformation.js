import React from "react";
import Image from "next/image";

function CollegeInformation() {
  return (
    <div className="mx-4 sm:mx-12">
      {" "}
      <h1 className="text-2xl text-dark-600">College Information</h1>
      <div className="flex mt-7">
        <div className="flex-initial w-3/5">
          <div>
            <h2 className="text-2xl text-dark-500">About</h2>
            <p className="text-dark-700 text-sm w-4/5 mt-4 mb-2">
              Indian Institute of Management Ahmedabad is a business school
              located in Ahmedabad, Gujarat, India. The school has been accorded
              the status of an Institute of National Importance by Ministry of
              Human Resources, Government of India in 2017.IIM Ahmedabad is one
              of the top premier management institutes in India. IIM Ahmedabad
              offers admission in\various courses such as PGP (Post Graduate
              Programme)nManagement,PGP (Post Graduate Programme)nManagement,PGP
              (Post Graduate Programme)nManagement
            </p>
            <div className="border w-fit flex rounded px-4 my-4 py-1 border-primary-500">
              <Image
                src="/collegeInfo/download.svg"
                alt=""
                width="11px"
                height="12px"
              />
              <p className="ml-2 text-gray-500 uppercase text-sm">
                College Booklet
              </p>
            </div>
          </div>
          <div className="flex flex-col my-12">
            <div className="flex gap-10">
              <div className="flex gap-2 items-end">
                <div>
                  <Image
                    src="/collegeInfo/line.png"
                    alt=""
                    width="10px"
                    height="72px"
                  />
                </div>
                <div>
                  <h1 className="text-dark-500 font-bold uppercase text-2xl">1951</h1>
                  <p className="text-dark-700 font-base">Established since</p>
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <div>
                  <Image
                    src="/collegeInfo/line.png"
                    alt=""
                    width="10px"
                    height="72px"
                  />
                </div>
                <div>
                  <h1 className="text-dark-500 font-bold uppercase text-2xl">1951</h1>
                  <p className="text-dark-700 font-base">Established since</p>
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <div>
                  <Image
                    src="/collegeInfo/line.png"
                    alt=""
                    width="10px"
                    height="72px"
                  />
                </div>
                <div>
                  <h1  className="text-dark-500 font-bold uppercase text-2xl">1951</h1>
                  <p className="text-dark-700 font-base">Established since</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-6">
              <div className="flex gap-2 items-end">
                <div>
                  <Image
                    src="/collegeInfo/line.png"
                    alt=""
                    width="10px"
                    height="72px"
                  />
                </div>
                <div>
                  <h1  className="text-dark-500 font-bold uppercase text-2xl">1951</h1>
                  <p className="text-dark-700 font-base">Established since</p>
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <div>
                  <Image
                    src="/collegeInfo/line.png"
                    alt=""
                    width="10px"
                    height="72px"
                  />
                </div>
                <div>
                  <h1  className="text-dark-500 font-bold uppercase text-2xl">1951</h1>
                  <p className="text-dark-700 font-base">Established since</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial w-2/5">
          <h2 className="text-lg text-dark-500">College News and Updates</h2>
          <div className="border border-borderColor-500 rounded box-border bg-fadeWhite-500 mt-7">
            <div className="flex items-center relative my-2">
              <div>
                <Image
                  src="/collegeInfo/line-thin.png"
                  alt=""
                  width="5px"
                  height="59px"
                />
              </div>
              <div>
                <p className="text-sm text-dark-700 font-bold w-10/12 ml-4">
                  Online application for admissionto Ph.D. Programmes 2022 is
                  open now.
                </p>
              </div>
              <span className="text-xs text-dark-700 absolute bottom-0 right-4">October 2021</span>
            </div>
            <hr className="mx-4 border-borderColor-500" />
            <div className="flex items-center relative my-2">
              <div>
                <Image
                  src="/collegeInfo/line-thin.png"
                  alt=""
                  width="5px"
                  height="59px"
                />
              </div>
              <div>
                <p className="text-sm text-dark-700 font-bold w-10/12 ml-4">
                  Online application for admissionto Ph.D. Programmes 2022 is
                  open now.
                </p>
              </div>
              <span  className="text-xs text-dark-700 absolute bottom-0 right-4">October 2021</span>
            </div>
            <hr className="mx-4 border-borderColor-500" />
            <div className="flex items-center relative my-2">
              <div>
                <Image
                  src="/collegeInfo/line-thin.png"
                  alt=""
                  width="5px"
                  height="59px"
                />
              </div>
              <div className="flex items-center">
                <p className="text-sm text-dark-700 font-bold w-10/12 ml-4">
                Merit list is now live on our website -
                </p>
                 <span className="text-primary-500 font-normal text-sm ml-1">www.iima.ac.in</span>
              </div>
              <span  className="text-xs text-dark-700 absolute bottom-0 right-4">October 2021</span>
            </div>
            <hr className="mx-4 border-borderColor-500" />
            <div className="flex items-center relative my-2">
              <div>
                <Image
                  src="/collegeInfo/line-thin.png"
                  alt=""
                  width="5px"
                  height="59px"
                />
              </div>
              <div className="flex items-center">
              <p className="text-sm text-dark-700 font-bold w-10/12 ml-4">
                Merit list is now live on our website -
                </p>
                 <span className="text-primary-500 font-normal text-sm ml-1">www.iima.ac.in</span>
              </div>
              <span className="text-xs text-dark-700 absolute bottom-0 right-4">October 2021</span>
            </div>
            <hr className="mx-4 border-borderColor-500" />
            <div className="flex items-center relative my-2">
              <div>
                <Image
                  src="/collegeInfo/line-thin.png"
                  alt=""
                  width="5px"
                  height="59px"
                />
              </div>
              <div className="flex items-center">
              <p className="text-sm text-dark-700 font-bold w-10/12 ml-4">
                Merit list is now live on our website -
                </p>
                 <span className="text-primary-500 font-normal text-sm ml-1">www.iima.ac.in</span>
              </div>
              <span className="text-xs text-dark-700 absolute bottom-0 right-4">October 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeInformation;
