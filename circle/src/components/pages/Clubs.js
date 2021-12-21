import React from 'react';
import '../../App.css';
import './PageStyles.css';


// homepage
export default function Clubs() {
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

    <h2>All Clubs</h2>
    <hr />
    
    </>
    );
}