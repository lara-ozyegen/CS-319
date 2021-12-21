import React from 'react';
import '../../App.css';
import './PageStyles.css';
import Cards from '../Cards';


// Events
export default function Events() {
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
    <Cards/>

    <h2 id="secondTitle">Next Week</h2>
    <hr />
    <Cards/>

    </>
    );
}