import Image from "next/image";
import React from "react";
import ScholarshipCard from "./ScholarshipCards";

function ScholarshipComp() {
  return (
    <section className="md:w-full lg:w-full text-justify md:my-[3rem]">
      <h1 className="text-3xl text-dark-500 mt-5 mb-5">Scholarships</h1>
      <div className="flex items-end my-4">
        <img className="h-16 md:h-auto" src="/collegeInfo/line.png" alt="" />

        <div className="sm:mb-0 mb-1 mx-3">
          <h1 className="text-dark-500 font-bold uppercase md:text-2xl ">98%</h1>
          <p className="text-dark-700 text-xs text-left sm:text-base">
            % Of student financial assitance
          </p>
        </div>
        <img className="h-16 md:h-auto" src="/collegeInfo/line.png" alt="" />
        <div className="sm:mb-0 mb-1 mx-3">
          <h1 className="text-dark-500 font-bold uppercase md:text-2xl">15L</h1>
          <p className="text-dark-700 text-xs md:text-base">
            Average Scholarship aid
          </p>
        </div>
        <img className="h-16 md:h-auto" height={"100%"} src="/collegeInfo/line.png" alt="" />
        <div className="sm:mb-0 mb-1 mx-3">
          <h1 className="text-dark-500 font-bold uppercase md:text-2xl">15L</h1>
          <p className="text-dark-700 text-xs text-left sm:text-base">
            Average Scholarship aid
          </p>
        </div>
      </div>
      <section className="w-full md:w-2/3">
        <h3 className="text-dark-500 text-2xl mt-10 mb-8">
          Scholarship Details
        </h3>
        <h3 className="text-dark-500 text-xl md:text-2xl text-left mt-10 mb-8">
          Need-Based Scholarship Scheme (PGP)
        </h3>
        <p className="text-sm md:text-base text-justify">
          IIMA aspires to give the opportunity to pursue its programmes (PGP &
          PGP-FABM) to all eligible applicants, who are in need of financial
          assistance. Keeping this in mind, IIMA has instituted a Need-Based
          Scholarship Scheme to complement the various scholarships provided by
          the industry and government. Every year many students are provided
          substantial financial support under the scheme.
          <br />
          <br />
          The scholarship amount is decided on the basis of several criteria
          such as annual gross family income, ownership of assets, and the
          number of dependents in the family. The applications for these
          scholarships are invited every year in the month of July/August.
          <br />
          <br />
          Many commercial banks and financial institutions provide educational
          loans to students. For details, candidates may contact branch offices
          of such banks.
        </p>
        <br />
      </section>
      <section>
        {/* Cards */}
        <h3 className="text-dark-500 text-2xl mt-10 mb-8">
          Scholarship offered by Alumni
        </h3>
        <div className="flex justify-between no-scrollbar overflow-x-auto">
          <ScholarshipCard />
          <ScholarshipCard />
          <ScholarshipCard />
          <ScholarshipCard />
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <h3 className="text-dark-500 text-2xl mt-10 mb-8">Educational Loans</h3>
        <p className="text-justify">
          Students can also opt for Educational Loans. These can be financed
          from private or government-owned banks at a defined interest rate.
          Students can also seek monetary help from financial institutions other
          than banks. There are a number of financial institutions that have
          come up to provide monetary help to the students who need any such
          help. Interested students must also know that the rate of interest,
          re-payment methods, maximum amount given as a loan and different
          mediums of providing the loan will reside in the hands of the
          concerned authority of the bank or financial institution through which
          student has opted to seek monetary help.
        </p>
      </section>
    </section>
  );
}

export default ScholarshipComp;
