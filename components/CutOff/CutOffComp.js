import React, { useState } from "react";
import CaretIcon from "../Icons/CaretIcon";
import CutOffCompSwitch from "./CutOffCompSwitch";
import Selection from "./Selection";
function CutOffComp() {
  const [showOne, setShowOne] = useState(false);
  const [ShowTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [streamOne, setStreamOne] = useState("Business Analytics");
  const [streamTwo, setStreamTwo] = useState("CAT");
  const [streamThree, setStreamThree] = useState("2021");
  return (
    <>
      <CutOffCompSwitch />
      <div className="my-5 grid gap-x-2 text-sm md:text-base grid-cols-4 md:grid-cols-6 md:w-1/2 text-dark-500">
        <div className="col-span-4 md:col-span-2">
          <div
            onClick={() => setShowOne(!showOne)}
            className="text-dark-500  md:max-w-[300px] flex items-center justify-between relative p-2 shadow-sm border-b-2"
          >
            <span className="ml-2 py-2 hover:cursor-pointer">{streamOne}</span>
            <span
              className={`transition-all duration-300 ${
                showOne ? "rotate-180" : ""
              }`}
            >
              <CaretIcon />
            </span>
            <div
              className={`absolute transition-all p-2 max-h-[200px] md:max-h-[500px] overflow-y-auto duration-300 flex flex-col w-full top-10 left-0 bg-white rounded-lg  list-none ${
                showOne ? "block" : "hidden"
              }`}
            >
              <ul className="bg-white z-10">
                <li
                  onClick={(e) => {
                    setShowOne(!showOne);
                    setStreamOne("Business Analytics");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  Business Analytics
                </li>
                <li
                  onClick={(e) => {
                    setShowOne(!showOne);
                    setStreamOne("Agricultural & Food Business");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  Agriculture & Food Business
                </li>
                <li
                  onClick={(e) => {
                    setShowOne(!showOne);
                    setStreamOne("Agricultural & Food Business");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  Agriculture & Food Business
                </li>
                <li
                  onClick={(e) => {
                    setShowOne(!showOne);
                    setStreamOne("Agricultural & Food Business");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  Agriculture & Food Business
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => setShowTwo(!ShowTwo)}
            className="text-dark-500 max-w-full border-b-2 flex items-center justify-between relative p-2 shadow-sm"
          >
            <span className="ml-2 py-2 hover:cursor-pointer">{streamTwo}</span>
            <span
              className={`transition-all duration-300 ${
                ShowTwo ? "rotate-180" : ""
              }`}
            >
              <CaretIcon />
            </span>
            <div
              className={`absolute transition-all p-2 max-h-[200px] md:max-h-[500px] overflow-y-auto duration-300 flex flex-col w-full top-10 left-0 bg-white rounded-lg z-500 list-none ${
                ShowTwo ? "block" : "hidden"
              }`}
            >
              <ul>
                <li
                  onClick={(e) => {
                    setShowTwo(!ShowTwo);
                    setStreamTwo("GMAT");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  GMAT
                </li>
                <li
                  onClick={(e) => {
                    setShowTwo(!ShowTwo);
                    setStreamTwo("GRE");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  GRE
                </li>
                <li
                  onClick={(e) => {
                    setShowTwo(!ShowTwo);
                    setStreamTwo("MAT");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  MAT
                </li>
                <li
                  onClick={(e) => {
                    setShowTwo(!ShowTwo);
                    setStreamTwo("IAT");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  IAT
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => setShowThree(!showThree)}
            className="text-dark-500 border-b-2 max-w-[150px] flex items-center justify-between relative p-2 shadow-sm"
          >
            <span className="ml-2 py-2 hover:cursor-pointer">
              {streamThree}
            </span>
            <span
              className={`transition-all duration-300 ${
                showThree ? "rotate-180" : ""
              }`}
            >
              <CaretIcon />
            </span>
            <div
              className={`absolute transition-all p-2 max-h-[200px] md:max-h-[500px] overflow-y-auto duration-300 flex flex-col w-full top-10 left-0 bg-white rounded-lg z-500 list-none ${
                showThree ? "block" : "hidden"
              }`}
            >
              <ul>
                <li
                  onClick={(e) => {
                    setShowThree(!showThree);
                    setStreamThree("2020");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  2020
                </li>
                <li
                  onClick={(e) => {
                    setShowThree(!showThree);
                    setStreamThree("2019");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  2019
                </li>
                <li
                  onClick={(e) => {
                    setShowThree(!showThree);
                    setStreamThree("2018");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  2018
                </li>
                <li
                  onClick={(e) => {
                    setShowThree(!showThree);
                    setStreamThree("2017");
                  }}
                  className="border-b-2 flex justify-between items-center ml-2 py-2 text-dark-200"
                >
                  2017
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-dark-500 text-xl md:text-2xl mt-[3rem] my-5">CAT 2021</h1>
      <p className="text-dark-500 text-base font-bold">MBA CAT Cut-Off 2021</p>
      <div className="grid text-xs md:text-base grid-cols-5 my-5 text-dark-200">
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">Category</h1>
          <p className="border-b-2">General</p>
          <p className="border-b-2">PWD</p>
          <p className="border-b-2">EWS</p>
          <p className="border-b-2">SC</p>
          <p className="border-b-2">ST</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">VARC</h1>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">DILR</h1>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">QA</h1>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">Overall</h1>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
        </div>
      </div>
      <p className="text-dark-500 text-base font-bold">Cat Comparison for 4 year</p>
      <div className="grid text-xs md:text-base grid-cols-5 my-5 text-dark-200">
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">Category</h1>
          <p className="border-b-2">Generwal</p>
          <p className="border-b-2">PWD</p>
          <p className="border-b-2">EWS</p>
          <p className="border-b-2">SC</p>
          <p className="border-b-2">ST</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">2017</h1>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">2018</h1>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
          <p className="border-b-2">80</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">2019</h1>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
          <p className="border-b-2">70</p>
        </div>
        <div className="grid gap-y-5">
          <h1 className="text-dark-500 text-sm md:text-xl font-medium ">2020</h1>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
          <p className="border-b-2">90</p>
        </div>
      </div>
      <Selection />
    </>
  );
}

export default CutOffComp;
