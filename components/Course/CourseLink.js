import React from "react";
import CaretIcon from "../Icons/CaretIcon";
import AdmissionOpenHeaderLogo from "../Admission/icons/AdmissionOpenHeaderLogo";

const details = [
  {
    img: "/assets/other.png",
    header: "Food and Agribusiness Management",
    programme: "Masters in Business Administration (MBA)",
    about:
      "IIM Ahmedabad courses are divided into eight categories, all in the post-graduation or doctoral level of study. All programmes have a management focus and invite applications across many disciplines, each having separate admission criteria. Six of these eight IIMA courses are taught in-person at the campus, and two programmes, namely ePGP in Management and ePGD in Advanced Business Analytics, follow remote instruction. IIM Ahmedabad courses are all designed to attract the sharpest and motivated individuals.",
    curriculumOutline: [
      {
        year: 1,
        curriculum: [
          "Advanged Agricultural Management",
          "Advanced Agricultural Management",
          "Exercices on Advanced Agricultural Management",
          "Advanced Agricultural Management",
          "Advanced Agricultural Management",
          "Advanced Agricultural Management",
          "Advanced Agricultural Management",
          "Advanced Agricultural Management",
        ],
      },
    ],
  },
];
function CourseLink({ header, programme }) {
  return (
    <header className="flex overflow-hidden border-[#eee] border-2 rounded-md shadow-md my-5 mx-5 relative">
      <img src={"/assets/other.png"} />
      <div className="flex flex-col justify-between w-full my-5 mt-6 mr-[6rem]">
        <div className="mx-[4rem]">
          <h3 className="text-2xl mx-1 text-dark-500">{programme}</h3>
          <h1 className="text-4xl text-dark-500">{header}</h1>
        </div>
        <ul className="flex justify-around">
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Program Type</p>
            </span>
            <span className="ml-7 text-[#404366]">Part Time</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Seats</p>
            </span>
            <span className="ml-7 text-[#404366]">100</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2"> Duration</p>
            </span>
            <span className="ml-7 text-[#404366]">2 Years</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2">Program Fee</p>
            </span>
            <span className="ml-7 text-[#404366]">99,999 /Yr</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo />{" "}
              <p className="mx-2">Admission Status</p>
            </span>
            <span className="ml-7 text-[#404366]">Closed</span>
          </li>
          <li className="flex flex-col">
            <span className="flex text-[#9092A9]">
              <AdmissionOpenHeaderLogo /> <p className="mx-2">Exams</p>
            </span>
            <span className="ml-7 text-[#404366]">GMAT, CAT</span>
          </li>
        </ul>
      </div>
      <span className="absolute right-3 top-3">
        <img src="/assets/heartClicked.png" />
      </span>
      <CaretIcon className={"absolute bottom-5 right-5"} />
    </header>
  );
}

export default CourseLink;
