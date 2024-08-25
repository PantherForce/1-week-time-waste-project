// components/BestServices.tsx

import React from "react";
import ContentContainer from "../../components/Structure/ContentContainer";

const BestServices: React.FC = () => {
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "🌦️",
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      icon: "✈️",
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferred to men it engrossed listening.",
      icon: "🎤",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <ContentContainer>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default BestServices;
