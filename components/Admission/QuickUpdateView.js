import React from "react";
import QuickUpdateCards from "./QuickUpdateCards";

function QuickUpdateView() {
  return (
    <div className="flex justify-center scroll-smooth my-5 overflow-x-auto max-h-[200px] lg:max-h-fit">
      <QuickUpdateCards
        date="19 June"
        details="IIMA Launches Online Program on ‘Developing Commercial and Financial Skills for Strategic Business Decisions’ from July 11."
      />
      <QuickUpdateCards
        date="19 June"
        details="IIMA Launches Online Program on ‘Developing Commercial and Financial Skills for Strategic Business Decisions’ from July 11."
      />
      <QuickUpdateCards
        date="19 June"
        details="IIMA Launches Online Program on ‘Developing Commercial and Financial Skills for Strategic Business Decisions’ from July 11."
      />
      <QuickUpdateCards
        date="19 June"
        details="IIMA Launches Online Program on ‘Developing Commercial and Financial Skills for Strategic Business Decisions’ from July 11."
      />
    </div>
  );
}

export default QuickUpdateView;
