import Head from "next/head";
import Banner from "../components/Admission/Banner";
import CourseComp from "../components/Course/CourseComp";
import Navbar from "../components/Navbar/Navbar";
import ScrollView from "../components/ScrollView";
import styles from "../styles/Home.module.css";
import Review from "../components/Review";
import TopCollege from "../components/TopCollege";
import CourseLink from "../components/Course/CourseLink";
import Footer from "../components/Footer";

function courses() {
  return (
    <>
      <Head>
        <title>Courses & Fees</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <Banner />
        <p className="mt-4 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Admissions
        </p>
        <ScrollView />
        <CourseComp />
        <section className="my-5">
          <ul className="flex border-b-2 max-w-fit my-4 text-dark-200">
            <li className="ml-1">Bachelors</li>
            <li className="ml-5">Masters</li>
            <li className="ml-5">Certificate</li>
            <li className="ml-5">Diploma</li>
            <li className="ml-5 mr-1">Ph. D</li>
          </ul>
          <CourseLink />
        </section>
        <section>
          <Review />
          <Review />
          <Review />
          <button className="border-primary-500 border-2 mx-5 my-5 px-5 py-2 rounded-md text-dark-500">
            SEE MORE REVIEWS
          </button>
        </section>
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
