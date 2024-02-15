import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const NeighbourhoodDropdownComponent = ({ selectedCity = 'Paris', onNeighbourhoodChange }) => {
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = `https://caidam.freeddns.org/neighbourhoods/${encodeURIComponent(selectedCity)}`;

      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setNeighbourhoods(data);
      } catch (error) {
        console.error('Error fetching Neighbourhood data:', error);
      }
    };

    fetchData();
  }, [selectedCity]);

  const handleNeighbourhoodChange = (selectedOption) => {
    setSelectedNeighbourhood(selectedOption);
    onNeighbourhoodChange(selectedOption.value);
    console.log('Selected Neighbourhood:', selectedOption.value);
  };

  console.log('NeighbourhoodDropdownComponent rendered');

  return (
    <>
      {neighbourhoods.length > 0 && (
        <div>
          <label htmlFor="NeighbourhoodDropdown">Select a Neighbourhood:</label>
          <Select
            id="NeighbourhoodDropdown"
            value={selectedNeighbourhood}
            onChange={handleNeighbourhoodChange}
            options={neighbourhoods.map((neighbourhood) => ({
              label: neighbourhood.neighbourhood,
              value: neighbourhood.neighbourhood,
            }))}
          />
        </div>
      )}
    </>
  );
};

export default NeighbourhoodDropdownComponent;