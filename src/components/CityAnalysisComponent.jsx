import React, { useContext } from 'react';
import { CityKpisContext } from './CityKpisContext';
import KpiSectionComponent from './KpiSectionComponent';
import { HBarChartComponent } from './HBarChartComponent';
import DonutChartComponent from './DonutChartComponent';
import BarChartComponent from './BarChartComponent';
import DataTable from './DataTable';
import "./styles/CityAnalysisComponent.css";

export default function CityAnalysisComponent() {
  const cityKpis = useContext(CityKpisContext);


  const baseApiEndpoint = "https://caidam.freeddns.org/"

  let hostsEndpoint = `${baseApiEndpoint}/top_hosts/${encodeURIComponent(cityKpis.city)}`;
  if (cityKpis.neighbourhood && cityKpis.neighbourhood !== 'Total') {
    hostsEndpoint += `/${encodeURIComponent(cityKpis.neighbourhood)}`;
  }

  return (
      <div className="RSContent">
      <KpiSectionComponent
        title="Room Type"
        text={
          <div>
            <p>Airbnb hosts can list entire homes/apartments, private, shared rooms, and more recently hotel rooms.</p>
            <p>-</p>
            <p>Depending on the room type and activity, a residential Airbnb listing could be more like a hotel, disruptive for neighbors, taking away housing, and illegal.</p>
          </div>
        }
        kpis={
          <div>
            <p className='mainkpi'
            >{cityKpis.entire_home_apt_proportion}%</p>
            <p className='subheading'
            >entire homes/apartments</p>

            <p className='subkpi'
            >{cityKpis.entire_home_apt} ({cityKpis.entire_home_apt_proportion}%)</p>
            <p
              className='subheading'
            >entire home/apartments</p>

            <p className='subkpi'
            >{cityKpis.private_rooms} ({cityKpis.private_rooms_proportion}%)</p>
            <p
              className='subheading'
            >private rooms</p>

            <p className='subkpi'>{cityKpis.shared_rooms} ({cityKpis.shared_rooms_proportion}%)</p>
            <p className='subheading'>shared rooms</p>

            <p className='subkpi'>{cityKpis.hotel_rooms} ({cityKpis.hotel_rooms_proportion}%)</p>
            <p className='subheading'>hotel rooms</p>
          </div>
        }
        graph={<div> 
            <HBarChartComponent data={[cityKpis.entire_home_apt, cityKpis.private_rooms, cityKpis.shared_rooms, cityKpis.hotel_rooms]}/> 
        </div>}
      />
      {/* Repeat for other subsections */}
      <KpiSectionComponent
        title="Activity"
        text={
          <div>
            <p>The minimum stay, price and number of reviews have been used to estimate the the number of nights booked and the income for each listing, for the last 12 months.</p>
            <p>-</p>
            <p>Is the home, apartment or room rented frequently and displacing units of housing and residents? Does the income from Airbnb incentivise short-term rentals vs long-term housing?</p>`
          </div>
        }
        kpis={
          <div>
            <p className='mainkpi'>{cityKpis.average_nights_booked}</p>
            <p className='subheading'>average nights booked</p>

            <p className='subkpi'>{cityKpis.price_per_night} (in local currency)</p>
            <p className='subheading'>price/nights</p>

            <p className='subkpi'>{cityKpis.average_income} (in local currency)</p>
            <p className='subheading'>average income</p>
          </div>
        }
        graph={
          <div>

            <BarChartComponent 
            
            labels = {['0', '1-60', '60-120', '120-180', '180-240', '240+']} 
            colors = {['#0058b7', '#0058b7', '#0058b7', '#0058b7', '#0058b7', '#0058b7']}
            values = {[cityKpis.avilability_0, cityKpis.avilability_1_60, cityKpis.avilability_60_120, cityKpis.avilability_120_180, cityKpis.avilability_180_240, cityKpis.avilability_240p]}
            />
          </div>}
      />
      <KpiSectionComponent
        title="Licenses"
        text={
          <div>
            <p>According to the law, specific short-term rentals require a license.</p>
            <p>-</p>
            <p>How many listings are unlicensed, falsely claiming exemptions, and how many do Airbnb continue to advertise and profit from?</p>
          </div>
        }
        kpis={
          <div>
            <p className='mainkpi'>{cityKpis.unlicensed_proportion}%</p>
            <p className='subheading'>unlicensed</p>

            <p className='subkpi'>{cityKpis.unlicensed} ({cityKpis.unlicensed_proportion}%)</p>
            <p className='subheading'>unlicensed</p>

            <p className='subkpi'>{cityKpis.licensed} ({cityKpis.licensed_proportion}%)</p>
            <p className='subheading'>licensed</p>

            <p className='subkpi'>{cityKpis.exempt} ({cityKpis.exempt_proportion}%)</p>
            <p className='subheading'>exempt</p>

            <p className='subkpi'>{cityKpis.pending} ({cityKpis.pending_proportion}%)</p>
            <p className='subheading'>pending</p>
          </div>
        }
        graph={<div>
          <BarChartComponent 
          
          labels = {['unlicensed', 'licensed', 'exempt', 'pending']} 
          colors = {['#0d6efd', '#afc6e8', '#afc6e8', '#afc6e8']}
          values = {[cityKpis.unlicensed, cityKpis.licensed, cityKpis.exempt, cityKpis.pending]}
          />
        </div>}
      />
      <KpiSectionComponent
        title="Short-Term Rentals"
        text={
          <div>
            <p>The housing policies of cities and towns can be restrictive of short-term rentals, to protect housing for residents.</p>
            <p>-</p>
            <p>By looking at the "minimum nights" setting for listings, we can see if the market has shifted to longer-term stays. Was it to avoid regulations, or in response to changes in travel demands?</p>
            <p>-</p>
            <p>In some cases, Airbnb has moved large numbers of their listings to longer-stays to avoid short-term rental regulations and accountability.</p>
          </div>
        }
        kpis={
          <div>
            <p className='mainkpi'>{cityKpis.short_term_rentals_proportion}%</p>
            <p className='subheading'>short-term rentals</p>

            <p className='subkpi'>{cityKpis.short_term_rentals} ({cityKpis.short_term_rentals_proportion}%)</p>
            <p className='subheading'>short-term rentals</p>

            <p className='subkpi'>{cityKpis.longer_term_rentals} ({cityKpis.longer_term_rentals_proportion}%)</p>
            <p className='subheading'>longer-term rentals</p>
          </div>
        }
        graph={<div>

          <DonutChartComponent 
          
          labels = {['Short-term rentals', 'Longer-term rentals']} 
          colors = {['#0d6efd', '#afc6e8']}
          values = {[cityKpis.short_term_rentals, cityKpis.longer_term_rentals]}
          />
          
        </div>}
      />
      <KpiSectionComponent
        title="Listings per Host"
        text={
          <div>
            <p>Some Airbnb hosts have multiple listings.</p>
            <p>-</p>
            <p>A host may list separate rooms in the same apartment, or multiple apartments or homes available in their entirity.</p>
            <p>-</p>
            <p>Hosts with multiple listings are more likely to be running a business, are unlikely to be living in the property, and in violation of most short term rental laws designed to protect residential housing.</p>
        </div>
        }
        kpis={
          <div>
            <p className='mainkpi'>{cityKpis.multiple_listings_proportion}%</p>
            <p className='subheading'>multi-listings</p>

            <p className='subkpi'>{cityKpis.single_listings} ({cityKpis.single_listings_proportion}%)</p>
            <p className='subheading'>single listings</p>

            <p className='subkpi'>{cityKpis.multiple_listings} ({cityKpis.multiple_listings_proportion}%)</p>
            <p className='subheading'>multi-listings</p>
          </div>
        }
        graph={
          <div>
          <BarChartComponent 
          
          labels = {['1', '2-10', '10-20', '20-30', '30+']} 
          colors = {['#0d6efd', '#0058b7', '#4281ef', '#91a8fa', '#dc3545']}
          values = {[cityKpis.single_listings, cityKpis.listings_2_10, cityKpis.listings_10_20, cityKpis.listings_20_30, cityKpis.listings_30p]}
          />
          </div>}
      />

      <KpiSectionComponent
        title="Top Hosts"
        text=""
        kpis={<div></div>}
        graph={<div>
          <DataTable apiUrl={hostsEndpoint} />
        </div>}
      />
    </div>

  )
}