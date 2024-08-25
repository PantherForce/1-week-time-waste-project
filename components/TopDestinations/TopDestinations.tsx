// components/TopDestinations.tsx

import React from "react";
import ContentContainer from "../../components/Structure/ContentContainer";

const TopDestinations: React.FC = () => {
  const destinations = [
    {
      location: "Rome, Italy",
      days: "10 Days Trip",
      price: "$5.42k",
      image: "rome.jpg",
    },
    {
      location: "London, UK",
      days: "12 Days Trip",
      price: "$4.2k",
      image: "london.jpg",
    },
    {
      location: "Full Europe",
      days: "28 Days Trip",
      price: "$15k",
      image: "europe.jpg",
    },
  ];

  return (
    <section className="py-16">
      <ContentContainer>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* <img
                src={destination.image}
                alt={destination.location}
                className="w-full h-64 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {destination.location}
                </h3>
                <p className="text-gray-600 mt-2">{destination.days}</p>
                <p className="text-orange-500 mt-4 text-lg font-bold">
                  {destination.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default TopDestinations;
