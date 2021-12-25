import React from 'react';
import '../../../App.css';
import EventsCards from '../../EventsCards';
import ClubsCards from '../../ClubsCards';
import '../circle-students/PageStyles.css';


// homepage
function HomepageClubs() {
    return(
    <>

    <div class="titlebar">
        <h1>Welcome to Circle for Clubs</h1>
    </div>
    
    <h2 className='next'>Upcoming Events of the Club</h2>
    <hr />
    <EventsCards/>

    <h2 id='secondTitle'>Discover</h2>
    <hr />
    <ClubsCards/>
            
    </>
    );
}

export default HomepageClubs;