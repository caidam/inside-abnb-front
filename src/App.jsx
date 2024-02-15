import './App.css';
import React, { useState } from 'react';
import CityDropdownComponent from './components/CityDropdownComponent';
import MapComponent from './components/MapComponent';
import NavBarComponent from './components/NavBarComponent';
import NeighbourhoodDropdownComponent from './components/NeighbourhoodDropdownComponent';
import MainKpisComponent from './components/MainKpisComponent';
import { CityKpisProvider } from './components/CityKpisProvider';
import CityAnalysisComponent from './components/CityAnalysisComponent';

function App() {
  const [selectedCity, setSelectedCity] = useState('Paris');
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedNeighbourhood('Total');
  };

  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('Total');

  const handleNeighbourhoodChange = (neighbourhood) => {
    setSelectedNeighbourhood(neighbourhood);
  };

  return (
    <CityKpisProvider selectedCity={selectedCity} selectedNeighbourhood={selectedNeighbourhood}>
      <div className='navbar-component'><NavBarComponent/></div>

      <div><MapComponent selectedCity={selectedCity} selectedNeighbourhood={selectedNeighbourhood}/></div>

      <div className='RightSection'>
        <div className='RSTitle'>

          <CityDropdownComponent onCityChange={handleCityChange}/>
          <NeighbourhoodDropdownComponent selectedCity={selectedCity} onNeighbourhoodChange={handleNeighbourhoodChange}/>

          <MainKpisComponent/>

        </div>
        <div className='RSContent'>
          <CityAnalysisComponent/>
        </div>
      </div>
    </CityKpisProvider>
  )
}

export default App