import Head from "next/head";
import Banner from "../components/Admission/Banner";
import CourseComp from "../components/Course/CourseComp";
import Navbar from "../components/Navbar";
import ScrollView from "../components/ScrollView";
import styles from "../styles/Home.module.css";
import Review from "../components/Review";
import TopCollege from "../components/TopCollege";
import CourseLink from "../components/Course/CourseLink";
import Footer from "../components/Footer";
import AdmissionOpenSwitch from "../components/AdmissionOpenSwitch";
function courses() {
  return (
    <>
      <Head>
        <title>Courses & Fees</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <div className="mt-[2rem] md:mt-[5.5rem]">
          <Banner />
        </div>
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Admissions
        </p>
        <ScrollView />
        <CourseComp />
        <section >
          <AdmissionOpenSwitch />
          <CourseLink />
          <CourseLink />
          <CourseLink />
        </section>
      </main>
      <section>
        <Review />
        <Review />
        <Review />
        <button className="border-primary-500 border-2 mx-5 my-5 px-5 py-2 rounded-md text-dark-500">
          SEE MORE REVIEWS
        </button>
      </section>
      <main className={styles.secondContainer}>
        <section>
          <section>
            <h1 className="text-dark-500 text-3xl my-[3rem]">
              Top MBA Colleges
            </h1>
            <TopCollege />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default courses;
