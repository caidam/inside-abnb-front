// CityDropdownComponent.jsx
import React, { useState, useEffect } from 'react';

const CityDropdownComponent = ({ onCityChange }) => {
  //const apiEndpoint = 'http://127.0.0.1:5000/cities'; // Replace with the actual API endpoint for cities
  const apiEndpoint = 'https://caidam.freeddns.org/cities';
  
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Paris');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    onCityChange(selectedCity); // Notify the parent component about the selected city
    console.log('Selected City:', selectedCity);
  };

  console.log('CityDropdownComponent rendered');

  return (
    <>

      {cities.length > 0 && (
        <div>
          <label htmlFor="cityDropdown">Select a City:</label>
          <select id="cityDropdown" value={selectedCity} onChange={handleCityChange}>
            <option value="" disabled>Select a city</option>
            {cities.map((city) => (
              <option key={city.id} value={city.city}>
                {city.city}, {city.country}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default CityDropdownComponent;