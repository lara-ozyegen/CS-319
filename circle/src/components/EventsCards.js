import React, { useDebugValue } from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import eventsList from './pages/eventsList';

// a class to represent all the cards
function EventsCards() {
    return (
        <div className='cards'>
            {eventsList.map((value) => (
                <CardItem src={value.src} label="YES" path="/events"
                    name = {value.name} location = {value.location} date = {value.date}
                    tags = {value.tags} description = {value.description}/>                        
                    ))}
        </div>
    );
}

export default EventsCards;
