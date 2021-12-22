import React from 'react';
import '../../App.css';
import EventsCards from '../EventsCards';
import ClubsCards from '../ClubsCards';
import Clubs from './Clubs';
import './PageStyles.css';


// homepage
function Homepage() {
    return(
    <>

    <div class="titlebar">
        <h1>Welcome to Circle.</h1>
    </div>
    
    <h2 className='Recommended'>Recommended Events for You</h2>
    <hr />
    <EventsCards/>

    <h2 id='secondTitle'>My Clubs</h2>
    <hr />
    <ClubsCards/>
            
    </>
    );
}

export default Homepage;