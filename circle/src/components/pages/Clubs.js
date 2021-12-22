import React from 'react';
import '../../App.css';
import './PageStyles.css';
import clubsList from './clubsList.js'
import ClubsCards from '../ClubsCards';
import FilteringComponent from '../FilteringComponent';

// homepage
export default function Clubs() {
    return(
    <>  
    <div class="titlebar">
        <li>
            <h1>Clubs</h1>
        </li>
        <FilteringComponent></FilteringComponent>
    </div>

    <h2>All Clubs</h2>
    <hr />
    <ClubsCards ></ClubsCards>
    
    </>
    );
}