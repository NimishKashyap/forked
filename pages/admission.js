import Head from "next/head";
import { useState } from "react";
import AdmissionOpen from "../components/Admission/AdmissionOpen";
import Banner from "../components/Admission/Banner";
import QuickUpdateView from "../components/Admission/QuickUpdateView";
import RelatedLinkCard from "../components/Admission/RelatedLinkCard";
import AdmissionOpenSwitch from "../components/AdmissionOpenSwitch";
import AdvertiseBanner from "../components/AdvertiseBanner";
import FAQDropDown from "../components/FAQDropDown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import Review from "../components/Review";
import ScrollView from "../components/ScrollView";
import TopCollege from "../components/TopCollege";
import styles from "../styles/Home.module.css";

export default function Admission() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Admission | College King</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={styles.container}>
        <Banner />
        <p className="mt-4 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Admissions
        </p>
        <ScrollView />

        <section className="mt-7">
          <h1 className="my-[3rem] text-base md:text-[3rem] text-[#2B3A77]">
            Admissions
          </h1>
          <h3 className="text-base md:my-[2.5rem] font-bold md:font-normal md:text-[2rem] text-[#404366]">
            IIM Ahmedabad Quick Update
          </h3>
          <QuickUpdateView />
        </section>
        <section>
          <h3 className="text-[2rem] text-dark-500 my-[1rem]">
            Admissions Open
          </h3>
          <AdmissionOpenSwitch />
          <AdmissionOpen />
        </section>
        <section>
          <AdmissionOpen />
          <AdmissionOpen />
        </section>
      </div>
      <AdvertiseBanner />
      <div className={styles.container}>
        <section>
          <h1 className="text-dark-500 text-lg md:text-3xl mb-5">FAQs</h1>
          <div className="flex flex-col md:flex-row justify-around md:h-[20rem] items-stretch">
            <FAQDropDown />
            <FAQDropDown />
          </div>
        </section>
        <section>
          <h1 className="text-dark-500 text-lg md:text-3xl my-5">
            Related News
          </h1>
          {/* News Card */}
          <NewsCard index={index} setIndex={setIndex} />
        </section>
      </div>
      <section className="mx-5 md:mx-[4rem]">
        <h1 className="text-dark-500 mx-5 text-xl md:text-3xl mt-5 md:my-[3rem]">
          Reviews on IIMA
        </h1>
        <Review />
        <Review />
        <Review />
        <button className="border-primary-500 border-2 mx-5 my-5 px-5 py-2 rounded-md text-dark-500">
          SEE MORE REVIEWS
        </button>
      </section>
      <div className="px-[2rem]">
        <section>
          <h1 className="text-dark-500 text-xl md:text-3xl mx-5 my-[3rem]">
            Top MBA Colleges
          </h1>
          <TopCollege />
        </section>
      </div>
      <Footer />
    </>
  );
}
