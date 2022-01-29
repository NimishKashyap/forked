import React from 'react';
import Banner from "../components/collegeInfo/Banner";
import Navbar from "../components/LoggedinNavbar";
import Bar from "../components/collegeInfo/Bar";
import CollegeInformation from '../components/collegeInfo/CollegeInformation'
import CollegeRanking from "../components/collegeInfo/CollegeRanking"
import ExploreCampus from "../components/collegeInfo/ExploreCampus"
import CampusFacility from "../components/collegeInfo/CampusFacility"
import TopRecruiter from "../components/collegeInfo/TopRecruiter"
import NewsCard from "../components/collegeInfo/NewsCard"
import Review from "../components/collegeInfo/Review"
import Contact from "../components/collegeInfo/Contact"
import MBAColleges from "../components/collegeInfo/MBAColleges"
import Footer from "../components/Footer"

function college() {
  return <div>
      <Navbar />
      <Banner />
      <div className="mx-4 sm:mx-12 my-3">
        <h2 className="text-base text-dark-900 font-normal leading-4">Home {">"} Colleges {">"} MBA {">"} IIMA</h2>
      </div>
      <Bar />
      <CollegeInformation />
      <CollegeRanking />
      <ExploreCampus />
      <CampusFacility />
      <TopRecruiter />
      <NewsCard />
      <Review />
      <Contact />
      <MBAColleges />
      <Footer/>
  </div>;
}

export default college;
