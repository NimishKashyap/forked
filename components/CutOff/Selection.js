import React from "react";

function Selection() {
  return (
    <div>
      <h1 className="text-dark-500 text-xl font-medium">Selection Process</h1>
      <div className="grid md:grid-cols-2">
        <div className="text-[#4b4b4b]">
          <h3 className="text-dark-500 font-medium text-xl my-5">Stage 1: Priliminary Screening</h3>
          <p className="my-5">
            CAT will consist of 4 sections i.e Qualitative Aptitude, Data
            Interpretation and Logical Reasoning, Verbal and Reading
            Comprehension. Candidates having achieved the required cutoff will
            be considered in subsequent stages.
          </p>
        </div>
        <div className="text-[#4b4b4b]">
          <h3 className="text-dark-500 font-medium my-5 text-xl">
            Stage 3: Screening for Analytical Writing Test (AWT) & Personal
            Interview (PI)
          </h3>
          <p className=" my-5">
            2nd phase will help in composing a final shortlist of candidates who
            can appear for AWT and PI. The profiles of candidates will be
            considered on the basis of “Application Rating Score” which
            comprises 4 components. They are:
          </p>
          <ul className="list-disc mx-10">
            <li>10th scores</li>
            <li> 10+2 scores</li>
            <li>Graduation Scores</li>
            <li>Work Experienc</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Selection;
