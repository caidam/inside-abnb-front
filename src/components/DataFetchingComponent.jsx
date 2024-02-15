// DataFetchingComponent.js
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = ({ apiEndpoint, onDataFetch }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const result = await response.json();
        setData(result);
        onDataFetch(result); // Pass the data to the parent component
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint, onDataFetch]);

  return <></>; // This component doesn't render anything in the UI
};

export default DataFetchingComponent;