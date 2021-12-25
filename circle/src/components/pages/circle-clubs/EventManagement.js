import React from 'react';
import '../../../App.css';
import './PageStylesClub.css';
import EventsCards from '../../EventsCards'

// Events
export default function EventManagement() {
    return(
        <>
    
        <div class="titlebar">
            <h1>Event Management</h1>
            <button class="editButton">Edit Events</button>
        </div>
        
        <h2 className='next'>Next Events</h2>
        <hr />
        <EventsCards></EventsCards>
    
        <h2 id='secondTitle'>Past Events</h2>
        <hr />
        <EventsCards></EventsCards>
                
        </>
        );
}