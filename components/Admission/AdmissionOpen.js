import React, { useEffect, useState } from "react";
import CaretIcon from "../Icons/CaretIcon";
import AdmissionDetails from "./AdmissionDetails";
import DocumentsRequired from "./DocumentsRequired";
import Eligibility from "./Eligibility";
import ExamsAcceptedCards from "./ExamsAcceptedCards";
import AdmissionOpenHeaderLogo from "./icons/AdmissionOpenHeaderLogo";
import ProcessCard from "./ProcessCard";
import SeatReservation from "./SeatReservation";
import StepCarousel from "./StepCarousel";

function AdmissionOpen() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(checked);
  }, [checked]);
  return (
    <div className="border-2 rounded-xl mb-5 overflow-hidden">
      <header className="flex flex-col md:flex-row overflow-hidden relative">
        <img className="h-[200px] object-cover md:h-auto" src={"/assets/admissionPhoto.png"} />
        <div className="flex flex-col justify-between w-full my-5 mt-6">
          <div className="mx-5 md:mx-[4rem]">
            <h3 className="text-sm lg:text-2xl mx-1 text-dark-500">
              Masters in Business Administration (MBA)
            </h3>
            <h1 className="text-xl my-5 md:my-auto font-medium lg:text-4xl text-dark-500">
              Food and Agribusiness Management
            </h1>
          </div>
          <ul className="grid grid-cols-3 md:flex justify-between mx-2 p-2 md:mx-10 lg:justify-around text-xs lg:text-base">
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
            <li className="flex flex-col">
              <span className="flex text-[#9092A9]">
                <AdmissionOpenHeaderLogo />{" "}
                <p className="mx-2"> Program Type</p>
              </span>
              <span className="ml-7 text-[#404366]">Part Time</span>
            </li>
          </ul>
        </div>

        <span
          onClick={() => setChecked(!checked)}
          className={`cursor-pointer absolute bottom-3 right-3 ${
            checked ? "rotate-180" : ""
          }`}
        >
          <CaretIcon />
        </span>
      </header>
      <div
        className={`overflow-hidden max-h-0 ${
          checked ? "max-h-fit" : ""
        } transition-transform`}
      >
        <AdmissionDetails />
        <section>
          <h1 className="text-xl md:text-3xl my-6 mx-6 text-dark-500">Exams Accepted</h1>
          <div className="flex justify-between m-5 overflow-x-auto">
            <ExamsAcceptedCards />
            <ExamsAcceptedCards />
            <ExamsAcceptedCards />
          </div>
        </section>
        <section>
          <h1 className="text-xl md:text-3xl text-dark-500 my-[3rem] mx-6">
            Admission Requirements
          </h1>
          <div className="flex flex-col md:flex-row justify-around mr-10 md:m-6">
            <Eligibility />
            <DocumentsRequired />
          </div>
        </section>
        <section>
          <h1 className="text-3xl text-dark-500 my-[3rem] mx-6">
            Admission Process
          </h1>
          <div className="flex flex-col md:flex-row justify-evenly md:w-full">
            <ProcessCard
              src="/assets/step1.png"
              step={"Step 1"}
              details={
                "Candidates will be short-listed for Group Discussion (GD) and have to be in a group of all the selected candidates."
              }
            />
            <ProcessCard
              src="/assets/step2.png"
              step={"Step 2"}
              details={
                "Personal Interviews (PI) from among candidates who have applied for the programme and have a valid CAT score and satisfy the eligibility criteria for the programme."
              }
            />
            <ProcessCard
              src="/assets/step3.png"
              step={"Step 3"}
              details={
                "Personal Interviews (PI) from among candidates who have applied for the programme and have a valid CAT score and satisfy the eligibility criteria for the programme."
              }
            />
          </div>
        </section>
        <section>
          <h1 className="text-xl md:text-3xl text-dark-500 mt-5 md:mt-[3rem] mx-6">
            Seat Reservation
          </h1>
          <p className="mx-6 mt-2 w-auto text-xs md:text-base md:w-1/3">
            IIM Ahmedabad reserves seats for students of different categories as
            per the reservation policy fixed by the government.
          </p>
          <SeatReservation />
        </section>
        <section>
          <h1 className="text-xl md:text-3xl text-dark-500 mt-5 md:mt-[3rem] mx-6">
            Application Procedure
          </h1>
          <StepCarousel />
        </section>
      </div>
    </div>
  );
}

export default AdmissionOpen;
