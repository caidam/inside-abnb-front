import React, { useContext } from 'react';
import { CityKpisContext } from './CityKpisContext';

export default function MainKpisComponent() {
  const cityKpis = useContext(CityKpisContext);

  return (
    <div>
    <p 
    style ={{
      'fontFamily': 'Lato,sans-serif',
      'fontSize': '2.7em',
      'fontWeight': 900,
      'lineHeight': '1em',
      'paddingBottom': 0,
      'paddingTop': 0,
      'color': '#4b4b4b',
      'textAlign': 'right'
    }}
    
    > {cityKpis.total_listings}</p>
    <p
    style = {{    
      'fontSize': '.8em',
      'marginTop': '2px',
      'textAlign': 'right',
      'color': '#4b4b4b'
    }}

    > out of <strong>{cityKpis.total_listings_city}</strong> listings ({cityKpis.listing_proportion}%)  </p>
    </div>
  )
}