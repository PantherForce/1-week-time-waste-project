import React, { useState } from "react";
import { fetchCityFactFromGPT } from "../../utils/fetchDestinationFromGPT"; // Corrected import path
import Timeline from "../Timeline/Timeline";
import { motion } from "framer-motion";

const citiesInIndia = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
];

const DestinationInput: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [bestFact, setBestFact] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const city = event.target.value;
    setSelectedCity(city);

    if (!city) return;

    setLoading(true);
    setError(null);
    setBestFact(null);

    try {
      // Fetch a fact about the selected city using OpenAI
      const fact = await fetchCityFactFromGPT(city);
      setBestFact(fact);
    } catch (err) {
      setError(
        "Failed to fetch a fact about the selected city. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for individual divs
  const sliderVariants = {
    animate: (i: number) => ({
      x: [0, -1000], // Adjust based on the total width of the content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20 - i * 2, // Slightly different speeds for each div
          ease: "linear",
        },
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <div className="p-8 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Select Your Destination
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Discover interesting facts about cities in India!
        </p>
        <div className="flex flex-col items-center">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a city...</option>
            {citiesInIndia.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`w-full bg-blue-500 text-white py-2 rounded-md shadow-md transition-colors mt-4 ${
            loading || !bestFact
              ? "cursor-not-allowed bg-gray-400"
              : "hover:bg-blue-600"
          }`}
          disabled={loading || !bestFact} // Disable button until fact is loaded
        >
          Lets see the magic
        </button>
      </div>
      <div>
        {loading && (
          <div className="mt-6 p-4 text-center border-3 border-black text-blue-700">
            Fetching the best fact for {selectedCity}...
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
            <p className="text-center text-lg">{error}</p>
          </div>
        )}
      </div>

      {/* Slider Container */}
      {bestFact && (
        <div className="mt-6 flex-row overflow-hidden  max-w-7xl">
          <div className="flex whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="inline-block min-w-full flex-shrink-0 bg-blue-100 text-black rounded-md p-4 m-2"
                custom={i} // Pass the index to the custom prop
                variants={sliderVariants}
                animate="animate"
              >
                <p className="text-center text-lg">
                  {bestFact} (Fact #{i + 1})
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Timeline />
      </div>
    </div>
  );
};

export default DestinationInput;
