import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Banner from "../components/Admission/Banner";
import ScrollView from "../components/ScrollView";
import FAQDropDown from "../components/FAQDropDown";
import CutOffComp from "../components/CutOff/CutOffComp";
import TopCollege from "../components/TopCollege";
import Footer from "../components/Footer";
function cutOff() {
  return (
    <>
      <Head>
        <title>Cut Offs</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <div className="mt-[2rem] md:mt-[4rem]">
          <Banner />
        </div>
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} CutOffs
        </p>
        <ScrollView />
        <CutOffComp />
        <br />

        <h1 className="text-dark-500 text-lg md:text-3xl mb-5">FAQs</h1>
        <div className="flex flex-col md:flex-row justify-around md:h-[20rem] items-stretch">
          <FAQDropDown />
          <FAQDropDown />
        </div>
        <section>
          <h1 className="text-dark-500 text-xl md:text-3xl mx-5 my-[3rem]">
            Top MBA Colleges
          </h1>
          <TopCollege />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default cutOff;
