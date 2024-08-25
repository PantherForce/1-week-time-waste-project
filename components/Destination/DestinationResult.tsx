import React, { useState } from "react";
import { fetchDestinationFromGPT } from "../../api/openai";
import PreferencesForm from "../Form/PreferencesForm";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface UserPreferences {
  destinationType: string;
  culturalSites: boolean;
  prefersBeaches: boolean;
  specificActivities: string;
  visitTime: string;
}

interface Destination {
  name: string;
  description: string;
  imageUrl: string;
}

const DestinationResult: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const controls = useAnimation();

  const handleSubmit = async (preferences: UserPreferences) => {
    setLoading(true);
    setShowResults(false);
    setShowAnimation(false);
    try {
      const result = await fetchDestinationFromGPT(preferences);
      const formattedDestinations = parseDestinations(result);
      setDestinations(formattedDestinations);
      setShowResults(true);
      setShowAnimation(true);
      controls.start({ x: 0 });
    } catch (error) {
      console.error("Error fetching destination:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to parse the response and format it into an array of destinations
  const parseDestinations = (response: string): Destination[] => {
    const lines = response.split("\n").filter((line) => line.trim() !== "");
    return lines.map((line) => {
      const [name, ...descParts] = line.split(":");
      const description = descParts.join(":").trim();
      const imageUrl = getImageUrl(name.trim());
      return {
        name: name.trim(),
        description,
        imageUrl,
      };
    });
  };

  // Dummy function to fetch images based on the destination name
  const getImageUrl = (name: string): string => {
    return `https://via.placeholder.com/400?text=${encodeURIComponent(name)}`;
  };

  return (
    <div className="p-8 bg-white rounded-lg max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row md:space-x-6"
        initial={{ x: 0 }}
        animate={{ x: showAnimation ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`flex-1 p-4 rounded-lg ${showResults ? "" : "w-full"}`}
          initial={{ width: "100%" }}
          animate={showAnimation ? { width: "50%" } : { width: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <PreferencesForm onSubmit={handleSubmit} />
        </motion.div>

        <motion.div
          className={`flex-1 p-4 ${showResults ? "" : "hidden"}`}
          initial={{ x: "100%" }}
          animate={showAnimation ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          {loading ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
              <path
                fill="none"
                stroke="#FF156D"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="300 385"
                strokeDashoffset="0"
                d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  calcMode="spline"
                  dur="2"
                  values="685;-685"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                ></animate>
              </path>
            </svg>
          ) : (
            destinations?.map((dest, index) => (
              <div key={index} className="border rounded-lg p-4 mb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {dest.name}
                </h3>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DestinationResult;
