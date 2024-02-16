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


      <div className='RightSection'>
        <div className='RSTitle' 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px', 
          color: '#4b4b4b'
        }}>
          <div style={{ marginRight: '30px', width: '300px' }}>
          <CityDropdownComponent onCityChange={handleCityChange} style={{width: '100%'}}/>
            
          <NeighbourhoodDropdownComponent selectedCity={selectedCity} onNeighbourhoodChange={handleNeighbourhoodChange} style={{width: '100%'}}/>
          </div>

          <MainKpisComponent/>

        </div>
          <CityAnalysisComponent/>
      </div>
      <div className='map-component'><MapComponent selectedCity={selectedCity} selectedNeighbourhood={selectedNeighbourhood}/></div>
    </CityKpisProvider>
  )
}

export default App