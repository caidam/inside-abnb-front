import React, { useContext } from 'react';
import { CityKpisContext } from './CityKpisContext';

export default function MainKpisComponent() {
  const cityKpis = useContext(CityKpisContext);

  return (
    <div>
      <p> {cityKpis.total_listings}</p>
      <p> out of {cityKpis.total_listings_city} listings ({cityKpis.listing_proportion}%) </p>
    </div>
  )
}