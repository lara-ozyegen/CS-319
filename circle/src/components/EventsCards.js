import React, { useDebugValue } from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import {items2} from './pages/eventsList';

// a class to represent all the cards
function EventsCards() {
    console.log(items2);
    return (
        <div className='cards'>
            {items2.map((value) => (
                <CardItem src={value.src} label="YES" path="/events"
                    name = {value.name} location = {value.location} date = {value.date}
                    tags = {value.tags} description = {value.description}/>                        
                    ))}
        </div>
    );
}

export default EventsCards;
