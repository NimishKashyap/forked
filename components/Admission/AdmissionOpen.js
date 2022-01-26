import React from "react";
import AdmissionDetails from "./AdmissionDetails";
import DocumentsRequired from "./DocumentsRequired";
import Eligibility from "./Eligibility";
import ExamsAcceptedCards from "./ExamsAcceptedCards";
import AdmissionOpenHeaderLogo from "./icons/AdmissionOpenHeaderLogo";
import ProcessCard from "./ProcessCard";
import SeatReservation from "./SeatReservation";
import StepCarousel from "./StepCarousel";

function AdmissionOpen() {
  return (
    <div className="border-2 rounded-xl px-5 py-5 mb-5">
      <header className="flex overflow-hidden ">
        <img src={"/assets/admissionPhoto.png"} />
        <div className="flex flex-col justify-between w-full my-5 mt-6">
          <div className="mx-[4rem]">
            <h3 className="text-2xl mx-1 text-dark-500">
              Masters in Business Administration (MBA)
            </h3>
            <h1 className="text-5xl text-dark-500">Food and Agribusiness Management</h1>
          </div>
          <ul className="flex justify-around">
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
      </header>
      <AdmissionDetails />
      <section>
        <h1 className="text-3xl my-6 mx-6 text-dark-500">Exams Accepted</h1>
        <div className="flex justify-between m-5">
          <ExamsAcceptedCards />
          <ExamsAcceptedCards />
          <ExamsAcceptedCards />
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-dark-500 my-[3rem] mx-6">
          Admission Requirements
        </h1>
        <div className="flex justify-around m-6">
          <Eligibility />
          <DocumentsRequired />
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-dark-500 my-[3rem] mx-6">
          Admission Process
        </h1>
        <div className="flex justify-evenly w-full">
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
        <h1 className="text-3xl text-dark-500 mt-[3rem] mx-6">
          Seat Reservation
        </h1>
        <p className="mx-6 mt-2 w-1/3">
          IIM Ahmedabad reserves seats for students of different categories as
          per the reservation policy fixed by the government.
        </p>
        <SeatReservation />
      </section>
      <section>
        <h1 className="text-3xl text-dark-500 mt-[3rem] mx-6">
          Application Procedure
        </h1>
        <StepCarousel/>
      </section>
    </div>
  );
}

export default AdmissionOpen;
