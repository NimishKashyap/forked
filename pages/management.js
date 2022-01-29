import React from 'react';
import Navbar from "../components/LoggedinNavbar"
import HeroManagement from "../components/management/HeroManagement"
import ManagementColleges from '../components/management/ManagementColleges';
import Footer from "../components/Footer"

function management() {
  return <div>
      <Navbar />
        <HeroManagement />
        <div className="mx-4 sm:mx-12 my-2">
        <h2 className="text-base text-dark-900 font-normal leading-4">Home {">"} Colleges {">"} Management</h2>
      </div>
      <ManagementColleges />
      <Footer />
  </div>;
}

export default management;
