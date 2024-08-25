// components/Home.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/destination-selector"); // Replace with the correct path
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: `url('/images/Hero.svg')` }}
    >
      {/* Include Navbar */}

      <div className="container mx-auto px-6 py-8 mt-20">
        <h1 className="text-6xl font-bold text-black max-w-lg leading-tight">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="text-xl text-black mt-4 max-w-md">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="mt-8">
          {/* Use the navigate function in onClick */}
          <button
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600"
            onClick={handleNavigate}
          >
            Find out more
          </button>
          <button className="ml-4 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Play Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
