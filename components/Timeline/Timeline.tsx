import React from "react";
import { motion } from "framer-motion";

// Define the timeline data
const timelineSteps = [
  {
    id: 1,
    title: "Step 1",
    description: "This is the first step of the timeline.",
  },
  {
    id: 2,
    title: "Step 2",
    description: "This is the second step of the timeline.",
  },
  {
    id: 3,
    title: "Step 3",
    description: "This is the third step of the timeline.",
  },
  {
    id: 4,
    title: "Step 4",
    description: "This is the fourth step of the timeline.",
  },
  {
    id: 5,
    title: "Step 5",
    description: "This is the fifth step of the timeline.",
  },
];

// Animation variants for Framer Motion
const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const HorizontalTimeline: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative p-6 shadow-xl rounded-lg w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Animated Horizontal Timeline
        </h2>
        <div className="relative flex items-center justify-between">
          {/* Timeline steps */}
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={variants}
            >
              {/* Circle */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full z-10 relative">
                {step.id}
              </div>
              {/* Connecting line */}
              {index < timelineSteps.length - 1 && (
                <div className="w-24 h-1 bg-gray-300"></div>
              )}
              {/* Step content */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
