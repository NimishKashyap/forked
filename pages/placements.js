import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Admission/Banner";
import ScrollView from "../components/ScrollView";
import PlacementComp from "../components/Placements/PlacementComp";
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
    </>
  );
}

export default placements;
