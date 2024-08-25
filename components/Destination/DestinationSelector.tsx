import React, { useState } from "react";
import { MapPin, Lightning } from "@phosphor-icons/react";
import DestinationResult from "./DestinationResult"; // Import the new component
import { useNavigate } from "react-router-dom";

const DestinationSelector: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate(); // Initialize useRouter

  const handleUseAI = () => setShowResult(true);

  // Function to handle navigation
  const handleKnowDestination = () => {
    navigate("/destination-input"); // Navigate to the new page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {showResult ? (
        <DestinationResult onClose={() => setShowResult(false)} />
      ) : (
        <div className="p-8 bg-white rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose Your Option
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Not sure where to go? Let us help you find the perfect destination!
          </p>
          <div className="flex flex-row space-x-4">
            <button
              onClick={handleKnowDestination}
              className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition transform hover:scale-105"
            >
              <MapPin size={24} className="mr-2" />
              Do you know your destination?
            </button>

            <button
              onClick={handleUseAI}
              className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 transition transform hover:scale-105"
            >
              <Lightning size={24} className="mr-2" />
              Use AI to get your destination
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationSelector;
