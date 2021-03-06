import React from "react";
import AdmissionOpenHeaderLogo from "./icons/AdmissionOpenHeaderLogo";

function ExamsAcceptedCards() {
  return (
    <div className="min-w-[200px] md:w-[600px] lg:w-1/4 mx-5 bg-[#fafafa] shadow-md p-5 rounded-lg">
      <header className="flex justify-between items-center">
        <p className="flex items-center">
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#80CE43" />
          </svg>
          <span className="ml-2 text-xs md:text-base">Open</span>
        </p>
        <svg
          className="text-dark-500"
          width="20"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.85 9.60115L0.85 9.601C0.849799 8.43974 1.08396 7.28982 1.53907 6.21836C1.9942 5.14688 2.66132 4.17501 3.50197 3.35987C4.34265 2.54471 5.34001 1.90266 6.43602 1.47176C7.53205 1.04086 8.7044 0.829918 9.88445 0.851504L9.90446 0.851635C11.3137 0.844243 12.7082 1.13276 13.9953 1.69774C15.2825 2.2627 16.4325 3.09102 17.3696 4.12717C17.5307 4.30535 17.7598 4.40702 18 4.40702C18.2402 4.40702 18.4693 4.30535 18.6304 4.12717C19.5675 3.09102 20.7175 2.2627 22.0047 1.69774C23.2918 1.13276 24.6863 0.844243 26.0955 0.851635L26.1155 0.851504C27.2956 0.829918 28.468 1.04086 29.564 1.47176C30.66 1.90266 31.6573 2.54471 32.498 3.35987C33.3387 4.17501 34.0058 5.14688 34.4609 6.21836C34.916 7.28982 35.1502 8.43974 35.15 9.601V9.60115C35.15 14.0122 32.4863 17.9805 28.8421 21.6379C27.0315 23.4549 25.013 25.1619 23.0255 26.7801C22.456 27.2437 21.8871 27.7017 21.3263 28.1531C20.1604 29.0914 19.0298 30.0015 18.0028 30.8757C16.9307 29.9546 15.7455 28.9976 14.5245 28.0116C14.0144 27.5997 13.498 27.1827 12.981 26.7612C10.9934 25.1407 8.97431 23.4357 7.16263 21.6218C3.51628 17.971 0.85 14.0149 0.85 9.60115Z"
            stroke="black"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      </header>
      <section className="flex items-center">
        <svg
          width="30"
          className="w-[16px] md:w-auto"
          height="36"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6298 4.27717C18.852 4.19744 19.0003 3.98505 19 3.747C18.9997 3.50894 18.8509 3.29693 18.6286 3.21773L9.68521 0.0320327C9.56539 -0.0106776 9.43465 -0.0106776 9.31483 0.0320327L0.371465 3.21773C0.149106 3.29689 0.00029732 3.50894 4.44831e-07 3.747C-0.00029643 3.98505 0.14803 4.19744 0.370204 4.27717L3.913 5.54873V9.21458C3.913 9.81961 4.53818 10.3313 5.77118 10.7353C6.8459 11.0875 8.17019 11.2814 9.50004 11.2814C10.8299 11.2814 12.1541 11.0875 13.2289 10.7353C14.4619 10.3313 15.0871 9.81964 15.0871 9.21458V5.54873L16.5498 5.02373V10.1034C15.8993 10.3356 15.4319 10.9624 15.4319 11.6976C15.4319 12.4328 15.8993 13.0596 16.5498 13.2918V15.438C16.5498 15.7484 16.799 16 17.1065 16C17.4139 16 17.6631 15.7484 17.6631 15.438V13.2918C18.3136 13.0596 18.781 12.4329 18.781 11.6976C18.781 10.9624 18.3136 10.3356 17.6631 10.1034V4.62413L18.6298 4.27717ZM17.1064 12.2642C16.7969 12.2642 16.5451 12.01 16.5451 11.6976C16.5451 11.3851 16.7969 11.1309 17.1064 11.1309C17.4159 11.1309 17.6677 11.3851 17.6677 11.6976C17.6677 12.01 17.4159 12.2642 17.1064 12.2642ZM9.5 1.1579L16.776 3.7497L9.5 6.36113L2.224 3.74966L9.5 1.1579ZM13.9738 9.12987C13.8671 9.23845 13.4851 9.49849 12.6231 9.74677C11.7035 10.0116 10.5944 10.1575 9.5 10.1575C8.40564 10.1575 7.29652 10.0116 6.37688 9.74677C5.51486 9.49849 5.13293 9.23848 5.02624 9.12987V5.9483L9.31353 7.48707C9.37383 7.50872 9.43691 7.51955 9.49996 7.51955C9.56305 7.51955 9.6261 7.50872 9.6864 7.48707L13.9737 5.9483V9.12987H13.9738Z"
            fill="#9092A9"
          />
        </svg>
        <span className="text-dark-200 mx-3 text-xs md:text-base">
          Education
        </span>
      </section>
      <h1 className="text-dark-500 text-base font-medium md:text-3xl my-2 md:my-3">
        UGC - NET
      </h1>
      <ul className="flex justify-between text-[8px] md:text-base">
        <li className="flex flex-col">
          <span className="flex text-[#9092a9] items-center">
            <AdmissionOpenHeaderLogo className="w-[16px] mr-[3px] md:w-auto" />{" "}
            <p className="mx-2">Eligibility</p>
          </span>
          <span className=" text-dark-200">X- XII</span>
        </li>
        <li className="flex flex-col">
          <span className="flex text-[#9092a9]">
            <AdmissionOpenHeaderLogo className="w-[16px] mr-[3px] md:w-auto" />{" "}
            <p className="mx-2"> Deadline</p>
          </span>
          <span className="text-dark-200">99.99.99</span>
        </li>
        <li className="flex flex-col">
          <span className="flex text-[#9092a9]">
            <AdmissionOpenHeaderLogo className="w-[16px] mr-[3px] md:w-auto" />{" "}
            <p className="mx-2">Fees</p>
          </span>
          <span className="text-dark-200">$99,999</span>
        </li>
      </ul>
    </div>
  );
}

export default ExamsAcceptedCards;
