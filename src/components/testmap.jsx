import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import redDot from '../assets/red-dot.png';
import blueDot from '../assets/blue-dot.png';
import greenDot from '../assets/green-dot.png';
import blackDot from '../assets/black-dot.png';
import "./styles/MapComponentStyle.css";

import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const redIcon = new Icon({ iconUrl: redDot, iconSize: [16, 16] });
const blueIcon = new Icon({ iconUrl: blueDot, iconSize: [16, 16] });
const greenIcon = new Icon({ iconUrl: greenDot, iconSize: [16, 16] });
const blackIcon = new Icon({ iconUrl: blackDot, iconSize: [16, 16] });

const getCustomIcon = (roomType) => {
  switch (roomType) {
    case 'Entire home/apt':
      return redIcon;
    case 'Shared room':
      return blueIcon;
    case 'Private room':
      return greenIcon;
    case 'Hotel room':
      return blackIcon;
    // Add more cases for other room types and icons
    default:
      return redIcon;
  }
};

const MapComponent = ({ selectedCity, selectedNeighbourhood }) => {
  const baseApiEndpoint = 'https://caidam.freeddns.org';
  const [mapCenter, setMapCenter] = useState([48.8588897, 2.3200410217200766]);
  const [markers, setMarkers] = useState([]);

  // Add a new state variable for tracking loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetMapCenter = async () => {
      setIsLoading(true); // Set loading to true at the start
      
      const controller = new AbortController();
      const signal = controller.signal;
  
      const mapEndpoint = `${baseApiEndpoint}/city/${encodeURIComponent(selectedCity)}`;
      try {
        const mapResponse = await fetch(mapEndpoint, { signal });
        const mapData = await mapResponse.json();
  
        if (mapData.length > 0) {
          const selectedCityData = mapData[0];
          setMapCenter([selectedCityData.latitude, selectedCityData.longitude]);
        } else {
          setMapCenter([48.8588897, 2.3200410217200766]);
        }
      } catch (mapError) {
        if (!signal.aborted) {
          console.error('Error fetching map coordinates:', mapError);
          setMapCenter([48.8588897, 2.3200410217200766]);
        }
      }
  
      let markersEndpoint = `${baseApiEndpoint}/markers/${encodeURIComponent(selectedCity)}`;
      if (selectedNeighbourhood && selectedNeighbourhood !== 'Total') {
        markersEndpoint += `/${encodeURIComponent(selectedNeighbourhood)}`;
      }
  
      try {
        const markersResponse = await fetch(markersEndpoint, { signal });
        const markersData = await markersResponse.json();
        if (!signal.aborted) {
          setMarkers(markersData);
        }
      } catch (markersError) {
        if (!signal.aborted) {
          console.error('Error fetching markers:', markersError);
          setMarkers([]);
        }
      }
      
      setIsLoading(false); // Set loading to false once data has been fetched
      
      return () => {
        controller.abort();
      };

    };
  
    fetchDataAndSetMapCenter();
  }, [selectedCity, selectedNeighbourhood, baseApiEndpoint]);

  console.log('Map Component Rendered');

return (
  <>
      {isLoading && (
        <div className="map-overlay">
          {/* <div className="loading-overlay">Loading...</div> */}
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}

    <MapContainer className='markercluster-map' center={mapCenter} zoom={13}>
      <ChangeView center={mapCenter} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup >

        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={getCustomIcon(marker.room_type)}
          >
            <Popup className='customPopup'>
                  <div className='popUpdiv'>
                    <div className='popUpTop'>
                      <h3>
                        <a className='popup-link' href=''>{marker.name}</a> by
                      </h3>
                      <h3>
                        <a className='popup-link' href=''>{marker.host_name}</a>
                      </h3>
                      <p style={{ display: 'flex', alignItems: 'center' }} >
                        <img
                          src={getCustomIcon(marker.room_type).options.iconUrl}
                          alt='Room Type Icon'
                          style={{ width: '16px', marginRight: '5px', verticalAlign: 'middle' }}
                        />
                        - {marker.room_type} | {marker.neighbourhood}
                      </p>
                    </div>
                    <div className='popUpBottom'>
                      <p>{marker.number_of_reviews_ltm} reviews last yr ({marker.reviews_per_month} reviews per month)</p>
                      <p>@{marker.price} per night, {marker.minimum_nights} min nights</p>
                      <p>{marker.host_name} has {marker.calculated_host_listings_count} listing(s) on Airbnb in this region</p>
                    </div>
                  </div>
            </Popup>
          </Marker>
        ))}

      </MarkerClusterGroup >
    </MapContainer>
  </>
);
};

export default MapComponent;