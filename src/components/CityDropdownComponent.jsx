import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CityDropdownComponent = ({ onCityChange }) => {
  // const apiEndpoint = 'http://127.0.0.1:5000/cities'; // Replace with the actual API endpoint for cities
  const apiEndpoint = 'https://caidam.freeddns.org/cities';

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ label: 'Paris', value: 'Paris' });

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

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    onCityChange(selectedOption.value); // Notify the parent component about the selected city
    console.log('Selected City:', selectedOption.value);
  };

  console.log('CityDropdownComponent rendered');

  return (
    <>
      {cities.length > 0 && (
        <div>
          <label htmlFor="cityDropdown">Select a City:</label>
          <Select
            id="cityDropdown"
            value={selectedCity}
            onChange={handleCityChange}
            options={cities.map(city => ({ label: `${city.city}, ${city.country}`, value: city.city }))}
          />
        </div>
      )}
    </>
  );
};

export default CityDropdownComponent;