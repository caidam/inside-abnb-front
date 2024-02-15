import React, { useContext } from 'react';
import { CityKpisContext } from './CityKpisContext';
import KpiSectionComponent from './KpiSectionComponent';
import { HBarChartComponent } from './HBarChartComponent';
import DonutChartComponent from './DonutChartComponent';
import BarChartComponent from './BarChartComponent';

export default function CityAnalysisComponent() {
  const cityKpis = useContext(CityKpisContext);

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
            <p>{cityKpis.entire_home_apt_proportion}%</p>
            <p>entire homes/apartments</p>

            <p>{cityKpis.entire_home_apt} ({cityKpis.entire_home_apt_proportion}%)</p>
            <p>entire home/apartments</p>

            <p>{cityKpis.private_rooms} ({cityKpis.private_rooms_proportion}%)</p>
            <p>private rooms</p>

            <p>{cityKpis.shared_rooms} ({cityKpis.shared_rooms_proportion}%)</p>
            <p>shared rooms</p>

            <p>{cityKpis.hotel_rooms} ({cityKpis.hotel_rooms_proportion}%)</p>
            <p>hotel rooms</p>
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
            <p>{cityKpis.average_nights_booked}</p>
            <p>average nights booked</p>

            <p>{cityKpis.price_per_night} (in local currency)</p>
            <p>price/nights</p>

            <p>{cityKpis.average_income} (in local currency)</p>
            <p>average income</p>
          </div>
        }
        graph={<div>Graph 1</div>}
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
            <p>{cityKpis.unlicensed_proportion}%</p>
            <p>unlicensed</p>

            <p>{cityKpis.unlicensed} ({cityKpis.unlicensed_proportion}%)</p>
            <p>unlicensed</p>

            <p>{cityKpis.licensed} ({cityKpis.licensed_proportion}%)</p>
            <p>licensed</p>

            <p>{cityKpis.exempt} ({cityKpis.exempt_proportion}%)</p>
            <p>exempt</p>

            <p>{cityKpis.pending} ({cityKpis.pending_proportion}%)</p>
            <p>pending</p>
          </div>
        }
        graph={<div>
          <BarChartComponent 
          
          labels = {['unlicensed', 'licensed', 'exempt', 'pending']} 
          colors = {['#0d6efd', '#afc6e8', '#fd7e14', '#ffc107']}
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
            <p>{cityKpis.short_term_rentals_proportion}%</p>
            <p>short-term rentals</p>

            <p>{cityKpis.short_term_rentals} ({cityKpis.short_term_rentals_proportion}%)</p>
            <p>short-term rentals</p>

            <p>{cityKpis.longer_term_rentals} ({cityKpis.longer_term_rentals_proportion}%)</p>
            <p>longer-term rentals</p>
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
            <p>TBC {}%</p>
            <p>multi-listings</p>

            <p>TBC {} ({}%)</p>
            <p>single listings</p>

            <p>TBC {} ({}%)</p>
            <p>multi-listings</p>
          </div>
        }
        graph={<div>Graph 1</div>}
      />
      <KpiSectionComponent
        title="Top Hosts"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
        kpis={<div>KPIs 1</div>}
        graph={<div>Graph 1</div>}
      />
    </div>

  )
}