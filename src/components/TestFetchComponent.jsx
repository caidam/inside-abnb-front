import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';

const TestFetchComponent = () => {
  const apiEndpoint = 'https://caidam.freeddns.org/cities'; // Replace with your actual API endpoint

  return (
    <>
      <DataFetchingComponent apiEndpoint={apiEndpoint} onDataFetch={(data) => console.log('Data received:', data)} />
    </>
  );
};

export default TestFetchComponent;