import React from "react";

function CourseComp() {
  return (
    <section className="md:w-full lg:w-2/3 xl:1/2 text-justify md:my-[3rem]">
      <h1 className="text-3xl text-dark-500 mt-5 mb-5">Course & Fees</h1>
      
      <p className="text-sm md:text-base">
        IIM Ahmedabad courses are divided into eight categories, all in the
        post-graduation or doctoral level of study. All programmes have a
        management focus and invite applications across many disciplines, each
        having separate admission criteria. IIMA courses stand out from the
        other IIMs in their extensive case-based study approach in all their
        subjects, in lieu of lectures and seminars.
      </p>
      <br />
      <p className="text-sm md:text-base mb-3">
        Six of these eight IIMA courses are taught in-person at the campus, and
        two programmes, namely ePGP in Management and ePGD in Advanced Business
        Analytics, follow remote instruction.
      </p>
    </section>
  );
}

export default CourseComp;
