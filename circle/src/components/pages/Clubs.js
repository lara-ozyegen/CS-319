import React from 'react';
import '../../App.css';
import './PageStyles.css';

const Clubs = () => { 
    return(
    <>  
    <div class="titlebar">
        <li>
            <h1>Clubs</h1>
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
export default Clubs;