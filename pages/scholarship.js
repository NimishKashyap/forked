import Head from "next/head";
import Banner from "../components/Admission/Banner";
import Navbar from "../components/Navbar";
import ScholarshipComp from "../components/Scholarship/ScholarshipComp";
import ScrollView from "../components/ScrollView";
import styles from "../styles/Home.module.css";
function scholarship() {
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
      </main>
    </>
  );
}

export default scholarship;
