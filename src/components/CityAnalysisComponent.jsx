import React, { useContext } from 'react';
import { CityKpisContext } from './CityKpisContext';

export default function CityAnalysisComponent() {
  const cityKpis = useContext(CityKpisContext);

  return (
    <div>
        <p> {cityKpis.city} </p>
    </div>
  )
}