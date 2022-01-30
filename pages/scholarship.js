import Head from "next/head";
import Banner from "../components/Admission/Banner";
import Navbar from "../components/Navbar";
import ScholarshipComp from "../components/Scholarship/ScholarshipComp";
import ScrollView from "../components/ScrollView";
import styles from "../styles/Home.module.css";
import FAQDropDown from "../components/FAQDropDown";
import NewsCard from "../components/NewsCard";
import { useState } from "react";
import TopCollege from "../components/TopCollege";
import Footer from "../components/Footer";
function scholarship() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Scholarship</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <div className="mt-[2rem] md:mt-[4rem]">
          <Banner />
        </div>
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Scholarships
        </p>
        <ScrollView />
        <ScholarshipComp />
        <section>
          <h1 className="text-dark-500 text-xl mt-5 md:text-3xl mb-5">FAQs</h1>
          <div className="flex flex-col md:flex-row justify-around md:h-[20rem] items-stretch">
            <FAQDropDown />
            <FAQDropDown />
          </div>
        </section>
        <section>
          <h1 className="text-dark-500 font-medium text-xl md:text-3xl my-5">
            Related News
          </h1>
          {/* News Card */}
          <NewsCard index={index} setIndex={setIndex} />
        </section>
        <section>
          <h1 className="text-dark-500 font-medium text-xl md:text-3xl my-5 md:my-[3rem]">
            Top MBA Colleges
          </h1>
          <TopCollege />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default scholarship;
