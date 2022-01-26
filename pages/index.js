import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Stream from "../components/Stream";
import Degree from "../components/Degree";
import Location from "../components/Location";
import Colleges from "../components/Colleges";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero/>
      <SearchBar/>
      <div className="mx-12 my-4">
        <h2 className="text-base text-dark-900 font-normal leading-4">Home {">"} Colleges</h2>
      </div>
      <Stream />
      <Degree />
      <Location />
      <Colleges />
      <Footer />
    </div>
  )
}
