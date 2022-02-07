import React, { useState } from "react";
import ExamAcceptedCards from "../Admission/ExamsAcceptedCards";
import NewsArticle from "./NewsArticle";
import NewsCompSwitch from "./NewsCompSwitch";
import HeartIcon from "../Admission/icons/HeartIcon";
import NewsCard from "../NewsCard";
import MerchAd from "../MerchAd";
function NewsComp() {
  const [check, setCheck] = useState(false);
  const [index, setIndex] = useState(0);
  return !check ? (
    <>
      <h1 className="text-dark-500 text-lg md:text-3xl my-5">Related News</h1>
      {/* News Card */}
      <NewsCard index={index} setIndex={setIndex} />
      <h1 className="text-dark-500 text-lg my-5 md:text-2xl">
        College News & Article
      </h1>
      <NewsCompSwitch />
      <NewsArticle check={check} setCheck={setCheck} />
    </>
  ) : (
    <>
      <p className="mt-5 cursor-pointer">
        {"<"}{" "}
        <span
          onClick={() => setCheck(false)}
          className="underline underline-offset-2 text-dark-500"
        >
          Back to Steps 1 and 2
        </span>
      </p>
      <h1 className="text-dark-500 text-2xl my-5 font-medium">
        MAT 2021 (August-September) Important Dates & Notification
      </h1>
      <div className="flex justify-between pb-2 md:border-b-2">
        <div className="flex w-full md:gap-x-10">
          <span className="text-dark-500 text-sm md:text-base">
            -Joseph Hpeso
          </span>
          <ul className="hidden md:flex list-disc text-dark-200 gap-x-10">
            <li>3 Min Read</li>
            <li>25/06/2021</li>
            <li>8K Views</li>
            <li>3 Comments</li>
          </ul>
        </div>
        <div className="flex min-w-max gap-x-2">
          <span className="text-dark-500 text-sm md:text-base">
            Download as a PDF
          </span>
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10.8496V14.1829C16 14.625 15.8244 15.0489 15.5118 15.3615C15.1993 15.674 14.7754 15.8496 14.3333 15.8496H2.66667C2.22464 15.8496 1.80072 15.674 1.48816 15.3615C1.17559 15.0489 1 14.625 1 14.1829V10.8496"
                stroke="#404366"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13113 11.6165C8.24174 11.6697 8.36564 11.6996 8.4965 11.7C8.49733 11.7 8.49817 11.7 8.49901 11.7C8.50341 11.7 8.5078 11.7 8.51219 11.6999C8.60989 11.6984 8.70359 11.6804 8.79063 11.6487C8.90357 11.6075 9.00953 11.5416 9.10013 11.451L13.2668 7.28437C13.5987 6.95243 13.5987 6.41424 13.2668 6.08229C12.9348 5.75035 12.3967 5.75035 12.0647 6.08229L9.34901 8.798L9.34901 0.849999C9.34901 0.380558 8.96845 -4.10364e-08 8.49901 0C8.02956 4.10364e-08 7.64901 0.380558 7.64901 0.849999L7.64901 8.79784L4.93346 6.08229C4.60152 5.75035 4.06333 5.75035 3.73138 6.08229C3.39944 6.41424 3.39944 6.95243 3.73138 7.28437L7.89098 11.444C7.91779 11.4714 7.94643 11.497 7.97672 11.5207C8.02535 11.5586 8.07716 11.5906 8.13113 11.6165Z"
                fill="#404366"
              />
            </svg>
          </div>
          <div>
            <svg
              width="26"
              height="22"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.85 9.60115L0.85 9.601C0.849799 8.43974 1.08396 7.28982 1.53907 6.21836C1.9942 5.14688 2.66132 4.17501 3.50197 3.35987C4.34265 2.54471 5.34001 1.90266 6.43602 1.47176C7.53205 1.04086 8.7044 0.829918 9.88445 0.851504L9.90446 0.851635C11.3137 0.844243 12.7082 1.13276 13.9953 1.69774C15.2825 2.2627 16.4325 3.09102 17.3696 4.12717C17.5307 4.30535 17.7598 4.40702 18 4.40702C18.2402 4.40702 18.4693 4.30535 18.6304 4.12717C19.5675 3.09102 20.7175 2.2627 22.0047 1.69774C23.2918 1.13276 24.6863 0.844243 26.0955 0.851635L26.1155 0.851504C27.2956 0.829918 28.468 1.04086 29.564 1.47176C30.66 1.90266 31.6573 2.54471 32.498 3.35987C33.3387 4.17501 34.0058 5.14688 34.4609 6.21836C34.916 7.28982 35.1502 8.43974 35.15 9.601V9.60115C35.15 14.0122 32.4863 17.9805 28.8421 21.6379C27.0315 23.4549 25.013 25.1619 23.0255 26.7801C22.456 27.2437 21.8871 27.7017 21.3263 28.1531C20.1604 29.0914 19.0298 30.0015 18.0028 30.8757C16.9307 29.9546 15.7455 28.9976 14.5245 28.0116C14.0144 27.5997 13.498 27.1827 12.981 26.7612C10.9934 25.1407 8.97431 23.4357 7.16263 21.6218C3.51628 17.971 0.85 14.0149 0.85 9.60115Z"
                stroke="rgba(0,0,0,0.5)"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0946 13.1249C14.6034 13.1274 14.119 13.2401 13.6771 13.4548C13.2353 13.6694 12.8473 13.9806 12.5418 14.3652L7.74459 11.3661C7.91942 10.8019 7.91942 10.1979 7.74459 9.63364L12.5418 6.63458C13.0287 7.23748 13.7133 7.6486 14.4743 7.79509C15.2352 7.94159 16.0235 7.81401 16.6995 7.43496C17.3754 7.0559 17.8954 6.44984 18.1672 5.72413C18.4391 4.99842 18.4453 4.1999 18.1848 3.47003C17.9243 2.74016 17.4139 2.12605 16.744 1.73648C16.0741 1.34691 15.2879 1.20703 14.5247 1.34162C13.7615 1.4762 13.0706 1.87657 12.5743 2.4718C12.078 3.06703 11.8085 3.81869 11.8133 4.59364C11.8164 4.8871 11.8606 5.17868 11.9446 5.45989L7.1474 8.45895C6.72389 7.9258 6.145 7.53761 5.49099 7.34818C4.83698 7.15875 4.14024 7.17747 3.49735 7.40174C2.85445 7.62601 2.29725 8.04473 1.90297 8.59985C1.50869 9.15497 1.29688 9.819 1.29688 10.4999C1.29687 11.1808 1.50869 11.8448 1.90297 12.3999C2.29725 12.955 2.85445 13.3738 3.49735 13.598C4.14024 13.8223 4.83698 13.841 5.49099 13.6516C6.145 13.4622 6.72389 13.074 7.1474 12.5408L11.9446 15.5399C11.8606 15.8211 11.8164 16.1127 11.8133 16.4061C11.8133 17.0551 12.0058 17.6895 12.3663 18.2291C12.7269 18.7687 13.2393 19.1893 13.8389 19.4376C14.4385 19.686 15.0982 19.7509 15.7347 19.6243C16.3712 19.4977 16.9559 19.1852 17.4148 18.7263C17.8737 18.2674 18.1862 17.6828 18.3128 17.0463C18.4394 16.4098 18.3744 15.75 18.1261 15.1505C17.8777 14.5509 17.4572 14.0384 16.9176 13.6779C16.378 13.3173 15.7436 13.1249 15.0946 13.1249V13.1249ZM15.0946 2.62489C15.484 2.62489 15.8646 2.74036 16.1884 2.95668C16.5121 3.17301 16.7645 3.48049 16.9135 3.84023C17.0625 4.19997 17.1015 4.59582 17.0255 4.97772C16.9495 5.35962 16.762 5.71042 16.4867 5.98576C16.2114 6.26109 15.8606 6.4486 15.4787 6.52456C15.0968 6.60053 14.7009 6.56154 14.3412 6.41253C13.9814 6.26352 13.674 6.01118 13.4576 5.68742C13.2413 5.36366 13.1258 4.98302 13.1258 4.59364C13.1258 4.07149 13.3333 3.57074 13.7025 3.20152C14.0717 2.83231 14.5724 2.62489 15.0946 2.62489V2.62489ZM4.59459 12.4686C4.20521 12.4686 3.82457 12.3532 3.50081 12.1368C3.17705 11.9205 2.92471 11.613 2.7757 11.2533C2.62669 10.8936 2.5877 10.4977 2.66367 10.1158C2.73963 9.73391 2.92714 9.38311 3.20247 9.10777C3.47781 8.83244 3.8286 8.64493 4.2105 8.56897C4.5924 8.493 4.98825 8.53199 5.348 8.681C5.70774 8.83001 6.01521 9.08235 6.23154 9.40611C6.44787 9.72987 6.56334 10.1105 6.56334 10.4999C6.56334 11.022 6.35592 11.5228 5.9867 11.892C5.61749 12.2612 5.11673 12.4686 4.59459 12.4686ZM15.0946 18.3749C14.7052 18.3749 14.3246 18.2594 14.0008 18.0431C13.677 17.8268 13.4247 17.5193 13.2757 17.1595C13.1267 16.7998 13.0877 16.404 13.1637 16.0221C13.2396 15.6402 13.4271 15.2894 13.7025 15.014C13.9778 14.7387 14.3286 14.5512 14.7105 14.4752C15.0924 14.3993 15.4883 14.4382 15.848 14.5873C16.2077 14.7363 16.5152 14.9886 16.7315 15.3124C16.9479 15.6361 17.0633 16.0168 17.0633 16.4061C17.0633 16.9283 16.8559 17.429 16.4867 17.7983C16.1175 18.1675 15.6167 18.3749 15.0946 18.3749V18.3749Z"
                fill="#9092A9"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <ul className="mx-2 my-3 flex text-xs justify-between md:hidden list-disc text-dark-200 md:gap-x-10">
          <li>3 Min Read</li>
          <li>25/06/2021</li>
          <li>8K Views</li>
          <li>3 Comments</li>
        </ul>
      </div>
      <div className="mt-5">
        <img
          className="w-full rounded-md object-cover h-[150px] md:h-[400px]"
          src="/news/imagesNews.png"
          alt="newsImage"
        />
      </div>
      <h1 className="text-dark-500 text-2xl my-5 mt-10">MAT 2021 </h1>
      <div className="relative grid gap-y-10 md:grid-cols-4 text-dark-500 mb-5">
        <div className="grid gap-2">
          <h1 className="text-dark-200">Registrations Process Ends</h1>
          <p>PBT - August 29, 2021</p>
          <p>CBT - Phase 1:August 14,</p>
          <p>Phase 2:September 4</p>
        </div>
        <div className="grid gap-2">
          <h1 className="text-dark-200">Admin Card Available</h1>
          <p>PBT - August 29, 2021</p>
          <p>CBT - Phase 1:August 14,</p>
          <p>Phase 2:September 4</p>
        </div>
        <div className="grid gap-2">
          <h1 className="text-dark-200">Result Announcement</h1>
          <p>PBT - August 29, 2021</p>
          <p>CBT - Phase 1:August 14,</p>
          <p>Phase 2:September 4</p>
        </div>
        <div className="absolute top-0 hidden lg:block right-0">
          <MerchAd />
        </div>
      </div>
      <div className="w-full lg:w-[1400px]">
        <ExamAcceptedCards />
      </div>
      <seciton className="text-[#4b4b4b]">
        <p className="md:w-1/2 mt-10 ">
          All India Management Association (AIMA) has released the schedule of
          Management Aptitude Test (MAT 2021) for December session on the
          official website mat.aima.in. MAT 2021 registration for both Paper
          Based Test (MAT PBT) and Computer Based Test (MAT CBT) is underway.
          <br />
          <br />
          The last date to apply for PBT and CBT is November 28 and December 12,
          respectively.
          <br />
          <br />
          As per the released schedule, the PBT will be held on December 5 and
          the admit card will be made available to download from November 29
          (4.00 PM) onwards, whereas the CBT exam will be conducted on December
          19. The admit card will be available from December 14.
          <br />
          <br />
          MAT Dec 21 Scores will be released on December 27, 2021.
          <br />
          <br />
          Applicants will be able to check their Roll No, Test Date, Test Time,
          Test Venue Address and other important details on the admit card.
          Candidate has to strictly follow the date and time allotted to him/her
          in the admit card, reads the official notice.
          <br />
          <br />
        </p>
        <p>Steps to apply for MAT December 2021: </p>
        <ul className="list-disc mx-5 ">
          <li>Visit the official website mat.aima.in</li>
          <li>On the homepage, click on &apos;Registration&apos;</li>
          <li>
            Fill in the required details, register and proceed with application
            details
          </li>
          <li>Pay the application fee, upload the documents and submit</li>
          <li>Take a printout for future reference</li>
          <li>
            Here&apos;s direct link to register for MAT 2021 December session.
          </li>
        </ul>
        <br />
        <p>About Mat</p>
        <br />
        <p className="md:w-1/2">
          The Management Aptitude Test or MAT is an all-India exam conducted by
          AIMA for admission to postgraduate management programmes (MBA). MAT
          exam is conducted through a computer-based test (CBT), remote
          proctored internet-based test (IBT), and paper-based test (PBT) as
          well.
          <br />
          <br />
          The MAT 2021 score is accepted by all AICTE-approved institutions,
          university departments, constituent colleges and affiliated colleges.
        </p>
      </seciton>
      <section className="my-5 border-b-2 pb-5">
        <h1 className="text-dark-500 text-2xl my-5">
          Was this information helpful?
        </h1>
        <div className="md:top-[-1rem] md:relative flex items-center text-dark-200 text-medium">
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain md:mx-5"
              src="assets/Vector.png"
            ></img>
            <span className="absolute text-xs md:text-base md:bottom-[-2rem] md:left-[1.5rem]">
              100
            </span>
          </span>
          <span className="relative">
            <img
              className="h-[20px] md:h-1/2 md:w-1/2 object-contain mx-5 "
              src="assets/Vector1.png"
            ></img>
            <span className="absolute z-10 text-xs md:text-base right-7 md:bottom-[-2rem] md:left-[1.8rem]">
              0
            </span>
          </span>
        </div>
      </section>
      <section>
        <h1 className="text-2xl text-dark-500 my-5 mt-10">Related News</h1>
        <NewsCard index={index} setIndex={setIndex} />
      </section>
    </>
  );
}

export default NewsComp;
