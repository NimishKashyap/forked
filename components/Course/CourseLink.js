import React, { useEffect, useState } from "react";
import CaretIcon from "../Icons/CaretIcon";
import AdmissionOpenHeaderLogo from "../Admission/icons/AdmissionOpenHeaderLogo";
import CourseSwitch from "./CourseSwitch";

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
          {
            "Semester 1": [
              "Advanged Agricultural Management",
              "Advanced Agricultural Management",
              "Exercices on Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
            ],
            "Semester 2": [
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
      {
        year: 2,
        curriculum: [
          {
            "Semester 3": [
              "Advanged Agricultural Management",
              "Advanced Agricultural Management",
              "Exercices on Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
            ],
            "Semester 4": [
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
      {
        year: 3,
        curriculum: [
          {
            "Semester 5": [
              "Advanged Agricultural Management",
              "Advanced Agricultural Management",
              "Exercices on Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
            ],
            "Semester 6": [
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
      {
        year: 4,
        curriculum: [
          {
            "Semester 7": [
              "Advanged Agricultural Management",
              "Advanced Agricultural Management",
              "Exercices on Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
            ],
            "Semester 8": [
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
      {
        year: 5,
        curriculum: [
          {
            "Semester 9": [
              "Advanged Agricultural Management",
              "Advanced Agricultural Management",
              "Exercices on Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
              "Advanced Agricultural Management",
            ],
            "Semester 10": [
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
    ],
    courseFee: [
      {
        "Tuition Fees": {
          "1st Term": 80000,
          "2nd Term": 80000,
          "3rd Term": 80000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Course Materials": {
          "1st Term": 5000,
          "2nd Term": 5000,
          "3rd Term": 5000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        Library: {
          "1st Term": 6000,
          "2nd Term": 6000,
          "3rd Term": 6000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Computing/Networking": {
          "1st Term": 25000,
          "2nd Term": 25000,
          "3rd Term": 25000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Development Fees": {
          "1st Term": 12000,
          "2nd Term": 12000,
          "3rd Term": 12000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Student Club Fees": {
          "1st Term": 7000,
          "2nd Term": 7000,
          "3rd Term": 7000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Alumni Activities": {
          "1st Term": 1500,
          "2nd Term": 1500,
          "3rd Term": 1500,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
      {
        "Security Deposit": {
          "1st Term": 20000,
          "2nd Term": 20000,
          "3rd Term": 20000,
          total: function () {
            return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
          },
        },
      },
    ],
  },
];
const hostelDetails = [
  {
    "Hostel Fees": {
      "1st Term": 20000,
      "2nd Term": 20000,
      "3rd Term": 20000,
      total: function () {
        return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
      },
    },
  },
  {
    "Hostel Security Deposit": {
      "1st Term": 20000,
      "2nd Term": 20000,
      "3rd Term": 20000,
      total: function () {
        return this["1st Term"] + this["2nd Term"] + this["3rd Term"];
      },
    },
  },
];
function CourseLink() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(details[0].courseFee[0]["Tuition Fees"].total());
  }, []);
  return (
    <div className="border-2 rounded-md shadow-md mb-5 ">
      {details.map((card, index) => (
        <React.Fragment key={index}>
          <header className="flex flex-col md:flex-row overflow-hidden relative">
            <img className="h-[150px] md:h-auto object-cover" src={card.img} />
            <div className="flex flex-col justify-between w-full my-5 mt-6 md:mr-[6rem]">
              <div className="mx-5 md:mx-[4rem]">
                <h3 className="text-sm lg:text-2xl mx-1 text-dark-500">
                  {card.programme}
                </h3>
                <h1 className="text-xl my-5 md:my-auto font-medium lg:text-4xl text-dark-500">
                  {card.header}
                </h1>
              </div>
              <ul className="grid grid-cols-3 md:flex justify-between mx-2 p-2 md:mx-10 lg:justify-around text-xs lg:text-base">
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo />{" "}
                    <p className="mx-2"> Program Type</p>
                  </span>
                  <span className="ml-5 text-[#404366]">Part Time</span>
                </li>
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo /> <p className="mx-2"> Seats</p>
                  </span>
                  <span className="ml-5 text-[#404366]">100</span>
                </li>
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo />{" "}
                    <p className="mx-2"> Duration</p>
                  </span>
                  <span className="ml-5 text-[#404366]">2 Years</span>
                </li>
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo />{" "}
                    <p className="mx-2">Program Fee</p>
                  </span>
                  <span className="ml-5 text-[#404366]">99,999 /Yr</span>
                </li>
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo />{" "}
                    <p className="mx-2">Admission Status</p>
                  </span>
                  <span className="ml-5 text-[#404366]">Closed</span>
                </li>
                <li className="flex flex-col my-1">
                  <span className="flex text-[#9092A9]">
                    <AdmissionOpenHeaderLogo /> <p className="mx-2">Exams</p>
                  </span>
                  <span className="ml-5 text-[#404366]">GMAT, CAT</span>
                </li>
              </ul>
            </div>
            <span
              onClick={() => setChecked(!checked)}
              className={`cursor-pointer transition-all duration-300 absolute bottom-3 right-3 ${
                checked ? "rotate-180" : ""
              }`}
            >
              <CaretIcon />
            </span>
            <span className="absolute right-3 top-3">
              <img src="/assets/heartClicked.png" />
            </span>
          </header>

          {/* ADD MAX H 0 */}
          <div
            className={`max-h-0 overflow-hidden ${checked ? "max-h-fit" : ""}`}
          >
            <section className={`${checked ? "block" : "hidden"}`}>
              <CourseSwitch course={card} hostel={hostelDetails}/>
            </section>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default CourseLink;
