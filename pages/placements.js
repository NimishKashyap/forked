import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Admission/Banner";
import ScrollView from "../components/ScrollView";
import PlacementComp from "../components/Placements/PlacementComp";
import TopCollege from "../components/TopCollege";
import Footer from "../components/Footer";
import Review from "../components/Review";
function placements() {
  return (
    <>
      <Head>
        <title>Placements</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <Banner />
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Placements
        </p>
        <ScrollView />

        <PlacementComp />
      </main>
      <section className="md:mx-[4rem]">
        <h1 className="text-dark-500 text-xl md:text-3xl mt-5 md:mt-[3rem]">
          Reviews on IIMA
        </h1>
        <Review />
        <Review />
        <Review />
        <button className="border-primary-500 border-2 mx-5 my-5 px-5 py-2 rounded-md text-dark-500">
          SEE MORE REVIEWS
        </button>
      </section>
      <section className="mx-[2rem] md:mx-[4rem]">
        <h1 className="text-dark-500 text-3xl my-5 mx-5 md:my-[3rem]">
          Top MBA Colleges
        </h1>
        <TopCollege />
      </section>
      <Footer />
    </>
  );
}

export default placements;
