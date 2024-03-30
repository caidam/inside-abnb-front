import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';

const TestFetchComponent = () => {
  const apiEndpoint = `${import.meta.env.VITE_APP_API_BASE_URL}/cities`; // Replace with your actual API endpoint

  return (
    <>
      <DataFetchingComponent apiEndpoint={apiEndpoint} onDataFetch={(data) => console.log('Data received:', data)} />
    </>
  );
};

export default TestFetchComponent;