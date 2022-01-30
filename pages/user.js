import React from 'react';
import Navbar from "../components/LoggedinNavbar"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Recommendations from "../components/Recommendations"
import RecentlyViewed from '../components/RecentlyViewed';
import Stream from "../components/Stream"
import Degree from "../components/Degree"
import Location from "../components/Location"
import Colleges from "../components/Colleges"
import Footer from "../components/Footer"

function user() {
  return <div>
      <Navbar/>
      <Hero/>
      <SearchBar />
      <div className="mx-4 sm:mx-12 my-4 mt-8 lg:mt-4">
        <h2 className="text-base text-dark-900 font-normal leading-4">Home {">"} Colleges</h2>
      </div>
        <Recommendations />
        <RecentlyViewed />
        <Stream />
        <Degree />
        <Location />
        <Colleges />
        <Footer />
  </div>;
}

export default user;
