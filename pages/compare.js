import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Admission/Banner";
import ScrollView from "../components/ScrollView";
import CompareComp from "../components/Compare/CompareComp";
import Footer from "../components/Footer";
function compare() {
  return (
    <>
      <Head>
        <title>Compare Collegees</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <Banner />
        <p className="mt-4 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Compare
        </p>
        <ScrollView />
        <section className="mb-24">
          <h1 className="text-dark-500 text-xl md:text-3xl">Compare</h1>
          <CompareComp />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default compare;
