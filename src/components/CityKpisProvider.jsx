import React, { useEffect, useState } from 'react';
import { CityKpisContext } from './CityKpisContext';

export function CityKpisProvider({ children, selectedCity, selectedNeighbourhood }) {
  const baseApiEndpoint = 'https://caidam.freeddns.org';
  
  const [cityKpis, setCityKpis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      let cityKpisEndpoint = `${baseApiEndpoint}/city_kpis/${encodeURIComponent(selectedCity)}/${encodeURIComponent(selectedNeighbourhood)}`;

      console.log(`endpoint : ${cityKpisEndpoint}`)
      try {
        const cityKpisResponse = await fetch(cityKpisEndpoint, { signal });
        const cityKpisData = await cityKpisResponse.json();
        if (!signal.aborted) {
          setCityKpis(cityKpisData[0]);
        }
      } catch (cityKpisError) {
        if (!signal.aborted) {
          console.error('Error fetching cityKpis:', cityKpisError);
          setCityKpis([]);
        }
      }

      return () => {
        controller.abort();
      };
    };

    fetchData();
  }, [selectedCity, selectedNeighbourhood, baseApiEndpoint]);

  return (
    <CityKpisContext.Provider value={cityKpis}>
      {children}
    </CityKpisContext.Provider>
  );
}