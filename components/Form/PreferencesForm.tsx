import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

interface UserPreferences {
  destinationType: string;
  culturalSites: boolean;
  prefersBeaches: boolean;
  specificActivities: string;
  visitTime: string;
}

interface PreferencesFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    destinationType: "",
    culturalSites: false,
    prefersBeaches: false,
    specificActivities: "",
    visitTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Select Your Preferences
      </h2>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Preferred Type of Destination:
        </label>
        <motion.select
          name="destinationType"
          value={preferences.destinationType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          whileTap={{ scale: 1.02 }}
        >
          <option value="">Select an option</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="cultural">Cultural</option>
          <option value="adventure">Adventure</option>
        </motion.select>
      </div>

      <div className="flex items-center space-x-3">
        <motion.input
          type="checkbox"
          name="culturalSites"
          checked={preferences.culturalSites}
          onChange={handleChange}
          id="culturalSites"
          className="form-checkbox h-5 w-5 text-blue-600"
          whileTap={{ scale: 1.1 }}
        />
        <label
          htmlFor="culturalSites"
          className="text-gray-700 flex items-center"
        >
          <span className="ml-2">Interested in Cultural Sites</span>
          {preferences.culturalSites && (
            <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
          )}
        </label>
      </div>

      <div className="flex items-center space-x-3">
        <motion.input
          type="checkbox"
          name="prefersBeaches"
          checked={preferences.prefersBeaches}
          onChange={handleChange}
          id="prefersBeaches"
          className="form-checkbox h-5 w-5 text-blue-600"
          whileTap={{ scale: 1.1 }}
        />
        <label
          htmlFor="prefersBeaches"
          className="text-gray-700 flex items-center"
        >
          <span className="ml-2">Prefer Beaches</span>
          {preferences.prefersBeaches && (
            <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
          )}
        </label>
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Specific Activities (e.g., trekking, shopping):
        </label>
        <motion.input
          type="text"
          name="specificActivities"
          value={preferences.specificActivities}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          whileTap={{ scale: 1.02 }}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">
          Time of Year to Visit:
        </label>
        <motion.select
          name="visitTime"
          value={preferences.visitTime}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          whileTap={{ scale: 1.02 }}
        >
          <option value="">Select an option</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </motion.select>
      </div>

      <motion.button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Recommendations
      </motion.button>
    </motion.form>
  );
};

export default PreferencesForm;
