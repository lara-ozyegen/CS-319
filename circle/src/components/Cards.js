import React, { useDebugValue } from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import eventsList from './pages/eventsList';

// a class to represent all the cards
function Cards() {
    return (
        <div className='cards'>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                    {eventsList.map((value) => (
                        <CardItem src={value.src} label="YES" path="/events"
                        name = {value.name} location = {value.location} date = {value.date}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
