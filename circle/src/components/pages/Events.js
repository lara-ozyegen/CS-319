import React from 'react';
import '../../App.css';
import './PageStyles.css';
import EventsCards from '../EventsCards';
import FilteringComponent from '../FilteringComponent';
//import eventsList from './eventsList';
import {items2} from './eventsList';

// Events
export default function Events() {
    return(
    <> 
    <div class="titlebar">
    <li>
        <h1>Events</h1>
    </li>
        <FilteringComponent eventsList = {items2}></FilteringComponent>
    </div>

    <h2>This Week</h2>
    <hr />
    <EventsCards eventsList = {items2}/>

    <h2 id="secondTitle">Next Week</h2>
    <hr />
    <EventsCards eventsList = {items2}/>

    </>
    );
}