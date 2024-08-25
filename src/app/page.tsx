"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../../components/Hero";
import DestinationSelector from "../../components/Destination/DestinationSelector";
import DestinationResult from "../../components/Destination/DestinationResult";
import DestinationInput from "../../components/Destination/DestinationInput";
import CityDetails from "../../components/CityDetails/CityDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/destination-selector" element={<DestinationSelector />} />
        <Route path="/destinationresult" element={<DestinationResult />} />
        <Route path="/destination-input" element={<DestinationInput />} />
        {/* <Route path="/city-details" element={<CityDetails />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
