import React, { useDebugValue } from 'react'
import ClubCardItem from './ClubCardItem'
import "./Cards.css"
import clubsList from './pages/circle-students/clubsList';

// a class to represent all the cards
function ClubsCards() {
    return (
        <div className='cards'>
            {clubsList.map((value) => (
                <ClubCardItem src={value.src} label="YES" path="/events"
                    name = {value.name} tags = {value.tags} description = {value.description}/>                       
                    ))}
        </div>
    );
}

export default ClubsCards;
