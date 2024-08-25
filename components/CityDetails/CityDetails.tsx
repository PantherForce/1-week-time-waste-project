import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCityDetailsFromAPI } from "../../utils/fetchCityDetailsFromAPI"; // Adjust the import path as needed

const CityDetails: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const [cityDetails, setCityDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchCityDetailsFromAPI(city);
        setCityDetails(details);
      } catch (err) {
        setError("Failed to fetch city details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">City Details for {city}</h1>
      {cityDetails ? (
        <div>
          <p>
            <strong>Square Footage:</strong> {cityDetails.squareFootage}
          </p>
          <p>
            <strong>Total Population:</strong> {cityDetails.population}
          </p>
          <p>
            <strong>Total Tourism Places:</strong> {cityDetails.tourismPlaces}
          </p>
        </div>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
};

export default CityDetails;
