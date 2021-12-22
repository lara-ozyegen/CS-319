import React from 'react';
import '../../App.css';
import './PageStyles.css';
import Cards from '../Cards';
import FilteringComponent from '../FilteringComponent'
import events from './eventsList.js';
import EventsGrid from '../EventsGrid'

// bu çalışmıyo şimdilik -> invalid hooks
// <FilteringComponent tags={ events }></FilteringComponent>
// <EventsGrid items={events}></EventsGrid>

// Events
const Events = () => {
    return(
    <> 
    <div class="titlebar">
    <li>
        <h1>Events</h1>
    </li>
        
        <div class="search">
            <li><input type="text" placeholder="Search..."/></li>
            <li><button class="filterButton"> Filter </button></li>
           
        </div>
    </div>
        
    <h2>This Week</h2>
    <hr />
    <EventsGrid items={events}></EventsGrid>
    <Cards/>
    <h2 id="secondTitle">Next Week</h2>
    <hr />
    <Cards/>

    </>
    );
}
export default Events;