// NeighbourhoodDropdownComponent.jsx
import React, { useState, useEffect } from 'react';

const NeighbourhoodDropdownComponent = ({ selectedCity = 'Paris', onNeighbourhoodChange }) => {
  const [Neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('Total'); // Set default selected neighbourhood to empty string

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

  const handleNeighbourhoodChange = (event) => {
    const selectedNeighbourhood = event.target.value;
    setSelectedNeighbourhood(selectedNeighbourhood);
    onNeighbourhoodChange(selectedNeighbourhood);
    console.log('Selected Neighbourhood:', selectedNeighbourhood);
  };

  console.log('NeighbourhoodDropdownComponent rendered');

  return (
    <>
      {Neighbourhoods.length > 0 && (
        <div>
          <label htmlFor="NeighbourhoodDropdown">Select a Neighbourhood:</label>
          <select id="NeighbourhoodDropdown" value={selectedNeighbourhood} onChange={handleNeighbourhoodChange}>
        {/*  <option value="" disabled>Select a neighbourhood</option> {/* Add this line */}
            {Neighbourhoods.map((Neighbourhood) => (
              <option key={Neighbourhood.id} value={Neighbourhood.neighbourhood}>
                {Neighbourhood.neighbourhood}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default NeighbourhoodDropdownComponent;