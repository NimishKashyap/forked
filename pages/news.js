import Head from "next/head";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Banner from "../components/Admission/Banner";
import NewsCard from "../components/NewsCard";
import NewsComp from "../components/News/NewsComp";
import ScrollView from "../components/ScrollView";

function News() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <Banner />
        <ScrollView />
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} CutOffs
        </p>
        <section>
          <NewsComp />
        </section>
      </main>
      <section className="flex justify-center md:my-10 px-5 py-3 md:p-[5rem] bg-[rgba(255,191,0,0.08)] w-screen  md:h-auto">
        <img
          className="h-[150px] hidden md:block md:h-auto object-contain"
          src="/assets/addNews.png"
          alt="AdBanner"
        />
        <div className="w-auto md:w-2/3 flex flex-col items-start justify-start md:mx-6 md:px-5 text-dark-500">
          <h1 className="text-2xl md:text-5xl mb-5 font-medium">
            Subscribe to our News Updates
          </h1>
          <p className="text-lg w-10/12 text-dark-200">
            Get Access to latest updates
          </p>
          <input
            className="w-full px-5 py-3 rounded-lg bg-transparent border-2 my-3 border-[rbga(100,100,100,1)]"
            placeholder="Enter your Email ID..."
          />
          <input
            className="w-full px-5 py-3 rounded-lg bg-transparent border-2 border-[rbga(100,100,100,1)]"
            placeholder="Enter your mobile number..."
          />
          <button className="mt-5 mx-2 bg-primary-500 px-5 py-2 rounded-md text-white">
            Subscribe Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default News;
