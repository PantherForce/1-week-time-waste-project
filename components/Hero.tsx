import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import BestServices from "./Services/BestServices";
import TopDestinations from "./TopDestinations/TopDestinations";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Home />
      <BestServices />
      <TopDestinations />
    </>
  );
};

export default Hero;
